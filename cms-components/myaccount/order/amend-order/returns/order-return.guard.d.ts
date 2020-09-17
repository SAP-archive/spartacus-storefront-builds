import { CanActivate, UrlTree } from '@angular/router';
import { RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderReturnService } from './order-return.service';
export declare class OrderReturnGuard implements CanActivate {
    protected routing: RoutingService;
    protected orderAmendService: OrderReturnService;
    constructor(routing: RoutingService, orderAmendService: OrderReturnService);
    canActivate(): Observable<boolean | UrlTree>;
}
