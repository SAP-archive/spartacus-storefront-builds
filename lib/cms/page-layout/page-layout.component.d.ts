import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { PageLayoutService } from './page-layout.service';
export declare class PageLayoutComponent implements OnInit {
    private el;
    private renderer;
    private pageLayoutService;
    section: string;
    constructor(el: ElementRef, renderer: Renderer2, pageLayoutService: PageLayoutService);
    ngOnInit(): void;
    readonly slots$: Observable<string[]>;
    readonly templateName$: Observable<string>;
    styleClass: string;
}
