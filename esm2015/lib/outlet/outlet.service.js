/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { OutletPosition } from './outlet.model';
import * as i0 from "@angular/core";
export class OutletService {
    constructor() {
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
    add(outlet, template, position = OutletPosition.REPLACE) {
        if (position === OutletPosition.BEFORE) {
            this.templatesRefsBefore[outlet] = template;
        }
        if (position === OutletPosition.REPLACE) {
            this.templatesRefs[outlet] = template;
        }
        if (position === OutletPosition.AFTER) {
            this.templatesRefsAfter[outlet] = template;
        }
    }
    /**
     * @param {?} outlet
     * @param {?=} position
     * @return {?}
     */
    get(outlet, position = OutletPosition.REPLACE) {
        /** @type {?} */
        let templateRef;
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
    }
}
OutletService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ OutletService.ngInjectableDef = i0.defineInjectable({ factory: function OutletService_Factory() { return new OutletService(); }, token: OutletService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvb3V0bGV0L291dGxldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFLaEQsTUFBTSxPQUFPLGFBQWE7SUFIMUI7UUFJVSxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDekIsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO0tBb0NqQzs7Ozs7OztJQWxDQyxHQUFHLENBQ0QsTUFBYyxFQUNkLFFBQTBCLEVBQzFCLFdBQTJCLGNBQWMsQ0FBQyxPQUFPO1FBRWpELElBQUksUUFBUSxLQUFLLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDdEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUM3QztRQUNELElBQUksUUFBUSxLQUFLLGNBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUM7U0FDdkM7UUFDRCxJQUFJLFFBQVEsS0FBSyxjQUFjLENBQUMsS0FBSyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUM7U0FDNUM7SUFDSCxDQUFDOzs7Ozs7SUFFRCxHQUFHLENBQ0QsTUFBYyxFQUNkLFdBQTJCLGNBQWMsQ0FBQyxPQUFPOztZQUU3QyxXQUFXO1FBQ2YsUUFBUSxRQUFRLEVBQUU7WUFDaEIsS0FBSyxjQUFjLENBQUMsTUFBTTtnQkFDeEIsV0FBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0MsTUFBTTtZQUNSLEtBQUssY0FBYyxDQUFDLEtBQUs7Z0JBQ3ZCLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlDLE1BQU07WUFDUjtnQkFDRSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QztRQUNELE9BQU8sV0FBVyxDQUFDO1FBQ25CLHlFQUF5RTtJQUMzRSxDQUFDOzs7WUF6Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7OztJQUVDLHNDQUEyQjs7Ozs7SUFDM0IsNENBQWlDOzs7OztJQUNqQywyQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0UG9zaXRpb24gfSBmcm9tICcuL291dGxldC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPdXRsZXRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSB0ZW1wbGF0ZXNSZWZzID0ge307XG4gIHByaXZhdGUgdGVtcGxhdGVzUmVmc0JlZm9yZSA9IHt9O1xuICBwcml2YXRlIHRlbXBsYXRlc1JlZnNBZnRlciA9IHt9O1xuXG4gIGFkZChcbiAgICBvdXRsZXQ6IHN0cmluZyxcbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwb3NpdGlvbjogT3V0bGV0UG9zaXRpb24gPSBPdXRsZXRQb3NpdGlvbi5SRVBMQUNFXG4gICk6IHZvaWQge1xuICAgIGlmIChwb3NpdGlvbiA9PT0gT3V0bGV0UG9zaXRpb24uQkVGT1JFKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlc1JlZnNCZWZvcmVbb3V0bGV0XSA9IHRlbXBsYXRlO1xuICAgIH1cbiAgICBpZiAocG9zaXRpb24gPT09IE91dGxldFBvc2l0aW9uLlJFUExBQ0UpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVzUmVmc1tvdXRsZXRdID0gdGVtcGxhdGU7XG4gICAgfVxuICAgIGlmIChwb3NpdGlvbiA9PT0gT3V0bGV0UG9zaXRpb24uQUZURVIpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVzUmVmc0FmdGVyW291dGxldF0gPSB0ZW1wbGF0ZTtcbiAgICB9XG4gIH1cblxuICBnZXQoXG4gICAgb3V0bGV0OiBzdHJpbmcsXG4gICAgcG9zaXRpb246IE91dGxldFBvc2l0aW9uID0gT3V0bGV0UG9zaXRpb24uUkVQTEFDRVxuICApOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICBsZXQgdGVtcGxhdGVSZWY7XG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgY2FzZSBPdXRsZXRQb3NpdGlvbi5CRUZPUkU6XG4gICAgICAgIHRlbXBsYXRlUmVmID0gdGhpcy50ZW1wbGF0ZXNSZWZzQmVmb3JlW291dGxldF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBPdXRsZXRQb3NpdGlvbi5BRlRFUjpcbiAgICAgICAgdGVtcGxhdGVSZWYgPSB0aGlzLnRlbXBsYXRlc1JlZnNBZnRlcltvdXRsZXRdO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRlbXBsYXRlUmVmID0gdGhpcy50ZW1wbGF0ZXNSZWZzW291dGxldF07XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZVJlZjtcbiAgICAvLyByZXR1cm4gdGhpcy50ZW1wbGF0ZXNSZWZzW291dGxldF0gPyB0aGlzLnRlbXBsYXRlc1JlZnNbb3V0bGV0XSA6IG51bGw7XG4gIH1cbn1cbiJdfQ==