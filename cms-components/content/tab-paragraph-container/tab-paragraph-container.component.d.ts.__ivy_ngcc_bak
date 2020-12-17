import { AfterViewInit, OnDestroy, OnInit, QueryList } from '@angular/core';
import { CmsService, CMSTabParagraphContainer, WindowRef } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { ComponentWrapperDirective } from '../../../cms-structure/page/component/component-wrapper.directive';
import { CmsComponentData } from '../../../cms-structure/page/model/index';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
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
}
