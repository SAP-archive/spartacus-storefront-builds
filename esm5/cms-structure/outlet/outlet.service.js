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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRWhEO0lBQUE7UUFJVSxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDekIsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO0tBb0NqQzs7Ozs7OztJQWxDQywyQkFBRzs7Ozs7O0lBQUgsVUFDRSxNQUFjLEVBQ2QsUUFBMEIsRUFDMUIsUUFBaUQ7UUFBakQseUJBQUEsRUFBQSxXQUEyQixjQUFjLENBQUMsT0FBTztRQUVqRCxJQUFJLFFBQVEsS0FBSyxjQUFjLENBQUMsTUFBTSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUM7U0FDN0M7UUFDRCxJQUFJLFFBQVEsS0FBSyxjQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxRQUFRLEtBQUssY0FBYyxDQUFDLEtBQUssRUFBRTtZQUNyQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDO1NBQzVDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsMkJBQUc7Ozs7O0lBQUgsVUFDRSxNQUFjLEVBQ2QsUUFBaUQ7UUFBakQseUJBQUEsRUFBQSxXQUEyQixjQUFjLENBQUMsT0FBTzs7WUFFN0MsV0FBVztRQUNmLFFBQVEsUUFBUSxFQUFFO1lBQ2hCLEtBQUssY0FBYyxDQUFDLE1BQU07Z0JBQ3hCLFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQy9DLE1BQU07WUFDUixLQUFLLGNBQWMsQ0FBQyxLQUFLO2dCQUN2QixXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QyxNQUFNO1lBQ1I7Z0JBQ0UsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUM7UUFDRCxPQUFPLFdBQVcsQ0FBQztRQUNuQix5RUFBeUU7SUFDM0UsQ0FBQzs7Z0JBekNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozt3QkFMRDtDQTZDQyxBQTFDRCxJQTBDQztTQXZDWSxhQUFhOzs7Ozs7SUFDeEIsc0NBQTJCOzs7OztJQUMzQiw0Q0FBaUM7Ozs7O0lBQ2pDLDJDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXRQb3NpdGlvbiB9IGZyb20gJy4vb3V0bGV0Lm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE91dGxldFNlcnZpY2Uge1xuICBwcml2YXRlIHRlbXBsYXRlc1JlZnMgPSB7fTtcbiAgcHJpdmF0ZSB0ZW1wbGF0ZXNSZWZzQmVmb3JlID0ge307XG4gIHByaXZhdGUgdGVtcGxhdGVzUmVmc0FmdGVyID0ge307XG5cbiAgYWRkKFxuICAgIG91dGxldDogc3RyaW5nLFxuICAgIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHBvc2l0aW9uOiBPdXRsZXRQb3NpdGlvbiA9IE91dGxldFBvc2l0aW9uLlJFUExBQ0VcbiAgKTogdm9pZCB7XG4gICAgaWYgKHBvc2l0aW9uID09PSBPdXRsZXRQb3NpdGlvbi5CRUZPUkUpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVzUmVmc0JlZm9yZVtvdXRsZXRdID0gdGVtcGxhdGU7XG4gICAgfVxuICAgIGlmIChwb3NpdGlvbiA9PT0gT3V0bGV0UG9zaXRpb24uUkVQTEFDRSkge1xuICAgICAgdGhpcy50ZW1wbGF0ZXNSZWZzW291dGxldF0gPSB0ZW1wbGF0ZTtcbiAgICB9XG4gICAgaWYgKHBvc2l0aW9uID09PSBPdXRsZXRQb3NpdGlvbi5BRlRFUikge1xuICAgICAgdGhpcy50ZW1wbGF0ZXNSZWZzQWZ0ZXJbb3V0bGV0XSA9IHRlbXBsYXRlO1xuICAgIH1cbiAgfVxuXG4gIGdldChcbiAgICBvdXRsZXQ6IHN0cmluZyxcbiAgICBwb3NpdGlvbjogT3V0bGV0UG9zaXRpb24gPSBPdXRsZXRQb3NpdGlvbi5SRVBMQUNFXG4gICk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIGxldCB0ZW1wbGF0ZVJlZjtcbiAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICBjYXNlIE91dGxldFBvc2l0aW9uLkJFRk9SRTpcbiAgICAgICAgdGVtcGxhdGVSZWYgPSB0aGlzLnRlbXBsYXRlc1JlZnNCZWZvcmVbb3V0bGV0XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE91dGxldFBvc2l0aW9uLkFGVEVSOlxuICAgICAgICB0ZW1wbGF0ZVJlZiA9IHRoaXMudGVtcGxhdGVzUmVmc0FmdGVyW291dGxldF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGVtcGxhdGVSZWYgPSB0aGlzLnRlbXBsYXRlc1JlZnNbb3V0bGV0XTtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlUmVmO1xuICAgIC8vIHJldHVybiB0aGlzLnRlbXBsYXRlc1JlZnNbb3V0bGV0XSA/IHRoaXMudGVtcGxhdGVzUmVmc1tvdXRsZXRdIDogbnVsbDtcbiAgfVxufVxuIl19