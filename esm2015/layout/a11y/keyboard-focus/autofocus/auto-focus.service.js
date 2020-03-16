import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { EscapeFocusService } from '../escape/escape-focus.service';
import { FOCUS_ATTR, } from '../keyboard-focus.model';
import * as i0 from "@angular/core";
import * as i1 from "../services/select-focus.util";
let AutoFocusService = class AutoFocusService extends EscapeFocusService {
    /**
     * Returns the first focusable child element of the host element.
     */
    findFirstFocusable(host, config = { autofocus: true }) {
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
    }
    /**
     * Indicates whether any of the focusabe child elements is focused.
     */
    hasPersistedFocus(host, config) {
        return !!this.getPersisted(host, this.getPersistenceGroup(host, config));
    }
    /**
     * Returns the element that has a persisted focus state.
     *
     * @param host the `HTMLElement` used to query for focusable children
     * @param group the optional group for the persistent state, to separate different focus
     *   groups and remain the persistance
     */
    getPersisted(host, group) {
        if (!this.get(group)) {
            return;
        }
        const focussed = Array.from(host.querySelectorAll(`[${FOCUS_ATTR}='${this.get(group)}']`));
        return focussed.length > 0 ? focussed[0] : null;
    }
};
AutoFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AutoFocusService_Factory() { return new AutoFocusService(i0.ɵɵinject(i1.SelectFocusUtility)); }, token: AutoFocusService, providedIn: "root" });
AutoFocusService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AutoFocusService);
export { AutoFocusService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvYXV0b2ZvY3VzL2F1dG8tZm9jdXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBRUwsVUFBVSxHQUVYLE1BQU0seUJBQXlCLENBQUM7OztBQUtqQyxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFpQixTQUFRLGtCQUFrQjtJQUN0RDs7T0FFRztJQUNILGtCQUFrQixDQUNoQixJQUFpQixFQUNqQixTQUEwQixFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUU7O1FBRTdDLElBQUksT0FBQSxNQUFNLDBDQUFFLFNBQVMsTUFBSyxPQUFPLEVBQUU7WUFDakMsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsRUFBRTtZQUMvQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN4RTthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM5RDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILGlCQUFpQixDQUFDLElBQWlCLEVBQUUsTUFBMEI7UUFDN0QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDTyxZQUFZLENBQUMsSUFBaUIsRUFBRSxLQUFjO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE9BQU87U0FDUjtRQUNELE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FDbkIsSUFBSSxVQUFVLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNaLENBQzdCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNsRCxDQUFDO0NBQ0YsQ0FBQTs7QUExQ1ksZ0JBQWdCO0lBSDVCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxnQkFBZ0IsQ0EwQzVCO1NBMUNZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVzY2FwZUZvY3VzU2VydmljZSB9IGZyb20gJy4uL2VzY2FwZS9lc2NhcGUtZm9jdXMuc2VydmljZSc7XG5pbXBvcnQge1xuICBBdXRvRm9jdXNDb25maWcsXG4gIEZPQ1VTX0FUVFIsXG4gIFBlcnNpc3RGb2N1c0NvbmZpZyxcbn0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b0ZvY3VzU2VydmljZSBleHRlbmRzIEVzY2FwZUZvY3VzU2VydmljZSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBmb2N1c2FibGUgY2hpbGQgZWxlbWVudCBvZiB0aGUgaG9zdCBlbGVtZW50LlxuICAgKi9cbiAgZmluZEZpcnN0Rm9jdXNhYmxlKFxuICAgIGhvc3Q6IEhUTUxFbGVtZW50LFxuICAgIGNvbmZpZzogQXV0b0ZvY3VzQ29uZmlnID0geyBhdXRvZm9jdXM6IHRydWUgfVxuICApOiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKGNvbmZpZz8uYXV0b2ZvY3VzID09PSAnOmhvc3QnKSB7XG4gICAgICByZXR1cm4gaG9zdDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGFzUGVyc2lzdGVkRm9jdXMoaG9zdCwgY29uZmlnKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UGVyc2lzdGVkKGhvc3QsIHRoaXMuZ2V0UGVyc2lzdGVuY2VHcm91cChob3N0LCBjb25maWcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0Rm9jdXNVdGlsLmZpbmRGaXJzdEZvY3VzYWJsZShob3N0LCBjb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBhbnkgb2YgdGhlIGZvY3VzYWJlIGNoaWxkIGVsZW1lbnRzIGlzIGZvY3VzZWQuXG4gICAqL1xuICBoYXNQZXJzaXN0ZWRGb2N1cyhob3N0OiBIVE1MRWxlbWVudCwgY29uZmlnOiBQZXJzaXN0Rm9jdXNDb25maWcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmdldFBlcnNpc3RlZChob3N0LCB0aGlzLmdldFBlcnNpc3RlbmNlR3JvdXAoaG9zdCwgY29uZmlnKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZWxlbWVudCB0aGF0IGhhcyBhIHBlcnNpc3RlZCBmb2N1cyBzdGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIGhvc3QgdGhlIGBIVE1MRWxlbWVudGAgdXNlZCB0byBxdWVyeSBmb3IgZm9jdXNhYmxlIGNoaWxkcmVuXG4gICAqIEBwYXJhbSBncm91cCB0aGUgb3B0aW9uYWwgZ3JvdXAgZm9yIHRoZSBwZXJzaXN0ZW50IHN0YXRlLCB0byBzZXBhcmF0ZSBkaWZmZXJlbnQgZm9jdXNcbiAgICogICBncm91cHMgYW5kIHJlbWFpbiB0aGUgcGVyc2lzdGFuY2VcbiAgICovXG4gIHByb3RlY3RlZCBnZXRQZXJzaXN0ZWQoaG9zdDogSFRNTEVsZW1lbnQsIGdyb3VwPzogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIGlmICghdGhpcy5nZXQoZ3JvdXApKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZvY3Vzc2VkID0gQXJyYXkuZnJvbShcbiAgICAgIGhvc3QucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgYFske0ZPQ1VTX0FUVFJ9PScke3RoaXMuZ2V0KGdyb3VwKX0nXWBcbiAgICAgICkgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD5cbiAgICApO1xuICAgIHJldHVybiBmb2N1c3NlZC5sZW5ndGggPiAwID8gZm9jdXNzZWRbMF0gOiBudWxsO1xuICB9XG59XG4iXX0=