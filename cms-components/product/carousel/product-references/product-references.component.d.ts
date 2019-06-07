import { CmsProductReferencesComponent } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
import { CurrentProductService } from '../../current-product.service';
import { ProductCarouselService } from '../product-carousel.service';
export declare class ProductReferencesComponent {
    protected component: CmsComponentData<CmsProductReferencesComponent>;
    protected service: ProductCarouselService;
    protected current: CurrentProductService;
    title$: Observable<string>;
    items$: Observable<import("../../../../shared/components/carousel/carousel.model").CarouselItem[]>;
    constructor(component: CmsComponentData<CmsProductReferencesComponent>, service: ProductCarouselService, current: CurrentProductService);
    readonly productCode$: Observable<string>;
}
