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
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AutoFocusDirective, "[cxAutoFocus]", never, {
    "config": "cxAutoFocus";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsiYXV0by1mb2N1cy5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVzY2FwZUZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi4vZXNjYXBlL2VzY2FwZS1mb2N1cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQXV0b0ZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgQXV0b0ZvY3VzU2VydmljZSB9IGZyb20gJy4vYXV0by1mb2N1cy5zZXJ2aWNlJztcbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgZm9jdXMgdGhlIGZpcnN0IG5lc3RlZCBfZm9jdXNhYmxlXyBlbGVtZW50IGJhc2VkIG9uIHN0YXRlIGFuZCBjb25maWd1cmF0aW9uOlxuICpcbiAqIDEuIGZvY3VzYWJsZSBlbGVtZW50IHRoYXQgd2FzIGxlZnQgaW4gYSBmb2N1c2VkIHN0YXRlXG4gKiAyLiBmb2N1c2FibGUgZWxlbWVudCBzZWxlY3RlZCBieSBjb25maWd1cmVkIENTUyBzZWxlY3RvciAoaS5lLiAnYnV0dG9uW3R5cGU9c3VibWl0XScpXG4gKiAzLiBmb2N1c2FibGUgZWxlbWVudCBtYXJrZWQgd2l0aCB0aGUgbmF0aXZlIEhUTUw1IGBhdXRvZm9jdXNgIGF0dHJpYnV0ZVxuICogNC4gZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnRcbiAqIDUuIHRoZSBob3N0IGVsZW1lbnQsIGluIGNhc2UgdGhlIGNvbmZpZ3VyZWQgQ1NTIHNlbGVjdG9yIGlzIGA6aG9zdGAuXG4gKlxuICogRXhhbXBsZSBjb25maWd1cmF0aW9uczpcbiAqXG4gKiBgPGRpdiBjeEF1dG9Gb2N1cz5bLi4uXTwvZGl2PmBcbiAqXG4gKiBgPGRpdiBbY3hBdXRvRm9jdXNdPVwie2F1dG9mb2N1czogZmFsc2V9XCI+Wy4uLl08L2Rpdj5gXG4gKlxuICogYDxkaXYgW2N4QXV0b0ZvY3VzXT1cInthdXRvZm9jdXM6ICdidXR0b24uYWN0aXZlJ31cIj5bLi4uXTwvZGl2PmBcbiAqXG4gKiBgPGRpdiBbY3hBdXRvRm9jdXNdPVwie2F1dG9mb2N1czogJzpob3N0J31cIj5bLi4uXTwvZGl2PmBcbiAqXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEF1dG9Gb2N1c0RpcmVjdGl2ZSBleHRlbmRzIEVzY2FwZUZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IEF1dG9Gb2N1c1NlcnZpY2U7XG4gICAgLyoqIFRoZSBBdXRvRm9jdXNEaXJlY3RpdmUgd2lsbCBiZSB1c2luZyBhdXRvZm9jdXMgYnkgZGVmYXVsdCAgKi9cbiAgICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogQXV0b0ZvY3VzQ29uZmlnO1xuICAgIHByb3RlY3RlZCBjb25maWc6IEF1dG9Gb2N1c0NvbmZpZztcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBzZXJ2aWNlOiBBdXRvRm9jdXNTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBGb2N1cyB0aGUgZWxlbWVudCBleHBsaWNpdGx5IGlmIGl0IHdhcyBmb2N1c3NlZCBiZWZvcmUuXG4gICAgICovXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogTWltaWMgdGhlIGZvY3VzIHdpdGhvdXQgc2V0dGluZyB0aGUgYWN0dWFsIGZvY3VzIG9uIHRoZSBob3N0LiBUaGUgZmlyc3RcbiAgICAgKiBmb2N1c2FibGUgY2hpbGQgZWxlbWVudCB3aWxsIGJlIGZvY3Vzc2VkLlxuICAgICAqL1xuICAgIGhhbmRsZUZvY3VzKGV2ZW50PzogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgZmlyc3QgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0IGhhc1BlcnNpc3RlZEZvY3VzKCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRvIGluZGljYXRlIHdoZXRoZXIgd2Ugc2hvdWxkIHVzZSBhdXRvZm9jdXMgZm9yIHRoZVxuICAgICAqIGNoaWxkIGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogV2Uga2VlcCB0aGlzIHByaXZhdGUgdG8gbm90IHBvbHV0ZSB0aGUgQVBJLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0IHNob3VsZEF1dG9mb2N1cygpO1xuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgdGhlIGZpcnN0IGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50LlxuICAgICAqXG4gICAgICogV2Uga2VlcCB0aGlzIHByaXZhdGUgdG8gbm90IHBvbHV0ZSB0aGUgQVBJLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0IGZpcnN0Rm9jdXNhYmxlKCk7XG59XG4iXX0=