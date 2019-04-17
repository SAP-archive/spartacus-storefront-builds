import { ProductService, Product, CmsProductCarouselComponent } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
export declare class ProductCarouselService {
    protected component: CmsComponentData<CmsProductCarouselComponent>;
    private productService;
    MAX_WIDTH: number;
    MAX_ITEM_SIZE: number;
    SPEED: number;
    private items$;
    private itemSize$;
    private activeItem$;
    private activeItemWithDelay$;
    private title$;
    constructor(component: CmsComponentData<CmsProductCarouselComponent>, productService: ProductService);
    getActiveItem(): Observable<number>;
    getActiveItemWithDelay(): Observable<number>;
    getTitle(): Observable<string>;
    setTitle(): void;
    getItems(): Observable<Observable<Product>[]>;
    getItemSize(): Observable<number>;
    /**
     * Maps the item codes from CMS component to an array of `Product` observables.
     */
    setItems(): void;
    /**
     * The number of items shown in the carousel can be calculated
     * the standard implemenattions uses the element size to calculate
     * the items that fit in the carousel.
     * This method is called in `ngOnInit`.
     */
    setItemSize(window: any, nativeElement: any): void;
    setItemAsActive(newActiveItem: number): void;
    setPreviousItemAsActive(): void;
    setNextItemAsActive(): void;
    private setItem;
    private getDelayValue;
}
