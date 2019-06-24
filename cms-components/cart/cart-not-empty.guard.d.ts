import { CanActivate } from '@angular/router';
import { CartService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class CartNotEmptyGuard implements CanActivate {
    private cartService;
    private routingService;
    constructor(cartService: CartService, routingService: RoutingService);
    canActivate(): Observable<boolean>;
    private isEmpty;
}
