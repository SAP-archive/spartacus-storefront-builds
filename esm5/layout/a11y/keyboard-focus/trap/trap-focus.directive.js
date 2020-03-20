import { __decorate, __extends } from "tslib";
import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { TabFocusDirective } from '../tab/tab-focus.directive';
import { TrapFocusService } from './trap-focus.service';
/**
 * Directive that keeps the focus inside the focussable child elements,
 * also known as a _focus trap_.
 */
var TrapFocusDirective = /** @class */ (function (_super) {
    __extends(TrapFocusDirective, _super);
    function TrapFocusDirective(elementRef, service) {
        var _this = _super.call(this, elementRef, service) || this;
        _this.elementRef = elementRef;
        _this.service = service;
        _this.defaultConfig = { trap: true };
        // @Input('cxTrapFocus')
        _this.config = {};
        _this.handleTrapDown = function (event) {
            if (!!_this.config.trap) {
                _this.moveFocus(event, 1 /* NEXT */);
            }
        };
        _this.handleTrapUp = function (event) {
            if (!!_this.config.trap) {
                _this.moveFocus(event, -1 /* PREV */);
            }
        };
        return _this;
    }
    /**
     * Moves the focus of the element reference up or down, depending on the increment.
     * The focus of the element is trapped to avoid it from going out of the group.
     *
     * @param event UIEvent that is used to get the target element. The event is blocked
     *   from standard execution and further bubbling.
     * @param increment indicates whether the next or previous is focussed.
     */
    TrapFocusDirective.prototype.moveFocus = function (event, increment) {
        if (this.service.hasFocusableChildren(this.host)) {
            this.service.moveFocus(this.host, this.config, increment, event);
        }
    };
    TrapFocusDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: TrapFocusService }
    ]; };
    __decorate([
        HostListener('keydown.arrowdown', ['$event']),
        HostListener('keydown.tab', ['$event'])
    ], TrapFocusDirective.prototype, "handleTrapDown", void 0);
    __decorate([
        HostListener('keydown.arrowup', ['$event']),
        HostListener('keydown.shift.tab', ['$event'])
    ], TrapFocusDirective.prototype, "handleTrapUp", void 0);
    TrapFocusDirective = __decorate([
        Directive() // selector: '[cxTrapFocus]'
    ], TrapFocusDirective);
    return TrapFocusDirective;
}(TabFocusDirective));
export { TrapFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhcC1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy90cmFwL3RyYXAtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhEOzs7R0FHRztBQUVIO0lBQXdDLHNDQUFpQjtJQXNCdkQsNEJBQ1ksVUFBc0IsRUFDdEIsT0FBeUI7UUFGckMsWUFJRSxrQkFBTSxVQUFVLEVBQUUsT0FBTyxDQUFDLFNBQzNCO1FBSlcsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUF2QjNCLG1CQUFhLEdBQW9CLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO1FBRTFELHdCQUF3QjtRQUNkLFlBQU0sR0FBb0IsRUFBRSxDQUFDO1FBSXZDLG9CQUFjLEdBQUcsVUFBQyxLQUFvQjtZQUNwQyxJQUFJLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDdEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLGVBQWtCLENBQUM7YUFDeEM7UUFDSCxDQUFDLENBQUM7UUFJRixrQkFBWSxHQUFHLFVBQUMsS0FBb0I7WUFDbEMsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ3RCLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxnQkFBa0IsQ0FBQzthQUN4QztRQUNILENBQUMsQ0FBQzs7SUFPRixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNPLHNDQUFTLEdBQW5CLFVBQW9CLEtBQWMsRUFBRSxTQUFpQjtRQUNuRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUNwQixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxNQUFNLEVBQ1gsU0FBUyxFQUNULEtBQWdCLENBQ2pCLENBQUM7U0FDSDtJQUNILENBQUM7O2dCQXZCdUIsVUFBVTtnQkFDYixnQkFBZ0I7O0lBaEJyQztRQUZDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs4REFLdEM7SUFJRjtRQUZDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzREQUs1QztJQXBCUyxrQkFBa0I7UUFEOUIsU0FBUyxFQUFFLENBQUMsNEJBQTRCO09BQzVCLGtCQUFrQixDQStDOUI7SUFBRCx5QkFBQztDQUFBLEFBL0NELENBQXdDLGlCQUFpQixHQStDeEQ7U0EvQ1ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTU9WRV9GT0NVUywgVHJhcEZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgVGFiRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi90YWIvdGFiLWZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUcmFwRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi90cmFwLWZvY3VzLnNlcnZpY2UnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0aGF0IGtlZXBzIHRoZSBmb2N1cyBpbnNpZGUgdGhlIGZvY3Vzc2FibGUgY2hpbGQgZWxlbWVudHMsXG4gKiBhbHNvIGtub3duIGFzIGEgX2ZvY3VzIHRyYXBfLlxuICovXG5ARGlyZWN0aXZlKCkgLy8gc2VsZWN0b3I6ICdbY3hUcmFwRm9jdXNdJ1xuZXhwb3J0IGNsYXNzIFRyYXBGb2N1c0RpcmVjdGl2ZSBleHRlbmRzIFRhYkZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IFRyYXBGb2N1c0NvbmZpZyA9IHsgdHJhcDogdHJ1ZSB9O1xuXG4gIC8vIEBJbnB1dCgnY3hUcmFwRm9jdXMnKVxuICBwcm90ZWN0ZWQgY29uZmlnOiBUcmFwRm9jdXNDb25maWcgPSB7fTtcblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmFycm93ZG93bicsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24udGFiJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlVHJhcERvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoISF0aGlzLmNvbmZpZy50cmFwKSB7XG4gICAgICB0aGlzLm1vdmVGb2N1cyhldmVudCwgTU9WRV9GT0NVUy5ORVhUKTtcbiAgICB9XG4gIH07XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd3VwJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5zaGlmdC50YWInLCBbJyRldmVudCddKVxuICBoYW5kbGVUcmFwVXAgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoISF0aGlzLmNvbmZpZy50cmFwKSB7XG4gICAgICB0aGlzLm1vdmVGb2N1cyhldmVudCwgTU9WRV9GT0NVUy5QUkVWKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IFRyYXBGb2N1c1NlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgc2VydmljZSk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIGZvY3VzIG9mIHRoZSBlbGVtZW50IHJlZmVyZW5jZSB1cCBvciBkb3duLCBkZXBlbmRpbmcgb24gdGhlIGluY3JlbWVudC5cbiAgICogVGhlIGZvY3VzIG9mIHRoZSBlbGVtZW50IGlzIHRyYXBwZWQgdG8gYXZvaWQgaXQgZnJvbSBnb2luZyBvdXQgb2YgdGhlIGdyb3VwLlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnQgVUlFdmVudCB0aGF0IGlzIHVzZWQgdG8gZ2V0IHRoZSB0YXJnZXQgZWxlbWVudC4gVGhlIGV2ZW50IGlzIGJsb2NrZWRcbiAgICogICBmcm9tIHN0YW5kYXJkIGV4ZWN1dGlvbiBhbmQgZnVydGhlciBidWJibGluZy5cbiAgICogQHBhcmFtIGluY3JlbWVudCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgbmV4dCBvciBwcmV2aW91cyBpcyBmb2N1c3NlZC5cbiAgICovXG4gIHByb3RlY3RlZCBtb3ZlRm9jdXMoZXZlbnQ6IFVJRXZlbnQsIGluY3JlbWVudDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuc2VydmljZS5oYXNGb2N1c2FibGVDaGlsZHJlbih0aGlzLmhvc3QpKSB7XG4gICAgICB0aGlzLnNlcnZpY2UubW92ZUZvY3VzKFxuICAgICAgICB0aGlzLmhvc3QsXG4gICAgICAgIHRoaXMuY29uZmlnLFxuICAgICAgICBpbmNyZW1lbnQsXG4gICAgICAgIGV2ZW50IGFzIFVJRXZlbnRcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=