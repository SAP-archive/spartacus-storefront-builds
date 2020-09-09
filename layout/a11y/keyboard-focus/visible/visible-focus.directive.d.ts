import { BaseFocusDirective } from '../base/base-focus.directive';
import { VisibleFocusConfig } from '../keyboard-focus.model';
/**
 * Directive implementation that adds a CSS class to the host element
 * when the moused is used to focus an element. As soon as the keyboard
 * is used, the class is removed.
 *
 * This feature must be explicitly enabled with the `disableMouseFocus` config.
 *
 * The appearance of the visual focus depends on the CSS implementation to
 * begin with. Spartacus styles add a blue border around each focusable element.
 * This can be considered annoying by keyboard users, as they won't need such a
 * strong indication of the selected element.
 */
import * as ɵngcc0 from '@angular/core';
export declare class VisibleFocusDirective extends BaseFocusDirective {
    protected defaultConfig: VisibleFocusConfig;
    protected config: VisibleFocusConfig;
    /** Controls a css class to hide focus visible CSS rules */
    mouseFocus: boolean;
    handleMousedown(): void;
    handleKeydown(event: KeyboardEvent): void;
    /**
     * Indicates whether the configurations setup to disable visual focus.
     */
    protected get shouldFocusVisible(): boolean;
    /**
     * Indicates whether the event is used to navigate the storefront. Some keyboard events
     * are used by mouse users to fill a form or interact with the OS or browser.
     */
    protected isNavigating(event: KeyboardEvent): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<VisibleFocusDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<VisibleFocusDirective, never, never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaWJsZS1mb2N1cy5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsidmlzaWJsZS1mb2N1cy5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4uL2Jhc2UvYmFzZS1mb2N1cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVmlzaWJsZUZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuLyoqXG4gKiBEaXJlY3RpdmUgaW1wbGVtZW50YXRpb24gdGhhdCBhZGRzIGEgQ1NTIGNsYXNzIHRvIHRoZSBob3N0IGVsZW1lbnRcbiAqIHdoZW4gdGhlIG1vdXNlZCBpcyB1c2VkIHRvIGZvY3VzIGFuIGVsZW1lbnQuIEFzIHNvb24gYXMgdGhlIGtleWJvYXJkXG4gKiBpcyB1c2VkLCB0aGUgY2xhc3MgaXMgcmVtb3ZlZC5cbiAqXG4gKiBUaGlzIGZlYXR1cmUgbXVzdCBiZSBleHBsaWNpdGx5IGVuYWJsZWQgd2l0aCB0aGUgYGRpc2FibGVNb3VzZUZvY3VzYCBjb25maWcuXG4gKlxuICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIHZpc3VhbCBmb2N1cyBkZXBlbmRzIG9uIHRoZSBDU1MgaW1wbGVtZW50YXRpb24gdG9cbiAqIGJlZ2luIHdpdGguIFNwYXJ0YWN1cyBzdHlsZXMgYWRkIGEgYmx1ZSBib3JkZXIgYXJvdW5kIGVhY2ggZm9jdXNhYmxlIGVsZW1lbnQuXG4gKiBUaGlzIGNhbiBiZSBjb25zaWRlcmVkIGFubm95aW5nIGJ5IGtleWJvYXJkIHVzZXJzLCBhcyB0aGV5IHdvbid0IG5lZWQgc3VjaCBhXG4gKiBzdHJvbmcgaW5kaWNhdGlvbiBvZiB0aGUgc2VsZWN0ZWQgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVmlzaWJsZUZvY3VzRGlyZWN0aXZlIGV4dGVuZHMgQmFzZUZvY3VzRGlyZWN0aXZlIHtcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogVmlzaWJsZUZvY3VzQ29uZmlnO1xuICAgIHByb3RlY3RlZCBjb25maWc6IFZpc2libGVGb2N1c0NvbmZpZztcbiAgICAvKiogQ29udHJvbHMgYSBjc3MgY2xhc3MgdG8gaGlkZSBmb2N1cyB2aXNpYmxlIENTUyBydWxlcyAqL1xuICAgIG1vdXNlRm9jdXM6IGJvb2xlYW47XG4gICAgaGFuZGxlTW91c2Vkb3duKCk6IHZvaWQ7XG4gICAgaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGNvbmZpZ3VyYXRpb25zIHNldHVwIHRvIGRpc2FibGUgdmlzdWFsIGZvY3VzLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXQgc2hvdWxkRm9jdXNWaXNpYmxlKCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGV2ZW50IGlzIHVzZWQgdG8gbmF2aWdhdGUgdGhlIHN0b3JlZnJvbnQuIFNvbWUga2V5Ym9hcmQgZXZlbnRzXG4gICAgICogYXJlIHVzZWQgYnkgbW91c2UgdXNlcnMgdG8gZmlsbCBhIGZvcm0gb3IgaW50ZXJhY3Qgd2l0aCB0aGUgT1Mgb3IgYnJvd3Nlci5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaXNOYXZpZ2F0aW5nKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogYm9vbGVhbjtcbn1cbiJdfQ==