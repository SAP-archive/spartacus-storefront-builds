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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDbEYsT0FBTyxFQUNMLFVBQVUsRUFDVixZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLFVBQVUsR0FDWCxNQUFNLHNDQUFzQyxDQUFDO0FBQzlDLE9BQU8sRUFBcUIsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUcvRTtJQUNFLDJCQUNVLEdBQWUsRUFDZixNQUFvQixFQUNwQixpQkFBb0MsRUFHcEMsUUFBNkI7UUFMN0IsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUdwQyxhQUFRLEdBQVIsUUFBUSxDQUFxQjtRQUd2QyxtREFBbUQ7UUFDbkQsZ0RBQWdEO1FBQ2hELGtDQUFrQztRQUMxQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixhQUFRLEdBQUcsRUFBRSxDQUFDO0lBTm5CLENBQUM7SUFRSixvQ0FBUSxHQUFSLFVBQVMsT0FBZ0I7UUFBekIs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QUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNoQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDakMsNENBQTRDO1lBQzVDLHVDQUF1QztZQUN2QyxPQUFPLENBQUMsSUFBSSxDQUNWLGdDQUE4QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQUcsQ0FDckUsQ0FBQztZQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUNyQztRQUVELElBQU0sUUFBUSxHQUFHLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sQ0FBQyxJQUFJLENBQ1YsZ0NBQThCLFFBQVEsaUZBQThFLENBQ3JILENBQUM7WUFDRixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN2QztJQUNILENBQUM7O2dCQXpPYyxVQUFVO2dCQUNQLFlBQVk7Z0JBQ0QsaUJBQWlCOzRDQUMzQyxRQUFRLFlBQ1IsTUFBTSxTQUFDLG1CQUFtQjs7SUFObEIsaUJBQWlCO1FBRDdCLFVBQVUsRUFBRTtRQU1SLFdBQUEsUUFBUSxFQUFFLENBQUE7UUFDVixXQUFBLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO09BTm5CLGlCQUFpQixDQTRPN0I7SUFBRCx3QkFBQztDQUFBLEFBNU9ELElBNE9DO1NBNU9ZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgaXNEZXZNb2RlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zU2VydmljZSwgUGFnZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCcmVha3BvaW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9icmVha3BvaW50L2JyZWFrcG9pbnQuc2VydmljZSc7XG5pbXBvcnQge1xuICBCUkVBS1BPSU5ULFxuICBMYXlvdXRDb25maWcsXG4gIExheW91dFNsb3RDb25maWcsXG4gIFNsb3RDb25maWcsXG59IGZyb20gJy4uLy4uLy4uL2xheW91dC9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0SGFuZGxlciwgUEFHRV9MQVlPVVRfSEFORExFUiB9IGZyb20gJy4vcGFnZS1sYXlvdXQtaGFuZGxlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdlTGF5b3V0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY21zOiBDbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBMYXlvdXRDb25maWcsXG4gICAgcHJpdmF0ZSBicmVha3BvaW50U2VydmljZTogQnJlYWtwb2ludFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFBBR0VfTEFZT1VUX0hBTkRMRVIpXG4gICAgcHJpdmF0ZSBoYW5kbGVyczogUGFnZUxheW91dEhhbmRsZXJbXVxuICApIHt9XG5cbiAgLy8gUHJpbnRzIHdhcm4gbWVzc2FnZXMgZm9yIG1pc3NpbmcgbGF5b3V0IGNvbmZpZ3MuXG4gIC8vIFRoZSB3YXJuaW5ncyBhcmUgb25seSBwcmludGVkIG9uY2UgcGVyIGNvbmZpZ1xuICAvLyB0byBub3QgcG9sbHV0ZSB0aGUgY29uc29sZSBsb2cuXG4gIHByaXZhdGUgd2FybkxvZ01lc3NhZ2VzID0ge307XG4gIHByaXZhdGUgbG9nU2xvdHMgPSB7fTtcblxuICBnZXRTbG90cyhzZWN0aW9uPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFt0aGlzLnBhZ2UkLCB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmJyZWFrcG9pbnQkXSkucGlwZShcbiAgICAgIG1hcCgoW3BhZ2UsIGJyZWFrcG9pbnRdKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2VUZW1wbGF0ZSA9IHBhZ2UudGVtcGxhdGU7XG4gICAgICAgIGNvbnN0IHNsb3RzID0gdGhpcy5yZXNvbHZlU2xvdHMocGFnZSwgc2VjdGlvbiwgYnJlYWtwb2ludCk7XG4gICAgICAgIHJldHVybiB7IHNsb3RzLCBwYWdlVGVtcGxhdGUsIGJyZWFrcG9pbnQgfTtcbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKCh7IHNsb3RzLCBwYWdlVGVtcGxhdGUsIGJyZWFrcG9pbnQgfSkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gb2Yoc2xvdHMpO1xuICAgICAgICBmb3IgKGNvbnN0IGhhbmRsZXIgb2YgdGhpcy5oYW5kbGVycyB8fCBbXSkge1xuICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIuaGFuZGxlKHJlc3VsdCwgcGFnZVRlbXBsYXRlLCBzZWN0aW9uLCBicmVha3BvaW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgoYSwgYikgPT4ge1xuICAgICAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aXRoIHRoZSBsYXN0IHBhZ2Ugc2xvdCBhYm92ZS10aGUtZm9sZFxuICAgKiBmb3IgdGhlIGdpdmVuIHBhZ2VUZW1wbGF0ZSAvIGJyZWFrcG9pbnQuXG4gICAqXG4gICAqIFRoZSBwYWdlIGZvbGQgaXMgY29uZmlndXJhYmxlIGluIHRoZSBgTGF5b3V0Q29uZmlnYCBmb3IgZWFjaCBwYWdlIGxheW91dC5cbiAgICovXG4gIGdldFBhZ2VGb2xkU2xvdChwYWdlVGVtcGxhdGU6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludFNlcnZpY2UuYnJlYWtwb2ludCQucGlwZShcbiAgICAgIG1hcChicmVha3BvaW50ID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5sYXlvdXRTbG90cykge1xuICAgICAgICAgIC8vIG5vIGxheW91dCBjb25maWcgYXZhaWxhYmxlXG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZVRlbXBsYXRlQ29uZmlnID0gdGhpcy5jb25maWcubGF5b3V0U2xvdHNbcGFnZVRlbXBsYXRlXTtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXRSZXNwb25zaXZlU2xvdENvbmZpZyhcbiAgICAgICAgICA8TGF5b3V0U2xvdENvbmZpZz5wYWdlVGVtcGxhdGVDb25maWcsXG4gICAgICAgICAgJ3BhZ2VGb2xkJyxcbiAgICAgICAgICBicmVha3BvaW50XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBjb25maWcgPyBjb25maWcucGFnZUZvbGQgOiBudWxsO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlU2xvdHMocGFnZSwgc2VjdGlvbiwgYnJlYWtwb2ludCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldFNsb3RDb25maWcoXG4gICAgICBwYWdlLnRlbXBsYXRlLFxuICAgICAgJ3Nsb3RzJyxcbiAgICAgIHNlY3Rpb24sXG4gICAgICBicmVha3BvaW50XG4gICAgKTtcbiAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5zbG90cykge1xuICAgICAgY29uc3QgcGFnZVNsb3RzID0gT2JqZWN0LmtleXMocGFnZS5zbG90cyk7XG4gICAgICByZXR1cm4gY29uZmlnLnNsb3RzLmZpbHRlcihzbG90ID0+IHBhZ2VTbG90cy5pbmNsdWRlcyhzbG90KSk7XG4gICAgfSBlbHNlIGlmICghc2VjdGlvbikge1xuICAgICAgdGhpcy5sb2dNaXNzaW5nTGF5b3V0Q29uZmlnKHBhZ2UpO1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHBhZ2Uuc2xvdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZ01pc3NpbmdMYXlvdXRDb25maWcocGFnZSwgc2VjdGlvbik7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgZ2V0IHBhZ2UkKCk6IE9ic2VydmFibGU8UGFnZT4ge1xuICAgIHJldHVybiB0aGlzLmNtcy5nZXRDdXJyZW50UGFnZSgpLnBpcGUoZmlsdGVyKHBhZ2UgPT4gISFwYWdlKSk7XG4gIH1cblxuICBnZXQgdGVtcGxhdGVOYW1lJCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2UkLnBpcGUoXG4gICAgICBmaWx0ZXIocGFnZSA9PiAhIXBhZ2UudGVtcGxhdGUpLFxuICAgICAgbWFwKChwYWdlOiBQYWdlKSA9PiBwYWdlLnRlbXBsYXRlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogbG9hZCBzbG90cyBmcm9tIHRoZSBsYXlvdXQgY29uZmlndXJhdGlvbi4gVGhlIGJyZWFrcG9pbnQgaXMgdXNlZFxuICAgKiB0byBsb2FkIGEgc3BlY2lmaWMgY29uZmlndXJhdGlvbiBmb3IgdGhlIGdpdmVuIGJyZWFrcG9pbnQuIElmIHRoZXJlJ3NcbiAgICogbm8gY29uZmlndXJhdGlvbiBhdmFpbGFibGUgZm9yIHRoZSBnaXZlbiBicmVha3BvaW50IHRoZSBkZWZhdWx0IHNsb3RcbiAgICogY29uZmlndXJhdGlvbiBpcyByZXR1cm5lZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRTbG90Q29uZmlnKFxuICAgIHRlbXBsYXRlVWlkOiBzdHJpbmcsXG4gICAgY29uZmlnQXR0cmlidXRlOiBzdHJpbmcsXG4gICAgc2VjdGlvbj86IHN0cmluZyxcbiAgICBicmVha3BvaW50PzogQlJFQUtQT0lOVFxuICApOiBTbG90Q29uZmlnIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLmxheW91dFNsb3RzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgcGFnZVRlbXBsYXRlQ29uZmlnID0gdGhpcy5jb25maWcubGF5b3V0U2xvdHNbdGVtcGxhdGVVaWRdO1xuXG4gICAgaWYgKHNlY3Rpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFNsb3RDb25maWdGb3JTZWN0aW9uKFxuICAgICAgICB0ZW1wbGF0ZVVpZCxcbiAgICAgICAgY29uZmlnQXR0cmlidXRlLFxuICAgICAgICBzZWN0aW9uLFxuICAgICAgICBicmVha3BvaW50XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChwYWdlVGVtcGxhdGVDb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFJlc3BvbnNpdmVTbG90Q29uZmlnKFxuICAgICAgICA8TGF5b3V0U2xvdENvbmZpZz5wYWdlVGVtcGxhdGVDb25maWcsXG4gICAgICAgIGNvbmZpZ0F0dHJpYnV0ZSxcbiAgICAgICAgYnJlYWtwb2ludFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U2xvdENvbmZpZ0ZvclNlY3Rpb24oXG4gICAgdGVtcGxhdGVVaWQ6IHN0cmluZyxcbiAgICBjb25maWdBdHRyaWJ1dGU6IHN0cmluZyxcbiAgICBzZWN0aW9uPzogc3RyaW5nLFxuICAgIGJyZWFrcG9pbnQ/OiBCUkVBS1BPSU5UXG4gICk6IFNsb3RDb25maWcge1xuICAgIGNvbnN0IHBhZ2VUZW1wbGF0ZUNvbmZpZyA9IHRoaXMuY29uZmlnLmxheW91dFNsb3RzW3RlbXBsYXRlVWlkXTtcblxuICAgIGlmICghcGFnZVRlbXBsYXRlQ29uZmlnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBpZiB0aGVyZSdzIG5vIHNlY3Rpb24gY29uZmlnIG9uIHRoZSBwYWdlIGxheW91dFxuICAgIC8vIHdlIGZhbGwgYmFjayB0byB0aGUgZ2xvYmFsIHNlY3Rpb24gY29uZmlnXG4gICAgY29uc3Qgc2VjdGlvbkNvbmZpZyA9IHBhZ2VUZW1wbGF0ZUNvbmZpZ1tzZWN0aW9uXVxuICAgICAgPyBwYWdlVGVtcGxhdGVDb25maWdbc2VjdGlvbl1cbiAgICAgIDogdGhpcy5jb25maWcubGF5b3V0U2xvdHNbc2VjdGlvbl07XG5cbiAgICBpZiAoIXNlY3Rpb25Db25maWcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNpdmVDb25maWcgPSB0aGlzLmdldFJlc3BvbnNpdmVTbG90Q29uZmlnKFxuICAgICAgPExheW91dFNsb3RDb25maWc+c2VjdGlvbkNvbmZpZyxcbiAgICAgIGNvbmZpZ0F0dHJpYnV0ZSxcbiAgICAgIGJyZWFrcG9pbnRcbiAgICApO1xuXG4gICAgaWYgKHJlc3BvbnNpdmVDb25maWcuaGFzT3duUHJvcGVydHkoY29uZmlnQXR0cmlidXRlKSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNpdmVDb25maWc7XG4gICAgfSBlbHNlIGlmIChwYWdlVGVtcGxhdGVDb25maWdbc2VjdGlvbl0uaGFzT3duUHJvcGVydHkoY29uZmlnQXR0cmlidXRlKSkge1xuICAgICAgcmV0dXJuIHBhZ2VUZW1wbGF0ZUNvbmZpZ1tzZWN0aW9uXTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnLmxheW91dFNsb3RzW3NlY3Rpb25dKSB7XG4gICAgICByZXR1cm4gPFNsb3RDb25maWc+dGhpcy5jb25maWcubGF5b3V0U2xvdHNbc2VjdGlvbl07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIHNsb3RzIGZvciBhIGJyZWFrcG9pbnQgc3BlY2lmaWMgY29uZmlndXJhdG9pblxuICAgKiBJZiB0aGVyZSdzIG5vIHNwZWNpZmljIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBicmVha3BvaW50LFxuICAgKiB0aGUgY2xvc2VzdCBhdmFpbGFibGUgY29uZmlndXJhdGlvbiB3aWxsIGJlIHJldHVybmVkLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFJlc3BvbnNpdmVTbG90Q29uZmlnKFxuICAgIGxheW91dFNsb3RDb25maWc6IExheW91dFNsb3RDb25maWcsXG4gICAgY29uZmlnQXR0cmlidXRlOiBzdHJpbmcsXG4gICAgYnJlYWtwb2ludD86IEJSRUFLUE9JTlRcbiAgKTogU2xvdENvbmZpZyB7XG4gICAgbGV0IHNsb3RDb25maWcgPSA8U2xvdENvbmZpZz5sYXlvdXRTbG90Q29uZmlnO1xuXG4gICAgLy8gZmFsbGJhY2sgdG8gZGVmYXVsdCBzbG90IGNvbmZpZ1xuICAgIGlmICghbGF5b3V0U2xvdENvbmZpZyB8fCAhYnJlYWtwb2ludCkge1xuICAgICAgcmV0dXJuIHNsb3RDb25maWc7XG4gICAgfVxuXG4gICAgLy8gd2UgaGF2ZSBhIGNvbmZpZyBmb3IgdGhlIHNwZWNpZmljIGJyZWFrcG9pbnRcbiAgICBpZiAoXG4gICAgICBsYXlvdXRTbG90Q29uZmlnW2JyZWFrcG9pbnRdICYmXG4gICAgICBsYXlvdXRTbG90Q29uZmlnW2JyZWFrcG9pbnRdLmhhc093blByb3BlcnR5KGNvbmZpZ0F0dHJpYnV0ZSlcbiAgICApIHtcbiAgICAgIHJldHVybiA8U2xvdENvbmZpZz5sYXlvdXRTbG90Q29uZmlnW2JyZWFrcG9pbnRdO1xuICAgIH1cblxuICAgIC8vIGZpbmQgY2xvc2VzdCBjb25maWdcbiAgICBjb25zdCBhbGwgPSB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmJyZWFrcG9pbnRzO1xuXG4gICAgZm9yIChjb25zdCBiciBvZiBhbGwuc3BsaWNlKDAsIGFsbC5pbmRleE9mKGJyZWFrcG9pbnQpKSkge1xuICAgICAgaWYgKFxuICAgICAgICBsYXlvdXRTbG90Q29uZmlnW2JyXSAmJlxuICAgICAgICBsYXlvdXRTbG90Q29uZmlnW2JyXS5oYXNPd25Qcm9wZXJ0eShjb25maWdBdHRyaWJ1dGUpXG4gICAgICApIHtcbiAgICAgICAgc2xvdENvbmZpZyA9IDxTbG90Q29uZmlnPmxheW91dFNsb3RDb25maWdbYnJdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2xvdENvbmZpZztcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBvcmRlciB0byBoZWxwIGRldmVsb3BlcnMsIHdlIHByaW50IHNvbWUgZGV0YWlsZWQgbG9nIGluZm9ybWF0aW9uIGluXG4gICAqIGNhc2UgdGhlcmUncyBubyBsYXlvdXQgY29uZmlndXJhdGlvbiBhdmFpbGFibGUgZm9yIHRoZSBnaXZlbiBwYWdlIHRlbXBsYXRlXG4gICAqIG9yIHNlY3Rpb24uIEFkZGl0aW9uYWxseSwgdGhlIHNsb3QgcG9zaXRpb25zIGFyZSBwcmludGVkIGluIHRoZSBjb25zb2xlXG4gICAqIGluIGEgZm9ybWF0IHRoYXQgY2FuIGJlIGNvcGllZCAvIHBhc3RlIHRvIHRoZSBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBsb2dNaXNzaW5nTGF5b3V0Q29uZmlnKHBhZ2U6IFBhZ2UsIHNlY3Rpb24/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIWlzRGV2TW9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5sb2dTbG90c1twYWdlLnRlbXBsYXRlXSkge1xuICAgICAgLy8gdGhlIGluZm8gbG9nIGlzIG5vdCBwcmludGVkIGluIHByb2R1Y3Rpb25cbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tY29uc29sZVxuICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICBgQXZhaWxhYmxlIENNUyBwYWdlIHNsb3RzOiAnJHtPYmplY3Qua2V5cyhwYWdlLnNsb3RzKS5qb2luKGAnLCdgKX0nYFxuICAgICAgKTtcbiAgICAgIHRoaXMubG9nU2xvdHNbcGFnZS50ZW1wbGF0ZV0gPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGNhY2hlS2V5ID0gc2VjdGlvbiB8fCBwYWdlLnRlbXBsYXRlO1xuICAgIGlmICghdGhpcy53YXJuTG9nTWVzc2FnZXNbY2FjaGVLZXldKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBObyBsYXlvdXQgY29uZmlnIGZvdW5kIGZvciAke2NhY2hlS2V5fSwgeW91IGNhbiBjb25maWd1cmUgYSAnTGF5b3V0Q29uZmlnJyB0byBjb250cm9sIHRoZSByZW5kZXJpbmcgb2YgcGFnZSBzbG90cy5gXG4gICAgICApO1xuICAgICAgdGhpcy53YXJuTG9nTWVzc2FnZXNbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==