import { CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CmsActivatedRouteSnapshot, CmsService, ProtectedRoutesGuard, RoutingService, SemanticPathService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsGuardsService } from '../services/cms-guards.service';
import { CmsI18nService } from '../services/cms-i18n.service';
import { CmsRoutesService } from '../services/cms-routes.service';
export declare class CmsPageGuard implements CanActivate {
    protected routingService: RoutingService;
    protected cmsService: CmsService;
    private cmsRoutes;
    private cmsI18n;
    private cmsGuards;
    protected semanticPathService: SemanticPathService;
    protected protectedRoutesGuard?: ProtectedRoutesGuard;
    static guardName: string;
    constructor(routingService: RoutingService, cmsService: CmsService, cmsRoutes: CmsRoutesService, cmsI18n: CmsI18nService, cmsGuards: CmsGuardsService, semanticPathService: SemanticPathService, protectedRoutesGuard: ProtectedRoutesGuard);
    /**
     * @deprecated since version 1.2.0
     * Use constructor with more dependencies and make them all required.
     *
     * TODO(issue:4646) deprecated since version 1.2.0
     */
    constructor(routingService: RoutingService, cmsService: CmsService, cmsRoutes: CmsRoutesService, cmsI18n: CmsI18nService, cmsGuards: CmsGuardsService, semanticPathService: SemanticPathService);
    canActivate(route: CmsActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>;
    private getCmsPage;
    private resolveCmsPageLogic;
    private handleNotFoundPage;
}
