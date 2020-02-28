import { PageMeta, PageMetaService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { SchemaBuilder } from '../schema.interface';
import * as ɵngcc0 from '@angular/core';
export declare class BreadcrumbSchemaBuilder implements SchemaBuilder {
    protected pageMetaService: PageMetaService;
    constructor(pageMetaService: PageMetaService);
    build(): Observable<any>;
    protected collect(pageMeta: PageMeta): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BreadcrumbSchemaBuilder>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi1zY2hlbWEuYnVpbGRlci5kLnRzIiwic291cmNlcyI6WyJicmVhZGNydW1iLXNjaGVtYS5idWlsZGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7O0FBS0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZU1ldGEsIFBhZ2VNZXRhU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTY2hlbWFCdWlsZGVyIH0gZnJvbSAnLi4vc2NoZW1hLmludGVyZmFjZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBCcmVhZGNydW1iU2NoZW1hQnVpbGRlciBpbXBsZW1lbnRzIFNjaGVtYUJ1aWxkZXIge1xuICAgIHByb3RlY3RlZCBwYWdlTWV0YVNlcnZpY2U6IFBhZ2VNZXRhU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihwYWdlTWV0YVNlcnZpY2U6IFBhZ2VNZXRhU2VydmljZSk7XG4gICAgYnVpbGQoKTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHByb3RlY3RlZCBjb2xsZWN0KHBhZ2VNZXRhOiBQYWdlTWV0YSk6IGFueTtcbn1cbiJdfQ==