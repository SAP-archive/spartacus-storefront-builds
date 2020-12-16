import { OnChanges, SimpleChanges } from '@angular/core';
import { Params, Router } from '@angular/router';
/**
 * This component navigates using [routerLink] attribute when input 'url' is a relative url. Otherwise (when it's absolute), [href] is used.
 */
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
    id: string;
    class: string;
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
}
