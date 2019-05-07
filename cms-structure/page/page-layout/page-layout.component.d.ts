import { ElementRef, Renderer2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageLayoutService } from './page-layout.service';
export declare class PageLayoutComponent {
    private el;
    private renderer;
    private pageLayoutService;
    section: string;
    readonly section$: BehaviorSubject<string>;
    readonly layoutName$: Observable<string>;
    readonly slots$: Observable<string[]>;
    private currentClass;
    constructor(el: ElementRef, renderer: Renderer2, pageLayoutService: PageLayoutService);
    styleClass: string;
}
