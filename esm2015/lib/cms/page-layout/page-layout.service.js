/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
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
        this.logSlots = {};
    }
    /**
     * @param {?=} section
     * @return {?}
     */
    getSlots(section) {
        return this.breakpointService.breakpoint$.pipe(switchMap(breakpoint => this.page$.pipe(map(page => {
            /** @type {?} */
            const config = this.getSlotConfig(page.template, 'slots', section, breakpoint);
            if (config && config.slots) {
                return config.slots;
            }
            else if (!section) {
                this.logMissingLayoutConfig(page);
                return Object.keys(page.slots);
            }
            else {
                this.logMissingLayoutConfig(page, section);
                return [];
            }
        }))), distinctUntilChanged());
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
        if (pageTemplateConfig) {
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
     * In order to help developers, we print some detailed log information in
     * case there's no layout configuration available for the given page template
     * or section. Additionally, the slot positions are printed in the console
     * in a format that can be copied / paste to the configuration.
     * @private
     * @param {?} page
     * @param {?=} section
     * @return {?}
     */
    logMissingLayoutConfig(page, section) {
        if (this.config.production) {
            return;
        }
        if (!this.logSlots[page.template]) {
            // the info log is not printed in production
            // tslint:disable-next-line: no-console
            console.info(`Available CMS page slots: '${Object.keys(page.slots).join(`','`)}'`);
            this.logSlots[page.template] = true;
        }
        /** @type {?} */
        const cacheKey = section || page.template;
        if (!this.warnLogMessages[cacheKey]) {
            console.warn(`No layout config found for ${cacheKey}, you can configure a 'LayoutConfig' to control the rendering of page slots.`);
            this.warnLogMessages[cacheKey] = true;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0saUJBQWlCLENBQUM7QUFFbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDbEYsT0FBTyxFQUVMLFlBQVksR0FHYixNQUFNLHNDQUFzQyxDQUFDO0FBRzlDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQUM1QixZQUNVLEdBQWUsRUFDZixNQUFvQixFQUNwQixpQkFBb0M7UUFGcEMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjs7O1FBS3RDLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFMbkIsQ0FBQzs7Ozs7SUFPSixRQUFRLENBQUMsT0FBZ0I7UUFDdkIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDNUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTs7a0JBQ0gsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQy9CLElBQUksQ0FBQyxRQUFRLEVBQ2IsT0FBTyxFQUNQLE9BQU8sRUFDUCxVQUFVLENBQ1g7WUFDRCxJQUFJLE1B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QUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUNyRSxDQUFDO1lBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3JDOztjQUVLLFFBQVEsR0FBRyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVE7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbkMsT0FBTyxDQUFDLElBQUksQ0FDViw4QkFBOEIsUUFBUSw4RUFBOEUsQ0FDckgsQ0FBQztZQUNGLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7O1lBekxGLFVBQVU7Ozs7WUFYRixVQUFVO1lBTWpCLFlBQVk7WUFITCxpQkFBaUI7Ozs7Ozs7SUFrQnhCLDRDQUE2Qjs7Ozs7SUFDN0IscUNBQXNCOzs7OztJQVJwQixnQ0FBdUI7Ozs7O0lBQ3ZCLG1DQUE0Qjs7Ozs7SUFDNUIsOENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zU2VydmljZSwgUGFnZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJyZWFrcG9pbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWkvbGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEJSRUFLUE9JTlQsXG4gIExheW91dENvbmZpZyxcbiAgTGF5b3V0U2xvdENvbmZpZyxcbiAgU2xvdENvbmZpZyxcbn0gZnJvbSAnLi4vLi4vdWkvbGF5b3V0L2NvbmZpZy9sYXlvdXQtY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2VMYXlvdXRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjbXM6IENtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IExheW91dENvbmZpZyxcbiAgICBwcml2YXRlIGJyZWFrcG9pbnRTZXJ2aWNlOiBCcmVha3BvaW50U2VydmljZVxuICApIHt9XG5cbiAgLy8gd2UgcHJpbnQgd2FybiBtZXNzYWdlcyBvbiBtaXNzaW5nIGxheW91dCBjb25maWdzXG4gIC8vIG9ubHkgb25jZSB0byBub3QgcG9sdXRlIHRoZSBjb25zb2xlIGxvZ1xuICBwcml2YXRlIHdhcm5Mb2dNZXNzYWdlcyA9IHt9O1xuICBwcml2YXRlIGxvZ1Nsb3RzID0ge307XG5cbiAgZ2V0U2xvdHMoc2VjdGlvbj86IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gdGhpcy5icmVha3BvaW50U2VydmljZS5icmVha3BvaW50JC5waXBlKFxuICAgICAgc3dpdGNoTWFwKGJyZWFrcG9pbnQgPT5cbiAgICAgICAgdGhpcy5wYWdlJC5waXBlKFxuICAgICAgICAgIG1hcChwYWdlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0U2xvdENvbmZpZyhcbiAgICAgICAgICAgICAgcGFnZS50ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgJ3Nsb3RzJyxcbiAgICAgICAgICAgICAgc2VjdGlvbixcbiAgICAgICAgICAgICAgYnJlYWtwb2ludFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLnNsb3RzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjb25maWcuc2xvdHM7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFzZWN0aW9uKSB7XG4gICAgICAgICAgICAgIHRoaXMubG9nTWlzc2luZ0xheW91dENvbmZpZyhwYWdlKTtcbiAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHBhZ2Uuc2xvdHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5sb2dNaXNzaW5nTGF5b3V0Q29uZmlnKHBhZ2UsIHNlY3Rpb24pO1xuICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgZ2V0IHBhZ2UkKCk6IE9ic2VydmFibGU8UGFnZT4ge1xuICAgIHJldHVybiB0aGlzLmNtcy5nZXRDdXJyZW50UGFnZSgpLnBpcGUoZmlsdGVyKEJvb2xlYW4pKTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZU5hbWUkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSQucGlwZShcbiAgICAgIGZpbHRlcihwYWdlID0+ICEhcGFnZS50ZW1wbGF0ZSksXG4gICAgICBtYXAoKHBhZ2U6IFBhZ2UpID0+IHBhZ2UudGVtcGxhdGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBsb2FkIHNsb3RzIGZyb20gdGhlIGxheW91dCBjb25maWd1cmF0aW9uLiBUaGUgYnJlYWtwb2ludCBpcyB1c2VkXG4gICAqIHRvIGxvYWQgYSBzcGVjaWZpYyBjb25maWd1cmF0aW9uIGZvciB0aGUgZ2l2ZW4gYnJlYWtwb2ludC4gSWYgdGhlcmUnc1xuICAgKiBubyBjb25maWd1cmF0aW9uIGF2YWlsYWJsZSBmb3IgdGhlIGdpdmVuIGJyZWFrcG9pbnQgdGhlIGRlZmF1bHQgc2xvdFxuICAgKiBjb25maWd1cmF0aW9uIGlzIHJldHVybmVkLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFNsb3RDb25maWcoXG4gICAgdGVtcGxhdGVVaWQ6IHN0cmluZyxcbiAgICBjb25maWdBdHRyaWJ1dGU6IHN0cmluZyxcbiAgICBzZWN0aW9uPzogc3RyaW5nLFxuICAgIGJyZWFrcG9pbnQ/OiBCUkVBS1BPSU5UXG4gICk6IFNsb3RDb25maWcge1xuICAgIGNvbnN0IHBhZ2VUZW1wbGF0ZUNvbmZpZyA9IHRoaXMuY29uZmlnLmxheW91dFNsb3RzW3RlbXBsYXRlVWlkXTtcblxuICAgIGlmIChzZWN0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTbG90Q29uZmlnRm9yU2VjdGlvbihcbiAgICAgICAgdGVtcGxhdGVVaWQsXG4gICAgICAgIGNvbmZpZ0F0dHJpYnV0ZSxcbiAgICAgICAgc2VjdGlvbixcbiAgICAgICAgYnJlYWtwb2ludFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAocGFnZVRlbXBsYXRlQ29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRSZXNwb25zaXZlU2xvdENvbmZpZyhcbiAgICAgICAgPExheW91dFNsb3RDb25maWc+cGFnZVRlbXBsYXRlQ29uZmlnLFxuICAgICAgICBjb25maWdBdHRyaWJ1dGUsXG4gICAgICAgIGJyZWFrcG9pbnRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNsb3RDb25maWdGb3JTZWN0aW9uKFxuICAgIHRlbXBsYXRlVWlkOiBzdHJpbmcsXG4gICAgY29uZmlnQXR0cmlidXRlOiBzdHJpbmcsXG4gICAgc2VjdGlvbj86IHN0cmluZyxcbiAgICBicmVha3BvaW50PzogQlJFQUtQT0lOVFxuICApOiBTbG90Q29uZmlnIHtcbiAgICBjb25zdCBwYWdlVGVtcGxhdGVDb25maWcgPSB0aGlzLmNvbmZpZy5sYXlvdXRTbG90c1t0ZW1wbGF0ZVVpZF07XG5cbiAgICBpZiAoIXBhZ2VUZW1wbGF0ZUNvbmZpZykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlcmUncyBubyBzZWN0aW9uIGNvbmZpZyBvbiB0aGUgcGFnZSBsYXlvdXRcbiAgICAvLyB3ZSBmYWxsIGJhY2sgdG8gdGhlIGdsb2JhbCBzZWN0aW9uIGNvbmZpZ1xuICAgIGNvbnN0IHNlY3Rpb25Db25maWcgPSBwYWdlVGVtcGxhdGVDb25maWdbc2VjdGlvbl1cbiAgICAgID8gcGFnZVRlbXBsYXRlQ29uZmlnW3NlY3Rpb25dXG4gICAgICA6IHRoaXMuY29uZmlnLmxheW91dFNsb3RzW3NlY3Rpb25dO1xuXG4gICAgaWYgKCFzZWN0aW9uQ29uZmlnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zaXZlQ29uZmlnID0gdGhpcy5nZXRSZXNwb25zaXZlU2xvdENvbmZpZyhcbiAgICAgIDxMYXlvdXRTbG90Q29uZmlnPnNlY3Rpb25Db25maWcsXG4gICAgICBjb25maWdBdHRyaWJ1dGUsXG4gICAgICBicmVha3BvaW50XG4gICAgKTtcblxuICAgIGlmIChyZXNwb25zaXZlQ29uZmlnLmhhc093blByb3BlcnR5KGNvbmZpZ0F0dHJpYnV0ZSkpIHtcbiAgICAgIHJldHVybiByZXNwb25zaXZlQ29uZmlnO1xuICAgIH0gZWxzZSBpZiAocGFnZVRlbXBsYXRlQ29uZmlnW3NlY3Rpb25dLmhhc093blByb3BlcnR5KGNvbmZpZ0F0dHJpYnV0ZSkpIHtcbiAgICAgIHJldHVybiBwYWdlVGVtcGxhdGVDb25maWdbc2VjdGlvbl07XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5sYXlvdXRTbG90c1tzZWN0aW9uXSkge1xuICAgICAgcmV0dXJuIDxTbG90Q29uZmlnPnRoaXMuY29uZmlnLmxheW91dFNsb3RzW3NlY3Rpb25dO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBzbG90cyBmb3IgYSBicmVha3BvaW50IHNwZWNpZmljIGNvbmZpZ3VyYXRvaW5cbiAgICogSWYgdGhlcmUncyBubyBzcGVjaWZpYyBjb25maWd1cmF0aW9uIGZvciB0aGUgYnJlYWtwb2ludCxcbiAgICogdGhlIGNsb3Nlc3QgYXZhaWxhYmxlIGNvbmZpZ3VyYXRpb24gd2lsbCBiZSByZXR1cm5lZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRSZXNwb25zaXZlU2xvdENvbmZpZyhcbiAgICBsYXlvdXRTbG90Q29uZmlnOiBMYXlvdXRTbG90Q29uZmlnLFxuICAgIGNvbmZpZ0F0dHJpYnV0ZTogc3RyaW5nLFxuICAgIGJyZWFrcG9pbnQ/OiBCUkVBS1BPSU5UXG4gICk6IFNsb3RDb25maWcge1xuICAgIGxldCBzbG90Q29uZmlnID0gPFNsb3RDb25maWc+bGF5b3V0U2xvdENvbmZpZztcblxuICAgIC8vIGZhbGxiYWNrIHRvIGRlZmF1bHQgc2xvdCBjb25maWdcbiAgICBpZiAoIWJyZWFrcG9pbnQpIHtcbiAgICAgIHJldHVybiBzbG90Q29uZmlnO1xuICAgIH1cblxuICAgIC8vIHdlIGhhdmUgYSBjb25maWcgZm9yIHRoZSBzcGVjaWZpYyBicmVha3BvaW50XG4gICAgaWYgKFxuICAgICAgbGF5b3V0U2xvdENvbmZpZ1ticmVha3BvaW50XSAmJlxuICAgICAgbGF5b3V0U2xvdENvbmZpZ1ticmVha3BvaW50XS5oYXNPd25Qcm9wZXJ0eShjb25maWdBdHRyaWJ1dGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gPFNsb3RDb25maWc+bGF5b3V0U2xvdENvbmZpZ1ticmVha3BvaW50XTtcbiAgICB9XG5cbiAgICAvLyBmaW5kIGNsb3Nlc3QgY29uZmlnXG4gICAgY29uc3QgYWxsID0gdGhpcy5icmVha3BvaW50U2VydmljZS5icmVha3BvaW50cztcblxuICAgIGZvciAoY29uc3QgYnIgb2YgYWxsLnNwbGljZSgwLCBhbGwuaW5kZXhPZihicmVha3BvaW50KSkpIHtcbiAgICAgIGlmIChcbiAgICAgICAgbGF5b3V0U2xvdENvbmZpZ1ticl0gJiZcbiAgICAgICAgbGF5b3V0U2xvdENvbmZpZ1ticl0uaGFzT3duUHJvcGVydHkoY29uZmlnQXR0cmlidXRlKVxuICAgICAgKSB7XG4gICAgICAgIHNsb3RDb25maWcgPSA8U2xvdENvbmZpZz5sYXlvdXRTbG90Q29uZmlnW2JyXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNsb3RDb25maWc7XG4gIH1cblxuICAvKipcbiAgICogSW4gb3JkZXIgdG8gaGVscCBkZXZlbG9wZXJzLCB3ZSBwcmludCBzb21lIGRldGFpbGVkIGxvZyBpbmZvcm1hdGlvbiBpblxuICAgKiBjYXNlIHRoZXJlJ3Mgbm8gbGF5b3V0IGNvbmZpZ3VyYXRpb24gYXZhaWxhYmxlIGZvciB0aGUgZ2l2ZW4gcGFnZSB0ZW1wbGF0ZVxuICAgKiBvciBzZWN0aW9uLiBBZGRpdGlvbmFsbHksIHRoZSBzbG90IHBvc2l0aW9ucyBhcmUgcHJpbnRlZCBpbiB0aGUgY29uc29sZVxuICAgKiBpbiBhIGZvcm1hdCB0aGF0IGNhbiBiZSBjb3BpZWQgLyBwYXN0ZSB0byB0aGUgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIHByaXZhdGUgbG9nTWlzc2luZ0xheW91dENvbmZpZyhwYWdlOiBQYWdlLCBzZWN0aW9uPzogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnByb2R1Y3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmxvZ1Nsb3RzW3BhZ2UudGVtcGxhdGVdKSB7XG4gICAgICAvLyB0aGUgaW5mbyBsb2cgaXMgbm90IHByaW50ZWQgaW4gcHJvZHVjdGlvblxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgIGBBdmFpbGFibGUgQ01TIHBhZ2Ugc2xvdHM6ICcke09iamVjdC5rZXlzKHBhZ2Uuc2xvdHMpLmpvaW4oYCcsJ2ApfSdgXG4gICAgICApO1xuICAgICAgdGhpcy5sb2dTbG90c1twYWdlLnRlbXBsYXRlXSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgY2FjaGVLZXkgPSBzZWN0aW9uIHx8IHBhZ2UudGVtcGxhdGU7XG4gICAgaWYgKCF0aGlzLndhcm5Mb2dNZXNzYWdlc1tjYWNoZUtleV0pIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYE5vIGxheW91dCBjb25maWcgZm91bmQgZm9yICR7Y2FjaGVLZXl9LCB5b3UgY2FuIGNvbmZpZ3VyZSBhICdMYXlvdXRDb25maWcnIHRvIGNvbnRyb2wgdGhlIHJlbmRlcmluZyBvZiBwYWdlIHNsb3RzLmBcbiAgICAgICk7XG4gICAgICB0aGlzLndhcm5Mb2dNZXNzYWdlc1tjYWNoZUtleV0gPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl19