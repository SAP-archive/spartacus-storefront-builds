/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router, } from '@angular/router';
import { OrderCancelOrReturnService } from '../cancel-or-return.service';
import * as i0 from "@angular/core";
import * as i1 from "../cancel-or-return.service";
import * as i2 from "@angular/router";
export class CancelOrReturnRequestInputGuard {
    /**
     * @param {?} cancelOrReturnService
     * @param {?} router
     */
    constructor(cancelOrReturnService, router) {
        this.cancelOrReturnService = cancelOrReturnService;
        this.router = router;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    canActivate(route) {
        if (this.cancelOrReturnService.cancelOrReturnRequestInputs.length > 0) {
            return true;
        }
        else {
            /** @type {?} */
            const urlSegments = route.url.map((/**
             * @param {?} seg
             * @return {?}
             */
            seg => seg.path));
            urlSegments.pop();
            return this.router.parseUrl(urlSegments.join('/'));
        }
    }
}
CancelOrReturnRequestInputGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CancelOrReturnRequestInputGuard.ctorParameters = () => [
    { type: OrderCancelOrReturnService },
    { type: Router }
];
/** @nocollapse */ CancelOrReturnRequestInputGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CancelOrReturnRequestInputGuard_Factory() { return new CancelOrReturnRequestInputGuard(i0.ɵɵinject(i1.OrderCancelOrReturnService), i0.ɵɵinject(i2.Router)); }, token: CancelOrReturnRequestInputGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CancelOrReturnRequestInputGuard.prototype.cancelOrReturnService;
    /**
     * @type {?}
     * @private
     */
    CancelOrReturnRequestInputGuard.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yLXJldHVybi1yZXF1ZXN0LWlucHV0Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL2NhbmNlbGxhdGlvbnMtcmV0dXJucy9ndWFyZHMvY2FuY2VsLW9yLXJldHVybi1yZXF1ZXN0LWlucHV0Lmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFFTCxNQUFNLEdBR1AsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQUt6RSxNQUFNLE9BQU8sK0JBQStCOzs7OztJQUMxQyxZQUNVLHFCQUFpRCxFQUNqRCxNQUFjO1FBRGQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUE0QjtRQUNqRCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3JCLENBQUM7Ozs7O0lBRUosV0FBVyxDQUFDLEtBQTZCO1FBQ3ZDLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLDJCQUEyQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckUsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNOztrQkFDQyxXQUFXLEdBQWEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDO1lBQzVELFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNwRDtJQUNILENBQUM7OztZQWpCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSwwQkFBMEI7WUFKakMsTUFBTTs7Ozs7Ozs7SUFXSixnRUFBeUQ7Ozs7O0lBQ3pELGlEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhbkFjdGl2YXRlLFxuICBSb3V0ZXIsXG4gIFVybFRyZWUsXG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPcmRlckNhbmNlbE9yUmV0dXJuU2VydmljZSB9IGZyb20gJy4uL2NhbmNlbC1vci1yZXR1cm4uc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYW5jZWxPclJldHVyblJlcXVlc3RJbnB1dEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNhbmNlbE9yUmV0dXJuU2VydmljZTogT3JkZXJDYW5jZWxPclJldHVyblNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHwgVXJsVHJlZSB7XG4gICAgaWYgKHRoaXMuY2FuY2VsT3JSZXR1cm5TZXJ2aWNlLmNhbmNlbE9yUmV0dXJuUmVxdWVzdElucHV0cy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXJsU2VnbWVudHM6IHN0cmluZ1tdID0gcm91dGUudXJsLm1hcChzZWcgPT4gc2VnLnBhdGgpO1xuICAgICAgdXJsU2VnbWVudHMucG9wKCk7XG4gICAgICByZXR1cm4gdGhpcy5yb3V0ZXIucGFyc2VVcmwodXJsU2VnbWVudHMuam9pbignLycpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==