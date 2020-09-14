import { OnChanges, SimpleChanges } from '@angular/core';
import { Params, Router } from '@angular/router';
/**
 * This component navigates using [routerLink] attribute when input 'url' is a relative url. Otherwise (when it's absolute), [href] is used.
 */
import * as ɵngcc0 from '@angular/core';
export declare class GenericLinkComponent implements OnChanges {
    protected router: Router;
    constructor(router: Router);
    /**
     * Pattern matching string starting with `http://` or `https://`.
     */
    private readonly PROTOCOL_REGEX;
    /**
     * Used to split url into 2 parts:
     * 1. the path
     * 2. query params + hash fragment
     */
    private readonly URL_SPLIT;
    /**
     * Parsed parts of the @Input `url`, when it's a local URL.
     * It should not be used when the `url` is external.
     * @see `url`
     */
    private routeParts;
    url: string | any[];
    target: string;
    class: string;
    id: string;
    style: string;
    title: string;
    /**
     * Returns true when the @Input `url` is a string starting with `http://` or `https://`.
     */
    isExternalUrl(): boolean;
    get rel(): string;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * The part with the path of the local url.
     */
    get routerUrl(): any[];
    /**
     * The part with the query params of the local url.
     */
    get queryParams(): Params;
    /**
     * The part with the hash fragment of the local url.
     */
    get fragment(): string;
    /**
     * Parses the given url and sets the property `urlParts` accordingly.
     */
    private setUrlParts;
    /**
     * Parses the given string into 3 parts:
     * - string path (wrapped in an array to be compatible with Angular syntax for the `routerLink`)
     * - query params (as an object)
     * - hash fragment (string)
     */
    private splitUrl;
    /**
     * Prepends a leading slash to the given URL string, in case it doesn't have it.
     */
    private getAbsoluteUrl;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GenericLinkComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GenericLinkComponent, "cx-generic-link", never, { "url": "url"; "target": "target"; "class": "class"; "id": "id"; "style": "style"; "title": "title"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy1saW5rLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJnZW5lcmljLWxpbmsuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhcmFtcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8qKlxuICogVGhpcyBjb21wb25lbnQgbmF2aWdhdGVzIHVzaW5nIFtyb3V0ZXJMaW5rXSBhdHRyaWJ1dGUgd2hlbiBpbnB1dCAndXJsJyBpcyBhIHJlbGF0aXZlIHVybC4gT3RoZXJ3aXNlICh3aGVuIGl0J3MgYWJzb2x1dGUpLCBbaHJlZl0gaXMgdXNlZC5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgR2VuZXJpY0xpbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcjtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlcik7XG4gICAgLyoqXG4gICAgICogUGF0dGVybiBtYXRjaGluZyBzdHJpbmcgc3RhcnRpbmcgd2l0aCBgaHR0cDovL2Agb3IgYGh0dHBzOi8vYC5cbiAgICAgKi9cbiAgICBwcml2YXRlIHJlYWRvbmx5IFBST1RPQ09MX1JFR0VYO1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gc3BsaXQgdXJsIGludG8gMiBwYXJ0czpcbiAgICAgKiAxLiB0aGUgcGF0aFxuICAgICAqIDIuIHF1ZXJ5IHBhcmFtcyArIGhhc2ggZnJhZ21lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlYWRvbmx5IFVSTF9TUExJVDtcbiAgICAvKipcbiAgICAgKiBQYXJzZWQgcGFydHMgb2YgdGhlIEBJbnB1dCBgdXJsYCwgd2hlbiBpdCdzIGEgbG9jYWwgVVJMLlxuICAgICAqIEl0IHNob3VsZCBub3QgYmUgdXNlZCB3aGVuIHRoZSBgdXJsYCBpcyBleHRlcm5hbC5cbiAgICAgKiBAc2VlIGB1cmxgXG4gICAgICovXG4gICAgcHJpdmF0ZSByb3V0ZVBhcnRzO1xuICAgIHVybDogc3RyaW5nIHwgYW55W107XG4gICAgdGFyZ2V0OiBzdHJpbmc7XG4gICAgY2xhc3M6IHN0cmluZztcbiAgICBpZDogc3RyaW5nO1xuICAgIHN0eWxlOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgd2hlbiB0aGUgQElucHV0IGB1cmxgIGlzIGEgc3RyaW5nIHN0YXJ0aW5nIHdpdGggYGh0dHA6Ly9gIG9yIGBodHRwczovL2AuXG4gICAgICovXG4gICAgaXNFeHRlcm5hbFVybCgpOiBib29sZWFuO1xuICAgIGdldCByZWwoKTogc3RyaW5nO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFRoZSBwYXJ0IHdpdGggdGhlIHBhdGggb2YgdGhlIGxvY2FsIHVybC5cbiAgICAgKi9cbiAgICBnZXQgcm91dGVyVXJsKCk6IGFueVtdO1xuICAgIC8qKlxuICAgICAqIFRoZSBwYXJ0IHdpdGggdGhlIHF1ZXJ5IHBhcmFtcyBvZiB0aGUgbG9jYWwgdXJsLlxuICAgICAqL1xuICAgIGdldCBxdWVyeVBhcmFtcygpOiBQYXJhbXM7XG4gICAgLyoqXG4gICAgICogVGhlIHBhcnQgd2l0aCB0aGUgaGFzaCBmcmFnbWVudCBvZiB0aGUgbG9jYWwgdXJsLlxuICAgICAqL1xuICAgIGdldCBmcmFnbWVudCgpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBnaXZlbiB1cmwgYW5kIHNldHMgdGhlIHByb3BlcnR5IGB1cmxQYXJ0c2AgYWNjb3JkaW5nbHkuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRVcmxQYXJ0cztcbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIGdpdmVuIHN0cmluZyBpbnRvIDMgcGFydHM6XG4gICAgICogLSBzdHJpbmcgcGF0aCAod3JhcHBlZCBpbiBhbiBhcnJheSB0byBiZSBjb21wYXRpYmxlIHdpdGggQW5ndWxhciBzeW50YXggZm9yIHRoZSBgcm91dGVyTGlua2ApXG4gICAgICogLSBxdWVyeSBwYXJhbXMgKGFzIGFuIG9iamVjdClcbiAgICAgKiAtIGhhc2ggZnJhZ21lbnQgKHN0cmluZylcbiAgICAgKi9cbiAgICBwcml2YXRlIHNwbGl0VXJsO1xuICAgIC8qKlxuICAgICAqIFByZXBlbmRzIGEgbGVhZGluZyBzbGFzaCB0byB0aGUgZ2l2ZW4gVVJMIHN0cmluZywgaW4gY2FzZSBpdCBkb2Vzbid0IGhhdmUgaXQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRBYnNvbHV0ZVVybDtcbn1cbiJdfQ==