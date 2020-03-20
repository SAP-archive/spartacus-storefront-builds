import { __decorate, __extends } from "tslib";
import { Directive, ElementRef, HostListener } from '@angular/core';
import { AutoFocusDirective } from '../autofocus/auto-focus.directive';
import { TabFocusService } from './tab-focus.service';
/**
 * Directive to move the focus of ("locked") child elements. This is useful
 * for a nested list of tabs, carousel slides or any group of elements that
 * requires horizontal navigation.
 */
var TabFocusDirective = /** @class */ (function (_super) {
    __extends(TabFocusDirective, _super);
    function TabFocusDirective(elementRef, service) {
        var _this = _super.call(this, elementRef, service) || this;
        _this.elementRef = elementRef;
        _this.service = service;
        /** `tab` defaults to true if the directive `cxTabFocus` is used. */
        _this.defaultConfig = { tab: true };
        // @Input('cxTabFocus')
        _this.config = {};
        return _this;
    }
    TabFocusDirective.prototype.handleNextTab = function (event) {
        var _a;
        if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.tab) {
            this.service.moveTab(this.host, this.config, 1 /* NEXT */, event);
        }
    };
    TabFocusDirective.prototype.handlePreviousTab = function (event) {
        var _a;
        if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.tab) {
            this.service.moveTab(this.host, this.config, -1 /* PREV */, event);
        }
    };
    TabFocusDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: TabFocusService }
    ]; };
    __decorate([
        HostListener('keydown.arrowRight', ['$event'])
    ], TabFocusDirective.prototype, "handleNextTab", null);
    __decorate([
        HostListener('keydown.arrowLeft', ['$event'])
    ], TabFocusDirective.prototype, "handlePreviousTab", null);
    TabFocusDirective = __decorate([
        Directive() // selector: '[cxTabFocus]'
    ], TabFocusDirective);
    return TabFocusDirective;
}(AutoFocusDirective));
export { TabFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWZvY3VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L2tleWJvYXJkLWZvY3VzL3RhYi90YWItZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXREOzs7O0dBSUc7QUFFSDtJQUF1QyxxQ0FBa0I7SUFxQnZELDJCQUNZLFVBQXNCLEVBQ3RCLE9BQXdCO1FBRnBDLFlBSUUsa0JBQU0sVUFBVSxFQUFFLE9BQU8sQ0FBQyxTQUMzQjtRQUpXLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQU8sR0FBUCxPQUFPLENBQWlCO1FBdEJwQyxvRUFBb0U7UUFDMUQsbUJBQWEsR0FBbUIsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFFeEQsdUJBQXVCO1FBQ2IsWUFBTSxHQUFtQixFQUFFLENBQUM7O0lBcUJ0QyxDQUFDO0lBbEJELHlDQUFhLEdBQWIsVUFBYyxLQUFvQjs7UUFDaEMsVUFBSSxJQUFJLENBQUMsTUFBTSwwQ0FBRSxHQUFHLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxnQkFBbUIsS0FBSyxDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDO0lBR0QsNkNBQWlCLEdBQWpCLFVBQWtCLEtBQW9COztRQUNwQyxVQUFJLElBQUksQ0FBQyxNQUFNLDBDQUFFLEdBQUcsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLGlCQUFtQixLQUFLLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7O2dCQUd1QixVQUFVO2dCQUNiLGVBQWU7O0lBZnBDO1FBREMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7MERBSzlDO0lBR0Q7UUFEQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs4REFLN0M7SUFuQlUsaUJBQWlCO1FBRDdCLFNBQVMsRUFBRSxDQUFDLDJCQUEyQjtPQUMzQixpQkFBaUIsQ0EyQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTNCRCxDQUF1QyxrQkFBa0IsR0EyQnhEO1NBM0JZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRvRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi9hdXRvZm9jdXMvYXV0by1mb2N1cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTU9WRV9GT0NVUywgVGFiRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBUYWJGb2N1c1NlcnZpY2UgfSBmcm9tICcuL3RhYi1mb2N1cy5zZXJ2aWNlJztcblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gbW92ZSB0aGUgZm9jdXMgb2YgKFwibG9ja2VkXCIpIGNoaWxkIGVsZW1lbnRzLiBUaGlzIGlzIHVzZWZ1bFxuICogZm9yIGEgbmVzdGVkIGxpc3Qgb2YgdGFicywgY2Fyb3VzZWwgc2xpZGVzIG9yIGFueSBncm91cCBvZiBlbGVtZW50cyB0aGF0XG4gKiByZXF1aXJlcyBob3Jpem9udGFsIG5hdmlnYXRpb24uXG4gKi9cbkBEaXJlY3RpdmUoKSAvLyBzZWxlY3RvcjogJ1tjeFRhYkZvY3VzXSdcbmV4cG9ydCBjbGFzcyBUYWJGb2N1c0RpcmVjdGl2ZSBleHRlbmRzIEF1dG9Gb2N1c0RpcmVjdGl2ZSB7XG4gIC8qKiBgdGFiYCBkZWZhdWx0cyB0byB0cnVlIGlmIHRoZSBkaXJlY3RpdmUgYGN4VGFiRm9jdXNgIGlzIHVzZWQuICovXG4gIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBUYWJGb2N1c0NvbmZpZyA9IHsgdGFiOiB0cnVlIH07XG5cbiAgLy8gQElucHV0KCdjeFRhYkZvY3VzJylcbiAgcHJvdGVjdGVkIGNvbmZpZzogVGFiRm9jdXNDb25maWcgPSB7fTtcblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmFycm93UmlnaHQnLCBbJyRldmVudCddKVxuICBoYW5kbGVOZXh0VGFiKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY29uZmlnPy50YWIpIHtcbiAgICAgIHRoaXMuc2VydmljZS5tb3ZlVGFiKHRoaXMuaG9zdCwgdGhpcy5jb25maWcsIE1PVkVfRk9DVVMuTkVYVCwgZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3dMZWZ0JywgWyckZXZlbnQnXSlcbiAgaGFuZGxlUHJldmlvdXNUYWIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5jb25maWc/LnRhYikge1xuICAgICAgdGhpcy5zZXJ2aWNlLm1vdmVUYWIodGhpcy5ob3N0LCB0aGlzLmNvbmZpZywgTU9WRV9GT0NVUy5QUkVWLCBldmVudCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IFRhYkZvY3VzU2VydmljZVxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBzZXJ2aWNlKTtcbiAgfVxufVxuIl19