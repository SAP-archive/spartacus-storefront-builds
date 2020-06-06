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
        this.subscription = this.collectSchemas().subscribe((schema) => {
            this.scriptBuilder.build(schema);
        });
    }
    collectSchemas() {
        if (!this.scriptBuilder.isJsonLdRequired() || !this.builders) {
            return of();
        }
        return combineLatest(this.builders.map((builder) => builder.build())).pipe();
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlZC1kYXRhLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3Nlby9zdHJ1Y3R1cmVkLWRhdGEvc3RydWN0dXJlZC1kYXRhLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBSy9ELElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBQ2hDLFlBQ1UsYUFBa0MsRUFHbEMsUUFBeUI7UUFIekIsa0JBQWEsR0FBYixhQUFhLENBQXFCO1FBR2xDLGFBQVEsR0FBUixRQUFRLENBQWlCO0lBQ2hDLENBQUM7SUFJSixLQUFLO1FBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBWSxFQUFFLEVBQUU7WUFDbkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sY0FBYztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUM1RCxPQUFPLEVBQUUsRUFBRSxDQUFDO1NBQ2I7UUFDRCxPQUFPLGFBQWEsQ0FDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUNoRCxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7Q0FDRixDQUFBOztZQTVCMEIsbUJBQW1CO3dDQUN6QyxRQUFRLFlBQ1IsTUFBTSxTQUFDLGNBQWM7OztBQUpiLHFCQUFxQjtJQUhqQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0lBSUcsV0FBQSxRQUFRLEVBQUUsQ0FBQTtJQUNWLFdBQUEsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0dBSmQscUJBQXFCLENBOEJqQztTQTlCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9uRGVzdHJveSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNjaGVtYUJ1aWxkZXIgfSBmcm9tICcuL2J1aWxkZXJzL3NjaGVtYS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0NIRU1BX0JVSUxERVIgfSBmcm9tICcuL2J1aWxkZXJzL3Rva2Vucyc7XG5pbXBvcnQgeyBKc29uTGRTY3JpcHRGYWN0b3J5IH0gZnJvbSAnLi9qc29uLWxkLXNjcmlwdC5mYWN0b3J5JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZWREYXRhRmFjdG9yeSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2NyaXB0QnVpbGRlcjogSnNvbkxkU2NyaXB0RmFjdG9yeSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoU0NIRU1BX0JVSUxERVIpXG4gICAgcHJpdmF0ZSBidWlsZGVyczogU2NoZW1hQnVpbGRlcltdXG4gICkge31cblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGJ1aWxkKCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5jb2xsZWN0U2NoZW1hcygpLnN1YnNjcmliZSgoc2NoZW1hOiB7fVtdKSA9PiB7XG4gICAgICB0aGlzLnNjcmlwdEJ1aWxkZXIuYnVpbGQoc2NoZW1hKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY29sbGVjdFNjaGVtYXMoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIGlmICghdGhpcy5zY3JpcHRCdWlsZGVyLmlzSnNvbkxkUmVxdWlyZWQoKSB8fCAhdGhpcy5idWlsZGVycykge1xuICAgICAgcmV0dXJuIG9mKCk7XG4gICAgfVxuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy5idWlsZGVycy5tYXAoKGJ1aWxkZXIpID0+IGJ1aWxkZXIuYnVpbGQoKSlcbiAgICApLnBpcGUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==