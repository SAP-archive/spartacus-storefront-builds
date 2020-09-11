import { AfterViewInit, OnDestroy, OnInit, QueryList } from '@angular/core';
import { CmsService, CMSTabParagraphContainer, WindowRef } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { ComponentWrapperDirective } from '../../../cms-structure/page/component/component-wrapper.directive';
import { CmsComponentData } from '../../../cms-structure/page/model/index';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
import * as ɵngcc0 from '@angular/core';
export declare class TabParagraphContainerComponent implements AfterViewInit, OnInit, OnDestroy {
    componentData: CmsComponentData<CMSTabParagraphContainer>;
    protected cmsService: CmsService;
    protected winRef?: WindowRef;
    protected breakpointService?: BreakpointService;
    activeTabNum: number;
    children: QueryList<ComponentWrapperDirective>;
    tabTitleParams: Observable<any>[];
    subscription: Subscription;
    constructor(componentData: CmsComponentData<CMSTabParagraphContainer>, cmsService: CmsService, winRef?: WindowRef, breakpointService?: BreakpointService);
    /**
     * @deprecated since 2.1
     */
    constructor(componentData: CmsComponentData<CMSTabParagraphContainer>, cmsService: CmsService, winRef?: WindowRef);
    components$: Observable<any[]>;
    select(tabNum: number, event?: MouseEvent): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private getTitleParams;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TabParagraphContainerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TabParagraphContainerComponent, "cx-tab-paragraph-container", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInRhYi1wYXJhZ3JhcGgtY29udGFpbmVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlLCBDTVNUYWJQYXJhZ3JhcGhDb250YWluZXIsIFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L2NvbXBvbmVudC13cmFwcGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2luZGV4JztcbmltcG9ydCB7IEJyZWFrcG9pbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRhYlBhcmFncmFwaENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENNU1RhYlBhcmFncmFwaENvbnRhaW5lcj47XG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHdpblJlZj86IFdpbmRvd1JlZjtcbiAgICBwcm90ZWN0ZWQgYnJlYWtwb2ludFNlcnZpY2U/OiBCcmVha3BvaW50U2VydmljZTtcbiAgICBhY3RpdmVUYWJOdW06IG51bWJlcjtcbiAgICBjaGlsZHJlbjogUXVlcnlMaXN0PENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmU+O1xuICAgIHRhYlRpdGxlUGFyYW1zOiBPYnNlcnZhYmxlPGFueT5bXTtcbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENNU1RhYlBhcmFncmFwaENvbnRhaW5lcj4sIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsIHdpblJlZj86IFdpbmRvd1JlZiwgYnJlYWtwb2ludFNlcnZpY2U/OiBCcmVha3BvaW50U2VydmljZSk7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgMi4xXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDTVNUYWJQYXJhZ3JhcGhDb250YWluZXI+LCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLCB3aW5SZWY/OiBXaW5kb3dSZWYpO1xuICAgIGNvbXBvbmVudHMkOiBPYnNlcnZhYmxlPGFueVtdPjtcbiAgICBzZWxlY3QodGFiTnVtOiBudW1iZXIsIGV2ZW50PzogTW91c2VFdmVudCk6IHZvaWQ7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbiAgICBwcml2YXRlIGdldFRpdGxlUGFyYW1zO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=