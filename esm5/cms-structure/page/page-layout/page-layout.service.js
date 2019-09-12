/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, isDevMode, Optional } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
import { LayoutConfig, } from '../../../layout/config/layout-config';
import { PAGE_LAYOUT_HANDLER } from './page-layout-handler';
var PageLayoutService = /** @class */ (function () {
    function PageLayoutService(cms, config, breakpointService, handlers) {
        this.cms = cms;
        this.config = config;
        this.breakpointService = breakpointService;
        this.handlers = handlers;
        // we print warn messages on missing layout configs
        // only once to not polute the console log
        this.warnLogMessages = {};
        this.logSlots = {};
    }
    /**
     * @param {?=} section
     * @return {?}
     */
    PageLayoutService.prototype.getSlots = /**
     * @param {?=} section
     * @return {?}
     */
    function (section) {
        var _this = this;
        return combineLatest([this.page$, this.breakpointService.breakpoint$]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), page = _b[0], breakpoint = _b[1];
            /** @type {?} */
            var pageTemplate = page.template;
            /** @type {?} */
            var slots = _this.resolveSlots(page, section, breakpoint);
            return { slots: slots, pageTemplate: pageTemplate, breakpoint: breakpoint };
        })), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var e_1, _b;
            var slots = _a.slots, pageTemplate = _a.pageTemplate, breakpoint = _a.breakpoint;
            /** @type {?} */
            var result = of(slots);
            try {
                for (var _c = tslib_1.__values(_this.handlers || []), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var handler = _d.value;
                    result = handler.handle(result, pageTemplate, section, breakpoint);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return result;
        })), distinctUntilChanged((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            if (a.length !== b.length) {
                return false;
            }
            for (var i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) {
                    return false;
                }
            }
            return true;
        })));
    };
    /**
     * @private
     * @param {?} page
     * @param {?} section
     * @param {?} breakpoint
     * @return {?}
     */
    PageLayoutService.prototype.resolveSlots = /**
     * @private
     * @param {?} page
     * @param {?} section
     * @param {?} breakpoint
     * @return {?}
     */
    function (page, section, breakpoint) {
        /** @type {?} */
        var config = this.getSlotConfig(page.template, 'slots', section, breakpoint);
        if (config && config.slots) {
            /** @type {?} */
            var pageSlots_1 = Object.keys(page.slots);
            return config.slots.filter((/**
             * @param {?} slot
             * @return {?}
             */
            function (slot) { return pageSlots_1.includes(slot); }));
        }
        else if (!section) {
            this.logMissingLayoutConfig(page);
            return Object.keys(page.slots);
        }
        else {
            this.logMissingLayoutConfig(page, section);
            return [];
        }
    };
    Object.defineProperty(PageLayoutService.prototype, "page$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.cms.getCurrentPage().pipe(filter((/**
             * @param {?} page
             * @return {?}
             */
            function (page) { return !!page; })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageLayoutService.prototype, "templateName$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.page$.pipe(filter((/**
             * @param {?} page
             * @return {?}
             */
            function (page) { return !!page.template; })), map((/**
             * @param {?} page
             * @return {?}
             */
            function (page) { return page.template; })));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * load slots from the layout configuration. The breakpoint is used
     * to load a specific configuration for the given breakpoint. If there's
     * no configuration available for the given breakpoint the default slot
     * configuration is returned.
     */
    /**
     * load slots from the layout configuration. The breakpoint is used
     * to load a specific configuration for the given breakpoint. If there's
     * no configuration available for the given breakpoint the default slot
     * configuration is returned.
     * @protected
     * @param {?} templateUid
     * @param {?} configAttribute
     * @param {?=} section
     * @param {?=} breakpoint
     * @return {?}
     */
    PageLayoutService.prototype.getSlotConfig = /**
     * load slots from the layout configuration. The breakpoint is used
     * to load a specific configuration for the given breakpoint. If there's
     * no configuration available for the given breakpoint the default slot
     * configuration is returned.
     * @protected
     * @param {?} templateUid
     * @param {?} configAttribute
     * @param {?=} section
     * @param {?=} breakpoint
     * @return {?}
     */
    function (templateUid, configAttribute, section, breakpoint) {
        if (!this.config.layoutSlots) {
            return null;
        }
        /** @type {?} */
        var pageTemplateConfig = this.config.layoutSlots[templateUid];
        if (section) {
            return this.getSlotConfigForSection(templateUid, configAttribute, section, breakpoint);
        }
        if (pageTemplateConfig) {
            return this.getResponsiveSlotConfig((/** @type {?} */ (pageTemplateConfig)), configAttribute, breakpoint);
        }
    };
    /**
     * @protected
     * @param {?} templateUid
     * @param {?} configAttribute
     * @param {?=} section
     * @param {?=} breakpoint
     * @return {?}
     */
    PageLayoutService.prototype.getSlotConfigForSection = /**
     * @protected
     * @param {?} templateUid
     * @param {?} configAttribute
     * @param {?=} section
     * @param {?=} breakpoint
     * @return {?}
     */
    function (templateUid, configAttribute, section, breakpoint) {
        /** @type {?} */
        var pageTemplateConfig = this.config.layoutSlots[templateUid];
        if (!pageTemplateConfig) {
            return null;
        }
        // if there's no section config on the page layout
        // we fall back to the global section config
        /** @type {?} */
        var sectionConfig = pageTemplateConfig[section]
            ? pageTemplateConfig[section]
            : this.config.layoutSlots[section];
        if (!sectionConfig) {
            return null;
        }
        /** @type {?} */
        var responsiveConfig = this.getResponsiveSlotConfig((/** @type {?} */ (sectionConfig)), configAttribute, breakpoint);
        if (responsiveConfig.hasOwnProperty(configAttribute)) {
            return responsiveConfig;
        }
        else if (pageTemplateConfig[section].hasOwnProperty(configAttribute)) {
            return pageTemplateConfig[section];
        }
        else if (this.config.layoutSlots[section]) {
            return (/** @type {?} */ (this.config.layoutSlots[section]));
        }
    };
    /**
     * Returns a list of slots for a breakpoint specific configuratoin
     * If there's no specific configuration for the breakpoint,
     * the closest available configuration will be returned.
     */
    /**
     * Returns a list of slots for a breakpoint specific configuratoin
     * If there's no specific configuration for the breakpoint,
     * the closest available configuration will be returned.
     * @protected
     * @param {?} layoutSlotConfig
     * @param {?} configAttribute
     * @param {?=} breakpoint
     * @return {?}
     */
    PageLayoutService.prototype.getResponsiveSlotConfig = /**
     * Returns a list of slots for a breakpoint specific configuratoin
     * If there's no specific configuration for the breakpoint,
     * the closest available configuration will be returned.
     * @protected
     * @param {?} layoutSlotConfig
     * @param {?} configAttribute
     * @param {?=} breakpoint
     * @return {?}
     */
    function (layoutSlotConfig, configAttribute, breakpoint) {
        var e_2, _a;
        /** @type {?} */
        var slotConfig = (/** @type {?} */ (layoutSlotConfig));
        // fallback to default slot config
        if (!breakpoint) {
            return slotConfig;
        }
        // we have a config for the specific breakpoint
        if (layoutSlotConfig[breakpoint] &&
            layoutSlotConfig[breakpoint].hasOwnProperty(configAttribute)) {
            return (/** @type {?} */ (layoutSlotConfig[breakpoint]));
        }
        // find closest config
        /** @type {?} */
        var all = this.breakpointService.breakpoints;
        try {
            for (var _b = tslib_1.__values(all.splice(0, all.indexOf(breakpoint))), _c = _b.next(); !_c.done; _c = _b.next()) {
                var br = _c.value;
                if (layoutSlotConfig[br] &&
                    layoutSlotConfig[br].hasOwnProperty(configAttribute)) {
                    slotConfig = (/** @type {?} */ (layoutSlotConfig[br]));
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return slotConfig;
    };
    /**
     * In order to help developers, we print some detailed log information in
     * case there's no layout configuration available for the given page template
     * or section. Additionally, the slot positions are printed in the console
     * in a format that can be copied / paste to the configuration.
     */
    /**
     * In order to help developers, we print some detailed log information in
     * case there's no layout configuration available for the given page template
     * or section. Additionally, the slot positions are printed in the console
     * in a format that can be copied / paste to the configuration.
     * @private
     * @param {?} page
     * @param {?=} section
     * @return {?}
     */
    PageLayoutService.prototype.logMissingLayoutConfig = /**
     * In order to help developers, we print some detailed log information in
     * case there's no layout configuration available for the given page template
     * or section. Additionally, the slot positions are printed in the console
     * in a format that can be copied / paste to the configuration.
     * @private
     * @param {?} page
     * @param {?=} section
     * @return {?}
     */
    function (page, section) {
        if (!isDevMode()) {
            return;
        }
        if (!this.logSlots[page.template]) {
            // the info log is not printed in production
            // tslint:disable-next-line: no-console
            console.info("Available CMS page slots: '" + Object.keys(page.slots).join("','") + "'");
            this.logSlots[page.template] = true;
        }
        /** @type {?} */
        var cacheKey = section || page.template;
        if (!this.warnLogMessages[cacheKey]) {
            console.warn("No layout config found for " + cacheKey + ", you can configure a 'LayoutConfig' to control the rendering of page slots.");
            this.warnLogMessages[cacheKey] = true;
        }
    };
    PageLayoutService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PageLayoutService.ctorParameters = function () { return [
        { type: CmsService },
        { type: LayoutConfig },
        { type: BreakpointService },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [PAGE_LAYOUT_HANDLER,] }] }
    ]; };
    return PageLayoutService;
}());
export { PageLayoutService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PageLayoutService.prototype.warnLogMessages;
    /**
     * @type {?}
     * @private
     */
    PageLayoutService.prototype.logSlots;
    /**
     * @type {?}
     * @private
     */
    PageLayoutService.prototype.cms;
    /**
     * @type {?}
     * @private
     */
    PageLayoutService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    PageLayoutService.prototype.breakpointService;
    /**
     * @type {?}
     * @private
     */
    PageLayoutService.prototype.handlers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDbEYsT0FBTyxFQUVMLFlBQVksR0FHYixNQUFNLHNDQUFzQyxDQUFDO0FBQzlDLE9BQU8sRUFBcUIsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUvRTtJQUVFLDJCQUNVLEdBQWUsRUFDZixNQUFvQixFQUNwQixpQkFBb0MsRUFHcEMsUUFBNkI7UUFMN0IsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUdwQyxhQUFRLEdBQVIsUUFBUSxDQUFxQjs7O1FBSy9CLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFMbkIsQ0FBQzs7Ozs7SUFPSixvQ0FBUTs7OztJQUFSLFVBQVMsT0FBZ0I7UUFBekIsaUJBMEJDO1FBekJDLE9BQU8sYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlC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O1NBQ3ZDO0lBQ0gsQ0FBQzs7Z0JBbk5GLFVBQVU7Ozs7Z0JBWkYsVUFBVTtnQkFNakIsWUFBWTtnQkFITCxpQkFBaUI7NENBZXJCLFFBQVEsWUFDUixNQUFNLFNBQUMsbUJBQW1COztJQTZNL0Isd0JBQUM7Q0FBQSxBQXBORCxJQW9OQztTQW5OWSxpQkFBaUI7Ozs7OztJQVk1Qiw0Q0FBNkI7Ozs7O0lBQzdCLHFDQUFzQjs7Ozs7SUFYcEIsZ0NBQXVCOzs7OztJQUN2QixtQ0FBNEI7Ozs7O0lBQzVCLDhDQUE0Qzs7Ozs7SUFDNUMscUNBRXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBpc0Rldk1vZGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlLCBQYWdlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJyZWFrcG9pbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEJSRUFLUE9JTlQsXG4gIExheW91dENvbmZpZyxcbiAgTGF5b3V0U2xvdENvbmZpZyxcbiAgU2xvdENvbmZpZyxcbn0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2NvbmZpZy9sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRIYW5kbGVyLCBQQUdFX0xBWU9VVF9IQU5ETEVSIH0gZnJvbSAnLi9wYWdlLWxheW91dC1oYW5kbGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2VMYXlvdXRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjbXM6IENtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IExheW91dENvbmZpZyxcbiAgICBwcml2YXRlIGJyZWFrcG9pbnRTZXJ2aWNlOiBCcmVha3BvaW50U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoUEFHRV9MQVlPVVRfSEFORExFUilcbiAgICBwcml2YXRlIGhhbmRsZXJzOiBQYWdlTGF5b3V0SGFuZGxlcltdXG4gICkge31cblxuICAvLyB3ZSBwcmludCB3YXJuIG1lc3NhZ2VzIG9uIG1pc3NpbmcgbGF5b3V0IGNvbmZpZ3NcbiAgLy8gb25seSBvbmNlIHRvIG5vdCBwb2x1dGUgdGhlIGNvbnNvbGUgbG9nXG4gIHByaXZhdGUgd2FybkxvZ01lc3NhZ2VzID0ge307XG4gIHByaXZhdGUgbG9nU2xvdHMgPSB7fTtcblxuICBnZXRTbG90cyhzZWN0aW9uPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFt0aGlzLnBhZ2UkLCB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmJyZWFrcG9pbnQkXSkucGlwZShcbiAgICAgIG1hcCgoW3BhZ2UsIGJyZWFrcG9pbnRdKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2VUZW1wbGF0ZSA9IHBhZ2UudGVtcGxhdGU7XG4gICAgICAgIGNvbnN0IHNsb3RzID0gdGhpcy5yZXNvbHZlU2xvdHMocGFnZSwgc2VjdGlvbiwgYnJlYWtwb2ludCk7XG4gICAgICAgIHJldHVybiB7IHNsb3RzLCBwYWdlVGVtcGxhdGUsIGJyZWFrcG9pbnQgfTtcbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKCh7IHNsb3RzLCBwYWdlVGVtcGxhdGUsIGJyZWFrcG9pbnQgfSkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gb2Yoc2xvdHMpO1xuICAgICAgICBmb3IgKGNvbnN0IGhhbmRsZXIgb2YgdGhpcy5oYW5kbGVycyB8fCBbXSkge1xuICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIuaGFuZGxlKHJlc3VsdCwgcGFnZVRlbXBsYXRlLCBzZWN0aW9uLCBicmVha3BvaW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgoYSwgYikgPT4ge1xuICAgICAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlU2xvdHMocGFnZSwgc2VjdGlvbiwgYnJlYWtwb2ludCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldFNsb3RDb25maWcoXG4gICAgICBwYWdlLnRlbXBsYXRlLFxuICAgICAgJ3Nsb3RzJyxcbiAgICAgIHNlY3Rpb24sXG4gICAgICBicmVha3BvaW50XG4gICAgKTtcbiAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5zbG90cykge1xuICAgICAgY29uc3QgcGFnZVNsb3RzID0gT2JqZWN0LmtleXMocGFnZS5zbG90cyk7XG4gICAgICByZXR1cm4gY29uZmlnLnNsb3RzLmZpbHRlcihzbG90ID0+IHBhZ2VTbG90cy5pbmNsdWRlcyhzbG90KSk7XG4gICAgfSBlbHNlIGlmICghc2VjdGlvbikge1xuICAgICAgdGhpcy5sb2dNaXNzaW5nTGF5b3V0Q29uZmlnKHBhZ2UpO1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHBhZ2Uuc2xvdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZ01pc3NpbmdMYXlvdXRDb25maWcocGFnZSwgc2VjdGlvbik7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgZ2V0IHBhZ2UkKCk6IE9ic2VydmFibGU8UGFnZT4ge1xuICAgIHJldHVybiB0aGlzLmNtcy5nZXRDdXJyZW50UGFnZSgpLnBpcGUoZmlsdGVyKHBhZ2UgPT4gISFwYWdlKSk7XG4gIH1cblxuICBnZXQgdGVtcGxhdGVOYW1lJCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2UkLnBpcGUoXG4gICAgICBmaWx0ZXIocGFnZSA9PiAhIXBhZ2UudGVtcGxhdGUpLFxuICAgICAgbWFwKChwYWdlOiBQYWdlKSA9PiBwYWdlLnRlbXBsYXRlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogbG9hZCBzbG90cyBmcm9tIHRoZSBsYXlvdXQgY29uZmlndXJhdGlvbi4gVGhlIGJyZWFrcG9pbnQgaXMgdXNlZFxuICAgKiB0byBsb2FkIGEgc3BlY2lmaWMgY29uZmlndXJhdGlvbiBmb3IgdGhlIGdpdmVuIGJyZWFrcG9pbnQuIElmIHRoZXJlJ3NcbiAgICogbm8gY29uZmlndXJhdGlvbiBhdmFpbGFibGUgZm9yIHRoZSBnaXZlbiBicmVha3BvaW50IHRoZSBkZWZhdWx0IHNsb3RcbiAgICogY29uZmlndXJhdGlvbiBpcyByZXR1cm5lZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRTbG90Q29uZmlnKFxuICAgIHRlbXBsYXRlVWlkOiBzdHJpbmcsXG4gICAgY29uZmlnQXR0cmlidXRlOiBzdHJpbmcsXG4gICAgc2VjdGlvbj86IHN0cmluZyxcbiAgICBicmVha3BvaW50PzogQlJFQUtQT0lOVFxuICApOiBTbG90Q29uZmlnIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLmxheW91dFNsb3RzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgcGFnZVRlbXBsYXRlQ29uZmlnID0gdGhpcy5jb25maWcubGF5b3V0U2xvdHNbdGVtcGxhdGVVaWRdO1xuXG4gICAgaWYgKHNlY3Rpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFNsb3RDb25maWdGb3JTZWN0aW9uKFxuICAgICAgICB0ZW1wbGF0ZVVpZCxcbiAgICAgICAgY29uZmlnQXR0cmlidXRlLFxuICAgICAgICBzZWN0aW9uLFxuICAgICAgICBicmVha3BvaW50XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChwYWdlVGVtcGxhdGVDb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFJlc3BvbnNpdmVTbG90Q29uZmlnKFxuICAgICAgICA8TGF5b3V0U2xvdENvbmZpZz5wYWdlVGVtcGxhdGVDb25maWcsXG4gICAgICAgIGNvbmZpZ0F0dHJpYnV0ZSxcbiAgICAgICAgYnJlYWtwb2ludFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U2xvdENvbmZpZ0ZvclNlY3Rpb24oXG4gICAgdGVtcGxhdGVVaWQ6IHN0cmluZyxcbiAgICBjb25maWdBdHRyaWJ1dGU6IHN0cmluZyxcbiAgICBzZWN0aW9uPzogc3RyaW5nLFxuICAgIGJyZWFrcG9pbnQ/OiBCUkVBS1BPSU5UXG4gICk6IFNsb3RDb25maWcge1xuICAgIGNvbnN0IHBhZ2VUZW1wbGF0ZUNvbmZpZyA9IHRoaXMuY29uZmlnLmxheW91dFNsb3RzW3RlbXBsYXRlVWlkXTtcblxuICAgIGlmICghcGFnZVRlbXBsYXRlQ29uZmlnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBpZiB0aGVyZSdzIG5vIHNlY3Rpb24gY29uZmlnIG9uIHRoZSBwYWdlIGxheW91dFxuICAgIC8vIHdlIGZhbGwgYmFjayB0byB0aGUgZ2xvYmFsIHNlY3Rpb24gY29uZmlnXG4gICAgY29uc3Qgc2VjdGlvbkNvbmZpZyA9IHBhZ2VUZW1wbGF0ZUNvbmZpZ1tzZWN0aW9uXVxuICAgICAgPyBwYWdlVGVtcGxhdGVDb25maWdbc2VjdGlvbl1cbiAgICAgIDogdGhpcy5jb25maWcubGF5b3V0U2xvdHNbc2VjdGlvbl07XG5cbiAgICBpZiAoIXNlY3Rpb25Db25maWcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNpdmVDb25maWcgPSB0aGlzLmdldFJlc3BvbnNpdmVTbG90Q29uZmlnKFxuICAgICAgPExheW91dFNsb3RDb25maWc+c2VjdGlvbkNvbmZpZyxcbiAgICAgIGNvbmZpZ0F0dHJpYnV0ZSxcbiAgICAgIGJyZWFrcG9pbnRcbiAgICApO1xuXG4gICAgaWYgKHJlc3BvbnNpdmVDb25maWcuaGFzT3duUHJvcGVydHkoY29uZmlnQXR0cmlidXRlKSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNpdmVDb25maWc7XG4gICAgfSBlbHNlIGlmIChwYWdlVGVtcGxhdGVDb25maWdbc2VjdGlvbl0uaGFzT3duUHJvcGVydHkoY29uZmlnQXR0cmlidXRlKSkge1xuICAgICAgcmV0dXJuIHBhZ2VUZW1wbGF0ZUNvbmZpZ1tzZWN0aW9uXTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnLmxheW91dFNsb3RzW3NlY3Rpb25dKSB7XG4gICAgICByZXR1cm4gPFNsb3RDb25maWc+dGhpcy5jb25maWcubGF5b3V0U2xvdHNbc2VjdGlvbl07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIHNsb3RzIGZvciBhIGJyZWFrcG9pbnQgc3BlY2lmaWMgY29uZmlndXJhdG9pblxuICAgKiBJZiB0aGVyZSdzIG5vIHNwZWNpZmljIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBicmVha3BvaW50LFxuICAgKiB0aGUgY2xvc2VzdCBhdmFpbGFibGUgY29uZmlndXJhdGlvbiB3aWxsIGJlIHJldHVybmVkLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFJlc3BvbnNpdmVTbG90Q29uZmlnKFxuICAgIGxheW91dFNsb3RDb25maWc6IExheW91dFNsb3RDb25maWcsXG4gICAgY29uZmlnQXR0cmlidXRlOiBzdHJpbmcsXG4gICAgYnJlYWtwb2ludD86IEJSRUFLUE9JTlRcbiAgKTogU2xvdENvbmZpZyB7XG4gICAgbGV0IHNsb3RDb25maWcgPSA8U2xvdENvbmZpZz5sYXlvdXRTbG90Q29uZmlnO1xuXG4gICAgLy8gZmFsbGJhY2sgdG8gZGVmYXVsdCBzbG90IGNvbmZpZ1xuICAgIGlmICghYnJlYWtwb2ludCkge1xuICAgICAgcmV0dXJuIHNsb3RDb25maWc7XG4gICAgfVxuXG4gICAgLy8gd2UgaGF2ZSBhIGNvbmZpZyBmb3IgdGhlIHNwZWNpZmljIGJyZWFrcG9pbnRcbiAgICBpZiAoXG4gICAgICBsYXlvdXRTbG90Q29uZmlnW2JyZWFrcG9pbnRdICYmXG4gICAgICBsYXlvdXRTbG90Q29uZmlnW2JyZWFrcG9pbnRdLmhhc093blByb3BlcnR5KGNvbmZpZ0F0dHJpYnV0ZSlcbiAgICApIHtcbiAgICAgIHJldHVybiA8U2xvdENvbmZpZz5sYXlvdXRTbG90Q29uZmlnW2JyZWFrcG9pbnRdO1xuICAgIH1cblxuICAgIC8vIGZpbmQgY2xvc2VzdCBjb25maWdcbiAgICBjb25zdCBhbGwgPSB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmJyZWFrcG9pbnRzO1xuXG4gICAgZm9yIChjb25zdCBiciBvZiBhbGwuc3BsaWNlKDAsIGFsbC5pbmRleE9mKGJyZWFrcG9pbnQpKSkge1xuICAgICAgaWYgKFxuICAgICAgICBsYXlvdXRTbG90Q29uZmlnW2JyXSAmJlxuICAgICAgICBsYXlvdXRTbG90Q29uZmlnW2JyXS5oYXNPd25Qcm9wZXJ0eShjb25maWdBdHRyaWJ1dGUpXG4gICAgICApIHtcbiAgICAgICAgc2xvdENvbmZpZyA9IDxTbG90Q29uZmlnPmxheW91dFNsb3RDb25maWdbYnJdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2xvdENvbmZpZztcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBvcmRlciB0byBoZWxwIGRldmVsb3BlcnMsIHdlIHByaW50IHNvbWUgZGV0YWlsZWQgbG9nIGluZm9ybWF0aW9uIGluXG4gICAqIGNhc2UgdGhlcmUncyBubyBsYXlvdXQgY29uZmlndXJhdGlvbiBhdmFpbGFibGUgZm9yIHRoZSBnaXZlbiBwYWdlIHRlbXBsYXRlXG4gICAqIG9yIHNlY3Rpb24uIEFkZGl0aW9uYWxseSwgdGhlIHNsb3QgcG9zaXRpb25zIGFyZSBwcmludGVkIGluIHRoZSBjb25zb2xlXG4gICAqIGluIGEgZm9ybWF0IHRoYXQgY2FuIGJlIGNvcGllZCAvIHBhc3RlIHRvIHRoZSBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBsb2dNaXNzaW5nTGF5b3V0Q29uZmlnKHBhZ2U6IFBhZ2UsIHNlY3Rpb24/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIWlzRGV2TW9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5sb2dTbG90c1twYWdlLnRlbXBsYXRlXSkge1xuICAgICAgLy8gdGhlIGluZm8gbG9nIGlzIG5vdCBwcmludGVkIGluIHByb2R1Y3Rpb25cbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tY29uc29sZVxuICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICBgQXZhaWxhYmxlIENNUyBwYWdlIHNsb3RzOiAnJHtPYmplY3Qua2V5cyhwYWdlLnNsb3RzKS5qb2luKGAnLCdgKX0nYFxuICAgICAgKTtcbiAgICAgIHRoaXMubG9nU2xvdHNbcGFnZS50ZW1wbGF0ZV0gPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGNhY2hlS2V5ID0gc2VjdGlvbiB8fCBwYWdlLnRlbXBsYXRlO1xuICAgIGlmICghdGhpcy53YXJuTG9nTWVzc2FnZXNbY2FjaGVLZXldKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBObyBsYXlvdXQgY29uZmlnIGZvdW5kIGZvciAke2NhY2hlS2V5fSwgeW91IGNhbiBjb25maWd1cmUgYSAnTGF5b3V0Q29uZmlnJyB0byBjb250cm9sIHRoZSByZW5kZXJpbmcgb2YgcGFnZSBzbG90cy5gXG4gICAgICApO1xuICAgICAgdGhpcy53YXJuTG9nTWVzc2FnZXNbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==