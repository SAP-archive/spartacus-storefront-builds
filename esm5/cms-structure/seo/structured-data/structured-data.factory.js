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
        this.subscription = this.collectSchemas().subscribe(function (schema) {
            _this.scriptBuilder.build(schema);
        });
    };
    StructuredDataFactory.prototype.collectSchemas = function () {
        if (!this.scriptBuilder.isJsonLdRequired() || !this.builders) {
            return of();
        }
        return combineLatest(this.builders.map(function (builder) { return builder.build(); })).pipe();
    };
    StructuredDataFactory.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlZC1kYXRhLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3Nlby9zdHJ1Y3R1cmVkLWRhdGEvc3RydWN0dXJlZC1kYXRhLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBSy9EO0lBQ0UsK0JBQ1UsYUFBa0MsRUFHbEMsUUFBeUI7UUFIekIsa0JBQWEsR0FBYixhQUFhLENBQXFCO1FBR2xDLGFBQVEsR0FBUixRQUFRLENBQWlCO0lBQ2hDLENBQUM7SUFJSixxQ0FBSyxHQUFMO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFZO1lBQy9ELEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDhDQUFjLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDNUQsT0FBTyxFQUFFLEVBQUUsQ0FBQztTQUNiO1FBQ0QsT0FBTyxhQUFhLENBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUNoRCxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7O2dCQTNCd0IsbUJBQW1COzRDQUN6QyxRQUFRLFlBQ1IsTUFBTSxTQUFDLGNBQWM7OztJQUpiLHFCQUFxQjtRQUhqQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO1FBSUcsV0FBQSxRQUFRLEVBQUUsQ0FBQTtRQUNWLFdBQUEsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFBO09BSmQscUJBQXFCLENBOEJqQztnQ0F2Q0Q7Q0F1Q0MsQUE5QkQsSUE4QkM7U0E5QlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTY2hlbWFCdWlsZGVyIH0gZnJvbSAnLi9idWlsZGVycy9zY2hlbWEuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNDSEVNQV9CVUlMREVSIH0gZnJvbSAnLi9idWlsZGVycy90b2tlbnMnO1xuaW1wb3J0IHsgSnNvbkxkU2NyaXB0RmFjdG9yeSB9IGZyb20gJy4vanNvbi1sZC1zY3JpcHQuZmFjdG9yeSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVkRGF0YUZhY3RvcnkgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNjcmlwdEJ1aWxkZXI6IEpzb25MZFNjcmlwdEZhY3RvcnksXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFNDSEVNQV9CVUlMREVSKVxuICAgIHByaXZhdGUgYnVpbGRlcnM6IFNjaGVtYUJ1aWxkZXJbXVxuICApIHt9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBidWlsZCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuY29sbGVjdFNjaGVtYXMoKS5zdWJzY3JpYmUoKHNjaGVtYToge31bXSkgPT4ge1xuICAgICAgdGhpcy5zY3JpcHRCdWlsZGVyLmJ1aWxkKHNjaGVtYSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvbGxlY3RTY2hlbWFzKCk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBpZiAoIXRoaXMuc2NyaXB0QnVpbGRlci5pc0pzb25MZFJlcXVpcmVkKCkgfHwgIXRoaXMuYnVpbGRlcnMpIHtcbiAgICAgIHJldHVybiBvZigpO1xuICAgIH1cbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgIHRoaXMuYnVpbGRlcnMubWFwKChidWlsZGVyKSA9PiBidWlsZGVyLmJ1aWxkKCkpXG4gICAgKS5waXBlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=