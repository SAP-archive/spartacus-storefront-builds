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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BreadcrumbComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BreadcrumbComponent, "cx-breadcrumb", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiYnJlYWRjcnVtYi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7O0FBVUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0JyZWFkY3J1bWJzQ29tcG9uZW50LCBQYWdlTWV0YVNlcnZpY2UsIFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb21wb25lbnQ6IENtc0NvbXBvbmVudERhdGE8Q21zQnJlYWRjcnVtYnNDb21wb25lbnQ+O1xuICAgIHByb3RlY3RlZCBwYWdlTWV0YVNlcnZpY2U6IFBhZ2VNZXRhU2VydmljZTtcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uO1xuICAgIHRpdGxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIGNydW1icyQ6IE9ic2VydmFibGU8YW55W10+O1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudDogQ21zQ29tcG9uZW50RGF0YTxDbXNCcmVhZGNydW1ic0NvbXBvbmVudD4sIHBhZ2VNZXRhU2VydmljZTogUGFnZU1ldGFTZXJ2aWNlLCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIHByaXZhdGUgc2V0VGl0bGU7XG4gICAgcHJpdmF0ZSBzZXRDcnVtYnM7XG59XG4iXX0=