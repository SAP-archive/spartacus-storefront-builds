import { Directive, ElementRef, HostBinding, Input, } from '@angular/core';
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
export class BaseFocusDirective {
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
     */
    get requiresExplicitTabIndex() {
        return (this.tabindex === undefined &&
            ['button', 'input', 'select', 'textarea'].indexOf(this.host.tagName.toLowerCase()) === -1 &&
            !(this.host.tagName === 'A' &&
                (this.host.hasAttribute('href') || this.host.hasAttribute('routerlink'))));
    }
}
BaseFocusDirective.decorators = [
    { type: Directive }
];
BaseFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: BaseFocusService }
];
BaseFocusDirective.propDecorators = {
    tabindex: [{ type: Input }, { type: HostBinding, args: ['attr.tabindex',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9sYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9iYXNlL2Jhc2UtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEdBRU4sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQ7Ozs7Ozs7OztHQVNHO0FBRUgsTUFBTSxPQUFnQixrQkFBa0I7SUFldEMsWUFDWSxVQUFtQyxFQUNuQyxPQUF5QjtRQUR6QixlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQVZyQzs7O1dBR0c7UUFDTyxrQkFBYSxHQUFvQixFQUFFLENBQUM7SUFPM0MsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ08sdUJBQXVCO1FBQy9CLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzlELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFjLElBQUk7UUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBYyxnQkFBZ0IsQ0FBQyxRQUFnQjtRQUM3QyxJQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtZQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyx3QkFBd0I7UUFDcEMsT0FBTyxDQUNMLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUztZQUMzQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQ2hDLEtBQUssQ0FBQyxDQUFDO1lBQ1IsQ0FBQyxDQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLEdBQUc7Z0JBQ3pCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FDekUsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBM0VGLFNBQVM7OztZQWxCUixVQUFVO1lBTUgsZ0JBQWdCOzs7dUJBMEJ0QixLQUFLLFlBQUksV0FBVyxTQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IEJhc2VGb2N1c1NlcnZpY2UgfSBmcm9tICcuL2Jhc2UtZm9jdXMuc2VydmljZSc7XG5cbi8qKlxuICogQWJzdHJhY3QgZGlyZWN0aXZlIHRoYXQgcHJvdmlkZXMgYSBjb21tb24gaW50ZXJmYWNlIGZvciBhbGwgZm9jdXMgZGlyZWN0aXZlczpcbiAqIC0gQmxvY2sgRm9jdXNcbiAqIC0gUGVyc2lzdCBGb2N1c1xuICogLSBFc2NhcGUgRm9jdXNcbiAqIC0gQXV0byBGb2N1c1xuICogLSBUYWIgRm9jdXNcbiAqIC0gVHJhcCBGb2N1c1xuICogLSBMb2NrIEZvY3VzXG4gKi9cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VGb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBjb25maWd1cmF0aW9uIGZvciB0aGUgZm9jdXMgZGlyZWN0aXZlIGRyaXZlcyB0aGUgYmVoYXZpb3VyIG9mIHRoZSBrZXlib2FyZFxuICAgKiBmb2N1cyBkaXJlY3RpdmUuXG4gICAqL1xuICBwcm90ZWN0ZWQgY29uZmlnOiBCYXNlRm9jdXNDb25maWc7XG5cbiAgLyoqXG4gICAqIEEgZGVmYXVsdCBjb25maWcgY2FuIGJlIHByb3ZpZGVkIGZvciBlYWNoIGRpcmVjdGl2ZSBpZiBhIHNwZWNpZmljIGZvY3VzIGRpcmVjdGl2ZVxuICAgKiBpcyB1c2VkIGRpcmVjdGx5LiBpLmUuIGA8ZGl2IGN4QXV0b0ZvY3VzPjwvZGl2PmBcbiAgICovXG4gIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBCYXNlRm9jdXNDb25maWcgPSB7fTtcblxuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKSB0YWJpbmRleDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogQmFzZUZvY3VzU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXREZWZhdWx0Q29uZmlndXJhdGlvbigpO1xuICAgIHRoaXMucmVxdWlyZWRUYWJpbmRleCA9IC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSAoaW5wdXQpIGNvbmZpZyBpZiBpdCB1bmRlZmluZWQgb3IgYW4gZW1wdHkgc3RyaW5nLCB3aXRoIHRoZVxuICAgKiBgZGVmYXVsdENvbmZpZ2AuIFRoZSBgZGVmYXVsdENvbmZpZ2AgbWlnaHQgYmUgc3BlY2lmaWVkIGZvciBlYWNoIGRpcmVjdGl2ZVxuICAgKiBkaWZmZXJlbnRseS4gSWYgYSBzcGVjaWZpYyBkaXJlY3RpdmUgaXMgdXNlZCAoaS5lLiBgY3hBdXRvRm9jdXNgKSwgdGhlXG4gICAqIHNwZWNpZmljIChpbmhlcml0ZWQpIGRlZmF1bHRDb25maWcgd2lsbCBiZSB1c2VkLlxuICAgKi9cbiAgcHJvdGVjdGVkIHNldERlZmF1bHRDb25maWd1cmF0aW9uKCk6IHZvaWQge1xuICAgIGlmICgoIXRoaXMuY29uZmlnIHx8IHRoaXMuY29uZmlnID09PSAnJykgJiYgdGhpcy5kZWZhdWx0Q29uZmlnKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuZGVmYXVsdENvbmZpZztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byByZXR1cm4gdGhlIGhvc3QgZWxlbWVudCBmb3IgdGhlIGRpcmVjdGl2ZVxuICAgKiBnaXZlbiBieSB0aGUgYGVsZW1lbnRSZWZgLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBob3N0KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogRm9yY2UgYSB0YWJpbmRleCBvbiB0aGUgaG9zdCBlbGVtZW50IGlmIGl0IGlzIF9yZXF1cmllZF8gdG8gbWFrZSB0aGUgZWxlbWVudFxuICAgKiBmb2N1c2FibGUuIElmIHRoZSBlbGVtZW50IGlzIGZvY3VzYWJsZSBieSBuYXR1cmUgb3IgYnkgYSBnaXZlbiB0YWJpbmRleCwgdGhlXG4gICAqIGB0YWJpbmRleGAgaXMgbm90IGFwcGxpZWQuXG4gICAqXG4gICAqIEJ1dHRvbnMsIGFjdGl2ZSBsaW5rcywgZXRjLiBkbyBubyBuZWVkIGFuIGV4cGxpY2l0IHRhYmluZGV4IHRvIHJlY2VpdmUgZm9jdXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgc2V0IHJlcXVpcmVkVGFiaW5kZXgodGFiaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLnJlcXVpcmVzRXhwbGljaXRUYWJJbmRleCkge1xuICAgICAgdGhpcy50YWJpbmRleCA9IHRhYmluZGV4O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGhvc3QgZWxlbWVudCBkb2VzIG5vdCBoYXZlIGEgdGFiaW5kZXggZGVmaW5lZFxuICAgKiBhbmQgaXQgYWxzbyBkb2Vzbid0IGdldCBmb2N1cyBieSBicm93c2VycyBuYXR1cmUgKGkuZS4gYnV0dG9uIG9yXG4gICAqIGFjdGl2ZSBsaW5rKS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgcmVxdWlyZXNFeHBsaWNpdFRhYkluZGV4KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnRhYmluZGV4ID09PSB1bmRlZmluZWQgJiZcbiAgICAgIFsnYnV0dG9uJywgJ2lucHV0JywgJ3NlbGVjdCcsICd0ZXh0YXJlYSddLmluZGV4T2YoXG4gICAgICAgIHRoaXMuaG9zdC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICkgPT09IC0xICYmXG4gICAgICAhKFxuICAgICAgICB0aGlzLmhvc3QudGFnTmFtZSA9PT0gJ0EnICYmXG4gICAgICAgICh0aGlzLmhvc3QuaGFzQXR0cmlidXRlKCdocmVmJykgfHwgdGhpcy5ob3N0Lmhhc0F0dHJpYnV0ZSgncm91dGVybGluaycpKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==