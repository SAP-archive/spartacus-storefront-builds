import { __decorate, __extends } from "tslib";
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
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
        Input('cxTabFocus')
    ], TabFocusDirective.prototype, "config", void 0);
    __decorate([
        HostListener('keydown.arrowRight', ['$event'])
    ], TabFocusDirective.prototype, "handleNextTab", null);
    __decorate([
        HostListener('keydown.arrowLeft', ['$event'])
    ], TabFocusDirective.prototype, "handlePreviousTab", null);
    TabFocusDirective = __decorate([
        Directive({
            selector: '[cxTabFocus]',
        })
    ], TabFocusDirective);
    return TabFocusDirective;
}(AutoFocusDirective));
export { TabFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWZvY3VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L2tleWJvYXJkLWZvY3VzL3RhYi90YWItZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RDs7OztHQUlHO0FBSUg7SUFBdUMscUNBQWtCO0lBb0J2RCwyQkFDWSxVQUFzQixFQUN0QixPQUF3QjtRQUZwQyxZQUlFLGtCQUFNLFVBQVUsRUFBRSxPQUFPLENBQUMsU0FDM0I7UUFKVyxnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFPLEdBQVAsT0FBTyxDQUFpQjtRQXJCcEMsb0VBQW9FO1FBQzFELG1CQUFhLEdBQW1CLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO1FBRXpCLFlBQU0sR0FBbUIsRUFBRSxDQUFDOztJQXFCM0QsQ0FBQztJQWxCRCx5Q0FBYSxHQUFiLFVBQWMsS0FBb0I7O1FBQ2hDLFVBQUksSUFBSSxDQUFDLE1BQU0sMENBQUUsR0FBRyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sZ0JBQW1CLEtBQUssQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQztJQUdELDZDQUFpQixHQUFqQixVQUFrQixLQUFvQjs7UUFDcEMsVUFBSSxJQUFJLENBQUMsTUFBTSwwQ0FBRSxHQUFHLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxpQkFBbUIsS0FBSyxDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDOztnQkFHdUIsVUFBVTtnQkFDYixlQUFlOztJQWxCZjtRQUFwQixLQUFLLENBQUMsWUFBWSxDQUFDO3FEQUF1QztJQUczRDtRQURDLFlBQVksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzBEQUs5QztJQUdEO1FBREMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7OERBSzdDO0lBbEJVLGlCQUFpQjtRQUg3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztTQUN6QixDQUFDO09BQ1csaUJBQWlCLENBMEI3QjtJQUFELHdCQUFDO0NBQUEsQUExQkQsQ0FBdUMsa0JBQWtCLEdBMEJ4RDtTQTFCWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dG9Gb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4uL2F1dG9mb2N1cy9hdXRvLWZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNT1ZFX0ZPQ1VTLCBUYWJGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IFRhYkZvY3VzU2VydmljZSB9IGZyb20gJy4vdGFiLWZvY3VzLnNlcnZpY2UnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBtb3ZlIHRoZSBmb2N1cyBvZiAoXCJsb2NrZWRcIikgY2hpbGQgZWxlbWVudHMuIFRoaXMgaXMgdXNlZnVsXG4gKiBmb3IgYSBuZXN0ZWQgbGlzdCBvZiB0YWJzLCBjYXJvdXNlbCBzbGlkZXMgb3IgYW55IGdyb3VwIG9mIGVsZW1lbnRzIHRoYXRcbiAqIHJlcXVpcmVzIGhvcml6b250YWwgbmF2aWdhdGlvbi5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4VGFiRm9jdXNdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFiRm9jdXNEaXJlY3RpdmUgZXh0ZW5kcyBBdXRvRm9jdXNEaXJlY3RpdmUge1xuICAvKiogYHRhYmAgZGVmYXVsdHMgdG8gdHJ1ZSBpZiB0aGUgZGlyZWN0aXZlIGBjeFRhYkZvY3VzYCBpcyB1c2VkLiAqL1xuICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogVGFiRm9jdXNDb25maWcgPSB7IHRhYjogdHJ1ZSB9O1xuXG4gIEBJbnB1dCgnY3hUYWJGb2N1cycpIHByb3RlY3RlZCBjb25maWc6IFRhYkZvY3VzQ29uZmlnID0ge307XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd1JpZ2h0JywgWyckZXZlbnQnXSlcbiAgaGFuZGxlTmV4dFRhYihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLmNvbmZpZz8udGFiKSB7XG4gICAgICB0aGlzLnNlcnZpY2UubW92ZVRhYih0aGlzLmhvc3QsIHRoaXMuY29uZmlnLCBNT1ZFX0ZPQ1VTLk5FWFQsIGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmFycm93TGVmdCcsIFsnJGV2ZW50J10pXG4gIGhhbmRsZVByZXZpb3VzVGFiKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY29uZmlnPy50YWIpIHtcbiAgICAgIHRoaXMuc2VydmljZS5tb3ZlVGFiKHRoaXMuaG9zdCwgdGhpcy5jb25maWcsIE1PVkVfRk9DVVMuUFJFViwgZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBUYWJGb2N1c1NlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgc2VydmljZSk7XG4gIH1cbn1cbiJdfQ==