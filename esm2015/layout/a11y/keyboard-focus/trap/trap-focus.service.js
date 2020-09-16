import { Injectable } from '@angular/core';
import { TabFocusService } from '../tab/tab-focus.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/select-focus.util";
export class TrapFocusService extends TabFocusService {
    /**
     * Indicates whether any of the child elements of the host are focusable.
     *
     * @param host `HTMLElement` that is used to query the focusable elements.
     */
    hasFocusableChildren(host) {
        return this.findFocusable(host).length > 0;
    }
    /**
     * Focus the next or previous element of all available focusable elements.
     * The focus is _trapped_ in case there's no next or previous available element.
     * The focus will automatically move the start or end of the list.
     */
    moveFocus(host, config, increment, event) {
        const focusable = this.findFocusable(host);
        let index = focusable.findIndex((v) => v === event.target) + increment;
        const shouldMoveFocus = (index >= 0 && index < focusable.length) ||
            (index < 0 && this.getTrapStart(config.trap)) ||
            (index >= focusable.length && this.getTrapEnd(config.trap));
        if (shouldMoveFocus) {
            if (index >= focusable.length) {
                index = 0;
            }
            if (index < 0) {
                index = focusable.length - 1;
            }
            event.preventDefault();
            event.stopPropagation();
            const el = focusable[index];
            el.focus();
        }
    }
    getTrapStart(trap) {
        return trap === true || trap === 'start';
    }
    getTrapEnd(trap) {
        return trap === true || trap === 'end';
    }
}
TrapFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TrapFocusService_Factory() { return new TrapFocusService(i0.ɵɵinject(i1.SelectFocusUtility)); }, token: TrapFocusService, providedIn: "root" });
TrapFocusService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhcC1mb2N1cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvbGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvdHJhcC90cmFwLWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUszRCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsZUFBZTtJQUNuRDs7OztPQUlHO0lBQ0gsb0JBQW9CLENBQUMsSUFBaUI7UUFDcEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxTQUFTLENBQ1AsSUFBaUIsRUFDakIsTUFBdUIsRUFDdkIsU0FBcUIsRUFDckIsS0FBYztRQUVkLE1BQU0sU0FBUyxHQUFrQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFELElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBRXZFLE1BQU0sZUFBZSxHQUNuQixDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDeEMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUU5RCxJQUFJLGVBQWUsRUFBRTtZQUNuQixJQUFJLEtBQUssSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUM3QixLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQ1g7WUFDRCxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ2IsS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQzlCO1lBRUQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUV4QixNQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFNUIsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ1o7SUFDSCxDQUFDO0lBRVMsWUFBWSxDQUFDLElBQStCO1FBQ3BELE9BQU8sSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssT0FBTyxDQUFDO0lBQzNDLENBQUM7SUFFUyxVQUFVLENBQUMsSUFBK0I7UUFDbEQsT0FBTyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLENBQUM7SUFDekMsQ0FBQzs7OztZQXhERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNT1ZFX0ZPQ1VTLCBUcmFwRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBUYWJGb2N1c1NlcnZpY2UgfSBmcm9tICcuLi90YWIvdGFiLWZvY3VzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVHJhcEZvY3VzU2VydmljZSBleHRlbmRzIFRhYkZvY3VzU2VydmljZSB7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBhbnkgb2YgdGhlIGNoaWxkIGVsZW1lbnRzIG9mIHRoZSBob3N0IGFyZSBmb2N1c2FibGUuXG4gICAqXG4gICAqIEBwYXJhbSBob3N0IGBIVE1MRWxlbWVudGAgdGhhdCBpcyB1c2VkIHRvIHF1ZXJ5IHRoZSBmb2N1c2FibGUgZWxlbWVudHMuXG4gICAqL1xuICBoYXNGb2N1c2FibGVDaGlsZHJlbihob3N0OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZpbmRGb2N1c2FibGUoaG9zdCkubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1cyB0aGUgbmV4dCBvciBwcmV2aW91cyBlbGVtZW50IG9mIGFsbCBhdmFpbGFibGUgZm9jdXNhYmxlIGVsZW1lbnRzLlxuICAgKiBUaGUgZm9jdXMgaXMgX3RyYXBwZWRfIGluIGNhc2UgdGhlcmUncyBubyBuZXh0IG9yIHByZXZpb3VzIGF2YWlsYWJsZSBlbGVtZW50LlxuICAgKiBUaGUgZm9jdXMgd2lsbCBhdXRvbWF0aWNhbGx5IG1vdmUgdGhlIHN0YXJ0IG9yIGVuZCBvZiB0aGUgbGlzdC5cbiAgICovXG4gIG1vdmVGb2N1cyhcbiAgICBob3N0OiBIVE1MRWxlbWVudCxcbiAgICBjb25maWc6IFRyYXBGb2N1c0NvbmZpZyxcbiAgICBpbmNyZW1lbnQ6IE1PVkVfRk9DVVMsXG4gICAgZXZlbnQ6IFVJRXZlbnRcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgZm9jdXNhYmxlOiBIVE1MRWxlbWVudFtdID0gdGhpcy5maW5kRm9jdXNhYmxlKGhvc3QpO1xuXG4gICAgbGV0IGluZGV4ID0gZm9jdXNhYmxlLmZpbmRJbmRleCgodikgPT4gdiA9PT0gZXZlbnQudGFyZ2V0KSArIGluY3JlbWVudDtcblxuICAgIGNvbnN0IHNob3VsZE1vdmVGb2N1cyA9XG4gICAgICAoaW5kZXggPj0gMCAmJiBpbmRleCA8IGZvY3VzYWJsZS5sZW5ndGgpIHx8XG4gICAgICAoaW5kZXggPCAwICYmIHRoaXMuZ2V0VHJhcFN0YXJ0KGNvbmZpZy50cmFwKSkgfHxcbiAgICAgIChpbmRleCA+PSBmb2N1c2FibGUubGVuZ3RoICYmIHRoaXMuZ2V0VHJhcEVuZChjb25maWcudHJhcCkpO1xuXG4gICAgaWYgKHNob3VsZE1vdmVGb2N1cykge1xuICAgICAgaWYgKGluZGV4ID49IGZvY3VzYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgaW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICBpbmRleCA9IGZvY3VzYWJsZS5sZW5ndGggLSAxO1xuICAgICAgfVxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIGNvbnN0IGVsID0gZm9jdXNhYmxlW2luZGV4XTtcblxuICAgICAgZWwuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0VHJhcFN0YXJ0KHRyYXA6IGJvb2xlYW4gfCAnc3RhcnQnIHwgJ2VuZCcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJhcCA9PT0gdHJ1ZSB8fCB0cmFwID09PSAnc3RhcnQnO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFRyYXBFbmQodHJhcDogYm9vbGVhbiB8ICdzdGFydCcgfCAnZW5kJyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cmFwID09PSB0cnVlIHx8IHRyYXAgPT09ICdlbmQnO1xuICB9XG59XG4iXX0=