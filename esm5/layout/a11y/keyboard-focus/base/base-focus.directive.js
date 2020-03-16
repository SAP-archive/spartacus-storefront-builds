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
         *
         * We keep this utility method private to not pollute the API.
         */
        get: function () {
            return (this.tabindex === undefined &&
                ['button', 'input', 'select', 'textarea'].indexOf(this.host.tagName.toLowerCase()) === -1 &&
                !(this.host.tagName === 'A' && this.host.hasAttribute('href')));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9iYXNlL2Jhc2UtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDs7Ozs7Ozs7O0dBU0c7QUFFSDtJQU1FLDRCQUNZLFVBQW1DLEVBQ25DLE9BQXlCO1FBRHpCLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBTjNCLGtCQUFhLEdBQW9CLEVBQUUsQ0FBQztJQU8zQyxDQUFDO0lBRUoscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTyxvREFBdUIsR0FBakM7UUFDRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM5RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBTUQsc0JBQWMsb0NBQUk7UUFKbEI7OztXQUdHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBU0Qsc0JBQWMsZ0RBQWdCO1FBUDlCOzs7Ozs7V0FNRzthQUNILFVBQStCLFFBQWdCO1lBQzdDLElBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFO2dCQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzthQUMxQjtRQUNILENBQUM7OztPQUFBO0lBU0Qsc0JBQVksd0RBQXdCO1FBUHBDOzs7Ozs7V0FNRzthQUNIO1lBQ0UsT0FBTyxDQUNMLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUztnQkFDM0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUNoQyxLQUFLLENBQUMsQ0FBQztnQkFDUixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQy9ELENBQUM7UUFDSixDQUFDOzs7T0FBQTs7Z0JBekR1QixVQUFVO2dCQUNiLGdCQUFnQjs7SUFKRTtRQUF0QyxLQUFLLEVBQUUsRUFBRSxXQUFXLENBQUMsZUFBZSxDQUFDO3dEQUFrQjtJQUpwQyxrQkFBa0I7UUFEdkMsU0FBUyxFQUFFO09BQ1Usa0JBQWtCLENBaUV2QztJQUFELHlCQUFDO0NBQUEsQUFqRUQsSUFpRUM7U0FqRXFCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgQmFzZUZvY3VzU2VydmljZSB9IGZyb20gJy4vYmFzZS1mb2N1cy5zZXJ2aWNlJztcblxuLyoqXG4gKiBBYnN0cmFjdCBkaXJlY3RpdmUgdGhhdCBwcm92aWRlcyBhIGNvbW1vbiBpbnRlcmZhY2UgZm9yIGFsbCBmb2N1cyBkaXJlY3RpdmVzOlxuICogLSBCbG9jayBGb2N1c1xuICogLSBQZXJzaXN0IEZvY3VzXG4gKiAtIEVzY2FwZSBGb2N1c1xuICogLSBBdXRvIEZvY3VzXG4gKiAtIFRhYiBGb2N1c1xuICogLSBUcmFwIEZvY3VzXG4gKiAtIExvY2sgRm9jdXNcbiAqL1xuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJvdGVjdGVkIGNvbmZpZzogQmFzZUZvY3VzQ29uZmlnO1xuICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogQmFzZUZvY3VzQ29uZmlnID0ge307XG5cbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JykgdGFiaW5kZXg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IEJhc2VGb2N1c1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0RGVmYXVsdENvbmZpZ3VyYXRpb24oKTtcbiAgICB0aGlzLnJlcXVpcmVkVGFiaW5kZXggPSAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgKGlucHV0KSBjb25maWcgaWYgaXQgdW5kZWZpbmVkIG9yIGFuIGVtcHR5IHN0cmluZywgd2l0aCB0aGVcbiAgICogYGRlZmF1bHRDb25maWdgLiBUaGUgYGRlZmF1bHRDb25maWdgIG1pZ2h0IGJlIHNwZWNpZmllZCBmb3IgZWFjaCBkaXJlY3RpdmVcbiAgICogZGlmZmVyZW50bHkuIElmIGEgc3BlY2lmaWMgZGlyZWN0aXZlIGlzIHVzZWQgKGkuZS4gYGN4QXV0b0ZvY3VzYCksIHRoZVxuICAgKiBzcGVjaWZpYyAoaW5oZXJpdGVkKSBkZWZhdWx0Q29uZmlnIHdpbGwgYmUgdXNlZC5cbiAgICovXG4gIHByb3RlY3RlZCBzZXREZWZhdWx0Q29uZmlndXJhdGlvbigpOiB2b2lkIHtcbiAgICBpZiAoKCF0aGlzLmNvbmZpZyB8fCB0aGlzLmNvbmZpZyA9PT0gJycpICYmIHRoaXMuZGVmYXVsdENvbmZpZykge1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmRlZmF1bHRDb25maWc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gcmV0dXJuIHRoZSBob3N0IGVsZW1lbnQgZm9yIHRoZSBkaXJlY3RpdmVcbiAgICogZ2l2ZW4gYnkgdGhlIGBlbGVtZW50UmVmYC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgaG9zdCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcmNlIGEgdGFiaW5kZXggb24gdGhlIGhvc3QgZWxlbWVudCBpZiBpdCBpcyBfcmVxdXJpZWRfIHRvIG1ha2UgdGhlIGVsZW1lbnRcbiAgICogZm9jdXNhYmxlLiBJZiB0aGUgZWxlbWVudCBpcyBmb2N1c2FibGUgYnkgbmF0dXJlIG9yIGJ5IGEgZ2l2ZW4gdGFiaW5kZXgsIHRoZVxuICAgKiBgdGFiaW5kZXhgIGlzIG5vdCBhcHBsaWVkLlxuICAgKlxuICAgKiBCdXR0b25zLCBhY3RpdmUgbGlua3MsIGV0Yy4gZG8gbm8gbmVlZCBhbiBleHBsaWNpdCB0YWJpbmRleCB0byByZWNlaXZlIGZvY3VzLlxuICAgKi9cbiAgcHJvdGVjdGVkIHNldCByZXF1aXJlZFRhYmluZGV4KHRhYmluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5yZXF1aXJlc0V4cGxpY2l0VGFiSW5kZXgpIHtcbiAgICAgIHRoaXMudGFiaW5kZXggPSB0YWJpbmRleDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBob3N0IGVsZW1lbnQgZG9lcyBub3QgaGF2ZSBhIHRhYmluZGV4IGRlZmluZWRcbiAgICogYW5kIGl0IGFsc28gZG9lc24ndCBnZXQgZm9jdXMgYnkgYnJvd3NlcnMgbmF0dXJlIChpLmUuIGJ1dHRvbiBvclxuICAgKiBhY3RpdmUgbGluaykuXG4gICAqXG4gICAqIFdlIGtlZXAgdGhpcyB1dGlsaXR5IG1ldGhvZCBwcml2YXRlIHRvIG5vdCBwb2xsdXRlIHRoZSBBUEkuXG4gICAqL1xuICBwcml2YXRlIGdldCByZXF1aXJlc0V4cGxpY2l0VGFiSW5kZXgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMudGFiaW5kZXggPT09IHVuZGVmaW5lZCAmJlxuICAgICAgWydidXR0b24nLCAnaW5wdXQnLCAnc2VsZWN0JywgJ3RleHRhcmVhJ10uaW5kZXhPZihcbiAgICAgICAgdGhpcy5ob3N0LnRhZ05hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgKSA9PT0gLTEgJiZcbiAgICAgICEodGhpcy5ob3N0LnRhZ05hbWUgPT09ICdBJyAmJiB0aGlzLmhvc3QuaGFzQXR0cmlidXRlKCdocmVmJykpXG4gICAgKTtcbiAgfVxufVxuIl19