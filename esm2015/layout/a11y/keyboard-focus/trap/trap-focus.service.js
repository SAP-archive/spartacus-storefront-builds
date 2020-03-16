import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { TabFocusService } from '../tab/tab-focus.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/select-focus.util";
let TrapFocusService = class TrapFocusService extends TabFocusService {
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
        let index = focusable.findIndex(v => v === event.target) + increment;
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
};
TrapFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TrapFocusService_Factory() { return new TrapFocusService(i0.ɵɵinject(i1.SelectFocusUtility)); }, token: TrapFocusService, providedIn: "root" });
TrapFocusService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], TrapFocusService);
export { TrapFocusService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhcC1mb2N1cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvdHJhcC90cmFwLWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFLM0QsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBaUIsU0FBUSxlQUFlO0lBQ25EOzs7O09BSUc7SUFDSCxvQkFBb0IsQ0FBQyxJQUFpQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFNBQVMsQ0FDUCxJQUFpQixFQUNqQixNQUF1QixFQUN2QixTQUFxQixFQUNyQixLQUFjO1FBRWQsTUFBTSxTQUFTLEdBQWtCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUQsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBRXJFLE1BQU0sZUFBZSxHQUNuQixDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDeEMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUU5RCxJQUFJLGVBQWUsRUFBRTtZQUNuQixJQUFJLEtBQUssSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUM3QixLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQ1g7WUFDRCxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ2IsS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQzlCO1lBRUQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUV4QixNQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFNUIsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ1o7SUFDSCxDQUFDO0lBRVMsWUFBWSxDQUFDLElBQStCO1FBQ3BELE9BQU8sSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssT0FBTyxDQUFDO0lBQzNDLENBQUM7SUFFUyxVQUFVLENBQUMsSUFBK0I7UUFDbEQsT0FBTyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLENBQUM7SUFDekMsQ0FBQztDQUNGLENBQUE7O0FBdERZLGdCQUFnQjtJQUg1QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csZ0JBQWdCLENBc0Q1QjtTQXREWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNT1ZFX0ZPQ1VTLCBUcmFwRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBUYWJGb2N1c1NlcnZpY2UgfSBmcm9tICcuLi90YWIvdGFiLWZvY3VzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVHJhcEZvY3VzU2VydmljZSBleHRlbmRzIFRhYkZvY3VzU2VydmljZSB7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBhbnkgb2YgdGhlIGNoaWxkIGVsZW1lbnRzIG9mIHRoZSBob3N0IGFyZSBmb2N1c2FibGUuXG4gICAqXG4gICAqIEBwYXJhbSBob3N0IGBIVE1MRWxlbWVudGAgdGhhdCBpcyB1c2VkIHRvIHF1ZXJ5IHRoZSBmb2N1c2FibGUgZWxlbWVudHMuXG4gICAqL1xuICBoYXNGb2N1c2FibGVDaGlsZHJlbihob3N0OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZpbmRGb2N1c2FibGUoaG9zdCkubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1cyB0aGUgbmV4dCBvciBwcmV2aW91cyBlbGVtZW50IG9mIGFsbCBhdmFpbGFibGUgZm9jdXNhYmxlIGVsZW1lbnRzLlxuICAgKiBUaGUgZm9jdXMgaXMgX3RyYXBwZWRfIGluIGNhc2UgdGhlcmUncyBubyBuZXh0IG9yIHByZXZpb3VzIGF2YWlsYWJsZSBlbGVtZW50LlxuICAgKiBUaGUgZm9jdXMgd2lsbCBhdXRvbWF0aWNhbGx5IG1vdmUgdGhlIHN0YXJ0IG9yIGVuZCBvZiB0aGUgbGlzdC5cbiAgICovXG4gIG1vdmVGb2N1cyhcbiAgICBob3N0OiBIVE1MRWxlbWVudCxcbiAgICBjb25maWc6IFRyYXBGb2N1c0NvbmZpZyxcbiAgICBpbmNyZW1lbnQ6IE1PVkVfRk9DVVMsXG4gICAgZXZlbnQ6IFVJRXZlbnRcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgZm9jdXNhYmxlOiBIVE1MRWxlbWVudFtdID0gdGhpcy5maW5kRm9jdXNhYmxlKGhvc3QpO1xuXG4gICAgbGV0IGluZGV4ID0gZm9jdXNhYmxlLmZpbmRJbmRleCh2ID0+IHYgPT09IGV2ZW50LnRhcmdldCkgKyBpbmNyZW1lbnQ7XG5cbiAgICBjb25zdCBzaG91bGRNb3ZlRm9jdXMgPVxuICAgICAgKGluZGV4ID49IDAgJiYgaW5kZXggPCBmb2N1c2FibGUubGVuZ3RoKSB8fFxuICAgICAgKGluZGV4IDwgMCAmJiB0aGlzLmdldFRyYXBTdGFydChjb25maWcudHJhcCkpIHx8XG4gICAgICAoaW5kZXggPj0gZm9jdXNhYmxlLmxlbmd0aCAmJiB0aGlzLmdldFRyYXBFbmQoY29uZmlnLnRyYXApKTtcblxuICAgIGlmIChzaG91bGRNb3ZlRm9jdXMpIHtcbiAgICAgIGlmIChpbmRleCA+PSBmb2N1c2FibGUubGVuZ3RoKSB7XG4gICAgICAgIGluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgaW5kZXggPSBmb2N1c2FibGUubGVuZ3RoIC0gMTtcbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBjb25zdCBlbCA9IGZvY3VzYWJsZVtpbmRleF07XG5cbiAgICAgIGVsLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldFRyYXBTdGFydCh0cmFwOiBib29sZWFuIHwgJ3N0YXJ0JyB8ICdlbmQnKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRyYXAgPT09IHRydWUgfHwgdHJhcCA9PT0gJ3N0YXJ0JztcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRUcmFwRW5kKHRyYXA6IGJvb2xlYW4gfCAnc3RhcnQnIHwgJ2VuZCcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJhcCA9PT0gdHJ1ZSB8fCB0cmFwID09PSAnZW5kJztcbiAgfVxufVxuIl19