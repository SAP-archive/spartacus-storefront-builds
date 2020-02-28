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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInBhZ2UtbGF5b3V0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlLWxheW91dC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFBhZ2VMYXlvdXRDb21wb25lbnQge1xuICAgIHByaXZhdGUgZWw7XG4gICAgcHJpdmF0ZSByZW5kZXJlcjtcbiAgICBwcml2YXRlIHBhZ2VMYXlvdXRTZXJ2aWNlO1xuICAgIHNldCBzZWN0aW9uKHZhbHVlOiBzdHJpbmcpO1xuICAgIHJlYWRvbmx5IHNlY3Rpb24kOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPjtcbiAgICByZWFkb25seSB0ZW1wbGF0ZU5hbWUkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgcmVhZG9ubHkgbGF5b3V0TmFtZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICByZWFkb25seSBzbG90cyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuICAgIHJlYWRvbmx5IHBhZ2VGb2xkU2xvdCQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBwcml2YXRlIGN1cnJlbnRDbGFzcztcbiAgICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcGFnZUxheW91dFNlcnZpY2U6IFBhZ2VMYXlvdXRTZXJ2aWNlKTtcbiAgICBzZXQgc3R5bGVDbGFzcyhjbHM6IHN0cmluZyk7XG59XG4iXX0=