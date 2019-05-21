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
                    template: "<div class=\"cx-product-layout\" (click)=\"changeMode()\">\n  <div [ngClass]=\"buttonClass\">\n    <!--\n        Display icons inversely to allow users\n        to see the view they will navigate to\n    -->\n    <cx-icon\n      *ngIf=\"viewMode === iconTypes.LIST\"\n      [type]=\"iconTypes.GRID\"\n    ></cx-icon>\n    <cx-icon\n      *ngIf=\"viewMode === iconTypes.GRID\"\n      [type]=\"iconTypes.LIST\"\n    ></cx-icon>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztJQUc3QyxNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07OztBQUdmO0lBQUE7UUFNRSxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBSXRCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBbUIxQyxDQUFDO0lBakJDLHNCQUFJLDZDQUFXOzs7O1FBQWY7WUFDRSxPQUFPLGdCQUFjLElBQUksQ0FBQyxJQUFNLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBUTs7OztRQUFaO1lBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDeEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzthQUM1QjtpQkFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO2dCQUMvQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2FBQzVCO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7SUFFRCx5Q0FBVTs7O0lBQVY7O1lBQ1EsT0FBTyxHQUNYLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUk7UUFDaEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQix5Y0FBNEM7b0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7O3VCQUdFLEtBQUs7NkJBRUwsTUFBTTs7SUFvQlQsMkJBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQXhCWSxvQkFBb0I7OztJQUMvQix5Q0FBc0I7O0lBQ3RCLG9DQUNnQjs7SUFDaEIsMENBQ3dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL21pc2MvaWNvbic7XG5cbmV4cG9ydCBlbnVtIFZpZXdNb2RlcyB7XG4gIEdyaWQgPSAnZ3JpZCcsXG4gIExpc3QgPSAnbGlzdCcsXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtdmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFZpZXdDb21wb25lbnQge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG4gIEBJbnB1dCgpXG4gIG1vZGU6IFZpZXdNb2RlcztcbiAgQE91dHB1dCgpXG4gIG1vZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBnZXQgYnV0dG9uQ2xhc3MoKSB7XG4gICAgcmV0dXJuIGBjeC1wcm9kdWN0LSR7dGhpcy5tb2RlfWA7XG4gIH1cblxuICBnZXQgdmlld01vZGUoKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2xpc3QnKSB7XG4gICAgICByZXR1cm4gdGhpcy5pY29uVHlwZXMuTElTVDtcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ2dyaWQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5pY29uVHlwZXMuR1JJRDtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VNb2RlKCkge1xuICAgIGNvbnN0IG5ld01vZGUgPVxuICAgICAgdGhpcy5tb2RlID09PSBWaWV3TW9kZXMuR3JpZCA/IFZpZXdNb2Rlcy5MaXN0IDogVmlld01vZGVzLkdyaWQ7XG4gICAgdGhpcy5tb2RlQ2hhbmdlLmVtaXQobmV3TW9kZSk7XG4gIH1cbn1cbiJdfQ==