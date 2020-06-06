import { OnDestroy } from '@angular/core';
import { SchemaBuilder } from './builders/schema.interface';
import { JsonLdScriptFactory } from './json-ld-script.factory';
export declare class StructuredDataFactory implements OnDestroy {
    private scriptBuilder;
    private builders;
    constructor(scriptBuilder: JsonLdScriptFactory, builders: SchemaBuilder[]);
    private subscription;
    build(): void;
    private collectSchemas;
    ngOnDestroy(): void;
}
