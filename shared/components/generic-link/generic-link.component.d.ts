/**
 * This component navigates using [routerLink] attribute when input 'url' is a relative url. Otherwise (when it's absolute), [href] is used.
 */
import * as ɵngcc0 from '@angular/core';
export declare class GenericLinkComponent {
    private readonly protocolRegex;
    url: string | any[];
    target: string;
    class: string;
    id: string;
    style: string;
    title: string;
    get rel(): string;
    get routerUrl(): any[];
    isExternalUrl(): boolean;
    private getAbsoluteUrl;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GenericLinkComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GenericLinkComponent, "cx-generic-link", never, {
    "url": "url";
    "target": "target";
    "class": "class";
    "id": "id";
    "style": "style";
    "title": "title";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy1saW5rLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJnZW5lcmljLWxpbmsuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUE7Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBuYXZpZ2F0ZXMgdXNpbmcgW3JvdXRlckxpbmtdIGF0dHJpYnV0ZSB3aGVuIGlucHV0ICd1cmwnIGlzIGEgcmVsYXRpdmUgdXJsLiBPdGhlcndpc2UgKHdoZW4gaXQncyBhYnNvbHV0ZSksIFtocmVmXSBpcyB1c2VkLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHZW5lcmljTGlua0NvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm90b2NvbFJlZ2V4O1xuICAgIHVybDogc3RyaW5nIHwgYW55W107XG4gICAgdGFyZ2V0OiBzdHJpbmc7XG4gICAgY2xhc3M6IHN0cmluZztcbiAgICBpZDogc3RyaW5nO1xuICAgIHN0eWxlOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBnZXQgcmVsKCk6IHN0cmluZztcbiAgICBnZXQgcm91dGVyVXJsKCk6IGFueVtdO1xuICAgIGlzRXh0ZXJuYWxVcmwoKTogYm9vbGVhbjtcbiAgICBwcml2YXRlIGdldEFic29sdXRlVXJsO1xufVxuIl19