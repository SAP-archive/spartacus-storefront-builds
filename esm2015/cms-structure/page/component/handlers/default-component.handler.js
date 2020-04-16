import { __decorate } from "tslib";
import { ComponentFactoryResolver, Injectable, } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Default component handler used for dynamically launching cms components implemented
 * as native Angular components.
 */
let DefaultComponentHandler = class DefaultComponentHandler {
    hasMatch(componentMapping) {
        return (typeof componentMapping.component === 'function' &&
            componentMapping.component.prototype);
    }
    getPriority() {
        return -50 /* FALLBACK */;
    }
    launcher(componentMapping, viewContainerRef, elementInjector) {
        return new Observable((subscriber) => {
            let componentRef;
            const injector = elementInjector !== null && elementInjector !== void 0 ? elementInjector : viewContainerRef.injector;
            const dispose = () => {
                if (componentRef) {
                    componentRef.destroy();
                }
            };
            const factory = this.getComponentFactory(injector, componentMapping.component);
            if (factory) {
                componentRef = viewContainerRef.createComponent(factory, undefined, injector);
                subscriber.next({ elementRef: componentRef.location, componentRef });
            }
            return dispose;
        });
    }
    getComponentFactory(injector, component) {
        if (!component) {
            return null;
        }
        const factory = injector
            .get(ComponentFactoryResolver)
            .resolveComponentFactory(component);
        return factory;
    }
};
DefaultComponentHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function DefaultComponentHandler_Factory() { return new DefaultComponentHandler(); }, token: DefaultComponentHandler, providedIn: "root" });
DefaultComponentHandler = __decorate([
    Injectable({
        providedIn: 'root',
    })
], DefaultComponentHandler);
export { DefaultComponentHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1jb21wb25lbnQuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9jb21wb25lbnQvaGFuZGxlcnMvZGVmYXVsdC1jb21wb25lbnQuaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHdCQUF3QixFQUd4QixVQUFVLEdBR1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHbEM7OztHQUdHO0FBSUgsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFDbEMsUUFBUSxDQUFDLGdCQUFxQztRQUM1QyxPQUFPLENBQ0wsT0FBTyxnQkFBZ0IsQ0FBQyxTQUFTLEtBQUssVUFBVTtZQUNoRCxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUNyQyxDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVCwwQkFBeUI7SUFDM0IsQ0FBQztJQUVELFFBQVEsQ0FDTixnQkFBcUMsRUFDckMsZ0JBQWtDLEVBQ2xDLGVBQTBCO1FBRTFCLE9BQU8sSUFBSSxVQUFVLENBR2xCLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDaEIsSUFBSSxZQUErQixDQUFDO1lBRXBDLE1BQU0sUUFBUSxHQUFHLGVBQWUsYUFBZixlQUFlLGNBQWYsZUFBZSxHQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztZQUU5RCxNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUU7Z0JBQ25CLElBQUksWUFBWSxFQUFFO29CQUNoQixZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ3hCO1lBQ0gsQ0FBQyxDQUFDO1lBRUYsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUN0QyxRQUFRLEVBQ1IsZ0JBQWdCLENBQUMsU0FBUyxDQUMzQixDQUFDO1lBRUYsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsWUFBWSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FDN0MsT0FBTyxFQUNQLFNBQVMsRUFDVCxRQUFRLENBQ1QsQ0FBQztnQkFDRixVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLFlBQVksQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQzthQUN0RTtZQUVELE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVTLG1CQUFtQixDQUFDLFFBQWtCLEVBQUUsU0FBYztRQUM5RCxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE1BQU0sT0FBTyxHQUFHLFFBQVE7YUFDckIsR0FBRyxDQUFDLHdCQUF3QixDQUFDO2FBQzdCLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXRDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FDRixDQUFBOztBQTNEWSx1QkFBdUI7SUFIbkMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHVCQUF1QixDQTJEbkM7U0EzRFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEhhbmRsZXIgfSBmcm9tICcuL2NvbXBvbmVudC1oYW5kbGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudE1hcHBpbmcsIFByaW9yaXR5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuLyoqXG4gKiBEZWZhdWx0IGNvbXBvbmVudCBoYW5kbGVyIHVzZWQgZm9yIGR5bmFtaWNhbGx5IGxhdW5jaGluZyBjbXMgY29tcG9uZW50cyBpbXBsZW1lbnRlZFxuICogYXMgbmF0aXZlIEFuZ3VsYXIgY29tcG9uZW50cy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIERlZmF1bHRDb21wb25lbnRIYW5kbGVyIGltcGxlbWVudHMgQ29tcG9uZW50SGFuZGxlciB7XG4gIGhhc01hdGNoKGNvbXBvbmVudE1hcHBpbmc6IENtc0NvbXBvbmVudE1hcHBpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdHlwZW9mIGNvbXBvbmVudE1hcHBpbmcuY29tcG9uZW50ID09PSAnZnVuY3Rpb24nICYmXG4gICAgICBjb21wb25lbnRNYXBwaW5nLmNvbXBvbmVudC5wcm90b3R5cGVcbiAgICApO1xuICB9XG5cbiAgZ2V0UHJpb3JpdHkoKTogUHJpb3JpdHkge1xuICAgIHJldHVybiBQcmlvcml0eS5GQUxMQkFDSztcbiAgfVxuXG4gIGxhdW5jaGVyKFxuICAgIGNvbXBvbmVudE1hcHBpbmc6IENtc0NvbXBvbmVudE1hcHBpbmcsXG4gICAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBlbGVtZW50SW5qZWN0b3I/OiBJbmplY3RvclxuICApOiBPYnNlcnZhYmxlPHsgZWxlbWVudFJlZjogRWxlbWVudFJlZjsgY29tcG9uZW50UmVmPzogQ29tcG9uZW50UmVmPGFueT4gfT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTx7XG4gICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgICAgY29tcG9uZW50UmVmPzogQ29tcG9uZW50UmVmPGFueT47XG4gICAgfT4oKHN1YnNjcmliZXIpID0+IHtcbiAgICAgIGxldCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuXG4gICAgICBjb25zdCBpbmplY3RvciA9IGVsZW1lbnRJbmplY3RvciA/PyB2aWV3Q29udGFpbmVyUmVmLmluamVjdG9yO1xuXG4gICAgICBjb25zdCBkaXNwb3NlID0gKCkgPT4ge1xuICAgICAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuZ2V0Q29tcG9uZW50RmFjdG9yeShcbiAgICAgICAgaW5qZWN0b3IsXG4gICAgICAgIGNvbXBvbmVudE1hcHBpbmcuY29tcG9uZW50XG4gICAgICApO1xuXG4gICAgICBpZiAoZmFjdG9yeSkge1xuICAgICAgICBjb21wb25lbnRSZWYgPSB2aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChcbiAgICAgICAgICBmYWN0b3J5LFxuICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICBpbmplY3RvclxuICAgICAgICApO1xuICAgICAgICBzdWJzY3JpYmVyLm5leHQoeyBlbGVtZW50UmVmOiBjb21wb25lbnRSZWYubG9jYXRpb24sIGNvbXBvbmVudFJlZiB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpc3Bvc2U7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q29tcG9uZW50RmFjdG9yeShpbmplY3RvcjogSW5qZWN0b3IsIGNvbXBvbmVudDogYW55KTogYW55IHtcbiAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGZhY3RvcnkgPSBpbmplY3RvclxuICAgICAgLmdldChDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpXG4gICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcblxuICAgIHJldHVybiBmYWN0b3J5O1xuICB9XG59XG4iXX0=