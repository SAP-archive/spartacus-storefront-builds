import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService, RoutingService } from '@spartacus/core';
export declare class CartNotEmptyGuard implements CanActivate {
    private cartService;
    private routingService;
    constructor(cartService: CartService, routingService: RoutingService);
    canActivate(): Observable<boolean>;
}
