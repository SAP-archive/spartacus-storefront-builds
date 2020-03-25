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
    /**
     * Persist the keyboard focus state for the given key. The focus is stored globally
     * or for the given group.
     */
    set(key, group) {
        if (key) {
            this.focus.set(group || GLOBAL_GROUP, key);
        }
    }
    /**
     * Clears the persisted keyboard focus state globally or for the given group.
     */
    clear(group) {
        this.focus.delete(group || GLOBAL_GROUP);
    }
    /**
     * Returns the group for the host element based on the configured group or
     * by the `data-cx-focus-group` attribute stored on the host.
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1mb2N1cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvcGVyc2lzdC9wZXJzaXN0LWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFzQixNQUFNLHlCQUF5QixDQUFDOztBQUUvRSxNQUFNLFlBQVksR0FBRyxLQUFLLENBQUM7QUFFM0I7Ozs7O0dBS0c7QUFJSCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFvQixTQUFRLGdCQUFnQjtJQUF6RDs7UUFDRSxrRkFBa0Y7UUFDbEYsd0NBQXdDO1FBQzlCLFVBQUssR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztLQThCN0M7SUE1QkMsR0FBRyxDQUFDLEtBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7T0FHRztJQUNILEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBYztRQUM3QixJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsS0FBYztRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksWUFBWSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7T0FHRztJQUNILG1CQUFtQixDQUFDLElBQWlCLEVBQUUsTUFBMkI7O1FBQ2hFLE9BQU8sT0FBQSxNQUFNLDBDQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Q0FDRixDQUFBOztBQWpDWSxtQkFBbUI7SUFIL0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLG1CQUFtQixDQWlDL0I7U0FqQ1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUZvY3VzU2VydmljZSB9IGZyb20gJy4uL2Jhc2UvYmFzZS1mb2N1cy5zZXJ2aWNlJztcbmltcG9ydCB7IEZPQ1VTX0dST1VQX0FUVFIsIFBlcnNpc3RGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcblxuY29uc3QgR0xPQkFMX0dST1VQID0gJ19nXyc7XG5cbi8qKlxuICogU2hhcmVkIHNlcnZpY2UgdG8gcGVyc2lzdCB0aGUgZm9jdXMgZm9yIGFuIGVsZW1lbnQgb3IgYSBncm91cFxuICogb2YgZWxlbWVudHMuIFRoZSBwZXJzaXN0ZWQgZWxlbWVudCBmb2N1cyBjYW4gYmUgdXNlZCB0byBwZXJzaXN0XG4gKiB0aGUgZm9jdXMgZm9yIGEgRE9NIHRyZWUsIHNvIHRoYXQgdGhlIGZvY3VzIHJlbWFpbnMgYWZ0ZXIgYSByZXBhaW50XG4gKiBvciByZW9jY3VycyB3aGVuIGEgRE9NIHRyZWUgaXMgXCJ1bmxvY2tlZFwiLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUGVyc2lzdEZvY3VzU2VydmljZSBleHRlbmRzIEJhc2VGb2N1c1NlcnZpY2Uge1xuICAvLyB0aGlzIGlzIGdvaW5nIHRvIGZhaWwgYXMgd2UgaGF2ZSBzdWIgc2VydmljZXMuIFRoZXkgd2lsbCBhbCBoYXZlIHRoZWlyIG93biBtYXAuXG4gIC8vIFdlIG11c3QgYnJpbmcgdGhpcyB0byBhIHNpbmdsdG9uIG1hcC5cbiAgcHJvdGVjdGVkIGZvY3VzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuICBnZXQoZ3JvdXA/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZvY3VzLmdldChncm91cCB8fCBHTE9CQUxfR1JPVVApO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcnNpc3QgdGhlIGtleWJvYXJkIGZvY3VzIHN0YXRlIGZvciB0aGUgZ2l2ZW4ga2V5LiBUaGUgZm9jdXMgaXMgc3RvcmVkIGdsb2JhbGx5XG4gICAqIG9yIGZvciB0aGUgZ2l2ZW4gZ3JvdXAuXG4gICAqL1xuICBzZXQoa2V5OiBzdHJpbmcsIGdyb3VwPzogc3RyaW5nKSB7XG4gICAgaWYgKGtleSkge1xuICAgICAgdGhpcy5mb2N1cy5zZXQoZ3JvdXAgfHwgR0xPQkFMX0dST1VQLCBrZXkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIHBlcnNpc3RlZCBrZXlib2FyZCBmb2N1cyBzdGF0ZSBnbG9iYWxseSBvciBmb3IgdGhlIGdpdmVuIGdyb3VwLlxuICAgKi9cbiAgY2xlYXIoZ3JvdXA/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmZvY3VzLmRlbGV0ZShncm91cCB8fCBHTE9CQUxfR1JPVVApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGdyb3VwIGZvciB0aGUgaG9zdCBlbGVtZW50IGJhc2VkIG9uIHRoZSBjb25maWd1cmVkIGdyb3VwIG9yXG4gICAqIGJ5IHRoZSBgZGF0YS1jeC1mb2N1cy1ncm91cGAgYXR0cmlidXRlIHN0b3JlZCBvbiB0aGUgaG9zdC5cbiAgICovXG4gIGdldFBlcnNpc3RlbmNlR3JvdXAoaG9zdDogSFRNTEVsZW1lbnQsIGNvbmZpZz86IFBlcnNpc3RGb2N1c0NvbmZpZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGNvbmZpZz8uZ3JvdXAgPyBjb25maWcuZ3JvdXAgOiBob3N0LmdldEF0dHJpYnV0ZShGT0NVU19HUk9VUF9BVFRSKTtcbiAgfVxufVxuIl19