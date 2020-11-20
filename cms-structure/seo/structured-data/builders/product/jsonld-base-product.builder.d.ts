import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { JsonLdBuilder } from '../schema.interface';
/**
 * Builds the basic structured data for the product, see https://schema.org/product.
 * This builder includes data for sku number, name, description, brand and main image.
 */
export declare class JsonLdBaseProductBuilder implements JsonLdBuilder<Product> {
    build(product: Product): Observable<any>;
    /**
     * Returns the product sku, name and description.
     */
    private getProductBase;
    /**
     * Returns the image object with the main product image url.
     *
     * If the image is not available, an empty object is returned.
     */
    protected getProductImage(product: Product): {
        image?: string;
    };
    /**
     * Returns the brand object with the product manufacturer.
     *
     * If the brand is not available, an empty object is returned.
     */
    protected getProductBrand(product: Product): {
        brand?: string;
    };
}
