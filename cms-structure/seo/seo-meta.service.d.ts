import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { PageMeta, PageMetaService, PageRobotsMeta } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class SeoMetaService {
    protected ngTitle: Title;
    protected ngMeta: Meta;
    protected pageMetaService: PageMetaService;
    constructor(ngTitle: Title, ngMeta: Meta, pageMetaService: PageMetaService);
    init(): void;
    protected set meta(meta: PageMeta);
    protected set title(title: string);
    protected set description(value: string);
    protected set image(imageUrl: string);
    protected set robots(value: PageRobotsMeta[]);
    protected addTag(meta: MetaDefinition): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SeoMetaService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLW1ldGEuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJzZW8tbWV0YS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7O0FBWUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXRhLCBNZXRhRGVmaW5pdGlvbiwgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFBhZ2VNZXRhLCBQYWdlTWV0YVNlcnZpY2UsIFBhZ2VSb2JvdHNNZXRhIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNlb01ldGFTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgbmdUaXRsZTogVGl0bGU7XG4gICAgcHJvdGVjdGVkIG5nTWV0YTogTWV0YTtcbiAgICBwcm90ZWN0ZWQgcGFnZU1ldGFTZXJ2aWNlOiBQYWdlTWV0YVNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IobmdUaXRsZTogVGl0bGUsIG5nTWV0YTogTWV0YSwgcGFnZU1ldGFTZXJ2aWNlOiBQYWdlTWV0YVNlcnZpY2UpO1xuICAgIGluaXQoKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgc2V0IG1ldGEobWV0YTogUGFnZU1ldGEpO1xuICAgIHByb3RlY3RlZCBzZXQgdGl0bGUodGl0bGU6IHN0cmluZyk7XG4gICAgcHJvdGVjdGVkIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKTtcbiAgICBwcm90ZWN0ZWQgc2V0IGltYWdlKGltYWdlVXJsOiBzdHJpbmcpO1xuICAgIHByb3RlY3RlZCBzZXQgcm9ib3RzKHZhbHVlOiBQYWdlUm9ib3RzTWV0YVtdKTtcbiAgICBwcm90ZWN0ZWQgYWRkVGFnKG1ldGE6IE1ldGFEZWZpbml0aW9uKTogdm9pZDtcbn1cbiJdfQ==