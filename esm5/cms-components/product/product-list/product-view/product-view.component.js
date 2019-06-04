/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            /** @type {?} */
            var viewName = this.viewMode.toLowerCase();
            return "cx-product-" + viewName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewComponent.prototype, "viewMode", {
        /**
         *   Display icons inversely to allow users
         *   to see the view they will navigate to
         */
        get: /**
         *   Display icons inversely to allow users
         *   to see the view they will navigate to
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
                    template: "<div class=\"cx-product-layout\" (click)=\"changeMode()\">\n  <div [ngClass]=\"buttonClass\">\n    <cx-icon\n      *ngIf=\"viewMode === iconTypes.GRID\"\n      [type]=\"iconTypes.GRID\"\n    ></cx-icon>\n    <cx-icon\n      *ngIf=\"viewMode === iconTypes.LIST\"\n      [type]=\"iconTypes.LIST\"\n    ></cx-icon>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztJQUc3QyxNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07OztBQUdmO0lBQUE7UUFNRSxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBSXRCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBd0IxQyxDQUFDO0lBdEJDLHNCQUFJLDZDQUFXOzs7O1FBQWY7O2dCQUNRLFFBQVEsR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRTtZQUNwRCxPQUFPLGdCQUFjLFFBQVUsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLDBDQUFRO1FBSlo7OztXQUdHOzs7Ozs7UUFDSDtZQUNFLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQ3hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7YUFDNUI7aUJBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDL0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzthQUM1QjtRQUNILENBQUM7OztPQUFBOzs7O0lBRUQseUNBQVU7OztJQUFWOztZQUNRLE9BQU8sR0FDWCxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJO1FBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQWpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsdVZBQTRDO29CQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozt1QkFHRSxLQUFLOzZCQUVMLE1BQU07O0lBeUJULDJCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0E3Qlksb0JBQW9COzs7SUFDL0IseUNBQXNCOztJQUN0QixvQ0FDZ0I7O0lBQ2hCLDBDQUN3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9taXNjL2ljb24nO1xuXG5leHBvcnQgZW51bSBWaWV3TW9kZXMge1xuICBHcmlkID0gJ2dyaWQnLFxuICBMaXN0ID0gJ2xpc3QnLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC12aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RWaWV3Q29tcG9uZW50IHtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuICBASW5wdXQoKVxuICBtb2RlOiBWaWV3TW9kZXM7XG4gIEBPdXRwdXQoKVxuICBtb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgZ2V0IGJ1dHRvbkNsYXNzKCkge1xuICAgIGNvbnN0IHZpZXdOYW1lOiBzdHJpbmcgPSB0aGlzLnZpZXdNb2RlLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGBjeC1wcm9kdWN0LSR7dmlld05hbWV9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiAgIERpc3BsYXkgaWNvbnMgaW52ZXJzZWx5IHRvIGFsbG93IHVzZXJzXG4gICAqICAgdG8gc2VlIHRoZSB2aWV3IHRoZXkgd2lsbCBuYXZpZ2F0ZSB0b1xuICAgKi9cbiAgZ2V0IHZpZXdNb2RlKCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdsaXN0Jykge1xuICAgICAgcmV0dXJuIHRoaXMuaWNvblR5cGVzLkdSSUQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdncmlkJykge1xuICAgICAgcmV0dXJuIHRoaXMuaWNvblR5cGVzLkxJU1Q7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlTW9kZSgpIHtcbiAgICBjb25zdCBuZXdNb2RlID1cbiAgICAgIHRoaXMubW9kZSA9PT0gVmlld01vZGVzLkdyaWQgPyBWaWV3TW9kZXMuTGlzdCA6IFZpZXdNb2Rlcy5HcmlkO1xuICAgIHRoaXMubW9kZUNoYW5nZS5lbWl0KG5ld01vZGUpO1xuICB9XG59XG4iXX0=