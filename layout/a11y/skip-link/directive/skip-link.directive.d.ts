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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJza2lwLWxpbmsuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7OztBQU9BOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTa2lwTGlua1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3NraXAtbGluay5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNraXBMaW5rRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgZWxSZWY7XG4gICAgcHJpdmF0ZSBza2lwTGlua1NlcnZpY2U7XG4gICAgY3hTa2lwTGluazogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKGVsUmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Piwgc2tpcExpbmtTZXJ2aWNlOiBTa2lwTGlua1NlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==