/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { ICON_TYPE } from '../../../misc/icon';
/** @enum {string} */
var ViewModes = {
    Grid: 'grid',
    List: 'list',
};
export { ViewModes };
var ProductViewComponent = /** @class */ (function () {
    function ProductViewComponent() {
        this.iconTypes = ICON_TYPE;
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
        /**
         * Display icons inversely to allow users to
         * see the view they will navigate to
         */
        get: /**
         * Display icons inversely to allow users to
         * see the view they will navigate to
         * @return {?}
         */
        function () {
            if (this.mode === 'list') {
                return this.iconTypes.GRID;
            }
            else if (this.mode === 'grid') {
                return this.iconTypes.LIST;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztJQUc3QyxNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07OztBQUdmO0lBQUE7UUFNRSxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBSXRCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBdUIxQyxDQUFDO0lBckJDLHNCQUFJLDZDQUFXOzs7O1FBQWY7WUFDRSxPQUFPLGdCQUFjLElBQUksQ0FBQyxJQUFNLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSwwQ0FBUTtRQUpaOzs7V0FHRzs7Ozs7O1FBQ0g7WUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO2dCQUN4QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2FBQzVCO2lCQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQy9CLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7YUFDNUI7UUFDSCxDQUFDOzs7T0FBQTs7OztJQUVELHlDQUFVOzs7SUFBVjs7WUFDUSxPQUFPLEdBQ1gsSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSTtRQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDOztnQkFoQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDBLQUE0QztvQkFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7dUJBR0UsS0FBSzs2QkFFTCxNQUFNOztJQXdCVCwyQkFBQztDQUFBLEFBakNELElBaUNDO1NBNUJZLG9CQUFvQjs7O0lBQy9CLHlDQUFzQjs7SUFDdEIsb0NBQ2dCOztJQUNoQiwwQ0FDd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vbWlzYy9pY29uJztcblxuZXhwb3J0IGVudW0gVmlld01vZGVzIHtcbiAgR3JpZCA9ICdncmlkJyxcbiAgTGlzdCA9ICdsaXN0Jyxcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC12aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3Qtdmlldy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0Vmlld0NvbXBvbmVudCB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcbiAgQElucHV0KClcbiAgbW9kZTogVmlld01vZGVzO1xuICBAT3V0cHV0KClcbiAgbW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGdldCBidXR0b25DbGFzcygpIHtcbiAgICByZXR1cm4gYGN4LXByb2R1Y3QtJHt0aGlzLm1vZGV9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5IGljb25zIGludmVyc2VseSB0byBhbGxvdyB1c2VycyB0b1xuICAgKiBzZWUgdGhlIHZpZXcgdGhleSB3aWxsIG5hdmlnYXRlIHRvXG4gICAqL1xuICBnZXQgdmlld01vZGUoKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2xpc3QnKSB7XG4gICAgICByZXR1cm4gdGhpcy5pY29uVHlwZXMuR1JJRDtcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ2dyaWQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5pY29uVHlwZXMuTElTVDtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VNb2RlKCkge1xuICAgIGNvbnN0IG5ld01vZGUgPVxuICAgICAgdGhpcy5tb2RlID09PSBWaWV3TW9kZXMuR3JpZCA/IFZpZXdNb2Rlcy5MaXN0IDogVmlld01vZGVzLkdyaWQ7XG4gICAgdGhpcy5tb2RlQ2hhbmdlLmVtaXQobmV3TW9kZSk7XG4gIH1cbn1cbiJdfQ==