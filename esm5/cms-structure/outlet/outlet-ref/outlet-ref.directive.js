import { __decorate } from "tslib";
import { Directive, TemplateRef, Input, OnInit } from '@angular/core';
import { OutletService } from '../outlet.service';
var OutletRefDirective = /** @class */ (function () {
    function OutletRefDirective(tpl, outletService) {
        this.tpl = tpl;
        this.outletService = outletService;
    }
    OutletRefDirective.prototype.ngOnInit = function () {
        this.outletService.add(this.cxOutletRef, this.tpl, this.cxOutletPos);
    };
    OutletRefDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: OutletService }
    ]; };
    __decorate([
        Input()
    ], OutletRefDirective.prototype, "cxOutletRef", void 0);
    __decorate([
        Input()
    ], OutletRefDirective.prototype, "cxOutletPos", void 0);
    OutletRefDirective = __decorate([
        Directive({
            selector: '[cxOutletRef]',
        })
    ], OutletRefDirective);
    return OutletRefDirective;
}());
export { OutletRefDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQtcmVmL291dGxldC1yZWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUtsRDtJQU1FLDRCQUNVLEdBQXFCLEVBQ3JCLGFBQTRCO1FBRDVCLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ25DLENBQUM7SUFFSixxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RSxDQUFDOztnQkFOYyxXQUFXO2dCQUNELGFBQWE7O0lBTnRDO1FBREMsS0FBSyxFQUFFOzJEQUNZO0lBRXBCO1FBREMsS0FBSyxFQUFFOzJEQUNvQjtJQUpqQixrQkFBa0I7UUFIOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7U0FDMUIsQ0FBQztPQUNXLGtCQUFrQixDQWM5QjtJQUFELHlCQUFDO0NBQUEsQUFkRCxJQWNDO1NBZFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdXRsZXRQb3NpdGlvbiB9IGZyb20gJy4uL291dGxldC5tb2RlbCc7XG5pbXBvcnQgeyBPdXRsZXRTZXJ2aWNlIH0gZnJvbSAnLi4vb3V0bGV0LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hPdXRsZXRSZWZdJyxcbn0pXG5leHBvcnQgY2xhc3MgT3V0bGV0UmVmRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgY3hPdXRsZXRSZWY6IHN0cmluZztcbiAgQElucHV0KClcbiAgY3hPdXRsZXRQb3M6IE91dGxldFBvc2l0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdHBsOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vdXRsZXRTZXJ2aWNlLmFkZCh0aGlzLmN4T3V0bGV0UmVmLCB0aGlzLnRwbCwgdGhpcy5jeE91dGxldFBvcyk7XG4gIH1cbn1cbiJdfQ==