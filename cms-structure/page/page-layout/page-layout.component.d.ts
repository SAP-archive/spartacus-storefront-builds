import { ElementRef, Renderer2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageLayoutService } from './page-layout.service';
import * as ɵngcc0 from '@angular/core';
export declare class PageLayoutComponent {
    private el;
    private renderer;
    private pageLayoutService;
    set section(value: string);
    readonly section$: BehaviorSubject<string>;
    readonly templateName$: Observable<string>;
    readonly layoutName$: Observable<string>;
    readonly slots$: Observable<string[]>;
    readonly pageFoldSlot$: Observable<string>;
    private currentClass;
    constructor(el: ElementRef, renderer: Renderer2, pageLayoutService: PageLayoutService);
    set styleClass(cls: string);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PageLayoutComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PageLayoutComponent, "cx-page-layout", never, {
    "section": "section";
}, {}, never>;
}

//# sourceMappingURL=page-layout.component.d.ts.map