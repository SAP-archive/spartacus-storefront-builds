/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class HamburgerMenuService {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.isExpanded = new BehaviorSubject(false);
        router.events
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event instanceof NavigationStart)))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.toggle(true);
        }));
    }
    /**
     * toggles the expand state of the hamburger menu
     * @param {?=} forceCollapse
     * @return {?}
     */
    toggle(forceCollapse) {
        if (forceCollapse) {
            this.isExpanded.next(false);
        }
        else {
            this.isExpanded.next(!this.isExpanded.value);
        }
    }
}
HamburgerMenuService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
HamburgerMenuService.ctorParameters = () => [
    { type: Router }
];
/** @nocollapse */ HamburgerMenuService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function HamburgerMenuService_Factory() { return new HamburgerMenuService(i0.ɵɵinject(i1.Router)); }, token: HamburgerMenuService, providedIn: "root" });
if (false) {
    /** @type {?} */
    HamburgerMenuService.prototype.isExpanded;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtYnVyZ2VyLW1lbnUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9oZWFkZXIvaGFtYnVyZ2VyLW1lbnUvaGFtYnVyZ2VyLW1lbnUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLeEMsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUcvQixZQUFZLE1BQWM7UUFGMUIsZUFBVSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUdoRSxNQUFNLENBQUMsTUFBTTthQUNWLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLFlBQVksZUFBZSxFQUFDLENBQUM7YUFDdkQsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7OztJQUtELE1BQU0sQ0FBQyxhQUF1QjtRQUM1QixJQUFJLGFBQWEsRUFBRTtZQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs7O1lBdkJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU55QixNQUFNOzs7OztJQVE5QiwwQ0FBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU3RhcnQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEhhbWJ1cmdlck1lbnVTZXJ2aWNlIHtcbiAgaXNFeHBhbmRlZDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIpIHtcbiAgICByb3V0ZXIuZXZlbnRzXG4gICAgICAucGlwZShmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlKHRydWUpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogdG9nZ2xlcyB0aGUgZXhwYW5kIHN0YXRlIG9mIHRoZSBoYW1idXJnZXIgbWVudVxuICAgKi9cbiAgdG9nZ2xlKGZvcmNlQ29sbGFwc2U/OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGZvcmNlQ29sbGFwc2UpIHtcbiAgICAgIHRoaXMuaXNFeHBhbmRlZC5uZXh0KGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0V4cGFuZGVkLm5leHQoIXRoaXMuaXNFeHBhbmRlZC52YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=