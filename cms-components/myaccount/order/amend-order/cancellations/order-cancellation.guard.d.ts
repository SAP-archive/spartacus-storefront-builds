import { CanActivate, UrlTree } from '@angular/router';
import { RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderCancellationService } from './order-cancellation.service';
export declare class OrderCancellationGuard implements CanActivate {
    protected routing: RoutingService;
    protected orderAmendService: OrderCancellationService;
    constructor(routing: RoutingService, orderAmendService: OrderCancellationService);
    canActivate(): Observable<boolean | UrlTree>;
}
