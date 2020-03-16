import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { TabFocusService } from '../tab/tab-focus.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/select-focus.util";
var TrapFocusService = /** @class */ (function (_super) {
    __extends(TrapFocusService, _super);
    function TrapFocusService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Indicates whether any of the child elements of the host are focusable.
     *
     * @param host `HTMLElement` that is used to query the focusable elements.
     */
    TrapFocusService.prototype.hasFocusableChildren = function (host) {
        return this.findFocusable(host).length > 0;
    };
    /**
     * Focus the next or previous element of all available focusable elements.
     * The focus is _trapped_ in case there's no next or previous available element.
     * The focus will automatically move the start or end of the list.
     */
    TrapFocusService.prototype.moveFocus = function (host, config, increment, event) {
        var focusable = this.findFocusable(host);
        var index = focusable.findIndex(function (v) { return v === event.target; }) + increment;
        var shouldMoveFocus = (index >= 0 && index < focusable.length) ||
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
            var el = focusable[index];
            el.focus();
        }
    };
    TrapFocusService.prototype.getTrapStart = function (trap) {
        return trap === true || trap === 'start';
    };
    TrapFocusService.prototype.getTrapEnd = function (trap) {
        return trap === true || trap === 'end';
    };
    TrapFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TrapFocusService_Factory() { return new TrapFocusService(i0.ɵɵinject(i1.SelectFocusUtility)); }, token: TrapFocusService, providedIn: "root" });
    TrapFocusService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], TrapFocusService);
    return TrapFocusService;
}(TabFocusService));
export { TrapFocusService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhcC1mb2N1cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvdHJhcC90cmFwLWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFLM0Q7SUFBc0Msb0NBQWU7SUFBckQ7O0tBc0RDO0lBckRDOzs7O09BSUc7SUFDSCwrQ0FBb0IsR0FBcEIsVUFBcUIsSUFBaUI7UUFDcEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxvQ0FBUyxHQUFULFVBQ0UsSUFBaUIsRUFDakIsTUFBdUIsRUFDdkIsU0FBcUIsRUFDckIsS0FBYztRQUVkLElBQU0sU0FBUyxHQUFrQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFELElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssS0FBSyxDQUFDLE1BQU0sRUFBbEIsQ0FBa0IsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUVyRSxJQUFNLGVBQWUsR0FDbkIsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBQ3hDLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QyxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFOUQsSUFBSSxlQUFlLEVBQUU7WUFDbkIsSUFBSSxLQUFLLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDN0IsS0FBSyxHQUFHLENBQUMsQ0FBQzthQUNYO1lBQ0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dCQUNiLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUM5QjtZQUVELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFFeEIsSUFBTSxFQUFFLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTVCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNaO0lBQ0gsQ0FBQztJQUVTLHVDQUFZLEdBQXRCLFVBQXVCLElBQStCO1FBQ3BELE9BQU8sSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssT0FBTyxDQUFDO0lBQzNDLENBQUM7SUFFUyxxQ0FBVSxHQUFwQixVQUFxQixJQUErQjtRQUNsRCxPQUFPLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssQ0FBQztJQUN6QyxDQUFDOztJQXJEVSxnQkFBZ0I7UUFINUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGdCQUFnQixDQXNENUI7MkJBN0REO0NBNkRDLEFBdERELENBQXNDLGVBQWUsR0FzRHBEO1NBdERZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1PVkVfRk9DVVMsIFRyYXBGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IFRhYkZvY3VzU2VydmljZSB9IGZyb20gJy4uL3RhYi90YWItZm9jdXMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUcmFwRm9jdXNTZXJ2aWNlIGV4dGVuZHMgVGFiRm9jdXNTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIGFueSBvZiB0aGUgY2hpbGQgZWxlbWVudHMgb2YgdGhlIGhvc3QgYXJlIGZvY3VzYWJsZS5cbiAgICpcbiAgICogQHBhcmFtIGhvc3QgYEhUTUxFbGVtZW50YCB0aGF0IGlzIHVzZWQgdG8gcXVlcnkgdGhlIGZvY3VzYWJsZSBlbGVtZW50cy5cbiAgICovXG4gIGhhc0ZvY3VzYWJsZUNoaWxkcmVuKGhvc3Q6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZmluZEZvY3VzYWJsZShob3N0KS5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzIHRoZSBuZXh0IG9yIHByZXZpb3VzIGVsZW1lbnQgb2YgYWxsIGF2YWlsYWJsZSBmb2N1c2FibGUgZWxlbWVudHMuXG4gICAqIFRoZSBmb2N1cyBpcyBfdHJhcHBlZF8gaW4gY2FzZSB0aGVyZSdzIG5vIG5leHQgb3IgcHJldmlvdXMgYXZhaWxhYmxlIGVsZW1lbnQuXG4gICAqIFRoZSBmb2N1cyB3aWxsIGF1dG9tYXRpY2FsbHkgbW92ZSB0aGUgc3RhcnQgb3IgZW5kIG9mIHRoZSBsaXN0LlxuICAgKi9cbiAgbW92ZUZvY3VzKFxuICAgIGhvc3Q6IEhUTUxFbGVtZW50LFxuICAgIGNvbmZpZzogVHJhcEZvY3VzQ29uZmlnLFxuICAgIGluY3JlbWVudDogTU9WRV9GT0NVUyxcbiAgICBldmVudDogVUlFdmVudFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBmb2N1c2FibGU6IEhUTUxFbGVtZW50W10gPSB0aGlzLmZpbmRGb2N1c2FibGUoaG9zdCk7XG5cbiAgICBsZXQgaW5kZXggPSBmb2N1c2FibGUuZmluZEluZGV4KHYgPT4gdiA9PT0gZXZlbnQudGFyZ2V0KSArIGluY3JlbWVudDtcblxuICAgIGNvbnN0IHNob3VsZE1vdmVGb2N1cyA9XG4gICAgICAoaW5kZXggPj0gMCAmJiBpbmRleCA8IGZvY3VzYWJsZS5sZW5ndGgpIHx8XG4gICAgICAoaW5kZXggPCAwICYmIHRoaXMuZ2V0VHJhcFN0YXJ0KGNvbmZpZy50cmFwKSkgfHxcbiAgICAgIChpbmRleCA+PSBmb2N1c2FibGUubGVuZ3RoICYmIHRoaXMuZ2V0VHJhcEVuZChjb25maWcudHJhcCkpO1xuXG4gICAgaWYgKHNob3VsZE1vdmVGb2N1cykge1xuICAgICAgaWYgKGluZGV4ID49IGZvY3VzYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgaW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICBpbmRleCA9IGZvY3VzYWJsZS5sZW5ndGggLSAxO1xuICAgICAgfVxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIGNvbnN0IGVsID0gZm9jdXNhYmxlW2luZGV4XTtcblxuICAgICAgZWwuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0VHJhcFN0YXJ0KHRyYXA6IGJvb2xlYW4gfCAnc3RhcnQnIHwgJ2VuZCcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJhcCA9PT0gdHJ1ZSB8fCB0cmFwID09PSAnc3RhcnQnO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFRyYXBFbmQodHJhcDogYm9vbGVhbiB8ICdzdGFydCcgfCAnZW5kJyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cmFwID09PSB0cnVlIHx8IHRyYXAgPT09ICdlbmQnO1xuICB9XG59XG4iXX0=