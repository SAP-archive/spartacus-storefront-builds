import { Router } from '@angular/router';
import { PageContext } from '@spartacus/core';
import { CmsMappingService } from './cms-mapping.service';
import * as ɵngcc0 from '@angular/core';
export declare class CmsRoutesImplService {
    private router;
    private cmsMapping;
    constructor(router: Router, cmsMapping: CmsMappingService);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXJvdXRlcy1pbXBsLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY21zLXJvdXRlcy1pbXBsLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNNYXBwaW5nU2VydmljZSB9IGZyb20gJy4vY21zLW1hcHBpbmcuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDbXNSb3V0ZXNJbXBsU2VydmljZSB7XG4gICAgcHJpdmF0ZSByb3V0ZXI7XG4gICAgcHJpdmF0ZSBjbXNNYXBwaW5nO1xuICAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyLCBjbXNNYXBwaW5nOiBDbXNNYXBwaW5nU2VydmljZSk7XG4gICAgcHJpdmF0ZSBjbXNSb3V0ZUV4aXN0cztcbiAgICAvKipcbiAgICAgKiBDb250YWlucyBDbXMgZHJpdmVuIHJvdXRpbmcgbG9naWMgaW50ZW5kZWQgZm9yIHVzZSB1c2UgaW4gZ3VhcmRzLCBlc3BlY2lhbGx5IGluIGNhbkFjdGl2YXRlIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIFdpbGwgcmV0dXJuIHRydWUsIHdoZW4gbG9naWMgd29udCBoYXZlIHRvIG1vZGlmeSByb3V0aW5nIChzbyBjYW5BY3RpdmF0ZSBjb3VsZCBiZSBlYXNpbHkgcmVzb2x2ZWQgdG8gdHJ1ZSlcbiAgICAgKiBvciB3aWxsIHJldHVybiBmYWxzZSwgd2hlbiByb3V0aW5nIGNvbmZpZ3VyYXRpb24gd2FzIHVwZGF0ZWQgYW5kIHJlZGlyZWN0aW9uIHRvIG5ld2x5IGdlbmVyYXRlZCByb3V0ZSB3YXMgaW5pdGlhdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAgICogQHBhcmFtIGN1cnJlbnRVcmxcbiAgICAgKi9cbiAgICBoYW5kbGVDbXNSb3V0ZXNJbkd1YXJkKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdLCBjdXJyZW50VXJsOiBzdHJpbmcsIGN1cnJlbnRQYWdlTGFiZWw6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSB1cGRhdGVSb3V0aW5nO1xufVxuIl19