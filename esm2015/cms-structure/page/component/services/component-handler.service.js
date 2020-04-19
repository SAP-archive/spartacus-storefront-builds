import { __decorate, __param } from "tslib";
import { Inject, Injectable, isDevMode, Optional, } from '@angular/core';
import { ComponentHandler } from '../handlers/component-handler';
import { resolveHandler } from '@spartacus/core';
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
        const handler = resolveHandler(this.handlers, [componentMapping]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWhhbmRsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9jb21wb25lbnQvc2VydmljZXMvY29tcG9uZW50LWhhbmRsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUdMLE1BQU0sRUFDTixVQUFVLEVBRVYsU0FBUyxFQUNULFFBQVEsR0FFVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQXVCLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFHdEU7O0dBRUc7QUFJSCxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQUNsQyxZQUdZLFFBQTRCO1FBQTVCLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBRzlCLG9CQUFlLEdBQUcsSUFBSSxHQUFHLEVBQXVCLENBQUM7SUFGeEQsQ0FBQztJQUlKOzs7O09BSUc7SUFDTyxPQUFPLENBQUMsZ0JBQXFDO1FBQ3JELE1BQU0sT0FBTyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBRWxFLElBQUksU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzNDLE9BQU8sQ0FBQyxJQUFJLENBQ1YsK0NBQStDLEVBQy9DLGdCQUFnQixDQUNqQixDQUFDO2FBQ0g7U0FDRjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxXQUFXLENBQ1QsZ0JBQXFDLEVBQ3JDLGdCQUFrQyxFQUNsQyxlQUEwQjs7UUFFMUIsYUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLDBDQUFFLFFBQVEsQ0FDN0MsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixlQUFlLEVBQ2Y7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7d0NBOUNJLFFBQVEsWUFDUixNQUFNLFNBQUMsZ0JBQWdCOzs7QUFIZix1QkFBdUI7SUFIbkMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztJQUdHLFdBQUEsUUFBUSxFQUFFLENBQUE7SUFDVixXQUFBLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0dBSGhCLHVCQUF1QixDQWdEbkM7U0FoRFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50UmVmLFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBpc0Rldk1vZGUsXG4gIE9wdGlvbmFsLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEhhbmRsZXIgfSBmcm9tICcuLi9oYW5kbGVycy9jb21wb25lbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRNYXBwaW5nLCByZXNvbHZlSGFuZGxlciB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogUmVzcG9uc2libGUgZm9yIG9idGFpbmluZyBjb21wb25lbnQgaGFuZGxlciBmb3Igc3BlY2lmaWVkIGNvbXBvbmVudCBtYXBwaW5nXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRIYW5kbGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChDb21wb25lbnRIYW5kbGVyKVxuICAgIHByb3RlY3RlZCBoYW5kbGVyczogQ29tcG9uZW50SGFuZGxlcltdXG4gICkge31cblxuICBwcm90ZWN0ZWQgaW52YWxpZE1hcHBpbmdzID0gbmV3IFNldDxDbXNDb21wb25lbnRNYXBwaW5nPigpO1xuXG4gIC8qKlxuICAgKiBHZXQgYmVzdCBtYXRjaGluZyBjb21wb25lbnQgaGFuZGxlclxuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50TWFwcGluZ1xuICAgKi9cbiAgcHJvdGVjdGVkIHJlc29sdmUoY29tcG9uZW50TWFwcGluZzogQ21zQ29tcG9uZW50TWFwcGluZyk6IENvbXBvbmVudEhhbmRsZXIge1xuICAgIGNvbnN0IGhhbmRsZXIgPSByZXNvbHZlSGFuZGxlcih0aGlzLmhhbmRsZXJzLCBbY29tcG9uZW50TWFwcGluZ10pO1xuXG4gICAgaWYgKGlzRGV2TW9kZSgpICYmICFoYW5kbGVyKSB7XG4gICAgICBpZiAoIXRoaXMuaW52YWxpZE1hcHBpbmdzLmhhcyhjb21wb25lbnRNYXBwaW5nKSkge1xuICAgICAgICB0aGlzLmludmFsaWRNYXBwaW5ncy5hZGQoY29tcG9uZW50TWFwcGluZyk7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBcIkNhbid0IHJlc29sdmUgaGFuZGxlciBmb3IgY29tcG9uZW50IG1hcHBpbmc6IFwiLFxuICAgICAgICAgIGNvbXBvbmVudE1hcHBpbmdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaGFuZGxlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbGF1bmNoZXIgZm9yIHNwZWNpZmllZCBjb21wb25lbnQgbWFwcGluZ1xuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50TWFwcGluZ1xuICAgKiBAcGFyYW0gdmlld0NvbnRhaW5lclJlZlxuICAgKiBAcGFyYW0gZWxlbWVudEluamVjdG9yXG4gICAqL1xuICBnZXRMYXVuY2hlcihcbiAgICBjb21wb25lbnRNYXBwaW5nOiBDbXNDb21wb25lbnRNYXBwaW5nLFxuICAgIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgZWxlbWVudEluamVjdG9yPzogSW5qZWN0b3JcbiAgKTogT2JzZXJ2YWJsZTx7IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7IGNvbXBvbmVudFJlZj86IENvbXBvbmVudFJlZjxhbnk+IH0+IHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlKGNvbXBvbmVudE1hcHBpbmcpPy5sYXVuY2hlcihcbiAgICAgIGNvbXBvbmVudE1hcHBpbmcsXG4gICAgICB2aWV3Q29udGFpbmVyUmVmLFxuICAgICAgZWxlbWVudEluamVjdG9yXG4gICAgKTtcbiAgfVxufVxuIl19