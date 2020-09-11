import { AfterViewInit, ElementRef } from '@angular/core';
import { EscapeFocusDirective } from '../escape/escape-focus.directive';
import { AutoFocusConfig } from '../keyboard-focus.model';
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
import * as ɵngcc0 from '@angular/core';
export declare class AutoFocusDirective extends EscapeFocusDirective implements AfterViewInit {
    protected elementRef: ElementRef;
    protected service: AutoFocusService;
    /** The AutoFocusDirective will be using autofocus by default  */
    protected defaultConfig: AutoFocusConfig;
    protected config: AutoFocusConfig;
    constructor(elementRef: ElementRef, service: AutoFocusService);
    /**
     * Focus the element explicitly if it was focussed before.
     */
    ngAfterViewInit(): void;
    /**
     * Mimic the focus without setting the actual focus on the host. The first
     * focusable child element will be focussed.
     */
    handleFocus(event?: KeyboardEvent): void;
    /**
     * Helper function to get the first focusable child element
     */
    protected get hasPersistedFocus(): boolean;
    /**
     * Helper function to indicate whether we should use autofocus for the
     * child elements.
     */
    protected get shouldAutofocus(): boolean;
    /**
     * Helper function to get the first focusable child element.
     *
     * We keep this private to not polute the API.
     */
    private get firstFocusable();
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AutoFocusDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AutoFocusDirective, never, never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsiYXV0by1mb2N1cy5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXNjYXBlRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi9lc2NhcGUvZXNjYXBlLWZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBdXRvRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBBdXRvRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi9hdXRvLWZvY3VzLnNlcnZpY2UnO1xuLyoqXG4gKiBEaXJlY3RpdmUgdGhhdCBmb2N1cyB0aGUgZmlyc3QgbmVzdGVkIF9mb2N1c2FibGVfIGVsZW1lbnQgYmFzZWQgb24gc3RhdGUgYW5kIGNvbmZpZ3VyYXRpb246XG4gKlxuICogMS4gZm9jdXNhYmxlIGVsZW1lbnQgdGhhdCB3YXMgbGVmdCBpbiBhIGZvY3VzZWQgc3RhdGUgKGFrYSBfcGVyc2lzdGVkXyBmb2N1cylcbiAqIDIuIGZvY3VzYWJsZSBlbGVtZW50IHNlbGVjdGVkIGJ5IGNvbmZpZ3VyZWQgQ1NTIHNlbGVjdG9yIChpLmUuICdidXR0b25bdHlwZT1zdWJtaXRdJylcbiAqIDMuIGZvY3VzYWJsZSBlbGVtZW50IG1hcmtlZCB3aXRoIHRoZSBuYXRpdmUgSFRNTDUgYGF1dG9mb2N1c2AgYXR0cmlidXRlXG4gKiA0LiBmaXJzdCBmb2N1c2FibGUgZWxlbWVudFxuICogNS4gdGhlIGhvc3QgZWxlbWVudCwgaW4gY2FzZSB0aGUgY29uZmlndXJlZCBDU1Mgc2VsZWN0b3IgaXMgYDpob3N0YC5cbiAqXG4gKiBFeGFtcGxlIGNvbmZpZ3VyYXRpb25zOlxuICpcbiAqIGA8ZGl2IGN4QXV0b0ZvY3VzPlsuLi5dPC9kaXY+YFxuICpcbiAqIGA8ZGl2IFtjeEF1dG9Gb2N1c109XCJ7YXV0b2ZvY3VzOiBmYWxzZX1cIj5bLi4uXTwvZGl2PmBcbiAqXG4gKiBgPGRpdiBbY3hBdXRvRm9jdXNdPVwie2F1dG9mb2N1czogJ2J1dHRvbi5hY3RpdmUnfVwiPlsuLi5dPC9kaXY+YFxuICpcbiAqIGA8ZGl2IFtjeEF1dG9Gb2N1c109XCJ7YXV0b2ZvY3VzOiAnOmhvc3QnfVwiPlsuLi5dPC9kaXY+YFxuICpcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQXV0b0ZvY3VzRGlyZWN0aXZlIGV4dGVuZHMgRXNjYXBlRm9jdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogQXV0b0ZvY3VzU2VydmljZTtcbiAgICAvKiogVGhlIEF1dG9Gb2N1c0RpcmVjdGl2ZSB3aWxsIGJlIHVzaW5nIGF1dG9mb2N1cyBieSBkZWZhdWx0ICAqL1xuICAgIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBBdXRvRm9jdXNDb25maWc7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQXV0b0ZvY3VzQ29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHNlcnZpY2U6IEF1dG9Gb2N1c1NlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIEZvY3VzIHRoZSBlbGVtZW50IGV4cGxpY2l0bHkgaWYgaXQgd2FzIGZvY3Vzc2VkIGJlZm9yZS5cbiAgICAgKi9cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBNaW1pYyB0aGUgZm9jdXMgd2l0aG91dCBzZXR0aW5nIHRoZSBhY3R1YWwgZm9jdXMgb24gdGhlIGhvc3QuIFRoZSBmaXJzdFxuICAgICAqIGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50IHdpbGwgYmUgZm9jdXNzZWQuXG4gICAgICovXG4gICAgaGFuZGxlRm9jdXMoZXZlbnQ/OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHRoZSBmaXJzdCBmb2N1c2FibGUgY2hpbGQgZWxlbWVudFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXQgaGFzUGVyc2lzdGVkRm9jdXMoKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gaW5kaWNhdGUgd2hldGhlciB3ZSBzaG91bGQgdXNlIGF1dG9mb2N1cyBmb3IgdGhlXG4gICAgICogY2hpbGQgZWxlbWVudHMuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldCBzaG91bGRBdXRvZm9jdXMoKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHRoZSBmaXJzdCBmb2N1c2FibGUgY2hpbGQgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFdlIGtlZXAgdGhpcyBwcml2YXRlIHRvIG5vdCBwb2x1dGUgdGhlIEFQSS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdldCBmaXJzdEZvY3VzYWJsZSgpO1xufVxuIl19