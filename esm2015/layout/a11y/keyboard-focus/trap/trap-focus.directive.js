import { __decorate } from "tslib";
import { Directive, ElementRef, HostListener, Input, OnInit, } from '@angular/core';
import { TabFocusDirective } from '../tab/tab-focus.directive';
import { TrapFocusService } from './trap-focus.service';
/**
 * Directive that keeps the focus inside the focussable child elements,
 * also known as a _focus trap_.
 */
let TrapFocusDirective = class TrapFocusDirective extends TabFocusDirective {
    constructor(elementRef, service) {
        super(elementRef, service);
        this.elementRef = elementRef;
        this.service = service;
        this.defaultConfig = { trap: true };
        this.config = {};
        this.handleTrapDown = (event) => {
            if (!!this.config.trap) {
                this.moveFocus(event, 1 /* NEXT */);
            }
        };
        this.handleTrapUp = (event) => {
            if (!!this.config.trap) {
                this.moveFocus(event, -1 /* PREV */);
            }
        };
    }
    /**
     * Moves the focus of the element reference up or down, depending on the increment.
     * The focus of the element is trapped to avoid it from going out of the group.
     *
     * @param event UIEvent that is used to get the target element. The event is blocked
     *   from standard execution and further bubbling.
     * @param increment indicates whether the next or previous is focussed.
     */
    moveFocus(event, increment) {
        if (this.service.hasFocusableChildren(this.host)) {
            this.service.moveFocus(this.host, this.config, increment, event);
        }
    }
};
TrapFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: TrapFocusService }
];
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
export { TrapFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhcC1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy90cmFwL3RyYXAtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDs7O0dBR0c7QUFJSCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFtQixTQUFRLGlCQUFpQjtJQXFCdkQsWUFDWSxVQUFzQixFQUN0QixPQUF5QjtRQUVuQyxLQUFLLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBSGpCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUF0QjNCLGtCQUFhLEdBQW9CLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO1FBRTFCLFdBQU0sR0FBb0IsRUFBRSxDQUFDO1FBSTdELG1CQUFjLEdBQUcsQ0FBQyxLQUFvQixFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxlQUFrQixDQUFDO2FBQ3hDO1FBQ0gsQ0FBQyxDQUFDO1FBSUYsaUJBQVksR0FBRyxDQUFDLEtBQW9CLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLGdCQUFrQixDQUFDO2FBQ3hDO1FBQ0gsQ0FBQyxDQUFDO0lBT0YsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDTyxTQUFTLENBQUMsS0FBYyxFQUFFLFNBQWlCO1FBQ25ELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLE1BQU0sRUFDWCxTQUFTLEVBQ1QsS0FBZ0IsQ0FDakIsQ0FBQztTQUNIO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBeEJ5QixVQUFVO1lBQ2IsZ0JBQWdCOztBQXBCZjtJQUFyQixLQUFLLENBQUMsYUFBYSxDQUFDO2tEQUF3QztBQUk3RDtJQUZDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzswREFLdEM7QUFJRjtJQUZDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dEQUs1QztBQW5CUyxrQkFBa0I7SUFIOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7S0FDMUIsQ0FBQztHQUNXLGtCQUFrQixDQThDOUI7U0E5Q1ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTU9WRV9GT0NVUywgVHJhcEZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgVGFiRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi90YWIvdGFiLWZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUcmFwRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi90cmFwLWZvY3VzLnNlcnZpY2UnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0aGF0IGtlZXBzIHRoZSBmb2N1cyBpbnNpZGUgdGhlIGZvY3Vzc2FibGUgY2hpbGQgZWxlbWVudHMsXG4gKiBhbHNvIGtub3duIGFzIGEgX2ZvY3VzIHRyYXBfLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hUcmFwRm9jdXNdJyxcbn0pXG5leHBvcnQgY2xhc3MgVHJhcEZvY3VzRGlyZWN0aXZlIGV4dGVuZHMgVGFiRm9jdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogVHJhcEZvY3VzQ29uZmlnID0geyB0cmFwOiB0cnVlIH07XG5cbiAgQElucHV0KCdjeFRyYXBGb2N1cycpIHByb3RlY3RlZCBjb25maWc6IFRyYXBGb2N1c0NvbmZpZyA9IHt9O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3dkb3duJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi50YWInLCBbJyRldmVudCddKVxuICBoYW5kbGVUcmFwRG93biA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmICghIXRoaXMuY29uZmlnLnRyYXApIHtcbiAgICAgIHRoaXMubW92ZUZvY3VzKGV2ZW50LCBNT1ZFX0ZPQ1VTLk5FWFQpO1xuICAgIH1cbiAgfTtcblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmFycm93dXAnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnNoaWZ0LnRhYicsIFsnJGV2ZW50J10pXG4gIGhhbmRsZVRyYXBVcCA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmICghIXRoaXMuY29uZmlnLnRyYXApIHtcbiAgICAgIHRoaXMubW92ZUZvY3VzKGV2ZW50LCBNT1ZFX0ZPQ1VTLlBSRVYpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogVHJhcEZvY3VzU2VydmljZVxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBzZXJ2aWNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0aGUgZm9jdXMgb2YgdGhlIGVsZW1lbnQgcmVmZXJlbmNlIHVwIG9yIGRvd24sIGRlcGVuZGluZyBvbiB0aGUgaW5jcmVtZW50LlxuICAgKiBUaGUgZm9jdXMgb2YgdGhlIGVsZW1lbnQgaXMgdHJhcHBlZCB0byBhdm9pZCBpdCBmcm9tIGdvaW5nIG91dCBvZiB0aGUgZ3JvdXAuXG4gICAqXG4gICAqIEBwYXJhbSBldmVudCBVSUV2ZW50IHRoYXQgaXMgdXNlZCB0byBnZXQgdGhlIHRhcmdldCBlbGVtZW50LiBUaGUgZXZlbnQgaXMgYmxvY2tlZFxuICAgKiAgIGZyb20gc3RhbmRhcmQgZXhlY3V0aW9uIGFuZCBmdXJ0aGVyIGJ1YmJsaW5nLlxuICAgKiBAcGFyYW0gaW5jcmVtZW50IGluZGljYXRlcyB3aGV0aGVyIHRoZSBuZXh0IG9yIHByZXZpb3VzIGlzIGZvY3Vzc2VkLlxuICAgKi9cbiAgcHJvdGVjdGVkIG1vdmVGb2N1cyhldmVudDogVUlFdmVudCwgaW5jcmVtZW50OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5zZXJ2aWNlLmhhc0ZvY3VzYWJsZUNoaWxkcmVuKHRoaXMuaG9zdCkpIHtcbiAgICAgIHRoaXMuc2VydmljZS5tb3ZlRm9jdXMoXG4gICAgICAgIHRoaXMuaG9zdCxcbiAgICAgICAgdGhpcy5jb25maWcsXG4gICAgICAgIGluY3JlbWVudCxcbiAgICAgICAgZXZlbnQgYXMgVUlFdmVudFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==