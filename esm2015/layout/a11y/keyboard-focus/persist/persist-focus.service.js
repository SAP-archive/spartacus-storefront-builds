import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BaseFocusService } from '../base/base-focus.service';
import { FOCUS_GROUP_ATTR } from '../keyboard-focus.model';
import * as i0 from "@angular/core";
const GLOBAL_GROUP = '_g_';
/**
 * Shared service to persist the focus for an element or a group
 * of elements. The persisted element focus can be used to persist
 * the focus for a DOM tree, so that the focus remains after a repaint
 * or reoccurs when a DOM tree is "unlocked".
 */
let PersistFocusService = class PersistFocusService extends BaseFocusService {
    constructor() {
        super(...arguments);
        // this is going to fail as we have sub services. They will al have their own map.
        // We must bring this to a singlton map.
        this.focus = new Map();
    }
    get(group) {
        return this.focus.get(group || GLOBAL_GROUP);
    }
    set(value, group) {
        if (value) {
            this.focus.set(group || GLOBAL_GROUP, value);
        }
    }
    getPersistenceGroup(host, config) {
        var _a;
        return ((_a = config) === null || _a === void 0 ? void 0 : _a.group) ? config.group : host.getAttribute(FOCUS_GROUP_ATTR);
    }
};
PersistFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PersistFocusService_Factory() { return new PersistFocusService(); }, token: PersistFocusService, providedIn: "root" });
PersistFocusService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], PersistFocusService);
export { PersistFocusService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1mb2N1cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvcGVyc2lzdC9wZXJzaXN0LWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFzQixNQUFNLHlCQUF5QixDQUFDOztBQUUvRSxNQUFNLFlBQVksR0FBRyxLQUFLLENBQUM7QUFFM0I7Ozs7O0dBS0c7QUFJSCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFvQixTQUFRLGdCQUFnQjtJQUF6RDs7UUFDRSxrRkFBa0Y7UUFDbEYsd0NBQXdDO1FBQzlCLFVBQUssR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztLQWU3QztJQWJDLEdBQUcsQ0FBQyxLQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxHQUFHLENBQUMsS0FBYSxFQUFFLEtBQWM7UUFDL0IsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQztJQUVELG1CQUFtQixDQUFDLElBQWlCLEVBQUUsTUFBMkI7O1FBQ2hFLE9BQU8sT0FBQSxNQUFNLDBDQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Q0FDRixDQUFBOztBQWxCWSxtQkFBbUI7SUFIL0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLG1CQUFtQixDQWtCL0I7U0FsQlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUZvY3VzU2VydmljZSB9IGZyb20gJy4uL2Jhc2UvYmFzZS1mb2N1cy5zZXJ2aWNlJztcbmltcG9ydCB7IEZPQ1VTX0dST1VQX0FUVFIsIFBlcnNpc3RGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcblxuY29uc3QgR0xPQkFMX0dST1VQID0gJ19nXyc7XG5cbi8qKlxuICogU2hhcmVkIHNlcnZpY2UgdG8gcGVyc2lzdCB0aGUgZm9jdXMgZm9yIGFuIGVsZW1lbnQgb3IgYSBncm91cFxuICogb2YgZWxlbWVudHMuIFRoZSBwZXJzaXN0ZWQgZWxlbWVudCBmb2N1cyBjYW4gYmUgdXNlZCB0byBwZXJzaXN0XG4gKiB0aGUgZm9jdXMgZm9yIGEgRE9NIHRyZWUsIHNvIHRoYXQgdGhlIGZvY3VzIHJlbWFpbnMgYWZ0ZXIgYSByZXBhaW50XG4gKiBvciByZW9jY3VycyB3aGVuIGEgRE9NIHRyZWUgaXMgXCJ1bmxvY2tlZFwiLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUGVyc2lzdEZvY3VzU2VydmljZSBleHRlbmRzIEJhc2VGb2N1c1NlcnZpY2Uge1xuICAvLyB0aGlzIGlzIGdvaW5nIHRvIGZhaWwgYXMgd2UgaGF2ZSBzdWIgc2VydmljZXMuIFRoZXkgd2lsbCBhbCBoYXZlIHRoZWlyIG93biBtYXAuXG4gIC8vIFdlIG11c3QgYnJpbmcgdGhpcyB0byBhIHNpbmdsdG9uIG1hcC5cbiAgcHJvdGVjdGVkIGZvY3VzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuICBnZXQoZ3JvdXA/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZvY3VzLmdldChncm91cCB8fCBHTE9CQUxfR1JPVVApO1xuICB9XG5cbiAgc2V0KHZhbHVlOiBzdHJpbmcsIGdyb3VwPzogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmZvY3VzLnNldChncm91cCB8fCBHTE9CQUxfR1JPVVAsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBnZXRQZXJzaXN0ZW5jZUdyb3VwKGhvc3Q6IEhUTUxFbGVtZW50LCBjb25maWc/OiBQZXJzaXN0Rm9jdXNDb25maWcpOiBzdHJpbmcge1xuICAgIHJldHVybiBjb25maWc/Lmdyb3VwID8gY29uZmlnLmdyb3VwIDogaG9zdC5nZXRBdHRyaWJ1dGUoRk9DVVNfR1JPVVBfQVRUUik7XG4gIH1cbn1cbiJdfQ==