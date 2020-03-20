import { __decorate, __extends } from "tslib";
import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { EscapeFocusDirective } from '../escape/escape-focus.directive';
import { AutoFocusService } from './auto-focus.service';
/**
 * Directive that focus the first nested _focusable_ element based on state and configuration:
 *
 * 1. focusable element that was left in a focused state
 * 2. focusable element selected by configured CSS selector (i.e. 'button[type=submit]')
 * 3. focusable element marked with the native HTML5 `autofocus` attribute
 * 4. first focusable element
 * 5. the host element, in case the configured CSS selector is `:host`.
 *
 * Example configurations:
 *
 * `<div cxAutoFocus>[...]</div>`
 *
 * `<div [cxAutoFocus]="{autofocus: false}">[...]</div>`
 *
 * `<div [cxAutoFocus]="{autofocus: 'button.active'}">[...]</div>`
 *
 * `<div [cxAutoFocus]="{autofocus: ':host'}">[...]</div>`
 *
 */
var AutoFocusDirective = /** @class */ (function (_super) {
    __extends(AutoFocusDirective, _super);
    function AutoFocusDirective(elementRef, service) {
        var _this = _super.call(this, elementRef, service) || this;
        _this.elementRef = elementRef;
        _this.service = service;
        /** The AutoFocusDirective will be using autofocus by default  */
        _this.defaultConfig = { autofocus: true };
        return _this;
    }
    /**
     * Focus the element explicitly if it was focussed before.
     */
    AutoFocusDirective.prototype.ngAfterViewInit = function () {
        if (this.shouldAutofocus) {
            this.handleFocus();
        }
        if (!this.shouldAutofocus || this.hasPersistedFocus) {
            _super.prototype.ngAfterViewInit.call(this);
        }
    };
    /**
     * Mimic the focus without setting the actual focus on the host. The first
     * focusable child element will be focussed.
     */
    AutoFocusDirective.prototype.handleFocus = function (event) {
        var _a, _b;
        if (this.shouldAutofocus) {
            if (!((_a = event) === null || _a === void 0 ? void 0 : _a.target) || event.target === this.host) {
                (_b = this.firstFocusable) === null || _b === void 0 ? void 0 : _b.focus();
            }
            else {
                event.target.focus();
            }
        }
        _super.prototype.handleFocus.call(this, event);
    };
    Object.defineProperty(AutoFocusDirective.prototype, "hasPersistedFocus", {
        /**
         * Helper function to get the first focusable child element
         */
        get: function () {
            return this.service.hasPersistedFocus(this.host, this.config);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoFocusDirective.prototype, "shouldAutofocus", {
        /**
         * Helper function to indicate whether we should use autofocus for the
         * child elements.
         *
         * We keep this private to not polute the API.
         */
        get: function () {
            var _a;
            return !!((_a = this.config) === null || _a === void 0 ? void 0 : _a.autofocus);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoFocusDirective.prototype, "firstFocusable", {
        /**
         * Helper function to get the first focusable child element.
         *
         * We keep this private to not polute the API.
         */
        get: function () {
            return this.service.findFirstFocusable(this.host, this.config);
        },
        enumerable: true,
        configurable: true
    });
    AutoFocusDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: AutoFocusService }
    ]; };
    AutoFocusDirective = __decorate([
        Directive() // selector: '[cxAutoFocus]'
    ], AutoFocusDirective);
    return AutoFocusDirective;
}(EscapeFocusDirective));
export { AutoFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9hdXRvZm9jdXMvYXV0by1mb2N1cy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUVIO0lBQXdDLHNDQUFvQjtJQVExRCw0QkFDWSxVQUFzQixFQUN0QixPQUF5QjtRQUZyQyxZQUlFLGtCQUFNLFVBQVUsRUFBRSxPQUFPLENBQUMsU0FDM0I7UUFKVyxnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFPLEdBQVAsT0FBTyxDQUFrQjtRQVJyQyxpRUFBaUU7UUFDdkQsbUJBQWEsR0FBb0IsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7O0lBVS9ELENBQUM7SUFFRDs7T0FFRztJQUNILDRDQUFlLEdBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ25ELGlCQUFNLGVBQWUsV0FBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILHdDQUFXLEdBQVgsVUFBWSxLQUFxQjs7UUFDL0IsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksUUFBQyxLQUFLLDBDQUFFLE1BQU0sQ0FBQSxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDaEQsTUFBQSxJQUFJLENBQUMsY0FBYywwQ0FBRSxLQUFLLEdBQUc7YUFDOUI7aUJBQU07Z0JBQ0osS0FBSyxDQUFDLE1BQXNCLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDdkM7U0FDRjtRQUNELGlCQUFNLFdBQVcsWUFBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBS0Qsc0JBQWMsaURBQWlCO1FBSC9COztXQUVHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEUsQ0FBQzs7O09BQUE7SUFRRCxzQkFBWSwrQ0FBZTtRQU4zQjs7Ozs7V0FLRzthQUNIOztZQUNFLE9BQU8sQ0FBQyxRQUFDLElBQUksQ0FBQyxNQUFNLDBDQUFFLFNBQVMsQ0FBQSxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBT0Qsc0JBQVksOENBQWM7UUFMMUI7Ozs7V0FJRzthQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pFLENBQUM7OztPQUFBOztnQkF6RHVCLFVBQVU7Z0JBQ2IsZ0JBQWdCOztJQVYxQixrQkFBa0I7UUFEOUIsU0FBUyxFQUFFLENBQUMsNEJBQTRCO09BQzVCLGtCQUFrQixDQW1FOUI7SUFBRCx5QkFBQztDQUFBLEFBbkVELENBQXdDLG9CQUFvQixHQW1FM0Q7U0FuRVksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFc2NhcGVGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4uL2VzY2FwZS9lc2NhcGUtZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEF1dG9Gb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IEF1dG9Gb2N1c1NlcnZpY2UgfSBmcm9tICcuL2F1dG8tZm9jdXMuc2VydmljZSc7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgZm9jdXMgdGhlIGZpcnN0IG5lc3RlZCBfZm9jdXNhYmxlXyBlbGVtZW50IGJhc2VkIG9uIHN0YXRlIGFuZCBjb25maWd1cmF0aW9uOlxuICpcbiAqIDEuIGZvY3VzYWJsZSBlbGVtZW50IHRoYXQgd2FzIGxlZnQgaW4gYSBmb2N1c2VkIHN0YXRlXG4gKiAyLiBmb2N1c2FibGUgZWxlbWVudCBzZWxlY3RlZCBieSBjb25maWd1cmVkIENTUyBzZWxlY3RvciAoaS5lLiAnYnV0dG9uW3R5cGU9c3VibWl0XScpXG4gKiAzLiBmb2N1c2FibGUgZWxlbWVudCBtYXJrZWQgd2l0aCB0aGUgbmF0aXZlIEhUTUw1IGBhdXRvZm9jdXNgIGF0dHJpYnV0ZVxuICogNC4gZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnRcbiAqIDUuIHRoZSBob3N0IGVsZW1lbnQsIGluIGNhc2UgdGhlIGNvbmZpZ3VyZWQgQ1NTIHNlbGVjdG9yIGlzIGA6aG9zdGAuXG4gKlxuICogRXhhbXBsZSBjb25maWd1cmF0aW9uczpcbiAqXG4gKiBgPGRpdiBjeEF1dG9Gb2N1cz5bLi4uXTwvZGl2PmBcbiAqXG4gKiBgPGRpdiBbY3hBdXRvRm9jdXNdPVwie2F1dG9mb2N1czogZmFsc2V9XCI+Wy4uLl08L2Rpdj5gXG4gKlxuICogYDxkaXYgW2N4QXV0b0ZvY3VzXT1cInthdXRvZm9jdXM6ICdidXR0b24uYWN0aXZlJ31cIj5bLi4uXTwvZGl2PmBcbiAqXG4gKiBgPGRpdiBbY3hBdXRvRm9jdXNdPVwie2F1dG9mb2N1czogJzpob3N0J31cIj5bLi4uXTwvZGl2PmBcbiAqXG4gKi9cbkBEaXJlY3RpdmUoKSAvLyBzZWxlY3RvcjogJ1tjeEF1dG9Gb2N1c10nXG5leHBvcnQgY2xhc3MgQXV0b0ZvY3VzRGlyZWN0aXZlIGV4dGVuZHMgRXNjYXBlRm9jdXNEaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgLyoqIFRoZSBBdXRvRm9jdXNEaXJlY3RpdmUgd2lsbCBiZSB1c2luZyBhdXRvZm9jdXMgYnkgZGVmYXVsdCAgKi9cbiAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IEF1dG9Gb2N1c0NvbmZpZyA9IHsgYXV0b2ZvY3VzOiB0cnVlIH07XG5cbiAgLy8gQElucHV0KCdjeEF1dG9Gb2N1cycpXG4gIHByb3RlY3RlZCBjb25maWc6IEF1dG9Gb2N1c0NvbmZpZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogQXV0b0ZvY3VzU2VydmljZVxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBzZXJ2aWNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1cyB0aGUgZWxlbWVudCBleHBsaWNpdGx5IGlmIGl0IHdhcyBmb2N1c3NlZCBiZWZvcmUuXG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvdWxkQXV0b2ZvY3VzKSB7XG4gICAgICB0aGlzLmhhbmRsZUZvY3VzKCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5zaG91bGRBdXRvZm9jdXMgfHwgdGhpcy5oYXNQZXJzaXN0ZWRGb2N1cykge1xuICAgICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1pbWljIHRoZSBmb2N1cyB3aXRob3V0IHNldHRpbmcgdGhlIGFjdHVhbCBmb2N1cyBvbiB0aGUgaG9zdC4gVGhlIGZpcnN0XG4gICAqIGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50IHdpbGwgYmUgZm9jdXNzZWQuXG4gICAqL1xuICBoYW5kbGVGb2N1cyhldmVudD86IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5zaG91bGRBdXRvZm9jdXMpIHtcbiAgICAgIGlmICghZXZlbnQ/LnRhcmdldCB8fCBldmVudC50YXJnZXQgPT09IHRoaXMuaG9zdCkge1xuICAgICAgICB0aGlzLmZpcnN0Rm9jdXNhYmxlPy5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3VwZXIuaGFuZGxlRm9jdXMoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgdGhlIGZpcnN0IGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50XG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGhhc1BlcnNpc3RlZEZvY3VzKCkge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaGFzUGVyc2lzdGVkRm9jdXModGhpcy5ob3N0LCB0aGlzLmNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIGZ1bmN0aW9uIHRvIGluZGljYXRlIHdoZXRoZXIgd2Ugc2hvdWxkIHVzZSBhdXRvZm9jdXMgZm9yIHRoZVxuICAgKiBjaGlsZCBlbGVtZW50cy5cbiAgICpcbiAgICogV2Uga2VlcCB0aGlzIHByaXZhdGUgdG8gbm90IHBvbHV0ZSB0aGUgQVBJLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgc2hvdWxkQXV0b2ZvY3VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuY29uZmlnPy5hdXRvZm9jdXM7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgZmlyc3QgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnQuXG4gICAqXG4gICAqIFdlIGtlZXAgdGhpcyBwcml2YXRlIHRvIG5vdCBwb2x1dGUgdGhlIEFQSS5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGZpcnN0Rm9jdXNhYmxlKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmZpbmRGaXJzdEZvY3VzYWJsZSh0aGlzLmhvc3QsIHRoaXMuY29uZmlnKTtcbiAgfVxufVxuIl19