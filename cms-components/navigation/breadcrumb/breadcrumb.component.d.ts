import { OnInit } from '@angular/core';
import { CmsBreadcrumbsComponent, PageMetaService, TranslationService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import * as ɵngcc0 from '@angular/core';
export declare class BreadcrumbComponent implements OnInit {
    component: CmsComponentData<CmsBreadcrumbsComponent>;
    protected pageMetaService: PageMetaService;
    private translation;
    title$: Observable<string>;
    crumbs$: Observable<any[]>;
    constructor(component: CmsComponentData<CmsBreadcrumbsComponent>, pageMetaService: PageMetaService, translation: TranslationService);
    ngOnInit(): void;
    private setTitle;
    private setCrumbs;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BreadcrumbComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BreadcrumbComponent, "cx-breadcrumb", never, {}, {}, never>;
}

//# sourceMappingURL=breadcrumb.component.d.ts.map