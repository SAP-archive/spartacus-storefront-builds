import { Router } from '@angular/router';
import { PageContext } from '@spartacus/core';
import { CmsMappingService } from './cms-mapping.service';
export declare class CmsRoutesService {
    private router;
    private cmsMapping;
    constructor(router: Router, cmsMapping: CmsMappingService);
    cmsRouteExist(url: string): boolean;
    /**
     * Contains Cms driven routing logic intended for use use in guards, especially in canActivate method.
     *
     * Will return true, when logic wont have to modify routing (so canActivate could be easily resolved to true)
     * or will return false, when routing configuration was updated and redirection to newly generated route was initiated.
     *
     * @param pageContext
     * @param currentUrl
     */
    handleCmsRoutesInGuard(pageContext: PageContext, componentTypes: string[], currentUrl: string): boolean;
    private updateRouting;
}
