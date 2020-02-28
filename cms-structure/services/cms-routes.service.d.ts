import { Router } from '@angular/router';
import { PageContext } from '@spartacus/core';
import { CmsMappingService } from './cms-mapping.service';
/**
 * Please don't put that service in public API.
 * */
import * as ɵngcc0 from '@angular/core';
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
    handleCmsRoutesInGuard(pageContext: PageContext, componentTypes: string[], currentUrl: string, currentPageLabel: string): boolean;
    private updateRouting;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsRoutesService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXJvdXRlcy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImNtcy1yb3V0ZXMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNNYXBwaW5nU2VydmljZSB9IGZyb20gJy4vY21zLW1hcHBpbmcuc2VydmljZSc7XG4vKipcbiAqIFBsZWFzZSBkb24ndCBwdXQgdGhhdCBzZXJ2aWNlIGluIHB1YmxpYyBBUEkuXG4gKiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ21zUm91dGVzU2VydmljZSB7XG4gICAgcHJpdmF0ZSByb3V0ZXI7XG4gICAgcHJpdmF0ZSBjbXNNYXBwaW5nO1xuICAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyLCBjbXNNYXBwaW5nOiBDbXNNYXBwaW5nU2VydmljZSk7XG4gICAgY21zUm91dGVFeGlzdCh1cmw6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQ29udGFpbnMgQ21zIGRyaXZlbiByb3V0aW5nIGxvZ2ljIGludGVuZGVkIGZvciB1c2UgdXNlIGluIGd1YXJkcywgZXNwZWNpYWxseSBpbiBjYW5BY3RpdmF0ZSBtZXRob2QuXG4gICAgICpcbiAgICAgKiBXaWxsIHJldHVybiB0cnVlLCB3aGVuIGxvZ2ljIHdvbnQgaGF2ZSB0byBtb2RpZnkgcm91dGluZyAoc28gY2FuQWN0aXZhdGUgY291bGQgYmUgZWFzaWx5IHJlc29sdmVkIHRvIHRydWUpXG4gICAgICogb3Igd2lsbCByZXR1cm4gZmFsc2UsIHdoZW4gcm91dGluZyBjb25maWd1cmF0aW9uIHdhcyB1cGRhdGVkIGFuZCByZWRpcmVjdGlvbiB0byBuZXdseSBnZW5lcmF0ZWQgcm91dGUgd2FzIGluaXRpYXRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgICAqIEBwYXJhbSBjdXJyZW50VXJsXG4gICAgICovXG4gICAgaGFuZGxlQ21zUm91dGVzSW5HdWFyZChwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSwgY3VycmVudFVybDogc3RyaW5nLCBjdXJyZW50UGFnZUxhYmVsOiBzdHJpbmcpOiBib29sZWFuO1xuICAgIHByaXZhdGUgdXBkYXRlUm91dGluZztcbn1cbiJdfQ==