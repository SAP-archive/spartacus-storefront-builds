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
};
PersistFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PersistFocusService_Factory() { return new PersistFocusService(); }, token: PersistFocusService, providedIn: "root" });
PersistFocusService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], PersistFocusService);
export { PersistFocusService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1mb2N1cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvcGVyc2lzdC9wZXJzaXN0LWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFzQixNQUFNLHlCQUF5QixDQUFDOztBQUUvRSxNQUFNLFlBQVksR0FBRyxLQUFLLENBQUM7QUFFM0I7Ozs7O0dBS0c7QUFJSCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFvQixTQUFRLGdCQUFnQjtJQUF6RDs7UUFDRSxrRkFBa0Y7UUFDbEYseUNBQXlDO1FBQy9CLFVBQUssR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztLQThCN0M7SUE1QkMsR0FBRyxDQUFDLEtBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7T0FHRztJQUNILEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBYztRQUM3QixJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsS0FBYztRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksWUFBWSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7T0FHRztJQUNILG1CQUFtQixDQUFDLElBQWlCLEVBQUUsTUFBMkI7UUFDaEUsT0FBTyxDQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM1RSxDQUFDO0NBQ0YsQ0FBQTs7QUFqQ1ksbUJBQW1CO0lBSC9CLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxtQkFBbUIsQ0FpQy9CO1NBakNZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VGb2N1c1NlcnZpY2UgfSBmcm9tICcuLi9iYXNlL2Jhc2UtZm9jdXMuc2VydmljZSc7XG5pbXBvcnQgeyBGT0NVU19HUk9VUF9BVFRSLCBQZXJzaXN0Rm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5cbmNvbnN0IEdMT0JBTF9HUk9VUCA9ICdfZ18nO1xuXG4vKipcbiAqIFNoYXJlZCBzZXJ2aWNlIHRvIHBlcnNpc3QgdGhlIGZvY3VzIGZvciBhbiBlbGVtZW50IG9yIGEgZ3JvdXBcbiAqIG9mIGVsZW1lbnRzLiBUaGUgcGVyc2lzdGVkIGVsZW1lbnQgZm9jdXMgY2FuIGJlIHVzZWQgdG8gcGVyc2lzdFxuICogdGhlIGZvY3VzIGZvciBhIERPTSB0cmVlLCBzbyB0aGF0IHRoZSBmb2N1cyByZW1haW5zIGFmdGVyIGEgcmVwYWludFxuICogb3IgcmVvY2N1cnMgd2hlbiBhIERPTSB0cmVlIGlzIFwidW5sb2NrZWRcIi5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFBlcnNpc3RGb2N1c1NlcnZpY2UgZXh0ZW5kcyBCYXNlRm9jdXNTZXJ2aWNlIHtcbiAgLy8gdGhpcyBpcyBnb2luZyB0byBmYWlsIGFzIHdlIGhhdmUgc3ViIHNlcnZpY2VzLiBUaGV5IHdpbGwgYWwgaGF2ZSB0aGVpciBvd24gbWFwLlxuICAvLyBXZSBtdXN0IGJyaW5nIHRoaXMgdG8gYSBzaW5nbGV0b24gbWFwLlxuICBwcm90ZWN0ZWQgZm9jdXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG4gIGdldChncm91cD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXMuZ2V0KGdyb3VwIHx8IEdMT0JBTF9HUk9VUCk7XG4gIH1cblxuICAvKipcbiAgICogUGVyc2lzdCB0aGUga2V5Ym9hcmQgZm9jdXMgc3RhdGUgZm9yIHRoZSBnaXZlbiBrZXkuIFRoZSBmb2N1cyBpcyBzdG9yZWQgZ2xvYmFsbHlcbiAgICogb3IgZm9yIHRoZSBnaXZlbiBncm91cC5cbiAgICovXG4gIHNldChrZXk6IHN0cmluZywgZ3JvdXA/OiBzdHJpbmcpIHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICB0aGlzLmZvY3VzLnNldChncm91cCB8fCBHTE9CQUxfR1JPVVAsIGtleSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyB0aGUgcGVyc2lzdGVkIGtleWJvYXJkIGZvY3VzIHN0YXRlIGdsb2JhbGx5IG9yIGZvciB0aGUgZ2l2ZW4gZ3JvdXAuXG4gICAqL1xuICBjbGVhcihncm91cD86IHN0cmluZykge1xuICAgIHRoaXMuZm9jdXMuZGVsZXRlKGdyb3VwIHx8IEdMT0JBTF9HUk9VUCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZ3JvdXAgZm9yIHRoZSBob3N0IGVsZW1lbnQgYmFzZWQgb24gdGhlIGNvbmZpZ3VyZWQgZ3JvdXAgb3JcbiAgICogYnkgdGhlIGBkYXRhLWN4LWZvY3VzLWdyb3VwYCBhdHRyaWJ1dGUgc3RvcmVkIG9uIHRoZSBob3N0LlxuICAgKi9cbiAgZ2V0UGVyc2lzdGVuY2VHcm91cChob3N0OiBIVE1MRWxlbWVudCwgY29uZmlnPzogUGVyc2lzdEZvY3VzQ29uZmlnKTogc3RyaW5nIHtcbiAgICByZXR1cm4gY29uZmlnPy5ncm91cCA/IGNvbmZpZy5ncm91cCA6IGhvc3QuZ2V0QXR0cmlidXRlKEZPQ1VTX0dST1VQX0FUVFIpO1xuICB9XG59XG4iXX0=