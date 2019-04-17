import { Renderer2, ElementRef, OnInit } from '@angular/core';
import { PageLayoutService } from './page-layout.service';
export declare class PageLayoutComponent implements OnInit {
    private el;
    private renderer;
    private pageLayoutService;
    section: string;
    constructor(el: ElementRef, renderer: Renderer2, pageLayoutService: PageLayoutService);
    ngOnInit(): void;
    readonly slots$: import("rxjs").Observable<string[]>;
    readonly templateName$: import("rxjs").Observable<string>;
    styleClass: string;
}
