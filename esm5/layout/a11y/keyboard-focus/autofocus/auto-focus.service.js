import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { EscapeFocusService } from '../escape/escape-focus.service';
import { FOCUS_ATTR, } from '../keyboard-focus.model';
import * as i0 from "@angular/core";
import * as i1 from "../services/select-focus.util";
var AutoFocusService = /** @class */ (function (_super) {
    __extends(AutoFocusService, _super);
    function AutoFocusService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns the first focusable child element of the host element.
     */
    AutoFocusService.prototype.findFirstFocusable = function (host, config) {
        if (config === void 0) { config = { autofocus: true }; }
        var _a;
        if (((_a = config) === null || _a === void 0 ? void 0 : _a.autofocus) === ':host') {
            return host;
        }
        else if (this.hasPersistedFocus(host, config)) {
            return this.getPersisted(host, this.getPersistenceGroup(host, config));
        }
        else {
            return this.selectFocusUtil.findFirstFocusable(host, config);
        }
    };
    /**
     * Indicates whether any of the focusabe child elements is focused.
     */
    AutoFocusService.prototype.hasPersistedFocus = function (host, config) {
        return !!this.getPersisted(host, this.getPersistenceGroup(host, config));
    };
    /**
     * Returns the element that has a persisted focus state.
     *
     * @param host the `HTMLElement` used to query for focusable children
     * @param group the optional group for the persistent state, to separate different focus
     *   groups and remain the persistance
     */
    AutoFocusService.prototype.getPersisted = function (host, group) {
        if (!this.get(group)) {
            return;
        }
        var focussed = Array.from(host.querySelectorAll("[" + FOCUS_ATTR + "='" + this.get(group) + "']"));
        return focussed.length > 0 ? focussed[0] : null;
    };
    AutoFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AutoFocusService_Factory() { return new AutoFocusService(i0.ɵɵinject(i1.SelectFocusUtility)); }, token: AutoFocusService, providedIn: "root" });
    AutoFocusService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], AutoFocusService);
    return AutoFocusService;
}(EscapeFocusService));
export { AutoFocusService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvYXV0b2ZvY3VzL2F1dG8tZm9jdXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBRUwsVUFBVSxHQUVYLE1BQU0seUJBQXlCLENBQUM7OztBQUtqQztJQUFzQyxvQ0FBa0I7SUFBeEQ7O0tBMENDO0lBekNDOztPQUVHO0lBQ0gsNkNBQWtCLEdBQWxCLFVBQ0UsSUFBaUIsRUFDakIsTUFBNkM7UUFBN0MsdUJBQUEsRUFBQSxXQUE0QixTQUFTLEVBQUUsSUFBSSxFQUFFOztRQUU3QyxJQUFJLE9BQUEsTUFBTSwwQ0FBRSxTQUFTLE1BQUssT0FBTyxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDL0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDeEU7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCw0Q0FBaUIsR0FBakIsVUFBa0IsSUFBaUIsRUFBRSxNQUEwQjtRQUM3RCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNPLHVDQUFZLEdBQXRCLFVBQXVCLElBQWlCLEVBQUUsS0FBYztRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQixPQUFPO1NBQ1I7UUFDRCxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQ25CLE1BQUksVUFBVSxVQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQUksQ0FDWixDQUM3QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEQsQ0FBQzs7SUF6Q1UsZ0JBQWdCO1FBSDVCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxnQkFBZ0IsQ0EwQzVCOzJCQXJERDtDQXFEQyxBQTFDRCxDQUFzQyxrQkFBa0IsR0EwQ3ZEO1NBMUNZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVzY2FwZUZvY3VzU2VydmljZSB9IGZyb20gJy4uL2VzY2FwZS9lc2NhcGUtZm9jdXMuc2VydmljZSc7XG5pbXBvcnQge1xuICBBdXRvRm9jdXNDb25maWcsXG4gIEZPQ1VTX0FUVFIsXG4gIFBlcnNpc3RGb2N1c0NvbmZpZyxcbn0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b0ZvY3VzU2VydmljZSBleHRlbmRzIEVzY2FwZUZvY3VzU2VydmljZSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBmb2N1c2FibGUgY2hpbGQgZWxlbWVudCBvZiB0aGUgaG9zdCBlbGVtZW50LlxuICAgKi9cbiAgZmluZEZpcnN0Rm9jdXNhYmxlKFxuICAgIGhvc3Q6IEhUTUxFbGVtZW50LFxuICAgIGNvbmZpZzogQXV0b0ZvY3VzQ29uZmlnID0geyBhdXRvZm9jdXM6IHRydWUgfVxuICApOiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKGNvbmZpZz8uYXV0b2ZvY3VzID09PSAnOmhvc3QnKSB7XG4gICAgICByZXR1cm4gaG9zdDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGFzUGVyc2lzdGVkRm9jdXMoaG9zdCwgY29uZmlnKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UGVyc2lzdGVkKGhvc3QsIHRoaXMuZ2V0UGVyc2lzdGVuY2VHcm91cChob3N0LCBjb25maWcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0Rm9jdXNVdGlsLmZpbmRGaXJzdEZvY3VzYWJsZShob3N0LCBjb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBhbnkgb2YgdGhlIGZvY3VzYWJlIGNoaWxkIGVsZW1lbnRzIGlzIGZvY3VzZWQuXG4gICAqL1xuICBoYXNQZXJzaXN0ZWRGb2N1cyhob3N0OiBIVE1MRWxlbWVudCwgY29uZmlnOiBQZXJzaXN0Rm9jdXNDb25maWcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmdldFBlcnNpc3RlZChob3N0LCB0aGlzLmdldFBlcnNpc3RlbmNlR3JvdXAoaG9zdCwgY29uZmlnKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZWxlbWVudCB0aGF0IGhhcyBhIHBlcnNpc3RlZCBmb2N1cyBzdGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIGhvc3QgdGhlIGBIVE1MRWxlbWVudGAgdXNlZCB0byBxdWVyeSBmb3IgZm9jdXNhYmxlIGNoaWxkcmVuXG4gICAqIEBwYXJhbSBncm91cCB0aGUgb3B0aW9uYWwgZ3JvdXAgZm9yIHRoZSBwZXJzaXN0ZW50IHN0YXRlLCB0byBzZXBhcmF0ZSBkaWZmZXJlbnQgZm9jdXNcbiAgICogICBncm91cHMgYW5kIHJlbWFpbiB0aGUgcGVyc2lzdGFuY2VcbiAgICovXG4gIHByb3RlY3RlZCBnZXRQZXJzaXN0ZWQoaG9zdDogSFRNTEVsZW1lbnQsIGdyb3VwPzogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIGlmICghdGhpcy5nZXQoZ3JvdXApKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZvY3Vzc2VkID0gQXJyYXkuZnJvbShcbiAgICAgIGhvc3QucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgYFske0ZPQ1VTX0FUVFJ9PScke3RoaXMuZ2V0KGdyb3VwKX0nXWBcbiAgICAgICkgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD5cbiAgICApO1xuICAgIHJldHVybiBmb2N1c3NlZC5sZW5ndGggPiAwID8gZm9jdXNzZWRbMF0gOiBudWxsO1xuICB9XG59XG4iXX0=