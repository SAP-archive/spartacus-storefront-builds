import { ProductReferenceService, ProductService, SemanticPathService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CarouselItem } from '../../../shared/components/carousel/carousel.model';
export declare class ProductCarouselService {
    protected productService: ProductService;
    protected referenceService: ProductReferenceService;
    protected semanticPathService: SemanticPathService;
    constructor(productService: ProductService, referenceService: ProductReferenceService, semanticPathService: SemanticPathService);
    /**
     * Loads the product data and converts it `CarouselItem`.
     */
    loadProduct(code: string): Observable<CarouselItem>;
    getProductReferences(code: string, referenceType: string, displayTitle: boolean, displayProductPrices: boolean): Observable<CarouselItem[]>;
    /**
     * Converts the product to a generic CarouselItem
     */
    private convertProduct;
}
