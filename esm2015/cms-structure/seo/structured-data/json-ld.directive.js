import { Directive, HostBinding, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { JsonLdScriptFactory } from './json-ld-script.factory';
/**
 * Low level directive that adds a json-ld script tag to the component.
 * This code bypasses the strict XSS security, as otherwise we're not able
 * to append a script tag with JS inside.
 *
 * This helper directive is actually not used in Spartacus, as Spartacus
 * appends json-ld the data to the document body.
 *
 * This directive can however be used by merchants to write static schema data
 * to the DOM in a save way.
 */
export class JsonLdDirective {
    constructor(jsonLdScriptFactory, sanitizer) {
        this.jsonLdScriptFactory = jsonLdScriptFactory;
        this.sanitizer = sanitizer;
    }
    /**
     * Writes the schema data to a json-ld script element.
     */
    set cxJsonLd(schema) {
        this.jsonLD = this.generateJsonLdScript(schema);
    }
    /**
     * Returns the json-ld script tag with the schema data. The script is
     * _bypassing_ sanitization explicitly.
     */
    generateJsonLdScript(schema) {
        if (schema && this.jsonLdScriptFactory.isJsonLdRequired()) {
            const sanitizedSchema = this.jsonLdScriptFactory.sanitize(schema);
            const html = `<script type="application/ld+json">${sanitizedSchema}</script>`;
            return this.sanitizer.bypassSecurityTrustHtml(html);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtc3RydWN0dXJlL3Nlby9zdHJ1Y3R1cmVkLWRhdGEvanNvbi1sZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUvRDs7Ozs7Ozs7OztHQVVHO0FBSUgsTUFBTSxPQUFPLGVBQWU7SUFVMUIsWUFDWSxtQkFBd0MsRUFDeEMsU0FBdUI7UUFEdkIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQ2hDLENBQUM7SUFaSjs7T0FFRztJQUNILElBQWEsUUFBUSxDQUFDLE1BQW1CO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFTRDs7O09BR0c7SUFDTyxvQkFBb0IsQ0FBQyxNQUFtQjtRQUNoRCxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtZQUN6RCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xFLE1BQU0sSUFBSSxHQUFHLHNDQUFzQyxlQUFlLFdBQVcsQ0FBQztZQUM5RSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7WUFmUSxtQkFBbUI7WUFEbkIsWUFBWTs7O3VCQXFCbEIsS0FBSztxQkFJTCxXQUFXLFNBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBKc29uTGRTY3JpcHRGYWN0b3J5IH0gZnJvbSAnLi9qc29uLWxkLXNjcmlwdC5mYWN0b3J5JztcblxuLyoqXG4gKiBMb3cgbGV2ZWwgZGlyZWN0aXZlIHRoYXQgYWRkcyBhIGpzb24tbGQgc2NyaXB0IHRhZyB0byB0aGUgY29tcG9uZW50LlxuICogVGhpcyBjb2RlIGJ5cGFzc2VzIHRoZSBzdHJpY3QgWFNTIHNlY3VyaXR5LCBhcyBvdGhlcndpc2Ugd2UncmUgbm90IGFibGVcbiAqIHRvIGFwcGVuZCBhIHNjcmlwdCB0YWcgd2l0aCBKUyBpbnNpZGUuXG4gKlxuICogVGhpcyBoZWxwZXIgZGlyZWN0aXZlIGlzIGFjdHVhbGx5IG5vdCB1c2VkIGluIFNwYXJ0YWN1cywgYXMgU3BhcnRhY3VzXG4gKiBhcHBlbmRzIGpzb24tbGQgdGhlIGRhdGEgdG8gdGhlIGRvY3VtZW50IGJvZHkuXG4gKlxuICogVGhpcyBkaXJlY3RpdmUgY2FuIGhvd2V2ZXIgYmUgdXNlZCBieSBtZXJjaGFudHMgdG8gd3JpdGUgc3RhdGljIHNjaGVtYSBkYXRhXG4gKiB0byB0aGUgRE9NIGluIGEgc2F2ZSB3YXkuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeEpzb25MZF0nLFxufSlcbmV4cG9ydCBjbGFzcyBKc29uTGREaXJlY3RpdmUge1xuICAvKipcbiAgICogV3JpdGVzIHRoZSBzY2hlbWEgZGF0YSB0byBhIGpzb24tbGQgc2NyaXB0IGVsZW1lbnQuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgY3hKc29uTGQoc2NoZW1hOiBzdHJpbmcgfCB7fSkge1xuICAgIHRoaXMuanNvbkxEID0gdGhpcy5nZW5lcmF0ZUpzb25MZFNjcmlwdChzY2hlbWEpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdpbm5lckhUTUwnKSBqc29uTEQ6IFNhZmVIdG1sO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBqc29uTGRTY3JpcHRGYWN0b3J5OiBKc29uTGRTY3JpcHRGYWN0b3J5LFxuICAgIHByb3RlY3RlZCBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGpzb24tbGQgc2NyaXB0IHRhZyB3aXRoIHRoZSBzY2hlbWEgZGF0YS4gVGhlIHNjcmlwdCBpc1xuICAgKiBfYnlwYXNzaW5nXyBzYW5pdGl6YXRpb24gZXhwbGljaXRseS5cbiAgICovXG4gIHByb3RlY3RlZCBnZW5lcmF0ZUpzb25MZFNjcmlwdChzY2hlbWE6IHN0cmluZyB8IHt9KTogU2FmZUh0bWwge1xuICAgIGlmIChzY2hlbWEgJiYgdGhpcy5qc29uTGRTY3JpcHRGYWN0b3J5LmlzSnNvbkxkUmVxdWlyZWQoKSkge1xuICAgICAgY29uc3Qgc2FuaXRpemVkU2NoZW1hID0gdGhpcy5qc29uTGRTY3JpcHRGYWN0b3J5LnNhbml0aXplKHNjaGVtYSk7XG4gICAgICBjb25zdCBodG1sID0gYDxzY3JpcHQgdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIj4ke3Nhbml0aXplZFNjaGVtYX08L3NjcmlwdD5gO1xuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpO1xuICAgIH1cbiAgfVxufVxuIl19