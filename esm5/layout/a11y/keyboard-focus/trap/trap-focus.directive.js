import { __decorate, __extends } from "tslib";
import { Directive, ElementRef, HostListener, Input, OnInit, } from '@angular/core';
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
        Input('cxTrapFocus')
    ], TrapFocusDirective.prototype, "config", void 0);
    __decorate([
        HostListener('keydown.arrowdown', ['$event']),
        HostListener('keydown.tab', ['$event'])
    ], TrapFocusDirective.prototype, "handleTrapDown", void 0);
    __decorate([
        HostListener('keydown.arrowup', ['$event']),
        HostListener('keydown.shift.tab', ['$event'])
    ], TrapFocusDirective.prototype, "handleTrapUp", void 0);
    TrapFocusDirective = __decorate([
        Directive({
            selector: '[cxTrapFocus]',
        })
    ], TrapFocusDirective);
    return TrapFocusDirective;
}(TabFocusDirective));
export { TrapFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhcC1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy90cmFwL3RyYXAtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDs7O0dBR0c7QUFJSDtJQUF3QyxzQ0FBaUI7SUFxQnZELDRCQUNZLFVBQXNCLEVBQ3RCLE9BQXlCO1FBRnJDLFlBSUUsa0JBQU0sVUFBVSxFQUFFLE9BQU8sQ0FBQyxTQUMzQjtRQUpXLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQU8sR0FBUCxPQUFPLENBQWtCO1FBdEIzQixtQkFBYSxHQUFvQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUUxQixZQUFNLEdBQW9CLEVBQUUsQ0FBQztRQUk3RCxvQkFBYyxHQUFHLFVBQUMsS0FBb0I7WUFDcEMsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ3RCLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxlQUFrQixDQUFDO2FBQ3hDO1FBQ0gsQ0FBQyxDQUFDO1FBSUYsa0JBQVksR0FBRyxVQUFDLEtBQW9CO1lBQ2xDLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUN0QixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssZ0JBQWtCLENBQUM7YUFDeEM7UUFDSCxDQUFDLENBQUM7O0lBT0YsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDTyxzQ0FBUyxHQUFuQixVQUFvQixLQUFjLEVBQUUsU0FBaUI7UUFDbkQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FDcEIsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsTUFBTSxFQUNYLFNBQVMsRUFDVCxLQUFnQixDQUNqQixDQUFDO1NBQ0g7SUFDSCxDQUFDOztnQkF2QnVCLFVBQVU7Z0JBQ2IsZ0JBQWdCOztJQXBCZjtRQUFyQixLQUFLLENBQUMsYUFBYSxDQUFDO3NEQUF3QztJQUk3RDtRQUZDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs4REFLdEM7SUFJRjtRQUZDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzREQUs1QztJQW5CUyxrQkFBa0I7UUFIOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7U0FDMUIsQ0FBQztPQUNXLGtCQUFrQixDQThDOUI7SUFBRCx5QkFBQztDQUFBLEFBOUNELENBQXdDLGlCQUFpQixHQThDeEQ7U0E5Q1ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTU9WRV9GT0NVUywgVHJhcEZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgVGFiRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi90YWIvdGFiLWZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUcmFwRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi90cmFwLWZvY3VzLnNlcnZpY2UnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0aGF0IGtlZXBzIHRoZSBmb2N1cyBpbnNpZGUgdGhlIGZvY3Vzc2FibGUgY2hpbGQgZWxlbWVudHMsXG4gKiBhbHNvIGtub3duIGFzIGEgX2ZvY3VzIHRyYXBfLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hUcmFwRm9jdXNdJyxcbn0pXG5leHBvcnQgY2xhc3MgVHJhcEZvY3VzRGlyZWN0aXZlIGV4dGVuZHMgVGFiRm9jdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogVHJhcEZvY3VzQ29uZmlnID0geyB0cmFwOiB0cnVlIH07XG5cbiAgQElucHV0KCdjeFRyYXBGb2N1cycpIHByb3RlY3RlZCBjb25maWc6IFRyYXBGb2N1c0NvbmZpZyA9IHt9O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3dkb3duJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi50YWInLCBbJyRldmVudCddKVxuICBoYW5kbGVUcmFwRG93biA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmICghIXRoaXMuY29uZmlnLnRyYXApIHtcbiAgICAgIHRoaXMubW92ZUZvY3VzKGV2ZW50LCBNT1ZFX0ZPQ1VTLk5FWFQpO1xuICAgIH1cbiAgfTtcblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmFycm93dXAnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnNoaWZ0LnRhYicsIFsnJGV2ZW50J10pXG4gIGhhbmRsZVRyYXBVcCA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmICghIXRoaXMuY29uZmlnLnRyYXApIHtcbiAgICAgIHRoaXMubW92ZUZvY3VzKGV2ZW50LCBNT1ZFX0ZPQ1VTLlBSRVYpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogVHJhcEZvY3VzU2VydmljZVxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBzZXJ2aWNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0aGUgZm9jdXMgb2YgdGhlIGVsZW1lbnQgcmVmZXJlbmNlIHVwIG9yIGRvd24sIGRlcGVuZGluZyBvbiB0aGUgaW5jcmVtZW50LlxuICAgKiBUaGUgZm9jdXMgb2YgdGhlIGVsZW1lbnQgaXMgdHJhcHBlZCB0byBhdm9pZCBpdCBmcm9tIGdvaW5nIG91dCBvZiB0aGUgZ3JvdXAuXG4gICAqXG4gICAqIEBwYXJhbSBldmVudCBVSUV2ZW50IHRoYXQgaXMgdXNlZCB0byBnZXQgdGhlIHRhcmdldCBlbGVtZW50LiBUaGUgZXZlbnQgaXMgYmxvY2tlZFxuICAgKiAgIGZyb20gc3RhbmRhcmQgZXhlY3V0aW9uIGFuZCBmdXJ0aGVyIGJ1YmJsaW5nLlxuICAgKiBAcGFyYW0gaW5jcmVtZW50IGluZGljYXRlcyB3aGV0aGVyIHRoZSBuZXh0IG9yIHByZXZpb3VzIGlzIGZvY3Vzc2VkLlxuICAgKi9cbiAgcHJvdGVjdGVkIG1vdmVGb2N1cyhldmVudDogVUlFdmVudCwgaW5jcmVtZW50OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5zZXJ2aWNlLmhhc0ZvY3VzYWJsZUNoaWxkcmVuKHRoaXMuaG9zdCkpIHtcbiAgICAgIHRoaXMuc2VydmljZS5tb3ZlRm9jdXMoXG4gICAgICAgIHRoaXMuaG9zdCxcbiAgICAgICAgdGhpcy5jb25maWcsXG4gICAgICAgIGluY3JlbWVudCxcbiAgICAgICAgZXZlbnQgYXMgVUlFdmVudFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==