import { ElementRef } from '@angular/core';
import { IconLoaderService } from './icon-loader.service';
import { ICON_TYPE } from './icon.model';
export declare class IconComponent {
    protected iconLoader: IconLoaderService;
    protected elementRef: ElementRef<HTMLElement>;
    /**
     * The type of the icon which maps to the icon link
     * in the svg icon sprite.
     */
    _type: ICON_TYPE;
    type: ICON_TYPE;
    /**
     * Keeps the given style classes so that we can
     * clean them up when the icon changes
     */
    styleClasses: string;
    /**
     * Style class names from the host element are taken into account
     * when classes are set dynamically.
     */
    private staticStyleClasses;
    constructor(iconLoader: IconLoaderService, elementRef: ElementRef<HTMLElement>);
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
