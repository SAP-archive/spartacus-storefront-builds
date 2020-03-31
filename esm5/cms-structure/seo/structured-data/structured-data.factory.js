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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlZC1kYXRhLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3Nlby9zdHJ1Y3R1cmVkLWRhdGEvc3RydWN0dXJlZC1kYXRhLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFLL0Q7SUFDRSwrQkFDVSxhQUFrQyxFQUdsQyxRQUF5QjtRQUh6QixrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFHbEMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7SUFDaEMsQ0FBQztJQUVKLHFDQUFLLEdBQUw7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFZO1lBQzNDLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDhDQUFjLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDNUQsT0FBTyxFQUFFLEVBQUUsQ0FBQztTQUNiO1FBQ0QsT0FBTyxhQUFhLENBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUNoRCxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7Z0JBbkJ3QixtQkFBbUI7NENBQ3pDLFFBQVEsWUFDUixNQUFNLFNBQUMsY0FBYzs7O0lBSmIscUJBQXFCO1FBSGpDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7UUFJRyxXQUFBLFFBQVEsRUFBRSxDQUFBO1FBQ1YsV0FBQSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUE7T0FKZCxxQkFBcUIsQ0FzQmpDO2dDQS9CRDtDQStCQyxBQXRCRCxJQXNCQztTQXRCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2NoZW1hQnVpbGRlciB9IGZyb20gJy4vYnVpbGRlcnMvc2NoZW1hLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTQ0hFTUFfQlVJTERFUiB9IGZyb20gJy4vYnVpbGRlcnMvdG9rZW5zJztcbmltcG9ydCB7IEpzb25MZFNjcmlwdEZhY3RvcnkgfSBmcm9tICcuL2pzb24tbGQtc2NyaXB0LmZhY3RvcnknO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlZERhdGFGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzY3JpcHRCdWlsZGVyOiBKc29uTGRTY3JpcHRGYWN0b3J5LFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChTQ0hFTUFfQlVJTERFUilcbiAgICBwcml2YXRlIGJ1aWxkZXJzOiBTY2hlbWFCdWlsZGVyW11cbiAgKSB7fVxuXG4gIGJ1aWxkKCkge1xuICAgIHRoaXMuY29sbGVjdFNjaGVtYXMoKS5zdWJzY3JpYmUoKHNjaGVtYToge31bXSkgPT4ge1xuICAgICAgdGhpcy5zY3JpcHRCdWlsZGVyLmJ1aWxkKHNjaGVtYSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvbGxlY3RTY2hlbWFzKCk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBpZiAoIXRoaXMuc2NyaXB0QnVpbGRlci5pc0pzb25MZFJlcXVpcmVkKCkgfHwgIXRoaXMuYnVpbGRlcnMpIHtcbiAgICAgIHJldHVybiBvZigpO1xuICAgIH1cbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgIHRoaXMuYnVpbGRlcnMubWFwKChidWlsZGVyKSA9PiBidWlsZGVyLmJ1aWxkKCkpXG4gICAgKS5waXBlKCk7XG4gIH1cbn1cbiJdfQ==