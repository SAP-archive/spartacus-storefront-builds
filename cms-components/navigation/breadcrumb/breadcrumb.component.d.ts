import { OnInit } from '@angular/core';
import { CmsBreadcrumbsComponent, PageMetaService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
export declare class BreadcrumbComponent implements OnInit {
    component: CmsComponentData<CmsBreadcrumbsComponent>;
    protected pageMetaService: PageMetaService;
    title$: Observable<string>;
    crumbs$: Observable<any[]>;
    constructor(component: CmsComponentData<CmsBreadcrumbsComponent>, pageMetaService: PageMetaService);
    ngOnInit(): void;
    private setTitle;
    private setCrumbs;
}
