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
    /** controls a polyfill for the lacking focus-visible feature */
    mouseFocus: boolean;
    handleMousedown(): void;
    handleKeydown(): void;
    protected get shouldFocusVisible(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<VisibleFocusDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<VisibleFocusDirective, "[cxVisibleFocus]", never, {
    "config": "cxVisibleFocus";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaWJsZS1mb2N1cy5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsidmlzaWJsZS1mb2N1cy5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7O0FBUUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi9iYXNlL2Jhc2UtZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFZpc2libGVGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbi8qKlxuICogRGlyZWN0aXZlIGltcGxlbWVudGF0aW9uIHRoYXQgYWRkcyBhIENTUyBjbGFzcyB0byB0aGUgaG9zdCBlbGVtZW50XG4gKiB3aGVuIHRoZSBtb3VzZWQgaXMgdXNlZCB0byBmb2N1cyBhbiBlbGVtZW50LiBBcyBzb29uIGFzIHRoZSBrZXlib2FyZFxuICogaXMgdXNlZCwgdGhlIGNsYXNzIGlzIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFZpc2libGVGb2N1c0RpcmVjdGl2ZSBleHRlbmRzIEJhc2VGb2N1c0RpcmVjdGl2ZSB7XG4gICAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IFZpc2libGVGb2N1c0NvbmZpZztcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBWaXNpYmxlRm9jdXNDb25maWc7XG4gICAgLyoqIGNvbnRyb2xzIGEgcG9seWZpbGwgZm9yIHRoZSBsYWNraW5nIGZvY3VzLXZpc2libGUgZmVhdHVyZSAqL1xuICAgIG1vdXNlRm9jdXM6IGJvb2xlYW47XG4gICAgaGFuZGxlTW91c2Vkb3duKCk6IHZvaWQ7XG4gICAgaGFuZGxlS2V5ZG93bigpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBnZXQgc2hvdWxkRm9jdXNWaXNpYmxlKCk6IGJvb2xlYW47XG59XG4iXX0=