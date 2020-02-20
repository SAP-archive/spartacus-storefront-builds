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

//# sourceMappingURL=tab-paragraph-container.component.d.ts.map