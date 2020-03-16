import { __decorate, __extends } from "tslib";
import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, } from '@angular/core';
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
        Input('cxEscFocus')
    ], EscapeFocusDirective.prototype, "config", void 0);
    __decorate([
        Output()
    ], EscapeFocusDirective.prototype, "esc", void 0);
    __decorate([
        HostListener('keydown.escape', ['$event'])
    ], EscapeFocusDirective.prototype, "handleEscape", null);
    EscapeFocusDirective = __decorate([
        Directive({
            selector: '[cxEscFocus]',
        })
    ], EscapeFocusDirective);
    return EscapeFocusDirective;
}(PersistFocusDirective));
export { EscapeFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlLWZvY3VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L2tleWJvYXJkLWZvY3VzL2VzY2FwZS9lc2NhcGUtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTVEOzs7Ozs7R0FNRztBQUlIO0lBQTBDLHdDQUFxQjtJQXFCN0QsOEJBQ1ksVUFBc0IsRUFDdEIsT0FBMkI7UUFGdkMsWUFJRSxrQkFBTSxVQUFVLEVBQUUsT0FBTyxDQUFDLFNBQzNCO1FBSlcsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFyQjdCLG1CQUFhLEdBQXNCLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDO1FBSzNELFNBQUcsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDOztJQW1CNUMsQ0FBQztJQWpCRDs7O09BR0c7SUFFSCwyQ0FBWSxHQUFaLFVBQWEsS0FBb0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQVNELHVDQUFRLEdBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDNUI7UUFDRCxpQkFBTSxRQUFRLFdBQUUsQ0FBQztJQUNuQixDQUFDOztnQkFYdUIsVUFBVTtnQkFDYixrQkFBa0I7O0lBbEJsQjtRQUFwQixLQUFLLENBQUMsWUFBWSxDQUFDO3dEQUFxQztJQUUvQztRQUFULE1BQU0sRUFBRTtxREFBbUM7SUFPNUM7UUFEQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs0REFNMUM7SUFuQlUsb0JBQW9CO1FBSGhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1NBQ3pCLENBQUM7T0FDVyxvQkFBb0IsQ0FrQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQWxDRCxDQUEwQyxxQkFBcUIsR0FrQzlEO1NBbENZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFc2NhcGVGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IFBlcnNpc3RGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4uL3BlcnNpc3QvcGVyc2lzdC1mb2N1cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRXNjYXBlRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi9lc2NhcGUtZm9jdXMuc2VydmljZSc7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIGZvY3VzIHRoZSBob3N0IGVsZW1lbnQgd2hlbmV2ZXIgdGhlIGBlc2NhcGVgIGtleSBpcyBjYXB0dXJlZC5cbiAqIFVpRXZlbnRzIGJ1YmJsZSB1cCBieSBuYXR1cmUsIHdoaWNoIGlzIHdoeSB0aGUgYGN4RXNjR3JvdXBgIGNhbiBiZSB1c2VkXG4gKiBvbiBhIHRyZWUgb2YgZWxlbWVudHMuIEVhY2ggdGltZSB0aGUgZXNjYXBlIGtleSBpcyB1c2VkLCB0aGUgZm9jdXMgd2lsbFxuICogbW92ZSB1cCBpbiB0aGUgRE9NIHRyZWUuXG4gKlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hFc2NGb2N1c10nLFxufSlcbmV4cG9ydCBjbGFzcyBFc2NhcGVGb2N1c0RpcmVjdGl2ZSBleHRlbmRzIFBlcnNpc3RGb2N1c0RpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBFc2NhcGVGb2N1c0NvbmZpZyA9IHsgZm9jdXNPbkVzY2FwZTogdHJ1ZSB9O1xuXG4gIC8qKiBPcHRpb25hbCBjb25maWd1cmF0aW9uIHRvIGRyaXZlIGJlaGF2aW91ciBvZiB0aGUgZGlyZWN0aXZlLiAqL1xuICBASW5wdXQoJ2N4RXNjRm9jdXMnKSBwcm90ZWN0ZWQgY29uZmlnOiBFc2NhcGVGb2N1c0NvbmZpZztcblxuICBAT3V0cHV0KCkgZXNjID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSBlc2NhcGUga2V5IGV2ZW50LlxuICAgKiBAcGFyYW0gZXZlbnQgdGhlIG5hdGl2ZSBrZXlib2FyZCBldmVudCB3aGljaCBjb250YWlucyB0aGUgZXNjYXBlIGtleWRvd24gZXZlbnRcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZXNjYXBlJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlRXNjYXBlKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VydmljZS5zaG91bGRGb2N1cyh0aGlzLmNvbmZpZykpIHtcbiAgICAgIHRoaXMuc2VydmljZS5oYW5kbGVFc2NhcGUodGhpcy5ob3N0LCB0aGlzLmNvbmZpZywgZXZlbnQpO1xuICAgIH1cbiAgICB0aGlzLmVzYy5lbWl0KHRoaXMuc2VydmljZS5zaG91bGRGb2N1cyh0aGlzLmNvbmZpZykpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IEVzY2FwZUZvY3VzU2VydmljZVxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBzZXJ2aWNlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnNlcnZpY2Uuc2hvdWxkRm9jdXModGhpcy5jb25maWcpKSB7XG4gICAgICB0aGlzLnJlcXVpcmVkVGFiaW5kZXggPSAtMTtcbiAgICB9XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxufVxuIl19