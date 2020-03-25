import { __decorate, __extends } from "tslib";
import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { EscapeFocusDirective } from '../escape/escape-focus.directive';
import { AutoFocusService } from './auto-focus.service';
/**
 * Directive that focus the first nested _focusable_ element based on state and configuration:
 *
 * 1. focusable element that was left in a focused state (aka _persisted_ focus)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9hdXRvZm9jdXMvYXV0by1mb2N1cy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUVIO0lBQXdDLHNDQUFvQjtJQVExRCw0QkFDWSxVQUFzQixFQUN0QixPQUF5QjtRQUZyQyxZQUlFLGtCQUFNLFVBQVUsRUFBRSxPQUFPLENBQUMsU0FDM0I7UUFKVyxnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFPLEdBQVAsT0FBTyxDQUFrQjtRQVJyQyxpRUFBaUU7UUFDdkQsbUJBQWEsR0FBb0IsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7O0lBVS9ELENBQUM7SUFFRDs7T0FFRztJQUNILDRDQUFlLEdBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ25ELGlCQUFNLGVBQWUsV0FBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILHdDQUFXLEdBQVgsVUFBWSxLQUFxQjs7UUFDL0IsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksUUFBQyxLQUFLLDBDQUFFLE1BQU0sQ0FBQSxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDaEQsTUFBQSxJQUFJLENBQUMsY0FBYywwQ0FBRSxLQUFLLEdBQUc7YUFDOUI7aUJBQU07Z0JBQ0osS0FBSyxDQUFDLE1BQXNCLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDdkM7U0FDRjtRQUNELGlCQUFNLFdBQVcsWUFBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBS0Qsc0JBQWMsaURBQWlCO1FBSC9COztXQUVHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEUsQ0FBQzs7O09BQUE7SUFNRCxzQkFBYywrQ0FBZTtRQUo3Qjs7O1dBR0c7YUFDSDs7WUFDRSxPQUFPLENBQUMsUUFBQyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxTQUFTLENBQUEsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQU9ELHNCQUFZLDhDQUFjO1FBTDFCOzs7O1dBSUc7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRSxDQUFDOzs7T0FBQTs7Z0JBdkR1QixVQUFVO2dCQUNiLGdCQUFnQjs7SUFWMUIsa0JBQWtCO1FBRDlCLFNBQVMsRUFBRSxDQUFDLDRCQUE0QjtPQUM1QixrQkFBa0IsQ0FpRTlCO0lBQUQseUJBQUM7Q0FBQSxBQWpFRCxDQUF3QyxvQkFBb0IsR0FpRTNEO1NBakVZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXNjYXBlRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi9lc2NhcGUvZXNjYXBlLWZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBdXRvRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBBdXRvRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi9hdXRvLWZvY3VzLnNlcnZpY2UnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0aGF0IGZvY3VzIHRoZSBmaXJzdCBuZXN0ZWQgX2ZvY3VzYWJsZV8gZWxlbWVudCBiYXNlZCBvbiBzdGF0ZSBhbmQgY29uZmlndXJhdGlvbjpcbiAqXG4gKiAxLiBmb2N1c2FibGUgZWxlbWVudCB0aGF0IHdhcyBsZWZ0IGluIGEgZm9jdXNlZCBzdGF0ZSAoYWthIF9wZXJzaXN0ZWRfIGZvY3VzKVxuICogMi4gZm9jdXNhYmxlIGVsZW1lbnQgc2VsZWN0ZWQgYnkgY29uZmlndXJlZCBDU1Mgc2VsZWN0b3IgKGkuZS4gJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKVxuICogMy4gZm9jdXNhYmxlIGVsZW1lbnQgbWFya2VkIHdpdGggdGhlIG5hdGl2ZSBIVE1MNSBgYXV0b2ZvY3VzYCBhdHRyaWJ1dGVcbiAqIDQuIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50XG4gKiA1LiB0aGUgaG9zdCBlbGVtZW50LCBpbiBjYXNlIHRoZSBjb25maWd1cmVkIENTUyBzZWxlY3RvciBpcyBgOmhvc3RgLlxuICpcbiAqIEV4YW1wbGUgY29uZmlndXJhdGlvbnM6XG4gKlxuICogYDxkaXYgY3hBdXRvRm9jdXM+Wy4uLl08L2Rpdj5gXG4gKlxuICogYDxkaXYgW2N4QXV0b0ZvY3VzXT1cInthdXRvZm9jdXM6IGZhbHNlfVwiPlsuLi5dPC9kaXY+YFxuICpcbiAqIGA8ZGl2IFtjeEF1dG9Gb2N1c109XCJ7YXV0b2ZvY3VzOiAnYnV0dG9uLmFjdGl2ZSd9XCI+Wy4uLl08L2Rpdj5gXG4gKlxuICogYDxkaXYgW2N4QXV0b0ZvY3VzXT1cInthdXRvZm9jdXM6ICc6aG9zdCd9XCI+Wy4uLl08L2Rpdj5gXG4gKlxuICovXG5ARGlyZWN0aXZlKCkgLy8gc2VsZWN0b3I6ICdbY3hBdXRvRm9jdXNdJ1xuZXhwb3J0IGNsYXNzIEF1dG9Gb2N1c0RpcmVjdGl2ZSBleHRlbmRzIEVzY2FwZUZvY3VzRGlyZWN0aXZlXG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qKiBUaGUgQXV0b0ZvY3VzRGlyZWN0aXZlIHdpbGwgYmUgdXNpbmcgYXV0b2ZvY3VzIGJ5IGRlZmF1bHQgICovXG4gIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBBdXRvRm9jdXNDb25maWcgPSB7IGF1dG9mb2N1czogdHJ1ZSB9O1xuXG4gIC8vIEBJbnB1dCgnY3hBdXRvRm9jdXMnKVxuICBwcm90ZWN0ZWQgY29uZmlnOiBBdXRvRm9jdXNDb25maWc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IEF1dG9Gb2N1c1NlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgc2VydmljZSk7XG4gIH1cblxuICAvKipcbiAgICogRm9jdXMgdGhlIGVsZW1lbnQgZXhwbGljaXRseSBpZiBpdCB3YXMgZm9jdXNzZWQgYmVmb3JlLlxuICAgKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3VsZEF1dG9mb2N1cykge1xuICAgICAgdGhpcy5oYW5kbGVGb2N1cygpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuc2hvdWxkQXV0b2ZvY3VzIHx8IHRoaXMuaGFzUGVyc2lzdGVkRm9jdXMpIHtcbiAgICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNaW1pYyB0aGUgZm9jdXMgd2l0aG91dCBzZXR0aW5nIHRoZSBhY3R1YWwgZm9jdXMgb24gdGhlIGhvc3QuIFRoZSBmaXJzdFxuICAgKiBmb2N1c2FibGUgY2hpbGQgZWxlbWVudCB3aWxsIGJlIGZvY3Vzc2VkLlxuICAgKi9cbiAgaGFuZGxlRm9jdXMoZXZlbnQ/OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkQXV0b2ZvY3VzKSB7XG4gICAgICBpZiAoIWV2ZW50Py50YXJnZXQgfHwgZXZlbnQudGFyZ2V0ID09PSB0aGlzLmhvc3QpIHtcbiAgICAgICAgdGhpcy5maXJzdEZvY3VzYWJsZT8uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHN1cGVyLmhhbmRsZUZvY3VzKGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHRoZSBmaXJzdCBmb2N1c2FibGUgY2hpbGQgZWxlbWVudFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBoYXNQZXJzaXN0ZWRGb2N1cygpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmhhc1BlcnNpc3RlZEZvY3VzKHRoaXMuaG9zdCwgdGhpcy5jb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBmdW5jdGlvbiB0byBpbmRpY2F0ZSB3aGV0aGVyIHdlIHNob3VsZCB1c2UgYXV0b2ZvY3VzIGZvciB0aGVcbiAgICogY2hpbGQgZWxlbWVudHMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNob3VsZEF1dG9mb2N1cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmNvbmZpZz8uYXV0b2ZvY3VzO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgdGhlIGZpcnN0IGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50LlxuICAgKlxuICAgKiBXZSBrZWVwIHRoaXMgcHJpdmF0ZSB0byBub3QgcG9sdXRlIHRoZSBBUEkuXG4gICAqL1xuICBwcml2YXRlIGdldCBmaXJzdEZvY3VzYWJsZSgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5maW5kRmlyc3RGb2N1c2FibGUodGhpcy5ob3N0LCB0aGlzLmNvbmZpZyk7XG4gIH1cbn1cbiJdfQ==