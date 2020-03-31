import { __decorate, __param, __read, __values } from "tslib";
import { Inject, Injectable, isDevMode, Optional } from '@angular/core';
import { CmsService, Page } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
import { BREAKPOINT, LayoutConfig, LayoutSlotConfig, SlotConfig, } from '../../../layout/config/layout-config';
import { PAGE_LAYOUT_HANDLER } from './page-layout-handler';
var PageLayoutService = /** @class */ (function () {
    function PageLayoutService(cms, config, breakpointService, handlers) {
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
    PageLayoutService.prototype.getSlots = function (section) {
        var _this = this;
        return combineLatest([this.page$, this.breakpointService.breakpoint$]).pipe(map(function (_a) {
            var _b = __read(_a, 2), page = _b[0], breakpoint = _b[1];
            var pageTemplate = page.template;
            var slots = _this.resolveSlots(page, section, breakpoint);
            return { slots: slots, pageTemplate: pageTemplate, breakpoint: breakpoint };
        }), switchMap(function (_a) {
            var e_1, _b;
            var slots = _a.slots, pageTemplate = _a.pageTemplate, breakpoint = _a.breakpoint;
            var result = of(slots);
            try {
                for (var _c = __values(_this.handlers || []), _d = _c.next(); !_d.done; _d = _c.next()) {
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
        }), distinctUntilChanged(function (a, b) {
            if (a.length !== b.length) {
                return false;
            }
            for (var i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) {
                    return false;
                }
            }
            return true;
        }));
    };
    /**
     * Returns an observable with the last page slot above-the-fold
     * for the given pageTemplate / breakpoint.
     *
     * The page fold is configurable in the `LayoutConfig` for each page layout.
     */
    PageLayoutService.prototype.getPageFoldSlot = function (pageTemplate) {
        var _this = this;
        return this.breakpointService.breakpoint$.pipe(map(function (breakpoint) {
            if (!_this.config.layoutSlots) {
                // no layout config available
                return null;
            }
            var pageTemplateConfig = _this.config.layoutSlots[pageTemplate];
            var config = _this.getResponsiveSlotConfig(pageTemplateConfig, 'pageFold', breakpoint);
            return config ? config.pageFold : null;
        }));
    };
    PageLayoutService.prototype.resolveSlots = function (page, section, breakpoint) {
        var config = this.getSlotConfig(page.template, 'slots', section, breakpoint);
        if (config && config.slots) {
            var pageSlots_1 = Object.keys(page.slots);
            return config.slots.filter(function (slot) { return pageSlots_1.includes(slot); });
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
        get: function () {
            return this.cms.getCurrentPage().pipe(filter(function (page) { return !!page; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageLayoutService.prototype, "templateName$", {
        get: function () {
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
    PageLayoutService.prototype.getSlotConfig = function (templateUid, configAttribute, section, breakpoint) {
        if (!this.config.layoutSlots) {
            return null;
        }
        var pageTemplateConfig = this.config.layoutSlots[templateUid];
        if (section) {
            return this.getSlotConfigForSection(templateUid, configAttribute, section, breakpoint);
        }
        if (pageTemplateConfig) {
            return this.getResponsiveSlotConfig(pageTemplateConfig, configAttribute, breakpoint);
        }
    };
    PageLayoutService.prototype.getSlotConfigForSection = function (templateUid, configAttribute, section, breakpoint) {
        var pageTemplateConfig = this.config.layoutSlots[templateUid];
        if (!pageTemplateConfig) {
            return null;
        }
        // if there's no section config on the page layout
        // we fall back to the global section config
        var sectionConfig = pageTemplateConfig[section]
            ? pageTemplateConfig[section]
            : this.config.layoutSlots[section];
        if (!sectionConfig) {
            return null;
        }
        var responsiveConfig = this.getResponsiveSlotConfig(sectionConfig, configAttribute, breakpoint);
        if (responsiveConfig.hasOwnProperty(configAttribute)) {
            return responsiveConfig;
        }
        else if (pageTemplateConfig[section].hasOwnProperty(configAttribute)) {
            return pageTemplateConfig[section];
        }
        else if (this.config.layoutSlots[section]) {
            return this.config.layoutSlots[section];
        }
    };
    /**
     * Returns a list of slots for a breakpoint specific configuratoin
     * If there's no specific configuration for the breakpoint,
     * the closest available configuration will be returned.
     */
    PageLayoutService.prototype.getResponsiveSlotConfig = function (layoutSlotConfig, configAttribute, breakpoint) {
        var e_2, _a;
        var slotConfig = layoutSlotConfig;
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
        var all = this.breakpointService.breakpoints;
        try {
            for (var _b = __values(all.splice(0, all.indexOf(breakpoint))), _c = _b.next(); !_c.done; _c = _b.next()) {
                var br = _c.value;
                if (layoutSlotConfig[br] &&
                    layoutSlotConfig[br].hasOwnProperty(configAttribute)) {
                    slotConfig = layoutSlotConfig[br];
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
    PageLayoutService.prototype.logMissingLayoutConfig = function (page, section) {
        if (!isDevMode()) {
            return;
        }
        if (!this.logSlots[page.template]) {
            // the info log is not printed in production
            // tslint:disable-next-line: no-console
            console.info("Available CMS page slots: '" + Object.keys(page.slots).join("','") + "'");
            this.logSlots[page.template] = true;
        }
        var cacheKey = section || page.template;
        if (!this.warnLogMessages[cacheKey]) {
            console.warn("No layout config found for " + cacheKey + ", you can configure a 'LayoutConfig' to control the rendering of page slots.");
            this.warnLogMessages[cacheKey] = true;
        }
    };
    PageLayoutService.ctorParameters = function () { return [
        { type: CmsService },
        { type: LayoutConfig },
        { type: BreakpointService },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [PAGE_LAYOUT_HANDLER,] }] }
    ]; };
    PageLayoutService = __decorate([
        Injectable(),
        __param(3, Optional()),
        __param(3, Inject(PAGE_LAYOUT_HANDLER))
    ], PageLayoutService);
    return PageLayoutService;
}());
export { PageLayoutService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDbEYsT0FBTyxFQUNMLFVBQVUsRUFDVixZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLFVBQVUsR0FDWCxNQUFNLHNDQUFzQyxDQUFDO0FBQzlDLE9BQU8sRUFBcUIsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUcvRTtJQUNFLDJCQUNVLEdBQWUsRUFDZixNQUFvQixFQUNwQixpQkFBb0MsRUFHcEMsUUFBNkI7UUFMN0IsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUdwQyxhQUFRLEdBQVIsUUFBUSxDQUFxQjtRQUd2QyxtREFBbUQ7UUFDbkQsZ0RBQWdEO1FBQ2hELGtDQUFrQztRQUMxQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixhQUFRLEdBQUcsRUFBRSxDQUFDO0lBTm5CLENBQUM7SUFRSixvQ0FBUSxHQUFSLFVBQVMsT0FBZ0I7UUFBekIs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QUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNoQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDakMsNENBQTRDO1lBQzVDLHVDQUF1QztZQUN2QyxPQUFPLENBQUMsSUFBSSxDQUNWLGdDQUE4QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQUcsQ0FDckUsQ0FBQztZQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUNyQztRQUVELElBQU0sUUFBUSxHQUFHLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sQ0FBQyxJQUFJLENBQ1YsZ0NBQThCLFFBQVEsaUZBQThFLENBQ3JILENBQUM7WUFDRixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN2QztJQUNILENBQUM7O2dCQXpPYyxVQUFVO2dCQUNQLFlBQVk7Z0JBQ0QsaUJBQWlCOzRDQUMzQyxRQUFRLFlBQ1IsTUFBTSxTQUFDLG1CQUFtQjs7SUFObEIsaUJBQWlCO1FBRDdCLFVBQVUsRUFBRTtRQU1SLFdBQUEsUUFBUSxFQUFFLENBQUE7UUFDVixXQUFBLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO09BTm5CLGlCQUFpQixDQTRPN0I7SUFBRCx3QkFBQztDQUFBLEFBNU9ELElBNE9DO1NBNU9ZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgaXNEZXZNb2RlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zU2VydmljZSwgUGFnZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCcmVha3BvaW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9icmVha3BvaW50L2JyZWFrcG9pbnQuc2VydmljZSc7XG5pbXBvcnQge1xuICBCUkVBS1BPSU5ULFxuICBMYXlvdXRDb25maWcsXG4gIExheW91dFNsb3RDb25maWcsXG4gIFNsb3RDb25maWcsXG59IGZyb20gJy4uLy4uLy4uL2xheW91dC9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0SGFuZGxlciwgUEFHRV9MQVlPVVRfSEFORExFUiB9IGZyb20gJy4vcGFnZS1sYXlvdXQtaGFuZGxlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdlTGF5b3V0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY21zOiBDbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBMYXlvdXRDb25maWcsXG4gICAgcHJpdmF0ZSBicmVha3BvaW50U2VydmljZTogQnJlYWtwb2ludFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFBBR0VfTEFZT1VUX0hBTkRMRVIpXG4gICAgcHJpdmF0ZSBoYW5kbGVyczogUGFnZUxheW91dEhhbmRsZXJbXVxuICApIHt9XG5cbiAgLy8gUHJpbnRzIHdhcm4gbWVzc2FnZXMgZm9yIG1pc3NpbmcgbGF5b3V0IGNvbmZpZ3MuXG4gIC8vIFRoZSB3YXJuaW5ncyBhcmUgb25seSBwcmludGVkIG9uY2UgcGVyIGNvbmZpZ1xuICAvLyB0byBub3QgcG9sbHV0ZSB0aGUgY29uc29sZSBsb2cuXG4gIHByaXZhdGUgd2FybkxvZ01lc3NhZ2VzID0ge307XG4gIHByaXZhdGUgbG9nU2xvdHMgPSB7fTtcblxuICBnZXRTbG90cyhzZWN0aW9uPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFt0aGlzLnBhZ2UkLCB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmJyZWFrcG9pbnQkXSkucGlwZShcbiAgICAgIG1hcCgoW3BhZ2UsIGJyZWFrcG9pbnRdKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2VUZW1wbGF0ZSA9IHBhZ2UudGVtcGxhdGU7XG4gICAgICAgIGNvbnN0IHNsb3RzID0gdGhpcy5yZXNvbHZlU2xvdHMocGFnZSwgc2VjdGlvbiwgYnJlYWtwb2ludCk7XG4gICAgICAgIHJldHVybiB7IHNsb3RzLCBwYWdlVGVtcGxhdGUsIGJyZWFrcG9pbnQgfTtcbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKCh7IHNsb3RzLCBwYWdlVGVtcGxhdGUsIGJyZWFrcG9pbnQgfSkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gb2Yoc2xvdHMpO1xuICAgICAgICBmb3IgKGNvbnN0IGhhbmRsZXIgb2YgdGhpcy5oYW5kbGVycyB8fCBbXSkge1xuICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIuaGFuZGxlKHJlc3VsdCwgcGFnZVRlbXBsYXRlLCBzZWN0aW9uLCBicmVha3BvaW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgoYSwgYikgPT4ge1xuICAgICAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aXRoIHRoZSBsYXN0IHBhZ2Ugc2xvdCBhYm92ZS10aGUtZm9sZFxuICAgKiBmb3IgdGhlIGdpdmVuIHBhZ2VUZW1wbGF0ZSAvIGJyZWFrcG9pbnQuXG4gICAqXG4gICAqIFRoZSBwYWdlIGZvbGQgaXMgY29uZmlndXJhYmxlIGluIHRoZSBgTGF5b3V0Q29uZmlnYCBmb3IgZWFjaCBwYWdlIGxheW91dC5cbiAgICovXG4gIGdldFBhZ2VGb2xkU2xvdChwYWdlVGVtcGxhdGU6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludFNlcnZpY2UuYnJlYWtwb2ludCQucGlwZShcbiAgICAgIG1hcCgoYnJlYWtwb2ludCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmxheW91dFNsb3RzKSB7XG4gICAgICAgICAgLy8gbm8gbGF5b3V0IGNvbmZpZyBhdmFpbGFibGVcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWdlVGVtcGxhdGVDb25maWcgPSB0aGlzLmNvbmZpZy5sYXlvdXRTbG90c1twYWdlVGVtcGxhdGVdO1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldFJlc3BvbnNpdmVTbG90Q29uZmlnKFxuICAgICAgICAgIDxMYXlvdXRTbG90Q29uZmlnPnBhZ2VUZW1wbGF0ZUNvbmZpZyxcbiAgICAgICAgICAncGFnZUZvbGQnLFxuICAgICAgICAgIGJyZWFrcG9pbnRcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGNvbmZpZyA/IGNvbmZpZy5wYWdlRm9sZCA6IG51bGw7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVTbG90cyhwYWdlLCBzZWN0aW9uLCBicmVha3BvaW50KTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0U2xvdENvbmZpZyhcbiAgICAgIHBhZ2UudGVtcGxhdGUsXG4gICAgICAnc2xvdHMnLFxuICAgICAgc2VjdGlvbixcbiAgICAgIGJyZWFrcG9pbnRcbiAgICApO1xuICAgIGlmIChjb25maWcgJiYgY29uZmlnLnNsb3RzKSB7XG4gICAgICBjb25zdCBwYWdlU2xvdHMgPSBPYmplY3Qua2V5cyhwYWdlLnNsb3RzKTtcbiAgICAgIHJldHVybiBjb25maWcuc2xvdHMuZmlsdGVyKChzbG90KSA9PiBwYWdlU2xvdHMuaW5jbHVkZXMoc2xvdCkpO1xuICAgIH0gZWxzZSBpZiAoIXNlY3Rpb24pIHtcbiAgICAgIHRoaXMubG9nTWlzc2luZ0xheW91dENvbmZpZyhwYWdlKTtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhwYWdlLnNsb3RzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2dNaXNzaW5nTGF5b3V0Q29uZmlnKHBhZ2UsIHNlY3Rpb24pO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIGdldCBwYWdlJCgpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5jbXMuZ2V0Q3VycmVudFBhZ2UoKS5waXBlKGZpbHRlcigocGFnZSkgPT4gISFwYWdlKSk7XG4gIH1cblxuICBnZXQgdGVtcGxhdGVOYW1lJCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2UkLnBpcGUoXG4gICAgICBmaWx0ZXIoKHBhZ2UpID0+ICEhcGFnZS50ZW1wbGF0ZSksXG4gICAgICBtYXAoKHBhZ2U6IFBhZ2UpID0+IHBhZ2UudGVtcGxhdGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBsb2FkIHNsb3RzIGZyb20gdGhlIGxheW91dCBjb25maWd1cmF0aW9uLiBUaGUgYnJlYWtwb2ludCBpcyB1c2VkXG4gICAqIHRvIGxvYWQgYSBzcGVjaWZpYyBjb25maWd1cmF0aW9uIGZvciB0aGUgZ2l2ZW4gYnJlYWtwb2ludC4gSWYgdGhlcmUnc1xuICAgKiBubyBjb25maWd1cmF0aW9uIGF2YWlsYWJsZSBmb3IgdGhlIGdpdmVuIGJyZWFrcG9pbnQgdGhlIGRlZmF1bHQgc2xvdFxuICAgKiBjb25maWd1cmF0aW9uIGlzIHJldHVybmVkLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFNsb3RDb25maWcoXG4gICAgdGVtcGxhdGVVaWQ6IHN0cmluZyxcbiAgICBjb25maWdBdHRyaWJ1dGU6IHN0cmluZyxcbiAgICBzZWN0aW9uPzogc3RyaW5nLFxuICAgIGJyZWFrcG9pbnQ/OiBCUkVBS1BPSU5UXG4gICk6IFNsb3RDb25maWcge1xuICAgIGlmICghdGhpcy5jb25maWcubGF5b3V0U2xvdHMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBwYWdlVGVtcGxhdGVDb25maWcgPSB0aGlzLmNvbmZpZy5sYXlvdXRTbG90c1t0ZW1wbGF0ZVVpZF07XG5cbiAgICBpZiAoc2VjdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U2xvdENvbmZpZ0ZvclNlY3Rpb24oXG4gICAgICAgIHRlbXBsYXRlVWlkLFxuICAgICAgICBjb25maWdBdHRyaWJ1dGUsXG4gICAgICAgIHNlY3Rpb24sXG4gICAgICAgIGJyZWFrcG9pbnRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHBhZ2VUZW1wbGF0ZUNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVzcG9uc2l2ZVNsb3RDb25maWcoXG4gICAgICAgIDxMYXlvdXRTbG90Q29uZmlnPnBhZ2VUZW1wbGF0ZUNvbmZpZyxcbiAgICAgICAgY29uZmlnQXR0cmlidXRlLFxuICAgICAgICBicmVha3BvaW50XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTbG90Q29uZmlnRm9yU2VjdGlvbihcbiAgICB0ZW1wbGF0ZVVpZDogc3RyaW5nLFxuICAgIGNvbmZpZ0F0dHJpYnV0ZTogc3RyaW5nLFxuICAgIHNlY3Rpb24/OiBzdHJpbmcsXG4gICAgYnJlYWtwb2ludD86IEJSRUFLUE9JTlRcbiAgKTogU2xvdENvbmZpZyB7XG4gICAgY29uc3QgcGFnZVRlbXBsYXRlQ29uZmlnID0gdGhpcy5jb25maWcubGF5b3V0U2xvdHNbdGVtcGxhdGVVaWRdO1xuXG4gICAgaWYgKCFwYWdlVGVtcGxhdGVDb25maWcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIGlmIHRoZXJlJ3Mgbm8gc2VjdGlvbiBjb25maWcgb24gdGhlIHBhZ2UgbGF5b3V0XG4gICAgLy8gd2UgZmFsbCBiYWNrIHRvIHRoZSBnbG9iYWwgc2VjdGlvbiBjb25maWdcbiAgICBjb25zdCBzZWN0aW9uQ29uZmlnID0gcGFnZVRlbXBsYXRlQ29uZmlnW3NlY3Rpb25dXG4gICAgICA/IHBhZ2VUZW1wbGF0ZUNvbmZpZ1tzZWN0aW9uXVxuICAgICAgOiB0aGlzLmNvbmZpZy5sYXlvdXRTbG90c1tzZWN0aW9uXTtcblxuICAgIGlmICghc2VjdGlvbkNvbmZpZykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2l2ZUNvbmZpZyA9IHRoaXMuZ2V0UmVzcG9uc2l2ZVNsb3RDb25maWcoXG4gICAgICA8TGF5b3V0U2xvdENvbmZpZz5zZWN0aW9uQ29uZmlnLFxuICAgICAgY29uZmlnQXR0cmlidXRlLFxuICAgICAgYnJlYWtwb2ludFxuICAgICk7XG5cbiAgICBpZiAocmVzcG9uc2l2ZUNvbmZpZy5oYXNPd25Qcm9wZXJ0eShjb25maWdBdHRyaWJ1dGUpKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2l2ZUNvbmZpZztcbiAgICB9IGVsc2UgaWYgKHBhZ2VUZW1wbGF0ZUNvbmZpZ1tzZWN0aW9uXS5oYXNPd25Qcm9wZXJ0eShjb25maWdBdHRyaWJ1dGUpKSB7XG4gICAgICByZXR1cm4gcGFnZVRlbXBsYXRlQ29uZmlnW3NlY3Rpb25dO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWcubGF5b3V0U2xvdHNbc2VjdGlvbl0pIHtcbiAgICAgIHJldHVybiA8U2xvdENvbmZpZz50aGlzLmNvbmZpZy5sYXlvdXRTbG90c1tzZWN0aW9uXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2Ygc2xvdHMgZm9yIGEgYnJlYWtwb2ludCBzcGVjaWZpYyBjb25maWd1cmF0b2luXG4gICAqIElmIHRoZXJlJ3Mgbm8gc3BlY2lmaWMgY29uZmlndXJhdGlvbiBmb3IgdGhlIGJyZWFrcG9pbnQsXG4gICAqIHRoZSBjbG9zZXN0IGF2YWlsYWJsZSBjb25maWd1cmF0aW9uIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0UmVzcG9uc2l2ZVNsb3RDb25maWcoXG4gICAgbGF5b3V0U2xvdENvbmZpZzogTGF5b3V0U2xvdENvbmZpZyxcbiAgICBjb25maWdBdHRyaWJ1dGU6IHN0cmluZyxcbiAgICBicmVha3BvaW50PzogQlJFQUtQT0lOVFxuICApOiBTbG90Q29uZmlnIHtcbiAgICBsZXQgc2xvdENvbmZpZyA9IDxTbG90Q29uZmlnPmxheW91dFNsb3RDb25maWc7XG5cbiAgICAvLyBmYWxsYmFjayB0byBkZWZhdWx0IHNsb3QgY29uZmlnXG4gICAgaWYgKCFsYXlvdXRTbG90Q29uZmlnIHx8ICFicmVha3BvaW50KSB7XG4gICAgICByZXR1cm4gc2xvdENvbmZpZztcbiAgICB9XG5cbiAgICAvLyB3ZSBoYXZlIGEgY29uZmlnIGZvciB0aGUgc3BlY2lmaWMgYnJlYWtwb2ludFxuICAgIGlmIChcbiAgICAgIGxheW91dFNsb3RDb25maWdbYnJlYWtwb2ludF0gJiZcbiAgICAgIGxheW91dFNsb3RDb25maWdbYnJlYWtwb2ludF0uaGFzT3duUHJvcGVydHkoY29uZmlnQXR0cmlidXRlKVxuICAgICkge1xuICAgICAgcmV0dXJuIDxTbG90Q29uZmlnPmxheW91dFNsb3RDb25maWdbYnJlYWtwb2ludF07XG4gICAgfVxuXG4gICAgLy8gZmluZCBjbG9zZXN0IGNvbmZpZ1xuICAgIGNvbnN0IGFsbCA9IHRoaXMuYnJlYWtwb2ludFNlcnZpY2UuYnJlYWtwb2ludHM7XG5cbiAgICBmb3IgKGNvbnN0IGJyIG9mIGFsbC5zcGxpY2UoMCwgYWxsLmluZGV4T2YoYnJlYWtwb2ludCkpKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGxheW91dFNsb3RDb25maWdbYnJdICYmXG4gICAgICAgIGxheW91dFNsb3RDb25maWdbYnJdLmhhc093blByb3BlcnR5KGNvbmZpZ0F0dHJpYnV0ZSlcbiAgICAgICkge1xuICAgICAgICBzbG90Q29uZmlnID0gPFNsb3RDb25maWc+bGF5b3V0U2xvdENvbmZpZ1ticl07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzbG90Q29uZmlnO1xuICB9XG5cbiAgLyoqXG4gICAqIEluIG9yZGVyIHRvIGhlbHAgZGV2ZWxvcGVycywgd2UgcHJpbnQgc29tZSBkZXRhaWxlZCBsb2cgaW5mb3JtYXRpb24gaW5cbiAgICogY2FzZSB0aGVyZSdzIG5vIGxheW91dCBjb25maWd1cmF0aW9uIGF2YWlsYWJsZSBmb3IgdGhlIGdpdmVuIHBhZ2UgdGVtcGxhdGVcbiAgICogb3Igc2VjdGlvbi4gQWRkaXRpb25hbGx5LCB0aGUgc2xvdCBwb3NpdGlvbnMgYXJlIHByaW50ZWQgaW4gdGhlIGNvbnNvbGVcbiAgICogaW4gYSBmb3JtYXQgdGhhdCBjYW4gYmUgY29waWVkIC8gcGFzdGUgdG8gdGhlIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBwcml2YXRlIGxvZ01pc3NpbmdMYXlvdXRDb25maWcocGFnZTogUGFnZSwgc2VjdGlvbj86IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghaXNEZXZNb2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmxvZ1Nsb3RzW3BhZ2UudGVtcGxhdGVdKSB7XG4gICAgICAvLyB0aGUgaW5mbyBsb2cgaXMgbm90IHByaW50ZWQgaW4gcHJvZHVjdGlvblxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgIGBBdmFpbGFibGUgQ01TIHBhZ2Ugc2xvdHM6ICcke09iamVjdC5rZXlzKHBhZ2Uuc2xvdHMpLmpvaW4oYCcsJ2ApfSdgXG4gICAgICApO1xuICAgICAgdGhpcy5sb2dTbG90c1twYWdlLnRlbXBsYXRlXSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgY2FjaGVLZXkgPSBzZWN0aW9uIHx8IHBhZ2UudGVtcGxhdGU7XG4gICAgaWYgKCF0aGlzLndhcm5Mb2dNZXNzYWdlc1tjYWNoZUtleV0pIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYE5vIGxheW91dCBjb25maWcgZm91bmQgZm9yICR7Y2FjaGVLZXl9LCB5b3UgY2FuIGNvbmZpZ3VyZSBhICdMYXlvdXRDb25maWcnIHRvIGNvbnRyb2wgdGhlIHJlbmRlcmluZyBvZiBwYWdlIHNsb3RzLmBcbiAgICAgICk7XG4gICAgICB0aGlzLndhcm5Mb2dNZXNzYWdlc1tjYWNoZUtleV0gPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl19