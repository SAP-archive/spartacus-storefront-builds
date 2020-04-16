import { __decorate } from "tslib";
import { ComponentFactoryResolver, Injectable, } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Default component handler used for dynamically launching cms components implemented
 * as native Angular components.
 */
var DefaultComponentHandler = /** @class */ (function () {
    function DefaultComponentHandler() {
    }
    DefaultComponentHandler.prototype.hasMatch = function (componentMapping) {
        return (typeof componentMapping.component === 'function' &&
            componentMapping.component.prototype);
    };
    DefaultComponentHandler.prototype.getPriority = function () {
        return -50 /* FALLBACK */;
    };
    DefaultComponentHandler.prototype.launcher = function (componentMapping, viewContainerRef, elementInjector) {
        var _this = this;
        return new Observable(function (subscriber) {
            var componentRef;
            var injector = elementInjector !== null && elementInjector !== void 0 ? elementInjector : viewContainerRef.injector;
            var dispose = function () {
                if (componentRef) {
                    componentRef.destroy();
                }
            };
            var factory = _this.getComponentFactory(injector, componentMapping.component);
            if (factory) {
                componentRef = viewContainerRef.createComponent(factory, undefined, injector);
                subscriber.next({ elementRef: componentRef.location, componentRef: componentRef });
            }
            return dispose;
        });
    };
    DefaultComponentHandler.prototype.getComponentFactory = function (injector, component) {
        if (!component) {
            return null;
        }
        var factory = injector
            .get(ComponentFactoryResolver)
            .resolveComponentFactory(component);
        return factory;
    };
    DefaultComponentHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function DefaultComponentHandler_Factory() { return new DefaultComponentHandler(); }, token: DefaultComponentHandler, providedIn: "root" });
    DefaultComponentHandler = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], DefaultComponentHandler);
    return DefaultComponentHandler;
}());
export { DefaultComponentHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1jb21wb25lbnQuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9jb21wb25lbnQvaGFuZGxlcnMvZGVmYXVsdC1jb21wb25lbnQuaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHdCQUF3QixFQUd4QixVQUFVLEdBR1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHbEM7OztHQUdHO0FBSUg7SUFBQTtLQTJEQztJQTFEQywwQ0FBUSxHQUFSLFVBQVMsZ0JBQXFDO1FBQzVDLE9BQU8sQ0FDTCxPQUFPLGdCQUFnQixDQUFDLFNBQVMsS0FBSyxVQUFVO1lBQ2hELGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQ3JDLENBQUM7SUFDSixDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUNFLDBCQUF5QjtJQUMzQixDQUFDO0lBRUQsMENBQVEsR0FBUixVQUNFLGdCQUFxQyxFQUNyQyxnQkFBa0MsRUFDbEMsZUFBMEI7UUFINUIsaUJBbUNDO1FBOUJDLE9BQU8sSUFBSSxVQUFVLENBR2xCLFVBQUMsVUFBVTtZQUNaLElBQUksWUFBK0IsQ0FBQztZQUVwQyxJQUFNLFFBQVEsR0FBRyxlQUFlLGFBQWYsZUFBZSxjQUFmLGVBQWUsR0FBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7WUFFOUQsSUFBTSxPQUFPLEdBQUc7Z0JBQ2QsSUFBSSxZQUFZLEVBQUU7b0JBQ2hCLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDeEI7WUFDSCxDQUFDLENBQUM7WUFFRixJQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQ3RDLFFBQVEsRUFDUixnQkFBZ0IsQ0FBQyxTQUFTLENBQzNCLENBQUM7WUFFRixJQUFJLE9BQU8sRUFBRTtnQkFDWCxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUM3QyxPQUFPLEVBQ1AsU0FBUyxFQUNULFFBQVEsQ0FDVCxDQUFDO2dCQUNGLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxZQUFZLGNBQUEsRUFBRSxDQUFDLENBQUM7YUFDdEU7WUFFRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFUyxxREFBbUIsR0FBN0IsVUFBOEIsUUFBa0IsRUFBRSxTQUFjO1FBQzlELElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBTSxPQUFPLEdBQUcsUUFBUTthQUNyQixHQUFHLENBQUMsd0JBQXdCLENBQUM7YUFDN0IsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdEMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7SUExRFUsdUJBQXVCO1FBSG5DLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyx1QkFBdUIsQ0EyRG5DO2tDQTlFRDtDQThFQyxBQTNERCxJQTJEQztTQTNEWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0b3IsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50SGFuZGxlciB9IGZyb20gJy4vY29tcG9uZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50TWFwcGluZywgUHJpb3JpdHkgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG4vKipcbiAqIERlZmF1bHQgY29tcG9uZW50IGhhbmRsZXIgdXNlZCBmb3IgZHluYW1pY2FsbHkgbGF1bmNoaW5nIGNtcyBjb21wb25lbnRzIGltcGxlbWVudGVkXG4gKiBhcyBuYXRpdmUgQW5ndWxhciBjb21wb25lbnRzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdENvbXBvbmVudEhhbmRsZXIgaW1wbGVtZW50cyBDb21wb25lbnRIYW5kbGVyIHtcbiAgaGFzTWF0Y2goY29tcG9uZW50TWFwcGluZzogQ21zQ29tcG9uZW50TWFwcGluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0eXBlb2YgY29tcG9uZW50TWFwcGluZy5jb21wb25lbnQgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIGNvbXBvbmVudE1hcHBpbmcuY29tcG9uZW50LnByb3RvdHlwZVxuICAgICk7XG4gIH1cblxuICBnZXRQcmlvcml0eSgpOiBQcmlvcml0eSB7XG4gICAgcmV0dXJuIFByaW9yaXR5LkZBTExCQUNLO1xuICB9XG5cbiAgbGF1bmNoZXIoXG4gICAgY29tcG9uZW50TWFwcGluZzogQ21zQ29tcG9uZW50TWFwcGluZyxcbiAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIGVsZW1lbnRJbmplY3Rvcj86IEluamVjdG9yXG4gICk6IE9ic2VydmFibGU8eyBlbGVtZW50UmVmOiBFbGVtZW50UmVmOyBjb21wb25lbnRSZWY/OiBDb21wb25lbnRSZWY8YW55PiB9PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPHtcbiAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgICBjb21wb25lbnRSZWY/OiBDb21wb25lbnRSZWY8YW55PjtcbiAgICB9Pigoc3Vic2NyaWJlcikgPT4ge1xuICAgICAgbGV0IGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT47XG5cbiAgICAgIGNvbnN0IGluamVjdG9yID0gZWxlbWVudEluamVjdG9yID8/IHZpZXdDb250YWluZXJSZWYuaW5qZWN0b3I7XG5cbiAgICAgIGNvbnN0IGRpc3Bvc2UgPSAoKSA9PiB7XG4gICAgICAgIGlmIChjb21wb25lbnRSZWYpIHtcbiAgICAgICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5nZXRDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICBpbmplY3RvcixcbiAgICAgICAgY29tcG9uZW50TWFwcGluZy5jb21wb25lbnRcbiAgICAgICk7XG5cbiAgICAgIGlmIChmYWN0b3J5KSB7XG4gICAgICAgIGNvbXBvbmVudFJlZiA9IHZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICAgIGZhY3RvcnksXG4gICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgIGluamVjdG9yXG4gICAgICAgICk7XG4gICAgICAgIHN1YnNjcmliZXIubmV4dCh7IGVsZW1lbnRSZWY6IGNvbXBvbmVudFJlZi5sb2NhdGlvbiwgY29tcG9uZW50UmVmIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGlzcG9zZTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDb21wb25lbnRGYWN0b3J5KGluamVjdG9yOiBJbmplY3RvciwgY29tcG9uZW50OiBhbnkpOiBhbnkge1xuICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgZmFjdG9yeSA9IGluamVjdG9yXG4gICAgICAuZ2V0KENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcilcbiAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuXG4gICAgcmV0dXJuIGZhY3Rvcnk7XG4gIH1cbn1cbiJdfQ==