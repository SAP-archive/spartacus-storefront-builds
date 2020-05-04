import { Breadcrumb } from '@spartacus/core';
import { Observable } from 'rxjs';
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
        [key: string]: string;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZhY2V0cy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiYWN0aXZlLWZhY2V0cy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnJlYWRjcnVtYiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5pbXBvcnQgeyBGYWNldExpc3QgfSBmcm9tICcuLi9mYWNldC5tb2RlbCc7XG5pbXBvcnQgeyBGYWNldFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mYWNldC5zZXJ2aWNlJztcbi8qKlxuICogQWN0aXZlIGZhY2V0cyByZW5kZXIgdGhlIGFwcGxpZWQgZmFjZXQgdmFsdWVzIGFzIGEgbGlzdCBvZiBmb2N1c2FibGUgYnV0dG9uc1xuICogd2hpY2ggY2FuIGJlIHVzZWQgdG8gcmVtb3ZlIHRoZSBhcHBsaWVkIGZhY2V0IHZhbHVlLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBY3RpdmVGYWNldHNDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCBmYWNldFNlcnZpY2U6IEZhY2V0U2VydmljZTtcbiAgICAvKiogQWN0aXZlIGZhY2V0cyB3aGljaCBhcmUgYXBwbGllZCB0byB0aGUgcHJvZHVjdCByZXN1bHRzLiAqL1xuICAgIGZhY2V0TGlzdCQ6IE9ic2VydmFibGU8RmFjZXRMaXN0PjtcbiAgICAvKiogQ29uZmlndXJhYmxlIGljb24gd2hpY2ggaXMgdXNlZCBmb3IgdGhlIGFjdGl2ZSBmYWNldCBjbG9zZSBidXR0b24gKi9cbiAgICBjbG9zZUljb246IElDT05fVFlQRTtcbiAgICBjb25zdHJ1Y3RvcihmYWNldFNlcnZpY2U6IEZhY2V0U2VydmljZSk7XG4gICAgZ2V0TGlua1BhcmFtcyhmYWNldDogQnJlYWRjcnVtYik6IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIGZvY3VzIGtleSBpcyB1c2VkIHRvIHBlcnNpc3QgdGhlIGZvY3VzIG9uIHRoZSBmYWNldCB3aGVuIHRoZSBET00gaXMgYmVpbmdcbiAgICAgKiByZWNyZWF0ZWQuIFdlIG9ubHkgYXBwbHkgdGhlIGZvY3VzIGtleSBmb3IgdGhlIGdpdmVuIGZhY2V0IHdoZW4gdGhlcmUgYXJlIG5vXG4gICAgICogZmFjZXRzIGF2YWlsYWJsZS4gVGhpcyBpcyBhIGdyZWF0IGV4cGVyaWVuY2UgZm9yIHRoZSBrZXlib2FyZCB1c2VyLCB3aG8ga2VlcCB0aGVcbiAgICAgKiBmb2N1cyBvbiB0aGUgYWN0aXZhdGVkIGZhY2V0IGFsbCB0aGUgdGltZS5cbiAgICAgKi9cbiAgICBnZXRGb2N1c0tleShmYWNldExpc3Q6IEZhY2V0TGlzdCwgZmFjZXQ6IEJyZWFkY3J1bWIpOiBzdHJpbmc7XG59XG4iXX0=