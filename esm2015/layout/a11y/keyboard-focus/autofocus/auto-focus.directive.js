import { __decorate } from "tslib";
import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
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
let AutoFocusDirective = class AutoFocusDirective extends EscapeFocusDirective {
    constructor(elementRef, service) {
        super(elementRef, service);
        this.elementRef = elementRef;
        this.service = service;
        /** The AutoFocusDirective will be using autofocus by default  */
        this.defaultConfig = { autofocus: true };
    }
    /**
     * Focus the element explicitly if it was focussed before.
     */
    ngAfterViewInit() {
        if (this.shouldAutofocus) {
            this.handleFocus();
        }
        if (!this.shouldAutofocus || this.hasPersistedFocus) {
            super.ngAfterViewInit();
        }
    }
    /**
     * Mimic the focus without setting the actual focus on the host. The first
     * focusable child element will be focussed.
     */
    handleFocus(event) {
        var _a, _b;
        if (this.shouldAutofocus) {
            if (!((_a = event) === null || _a === void 0 ? void 0 : _a.target) || event.target === this.host) {
                (_b = this.firstFocusable) === null || _b === void 0 ? void 0 : _b.focus();
            }
            else {
                event.target.focus();
            }
        }
        super.handleFocus(event);
    }
    /**
     * Helper function to get the first focusable child element
     */
    get hasPersistedFocus() {
        return this.service.hasPersistedFocus(this.host, this.config);
    }
    /**
     * Helper function to indicate whether we should use autofocus for the
     * child elements.
     *
     * We keep this private to not polute the API.
     */
    get shouldAutofocus() {
        var _a;
        return !!((_a = this.config) === null || _a === void 0 ? void 0 : _a.autofocus);
    }
    /**
     * Helper function to get the first focusable child element.
     *
     * We keep this private to not polute the API.
     */
    get firstFocusable() {
        return this.service.findFirstFocusable(this.host, this.config);
    }
};
AutoFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: AutoFocusService }
];
__decorate([
    Input('cxAutoFocus')
], AutoFocusDirective.prototype, "config", void 0);
AutoFocusDirective = __decorate([
    Directive({
        selector: '[cxAutoFocus]',
    })
], AutoFocusDirective);
export { AutoFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9hdXRvZm9jdXMvYXV0by1mb2N1cy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFJSCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFtQixTQUFRLG9CQUFvQjtJQU8xRCxZQUNZLFVBQXNCLEVBQ3RCLE9BQXlCO1FBRW5DLEtBQUssQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFIakIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQVByQyxpRUFBaUU7UUFDdkQsa0JBQWEsR0FBb0IsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFTL0QsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDbkQsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILFdBQVcsQ0FBQyxLQUFxQjs7UUFDL0IsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksUUFBQyxLQUFLLDBDQUFFLE1BQU0sQ0FBQSxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDaEQsTUFBQSxJQUFJLENBQUMsY0FBYywwQ0FBRSxLQUFLLEdBQUc7YUFDOUI7aUJBQU07Z0JBQ0osS0FBSyxDQUFDLE1BQXNCLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDdkM7U0FDRjtRQUNELEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBYyxpQkFBaUI7UUFDN0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQVksZUFBZTs7UUFDekIsT0FBTyxDQUFDLFFBQUMsSUFBSSxDQUFDLE1BQU0sMENBQUUsU0FBUyxDQUFBLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFZLGNBQWM7UUFDeEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Q0FDRixDQUFBOztZQTFEeUIsVUFBVTtZQUNiLGdCQUFnQjs7QUFKZjtJQUFyQixLQUFLLENBQUMsYUFBYSxDQUFDO2tEQUFtQztBQUw3QyxrQkFBa0I7SUFIOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7S0FDMUIsQ0FBQztHQUNXLGtCQUFrQixDQWtFOUI7U0FsRVksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXNjYXBlRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi9lc2NhcGUvZXNjYXBlLWZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBdXRvRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBBdXRvRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi9hdXRvLWZvY3VzLnNlcnZpY2UnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0aGF0IGZvY3VzIHRoZSBmaXJzdCBuZXN0ZWQgX2ZvY3VzYWJsZV8gZWxlbWVudCBiYXNlZCBvbiBzdGF0ZSBhbmQgY29uZmlndXJhdGlvbjpcbiAqXG4gKiAxLiBmb2N1c2FibGUgZWxlbWVudCB0aGF0IHdhcyBsZWZ0IGluIGEgZm9jdXNlZCBzdGF0ZVxuICogMi4gZm9jdXNhYmxlIGVsZW1lbnQgc2VsZWN0ZWQgYnkgY29uZmlndXJlZCBDU1Mgc2VsZWN0b3IgKGkuZS4gJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKVxuICogMy4gZm9jdXNhYmxlIGVsZW1lbnQgbWFya2VkIHdpdGggdGhlIG5hdGl2ZSBIVE1MNSBgYXV0b2ZvY3VzYCBhdHRyaWJ1dGVcbiAqIDQuIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50XG4gKiA1LiB0aGUgaG9zdCBlbGVtZW50LCBpbiBjYXNlIHRoZSBjb25maWd1cmVkIENTUyBzZWxlY3RvciBpcyBgOmhvc3RgLlxuICpcbiAqIEV4YW1wbGUgY29uZmlndXJhdGlvbnM6XG4gKlxuICogYDxkaXYgY3hBdXRvRm9jdXM+Wy4uLl08L2Rpdj5gXG4gKlxuICogYDxkaXYgW2N4QXV0b0ZvY3VzXT1cInthdXRvZm9jdXM6IGZhbHNlfVwiPlsuLi5dPC9kaXY+YFxuICpcbiAqIGA8ZGl2IFtjeEF1dG9Gb2N1c109XCJ7YXV0b2ZvY3VzOiAnYnV0dG9uLmFjdGl2ZSd9XCI+Wy4uLl08L2Rpdj5gXG4gKlxuICogYDxkaXYgW2N4QXV0b0ZvY3VzXT1cInthdXRvZm9jdXM6ICc6aG9zdCd9XCI+Wy4uLl08L2Rpdj5gXG4gKlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hBdXRvRm9jdXNdJyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b0ZvY3VzRGlyZWN0aXZlIGV4dGVuZHMgRXNjYXBlRm9jdXNEaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgLyoqIFRoZSBBdXRvRm9jdXNEaXJlY3RpdmUgd2lsbCBiZSB1c2luZyBhdXRvZm9jdXMgYnkgZGVmYXVsdCAgKi9cbiAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IEF1dG9Gb2N1c0NvbmZpZyA9IHsgYXV0b2ZvY3VzOiB0cnVlIH07XG5cbiAgQElucHV0KCdjeEF1dG9Gb2N1cycpIHByb3RlY3RlZCBjb25maWc6IEF1dG9Gb2N1c0NvbmZpZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogQXV0b0ZvY3VzU2VydmljZVxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBzZXJ2aWNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1cyB0aGUgZWxlbWVudCBleHBsaWNpdGx5IGlmIGl0IHdhcyBmb2N1c3NlZCBiZWZvcmUuXG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvdWxkQXV0b2ZvY3VzKSB7XG4gICAgICB0aGlzLmhhbmRsZUZvY3VzKCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5zaG91bGRBdXRvZm9jdXMgfHwgdGhpcy5oYXNQZXJzaXN0ZWRGb2N1cykge1xuICAgICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1pbWljIHRoZSBmb2N1cyB3aXRob3V0IHNldHRpbmcgdGhlIGFjdHVhbCBmb2N1cyBvbiB0aGUgaG9zdC4gVGhlIGZpcnN0XG4gICAqIGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50IHdpbGwgYmUgZm9jdXNzZWQuXG4gICAqL1xuICBoYW5kbGVGb2N1cyhldmVudD86IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5zaG91bGRBdXRvZm9jdXMpIHtcbiAgICAgIGlmICghZXZlbnQ/LnRhcmdldCB8fCBldmVudC50YXJnZXQgPT09IHRoaXMuaG9zdCkge1xuICAgICAgICB0aGlzLmZpcnN0Rm9jdXNhYmxlPy5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3VwZXIuaGFuZGxlRm9jdXMoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgdGhlIGZpcnN0IGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50XG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGhhc1BlcnNpc3RlZEZvY3VzKCkge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaGFzUGVyc2lzdGVkRm9jdXModGhpcy5ob3N0LCB0aGlzLmNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIGZ1bmN0aW9uIHRvIGluZGljYXRlIHdoZXRoZXIgd2Ugc2hvdWxkIHVzZSBhdXRvZm9jdXMgZm9yIHRoZVxuICAgKiBjaGlsZCBlbGVtZW50cy5cbiAgICpcbiAgICogV2Uga2VlcCB0aGlzIHByaXZhdGUgdG8gbm90IHBvbHV0ZSB0aGUgQVBJLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgc2hvdWxkQXV0b2ZvY3VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuY29uZmlnPy5hdXRvZm9jdXM7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgZmlyc3QgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnQuXG4gICAqXG4gICAqIFdlIGtlZXAgdGhpcyBwcml2YXRlIHRvIG5vdCBwb2x1dGUgdGhlIEFQSS5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGZpcnN0Rm9jdXNhYmxlKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmZpbmRGaXJzdEZvY3VzYWJsZSh0aGlzLmhvc3QsIHRoaXMuY29uZmlnKTtcbiAgfVxufVxuIl19