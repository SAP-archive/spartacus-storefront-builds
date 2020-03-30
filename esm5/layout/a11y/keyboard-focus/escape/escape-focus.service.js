import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { PersistFocusService } from '../persist/persist-focus.service';
import { SelectFocusUtility } from '../services/select-focus.util';
import * as i0 from "@angular/core";
import * as i1 from "../services/select-focus.util";
var EscapeFocusService = /** @class */ (function (_super) {
    __extends(EscapeFocusService, _super);
    function EscapeFocusService(selectFocusUtil) {
        var _this = _super.call(this) || this;
        _this.selectFocusUtil = selectFocusUtil;
        return _this;
    }
    EscapeFocusService.prototype.shouldFocus = function (config) {
        return !!(config === null || config === void 0 ? void 0 : config.focusOnEscape);
    };
    EscapeFocusService.prototype.handleEscape = function (host, config, event) {
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
    };
    EscapeFocusService.ctorParameters = function () { return [
        { type: SelectFocusUtility }
    ]; };
    EscapeFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EscapeFocusService_Factory() { return new EscapeFocusService(i0.ɵɵinject(i1.SelectFocusUtility)); }, token: EscapeFocusService, providedIn: "root" });
    EscapeFocusService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], EscapeFocusService);
    return EscapeFocusService;
}(PersistFocusService));
export { EscapeFocusService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlLWZvY3VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9lc2NhcGUvZXNjYXBlLWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7OztBQUtuRTtJQUF3QyxzQ0FBbUI7SUFDekQsNEJBQXNCLGVBQW1DO1FBQXpELFlBQ0UsaUJBQU8sU0FDUjtRQUZxQixxQkFBZSxHQUFmLGVBQWUsQ0FBb0I7O0lBRXpELENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksTUFBeUI7UUFDbkMsT0FBTyxDQUFDLEVBQUMsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLGFBQWEsQ0FBQSxDQUFDO0lBQ2pDLENBQUM7SUFFRCx5Q0FBWSxHQUFaLFVBQ0UsSUFBaUIsRUFDakIsTUFBeUIsRUFDekIsS0FBb0I7O1FBRXBCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM1QixJQUFJLElBQUksS0FBSyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ3BDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLElBQUksTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLG1CQUFtQixFQUFFO29CQUMvQixNQUFBLElBQUksQ0FBQyxlQUFlO3lCQUNqQixrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsMENBQzVDLEtBQUssR0FBRztpQkFDYjthQUNGO1NBQ0Y7SUFDSCxDQUFDOztnQkExQnNDLGtCQUFrQjs7O0lBRDlDLGtCQUFrQjtRQUg5QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csa0JBQWtCLENBNEI5Qjs2QkFwQ0Q7Q0FvQ0MsQUE1QkQsQ0FBd0MsbUJBQW1CLEdBNEIxRDtTQTVCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFc2NhcGVGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IFBlcnNpc3RGb2N1c1NlcnZpY2UgfSBmcm9tICcuLi9wZXJzaXN0L3BlcnNpc3QtZm9jdXMuc2VydmljZSc7XG5pbXBvcnQgeyBTZWxlY3RGb2N1c1V0aWxpdHkgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZWxlY3QtZm9jdXMudXRpbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBFc2NhcGVGb2N1c1NlcnZpY2UgZXh0ZW5kcyBQZXJzaXN0Rm9jdXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNlbGVjdEZvY3VzVXRpbDogU2VsZWN0Rm9jdXNVdGlsaXR5KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHNob3VsZEZvY3VzKGNvbmZpZzogRXNjYXBlRm9jdXNDb25maWcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFjb25maWc/LmZvY3VzT25Fc2NhcGU7XG4gIH1cblxuICBoYW5kbGVFc2NhcGUoXG4gICAgaG9zdDogSFRNTEVsZW1lbnQsXG4gICAgY29uZmlnOiBFc2NhcGVGb2N1c0NvbmZpZyxcbiAgICBldmVudDogS2V5Ym9hcmRFdmVudFxuICApOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG91bGRGb2N1cyhjb25maWcpKSB7XG4gICAgICBpZiAoaG9zdCAhPT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgIGhvc3QuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjb25maWc/LmZvY3VzT25Eb3VibGVFc2NhcGUpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdEZvY3VzVXRpbFxuICAgICAgICAgICAgLmZpbmRGaXJzdEZvY3VzYWJsZShob3N0LCB7IGF1dG9mb2N1czogdHJ1ZSB9KVxuICAgICAgICAgICAgPy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=