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
        if ((config === null || config === void 0 ? void 0 : config.autofocus) === ':host') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvYXV0b2ZvY3VzL2F1dG8tZm9jdXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBRUwsVUFBVSxHQUVYLE1BQU0seUJBQXlCLENBQUM7OztBQUtqQyxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFpQixTQUFRLGtCQUFrQjtJQUN0RDs7T0FFRztJQUNILGtCQUFrQixDQUNoQixJQUFpQixFQUNqQixTQUEwQixFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUU7UUFFN0MsSUFBSSxDQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxTQUFTLE1BQUssT0FBTyxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDL0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDeEU7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUJBQWlCLENBQUMsSUFBaUIsRUFBRSxNQUEwQjtRQUM3RCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNPLFlBQVksQ0FBQyxJQUFpQixFQUFFLEtBQWM7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBQ0QsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FDekIsSUFBSSxDQUFDLGdCQUFnQixDQUNuQixJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ1osQ0FDN0IsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2xELENBQUM7Q0FDRixDQUFBOztBQTFDWSxnQkFBZ0I7SUFINUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGdCQUFnQixDQTBDNUI7U0ExQ1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXNjYXBlRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi4vZXNjYXBlL2VzY2FwZS1mb2N1cy5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEF1dG9Gb2N1c0NvbmZpZyxcbiAgRk9DVVNfQVRUUixcbiAgUGVyc2lzdEZvY3VzQ29uZmlnLFxufSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvRm9jdXNTZXJ2aWNlIGV4dGVuZHMgRXNjYXBlRm9jdXNTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGZpcnN0IGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50IG9mIHRoZSBob3N0IGVsZW1lbnQuXG4gICAqL1xuICBmaW5kRmlyc3RGb2N1c2FibGUoXG4gICAgaG9zdDogSFRNTEVsZW1lbnQsXG4gICAgY29uZmlnOiBBdXRvRm9jdXNDb25maWcgPSB7IGF1dG9mb2N1czogdHJ1ZSB9XG4gICk6IEhUTUxFbGVtZW50IHtcbiAgICBpZiAoY29uZmlnPy5hdXRvZm9jdXMgPT09ICc6aG9zdCcpIHtcbiAgICAgIHJldHVybiBob3N0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5oYXNQZXJzaXN0ZWRGb2N1cyhob3N0LCBjb25maWcpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRQZXJzaXN0ZWQoaG9zdCwgdGhpcy5nZXRQZXJzaXN0ZW5jZUdyb3VwKGhvc3QsIGNvbmZpZykpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RGb2N1c1V0aWwuZmluZEZpcnN0Rm9jdXNhYmxlKGhvc3QsIGNvbmZpZykgfHwgaG9zdDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgYW55IG9mIHRoZSBmb2N1c2FiZSBjaGlsZCBlbGVtZW50cyBpcyBmb2N1c2VkLlxuICAgKi9cbiAgaGFzUGVyc2lzdGVkRm9jdXMoaG9zdDogSFRNTEVsZW1lbnQsIGNvbmZpZzogUGVyc2lzdEZvY3VzQ29uZmlnKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5nZXRQZXJzaXN0ZWQoaG9zdCwgdGhpcy5nZXRQZXJzaXN0ZW5jZUdyb3VwKGhvc3QsIGNvbmZpZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVsZW1lbnQgdGhhdCBoYXMgYSBwZXJzaXN0ZWQgZm9jdXMgc3RhdGUuXG4gICAqXG4gICAqIEBwYXJhbSBob3N0IHRoZSBgSFRNTEVsZW1lbnRgIHVzZWQgdG8gcXVlcnkgZm9yIGZvY3VzYWJsZSBjaGlsZHJlblxuICAgKiBAcGFyYW0gZ3JvdXAgdGhlIG9wdGlvbmFsIGdyb3VwIGZvciB0aGUgcGVyc2lzdGVudCBzdGF0ZSwgdG8gc2VwYXJhdGUgZGlmZmVyZW50IGZvY3VzXG4gICAqICAgZ3JvdXBzIGFuZCByZW1haW4gdGhlIHBlcnNpc3RhbmNlXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0UGVyc2lzdGVkKGhvc3Q6IEhUTUxFbGVtZW50LCBncm91cD86IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICBpZiAoIXRoaXMuZ2V0KGdyb3VwKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmb2N1c3NlZCA9IEFycmF5LmZyb20oXG4gICAgICBob3N0LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgIGBbJHtGT0NVU19BVFRSfT0nJHt0aGlzLmdldChncm91cCl9J11gXG4gICAgICApIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+XG4gICAgKTtcbiAgICByZXR1cm4gZm9jdXNzZWQubGVuZ3RoID4gMCA/IGZvY3Vzc2VkWzBdIDogbnVsbDtcbiAgfVxufVxuIl19