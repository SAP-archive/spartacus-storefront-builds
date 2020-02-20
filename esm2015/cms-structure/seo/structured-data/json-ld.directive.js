import { __decorate } from "tslib";
import { Directive, HostBinding, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { JsonLdScriptFactory } from './json-ld-script.factory';
/**
 * Low level directive that adds a json-ld script tag to the component.
 * This code bypasses the strict XSS security, as otherwise we're not able
 * to append a script tag with JS inside.
 */
let JsonLdDirective = class JsonLdDirective {
    constructor(jsonLdScriptFactory, sanitizer) {
        this.jsonLdScriptFactory = jsonLdScriptFactory;
        this.sanitizer = sanitizer;
    }
    set cxJsonLd(schema) {
        this.writeJsonLd(schema);
    }
    writeJsonLd(schema) {
        if (schema && this.jsonLdScriptFactory.isJsonLdRequired()) {
            const sanitizedSchema = this.jsonLdScriptFactory.sanitize(schema);
            const html = `<script type="application/ld+json">${sanitizedSchema}</script>`;
            this.jsonLD = this.sanitizer.bypassSecurityTrustHtml(html);
        }
    }
};
JsonLdDirective.ctorParameters = () => [
    { type: JsonLdScriptFactory },
    { type: DomSanitizer }
];
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
export { JsonLdDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3Nlby9zdHJ1Y3R1cmVkLWRhdGEvanNvbi1sZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRS9EOzs7O0dBSUc7QUFJSCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBTzFCLFlBQ1ksbUJBQXdDLEVBQ3hDLFNBQXVCO1FBRHZCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUNoQyxDQUFDO0lBVEssSUFBSSxRQUFRLENBQUMsTUFBdUI7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBU08sV0FBVyxDQUFDLE1BQVU7UUFDNUIsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLEVBQUU7WUFDekQsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRSxNQUFNLElBQUksR0FBRyxzQ0FBc0MsZUFBZSxXQUFXLENBQUM7WUFDOUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBWGtDLG1CQUFtQjtZQUM3QixZQUFZOztBQVIxQjtJQUFSLEtBQUssRUFBRTsrQ0FFUDtBQUV5QjtJQUF6QixXQUFXLENBQUMsV0FBVyxDQUFDOytDQUFrQjtBQUxoQyxlQUFlO0lBSDNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO0tBQ3ZCLENBQUM7R0FDVyxlQUFlLENBbUIzQjtTQW5CWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEpzb25MZFNjcmlwdEZhY3RvcnkgfSBmcm9tICcuL2pzb24tbGQtc2NyaXB0LmZhY3RvcnknO1xuXG4vKipcbiAqIExvdyBsZXZlbCBkaXJlY3RpdmUgdGhhdCBhZGRzIGEganNvbi1sZCBzY3JpcHQgdGFnIHRvIHRoZSBjb21wb25lbnQuXG4gKiBUaGlzIGNvZGUgYnlwYXNzZXMgdGhlIHN0cmljdCBYU1Mgc2VjdXJpdHksIGFzIG90aGVyd2lzZSB3ZSdyZSBub3QgYWJsZVxuICogdG8gYXBwZW5kIGEgc2NyaXB0IHRhZyB3aXRoIEpTIGluc2lkZS5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4SnNvbkxkXScsXG59KVxuZXhwb3J0IGNsYXNzIEpzb25MZERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIHNldCBjeEpzb25MZChzY2hlbWE6IHN0cmluZyB8IG51bWJlcikge1xuICAgIHRoaXMud3JpdGVKc29uTGQoc2NoZW1hKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnaW5uZXJIVE1MJykganNvbkxEOiBTYWZlSHRtbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQganNvbkxkU2NyaXB0RmFjdG9yeTogSnNvbkxkU2NyaXB0RmFjdG9yeSxcbiAgICBwcm90ZWN0ZWQgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcbiAgKSB7fVxuXG4gIHByaXZhdGUgd3JpdGVKc29uTGQoc2NoZW1hOiB7fSkge1xuICAgIGlmIChzY2hlbWEgJiYgdGhpcy5qc29uTGRTY3JpcHRGYWN0b3J5LmlzSnNvbkxkUmVxdWlyZWQoKSkge1xuICAgICAgY29uc3Qgc2FuaXRpemVkU2NoZW1hID0gdGhpcy5qc29uTGRTY3JpcHRGYWN0b3J5LnNhbml0aXplKHNjaGVtYSk7XG4gICAgICBjb25zdCBodG1sID0gYDxzY3JpcHQgdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIj4ke3Nhbml0aXplZFNjaGVtYX08L3NjcmlwdD5gO1xuICAgICAgdGhpcy5qc29uTEQgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==