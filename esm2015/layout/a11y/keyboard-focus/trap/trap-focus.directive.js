import { Directive, ElementRef, HostListener } from '@angular/core';
import { TabFocusDirective } from '../tab/tab-focus.directive';
import { TrapFocusService } from './trap-focus.service';
/**
 * Directive that keeps the focus inside the focusable child elements,
 * also known as a _focus trap_.
 */
export class TrapFocusDirective extends TabFocusDirective {
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
}
TrapFocusDirective.decorators = [
    { type: Directive }
];
TrapFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: TrapFocusService }
];
TrapFocusDirective.propDecorators = {
    handleTrapDown: [{ type: HostListener, args: ['keydown.arrowdown', ['$event'],] }, { type: HostListener, args: ['keydown.tab', ['$event'],] }],
    handleTrapUp: [{ type: HostListener, args: ['keydown.arrowup', ['$event'],] }, { type: HostListener, args: ['keydown.shift.tab', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhcC1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9sYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy90cmFwL3RyYXAtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUU1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDs7O0dBR0c7QUFFSCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsaUJBQWlCO0lBc0J2RCxZQUNZLFVBQXNCLEVBQ3RCLE9BQXlCO1FBRW5DLEtBQUssQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFIakIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQXZCM0Isa0JBQWEsR0FBb0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFFMUQsd0JBQXdCO1FBQ2QsV0FBTSxHQUFvQixFQUFFLENBQUM7UUFJdkMsbUJBQWMsR0FBRyxDQUFDLEtBQW9CLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLGVBQWtCLENBQUM7YUFDeEM7UUFDSCxDQUFDLENBQUM7UUFJRixpQkFBWSxHQUFHLENBQUMsS0FBb0IsRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssZ0JBQWtCLENBQUM7YUFDeEM7UUFDSCxDQUFDLENBQUM7SUFPRixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNPLFNBQVMsQ0FBQyxLQUFjLEVBQUUsU0FBaUI7UUFDbkQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FDcEIsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsTUFBTSxFQUNYLFNBQVMsRUFDVCxLQUFnQixDQUNqQixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7WUEvQ0YsU0FBUzs7O1lBVFUsVUFBVTtZQUdyQixnQkFBZ0I7Ozs2QkFhdEIsWUFBWSxTQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDLGNBQzVDLFlBQVksU0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUM7MkJBT3RDLFlBQVksU0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUMxQyxZQUFZLFNBQUMsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNT1ZFX0ZPQ1VTLCBUcmFwRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBUYWJGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4uL3RhYi90YWItZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRyYXBGb2N1c1NlcnZpY2UgfSBmcm9tICcuL3RyYXAtZm9jdXMuc2VydmljZSc7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRoYXQga2VlcHMgdGhlIGZvY3VzIGluc2lkZSB0aGUgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnRzLFxuICogYWxzbyBrbm93biBhcyBhIF9mb2N1cyB0cmFwXy5cbiAqL1xuQERpcmVjdGl2ZSgpIC8vIHNlbGVjdG9yOiAnW2N4VHJhcEZvY3VzXSdcbmV4cG9ydCBjbGFzcyBUcmFwRm9jdXNEaXJlY3RpdmUgZXh0ZW5kcyBUYWJGb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBUcmFwRm9jdXNDb25maWcgPSB7IHRyYXA6IHRydWUgfTtcblxuICAvLyBASW5wdXQoJ2N4VHJhcEZvY3VzJylcbiAgcHJvdGVjdGVkIGNvbmZpZzogVHJhcEZvY3VzQ29uZmlnID0ge307XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd2Rvd24nLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnRhYicsIFsnJGV2ZW50J10pXG4gIGhhbmRsZVRyYXBEb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKCEhdGhpcy5jb25maWcudHJhcCkge1xuICAgICAgdGhpcy5tb3ZlRm9jdXMoZXZlbnQsIE1PVkVfRk9DVVMuTkVYVCk7XG4gICAgfVxuICB9O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3d1cCcsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uc2hpZnQudGFiJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlVHJhcFVwID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKCEhdGhpcy5jb25maWcudHJhcCkge1xuICAgICAgdGhpcy5tb3ZlRm9jdXMoZXZlbnQsIE1PVkVfRk9DVVMuUFJFVik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBUcmFwRm9jdXNTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHNlcnZpY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBmb2N1cyBvZiB0aGUgZWxlbWVudCByZWZlcmVuY2UgdXAgb3IgZG93biwgZGVwZW5kaW5nIG9uIHRoZSBpbmNyZW1lbnQuXG4gICAqIFRoZSBmb2N1cyBvZiB0aGUgZWxlbWVudCBpcyB0cmFwcGVkIHRvIGF2b2lkIGl0IGZyb20gZ29pbmcgb3V0IG9mIHRoZSBncm91cC5cbiAgICpcbiAgICogQHBhcmFtIGV2ZW50IFVJRXZlbnQgdGhhdCBpcyB1c2VkIHRvIGdldCB0aGUgdGFyZ2V0IGVsZW1lbnQuIFRoZSBldmVudCBpcyBibG9ja2VkXG4gICAqICAgZnJvbSBzdGFuZGFyZCBleGVjdXRpb24gYW5kIGZ1cnRoZXIgYnViYmxpbmcuXG4gICAqIEBwYXJhbSBpbmNyZW1lbnQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIG5leHQgb3IgcHJldmlvdXMgaXMgZm9jdXNzZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgbW92ZUZvY3VzKGV2ZW50OiBVSUV2ZW50LCBpbmNyZW1lbnQ6IG51bWJlcikge1xuICAgIGlmICh0aGlzLnNlcnZpY2UuaGFzRm9jdXNhYmxlQ2hpbGRyZW4odGhpcy5ob3N0KSkge1xuICAgICAgdGhpcy5zZXJ2aWNlLm1vdmVGb2N1cyhcbiAgICAgICAgdGhpcy5ob3N0LFxuICAgICAgICB0aGlzLmNvbmZpZyxcbiAgICAgICAgaW5jcmVtZW50LFxuICAgICAgICBldmVudCBhcyBVSUV2ZW50XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19