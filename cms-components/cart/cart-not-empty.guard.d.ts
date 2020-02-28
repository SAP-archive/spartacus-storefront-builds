import { CanActivate } from '@angular/router';
import { CartService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CartNotEmptyGuard implements CanActivate {
    private cartService;
    private routingService;
    constructor(cartService: CartService, routingService: RoutingService);
    canActivate(): Observable<boolean>;
    private isEmpty;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartNotEmptyGuard>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1ub3QtZW1wdHkuZ3VhcmQuZC50cyIsInNvdXJjZXMiOlsiY2FydC1ub3QtZW1wdHkuZ3VhcmQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7O0FBTUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UsIFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhcnROb3RFbXB0eUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAgIHByaXZhdGUgY2FydFNlcnZpY2U7XG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSk7XG4gICAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBwcml2YXRlIGlzRW1wdHk7XG59XG4iXX0=