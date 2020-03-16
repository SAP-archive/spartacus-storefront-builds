import { __decorate } from "tslib";
import { Directive, ElementRef, HostBinding, Input, OnInit, } from '@angular/core';
import { BaseFocusService } from './base-focus.service';
/**
 * Abstract directive that provides a common interface for all focus directives:
 * - Block Focus
 * - Persist Focus
 * - Escape Focus
 * - Auto Focus
 * - Tab Focus
 * - Trap Focus
 * - Lock Focus
 */
let BaseFocusDirective = class BaseFocusDirective {
    constructor(elementRef, service) {
        this.elementRef = elementRef;
        this.service = service;
        this.defaultConfig = {};
    }
    ngOnInit() {
        this.setDefaultConfiguration();
        this.requiredTabindex = -1;
    }
    /**
     * Override the (input) config if it undefined or an empty string, with the
     * `defaultConfig`. The `defaultConfig` might be specified for each directive
     * differently. If a specific directive is used (i.e. `cxAutoFocus`), the
     * specific (inherited) defaultConfig will be used.
     */
    setDefaultConfiguration() {
        if ((!this.config || this.config === '') && this.defaultConfig) {
            this.config = this.defaultConfig;
        }
    }
    /**
     * Helper method to return the host element for the directive
     * given by the `elementRef`.
     */
    get host() {
        return this.elementRef.nativeElement;
    }
    /**
     * Force a tabindex on the host element if it is _requried_ to make the element
     * focusable. If the element is focusable by nature or by a given tabindex, the
     * `tabindex` is not applied.
     *
     * Buttons, active links, etc. do no need an explicit tabindex to receive focus.
     */
    set requiredTabindex(tabindex) {
        if (this.requiresExplicitTabIndex) {
            this.tabindex = tabindex;
        }
    }
    /**
     * Returns true if the host element does not have a tabindex defined
     * and it also doesn't get focus by browsers nature (i.e. button or
     * active link).
     *
     * We keep this utility method private to not pollute the API.
     */
    get requiresExplicitTabIndex() {
        return (this.tabindex === undefined &&
            ['button', 'input', 'select', 'textarea'].indexOf(this.host.tagName.toLowerCase()) === -1 &&
            !(this.host.tagName === 'A' && this.host.hasAttribute('href')));
    }
};
BaseFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: BaseFocusService }
];
__decorate([
    Input(), HostBinding('attr.tabindex')
], BaseFocusDirective.prototype, "tabindex", void 0);
BaseFocusDirective = __decorate([
    Directive()
], BaseFocusDirective);
export { BaseFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9iYXNlL2Jhc2UtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDs7Ozs7Ozs7O0dBU0c7QUFFSCxJQUFzQixrQkFBa0IsR0FBeEMsTUFBc0Isa0JBQWtCO0lBTXRDLFlBQ1ksVUFBbUMsRUFDbkMsT0FBeUI7UUFEekIsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFOM0Isa0JBQWEsR0FBb0IsRUFBRSxDQUFDO0lBTzNDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLHVCQUF1QjtRQUMvQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM5RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBYyxJQUFJO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILElBQWMsZ0JBQWdCLENBQUMsUUFBZ0I7UUFDN0MsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUU7WUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBWSx3QkFBd0I7UUFDbEMsT0FBTyxDQUNMLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUztZQUMzQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQ2hDLEtBQUssQ0FBQyxDQUFDO1lBQ1IsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUMvRCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBMUR5QixVQUFVO1lBQ2IsZ0JBQWdCOztBQUpFO0lBQXRDLEtBQUssRUFBRSxFQUFFLFdBQVcsQ0FBQyxlQUFlLENBQUM7b0RBQWtCO0FBSnBDLGtCQUFrQjtJQUR2QyxTQUFTLEVBQUU7R0FDVSxrQkFBa0IsQ0FpRXZDO1NBakVxQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IEJhc2VGb2N1c1NlcnZpY2UgfSBmcm9tICcuL2Jhc2UtZm9jdXMuc2VydmljZSc7XG5cbi8qKlxuICogQWJzdHJhY3QgZGlyZWN0aXZlIHRoYXQgcHJvdmlkZXMgYSBjb21tb24gaW50ZXJmYWNlIGZvciBhbGwgZm9jdXMgZGlyZWN0aXZlczpcbiAqIC0gQmxvY2sgRm9jdXNcbiAqIC0gUGVyc2lzdCBGb2N1c1xuICogLSBFc2NhcGUgRm9jdXNcbiAqIC0gQXV0byBGb2N1c1xuICogLSBUYWIgRm9jdXNcbiAqIC0gVHJhcCBGb2N1c1xuICogLSBMb2NrIEZvY3VzXG4gKi9cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VGb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByb3RlY3RlZCBjb25maWc6IEJhc2VGb2N1c0NvbmZpZztcbiAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IEJhc2VGb2N1c0NvbmZpZyA9IHt9O1xuXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpIHRhYmluZGV4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBCYXNlRm9jdXNTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldERlZmF1bHRDb25maWd1cmF0aW9uKCk7XG4gICAgdGhpcy5yZXF1aXJlZFRhYmluZGV4ID0gLTE7XG4gIH1cblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIChpbnB1dCkgY29uZmlnIGlmIGl0IHVuZGVmaW5lZCBvciBhbiBlbXB0eSBzdHJpbmcsIHdpdGggdGhlXG4gICAqIGBkZWZhdWx0Q29uZmlnYC4gVGhlIGBkZWZhdWx0Q29uZmlnYCBtaWdodCBiZSBzcGVjaWZpZWQgZm9yIGVhY2ggZGlyZWN0aXZlXG4gICAqIGRpZmZlcmVudGx5LiBJZiBhIHNwZWNpZmljIGRpcmVjdGl2ZSBpcyB1c2VkIChpLmUuIGBjeEF1dG9Gb2N1c2ApLCB0aGVcbiAgICogc3BlY2lmaWMgKGluaGVyaXRlZCkgZGVmYXVsdENvbmZpZyB3aWxsIGJlIHVzZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgc2V0RGVmYXVsdENvbmZpZ3VyYXRpb24oKTogdm9pZCB7XG4gICAgaWYgKCghdGhpcy5jb25maWcgfHwgdGhpcy5jb25maWcgPT09ICcnKSAmJiB0aGlzLmRlZmF1bHRDb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5kZWZhdWx0Q29uZmlnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIHJldHVybiB0aGUgaG9zdCBlbGVtZW50IGZvciB0aGUgZGlyZWN0aXZlXG4gICAqIGdpdmVuIGJ5IHRoZSBgZWxlbWVudFJlZmAuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGhvc3QoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JjZSBhIHRhYmluZGV4IG9uIHRoZSBob3N0IGVsZW1lbnQgaWYgaXQgaXMgX3JlcXVyaWVkXyB0byBtYWtlIHRoZSBlbGVtZW50XG4gICAqIGZvY3VzYWJsZS4gSWYgdGhlIGVsZW1lbnQgaXMgZm9jdXNhYmxlIGJ5IG5hdHVyZSBvciBieSBhIGdpdmVuIHRhYmluZGV4LCB0aGVcbiAgICogYHRhYmluZGV4YCBpcyBub3QgYXBwbGllZC5cbiAgICpcbiAgICogQnV0dG9ucywgYWN0aXZlIGxpbmtzLCBldGMuIGRvIG5vIG5lZWQgYW4gZXhwbGljaXQgdGFiaW5kZXggdG8gcmVjZWl2ZSBmb2N1cy5cbiAgICovXG4gIHByb3RlY3RlZCBzZXQgcmVxdWlyZWRUYWJpbmRleCh0YWJpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMucmVxdWlyZXNFeHBsaWNpdFRhYkluZGV4KSB7XG4gICAgICB0aGlzLnRhYmluZGV4ID0gdGFiaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgaG9zdCBlbGVtZW50IGRvZXMgbm90IGhhdmUgYSB0YWJpbmRleCBkZWZpbmVkXG4gICAqIGFuZCBpdCBhbHNvIGRvZXNuJ3QgZ2V0IGZvY3VzIGJ5IGJyb3dzZXJzIG5hdHVyZSAoaS5lLiBidXR0b24gb3JcbiAgICogYWN0aXZlIGxpbmspLlxuICAgKlxuICAgKiBXZSBrZWVwIHRoaXMgdXRpbGl0eSBtZXRob2QgcHJpdmF0ZSB0byBub3QgcG9sbHV0ZSB0aGUgQVBJLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgcmVxdWlyZXNFeHBsaWNpdFRhYkluZGV4KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnRhYmluZGV4ID09PSB1bmRlZmluZWQgJiZcbiAgICAgIFsnYnV0dG9uJywgJ2lucHV0JywgJ3NlbGVjdCcsICd0ZXh0YXJlYSddLmluZGV4T2YoXG4gICAgICAgIHRoaXMuaG9zdC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICkgPT09IC0xICYmXG4gICAgICAhKHRoaXMuaG9zdC50YWdOYW1lID09PSAnQScgJiYgdGhpcy5ob3N0Lmhhc0F0dHJpYnV0ZSgnaHJlZicpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==