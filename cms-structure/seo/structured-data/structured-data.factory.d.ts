import { SchemaBuilder } from './builders/schema.interface';
import { JsonLdScriptFactory } from './json-ld-script.factory';
export declare class StructuredDataFactory {
    private scriptBuilder;
    private builders;
    constructor(scriptBuilder: JsonLdScriptFactory, builders: SchemaBuilder[]);
    build(): void;
    private collectSchemas;
}
