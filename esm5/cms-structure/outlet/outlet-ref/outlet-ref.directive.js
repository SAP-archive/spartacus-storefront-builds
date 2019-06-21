/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, TemplateRef, Input } from '@angular/core';
import { OutletPosition } from '../outlet.model';
import { OutletService } from '../outlet.service';
var OutletRefDirective = /** @class */ (function () {
    function OutletRefDirective(tpl, outletService) {
        this.tpl = tpl;
        this.outletService = outletService;
    }
    /**
     * @return {?}
     */
    OutletRefDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.outletService.add(this.cxOutletRef, this.tpl, this.cxOutletPos);
    };
    OutletRefDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cxOutletRef]',
                },] }
    ];
    /** @nocollapse */
    OutletRefDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: OutletService }
    ]; };
    OutletRefDirective.propDecorators = {
        cxOutletRef: [{ type: Input }],
        cxOutletPos: [{ type: Input }]
    };
    return OutletRefDirective;
}());
export { OutletRefDirective };
if (false) {
    /** @type {?} */
    OutletRefDirective.prototype.cxOutletRef;
    /** @type {?} */
    OutletRefDirective.prototype.cxOutletPos;
    /**
     * @type {?}
     * @private
     */
    OutletRefDirective.prototype.tpl;
    /**
     * @type {?}
     * @private
     */
    OutletRefDirective.prototype.outletService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQtcmVmL291dGxldC1yZWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRDtJQVNFLDRCQUNVLEdBQXFCLEVBQ3JCLGFBQTRCO1FBRDVCLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ25DLENBQUM7Ozs7SUFFSixxQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7aUJBQzFCOzs7O2dCQVBtQixXQUFXO2dCQUd0QixhQUFhOzs7OEJBTW5CLEtBQUs7OEJBRUwsS0FBSzs7SUFXUix5QkFBQztDQUFBLEFBakJELElBaUJDO1NBZFksa0JBQWtCOzs7SUFDN0IseUNBQ29COztJQUNwQix5Q0FDNEI7Ozs7O0lBRzFCLGlDQUE2Qjs7Ozs7SUFDN0IsMkNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdXRsZXRQb3NpdGlvbiB9IGZyb20gJy4uL291dGxldC5tb2RlbCc7XG5pbXBvcnQgeyBPdXRsZXRTZXJ2aWNlIH0gZnJvbSAnLi4vb3V0bGV0LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hPdXRsZXRSZWZdJyxcbn0pXG5leHBvcnQgY2xhc3MgT3V0bGV0UmVmRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgY3hPdXRsZXRSZWY6IHN0cmluZztcbiAgQElucHV0KClcbiAgY3hPdXRsZXRQb3M6IE91dGxldFBvc2l0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdHBsOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vdXRsZXRTZXJ2aWNlLmFkZCh0aGlzLmN4T3V0bGV0UmVmLCB0aGlzLnRwbCwgdGhpcy5jeE91dGxldFBvcyk7XG4gIH1cbn1cbiJdfQ==