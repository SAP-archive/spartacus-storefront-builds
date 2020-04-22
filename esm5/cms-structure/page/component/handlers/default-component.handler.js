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
        return typeof componentMapping.component === 'function';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1jb21wb25lbnQuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9jb21wb25lbnQvaGFuZGxlcnMvZGVmYXVsdC1jb21wb25lbnQuaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHdCQUF3QixFQUd4QixVQUFVLEdBR1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHbEM7OztHQUdHO0FBSUg7SUFBQTtLQXdEQztJQXZEQywwQ0FBUSxHQUFSLFVBQVMsZ0JBQXFDO1FBQzVDLE9BQU8sT0FBTyxnQkFBZ0IsQ0FBQyxTQUFTLEtBQUssVUFBVSxDQUFDO0lBQzFELENBQUM7SUFFRCw2Q0FBVyxHQUFYO1FBQ0UsMEJBQXlCO0lBQzNCLENBQUM7SUFFRCwwQ0FBUSxHQUFSLFVBQ0UsZ0JBQXFDLEVBQ3JDLGdCQUFrQyxFQUNsQyxlQUEwQjtRQUg1QixpQkFtQ0M7UUE5QkMsT0FBTyxJQUFJLFVBQVUsQ0FHbEIsVUFBQyxVQUFVO1lBQ1osSUFBSSxZQUErQixDQUFDO1lBRXBDLElBQU0sUUFBUSxHQUFHLGVBQWUsYUFBZixlQUFlLGNBQWYsZUFBZSxHQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztZQUU5RCxJQUFNLE9BQU8sR0FBRztnQkFDZCxJQUFJLFlBQVksRUFBRTtvQkFDaEIsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUN4QjtZQUNILENBQUMsQ0FBQztZQUVGLElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FDdEMsUUFBUSxFQUNSLGdCQUFnQixDQUFDLFNBQVMsQ0FDM0IsQ0FBQztZQUVGLElBQUksT0FBTyxFQUFFO2dCQUNYLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQzdDLE9BQU8sRUFDUCxTQUFTLEVBQ1QsUUFBUSxDQUNULENBQUM7Z0JBQ0YsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUMsUUFBUSxFQUFFLFlBQVksY0FBQSxFQUFFLENBQUMsQ0FBQzthQUN0RTtZQUVELE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVTLHFEQUFtQixHQUE3QixVQUE4QixRQUFrQixFQUFFLFNBQWM7UUFDOUQsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFNLE9BQU8sR0FBRyxRQUFRO2FBQ3JCLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQzthQUM3Qix1QkFBdUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV0QyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztJQXZEVSx1QkFBdUI7UUFIbkMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLHVCQUF1QixDQXdEbkM7a0NBM0VEO0NBMkVDLEFBeERELElBd0RDO1NBeERZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBFbGVtZW50UmVmLFxuICBJbmplY3RhYmxlLFxuICBJbmplY3RvcixcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRIYW5kbGVyIH0gZnJvbSAnLi9jb21wb25lbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRNYXBwaW5nLCBQcmlvcml0eSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbi8qKlxuICogRGVmYXVsdCBjb21wb25lbnQgaGFuZGxlciB1c2VkIGZvciBkeW5hbWljYWxseSBsYXVuY2hpbmcgY21zIGNvbXBvbmVudHMgaW1wbGVtZW50ZWRcbiAqIGFzIG5hdGl2ZSBBbmd1bGFyIGNvbXBvbmVudHMuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0Q29tcG9uZW50SGFuZGxlciBpbXBsZW1lbnRzIENvbXBvbmVudEhhbmRsZXIge1xuICBoYXNNYXRjaChjb21wb25lbnRNYXBwaW5nOiBDbXNDb21wb25lbnRNYXBwaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiBjb21wb25lbnRNYXBwaW5nLmNvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGdldFByaW9yaXR5KCk6IFByaW9yaXR5IHtcbiAgICByZXR1cm4gUHJpb3JpdHkuRkFMTEJBQ0s7XG4gIH1cblxuICBsYXVuY2hlcihcbiAgICBjb21wb25lbnRNYXBwaW5nOiBDbXNDb21wb25lbnRNYXBwaW5nLFxuICAgIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgZWxlbWVudEluamVjdG9yPzogSW5qZWN0b3JcbiAgKTogT2JzZXJ2YWJsZTx7IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7IGNvbXBvbmVudFJlZj86IENvbXBvbmVudFJlZjxhbnk+IH0+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8e1xuICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICAgIGNvbXBvbmVudFJlZj86IENvbXBvbmVudFJlZjxhbnk+O1xuICAgIH0+KChzdWJzY3JpYmVyKSA9PiB7XG4gICAgICBsZXQgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PjtcblxuICAgICAgY29uc3QgaW5qZWN0b3IgPSBlbGVtZW50SW5qZWN0b3IgPz8gdmlld0NvbnRhaW5lclJlZi5pbmplY3RvcjtcblxuICAgICAgY29uc3QgZGlzcG9zZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvbXBvbmVudFJlZikge1xuICAgICAgICAgIGNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmdldENvbXBvbmVudEZhY3RvcnkoXG4gICAgICAgIGluamVjdG9yLFxuICAgICAgICBjb21wb25lbnRNYXBwaW5nLmNvbXBvbmVudFxuICAgICAgKTtcblxuICAgICAgaWYgKGZhY3RvcnkpIHtcbiAgICAgICAgY29tcG9uZW50UmVmID0gdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoXG4gICAgICAgICAgZmFjdG9yeSxcbiAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgaW5qZWN0b3JcbiAgICAgICAgKTtcbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KHsgZWxlbWVudFJlZjogY29tcG9uZW50UmVmLmxvY2F0aW9uLCBjb21wb25lbnRSZWYgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXNwb3NlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbXBvbmVudEZhY3RvcnkoaW5qZWN0b3I6IEluamVjdG9yLCBjb21wb25lbnQ6IGFueSk6IGFueSB7XG4gICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBmYWN0b3J5ID0gaW5qZWN0b3JcbiAgICAgIC5nZXQoQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKVxuICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG5cbiAgICByZXR1cm4gZmFjdG9yeTtcbiAgfVxufVxuIl19