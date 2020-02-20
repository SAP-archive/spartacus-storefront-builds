import { CmsProductReferencesComponent, Product, ProductReferenceService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
import { CurrentProductService } from '../../current-product.service';
import * as ɵngcc0 from '@angular/core';
export declare class ProductReferencesComponent {
    protected component: CmsComponentData<CmsProductReferencesComponent>;
    protected current: CurrentProductService;
    protected referenceService: ProductReferenceService;
    /**
     * returns an Obervable string for the title
     */
    title$: Observable<string>;
    private currentProductCode$;
    /**
     * Obervable with an Array of Observables. This is done, so that
     * the component UI could consider to lazy load the UI components when they're
     * in the viewpoint.
     */
    items$: Observable<Observable<Product>[]>;
    constructor(component: CmsComponentData<CmsProductReferencesComponent>, current: CurrentProductService, referenceService: ProductReferenceService);
    private getProductReferences;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductReferencesComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductReferencesComponent, "cx-product-references", never, {}, {}, never>;
}

//# sourceMappingURL=product-references.component.d.ts.map