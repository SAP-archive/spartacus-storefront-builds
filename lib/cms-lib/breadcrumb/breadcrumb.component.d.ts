import { Observable } from 'rxjs';
import { CmsBreadcrumbsComponent } from '@spartacus/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { PageMetaService } from '@spartacus/core';
export declare class BreadcrumbComponent {
    component: CmsComponentData<CmsBreadcrumbsComponent>;
    protected pageMetaService: PageMetaService;
    constructor(component: CmsComponentData<CmsBreadcrumbsComponent>, pageMetaService: PageMetaService);
    readonly title$: Observable<string>;
    readonly crumbs$: Observable<any[]>;
}
