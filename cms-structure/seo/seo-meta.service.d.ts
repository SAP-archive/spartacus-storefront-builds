import { OnDestroy } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { PageMeta, PageMetaService, PageRobotsMeta } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class SeoMetaService implements OnDestroy {
    protected ngTitle: Title;
    protected ngMeta: Meta;
    protected pageMetaService: PageMetaService;
    constructor(ngTitle: Title, ngMeta: Meta, pageMetaService: PageMetaService);
    private subscription;
    init(): void;
    protected set meta(meta: PageMeta);
    protected set title(title: string);
    protected set description(value: string);
    protected set image(imageUrl: string);
    protected set robots(value: PageRobotsMeta[]);
    protected addTag(meta: MetaDefinition): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SeoMetaService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLW1ldGEuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJzZW8tbWV0YS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FBY0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1ldGEsIE1ldGFEZWZpbml0aW9uLCBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUGFnZU1ldGEsIFBhZ2VNZXRhU2VydmljZSwgUGFnZVJvYm90c01ldGEgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2VvTWV0YVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBuZ1RpdGxlOiBUaXRsZTtcbiAgICBwcm90ZWN0ZWQgbmdNZXRhOiBNZXRhO1xuICAgIHByb3RlY3RlZCBwYWdlTWV0YVNlcnZpY2U6IFBhZ2VNZXRhU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihuZ1RpdGxlOiBUaXRsZSwgbmdNZXRhOiBNZXRhLCBwYWdlTWV0YVNlcnZpY2U6IFBhZ2VNZXRhU2VydmljZSk7XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG4gICAgaW5pdCgpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBzZXQgbWV0YShtZXRhOiBQYWdlTWV0YSk7XG4gICAgcHJvdGVjdGVkIHNldCB0aXRsZSh0aXRsZTogc3RyaW5nKTtcbiAgICBwcm90ZWN0ZWQgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpO1xuICAgIHByb3RlY3RlZCBzZXQgaW1hZ2UoaW1hZ2VVcmw6IHN0cmluZyk7XG4gICAgcHJvdGVjdGVkIHNldCByb2JvdHModmFsdWU6IFBhZ2VSb2JvdHNNZXRhW10pO1xuICAgIHByb3RlY3RlZCBhZGRUYWcobWV0YTogTWV0YURlZmluaXRpb24pOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=