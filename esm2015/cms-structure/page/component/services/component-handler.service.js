import { __decorate, __param } from "tslib";
import { Inject, Injectable, isDevMode, Optional, } from '@angular/core';
import { ComponentHandler } from '../handlers/component-handler';
import * as i0 from "@angular/core";
import * as i1 from "../handlers/component-handler";
/**
 * Responsible for obtaining component handler for specified component mapping
 */
let ComponentHandlerService = class ComponentHandlerService {
    constructor(handlers) {
        this.handlers = handlers;
        this.invalidMappings = new Set();
    }
    /**
     * Get best matching component handler
     *
     * @param componentMapping
     */
    resolve(componentMapping) {
        var _a;
        const matchedHandlers = ((_a = this.handlers) !== null && _a !== void 0 ? _a : []).filter((handler) => handler.hasMatch(componentMapping));
        if (matchedHandlers.length > 1) {
            matchedHandlers.sort((a, b) => (a.getPriority ? a.getPriority() : 0) -
                (b.getPriority ? b.getPriority() : 0));
        }
        if (isDevMode() && matchedHandlers.length === 0) {
            if (!this.invalidMappings.has(componentMapping)) {
                this.invalidMappings.add(componentMapping);
                console.warn("Can't resolve handler for component mapping: ", componentMapping);
            }
        }
        return matchedHandlers[matchedHandlers.length - 1];
    }
    /**
     * Get launcher for specified component mapping
     *
     * @param componentMapping
     * @param viewContainerRef
     * @param elementInjector
     */
    getLauncher(componentMapping, viewContainerRef, elementInjector) {
        var _a;
        return (_a = this.resolve(componentMapping)) === null || _a === void 0 ? void 0 : _a.launcher(componentMapping, viewContainerRef, elementInjector);
    }
};
ComponentHandlerService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [ComponentHandler,] }] }
];
ComponentHandlerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ComponentHandlerService_Factory() { return new ComponentHandlerService(i0.ɵɵinject(i1.ComponentHandler, 8)); }, token: ComponentHandlerService, providedIn: "root" });
ComponentHandlerService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(0, Optional()),
    __param(0, Inject(ComponentHandler))
], ComponentHandlerService);
export { ComponentHandlerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWhhbmRsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9jb21wb25lbnQvc2VydmljZXMvY29tcG9uZW50LWhhbmRsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUdMLE1BQU0sRUFDTixVQUFVLEVBRVYsU0FBUyxFQUNULFFBQVEsR0FFVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBSWpFOztHQUVHO0FBSUgsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFDbEMsWUFHWSxRQUE0QjtRQUE1QixhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUc5QixvQkFBZSxHQUFHLElBQUksR0FBRyxFQUF1QixDQUFDO0lBRnhELENBQUM7SUFJSjs7OztPQUlHO0lBQ08sT0FBTyxDQUFDLGdCQUFxQzs7UUFDckQsTUFBTSxlQUFlLEdBQUcsT0FBQyxJQUFJLENBQUMsUUFBUSxtQ0FBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUMvRCxPQUFPLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQ25DLENBQUM7UUFDRixJQUFJLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzlCLGVBQWUsQ0FBQyxJQUFJLENBQ2xCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQ1AsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUN4QyxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsRUFBRSxJQUFJLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUMvQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUMzQyxPQUFPLENBQUMsSUFBSSxDQUNWLCtDQUErQyxFQUMvQyxnQkFBZ0IsQ0FDakIsQ0FBQzthQUNIO1NBQ0Y7UUFDRCxPQUFPLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxXQUFXLENBQ1QsZ0JBQXFDLEVBQ3JDLGdCQUFrQyxFQUNsQyxlQUEwQjs7UUFFMUIsYUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLDBDQUFFLFFBQVEsQ0FDN0MsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixlQUFlLEVBQ2Y7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7d0NBckRJLFFBQVEsWUFDUixNQUFNLFNBQUMsZ0JBQWdCOzs7QUFIZix1QkFBdUI7SUFIbkMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztJQUdHLFdBQUEsUUFBUSxFQUFFLENBQUE7SUFDVixXQUFBLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0dBSGhCLHVCQUF1QixDQXVEbkM7U0F2RFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50UmVmLFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBpc0Rldk1vZGUsXG4gIE9wdGlvbmFsLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEhhbmRsZXIgfSBmcm9tICcuLi9oYW5kbGVycy9jb21wb25lbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRNYXBwaW5nIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBSZXNwb25zaWJsZSBmb3Igb2J0YWluaW5nIGNvbXBvbmVudCBoYW5kbGVyIGZvciBzcGVjaWZpZWQgY29tcG9uZW50IG1hcHBpbmdcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEhhbmRsZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KENvbXBvbmVudEhhbmRsZXIpXG4gICAgcHJvdGVjdGVkIGhhbmRsZXJzOiBDb21wb25lbnRIYW5kbGVyW11cbiAgKSB7fVxuXG4gIHByb3RlY3RlZCBpbnZhbGlkTWFwcGluZ3MgPSBuZXcgU2V0PENtc0NvbXBvbmVudE1hcHBpbmc+KCk7XG5cbiAgLyoqXG4gICAqIEdldCBiZXN0IG1hdGNoaW5nIGNvbXBvbmVudCBoYW5kbGVyXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnRNYXBwaW5nXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVzb2x2ZShjb21wb25lbnRNYXBwaW5nOiBDbXNDb21wb25lbnRNYXBwaW5nKTogQ29tcG9uZW50SGFuZGxlciB7XG4gICAgY29uc3QgbWF0Y2hlZEhhbmRsZXJzID0gKHRoaXMuaGFuZGxlcnMgPz8gW10pLmZpbHRlcigoaGFuZGxlcikgPT5cbiAgICAgIGhhbmRsZXIuaGFzTWF0Y2goY29tcG9uZW50TWFwcGluZylcbiAgICApO1xuICAgIGlmIChtYXRjaGVkSGFuZGxlcnMubGVuZ3RoID4gMSkge1xuICAgICAgbWF0Y2hlZEhhbmRsZXJzLnNvcnQoXG4gICAgICAgIChhLCBiKSA9PlxuICAgICAgICAgIChhLmdldFByaW9yaXR5ID8gYS5nZXRQcmlvcml0eSgpIDogMCkgLVxuICAgICAgICAgIChiLmdldFByaW9yaXR5ID8gYi5nZXRQcmlvcml0eSgpIDogMClcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpc0Rldk1vZGUoKSAmJiBtYXRjaGVkSGFuZGxlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAoIXRoaXMuaW52YWxpZE1hcHBpbmdzLmhhcyhjb21wb25lbnRNYXBwaW5nKSkge1xuICAgICAgICB0aGlzLmludmFsaWRNYXBwaW5ncy5hZGQoY29tcG9uZW50TWFwcGluZyk7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBcIkNhbid0IHJlc29sdmUgaGFuZGxlciBmb3IgY29tcG9uZW50IG1hcHBpbmc6IFwiLFxuICAgICAgICAgIGNvbXBvbmVudE1hcHBpbmdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoZWRIYW5kbGVyc1ttYXRjaGVkSGFuZGxlcnMubGVuZ3RoIC0gMV07XG4gIH1cblxuICAvKipcbiAgICogR2V0IGxhdW5jaGVyIGZvciBzcGVjaWZpZWQgY29tcG9uZW50IG1hcHBpbmdcbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudE1hcHBpbmdcbiAgICogQHBhcmFtIHZpZXdDb250YWluZXJSZWZcbiAgICogQHBhcmFtIGVsZW1lbnRJbmplY3RvclxuICAgKi9cbiAgZ2V0TGF1bmNoZXIoXG4gICAgY29tcG9uZW50TWFwcGluZzogQ21zQ29tcG9uZW50TWFwcGluZyxcbiAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIGVsZW1lbnRJbmplY3Rvcj86IEluamVjdG9yXG4gICk6IE9ic2VydmFibGU8eyBlbGVtZW50UmVmOiBFbGVtZW50UmVmOyBjb21wb25lbnRSZWY/OiBDb21wb25lbnRSZWY8YW55PiB9PiB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZShjb21wb25lbnRNYXBwaW5nKT8ubGF1bmNoZXIoXG4gICAgICBjb21wb25lbnRNYXBwaW5nLFxuICAgICAgdmlld0NvbnRhaW5lclJlZixcbiAgICAgIGVsZW1lbnRJbmplY3RvclxuICAgICk7XG4gIH1cbn1cbiJdfQ==