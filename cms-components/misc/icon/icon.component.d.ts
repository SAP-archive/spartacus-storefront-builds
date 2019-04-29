import { ElementRef, OnChanges, Renderer2 } from '@angular/core';
import { IconLoaderService } from './icon-loader.service';
import { ICON_TYPES } from './icon.config';
export declare class IconComponent implements OnChanges {
    private iconLoader;
    protected renderer: Renderer2;
    protected hostElement: ElementRef;
    /**
     * Keeps the given style classes so that we can
     * clean them up when the icon changes
     */
    private iconStyleClasses;
    /**
     * The type of the icon which maps to the icon link
     * in the svg icon sprite.
     */
    type: ICON_TYPES | string;
    constructor(iconLoader: IconLoaderService, renderer: Renderer2, hostElement: ElementRef);
    ngOnChanges(): void;
    readonly useSvg: boolean;
    readonly path: string;
    private addStyleClasses;
    private clearStyleClasses;
}
