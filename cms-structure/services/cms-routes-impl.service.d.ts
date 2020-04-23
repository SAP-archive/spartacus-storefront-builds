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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXJvdXRlcy1pbXBsLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY21zLXJvdXRlcy1pbXBsLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRzU2VydmljZSB9IGZyb20gJy4vY21zLWNvbXBvbmVudHMuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDbXNSb3V0ZXNJbXBsU2VydmljZSB7XG4gICAgcHJpdmF0ZSByb3V0ZXI7XG4gICAgcHJpdmF0ZSBjbXNDb21wb25lbnRzU2VydmljZTtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlciwgY21zQ29tcG9uZW50c1NlcnZpY2U6IENtc0NvbXBvbmVudHNTZXJ2aWNlKTtcbiAgICBwcml2YXRlIGNtc1JvdXRlRXhpc3RzO1xuICAgIC8qKlxuICAgICAqIENvbnRhaW5zIENtcyBkcml2ZW4gcm91dGluZyBsb2dpYyBpbnRlbmRlZCBmb3IgdXNlIHVzZSBpbiBndWFyZHMsIGVzcGVjaWFsbHkgaW4gY2FuQWN0aXZhdGUgbWV0aG9kLlxuICAgICAqXG4gICAgICogV2lsbCByZXR1cm4gdHJ1ZSwgd2hlbiBsb2dpYyB3b250IGhhdmUgdG8gbW9kaWZ5IHJvdXRpbmcgKHNvIGNhbkFjdGl2YXRlIGNvdWxkIGJlIGVhc2lseSByZXNvbHZlZCB0byB0cnVlKVxuICAgICAqIG9yIHdpbGwgcmV0dXJuIGZhbHNlLCB3aGVuIHJvdXRpbmcgY29uZmlndXJhdGlvbiB3YXMgdXBkYXRlZCBhbmQgcmVkaXJlY3Rpb24gdG8gbmV3bHkgZ2VuZXJhdGVkIHJvdXRlIHdhcyBpbml0aWF0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICAgKiBAcGFyYW0gY3VycmVudFVybFxuICAgICAqL1xuICAgIGhhbmRsZUNtc1JvdXRlc0luR3VhcmQocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBjb21wb25lbnRUeXBlczogc3RyaW5nW10sIGN1cnJlbnRVcmw6IHN0cmluZywgY3VycmVudFBhZ2VMYWJlbDogc3RyaW5nKTogYm9vbGVhbjtcbiAgICBwcml2YXRlIHVwZGF0ZVJvdXRpbmc7XG59XG4iXX0=