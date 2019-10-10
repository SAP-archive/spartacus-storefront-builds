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
var StructuredDataFactory = /** @class */ (function () {
    function StructuredDataFactory(scriptBuilder, builders) {
        this.scriptBuilder = scriptBuilder;
        this.builders = builders;
    }
    /**
     * @return {?}
     */
    StructuredDataFactory.prototype.build = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.collectSchemas().subscribe((/**
         * @param {?} schema
         * @return {?}
         */
        function (schema) {
            _this.scriptBuilder.build(schema);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    StructuredDataFactory.prototype.collectSchemas = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.scriptBuilder.isJsonLdRequired() || !this.builders) {
            return of();
        }
        return combineLatest(this.builders.map((/**
         * @param {?} builder
         * @return {?}
         */
        function (builder) { return builder.build(); }))).pipe();
    };
    StructuredDataFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    StructuredDataFactory.ctorParameters = function () { return [
        { type: JsonLdScriptFactory },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [SCHEMA_BUILDER,] }] }
    ]; };
    /** @nocollapse */ StructuredDataFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function StructuredDataFactory_Factory() { return new StructuredDataFactory(i0.ɵɵinject(i1.JsonLdScriptFactory), i0.ɵɵinject(i2.SCHEMA_BUILDER, 8)); }, token: StructuredDataFactory, providedIn: "root" });
    return StructuredDataFactory;
}());
export { StructuredDataFactory };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlZC1kYXRhLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3Nlby9zdHJ1Y3R1cmVkLWRhdGEvc3RydWN0dXJlZC1kYXRhLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFFL0Q7SUFJRSwrQkFDVSxhQUFrQyxFQUdsQyxRQUF5QjtRQUh6QixrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFHbEMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7SUFDaEMsQ0FBQzs7OztJQUVKLHFDQUFLOzs7SUFBTDtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQVk7WUFDM0MsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLDhDQUFjOzs7O0lBQXRCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDNUQsT0FBTyxFQUFFLEVBQUUsQ0FBQztTQUNiO1FBQ0QsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQWYsQ0FBZSxFQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3RSxDQUFDOztnQkF0QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxtQkFBbUI7NENBUXZCLFFBQVEsWUFDUixNQUFNLFNBQUMsY0FBYzs7O2dDQWIxQjtDQTZCQyxBQXZCRCxJQXVCQztTQXBCWSxxQkFBcUI7Ozs7OztJQUU5Qiw4Q0FBMEM7Ozs7O0lBQzFDLHlDQUVpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTY2hlbWFCdWlsZGVyIH0gZnJvbSAnLi9idWlsZGVycy9zY2hlbWEuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNDSEVNQV9CVUlMREVSIH0gZnJvbSAnLi9idWlsZGVycy90b2tlbnMnO1xuaW1wb3J0IHsgSnNvbkxkU2NyaXB0RmFjdG9yeSB9IGZyb20gJy4vanNvbi1sZC1zY3JpcHQuZmFjdG9yeSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVkRGF0YUZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNjcmlwdEJ1aWxkZXI6IEpzb25MZFNjcmlwdEZhY3RvcnksXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFNDSEVNQV9CVUlMREVSKVxuICAgIHByaXZhdGUgYnVpbGRlcnM6IFNjaGVtYUJ1aWxkZXJbXVxuICApIHt9XG5cbiAgYnVpbGQoKSB7XG4gICAgdGhpcy5jb2xsZWN0U2NoZW1hcygpLnN1YnNjcmliZSgoc2NoZW1hOiB7fVtdKSA9PiB7XG4gICAgICB0aGlzLnNjcmlwdEJ1aWxkZXIuYnVpbGQoc2NoZW1hKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY29sbGVjdFNjaGVtYXMoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIGlmICghdGhpcy5zY3JpcHRCdWlsZGVyLmlzSnNvbkxkUmVxdWlyZWQoKSB8fCAhdGhpcy5idWlsZGVycykge1xuICAgICAgcmV0dXJuIG9mKCk7XG4gICAgfVxuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KHRoaXMuYnVpbGRlcnMubWFwKGJ1aWxkZXIgPT4gYnVpbGRlci5idWlsZCgpKSkucGlwZSgpO1xuICB9XG59XG4iXX0=