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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiaWNvbi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSWNvbkxvYWRlclNlcnZpY2UgfSBmcm9tICcuL2ljb24tbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi9pY29uLm1vZGVsJztcbi8qKlxuICpcbiAqIFRoZSBpY29uIGNvbXBvbmVudCBjYW4gYmUgYWRkZWQgaW4gZGlmZmVyZW50IHdheXM6XG4gKlxuICogV2l0aCB0aGUgY29tcG9uZW50IHNlbGVjdG9yOlxuICogYDxjeC1pY29uIHR5cGU9XCJTRUFSQ0hcIj48L2N4LWljb24+YFxuICpcbiAqIFdpdGggdGhlIGF0dHJpYnV0ZSBzZWxlY3RvcjpcbiAqIGA8c3BhbiBjeEljb249XCJTVEFSXCI+PC9zcGFuPmBcbiAqXG4gKiBBZGRpdGlvbmFsbHksIGNvbnRlbnQgY2FuIGJlIHByb2plY3RlZCB0byB0aGUgaWNvbjpcbiAqXG4gKiBgPGJ1dHRvbiBjeEljb249XCJIQVBQWVwiPmhhcHB5IGxhYmVsPC9idXR0b24+YFxuICpcbiAqIFRoZSBhYm92ZSBidXR0b24gd291bGQgYmVjb21lIChiYXNlZCBvbiBhIFRFWFQgcmVzb3VyY2UgdHlwZSk6XG4gKiBgPGJ1dHRvbj7wn5iKaGFwcHkgbGFiZWw8L2J1dHRvbj5gXG4gKlxuICogV2hpbGUgdGhlIGNvbnRlbnQgaXMgcHJvamVjdGVkLCB0aGUgaWNvbiBpdHNlbGYgZG9lc24ndCByZXF1aXJlIGFuXG4gKiBhZGRpdGlvbmFsIERPTSBub2RlIHdoaWNoIGlzIGFuIGFkdmFudGFnZSBvdmVyIHRoZSBjb21wb25lbnQgc2VsZWN0b3IuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEljb25Db21wb25lbnQge1xuICAgIHByb3RlY3RlZCBpY29uTG9hZGVyOiBJY29uTG9hZGVyU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gICAgLyoqXG4gICAgICogVGhlIGN4SWNvbiBkaXJlY3RpdmUgaXMgYm91bmQgdG8gdGhlIGljb24gdHlwZS4gWW91IGNhbiBmZWVkIHRoZSBgSUNPTl9UWVBFYCB0b1xuICAgICAqIGFjY29tcGxpc2ggYSBjb25maWd1cmFibGUgYnV0dG9uIGluIHRoZSBVSS5cbiAgICAgKi9cbiAgICBzZXQgY3hJY29uKHR5cGU6IElDT05fVFlQRSk7XG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgaW5wdXQgcGFyYW1ldGVyIGlzIGJvdW5kIHRvIHRoZSBpY29uIHR5cGUuIFlvdSBjYW4gZmVlZCB0aGUgYElDT05fVFlQRWAgdG9cbiAgICAgKiBhY2NvbXBsaXNoIGEgY29uZmlndXJhYmxlIGJ1dHRvbiBpbiB0aGUgVUkuXG4gICAgICovXG4gICAgc2V0IHR5cGUodHlwZTogSUNPTl9UWVBFKTtcbiAgICAvKipcbiAgICAgKiB0aGUgaWNvbiBwcm92aWRlcyBhbiBodG1sIGZyYWdtZW50IHRoYXQgaXMgdXNlZCB0byBhZGQgU1ZHIG9yIHRleHQgYmFzZWQgaWNvbnMuXG4gICAgICovXG4gICAgaWNvbjogU2FmZUh0bWw7XG4gICAgLyoqXG4gICAgICogTWFpbnRhaW5zIHRoZSBhcHBsaWVkIHN0eWxlIGNsYXNzZXMgc28gd2UgY2FuIHJlbW92ZSB0aGVtIHdoZW4gdGhlXG4gICAgICogaWNvbiB0eXBlIGNoYW5nZXMgYXQgcnVuIHRpbWUuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHN0eWxlQ2xhc3Nlczogc3RyaW5nW107XG4gICAgY29uc3RydWN0b3IoaWNvbkxvYWRlcjogSWNvbkxvYWRlclNlcnZpY2UsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCByZW5kZXJlcjogUmVuZGVyZXIyKTtcbiAgICBwcm90ZWN0ZWQgc2V0SWNvbih0eXBlOiBJQ09OX1RZUEUpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIHN0eWxlIGNsYXNzZXMgYW5kIHRoZSBsaW5rIHJlc291cmNlIChpZiBhdmFpbGFibGUpLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhZGRTdHlsZUNsYXNzZXModHlwZTogSUNPTl9UWVBFKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgZ2V0IGhvc3QoKTogSFRNTEVsZW1lbnQ7XG59XG4iXX0=