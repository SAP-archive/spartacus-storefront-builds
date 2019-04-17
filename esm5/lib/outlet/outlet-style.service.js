/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var OutletStyleService = /** @class */ (function () {
    function OutletStyleService() {
        this.templateRefs = {};
    }
    /**
     * @param {?} outlet
     * @param {?} elem
     * @return {?}
     */
    OutletStyleService.prototype.add = /**
     * @param {?} outlet
     * @param {?} elem
     * @return {?}
     */
    function (outlet, elem) {
        this.templateRefs[outlet] = elem;
    };
    /**
     * @param {?} outlet
     * @return {?}
     */
    OutletStyleService.prototype.get = /**
     * @param {?} outlet
     * @return {?}
     */
    function (outlet) {
        return this.templateRefs[outlet];
    };
    OutletStyleService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ OutletStyleService.ngInjectableDef = i0.defineInjectable({ factory: function OutletStyleService_Factory() { return new OutletStyleService(); }, token: OutletStyleService, providedIn: "root" });
    return OutletStyleService;
}());
export { OutletStyleService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OutletStyleService.prototype.templateRefs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXN0eWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvb3V0bGV0L291dGxldC1zdHlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sZUFBZSxDQUFDOztBQUV2RDtJQUFBO1FBSVUsaUJBQVksR0FBRyxFQUFFLENBQUM7S0FTM0I7Ozs7OztJQVBDLGdDQUFHOzs7OztJQUFILFVBQUksTUFBYyxFQUFFLElBQXFCO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsZ0NBQUc7Ozs7SUFBSCxVQUFJLE1BQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7O2dCQVpGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs2QkFKRDtDQWVDLEFBYkQsSUFhQztTQVZZLGtCQUFrQjs7Ozs7O0lBQzdCLDBDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE91dGxldFN0eWxlU2VydmljZSB7XG4gIHByaXZhdGUgdGVtcGxhdGVSZWZzID0ge307XG5cbiAgYWRkKG91dGxldDogc3RyaW5nLCBlbGVtOiBFbGVtZW50UmVmPGFueT4pOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlUmVmc1tvdXRsZXRdID0gZWxlbTtcbiAgfVxuXG4gIGdldChvdXRsZXQ6IHN0cmluZyk6IEVsZW1lbnRSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVSZWZzW291dGxldF07XG4gIH1cbn1cbiJdfQ==