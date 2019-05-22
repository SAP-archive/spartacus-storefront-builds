/**
 * This component navigates using [routerLink] attribute when input 'url' is a relative url. Otherwise (when it's absolute), [href] is used.
 */
export declare class GenericLinkComponent {
    private readonly protocolRegex;
    url: string | any[];
    target: string;
    class: string;
    id: string;
    style: string;
    title: string;
    readonly rel: string;
    readonly routerUrl: any[];
    isExternalUrl(): boolean;
    private getAbsoluteUrl;
}
