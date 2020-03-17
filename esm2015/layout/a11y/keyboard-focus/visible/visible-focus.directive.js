import { __decorate } from "tslib";
import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { BaseFocusDirective } from '../base/base-focus.directive';
/**
 * Directive implementation that adds a CSS class to the host element
 * when the moused is used to focus an element. As soon as the keyboard
 * is used, the class is removed.
 */
let VisibleFocusDirective = class VisibleFocusDirective extends BaseFocusDirective {
    constructor() {
        super(...arguments);
        this.defaultConfig = { disableMouseFocus: true };
        /** controls a polyfill for the lacking focus-visible feature */
        this.mouseFocus = false;
    }
    handleMousedown() {
        if (this.shouldFocusVisible) {
            this.mouseFocus = true;
        }
    }
    handleKeydown() {
        if (this.shouldFocusVisible) {
            this.mouseFocus = false;
        }
    }
    get shouldFocusVisible() {
        var _a;
        return (_a = this.config) === null || _a === void 0 ? void 0 : _a.disableMouseFocus;
    }
};
__decorate([
    Input('cxVisibleFocus')
], VisibleFocusDirective.prototype, "config", void 0);
__decorate([
    HostBinding('class.mouse-focus')
], VisibleFocusDirective.prototype, "mouseFocus", void 0);
__decorate([
    HostListener('mousedown')
], VisibleFocusDirective.prototype, "handleMousedown", null);
__decorate([
    HostListener('keydown')
], VisibleFocusDirective.prototype, "handleKeydown", null);
VisibleFocusDirective = __decorate([
    Directive({
        selector: '[cxVisibleFocus]',
    })
], VisibleFocusDirective);
export { VisibleFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaWJsZS1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy92aXNpYmxlL3Zpc2libGUtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR2xFOzs7O0dBSUc7QUFJSCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFzQixTQUFRLGtCQUFrQjtJQUE3RDs7UUFDWSxrQkFBYSxHQUF1QixFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDO1FBRzFFLGdFQUFnRTtRQUM5QixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBaUJ2RCxDQUFDO0lBZjRCLGVBQWU7UUFDeEMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRXdCLGFBQWE7UUFDcEMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsSUFBYyxrQkFBa0I7O1FBQzlCLGFBQU8sSUFBSSxDQUFDLE1BQU0sMENBQUUsaUJBQWlCLENBQUM7SUFDeEMsQ0FBQztDQUNGLENBQUE7QUFwQjBCO0lBQXhCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztxREFBc0M7QUFHNUI7SUFBakMsV0FBVyxDQUFDLG1CQUFtQixDQUFDO3lEQUFvQjtBQUUxQjtJQUExQixZQUFZLENBQUMsV0FBVyxDQUFDOzREQUl6QjtBQUV3QjtJQUF4QixZQUFZLENBQUMsU0FBUyxDQUFDOzBEQUl2QjtBQWpCVSxxQkFBcUI7SUFIakMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtLQUM3QixDQUFDO0dBQ1cscUJBQXFCLENBc0JqQztTQXRCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi9iYXNlL2Jhc2UtZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFZpc2libGVGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcblxuLyoqXG4gKiBEaXJlY3RpdmUgaW1wbGVtZW50YXRpb24gdGhhdCBhZGRzIGEgQ1NTIGNsYXNzIHRvIHRoZSBob3N0IGVsZW1lbnRcbiAqIHdoZW4gdGhlIG1vdXNlZCBpcyB1c2VkIHRvIGZvY3VzIGFuIGVsZW1lbnQuIEFzIHNvb24gYXMgdGhlIGtleWJvYXJkXG4gKiBpcyB1c2VkLCB0aGUgY2xhc3MgaXMgcmVtb3ZlZC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4VmlzaWJsZUZvY3VzXScsXG59KVxuZXhwb3J0IGNsYXNzIFZpc2libGVGb2N1c0RpcmVjdGl2ZSBleHRlbmRzIEJhc2VGb2N1c0RpcmVjdGl2ZSB7XG4gIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBWaXNpYmxlRm9jdXNDb25maWcgPSB7IGRpc2FibGVNb3VzZUZvY3VzOiB0cnVlIH07XG4gIEBJbnB1dCgnY3hWaXNpYmxlRm9jdXMnKSBwcm90ZWN0ZWQgY29uZmlnOiBWaXNpYmxlRm9jdXNDb25maWc7XG5cbiAgLyoqIGNvbnRyb2xzIGEgcG9seWZpbGwgZm9yIHRoZSBsYWNraW5nIGZvY3VzLXZpc2libGUgZmVhdHVyZSAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1vdXNlLWZvY3VzJykgbW91c2VGb2N1cyA9IGZhbHNlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicpIGhhbmRsZU1vdXNlZG93bigpIHtcbiAgICBpZiAodGhpcy5zaG91bGRGb2N1c1Zpc2libGUpIHtcbiAgICAgIHRoaXMubW91c2VGb2N1cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicpIGhhbmRsZUtleWRvd24oKSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkRm9jdXNWaXNpYmxlKSB7XG4gICAgICB0aGlzLm1vdXNlRm9jdXMgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHNob3VsZEZvY3VzVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWc/LmRpc2FibGVNb3VzZUZvY3VzO1xuICB9XG59XG4iXX0=