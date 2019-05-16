import { ElementRef, OnInit } from '@angular/core';
import { IconLoaderService } from './icon-loader.service';
import { ICON_TYPE } from './icon.model';
export declare class IconComponent implements OnInit {
    protected iconLoader: IconLoaderService;
    protected elementRef: ElementRef<HTMLElement>;
    /**
     * The type of the icon which maps to the icon link
     * in the svg icon sprite.
     */
    type: ICON_TYPE;
    /**
     * Keeps the given style classes so that we can
     * clean them up when the icon changes
     */
    styleClasses: string;
    private staticStyleClasses;
    constructor(iconLoader: IconLoaderService, elementRef: ElementRef<HTMLElement>);
    ngOnInit(): void;
    /**
     * Indicates whether the icon is configured to use SVG or not.
     */
    readonly useSvg: boolean;
    /**
     * Returns the path to the svg symbol. The path could include an
     * external URL to an svg (sprite) file, but can also reference
     * an existing SVG symbol in the DOM.
     */
    readonly svgPath: string;
    /**
     * Adds the style classes and the link resource (if availabe).
     */
    private addStyleClasses;
}
