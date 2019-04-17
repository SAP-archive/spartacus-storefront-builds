/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { switchMap, distinctUntilChanged, map, filter } from 'rxjs/operators';
import { CmsService } from '@spartacus/core';
import { BreakpointService } from '../../ui/layout/breakpoint/breakpoint.service';
import { LayoutConfig, } from '../../ui/layout/config/layout-config';
export class PageLayoutService {
    /**
     * @param {?} cms
     * @param {?} config
     * @param {?} breakpointService
     */
    constructor(cms, config, breakpointService) {
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
    /**
     * @param {?=} section
     * @return {?}
     */
    getSlots(section) {
        return this.breakpointService.breakpoint$.pipe(switchMap(breakpoint => this.page$.pipe(map(page => this.getSlotConfig(page.template, 'slots', section, breakpoint)), filter(Boolean), map(config => config.slots))), distinctUntilChanged());
    }
    /**
     * @return {?}
     */
    get page$() {
        return this.cms.getCurrentPage().pipe(filter(Boolean));
    }
    /**
     * @return {?}
     */
    get templateName$() {
        return this.page$.pipe(filter(page => !!page.template), map((page) => page.template));
    }
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
    getSlotConfig(templateUid, configAttribute, section, breakpoint) {
        /** @type {?} */
        const pageTemplateConfig = this.config.layoutSlots[templateUid];
        if (section) {
            return this.getSlotConfigForSection(templateUid, configAttribute, section, breakpoint);
        }
        if (!pageTemplateConfig) {
            return this.noConfigFound(templateUid);
        }
        else {
            return this.getResponsiveSlotConfig((/** @type {?} */ (pageTemplateConfig)), configAttribute, breakpoint);
        }
    }
    /**
     * @protected
     * @param {?} templateUid
     * @param {?} configAttribute
     * @param {?=} section
     * @param {?=} breakpoint
     * @return {?}
     */
    getSlotConfigForSection(templateUid, configAttribute, section, breakpoint) {
        /** @type {?} */
        const pageTemplateConfig = this.config.layoutSlots[templateUid];
        if (!pageTemplateConfig) {
            return null;
        }
        // if there's no section config on the page layout
        // we fall back to the global section config
        /** @type {?} */
        const sectionConfig = pageTemplateConfig[section]
            ? pageTemplateConfig[section]
            : this.config.layoutSlots[section];
        if (!sectionConfig) {
            return null;
        }
        /** @type {?} */
        const responsiveConfig = this.getResponsiveSlotConfig((/** @type {?} */ (sectionConfig)), configAttribute, breakpoint);
        if (responsiveConfig.hasOwnProperty(configAttribute)) {
            return responsiveConfig;
        }
        else if (pageTemplateConfig[section].hasOwnProperty(configAttribute)) {
            return pageTemplateConfig[section];
        }
        else if (this.config.layoutSlots[section]) {
            return (/** @type {?} */ (this.config.layoutSlots[section]));
        }
    }
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
    getResponsiveSlotConfig(layoutSlotConfig, configAttribute, breakpoint) {
        /** @type {?} */
        let slotConfig = (/** @type {?} */ (layoutSlotConfig));
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
        const all = this.breakpointService.breakpoints;
        for (const br of all.splice(0, all.indexOf(breakpoint))) {
            if (layoutSlotConfig[br] &&
                layoutSlotConfig[br].hasOwnProperty(configAttribute)) {
                slotConfig = (/** @type {?} */ (layoutSlotConfig[br]));
            }
        }
        return slotConfig;
    }
    /**
     * @private
     * @param {?} template
     * @param {?=} section
     * @return {?}
     */
    noConfigFound(template, section) {
        if (section) {
            if (!this.warnLogMessages[section + ':' + template]) {
                console.warn(`no layout config found for section ${section} of template ${template}`);
                this.warnLogMessages[section + ':' + template] = true;
            }
        }
        else if (!this.warnLogMessages[template]) {
            console.warn(`no layout config found for ${template}`);
            this.warnLogMessages[template] = true;
        }
        return null;
    }
}
PageLayoutService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PageLayoutService.ctorParameters = () => [
    { type: CmsService },
    { type: LayoutConfig },
    { type: BreakpointService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDbEYsT0FBTyxFQUVMLFlBQVksR0FHYixNQUFNLHNDQUFzQyxDQUFDO0FBRzlDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQUM1QixZQUNVLEdBQWUsRUFDZixNQUFvQixFQUNwQixpQkFBb0M7UUFGcEMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjs7O1FBS3RDLG9CQUFlLEdBQUcsRUFBRSxDQUFDO0lBSjFCLENBQUM7Ozs7Ozs7Ozs7SUFXSixRQUFRLENBQUMsT0FBZ0I7UUFDdkIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDNUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUNULElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUNoRSxFQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMs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QUFDOzs7WUF0S0YsVUFBVTs7OztZQVRGLFVBQVU7WUFJakIsWUFBWTtZQUhMLGlCQUFpQjs7Ozs7OztJQWtCeEIsNENBQTZCOzs7OztJQVAzQixnQ0FBdUI7Ozs7O0lBQ3ZCLG1DQUE0Qjs7Ozs7SUFDNUIsOENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlLCBQYWdlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJyZWFrcG9pbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWkvbGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEJSRUFLUE9JTlQsXG4gIExheW91dENvbmZpZyxcbiAgTGF5b3V0U2xvdENvbmZpZyxcbiAgU2xvdENvbmZpZyxcbn0gZnJvbSAnLi4vLi4vdWkvbGF5b3V0L2NvbmZpZy9sYXlvdXQtY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2VMYXlvdXRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjbXM6IENtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IExheW91dENvbmZpZyxcbiAgICBwcml2YXRlIGJyZWFrcG9pbnRTZXJ2aWNlOiBCcmVha3BvaW50U2VydmljZVxuICApIHt9XG5cbiAgLy8gd2UgcHJpbnQgd2FybiBtZXNzYWdlcyBvbiBtaXNzaW5nIGxheW91dCBjb25maWdzXG4gIC8vIG9ubHkgb25jZSB0byBub3QgcG9sdXRlIHRoZSBjb25zb2xlIGxvZ1xuICBwcml2YXRlIHdhcm5Mb2dNZXNzYWdlcyA9IHt9O1xuXG4gIC8vIFRPRE86XG4gIC8vIGRpc3RpbmN0VW50aWxDaGFuZ2VkIGlzIG5vdCBlbm91Z2ggaGVyZSwgcHJvYmFibHkgYmVjYXVzZVxuICAvLyB3ZSB1c2UgdGhlIHN0YXJ0V2l0aCBvcGVyYXRvciBpbiB0aGUgYnJlYWtwb2ludCBzZXJ2aWNlIHdoaWNoXG4gIC8vIGRvZXNuJ3Qgc2VlbSB0byB3b3JrIHdlbGwgd2l0aCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc2VlXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9SZWFjdGl2ZVgvcnhqcy9pc3N1ZXMvNDAzMFxuICBnZXRTbG90cyhzZWN0aW9uPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmJyZWFrcG9pbnQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoYnJlYWtwb2ludCA9PlxuICAgICAgICB0aGlzLnBhZ2UkLnBpcGUoXG4gICAgICAgICAgbWFwKHBhZ2UgPT5cbiAgICAgICAgICAgIHRoaXMuZ2V0U2xvdENvbmZpZyhwYWdlLnRlbXBsYXRlLCAnc2xvdHMnLCBzZWN0aW9uLCBicmVha3BvaW50KVxuICAgICAgICAgICksXG4gICAgICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgICAgIG1hcChjb25maWcgPT4gY29uZmlnLnNsb3RzKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICBnZXQgcGFnZSQoKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zLmdldEN1cnJlbnRQYWdlKCkucGlwZShmaWx0ZXIoQm9vbGVhbikpO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlTmFtZSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdlJC5waXBlKFxuICAgICAgZmlsdGVyKHBhZ2UgPT4gISFwYWdlLnRlbXBsYXRlKSxcbiAgICAgIG1hcCgocGFnZTogUGFnZSkgPT4gcGFnZS50ZW1wbGF0ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIGxvYWQgc2xvdHMgZnJvbSB0aGUgbGF5b3V0IGNvbmZpZ3VyYXRpb24uIFRoZSBicmVha3BvaW50IGlzIHVzZWRcbiAgICogdG8gbG9hZCBhIHNwZWNpZmljIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBnaXZlbiBicmVha3BvaW50LiBJZiB0aGVyZSdzXG4gICAqIG5vIGNvbmZpZ3VyYXRpb24gYXZhaWxhYmxlIGZvciB0aGUgZ2l2ZW4gYnJlYWtwb2ludCB0aGUgZGVmYXVsdCBzbG90XG4gICAqIGNvbmZpZ3VyYXRpb24gaXMgcmV0dXJuZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0U2xvdENvbmZpZyhcbiAgICB0ZW1wbGF0ZVVpZDogc3RyaW5nLFxuICAgIGNvbmZpZ0F0dHJpYnV0ZTogc3RyaW5nLFxuICAgIHNlY3Rpb24/OiBzdHJpbmcsXG4gICAgYnJlYWtwb2ludD86IEJSRUFLUE9JTlRcbiAgKTogU2xvdENvbmZpZyB7XG4gICAgY29uc3QgcGFnZVRlbXBsYXRlQ29uZmlnID0gdGhpcy5jb25maWcubGF5b3V0U2xvdHNbdGVtcGxhdGVVaWRdO1xuXG4gICAgaWYgKHNlY3Rpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFNsb3RDb25maWdGb3JTZWN0aW9uKFxuICAgICAgICB0ZW1wbGF0ZVVpZCxcbiAgICAgICAgY29uZmlnQXR0cmlidXRlLFxuICAgICAgICBzZWN0aW9uLFxuICAgICAgICBicmVha3BvaW50XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghcGFnZVRlbXBsYXRlQ29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub0NvbmZpZ0ZvdW5kKHRlbXBsYXRlVWlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVzcG9uc2l2ZVNsb3RDb25maWcoXG4gICAgICAgIDxMYXlvdXRTbG90Q29uZmlnPnBhZ2VUZW1wbGF0ZUNvbmZpZyxcbiAgICAgICAgY29uZmlnQXR0cmlidXRlLFxuICAgICAgICBicmVha3BvaW50XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTbG90Q29uZmlnRm9yU2VjdGlvbihcbiAgICB0ZW1wbGF0ZVVpZDogc3RyaW5nLFxuICAgIGNvbmZpZ0F0dHJpYnV0ZTogc3RyaW5nLFxuICAgIHNlY3Rpb24/OiBzdHJpbmcsXG4gICAgYnJlYWtwb2ludD86IEJSRUFLUE9JTlRcbiAgKTogU2xvdENvbmZpZyB7XG4gICAgY29uc3QgcGFnZVRlbXBsYXRlQ29uZmlnID0gdGhpcy5jb25maWcubGF5b3V0U2xvdHNbdGVtcGxhdGVVaWRdO1xuXG4gICAgaWYgKCFwYWdlVGVtcGxhdGVDb25maWcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIGlmIHRoZXJlJ3Mgbm8gc2VjdGlvbiBjb25maWcgb24gdGhlIHBhZ2UgbGF5b3V0XG4gICAgLy8gd2UgZmFsbCBiYWNrIHRvIHRoZSBnbG9iYWwgc2VjdGlvbiBjb25maWdcbiAgICBjb25zdCBzZWN0aW9uQ29uZmlnID0gcGFnZVRlbXBsYXRlQ29uZmlnW3NlY3Rpb25dXG4gICAgICA/IHBhZ2VUZW1wbGF0ZUNvbmZpZ1tzZWN0aW9uXVxuICAgICAgOiB0aGlzLmNvbmZpZy5sYXlvdXRTbG90c1tzZWN0aW9uXTtcblxuICAgIGlmICghc2VjdGlvbkNvbmZpZykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2l2ZUNvbmZpZyA9IHRoaXMuZ2V0UmVzcG9uc2l2ZVNsb3RDb25maWcoXG4gICAgICA8TGF5b3V0U2xvdENvbmZpZz5zZWN0aW9uQ29uZmlnLFxuICAgICAgY29uZmlnQXR0cmlidXRlLFxuICAgICAgYnJlYWtwb2ludFxuICAgICk7XG5cbiAgICBpZiAocmVzcG9uc2l2ZUNvbmZpZy5oYXNPd25Qcm9wZXJ0eShjb25maWdBdHRyaWJ1dGUpKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2l2ZUNvbmZpZztcbiAgICB9IGVsc2UgaWYgKHBhZ2VUZW1wbGF0ZUNvbmZpZ1tzZWN0aW9uXS5oYXNPd25Qcm9wZXJ0eShjb25maWdBdHRyaWJ1dGUpKSB7XG4gICAgICByZXR1cm4gcGFnZVRlbXBsYXRlQ29uZmlnW3NlY3Rpb25dO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWcubGF5b3V0U2xvdHNbc2VjdGlvbl0pIHtcbiAgICAgIHJldHVybiA8U2xvdENvbmZpZz50aGlzLmNvbmZpZy5sYXlvdXRTbG90c1tzZWN0aW9uXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2Ygc2xvdHMgZm9yIGEgYnJlYWtwb2ludCBzcGVjaWZpYyBjb25maWd1cmF0b2luXG4gICAqIElmIHRoZXJlJ3Mgbm8gc3BlY2lmaWMgY29uZmlndXJhdGlvbiBmb3IgdGhlIGJyZWFrcG9pbnQsXG4gICAqIHRoZSBjbG9zZXN0IGF2YWlsYWJsZSBjb25maWd1cmF0aW9uIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0UmVzcG9uc2l2ZVNsb3RDb25maWcoXG4gICAgbGF5b3V0U2xvdENvbmZpZzogTGF5b3V0U2xvdENvbmZpZyxcbiAgICBjb25maWdBdHRyaWJ1dGU6IHN0cmluZyxcbiAgICBicmVha3BvaW50PzogQlJFQUtQT0lOVFxuICApOiBTbG90Q29uZmlnIHtcbiAgICBsZXQgc2xvdENvbmZpZyA9IDxTbG90Q29uZmlnPmxheW91dFNsb3RDb25maWc7XG5cbiAgICAvLyBmYWxsYmFjayB0byBkZWZhdWx0IHNsb3QgY29uZmlnXG4gICAgaWYgKCFicmVha3BvaW50KSB7XG4gICAgICByZXR1cm4gc2xvdENvbmZpZztcbiAgICB9XG5cbiAgICAvLyB3ZSBoYXZlIGEgY29uZmlnIGZvciB0aGUgc3BlY2lmaWMgYnJlYWtwb2ludFxuICAgIGlmIChcbiAgICAgIGxheW91dFNsb3RDb25maWdbYnJlYWtwb2ludF0gJiZcbiAgICAgIGxheW91dFNsb3RDb25maWdbYnJlYWtwb2ludF0uaGFzT3duUHJvcGVydHkoY29uZmlnQXR0cmlidXRlKVxuICAgICkge1xuICAgICAgcmV0dXJuIDxTbG90Q29uZmlnPmxheW91dFNsb3RDb25maWdbYnJlYWtwb2ludF07XG4gICAgfVxuXG4gICAgLy8gZmluZCBjbG9zZXN0IGNvbmZpZ1xuICAgIGNvbnN0IGFsbCA9IHRoaXMuYnJlYWtwb2ludFNlcnZpY2UuYnJlYWtwb2ludHM7XG5cbiAgICBmb3IgKGNvbnN0IGJyIG9mIGFsbC5zcGxpY2UoMCwgYWxsLmluZGV4T2YoYnJlYWtwb2ludCkpKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGxheW91dFNsb3RDb25maWdbYnJdICYmXG4gICAgICAgIGxheW91dFNsb3RDb25maWdbYnJdLmhhc093blByb3BlcnR5KGNvbmZpZ0F0dHJpYnV0ZSlcbiAgICAgICkge1xuICAgICAgICBzbG90Q29uZmlnID0gPFNsb3RDb25maWc+bGF5b3V0U2xvdENvbmZpZ1ticl07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzbG90Q29uZmlnO1xuICB9XG5cbiAgcHJpdmF0ZSBub0NvbmZpZ0ZvdW5kKHRlbXBsYXRlOiBzdHJpbmcsIHNlY3Rpb24/OiBzdHJpbmcpIHtcbiAgICBpZiAoc2VjdGlvbikge1xuICAgICAgaWYgKCF0aGlzLndhcm5Mb2dNZXNzYWdlc1tzZWN0aW9uICsgJzonICsgdGVtcGxhdGVdKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgbm8gbGF5b3V0IGNvbmZpZyBmb3VuZCBmb3Igc2VjdGlvbiAke3NlY3Rpb259IG9mIHRlbXBsYXRlICR7dGVtcGxhdGV9YFxuICAgICAgICApO1xuICAgICAgICB0aGlzLndhcm5Mb2dNZXNzYWdlc1tzZWN0aW9uICsgJzonICsgdGVtcGxhdGVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCF0aGlzLndhcm5Mb2dNZXNzYWdlc1t0ZW1wbGF0ZV0pIHtcbiAgICAgIGNvbnNvbGUud2Fybihgbm8gbGF5b3V0IGNvbmZpZyBmb3VuZCBmb3IgJHt0ZW1wbGF0ZX1gKTtcbiAgICAgIHRoaXMud2FybkxvZ01lc3NhZ2VzW3RlbXBsYXRlXSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=