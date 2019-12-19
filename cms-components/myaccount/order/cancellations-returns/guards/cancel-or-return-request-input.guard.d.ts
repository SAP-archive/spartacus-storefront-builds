import { CanActivate, Router, UrlTree, ActivatedRouteSnapshot } from '@angular/router';
import { OrderCancelOrReturnService } from '../cancel-or-return.service';
export declare class CancelOrReturnRequestInputGuard implements CanActivate {
    private cancelOrReturnService;
    private router;
    constructor(cancelOrReturnService: OrderCancelOrReturnService, router: Router);
    canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree;
}
