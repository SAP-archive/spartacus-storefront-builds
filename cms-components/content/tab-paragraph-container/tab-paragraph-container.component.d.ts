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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TabParagraphContainerComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TabParagraphContainerComponent, "cx-tab-paragraph-container", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInRhYi1wYXJhZ3JhcGgtY29udGFpbmVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkluaXQsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zU2VydmljZSwgQ01TVGFiUGFyYWdyYXBoQ29udGFpbmVyLCBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtd3JhcHBlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUYWJQYXJhZ3JhcGhDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDTVNUYWJQYXJhZ3JhcGhDb250YWluZXI+O1xuICAgIHByaXZhdGUgY21zU2VydmljZTtcbiAgICBwcml2YXRlIHdpblJlZj87XG4gICAgYWN0aXZlVGFiTnVtOiBudW1iZXI7XG4gICAgY2hpbGRyZW46IFF1ZXJ5TGlzdDxDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlPjtcbiAgICB0YWJUaXRsZVBhcmFtczogT2JzZXJ2YWJsZTxhbnk+W107XG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDTVNUYWJQYXJhZ3JhcGhDb250YWluZXI+LCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLCB3aW5SZWY6IFdpbmRvd1JlZik7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgMS40XG4gICAgICpcbiAgICAgKiBUT0RPKGlzc3VlOiM1ODEzKSBEZXByZWNhdGVkIHNpbmNlIDEuNFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q01TVGFiUGFyYWdyYXBoQ29udGFpbmVyPiwgY21zU2VydmljZTogQ21zU2VydmljZSk7XG4gICAgY29tcG9uZW50cyQ6IE9ic2VydmFibGU8YW55W10+O1xuICAgIHNlbGVjdCh0YWJOdW06IG51bWJlcik6IHZvaWQ7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbiAgICBwcml2YXRlIGdldFRpdGxlUGFyYW1zO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=