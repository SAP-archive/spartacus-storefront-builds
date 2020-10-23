import { Router } from '@angular/router';
import { PageContext } from '@spartacus/core';
import { CmsComponentsService } from './cms-components.service';
import * as ɵngcc0 from '@angular/core';
export declare class CmsRoutesImplService {
    private router;
    private cmsComponentsService;
    constructor(router: Router, cmsComponentsService: CmsComponentsService);
    private cmsRouteExists;
    /**
     * Contains Cms driven routing logic intended for use use in guards, especially in canActivate method.
     *
     * Will return true, when logic wont have to modify routing (so canActivate could be easily resolved to true)
     * or will return false, when routing configuration was updated and redirection to newly generated route was initiated.
     *
     * @param pageContext
     * @param currentUrl
     */
    handleCmsRoutesInGuard(pageContext: PageContext, componentTypes: string[], currentUrl: string, currentPageLabel: string): boolean;
    private updateRouting;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsRoutesImplService, never>;
}

//# sourceMappingURL=cms-routes-impl.service.d.ts.map