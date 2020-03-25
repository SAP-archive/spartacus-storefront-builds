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
            return this.selectFocusUtil.findFirstFocusable(host, config) || host;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvYXV0b2ZvY3VzL2F1dG8tZm9jdXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBRUwsVUFBVSxHQUVYLE1BQU0seUJBQXlCLENBQUM7OztBQUtqQyxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFpQixTQUFRLGtCQUFrQjtJQUN0RDs7T0FFRztJQUNILGtCQUFrQixDQUNoQixJQUFpQixFQUNqQixTQUEwQixFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUU7O1FBRTdDLElBQUksT0FBQSxNQUFNLDBDQUFFLFNBQVMsTUFBSyxPQUFPLEVBQUU7WUFDakMsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsRUFBRTtZQUMvQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN4RTthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUM7U0FDdEU7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQkFBaUIsQ0FBQyxJQUFpQixFQUFFLE1BQTBCO1FBQzdELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ08sWUFBWSxDQUFDLElBQWlCLEVBQUUsS0FBYztRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQixPQUFPO1NBQ1I7UUFDRCxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQ25CLElBQUksVUFBVSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDWixDQUM3QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEQsQ0FBQztDQUNGLENBQUE7O0FBMUNZLGdCQUFnQjtJQUg1QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csZ0JBQWdCLENBMEM1QjtTQTFDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFc2NhcGVGb2N1c1NlcnZpY2UgfSBmcm9tICcuLi9lc2NhcGUvZXNjYXBlLWZvY3VzLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQXV0b0ZvY3VzQ29uZmlnLFxuICBGT0NVU19BVFRSLFxuICBQZXJzaXN0Rm9jdXNDb25maWcsXG59IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9Gb2N1c1NlcnZpY2UgZXh0ZW5kcyBFc2NhcGVGb2N1c1NlcnZpY2Uge1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgZmlyc3QgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnQgb2YgdGhlIGhvc3QgZWxlbWVudC5cbiAgICovXG4gIGZpbmRGaXJzdEZvY3VzYWJsZShcbiAgICBob3N0OiBIVE1MRWxlbWVudCxcbiAgICBjb25maWc6IEF1dG9Gb2N1c0NvbmZpZyA9IHsgYXV0b2ZvY3VzOiB0cnVlIH1cbiAgKTogSFRNTEVsZW1lbnQge1xuICAgIGlmIChjb25maWc/LmF1dG9mb2N1cyA9PT0gJzpob3N0Jykge1xuICAgICAgcmV0dXJuIGhvc3Q7XG4gICAgfSBlbHNlIGlmICh0aGlzLmhhc1BlcnNpc3RlZEZvY3VzKGhvc3QsIGNvbmZpZykpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFBlcnNpc3RlZChob3N0LCB0aGlzLmdldFBlcnNpc3RlbmNlR3JvdXAoaG9zdCwgY29uZmlnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdEZvY3VzVXRpbC5maW5kRmlyc3RGb2N1c2FibGUoaG9zdCwgY29uZmlnKSB8fCBob3N0O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBhbnkgb2YgdGhlIGZvY3VzYWJlIGNoaWxkIGVsZW1lbnRzIGlzIGZvY3VzZWQuXG4gICAqL1xuICBoYXNQZXJzaXN0ZWRGb2N1cyhob3N0OiBIVE1MRWxlbWVudCwgY29uZmlnOiBQZXJzaXN0Rm9jdXNDb25maWcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmdldFBlcnNpc3RlZChob3N0LCB0aGlzLmdldFBlcnNpc3RlbmNlR3JvdXAoaG9zdCwgY29uZmlnKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZWxlbWVudCB0aGF0IGhhcyBhIHBlcnNpc3RlZCBmb2N1cyBzdGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIGhvc3QgdGhlIGBIVE1MRWxlbWVudGAgdXNlZCB0byBxdWVyeSBmb3IgZm9jdXNhYmxlIGNoaWxkcmVuXG4gICAqIEBwYXJhbSBncm91cCB0aGUgb3B0aW9uYWwgZ3JvdXAgZm9yIHRoZSBwZXJzaXN0ZW50IHN0YXRlLCB0byBzZXBhcmF0ZSBkaWZmZXJlbnQgZm9jdXNcbiAgICogICBncm91cHMgYW5kIHJlbWFpbiB0aGUgcGVyc2lzdGFuY2VcbiAgICovXG4gIHByb3RlY3RlZCBnZXRQZXJzaXN0ZWQoaG9zdDogSFRNTEVsZW1lbnQsIGdyb3VwPzogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIGlmICghdGhpcy5nZXQoZ3JvdXApKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZvY3Vzc2VkID0gQXJyYXkuZnJvbShcbiAgICAgIGhvc3QucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgYFske0ZPQ1VTX0FUVFJ9PScke3RoaXMuZ2V0KGdyb3VwKX0nXWBcbiAgICAgICkgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD5cbiAgICApO1xuICAgIHJldHVybiBmb2N1c3NlZC5sZW5ndGggPiAwID8gZm9jdXNzZWRbMF0gOiBudWxsO1xuICB9XG59XG4iXX0=