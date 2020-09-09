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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StarRatingComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StarRatingComponent, "cx-star-rating", never, { "disabled": "disabled"; "rating": "rating"; }, { "change": "change"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci1yYXRpbmcuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInN0YXItcmF0aW5nLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3RhclJhdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmO1xuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyO1xuICAgIC8qKlxuICAgICAqIFRoZSByYXRpbmcgY29tcG9uZW50IGNhbiBiZSB1c2VkIGluIGRpc2FibGVkIG1vZGUsXG4gICAgICogc28gdGhhdCB0aGUgaW50ZXJhdGlvbiBpcyBub3QgcHJvdmlkZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIHJhdGluZyB3aWxsIGJlIHVzZWQgdG8gcmVuZGVyIHNvbWUgY29sb3JmdWwgc3RhcnMgaW4gdGhlIFVJLlxuICAgICAqL1xuICAgIHJhdGluZzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEVtaXRzIHRoZSBnaXZlbiByYXRpbmcgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gYSBzdGFyLlxuICAgICAqL1xuICAgIGNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XG4gICAgcHJpdmF0ZSBpbml0aWFsUmF0ZTtcbiAgICBpY29uVHlwZXM6IHR5cGVvZiBJQ09OX1RZUEU7XG4gICAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgc2V0UmF0ZSh2YWx1ZTogbnVtYmVyLCBmb3JjZT86IGJvb2xlYW4pOiB2b2lkO1xuICAgIHNhdmVSYXRlKHJhdGluZzogbnVtYmVyKTogdm9pZDtcbiAgICBzZXRSYXRlT25FdmVudChldmVudDogYW55LCByYXRpbmc6IG51bWJlcik6IHZvaWQ7XG59XG4iXX0=