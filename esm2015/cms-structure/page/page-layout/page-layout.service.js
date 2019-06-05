/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
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
        return combineLatest(this.page$, this.breakpointService.breakpoint$).pipe(map((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2xGLE9BQU8sRUFFTCxZQUFZLEdBR2IsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5QyxPQUFPLEVBQUUsbUJBQW1CLEVBQXFCLE1BQU0sdUJBQXVCLENBQUM7QUFHL0UsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7OztJQUM1QixZQUNVLEdBQWUsRUFDZixNQUFvQixFQUNwQixpQkFBb0MsRUFHcEMsUUFBNkI7UUFMN0IsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUdwQyxhQUFRLEdBQVIsUUFBUSxDQUFxQjs7O1FBSy9CLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFMbkIsQ0FBQzs7Ozs7SUFPSixRQUFRLENBQUMsT0FBZ0I7UUFDdkIsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFD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QUM7WUFDRixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN2QztJQUNILENBQUM7OztZQXJNRixVQUFVOzs7O1lBWkYsVUFBVTtZQU1qQixZQUFZO1lBSEwsaUJBQWlCO3dDQWVyQixRQUFRLFlBQ1IsTUFBTSxTQUFDLG1CQUFtQjs7Ozs7OztJQU03Qiw0Q0FBNkI7Ozs7O0lBQzdCLHFDQUFzQjs7Ozs7SUFYcEIsZ0NBQXVCOzs7OztJQUN2QixtQ0FBNEI7Ozs7O0lBQzVCLDhDQUE0Qzs7Ozs7SUFDNUMscUNBRXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zU2VydmljZSwgUGFnZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCcmVha3BvaW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9icmVha3BvaW50L2JyZWFrcG9pbnQuc2VydmljZSc7XG5pbXBvcnQge1xuICBCUkVBS1BPSU5ULFxuICBMYXlvdXRDb25maWcsXG4gIExheW91dFNsb3RDb25maWcsXG4gIFNsb3RDb25maWcsXG59IGZyb20gJy4uLy4uLy4uL2xheW91dC9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBQQUdFX0xBWU9VVF9IQU5ETEVSLCBQYWdlTGF5b3V0SGFuZGxlciB9IGZyb20gJy4vcGFnZS1sYXlvdXQtaGFuZGxlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdlTGF5b3V0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY21zOiBDbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBMYXlvdXRDb25maWcsXG4gICAgcHJpdmF0ZSBicmVha3BvaW50U2VydmljZTogQnJlYWtwb2ludFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFBBR0VfTEFZT1VUX0hBTkRMRVIpXG4gICAgcHJpdmF0ZSBoYW5kbGVyczogUGFnZUxheW91dEhhbmRsZXJbXVxuICApIHt9XG5cbiAgLy8gd2UgcHJpbnQgd2FybiBtZXNzYWdlcyBvbiBtaXNzaW5nIGxheW91dCBjb25maWdzXG4gIC8vIG9ubHkgb25jZSB0byBub3QgcG9sdXRlIHRoZSBjb25zb2xlIGxvZ1xuICBwcml2YXRlIHdhcm5Mb2dNZXNzYWdlcyA9IHt9O1xuICBwcml2YXRlIGxvZ1Nsb3RzID0ge307XG5cbiAgZ2V0U2xvdHMoc2VjdGlvbj86IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdCh0aGlzLnBhZ2UkLCB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmJyZWFrcG9pbnQkKS5waXBlKFxuICAgICAgbWFwKChbcGFnZSwgYnJlYWtwb2ludF0pID0+IHtcbiAgICAgICAgY29uc3QgcGFnZVRlbXBsYXRlID0gcGFnZS50ZW1wbGF0ZTtcbiAgICAgICAgY29uc3Qgc2xvdHMgPSB0aGlzLnJlc29sdmVTbG90cyhwYWdlLCBzZWN0aW9uLCBicmVha3BvaW50KTtcbiAgICAgICAgcmV0dXJuIHsgc2xvdHMsIHBhZ2VUZW1wbGF0ZSwgYnJlYWtwb2ludCB9O1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKHsgc2xvdHMsIHBhZ2VUZW1wbGF0ZSwgYnJlYWtwb2ludCB9KSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBvZihzbG90cyk7XG4gICAgICAgIGZvciAoY29uc3QgaGFuZGxlciBvZiB0aGlzLmhhbmRsZXJzIHx8IFtdKSB7XG4gICAgICAgICAgcmVzdWx0ID0gaGFuZGxlci5oYW5kbGUocmVzdWx0LCBwYWdlVGVtcGxhdGUsIHNlY3Rpb24sIGJyZWFrcG9pbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlU2xvdHMocGFnZSwgc2VjdGlvbiwgYnJlYWtwb2ludCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldFNsb3RDb25maWcoXG4gICAgICBwYWdlLnRlbXBsYXRlLFxuICAgICAgJ3Nsb3RzJyxcbiAgICAgIHNlY3Rpb24sXG4gICAgICBicmVha3BvaW50XG4gICAgKTtcbiAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5zbG90cykge1xuICAgICAgcmV0dXJuIGNvbmZpZy5zbG90cztcbiAgICB9IGVsc2UgaWYgKCFzZWN0aW9uKSB7XG4gICAgICB0aGlzLmxvZ01pc3NpbmdMYXlvdXRDb25maWcocGFnZSk7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMocGFnZS5zbG90cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9nTWlzc2luZ0xheW91dENvbmZpZyhwYWdlLCBzZWN0aW9uKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBnZXQgcGFnZSQoKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zLmdldEN1cnJlbnRQYWdlKCkucGlwZShmaWx0ZXIoQm9vbGVhbikpO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlTmFtZSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdlJC5waXBlKFxuICAgICAgZmlsdGVyKHBhZ2UgPT4gISFwYWdlLnRlbXBsYXRlKSxcbiAgICAgIG1hcCgocGFnZTogUGFnZSkgPT4gcGFnZS50ZW1wbGF0ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIGxvYWQgc2xvdHMgZnJvbSB0aGUgbGF5b3V0IGNvbmZpZ3VyYXRpb24uIFRoZSBicmVha3BvaW50IGlzIHVzZWRcbiAgICogdG8gbG9hZCBhIHNwZWNpZmljIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBnaXZlbiBicmVha3BvaW50LiBJZiB0aGVyZSdzXG4gICAqIG5vIGNvbmZpZ3VyYXRpb24gYXZhaWxhYmxlIGZvciB0aGUgZ2l2ZW4gYnJlYWtwb2ludCB0aGUgZGVmYXVsdCBzbG90XG4gICAqIGNvbmZpZ3VyYXRpb24gaXMgcmV0dXJuZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0U2xvdENvbmZpZyhcbiAgICB0ZW1wbGF0ZVVpZDogc3RyaW5nLFxuICAgIGNvbmZpZ0F0dHJpYnV0ZTogc3RyaW5nLFxuICAgIHNlY3Rpb24/OiBzdHJpbmcsXG4gICAgYnJlYWtwb2ludD86IEJSRUFLUE9JTlRcbiAgKTogU2xvdENvbmZpZyB7XG4gICAgY29uc3QgcGFnZVRlbXBsYXRlQ29uZmlnID0gdGhpcy5jb25maWcubGF5b3V0U2xvdHNbdGVtcGxhdGVVaWRdO1xuXG4gICAgaWYgKHNlY3Rpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFNsb3RDb25maWdGb3JTZWN0aW9uKFxuICAgICAgICB0ZW1wbGF0ZVVpZCxcbiAgICAgICAgY29uZmlnQXR0cmlidXRlLFxuICAgICAgICBzZWN0aW9uLFxuICAgICAgICBicmVha3BvaW50XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChwYWdlVGVtcGxhdGVDb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFJlc3BvbnNpdmVTbG90Q29uZmlnKFxuICAgICAgICA8TGF5b3V0U2xvdENvbmZpZz5wYWdlVGVtcGxhdGVDb25maWcsXG4gICAgICAgIGNvbmZpZ0F0dHJpYnV0ZSxcbiAgICAgICAgYnJlYWtwb2ludFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U2xvdENvbmZpZ0ZvclNlY3Rpb24oXG4gICAgdGVtcGxhdGVVaWQ6IHN0cmluZyxcbiAgICBjb25maWdBdHRyaWJ1dGU6IHN0cmluZyxcbiAgICBzZWN0aW9uPzogc3RyaW5nLFxuICAgIGJyZWFrcG9pbnQ/OiBCUkVBS1BPSU5UXG4gICk6IFNsb3RDb25maWcge1xuICAgIGNvbnN0IHBhZ2VUZW1wbGF0ZUNvbmZpZyA9IHRoaXMuY29uZmlnLmxheW91dFNsb3RzW3RlbXBsYXRlVWlkXTtcblxuICAgIGlmICghcGFnZVRlbXBsYXRlQ29uZmlnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBpZiB0aGVyZSdzIG5vIHNlY3Rpb24gY29uZmlnIG9uIHRoZSBwYWdlIGxheW91dFxuICAgIC8vIHdlIGZhbGwgYmFjayB0byB0aGUgZ2xvYmFsIHNlY3Rpb24gY29uZmlnXG4gICAgY29uc3Qgc2VjdGlvbkNvbmZpZyA9IHBhZ2VUZW1wbGF0ZUNvbmZpZ1tzZWN0aW9uXVxuICAgICAgPyBwYWdlVGVtcGxhdGVDb25maWdbc2VjdGlvbl1cbiAgICAgIDogdGhpcy5jb25maWcubGF5b3V0U2xvdHNbc2VjdGlvbl07XG5cbiAgICBpZiAoIXNlY3Rpb25Db25maWcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNpdmVDb25maWcgPSB0aGlzLmdldFJlc3BvbnNpdmVTbG90Q29uZmlnKFxuICAgICAgPExheW91dFNsb3RDb25maWc+c2VjdGlvbkNvbmZpZyxcbiAgICAgIGNvbmZpZ0F0dHJpYnV0ZSxcbiAgICAgIGJyZWFrcG9pbnRcbiAgICApO1xuXG4gICAgaWYgKHJlc3BvbnNpdmVDb25maWcuaGFzT3duUHJvcGVydHkoY29uZmlnQXR0cmlidXRlKSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNpdmVDb25maWc7XG4gICAgfSBlbHNlIGlmIChwYWdlVGVtcGxhdGVDb25maWdbc2VjdGlvbl0uaGFzT3duUHJvcGVydHkoY29uZmlnQXR0cmlidXRlKSkge1xuICAgICAgcmV0dXJuIHBhZ2VUZW1wbGF0ZUNvbmZpZ1tzZWN0aW9uXTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnLmxheW91dFNsb3RzW3NlY3Rpb25dKSB7XG4gICAgICByZXR1cm4gPFNsb3RDb25maWc+dGhpcy5jb25maWcubGF5b3V0U2xvdHNbc2VjdGlvbl07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIHNsb3RzIGZvciBhIGJyZWFrcG9pbnQgc3BlY2lmaWMgY29uZmlndXJhdG9pblxuICAgKiBJZiB0aGVyZSdzIG5vIHNwZWNpZmljIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBicmVha3BvaW50LFxuICAgKiB0aGUgY2xvc2VzdCBhdmFpbGFibGUgY29uZmlndXJhdGlvbiB3aWxsIGJlIHJldHVybmVkLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFJlc3BvbnNpdmVTbG90Q29uZmlnKFxuICAgIGxheW91dFNsb3RDb25maWc6IExheW91dFNsb3RDb25maWcsXG4gICAgY29uZmlnQXR0cmlidXRlOiBzdHJpbmcsXG4gICAgYnJlYWtwb2ludD86IEJSRUFLUE9JTlRcbiAgKTogU2xvdENvbmZpZyB7XG4gICAgbGV0IHNsb3RDb25maWcgPSA8U2xvdENvbmZpZz5sYXlvdXRTbG90Q29uZmlnO1xuXG4gICAgLy8gZmFsbGJhY2sgdG8gZGVmYXVsdCBzbG90IGNvbmZpZ1xuICAgIGlmICghYnJlYWtwb2ludCkge1xuICAgICAgcmV0dXJuIHNsb3RDb25maWc7XG4gICAgfVxuXG4gICAgLy8gd2UgaGF2ZSBhIGNvbmZpZyBmb3IgdGhlIHNwZWNpZmljIGJyZWFrcG9pbnRcbiAgICBpZiAoXG4gICAgICBsYXlvdXRTbG90Q29uZmlnW2JyZWFrcG9pbnRdICYmXG4gICAgICBsYXlvdXRTbG90Q29uZmlnW2JyZWFrcG9pbnRdLmhhc093blByb3BlcnR5KGNvbmZpZ0F0dHJpYnV0ZSlcbiAgICApIHtcbiAgICAgIHJldHVybiA8U2xvdENvbmZpZz5sYXlvdXRTbG90Q29uZmlnW2JyZWFrcG9pbnRdO1xuICAgIH1cblxuICAgIC8vIGZpbmQgY2xvc2VzdCBjb25maWdcbiAgICBjb25zdCBhbGwgPSB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmJyZWFrcG9pbnRzO1xuXG4gICAgZm9yIChjb25zdCBiciBvZiBhbGwuc3BsaWNlKDAsIGFsbC5pbmRleE9mKGJyZWFrcG9pbnQpKSkge1xuICAgICAgaWYgKFxuICAgICAgICBsYXlvdXRTbG90Q29uZmlnW2JyXSAmJlxuICAgICAgICBsYXlvdXRTbG90Q29uZmlnW2JyXS5oYXNPd25Qcm9wZXJ0eShjb25maWdBdHRyaWJ1dGUpXG4gICAgICApIHtcbiAgICAgICAgc2xvdENvbmZpZyA9IDxTbG90Q29uZmlnPmxheW91dFNsb3RDb25maWdbYnJdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2xvdENvbmZpZztcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBvcmRlciB0byBoZWxwIGRldmVsb3BlcnMsIHdlIHByaW50IHNvbWUgZGV0YWlsZWQgbG9nIGluZm9ybWF0aW9uIGluXG4gICAqIGNhc2UgdGhlcmUncyBubyBsYXlvdXQgY29uZmlndXJhdGlvbiBhdmFpbGFibGUgZm9yIHRoZSBnaXZlbiBwYWdlIHRlbXBsYXRlXG4gICAqIG9yIHNlY3Rpb24uIEFkZGl0aW9uYWxseSwgdGhlIHNsb3QgcG9zaXRpb25zIGFyZSBwcmludGVkIGluIHRoZSBjb25zb2xlXG4gICAqIGluIGEgZm9ybWF0IHRoYXQgY2FuIGJlIGNvcGllZCAvIHBhc3RlIHRvIHRoZSBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBsb2dNaXNzaW5nTGF5b3V0Q29uZmlnKHBhZ2U6IFBhZ2UsIHNlY3Rpb24/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb25maWcucHJvZHVjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubG9nU2xvdHNbcGFnZS50ZW1wbGF0ZV0pIHtcbiAgICAgIC8vIHRoZSBpbmZvIGxvZyBpcyBub3QgcHJpbnRlZCBpbiBwcm9kdWN0aW9uXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgYEF2YWlsYWJsZSBDTVMgcGFnZSBzbG90czogJyR7T2JqZWN0LmtleXMocGFnZS5zbG90cykuam9pbihgJywnYCl9J2BcbiAgICAgICk7XG4gICAgICB0aGlzLmxvZ1Nsb3RzW3BhZ2UudGVtcGxhdGVdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWNoZUtleSA9IHNlY3Rpb24gfHwgcGFnZS50ZW1wbGF0ZTtcbiAgICBpZiAoIXRoaXMud2FybkxvZ01lc3NhZ2VzW2NhY2hlS2V5XSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgTm8gbGF5b3V0IGNvbmZpZyBmb3VuZCBmb3IgJHtjYWNoZUtleX0sIHlvdSBjYW4gY29uZmlndXJlIGEgJ0xheW91dENvbmZpZycgdG8gY29udHJvbCB0aGUgcmVuZGVyaW5nIG9mIHBhZ2Ugc2xvdHMuYFxuICAgICAgKTtcbiAgICAgIHRoaXMud2FybkxvZ01lc3NhZ2VzW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgfVxuICB9XG59XG4iXX0=