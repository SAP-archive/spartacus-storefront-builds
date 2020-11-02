import { OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SchemaBuilder } from './builders/schema.interface';
import { JsonLdScriptFactory } from './json-ld-script.factory';
/**
 * Factory service that is used to build the structured data for
 * all configured schema builders.
 */
export declare class StructuredDataFactory implements OnDestroy {
    private scriptBuilder;
    private builders;
    constructor(scriptBuilder: JsonLdScriptFactory, builders: SchemaBuilder[]);
    protected subscription: Subscription;
    /**
     * Initiates the build of structured data by collecting all schema
     * builders.
     */
    build(): void;
    /**
     * Collects all schema builders and observe their structured data.
     */
    protected collectSchemas(): Observable<any[]>;
    ngOnDestroy(): void;
}
