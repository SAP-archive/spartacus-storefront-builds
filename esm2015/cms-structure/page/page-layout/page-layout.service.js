/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, isDevMode, Optional } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
import { LayoutConfig, } from '../../../layout/config/layout-config';
import { PAGE_LAYOUT_HANDLER } from './page-layout-handler';
export class PageLayoutService {
    /**
     * @param {?} cms
     * @param {?} config
     * @param {?} breakpointService
     * @param {?} handlers
     */
    constructor(cms, config, breakpointService, handlers) {
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
    getSlots(section) {
        return combineLatest([this.page$, this.breakpointService.breakpoint$]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([page, breakpoint]) => {
            /** @type {?} */
            const pageTemplate = page.template;
            /** @type {?} */
            const slots = this.resolveSlots(page, section, breakpoint);
            return { slots, pageTemplate, breakpoint };
        })), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ slots, pageTemplate, breakpoint }) => {
            /** @type {?} */
            let result = of(slots);
            for (const handler of this.handlers || []) {
                result = handler.handle(result, pageTemplate, section, breakpoint);
            }
            return result;
        })), distinctUntilChanged());
    }
    /**
     * @private
     * @param {?} page
     * @param {?} section
     * @param {?} breakpoint
     * @return {?}
     */
    resolveSlots(page, section, breakpoint) {
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
        return this.page$.pipe(filter((/**
         * @param {?} page
         * @return {?}
         */
        page => !!page.template)), map((/**
         * @param {?} page
         * @return {?}
         */
        (page) => page.template)));
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
        if (!this.config.layoutSlots) {
            return null;
        }
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
        if (!isDevMode()) {
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
    { type: BreakpointService },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [PAGE_LAYOUT_HANDLER,] }] }
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
    /**
     * @type {?}
     * @private
     */
    PageLayoutService.prototype.handlers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNsRixPQUFPLEVBRUwsWUFBWSxHQUdiLE1BQU0sc0NBQXNDLENBQUM7QUFDOUMsT0FBTyxFQUFxQixtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRy9FLE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7SUFDNUIsWUFDVSxHQUFlLEVBQ2YsTUFBb0IsRUFDcEIsaUJBQW9DLEVBR3BDLFFBQTZCO1FBTDdCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFHcEMsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7OztRQUsvQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixhQUFRLEdBQUcsRUFBRSxDQUFDO0lBTG5CLENBQUM7Ozs7O0lBT0osUUFBUSxDQUFDLE9BQWdCO1FBQ3ZCLE9BQU8sYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlC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QUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sQ0FBQyxJQUFJLENBQ1YsOEJBQThCLFFBQVEsOEVBQThFLENBQ3JILENBQUM7WUFDRixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN2QztJQUNILENBQUM7OztZQXhNRixVQUFVOzs7O1lBWkYsVUFBVTtZQU1qQixZQUFZO1lBSEwsaUJBQWlCO3dDQWVyQixRQUFRLFlBQ1IsTUFBTSxTQUFDLG1CQUFtQjs7Ozs7OztJQU03Qiw0Q0FBNkI7Ozs7O0lBQzdCLHFDQUFzQjs7Ozs7SUFYcEIsZ0NBQXVCOzs7OztJQUN2QixtQ0FBNEI7Ozs7O0lBQzVCLDhDQUE0Qzs7Ozs7SUFDNUMscUNBRXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBpc0Rldk1vZGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlLCBQYWdlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJyZWFrcG9pbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEJSRUFLUE9JTlQsXG4gIExheW91dENvbmZpZyxcbiAgTGF5b3V0U2xvdENvbmZpZyxcbiAgU2xvdENvbmZpZyxcbn0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2NvbmZpZy9sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRIYW5kbGVyLCBQQUdFX0xBWU9VVF9IQU5ETEVSIH0gZnJvbSAnLi9wYWdlLWxheW91dC1oYW5kbGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2VMYXlvdXRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjbXM6IENtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IExheW91dENvbmZpZyxcbiAgICBwcml2YXRlIGJyZWFrcG9pbnRTZXJ2aWNlOiBCcmVha3BvaW50U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoUEFHRV9MQVlPVVRfSEFORExFUilcbiAgICBwcml2YXRlIGhhbmRsZXJzOiBQYWdlTGF5b3V0SGFuZGxlcltdXG4gICkge31cblxuICAvLyB3ZSBwcmludCB3YXJuIG1lc3NhZ2VzIG9uIG1pc3NpbmcgbGF5b3V0IGNvbmZpZ3NcbiAgLy8gb25seSBvbmNlIHRvIG5vdCBwb2x1dGUgdGhlIGNvbnNvbGUgbG9nXG4gIHByaXZhdGUgd2FybkxvZ01lc3NhZ2VzID0ge307XG4gIHByaXZhdGUgbG9nU2xvdHMgPSB7fTtcblxuICBnZXRTbG90cyhzZWN0aW9uPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFt0aGlzLnBhZ2UkLCB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmJyZWFrcG9pbnQkXSkucGlwZShcbiAgICAgIG1hcCgoW3BhZ2UsIGJyZWFrcG9pbnRdKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2VUZW1wbGF0ZSA9IHBhZ2UudGVtcGxhdGU7XG4gICAgICAgIGNvbnN0IHNsb3RzID0gdGhpcy5yZXNvbHZlU2xvdHMocGFnZSwgc2VjdGlvbiwgYnJlYWtwb2ludCk7XG4gICAgICAgIHJldHVybiB7IHNsb3RzLCBwYWdlVGVtcGxhdGUsIGJyZWFrcG9pbnQgfTtcbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKCh7IHNsb3RzLCBwYWdlVGVtcGxhdGUsIGJyZWFrcG9pbnQgfSkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gb2Yoc2xvdHMpO1xuICAgICAgICBmb3IgKGNvbnN0IGhhbmRsZXIgb2YgdGhpcy5oYW5kbGVycyB8fCBbXSkge1xuICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIuaGFuZGxlKHJlc3VsdCwgcGFnZVRlbXBsYXRlLCBzZWN0aW9uLCBicmVha3BvaW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZVNsb3RzKHBhZ2UsIHNlY3Rpb24sIGJyZWFrcG9pbnQpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXRTbG90Q29uZmlnKFxuICAgICAgcGFnZS50ZW1wbGF0ZSxcbiAgICAgICdzbG90cycsXG4gICAgICBzZWN0aW9uLFxuICAgICAgYnJlYWtwb2ludFxuICAgICk7XG4gICAgaWYgKGNvbmZpZyAmJiBjb25maWcuc2xvdHMpIHtcbiAgICAgIHJldHVybiBjb25maWcuc2xvdHM7XG4gICAgfSBlbHNlIGlmICghc2VjdGlvbikge1xuICAgICAgdGhpcy5sb2dNaXNzaW5nTGF5b3V0Q29uZmlnKHBhZ2UpO1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHBhZ2Uuc2xvdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZ01pc3NpbmdMYXlvdXRDb25maWcocGFnZSwgc2VjdGlvbik7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgZ2V0IHBhZ2UkKCk6IE9ic2VydmFibGU8UGFnZT4ge1xuICAgIHJldHVybiB0aGlzLmNtcy5nZXRDdXJyZW50UGFnZSgpLnBpcGUoZmlsdGVyKEJvb2xlYW4pKTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZU5hbWUkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSQucGlwZShcbiAgICAgIGZpbHRlcihwYWdlID0+ICEhcGFnZS50ZW1wbGF0ZSksXG4gICAgICBtYXAoKHBhZ2U6IFBhZ2UpID0+IHBhZ2UudGVtcGxhdGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBsb2FkIHNsb3RzIGZyb20gdGhlIGxheW91dCBjb25maWd1cmF0aW9uLiBUaGUgYnJlYWtwb2ludCBpcyB1c2VkXG4gICAqIHRvIGxvYWQgYSBzcGVjaWZpYyBjb25maWd1cmF0aW9uIGZvciB0aGUgZ2l2ZW4gYnJlYWtwb2ludC4gSWYgdGhlcmUnc1xuICAgKiBubyBjb25maWd1cmF0aW9uIGF2YWlsYWJsZSBmb3IgdGhlIGdpdmVuIGJyZWFrcG9pbnQgdGhlIGRlZmF1bHQgc2xvdFxuICAgKiBjb25maWd1cmF0aW9uIGlzIHJldHVybmVkLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFNsb3RDb25maWcoXG4gICAgdGVtcGxhdGVVaWQ6IHN0cmluZyxcbiAgICBjb25maWdBdHRyaWJ1dGU6IHN0cmluZyxcbiAgICBzZWN0aW9uPzogc3RyaW5nLFxuICAgIGJyZWFrcG9pbnQ/OiBCUkVBS1BPSU5UXG4gICk6IFNsb3RDb25maWcge1xuICAgIGlmICghdGhpcy5jb25maWcubGF5b3V0U2xvdHMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBwYWdlVGVtcGxhdGVDb25maWcgPSB0aGlzLmNvbmZpZy5sYXlvdXRTbG90c1t0ZW1wbGF0ZVVpZF07XG5cbiAgICBpZiAoc2VjdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U2xvdENvbmZpZ0ZvclNlY3Rpb24oXG4gICAgICAgIHRlbXBsYXRlVWlkLFxuICAgICAgICBjb25maWdBdHRyaWJ1dGUsXG4gICAgICAgIHNlY3Rpb24sXG4gICAgICAgIGJyZWFrcG9pbnRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHBhZ2VUZW1wbGF0ZUNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVzcG9uc2l2ZVNsb3RDb25maWcoXG4gICAgICAgIDxMYXlvdXRTbG90Q29uZmlnPnBhZ2VUZW1wbGF0ZUNvbmZpZyxcbiAgICAgICAgY29uZmlnQXR0cmlidXRlLFxuICAgICAgICBicmVha3BvaW50XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTbG90Q29uZmlnRm9yU2VjdGlvbihcbiAgICB0ZW1wbGF0ZVVpZDogc3RyaW5nLFxuICAgIGNvbmZpZ0F0dHJpYnV0ZTogc3RyaW5nLFxuICAgIHNlY3Rpb24/OiBzdHJpbmcsXG4gICAgYnJlYWtwb2ludD86IEJSRUFLUE9JTlRcbiAgKTogU2xvdENvbmZpZyB7XG4gICAgY29uc3QgcGFnZVRlbXBsYXRlQ29uZmlnID0gdGhpcy5jb25maWcubGF5b3V0U2xvdHNbdGVtcGxhdGVVaWRdO1xuXG4gICAgaWYgKCFwYWdlVGVtcGxhdGVDb25maWcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIGlmIHRoZXJlJ3Mgbm8gc2VjdGlvbiBjb25maWcgb24gdGhlIHBhZ2UgbGF5b3V0XG4gICAgLy8gd2UgZmFsbCBiYWNrIHRvIHRoZSBnbG9iYWwgc2VjdGlvbiBjb25maWdcbiAgICBjb25zdCBzZWN0aW9uQ29uZmlnID0gcGFnZVRlbXBsYXRlQ29uZmlnW3NlY3Rpb25dXG4gICAgICA/IHBhZ2VUZW1wbGF0ZUNvbmZpZ1tzZWN0aW9uXVxuICAgICAgOiB0aGlzLmNvbmZpZy5sYXlvdXRTbG90c1tzZWN0aW9uXTtcblxuICAgIGlmICghc2VjdGlvbkNvbmZpZykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2l2ZUNvbmZpZyA9IHRoaXMuZ2V0UmVzcG9uc2l2ZVNsb3RDb25maWcoXG4gICAgICA8TGF5b3V0U2xvdENvbmZpZz5zZWN0aW9uQ29uZmlnLFxuICAgICAgY29uZmlnQXR0cmlidXRlLFxuICAgICAgYnJlYWtwb2ludFxuICAgICk7XG5cbiAgICBpZiAocmVzcG9uc2l2ZUNvbmZpZy5oYXNPd25Qcm9wZXJ0eShjb25maWdBdHRyaWJ1dGUpKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2l2ZUNvbmZpZztcbiAgICB9IGVsc2UgaWYgKHBhZ2VUZW1wbGF0ZUNvbmZpZ1tzZWN0aW9uXS5oYXNPd25Qcm9wZXJ0eShjb25maWdBdHRyaWJ1dGUpKSB7XG4gICAgICByZXR1cm4gcGFnZVRlbXBsYXRlQ29uZmlnW3NlY3Rpb25dO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWcubGF5b3V0U2xvdHNbc2VjdGlvbl0pIHtcbiAgICAgIHJldHVybiA8U2xvdENvbmZpZz50aGlzLmNvbmZpZy5sYXlvdXRTbG90c1tzZWN0aW9uXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2Ygc2xvdHMgZm9yIGEgYnJlYWtwb2ludCBzcGVjaWZpYyBjb25maWd1cmF0b2luXG4gICAqIElmIHRoZXJlJ3Mgbm8gc3BlY2lmaWMgY29uZmlndXJhdGlvbiBmb3IgdGhlIGJyZWFrcG9pbnQsXG4gICAqIHRoZSBjbG9zZXN0IGF2YWlsYWJsZSBjb25maWd1cmF0aW9uIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0UmVzcG9uc2l2ZVNsb3RDb25maWcoXG4gICAgbGF5b3V0U2xvdENvbmZpZzogTGF5b3V0U2xvdENvbmZpZyxcbiAgICBjb25maWdBdHRyaWJ1dGU6IHN0cmluZyxcbiAgICBicmVha3BvaW50PzogQlJFQUtQT0lOVFxuICApOiBTbG90Q29uZmlnIHtcbiAgICBsZXQgc2xvdENvbmZpZyA9IDxTbG90Q29uZmlnPmxheW91dFNsb3RDb25maWc7XG5cbiAgICAvLyBmYWxsYmFjayB0byBkZWZhdWx0IHNsb3QgY29uZmlnXG4gICAgaWYgKCFicmVha3BvaW50KSB7XG4gICAgICByZXR1cm4gc2xvdENvbmZpZztcbiAgICB9XG5cbiAgICAvLyB3ZSBoYXZlIGEgY29uZmlnIGZvciB0aGUgc3BlY2lmaWMgYnJlYWtwb2ludFxuICAgIGlmIChcbiAgICAgIGxheW91dFNsb3RDb25maWdbYnJlYWtwb2ludF0gJiZcbiAgICAgIGxheW91dFNsb3RDb25maWdbYnJlYWtwb2ludF0uaGFzT3duUHJvcGVydHkoY29uZmlnQXR0cmlidXRlKVxuICAgICkge1xuICAgICAgcmV0dXJuIDxTbG90Q29uZmlnPmxheW91dFNsb3RDb25maWdbYnJlYWtwb2ludF07XG4gICAgfVxuXG4gICAgLy8gZmluZCBjbG9zZXN0IGNvbmZpZ1xuICAgIGNvbnN0IGFsbCA9IHRoaXMuYnJlYWtwb2ludFNlcnZpY2UuYnJlYWtwb2ludHM7XG5cbiAgICBmb3IgKGNvbnN0IGJyIG9mIGFsbC5zcGxpY2UoMCwgYWxsLmluZGV4T2YoYnJlYWtwb2ludCkpKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGxheW91dFNsb3RDb25maWdbYnJdICYmXG4gICAgICAgIGxheW91dFNsb3RDb25maWdbYnJdLmhhc093blByb3BlcnR5KGNvbmZpZ0F0dHJpYnV0ZSlcbiAgICAgICkge1xuICAgICAgICBzbG90Q29uZmlnID0gPFNsb3RDb25maWc+bGF5b3V0U2xvdENvbmZpZ1ticl07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzbG90Q29uZmlnO1xuICB9XG5cbiAgLyoqXG4gICAqIEluIG9yZGVyIHRvIGhlbHAgZGV2ZWxvcGVycywgd2UgcHJpbnQgc29tZSBkZXRhaWxlZCBsb2cgaW5mb3JtYXRpb24gaW5cbiAgICogY2FzZSB0aGVyZSdzIG5vIGxheW91dCBjb25maWd1cmF0aW9uIGF2YWlsYWJsZSBmb3IgdGhlIGdpdmVuIHBhZ2UgdGVtcGxhdGVcbiAgICogb3Igc2VjdGlvbi4gQWRkaXRpb25hbGx5LCB0aGUgc2xvdCBwb3NpdGlvbnMgYXJlIHByaW50ZWQgaW4gdGhlIGNvbnNvbGVcbiAgICogaW4gYSBmb3JtYXQgdGhhdCBjYW4gYmUgY29waWVkIC8gcGFzdGUgdG8gdGhlIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBwcml2YXRlIGxvZ01pc3NpbmdMYXlvdXRDb25maWcocGFnZTogUGFnZSwgc2VjdGlvbj86IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghaXNEZXZNb2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmxvZ1Nsb3RzW3BhZ2UudGVtcGxhdGVdKSB7XG4gICAgICAvLyB0aGUgaW5mbyBsb2cgaXMgbm90IHByaW50ZWQgaW4gcHJvZHVjdGlvblxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgIGBBdmFpbGFibGUgQ01TIHBhZ2Ugc2xvdHM6ICcke09iamVjdC5rZXlzKHBhZ2Uuc2xvdHMpLmpvaW4oYCcsJ2ApfSdgXG4gICAgICApO1xuICAgICAgdGhpcy5sb2dTbG90c1twYWdlLnRlbXBsYXRlXSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgY2FjaGVLZXkgPSBzZWN0aW9uIHx8IHBhZ2UudGVtcGxhdGU7XG4gICAgaWYgKCF0aGlzLndhcm5Mb2dNZXNzYWdlc1tjYWNoZUtleV0pIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYE5vIGxheW91dCBjb25maWcgZm91bmQgZm9yICR7Y2FjaGVLZXl9LCB5b3UgY2FuIGNvbmZpZ3VyZSBhICdMYXlvdXRDb25maWcnIHRvIGNvbnRyb2wgdGhlIHJlbmRlcmluZyBvZiBwYWdlIHNsb3RzLmBcbiAgICAgICk7XG4gICAgICB0aGlzLndhcm5Mb2dNZXNzYWdlc1tjYWNoZUtleV0gPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl19