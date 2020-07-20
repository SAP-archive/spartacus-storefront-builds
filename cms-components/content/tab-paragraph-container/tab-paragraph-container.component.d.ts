import { AfterViewInit, OnDestroy, OnInit, QueryList } from '@angular/core';
import { CmsService, CMSTabParagraphContainer, WindowRef } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { ComponentWrapperDirective } from '../../../cms-structure/page/component/component-wrapper.directive';
import { CmsComponentData } from '../../../cms-structure/page/model/index';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
export declare class TabParagraphContainerComponent implements AfterViewInit, OnInit, OnDestroy {
    componentData: CmsComponentData<CMSTabParagraphContainer>;
    protected cmsService: CmsService;
    protected winRef: WindowRef;
    protected breakpointService: BreakpointService;
    activeTabNum: number;
    children: QueryList<ComponentWrapperDirective>;
    tabTitleParams: Observable<any>[];
    subscription: Subscription;
    tabSubscription: Subscription;
    constructor(componentData: CmsComponentData<CMSTabParagraphContainer>, cmsService: CmsService, winRef: WindowRef, breakpointService: BreakpointService);
    components$: Observable<any[]>;
    select(tabNum: number, event: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private getTitleParams;
    ngOnDestroy(): void;
}
