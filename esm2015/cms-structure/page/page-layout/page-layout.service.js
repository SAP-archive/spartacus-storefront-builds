import { __decorate, __param } from "tslib";
import { Inject, Injectable, isDevMode, Optional } from '@angular/core';
import { CmsService, Page } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
import { BREAKPOINT, LayoutConfig, LayoutSlotConfig, SlotConfig, } from '../../../layout/config/layout-config';
import { PAGE_LAYOUT_HANDLER } from './page-layout-handler';
let PageLayoutService = class PageLayoutService {
    constructor(cms, config, breakpointService, handlers) {
        this.cms = cms;
        this.config = config;
        this.breakpointService = breakpointService;
        this.handlers = handlers;
        // Prints warn messages for missing layout configs.
        // The warnings are only printed once per config
        // to not pollute the console log.
        this.warnLogMessages = {};
        this.logSlots = {};
    }
    getSlots(section) {
        return combineLatest([this.page$, this.breakpointService.breakpoint$]).pipe(map(([page, breakpoint]) => {
            const pageTemplate = page.template;
            const slots = this.resolveSlots(page, section, breakpoint);
            return { slots, pageTemplate, breakpoint };
        }), switchMap(({ slots, pageTemplate, breakpoint }) => {
            let result = of(slots);
            for (const handler of this.handlers || []) {
                result = handler.handle(result, pageTemplate, section, breakpoint);
            }
            return result;
        }), distinctUntilChanged((a, b) => {
            if (a.length !== b.length) {
                return false;
            }
            for (let i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) {
                    return false;
                }
            }
            return true;
        }));
    }
    /**
     * Returns an observable with the last page slot above-the-fold
     * for the given pageTemplate / breakpoint.
     *
     * The page fold is configurable in the `LayoutConfig` for each page layout.
     */
    getPageFoldSlot(pageTemplate) {
        return this.breakpointService.breakpoint$.pipe(map(breakpoint => {
            if (!this.config.layoutSlots) {
                // no layout config available
                return null;
            }
            const pageTemplateConfig = this.config.layoutSlots[pageTemplate];
            const config = this.getResponsiveSlotConfig(pageTemplateConfig, 'pageFold', breakpoint);
            return config ? config.pageFold : null;
        }));
    }
    resolveSlots(page, section, breakpoint) {
        const config = this.getSlotConfig(page.template, 'slots', section, breakpoint);
        if (config && config.slots) {
            const pageSlots = Object.keys(page.slots);
            return config.slots.filter(slot => pageSlots.includes(slot));
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
    get page$() {
        return this.cms.getCurrentPage().pipe(filter(page => !!page));
    }
    get templateName$() {
        return this.page$.pipe(filter(page => !!page.template), map((page) => page.template));
    }
    /**
     * load slots from the layout configuration. The breakpoint is used
     * to load a specific configuration for the given breakpoint. If there's
     * no configuration available for the given breakpoint the default slot
     * configuration is returned.
     */
    getSlotConfig(templateUid, configAttribute, section, breakpoint) {
        if (!this.config.layoutSlots) {
            return null;
        }
        const pageTemplateConfig = this.config.layoutSlots[templateUid];
        if (section) {
            return this.getSlotConfigForSection(templateUid, configAttribute, section, breakpoint);
        }
        if (pageTemplateConfig) {
            return this.getResponsiveSlotConfig(pageTemplateConfig, configAttribute, breakpoint);
        }
    }
    getSlotConfigForSection(templateUid, configAttribute, section, breakpoint) {
        const pageTemplateConfig = this.config.layoutSlots[templateUid];
        if (!pageTemplateConfig) {
            return null;
        }
        // if there's no section config on the page layout
        // we fall back to the global section config
        const sectionConfig = pageTemplateConfig[section]
            ? pageTemplateConfig[section]
            : this.config.layoutSlots[section];
        if (!sectionConfig) {
            return null;
        }
        const responsiveConfig = this.getResponsiveSlotConfig(sectionConfig, configAttribute, breakpoint);
        if (responsiveConfig.hasOwnProperty(configAttribute)) {
            return responsiveConfig;
        }
        else if (pageTemplateConfig[section].hasOwnProperty(configAttribute)) {
            return pageTemplateConfig[section];
        }
        else if (this.config.layoutSlots[section]) {
            return this.config.layoutSlots[section];
        }
    }
    /**
     * Returns a list of slots for a breakpoint specific configuratoin
     * If there's no specific configuration for the breakpoint,
     * the closest available configuration will be returned.
     */
    getResponsiveSlotConfig(layoutSlotConfig, configAttribute, breakpoint) {
        let slotConfig = layoutSlotConfig;
        // fallback to default slot config
        if (!layoutSlotConfig || !breakpoint) {
            return slotConfig;
        }
        // we have a config for the specific breakpoint
        if (layoutSlotConfig[breakpoint] &&
            layoutSlotConfig[breakpoint].hasOwnProperty(configAttribute)) {
            return layoutSlotConfig[breakpoint];
        }
        // find closest config
        const all = this.breakpointService.breakpoints;
        for (const br of all.splice(0, all.indexOf(breakpoint))) {
            if (layoutSlotConfig[br] &&
                layoutSlotConfig[br].hasOwnProperty(configAttribute)) {
                slotConfig = layoutSlotConfig[br];
            }
        }
        return slotConfig;
    }
    /**
     * In order to help developers, we print some detailed log information in
     * case there's no layout configuration available for the given page template
     * or section. Additionally, the slot positions are printed in the console
     * in a format that can be copied / paste to the configuration.
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
        const cacheKey = section || page.template;
        if (!this.warnLogMessages[cacheKey]) {
            console.warn(`No layout config found for ${cacheKey}, you can configure a 'LayoutConfig' to control the rendering of page slots.`);
            this.warnLogMessages[cacheKey] = true;
        }
    }
};
PageLayoutService.ctorParameters = () => [
    { type: CmsService },
    { type: LayoutConfig },
    { type: BreakpointService },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [PAGE_LAYOUT_HANDLER,] }] }
];
PageLayoutService = __decorate([
    Injectable(),
    __param(3, Optional()),
    __param(3, Inject(PAGE_LAYOUT_HANDLER))
], PageLayoutService);
export { PageLayoutService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDbEYsT0FBTyxFQUNMLFVBQVUsRUFDVixZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLFVBQVUsR0FDWCxNQUFNLHNDQUFzQyxDQUFDO0FBQzlDLE9BQU8sRUFBcUIsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUcvRSxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQUM1QixZQUNVLEdBQWUsRUFDZixNQUFvQixFQUNwQixpQkFBb0MsRUFHcEMsUUFBNkI7UUFMN0IsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUdwQyxhQUFRLEdBQVIsUUFBUSxDQUFxQjtRQUd2QyxtREFBbUQ7UUFDbkQsZ0RBQWdEO1FBQ2hELGtDQUFrQztRQUMxQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixhQUFRLEdBQUcsRUFBRSxDQUFDO0lBTm5CLENBQUM7SUFR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QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FDckUsQ0FBQztZQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUNyQztRQUVELE1BQU0sUUFBUSxHQUFHLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sQ0FBQyxJQUFJLENBQ1YsOEJBQThCLFFBQVEsOEVBQThFLENBQ3JILENBQUM7WUFDRixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN2QztJQUNILENBQUM7Q0FDRixDQUFBOztZQTFPZ0IsVUFBVTtZQUNQLFlBQVk7WUFDRCxpQkFBaUI7d0NBQzNDLFFBQVEsWUFDUixNQUFNLFNBQUMsbUJBQW1COztBQU5sQixpQkFBaUI7SUFEN0IsVUFBVSxFQUFFO0lBTVIsV0FBQSxRQUFRLEVBQUUsQ0FBQTtJQUNWLFdBQUEsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUE7R0FObkIsaUJBQWlCLENBNE83QjtTQTVPWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIGlzRGV2TW9kZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc1NlcnZpY2UsIFBhZ2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQnJlYWtwb2ludFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvYnJlYWtwb2ludC9icmVha3BvaW50LnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQlJFQUtQT0lOVCxcbiAgTGF5b3V0Q29uZmlnLFxuICBMYXlvdXRTbG90Q29uZmlnLFxuICBTbG90Q29uZmlnLFxufSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvY29uZmlnL2xheW91dC1jb25maWcnO1xuaW1wb3J0IHsgUGFnZUxheW91dEhhbmRsZXIsIFBBR0VfTEFZT1VUX0hBTkRMRVIgfSBmcm9tICcuL3BhZ2UtbGF5b3V0LWhhbmRsZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnZUxheW91dFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNtczogQ21zU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogTGF5b3V0Q29uZmlnLFxuICAgIHByaXZhdGUgYnJlYWtwb2ludFNlcnZpY2U6IEJyZWFrcG9pbnRTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChQQUdFX0xBWU9VVF9IQU5ETEVSKVxuICAgIHByaXZhdGUgaGFuZGxlcnM6IFBhZ2VMYXlvdXRIYW5kbGVyW11cbiAgKSB7fVxuXG4gIC8vIFByaW50cyB3YXJuIG1lc3NhZ2VzIGZvciBtaXNzaW5nIGxheW91dCBjb25maWdzLlxuICAvLyBUaGUgd2FybmluZ3MgYXJlIG9ubHkgcHJpbnRlZCBvbmNlIHBlciBjb25maWdcbiAgLy8gdG8gbm90IHBvbGx1dGUgdGhlIGNvbnNvbGUgbG9nLlxuICBwcml2YXRlIHdhcm5Mb2dNZXNzYWdlcyA9IHt9O1xuICBwcml2YXRlIGxvZ1Nsb3RzID0ge307XG5cbiAgZ2V0U2xvdHMoc2VjdGlvbj86IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbdGhpcy5wYWdlJCwgdGhpcy5icmVha3BvaW50U2VydmljZS5icmVha3BvaW50JF0pLnBpcGUoXG4gICAgICBtYXAoKFtwYWdlLCBicmVha3BvaW50XSkgPT4ge1xuICAgICAgICBjb25zdCBwYWdlVGVtcGxhdGUgPSBwYWdlLnRlbXBsYXRlO1xuICAgICAgICBjb25zdCBzbG90cyA9IHRoaXMucmVzb2x2ZVNsb3RzKHBhZ2UsIHNlY3Rpb24sIGJyZWFrcG9pbnQpO1xuICAgICAgICByZXR1cm4geyBzbG90cywgcGFnZVRlbXBsYXRlLCBicmVha3BvaW50IH07XG4gICAgICB9KSxcbiAgICAgIHN3aXRjaE1hcCgoeyBzbG90cywgcGFnZVRlbXBsYXRlLCBicmVha3BvaW50IH0pID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG9mKHNsb3RzKTtcbiAgICAgICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIHRoaXMuaGFuZGxlcnMgfHwgW10pIHtcbiAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyLmhhbmRsZShyZXN1bHQsIHBhZ2VUZW1wbGF0ZSwgc2VjdGlvbiwgYnJlYWtwb2ludCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgbGFzdCBwYWdlIHNsb3QgYWJvdmUtdGhlLWZvbGRcbiAgICogZm9yIHRoZSBnaXZlbiBwYWdlVGVtcGxhdGUgLyBicmVha3BvaW50LlxuICAgKlxuICAgKiBUaGUgcGFnZSBmb2xkIGlzIGNvbmZpZ3VyYWJsZSBpbiB0aGUgYExheW91dENvbmZpZ2AgZm9yIGVhY2ggcGFnZSBsYXlvdXQuXG4gICAqL1xuICBnZXRQYWdlRm9sZFNsb3QocGFnZVRlbXBsYXRlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmJyZWFrcG9pbnQkLnBpcGUoXG4gICAgICBtYXAoYnJlYWtwb2ludCA9PiB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcubGF5b3V0U2xvdHMpIHtcbiAgICAgICAgICAvLyBubyBsYXlvdXQgY29uZmlnIGF2YWlsYWJsZVxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VUZW1wbGF0ZUNvbmZpZyA9IHRoaXMuY29uZmlnLmxheW91dFNsb3RzW3BhZ2VUZW1wbGF0ZV07XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0UmVzcG9uc2l2ZVNsb3RDb25maWcoXG4gICAgICAgICAgPExheW91dFNsb3RDb25maWc+cGFnZVRlbXBsYXRlQ29uZmlnLFxuICAgICAgICAgICdwYWdlRm9sZCcsXG4gICAgICAgICAgYnJlYWtwb2ludFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gY29uZmlnID8gY29uZmlnLnBhZ2VGb2xkIDogbnVsbDtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZVNsb3RzKHBhZ2UsIHNlY3Rpb24sIGJyZWFrcG9pbnQpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXRTbG90Q29uZmlnKFxuICAgICAgcGFnZS50ZW1wbGF0ZSxcbiAgICAgICdzbG90cycsXG4gICAgICBzZWN0aW9uLFxuICAgICAgYnJlYWtwb2ludFxuICAgICk7XG4gICAgaWYgKGNvbmZpZyAmJiBjb25maWcuc2xvdHMpIHtcbiAgICAgIGNvbnN0IHBhZ2VTbG90cyA9IE9iamVjdC5rZXlzKHBhZ2Uuc2xvdHMpO1xuICAgICAgcmV0dXJuIGNvbmZpZy5zbG90cy5maWx0ZXIoc2xvdCA9PiBwYWdlU2xvdHMuaW5jbHVkZXMoc2xvdCkpO1xuICAgIH0gZWxzZSBpZiAoIXNlY3Rpb24pIHtcbiAgICAgIHRoaXMubG9nTWlzc2luZ0xheW91dENvbmZpZyhwYWdlKTtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhwYWdlLnNsb3RzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2dNaXNzaW5nTGF5b3V0Q29uZmlnKHBhZ2UsIHNlY3Rpb24pO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIGdldCBwYWdlJCgpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5jbXMuZ2V0Q3VycmVudFBhZ2UoKS5waXBlKGZpbHRlcihwYWdlID0+ICEhcGFnZSkpO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlTmFtZSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdlJC5waXBlKFxuICAgICAgZmlsdGVyKHBhZ2UgPT4gISFwYWdlLnRlbXBsYXRlKSxcbiAgICAgIG1hcCgocGFnZTogUGFnZSkgPT4gcGFnZS50ZW1wbGF0ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIGxvYWQgc2xvdHMgZnJvbSB0aGUgbGF5b3V0IGNvbmZpZ3VyYXRpb24uIFRoZSBicmVha3BvaW50IGlzIHVzZWRcbiAgICogdG8gbG9hZCBhIHNwZWNpZmljIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBnaXZlbiBicmVha3BvaW50LiBJZiB0aGVyZSdzXG4gICAqIG5vIGNvbmZpZ3VyYXRpb24gYXZhaWxhYmxlIGZvciB0aGUgZ2l2ZW4gYnJlYWtwb2ludCB0aGUgZGVmYXVsdCBzbG90XG4gICAqIGNvbmZpZ3VyYXRpb24gaXMgcmV0dXJuZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0U2xvdENvbmZpZyhcbiAgICB0ZW1wbGF0ZVVpZDogc3RyaW5nLFxuICAgIGNvbmZpZ0F0dHJpYnV0ZTogc3RyaW5nLFxuICAgIHNlY3Rpb24/OiBzdHJpbmcsXG4gICAgYnJlYWtwb2ludD86IEJSRUFLUE9JTlRcbiAgKTogU2xvdENvbmZpZyB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5sYXlvdXRTbG90cykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHBhZ2VUZW1wbGF0ZUNvbmZpZyA9IHRoaXMuY29uZmlnLmxheW91dFNsb3RzW3RlbXBsYXRlVWlkXTtcblxuICAgIGlmIChzZWN0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTbG90Q29uZmlnRm9yU2VjdGlvbihcbiAgICAgICAgdGVtcGxhdGVVaWQsXG4gICAgICAgIGNvbmZpZ0F0dHJpYnV0ZSxcbiAgICAgICAgc2VjdGlvbixcbiAgICAgICAgYnJlYWtwb2ludFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAocGFnZVRlbXBsYXRlQ29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRSZXNwb25zaXZlU2xvdENvbmZpZyhcbiAgICAgICAgPExheW91dFNsb3RDb25maWc+cGFnZVRlbXBsYXRlQ29uZmlnLFxuICAgICAgICBjb25maWdBdHRyaWJ1dGUsXG4gICAgICAgIGJyZWFrcG9pbnRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNsb3RDb25maWdGb3JTZWN0aW9uKFxuICAgIHRlbXBsYXRlVWlkOiBzdHJpbmcsXG4gICAgY29uZmlnQXR0cmlidXRlOiBzdHJpbmcsXG4gICAgc2VjdGlvbj86IHN0cmluZyxcbiAgICBicmVha3BvaW50PzogQlJFQUtQT0lOVFxuICApOiBTbG90Q29uZmlnIHtcbiAgICBjb25zdCBwYWdlVGVtcGxhdGVDb25maWcgPSB0aGlzLmNvbmZpZy5sYXlvdXRTbG90c1t0ZW1wbGF0ZVVpZF07XG5cbiAgICBpZiAoIXBhZ2VUZW1wbGF0ZUNvbmZpZykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlcmUncyBubyBzZWN0aW9uIGNvbmZpZyBvbiB0aGUgcGFnZSBsYXlvdXRcbiAgICAvLyB3ZSBmYWxsIGJhY2sgdG8gdGhlIGdsb2JhbCBzZWN0aW9uIGNvbmZpZ1xuICAgIGNvbnN0IHNlY3Rpb25Db25maWcgPSBwYWdlVGVtcGxhdGVDb25maWdbc2VjdGlvbl1cbiAgICAgID8gcGFnZVRlbXBsYXRlQ29uZmlnW3NlY3Rpb25dXG4gICAgICA6IHRoaXMuY29uZmlnLmxheW91dFNsb3RzW3NlY3Rpb25dO1xuXG4gICAgaWYgKCFzZWN0aW9uQ29uZmlnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zaXZlQ29uZmlnID0gdGhpcy5nZXRSZXNwb25zaXZlU2xvdENvbmZpZyhcbiAgICAgIDxMYXlvdXRTbG90Q29uZmlnPnNlY3Rpb25Db25maWcsXG4gICAgICBjb25maWdBdHRyaWJ1dGUsXG4gICAgICBicmVha3BvaW50XG4gICAgKTtcblxuICAgIGlmIChyZXNwb25zaXZlQ29uZmlnLmhhc093blByb3BlcnR5KGNvbmZpZ0F0dHJpYnV0ZSkpIHtcbiAgICAgIHJldHVybiByZXNwb25zaXZlQ29uZmlnO1xuICAgIH0gZWxzZSBpZiAocGFnZVRlbXBsYXRlQ29uZmlnW3NlY3Rpb25dLmhhc093blByb3BlcnR5KGNvbmZpZ0F0dHJpYnV0ZSkpIHtcbiAgICAgIHJldHVybiBwYWdlVGVtcGxhdGVDb25maWdbc2VjdGlvbl07XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5sYXlvdXRTbG90c1tzZWN0aW9uXSkge1xuICAgICAgcmV0dXJuIDxTbG90Q29uZmlnPnRoaXMuY29uZmlnLmxheW91dFNsb3RzW3NlY3Rpb25dO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBzbG90cyBmb3IgYSBicmVha3BvaW50IHNwZWNpZmljIGNvbmZpZ3VyYXRvaW5cbiAgICogSWYgdGhlcmUncyBubyBzcGVjaWZpYyBjb25maWd1cmF0aW9uIGZvciB0aGUgYnJlYWtwb2ludCxcbiAgICogdGhlIGNsb3Nlc3QgYXZhaWxhYmxlIGNvbmZpZ3VyYXRpb24gd2lsbCBiZSByZXR1cm5lZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRSZXNwb25zaXZlU2xvdENvbmZpZyhcbiAgICBsYXlvdXRTbG90Q29uZmlnOiBMYXlvdXRTbG90Q29uZmlnLFxuICAgIGNvbmZpZ0F0dHJpYnV0ZTogc3RyaW5nLFxuICAgIGJyZWFrcG9pbnQ/OiBCUkVBS1BPSU5UXG4gICk6IFNsb3RDb25maWcge1xuICAgIGxldCBzbG90Q29uZmlnID0gPFNsb3RDb25maWc+bGF5b3V0U2xvdENvbmZpZztcblxuICAgIC8vIGZhbGxiYWNrIHRvIGRlZmF1bHQgc2xvdCBjb25maWdcbiAgICBpZiAoIWxheW91dFNsb3RDb25maWcgfHwgIWJyZWFrcG9pbnQpIHtcbiAgICAgIHJldHVybiBzbG90Q29uZmlnO1xuICAgIH1cblxuICAgIC8vIHdlIGhhdmUgYSBjb25maWcgZm9yIHRoZSBzcGVjaWZpYyBicmVha3BvaW50XG4gICAgaWYgKFxuICAgICAgbGF5b3V0U2xvdENvbmZpZ1ticmVha3BvaW50XSAmJlxuICAgICAgbGF5b3V0U2xvdENvbmZpZ1ticmVha3BvaW50XS5oYXNPd25Qcm9wZXJ0eShjb25maWdBdHRyaWJ1dGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gPFNsb3RDb25maWc+bGF5b3V0U2xvdENvbmZpZ1ticmVha3BvaW50XTtcbiAgICB9XG5cbiAgICAvLyBmaW5kIGNsb3Nlc3QgY29uZmlnXG4gICAgY29uc3QgYWxsID0gdGhpcy5icmVha3BvaW50U2VydmljZS5icmVha3BvaW50cztcblxuICAgIGZvciAoY29uc3QgYnIgb2YgYWxsLnNwbGljZSgwLCBhbGwuaW5kZXhPZihicmVha3BvaW50KSkpIHtcbiAgICAgIGlmIChcbiAgICAgICAgbGF5b3V0U2xvdENvbmZpZ1ticl0gJiZcbiAgICAgICAgbGF5b3V0U2xvdENvbmZpZ1ticl0uaGFzT3duUHJvcGVydHkoY29uZmlnQXR0cmlidXRlKVxuICAgICAgKSB7XG4gICAgICAgIHNsb3RDb25maWcgPSA8U2xvdENvbmZpZz5sYXlvdXRTbG90Q29uZmlnW2JyXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNsb3RDb25maWc7XG4gIH1cblxuICAvKipcbiAgICogSW4gb3JkZXIgdG8gaGVscCBkZXZlbG9wZXJzLCB3ZSBwcmludCBzb21lIGRldGFpbGVkIGxvZyBpbmZvcm1hdGlvbiBpblxuICAgKiBjYXNlIHRoZXJlJ3Mgbm8gbGF5b3V0IGNvbmZpZ3VyYXRpb24gYXZhaWxhYmxlIGZvciB0aGUgZ2l2ZW4gcGFnZSB0ZW1wbGF0ZVxuICAgKiBvciBzZWN0aW9uLiBBZGRpdGlvbmFsbHksIHRoZSBzbG90IHBvc2l0aW9ucyBhcmUgcHJpbnRlZCBpbiB0aGUgY29uc29sZVxuICAgKiBpbiBhIGZvcm1hdCB0aGF0IGNhbiBiZSBjb3BpZWQgLyBwYXN0ZSB0byB0aGUgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIHByaXZhdGUgbG9nTWlzc2luZ0xheW91dENvbmZpZyhwYWdlOiBQYWdlLCBzZWN0aW9uPzogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCFpc0Rldk1vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubG9nU2xvdHNbcGFnZS50ZW1wbGF0ZV0pIHtcbiAgICAgIC8vIHRoZSBpbmZvIGxvZyBpcyBub3QgcHJpbnRlZCBpbiBwcm9kdWN0aW9uXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgYEF2YWlsYWJsZSBDTVMgcGFnZSBzbG90czogJyR7T2JqZWN0LmtleXMocGFnZS5zbG90cykuam9pbihgJywnYCl9J2BcbiAgICAgICk7XG4gICAgICB0aGlzLmxvZ1Nsb3RzW3BhZ2UudGVtcGxhdGVdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWNoZUtleSA9IHNlY3Rpb24gfHwgcGFnZS50ZW1wbGF0ZTtcbiAgICBpZiAoIXRoaXMud2FybkxvZ01lc3NhZ2VzW2NhY2hlS2V5XSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgTm8gbGF5b3V0IGNvbmZpZyBmb3VuZCBmb3IgJHtjYWNoZUtleX0sIHlvdSBjYW4gY29uZmlndXJlIGEgJ0xheW91dENvbmZpZycgdG8gY29udHJvbCB0aGUgcmVuZGVyaW5nIG9mIHBhZ2Ugc2xvdHMuYFxuICAgICAgKTtcbiAgICAgIHRoaXMud2FybkxvZ01lc3NhZ2VzW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgfVxuICB9XG59XG4iXX0=