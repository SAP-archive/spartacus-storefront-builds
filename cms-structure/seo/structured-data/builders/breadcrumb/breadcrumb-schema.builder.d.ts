import { PageMeta, PageMetaService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { SchemaBuilder } from '../schema.interface';
import * as ɵngcc0 from '@angular/core';
export declare class BreadcrumbSchemaBuilder implements SchemaBuilder {
    protected pageMetaService: PageMetaService;
    constructor(pageMetaService: PageMetaService);
    build(): Observable<any>;
    protected collect(pageMeta: PageMeta): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BreadcrumbSchemaBuilder, never>;
}

//# sourceMappingURL=breadcrumb-schema.builder.d.ts.map