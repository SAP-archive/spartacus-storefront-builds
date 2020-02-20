import { __decorate, __param } from "tslib";
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
    StructuredDataFactory.prototype.build = function () {
        var _this = this;
        this.collectSchemas().subscribe(function (schema) {
            _this.scriptBuilder.build(schema);
        });
    };
    StructuredDataFactory.prototype.collectSchemas = function () {
        if (!this.scriptBuilder.isJsonLdRequired() || !this.builders) {
            return of();
        }
        return combineLatest(this.builders.map(function (builder) { return builder.build(); })).pipe();
    };
    StructuredDataFactory.ctorParameters = function () { return [
        { type: JsonLdScriptFactory },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [SCHEMA_BUILDER,] }] }
    ]; };
    StructuredDataFactory.ɵprov = i0.ɵɵdefineInjectable({ factory: function StructuredDataFactory_Factory() { return new StructuredDataFactory(i0.ɵɵinject(i1.JsonLdScriptFactory), i0.ɵɵinject(i2.SCHEMA_BUILDER, 8)); }, token: StructuredDataFactory, providedIn: "root" });
    StructuredDataFactory = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(1, Optional()),
        __param(1, Inject(SCHEMA_BUILDER))
    ], StructuredDataFactory);
    return StructuredDataFactory;
}());
export { StructuredDataFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlZC1kYXRhLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3Nlby9zdHJ1Y3R1cmVkLWRhdGEvc3RydWN0dXJlZC1kYXRhLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFLL0Q7SUFDRSwrQkFDVSxhQUFrQyxFQUdsQyxRQUF5QjtRQUh6QixrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFHbEMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7SUFDaEMsQ0FBQztJQUVKLHFDQUFLLEdBQUw7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFZO1lBQzNDLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDhDQUFjLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDNUQsT0FBTyxFQUFFLEVBQUUsQ0FBQztTQUNiO1FBQ0QsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3RSxDQUFDOztnQkFqQndCLG1CQUFtQjs0Q0FDekMsUUFBUSxZQUNSLE1BQU0sU0FBQyxjQUFjOzs7SUFKYixxQkFBcUI7UUFIakMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztRQUlHLFdBQUEsUUFBUSxFQUFFLENBQUE7UUFDVixXQUFBLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQTtPQUpkLHFCQUFxQixDQW9CakM7Z0NBN0JEO0NBNkJDLEFBcEJELElBb0JDO1NBcEJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTY2hlbWFCdWlsZGVyIH0gZnJvbSAnLi9idWlsZGVycy9zY2hlbWEuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNDSEVNQV9CVUlMREVSIH0gZnJvbSAnLi9idWlsZGVycy90b2tlbnMnO1xuaW1wb3J0IHsgSnNvbkxkU2NyaXB0RmFjdG9yeSB9IGZyb20gJy4vanNvbi1sZC1zY3JpcHQuZmFjdG9yeSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVkRGF0YUZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNjcmlwdEJ1aWxkZXI6IEpzb25MZFNjcmlwdEZhY3RvcnksXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFNDSEVNQV9CVUlMREVSKVxuICAgIHByaXZhdGUgYnVpbGRlcnM6IFNjaGVtYUJ1aWxkZXJbXVxuICApIHt9XG5cbiAgYnVpbGQoKSB7XG4gICAgdGhpcy5jb2xsZWN0U2NoZW1hcygpLnN1YnNjcmliZSgoc2NoZW1hOiB7fVtdKSA9PiB7XG4gICAgICB0aGlzLnNjcmlwdEJ1aWxkZXIuYnVpbGQoc2NoZW1hKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY29sbGVjdFNjaGVtYXMoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIGlmICghdGhpcy5zY3JpcHRCdWlsZGVyLmlzSnNvbkxkUmVxdWlyZWQoKSB8fCAhdGhpcy5idWlsZGVycykge1xuICAgICAgcmV0dXJuIG9mKCk7XG4gICAgfVxuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KHRoaXMuYnVpbGRlcnMubWFwKGJ1aWxkZXIgPT4gYnVpbGRlci5idWlsZCgpKSkucGlwZSgpO1xuICB9XG59XG4iXX0=