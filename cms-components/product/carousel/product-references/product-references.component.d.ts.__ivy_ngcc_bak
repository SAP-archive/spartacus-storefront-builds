import { CmsProductReferencesComponent, Product, ProductReferenceService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
import { CurrentProductService } from '../../current-product.service';
export declare class ProductReferencesComponent {
    protected cmsComponentData: CmsComponentData<CmsProductReferencesComponent>;
    protected currentProductService: CurrentProductService;
    protected productReferenceService: ProductReferenceService;
    constructor(cmsComponentData: CmsComponentData<CmsProductReferencesComponent>, currentProductService: CurrentProductService, productReferenceService: ProductReferenceService);
    protected get componentData$(): Observable<CmsProductReferencesComponent>;
    /**
     * Returns an Observable String for the product code
     */
    protected get productCode$(): Observable<string>;
    /**
     * Returns an Observable String for the title
     */
    get title$(): Observable<string>;
    /**
     * Observable with an Array of Observables. This is done so that
     * the component UI could consider to lazy load the UI components when they're
     * in the viewpoint.
     */
    items$: Observable<Observable<Product>[]>;
    /**
     * Returns an observable for product references
     */
    private getProductReferences;
}
