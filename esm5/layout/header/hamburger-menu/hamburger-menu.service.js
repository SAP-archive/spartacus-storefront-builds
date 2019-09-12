/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
var HamburgerMenuService = /** @class */ (function () {
    function HamburgerMenuService(router) {
        var _this = this;
        this.isExpanded = new BehaviorSubject(false);
        router.events
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event instanceof NavigationStart; })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.toggle(true);
        }));
    }
    /**
     * toggles the expand state of the hamburger menu
     */
    /**
     * toggles the expand state of the hamburger menu
     * @param {?=} forceCollapse
     * @return {?}
     */
    HamburgerMenuService.prototype.toggle = /**
     * toggles the expand state of the hamburger menu
     * @param {?=} forceCollapse
     * @return {?}
     */
    function (forceCollapse) {
        if (forceCollapse) {
            this.isExpanded.next(false);
        }
        else {
            this.isExpanded.next(!this.isExpanded.value);
        }
    };
    HamburgerMenuService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    HamburgerMenuService.ctorParameters = function () { return [
        { type: Router }
    ]; };
    /** @nocollapse */ HamburgerMenuService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function HamburgerMenuService_Factory() { return new HamburgerMenuService(i0.ɵɵinject(i1.Router)); }, token: HamburgerMenuService, providedIn: "root" });
    return HamburgerMenuService;
}());
export { HamburgerMenuService };
if (false) {
    /** @type {?} */
    HamburgerMenuService.prototype.isExpanded;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtYnVyZ2VyLW1lbnUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9oZWFkZXIvaGFtYnVyZ2VyLW1lbnUvaGFtYnVyZ2VyLW1lbnUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFeEM7SUFNRSw4QkFBWSxNQUFjO1FBQTFCLGlCQU1DO1FBUkQsZUFBVSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUdoRSxNQUFNLENBQUMsTUFBTTthQUNWLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLFlBQVksZUFBZSxFQUFoQyxDQUFnQyxFQUFDLENBQUM7YUFDdkQsU0FBUzs7O1FBQUM7WUFDVCxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCxxQ0FBTTs7Ozs7SUFBTixVQUFPLGFBQXVCO1FBQzVCLElBQUksYUFBYSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDOztnQkF2QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOeUIsTUFBTTs7OytCQURoQztDQTZCQyxBQXhCRCxJQXdCQztTQXJCWSxvQkFBb0I7OztJQUMvQiwwQ0FBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU3RhcnQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEhhbWJ1cmdlck1lbnVTZXJ2aWNlIHtcbiAgaXNFeHBhbmRlZDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIpIHtcbiAgICByb3V0ZXIuZXZlbnRzXG4gICAgICAucGlwZShmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlKHRydWUpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogdG9nZ2xlcyB0aGUgZXhwYW5kIHN0YXRlIG9mIHRoZSBoYW1idXJnZXIgbWVudVxuICAgKi9cbiAgdG9nZ2xlKGZvcmNlQ29sbGFwc2U/OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGZvcmNlQ29sbGFwc2UpIHtcbiAgICAgIHRoaXMuaXNFeHBhbmRlZC5uZXh0KGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0V4cGFuZGVkLm5leHQoIXRoaXMuaXNFeHBhbmRlZC52YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=