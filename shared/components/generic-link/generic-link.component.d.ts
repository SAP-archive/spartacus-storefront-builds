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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy1saW5rLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJnZW5lcmljLWxpbmsuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgY29tcG9uZW50IG5hdmlnYXRlcyB1c2luZyBbcm91dGVyTGlua10gYXR0cmlidXRlIHdoZW4gaW5wdXQgJ3VybCcgaXMgYSByZWxhdGl2ZSB1cmwuIE90aGVyd2lzZSAod2hlbiBpdCdzIGFic29sdXRlKSwgW2hyZWZdIGlzIHVzZWQuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEdlbmVyaWNMaW5rQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByb3RvY29sUmVnZXg7XG4gICAgdXJsOiBzdHJpbmcgfCBhbnlbXTtcbiAgICB0YXJnZXQ6IHN0cmluZztcbiAgICBjbGFzczogc3RyaW5nO1xuICAgIGlkOiBzdHJpbmc7XG4gICAgc3R5bGU6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGdldCByZWwoKTogc3RyaW5nO1xuICAgIGdldCByb3V0ZXJVcmwoKTogYW55W107XG4gICAgaXNFeHRlcm5hbFVybCgpOiBib29sZWFuO1xuICAgIHByaXZhdGUgZ2V0QWJzb2x1dGVVcmw7XG59XG4iXX0=