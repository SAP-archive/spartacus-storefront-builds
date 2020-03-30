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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GenericLinkComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GenericLinkComponent, "cx-generic-link", never, { "url": "url"; "target": "target"; "class": "class"; "id": "id"; "style": "style"; "title": "title"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy1saW5rLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJnZW5lcmljLWxpbmsuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7QUFZQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBjb21wb25lbnQgbmF2aWdhdGVzIHVzaW5nIFtyb3V0ZXJMaW5rXSBhdHRyaWJ1dGUgd2hlbiBpbnB1dCAndXJsJyBpcyBhIHJlbGF0aXZlIHVybC4gT3RoZXJ3aXNlICh3aGVuIGl0J3MgYWJzb2x1dGUpLCBbaHJlZl0gaXMgdXNlZC5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgR2VuZXJpY0xpbmtDb21wb25lbnQge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJvdG9jb2xSZWdleDtcbiAgICB1cmw6IHN0cmluZyB8IGFueVtdO1xuICAgIHRhcmdldDogc3RyaW5nO1xuICAgIGNsYXNzOiBzdHJpbmc7XG4gICAgaWQ6IHN0cmluZztcbiAgICBzdHlsZTogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgZ2V0IHJlbCgpOiBzdHJpbmc7XG4gICAgZ2V0IHJvdXRlclVybCgpOiBhbnlbXTtcbiAgICBpc0V4dGVybmFsVXJsKCk6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBnZXRBYnNvbHV0ZVVybDtcbn1cbiJdfQ==