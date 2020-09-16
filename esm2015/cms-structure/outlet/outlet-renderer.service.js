import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class OutletRendererService {
    constructor() {
        this.outletRefs = new BehaviorSubject(new Map());
    }
    /**
     * Dynamically render the templates in the specified array
     *
     * @param outlet
     */
    render(outlet) {
        if (this.outletRefs.value.size !== 0) {
            this.outletRefs.value.get(outlet).render();
        }
    }
    /**
     * Register outlet to be available to render dynamically
     *
     * @param cxOutlet
     * @param context
     */
    register(cxOutlet, context) {
        this.outletRefs.next(this.outletRefs.value.set(cxOutlet, context));
    }
    /**
     * Returns map of outlets
     *
     */
    getOutletRef(outlet) {
        return this.outletRefs.asObservable().pipe(map((val) => val.get(outlet)), filter((val) => Boolean(val)));
    }
}
OutletRendererService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OutletRendererService_Factory() { return new OutletRendererService(); }, token: OutletRendererService, providedIn: "root" });
OutletRendererService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlbmRlcmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQtcmVuZGVyZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFNN0MsTUFBTSxPQUFPLHFCQUFxQjtJQUhsQztRQUlVLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLEdBQUcsRUFBMkIsQ0FBQyxDQUFDO0tBZ0M5RTtJQTlCQzs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLE1BQWM7UUFDbkIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUM1QztJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFFBQVEsQ0FBQyxRQUFnQixFQUFFLE9BQXdCO1FBQ2pELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsWUFBWSxDQUFDLE1BQWM7UUFDekIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDeEMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQzdCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQzlCLENBQUM7SUFDSixDQUFDOzs7O1lBbkNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPdXRsZXREaXJlY3RpdmUgfSBmcm9tICcuL291dGxldC5kaXJlY3RpdmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3V0bGV0UmVuZGVyZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBvdXRsZXRSZWZzID0gbmV3IEJlaGF2aW9yU3ViamVjdChuZXcgTWFwPHN0cmluZywgT3V0bGV0RGlyZWN0aXZlPigpKTtcblxuICAvKipcbiAgICogRHluYW1pY2FsbHkgcmVuZGVyIHRoZSB0ZW1wbGF0ZXMgaW4gdGhlIHNwZWNpZmllZCBhcnJheVxuICAgKlxuICAgKiBAcGFyYW0gb3V0bGV0XG4gICAqL1xuICByZW5kZXIob3V0bGV0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdXRsZXRSZWZzLnZhbHVlLnNpemUgIT09IDApIHtcbiAgICAgIHRoaXMub3V0bGV0UmVmcy52YWx1ZS5nZXQob3V0bGV0KS5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgb3V0bGV0IHRvIGJlIGF2YWlsYWJsZSB0byByZW5kZXIgZHluYW1pY2FsbHlcbiAgICpcbiAgICogQHBhcmFtIGN4T3V0bGV0XG4gICAqIEBwYXJhbSBjb250ZXh0XG4gICAqL1xuICByZWdpc3RlcihjeE91dGxldDogc3RyaW5nLCBjb250ZXh0OiBPdXRsZXREaXJlY3RpdmUpOiB2b2lkIHtcbiAgICB0aGlzLm91dGxldFJlZnMubmV4dCh0aGlzLm91dGxldFJlZnMudmFsdWUuc2V0KGN4T3V0bGV0LCBjb250ZXh0KSk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgbWFwIG9mIG91dGxldHNcbiAgICpcbiAgICovXG4gIGdldE91dGxldFJlZihvdXRsZXQ6IHN0cmluZyk6IE9ic2VydmFibGU8T3V0bGV0RGlyZWN0aXZlPiB7XG4gICAgcmV0dXJuIHRoaXMub3V0bGV0UmVmcy5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgbWFwKCh2YWwpID0+IHZhbC5nZXQob3V0bGV0KSksXG4gICAgICBmaWx0ZXIoKHZhbCkgPT4gQm9vbGVhbih2YWwpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==