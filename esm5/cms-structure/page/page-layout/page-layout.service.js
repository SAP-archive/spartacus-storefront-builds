/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
import { LayoutConfig, } from '../../../layout/config/layout-config';
var PageLayoutService = /** @class */ (function () {
    function PageLayoutService(cms, config, breakpointService) {
        this.cms = cms;
        this.config = config;
        this.breakpointService = breakpointService;
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
        return this.breakpointService.breakpoint$.pipe(switchMap((/**
         * @param {?} breakpoint
         * @return {?}
         */
        function (breakpoint) {
            return _this.page$.pipe(map((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                /** @type {?} */
                var config = _this.getSlotConfig(page.template, 'slots', section, breakpoint);
                if (config && config.slots) {
                    return config.slots;
                }
                else if (!section) {
                    _this.logMissingLayoutConfig(page);
                    return Object.keys(page.slots);
                }
                else {
                    _this.logMissingLayoutConfig(page, section);
                    return [];
                }
            })));
        })), distinctUntilChanged());
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
        var e_1, _a;
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
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
        if (this.config.production) {
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
        { type: BreakpointService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0saUJBQWlCLENBQUM7QUFFbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDbEYsT0FBTyxFQUVMLFlBQVksR0FHYixNQUFNLHNDQUFzQyxDQUFDO0FBRTlDO0lBRUUsMkJBQ1UsR0FBZSxFQUNmLE1BQW9CLEVBQ3BCLGlCQUFvQztRQUZwQyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUNwQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1COzs7UUFLdEMsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUxuQixDQUFDOzs7OztJQU9KLG9DQUFROzs7O0lBQVIsVUFBUyxPQUFnQjtRQUF6QixpQkF5QkM7UUF4QkMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDNUMsU0FBUzs7OztRQUFDLFVBQUEsVUFBVTtZQUNsQixPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLEdBQUc7Ozs7WUFBQyxVQUFBLElBQUk7O29CQUNBLE1BQU0sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUMvQixJQUFJLENBQUMsUUFBUSxFQUNiLE9BQU8sRUFDUCxPQUFPLEVBQ1AsVUFBVSxDQUNY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Z0I7UUFDekQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUMxQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDakMsNENBQTRDO1lBQzVDLHVDQUF1QztZQUN2QyxPQUFPLENBQUMsSUFBSSxDQUNWLGdDQUE4QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQUcsQ0FDckUsQ0FBQztZQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUNyQzs7WUFFSyxRQUFRLEdBQUcsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sQ0FBQyxJQUFJLENBQ1YsZ0NBQThCLFFBQVEsaUZBQThFLENBQ3JILENBQUM7WUFDRixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN2QztJQUNILENBQUM7O2dCQXpMRixVQUFVOzs7O2dCQVhGLFVBQVU7Z0JBTWpCLFlBQVk7Z0JBSEwsaUJBQWlCOztJQWtNMUIsd0JBQUM7Q0FBQSxBQTFMRCxJQTBMQztTQXpMWSxpQkFBaUI7Ozs7OztJQVM1Qiw0Q0FBNkI7Ozs7O0lBQzdCLHFDQUFzQjs7Ozs7SUFScEIsZ0NBQXVCOzs7OztJQUN2QixtQ0FBNEI7Ozs7O0lBQzVCLDhDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc1NlcnZpY2UsIFBhZ2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCcmVha3BvaW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9icmVha3BvaW50L2JyZWFrcG9pbnQuc2VydmljZSc7XG5pbXBvcnQge1xuICBCUkVBS1BPSU5ULFxuICBMYXlvdXRDb25maWcsXG4gIExheW91dFNsb3RDb25maWcsXG4gIFNsb3RDb25maWcsXG59IGZyb20gJy4uLy4uLy4uL2xheW91dC9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdlTGF5b3V0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY21zOiBDbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBMYXlvdXRDb25maWcsXG4gICAgcHJpdmF0ZSBicmVha3BvaW50U2VydmljZTogQnJlYWtwb2ludFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8vIHdlIHByaW50IHdhcm4gbWVzc2FnZXMgb24gbWlzc2luZyBsYXlvdXQgY29uZmlnc1xuICAvLyBvbmx5IG9uY2UgdG8gbm90IHBvbHV0ZSB0aGUgY29uc29sZSBsb2dcbiAgcHJpdmF0ZSB3YXJuTG9nTWVzc2FnZXMgPSB7fTtcbiAgcHJpdmF0ZSBsb2dTbG90cyA9IHt9O1xuXG4gIGdldFNsb3RzKHNlY3Rpb24/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludFNlcnZpY2UuYnJlYWtwb2ludCQucGlwZShcbiAgICAgIHN3aXRjaE1hcChicmVha3BvaW50ID0+XG4gICAgICAgIHRoaXMucGFnZSQucGlwZShcbiAgICAgICAgICBtYXAocGFnZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldFNsb3RDb25maWcoXG4gICAgICAgICAgICAgIHBhZ2UudGVtcGxhdGUsXG4gICAgICAgICAgICAgICdzbG90cycsXG4gICAgICAgICAgICAgIHNlY3Rpb24sXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5zbG90cykge1xuICAgICAgICAgICAgICByZXR1cm4gY29uZmlnLnNsb3RzO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghc2VjdGlvbikge1xuICAgICAgICAgICAgICB0aGlzLmxvZ01pc3NpbmdMYXlvdXRDb25maWcocGFnZSk7XG4gICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhwYWdlLnNsb3RzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMubG9nTWlzc2luZ0xheW91dENvbmZpZyhwYWdlLCBzZWN0aW9uKTtcbiAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIGdldCBwYWdlJCgpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5jbXMuZ2V0Q3VycmVudFBhZ2UoKS5waXBlKGZpbHRlcihCb29sZWFuKSk7XG4gIH1cblxuICBnZXQgdGVtcGxhdGVOYW1lJCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2UkLnBpcGUoXG4gICAgICBmaWx0ZXIocGFnZSA9PiAhIXBhZ2UudGVtcGxhdGUpLFxuICAgICAgbWFwKChwYWdlOiBQYWdlKSA9PiBwYWdlLnRlbXBsYXRlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogbG9hZCBzbG90cyBmcm9tIHRoZSBsYXlvdXQgY29uZmlndXJhdGlvbi4gVGhlIGJyZWFrcG9pbnQgaXMgdXNlZFxuICAgKiB0byBsb2FkIGEgc3BlY2lmaWMgY29uZmlndXJhdGlvbiBmb3IgdGhlIGdpdmVuIGJyZWFrcG9pbnQuIElmIHRoZXJlJ3NcbiAgICogbm8gY29uZmlndXJhdGlvbiBhdmFpbGFibGUgZm9yIHRoZSBnaXZlbiBicmVha3BvaW50IHRoZSBkZWZhdWx0IHNsb3RcbiAgICogY29uZmlndXJhdGlvbiBpcyByZXR1cm5lZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRTbG90Q29uZmlnKFxuICAgIHRlbXBsYXRlVWlkOiBzdHJpbmcsXG4gICAgY29uZmlnQXR0cmlidXRlOiBzdHJpbmcsXG4gICAgc2VjdGlvbj86IHN0cmluZyxcbiAgICBicmVha3BvaW50PzogQlJFQUtQT0lOVFxuICApOiBTbG90Q29uZmlnIHtcbiAgICBjb25zdCBwYWdlVGVtcGxhdGVDb25maWcgPSB0aGlzLmNvbmZpZy5sYXlvdXRTbG90c1t0ZW1wbGF0ZVVpZF07XG5cbiAgICBpZiAoc2VjdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U2xvdENvbmZpZ0ZvclNlY3Rpb24oXG4gICAgICAgIHRlbXBsYXRlVWlkLFxuICAgICAgICBjb25maWdBdHRyaWJ1dGUsXG4gICAgICAgIHNlY3Rpb24sXG4gICAgICAgIGJyZWFrcG9pbnRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHBhZ2VUZW1wbGF0ZUNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVzcG9uc2l2ZVNsb3RDb25maWcoXG4gICAgICAgIDxMYXlvdXRTbG90Q29uZmlnPnBhZ2VUZW1wbGF0ZUNvbmZpZyxcbiAgICAgICAgY29uZmlnQXR0cmlidXRlLFxuICAgICAgICBicmVha3BvaW50XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTbG90Q29uZmlnRm9yU2VjdGlvbihcbiAgICB0ZW1wbGF0ZVVpZDogc3RyaW5nLFxuICAgIGNvbmZpZ0F0dHJpYnV0ZTogc3RyaW5nLFxuICAgIHNlY3Rpb24/OiBzdHJpbmcsXG4gICAgYnJlYWtwb2ludD86IEJSRUFLUE9JTlRcbiAgKTogU2xvdENvbmZpZyB7XG4gICAgY29uc3QgcGFnZVRlbXBsYXRlQ29uZmlnID0gdGhpcy5jb25maWcubGF5b3V0U2xvdHNbdGVtcGxhdGVVaWRdO1xuXG4gICAgaWYgKCFwYWdlVGVtcGxhdGVDb25maWcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIGlmIHRoZXJlJ3Mgbm8gc2VjdGlvbiBjb25maWcgb24gdGhlIHBhZ2UgbGF5b3V0XG4gICAgLy8gd2UgZmFsbCBiYWNrIHRvIHRoZSBnbG9iYWwgc2VjdGlvbiBjb25maWdcbiAgICBjb25zdCBzZWN0aW9uQ29uZmlnID0gcGFnZVRlbXBsYXRlQ29uZmlnW3NlY3Rpb25dXG4gICAgICA/IHBhZ2VUZW1wbGF0ZUNvbmZpZ1tzZWN0aW9uXVxuICAgICAgOiB0aGlzLmNvbmZpZy5sYXlvdXRTbG90c1tzZWN0aW9uXTtcblxuICAgIGlmICghc2VjdGlvbkNvbmZpZykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2l2ZUNvbmZpZyA9IHRoaXMuZ2V0UmVzcG9uc2l2ZVNsb3RDb25maWcoXG4gICAgICA8TGF5b3V0U2xvdENvbmZpZz5zZWN0aW9uQ29uZmlnLFxuICAgICAgY29uZmlnQXR0cmlidXRlLFxuICAgICAgYnJlYWtwb2ludFxuICAgICk7XG5cbiAgICBpZiAocmVzcG9uc2l2ZUNvbmZpZy5oYXNPd25Qcm9wZXJ0eShjb25maWdBdHRyaWJ1dGUpKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2l2ZUNvbmZpZztcbiAgICB9IGVsc2UgaWYgKHBhZ2VUZW1wbGF0ZUNvbmZpZ1tzZWN0aW9uXS5oYXNPd25Qcm9wZXJ0eShjb25maWdBdHRyaWJ1dGUpKSB7XG4gICAgICByZXR1cm4gcGFnZVRlbXBsYXRlQ29uZmlnW3NlY3Rpb25dO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWcubGF5b3V0U2xvdHNbc2VjdGlvbl0pIHtcbiAgICAgIHJldHVybiA8U2xvdENvbmZpZz50aGlzLmNvbmZpZy5sYXlvdXRTbG90c1tzZWN0aW9uXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2Ygc2xvdHMgZm9yIGEgYnJlYWtwb2ludCBzcGVjaWZpYyBjb25maWd1cmF0b2luXG4gICAqIElmIHRoZXJlJ3Mgbm8gc3BlY2lmaWMgY29uZmlndXJhdGlvbiBmb3IgdGhlIGJyZWFrcG9pbnQsXG4gICAqIHRoZSBjbG9zZXN0IGF2YWlsYWJsZSBjb25maWd1cmF0aW9uIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0UmVzcG9uc2l2ZVNsb3RDb25maWcoXG4gICAgbGF5b3V0U2xvdENvbmZpZzogTGF5b3V0U2xvdENvbmZpZyxcbiAgICBjb25maWdBdHRyaWJ1dGU6IHN0cmluZyxcbiAgICBicmVha3BvaW50PzogQlJFQUtQT0lOVFxuICApOiBTbG90Q29uZmlnIHtcbiAgICBsZXQgc2xvdENvbmZpZyA9IDxTbG90Q29uZmlnPmxheW91dFNsb3RDb25maWc7XG5cbiAgICAvLyBmYWxsYmFjayB0byBkZWZhdWx0IHNsb3QgY29uZmlnXG4gICAgaWYgKCFicmVha3BvaW50KSB7XG4gICAgICByZXR1cm4gc2xvdENvbmZpZztcbiAgICB9XG5cbiAgICAvLyB3ZSBoYXZlIGEgY29uZmlnIGZvciB0aGUgc3BlY2lmaWMgYnJlYWtwb2ludFxuICAgIGlmIChcbiAgICAgIGxheW91dFNsb3RDb25maWdbYnJlYWtwb2ludF0gJiZcbiAgICAgIGxheW91dFNsb3RDb25maWdbYnJlYWtwb2ludF0uaGFzT3duUHJvcGVydHkoY29uZmlnQXR0cmlidXRlKVxuICAgICkge1xuICAgICAgcmV0dXJuIDxTbG90Q29uZmlnPmxheW91dFNsb3RDb25maWdbYnJlYWtwb2ludF07XG4gICAgfVxuXG4gICAgLy8gZmluZCBjbG9zZXN0IGNvbmZpZ1xuICAgIGNvbnN0IGFsbCA9IHRoaXMuYnJlYWtwb2ludFNlcnZpY2UuYnJlYWtwb2ludHM7XG5cbiAgICBmb3IgKGNvbnN0IGJyIG9mIGFsbC5zcGxpY2UoMCwgYWxsLmluZGV4T2YoYnJlYWtwb2ludCkpKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGxheW91dFNsb3RDb25maWdbYnJdICYmXG4gICAgICAgIGxheW91dFNsb3RDb25maWdbYnJdLmhhc093blByb3BlcnR5KGNvbmZpZ0F0dHJpYnV0ZSlcbiAgICAgICkge1xuICAgICAgICBzbG90Q29uZmlnID0gPFNsb3RDb25maWc+bGF5b3V0U2xvdENvbmZpZ1ticl07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzbG90Q29uZmlnO1xuICB9XG5cbiAgLyoqXG4gICAqIEluIG9yZGVyIHRvIGhlbHAgZGV2ZWxvcGVycywgd2UgcHJpbnQgc29tZSBkZXRhaWxlZCBsb2cgaW5mb3JtYXRpb24gaW5cbiAgICogY2FzZSB0aGVyZSdzIG5vIGxheW91dCBjb25maWd1cmF0aW9uIGF2YWlsYWJsZSBmb3IgdGhlIGdpdmVuIHBhZ2UgdGVtcGxhdGVcbiAgICogb3Igc2VjdGlvbi4gQWRkaXRpb25hbGx5LCB0aGUgc2xvdCBwb3NpdGlvbnMgYXJlIHByaW50ZWQgaW4gdGhlIGNvbnNvbGVcbiAgICogaW4gYSBmb3JtYXQgdGhhdCBjYW4gYmUgY29waWVkIC8gcGFzdGUgdG8gdGhlIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBwcml2YXRlIGxvZ01pc3NpbmdMYXlvdXRDb25maWcocGFnZTogUGFnZSwgc2VjdGlvbj86IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbmZpZy5wcm9kdWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5sb2dTbG90c1twYWdlLnRlbXBsYXRlXSkge1xuICAgICAgLy8gdGhlIGluZm8gbG9nIGlzIG5vdCBwcmludGVkIGluIHByb2R1Y3Rpb25cbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tY29uc29sZVxuICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICBgQXZhaWxhYmxlIENNUyBwYWdlIHNsb3RzOiAnJHtPYmplY3Qua2V5cyhwYWdlLnNsb3RzKS5qb2luKGAnLCdgKX0nYFxuICAgICAgKTtcbiAgICAgIHRoaXMubG9nU2xvdHNbcGFnZS50ZW1wbGF0ZV0gPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGNhY2hlS2V5ID0gc2VjdGlvbiB8fCBwYWdlLnRlbXBsYXRlO1xuICAgIGlmICghdGhpcy53YXJuTG9nTWVzc2FnZXNbY2FjaGVLZXldKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBObyBsYXlvdXQgY29uZmlnIGZvdW5kIGZvciAke2NhY2hlS2V5fSwgeW91IGNhbiBjb25maWd1cmUgYSAnTGF5b3V0Q29uZmlnJyB0byBjb250cm9sIHRoZSByZW5kZXJpbmcgb2YgcGFnZSBzbG90cy5gXG4gICAgICApO1xuICAgICAgdGhpcy53YXJuTG9nTWVzc2FnZXNbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==