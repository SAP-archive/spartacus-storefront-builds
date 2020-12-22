import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { SkipLinkService } from '../service/skip-link.service';
import * as ɵngcc0 from '@angular/core';
export declare class SkipLinkDirective implements OnInit, OnDestroy {
    protected elementRef: ElementRef<HTMLElement>;
    protected skipLinkService: SkipLinkService;
    cxSkipLink: string;
    constructor(elementRef: ElementRef<HTMLElement>, skipLinkService: SkipLinkService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SkipLinkDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SkipLinkDirective, "[cxSkipLink]", never, { "cxSkipLink": "cxSkipLink"; }, {}, never>;
}

//# sourceMappingURL=skip-link.directive.d.ts.map