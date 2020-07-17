import { __decorate } from "tslib";
import { Directive, Input, OnDestroy, OnInit, TemplateRef, } from '@angular/core';
import { FeatureConfigService } from '@spartacus/core';
import { OutletService } from '../outlet.service';
var OutletRefDirective = /** @class */ (function () {
    function OutletRefDirective(tpl, outletService, features) {
        this.tpl = tpl;
        this.outletService = outletService;
        this.features = features;
    }
    OutletRefDirective.prototype.ngOnInit = function () {
        this.outletService.add(this.cxOutletRef, this.tpl, this.cxOutletPos);
    };
    OutletRefDirective.prototype.ngOnDestroy = function () {
        var _a;
        if ((_a = this.features) === null || _a === void 0 ? void 0 : _a.isLevel('2.1')) {
            this.outletService.remove(this.cxOutletRef, this.cxOutletPos, this.tpl);
        }
    };
    OutletRefDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: OutletService },
        { type: FeatureConfigService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQtcmVmL291dGxldC1yZWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLbEQ7SUFnQkUsNEJBQ1UsR0FBcUIsRUFDckIsYUFBNEIsRUFDNUIsUUFBK0I7UUFGL0IsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsYUFBUSxHQUFSLFFBQVEsQ0FBdUI7SUFDdEMsQ0FBQztJQUVKLHFDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCx3Q0FBVyxHQUFYOztRQUNFLFVBQUksSUFBSSxDQUFDLFFBQVEsMENBQUUsT0FBTyxDQUFDLEtBQUssR0FBRztZQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pFO0lBQ0gsQ0FBQzs7Z0JBYmMsV0FBVztnQkFDRCxhQUFhO2dCQUNqQixvQkFBb0I7O0lBakJ6QztRQURDLEtBQUssRUFBRTsyREFDWTtJQUVwQjtRQURDLEtBQUssRUFBRTsyREFDb0I7SUFKakIsa0JBQWtCO1FBSDlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1NBQzFCLENBQUM7T0FDVyxrQkFBa0IsQ0ErQjlCO0lBQUQseUJBQUM7Q0FBQSxBQS9CRCxJQStCQztTQS9CWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0UG9zaXRpb24gfSBmcm9tICcuLi9vdXRsZXQubW9kZWwnO1xuaW1wb3J0IHsgT3V0bGV0U2VydmljZSB9IGZyb20gJy4uL291dGxldC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4T3V0bGV0UmVmXScsXG59KVxuZXhwb3J0IGNsYXNzIE91dGxldFJlZkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgY3hPdXRsZXRSZWY6IHN0cmluZztcbiAgQElucHV0KClcbiAgY3hPdXRsZXRQb3M6IE91dGxldFBvc2l0aW9uO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAyLjEsIHNlZSAjODIwMVxuICAgKi9cbiAgY29uc3RydWN0b3IodHBsOiBUZW1wbGF0ZVJlZjxhbnk+LCBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlKTtcbiAgY29uc3RydWN0b3IoXG4gICAgdHBsOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2UsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBmZWF0dXJlczogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0cGw6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmVhdHVyZXM/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vdXRsZXRTZXJ2aWNlLmFkZCh0aGlzLmN4T3V0bGV0UmVmLCB0aGlzLnRwbCwgdGhpcy5jeE91dGxldFBvcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5mZWF0dXJlcz8uaXNMZXZlbCgnMi4xJykpIHtcbiAgICAgIHRoaXMub3V0bGV0U2VydmljZS5yZW1vdmUodGhpcy5jeE91dGxldFJlZiwgdGhpcy5jeE91dGxldFBvcywgdGhpcy50cGwpO1xuICAgIH1cbiAgfVxufVxuIl19