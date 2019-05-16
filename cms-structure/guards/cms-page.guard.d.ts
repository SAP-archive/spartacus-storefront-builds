import { CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CmsActivatedRouteSnapshot, CmsService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsGuardsService } from '../services/cms-guards.service';
import { CmsI18nService } from '../services/cms-i18n.service';
import { CmsRoutesService } from '../services/cms-routes.service';
export declare class CmsPageGuard implements CanActivate {
    private routingService;
    private cmsService;
    private cmsRoutes;
    private cmsI18n;
    private cmsGuards;
    static guardName: string;
    constructor(routingService: RoutingService, cmsService: CmsService, cmsRoutes: CmsRoutesService, cmsI18n: CmsI18nService, cmsGuards: CmsGuardsService);
    canActivate(route: CmsActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>;
}
