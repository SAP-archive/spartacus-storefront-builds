import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { PersistFocusService } from '../persist/persist-focus.service';
import { SelectFocusUtility } from '../services/select-focus.util';
import * as i0 from "@angular/core";
import * as i1 from "../services/select-focus.util";
let EscapeFocusService = class EscapeFocusService extends PersistFocusService {
    constructor(selectFocusUtil) {
        super();
        this.selectFocusUtil = selectFocusUtil;
    }
    shouldFocus(config) {
        return !!(config === null || config === void 0 ? void 0 : config.focusOnEscape);
    }
    handleEscape(host, config, event) {
        var _a;
        if (this.shouldFocus(config)) {
            if (host !== event.target) {
                host.focus({ preventScroll: true });
                event.preventDefault();
                event.stopPropagation();
            }
            else {
                if (config === null || config === void 0 ? void 0 : config.focusOnDoubleEscape) {
                    (_a = this.selectFocusUtil
                        .findFirstFocusable(host, { autofocus: true })) === null || _a === void 0 ? void 0 : _a.focus();
                }
            }
        }
    }
};
EscapeFocusService.ctorParameters = () => [
    { type: SelectFocusUtility }
];
EscapeFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EscapeFocusService_Factory() { return new EscapeFocusService(i0.ɵɵinject(i1.SelectFocusUtility)); }, token: EscapeFocusService, providedIn: "root" });
EscapeFocusService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], EscapeFocusService);
export { EscapeFocusService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlLWZvY3VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9lc2NhcGUvZXNjYXBlLWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7OztBQUtuRSxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFtQixTQUFRLG1CQUFtQjtJQUN6RCxZQUFzQixlQUFtQztRQUN2RCxLQUFLLEVBQUUsQ0FBQztRQURZLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtJQUV6RCxDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQXlCO1FBQ25DLE9BQU8sQ0FBQyxFQUFDLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxhQUFhLENBQUEsQ0FBQztJQUNqQyxDQUFDO0lBRUQsWUFBWSxDQUNWLElBQWlCLEVBQ2pCLE1BQXlCLEVBQ3pCLEtBQW9COztRQUVwQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDNUIsSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN6QjtpQkFBTTtnQkFDTCxJQUFJLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxtQkFBbUIsRUFBRTtvQkFDL0IsTUFBQSxJQUFJLENBQUMsZUFBZTt5QkFDakIsa0JBQWtCLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLDBDQUM1QyxLQUFLLEdBQUc7aUJBQ2I7YUFDRjtTQUNGO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBM0J3QyxrQkFBa0I7OztBQUQ5QyxrQkFBa0I7SUFIOUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGtCQUFrQixDQTRCOUI7U0E1Qlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXNjYXBlRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBQZXJzaXN0Rm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi4vcGVyc2lzdC9wZXJzaXN0LWZvY3VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VsZWN0Rm9jdXNVdGlsaXR5IH0gZnJvbSAnLi4vc2VydmljZXMvc2VsZWN0LWZvY3VzLnV0aWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRXNjYXBlRm9jdXNTZXJ2aWNlIGV4dGVuZHMgUGVyc2lzdEZvY3VzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzZWxlY3RGb2N1c1V0aWw6IFNlbGVjdEZvY3VzVXRpbGl0eSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBzaG91bGRGb2N1cyhjb25maWc6IEVzY2FwZUZvY3VzQ29uZmlnKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhY29uZmlnPy5mb2N1c09uRXNjYXBlO1xuICB9XG5cbiAgaGFuZGxlRXNjYXBlKFxuICAgIGhvc3Q6IEhUTUxFbGVtZW50LFxuICAgIGNvbmZpZzogRXNjYXBlRm9jdXNDb25maWcsXG4gICAgZXZlbnQ6IEtleWJvYXJkRXZlbnRcbiAgKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvdWxkRm9jdXMoY29uZmlnKSkge1xuICAgICAgaWYgKGhvc3QgIT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgICBob3N0LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY29uZmlnPy5mb2N1c09uRG91YmxlRXNjYXBlKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RGb2N1c1V0aWxcbiAgICAgICAgICAgIC5maW5kRmlyc3RGb2N1c2FibGUoaG9zdCwgeyBhdXRvZm9jdXM6IHRydWUgfSlcbiAgICAgICAgICAgID8uZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19