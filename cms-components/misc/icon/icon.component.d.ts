import { ElementRef, Renderer2 } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { IconLoaderService } from './icon-loader.service';
import { ICON_TYPE } from './icon.model';
/**
 *
 * The icon component can be added in different ways:
 *
 * With the component selector:
 * `<cx-icon type="SEARCH"></cx-icon>`
 *
 * With the attribute selector:
 * `<span cxIcon="STAR"></span>`
 *
 * Additionally, content can be projected to the icon:
 *
 * `<button cxIcon="HAPPY">happy label</button>`
 *
 * The above button would become (based on a TEXT resource type):
 * `<button>😊happy label</button>`
 * While the content is projected, the icon itself doesn't require
 * an additional DOM node which is an advantage over the component selector.
 */
import * as ɵngcc0 from '@angular/core';
export declare class IconComponent {
    protected iconLoader: IconLoaderService;
    protected elementRef: ElementRef<HTMLElement>;
    protected renderer: Renderer2;
    /**
     * The cxIcon directive is bound to the icon type. You can feed the `ICON_TYPE` to
     * accomplish a configurable button in the UI.
     */
    set cxIcon(type: ICON_TYPE);
    /**
     * The type input parameter is bound to the icon type. You can feed the `ICON_TYPE` to
     * accomplish a configurable button in the UI.
     */
    set type(type: ICON_TYPE);
    /**
     * the icon provides an html fragment that is used to add SVG or text based icons.
     */
    icon: SafeHtml;
    constructor(iconLoader: IconLoaderService, elementRef: ElementRef<HTMLElement>, renderer: Renderer2);
    protected setIcon(type: ICON_TYPE): void;
    /**
     * Adds the style classes and the link resource (if availabe).
     */
    protected addStyleClasses(type: ICON_TYPE): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IconComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IconComponent, "cx-icon,[cxIcon]", never, {
    "cxIcon": "cxIcon";
    "type": "type";
}, {}, never>;
}

//# sourceMappingURL=icon.component.d.ts.map