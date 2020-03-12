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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsGuardsService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWd1YXJkcy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImNtcy1ndWFyZHMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFRQTs7Ozs7O0FBS0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc01hcHBpbmdTZXJ2aWNlIH0gZnJvbSAnLi9jbXMtbWFwcGluZy5zZXJ2aWNlJztcbi8qKlxuICogUGxlYXNlIGRvbid0IHB1dCB0aGF0IHNlcnZpY2UgaW4gcHVibGljIEFQSS5cbiAqICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDbXNHdWFyZHNTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGNtc01hcHBpbmc7XG4gICAgcHJpdmF0ZSBpbmplY3RvcjtcbiAgICBjb25zdHJ1Y3RvcihjbXNNYXBwaW5nOiBDbXNNYXBwaW5nU2VydmljZSwgaW5qZWN0b3I6IEluamVjdG9yKTtcbiAgICBjbXNQYWdlQ2FuQWN0aXZhdGUoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdLCByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPjtcbn1cbiJdfQ==