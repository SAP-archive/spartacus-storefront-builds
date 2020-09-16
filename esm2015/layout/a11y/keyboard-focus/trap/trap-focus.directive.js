import { Directive, ElementRef, HostListener } from '@angular/core';
import { TabFocusDirective } from '../tab/tab-focus.directive';
import { TrapFocusService } from './trap-focus.service';
/**
 * Directive that keeps the focus inside the focussable child elements,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhcC1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9sYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy90cmFwL3RyYXAtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUU1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDs7O0dBR0c7QUFFSCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsaUJBQWlCO0lBc0J2RCxZQUNZLFVBQXNCLEVBQ3RCLE9BQXlCO1FBRW5DLEtBQUssQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFIakIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQXZCM0Isa0JBQWEsR0FBb0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFFMUQsd0JBQXdCO1FBQ2QsV0FBTSxHQUFvQixFQUFFLENBQUM7UUFJdkMsbUJBQWMsR0FBRyxDQUFDLEtBQW9CLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLGVBQWtCLENBQUM7YUFDeEM7UUFDSCxDQUFDLENBQUM7UUFJRixpQkFBWSxHQUFHLENBQUMsS0FBb0IsRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssZ0JBQWtCLENBQUM7YUFDeEM7UUFDSCxDQUFDLENBQUM7SUFPRixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNPLFNBQVMsQ0FBQyxLQUFjLEVBQUUsU0FBaUI7UUFDbkQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FDcEIsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsTUFBTSxFQUNYLFNBQVMsRUFDVCxLQUFnQixDQUNqQixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7WUEvQ0YsU0FBUzs7O1lBVFUsVUFBVTtZQUdyQixnQkFBZ0I7Ozs2QkFhdEIsWUFBWSxTQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDLGNBQzVDLFlBQVksU0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUM7MkJBT3RDLFlBQVksU0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUMxQyxZQUFZLFNBQUMsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNT1ZFX0ZPQ1VTLCBUcmFwRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBUYWJGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4uL3RhYi90YWItZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRyYXBGb2N1c1NlcnZpY2UgfSBmcm9tICcuL3RyYXAtZm9jdXMuc2VydmljZSc7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRoYXQga2VlcHMgdGhlIGZvY3VzIGluc2lkZSB0aGUgZm9jdXNzYWJsZSBjaGlsZCBlbGVtZW50cyxcbiAqIGFsc28ga25vd24gYXMgYSBfZm9jdXMgdHJhcF8uXG4gKi9cbkBEaXJlY3RpdmUoKSAvLyBzZWxlY3RvcjogJ1tjeFRyYXBGb2N1c10nXG5leHBvcnQgY2xhc3MgVHJhcEZvY3VzRGlyZWN0aXZlIGV4dGVuZHMgVGFiRm9jdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogVHJhcEZvY3VzQ29uZmlnID0geyB0cmFwOiB0cnVlIH07XG5cbiAgLy8gQElucHV0KCdjeFRyYXBGb2N1cycpXG4gIHByb3RlY3RlZCBjb25maWc6IFRyYXBGb2N1c0NvbmZpZyA9IHt9O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3dkb3duJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi50YWInLCBbJyRldmVudCddKVxuICBoYW5kbGVUcmFwRG93biA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmICghIXRoaXMuY29uZmlnLnRyYXApIHtcbiAgICAgIHRoaXMubW92ZUZvY3VzKGV2ZW50LCBNT1ZFX0ZPQ1VTLk5FWFQpO1xuICAgIH1cbiAgfTtcblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmFycm93dXAnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnNoaWZ0LnRhYicsIFsnJGV2ZW50J10pXG4gIGhhbmRsZVRyYXBVcCA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmICghIXRoaXMuY29uZmlnLnRyYXApIHtcbiAgICAgIHRoaXMubW92ZUZvY3VzKGV2ZW50LCBNT1ZFX0ZPQ1VTLlBSRVYpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogVHJhcEZvY3VzU2VydmljZVxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBzZXJ2aWNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0aGUgZm9jdXMgb2YgdGhlIGVsZW1lbnQgcmVmZXJlbmNlIHVwIG9yIGRvd24sIGRlcGVuZGluZyBvbiB0aGUgaW5jcmVtZW50LlxuICAgKiBUaGUgZm9jdXMgb2YgdGhlIGVsZW1lbnQgaXMgdHJhcHBlZCB0byBhdm9pZCBpdCBmcm9tIGdvaW5nIG91dCBvZiB0aGUgZ3JvdXAuXG4gICAqXG4gICAqIEBwYXJhbSBldmVudCBVSUV2ZW50IHRoYXQgaXMgdXNlZCB0byBnZXQgdGhlIHRhcmdldCBlbGVtZW50LiBUaGUgZXZlbnQgaXMgYmxvY2tlZFxuICAgKiAgIGZyb20gc3RhbmRhcmQgZXhlY3V0aW9uIGFuZCBmdXJ0aGVyIGJ1YmJsaW5nLlxuICAgKiBAcGFyYW0gaW5jcmVtZW50IGluZGljYXRlcyB3aGV0aGVyIHRoZSBuZXh0IG9yIHByZXZpb3VzIGlzIGZvY3Vzc2VkLlxuICAgKi9cbiAgcHJvdGVjdGVkIG1vdmVGb2N1cyhldmVudDogVUlFdmVudCwgaW5jcmVtZW50OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5zZXJ2aWNlLmhhc0ZvY3VzYWJsZUNoaWxkcmVuKHRoaXMuaG9zdCkpIHtcbiAgICAgIHRoaXMuc2VydmljZS5tb3ZlRm9jdXMoXG4gICAgICAgIHRoaXMuaG9zdCxcbiAgICAgICAgdGhpcy5jb25maWcsXG4gICAgICAgIGluY3JlbWVudCxcbiAgICAgICAgZXZlbnQgYXMgVUlFdmVudFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==