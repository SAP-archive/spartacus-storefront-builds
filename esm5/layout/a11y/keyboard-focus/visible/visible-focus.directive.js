import { __decorate, __extends } from "tslib";
import { Directive, HostBinding, HostListener } from '@angular/core';
import { BaseFocusDirective } from '../base/base-focus.directive';
/**
 * Directive implementation that adds a CSS class to the host element
 * when the moused is used to focus an element. As soon as the keyboard
 * is used, the class is removed.
 */
var VisibleFocusDirective = /** @class */ (function (_super) {
    __extends(VisibleFocusDirective, _super);
    function VisibleFocusDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultConfig = { disableMouseFocus: true };
        /** controls a polyfill class for the lacking focus-visible feature */
        _this.mouseFocus = false;
        return _this;
    }
    VisibleFocusDirective.prototype.handleMousedown = function () {
        if (this.shouldFocusVisible) {
            this.mouseFocus = true;
        }
    };
    VisibleFocusDirective.prototype.handleKeydown = function () {
        if (this.shouldFocusVisible) {
            this.mouseFocus = false;
        }
    };
    Object.defineProperty(VisibleFocusDirective.prototype, "shouldFocusVisible", {
        get: function () {
            var _a;
            return (_a = this.config) === null || _a === void 0 ? void 0 : _a.disableMouseFocus;
        },
        enumerable: true,
        configurable: true
    });
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
        Directive() // selector: '[cxVisibleFocus]'
    ], VisibleFocusDirective);
    return VisibleFocusDirective;
}(BaseFocusDirective));
export { VisibleFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaWJsZS1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy92aXNpYmxlL3Zpc2libGUtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHbEU7Ozs7R0FJRztBQUVIO0lBQTJDLHlDQUFrQjtJQUE3RDtRQUFBLHFFQXdCQztRQXZCVyxtQkFBYSxHQUF1QixFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDO1FBSzFFLHNFQUFzRTtRQUNwQyxnQkFBVSxHQUFHLEtBQUssQ0FBQzs7SUFpQnZELENBQUM7SUFmNEIsK0NBQWUsR0FBZjtRQUN6QixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFd0IsNkNBQWEsR0FBYjtRQUN2QixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRCxzQkFBYyxxREFBa0I7YUFBaEM7O1lBQ0UsYUFBTyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxpQkFBaUIsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQWhCaUM7UUFBakMsV0FBVyxDQUFDLG1CQUFtQixDQUFDOzZEQUFvQjtJQUUxQjtRQUExQixZQUFZLENBQUMsV0FBVyxDQUFDO2dFQUl6QjtJQUV3QjtRQUF4QixZQUFZLENBQUMsU0FBUyxDQUFDOzhEQUl2QjtJQW5CVSxxQkFBcUI7UUFEakMsU0FBUyxFQUFFLENBQUMsK0JBQStCO09BQy9CLHFCQUFxQixDQXdCakM7SUFBRCw0QkFBQztDQUFBLEFBeEJELENBQTJDLGtCQUFrQixHQXdCNUQ7U0F4QlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi9iYXNlL2Jhc2UtZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFZpc2libGVGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcblxuLyoqXG4gKiBEaXJlY3RpdmUgaW1wbGVtZW50YXRpb24gdGhhdCBhZGRzIGEgQ1NTIGNsYXNzIHRvIHRoZSBob3N0IGVsZW1lbnRcbiAqIHdoZW4gdGhlIG1vdXNlZCBpcyB1c2VkIHRvIGZvY3VzIGFuIGVsZW1lbnQuIEFzIHNvb24gYXMgdGhlIGtleWJvYXJkXG4gKiBpcyB1c2VkLCB0aGUgY2xhc3MgaXMgcmVtb3ZlZC5cbiAqL1xuQERpcmVjdGl2ZSgpIC8vIHNlbGVjdG9yOiAnW2N4VmlzaWJsZUZvY3VzXSdcbmV4cG9ydCBjbGFzcyBWaXNpYmxlRm9jdXNEaXJlY3RpdmUgZXh0ZW5kcyBCYXNlRm9jdXNEaXJlY3RpdmUge1xuICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogVmlzaWJsZUZvY3VzQ29uZmlnID0geyBkaXNhYmxlTW91c2VGb2N1czogdHJ1ZSB9O1xuXG4gIC8vIEBJbnB1dCgnY3hWaXNpYmxlRm9jdXMnKVxuICBwcm90ZWN0ZWQgY29uZmlnOiBWaXNpYmxlRm9jdXNDb25maWc7XG5cbiAgLyoqIGNvbnRyb2xzIGEgcG9seWZpbGwgY2xhc3MgZm9yIHRoZSBsYWNraW5nIGZvY3VzLXZpc2libGUgZmVhdHVyZSAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1vdXNlLWZvY3VzJykgbW91c2VGb2N1cyA9IGZhbHNlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicpIGhhbmRsZU1vdXNlZG93bigpIHtcbiAgICBpZiAodGhpcy5zaG91bGRGb2N1c1Zpc2libGUpIHtcbiAgICAgIHRoaXMubW91c2VGb2N1cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicpIGhhbmRsZUtleWRvd24oKSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkRm9jdXNWaXNpYmxlKSB7XG4gICAgICB0aGlzLm1vdXNlRm9jdXMgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHNob3VsZEZvY3VzVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWc/LmRpc2FibGVNb3VzZUZvY3VzO1xuICB9XG59XG4iXX0=