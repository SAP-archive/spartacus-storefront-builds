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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXN0eWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQtc3R5bGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLGVBQWUsQ0FBQzs7QUFFdkQ7SUFBQTtRQUlVLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0tBUzNCOzs7Ozs7SUFQQyxnQ0FBRzs7Ozs7SUFBSCxVQUFJLE1BQWMsRUFBRSxJQUFxQjtRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELGdDQUFHOzs7O0lBQUgsVUFBSSxNQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDOztnQkFaRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7NkJBSkQ7Q0FlQyxBQWJELElBYUM7U0FWWSxrQkFBa0I7Ozs7OztJQUM3QiwwQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPdXRsZXRTdHlsZVNlcnZpY2Uge1xuICBwcml2YXRlIHRlbXBsYXRlUmVmcyA9IHt9O1xuXG4gIGFkZChvdXRsZXQ6IHN0cmluZywgZWxlbTogRWxlbWVudFJlZjxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy50ZW1wbGF0ZVJlZnNbb3V0bGV0XSA9IGVsZW07XG4gIH1cblxuICBnZXQob3V0bGV0OiBzdHJpbmcpOiBFbGVtZW50UmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlUmVmc1tvdXRsZXRdO1xuICB9XG59XG4iXX0=