import { __decorate, __param } from "tslib";
import { Inject, Injectable, isDevMode, Optional, } from '@angular/core';
import { ComponentHandler } from '../handlers/component-handler';
import { resolveApplicable } from '@spartacus/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWhhbmRsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9jb21wb25lbnQvc2VydmljZXMvY29tcG9uZW50LWhhbmRsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUdMLE1BQU0sRUFDTixVQUFVLEVBRVYsU0FBUyxFQUNULFFBQVEsR0FFVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQXVCLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUd6RTs7R0FFRztBQUlILElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBQ2xDLFlBR1ksUUFBNEI7UUFBNUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFHOUIsb0JBQWUsR0FBRyxJQUFJLEdBQUcsRUFBdUIsQ0FBQztJQUZ4RCxDQUFDO0lBSUo7Ozs7T0FJRztJQUNPLE9BQU8sQ0FBQyxnQkFBcUM7UUFDckQsTUFBTSxPQUFPLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUVyRSxJQUFJLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUMvQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUMzQyxPQUFPLENBQUMsSUFBSSxDQUNWLCtDQUErQyxFQUMvQyxnQkFBZ0IsQ0FDakIsQ0FBQzthQUNIO1NBQ0Y7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsV0FBVyxDQUNULGdCQUFxQyxFQUNyQyxnQkFBa0MsRUFDbEMsZUFBMEI7O1FBRTFCLGFBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQywwQ0FBRSxRQUFRLENBQzdDLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmO0lBQ0osQ0FBQztDQUNGLENBQUE7O3dDQTlDSSxRQUFRLFlBQ1IsTUFBTSxTQUFDLGdCQUFnQjs7O0FBSGYsdUJBQXVCO0lBSG5DLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7SUFHRyxXQUFBLFFBQVEsRUFBRSxDQUFBO0lBQ1YsV0FBQSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtHQUhoQix1QkFBdUIsQ0FnRG5DO1NBaERZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBJbmplY3RvcixcbiAgaXNEZXZNb2RlLFxuICBPcHRpb25hbCxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRIYW5kbGVyIH0gZnJvbSAnLi4vaGFuZGxlcnMvY29tcG9uZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50TWFwcGluZywgcmVzb2x2ZUFwcGxpY2FibGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIFJlc3BvbnNpYmxlIGZvciBvYnRhaW5pbmcgY29tcG9uZW50IGhhbmRsZXIgZm9yIHNwZWNpZmllZCBjb21wb25lbnQgbWFwcGluZ1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50SGFuZGxlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQ29tcG9uZW50SGFuZGxlcilcbiAgICBwcm90ZWN0ZWQgaGFuZGxlcnM6IENvbXBvbmVudEhhbmRsZXJbXVxuICApIHt9XG5cbiAgcHJvdGVjdGVkIGludmFsaWRNYXBwaW5ncyA9IG5ldyBTZXQ8Q21zQ29tcG9uZW50TWFwcGluZz4oKTtcblxuICAvKipcbiAgICogR2V0IGJlc3QgbWF0Y2hpbmcgY29tcG9uZW50IGhhbmRsZXJcbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudE1hcHBpbmdcbiAgICovXG4gIHByb3RlY3RlZCByZXNvbHZlKGNvbXBvbmVudE1hcHBpbmc6IENtc0NvbXBvbmVudE1hcHBpbmcpOiBDb21wb25lbnRIYW5kbGVyIHtcbiAgICBjb25zdCBoYW5kbGVyID0gcmVzb2x2ZUFwcGxpY2FibGUodGhpcy5oYW5kbGVycywgW2NvbXBvbmVudE1hcHBpbmddKTtcblxuICAgIGlmIChpc0Rldk1vZGUoKSAmJiAhaGFuZGxlcikge1xuICAgICAgaWYgKCF0aGlzLmludmFsaWRNYXBwaW5ncy5oYXMoY29tcG9uZW50TWFwcGluZykpIHtcbiAgICAgICAgdGhpcy5pbnZhbGlkTWFwcGluZ3MuYWRkKGNvbXBvbmVudE1hcHBpbmcpO1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgXCJDYW4ndCByZXNvbHZlIGhhbmRsZXIgZm9yIGNvbXBvbmVudCBtYXBwaW5nOiBcIixcbiAgICAgICAgICBjb21wb25lbnRNYXBwaW5nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhbmRsZXI7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGxhdW5jaGVyIGZvciBzcGVjaWZpZWQgY29tcG9uZW50IG1hcHBpbmdcbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudE1hcHBpbmdcbiAgICogQHBhcmFtIHZpZXdDb250YWluZXJSZWZcbiAgICogQHBhcmFtIGVsZW1lbnRJbmplY3RvclxuICAgKi9cbiAgZ2V0TGF1bmNoZXIoXG4gICAgY29tcG9uZW50TWFwcGluZzogQ21zQ29tcG9uZW50TWFwcGluZyxcbiAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIGVsZW1lbnRJbmplY3Rvcj86IEluamVjdG9yXG4gICk6IE9ic2VydmFibGU8eyBlbGVtZW50UmVmOiBFbGVtZW50UmVmOyBjb21wb25lbnRSZWY/OiBDb21wb25lbnRSZWY8YW55PiB9PiB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZShjb21wb25lbnRNYXBwaW5nKT8ubGF1bmNoZXIoXG4gICAgICBjb21wb25lbnRNYXBwaW5nLFxuICAgICAgdmlld0NvbnRhaW5lclJlZixcbiAgICAgIGVsZW1lbnRJbmplY3RvclxuICAgICk7XG4gIH1cbn1cbiJdfQ==