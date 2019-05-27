import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, CmsService, RoutingService, SemanticPathService } from '@spartacus/core';
export declare class LogoutGuard implements CanActivate {
    protected auth: AuthService;
    protected cms: CmsService;
    protected routing: RoutingService;
    protected semanticPathService: SemanticPathService;
    constructor(auth: AuthService, cms: CmsService, routing: RoutingService, semanticPathService: SemanticPathService);
    canActivate(): Observable<any>;
    protected logout(): void;
}
