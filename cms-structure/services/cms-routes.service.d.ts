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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsRoutesService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXJvdXRlcy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImNtcy1yb3V0ZXMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc01hcHBpbmdTZXJ2aWNlIH0gZnJvbSAnLi9jbXMtbWFwcGluZy5zZXJ2aWNlJztcbi8qKlxuICogUGxlYXNlIGRvbid0IHB1dCB0aGF0IHNlcnZpY2UgaW4gcHVibGljIEFQSS5cbiAqICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDbXNSb3V0ZXNTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHJvdXRlcjtcbiAgICBwcml2YXRlIGNtc01hcHBpbmc7XG4gICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIsIGNtc01hcHBpbmc6IENtc01hcHBpbmdTZXJ2aWNlKTtcbiAgICBjbXNSb3V0ZUV4aXN0KHVybDogc3RyaW5nKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBDb250YWlucyBDbXMgZHJpdmVuIHJvdXRpbmcgbG9naWMgaW50ZW5kZWQgZm9yIHVzZSB1c2UgaW4gZ3VhcmRzLCBlc3BlY2lhbGx5IGluIGNhbkFjdGl2YXRlIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIFdpbGwgcmV0dXJuIHRydWUsIHdoZW4gbG9naWMgd29udCBoYXZlIHRvIG1vZGlmeSByb3V0aW5nIChzbyBjYW5BY3RpdmF0ZSBjb3VsZCBiZSBlYXNpbHkgcmVzb2x2ZWQgdG8gdHJ1ZSlcbiAgICAgKiBvciB3aWxsIHJldHVybiBmYWxzZSwgd2hlbiByb3V0aW5nIGNvbmZpZ3VyYXRpb24gd2FzIHVwZGF0ZWQgYW5kIHJlZGlyZWN0aW9uIHRvIG5ld2x5IGdlbmVyYXRlZCByb3V0ZSB3YXMgaW5pdGlhdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAgICogQHBhcmFtIGN1cnJlbnRVcmxcbiAgICAgKi9cbiAgICBoYW5kbGVDbXNSb3V0ZXNJbkd1YXJkKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdLCBjdXJyZW50VXJsOiBzdHJpbmcsIGN1cnJlbnRQYWdlTGFiZWw6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSB1cGRhdGVSb3V0aW5nO1xufVxuIl19