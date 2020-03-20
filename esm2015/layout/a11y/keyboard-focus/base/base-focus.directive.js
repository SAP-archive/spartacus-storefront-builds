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
        /**
         * A default config can be provided for each directive if a specific focus directive
         * is used directly. i.e. `<div cxAutoFocus></div>`
         */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9iYXNlL2Jhc2UtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDs7Ozs7Ozs7O0dBU0c7QUFFSCxJQUFzQixrQkFBa0IsR0FBeEMsTUFBc0Isa0JBQWtCO0lBZXRDLFlBQ1ksVUFBbUMsRUFDbkMsT0FBeUI7UUFEekIsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFWckM7OztXQUdHO1FBQ08sa0JBQWEsR0FBb0IsRUFBRSxDQUFDO0lBTzNDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLHVCQUF1QjtRQUMvQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM5RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBYyxJQUFJO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILElBQWMsZ0JBQWdCLENBQUMsUUFBZ0I7UUFDN0MsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUU7WUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBWSx3QkFBd0I7UUFDbEMsT0FBTyxDQUNMLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUztZQUMzQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQ2hDLEtBQUssQ0FBQyxDQUFDO1lBQ1IsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUMvRCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBMUR5QixVQUFVO1lBQ2IsZ0JBQWdCOztBQUpFO0lBQXRDLEtBQUssRUFBRSxFQUFFLFdBQVcsQ0FBQyxlQUFlLENBQUM7b0RBQWtCO0FBYnBDLGtCQUFrQjtJQUR2QyxTQUFTLEVBQUU7R0FDVSxrQkFBa0IsQ0EwRXZDO1NBMUVxQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IEJhc2VGb2N1c1NlcnZpY2UgfSBmcm9tICcuL2Jhc2UtZm9jdXMuc2VydmljZSc7XG5cbi8qKlxuICogQWJzdHJhY3QgZGlyZWN0aXZlIHRoYXQgcHJvdmlkZXMgYSBjb21tb24gaW50ZXJmYWNlIGZvciBhbGwgZm9jdXMgZGlyZWN0aXZlczpcbiAqIC0gQmxvY2sgRm9jdXNcbiAqIC0gUGVyc2lzdCBGb2N1c1xuICogLSBFc2NhcGUgRm9jdXNcbiAqIC0gQXV0byBGb2N1c1xuICogLSBUYWIgRm9jdXNcbiAqIC0gVHJhcCBGb2N1c1xuICogLSBMb2NrIEZvY3VzXG4gKi9cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VGb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBjb25maWd1cmF0aW9uIGZvciB0aGUgZm9jdXMgZGlyZWN0aXZlIGRyaXZlcyB0aGUgYmVoYXZpb3VyIG9mIHRoZSBrZXlib2FyZFxuICAgKiBmb2N1cyBkaXJlY3RpdmUuXG4gICAqL1xuICBwcm90ZWN0ZWQgY29uZmlnOiBCYXNlRm9jdXNDb25maWc7XG5cbiAgLyoqXG4gICAqIEEgZGVmYXVsdCBjb25maWcgY2FuIGJlIHByb3ZpZGVkIGZvciBlYWNoIGRpcmVjdGl2ZSBpZiBhIHNwZWNpZmljIGZvY3VzIGRpcmVjdGl2ZVxuICAgKiBpcyB1c2VkIGRpcmVjdGx5LiBpLmUuIGA8ZGl2IGN4QXV0b0ZvY3VzPjwvZGl2PmBcbiAgICovXG4gIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBCYXNlRm9jdXNDb25maWcgPSB7fTtcblxuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKSB0YWJpbmRleDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogQmFzZUZvY3VzU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXREZWZhdWx0Q29uZmlndXJhdGlvbigpO1xuICAgIHRoaXMucmVxdWlyZWRUYWJpbmRleCA9IC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSAoaW5wdXQpIGNvbmZpZyBpZiBpdCB1bmRlZmluZWQgb3IgYW4gZW1wdHkgc3RyaW5nLCB3aXRoIHRoZVxuICAgKiBgZGVmYXVsdENvbmZpZ2AuIFRoZSBgZGVmYXVsdENvbmZpZ2AgbWlnaHQgYmUgc3BlY2lmaWVkIGZvciBlYWNoIGRpcmVjdGl2ZVxuICAgKiBkaWZmZXJlbnRseS4gSWYgYSBzcGVjaWZpYyBkaXJlY3RpdmUgaXMgdXNlZCAoaS5lLiBgY3hBdXRvRm9jdXNgKSwgdGhlXG4gICAqIHNwZWNpZmljIChpbmhlcml0ZWQpIGRlZmF1bHRDb25maWcgd2lsbCBiZSB1c2VkLlxuICAgKi9cbiAgcHJvdGVjdGVkIHNldERlZmF1bHRDb25maWd1cmF0aW9uKCk6IHZvaWQge1xuICAgIGlmICgoIXRoaXMuY29uZmlnIHx8IHRoaXMuY29uZmlnID09PSAnJykgJiYgdGhpcy5kZWZhdWx0Q29uZmlnKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuZGVmYXVsdENvbmZpZztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byByZXR1cm4gdGhlIGhvc3QgZWxlbWVudCBmb3IgdGhlIGRpcmVjdGl2ZVxuICAgKiBnaXZlbiBieSB0aGUgYGVsZW1lbnRSZWZgLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBob3N0KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogRm9yY2UgYSB0YWJpbmRleCBvbiB0aGUgaG9zdCBlbGVtZW50IGlmIGl0IGlzIF9yZXF1cmllZF8gdG8gbWFrZSB0aGUgZWxlbWVudFxuICAgKiBmb2N1c2FibGUuIElmIHRoZSBlbGVtZW50IGlzIGZvY3VzYWJsZSBieSBuYXR1cmUgb3IgYnkgYSBnaXZlbiB0YWJpbmRleCwgdGhlXG4gICAqIGB0YWJpbmRleGAgaXMgbm90IGFwcGxpZWQuXG4gICAqXG4gICAqIEJ1dHRvbnMsIGFjdGl2ZSBsaW5rcywgZXRjLiBkbyBubyBuZWVkIGFuIGV4cGxpY2l0IHRhYmluZGV4IHRvIHJlY2VpdmUgZm9jdXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgc2V0IHJlcXVpcmVkVGFiaW5kZXgodGFiaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLnJlcXVpcmVzRXhwbGljaXRUYWJJbmRleCkge1xuICAgICAgdGhpcy50YWJpbmRleCA9IHRhYmluZGV4O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGhvc3QgZWxlbWVudCBkb2VzIG5vdCBoYXZlIGEgdGFiaW5kZXggZGVmaW5lZFxuICAgKiBhbmQgaXQgYWxzbyBkb2Vzbid0IGdldCBmb2N1cyBieSBicm93c2VycyBuYXR1cmUgKGkuZS4gYnV0dG9uIG9yXG4gICAqIGFjdGl2ZSBsaW5rKS5cbiAgICpcbiAgICogV2Uga2VlcCB0aGlzIHV0aWxpdHkgbWV0aG9kIHByaXZhdGUgdG8gbm90IHBvbGx1dGUgdGhlIEFQSS5cbiAgICovXG4gIHByaXZhdGUgZ2V0IHJlcXVpcmVzRXhwbGljaXRUYWJJbmRleCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy50YWJpbmRleCA9PT0gdW5kZWZpbmVkICYmXG4gICAgICBbJ2J1dHRvbicsICdpbnB1dCcsICdzZWxlY3QnLCAndGV4dGFyZWEnXS5pbmRleE9mKFxuICAgICAgICB0aGlzLmhvc3QudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICApID09PSAtMSAmJlxuICAgICAgISh0aGlzLmhvc3QudGFnTmFtZSA9PT0gJ0EnICYmIHRoaXMuaG9zdC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSlcbiAgICApO1xuICB9XG59XG4iXX0=