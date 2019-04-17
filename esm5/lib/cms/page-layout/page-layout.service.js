/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { switchMap, distinctUntilChanged, map, filter } from 'rxjs/operators';
import { CmsService } from '@spartacus/core';
import { BreakpointService } from '../../ui/layout/breakpoint/breakpoint.service';
import { LayoutConfig, } from '../../ui/layout/config/layout-config';
var PageLayoutService = /** @class */ (function () {
    function PageLayoutService(cms, config, breakpointService) {
        this.cms = cms;
        this.config = config;
        this.breakpointService = breakpointService;
        // we print warn messages on missing layout configs
        // only once to not polute the console log
        this.warnLogMessages = {};
    }
    // TODO:
    // distinctUntilChanged is not enough here, probably because
    // we use the startWith operator in the breakpoint service which
    // doesn't seem to work well with distinctUntilChanged, see
    // https://github.com/ReactiveX/rxjs/issues/4030
    // TODO:
    // distinctUntilChanged is not enough here, probably because
    // we use the startWith operator in the breakpoint service which
    // doesn't seem to work well with distinctUntilChanged, see
    // https://github.com/ReactiveX/rxjs/issues/4030
    /**
     * @param {?=} section
     * @return {?}
     */
    PageLayoutService.prototype.getSlots = 
    // TODO:
    // distinctUntilChanged is not enough here, probably because
    // we use the startWith operator in the breakpoint service which
    // doesn't seem to work well with distinctUntilChanged, see
    // https://github.com/ReactiveX/rxjs/issues/4030
    /**
     * @param {?=} section
     * @return {?}
     */
    function (section) {
        var _this = this;
        return this.breakpointService.breakpoint$.pipe(switchMap(function (breakpoint) {
            return _this.page$.pipe(map(function (page) {
                return _this.getSlotConfig(page.template, 'slots', section, breakpoint);
            }), filter(Boolean), map(function (config) { return config.slots; }));
        }), distinctUntilChanged());
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
            return this.page$.pipe(filter(function (page) { return !!page.template; }), map(function (page) { return page.template; }));
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
        if (!pageTemplateConfig) {
            return this.noConfigFound(templateUid);
        }
        else {
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
     * @private
     * @param {?} template
     * @param {?=} section
     * @return {?}
     */
    PageLayoutService.prototype.noConfigFound = /**
     * @private
     * @param {?} template
     * @param {?=} section
     * @return {?}
     */
    function (template, section) {
        if (section) {
            if (!this.warnLogMessages[section + ':' + template]) {
                console.warn("no layout config found for section " + section + " of template " + template);
                this.warnLogMessages[section + ':' + template] = true;
            }
        }
        else if (!this.warnLogMessages[template]) {
            console.warn("no layout config found for " + template);
            this.warnLogMessages[template] = true;
        }
        return null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2xGLE9BQU8sRUFFTCxZQUFZLEdBR2IsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5QztJQUVFLDJCQUNVLEdBQWUsRUFDZixNQUFvQixFQUNwQixpQkFBb0M7UUFGcEMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjs7O1FBS3RDLG9CQUFlLEdBQUcsRUFBRSxDQUFDO0lBSjFCLENBQUM7SUFNSixRQUFRO0lBQ1IsNERBQTREO0lBQzVELGdFQUFnRTtJQUNoRSwyREFBMkQ7SUFDM0QsZ0RBQWdEOzs7Ozs7Ozs7O0lBQ2hELG9DQUFROzs7Ozs7Ozs7O0lBQVIsVUFBUyxPQUFnQjtRQUF6QixpQkFhQztRQVpDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQzVDLFNBQVMsQ0FBQyxVQUFBLFVBQVU7WUFDbEIsT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDYixHQUFHLENBQUMsVUFBQSxJQUFJO2dCQUNOLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFB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O2dCQUNGLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDdkQ7U0FDRjthQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0NBQThCLFFBQVUsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnQkF0S0YsVUFBVTs7OztnQkFURixVQUFVO2dCQUlqQixZQUFZO2dCQUhMLGlCQUFpQjs7SUErSzFCLHdCQUFDO0NBQUEsQUF2S0QsSUF1S0M7U0F0S1ksaUJBQWlCOzs7Ozs7SUFTNUIsNENBQTZCOzs7OztJQVAzQixnQ0FBdUI7Ozs7O0lBQ3ZCLG1DQUE0Qjs7Ozs7SUFDNUIsOENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlLCBQYWdlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJyZWFrcG9pbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWkvbGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEJSRUFLUE9JTlQsXG4gIExheW91dENvbmZpZyxcbiAgTGF5b3V0U2xvdENvbmZpZyxcbiAgU2xvdENvbmZpZyxcbn0gZnJvbSAnLi4vLi4vdWkvbGF5b3V0L2NvbmZpZy9sYXlvdXQtY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2VMYXlvdXRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjbXM6IENtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IExheW91dENvbmZpZyxcbiAgICBwcml2YXRlIGJyZWFrcG9pbnRTZXJ2aWNlOiBCcmVha3BvaW50U2VydmljZVxuICApIHt9XG5cbiAgLy8gd2UgcHJpbnQgd2FybiBtZXNzYWdlcyBvbiBtaXNzaW5nIGxheW91dCBjb25maWdzXG4gIC8vIG9ubHkgb25jZSB0byBub3QgcG9sdXRlIHRoZSBjb25zb2xlIGxvZ1xuICBwcml2YXRlIHdhcm5Mb2dNZXNzYWdlcyA9IHt9O1xuXG4gIC8vIFRPRE86XG4gIC8vIGRpc3RpbmN0VW50aWxDaGFuZ2VkIGlzIG5vdCBlbm91Z2ggaGVyZSwgcHJvYmFibHkgYmVjYXVzZVxuICAvLyB3ZSB1c2UgdGhlIHN0YXJ0V2l0aCBvcGVyYXRvciBpbiB0aGUgYnJlYWtwb2ludCBzZXJ2aWNlIHdoaWNoXG4gIC8vIGRvZXNuJ3Qgc2VlbSB0byB3b3JrIHdlbGwgd2l0aCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc2VlXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9SZWFjdGl2ZVgvcnhqcy9pc3N1ZXMvNDAzMFxuICBnZXRTbG90cyhzZWN0aW9uPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmJyZWFrcG9pbnQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoYnJlYWtwb2ludCA9PlxuICAgICAgICB0aGlzLnBhZ2UkLnBpcGUoXG4gICAgICAgICAgbWFwKHBhZ2UgPT5cbiAgICAgICAgICAgIHRoaXMuZ2V0U2xvdENvbmZpZyhwYWdlLnRlbXBsYXRlLCAnc2xvdHMnLCBzZWN0aW9uLCBicmVha3BvaW50KVxuICAgICAgICAgICksXG4gICAgICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgICAgIG1hcChjb25maWcgPT4gY29uZmlnLnNsb3RzKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICBnZXQgcGFnZSQoKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zLmdldEN1cnJlbnRQYWdlKCkucGlwZShmaWx0ZXIoQm9vbGVhbikpO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlTmFtZSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdlJC5waXBlKFxuICAgICAgZmlsdGVyKHBhZ2UgPT4gISFwYWdlLnRlbXBsYXRlKSxcbiAgICAgIG1hcCgocGFnZTogUGFnZSkgPT4gcGFnZS50ZW1wbGF0ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIGxvYWQgc2xvdHMgZnJvbSB0aGUgbGF5b3V0IGNvbmZpZ3VyYXRpb24uIFRoZSBicmVha3BvaW50IGlzIHVzZWRcbiAgICogdG8gbG9hZCBhIHNwZWNpZmljIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBnaXZlbiBicmVha3BvaW50LiBJZiB0aGVyZSdzXG4gICAqIG5vIGNvbmZpZ3VyYXRpb24gYXZhaWxhYmxlIGZvciB0aGUgZ2l2ZW4gYnJlYWtwb2ludCB0aGUgZGVmYXVsdCBzbG90XG4gICAqIGNvbmZpZ3VyYXRpb24gaXMgcmV0dXJuZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0U2xvdENvbmZpZyhcbiAgICB0ZW1wbGF0ZVVpZDogc3RyaW5nLFxuICAgIGNvbmZpZ0F0dHJpYnV0ZTogc3RyaW5nLFxuICAgIHNlY3Rpb24/OiBzdHJpbmcsXG4gICAgYnJlYWtwb2ludD86IEJSRUFLUE9JTlRcbiAgKTogU2xvdENvbmZpZyB7XG4gICAgY29uc3QgcGFnZVRlbXBsYXRlQ29uZmlnID0gdGhpcy5jb25maWcubGF5b3V0U2xvdHNbdGVtcGxhdGVVaWRdO1xuXG4gICAgaWYgKHNlY3Rpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFNsb3RDb25maWdGb3JTZWN0aW9uKFxuICAgICAgICB0ZW1wbGF0ZVVpZCxcbiAgICAgICAgY29uZmlnQXR0cmlidXRlLFxuICAgICAgICBzZWN0aW9uLFxuICAgICAgICBicmVha3BvaW50XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghcGFnZVRlbXBsYXRlQ29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub0NvbmZpZ0ZvdW5kKHRlbXBsYXRlVWlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVzcG9uc2l2ZVNsb3RDb25maWcoXG4gICAgICAgIDxMYXlvdXRTbG90Q29uZmlnPnBhZ2VUZW1wbGF0ZUNvbmZpZyxcbiAgICAgICAgY29uZmlnQXR0cmlidXRlLFxuICAgICAgICBicmVha3BvaW50XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTbG90Q29uZmlnRm9yU2VjdGlvbihcbiAgICB0ZW1wbGF0ZVVpZDogc3RyaW5nLFxuICAgIGNvbmZpZ0F0dHJpYnV0ZTogc3RyaW5nLFxuICAgIHNlY3Rpb24/OiBzdHJpbmcsXG4gICAgYnJlYWtwb2ludD86IEJSRUFLUE9JTlRcbiAgKTogU2xvdENvbmZpZyB7XG4gICAgY29uc3QgcGFnZVRlbXBsYXRlQ29uZmlnID0gdGhpcy5jb25maWcubGF5b3V0U2xvdHNbdGVtcGxhdGVVaWRdO1xuXG4gICAgaWYgKCFwYWdlVGVtcGxhdGVDb25maWcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIGlmIHRoZXJlJ3Mgbm8gc2VjdGlvbiBjb25maWcgb24gdGhlIHBhZ2UgbGF5b3V0XG4gICAgLy8gd2UgZmFsbCBiYWNrIHRvIHRoZSBnbG9iYWwgc2VjdGlvbiBjb25maWdcbiAgICBjb25zdCBzZWN0aW9uQ29uZmlnID0gcGFnZVRlbXBsYXRlQ29uZmlnW3NlY3Rpb25dXG4gICAgICA/IHBhZ2VUZW1wbGF0ZUNvbmZpZ1tzZWN0aW9uXVxuICAgICAgOiB0aGlzLmNvbmZpZy5sYXlvdXRTbG90c1tzZWN0aW9uXTtcblxuICAgIGlmICghc2VjdGlvbkNvbmZpZykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2l2ZUNvbmZpZyA9IHRoaXMuZ2V0UmVzcG9uc2l2ZVNsb3RDb25maWcoXG4gICAgICA8TGF5b3V0U2xvdENvbmZpZz5zZWN0aW9uQ29uZmlnLFxuICAgICAgY29uZmlnQXR0cmlidXRlLFxuICAgICAgYnJlYWtwb2ludFxuICAgICk7XG5cbiAgICBpZiAocmVzcG9uc2l2ZUNvbmZpZy5oYXNPd25Qcm9wZXJ0eShjb25maWdBdHRyaWJ1dGUpKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2l2ZUNvbmZpZztcbiAgICB9IGVsc2UgaWYgKHBhZ2VUZW1wbGF0ZUNvbmZpZ1tzZWN0aW9uXS5oYXNPd25Qcm9wZXJ0eShjb25maWdBdHRyaWJ1dGUpKSB7XG4gICAgICByZXR1cm4gcGFnZVRlbXBsYXRlQ29uZmlnW3NlY3Rpb25dO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWcubGF5b3V0U2xvdHNbc2VjdGlvbl0pIHtcbiAgICAgIHJldHVybiA8U2xvdENvbmZpZz50aGlzLmNvbmZpZy5sYXlvdXRTbG90c1tzZWN0aW9uXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2Ygc2xvdHMgZm9yIGEgYnJlYWtwb2ludCBzcGVjaWZpYyBjb25maWd1cmF0b2luXG4gICAqIElmIHRoZXJlJ3Mgbm8gc3BlY2lmaWMgY29uZmlndXJhdGlvbiBmb3IgdGhlIGJyZWFrcG9pbnQsXG4gICAqIHRoZSBjbG9zZXN0IGF2YWlsYWJsZSBjb25maWd1cmF0aW9uIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0UmVzcG9uc2l2ZVNsb3RDb25maWcoXG4gICAgbGF5b3V0U2xvdENvbmZpZzogTGF5b3V0U2xvdENvbmZpZyxcbiAgICBjb25maWdBdHRyaWJ1dGU6IHN0cmluZyxcbiAgICBicmVha3BvaW50PzogQlJFQUtQT0lOVFxuICApOiBTbG90Q29uZmlnIHtcbiAgICBsZXQgc2xvdENvbmZpZyA9IDxTbG90Q29uZmlnPmxheW91dFNsb3RDb25maWc7XG5cbiAgICAvLyBmYWxsYmFjayB0byBkZWZhdWx0IHNsb3QgY29uZmlnXG4gICAgaWYgKCFicmVha3BvaW50KSB7XG4gICAgICByZXR1cm4gc2xvdENvbmZpZztcbiAgICB9XG5cbiAgICAvLyB3ZSBoYXZlIGEgY29uZmlnIGZvciB0aGUgc3BlY2lmaWMgYnJlYWtwb2ludFxuICAgIGlmIChcbiAgICAgIGxheW91dFNsb3RDb25maWdbYnJlYWtwb2ludF0gJiZcbiAgICAgIGxheW91dFNsb3RDb25maWdbYnJlYWtwb2ludF0uaGFzT3duUHJvcGVydHkoY29uZmlnQXR0cmlidXRlKVxuICAgICkge1xuICAgICAgcmV0dXJuIDxTbG90Q29uZmlnPmxheW91dFNsb3RDb25maWdbYnJlYWtwb2ludF07XG4gICAgfVxuXG4gICAgLy8gZmluZCBjbG9zZXN0IGNvbmZpZ1xuICAgIGNvbnN0IGFsbCA9IHRoaXMuYnJlYWtwb2ludFNlcnZpY2UuYnJlYWtwb2ludHM7XG5cbiAgICBmb3IgKGNvbnN0IGJyIG9mIGFsbC5zcGxpY2UoMCwgYWxsLmluZGV4T2YoYnJlYWtwb2ludCkpKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGxheW91dFNsb3RDb25maWdbYnJdICYmXG4gICAgICAgIGxheW91dFNsb3RDb25maWdbYnJdLmhhc093blByb3BlcnR5KGNvbmZpZ0F0dHJpYnV0ZSlcbiAgICAgICkge1xuICAgICAgICBzbG90Q29uZmlnID0gPFNsb3RDb25maWc+bGF5b3V0U2xvdENvbmZpZ1ticl07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzbG90Q29uZmlnO1xuICB9XG5cbiAgcHJpdmF0ZSBub0NvbmZpZ0ZvdW5kKHRlbXBsYXRlOiBzdHJpbmcsIHNlY3Rpb24/OiBzdHJpbmcpIHtcbiAgICBpZiAoc2VjdGlvbikge1xuICAgICAgaWYgKCF0aGlzLndhcm5Mb2dNZXNzYWdlc1tzZWN0aW9uICsgJzonICsgdGVtcGxhdGVdKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgbm8gbGF5b3V0IGNvbmZpZyBmb3VuZCBmb3Igc2VjdGlvbiAke3NlY3Rpb259IG9mIHRlbXBsYXRlICR7dGVtcGxhdGV9YFxuICAgICAgICApO1xuICAgICAgICB0aGlzLndhcm5Mb2dNZXNzYWdlc1tzZWN0aW9uICsgJzonICsgdGVtcGxhdGVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCF0aGlzLndhcm5Mb2dNZXNzYWdlc1t0ZW1wbGF0ZV0pIHtcbiAgICAgIGNvbnNvbGUud2Fybihgbm8gbGF5b3V0IGNvbmZpZyBmb3VuZCBmb3IgJHt0ZW1wbGF0ZX1gKTtcbiAgICAgIHRoaXMud2FybkxvZ01lc3NhZ2VzW3RlbXBsYXRlXSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=