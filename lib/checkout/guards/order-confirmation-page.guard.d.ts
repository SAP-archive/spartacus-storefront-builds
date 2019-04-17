import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutingService, CheckoutService } from '@spartacus/core';
export declare class OrderConfirmationPageGuard implements CanActivate {
    private checkoutService;
    private routingService;
    constructor(checkoutService: CheckoutService, routingService: RoutingService);
    canActivate(): Observable<boolean>;
}
