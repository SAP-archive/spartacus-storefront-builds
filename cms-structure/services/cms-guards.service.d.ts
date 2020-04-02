import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterStateSnapshot, UrlTree } from '@angular/router';
import { CmsActivatedRouteSnapshot } from '@spartacus/core';
import { CmsMappingService } from './cms-mapping.service';
/**
 * Please don't put that service in public API.
 * */
import * as ɵngcc0 from '@angular/core';
export declare class CmsGuardsService {
    private cmsMapping;
    private injector;
    constructor(cmsMapping: CmsMappingService, injector: Injector);
    cmsPageCanActivate(componentTypes: string[], route: CmsActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>;
    shouldForceRefreshPage(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsGuardsService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWd1YXJkcy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImNtcy1ndWFyZHMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFRQTs7Ozs7OztBQU1BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNNYXBwaW5nU2VydmljZSB9IGZyb20gJy4vY21zLW1hcHBpbmcuc2VydmljZSc7XG4vKipcbiAqIFBsZWFzZSBkb24ndCBwdXQgdGhhdCBzZXJ2aWNlIGluIHB1YmxpYyBBUEkuXG4gKiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ21zR3VhcmRzU2VydmljZSB7XG4gICAgcHJpdmF0ZSBjbXNNYXBwaW5nO1xuICAgIHByaXZhdGUgaW5qZWN0b3I7XG4gICAgY29uc3RydWN0b3IoY21zTWFwcGluZzogQ21zTWFwcGluZ1NlcnZpY2UsIGluamVjdG9yOiBJbmplY3Rvcik7XG4gICAgY21zUGFnZUNhbkFjdGl2YXRlKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSwgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT47XG4gICAgc2hvdWxkRm9yY2VSZWZyZXNoUGFnZSgpOiBib29sZWFuO1xufVxuIl19