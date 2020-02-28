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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SeoMetaService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLW1ldGEuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJzZW8tbWV0YS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7O0FBWUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWV0YSwgTWV0YURlZmluaXRpb24sIFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBQYWdlTWV0YSwgUGFnZU1ldGFTZXJ2aWNlLCBQYWdlUm9ib3RzTWV0YSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTZW9NZXRhU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIG5nVGl0bGU6IFRpdGxlO1xuICAgIHByb3RlY3RlZCBuZ01ldGE6IE1ldGE7XG4gICAgcHJvdGVjdGVkIHBhZ2VNZXRhU2VydmljZTogUGFnZU1ldGFTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKG5nVGl0bGU6IFRpdGxlLCBuZ01ldGE6IE1ldGEsIHBhZ2VNZXRhU2VydmljZTogUGFnZU1ldGFTZXJ2aWNlKTtcbiAgICBpbml0KCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIHNldCBtZXRhKG1ldGE6IFBhZ2VNZXRhKTtcbiAgICBwcm90ZWN0ZWQgc2V0IHRpdGxlKHRpdGxlOiBzdHJpbmcpO1xuICAgIHByb3RlY3RlZCBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZyk7XG4gICAgcHJvdGVjdGVkIHNldCBpbWFnZShpbWFnZVVybDogc3RyaW5nKTtcbiAgICBwcm90ZWN0ZWQgc2V0IHJvYm90cyh2YWx1ZTogUGFnZVJvYm90c01ldGFbXSk7XG4gICAgcHJvdGVjdGVkIGFkZFRhZyhtZXRhOiBNZXRhRGVmaW5pdGlvbik6IHZvaWQ7XG59XG4iXX0=