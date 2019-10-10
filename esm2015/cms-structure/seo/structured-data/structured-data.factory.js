/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { SCHEMA_BUILDER } from './builders/tokens';
import { JsonLdScriptFactory } from './json-ld-script.factory';
import * as i0 from "@angular/core";
import * as i1 from "./json-ld-script.factory";
import * as i2 from "./builders/tokens";
export class StructuredDataFactory {
    /**
     * @param {?} scriptBuilder
     * @param {?} builders
     */
    constructor(scriptBuilder, builders) {
        this.scriptBuilder = scriptBuilder;
        this.builders = builders;
    }
    /**
     * @return {?}
     */
    build() {
        this.collectSchemas().subscribe((/**
         * @param {?} schema
         * @return {?}
         */
        (schema) => {
            this.scriptBuilder.build(schema);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    collectSchemas() {
        if (!this.scriptBuilder.isJsonLdRequired() || !this.builders) {
            return of();
        }
        return combineLatest(this.builders.map((/**
         * @param {?} builder
         * @return {?}
         */
        builder => builder.build()))).pipe();
    }
}
StructuredDataFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
StructuredDataFactory.ctorParameters = () => [
    { type: JsonLdScriptFactory },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [SCHEMA_BUILDER,] }] }
];
/** @nocollapse */ StructuredDataFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function StructuredDataFactory_Factory() { return new StructuredDataFactory(i0.ɵɵinject(i1.JsonLdScriptFactory), i0.ɵɵinject(i2.SCHEMA_BUILDER, 8)); }, token: StructuredDataFactory, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructuredDataFactory.prototype.scriptBuilder;
    /**
     * @type {?}
     * @private
     */
    StructuredDataFactory.prototype.builders;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlZC1kYXRhLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3Nlby9zdHJ1Y3R1cmVkLWRhdGEvc3RydWN0dXJlZC1kYXRhLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFLL0QsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFDaEMsWUFDVSxhQUFrQyxFQUdsQyxRQUF5QjtRQUh6QixrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFHbEMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7SUFDaEMsQ0FBQzs7OztJQUVKLEtBQUs7UUFDSCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLENBQUMsTUFBWSxFQUFFLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLGNBQWM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDNUQsT0FBTyxFQUFFLEVBQUUsQ0FBQztTQUNiO1FBQ0QsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdFLENBQUM7OztZQXRCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxtQkFBbUI7d0NBUXZCLFFBQVEsWUFDUixNQUFNLFNBQUMsY0FBYzs7Ozs7Ozs7SUFGdEIsOENBQTBDOzs7OztJQUMxQyx5Q0FFaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2NoZW1hQnVpbGRlciB9IGZyb20gJy4vYnVpbGRlcnMvc2NoZW1hLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTQ0hFTUFfQlVJTERFUiB9IGZyb20gJy4vYnVpbGRlcnMvdG9rZW5zJztcbmltcG9ydCB7IEpzb25MZFNjcmlwdEZhY3RvcnkgfSBmcm9tICcuL2pzb24tbGQtc2NyaXB0LmZhY3RvcnknO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlZERhdGFGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzY3JpcHRCdWlsZGVyOiBKc29uTGRTY3JpcHRGYWN0b3J5LFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChTQ0hFTUFfQlVJTERFUilcbiAgICBwcml2YXRlIGJ1aWxkZXJzOiBTY2hlbWFCdWlsZGVyW11cbiAgKSB7fVxuXG4gIGJ1aWxkKCkge1xuICAgIHRoaXMuY29sbGVjdFNjaGVtYXMoKS5zdWJzY3JpYmUoKHNjaGVtYToge31bXSkgPT4ge1xuICAgICAgdGhpcy5zY3JpcHRCdWlsZGVyLmJ1aWxkKHNjaGVtYSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvbGxlY3RTY2hlbWFzKCk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBpZiAoIXRoaXMuc2NyaXB0QnVpbGRlci5pc0pzb25MZFJlcXVpcmVkKCkgfHwgIXRoaXMuYnVpbGRlcnMpIHtcbiAgICAgIHJldHVybiBvZigpO1xuICAgIH1cbiAgICByZXR1cm4gY29tYmluZUxhdGVzdCh0aGlzLmJ1aWxkZXJzLm1hcChidWlsZGVyID0+IGJ1aWxkZXIuYnVpbGQoKSkpLnBpcGUoKTtcbiAgfVxufVxuIl19