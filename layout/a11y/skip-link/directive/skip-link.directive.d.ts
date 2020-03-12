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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJza2lwLWxpbmsuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7OztBQU9BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNraXBMaW5rU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2Uvc2tpcC1saW5rLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2tpcExpbmtEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBlbFJlZjtcbiAgICBwcml2YXRlIHNraXBMaW5rU2VydmljZTtcbiAgICBjeFNraXBMaW5rOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoZWxSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBza2lwTGlua1NlcnZpY2U6IFNraXBMaW5rU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19