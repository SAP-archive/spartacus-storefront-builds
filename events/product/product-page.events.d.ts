import { Category, Price } from '@spartacus/core';
/**
 * Indicates that a user visited a product details page.
 */
export declare class ProductDetailsPageEvent {
    categories?: Category[];
    code?: string;
    name?: string;
    price?: Price;
}
/**
 * Indicates that a user visited a category page.
 */
export declare class CategoryPageResultsEvent {
    categoryCode: string;
    categoryName: string;
}
/**
 * Indicates that the a user visited the search results page,
 * and that the search results have been retrieved.
 */
export declare class SearchPageResultsEvent {
    searchTerm: string;
    numberOfResults: Number;
}
