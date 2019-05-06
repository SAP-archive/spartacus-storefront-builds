import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { ICON_TYPES } from '../../../cms-components/misc/index';
export declare class StarRatingComponent implements OnInit {
    private el;
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
    iconTypes: typeof ICON_TYPES;
    constructor(el: ElementRef);
    ngOnInit(): void;
    setRate(value: number, force?: boolean): void;
    saveRate(rating: number): void;
}
