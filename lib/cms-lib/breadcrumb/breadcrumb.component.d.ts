import { CmsBreadcrumbsComponent, PageMetaService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
export declare class BreadcrumbComponent {
    component: CmsComponentData<CmsBreadcrumbsComponent>;
    protected pageMetaService: PageMetaService;
    constructor(component: CmsComponentData<CmsBreadcrumbsComponent>, pageMetaService: PageMetaService);
    readonly title$: Observable<string>;
    readonly crumbs$: Observable<any[]>;
}
