import { ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { ICON_TYPE } from '../../../cms-components/misc/index';
import * as ɵngcc0 from '@angular/core';
export declare class StarRatingComponent implements OnInit {
    protected el: ElementRef;
    protected renderer?: Renderer2;
    /**
     * The rating component can be used in disabled mode,
     * so that the interation is not provided.
     */
    disabled: boolean;
    /**
     * The rating will be used to render some colorful stars in the UI.
     */
    rating: number;
    /**
     * Emits the given rating when the user clicks on a star.
     */
    change: EventEmitter<number>;
    private initialRate;
    iconTypes: typeof ICON_TYPE;
    constructor(el: ElementRef, renderer: Renderer2);
    /**
     * @deprecated since version 1.0.2
     *  Use constructor(el: ElementRef, renderer: Renderer2) instead
     *
     *  TODO(issue:#3803) deprecated since 1.0.2
     */
    constructor(el: ElementRef);
    ngOnInit(): void;
    setRate(value: number, force?: boolean): void;
    saveRate(rating: number): void;
    setRateOnEvent(event: any, rating: number): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StarRatingComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StarRatingComponent, "cx-star-rating", never, {
    "disabled": "disabled";
    "rating": "rating";
}, {
    "change": "change";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci1yYXRpbmcuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInN0YXItcmF0aW5nLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2luZGV4JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFN0YXJSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb3RlY3RlZCBlbDogRWxlbWVudFJlZjtcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI/OiBSZW5kZXJlcjI7XG4gICAgLyoqXG4gICAgICogVGhlIHJhdGluZyBjb21wb25lbnQgY2FuIGJlIHVzZWQgaW4gZGlzYWJsZWQgbW9kZSxcbiAgICAgKiBzbyB0aGF0IHRoZSBpbnRlcmF0aW9uIGlzIG5vdCBwcm92aWRlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgcmF0aW5nIHdpbGwgYmUgdXNlZCB0byByZW5kZXIgc29tZSBjb2xvcmZ1bCBzdGFycyBpbiB0aGUgVUkuXG4gICAgICovXG4gICAgcmF0aW5nOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogRW1pdHMgdGhlIGdpdmVuIHJhdGluZyB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBhIHN0YXIuXG4gICAgICovXG4gICAgY2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcbiAgICBwcml2YXRlIGluaXRpYWxSYXRlO1xuICAgIGljb25UeXBlczogdHlwZW9mIElDT05fVFlQRTtcbiAgICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMik7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjAuMlxuICAgICAqICBVc2UgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIGluc3RlYWRcbiAgICAgKlxuICAgICAqICBUT0RPKGlzc3VlOiMzODAzKSBkZXByZWNhdGVkIHNpbmNlIDEuMC4yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgc2V0UmF0ZSh2YWx1ZTogbnVtYmVyLCBmb3JjZT86IGJvb2xlYW4pOiB2b2lkO1xuICAgIHNhdmVSYXRlKHJhdGluZzogbnVtYmVyKTogdm9pZDtcbiAgICBzZXRSYXRlT25FdmVudChldmVudDogYW55LCByYXRpbmc6IG51bWJlcik6IHZvaWQ7XG59XG4iXX0=