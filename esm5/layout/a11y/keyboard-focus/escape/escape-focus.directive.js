import { __decorate, __extends } from "tslib";
import { Directive, ElementRef, EventEmitter, HostListener, OnInit, Output, } from '@angular/core';
import { PersistFocusDirective } from '../persist/persist-focus.directive';
import { EscapeFocusService } from './escape-focus.service';
/**
 * Directive to focus the host element whenever the `escape` key is captured.
 * UiEvents bubble up by nature, which is why the `cxEscGroup` can be used
 * on a tree of elements. Each time the escape key is used, the focus will
 * move up in the DOM tree.
 *
 */
var EscapeFocusDirective = /** @class */ (function (_super) {
    __extends(EscapeFocusDirective, _super);
    function EscapeFocusDirective(elementRef, service) {
        var _this = _super.call(this, elementRef, service) || this;
        _this.elementRef = elementRef;
        _this.service = service;
        _this.defaultConfig = { focusOnEscape: true };
        _this.esc = new EventEmitter();
        return _this;
    }
    /**
     * Handles the escape key event.
     * @param event the native keyboard event which contains the escape keydown event
     */
    EscapeFocusDirective.prototype.handleEscape = function (event) {
        if (this.service.shouldFocus(this.config)) {
            this.service.handleEscape(this.host, this.config, event);
        }
        this.esc.emit(this.service.shouldFocus(this.config));
    };
    EscapeFocusDirective.prototype.ngOnInit = function () {
        if (this.service.shouldFocus(this.config)) {
            this.requiredTabindex = -1;
        }
        _super.prototype.ngOnInit.call(this);
    };
    EscapeFocusDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EscapeFocusService }
    ]; };
    __decorate([
        Output()
    ], EscapeFocusDirective.prototype, "esc", void 0);
    __decorate([
        HostListener('keydown.escape', ['$event'])
    ], EscapeFocusDirective.prototype, "handleEscape", null);
    EscapeFocusDirective = __decorate([
        Directive() // selector: '[cxEscFocus]',
    ], EscapeFocusDirective);
    return EscapeFocusDirective;
}(PersistFocusDirective));
export { EscapeFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlLWZvY3VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L2tleWJvYXJkLWZvY3VzL2VzY2FwZS9lc2NhcGUtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLE1BQU0sRUFDTixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDM0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQ7Ozs7OztHQU1HO0FBRUg7SUFBMEMsd0NBQXFCO0lBcUI3RCw4QkFDWSxVQUFzQixFQUN0QixPQUEyQjtRQUZ2QyxZQUlFLGtCQUFNLFVBQVUsRUFBRSxPQUFPLENBQUMsU0FDM0I7UUFKVyxnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFPLEdBQVAsT0FBTyxDQUFvQjtRQXJCN0IsbUJBQWEsR0FBc0IsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFLM0QsU0FBRyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7O0lBbUI1QyxDQUFDO0lBakJEOzs7T0FHRztJQUVILDJDQUFZLEdBQVosVUFBYSxLQUFvQjtRQUMvQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDMUQ7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBU0QsdUNBQVEsR0FBUjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM1QjtRQUNELGlCQUFNLFFBQVEsV0FBRSxDQUFDO0lBQ25CLENBQUM7O2dCQVh1QixVQUFVO2dCQUNiLGtCQUFrQjs7SUFoQjdCO1FBQVQsTUFBTSxFQUFFO3FEQUFtQztJQU81QztRQURDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzREQU0xQztJQW5CVSxvQkFBb0I7UUFEaEMsU0FBUyxFQUFFLENBQUMsNEJBQTRCO09BQzVCLG9CQUFvQixDQWtDaEM7SUFBRCwyQkFBQztDQUFBLEFBbENELENBQTBDLHFCQUFxQixHQWtDOUQ7U0FsQ1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXNjYXBlRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBQZXJzaXN0Rm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi9wZXJzaXN0L3BlcnNpc3QtZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEVzY2FwZUZvY3VzU2VydmljZSB9IGZyb20gJy4vZXNjYXBlLWZvY3VzLnNlcnZpY2UnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBmb2N1cyB0aGUgaG9zdCBlbGVtZW50IHdoZW5ldmVyIHRoZSBgZXNjYXBlYCBrZXkgaXMgY2FwdHVyZWQuXG4gKiBVaUV2ZW50cyBidWJibGUgdXAgYnkgbmF0dXJlLCB3aGljaCBpcyB3aHkgdGhlIGBjeEVzY0dyb3VwYCBjYW4gYmUgdXNlZFxuICogb24gYSB0cmVlIG9mIGVsZW1lbnRzLiBFYWNoIHRpbWUgdGhlIGVzY2FwZSBrZXkgaXMgdXNlZCwgdGhlIGZvY3VzIHdpbGxcbiAqIG1vdmUgdXAgaW4gdGhlIERPTSB0cmVlLlxuICpcbiAqL1xuQERpcmVjdGl2ZSgpIC8vIHNlbGVjdG9yOiAnW2N4RXNjRm9jdXNdJyxcbmV4cG9ydCBjbGFzcyBFc2NhcGVGb2N1c0RpcmVjdGl2ZSBleHRlbmRzIFBlcnNpc3RGb2N1c0RpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBFc2NhcGVGb2N1c0NvbmZpZyA9IHsgZm9jdXNPbkVzY2FwZTogdHJ1ZSB9O1xuXG4gIC8vIEBJbnB1dCgnY3hFc2NGb2N1cycpXG4gIHByb3RlY3RlZCBjb25maWc6IEVzY2FwZUZvY3VzQ29uZmlnO1xuXG4gIEBPdXRwdXQoKSBlc2MgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIGVzY2FwZSBrZXkgZXZlbnQuXG4gICAqIEBwYXJhbSBldmVudCB0aGUgbmF0aXZlIGtleWJvYXJkIGV2ZW50IHdoaWNoIGNvbnRhaW5zIHRoZSBlc2NhcGUga2V5ZG93biBldmVudFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lc2NhcGUnLCBbJyRldmVudCddKVxuICBoYW5kbGVFc2NhcGUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZXJ2aWNlLnNob3VsZEZvY3VzKHRoaXMuY29uZmlnKSkge1xuICAgICAgdGhpcy5zZXJ2aWNlLmhhbmRsZUVzY2FwZSh0aGlzLmhvc3QsIHRoaXMuY29uZmlnLCBldmVudCk7XG4gICAgfVxuICAgIHRoaXMuZXNjLmVtaXQodGhpcy5zZXJ2aWNlLnNob3VsZEZvY3VzKHRoaXMuY29uZmlnKSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogRXNjYXBlRm9jdXNTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHNlcnZpY2UpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuc2VydmljZS5zaG91bGRGb2N1cyh0aGlzLmNvbmZpZykpIHtcbiAgICAgIHRoaXMucmVxdWlyZWRUYWJpbmRleCA9IC0xO1xuICAgIH1cbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG59XG4iXX0=