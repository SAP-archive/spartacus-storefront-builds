import { BaseFocusDirective } from '../base/base-focus.directive';
import { VisibleFocusConfig } from '../keyboard-focus.model';
/**
 * Directive implementation that adds a CSS class to the host element
 * when the moused is used to focus an element. As soon as the keyboard
 * is used, the class is removed.
 */
import * as ɵngcc0 from '@angular/core';
export declare class VisibleFocusDirective extends BaseFocusDirective {
    protected defaultConfig: VisibleFocusConfig;
    protected config: VisibleFocusConfig;
    /** controls a polyfill class for the lacking focus-visible feature */
    mouseFocus: boolean;
    handleMousedown(): void;
    handleKeydown(): void;
    protected get shouldFocusVisible(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<VisibleFocusDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<VisibleFocusDirective, never, never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaWJsZS1mb2N1cy5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsidmlzaWJsZS1mb2N1cy5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7OztBQVFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi4vYmFzZS9iYXNlLWZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBWaXNpYmxlRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG4vKipcbiAqIERpcmVjdGl2ZSBpbXBsZW1lbnRhdGlvbiB0aGF0IGFkZHMgYSBDU1MgY2xhc3MgdG8gdGhlIGhvc3QgZWxlbWVudFxuICogd2hlbiB0aGUgbW91c2VkIGlzIHVzZWQgdG8gZm9jdXMgYW4gZWxlbWVudC4gQXMgc29vbiBhcyB0aGUga2V5Ym9hcmRcbiAqIGlzIHVzZWQsIHRoZSBjbGFzcyBpcyByZW1vdmVkLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBWaXNpYmxlRm9jdXNEaXJlY3RpdmUgZXh0ZW5kcyBCYXNlRm9jdXNEaXJlY3RpdmUge1xuICAgIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBWaXNpYmxlRm9jdXNDb25maWc7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogVmlzaWJsZUZvY3VzQ29uZmlnO1xuICAgIC8qKiBjb250cm9scyBhIHBvbHlmaWxsIGNsYXNzIGZvciB0aGUgbGFja2luZyBmb2N1cy12aXNpYmxlIGZlYXR1cmUgKi9cbiAgICBtb3VzZUZvY3VzOiBib29sZWFuO1xuICAgIGhhbmRsZU1vdXNlZG93bigpOiB2b2lkO1xuICAgIGhhbmRsZUtleWRvd24oKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgZ2V0IHNob3VsZEZvY3VzVmlzaWJsZSgpOiBib29sZWFuO1xufVxuIl19