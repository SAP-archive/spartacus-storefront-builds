/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { ICON_TYPE } from '../../../misc/icon';
/** @enum {string} */
const ViewModes = {
    Grid: 'grid',
    List: 'list',
};
export { ViewModes };
export class ProductViewComponent {
    constructor() {
        this.iconTypes = ICON_TYPE;
        this.modeChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get buttonClass() {
        return `cx-product-${this.mode}`;
    }
    /**
     * @return {?}
     */
    get viewMode() {
        if (this.mode === 'list') {
            return this.iconTypes.LIST;
        }
        else if (this.mode === 'grid') {
            return this.iconTypes.GRID;
        }
    }
    /**
     * @return {?}
     */
    changeMode() {
        /** @type {?} */
        const newMode = this.mode === ViewModes.Grid ? ViewModes.List : ViewModes.Grid;
        this.modeChange.emit(newMode);
    }
}
ProductViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-view',
                template: "<div class=\"cx-product-layout\" (click)=\"changeMode()\">\n  <div [ngClass]=\"buttonClass\">\n    <cx-icon [type]=\"viewMode\"></cx-icon>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
ProductViewComponent.propDecorators = {
    mode: [{ type: Input }],
    modeChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ProductViewComponent.prototype.iconTypes;
    /** @type {?} */
    ProductViewComponent.prototype.mode;
    /** @type {?} */
    ProductViewComponent.prototype.modeChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztJQUc3QyxNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07OztBQVFmLE1BQU0sT0FBTyxvQkFBb0I7SUFMakM7UUFNRSxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBSXRCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBbUIxQyxDQUFDOzs7O0lBakJDLElBQUksV0FBVztRQUNiLE9BQU8sY0FBYyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNWLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDeEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUM1QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7SUFFRCxVQUFVOztjQUNGLE9BQU8sR0FDWCxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJO1FBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztZQTVCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsMEtBQTRDO2dCQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O21CQUdFLEtBQUs7eUJBRUwsTUFBTTs7OztJQUhQLHlDQUFzQjs7SUFDdEIsb0NBQ2dCOztJQUNoQiwwQ0FDd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vbWlzYy9pY29uJztcblxuZXhwb3J0IGVudW0gVmlld01vZGVzIHtcbiAgR3JpZCA9ICdncmlkJyxcbiAgTGlzdCA9ICdsaXN0Jyxcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC12aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3Qtdmlldy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0Vmlld0NvbXBvbmVudCB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcbiAgQElucHV0KClcbiAgbW9kZTogVmlld01vZGVzO1xuICBAT3V0cHV0KClcbiAgbW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGdldCBidXR0b25DbGFzcygpIHtcbiAgICByZXR1cm4gYGN4LXByb2R1Y3QtJHt0aGlzLm1vZGV9YDtcbiAgfVxuXG4gIGdldCB2aWV3TW9kZSgpIHtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnbGlzdCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmljb25UeXBlcy5MSVNUO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnZ3JpZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmljb25UeXBlcy5HUklEO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZU1vZGUoKSB7XG4gICAgY29uc3QgbmV3TW9kZSA9XG4gICAgICB0aGlzLm1vZGUgPT09IFZpZXdNb2Rlcy5HcmlkID8gVmlld01vZGVzLkxpc3QgOiBWaWV3TW9kZXMuR3JpZDtcbiAgICB0aGlzLm1vZGVDaGFuZ2UuZW1pdChuZXdNb2RlKTtcbiAgfVxufVxuIl19