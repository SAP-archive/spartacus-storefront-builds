import { OnDestroy, OnInit, ElementRef } from '@angular/core';
import { SkipLinkService } from '../service/skip-link.service';
import * as ɵngcc0 from '@angular/core';
export declare class SkipLinkDirective implements OnInit, OnDestroy {
    private elRef;
    private skipLinkService;
    cxSkipLink: string;
    constructor(elRef: ElementRef<HTMLElement>, skipLinkService: SkipLinkService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SkipLinkDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SkipLinkDirective, "[cxSkipLink]", never, {
    "cxSkipLink": "cxSkipLink";
}, {}, never>;
}

//# sourceMappingURL=skip-link.directive.d.ts.map