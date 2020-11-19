import { ComponentFactoryResolver, Injectable, } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Default component handler used for dynamically launching cms components implemented
 * as native Angular components.
 */
export class DefaultComponentHandler {
    hasMatch(componentMapping) {
        return typeof componentMapping.component === 'function';
    }
    getPriority() {
        return -50 /* FALLBACK */;
    }
    launcher(componentMapping, viewContainerRef, elementInjector, module) {
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
                componentRef = viewContainerRef.createComponent(factory, undefined, injector, undefined, module);
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
}
DefaultComponentHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function DefaultComponentHandler_Factory() { return new DefaultComponentHandler(); }, token: DefaultComponentHandler, providedIn: "root" });
DefaultComponentHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1jb21wb25lbnQuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9jb21wb25lbnQvaGFuZGxlcnMvZGVmYXVsdC1jb21wb25lbnQuaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsd0JBQXdCLEVBR3hCLFVBQVUsR0FJWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUdsQzs7O0dBR0c7QUFJSCxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFFBQVEsQ0FBQyxnQkFBcUM7UUFDNUMsT0FBTyxPQUFPLGdCQUFnQixDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUM7SUFDMUQsQ0FBQztJQUVELFdBQVc7UUFDVCwwQkFBeUI7SUFDM0IsQ0FBQztJQUVELFFBQVEsQ0FDTixnQkFBcUMsRUFDckMsZ0JBQWtDLEVBQ2xDLGVBQTBCLEVBQzFCLE1BQXlCO1FBRXpCLE9BQU8sSUFBSSxVQUFVLENBR2xCLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDaEIsSUFBSSxZQUErQixDQUFDO1lBRXBDLE1BQU0sUUFBUSxHQUFHLGVBQWUsYUFBZixlQUFlLGNBQWYsZUFBZSxHQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztZQUU5RCxNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUU7Z0JBQ25CLElBQUksWUFBWSxFQUFFO29CQUNoQixZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ3hCO1lBQ0gsQ0FBQyxDQUFDO1lBRUYsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUN0QyxRQUFRLEVBQ1IsZ0JBQWdCLENBQUMsU0FBUyxDQUMzQixDQUFDO1lBRUYsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsWUFBWSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FDN0MsT0FBTyxFQUNQLFNBQVMsRUFDVCxRQUFRLEVBQ1IsU0FBUyxFQUNULE1BQU0sQ0FDUCxDQUFDO2dCQUNGLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO2FBQ3RFO1lBRUQsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMsbUJBQW1CLENBQUMsUUFBa0IsRUFBRSxTQUFjO1FBQzlELElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsTUFBTSxPQUFPLEdBQUcsUUFBUTthQUNyQixHQUFHLENBQUMsd0JBQXdCLENBQUM7YUFDN0IsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdEMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7OztZQTdERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0b3IsXG4gIE5nTW9kdWxlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEhhbmRsZXIgfSBmcm9tICcuL2NvbXBvbmVudC1oYW5kbGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudE1hcHBpbmcsIFByaW9yaXR5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuLyoqXG4gKiBEZWZhdWx0IGNvbXBvbmVudCBoYW5kbGVyIHVzZWQgZm9yIGR5bmFtaWNhbGx5IGxhdW5jaGluZyBjbXMgY29tcG9uZW50cyBpbXBsZW1lbnRlZFxuICogYXMgbmF0aXZlIEFuZ3VsYXIgY29tcG9uZW50cy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIERlZmF1bHRDb21wb25lbnRIYW5kbGVyIGltcGxlbWVudHMgQ29tcG9uZW50SGFuZGxlciB7XG4gIGhhc01hdGNoKGNvbXBvbmVudE1hcHBpbmc6IENtc0NvbXBvbmVudE1hcHBpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIGNvbXBvbmVudE1hcHBpbmcuY29tcG9uZW50ID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgZ2V0UHJpb3JpdHkoKTogUHJpb3JpdHkge1xuICAgIHJldHVybiBQcmlvcml0eS5GQUxMQkFDSztcbiAgfVxuXG4gIGxhdW5jaGVyKFxuICAgIGNvbXBvbmVudE1hcHBpbmc6IENtc0NvbXBvbmVudE1hcHBpbmcsXG4gICAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBlbGVtZW50SW5qZWN0b3I/OiBJbmplY3RvcixcbiAgICBtb2R1bGU/OiBOZ01vZHVsZVJlZjxhbnk+XG4gICk6IE9ic2VydmFibGU8eyBlbGVtZW50UmVmOiBFbGVtZW50UmVmOyBjb21wb25lbnRSZWY/OiBDb21wb25lbnRSZWY8YW55PiB9PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPHtcbiAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgICBjb21wb25lbnRSZWY/OiBDb21wb25lbnRSZWY8YW55PjtcbiAgICB9Pigoc3Vic2NyaWJlcikgPT4ge1xuICAgICAgbGV0IGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT47XG5cbiAgICAgIGNvbnN0IGluamVjdG9yID0gZWxlbWVudEluamVjdG9yID8/IHZpZXdDb250YWluZXJSZWYuaW5qZWN0b3I7XG5cbiAgICAgIGNvbnN0IGRpc3Bvc2UgPSAoKSA9PiB7XG4gICAgICAgIGlmIChjb21wb25lbnRSZWYpIHtcbiAgICAgICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5nZXRDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICBpbmplY3RvcixcbiAgICAgICAgY29tcG9uZW50TWFwcGluZy5jb21wb25lbnRcbiAgICAgICk7XG5cbiAgICAgIGlmIChmYWN0b3J5KSB7XG4gICAgICAgIGNvbXBvbmVudFJlZiA9IHZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICAgIGZhY3RvcnksXG4gICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgIGluamVjdG9yLFxuICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICBtb2R1bGVcbiAgICAgICAgKTtcbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KHsgZWxlbWVudFJlZjogY29tcG9uZW50UmVmLmxvY2F0aW9uLCBjb21wb25lbnRSZWYgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXNwb3NlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbXBvbmVudEZhY3RvcnkoaW5qZWN0b3I6IEluamVjdG9yLCBjb21wb25lbnQ6IGFueSk6IGFueSB7XG4gICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBmYWN0b3J5ID0gaW5qZWN0b3JcbiAgICAgIC5nZXQoQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKVxuICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG5cbiAgICByZXR1cm4gZmFjdG9yeTtcbiAgfVxufVxuIl19