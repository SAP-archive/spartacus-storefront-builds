import { Inject, Injectable, isDevMode, Optional, } from '@angular/core';
import { resolveApplicable } from '@spartacus/core';
import { ComponentHandler } from '../handlers/component-handler';
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
    getLauncher(componentMapping, viewContainerRef, elementInjector, module) {
        var _a;
        return (_a = this.resolve(componentMapping)) === null || _a === void 0 ? void 0 : _a.launcher(componentMapping, viewContainerRef, elementInjector, module);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWhhbmRsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9jb21wb25lbnQvc2VydmljZXMvY29tcG9uZW50LWhhbmRsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsTUFBTSxFQUNOLFVBQVUsRUFFVixTQUFTLEVBRVQsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBdUIsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBRWpFOztHQUVHO0FBSUgsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUdZLFFBQTRCO1FBQTVCLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBRzlCLG9CQUFlLEdBQUcsSUFBSSxHQUFHLEVBQTRCLENBQUM7SUFGN0QsQ0FBQztJQUlKOzs7O09BSUc7SUFDTyxPQUFPLENBQUMsZ0JBQXFDO1FBQ3JELE1BQU0sT0FBTyxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFFckUsSUFBSSxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDM0MsT0FBTyxDQUFDLElBQUksQ0FDViwrQ0FBK0MsRUFDL0MsZ0JBQWdCLENBQ2pCLENBQUM7YUFDSDtTQUNGO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILFdBQVcsQ0FDVCxnQkFBcUMsRUFDckMsZ0JBQWtDLEVBQ2xDLGVBQTBCLEVBQzFCLE1BQXlCOztRQUV6QixhQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsMENBQUUsUUFBUSxDQUM3QyxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixNQUFNLEVBQ047SUFDSixDQUFDOzs7O1lBcERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O3dDQUdJLFFBQVEsWUFDUixNQUFNLFNBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50UmVmLFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBpc0Rldk1vZGUsXG4gIE5nTW9kdWxlUmVmLFxuICBPcHRpb25hbCxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRNYXBwaW5nLCByZXNvbHZlQXBwbGljYWJsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21wb25lbnRIYW5kbGVyIH0gZnJvbSAnLi4vaGFuZGxlcnMvY29tcG9uZW50LWhhbmRsZXInO1xuXG4vKipcbiAqIFJlc3BvbnNpYmxlIGZvciBvYnRhaW5pbmcgY29tcG9uZW50IGhhbmRsZXIgZm9yIHNwZWNpZmllZCBjb21wb25lbnQgbWFwcGluZ1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50SGFuZGxlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQ29tcG9uZW50SGFuZGxlcilcbiAgICBwcm90ZWN0ZWQgaGFuZGxlcnM6IENvbXBvbmVudEhhbmRsZXJbXVxuICApIHt9XG5cbiAgcHJvdGVjdGVkIGludmFsaWRNYXBwaW5ncyA9IG5ldyBTZXQ8Q21zQ29tcG9uZW50TWFwcGluZzxhbnk+PigpO1xuXG4gIC8qKlxuICAgKiBHZXQgYmVzdCBtYXRjaGluZyBjb21wb25lbnQgaGFuZGxlclxuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50TWFwcGluZ1xuICAgKi9cbiAgcHJvdGVjdGVkIHJlc29sdmUoY29tcG9uZW50TWFwcGluZzogQ21zQ29tcG9uZW50TWFwcGluZyk6IENvbXBvbmVudEhhbmRsZXIge1xuICAgIGNvbnN0IGhhbmRsZXIgPSByZXNvbHZlQXBwbGljYWJsZSh0aGlzLmhhbmRsZXJzLCBbY29tcG9uZW50TWFwcGluZ10pO1xuXG4gICAgaWYgKGlzRGV2TW9kZSgpICYmICFoYW5kbGVyKSB7XG4gICAgICBpZiAoIXRoaXMuaW52YWxpZE1hcHBpbmdzLmhhcyhjb21wb25lbnRNYXBwaW5nKSkge1xuICAgICAgICB0aGlzLmludmFsaWRNYXBwaW5ncy5hZGQoY29tcG9uZW50TWFwcGluZyk7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBcIkNhbid0IHJlc29sdmUgaGFuZGxlciBmb3IgY29tcG9uZW50IG1hcHBpbmc6IFwiLFxuICAgICAgICAgIGNvbXBvbmVudE1hcHBpbmdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaGFuZGxlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbGF1bmNoZXIgZm9yIHNwZWNpZmllZCBjb21wb25lbnQgbWFwcGluZ1xuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50TWFwcGluZ1xuICAgKiBAcGFyYW0gdmlld0NvbnRhaW5lclJlZlxuICAgKiBAcGFyYW0gZWxlbWVudEluamVjdG9yXG4gICAqL1xuICBnZXRMYXVuY2hlcihcbiAgICBjb21wb25lbnRNYXBwaW5nOiBDbXNDb21wb25lbnRNYXBwaW5nLFxuICAgIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgZWxlbWVudEluamVjdG9yPzogSW5qZWN0b3IsXG4gICAgbW9kdWxlPzogTmdNb2R1bGVSZWY8YW55PlxuICApOiBPYnNlcnZhYmxlPHsgZWxlbWVudFJlZjogRWxlbWVudFJlZjsgY29tcG9uZW50UmVmPzogQ29tcG9uZW50UmVmPGFueT4gfT4ge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmUoY29tcG9uZW50TWFwcGluZyk/LmxhdW5jaGVyKFxuICAgICAgY29tcG9uZW50TWFwcGluZyxcbiAgICAgIHZpZXdDb250YWluZXJSZWYsXG4gICAgICBlbGVtZW50SW5qZWN0b3IsXG4gICAgICBtb2R1bGVcbiAgICApO1xuICB9XG59XG4iXX0=