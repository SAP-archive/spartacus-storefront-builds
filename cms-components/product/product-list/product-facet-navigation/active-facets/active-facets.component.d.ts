import { Breadcrumb } from '@spartacus/core';
import { Observable } from 'rxjs/internal/Observable';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/icon.model';
import { FacetList } from '../facet.model';
import { FacetService } from '../services/facet.service';
/**
 * Active facets render the applied facet values as a list of focusable buttons
 * which can be used to remove the applied facet value.
 */
import * as ɵngcc0 from '@angular/core';
export declare class ActiveFacetsComponent {
    protected facetService: FacetService;
    /** Active facets which are applied to the product results. */
    facetList$: Observable<FacetList>;
    /** Configurable icon which is used for the active facet close button */
    closeIcon: ICON_TYPE;
    constructor(facetService: FacetService);
    getLinkParams(facet: Breadcrumb): {
        query: string;
    };
    /**
     * The focus key is used to persist the focus on the facet when the DOM is being
     * recreated. We only apply the focus key for the given facet when there are no
     * facets available. This is a great experience for the keyboard user, who keep the
     * focus on the activated facet all the time.
     */
    getFocusKey(facetList: FacetList, facet: Breadcrumb): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ActiveFacetsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ActiveFacetsComponent, "cx-active-facets", never, { "closeIcon": "closeIcon"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZhY2V0cy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiYWN0aXZlLWZhY2V0cy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnJlYWRjcnVtYiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9pbnRlcm5hbC9PYnNlcnZhYmxlJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLm1vZGVsJztcbmltcG9ydCB7IEZhY2V0TGlzdCB9IGZyb20gJy4uL2ZhY2V0Lm1vZGVsJztcbmltcG9ydCB7IEZhY2V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZhY2V0LnNlcnZpY2UnO1xuLyoqXG4gKiBBY3RpdmUgZmFjZXRzIHJlbmRlciB0aGUgYXBwbGllZCBmYWNldCB2YWx1ZXMgYXMgYSBsaXN0IG9mIGZvY3VzYWJsZSBidXR0b25zXG4gKiB3aGljaCBjYW4gYmUgdXNlZCB0byByZW1vdmUgdGhlIGFwcGxpZWQgZmFjZXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFjdGl2ZUZhY2V0c0NvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIGZhY2V0U2VydmljZTogRmFjZXRTZXJ2aWNlO1xuICAgIC8qKiBBY3RpdmUgZmFjZXRzIHdoaWNoIGFyZSBhcHBsaWVkIHRvIHRoZSBwcm9kdWN0IHJlc3VsdHMuICovXG4gICAgZmFjZXRMaXN0JDogT2JzZXJ2YWJsZTxGYWNldExpc3Q+O1xuICAgIC8qKiBDb25maWd1cmFibGUgaWNvbiB3aGljaCBpcyB1c2VkIGZvciB0aGUgYWN0aXZlIGZhY2V0IGNsb3NlIGJ1dHRvbiAqL1xuICAgIGNsb3NlSWNvbjogSUNPTl9UWVBFO1xuICAgIGNvbnN0cnVjdG9yKGZhY2V0U2VydmljZTogRmFjZXRTZXJ2aWNlKTtcbiAgICBnZXRMaW5rUGFyYW1zKGZhY2V0OiBCcmVhZGNydW1iKToge1xuICAgICAgICBxdWVyeTogc3RyaW5nO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIGZvY3VzIGtleSBpcyB1c2VkIHRvIHBlcnNpc3QgdGhlIGZvY3VzIG9uIHRoZSBmYWNldCB3aGVuIHRoZSBET00gaXMgYmVpbmdcbiAgICAgKiByZWNyZWF0ZWQuIFdlIG9ubHkgYXBwbHkgdGhlIGZvY3VzIGtleSBmb3IgdGhlIGdpdmVuIGZhY2V0IHdoZW4gdGhlcmUgYXJlIG5vXG4gICAgICogZmFjZXRzIGF2YWlsYWJsZS4gVGhpcyBpcyBhIGdyZWF0IGV4cGVyaWVuY2UgZm9yIHRoZSBrZXlib2FyZCB1c2VyLCB3aG8ga2VlcCB0aGVcbiAgICAgKiBmb2N1cyBvbiB0aGUgYWN0aXZhdGVkIGZhY2V0IGFsbCB0aGUgdGltZS5cbiAgICAgKi9cbiAgICBnZXRGb2N1c0tleShmYWNldExpc3Q6IEZhY2V0TGlzdCwgZmFjZXQ6IEJyZWFkY3J1bWIpOiBzdHJpbmc7XG59XG4iXX0=