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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWhhbmRsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9jb21wb25lbnQvc2VydmljZXMvY29tcG9uZW50LWhhbmRsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsTUFBTSxFQUNOLFVBQVUsRUFFVixTQUFTLEVBRVQsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBdUIsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBR3pFOztHQUVHO0FBSUgsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUdZLFFBQTRCO1FBQTVCLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBRzlCLG9CQUFlLEdBQUcsSUFBSSxHQUFHLEVBQXVCLENBQUM7SUFGeEQsQ0FBQztJQUlKOzs7O09BSUc7SUFDTyxPQUFPLENBQUMsZ0JBQXFDO1FBQ3JELE1BQU0sT0FBTyxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFFckUsSUFBSSxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDM0MsT0FBTyxDQUFDLElBQUksQ0FDViwrQ0FBK0MsRUFDL0MsZ0JBQWdCLENBQ2pCLENBQUM7YUFDSDtTQUNGO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILFdBQVcsQ0FDVCxnQkFBcUMsRUFDckMsZ0JBQWtDLEVBQ2xDLGVBQTBCLEVBQzFCLE1BQXlCOztRQUV6QixhQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsMENBQUUsUUFBUSxDQUM3QyxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixNQUFNLEVBQ047SUFDSixDQUFDOzs7O1lBcERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O3dDQUdJLFFBQVEsWUFDUixNQUFNLFNBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50UmVmLFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBpc0Rldk1vZGUsXG4gIE5nTW9kdWxlUmVmLFxuICBPcHRpb25hbCxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRIYW5kbGVyIH0gZnJvbSAnLi4vaGFuZGxlcnMvY29tcG9uZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50TWFwcGluZywgcmVzb2x2ZUFwcGxpY2FibGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIFJlc3BvbnNpYmxlIGZvciBvYnRhaW5pbmcgY29tcG9uZW50IGhhbmRsZXIgZm9yIHNwZWNpZmllZCBjb21wb25lbnQgbWFwcGluZ1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50SGFuZGxlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQ29tcG9uZW50SGFuZGxlcilcbiAgICBwcm90ZWN0ZWQgaGFuZGxlcnM6IENvbXBvbmVudEhhbmRsZXJbXVxuICApIHt9XG5cbiAgcHJvdGVjdGVkIGludmFsaWRNYXBwaW5ncyA9IG5ldyBTZXQ8Q21zQ29tcG9uZW50TWFwcGluZz4oKTtcblxuICAvKipcbiAgICogR2V0IGJlc3QgbWF0Y2hpbmcgY29tcG9uZW50IGhhbmRsZXJcbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudE1hcHBpbmdcbiAgICovXG4gIHByb3RlY3RlZCByZXNvbHZlKGNvbXBvbmVudE1hcHBpbmc6IENtc0NvbXBvbmVudE1hcHBpbmcpOiBDb21wb25lbnRIYW5kbGVyIHtcbiAgICBjb25zdCBoYW5kbGVyID0gcmVzb2x2ZUFwcGxpY2FibGUodGhpcy5oYW5kbGVycywgW2NvbXBvbmVudE1hcHBpbmddKTtcblxuICAgIGlmIChpc0Rldk1vZGUoKSAmJiAhaGFuZGxlcikge1xuICAgICAgaWYgKCF0aGlzLmludmFsaWRNYXBwaW5ncy5oYXMoY29tcG9uZW50TWFwcGluZykpIHtcbiAgICAgICAgdGhpcy5pbnZhbGlkTWFwcGluZ3MuYWRkKGNvbXBvbmVudE1hcHBpbmcpO1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgXCJDYW4ndCByZXNvbHZlIGhhbmRsZXIgZm9yIGNvbXBvbmVudCBtYXBwaW5nOiBcIixcbiAgICAgICAgICBjb21wb25lbnRNYXBwaW5nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhbmRsZXI7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGxhdW5jaGVyIGZvciBzcGVjaWZpZWQgY29tcG9uZW50IG1hcHBpbmdcbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudE1hcHBpbmdcbiAgICogQHBhcmFtIHZpZXdDb250YWluZXJSZWZcbiAgICogQHBhcmFtIGVsZW1lbnRJbmplY3RvclxuICAgKi9cbiAgZ2V0TGF1bmNoZXIoXG4gICAgY29tcG9uZW50TWFwcGluZzogQ21zQ29tcG9uZW50TWFwcGluZyxcbiAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIGVsZW1lbnRJbmplY3Rvcj86IEluamVjdG9yLFxuICAgIG1vZHVsZT86IE5nTW9kdWxlUmVmPGFueT5cbiAgKTogT2JzZXJ2YWJsZTx7IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7IGNvbXBvbmVudFJlZj86IENvbXBvbmVudFJlZjxhbnk+IH0+IHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlKGNvbXBvbmVudE1hcHBpbmcpPy5sYXVuY2hlcihcbiAgICAgIGNvbXBvbmVudE1hcHBpbmcsXG4gICAgICB2aWV3Q29udGFpbmVyUmVmLFxuICAgICAgZWxlbWVudEluamVjdG9yLFxuICAgICAgbW9kdWxlXG4gICAgKTtcbiAgfVxufVxuIl19