import { CmsProductReferencesComponent, ProductReference, ProductReferenceService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
export declare class ProductReferencesService {
    protected component: CmsComponentData<CmsProductReferencesComponent>;
    private referenceService;
    private routerService;
    private title$;
    private items$;
    private displayProductTitles$;
    private displayProductPrices$;
    constructor(component: CmsComponentData<CmsProductReferencesComponent>, referenceService: ProductReferenceService, routerService: RoutingService);
    getTitle(): Observable<string>;
    fetchTitle(): void;
    getDisplayProductTitles(): Observable<boolean>;
    fetchDisplayProductTitles(): void;
    getDisplayProductPrices(): Observable<boolean>;
    fetchDisplayProductPrices(): void;
    getReferenceType(): Observable<string>;
    getProductCode(): Observable<string>;
    getReferenceList(): Observable<ProductReference[]>;
    setReferenceList(pageSize?: number): void;
}
