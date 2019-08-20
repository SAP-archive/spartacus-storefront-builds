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
        })), distinctUntilChanged((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            if (a.length !== b.length) {
                return false;
            }
            for (let i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) {
                    return false;
                }
            }
            return true;
        })));
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
            /** @type {?} */
            const pageSlots = Object.keys(page.slots);
            return config.slots.filter((/**
             * @param {?} slot
             * @return {?}
             */
            slot => pageSlots.includes(slot)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNsRixPQUFPLEVBRUwsWUFBWSxHQUdiLE1BQU0sc0NBQXNDLENBQUM7QUFDOUMsT0FBTyxFQUFFLG1CQUFtQixFQUFxQixNQUFNLHVCQUF1QixDQUFDO0FBRy9FLE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7SUFDNUIsWUFDVSxHQUFlLEVBQ2YsTUFBb0IsRUFDcEIsaUJBQW9DLEVBR3BDLFFBQTZCO1FBTDdCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFHcEMsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7OztRQUsvQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixhQUFRLEdBQUcsRUFBRSxDQUFDO0lBTG5CLENBQUM7Ozs7O0lBT0osUUFBUSxDQUFDLE9BQWdCO1FBQ3ZCLE9BQU8sYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ3pFLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxFQUFFLEVBQUU7O2tCQUNuQixZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVE7O2tCQUM1QixLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQztZQUMxRCxPQUFPLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsQ0FBQztRQUM3QyxDQUFDLEVBQUMsRUFDRixTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRTs7Z0JBQzVDLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3RCLEtBQUssTUFBTSxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLEVBQUU7Z0JBQ3pDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3BFO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxFQUFDLEVBQ0Ysb0JBQW9COzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUN6QixPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDakIsT0FBTyxLQUFLLENBQUM7aUJBQ2Q7YUFDRjtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7O0lBRU8sWUFBWSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVTs7Y0FDdEMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQy9CLElBQUksQ0FBQyxRQUFRLEVBQ2IsT0FBTyxFQUNQLE9BQU8sRUFDUCxVQUFVLENBQ1g7UUFDRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFOztrQkFDcEIsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTTs7OztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO1NBQzlEO2FBQU0sSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ0wsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMzQyxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU07Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLEVBQy9CLEdBQUc7Ozs7UUFBQyxDQUFDLElBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUNuQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7Ozs7OztJQVFTLGFBQWEsQ0FDckIsV0FBbUIsRUFDbkIsZUFBdUIsRUFDdkIsT0FBZ0IsRUFDaEIsVUFBdUI7UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7O2NBQ0ssa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO1FBRS9ELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQ2pDLFdBQVcsRUFDWCxlQUFlLEVBQ2YsT0FBTyxFQUNQLFVBQVUsQ0FDWCxDQUFDO1NBQ0g7UUFFRCxJQUFJLGtCQUFrQixFQUFFO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUNqQyxtQkFBa0Isa0JBQWtCLEVBQUEsRUFDcEMsZUFBZSxFQUNmLFVBQVUsQ0FDWCxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7Ozs7Ozs7SUFFUyx1QkFBdUIsQ0FDL0IsV0FBbUIsRUFDbkIsZUFBdUIsRUFDdkIsT0FBZ0IsRUFDaEIsVUFBdUI7O2NBRWpCLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUUvRCxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDdkIsT0FBTyxJQUFJLENBQUM7U0FDYjs7OztjQUlLLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDL0MsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztZQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBRXBDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUM7U0FDYjs7Y0FFSyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQ25ELG1CQUFrQixhQUFhLEVBQUEsRUFDL0IsZUFBZSxFQUNmLFVBQVUsQ0FDWDtRQUVELElBQUksZ0JBQWdCLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ3BELE9BQU8sZ0JBQWdCLENBQUM7U0FDekI7YUFBTSxJQUFJLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUN0RSxPQUFPLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BDO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMzQyxPQUFPLG1CQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFBLENBQUM7U0FDckQ7SUFDSCxDQUFDOzs7Ozs7Ozs7OztJQU9TLHVCQUF1QixDQUMvQixnQkFBa0MsRUFDbEMsZUFBdUIsRUFDdkIsVUFBdUI7O1lBRW5CLFVBQVUsR0FBRyxtQkFBWSxnQkFBZ0IsRUFBQTtRQUU3QyxrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU8sVUFBVSxDQUFDO1NBQ25CO1FBRUQsK0NBQStDO1FBQy9DLElBQ0UsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO1lBQzVCLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsRUFDNUQ7WUFDQSxPQUFPLG1CQUFZLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUFBLENBQUM7U0FDakQ7OztjQUdLLEdBQUcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVztRQUU5QyxLQUFLLE1BQU0sRUFBRSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRTtZQUN2RCxJQUNFLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztnQkFDcEIsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxFQUNwRDtnQkFDQSxVQUFVLEdBQUcsbUJBQVksZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEVBQUEsQ0FBQzthQUMvQztTQUNGO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7Ozs7Ozs7Ozs7SUFRTyxzQkFBc0IsQ0FBQyxJQUFVLEVBQUUsT0FBZ0I7UUFDekQsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ2hCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNqQyw0Q0FBNEM7WUFDNUMsdUNBQXVDO1lBQ3ZDLE9BQU8sQ0FBQyxJQUFJLENBQ1YsOEJBQThCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUNyRSxDQUFDO1lBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3JDOztjQUVLLFFBQVEsR0FBRyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVE7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbkMsT0FBTyxDQUFDLElBQUksQ0FDViw4QkFBOEIsUUFBUSw4RUFBOEUsQ0FDckgsQ0FBQztZQUNGLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7O1lBbk5GLFVBQVU7Ozs7WUFaRixVQUFVO1lBTWpCLFlBQVk7WUFITCxpQkFBaUI7d0NBZXJCLFFBQVEsWUFDUixNQUFNLFNBQUMsbUJBQW1COzs7Ozs7O0lBTTdCLDRDQUE2Qjs7Ozs7SUFDN0IscUNBQXNCOzs7OztJQVhwQixnQ0FBdUI7Ozs7O0lBQ3ZCLG1DQUE0Qjs7Ozs7SUFDNUIsOENBQTRDOzs7OztJQUM1QyxxQ0FFcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIGlzRGV2TW9kZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc1NlcnZpY2UsIFBhZ2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQnJlYWtwb2ludFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvYnJlYWtwb2ludC9icmVha3BvaW50LnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQlJFQUtQT0lOVCxcbiAgTGF5b3V0Q29uZmlnLFxuICBMYXlvdXRTbG90Q29uZmlnLFxuICBTbG90Q29uZmlnLFxufSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvY29uZmlnL2xheW91dC1jb25maWcnO1xuaW1wb3J0IHsgUEFHRV9MQVlPVVRfSEFORExFUiwgUGFnZUxheW91dEhhbmRsZXIgfSBmcm9tICcuL3BhZ2UtbGF5b3V0LWhhbmRsZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnZUxheW91dFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNtczogQ21zU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogTGF5b3V0Q29uZmlnLFxuICAgIHByaXZhdGUgYnJlYWtwb2ludFNlcnZpY2U6IEJyZWFrcG9pbnRTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChQQUdFX0xBWU9VVF9IQU5ETEVSKVxuICAgIHByaXZhdGUgaGFuZGxlcnM6IFBhZ2VMYXlvdXRIYW5kbGVyW11cbiAgKSB7fVxuXG4gIC8vIHdlIHByaW50IHdhcm4gbWVzc2FnZXMgb24gbWlzc2luZyBsYXlvdXQgY29uZmlnc1xuICAvLyBvbmx5IG9uY2UgdG8gbm90IHBvbHV0ZSB0aGUgY29uc29sZSBsb2dcbiAgcHJpdmF0ZSB3YXJuTG9nTWVzc2FnZXMgPSB7fTtcbiAgcHJpdmF0ZSBsb2dTbG90cyA9IHt9O1xuXG4gIGdldFNsb3RzKHNlY3Rpb24/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW3RoaXMucGFnZSQsIHRoaXMuYnJlYWtwb2ludFNlcnZpY2UuYnJlYWtwb2ludCRdKS5waXBlKFxuICAgICAgbWFwKChbcGFnZSwgYnJlYWtwb2ludF0pID0+IHtcbiAgICAgICAgY29uc3QgcGFnZVRlbXBsYXRlID0gcGFnZS50ZW1wbGF0ZTtcbiAgICAgICAgY29uc3Qgc2xvdHMgPSB0aGlzLnJlc29sdmVTbG90cyhwYWdlLCBzZWN0aW9uLCBicmVha3BvaW50KTtcbiAgICAgICAgcmV0dXJuIHsgc2xvdHMsIHBhZ2VUZW1wbGF0ZSwgYnJlYWtwb2ludCB9O1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKHsgc2xvdHMsIHBhZ2VUZW1wbGF0ZSwgYnJlYWtwb2ludCB9KSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBvZihzbG90cyk7XG4gICAgICAgIGZvciAoY29uc3QgaGFuZGxlciBvZiB0aGlzLmhhbmRsZXJzIHx8IFtdKSB7XG4gICAgICAgICAgcmVzdWx0ID0gaGFuZGxlci5oYW5kbGUocmVzdWx0LCBwYWdlVGVtcGxhdGUsIHNlY3Rpb24sIGJyZWFrcG9pbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVTbG90cyhwYWdlLCBzZWN0aW9uLCBicmVha3BvaW50KTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0U2xvdENvbmZpZyhcbiAgICAgIHBhZ2UudGVtcGxhdGUsXG4gICAgICAnc2xvdHMnLFxuICAgICAgc2VjdGlvbixcbiAgICAgIGJyZWFrcG9pbnRcbiAgICApO1xuICAgIGlmIChjb25maWcgJiYgY29uZmlnLnNsb3RzKSB7XG4gICAgICBjb25zdCBwYWdlU2xvdHMgPSBPYmplY3Qua2V5cyhwYWdlLnNsb3RzKTtcbiAgICAgIHJldHVybiBjb25maWcuc2xvdHMuZmlsdGVyKHNsb3QgPT4gcGFnZVNsb3RzLmluY2x1ZGVzKHNsb3QpKTtcbiAgICB9IGVsc2UgaWYgKCFzZWN0aW9uKSB7XG4gICAgICB0aGlzLmxvZ01pc3NpbmdMYXlvdXRDb25maWcocGFnZSk7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMocGFnZS5zbG90cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9nTWlzc2luZ0xheW91dENvbmZpZyhwYWdlLCBzZWN0aW9uKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBnZXQgcGFnZSQoKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zLmdldEN1cnJlbnRQYWdlKCkucGlwZShmaWx0ZXIoQm9vbGVhbikpO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlTmFtZSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdlJC5waXBlKFxuICAgICAgZmlsdGVyKHBhZ2UgPT4gISFwYWdlLnRlbXBsYXRlKSxcbiAgICAgIG1hcCgocGFnZTogUGFnZSkgPT4gcGFnZS50ZW1wbGF0ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIGxvYWQgc2xvdHMgZnJvbSB0aGUgbGF5b3V0IGNvbmZpZ3VyYXRpb24uIFRoZSBicmVha3BvaW50IGlzIHVzZWRcbiAgICogdG8gbG9hZCBhIHNwZWNpZmljIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBnaXZlbiBicmVha3BvaW50LiBJZiB0aGVyZSdzXG4gICAqIG5vIGNvbmZpZ3VyYXRpb24gYXZhaWxhYmxlIGZvciB0aGUgZ2l2ZW4gYnJlYWtwb2ludCB0aGUgZGVmYXVsdCBzbG90XG4gICAqIGNvbmZpZ3VyYXRpb24gaXMgcmV0dXJuZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0U2xvdENvbmZpZyhcbiAgICB0ZW1wbGF0ZVVpZDogc3RyaW5nLFxuICAgIGNvbmZpZ0F0dHJpYnV0ZTogc3RyaW5nLFxuICAgIHNlY3Rpb24/OiBzdHJpbmcsXG4gICAgYnJlYWtwb2ludD86IEJSRUFLUE9JTlRcbiAgKTogU2xvdENvbmZpZyB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5sYXlvdXRTbG90cykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHBhZ2VUZW1wbGF0ZUNvbmZpZyA9IHRoaXMuY29uZmlnLmxheW91dFNsb3RzW3RlbXBsYXRlVWlkXTtcblxuICAgIGlmIChzZWN0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTbG90Q29uZmlnRm9yU2VjdGlvbihcbiAgICAgICAgdGVtcGxhdGVVaWQsXG4gICAgICAgIGNvbmZpZ0F0dHJpYnV0ZSxcbiAgICAgICAgc2VjdGlvbixcbiAgICAgICAgYnJlYWtwb2ludFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAocGFnZVRlbXBsYXRlQ29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRSZXNwb25zaXZlU2xvdENvbmZpZyhcbiAgICAgICAgPExheW91dFNsb3RDb25maWc+cGFnZVRlbXBsYXRlQ29uZmlnLFxuICAgICAgICBjb25maWdBdHRyaWJ1dGUsXG4gICAgICAgIGJyZWFrcG9pbnRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNsb3RDb25maWdGb3JTZWN0aW9uKFxuICAgIHRlbXBsYXRlVWlkOiBzdHJpbmcsXG4gICAgY29uZmlnQXR0cmlidXRlOiBzdHJpbmcsXG4gICAgc2VjdGlvbj86IHN0cmluZyxcbiAgICBicmVha3BvaW50PzogQlJFQUtQT0lOVFxuICApOiBTbG90Q29uZmlnIHtcbiAgICBjb25zdCBwYWdlVGVtcGxhdGVDb25maWcgPSB0aGlzLmNvbmZpZy5sYXlvdXRTbG90c1t0ZW1wbGF0ZVVpZF07XG5cbiAgICBpZiAoIXBhZ2VUZW1wbGF0ZUNvbmZpZykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlcmUncyBubyBzZWN0aW9uIGNvbmZpZyBvbiB0aGUgcGFnZSBsYXlvdXRcbiAgICAvLyB3ZSBmYWxsIGJhY2sgdG8gdGhlIGdsb2JhbCBzZWN0aW9uIGNvbmZpZ1xuICAgIGNvbnN0IHNlY3Rpb25Db25maWcgPSBwYWdlVGVtcGxhdGVDb25maWdbc2VjdGlvbl1cbiAgICAgID8gcGFnZVRlbXBsYXRlQ29uZmlnW3NlY3Rpb25dXG4gICAgICA6IHRoaXMuY29uZmlnLmxheW91dFNsb3RzW3NlY3Rpb25dO1xuXG4gICAgaWYgKCFzZWN0aW9uQ29uZmlnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zaXZlQ29uZmlnID0gdGhpcy5nZXRSZXNwb25zaXZlU2xvdENvbmZpZyhcbiAgICAgIDxMYXlvdXRTbG90Q29uZmlnPnNlY3Rpb25Db25maWcsXG4gICAgICBjb25maWdBdHRyaWJ1dGUsXG4gICAgICBicmVha3BvaW50XG4gICAgKTtcblxuICAgIGlmIChyZXNwb25zaXZlQ29uZmlnLmhhc093blByb3BlcnR5KGNvbmZpZ0F0dHJpYnV0ZSkpIHtcbiAgICAgIHJldHVybiByZXNwb25zaXZlQ29uZmlnO1xuICAgIH0gZWxzZSBpZiAocGFnZVRlbXBsYXRlQ29uZmlnW3NlY3Rpb25dLmhhc093blByb3BlcnR5KGNvbmZpZ0F0dHJpYnV0ZSkpIHtcbiAgICAgIHJldHVybiBwYWdlVGVtcGxhdGVDb25maWdbc2VjdGlvbl07XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5sYXlvdXRTbG90c1tzZWN0aW9uXSkge1xuICAgICAgcmV0dXJuIDxTbG90Q29uZmlnPnRoaXMuY29uZmlnLmxheW91dFNsb3RzW3NlY3Rpb25dO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBzbG90cyBmb3IgYSBicmVha3BvaW50IHNwZWNpZmljIGNvbmZpZ3VyYXRvaW5cbiAgICogSWYgdGhlcmUncyBubyBzcGVjaWZpYyBjb25maWd1cmF0aW9uIGZvciB0aGUgYnJlYWtwb2ludCxcbiAgICogdGhlIGNsb3Nlc3QgYXZhaWxhYmxlIGNvbmZpZ3VyYXRpb24gd2lsbCBiZSByZXR1cm5lZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRSZXNwb25zaXZlU2xvdENvbmZpZyhcbiAgICBsYXlvdXRTbG90Q29uZmlnOiBMYXlvdXRTbG90Q29uZmlnLFxuICAgIGNvbmZpZ0F0dHJpYnV0ZTogc3RyaW5nLFxuICAgIGJyZWFrcG9pbnQ/OiBCUkVBS1BPSU5UXG4gICk6IFNsb3RDb25maWcge1xuICAgIGxldCBzbG90Q29uZmlnID0gPFNsb3RDb25maWc+bGF5b3V0U2xvdENvbmZpZztcblxuICAgIC8vIGZhbGxiYWNrIHRvIGRlZmF1bHQgc2xvdCBjb25maWdcbiAgICBpZiAoIWJyZWFrcG9pbnQpIHtcbiAgICAgIHJldHVybiBzbG90Q29uZmlnO1xuICAgIH1cblxuICAgIC8vIHdlIGhhdmUgYSBjb25maWcgZm9yIHRoZSBzcGVjaWZpYyBicmVha3BvaW50XG4gICAgaWYgKFxuICAgICAgbGF5b3V0U2xvdENvbmZpZ1ticmVha3BvaW50XSAmJlxuICAgICAgbGF5b3V0U2xvdENvbmZpZ1ticmVha3BvaW50XS5oYXNPd25Qcm9wZXJ0eShjb25maWdBdHRyaWJ1dGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gPFNsb3RDb25maWc+bGF5b3V0U2xvdENvbmZpZ1ticmVha3BvaW50XTtcbiAgICB9XG5cbiAgICAvLyBmaW5kIGNsb3Nlc3QgY29uZmlnXG4gICAgY29uc3QgYWxsID0gdGhpcy5icmVha3BvaW50U2VydmljZS5icmVha3BvaW50cztcblxuICAgIGZvciAoY29uc3QgYnIgb2YgYWxsLnNwbGljZSgwLCBhbGwuaW5kZXhPZihicmVha3BvaW50KSkpIHtcbiAgICAgIGlmIChcbiAgICAgICAgbGF5b3V0U2xvdENvbmZpZ1ticl0gJiZcbiAgICAgICAgbGF5b3V0U2xvdENvbmZpZ1ticl0uaGFzT3duUHJvcGVydHkoY29uZmlnQXR0cmlidXRlKVxuICAgICAgKSB7XG4gICAgICAgIHNsb3RDb25maWcgPSA8U2xvdENvbmZpZz5sYXlvdXRTbG90Q29uZmlnW2JyXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNsb3RDb25maWc7XG4gIH1cblxuICAvKipcbiAgICogSW4gb3JkZXIgdG8gaGVscCBkZXZlbG9wZXJzLCB3ZSBwcmludCBzb21lIGRldGFpbGVkIGxvZyBpbmZvcm1hdGlvbiBpblxuICAgKiBjYXNlIHRoZXJlJ3Mgbm8gbGF5b3V0IGNvbmZpZ3VyYXRpb24gYXZhaWxhYmxlIGZvciB0aGUgZ2l2ZW4gcGFnZSB0ZW1wbGF0ZVxuICAgKiBvciBzZWN0aW9uLiBBZGRpdGlvbmFsbHksIHRoZSBzbG90IHBvc2l0aW9ucyBhcmUgcHJpbnRlZCBpbiB0aGUgY29uc29sZVxuICAgKiBpbiBhIGZvcm1hdCB0aGF0IGNhbiBiZSBjb3BpZWQgLyBwYXN0ZSB0byB0aGUgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIHByaXZhdGUgbG9nTWlzc2luZ0xheW91dENvbmZpZyhwYWdlOiBQYWdlLCBzZWN0aW9uPzogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCFpc0Rldk1vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubG9nU2xvdHNbcGFnZS50ZW1wbGF0ZV0pIHtcbiAgICAgIC8vIHRoZSBpbmZvIGxvZyBpcyBub3QgcHJpbnRlZCBpbiBwcm9kdWN0aW9uXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgYEF2YWlsYWJsZSBDTVMgcGFnZSBzbG90czogJyR7T2JqZWN0LmtleXMocGFnZS5zbG90cykuam9pbihgJywnYCl9J2BcbiAgICAgICk7XG4gICAgICB0aGlzLmxvZ1Nsb3RzW3BhZ2UudGVtcGxhdGVdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWNoZUtleSA9IHNlY3Rpb24gfHwgcGFnZS50ZW1wbGF0ZTtcbiAgICBpZiAoIXRoaXMud2FybkxvZ01lc3NhZ2VzW2NhY2hlS2V5XSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgTm8gbGF5b3V0IGNvbmZpZyBmb3VuZCBmb3IgJHtjYWNoZUtleX0sIHlvdSBjYW4gY29uZmlndXJlIGEgJ0xheW91dENvbmZpZycgdG8gY29udHJvbCB0aGUgcmVuZGVyaW5nIG9mIHBhZ2Ugc2xvdHMuYFxuICAgICAgKTtcbiAgICAgIHRoaXMud2FybkxvZ01lc3NhZ2VzW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgfVxuICB9XG59XG4iXX0=