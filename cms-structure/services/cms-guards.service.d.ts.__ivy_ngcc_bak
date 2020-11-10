import { Injector } from '@angular/core';
import { RouterStateSnapshot, UrlTree } from '@angular/router';
import { CmsActivatedRouteSnapshot } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentsService } from './cms-components.service';
export declare class CmsGuardsService {
    protected cmsComponentsService: CmsComponentsService;
    protected injector: Injector;
    constructor(cmsComponentsService: CmsComponentsService, injector: Injector);
    cmsPageCanActivate(componentTypes: string[], route: CmsActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>;
}
