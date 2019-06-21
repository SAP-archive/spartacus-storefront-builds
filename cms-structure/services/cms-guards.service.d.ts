import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterStateSnapshot, UrlTree } from '@angular/router';
import { CmsActivatedRouteSnapshot } from '@spartacus/core';
import { CmsMappingService } from './cms-mapping.service';
export declare class CmsGuardsService {
    private cmsMapping;
    private injector;
    constructor(cmsMapping: CmsMappingService, injector: Injector);
    cmsPageCanActivate(componentTypes: string[], route: CmsActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>;
}
