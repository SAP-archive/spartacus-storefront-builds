import { __decorate, __extends } from "tslib";
import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { BaseFocusDirective } from '../base/base-focus.directive';
import { BaseFocusService } from '../base/base-focus.service';
var BlockFocusDirective = /** @class */ (function (_super) {
    __extends(BlockFocusDirective, _super);
    function BlockFocusDirective(elementRef, service) {
        var _this = _super.call(this, elementRef, service) || this;
        _this.elementRef = elementRef;
        _this.service = service;
        _this.defaultConfig = { block: true };
        _this.config = {};
        return _this;
    }
    BlockFocusDirective.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.config.block) {
            this.tabindex = -1;
        }
    };
    BlockFocusDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: BaseFocusService }
    ]; };
    __decorate([
        Input('cxBlockFocus')
    ], BlockFocusDirective.prototype, "config", void 0);
    BlockFocusDirective = __decorate([
        Directive({
            selector: '[cxBlockFocus]',
        })
    ], BlockFocusDirective);
    return BlockFocusDirective;
}(BaseFocusDirective));
export { BlockFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stZm9jdXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvYmxvY2svYmxvY2stZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBTTlEO0lBQXlDLHVDQUFrQjtJQUt6RCw2QkFDWSxVQUFzQixFQUN0QixPQUF5QjtRQUZyQyxZQUlFLGtCQUFNLFVBQVUsRUFBRSxPQUFPLENBQUMsU0FDM0I7UUFKVyxnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFPLEdBQVAsT0FBTyxDQUFrQjtRQU4zQixtQkFBYSxHQUFxQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUUzQixZQUFNLEdBQXFCLEVBQUUsQ0FBQzs7SUFPL0QsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDRSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUNqQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDOztnQkFYdUIsVUFBVTtnQkFDYixnQkFBZ0I7O0lBSmQ7UUFBdEIsS0FBSyxDQUFDLGNBQWMsQ0FBQzt1REFBeUM7SUFIcEQsbUJBQW1CO1FBSC9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7U0FDM0IsQ0FBQztPQUNXLG1CQUFtQixDQWtCL0I7SUFBRCwwQkFBQztDQUFBLEFBbEJELENBQXlDLGtCQUFrQixHQWtCMUQ7U0FsQlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi9iYXNlL2Jhc2UtZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEJhc2VGb2N1c1NlcnZpY2UgfSBmcm9tICcuLi9iYXNlL2Jhc2UtZm9jdXMuc2VydmljZSc7XG5pbXBvcnQgeyBCbG9ja0ZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hCbG9ja0ZvY3VzXScsXG59KVxuZXhwb3J0IGNsYXNzIEJsb2NrRm9jdXNEaXJlY3RpdmUgZXh0ZW5kcyBCYXNlRm9jdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogQmxvY2tGb2N1c0NvbmZpZyA9IHsgYmxvY2s6IHRydWUgfTtcblxuICBASW5wdXQoJ2N4QmxvY2tGb2N1cycpIHByb3RlY3RlZCBjb25maWc6IEJsb2NrRm9jdXNDb25maWcgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogQmFzZUZvY3VzU2VydmljZVxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBzZXJ2aWNlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgaWYgKHRoaXMuY29uZmlnLmJsb2NrKSB7XG4gICAgICB0aGlzLnRhYmluZGV4ID0gLTE7XG4gICAgfVxuICB9XG59XG4iXX0=