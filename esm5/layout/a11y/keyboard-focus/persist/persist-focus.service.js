import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { BaseFocusService } from '../base/base-focus.service';
import { FOCUS_GROUP_ATTR } from '../keyboard-focus.model';
import * as i0 from "@angular/core";
var GLOBAL_GROUP = '_g_';
/**
 * Shared service to persist the focus for an element or a group
 * of elements. The persisted element focus can be used to persist
 * the focus for a DOM tree, so that the focus remains after a repaint
 * or reoccurs when a DOM tree is "unlocked".
 */
var PersistFocusService = /** @class */ (function (_super) {
    __extends(PersistFocusService, _super);
    function PersistFocusService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // this is going to fail as we have sub services. They will al have their own map.
        // We must bring this to a singlton map.
        _this.focus = new Map();
        return _this;
    }
    PersistFocusService.prototype.get = function (group) {
        return this.focus.get(group || GLOBAL_GROUP);
    };
    PersistFocusService.prototype.set = function (value, group) {
        if (value) {
            this.focus.set(group || GLOBAL_GROUP, value);
        }
    };
    PersistFocusService.prototype.getPersistenceGroup = function (host, config) {
        var _a;
        return ((_a = config) === null || _a === void 0 ? void 0 : _a.group) ? config.group : host.getAttribute(FOCUS_GROUP_ATTR);
    };
    PersistFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PersistFocusService_Factory() { return new PersistFocusService(); }, token: PersistFocusService, providedIn: "root" });
    PersistFocusService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], PersistFocusService);
    return PersistFocusService;
}(BaseFocusService));
export { PersistFocusService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1mb2N1cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvcGVyc2lzdC9wZXJzaXN0LWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFzQixNQUFNLHlCQUF5QixDQUFDOztBQUUvRSxJQUFNLFlBQVksR0FBRyxLQUFLLENBQUM7QUFFM0I7Ozs7O0dBS0c7QUFJSDtJQUF5Qyx1Q0FBZ0I7SUFBekQ7UUFBQSxxRUFrQkM7UUFqQkMsa0ZBQWtGO1FBQ2xGLHdDQUF3QztRQUM5QixXQUFLLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7O0tBZTdDO0lBYkMsaUNBQUcsR0FBSCxVQUFJLEtBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELGlDQUFHLEdBQUgsVUFBSSxLQUFhLEVBQUUsS0FBYztRQUMvQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBRUQsaURBQW1CLEdBQW5CLFVBQW9CLElBQWlCLEVBQUUsTUFBMkI7O1FBQ2hFLE9BQU8sT0FBQSxNQUFNLDBDQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzVFLENBQUM7O0lBakJVLG1CQUFtQjtRQUgvQixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csbUJBQW1CLENBa0IvQjs4QkFqQ0Q7Q0FpQ0MsQUFsQkQsQ0FBeUMsZ0JBQWdCLEdBa0J4RDtTQWxCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi4vYmFzZS9iYXNlLWZvY3VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRk9DVVNfR1JPVVBfQVRUUiwgUGVyc2lzdEZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuXG5jb25zdCBHTE9CQUxfR1JPVVAgPSAnX2dfJztcblxuLyoqXG4gKiBTaGFyZWQgc2VydmljZSB0byBwZXJzaXN0IHRoZSBmb2N1cyBmb3IgYW4gZWxlbWVudCBvciBhIGdyb3VwXG4gKiBvZiBlbGVtZW50cy4gVGhlIHBlcnNpc3RlZCBlbGVtZW50IGZvY3VzIGNhbiBiZSB1c2VkIHRvIHBlcnNpc3RcbiAqIHRoZSBmb2N1cyBmb3IgYSBET00gdHJlZSwgc28gdGhhdCB0aGUgZm9jdXMgcmVtYWlucyBhZnRlciBhIHJlcGFpbnRcbiAqIG9yIHJlb2NjdXJzIHdoZW4gYSBET00gdHJlZSBpcyBcInVubG9ja2VkXCIuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQZXJzaXN0Rm9jdXNTZXJ2aWNlIGV4dGVuZHMgQmFzZUZvY3VzU2VydmljZSB7XG4gIC8vIHRoaXMgaXMgZ29pbmcgdG8gZmFpbCBhcyB3ZSBoYXZlIHN1YiBzZXJ2aWNlcy4gVGhleSB3aWxsIGFsIGhhdmUgdGhlaXIgb3duIG1hcC5cbiAgLy8gV2UgbXVzdCBicmluZyB0aGlzIHRvIGEgc2luZ2x0b24gbWFwLlxuICBwcm90ZWN0ZWQgZm9jdXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG4gIGdldChncm91cD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXMuZ2V0KGdyb3VwIHx8IEdMT0JBTF9HUk9VUCk7XG4gIH1cblxuICBzZXQodmFsdWU6IHN0cmluZywgZ3JvdXA/OiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZm9jdXMuc2V0KGdyb3VwIHx8IEdMT0JBTF9HUk9VUCwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldFBlcnNpc3RlbmNlR3JvdXAoaG9zdDogSFRNTEVsZW1lbnQsIGNvbmZpZz86IFBlcnNpc3RGb2N1c0NvbmZpZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGNvbmZpZz8uZ3JvdXAgPyBjb25maWcuZ3JvdXAgOiBob3N0LmdldEF0dHJpYnV0ZShGT0NVU19HUk9VUF9BVFRSKTtcbiAgfVxufVxuIl19