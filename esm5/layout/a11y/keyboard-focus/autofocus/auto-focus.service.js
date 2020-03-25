import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { EscapeFocusService } from '../escape/escape-focus.service';
import { FOCUS_ATTR, } from '../keyboard-focus.model';
import * as i0 from "@angular/core";
import * as i1 from "../services/select-focus.util";
var AutoFocusService = /** @class */ (function (_super) {
    __extends(AutoFocusService, _super);
    function AutoFocusService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns the first focusable child element of the host element.
     */
    AutoFocusService.prototype.findFirstFocusable = function (host, config) {
        if (config === void 0) { config = { autofocus: true }; }
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
    };
    /**
     * Indicates whether any of the focusabe child elements is focused.
     */
    AutoFocusService.prototype.hasPersistedFocus = function (host, config) {
        return !!this.getPersisted(host, this.getPersistenceGroup(host, config));
    };
    /**
     * Returns the element that has a persisted focus state.
     *
     * @param host the `HTMLElement` used to query for focusable children
     * @param group the optional group for the persistent state, to separate different focus
     *   groups and remain the persistance
     */
    AutoFocusService.prototype.getPersisted = function (host, group) {
        if (!this.get(group)) {
            return;
        }
        var focussed = Array.from(host.querySelectorAll("[" + FOCUS_ATTR + "='" + this.get(group) + "']"));
        return focussed.length > 0 ? focussed[0] : null;
    };
    AutoFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AutoFocusService_Factory() { return new AutoFocusService(i0.ɵɵinject(i1.SelectFocusUtility)); }, token: AutoFocusService, providedIn: "root" });
    AutoFocusService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], AutoFocusService);
    return AutoFocusService;
}(EscapeFocusService));
export { AutoFocusService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvYXV0b2ZvY3VzL2F1dG8tZm9jdXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBRUwsVUFBVSxHQUVYLE1BQU0seUJBQXlCLENBQUM7OztBQUtqQztJQUFzQyxvQ0FBa0I7SUFBeEQ7O0tBMENDO0lBekNDOztPQUVHO0lBQ0gsNkNBQWtCLEdBQWxCLFVBQ0UsSUFBaUIsRUFDakIsTUFBNkM7UUFBN0MsdUJBQUEsRUFBQSxXQUE0QixTQUFTLEVBQUUsSUFBSSxFQUFFOztRQUU3QyxJQUFJLE9BQUEsTUFBTSwwQ0FBRSxTQUFTLE1BQUssT0FBTyxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDL0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDeEU7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsNENBQWlCLEdBQWpCLFVBQWtCLElBQWlCLEVBQUUsTUFBMEI7UUFDN0QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDTyx1Q0FBWSxHQUF0QixVQUF1QixJQUFpQixFQUFFLEtBQWM7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBQ0QsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FDekIsSUFBSSxDQUFDLGdCQUFnQixDQUNuQixNQUFJLFVBQVUsVUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFJLENBQ1osQ0FDN0IsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2xELENBQUM7O0lBekNVLGdCQUFnQjtRQUg1QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csZ0JBQWdCLENBMEM1QjsyQkFyREQ7Q0FxREMsQUExQ0QsQ0FBc0Msa0JBQWtCLEdBMEN2RDtTQTFDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFc2NhcGVGb2N1c1NlcnZpY2UgfSBmcm9tICcuLi9lc2NhcGUvZXNjYXBlLWZvY3VzLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQXV0b0ZvY3VzQ29uZmlnLFxuICBGT0NVU19BVFRSLFxuICBQZXJzaXN0Rm9jdXNDb25maWcsXG59IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9Gb2N1c1NlcnZpY2UgZXh0ZW5kcyBFc2NhcGVGb2N1c1NlcnZpY2Uge1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgZmlyc3QgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnQgb2YgdGhlIGhvc3QgZWxlbWVudC5cbiAgICovXG4gIGZpbmRGaXJzdEZvY3VzYWJsZShcbiAgICBob3N0OiBIVE1MRWxlbWVudCxcbiAgICBjb25maWc6IEF1dG9Gb2N1c0NvbmZpZyA9IHsgYXV0b2ZvY3VzOiB0cnVlIH1cbiAgKTogSFRNTEVsZW1lbnQge1xuICAgIGlmIChjb25maWc/LmF1dG9mb2N1cyA9PT0gJzpob3N0Jykge1xuICAgICAgcmV0dXJuIGhvc3Q7XG4gICAgfSBlbHNlIGlmICh0aGlzLmhhc1BlcnNpc3RlZEZvY3VzKGhvc3QsIGNvbmZpZykpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFBlcnNpc3RlZChob3N0LCB0aGlzLmdldFBlcnNpc3RlbmNlR3JvdXAoaG9zdCwgY29uZmlnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdEZvY3VzVXRpbC5maW5kRmlyc3RGb2N1c2FibGUoaG9zdCwgY29uZmlnKSB8fCBob3N0O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBhbnkgb2YgdGhlIGZvY3VzYWJlIGNoaWxkIGVsZW1lbnRzIGlzIGZvY3VzZWQuXG4gICAqL1xuICBoYXNQZXJzaXN0ZWRGb2N1cyhob3N0OiBIVE1MRWxlbWVudCwgY29uZmlnOiBQZXJzaXN0Rm9jdXNDb25maWcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmdldFBlcnNpc3RlZChob3N0LCB0aGlzLmdldFBlcnNpc3RlbmNlR3JvdXAoaG9zdCwgY29uZmlnKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZWxlbWVudCB0aGF0IGhhcyBhIHBlcnNpc3RlZCBmb2N1cyBzdGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIGhvc3QgdGhlIGBIVE1MRWxlbWVudGAgdXNlZCB0byBxdWVyeSBmb3IgZm9jdXNhYmxlIGNoaWxkcmVuXG4gICAqIEBwYXJhbSBncm91cCB0aGUgb3B0aW9uYWwgZ3JvdXAgZm9yIHRoZSBwZXJzaXN0ZW50IHN0YXRlLCB0byBzZXBhcmF0ZSBkaWZmZXJlbnQgZm9jdXNcbiAgICogICBncm91cHMgYW5kIHJlbWFpbiB0aGUgcGVyc2lzdGFuY2VcbiAgICovXG4gIHByb3RlY3RlZCBnZXRQZXJzaXN0ZWQoaG9zdDogSFRNTEVsZW1lbnQsIGdyb3VwPzogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIGlmICghdGhpcy5nZXQoZ3JvdXApKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZvY3Vzc2VkID0gQXJyYXkuZnJvbShcbiAgICAgIGhvc3QucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgYFske0ZPQ1VTX0FUVFJ9PScke3RoaXMuZ2V0KGdyb3VwKX0nXWBcbiAgICAgICkgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD5cbiAgICApO1xuICAgIHJldHVybiBmb2N1c3NlZC5sZW5ndGggPiAwID8gZm9jdXNzZWRbMF0gOiBudWxsO1xuICB9XG59XG4iXX0=