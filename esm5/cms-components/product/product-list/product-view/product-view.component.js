/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { ICON_TYPES } from '../../../misc/icon';
/** @enum {string} */
var ViewModes = {
    Grid: 'grid',
    List: 'list',
};
export { ViewModes };
var ProductViewComponent = /** @class */ (function () {
    function ProductViewComponent() {
        this.iconTypes = ICON_TYPES;
        this.modeChange = new EventEmitter();
    }
    Object.defineProperty(ProductViewComponent.prototype, "buttonClass", {
        get: /**
         * @return {?}
         */
        function () {
            return "cx-product-" + this.mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewComponent.prototype, "viewMode", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.mode === 'list') {
                return this.iconTypes.LIST;
            }
            else if (this.mode === 'grid') {
                return this.iconTypes.GRID;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ProductViewComponent.prototype.changeMode = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var newMode = this.mode === ViewModes.Grid ? ViewModes.List : ViewModes.Grid;
        this.modeChange.emit(newMode);
    };
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
    return ProductViewComponent;
}());
export { ProductViewComponent };
if (false) {
    /** @type {?} */
    ProductViewComponent.prototype.iconTypes;
    /** @type {?} */
    ProductViewComponent.prototype.mode;
    /** @type {?} */
    ProductViewComponent.prototype.modeChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztJQUc5QyxNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07OztBQUdmO0lBQUE7UUFNRSxjQUFTLEdBQUcsVUFBVSxDQUFDO1FBSXZCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBbUIxQyxDQUFDO0lBakJDLHNCQUFJLDZDQUFXOzs7O1FBQWY7WUFDRSxPQUFPLGdCQUFjLElBQUksQ0FBQyxJQUFNLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBUTs7OztRQUFaO1lBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDeEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzthQUM1QjtpQkFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO2dCQUMvQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2FBQzVCO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7SUFFRCx5Q0FBVTs7O0lBQVY7O1lBQ1EsT0FBTyxHQUNYLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUk7UUFDaEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiwwS0FBNEM7b0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7O3VCQUdFLEtBQUs7NkJBRUwsTUFBTTs7SUFvQlQsMkJBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQXhCWSxvQkFBb0I7OztJQUMvQix5Q0FBdUI7O0lBQ3ZCLG9DQUNnQjs7SUFDaEIsMENBQ3dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDT05fVFlQRVMgfSBmcm9tICcuLi8uLi8uLi9taXNjL2ljb24nO1xuXG5leHBvcnQgZW51bSBWaWV3TW9kZXMge1xuICBHcmlkID0gJ2dyaWQnLFxuICBMaXN0ID0gJ2xpc3QnLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC12aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RWaWV3Q29tcG9uZW50IHtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFUztcbiAgQElucHV0KClcbiAgbW9kZTogVmlld01vZGVzO1xuICBAT3V0cHV0KClcbiAgbW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGdldCBidXR0b25DbGFzcygpIHtcbiAgICByZXR1cm4gYGN4LXByb2R1Y3QtJHt0aGlzLm1vZGV9YDtcbiAgfVxuXG4gIGdldCB2aWV3TW9kZSgpIHtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnbGlzdCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmljb25UeXBlcy5MSVNUO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnZ3JpZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmljb25UeXBlcy5HUklEO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZU1vZGUoKSB7XG4gICAgY29uc3QgbmV3TW9kZSA9XG4gICAgICB0aGlzLm1vZGUgPT09IFZpZXdNb2Rlcy5HcmlkID8gVmlld01vZGVzLkxpc3QgOiBWaWV3TW9kZXMuR3JpZDtcbiAgICB0aGlzLm1vZGVDaGFuZ2UuZW1pdChuZXdNb2RlKTtcbiAgfVxufVxuIl19