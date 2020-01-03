import { OnDestroy, OnInit, ElementRef } from '@angular/core';
import { SkipLinkService } from '../service/skip-link.service';
export declare class SkipLinkDirective implements OnInit, OnDestroy {
    private elRef;
    private skipLinkService;
    cxSkipLink: string;
    constructor(elRef: ElementRef<HTMLElement>, skipLinkService: SkipLinkService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
