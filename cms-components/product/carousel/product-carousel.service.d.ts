import { ProductService, SemanticPathService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ProductCarouselItem } from './product-carousel.model';
import * as ɵngcc0 from '@angular/core';
export declare class ProductCarouselService {
    protected productService: ProductService;
    protected semanticPathService: SemanticPathService;
    constructor(productService: ProductService, semanticPathService: SemanticPathService);
    /**
     * Loads the product data and converts it `CarouselItem`.
     */
    loadProduct(code: string): Observable<ProductCarouselItem>;
    /**
     * Converts the product to a generic CarouselItem
     */
    private convertProduct;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductCarouselService, never>;
}

//# sourceMappingURL=product-carousel.service.d.ts.map