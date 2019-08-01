import { ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { ICON_TYPE } from '../../../cms-components/misc/index';
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
}
