import { Directive, HostBinding, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { JsonLdScriptFactory } from './json-ld-script.factory';
/**
 * Low level directive that adds a json-ld script tag to the component.
 * This code bypasses the strict XSS security, as otherwise we're not able
 * to append a script tag with JS inside.
 */
export class JsonLdDirective {
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
}
JsonLdDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxJsonLd]',
            },] }
];
JsonLdDirective.ctorParameters = () => [
    { type: JsonLdScriptFactory },
    { type: DomSanitizer }
];
JsonLdDirective.propDecorators = {
    cxJsonLd: [{ type: Input }],
    jsonLD: [{ type: HostBinding, args: ['innerHTML',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtc3RydWN0dXJlL3Nlby9zdHJ1Y3R1cmVkLWRhdGEvanNvbi1sZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUvRDs7OztHQUlHO0FBSUgsTUFBTSxPQUFPLGVBQWU7SUFPMUIsWUFDWSxtQkFBd0MsRUFDeEMsU0FBdUI7UUFEdkIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQ2hDLENBQUM7SUFUSixJQUFhLFFBQVEsQ0FBQyxNQUF1QjtRQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFTTyxXQUFXLENBQUMsTUFBVTtRQUM1QixJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtZQUN6RCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xFLE1BQU0sSUFBSSxHQUFHLHNDQUFzQyxlQUFlLFdBQVcsQ0FBQztZQUM5RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7WUFUUSxtQkFBbUI7WUFEbkIsWUFBWTs7O3VCQVlsQixLQUFLO3FCQUlMLFdBQVcsU0FBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEpzb25MZFNjcmlwdEZhY3RvcnkgfSBmcm9tICcuL2pzb24tbGQtc2NyaXB0LmZhY3RvcnknO1xuXG4vKipcbiAqIExvdyBsZXZlbCBkaXJlY3RpdmUgdGhhdCBhZGRzIGEganNvbi1sZCBzY3JpcHQgdGFnIHRvIHRoZSBjb21wb25lbnQuXG4gKiBUaGlzIGNvZGUgYnlwYXNzZXMgdGhlIHN0cmljdCBYU1Mgc2VjdXJpdHksIGFzIG90aGVyd2lzZSB3ZSdyZSBub3QgYWJsZVxuICogdG8gYXBwZW5kIGEgc2NyaXB0IHRhZyB3aXRoIEpTIGluc2lkZS5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4SnNvbkxkXScsXG59KVxuZXhwb3J0IGNsYXNzIEpzb25MZERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIHNldCBjeEpzb25MZChzY2hlbWE6IHN0cmluZyB8IG51bWJlcikge1xuICAgIHRoaXMud3JpdGVKc29uTGQoc2NoZW1hKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnaW5uZXJIVE1MJykganNvbkxEOiBTYWZlSHRtbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQganNvbkxkU2NyaXB0RmFjdG9yeTogSnNvbkxkU2NyaXB0RmFjdG9yeSxcbiAgICBwcm90ZWN0ZWQgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcbiAgKSB7fVxuXG4gIHByaXZhdGUgd3JpdGVKc29uTGQoc2NoZW1hOiB7fSkge1xuICAgIGlmIChzY2hlbWEgJiYgdGhpcy5qc29uTGRTY3JpcHRGYWN0b3J5LmlzSnNvbkxkUmVxdWlyZWQoKSkge1xuICAgICAgY29uc3Qgc2FuaXRpemVkU2NoZW1hID0gdGhpcy5qc29uTGRTY3JpcHRGYWN0b3J5LnNhbml0aXplKHNjaGVtYSk7XG4gICAgICBjb25zdCBodG1sID0gYDxzY3JpcHQgdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIj4ke3Nhbml0aXplZFNjaGVtYX08L3NjcmlwdD5gO1xuICAgICAgdGhpcy5qc29uTEQgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==