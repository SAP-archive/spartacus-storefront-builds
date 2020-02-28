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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StarRatingComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StarRatingComponent, "cx-star-rating", never, {
    "disabled": "disabled";
    "rating": "rating";
}, {
    "change": "change";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci1yYXRpbmcuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInN0YXItcmF0aW5nLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3RhclJhdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmO1xuICAgIHByb3RlY3RlZCByZW5kZXJlcj86IFJlbmRlcmVyMjtcbiAgICAvKipcbiAgICAgKiBUaGUgcmF0aW5nIGNvbXBvbmVudCBjYW4gYmUgdXNlZCBpbiBkaXNhYmxlZCBtb2RlLFxuICAgICAqIHNvIHRoYXQgdGhlIGludGVyYXRpb24gaXMgbm90IHByb3ZpZGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSByYXRpbmcgd2lsbCBiZSB1c2VkIHRvIHJlbmRlciBzb21lIGNvbG9yZnVsIHN0YXJzIGluIHRoZSBVSS5cbiAgICAgKi9cbiAgICByYXRpbmc6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBFbWl0cyB0aGUgZ2l2ZW4gcmF0aW5nIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGEgc3Rhci5cbiAgICAgKi9cbiAgICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xuICAgIHByaXZhdGUgaW5pdGlhbFJhdGU7XG4gICAgaWNvblR5cGVzOiB0eXBlb2YgSUNPTl9UWVBFO1xuICAgIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuMC4yXG4gICAgICogIFVzZSBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikgaW5zdGVhZFxuICAgICAqXG4gICAgICogIFRPRE8oaXNzdWU6IzM4MDMpIGRlcHJlY2F0ZWQgc2luY2UgMS4wLjJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBzZXRSYXRlKHZhbHVlOiBudW1iZXIsIGZvcmNlPzogYm9vbGVhbik6IHZvaWQ7XG4gICAgc2F2ZVJhdGUocmF0aW5nOiBudW1iZXIpOiB2b2lkO1xufVxuIl19