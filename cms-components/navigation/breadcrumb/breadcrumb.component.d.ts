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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiYnJlYWRjcnVtYi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7O0FBVUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNCcmVhZGNydW1ic0NvbXBvbmVudCwgUGFnZU1ldGFTZXJ2aWNlLCBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29tcG9uZW50OiBDbXNDb21wb25lbnREYXRhPENtc0JyZWFkY3J1bWJzQ29tcG9uZW50PjtcbiAgICBwcm90ZWN0ZWQgcGFnZU1ldGFTZXJ2aWNlOiBQYWdlTWV0YVNlcnZpY2U7XG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjtcbiAgICB0aXRsZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBjcnVtYnMkOiBPYnNlcnZhYmxlPGFueVtdPjtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQ6IENtc0NvbXBvbmVudERhdGE8Q21zQnJlYWRjcnVtYnNDb21wb25lbnQ+LCBwYWdlTWV0YVNlcnZpY2U6IFBhZ2VNZXRhU2VydmljZSwgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBwcml2YXRlIHNldFRpdGxlO1xuICAgIHByaXZhdGUgc2V0Q3J1bWJzO1xufVxuIl19