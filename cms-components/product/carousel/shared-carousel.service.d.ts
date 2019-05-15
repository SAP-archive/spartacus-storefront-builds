import { Observable } from 'rxjs';
export declare class SharedCarouselService {
    MAX_WIDTH: number;
    MAX_ITEM_SIZE: number;
    SPEED: number;
    private itemSize$;
    private activeItem$;
    private activeItemWithDelay$;
    constructor();
    getActiveItem(): Observable<number>;
    getActiveItemWithDelay(): Observable<number>;
    getItemSize(): Observable<number>;
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
