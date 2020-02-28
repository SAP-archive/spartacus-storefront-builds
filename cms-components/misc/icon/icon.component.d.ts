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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiaWNvbi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBJY29uTG9hZGVyU2VydmljZSB9IGZyb20gJy4vaWNvbi1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuL2ljb24ubW9kZWwnO1xuLyoqXG4gKlxuICogVGhlIGljb24gY29tcG9uZW50IGNhbiBiZSBhZGRlZCBpbiBkaWZmZXJlbnQgd2F5czpcbiAqXG4gKiBXaXRoIHRoZSBjb21wb25lbnQgc2VsZWN0b3I6XG4gKiBgPGN4LWljb24gdHlwZT1cIlNFQVJDSFwiPjwvY3gtaWNvbj5gXG4gKlxuICogV2l0aCB0aGUgYXR0cmlidXRlIHNlbGVjdG9yOlxuICogYDxzcGFuIGN4SWNvbj1cIlNUQVJcIj48L3NwYW4+YFxuICpcbiAqIEFkZGl0aW9uYWxseSwgY29udGVudCBjYW4gYmUgcHJvamVjdGVkIHRvIHRoZSBpY29uOlxuICpcbiAqIGA8YnV0dG9uIGN4SWNvbj1cIkhBUFBZXCI+aGFwcHkgbGFiZWw8L2J1dHRvbj5gXG4gKlxuICogVGhlIGFib3ZlIGJ1dHRvbiB3b3VsZCBiZWNvbWUgKGJhc2VkIG9uIGEgVEVYVCByZXNvdXJjZSB0eXBlKTpcbiAqIGA8YnV0dG9uPvCfmIpoYXBweSBsYWJlbDwvYnV0dG9uPmBcbiAqIFdoaWxlIHRoZSBjb250ZW50IGlzIHByb2plY3RlZCwgdGhlIGljb24gaXRzZWxmIGRvZXNuJ3QgcmVxdWlyZVxuICogYW4gYWRkaXRpb25hbCBET00gbm9kZSB3aGljaCBpcyBhbiBhZHZhbnRhZ2Ugb3ZlciB0aGUgY29tcG9uZW50IHNlbGVjdG9yLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJY29uQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgaWNvbkxvYWRlcjogSWNvbkxvYWRlclNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyO1xuICAgIC8qKlxuICAgICAqIFRoZSBjeEljb24gZGlyZWN0aXZlIGlzIGJvdW5kIHRvIHRoZSBpY29uIHR5cGUuIFlvdSBjYW4gZmVlZCB0aGUgYElDT05fVFlQRWAgdG9cbiAgICAgKiBhY2NvbXBsaXNoIGEgY29uZmlndXJhYmxlIGJ1dHRvbiBpbiB0aGUgVUkuXG4gICAgICovXG4gICAgc2V0IGN4SWNvbih0eXBlOiBJQ09OX1RZUEUpO1xuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIGlucHV0IHBhcmFtZXRlciBpcyBib3VuZCB0byB0aGUgaWNvbiB0eXBlLiBZb3UgY2FuIGZlZWQgdGhlIGBJQ09OX1RZUEVgIHRvXG4gICAgICogYWNjb21wbGlzaCBhIGNvbmZpZ3VyYWJsZSBidXR0b24gaW4gdGhlIFVJLlxuICAgICAqL1xuICAgIHNldCB0eXBlKHR5cGU6IElDT05fVFlQRSk7XG4gICAgLyoqXG4gICAgICogdGhlIGljb24gcHJvdmlkZXMgYW4gaHRtbCBmcmFnbWVudCB0aGF0IGlzIHVzZWQgdG8gYWRkIFNWRyBvciB0ZXh0IGJhc2VkIGljb25zLlxuICAgICAqL1xuICAgIGljb246IFNhZmVIdG1sO1xuICAgIGNvbnN0cnVjdG9yKGljb25Mb2FkZXI6IEljb25Mb2FkZXJTZXJ2aWNlLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgcmVuZGVyZXI6IFJlbmRlcmVyMik7XG4gICAgcHJvdGVjdGVkIHNldEljb24odHlwZTogSUNPTl9UWVBFKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBzdHlsZSBjbGFzc2VzIGFuZCB0aGUgbGluayByZXNvdXJjZSAoaWYgYXZhaWxhYmUpLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhZGRTdHlsZUNsYXNzZXModHlwZTogSUNPTl9UWVBFKTogdm9pZDtcbn1cbiJdfQ==