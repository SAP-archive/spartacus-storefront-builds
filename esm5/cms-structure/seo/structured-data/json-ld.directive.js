import { __decorate } from "tslib";
import { Directive, HostBinding, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { JsonLdScriptFactory } from './json-ld-script.factory';
/**
 * Low level directive that adds a json-ld script tag to the component.
 * This code bypasses the strict XSS security, as otherwise we're not able
 * to append a script tag with JS inside.
 */
var JsonLdDirective = /** @class */ (function () {
    function JsonLdDirective(jsonLdScriptFactory, sanitizer) {
        this.jsonLdScriptFactory = jsonLdScriptFactory;
        this.sanitizer = sanitizer;
    }
    Object.defineProperty(JsonLdDirective.prototype, "cxJsonLd", {
        set: function (schema) {
            this.writeJsonLd(schema);
        },
        enumerable: true,
        configurable: true
    });
    JsonLdDirective.prototype.writeJsonLd = function (schema) {
        if (schema && this.jsonLdScriptFactory.isJsonLdRequired()) {
            var sanitizedSchema = this.jsonLdScriptFactory.sanitize(schema);
            var html = "<script type=\"application/ld+json\">" + sanitizedSchema + "</script>";
            this.jsonLD = this.sanitizer.bypassSecurityTrustHtml(html);
        }
    };
    JsonLdDirective.ctorParameters = function () { return [
        { type: JsonLdScriptFactory },
        { type: DomSanitizer }
    ]; };
    __decorate([
        Input()
    ], JsonLdDirective.prototype, "cxJsonLd", null);
    __decorate([
        HostBinding('innerHTML')
    ], JsonLdDirective.prototype, "jsonLD", void 0);
    JsonLdDirective = __decorate([
        Directive({
            selector: '[cxJsonLd]',
        })
    ], JsonLdDirective);
    return JsonLdDirective;
}());
export { JsonLdDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3Nlby9zdHJ1Y3R1cmVkLWRhdGEvanNvbi1sZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRS9EOzs7O0dBSUc7QUFJSDtJQU9FLHlCQUNZLG1CQUF3QyxFQUN4QyxTQUF1QjtRQUR2Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDaEMsQ0FBQztJQVRLLHNCQUFJLHFDQUFRO2FBQVosVUFBYSxNQUF1QjtZQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBU08scUNBQVcsR0FBbkIsVUFBb0IsTUFBVTtRQUM1QixJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtZQUN6RCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xFLElBQU0sSUFBSSxHQUFHLDBDQUFzQyxlQUFlLGNBQVcsQ0FBQztZQUM5RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOztnQkFWZ0MsbUJBQW1CO2dCQUM3QixZQUFZOztJQVIxQjtRQUFSLEtBQUssRUFBRTttREFFUDtJQUV5QjtRQUF6QixXQUFXLENBQUMsV0FBVyxDQUFDO21EQUFrQjtJQUxoQyxlQUFlO1FBSDNCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1NBQ3ZCLENBQUM7T0FDVyxlQUFlLENBbUIzQjtJQUFELHNCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FuQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBKc29uTGRTY3JpcHRGYWN0b3J5IH0gZnJvbSAnLi9qc29uLWxkLXNjcmlwdC5mYWN0b3J5JztcblxuLyoqXG4gKiBMb3cgbGV2ZWwgZGlyZWN0aXZlIHRoYXQgYWRkcyBhIGpzb24tbGQgc2NyaXB0IHRhZyB0byB0aGUgY29tcG9uZW50LlxuICogVGhpcyBjb2RlIGJ5cGFzc2VzIHRoZSBzdHJpY3QgWFNTIHNlY3VyaXR5LCBhcyBvdGhlcndpc2Ugd2UncmUgbm90IGFibGVcbiAqIHRvIGFwcGVuZCBhIHNjcmlwdCB0YWcgd2l0aCBKUyBpbnNpZGUuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeEpzb25MZF0nLFxufSlcbmV4cG9ydCBjbGFzcyBKc29uTGREaXJlY3RpdmUge1xuICBASW5wdXQoKSBzZXQgY3hKc29uTGQoc2NoZW1hOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICB0aGlzLndyaXRlSnNvbkxkKHNjaGVtYSk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2lubmVySFRNTCcpIGpzb25MRDogU2FmZUh0bWw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGpzb25MZFNjcmlwdEZhY3Rvcnk6IEpzb25MZFNjcmlwdEZhY3RvcnksXG4gICAgcHJvdGVjdGVkIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG4gICkge31cblxuICBwcml2YXRlIHdyaXRlSnNvbkxkKHNjaGVtYToge30pIHtcbiAgICBpZiAoc2NoZW1hICYmIHRoaXMuanNvbkxkU2NyaXB0RmFjdG9yeS5pc0pzb25MZFJlcXVpcmVkKCkpIHtcbiAgICAgIGNvbnN0IHNhbml0aXplZFNjaGVtYSA9IHRoaXMuanNvbkxkU2NyaXB0RmFjdG9yeS5zYW5pdGl6ZShzY2hlbWEpO1xuICAgICAgY29uc3QgaHRtbCA9IGA8c2NyaXB0IHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCI+JHtzYW5pdGl6ZWRTY2hlbWF9PC9zY3JpcHQ+YDtcbiAgICAgIHRoaXMuanNvbkxEID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCk7XG4gICAgfVxuICB9XG59XG4iXX0=