import { Inject, Injectable, isDevMode, Optional, } from '@angular/core';
import { ComponentHandler } from '../handlers/component-handler';
import { resolveApplicable } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "../handlers/component-handler";
/**
 * Responsible for obtaining component handler for specified component mapping
 */
export class ComponentHandlerService {
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
        const handler = resolveApplicable(this.handlers, [componentMapping]);
        if (isDevMode() && !handler) {
            if (!this.invalidMappings.has(componentMapping)) {
                this.invalidMappings.add(componentMapping);
                console.warn("Can't resolve handler for component mapping: ", componentMapping);
            }
        }
        return handler;
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
}
ComponentHandlerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ComponentHandlerService_Factory() { return new ComponentHandlerService(i0.ɵɵinject(i1.ComponentHandler, 8)); }, token: ComponentHandlerService, providedIn: "root" });
ComponentHandlerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ComponentHandlerService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [ComponentHandler,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWhhbmRsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9jb21wb25lbnQvc2VydmljZXMvY29tcG9uZW50LWhhbmRsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsTUFBTSxFQUNOLFVBQVUsRUFFVixTQUFTLEVBQ1QsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBdUIsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBR3pFOztHQUVHO0FBSUgsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUdZLFFBQTRCO1FBQTVCLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBRzlCLG9CQUFlLEdBQUcsSUFBSSxHQUFHLEVBQXVCLENBQUM7SUFGeEQsQ0FBQztJQUlKOzs7O09BSUc7SUFDTyxPQUFPLENBQUMsZ0JBQXFDO1FBQ3JELE1BQU0sT0FBTyxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFFckUsSUFBSSxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDM0MsT0FBTyxDQUFDLElBQUksQ0FDViwrQ0FBK0MsRUFDL0MsZ0JBQWdCLENBQ2pCLENBQUM7YUFDSDtTQUNGO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILFdBQVcsQ0FDVCxnQkFBcUMsRUFDckMsZ0JBQWtDLEVBQ2xDLGVBQTBCOztRQUUxQixhQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsMENBQUUsUUFBUSxDQUM3QyxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZjtJQUNKLENBQUM7Ozs7WUFsREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7d0NBR0ksUUFBUSxZQUNSLE1BQU0sU0FBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0b3IsXG4gIGlzRGV2TW9kZSxcbiAgT3B0aW9uYWwsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50SGFuZGxlciB9IGZyb20gJy4uL2hhbmRsZXJzL2NvbXBvbmVudC1oYW5kbGVyJztcbmltcG9ydCB7IENtc0NvbXBvbmVudE1hcHBpbmcsIHJlc29sdmVBcHBsaWNhYmxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBSZXNwb25zaWJsZSBmb3Igb2J0YWluaW5nIGNvbXBvbmVudCBoYW5kbGVyIGZvciBzcGVjaWZpZWQgY29tcG9uZW50IG1hcHBpbmdcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEhhbmRsZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KENvbXBvbmVudEhhbmRsZXIpXG4gICAgcHJvdGVjdGVkIGhhbmRsZXJzOiBDb21wb25lbnRIYW5kbGVyW11cbiAgKSB7fVxuXG4gIHByb3RlY3RlZCBpbnZhbGlkTWFwcGluZ3MgPSBuZXcgU2V0PENtc0NvbXBvbmVudE1hcHBpbmc+KCk7XG5cbiAgLyoqXG4gICAqIEdldCBiZXN0IG1hdGNoaW5nIGNvbXBvbmVudCBoYW5kbGVyXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnRNYXBwaW5nXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVzb2x2ZShjb21wb25lbnRNYXBwaW5nOiBDbXNDb21wb25lbnRNYXBwaW5nKTogQ29tcG9uZW50SGFuZGxlciB7XG4gICAgY29uc3QgaGFuZGxlciA9IHJlc29sdmVBcHBsaWNhYmxlKHRoaXMuaGFuZGxlcnMsIFtjb21wb25lbnRNYXBwaW5nXSk7XG5cbiAgICBpZiAoaXNEZXZNb2RlKCkgJiYgIWhhbmRsZXIpIHtcbiAgICAgIGlmICghdGhpcy5pbnZhbGlkTWFwcGluZ3MuaGFzKGNvbXBvbmVudE1hcHBpbmcpKSB7XG4gICAgICAgIHRoaXMuaW52YWxpZE1hcHBpbmdzLmFkZChjb21wb25lbnRNYXBwaW5nKTtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIFwiQ2FuJ3QgcmVzb2x2ZSBoYW5kbGVyIGZvciBjb21wb25lbnQgbWFwcGluZzogXCIsXG4gICAgICAgICAgY29tcG9uZW50TWFwcGluZ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBoYW5kbGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBsYXVuY2hlciBmb3Igc3BlY2lmaWVkIGNvbXBvbmVudCBtYXBwaW5nXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnRNYXBwaW5nXG4gICAqIEBwYXJhbSB2aWV3Q29udGFpbmVyUmVmXG4gICAqIEBwYXJhbSBlbGVtZW50SW5qZWN0b3JcbiAgICovXG4gIGdldExhdW5jaGVyKFxuICAgIGNvbXBvbmVudE1hcHBpbmc6IENtc0NvbXBvbmVudE1hcHBpbmcsXG4gICAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBlbGVtZW50SW5qZWN0b3I/OiBJbmplY3RvclxuICApOiBPYnNlcnZhYmxlPHsgZWxlbWVudFJlZjogRWxlbWVudFJlZjsgY29tcG9uZW50UmVmPzogQ29tcG9uZW50UmVmPGFueT4gfT4ge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmUoY29tcG9uZW50TWFwcGluZyk/LmxhdW5jaGVyKFxuICAgICAgY29tcG9uZW50TWFwcGluZyxcbiAgICAgIHZpZXdDb250YWluZXJSZWYsXG4gICAgICBlbGVtZW50SW5qZWN0b3JcbiAgICApO1xuICB9XG59XG4iXX0=