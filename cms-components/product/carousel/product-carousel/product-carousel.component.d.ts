import { CmsProductCarouselComponent } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
import { CarouselItem } from '../../../../shared/components/carousel/carousel.model';
import { ProductCarouselService } from '../product-carousel.service';
export declare class ProductCarouselComponent {
    protected component: CmsComponentData<CmsProductCarouselComponent>;
    protected service: ProductCarouselService;
    title$: Observable<string>;
    items$: Observable<CarouselItem[]>;
    constructor(component: CmsComponentData<CmsProductCarouselComponent>, service: ProductCarouselService);
}
