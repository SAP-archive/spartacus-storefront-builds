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
        // We must bring this to a singleton map.
        _this.focus = new Map();
        return _this;
    }
    PersistFocusService.prototype.get = function (group) {
        return this.focus.get(group || GLOBAL_GROUP);
    };
    /**
     * Persist the keyboard focus state for the given key. The focus is stored globally
     * or for the given group.
     */
    PersistFocusService.prototype.set = function (key, group) {
        if (key) {
            this.focus.set(group || GLOBAL_GROUP, key);
        }
    };
    /**
     * Clears the persisted keyboard focus state globally or for the given group.
     */
    PersistFocusService.prototype.clear = function (group) {
        this.focus.delete(group || GLOBAL_GROUP);
    };
    /**
     * Returns the group for the host element based on the configured group or
     * by the `data-cx-focus-group` attribute stored on the host.
     */
    PersistFocusService.prototype.getPersistenceGroup = function (host, config) {
        return (config === null || config === void 0 ? void 0 : config.group) ? config.group : host.getAttribute(FOCUS_GROUP_ATTR);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1mb2N1cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvcGVyc2lzdC9wZXJzaXN0LWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFzQixNQUFNLHlCQUF5QixDQUFDOztBQUUvRSxJQUFNLFlBQVksR0FBRyxLQUFLLENBQUM7QUFFM0I7Ozs7O0dBS0c7QUFJSDtJQUF5Qyx1Q0FBZ0I7SUFBekQ7UUFBQSxxRUFpQ0M7UUFoQ0Msa0ZBQWtGO1FBQ2xGLHlDQUF5QztRQUMvQixXQUFLLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7O0tBOEI3QztJQTVCQyxpQ0FBRyxHQUFILFVBQUksS0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsaUNBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxLQUFjO1FBQzdCLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILG1DQUFLLEdBQUwsVUFBTSxLQUFjO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxZQUFZLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsaURBQW1CLEdBQW5CLFVBQW9CLElBQWlCLEVBQUUsTUFBMkI7UUFDaEUsT0FBTyxDQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM1RSxDQUFDOztJQWhDVSxtQkFBbUI7UUFIL0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLG1CQUFtQixDQWlDL0I7OEJBaEREO0NBZ0RDLEFBakNELENBQXlDLGdCQUFnQixHQWlDeEQ7U0FqQ1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUZvY3VzU2VydmljZSB9IGZyb20gJy4uL2Jhc2UvYmFzZS1mb2N1cy5zZXJ2aWNlJztcbmltcG9ydCB7IEZPQ1VTX0dST1VQX0FUVFIsIFBlcnNpc3RGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcblxuY29uc3QgR0xPQkFMX0dST1VQID0gJ19nXyc7XG5cbi8qKlxuICogU2hhcmVkIHNlcnZpY2UgdG8gcGVyc2lzdCB0aGUgZm9jdXMgZm9yIGFuIGVsZW1lbnQgb3IgYSBncm91cFxuICogb2YgZWxlbWVudHMuIFRoZSBwZXJzaXN0ZWQgZWxlbWVudCBmb2N1cyBjYW4gYmUgdXNlZCB0byBwZXJzaXN0XG4gKiB0aGUgZm9jdXMgZm9yIGEgRE9NIHRyZWUsIHNvIHRoYXQgdGhlIGZvY3VzIHJlbWFpbnMgYWZ0ZXIgYSByZXBhaW50XG4gKiBvciByZW9jY3VycyB3aGVuIGEgRE9NIHRyZWUgaXMgXCJ1bmxvY2tlZFwiLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUGVyc2lzdEZvY3VzU2VydmljZSBleHRlbmRzIEJhc2VGb2N1c1NlcnZpY2Uge1xuICAvLyB0aGlzIGlzIGdvaW5nIHRvIGZhaWwgYXMgd2UgaGF2ZSBzdWIgc2VydmljZXMuIFRoZXkgd2lsbCBhbCBoYXZlIHRoZWlyIG93biBtYXAuXG4gIC8vIFdlIG11c3QgYnJpbmcgdGhpcyB0byBhIHNpbmdsZXRvbiBtYXAuXG4gIHByb3RlY3RlZCBmb2N1cyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cbiAgZ2V0KGdyb3VwPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1cy5nZXQoZ3JvdXAgfHwgR0xPQkFMX0dST1VQKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJzaXN0IHRoZSBrZXlib2FyZCBmb2N1cyBzdGF0ZSBmb3IgdGhlIGdpdmVuIGtleS4gVGhlIGZvY3VzIGlzIHN0b3JlZCBnbG9iYWxseVxuICAgKiBvciBmb3IgdGhlIGdpdmVuIGdyb3VwLlxuICAgKi9cbiAgc2V0KGtleTogc3RyaW5nLCBncm91cD86IHN0cmluZykge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHRoaXMuZm9jdXMuc2V0KGdyb3VwIHx8IEdMT0JBTF9HUk9VUCwga2V5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIHRoZSBwZXJzaXN0ZWQga2V5Ym9hcmQgZm9jdXMgc3RhdGUgZ2xvYmFsbHkgb3IgZm9yIHRoZSBnaXZlbiBncm91cC5cbiAgICovXG4gIGNsZWFyKGdyb3VwPzogc3RyaW5nKSB7XG4gICAgdGhpcy5mb2N1cy5kZWxldGUoZ3JvdXAgfHwgR0xPQkFMX0dST1VQKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBncm91cCBmb3IgdGhlIGhvc3QgZWxlbWVudCBiYXNlZCBvbiB0aGUgY29uZmlndXJlZCBncm91cCBvclxuICAgKiBieSB0aGUgYGRhdGEtY3gtZm9jdXMtZ3JvdXBgIGF0dHJpYnV0ZSBzdG9yZWQgb24gdGhlIGhvc3QuXG4gICAqL1xuICBnZXRQZXJzaXN0ZW5jZUdyb3VwKGhvc3Q6IEhUTUxFbGVtZW50LCBjb25maWc/OiBQZXJzaXN0Rm9jdXNDb25maWcpOiBzdHJpbmcge1xuICAgIHJldHVybiBjb25maWc/Lmdyb3VwID8gY29uZmlnLmdyb3VwIDogaG9zdC5nZXRBdHRyaWJ1dGUoRk9DVVNfR1JPVVBfQVRUUik7XG4gIH1cbn1cbiJdfQ==