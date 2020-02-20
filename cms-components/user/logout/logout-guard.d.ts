import { CanActivate } from '@angular/router';
import { AuthService, CmsService, RoutingService, SemanticPathService, ProtectedRoutesService, FeatureConfigService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class LogoutGuard implements CanActivate {
    protected auth: AuthService;
    protected cms: CmsService;
    protected routing: RoutingService;
    protected semanticPathService: SemanticPathService;
    protected protectedRoutes?: ProtectedRoutesService;
    protected featureConfig?: FeatureConfigService;
    /**
     * @deprecated since 1.4
     * Check #5666 for more info
     *
     * TODO(issue:5666) Deprecated since 1.4
     */
    constructor(auth: AuthService, cms: CmsService, routing: RoutingService, semanticPathService: SemanticPathService, protectedRoutes?: ProtectedRoutesService, featureConfig?: FeatureConfigService);
    canActivate(): Observable<any>;
    protected redirect(): void;
    protected logout(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LogoutGuard>;
}

//# sourceMappingURL=logout-guard.d.ts.map