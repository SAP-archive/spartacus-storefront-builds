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
     * recreated. We only apply the focus key for the given _active_ facet when there
     * the original facets is not available. This happens for non multi-valued facets.
     *
     * With this approach, the we keep the focus, either at the facet list or on the
     * active facets.
     */
    getFocusKey(facetList: FacetList, facet: Breadcrumb): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ActiveFacetsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ActiveFacetsComponent, "cx-active-facets", never, { "closeIcon": "closeIcon"; }, {}, never, never>;
}

//# sourceMappingURL=active-facets.component.d.ts.map