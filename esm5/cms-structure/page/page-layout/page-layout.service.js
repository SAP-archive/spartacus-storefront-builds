/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            return this.cms.getCurrentPage().pipe(filter(Boolean));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDbEYsT0FBTyxFQUVMLFlBQVksR0FHYixNQUFNLHNDQUFzQyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxtQkFBbUIsRUFBcUIsTUFBTSx1QkFBdUIsQ0FBQztBQUUvRTtJQUVFLDJCQUNVLEdBQWUsRUFDZixNQUFvQixFQUNwQixpQkFBb0MsRUFHcEMsUUFBNkI7UUFMN0IsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUdwQyxhQUFRLEdBQVIsUUFBUSxDQUFxQjs7O1FBSy9CLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFMbkIsQ0FBQzs7Ozs7SUFPSixvQ0FBUTs7OztJQUFSLFVBQVMsT0FBZ0I7UUFBekIsaUJBMEJDO1FBekJDLE9BQU8sYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlC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O2dCQU1qQixZQUFZO2dCQUhMLGlCQUFpQjs0Q0FlckIsUUFBUSxZQUNSLE1BQU0sU0FBQyxtQkFBbUI7O0lBNk0vQix3QkFBQztDQUFBLEFBcE5ELElBb05DO1NBbk5ZLGlCQUFpQjs7Ozs7O0lBWTVCLDRDQUE2Qjs7Ozs7SUFDN0IscUNBQXNCOzs7OztJQVhwQixnQ0FBdUI7Ozs7O0lBQ3ZCLG1DQUE0Qjs7Ozs7SUFDNUIsOENBQTRDOzs7OztJQUM1QyxxQ0FFcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIGlzRGV2TW9kZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc1NlcnZpY2UsIFBhZ2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQnJlYWtwb2ludFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvYnJlYWtwb2ludC9icmVha3BvaW50LnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQlJFQUtQT0lOVCxcbiAgTGF5b3V0Q29uZmlnLFxuICBMYXlvdXRTbG90Q29uZmlnLFxuICBTbG90Q29uZmlnLFxufSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvY29uZmlnL2xheW91dC1jb25maWcnO1xuaW1wb3J0IHsgUEFHRV9MQVlPVVRfSEFORExFUiwgUGFnZUxheW91dEhhbmRsZXIgfSBmcm9tICcuL3BhZ2UtbGF5b3V0LWhhbmRsZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnZUxheW91dFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNtczogQ21zU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogTGF5b3V0Q29uZmlnLFxuICAgIHByaXZhdGUgYnJlYWtwb2ludFNlcnZpY2U6IEJyZWFrcG9pbnRTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChQQUdFX0xBWU9VVF9IQU5ETEVSKVxuICAgIHByaXZhdGUgaGFuZGxlcnM6IFBhZ2VMYXlvdXRIYW5kbGVyW11cbiAgKSB7fVxuXG4gIC8vIHdlIHByaW50IHdhcm4gbWVzc2FnZXMgb24gbWlzc2luZyBsYXlvdXQgY29uZmlnc1xuICAvLyBvbmx5IG9uY2UgdG8gbm90IHBvbHV0ZSB0aGUgY29uc29sZSBsb2dcbiAgcHJpdmF0ZSB3YXJuTG9nTWVzc2FnZXMgPSB7fTtcbiAgcHJpdmF0ZSBsb2dTbG90cyA9IHt9O1xuXG4gIGdldFNsb3RzKHNlY3Rpb24/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW3RoaXMucGFnZSQsIHRoaXMuYnJlYWtwb2ludFNlcnZpY2UuYnJlYWtwb2ludCRdKS5waXBlKFxuICAgICAgbWFwKChbcGFnZSwgYnJlYWtwb2ludF0pID0+IHtcbiAgICAgICAgY29uc3QgcGFnZVRlbXBsYXRlID0gcGFnZS50ZW1wbGF0ZTtcbiAgICAgICAgY29uc3Qgc2xvdHMgPSB0aGlzLnJlc29sdmVTbG90cyhwYWdlLCBzZWN0aW9uLCBicmVha3BvaW50KTtcbiAgICAgICAgcmV0dXJuIHsgc2xvdHMsIHBhZ2VUZW1wbGF0ZSwgYnJlYWtwb2ludCB9O1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKHsgc2xvdHMsIHBhZ2VUZW1wbGF0ZSwgYnJlYWtwb2ludCB9KSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBvZihzbG90cyk7XG4gICAgICAgIGZvciAoY29uc3QgaGFuZGxlciBvZiB0aGlzLmhhbmRsZXJzIHx8IFtdKSB7XG4gICAgICAgICAgcmVzdWx0ID0gaGFuZGxlci5oYW5kbGUocmVzdWx0LCBwYWdlVGVtcGxhdGUsIHNlY3Rpb24sIGJyZWFrcG9pbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVTbG90cyhwYWdlLCBzZWN0aW9uLCBicmVha3BvaW50KTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0U2xvdENvbmZpZyhcbiAgICAgIHBhZ2UudGVtcGxhdGUsXG4gICAgICAnc2xvdHMnLFxuICAgICAgc2VjdGlvbixcbiAgICAgIGJyZWFrcG9pbnRcbiAgICApO1xuICAgIGlmIChjb25maWcgJiYgY29uZmlnLnNsb3RzKSB7XG4gICAgICBjb25zdCBwYWdlU2xvdHMgPSBPYmplY3Qua2V5cyhwYWdlLnNsb3RzKTtcbiAgICAgIHJldHVybiBjb25maWcuc2xvdHMuZmlsdGVyKHNsb3QgPT4gcGFnZVNsb3RzLmluY2x1ZGVzKHNsb3QpKTtcbiAgICB9IGVsc2UgaWYgKCFzZWN0aW9uKSB7XG4gICAgICB0aGlzLmxvZ01pc3NpbmdMYXlvdXRDb25maWcocGFnZSk7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMocGFnZS5zbG90cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9nTWlzc2luZ0xheW91dENvbmZpZyhwYWdlLCBzZWN0aW9uKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBnZXQgcGFnZSQoKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zLmdldEN1cnJlbnRQYWdlKCkucGlwZShmaWx0ZXIoQm9vbGVhbikpO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlTmFtZSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdlJC5waXBlKFxuICAgICAgZmlsdGVyKHBhZ2UgPT4gISFwYWdlLnRlbXBsYXRlKSxcbiAgICAgIG1hcCgocGFnZTogUGFnZSkgPT4gcGFnZS50ZW1wbGF0ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIGxvYWQgc2xvdHMgZnJvbSB0aGUgbGF5b3V0IGNvbmZpZ3VyYXRpb24uIFRoZSBicmVha3BvaW50IGlzIHVzZWRcbiAgICogdG8gbG9hZCBhIHNwZWNpZmljIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBnaXZlbiBicmVha3BvaW50LiBJZiB0aGVyZSdzXG4gICAqIG5vIGNvbmZpZ3VyYXRpb24gYXZhaWxhYmxlIGZvciB0aGUgZ2l2ZW4gYnJlYWtwb2ludCB0aGUgZGVmYXVsdCBzbG90XG4gICAqIGNvbmZpZ3VyYXRpb24gaXMgcmV0dXJuZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0U2xvdENvbmZpZyhcbiAgICB0ZW1wbGF0ZVVpZDogc3RyaW5nLFxuICAgIGNvbmZpZ0F0dHJpYnV0ZTogc3RyaW5nLFxuICAgIHNlY3Rpb24/OiBzdHJpbmcsXG4gICAgYnJlYWtwb2ludD86IEJSRUFLUE9JTlRcbiAgKTogU2xvdENvbmZpZyB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5sYXlvdXRTbG90cykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHBhZ2VUZW1wbGF0ZUNvbmZpZyA9IHRoaXMuY29uZmlnLmxheW91dFNsb3RzW3RlbXBsYXRlVWlkXTtcblxuICAgIGlmIChzZWN0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTbG90Q29uZmlnRm9yU2VjdGlvbihcbiAgICAgICAgdGVtcGxhdGVVaWQsXG4gICAgICAgIGNvbmZpZ0F0dHJpYnV0ZSxcbiAgICAgICAgc2VjdGlvbixcbiAgICAgICAgYnJlYWtwb2ludFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAocGFnZVRlbXBsYXRlQ29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRSZXNwb25zaXZlU2xvdENvbmZpZyhcbiAgICAgICAgPExheW91dFNsb3RDb25maWc+cGFnZVRlbXBsYXRlQ29uZmlnLFxuICAgICAgICBjb25maWdBdHRyaWJ1dGUsXG4gICAgICAgIGJyZWFrcG9pbnRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNsb3RDb25maWdGb3JTZWN0aW9uKFxuICAgIHRlbXBsYXRlVWlkOiBzdHJpbmcsXG4gICAgY29uZmlnQXR0cmlidXRlOiBzdHJpbmcsXG4gICAgc2VjdGlvbj86IHN0cmluZyxcbiAgICBicmVha3BvaW50PzogQlJFQUtQT0lOVFxuICApOiBTbG90Q29uZmlnIHtcbiAgICBjb25zdCBwYWdlVGVtcGxhdGVDb25maWcgPSB0aGlzLmNvbmZpZy5sYXlvdXRTbG90c1t0ZW1wbGF0ZVVpZF07XG5cbiAgICBpZiAoIXBhZ2VUZW1wbGF0ZUNvbmZpZykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlcmUncyBubyBzZWN0aW9uIGNvbmZpZyBvbiB0aGUgcGFnZSBsYXlvdXRcbiAgICAvLyB3ZSBmYWxsIGJhY2sgdG8gdGhlIGdsb2JhbCBzZWN0aW9uIGNvbmZpZ1xuICAgIGNvbnN0IHNlY3Rpb25Db25maWcgPSBwYWdlVGVtcGxhdGVDb25maWdbc2VjdGlvbl1cbiAgICAgID8gcGFnZVRlbXBsYXRlQ29uZmlnW3NlY3Rpb25dXG4gICAgICA6IHRoaXMuY29uZmlnLmxheW91dFNsb3RzW3NlY3Rpb25dO1xuXG4gICAgaWYgKCFzZWN0aW9uQ29uZmlnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zaXZlQ29uZmlnID0gdGhpcy5nZXRSZXNwb25zaXZlU2xvdENvbmZpZyhcbiAgICAgIDxMYXlvdXRTbG90Q29uZmlnPnNlY3Rpb25Db25maWcsXG4gICAgICBjb25maWdBdHRyaWJ1dGUsXG4gICAgICBicmVha3BvaW50XG4gICAgKTtcblxuICAgIGlmIChyZXNwb25zaXZlQ29uZmlnLmhhc093blByb3BlcnR5KGNvbmZpZ0F0dHJpYnV0ZSkpIHtcbiAgICAgIHJldHVybiByZXNwb25zaXZlQ29uZmlnO1xuICAgIH0gZWxzZSBpZiAocGFnZVRlbXBsYXRlQ29uZmlnW3NlY3Rpb25dLmhhc093blByb3BlcnR5KGNvbmZpZ0F0dHJpYnV0ZSkpIHtcbiAgICAgIHJldHVybiBwYWdlVGVtcGxhdGVDb25maWdbc2VjdGlvbl07XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5sYXlvdXRTbG90c1tzZWN0aW9uXSkge1xuICAgICAgcmV0dXJuIDxTbG90Q29uZmlnPnRoaXMuY29uZmlnLmxheW91dFNsb3RzW3NlY3Rpb25dO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBzbG90cyBmb3IgYSBicmVha3BvaW50IHNwZWNpZmljIGNvbmZpZ3VyYXRvaW5cbiAgICogSWYgdGhlcmUncyBubyBzcGVjaWZpYyBjb25maWd1cmF0aW9uIGZvciB0aGUgYnJlYWtwb2ludCxcbiAgICogdGhlIGNsb3Nlc3QgYXZhaWxhYmxlIGNvbmZpZ3VyYXRpb24gd2lsbCBiZSByZXR1cm5lZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRSZXNwb25zaXZlU2xvdENvbmZpZyhcbiAgICBsYXlvdXRTbG90Q29uZmlnOiBMYXlvdXRTbG90Q29uZmlnLFxuICAgIGNvbmZpZ0F0dHJpYnV0ZTogc3RyaW5nLFxuICAgIGJyZWFrcG9pbnQ/OiBCUkVBS1BPSU5UXG4gICk6IFNsb3RDb25maWcge1xuICAgIGxldCBzbG90Q29uZmlnID0gPFNsb3RDb25maWc+bGF5b3V0U2xvdENvbmZpZztcblxuICAgIC8vIGZhbGxiYWNrIHRvIGRlZmF1bHQgc2xvdCBjb25maWdcbiAgICBpZiAoIWJyZWFrcG9pbnQpIHtcbiAgICAgIHJldHVybiBzbG90Q29uZmlnO1xuICAgIH1cblxuICAgIC8vIHdlIGhhdmUgYSBjb25maWcgZm9yIHRoZSBzcGVjaWZpYyBicmVha3BvaW50XG4gICAgaWYgKFxuICAgICAgbGF5b3V0U2xvdENvbmZpZ1ticmVha3BvaW50XSAmJlxuICAgICAgbGF5b3V0U2xvdENvbmZpZ1ticmVha3BvaW50XS5oYXNPd25Qcm9wZXJ0eShjb25maWdBdHRyaWJ1dGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gPFNsb3RDb25maWc+bGF5b3V0U2xvdENvbmZpZ1ticmVha3BvaW50XTtcbiAgICB9XG5cbiAgICAvLyBmaW5kIGNsb3Nlc3QgY29uZmlnXG4gICAgY29uc3QgYWxsID0gdGhpcy5icmVha3BvaW50U2VydmljZS5icmVha3BvaW50cztcblxuICAgIGZvciAoY29uc3QgYnIgb2YgYWxsLnNwbGljZSgwLCBhbGwuaW5kZXhPZihicmVha3BvaW50KSkpIHtcbiAgICAgIGlmIChcbiAgICAgICAgbGF5b3V0U2xvdENvbmZpZ1ticl0gJiZcbiAgICAgICAgbGF5b3V0U2xvdENvbmZpZ1ticl0uaGFzT3duUHJvcGVydHkoY29uZmlnQXR0cmlidXRlKVxuICAgICAgKSB7XG4gICAgICAgIHNsb3RDb25maWcgPSA8U2xvdENvbmZpZz5sYXlvdXRTbG90Q29uZmlnW2JyXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNsb3RDb25maWc7XG4gIH1cblxuICAvKipcbiAgICogSW4gb3JkZXIgdG8gaGVscCBkZXZlbG9wZXJzLCB3ZSBwcmludCBzb21lIGRldGFpbGVkIGxvZyBpbmZvcm1hdGlvbiBpblxuICAgKiBjYXNlIHRoZXJlJ3Mgbm8gbGF5b3V0IGNvbmZpZ3VyYXRpb24gYXZhaWxhYmxlIGZvciB0aGUgZ2l2ZW4gcGFnZSB0ZW1wbGF0ZVxuICAgKiBvciBzZWN0aW9uLiBBZGRpdGlvbmFsbHksIHRoZSBzbG90IHBvc2l0aW9ucyBhcmUgcHJpbnRlZCBpbiB0aGUgY29uc29sZVxuICAgKiBpbiBhIGZvcm1hdCB0aGF0IGNhbiBiZSBjb3BpZWQgLyBwYXN0ZSB0byB0aGUgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIHByaXZhdGUgbG9nTWlzc2luZ0xheW91dENvbmZpZyhwYWdlOiBQYWdlLCBzZWN0aW9uPzogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCFpc0Rldk1vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubG9nU2xvdHNbcGFnZS50ZW1wbGF0ZV0pIHtcbiAgICAgIC8vIHRoZSBpbmZvIGxvZyBpcyBub3QgcHJpbnRlZCBpbiBwcm9kdWN0aW9uXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgYEF2YWlsYWJsZSBDTVMgcGFnZSBzbG90czogJyR7T2JqZWN0LmtleXMocGFnZS5zbG90cykuam9pbihgJywnYCl9J2BcbiAgICAgICk7XG4gICAgICB0aGlzLmxvZ1Nsb3RzW3BhZ2UudGVtcGxhdGVdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWNoZUtleSA9IHNlY3Rpb24gfHwgcGFnZS50ZW1wbGF0ZTtcbiAgICBpZiAoIXRoaXMud2FybkxvZ01lc3NhZ2VzW2NhY2hlS2V5XSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgTm8gbGF5b3V0IGNvbmZpZyBmb3VuZCBmb3IgJHtjYWNoZUtleX0sIHlvdSBjYW4gY29uZmlndXJlIGEgJ0xheW91dENvbmZpZycgdG8gY29udHJvbCB0aGUgcmVuZGVyaW5nIG9mIHBhZ2Ugc2xvdHMuYFxuICAgICAgKTtcbiAgICAgIHRoaXMud2FybkxvZ01lc3NhZ2VzW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgfVxuICB9XG59XG4iXX0=