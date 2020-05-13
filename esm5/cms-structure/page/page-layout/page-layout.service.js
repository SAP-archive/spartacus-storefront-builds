import { __decorate, __param, __read, __values } from "tslib";
import { Inject, Injectable, isDevMode, Optional } from '@angular/core';
import { CmsService, Page } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
import { BREAKPOINT, LayoutConfig, LayoutSlotConfig, SlotConfig, } from '../../../layout/config/layout-config';
import { PAGE_LAYOUT_HANDLER } from './page-layout-handler';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../../../layout/config/layout-config";
import * as i3 from "../../../layout/breakpoint/breakpoint.service";
import * as i4 from "./page-layout-handler";
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
    PageLayoutService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PageLayoutService_Factory() { return new PageLayoutService(i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i2.LayoutConfig), i0.ɵɵinject(i3.BreakpointService), i0.ɵɵinject(i4.PAGE_LAYOUT_HANDLER, 8)); }, token: PageLayoutService, providedIn: "root" });
    PageLayoutService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(3, Optional()),
        __param(3, Inject(PAGE_LAYOUT_HANDLER))
    ], PageLayoutService);
    return PageLayoutService;
}());
export { PageLayoutService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDbEYsT0FBTyxFQUNMLFVBQVUsRUFDVixZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLFVBQVUsR0FDWCxNQUFNLHNDQUFzQyxDQUFDO0FBQzlDLE9BQU8sRUFBcUIsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0FBSy9FO0lBQ0UsMkJBQ1UsR0FBZSxFQUNmLE1BQW9CLEVBQ3BCLGlCQUFvQyxFQUdwQyxRQUE2QjtRQUw3QixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUNwQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBR3BDLGFBQVEsR0FBUixRQUFRLENBQXFCO1FBR3ZDLG1EQUFtRDtRQUNuRCxnREFBZ0Q7UUFDaEQsa0NBQWtDO1FBQzFCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFObkIsQ0FBQztJQVFKLG9DQUFRLEdBQVIsVUFBUyxPQUFnQjtRQUF6QixpQkEwQkM7UUF6QkMsT0FBTyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDekUsR0FBRyxDQUFDLFVBQUMsRUFBa0I7Z0JBQWxCLGtCQUFrQixFQUFqQixZQUFJLEVBQUUsa0JBQVU7WUFDcEIsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDM0QsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLFlBQVksY0FBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUM7UUFDN0MsQ0FBQyxDQUFDLEVBQ0YsU0FBUyxDQUFDLFVBQUMsRUFBbUM7O2dCQUFqQyxnQkFBSyxFQUFFLDhCQUFZLEVBQUUsMEJBQVU7WUFDMUMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDOztnQkFDdkIsS0FBc0IsSUFBQSxLQUFBLFNBQUEsS0FBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUEsZ0JBQUEsNEJBQUU7b0JBQXRDLElBQU0sT0FBTyxXQUFBO29CQUNoQixNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztpQkFDcEU7Ozs7Ozs7OztZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxFQUNGLG9CQUFvQixDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNqQixPQUFPLEtBQUssQ0FBQztpQkFDZDthQUNGO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsMkNBQWUsR0FBZixVQUFnQixZQUFvQjtRQUFwQyxpQkFnQkM7UUFmQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUM1QyxHQUFHLENBQUMsVUFBQyxVQUFVO1lBQ2IsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO2dCQUM1Qiw2QkFBNkI7Z0JBQzdCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxJQUFNLGtCQUFrQixHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2pFLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyx1QkFBdUIsQ0FDdkIsa0JBQWtCLEVBQ3BDLFVBQVUsRUFDVixVQUFVLENBQ1gsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTyx3Q0FBWSxHQUFwQixVQUFxQixJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVU7UUFDNUMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FDL0IsSUFBSSxDQUFDLFFBQVEsRUFDYixPQUFPLEVBQ1AsT0FBTyxFQUNQLFVBQVUsQ0FDWCxDQUFDO1FBQ0YsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUMxQixJQUFNLFdBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsV0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO1NBQ2hFO2FBQU0sSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ0wsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMzQyxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQztJQUVELHNCQUFJLG9DQUFLO2FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRDQUFhO2FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQWYsQ0FBZSxDQUFDLEVBQ2pDLEdBQUcsQ0FBQyxVQUFDLElBQVUsSUFBSyxPQUFBLElBQUksQ0FBQyxRQUFRLEVBQWIsQ0FBYSxDQUFDLENBQ25DLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVEOzs7OztPQUtHO0lBQ08seUNBQWEsR0FBdkIsVUFDRSxXQUFtQixFQUNuQixlQUF1QixFQUN2QixPQUFnQixFQUNoQixVQUF1QjtRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFaEUsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FDakMsV0FBVyxFQUNYLGVBQWUsRUFDZixPQUFPLEVBQ1AsVUFBVSxDQUNYLENBQUM7U0FDSDtRQUVELElBQUksa0JBQWtCLEVBQUU7WUFDdEIsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQ2Ysa0JBQWtCLEVBQ3BDLGVBQWUsRUFDZixVQUFVLENBQ1gsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVTLG1EQUF1QixHQUFqQyxVQUNFLFdBQW1CLEVBQ25CLGVBQXVCLEVBQ3ZCLE9BQWdCLEVBQ2hCLFVBQXVCO1FBRXZCLElBQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxrREFBa0Q7UUFDbEQsNENBQTRDO1FBQzVDLElBQU0sYUFBYSxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztZQUMvQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FDakMsYUFBYSxFQUMvQixlQUFlLEVBQ2YsVUFBVSxDQUNYLENBQUM7UUFFRixJQUFJLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUNwRCxPQUFPLGdCQUFnQixDQUFDO1NBQ3pCO2FBQU0sSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDdEUsT0FBTyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQzthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0MsT0FBbUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLG1EQUF1QixHQUFqQyxVQUNFLGdCQUFrQyxFQUNsQyxlQUF1QixFQUN2QixVQUF1Qjs7UUFFdkIsSUFBSSxVQUFVLEdBQWUsZ0JBQWdCLENBQUM7UUFFOUMsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQyxPQUFPLFVBQVUsQ0FBQztTQUNuQjtRQUVELCtDQUErQztRQUMvQyxJQUNFLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztZQUM1QixnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEVBQzVEO1lBQ0EsT0FBbUIsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDakQ7UUFFRCxzQkFBc0I7UUFDdEIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQzs7WUFFL0MsS0FBaUIsSUFBQSxLQUFBLFNBQUEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO2dCQUFwRCxJQUFNLEVBQUUsV0FBQTtnQkFDWCxJQUNFLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztvQkFDcEIsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxFQUNwRDtvQkFDQSxVQUFVLEdBQWUsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQy9DO2FBQ0Y7Ozs7Ozs7OztRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLGtEQUFzQixHQUE5QixVQUErQixJQUFVLEVBQUUsT0FBZ0I7UUFDekQsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ2hCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNqQyw0Q0FBNEM7WUFDNUMsdUNBQXVDO1lBQ3ZDLE9BQU8sQ0FBQyxJQUFJLENBQ1YsZ0NBQThCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBRyxDQUNyRSxDQUFDO1lBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3JDO1FBRUQsSUFBTSxRQUFRLEdBQUcsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbkMsT0FBTyxDQUFDLElBQUksQ0FDVixnQ0FBOEIsUUFBUSxpRkFBOEUsQ0FDckgsQ0FBQztZQUNGLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7Z0JBek9jLFVBQVU7Z0JBQ1AsWUFBWTtnQkFDRCxpQkFBaUI7NENBQzNDLFFBQVEsWUFDUixNQUFNLFNBQUMsbUJBQW1COzs7SUFObEIsaUJBQWlCO1FBSDdCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7UUFNRyxXQUFBLFFBQVEsRUFBRSxDQUFBO1FBQ1YsV0FBQSxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtPQU5uQixpQkFBaUIsQ0E0TzdCOzRCQTVQRDtDQTRQQyxBQTVPRCxJQTRPQztTQTVPWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIGlzRGV2TW9kZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc1NlcnZpY2UsIFBhZ2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQnJlYWtwb2ludFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvYnJlYWtwb2ludC9icmVha3BvaW50LnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQlJFQUtQT0lOVCxcbiAgTGF5b3V0Q29uZmlnLFxuICBMYXlvdXRTbG90Q29uZmlnLFxuICBTbG90Q29uZmlnLFxufSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvY29uZmlnL2xheW91dC1jb25maWcnO1xuaW1wb3J0IHsgUGFnZUxheW91dEhhbmRsZXIsIFBBR0VfTEFZT1VUX0hBTkRMRVIgfSBmcm9tICcuL3BhZ2UtbGF5b3V0LWhhbmRsZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZUxheW91dFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNtczogQ21zU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogTGF5b3V0Q29uZmlnLFxuICAgIHByaXZhdGUgYnJlYWtwb2ludFNlcnZpY2U6IEJyZWFrcG9pbnRTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChQQUdFX0xBWU9VVF9IQU5ETEVSKVxuICAgIHByaXZhdGUgaGFuZGxlcnM6IFBhZ2VMYXlvdXRIYW5kbGVyW11cbiAgKSB7fVxuXG4gIC8vIFByaW50cyB3YXJuIG1lc3NhZ2VzIGZvciBtaXNzaW5nIGxheW91dCBjb25maWdzLlxuICAvLyBUaGUgd2FybmluZ3MgYXJlIG9ubHkgcHJpbnRlZCBvbmNlIHBlciBjb25maWdcbiAgLy8gdG8gbm90IHBvbGx1dGUgdGhlIGNvbnNvbGUgbG9nLlxuICBwcml2YXRlIHdhcm5Mb2dNZXNzYWdlcyA9IHt9O1xuICBwcml2YXRlIGxvZ1Nsb3RzID0ge307XG5cbiAgZ2V0U2xvdHMoc2VjdGlvbj86IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbdGhpcy5wYWdlJCwgdGhpcy5icmVha3BvaW50U2VydmljZS5icmVha3BvaW50JF0pLnBpcGUoXG4gICAgICBtYXAoKFtwYWdlLCBicmVha3BvaW50XSkgPT4ge1xuICAgICAgICBjb25zdCBwYWdlVGVtcGxhdGUgPSBwYWdlLnRlbXBsYXRlO1xuICAgICAgICBjb25zdCBzbG90cyA9IHRoaXMucmVzb2x2ZVNsb3RzKHBhZ2UsIHNlY3Rpb24sIGJyZWFrcG9pbnQpO1xuICAgICAgICByZXR1cm4geyBzbG90cywgcGFnZVRlbXBsYXRlLCBicmVha3BvaW50IH07XG4gICAgICB9KSxcbiAgICAgIHN3aXRjaE1hcCgoeyBzbG90cywgcGFnZVRlbXBsYXRlLCBicmVha3BvaW50IH0pID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG9mKHNsb3RzKTtcbiAgICAgICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIHRoaXMuaGFuZGxlcnMgfHwgW10pIHtcbiAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyLmhhbmRsZShyZXN1bHQsIHBhZ2VUZW1wbGF0ZSwgc2VjdGlvbiwgYnJlYWtwb2ludCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgbGFzdCBwYWdlIHNsb3QgYWJvdmUtdGhlLWZvbGRcbiAgICogZm9yIHRoZSBnaXZlbiBwYWdlVGVtcGxhdGUgLyBicmVha3BvaW50LlxuICAgKlxuICAgKiBUaGUgcGFnZSBmb2xkIGlzIGNvbmZpZ3VyYWJsZSBpbiB0aGUgYExheW91dENvbmZpZ2AgZm9yIGVhY2ggcGFnZSBsYXlvdXQuXG4gICAqL1xuICBnZXRQYWdlRm9sZFNsb3QocGFnZVRlbXBsYXRlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmJyZWFrcG9pbnQkLnBpcGUoXG4gICAgICBtYXAoKGJyZWFrcG9pbnQpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5sYXlvdXRTbG90cykge1xuICAgICAgICAgIC8vIG5vIGxheW91dCBjb25maWcgYXZhaWxhYmxlXG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZVRlbXBsYXRlQ29uZmlnID0gdGhpcy5jb25maWcubGF5b3V0U2xvdHNbcGFnZVRlbXBsYXRlXTtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXRSZXNwb25zaXZlU2xvdENvbmZpZyhcbiAgICAgICAgICA8TGF5b3V0U2xvdENvbmZpZz5wYWdlVGVtcGxhdGVDb25maWcsXG4gICAgICAgICAgJ3BhZ2VGb2xkJyxcbiAgICAgICAgICBicmVha3BvaW50XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBjb25maWcgPyBjb25maWcucGFnZUZvbGQgOiBudWxsO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlU2xvdHMocGFnZSwgc2VjdGlvbiwgYnJlYWtwb2ludCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldFNsb3RDb25maWcoXG4gICAgICBwYWdlLnRlbXBsYXRlLFxuICAgICAgJ3Nsb3RzJyxcbiAgICAgIHNlY3Rpb24sXG4gICAgICBicmVha3BvaW50XG4gICAgKTtcbiAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5zbG90cykge1xuICAgICAgY29uc3QgcGFnZVNsb3RzID0gT2JqZWN0LmtleXMocGFnZS5zbG90cyk7XG4gICAgICByZXR1cm4gY29uZmlnLnNsb3RzLmZpbHRlcigoc2xvdCkgPT4gcGFnZVNsb3RzLmluY2x1ZGVzKHNsb3QpKTtcbiAgICB9IGVsc2UgaWYgKCFzZWN0aW9uKSB7XG4gICAgICB0aGlzLmxvZ01pc3NpbmdMYXlvdXRDb25maWcocGFnZSk7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMocGFnZS5zbG90cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9nTWlzc2luZ0xheW91dENvbmZpZyhwYWdlLCBzZWN0aW9uKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBnZXQgcGFnZSQoKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zLmdldEN1cnJlbnRQYWdlKCkucGlwZShmaWx0ZXIoKHBhZ2UpID0+ICEhcGFnZSkpO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlTmFtZSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdlJC5waXBlKFxuICAgICAgZmlsdGVyKChwYWdlKSA9PiAhIXBhZ2UudGVtcGxhdGUpLFxuICAgICAgbWFwKChwYWdlOiBQYWdlKSA9PiBwYWdlLnRlbXBsYXRlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogbG9hZCBzbG90cyBmcm9tIHRoZSBsYXlvdXQgY29uZmlndXJhdGlvbi4gVGhlIGJyZWFrcG9pbnQgaXMgdXNlZFxuICAgKiB0byBsb2FkIGEgc3BlY2lmaWMgY29uZmlndXJhdGlvbiBmb3IgdGhlIGdpdmVuIGJyZWFrcG9pbnQuIElmIHRoZXJlJ3NcbiAgICogbm8gY29uZmlndXJhdGlvbiBhdmFpbGFibGUgZm9yIHRoZSBnaXZlbiBicmVha3BvaW50IHRoZSBkZWZhdWx0IHNsb3RcbiAgICogY29uZmlndXJhdGlvbiBpcyByZXR1cm5lZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRTbG90Q29uZmlnKFxuICAgIHRlbXBsYXRlVWlkOiBzdHJpbmcsXG4gICAgY29uZmlnQXR0cmlidXRlOiBzdHJpbmcsXG4gICAgc2VjdGlvbj86IHN0cmluZyxcbiAgICBicmVha3BvaW50PzogQlJFQUtQT0lOVFxuICApOiBTbG90Q29uZmlnIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLmxheW91dFNsb3RzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgcGFnZVRlbXBsYXRlQ29uZmlnID0gdGhpcy5jb25maWcubGF5b3V0U2xvdHNbdGVtcGxhdGVVaWRdO1xuXG4gICAgaWYgKHNlY3Rpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFNsb3RDb25maWdGb3JTZWN0aW9uKFxuICAgICAgICB0ZW1wbGF0ZVVpZCxcbiAgICAgICAgY29uZmlnQXR0cmlidXRlLFxuICAgICAgICBzZWN0aW9uLFxuICAgICAgICBicmVha3BvaW50XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChwYWdlVGVtcGxhdGVDb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFJlc3BvbnNpdmVTbG90Q29uZmlnKFxuICAgICAgICA8TGF5b3V0U2xvdENvbmZpZz5wYWdlVGVtcGxhdGVDb25maWcsXG4gICAgICAgIGNvbmZpZ0F0dHJpYnV0ZSxcbiAgICAgICAgYnJlYWtwb2ludFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U2xvdENvbmZpZ0ZvclNlY3Rpb24oXG4gICAgdGVtcGxhdGVVaWQ6IHN0cmluZyxcbiAgICBjb25maWdBdHRyaWJ1dGU6IHN0cmluZyxcbiAgICBzZWN0aW9uPzogc3RyaW5nLFxuICAgIGJyZWFrcG9pbnQ/OiBCUkVBS1BPSU5UXG4gICk6IFNsb3RDb25maWcge1xuICAgIGNvbnN0IHBhZ2VUZW1wbGF0ZUNvbmZpZyA9IHRoaXMuY29uZmlnLmxheW91dFNsb3RzW3RlbXBsYXRlVWlkXTtcblxuICAgIGlmICghcGFnZVRlbXBsYXRlQ29uZmlnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBpZiB0aGVyZSdzIG5vIHNlY3Rpb24gY29uZmlnIG9uIHRoZSBwYWdlIGxheW91dFxuICAgIC8vIHdlIGZhbGwgYmFjayB0byB0aGUgZ2xvYmFsIHNlY3Rpb24gY29uZmlnXG4gICAgY29uc3Qgc2VjdGlvbkNvbmZpZyA9IHBhZ2VUZW1wbGF0ZUNvbmZpZ1tzZWN0aW9uXVxuICAgICAgPyBwYWdlVGVtcGxhdGVDb25maWdbc2VjdGlvbl1cbiAgICAgIDogdGhpcy5jb25maWcubGF5b3V0U2xvdHNbc2VjdGlvbl07XG5cbiAgICBpZiAoIXNlY3Rpb25Db25maWcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNpdmVDb25maWcgPSB0aGlzLmdldFJlc3BvbnNpdmVTbG90Q29uZmlnKFxuICAgICAgPExheW91dFNsb3RDb25maWc+c2VjdGlvbkNvbmZpZyxcbiAgICAgIGNvbmZpZ0F0dHJpYnV0ZSxcbiAgICAgIGJyZWFrcG9pbnRcbiAgICApO1xuXG4gICAgaWYgKHJlc3BvbnNpdmVDb25maWcuaGFzT3duUHJvcGVydHkoY29uZmlnQXR0cmlidXRlKSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNpdmVDb25maWc7XG4gICAgfSBlbHNlIGlmIChwYWdlVGVtcGxhdGVDb25maWdbc2VjdGlvbl0uaGFzT3duUHJvcGVydHkoY29uZmlnQXR0cmlidXRlKSkge1xuICAgICAgcmV0dXJuIHBhZ2VUZW1wbGF0ZUNvbmZpZ1tzZWN0aW9uXTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnLmxheW91dFNsb3RzW3NlY3Rpb25dKSB7XG4gICAgICByZXR1cm4gPFNsb3RDb25maWc+dGhpcy5jb25maWcubGF5b3V0U2xvdHNbc2VjdGlvbl07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIHNsb3RzIGZvciBhIGJyZWFrcG9pbnQgc3BlY2lmaWMgY29uZmlndXJhdG9pblxuICAgKiBJZiB0aGVyZSdzIG5vIHNwZWNpZmljIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBicmVha3BvaW50LFxuICAgKiB0aGUgY2xvc2VzdCBhdmFpbGFibGUgY29uZmlndXJhdGlvbiB3aWxsIGJlIHJldHVybmVkLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFJlc3BvbnNpdmVTbG90Q29uZmlnKFxuICAgIGxheW91dFNsb3RDb25maWc6IExheW91dFNsb3RDb25maWcsXG4gICAgY29uZmlnQXR0cmlidXRlOiBzdHJpbmcsXG4gICAgYnJlYWtwb2ludD86IEJSRUFLUE9JTlRcbiAgKTogU2xvdENvbmZpZyB7XG4gICAgbGV0IHNsb3RDb25maWcgPSA8U2xvdENvbmZpZz5sYXlvdXRTbG90Q29uZmlnO1xuXG4gICAgLy8gZmFsbGJhY2sgdG8gZGVmYXVsdCBzbG90IGNvbmZpZ1xuICAgIGlmICghbGF5b3V0U2xvdENvbmZpZyB8fCAhYnJlYWtwb2ludCkge1xuICAgICAgcmV0dXJuIHNsb3RDb25maWc7XG4gICAgfVxuXG4gICAgLy8gd2UgaGF2ZSBhIGNvbmZpZyBmb3IgdGhlIHNwZWNpZmljIGJyZWFrcG9pbnRcbiAgICBpZiAoXG4gICAgICBsYXlvdXRTbG90Q29uZmlnW2JyZWFrcG9pbnRdICYmXG4gICAgICBsYXlvdXRTbG90Q29uZmlnW2JyZWFrcG9pbnRdLmhhc093blByb3BlcnR5KGNvbmZpZ0F0dHJpYnV0ZSlcbiAgICApIHtcbiAgICAgIHJldHVybiA8U2xvdENvbmZpZz5sYXlvdXRTbG90Q29uZmlnW2JyZWFrcG9pbnRdO1xuICAgIH1cblxuICAgIC8vIGZpbmQgY2xvc2VzdCBjb25maWdcbiAgICBjb25zdCBhbGwgPSB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmJyZWFrcG9pbnRzO1xuXG4gICAgZm9yIChjb25zdCBiciBvZiBhbGwuc3BsaWNlKDAsIGFsbC5pbmRleE9mKGJyZWFrcG9pbnQpKSkge1xuICAgICAgaWYgKFxuICAgICAgICBsYXlvdXRTbG90Q29uZmlnW2JyXSAmJlxuICAgICAgICBsYXlvdXRTbG90Q29uZmlnW2JyXS5oYXNPd25Qcm9wZXJ0eShjb25maWdBdHRyaWJ1dGUpXG4gICAgICApIHtcbiAgICAgICAgc2xvdENvbmZpZyA9IDxTbG90Q29uZmlnPmxheW91dFNsb3RDb25maWdbYnJdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2xvdENvbmZpZztcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBvcmRlciB0byBoZWxwIGRldmVsb3BlcnMsIHdlIHByaW50IHNvbWUgZGV0YWlsZWQgbG9nIGluZm9ybWF0aW9uIGluXG4gICAqIGNhc2UgdGhlcmUncyBubyBsYXlvdXQgY29uZmlndXJhdGlvbiBhdmFpbGFibGUgZm9yIHRoZSBnaXZlbiBwYWdlIHRlbXBsYXRlXG4gICAqIG9yIHNlY3Rpb24uIEFkZGl0aW9uYWxseSwgdGhlIHNsb3QgcG9zaXRpb25zIGFyZSBwcmludGVkIGluIHRoZSBjb25zb2xlXG4gICAqIGluIGEgZm9ybWF0IHRoYXQgY2FuIGJlIGNvcGllZCAvIHBhc3RlIHRvIHRoZSBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBsb2dNaXNzaW5nTGF5b3V0Q29uZmlnKHBhZ2U6IFBhZ2UsIHNlY3Rpb24/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIWlzRGV2TW9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5sb2dTbG90c1twYWdlLnRlbXBsYXRlXSkge1xuICAgICAgLy8gdGhlIGluZm8gbG9nIGlzIG5vdCBwcmludGVkIGluIHByb2R1Y3Rpb25cbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tY29uc29sZVxuICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICBgQXZhaWxhYmxlIENNUyBwYWdlIHNsb3RzOiAnJHtPYmplY3Qua2V5cyhwYWdlLnNsb3RzKS5qb2luKGAnLCdgKX0nYFxuICAgICAgKTtcbiAgICAgIHRoaXMubG9nU2xvdHNbcGFnZS50ZW1wbGF0ZV0gPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGNhY2hlS2V5ID0gc2VjdGlvbiB8fCBwYWdlLnRlbXBsYXRlO1xuICAgIGlmICghdGhpcy53YXJuTG9nTWVzc2FnZXNbY2FjaGVLZXldKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBObyBsYXlvdXQgY29uZmlnIGZvdW5kIGZvciAke2NhY2hlS2V5fSwgeW91IGNhbiBjb25maWd1cmUgYSAnTGF5b3V0Q29uZmlnJyB0byBjb250cm9sIHRoZSByZW5kZXJpbmcgb2YgcGFnZSBzbG90cy5gXG4gICAgICApO1xuICAgICAgdGhpcy53YXJuTG9nTWVzc2FnZXNbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==