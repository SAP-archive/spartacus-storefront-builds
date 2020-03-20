import { __decorate, __extends } from "tslib";
import { Directive, ElementRef, OnInit } from '@angular/core';
import { BaseFocusService } from '../base/base-focus.service';
import { VisibleFocusDirective } from '../visible/visible-focus.directive';
var BlockFocusDirective = /** @class */ (function (_super) {
    __extends(BlockFocusDirective, _super);
    function BlockFocusDirective(elementRef, service) {
        var _this = _super.call(this, elementRef, service) || this;
        _this.elementRef = elementRef;
        _this.service = service;
        _this.defaultConfig = { block: true };
        // @Input('cxBlockFocus')
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
    BlockFocusDirective = __decorate([
        Directive()
        // { selector: '[cxBlockFocus]' }
    ], BlockFocusDirective);
    return BlockFocusDirective;
}(VisibleFocusDirective));
export { BlockFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stZm9jdXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvYmxvY2svYmxvY2stZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFJM0U7SUFBeUMsdUNBQXFCO0lBTzVELDZCQUNZLFVBQXNCLEVBQ3RCLE9BQXlCO1FBRnJDLFlBSUUsa0JBQU0sVUFBVSxFQUFFLE9BQU8sQ0FBQyxTQUMzQjtRQUpXLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQU8sR0FBUCxPQUFPLENBQWtCO1FBUDNCLG1CQUFhLEdBQXFCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO1FBRTVELHlCQUF5QjtRQUNmLFlBQU0sR0FBcUIsRUFBRSxDQUFDOztJQU94QyxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNFLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7O2dCQVh1QixVQUFVO2dCQUNiLGdCQUFnQjs7SUFUMUIsbUJBQW1CO1FBRi9CLFNBQVMsRUFBRTtRQUNaLGlDQUFpQztPQUNwQixtQkFBbUIsQ0FvQi9CO0lBQUQsMEJBQUM7Q0FBQSxBQXBCRCxDQUF5QyxxQkFBcUIsR0FvQjdEO1NBcEJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi4vYmFzZS9iYXNlLWZvY3VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQmxvY2tGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IFZpc2libGVGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4uL3Zpc2libGUvdmlzaWJsZS1mb2N1cy5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKClcbi8vIHsgc2VsZWN0b3I6ICdbY3hCbG9ja0ZvY3VzXScgfVxuZXhwb3J0IGNsYXNzIEJsb2NrRm9jdXNEaXJlY3RpdmUgZXh0ZW5kcyBWaXNpYmxlRm9jdXNEaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogQmxvY2tGb2N1c0NvbmZpZyA9IHsgYmxvY2s6IHRydWUgfTtcblxuICAvLyBASW5wdXQoJ2N4QmxvY2tGb2N1cycpXG4gIHByb3RlY3RlZCBjb25maWc6IEJsb2NrRm9jdXNDb25maWcgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogQmFzZUZvY3VzU2VydmljZVxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBzZXJ2aWNlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgaWYgKHRoaXMuY29uZmlnLmJsb2NrKSB7XG4gICAgICB0aGlzLnRhYmluZGV4ID0gLTE7XG4gICAgfVxuICB9XG59XG4iXX0=