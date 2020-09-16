import { Directive, ElementRef } from '@angular/core';
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
export class AutoFocusDirective extends EscapeFocusDirective {
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
        var _a;
        if (this.shouldAutofocus) {
            if (!(event === null || event === void 0 ? void 0 : event.target) || event.target === this.host) {
                (_a = this.firstFocusable) === null || _a === void 0 ? void 0 : _a.focus();
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
}
AutoFocusDirective.decorators = [
    { type: Directive }
];
AutoFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: AutoFocusService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9sYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9hdXRvZm9jdXMvYXV0by1mb2N1cy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXhFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBRUgsTUFBTSxPQUFPLGtCQUNYLFNBQVEsb0JBQW9CO0lBUTVCLFlBQ1ksVUFBc0IsRUFDdEIsT0FBeUI7UUFFbkMsS0FBSyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUhqQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBUnJDLGlFQUFpRTtRQUN2RCxrQkFBYSxHQUFvQixFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQVUvRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUNuRCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsV0FBVyxDQUFDLEtBQXFCOztRQUMvQixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxFQUFDLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxNQUFNLENBQUEsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2hELE1BQUEsSUFBSSxDQUFDLGNBQWMsMENBQUUsS0FBSyxHQUFHO2FBQzlCO2lCQUFNO2dCQUNKLEtBQUssQ0FBQyxNQUFzQixDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3ZDO1NBQ0Y7UUFDRCxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQWMsaUJBQWlCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBYyxlQUFlOztRQUMzQixPQUFPLENBQUMsUUFBQyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxTQUFTLENBQUEsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQVksY0FBYztRQUN4QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7O1lBbEVGLFNBQVM7OztZQXpCeUIsVUFBVTtZQUdwQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVzY2FwZUZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi4vZXNjYXBlL2VzY2FwZS1mb2N1cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQXV0b0ZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgQXV0b0ZvY3VzU2VydmljZSB9IGZyb20gJy4vYXV0by1mb2N1cy5zZXJ2aWNlJztcblxuLyoqXG4gKiBEaXJlY3RpdmUgdGhhdCBmb2N1cyB0aGUgZmlyc3QgbmVzdGVkIF9mb2N1c2FibGVfIGVsZW1lbnQgYmFzZWQgb24gc3RhdGUgYW5kIGNvbmZpZ3VyYXRpb246XG4gKlxuICogMS4gZm9jdXNhYmxlIGVsZW1lbnQgdGhhdCB3YXMgbGVmdCBpbiBhIGZvY3VzZWQgc3RhdGUgKGFrYSBfcGVyc2lzdGVkXyBmb2N1cylcbiAqIDIuIGZvY3VzYWJsZSBlbGVtZW50IHNlbGVjdGVkIGJ5IGNvbmZpZ3VyZWQgQ1NTIHNlbGVjdG9yIChpLmUuICdidXR0b25bdHlwZT1zdWJtaXRdJylcbiAqIDMuIGZvY3VzYWJsZSBlbGVtZW50IG1hcmtlZCB3aXRoIHRoZSBuYXRpdmUgSFRNTDUgYGF1dG9mb2N1c2AgYXR0cmlidXRlXG4gKiA0LiBmaXJzdCBmb2N1c2FibGUgZWxlbWVudFxuICogNS4gdGhlIGhvc3QgZWxlbWVudCwgaW4gY2FzZSB0aGUgY29uZmlndXJlZCBDU1Mgc2VsZWN0b3IgaXMgYDpob3N0YC5cbiAqXG4gKiBFeGFtcGxlIGNvbmZpZ3VyYXRpb25zOlxuICpcbiAqIGA8ZGl2IGN4QXV0b0ZvY3VzPlsuLi5dPC9kaXY+YFxuICpcbiAqIGA8ZGl2IFtjeEF1dG9Gb2N1c109XCJ7YXV0b2ZvY3VzOiBmYWxzZX1cIj5bLi4uXTwvZGl2PmBcbiAqXG4gKiBgPGRpdiBbY3hBdXRvRm9jdXNdPVwie2F1dG9mb2N1czogJ2J1dHRvbi5hY3RpdmUnfVwiPlsuLi5dPC9kaXY+YFxuICpcbiAqIGA8ZGl2IFtjeEF1dG9Gb2N1c109XCJ7YXV0b2ZvY3VzOiAnOmhvc3QnfVwiPlsuLi5dPC9kaXY+YFxuICpcbiAqL1xuQERpcmVjdGl2ZSgpIC8vIHNlbGVjdG9yOiAnW2N4QXV0b0ZvY3VzXSdcbmV4cG9ydCBjbGFzcyBBdXRvRm9jdXNEaXJlY3RpdmVcbiAgZXh0ZW5kcyBFc2NhcGVGb2N1c0RpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAvKiogVGhlIEF1dG9Gb2N1c0RpcmVjdGl2ZSB3aWxsIGJlIHVzaW5nIGF1dG9mb2N1cyBieSBkZWZhdWx0ICAqL1xuICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogQXV0b0ZvY3VzQ29uZmlnID0geyBhdXRvZm9jdXM6IHRydWUgfTtcblxuICAvLyBASW5wdXQoJ2N4QXV0b0ZvY3VzJylcbiAgcHJvdGVjdGVkIGNvbmZpZzogQXV0b0ZvY3VzQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBBdXRvRm9jdXNTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHNlcnZpY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzIHRoZSBlbGVtZW50IGV4cGxpY2l0bHkgaWYgaXQgd2FzIGZvY3Vzc2VkIGJlZm9yZS5cbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG91bGRBdXRvZm9jdXMpIHtcbiAgICAgIHRoaXMuaGFuZGxlRm9jdXMoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnNob3VsZEF1dG9mb2N1cyB8fCB0aGlzLmhhc1BlcnNpc3RlZEZvY3VzKSB7XG4gICAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWltaWMgdGhlIGZvY3VzIHdpdGhvdXQgc2V0dGluZyB0aGUgYWN0dWFsIGZvY3VzIG9uIHRoZSBob3N0LiBUaGUgZmlyc3RcbiAgICogZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnQgd2lsbCBiZSBmb2N1c3NlZC5cbiAgICovXG4gIGhhbmRsZUZvY3VzKGV2ZW50PzogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLnNob3VsZEF1dG9mb2N1cykge1xuICAgICAgaWYgKCFldmVudD8udGFyZ2V0IHx8IGV2ZW50LnRhcmdldCA9PT0gdGhpcy5ob3N0KSB7XG4gICAgICAgIHRoaXMuZmlyc3RGb2N1c2FibGU/LmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgICBzdXBlci5oYW5kbGVGb2N1cyhldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgZmlyc3QgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgaGFzUGVyc2lzdGVkRm9jdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5oYXNQZXJzaXN0ZWRGb2N1cyh0aGlzLmhvc3QsIHRoaXMuY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gaW5kaWNhdGUgd2hldGhlciB3ZSBzaG91bGQgdXNlIGF1dG9mb2N1cyBmb3IgdGhlXG4gICAqIGNoaWxkIGVsZW1lbnRzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzaG91bGRBdXRvZm9jdXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5jb25maWc/LmF1dG9mb2N1cztcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHRoZSBmaXJzdCBmb2N1c2FibGUgY2hpbGQgZWxlbWVudC5cbiAgICpcbiAgICogV2Uga2VlcCB0aGlzIHByaXZhdGUgdG8gbm90IHBvbHV0ZSB0aGUgQVBJLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgZmlyc3RGb2N1c2FibGUoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZmluZEZpcnN0Rm9jdXNhYmxlKHRoaXMuaG9zdCwgdGhpcy5jb25maWcpO1xuICB9XG59XG4iXX0=