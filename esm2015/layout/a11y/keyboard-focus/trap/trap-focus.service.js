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
};
TrapFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TrapFocusService_Factory() { return new TrapFocusService(i0.ɵɵinject(i1.SelectFocusUtility)); }, token: TrapFocusService, providedIn: "root" });
TrapFocusService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], TrapFocusService);
export { TrapFocusService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhcC1mb2N1cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvdHJhcC90cmFwLWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFLM0QsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBaUIsU0FBUSxlQUFlO0lBQ25EOzs7O09BSUc7SUFDSCxvQkFBb0IsQ0FBQyxJQUFpQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFNBQVMsQ0FDUCxJQUFpQixFQUNqQixNQUF1QixFQUN2QixTQUFxQixFQUNyQixLQUFjO1FBRWQsTUFBTSxTQUFTLEdBQWtCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUQsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7UUFFdkUsTUFBTSxlQUFlLEdBQ25CLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUN4QyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0MsQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTlELElBQUksZUFBZSxFQUFFO1lBQ25CLElBQUksS0FBSyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQzdCLEtBQUssR0FBRyxDQUFDLENBQUM7YUFDWDtZQUNELElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtnQkFDYixLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDOUI7WUFFRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRXhCLE1BQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUU1QixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDWjtJQUNILENBQUM7SUFFUyxZQUFZLENBQUMsSUFBK0I7UUFDcEQsT0FBTyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxPQUFPLENBQUM7SUFDM0MsQ0FBQztJQUVTLFVBQVUsQ0FBQyxJQUErQjtRQUNsRCxPQUFPLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssQ0FBQztJQUN6QyxDQUFDO0NBQ0YsQ0FBQTs7QUF0RFksZ0JBQWdCO0lBSDVCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxnQkFBZ0IsQ0FzRDVCO1NBdERZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1PVkVfRk9DVVMsIFRyYXBGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IFRhYkZvY3VzU2VydmljZSB9IGZyb20gJy4uL3RhYi90YWItZm9jdXMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUcmFwRm9jdXNTZXJ2aWNlIGV4dGVuZHMgVGFiRm9jdXNTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIGFueSBvZiB0aGUgY2hpbGQgZWxlbWVudHMgb2YgdGhlIGhvc3QgYXJlIGZvY3VzYWJsZS5cbiAgICpcbiAgICogQHBhcmFtIGhvc3QgYEhUTUxFbGVtZW50YCB0aGF0IGlzIHVzZWQgdG8gcXVlcnkgdGhlIGZvY3VzYWJsZSBlbGVtZW50cy5cbiAgICovXG4gIGhhc0ZvY3VzYWJsZUNoaWxkcmVuKGhvc3Q6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZmluZEZvY3VzYWJsZShob3N0KS5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzIHRoZSBuZXh0IG9yIHByZXZpb3VzIGVsZW1lbnQgb2YgYWxsIGF2YWlsYWJsZSBmb2N1c2FibGUgZWxlbWVudHMuXG4gICAqIFRoZSBmb2N1cyBpcyBfdHJhcHBlZF8gaW4gY2FzZSB0aGVyZSdzIG5vIG5leHQgb3IgcHJldmlvdXMgYXZhaWxhYmxlIGVsZW1lbnQuXG4gICAqIFRoZSBmb2N1cyB3aWxsIGF1dG9tYXRpY2FsbHkgbW92ZSB0aGUgc3RhcnQgb3IgZW5kIG9mIHRoZSBsaXN0LlxuICAgKi9cbiAgbW92ZUZvY3VzKFxuICAgIGhvc3Q6IEhUTUxFbGVtZW50LFxuICAgIGNvbmZpZzogVHJhcEZvY3VzQ29uZmlnLFxuICAgIGluY3JlbWVudDogTU9WRV9GT0NVUyxcbiAgICBldmVudDogVUlFdmVudFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBmb2N1c2FibGU6IEhUTUxFbGVtZW50W10gPSB0aGlzLmZpbmRGb2N1c2FibGUoaG9zdCk7XG5cbiAgICBsZXQgaW5kZXggPSBmb2N1c2FibGUuZmluZEluZGV4KCh2KSA9PiB2ID09PSBldmVudC50YXJnZXQpICsgaW5jcmVtZW50O1xuXG4gICAgY29uc3Qgc2hvdWxkTW92ZUZvY3VzID1cbiAgICAgIChpbmRleCA+PSAwICYmIGluZGV4IDwgZm9jdXNhYmxlLmxlbmd0aCkgfHxcbiAgICAgIChpbmRleCA8IDAgJiYgdGhpcy5nZXRUcmFwU3RhcnQoY29uZmlnLnRyYXApKSB8fFxuICAgICAgKGluZGV4ID49IGZvY3VzYWJsZS5sZW5ndGggJiYgdGhpcy5nZXRUcmFwRW5kKGNvbmZpZy50cmFwKSk7XG5cbiAgICBpZiAoc2hvdWxkTW92ZUZvY3VzKSB7XG4gICAgICBpZiAoaW5kZXggPj0gZm9jdXNhYmxlLmxlbmd0aCkge1xuICAgICAgICBpbmRleCA9IDA7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgIGluZGV4ID0gZm9jdXNhYmxlLmxlbmd0aCAtIDE7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgY29uc3QgZWwgPSBmb2N1c2FibGVbaW5kZXhdO1xuXG4gICAgICBlbC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRUcmFwU3RhcnQodHJhcDogYm9vbGVhbiB8ICdzdGFydCcgfCAnZW5kJyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cmFwID09PSB0cnVlIHx8IHRyYXAgPT09ICdzdGFydCc7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0VHJhcEVuZCh0cmFwOiBib29sZWFuIHwgJ3N0YXJ0JyB8ICdlbmQnKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRyYXAgPT09IHRydWUgfHwgdHJhcCA9PT0gJ2VuZCc7XG4gIH1cbn1cbiJdfQ==