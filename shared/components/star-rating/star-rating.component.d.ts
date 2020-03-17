import { ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { ICON_TYPE } from '../../../cms-components/misc/index';
import * as ɵngcc0 from '@angular/core';
export declare class StarRatingComponent implements OnInit {
    protected el: ElementRef;
    protected renderer: Renderer2;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci1yYXRpbmcuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInN0YXItcmF0aW5nLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTdGFyUmF0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWY7XG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gICAgLyoqXG4gICAgICogVGhlIHJhdGluZyBjb21wb25lbnQgY2FuIGJlIHVzZWQgaW4gZGlzYWJsZWQgbW9kZSxcbiAgICAgKiBzbyB0aGF0IHRoZSBpbnRlcmF0aW9uIGlzIG5vdCBwcm92aWRlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgcmF0aW5nIHdpbGwgYmUgdXNlZCB0byByZW5kZXIgc29tZSBjb2xvcmZ1bCBzdGFycyBpbiB0aGUgVUkuXG4gICAgICovXG4gICAgcmF0aW5nOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogRW1pdHMgdGhlIGdpdmVuIHJhdGluZyB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBhIHN0YXIuXG4gICAgICovXG4gICAgY2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcbiAgICBwcml2YXRlIGluaXRpYWxSYXRlO1xuICAgIGljb25UeXBlczogdHlwZW9mIElDT05fVFlQRTtcbiAgICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBzZXRSYXRlKHZhbHVlOiBudW1iZXIsIGZvcmNlPzogYm9vbGVhbik6IHZvaWQ7XG4gICAgc2F2ZVJhdGUocmF0aW5nOiBudW1iZXIpOiB2b2lkO1xuICAgIHNldFJhdGVPbkV2ZW50KGV2ZW50OiBhbnksIHJhdGluZzogbnVtYmVyKTogdm9pZDtcbn1cbiJdfQ==