import { CanActivate, Router, UrlTree } from '@angular/router';
import { SemanticPathService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderReturnService } from './order-return.service';
export declare class OrderReturnGuard implements CanActivate {
    protected orderAmendService: OrderReturnService;
    protected semanticPathService: SemanticPathService;
    protected router: Router;
    constructor(orderAmendService: OrderReturnService, semanticPathService: SemanticPathService, router: Router);
    canActivate(): Observable<boolean | UrlTree>;
}
