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
export class PersistFocusService extends BaseFocusService {
    constructor() {
        super(...arguments);
        // this is going to fail as we have sub services. They will al have their own map.
        // We must bring this to a singleton map.
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
        return (config === null || config === void 0 ? void 0 : config.group) ? config.group : host.getAttribute(FOCUS_GROUP_ATTR);
    }
}
PersistFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PersistFocusService_Factory() { return new PersistFocusService(); }, token: PersistFocusService, providedIn: "root" });
PersistFocusService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1mb2N1cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvbGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvcGVyc2lzdC9wZXJzaXN0LWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQXNCLE1BQU0seUJBQXlCLENBQUM7O0FBRS9FLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQztBQUUzQjs7Ozs7R0FLRztBQUlILE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxnQkFBZ0I7SUFIekQ7O1FBSUUsa0ZBQWtGO1FBQ2xGLHlDQUF5QztRQUMvQixVQUFLLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7S0E4QjdDO0lBNUJDLEdBQUcsQ0FBQyxLQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7O09BR0c7SUFDSCxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQWM7UUFDN0IsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLEtBQWM7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLFlBQVksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxtQkFBbUIsQ0FBQyxJQUFpQixFQUFFLE1BQTJCO1FBQ2hFLE9BQU8sQ0FBQSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDNUUsQ0FBQzs7OztZQW5DRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi4vYmFzZS9iYXNlLWZvY3VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRk9DVVNfR1JPVVBfQVRUUiwgUGVyc2lzdEZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuXG5jb25zdCBHTE9CQUxfR1JPVVAgPSAnX2dfJztcblxuLyoqXG4gKiBTaGFyZWQgc2VydmljZSB0byBwZXJzaXN0IHRoZSBmb2N1cyBmb3IgYW4gZWxlbWVudCBvciBhIGdyb3VwXG4gKiBvZiBlbGVtZW50cy4gVGhlIHBlcnNpc3RlZCBlbGVtZW50IGZvY3VzIGNhbiBiZSB1c2VkIHRvIHBlcnNpc3RcbiAqIHRoZSBmb2N1cyBmb3IgYSBET00gdHJlZSwgc28gdGhhdCB0aGUgZm9jdXMgcmVtYWlucyBhZnRlciBhIHJlcGFpbnRcbiAqIG9yIHJlb2NjdXJzIHdoZW4gYSBET00gdHJlZSBpcyBcInVubG9ja2VkXCIuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQZXJzaXN0Rm9jdXNTZXJ2aWNlIGV4dGVuZHMgQmFzZUZvY3VzU2VydmljZSB7XG4gIC8vIHRoaXMgaXMgZ29pbmcgdG8gZmFpbCBhcyB3ZSBoYXZlIHN1YiBzZXJ2aWNlcy4gVGhleSB3aWxsIGFsIGhhdmUgdGhlaXIgb3duIG1hcC5cbiAgLy8gV2UgbXVzdCBicmluZyB0aGlzIHRvIGEgc2luZ2xldG9uIG1hcC5cbiAgcHJvdGVjdGVkIGZvY3VzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuICBnZXQoZ3JvdXA/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZvY3VzLmdldChncm91cCB8fCBHTE9CQUxfR1JPVVApO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcnNpc3QgdGhlIGtleWJvYXJkIGZvY3VzIHN0YXRlIGZvciB0aGUgZ2l2ZW4ga2V5LiBUaGUgZm9jdXMgaXMgc3RvcmVkIGdsb2JhbGx5XG4gICAqIG9yIGZvciB0aGUgZ2l2ZW4gZ3JvdXAuXG4gICAqL1xuICBzZXQoa2V5OiBzdHJpbmcsIGdyb3VwPzogc3RyaW5nKSB7XG4gICAgaWYgKGtleSkge1xuICAgICAgdGhpcy5mb2N1cy5zZXQoZ3JvdXAgfHwgR0xPQkFMX0dST1VQLCBrZXkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIHBlcnNpc3RlZCBrZXlib2FyZCBmb2N1cyBzdGF0ZSBnbG9iYWxseSBvciBmb3IgdGhlIGdpdmVuIGdyb3VwLlxuICAgKi9cbiAgY2xlYXIoZ3JvdXA/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmZvY3VzLmRlbGV0ZShncm91cCB8fCBHTE9CQUxfR1JPVVApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGdyb3VwIGZvciB0aGUgaG9zdCBlbGVtZW50IGJhc2VkIG9uIHRoZSBjb25maWd1cmVkIGdyb3VwIG9yXG4gICAqIGJ5IHRoZSBgZGF0YS1jeC1mb2N1cy1ncm91cGAgYXR0cmlidXRlIHN0b3JlZCBvbiB0aGUgaG9zdC5cbiAgICovXG4gIGdldFBlcnNpc3RlbmNlR3JvdXAoaG9zdDogSFRNTEVsZW1lbnQsIGNvbmZpZz86IFBlcnNpc3RGb2N1c0NvbmZpZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGNvbmZpZz8uZ3JvdXAgPyBjb25maWcuZ3JvdXAgOiBob3N0LmdldEF0dHJpYnV0ZShGT0NVU19HUk9VUF9BVFRSKTtcbiAgfVxufVxuIl19