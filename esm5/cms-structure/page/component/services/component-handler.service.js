import { __decorate, __param } from "tslib";
import { Inject, Injectable, isDevMode, Optional, } from '@angular/core';
import { ComponentHandler } from '../handlers/component-handler';
import { resolveHandler } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "../handlers/component-handler";
/**
 * Responsible for obtaining component handler for specified component mapping
 */
var ComponentHandlerService = /** @class */ (function () {
    function ComponentHandlerService(handlers) {
        this.handlers = handlers;
        this.invalidMappings = new Set();
    }
    /**
     * Get best matching component handler
     *
     * @param componentMapping
     */
    ComponentHandlerService.prototype.resolve = function (componentMapping) {
        var handler = resolveHandler(this.handlers, [componentMapping]);
        if (isDevMode() && !handler) {
            if (!this.invalidMappings.has(componentMapping)) {
                this.invalidMappings.add(componentMapping);
                console.warn("Can't resolve handler for component mapping: ", componentMapping);
            }
        }
        return handler;
    };
    /**
     * Get launcher for specified component mapping
     *
     * @param componentMapping
     * @param viewContainerRef
     * @param elementInjector
     */
    ComponentHandlerService.prototype.getLauncher = function (componentMapping, viewContainerRef, elementInjector) {
        var _a;
        return (_a = this.resolve(componentMapping)) === null || _a === void 0 ? void 0 : _a.launcher(componentMapping, viewContainerRef, elementInjector);
    };
    ComponentHandlerService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [ComponentHandler,] }] }
    ]; };
    ComponentHandlerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ComponentHandlerService_Factory() { return new ComponentHandlerService(i0.ɵɵinject(i1.ComponentHandler, 8)); }, token: ComponentHandlerService, providedIn: "root" });
    ComponentHandlerService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(0, Optional()),
        __param(0, Inject(ComponentHandler))
    ], ComponentHandlerService);
    return ComponentHandlerService;
}());
export { ComponentHandlerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWhhbmRsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9jb21wb25lbnQvc2VydmljZXMvY29tcG9uZW50LWhhbmRsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUdMLE1BQU0sRUFDTixVQUFVLEVBRVYsU0FBUyxFQUNULFFBQVEsR0FFVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQXVCLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFHdEU7O0dBRUc7QUFJSDtJQUNFLGlDQUdZLFFBQTRCO1FBQTVCLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBRzlCLG9CQUFlLEdBQUcsSUFBSSxHQUFHLEVBQXVCLENBQUM7SUFGeEQsQ0FBQztJQUlKOzs7O09BSUc7SUFDTyx5Q0FBTyxHQUFqQixVQUFrQixnQkFBcUM7UUFDckQsSUFBTSxPQUFPLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFFbEUsSUFBSSxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDM0MsT0FBTyxDQUFDLElBQUksQ0FDViwrQ0FBK0MsRUFDL0MsZ0JBQWdCLENBQ2pCLENBQUM7YUFDSDtTQUNGO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILDZDQUFXLEdBQVgsVUFDRSxnQkFBcUMsRUFDckMsZ0JBQWtDLEVBQ2xDLGVBQTBCOztRQUUxQixhQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsMENBQUUsUUFBUSxDQUM3QyxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZjtJQUNKLENBQUM7OzRDQTdDRSxRQUFRLFlBQ1IsTUFBTSxTQUFDLGdCQUFnQjs7O0lBSGYsdUJBQXVCO1FBSG5DLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7UUFHRyxXQUFBLFFBQVEsRUFBRSxDQUFBO1FBQ1YsV0FBQSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtPQUhoQix1QkFBdUIsQ0FnRG5DO2tDQXBFRDtDQW9FQyxBQWhERCxJQWdEQztTQWhEWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0b3IsXG4gIGlzRGV2TW9kZSxcbiAgT3B0aW9uYWwsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50SGFuZGxlciB9IGZyb20gJy4uL2hhbmRsZXJzL2NvbXBvbmVudC1oYW5kbGVyJztcbmltcG9ydCB7IENtc0NvbXBvbmVudE1hcHBpbmcsIHJlc29sdmVIYW5kbGVyIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBSZXNwb25zaWJsZSBmb3Igb2J0YWluaW5nIGNvbXBvbmVudCBoYW5kbGVyIGZvciBzcGVjaWZpZWQgY29tcG9uZW50IG1hcHBpbmdcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEhhbmRsZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KENvbXBvbmVudEhhbmRsZXIpXG4gICAgcHJvdGVjdGVkIGhhbmRsZXJzOiBDb21wb25lbnRIYW5kbGVyW11cbiAgKSB7fVxuXG4gIHByb3RlY3RlZCBpbnZhbGlkTWFwcGluZ3MgPSBuZXcgU2V0PENtc0NvbXBvbmVudE1hcHBpbmc+KCk7XG5cbiAgLyoqXG4gICAqIEdldCBiZXN0IG1hdGNoaW5nIGNvbXBvbmVudCBoYW5kbGVyXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnRNYXBwaW5nXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVzb2x2ZShjb21wb25lbnRNYXBwaW5nOiBDbXNDb21wb25lbnRNYXBwaW5nKTogQ29tcG9uZW50SGFuZGxlciB7XG4gICAgY29uc3QgaGFuZGxlciA9IHJlc29sdmVIYW5kbGVyKHRoaXMuaGFuZGxlcnMsIFtjb21wb25lbnRNYXBwaW5nXSk7XG5cbiAgICBpZiAoaXNEZXZNb2RlKCkgJiYgIWhhbmRsZXIpIHtcbiAgICAgIGlmICghdGhpcy5pbnZhbGlkTWFwcGluZ3MuaGFzKGNvbXBvbmVudE1hcHBpbmcpKSB7XG4gICAgICAgIHRoaXMuaW52YWxpZE1hcHBpbmdzLmFkZChjb21wb25lbnRNYXBwaW5nKTtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIFwiQ2FuJ3QgcmVzb2x2ZSBoYW5kbGVyIGZvciBjb21wb25lbnQgbWFwcGluZzogXCIsXG4gICAgICAgICAgY29tcG9uZW50TWFwcGluZ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBoYW5kbGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBsYXVuY2hlciBmb3Igc3BlY2lmaWVkIGNvbXBvbmVudCBtYXBwaW5nXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnRNYXBwaW5nXG4gICAqIEBwYXJhbSB2aWV3Q29udGFpbmVyUmVmXG4gICAqIEBwYXJhbSBlbGVtZW50SW5qZWN0b3JcbiAgICovXG4gIGdldExhdW5jaGVyKFxuICAgIGNvbXBvbmVudE1hcHBpbmc6IENtc0NvbXBvbmVudE1hcHBpbmcsXG4gICAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBlbGVtZW50SW5qZWN0b3I/OiBJbmplY3RvclxuICApOiBPYnNlcnZhYmxlPHsgZWxlbWVudFJlZjogRWxlbWVudFJlZjsgY29tcG9uZW50UmVmPzogQ29tcG9uZW50UmVmPGFueT4gfT4ge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmUoY29tcG9uZW50TWFwcGluZyk/LmxhdW5jaGVyKFxuICAgICAgY29tcG9uZW50TWFwcGluZyxcbiAgICAgIHZpZXdDb250YWluZXJSZWYsXG4gICAgICBlbGVtZW50SW5qZWN0b3JcbiAgICApO1xuICB9XG59XG4iXX0=