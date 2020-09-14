import { Injector } from '@angular/core';
import { RouterStateSnapshot, UrlTree } from '@angular/router';
import { CmsActivatedRouteSnapshot } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentsService } from './cms-components.service';
import * as ɵngcc0 from '@angular/core';
export declare class CmsGuardsService {
    protected cmsComponentsService: CmsComponentsService;
    protected injector: Injector;
    constructor(cmsComponentsService: CmsComponentsService, injector: Injector);
    cmsPageCanActivate(componentTypes: string[], route: CmsActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsGuardsService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWd1YXJkcy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImNtcy1ndWFyZHMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7O0FBS0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudHNTZXJ2aWNlIH0gZnJvbSAnLi9jbXMtY29tcG9uZW50cy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENtc0d1YXJkc1NlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBjbXNDb21wb25lbnRzU2VydmljZTogQ21zQ29tcG9uZW50c1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvcjtcbiAgICBjb25zdHJ1Y3RvcihjbXNDb21wb25lbnRzU2VydmljZTogQ21zQ29tcG9uZW50c1NlcnZpY2UsIGluamVjdG9yOiBJbmplY3Rvcik7XG4gICAgY21zUGFnZUNhbkFjdGl2YXRlKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSwgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT47XG59XG4iXX0=