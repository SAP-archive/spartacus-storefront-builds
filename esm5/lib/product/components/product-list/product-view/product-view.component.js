/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter, } from '@angular/core';
/** @enum {string} */
var ViewModes = {
    Grid: 'grid',
    List: 'list',
};
export { ViewModes };
var ProductViewComponent = /** @class */ (function () {
    function ProductViewComponent() {
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
                    template: "<div class=\"cx-product-layout\" (click)=\"changeMode()\">\n  <div [ngClass]=\"buttonClass\"><span></span></div>\n</div>\n",
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
    ProductViewComponent.prototype.mode;
    /** @type {?} */
    ProductViewComponent.prototype.modeChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sdUJBQXVCLEVBQ3ZCLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQzs7O0lBR3JCLE1BQU8sTUFBTTtJQUNiLE1BQU8sTUFBTTs7O0FBR2Y7SUFBQTtRQVNFLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBVzFDLENBQUM7SUFUQyxzQkFBSSw2Q0FBVzs7OztRQUFmO1lBQ0UsT0FBTyxnQkFBYyxJQUFJLENBQUMsSUFBTSxDQUFDO1FBQ25DLENBQUM7OztPQUFBOzs7O0lBRUQseUNBQVU7OztJQUFWOztZQUNRLE9BQU8sR0FDWCxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJO1FBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0Isc0lBQTRDO29CQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozt1QkFFRSxLQUFLOzZCQUVMLE1BQU07O0lBWVQsMkJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWZZLG9CQUFvQjs7O0lBQy9CLG9DQUNnQjs7SUFDaEIsMENBQ3dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGVudW0gVmlld01vZGVzIHtcbiAgR3JpZCA9ICdncmlkJyxcbiAgTGlzdCA9ICdsaXN0Jyxcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC12aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3Qtdmlldy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0Vmlld0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIG1vZGU6IFZpZXdNb2RlcztcbiAgQE91dHB1dCgpXG4gIG1vZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBnZXQgYnV0dG9uQ2xhc3MoKSB7XG4gICAgcmV0dXJuIGBjeC1wcm9kdWN0LSR7dGhpcy5tb2RlfWA7XG4gIH1cblxuICBjaGFuZ2VNb2RlKCkge1xuICAgIGNvbnN0IG5ld01vZGUgPVxuICAgICAgdGhpcy5tb2RlID09PSBWaWV3TW9kZXMuR3JpZCA/IFZpZXdNb2Rlcy5MaXN0IDogVmlld01vZGVzLkdyaWQ7XG4gICAgdGhpcy5tb2RlQ2hhbmdlLmVtaXQobmV3TW9kZSk7XG4gIH1cbn1cbiJdfQ==