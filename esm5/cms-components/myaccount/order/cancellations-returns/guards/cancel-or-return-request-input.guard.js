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
var CancelOrReturnRequestInputGuard = /** @class */ (function () {
    function CancelOrReturnRequestInputGuard(cancelOrReturnService, router) {
        this.cancelOrReturnService = cancelOrReturnService;
        this.router = router;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    CancelOrReturnRequestInputGuard.prototype.canActivate = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        if (this.cancelOrReturnService.cancelOrReturnRequestInputs.length > 0) {
            return true;
        }
        else {
            /** @type {?} */
            var urlSegments = route.url.map((/**
             * @param {?} seg
             * @return {?}
             */
            function (seg) { return seg.path; }));
            urlSegments.pop();
            return this.router.parseUrl(urlSegments.join('/'));
        }
    };
    CancelOrReturnRequestInputGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CancelOrReturnRequestInputGuard.ctorParameters = function () { return [
        { type: OrderCancelOrReturnService },
        { type: Router }
    ]; };
    /** @nocollapse */ CancelOrReturnRequestInputGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CancelOrReturnRequestInputGuard_Factory() { return new CancelOrReturnRequestInputGuard(i0.ɵɵinject(i1.OrderCancelOrReturnService), i0.ɵɵinject(i2.Router)); }, token: CancelOrReturnRequestInputGuard, providedIn: "root" });
    return CancelOrReturnRequestInputGuard;
}());
export { CancelOrReturnRequestInputGuard };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yLXJldHVybi1yZXF1ZXN0LWlucHV0Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL2NhbmNlbGxhdGlvbnMtcmV0dXJucy9ndWFyZHMvY2FuY2VsLW9yLXJldHVybi1yZXF1ZXN0LWlucHV0Lmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFFTCxNQUFNLEdBR1AsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQUV6RTtJQUlFLHlDQUNVLHFCQUFpRCxFQUNqRCxNQUFjO1FBRGQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUE0QjtRQUNqRCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3JCLENBQUM7Ozs7O0lBRUoscURBQVc7Ozs7SUFBWCxVQUFZLEtBQTZCO1FBQ3ZDLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLDJCQUEyQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckUsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNOztnQkFDQyxXQUFXLEdBQWEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFSLENBQVEsRUFBQztZQUM1RCxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDOztnQkFqQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSwwQkFBMEI7Z0JBSmpDLE1BQU07OzswQ0FIUjtDQTJCQyxBQWxCRCxJQWtCQztTQWZZLCtCQUErQjs7Ozs7O0lBRXhDLGdFQUF5RDs7Ozs7SUFDekQsaURBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FuQWN0aXZhdGUsXG4gIFJvdXRlcixcbiAgVXJsVHJlZSxcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9yZGVyQ2FuY2VsT3JSZXR1cm5TZXJ2aWNlIH0gZnJvbSAnLi4vY2FuY2VsLW9yLXJldHVybi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhbmNlbE9yUmV0dXJuUmVxdWVzdElucHV0R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2FuY2VsT3JSZXR1cm5TZXJ2aWNlOiBPcmRlckNhbmNlbE9yUmV0dXJuU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkge31cblxuICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4gfCBVcmxUcmVlIHtcbiAgICBpZiAodGhpcy5jYW5jZWxPclJldHVyblNlcnZpY2UuY2FuY2VsT3JSZXR1cm5SZXF1ZXN0SW5wdXRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1cmxTZWdtZW50czogc3RyaW5nW10gPSByb3V0ZS51cmwubWFwKHNlZyA9PiBzZWcucGF0aCk7XG4gICAgICB1cmxTZWdtZW50cy5wb3AoKTtcbiAgICAgIHJldHVybiB0aGlzLnJvdXRlci5wYXJzZVVybCh1cmxTZWdtZW50cy5qb2luKCcvJykpO1xuICAgIH1cbiAgfVxufVxuIl19