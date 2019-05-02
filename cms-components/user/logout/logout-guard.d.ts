import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, CmsService, RoutingService } from '@spartacus/core';
export declare class LogoutGuard implements CanActivate {
    protected auth: AuthService;
    protected cms: CmsService;
    protected routing: RoutingService;
    static GUARD_NAME: string;
    constructor(auth: AuthService, cms: CmsService, routing: RoutingService);
    canActivate(): Observable<any>;
    protected logout(): void;
}
