import { AfterViewInit, ElementRef } from '@angular/core';
import { EscapeFocusDirective } from '../escape/escape-focus.directive';
import { AutoFocusConfig } from '../keyboard-focus.model';
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
     *
     * We keep this private to not polute the API.
     */
    private get shouldAutofocus();
    /**
     * Helper function to get the first focusable child element.
     *
     * We keep this private to not polute the API.
     */
    private get firstFocusable();
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AutoFocusDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AutoFocusDirective, never, never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsiYXV0by1mb2N1cy5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFc2NhcGVGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4uL2VzY2FwZS9lc2NhcGUtZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEF1dG9Gb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IEF1dG9Gb2N1c1NlcnZpY2UgfSBmcm9tICcuL2F1dG8tZm9jdXMuc2VydmljZSc7XG4vKipcbiAqIERpcmVjdGl2ZSB0aGF0IGZvY3VzIHRoZSBmaXJzdCBuZXN0ZWQgX2ZvY3VzYWJsZV8gZWxlbWVudCBiYXNlZCBvbiBzdGF0ZSBhbmQgY29uZmlndXJhdGlvbjpcbiAqXG4gKiAxLiBmb2N1c2FibGUgZWxlbWVudCB0aGF0IHdhcyBsZWZ0IGluIGEgZm9jdXNlZCBzdGF0ZVxuICogMi4gZm9jdXNhYmxlIGVsZW1lbnQgc2VsZWN0ZWQgYnkgY29uZmlndXJlZCBDU1Mgc2VsZWN0b3IgKGkuZS4gJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKVxuICogMy4gZm9jdXNhYmxlIGVsZW1lbnQgbWFya2VkIHdpdGggdGhlIG5hdGl2ZSBIVE1MNSBgYXV0b2ZvY3VzYCBhdHRyaWJ1dGVcbiAqIDQuIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50XG4gKiA1LiB0aGUgaG9zdCBlbGVtZW50LCBpbiBjYXNlIHRoZSBjb25maWd1cmVkIENTUyBzZWxlY3RvciBpcyBgOmhvc3RgLlxuICpcbiAqIEV4YW1wbGUgY29uZmlndXJhdGlvbnM6XG4gKlxuICogYDxkaXYgY3hBdXRvRm9jdXM+Wy4uLl08L2Rpdj5gXG4gKlxuICogYDxkaXYgW2N4QXV0b0ZvY3VzXT1cInthdXRvZm9jdXM6IGZhbHNlfVwiPlsuLi5dPC9kaXY+YFxuICpcbiAqIGA8ZGl2IFtjeEF1dG9Gb2N1c109XCJ7YXV0b2ZvY3VzOiAnYnV0dG9uLmFjdGl2ZSd9XCI+Wy4uLl08L2Rpdj5gXG4gKlxuICogYDxkaXYgW2N4QXV0b0ZvY3VzXT1cInthdXRvZm9jdXM6ICc6aG9zdCd9XCI+Wy4uLl08L2Rpdj5gXG4gKlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBdXRvRm9jdXNEaXJlY3RpdmUgZXh0ZW5kcyBFc2NhcGVGb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBBdXRvRm9jdXNTZXJ2aWNlO1xuICAgIC8qKiBUaGUgQXV0b0ZvY3VzRGlyZWN0aXZlIHdpbGwgYmUgdXNpbmcgYXV0b2ZvY3VzIGJ5IGRlZmF1bHQgICovXG4gICAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IEF1dG9Gb2N1c0NvbmZpZztcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBBdXRvRm9jdXNDb25maWc7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgc2VydmljZTogQXV0b0ZvY3VzU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogRm9jdXMgdGhlIGVsZW1lbnQgZXhwbGljaXRseSBpZiBpdCB3YXMgZm9jdXNzZWQgYmVmb3JlLlxuICAgICAqL1xuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIE1pbWljIHRoZSBmb2N1cyB3aXRob3V0IHNldHRpbmcgdGhlIGFjdHVhbCBmb2N1cyBvbiB0aGUgaG9zdC4gVGhlIGZpcnN0XG4gICAgICogZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnQgd2lsbCBiZSBmb2N1c3NlZC5cbiAgICAgKi9cbiAgICBoYW5kbGVGb2N1cyhldmVudD86IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgdGhlIGZpcnN0IGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldCBoYXNQZXJzaXN0ZWRGb2N1cygpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byBpbmRpY2F0ZSB3aGV0aGVyIHdlIHNob3VsZCB1c2UgYXV0b2ZvY3VzIGZvciB0aGVcbiAgICAgKiBjaGlsZCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIFdlIGtlZXAgdGhpcyBwcml2YXRlIHRvIG5vdCBwb2x1dGUgdGhlIEFQSS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdldCBzaG91bGRBdXRvZm9jdXMoKTtcbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHRoZSBmaXJzdCBmb2N1c2FibGUgY2hpbGQgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFdlIGtlZXAgdGhpcyBwcml2YXRlIHRvIG5vdCBwb2x1dGUgdGhlIEFQSS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdldCBmaXJzdEZvY3VzYWJsZSgpO1xufVxuIl19