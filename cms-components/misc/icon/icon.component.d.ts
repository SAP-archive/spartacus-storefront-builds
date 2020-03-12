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
 *
 * While the content is projected, the icon itself doesn't require an
 * additional DOM node which is an advantage over the component selector.
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
    /**
     * Maintains the applied style classes so we can remove them when the
     * icon type changes at run time.
     */
    protected styleClasses: string[];
    constructor(iconLoader: IconLoaderService, elementRef: ElementRef<HTMLElement>, renderer: Renderer2);
    protected setIcon(type: ICON_TYPE): void;
    /**
     * Adds the style classes and the link resource (if available).
     */
    protected addStyleClasses(type: ICON_TYPE): void;
    protected get host(): HTMLElement;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IconComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IconComponent, "cx-icon,[cxIcon]", never, {
    "cxIcon": "cxIcon";
    "type": "type";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiaWNvbi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBJY29uTG9hZGVyU2VydmljZSB9IGZyb20gJy4vaWNvbi1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuL2ljb24ubW9kZWwnO1xuLyoqXG4gKlxuICogVGhlIGljb24gY29tcG9uZW50IGNhbiBiZSBhZGRlZCBpbiBkaWZmZXJlbnQgd2F5czpcbiAqXG4gKiBXaXRoIHRoZSBjb21wb25lbnQgc2VsZWN0b3I6XG4gKiBgPGN4LWljb24gdHlwZT1cIlNFQVJDSFwiPjwvY3gtaWNvbj5gXG4gKlxuICogV2l0aCB0aGUgYXR0cmlidXRlIHNlbGVjdG9yOlxuICogYDxzcGFuIGN4SWNvbj1cIlNUQVJcIj48L3NwYW4+YFxuICpcbiAqIEFkZGl0aW9uYWxseSwgY29udGVudCBjYW4gYmUgcHJvamVjdGVkIHRvIHRoZSBpY29uOlxuICpcbiAqIGA8YnV0dG9uIGN4SWNvbj1cIkhBUFBZXCI+aGFwcHkgbGFiZWw8L2J1dHRvbj5gXG4gKlxuICogVGhlIGFib3ZlIGJ1dHRvbiB3b3VsZCBiZWNvbWUgKGJhc2VkIG9uIGEgVEVYVCByZXNvdXJjZSB0eXBlKTpcbiAqIGA8YnV0dG9uPvCfmIpoYXBweSBsYWJlbDwvYnV0dG9uPmBcbiAqXG4gKiBXaGlsZSB0aGUgY29udGVudCBpcyBwcm9qZWN0ZWQsIHRoZSBpY29uIGl0c2VsZiBkb2Vzbid0IHJlcXVpcmUgYW5cbiAqIGFkZGl0aW9uYWwgRE9NIG5vZGUgd2hpY2ggaXMgYW4gYWR2YW50YWdlIG92ZXIgdGhlIGNvbXBvbmVudCBzZWxlY3Rvci5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSWNvbkNvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIGljb25Mb2FkZXI6IEljb25Mb2FkZXJTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgICAvKipcbiAgICAgKiBUaGUgY3hJY29uIGRpcmVjdGl2ZSBpcyBib3VuZCB0byB0aGUgaWNvbiB0eXBlLiBZb3UgY2FuIGZlZWQgdGhlIGBJQ09OX1RZUEVgIHRvXG4gICAgICogYWNjb21wbGlzaCBhIGNvbmZpZ3VyYWJsZSBidXR0b24gaW4gdGhlIFVJLlxuICAgICAqL1xuICAgIHNldCBjeEljb24odHlwZTogSUNPTl9UWVBFKTtcbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBpbnB1dCBwYXJhbWV0ZXIgaXMgYm91bmQgdG8gdGhlIGljb24gdHlwZS4gWW91IGNhbiBmZWVkIHRoZSBgSUNPTl9UWVBFYCB0b1xuICAgICAqIGFjY29tcGxpc2ggYSBjb25maWd1cmFibGUgYnV0dG9uIGluIHRoZSBVSS5cbiAgICAgKi9cbiAgICBzZXQgdHlwZSh0eXBlOiBJQ09OX1RZUEUpO1xuICAgIC8qKlxuICAgICAqIHRoZSBpY29uIHByb3ZpZGVzIGFuIGh0bWwgZnJhZ21lbnQgdGhhdCBpcyB1c2VkIHRvIGFkZCBTVkcgb3IgdGV4dCBiYXNlZCBpY29ucy5cbiAgICAgKi9cbiAgICBpY29uOiBTYWZlSHRtbDtcbiAgICAvKipcbiAgICAgKiBNYWludGFpbnMgdGhlIGFwcGxpZWQgc3R5bGUgY2xhc3NlcyBzbyB3ZSBjYW4gcmVtb3ZlIHRoZW0gd2hlbiB0aGVcbiAgICAgKiBpY29uIHR5cGUgY2hhbmdlcyBhdCBydW4gdGltZS5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc3R5bGVDbGFzc2VzOiBzdHJpbmdbXTtcbiAgICBjb25zdHJ1Y3RvcihpY29uTG9hZGVyOiBJY29uTG9hZGVyU2VydmljZSwgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIHJlbmRlcmVyOiBSZW5kZXJlcjIpO1xuICAgIHByb3RlY3RlZCBzZXRJY29uKHR5cGU6IElDT05fVFlQRSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgc3R5bGUgY2xhc3NlcyBhbmQgdGhlIGxpbmsgcmVzb3VyY2UgKGlmIGF2YWlsYWJsZSkuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZFN0eWxlQ2xhc3Nlcyh0eXBlOiBJQ09OX1RZUEUpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBnZXQgaG9zdCgpOiBIVE1MRWxlbWVudDtcbn1cbiJdfQ==