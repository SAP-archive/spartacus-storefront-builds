import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckoutService, SemanticPathService } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class OrderConfirmationGuard implements CanActivate {
    private checkoutService;
    private router;
    private semanticPathService;
    constructor(checkoutService: CheckoutService, router: Router, semanticPathService: SemanticPathService);
    canActivate(): Observable<boolean | UrlTree>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderConfirmationGuard>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLmd1YXJkLmQudHMiLCJzb3VyY2VzIjpbIm9yZGVyLWNvbmZpcm1hdGlvbi5ndWFyZC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7QUFNQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5BY3RpdmF0ZSwgVXJsVHJlZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENoZWNrb3V0U2VydmljZSwgU2VtYW50aWNQYXRoU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPcmRlckNvbmZpcm1hdGlvbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAgIHByaXZhdGUgY2hlY2tvdXRTZXJ2aWNlO1xuICAgIHByaXZhdGUgcm91dGVyO1xuICAgIHByaXZhdGUgc2VtYW50aWNQYXRoU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSwgcm91dGVyOiBSb3V0ZXIsIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2UpO1xuICAgIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+O1xufVxuIl19