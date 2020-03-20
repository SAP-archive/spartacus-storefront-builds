import { __decorate } from "tslib";
import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
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
        // @Input('cxTrapFocus')
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
export { TrapFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhcC1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy90cmFwL3RyYXAtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhEOzs7R0FHRztBQUVILElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQW1CLFNBQVEsaUJBQWlCO0lBc0J2RCxZQUNZLFVBQXNCLEVBQ3RCLE9BQXlCO1FBRW5DLEtBQUssQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFIakIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQXZCM0Isa0JBQWEsR0FBb0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFFMUQsd0JBQXdCO1FBQ2QsV0FBTSxHQUFvQixFQUFFLENBQUM7UUFJdkMsbUJBQWMsR0FBRyxDQUFDLEtBQW9CLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLGVBQWtCLENBQUM7YUFDeEM7UUFDSCxDQUFDLENBQUM7UUFJRixpQkFBWSxHQUFHLENBQUMsS0FBb0IsRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssZ0JBQWtCLENBQUM7YUFDeEM7UUFDSCxDQUFDLENBQUM7SUFPRixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNPLFNBQVMsQ0FBQyxLQUFjLEVBQUUsU0FBaUI7UUFDbkQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FDcEIsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsTUFBTSxFQUNYLFNBQVMsRUFDVCxLQUFnQixDQUNqQixDQUFDO1NBQ0g7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUF4QnlCLFVBQVU7WUFDYixnQkFBZ0I7O0FBaEJyQztJQUZDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzswREFLdEM7QUFJRjtJQUZDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dEQUs1QztBQXBCUyxrQkFBa0I7SUFEOUIsU0FBUyxFQUFFLENBQUMsNEJBQTRCO0dBQzVCLGtCQUFrQixDQStDOUI7U0EvQ1ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTU9WRV9GT0NVUywgVHJhcEZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgVGFiRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi90YWIvdGFiLWZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUcmFwRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi90cmFwLWZvY3VzLnNlcnZpY2UnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0aGF0IGtlZXBzIHRoZSBmb2N1cyBpbnNpZGUgdGhlIGZvY3Vzc2FibGUgY2hpbGQgZWxlbWVudHMsXG4gKiBhbHNvIGtub3duIGFzIGEgX2ZvY3VzIHRyYXBfLlxuICovXG5ARGlyZWN0aXZlKCkgLy8gc2VsZWN0b3I6ICdbY3hUcmFwRm9jdXNdJ1xuZXhwb3J0IGNsYXNzIFRyYXBGb2N1c0RpcmVjdGl2ZSBleHRlbmRzIFRhYkZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IFRyYXBGb2N1c0NvbmZpZyA9IHsgdHJhcDogdHJ1ZSB9O1xuXG4gIC8vIEBJbnB1dCgnY3hUcmFwRm9jdXMnKVxuICBwcm90ZWN0ZWQgY29uZmlnOiBUcmFwRm9jdXNDb25maWcgPSB7fTtcblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmFycm93ZG93bicsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24udGFiJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlVHJhcERvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoISF0aGlzLmNvbmZpZy50cmFwKSB7XG4gICAgICB0aGlzLm1vdmVGb2N1cyhldmVudCwgTU9WRV9GT0NVUy5ORVhUKTtcbiAgICB9XG4gIH07XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd3VwJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5zaGlmdC50YWInLCBbJyRldmVudCddKVxuICBoYW5kbGVUcmFwVXAgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoISF0aGlzLmNvbmZpZy50cmFwKSB7XG4gICAgICB0aGlzLm1vdmVGb2N1cyhldmVudCwgTU9WRV9GT0NVUy5QUkVWKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IFRyYXBGb2N1c1NlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgc2VydmljZSk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIGZvY3VzIG9mIHRoZSBlbGVtZW50IHJlZmVyZW5jZSB1cCBvciBkb3duLCBkZXBlbmRpbmcgb24gdGhlIGluY3JlbWVudC5cbiAgICogVGhlIGZvY3VzIG9mIHRoZSBlbGVtZW50IGlzIHRyYXBwZWQgdG8gYXZvaWQgaXQgZnJvbSBnb2luZyBvdXQgb2YgdGhlIGdyb3VwLlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnQgVUlFdmVudCB0aGF0IGlzIHVzZWQgdG8gZ2V0IHRoZSB0YXJnZXQgZWxlbWVudC4gVGhlIGV2ZW50IGlzIGJsb2NrZWRcbiAgICogICBmcm9tIHN0YW5kYXJkIGV4ZWN1dGlvbiBhbmQgZnVydGhlciBidWJibGluZy5cbiAgICogQHBhcmFtIGluY3JlbWVudCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgbmV4dCBvciBwcmV2aW91cyBpcyBmb2N1c3NlZC5cbiAgICovXG4gIHByb3RlY3RlZCBtb3ZlRm9jdXMoZXZlbnQ6IFVJRXZlbnQsIGluY3JlbWVudDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuc2VydmljZS5oYXNGb2N1c2FibGVDaGlsZHJlbih0aGlzLmhvc3QpKSB7XG4gICAgICB0aGlzLnNlcnZpY2UubW92ZUZvY3VzKFxuICAgICAgICB0aGlzLmhvc3QsXG4gICAgICAgIHRoaXMuY29uZmlnLFxuICAgICAgICBpbmNyZW1lbnQsXG4gICAgICAgIGV2ZW50IGFzIFVJRXZlbnRcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=