import { AfterViewInit, OnDestroy, OnInit, QueryList } from '@angular/core';
import { CmsService, CMSTabParagraphContainer, WindowRef } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { ComponentWrapperDirective } from '../../../cms-structure/page/component/component-wrapper.directive';
import { CmsComponentData } from '../../../cms-structure/page/model/index';
import * as ɵngcc0 from '@angular/core';
export declare class TabParagraphContainerComponent implements AfterViewInit, OnInit, OnDestroy {
    componentData: CmsComponentData<CMSTabParagraphContainer>;
    private cmsService;
    private winRef?;
    activeTabNum: number;
    children: QueryList<ComponentWrapperDirective>;
    tabTitleParams: Observable<any>[];
    subscription: Subscription;
    constructor(componentData: CmsComponentData<CMSTabParagraphContainer>, cmsService: CmsService, winRef: WindowRef);
    /**
     * @deprecated since 1.4
     *
     * TODO(issue:#5813) Deprecated since 1.4
     */
    constructor(componentData: CmsComponentData<CMSTabParagraphContainer>, cmsService: CmsService);
    components$: Observable<any[]>;
    select(tabNum: number): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private getTitleParams;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TabParagraphContainerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TabParagraphContainerComponent, "cx-tab-paragraph-container", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInRhYi1wYXJhZ3JhcGgtY29udGFpbmVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlLCBDTVNUYWJQYXJhZ3JhcGhDb250YWluZXIsIFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L2NvbXBvbmVudC13cmFwcGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2luZGV4JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRhYlBhcmFncmFwaENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENNU1RhYlBhcmFncmFwaENvbnRhaW5lcj47XG4gICAgcHJpdmF0ZSBjbXNTZXJ2aWNlO1xuICAgIHByaXZhdGUgd2luUmVmPztcbiAgICBhY3RpdmVUYWJOdW06IG51bWJlcjtcbiAgICBjaGlsZHJlbjogUXVlcnlMaXN0PENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmU+O1xuICAgIHRhYlRpdGxlUGFyYW1zOiBPYnNlcnZhYmxlPGFueT5bXTtcbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENNU1RhYlBhcmFncmFwaENvbnRhaW5lcj4sIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsIHdpblJlZjogV2luZG93UmVmKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAxLjRcbiAgICAgKlxuICAgICAqIFRPRE8oaXNzdWU6IzU4MTMpIERlcHJlY2F0ZWQgc2luY2UgMS40XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDTVNUYWJQYXJhZ3JhcGhDb250YWluZXI+LCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlKTtcbiAgICBjb21wb25lbnRzJDogT2JzZXJ2YWJsZTxhbnlbXT47XG4gICAgc2VsZWN0KHRhYk51bTogbnVtYmVyKTogdm9pZDtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xuICAgIHByaXZhdGUgZ2V0VGl0bGVQYXJhbXM7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==