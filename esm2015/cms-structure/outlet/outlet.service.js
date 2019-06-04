/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
/** @nocollapse */ OutletService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OutletService_Factory() { return new OutletService(); }, token: OutletService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBS2hELE1BQU0sT0FBTyxhQUFhO0lBSDFCO1FBSVUsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztLQW9DakM7Ozs7Ozs7SUFsQ0MsR0FBRyxDQUNELE1BQWMsRUFDZCxRQUEwQixFQUMxQixXQUEyQixjQUFjLENBQUMsT0FBTztRQUVqRCxJQUFJLFFBQVEsS0FBSyxjQUFjLENBQUMsTUFBTSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUM7U0FDN0M7UUFDRCxJQUFJLFFBQVEsS0FBSyxjQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxRQUFRLEtBQUssY0FBYyxDQUFDLEtBQUssRUFBRTtZQUNyQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDO1NBQzVDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsR0FBRyxDQUNELE1BQWMsRUFDZCxXQUEyQixjQUFjLENBQUMsT0FBTzs7WUFFN0MsV0FBVztRQUNmLFFBQVEsUUFBUSxFQUFFO1lBQ2hCLEtBQUssY0FBYyxDQUFDLE1BQU07Z0JBQ3hCLFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQy9DLE1BQU07WUFDUixLQUFLLGNBQWMsQ0FBQyxLQUFLO2dCQUN2QixXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QyxNQUFNO1lBQ1I7Z0JBQ0UsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUM7UUFDRCxPQUFPLFdBQVcsQ0FBQztRQUNuQix5RUFBeUU7SUFDM0UsQ0FBQzs7O1lBekNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7SUFFQyxzQ0FBMkI7Ozs7O0lBQzNCLDRDQUFpQzs7Ozs7SUFDakMsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE91dGxldFBvc2l0aW9uIH0gZnJvbSAnLi9vdXRsZXQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3V0bGV0U2VydmljZSB7XG4gIHByaXZhdGUgdGVtcGxhdGVzUmVmcyA9IHt9O1xuICBwcml2YXRlIHRlbXBsYXRlc1JlZnNCZWZvcmUgPSB7fTtcbiAgcHJpdmF0ZSB0ZW1wbGF0ZXNSZWZzQWZ0ZXIgPSB7fTtcblxuICBhZGQoXG4gICAgb3V0bGV0OiBzdHJpbmcsXG4gICAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcG9zaXRpb246IE91dGxldFBvc2l0aW9uID0gT3V0bGV0UG9zaXRpb24uUkVQTEFDRVxuICApOiB2b2lkIHtcbiAgICBpZiAocG9zaXRpb24gPT09IE91dGxldFBvc2l0aW9uLkJFRk9SRSkge1xuICAgICAgdGhpcy50ZW1wbGF0ZXNSZWZzQmVmb3JlW291dGxldF0gPSB0ZW1wbGF0ZTtcbiAgICB9XG4gICAgaWYgKHBvc2l0aW9uID09PSBPdXRsZXRQb3NpdGlvbi5SRVBMQUNFKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlc1JlZnNbb3V0bGV0XSA9IHRlbXBsYXRlO1xuICAgIH1cbiAgICBpZiAocG9zaXRpb24gPT09IE91dGxldFBvc2l0aW9uLkFGVEVSKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlc1JlZnNBZnRlcltvdXRsZXRdID0gdGVtcGxhdGU7XG4gICAgfVxuICB9XG5cbiAgZ2V0KFxuICAgIG91dGxldDogc3RyaW5nLFxuICAgIHBvc2l0aW9uOiBPdXRsZXRQb3NpdGlvbiA9IE91dGxldFBvc2l0aW9uLlJFUExBQ0VcbiAgKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgbGV0IHRlbXBsYXRlUmVmO1xuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgIGNhc2UgT3V0bGV0UG9zaXRpb24uQkVGT1JFOlxuICAgICAgICB0ZW1wbGF0ZVJlZiA9IHRoaXMudGVtcGxhdGVzUmVmc0JlZm9yZVtvdXRsZXRdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgT3V0bGV0UG9zaXRpb24uQUZURVI6XG4gICAgICAgIHRlbXBsYXRlUmVmID0gdGhpcy50ZW1wbGF0ZXNSZWZzQWZ0ZXJbb3V0bGV0XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0ZW1wbGF0ZVJlZiA9IHRoaXMudGVtcGxhdGVzUmVmc1tvdXRsZXRdO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGVSZWY7XG4gICAgLy8gcmV0dXJuIHRoaXMudGVtcGxhdGVzUmVmc1tvdXRsZXRdID8gdGhpcy50ZW1wbGF0ZXNSZWZzW291dGxldF0gOiBudWxsO1xuICB9XG59XG4iXX0=