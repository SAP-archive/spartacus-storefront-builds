import { Injectable } from '@angular/core';
import { EscapeFocusService } from '../escape/escape-focus.service';
import { FOCUS_ATTR, } from '../keyboard-focus.model';
import * as i0 from "@angular/core";
import * as i1 from "../services/select-focus.util";
export class AutoFocusService extends EscapeFocusService {
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
     *   groups and remain the persistence
     */
    getPersisted(host, group) {
        if (!this.get(group)) {
            return;
        }
        const focussed = Array.from(host.querySelectorAll(`[${FOCUS_ATTR}='${this.get(group)}']`));
        return focussed.length > 0 ? focussed[0] : null;
    }
}
AutoFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AutoFocusService_Factory() { return new AutoFocusService(i0.ɵɵinject(i1.SelectFocusUtility)); }, token: AutoFocusService, providedIn: "root" });
AutoFocusService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvbGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvYXV0b2ZvY3VzL2F1dG8tZm9jdXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFFTCxVQUFVLEdBRVgsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBS2pDLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxrQkFBa0I7SUFDdEQ7O09BRUc7SUFDSCxrQkFBa0IsQ0FDaEIsSUFBaUIsRUFDakIsU0FBMEIsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFO1FBRTdDLElBQUksQ0FBQSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsU0FBUyxNQUFLLE9BQU8sRUFBRTtZQUNqQyxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQy9DLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQztTQUN0RTtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILGlCQUFpQixDQUFDLElBQWlCLEVBQUUsTUFBMEI7UUFDN0QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDTyxZQUFZLENBQUMsSUFBaUIsRUFBRSxLQUFjO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE9BQU87U0FDUjtRQUNELE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FDbkIsSUFBSSxVQUFVLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNaLENBQzdCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNsRCxDQUFDOzs7O1lBNUNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVzY2FwZUZvY3VzU2VydmljZSB9IGZyb20gJy4uL2VzY2FwZS9lc2NhcGUtZm9jdXMuc2VydmljZSc7XG5pbXBvcnQge1xuICBBdXRvRm9jdXNDb25maWcsXG4gIEZPQ1VTX0FUVFIsXG4gIFBlcnNpc3RGb2N1c0NvbmZpZyxcbn0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b0ZvY3VzU2VydmljZSBleHRlbmRzIEVzY2FwZUZvY3VzU2VydmljZSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBmb2N1c2FibGUgY2hpbGQgZWxlbWVudCBvZiB0aGUgaG9zdCBlbGVtZW50LlxuICAgKi9cbiAgZmluZEZpcnN0Rm9jdXNhYmxlKFxuICAgIGhvc3Q6IEhUTUxFbGVtZW50LFxuICAgIGNvbmZpZzogQXV0b0ZvY3VzQ29uZmlnID0geyBhdXRvZm9jdXM6IHRydWUgfVxuICApOiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKGNvbmZpZz8uYXV0b2ZvY3VzID09PSAnOmhvc3QnKSB7XG4gICAgICByZXR1cm4gaG9zdDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGFzUGVyc2lzdGVkRm9jdXMoaG9zdCwgY29uZmlnKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UGVyc2lzdGVkKGhvc3QsIHRoaXMuZ2V0UGVyc2lzdGVuY2VHcm91cChob3N0LCBjb25maWcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0Rm9jdXNVdGlsLmZpbmRGaXJzdEZvY3VzYWJsZShob3N0LCBjb25maWcpIHx8IGhvc3Q7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIGFueSBvZiB0aGUgZm9jdXNhYmUgY2hpbGQgZWxlbWVudHMgaXMgZm9jdXNlZC5cbiAgICovXG4gIGhhc1BlcnNpc3RlZEZvY3VzKGhvc3Q6IEhUTUxFbGVtZW50LCBjb25maWc6IFBlcnNpc3RGb2N1c0NvbmZpZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZ2V0UGVyc2lzdGVkKGhvc3QsIHRoaXMuZ2V0UGVyc2lzdGVuY2VHcm91cChob3N0LCBjb25maWcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50IHRoYXQgaGFzIGEgcGVyc2lzdGVkIGZvY3VzIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0gaG9zdCB0aGUgYEhUTUxFbGVtZW50YCB1c2VkIHRvIHF1ZXJ5IGZvciBmb2N1c2FibGUgY2hpbGRyZW5cbiAgICogQHBhcmFtIGdyb3VwIHRoZSBvcHRpb25hbCBncm91cCBmb3IgdGhlIHBlcnNpc3RlbnQgc3RhdGUsIHRvIHNlcGFyYXRlIGRpZmZlcmVudCBmb2N1c1xuICAgKiAgIGdyb3VwcyBhbmQgcmVtYWluIHRoZSBwZXJzaXN0ZW5jZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFBlcnNpc3RlZChob3N0OiBIVE1MRWxlbWVudCwgZ3JvdXA/OiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKCF0aGlzLmdldChncm91cCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZm9jdXNzZWQgPSBBcnJheS5mcm9tKFxuICAgICAgaG9zdC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICBgWyR7Rk9DVVNfQVRUUn09JyR7dGhpcy5nZXQoZ3JvdXApfSddYFxuICAgICAgKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PlxuICAgICk7XG4gICAgcmV0dXJuIGZvY3Vzc2VkLmxlbmd0aCA+IDAgPyBmb2N1c3NlZFswXSA6IG51bGw7XG4gIH1cbn1cbiJdfQ==