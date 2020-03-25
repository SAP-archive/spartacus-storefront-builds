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
var BaseFocusDirective = /** @class */ (function () {
    function BaseFocusDirective(elementRef, service) {
        this.elementRef = elementRef;
        this.service = service;
        /**
         * A default config can be provided for each directive if a specific focus directive
         * is used directly. i.e. `<div cxAutoFocus></div>`
         */
        this.defaultConfig = {};
    }
    BaseFocusDirective.prototype.ngOnInit = function () {
        this.setDefaultConfiguration();
        this.requiredTabindex = -1;
    };
    /**
     * Override the (input) config if it undefined or an empty string, with the
     * `defaultConfig`. The `defaultConfig` might be specified for each directive
     * differently. If a specific directive is used (i.e. `cxAutoFocus`), the
     * specific (inherited) defaultConfig will be used.
     */
    BaseFocusDirective.prototype.setDefaultConfiguration = function () {
        if ((!this.config || this.config === '') && this.defaultConfig) {
            this.config = this.defaultConfig;
        }
    };
    Object.defineProperty(BaseFocusDirective.prototype, "host", {
        /**
         * Helper method to return the host element for the directive
         * given by the `elementRef`.
         */
        get: function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFocusDirective.prototype, "requiredTabindex", {
        /**
         * Force a tabindex on the host element if it is _requried_ to make the element
         * focusable. If the element is focusable by nature or by a given tabindex, the
         * `tabindex` is not applied.
         *
         * Buttons, active links, etc. do no need an explicit tabindex to receive focus.
         */
        set: function (tabindex) {
            if (this.requiresExplicitTabIndex) {
                this.tabindex = tabindex;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFocusDirective.prototype, "requiresExplicitTabIndex", {
        /**
         * Returns true if the host element does not have a tabindex defined
         * and it also doesn't get focus by browsers nature (i.e. button or
         * active link).
         */
        get: function () {
            return (this.tabindex === undefined &&
                ['button', 'input', 'select', 'textarea'].indexOf(this.host.tagName.toLowerCase()) === -1 &&
                !(this.host.tagName === 'A' &&
                    (this.host.hasAttribute('href') || this.host.hasAttribute('routerlink'))));
        },
        enumerable: true,
        configurable: true
    });
    BaseFocusDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: BaseFocusService }
    ]; };
    __decorate([
        Input(), HostBinding('attr.tabindex')
    ], BaseFocusDirective.prototype, "tabindex", void 0);
    BaseFocusDirective = __decorate([
        Directive()
    ], BaseFocusDirective);
    return BaseFocusDirective;
}());
export { BaseFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9iYXNlL2Jhc2UtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDs7Ozs7Ozs7O0dBU0c7QUFFSDtJQWVFLDRCQUNZLFVBQW1DLEVBQ25DLE9BQXlCO1FBRHpCLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBVnJDOzs7V0FHRztRQUNPLGtCQUFhLEdBQW9CLEVBQUUsQ0FBQztJQU8zQyxDQUFDO0lBRUoscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTyxvREFBdUIsR0FBakM7UUFDRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM5RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBTUQsc0JBQWMsb0NBQUk7UUFKbEI7OztXQUdHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBU0Qsc0JBQWMsZ0RBQWdCO1FBUDlCOzs7Ozs7V0FNRzthQUNILFVBQStCLFFBQWdCO1lBQzdDLElBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFO2dCQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzthQUMxQjtRQUNILENBQUM7OztPQUFBO0lBT0Qsc0JBQWMsd0RBQXdCO1FBTHRDOzs7O1dBSUc7YUFDSDtZQUNFLE9BQU8sQ0FDTCxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVM7Z0JBQzNCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FDaEMsS0FBSyxDQUFDLENBQUM7Z0JBQ1IsQ0FBQyxDQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLEdBQUc7b0JBQ3pCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FDekUsQ0FDRixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7O2dCQTFEdUIsVUFBVTtnQkFDYixnQkFBZ0I7O0lBSkU7UUFBdEMsS0FBSyxFQUFFLEVBQUUsV0FBVyxDQUFDLGVBQWUsQ0FBQzt3REFBa0I7SUFicEMsa0JBQWtCO1FBRHZDLFNBQVMsRUFBRTtPQUNVLGtCQUFrQixDQTJFdkM7SUFBRCx5QkFBQztDQUFBLEFBM0VELElBMkVDO1NBM0VxQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IEJhc2VGb2N1c1NlcnZpY2UgfSBmcm9tICcuL2Jhc2UtZm9jdXMuc2VydmljZSc7XG5cbi8qKlxuICogQWJzdHJhY3QgZGlyZWN0aXZlIHRoYXQgcHJvdmlkZXMgYSBjb21tb24gaW50ZXJmYWNlIGZvciBhbGwgZm9jdXMgZGlyZWN0aXZlczpcbiAqIC0gQmxvY2sgRm9jdXNcbiAqIC0gUGVyc2lzdCBGb2N1c1xuICogLSBFc2NhcGUgRm9jdXNcbiAqIC0gQXV0byBGb2N1c1xuICogLSBUYWIgRm9jdXNcbiAqIC0gVHJhcCBGb2N1c1xuICogLSBMb2NrIEZvY3VzXG4gKi9cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VGb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBjb25maWd1cmF0aW9uIGZvciB0aGUgZm9jdXMgZGlyZWN0aXZlIGRyaXZlcyB0aGUgYmVoYXZpb3VyIG9mIHRoZSBrZXlib2FyZFxuICAgKiBmb2N1cyBkaXJlY3RpdmUuXG4gICAqL1xuICBwcm90ZWN0ZWQgY29uZmlnOiBCYXNlRm9jdXNDb25maWc7XG5cbiAgLyoqXG4gICAqIEEgZGVmYXVsdCBjb25maWcgY2FuIGJlIHByb3ZpZGVkIGZvciBlYWNoIGRpcmVjdGl2ZSBpZiBhIHNwZWNpZmljIGZvY3VzIGRpcmVjdGl2ZVxuICAgKiBpcyB1c2VkIGRpcmVjdGx5LiBpLmUuIGA8ZGl2IGN4QXV0b0ZvY3VzPjwvZGl2PmBcbiAgICovXG4gIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBCYXNlRm9jdXNDb25maWcgPSB7fTtcblxuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKSB0YWJpbmRleDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogQmFzZUZvY3VzU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXREZWZhdWx0Q29uZmlndXJhdGlvbigpO1xuICAgIHRoaXMucmVxdWlyZWRUYWJpbmRleCA9IC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSAoaW5wdXQpIGNvbmZpZyBpZiBpdCB1bmRlZmluZWQgb3IgYW4gZW1wdHkgc3RyaW5nLCB3aXRoIHRoZVxuICAgKiBgZGVmYXVsdENvbmZpZ2AuIFRoZSBgZGVmYXVsdENvbmZpZ2AgbWlnaHQgYmUgc3BlY2lmaWVkIGZvciBlYWNoIGRpcmVjdGl2ZVxuICAgKiBkaWZmZXJlbnRseS4gSWYgYSBzcGVjaWZpYyBkaXJlY3RpdmUgaXMgdXNlZCAoaS5lLiBgY3hBdXRvRm9jdXNgKSwgdGhlXG4gICAqIHNwZWNpZmljIChpbmhlcml0ZWQpIGRlZmF1bHRDb25maWcgd2lsbCBiZSB1c2VkLlxuICAgKi9cbiAgcHJvdGVjdGVkIHNldERlZmF1bHRDb25maWd1cmF0aW9uKCk6IHZvaWQge1xuICAgIGlmICgoIXRoaXMuY29uZmlnIHx8IHRoaXMuY29uZmlnID09PSAnJykgJiYgdGhpcy5kZWZhdWx0Q29uZmlnKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuZGVmYXVsdENvbmZpZztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byByZXR1cm4gdGhlIGhvc3QgZWxlbWVudCBmb3IgdGhlIGRpcmVjdGl2ZVxuICAgKiBnaXZlbiBieSB0aGUgYGVsZW1lbnRSZWZgLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBob3N0KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogRm9yY2UgYSB0YWJpbmRleCBvbiB0aGUgaG9zdCBlbGVtZW50IGlmIGl0IGlzIF9yZXF1cmllZF8gdG8gbWFrZSB0aGUgZWxlbWVudFxuICAgKiBmb2N1c2FibGUuIElmIHRoZSBlbGVtZW50IGlzIGZvY3VzYWJsZSBieSBuYXR1cmUgb3IgYnkgYSBnaXZlbiB0YWJpbmRleCwgdGhlXG4gICAqIGB0YWJpbmRleGAgaXMgbm90IGFwcGxpZWQuXG4gICAqXG4gICAqIEJ1dHRvbnMsIGFjdGl2ZSBsaW5rcywgZXRjLiBkbyBubyBuZWVkIGFuIGV4cGxpY2l0IHRhYmluZGV4IHRvIHJlY2VpdmUgZm9jdXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgc2V0IHJlcXVpcmVkVGFiaW5kZXgodGFiaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLnJlcXVpcmVzRXhwbGljaXRUYWJJbmRleCkge1xuICAgICAgdGhpcy50YWJpbmRleCA9IHRhYmluZGV4O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGhvc3QgZWxlbWVudCBkb2VzIG5vdCBoYXZlIGEgdGFiaW5kZXggZGVmaW5lZFxuICAgKiBhbmQgaXQgYWxzbyBkb2Vzbid0IGdldCBmb2N1cyBieSBicm93c2VycyBuYXR1cmUgKGkuZS4gYnV0dG9uIG9yXG4gICAqIGFjdGl2ZSBsaW5rKS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgcmVxdWlyZXNFeHBsaWNpdFRhYkluZGV4KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnRhYmluZGV4ID09PSB1bmRlZmluZWQgJiZcbiAgICAgIFsnYnV0dG9uJywgJ2lucHV0JywgJ3NlbGVjdCcsICd0ZXh0YXJlYSddLmluZGV4T2YoXG4gICAgICAgIHRoaXMuaG9zdC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICkgPT09IC0xICYmXG4gICAgICAhKFxuICAgICAgICB0aGlzLmhvc3QudGFnTmFtZSA9PT0gJ0EnICYmXG4gICAgICAgICh0aGlzLmhvc3QuaGFzQXR0cmlidXRlKCdocmVmJykgfHwgdGhpcy5ob3N0Lmhhc0F0dHJpYnV0ZSgncm91dGVybGluaycpKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==