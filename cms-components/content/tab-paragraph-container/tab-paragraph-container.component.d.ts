import { CmsService, CMSTabParagraphContainer } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../cms-structure/page/model/index';
export declare class TabParagraphContainerComponent {
    componentData: CmsComponentData<CMSTabParagraphContainer>;
    private cmsService;
    activeTabNum: number;
    constructor(componentData: CmsComponentData<CMSTabParagraphContainer>, cmsService: CmsService);
    components$: Observable<any[]>;
    select(tabNum: number): void;
}
