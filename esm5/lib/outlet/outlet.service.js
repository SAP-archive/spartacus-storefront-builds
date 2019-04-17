/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { OutletPosition } from './outlet.model';
import * as i0 from "@angular/core";
var OutletService = /** @class */ (function () {
    function OutletService() {
        this.templatesRefs = {};
        this.templatesRefsBefore = {};
        this.templatesRefsAfter = {};
    }
    /**
     * @param {?} outlet
     * @param {?} template
     * @param {?=} position
     * @return {?}
     */
    OutletService.prototype.add = /**
     * @param {?} outlet
     * @param {?} template
     * @param {?=} position
     * @return {?}
     */
    function (outlet, template, position) {
        if (position === void 0) { position = OutletPosition.REPLACE; }
        if (position === OutletPosition.BEFORE) {
            this.templatesRefsBefore[outlet] = template;
        }
        if (position === OutletPosition.REPLACE) {
            this.templatesRefs[outlet] = template;
        }
        if (position === OutletPosition.AFTER) {
            this.templatesRefsAfter[outlet] = template;
        }
    };
    /**
     * @param {?} outlet
     * @param {?=} position
     * @return {?}
     */
    OutletService.prototype.get = /**
     * @param {?} outlet
     * @param {?=} position
     * @return {?}
     */
    function (outlet, position) {
        if (position === void 0) { position = OutletPosition.REPLACE; }
        /** @type {?} */
        var templateRef;
        switch (position) {
            case OutletPosition.BEFORE:
                templateRef = this.templatesRefsBefore[outlet];
                break;
            case OutletPosition.AFTER:
                templateRef = this.templatesRefsAfter[outlet];
                break;
            default:
                templateRef = this.templatesRefs[outlet];
        }
        return templateRef;
        // return this.templatesRefs[outlet] ? this.templatesRefs[outlet] : null;
    };
    OutletService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ OutletService.ngInjectableDef = i0.defineInjectable({ factory: function OutletService_Factory() { return new OutletService(); }, token: OutletService, providedIn: "root" });
    return OutletService;
}());
export { OutletService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OutletService.prototype.templatesRefs;
    /**
     * @type {?}
     * @private
     */
    OutletService.prototype.templatesRefsBefore;
    /**
     * @type {?}
     * @private
     */
    OutletService.prototype.templatesRefsAfter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvb3V0bGV0L291dGxldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFaEQ7SUFBQTtRQUlVLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUN6Qix1QkFBa0IsR0FBRyxFQUFFLENBQUM7S0FvQ2pDOzs7Ozs7O0lBbENDLDJCQUFHOzs7Ozs7SUFBSCxVQUNFLE1BQWMsRUFDZCxRQUEwQixFQUMxQixRQUFpRDtRQUFqRCx5QkFBQSxFQUFBLFdBQTJCLGNBQWMsQ0FBQyxPQUFPO1FBRWpELElBQUksUUFBUSxLQUFLLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDdEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUM3QztRQUNELElBQUksUUFBUSxLQUFLLGNBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUM7U0FDdkM7UUFDRCxJQUFJLFFBQVEsS0FBSyxjQUFjLENBQUMsS0FBSyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUM7U0FDNUM7SUFDSCxDQUFDOzs7Ozs7SUFFRCwyQkFBRzs7Ozs7SUFBSCxVQUNFLE1BQWMsRUFDZCxRQUFpRDtRQUFqRCx5QkFBQSxFQUFBLFdBQTJCLGNBQWMsQ0FBQyxPQUFPOztZQUU3QyxXQUFXO1FBQ2YsUUFBUSxRQUFRLEVBQUU7WUFDaEIsS0FBSyxjQUFjLENBQUMsTUFBTTtnQkFDeEIsV0FBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0MsTUFBTTtZQUNSLEtBQUssY0FBYyxDQUFDLEtBQUs7Z0JBQ3ZCLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlDLE1BQU07WUFDUjtnQkFDRSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QztRQUNELE9BQU8sV0FBVyxDQUFDO1FBQ25CLHlFQUF5RTtJQUMzRSxDQUFDOztnQkF6Q0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O3dCQUxEO0NBNkNDLEFBMUNELElBMENDO1NBdkNZLGFBQWE7Ozs7OztJQUN4QixzQ0FBMkI7Ozs7O0lBQzNCLDRDQUFpQzs7Ozs7SUFDakMsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE91dGxldFBvc2l0aW9uIH0gZnJvbSAnLi9vdXRsZXQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3V0bGV0U2VydmljZSB7XG4gIHByaXZhdGUgdGVtcGxhdGVzUmVmcyA9IHt9O1xuICBwcml2YXRlIHRlbXBsYXRlc1JlZnNCZWZvcmUgPSB7fTtcbiAgcHJpdmF0ZSB0ZW1wbGF0ZXNSZWZzQWZ0ZXIgPSB7fTtcblxuICBhZGQoXG4gICAgb3V0bGV0OiBzdHJpbmcsXG4gICAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcG9zaXRpb246IE91dGxldFBvc2l0aW9uID0gT3V0bGV0UG9zaXRpb24uUkVQTEFDRVxuICApOiB2b2lkIHtcbiAgICBpZiAocG9zaXRpb24gPT09IE91dGxldFBvc2l0aW9uLkJFRk9SRSkge1xuICAgICAgdGhpcy50ZW1wbGF0ZXNSZWZzQmVmb3JlW291dGxldF0gPSB0ZW1wbGF0ZTtcbiAgICB9XG4gICAgaWYgKHBvc2l0aW9uID09PSBPdXRsZXRQb3NpdGlvbi5SRVBMQUNFKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlc1JlZnNbb3V0bGV0XSA9IHRlbXBsYXRlO1xuICAgIH1cbiAgICBpZiAocG9zaXRpb24gPT09IE91dGxldFBvc2l0aW9uLkFGVEVSKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlc1JlZnNBZnRlcltvdXRsZXRdID0gdGVtcGxhdGU7XG4gICAgfVxuICB9XG5cbiAgZ2V0KFxuICAgIG91dGxldDogc3RyaW5nLFxuICAgIHBvc2l0aW9uOiBPdXRsZXRQb3NpdGlvbiA9IE91dGxldFBvc2l0aW9uLlJFUExBQ0VcbiAgKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgbGV0IHRlbXBsYXRlUmVmO1xuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgIGNhc2UgT3V0bGV0UG9zaXRpb24uQkVGT1JFOlxuICAgICAgICB0ZW1wbGF0ZVJlZiA9IHRoaXMudGVtcGxhdGVzUmVmc0JlZm9yZVtvdXRsZXRdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgT3V0bGV0UG9zaXRpb24uQUZURVI6XG4gICAgICAgIHRlbXBsYXRlUmVmID0gdGhpcy50ZW1wbGF0ZXNSZWZzQWZ0ZXJbb3V0bGV0XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0ZW1wbGF0ZVJlZiA9IHRoaXMudGVtcGxhdGVzUmVmc1tvdXRsZXRdO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGVSZWY7XG4gICAgLy8gcmV0dXJuIHRoaXMudGVtcGxhdGVzUmVmc1tvdXRsZXRdID8gdGhpcy50ZW1wbGF0ZXNSZWZzW291dGxldF0gOiBudWxsO1xuICB9XG59XG4iXX0=