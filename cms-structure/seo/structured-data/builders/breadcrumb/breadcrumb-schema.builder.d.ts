import { PageMeta, PageMetaService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { SchemaBuilder } from '../schema.interface';
export declare class BreadcrumbSchemaBuilder implements SchemaBuilder {
    protected pageMetaService: PageMetaService;
    constructor(pageMetaService: PageMetaService);
    build(): Observable<any>;
    protected collect(pageMeta: PageMeta): any;
}
