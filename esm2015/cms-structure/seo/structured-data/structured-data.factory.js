import { __decorate, __param } from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { SCHEMA_BUILDER } from './builders/tokens';
import { JsonLdScriptFactory } from './json-ld-script.factory';
import * as i0 from "@angular/core";
import * as i1 from "./json-ld-script.factory";
import * as i2 from "./builders/tokens";
let StructuredDataFactory = class StructuredDataFactory {
    constructor(scriptBuilder, builders) {
        this.scriptBuilder = scriptBuilder;
        this.builders = builders;
    }
    build() {
        this.collectSchemas().subscribe((schema) => {
            this.scriptBuilder.build(schema);
        });
    }
    collectSchemas() {
        if (!this.scriptBuilder.isJsonLdRequired() || !this.builders) {
            return of();
        }
        return combineLatest(this.builders.map(builder => builder.build())).pipe();
    }
};
StructuredDataFactory.ctorParameters = () => [
    { type: JsonLdScriptFactory },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [SCHEMA_BUILDER,] }] }
];
StructuredDataFactory.ɵprov = i0.ɵɵdefineInjectable({ factory: function StructuredDataFactory_Factory() { return new StructuredDataFactory(i0.ɵɵinject(i1.JsonLdScriptFactory), i0.ɵɵinject(i2.SCHEMA_BUILDER, 8)); }, token: StructuredDataFactory, providedIn: "root" });
StructuredDataFactory = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(1, Optional()),
    __param(1, Inject(SCHEMA_BUILDER))
], StructuredDataFactory);
export { StructuredDataFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlZC1kYXRhLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3Nlby9zdHJ1Y3R1cmVkLWRhdGEvc3RydWN0dXJlZC1kYXRhLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFLL0QsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFDaEMsWUFDVSxhQUFrQyxFQUdsQyxRQUF5QjtRQUh6QixrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFHbEMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7SUFDaEMsQ0FBQztJQUVKLEtBQUs7UUFDSCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBWSxFQUFFLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sY0FBYztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUM1RCxPQUFPLEVBQUUsRUFBRSxDQUFDO1NBQ2I7UUFDRCxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0UsQ0FBQztDQUNGLENBQUE7O1lBbEIwQixtQkFBbUI7d0NBQ3pDLFFBQVEsWUFDUixNQUFNLFNBQUMsY0FBYzs7O0FBSmIscUJBQXFCO0lBSGpDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7SUFJRyxXQUFBLFFBQVEsRUFBRSxDQUFBO0lBQ1YsV0FBQSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUE7R0FKZCxxQkFBcUIsQ0FvQmpDO1NBcEJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTY2hlbWFCdWlsZGVyIH0gZnJvbSAnLi9idWlsZGVycy9zY2hlbWEuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNDSEVNQV9CVUlMREVSIH0gZnJvbSAnLi9idWlsZGVycy90b2tlbnMnO1xuaW1wb3J0IHsgSnNvbkxkU2NyaXB0RmFjdG9yeSB9IGZyb20gJy4vanNvbi1sZC1zY3JpcHQuZmFjdG9yeSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVkRGF0YUZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNjcmlwdEJ1aWxkZXI6IEpzb25MZFNjcmlwdEZhY3RvcnksXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFNDSEVNQV9CVUlMREVSKVxuICAgIHByaXZhdGUgYnVpbGRlcnM6IFNjaGVtYUJ1aWxkZXJbXVxuICApIHt9XG5cbiAgYnVpbGQoKSB7XG4gICAgdGhpcy5jb2xsZWN0U2NoZW1hcygpLnN1YnNjcmliZSgoc2NoZW1hOiB7fVtdKSA9PiB7XG4gICAgICB0aGlzLnNjcmlwdEJ1aWxkZXIuYnVpbGQoc2NoZW1hKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY29sbGVjdFNjaGVtYXMoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIGlmICghdGhpcy5zY3JpcHRCdWlsZGVyLmlzSnNvbkxkUmVxdWlyZWQoKSB8fCAhdGhpcy5idWlsZGVycykge1xuICAgICAgcmV0dXJuIG9mKCk7XG4gICAgfVxuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KHRoaXMuYnVpbGRlcnMubWFwKGJ1aWxkZXIgPT4gYnVpbGRlci5idWlsZCgpKSkucGlwZSgpO1xuICB9XG59XG4iXX0=