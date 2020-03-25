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
     */
    get requiresExplicitTabIndex() {
        return (this.tabindex === undefined &&
            ['button', 'input', 'select', 'textarea'].indexOf(this.host.tagName.toLowerCase()) === -1 &&
            !(this.host.tagName === 'A' &&
                (this.host.hasAttribute('href') || this.host.hasAttribute('routerlink'))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9iYXNlL2Jhc2UtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDs7Ozs7Ozs7O0dBU0c7QUFFSCxJQUFzQixrQkFBa0IsR0FBeEMsTUFBc0Isa0JBQWtCO0lBZXRDLFlBQ1ksVUFBbUMsRUFDbkMsT0FBeUI7UUFEekIsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFWckM7OztXQUdHO1FBQ08sa0JBQWEsR0FBb0IsRUFBRSxDQUFDO0lBTzNDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLHVCQUF1QjtRQUMvQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM5RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBYyxJQUFJO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILElBQWMsZ0JBQWdCLENBQUMsUUFBZ0I7UUFDN0MsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUU7WUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsd0JBQXdCO1FBQ3BDLE9BQU8sQ0FDTCxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVM7WUFDM0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUNoQyxLQUFLLENBQUMsQ0FBQztZQUNSLENBQUMsQ0FDQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxHQUFHO2dCQUN6QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQ3pFLENBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQTNEeUIsVUFBVTtZQUNiLGdCQUFnQjs7QUFKRTtJQUF0QyxLQUFLLEVBQUUsRUFBRSxXQUFXLENBQUMsZUFBZSxDQUFDO29EQUFrQjtBQWJwQyxrQkFBa0I7SUFEdkMsU0FBUyxFQUFFO0dBQ1Usa0JBQWtCLENBMkV2QztTQTNFcUIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi9iYXNlLWZvY3VzLnNlcnZpY2UnO1xuXG4vKipcbiAqIEFic3RyYWN0IGRpcmVjdGl2ZSB0aGF0IHByb3ZpZGVzIGEgY29tbW9uIGludGVyZmFjZSBmb3IgYWxsIGZvY3VzIGRpcmVjdGl2ZXM6XG4gKiAtIEJsb2NrIEZvY3VzXG4gKiAtIFBlcnNpc3QgRm9jdXNcbiAqIC0gRXNjYXBlIEZvY3VzXG4gKiAtIEF1dG8gRm9jdXNcbiAqIC0gVGFiIEZvY3VzXG4gKiAtIFRyYXAgRm9jdXNcbiAqIC0gTG9jayBGb2N1c1xuICovXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRm9jdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogT3B0aW9uYWwgY29uZmlndXJhdGlvbiBmb3IgdGhlIGZvY3VzIGRpcmVjdGl2ZSBkcml2ZXMgdGhlIGJlaGF2aW91ciBvZiB0aGUga2V5Ym9hcmRcbiAgICogZm9jdXMgZGlyZWN0aXZlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGNvbmZpZzogQmFzZUZvY3VzQ29uZmlnO1xuXG4gIC8qKlxuICAgKiBBIGRlZmF1bHQgY29uZmlnIGNhbiBiZSBwcm92aWRlZCBmb3IgZWFjaCBkaXJlY3RpdmUgaWYgYSBzcGVjaWZpYyBmb2N1cyBkaXJlY3RpdmVcbiAgICogaXMgdXNlZCBkaXJlY3RseS4gaS5lLiBgPGRpdiBjeEF1dG9Gb2N1cz48L2Rpdj5gXG4gICAqL1xuICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogQmFzZUZvY3VzQ29uZmlnID0ge307XG5cbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JykgdGFiaW5kZXg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IEJhc2VGb2N1c1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0RGVmYXVsdENvbmZpZ3VyYXRpb24oKTtcbiAgICB0aGlzLnJlcXVpcmVkVGFiaW5kZXggPSAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgKGlucHV0KSBjb25maWcgaWYgaXQgdW5kZWZpbmVkIG9yIGFuIGVtcHR5IHN0cmluZywgd2l0aCB0aGVcbiAgICogYGRlZmF1bHRDb25maWdgLiBUaGUgYGRlZmF1bHRDb25maWdgIG1pZ2h0IGJlIHNwZWNpZmllZCBmb3IgZWFjaCBkaXJlY3RpdmVcbiAgICogZGlmZmVyZW50bHkuIElmIGEgc3BlY2lmaWMgZGlyZWN0aXZlIGlzIHVzZWQgKGkuZS4gYGN4QXV0b0ZvY3VzYCksIHRoZVxuICAgKiBzcGVjaWZpYyAoaW5oZXJpdGVkKSBkZWZhdWx0Q29uZmlnIHdpbGwgYmUgdXNlZC5cbiAgICovXG4gIHByb3RlY3RlZCBzZXREZWZhdWx0Q29uZmlndXJhdGlvbigpOiB2b2lkIHtcbiAgICBpZiAoKCF0aGlzLmNvbmZpZyB8fCB0aGlzLmNvbmZpZyA9PT0gJycpICYmIHRoaXMuZGVmYXVsdENvbmZpZykge1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmRlZmF1bHRDb25maWc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gcmV0dXJuIHRoZSBob3N0IGVsZW1lbnQgZm9yIHRoZSBkaXJlY3RpdmVcbiAgICogZ2l2ZW4gYnkgdGhlIGBlbGVtZW50UmVmYC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgaG9zdCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcmNlIGEgdGFiaW5kZXggb24gdGhlIGhvc3QgZWxlbWVudCBpZiBpdCBpcyBfcmVxdXJpZWRfIHRvIG1ha2UgdGhlIGVsZW1lbnRcbiAgICogZm9jdXNhYmxlLiBJZiB0aGUgZWxlbWVudCBpcyBmb2N1c2FibGUgYnkgbmF0dXJlIG9yIGJ5IGEgZ2l2ZW4gdGFiaW5kZXgsIHRoZVxuICAgKiBgdGFiaW5kZXhgIGlzIG5vdCBhcHBsaWVkLlxuICAgKlxuICAgKiBCdXR0b25zLCBhY3RpdmUgbGlua3MsIGV0Yy4gZG8gbm8gbmVlZCBhbiBleHBsaWNpdCB0YWJpbmRleCB0byByZWNlaXZlIGZvY3VzLlxuICAgKi9cbiAgcHJvdGVjdGVkIHNldCByZXF1aXJlZFRhYmluZGV4KHRhYmluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5yZXF1aXJlc0V4cGxpY2l0VGFiSW5kZXgpIHtcbiAgICAgIHRoaXMudGFiaW5kZXggPSB0YWJpbmRleDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBob3N0IGVsZW1lbnQgZG9lcyBub3QgaGF2ZSBhIHRhYmluZGV4IGRlZmluZWRcbiAgICogYW5kIGl0IGFsc28gZG9lc24ndCBnZXQgZm9jdXMgYnkgYnJvd3NlcnMgbmF0dXJlIChpLmUuIGJ1dHRvbiBvclxuICAgKiBhY3RpdmUgbGluaykuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHJlcXVpcmVzRXhwbGljaXRUYWJJbmRleCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy50YWJpbmRleCA9PT0gdW5kZWZpbmVkICYmXG4gICAgICBbJ2J1dHRvbicsICdpbnB1dCcsICdzZWxlY3QnLCAndGV4dGFyZWEnXS5pbmRleE9mKFxuICAgICAgICB0aGlzLmhvc3QudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICApID09PSAtMSAmJlxuICAgICAgIShcbiAgICAgICAgdGhpcy5ob3N0LnRhZ05hbWUgPT09ICdBJyAmJlxuICAgICAgICAodGhpcy5ob3N0Lmhhc0F0dHJpYnV0ZSgnaHJlZicpIHx8IHRoaXMuaG9zdC5oYXNBdHRyaWJ1dGUoJ3JvdXRlcmxpbmsnKSlcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=