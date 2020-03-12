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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInBhZ2UtbGF5b3V0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGFnZUxheW91dFNlcnZpY2UgfSBmcm9tICcuL3BhZ2UtbGF5b3V0LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUGFnZUxheW91dENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBlbDtcbiAgICBwcml2YXRlIHJlbmRlcmVyO1xuICAgIHByaXZhdGUgcGFnZUxheW91dFNlcnZpY2U7XG4gICAgc2V0IHNlY3Rpb24odmFsdWU6IHN0cmluZyk7XG4gICAgcmVhZG9ubHkgc2VjdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+O1xuICAgIHJlYWRvbmx5IHRlbXBsYXRlTmFtZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICByZWFkb25seSBsYXlvdXROYW1lJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHJlYWRvbmx5IHNsb3RzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG4gICAgcmVhZG9ubHkgcGFnZUZvbGRTbG90JDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHByaXZhdGUgY3VycmVudENsYXNzO1xuICAgIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBwYWdlTGF5b3V0U2VydmljZTogUGFnZUxheW91dFNlcnZpY2UpO1xuICAgIHNldCBzdHlsZUNsYXNzKGNsczogc3RyaW5nKTtcbn1cbiJdfQ==