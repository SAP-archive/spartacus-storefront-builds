import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { SkipLinkService } from '../service/skip-link.service';
export declare class SkipLinkDirective implements OnInit, OnDestroy {
    protected elementRef: ElementRef<HTMLElement>;
    protected skipLinkService: SkipLinkService;
    cxSkipLink: string;
    constructor(elementRef: ElementRef<HTMLElement>, skipLinkService: SkipLinkService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
