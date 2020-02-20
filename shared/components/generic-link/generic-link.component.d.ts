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

//# sourceMappingURL=generic-link.component.d.ts.map