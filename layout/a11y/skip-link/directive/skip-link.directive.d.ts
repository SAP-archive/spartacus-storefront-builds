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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJza2lwLWxpbmsuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7QUFPQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTa2lwTGlua1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3NraXAtbGluay5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNraXBMaW5rRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgICBwcm90ZWN0ZWQgc2tpcExpbmtTZXJ2aWNlOiBTa2lwTGlua1NlcnZpY2U7XG4gICAgY3hTa2lwTGluazogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBza2lwTGlua1NlcnZpY2U6IFNraXBMaW5rU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19