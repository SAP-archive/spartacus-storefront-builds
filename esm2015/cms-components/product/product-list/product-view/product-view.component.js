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
     * Display icons inversely to allow users to
     * see the view they will navigate to
     * @return {?}
     */
    get viewMode() {
        if (this.mode === 'list') {
            return this.iconTypes.GRID;
        }
        else if (this.mode === 'grid') {
            return this.iconTypes.LIST;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztJQUc3QyxNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07OztBQVFmLE1BQU0sT0FBTyxvQkFBb0I7SUFMakM7UUFNRSxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBSXRCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBdUIxQyxDQUFDOzs7O0lBckJDLElBQUksV0FBVztRQUNiLE9BQU8sY0FBYyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBTUQsSUFBSSxRQUFRO1FBQ1YsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQzVCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7OztJQUVELFVBQVU7O2NBQ0YsT0FBTyxHQUNYLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUk7UUFDaEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiwwS0FBNEM7Z0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7bUJBR0UsS0FBSzt5QkFFTCxNQUFNOzs7O0lBSFAseUNBQXNCOztJQUN0QixvQ0FDZ0I7O0lBQ2hCLDBDQUN3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9taXNjL2ljb24nO1xuXG5leHBvcnQgZW51bSBWaWV3TW9kZXMge1xuICBHcmlkID0gJ2dyaWQnLFxuICBMaXN0ID0gJ2xpc3QnLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC12aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RWaWV3Q29tcG9uZW50IHtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuICBASW5wdXQoKVxuICBtb2RlOiBWaWV3TW9kZXM7XG4gIEBPdXRwdXQoKVxuICBtb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgZ2V0IGJ1dHRvbkNsYXNzKCkge1xuICAgIHJldHVybiBgY3gtcHJvZHVjdC0ke3RoaXMubW9kZX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXkgaWNvbnMgaW52ZXJzZWx5IHRvIGFsbG93IHVzZXJzIHRvXG4gICAqIHNlZSB0aGUgdmlldyB0aGV5IHdpbGwgbmF2aWdhdGUgdG9cbiAgICovXG4gIGdldCB2aWV3TW9kZSgpIHtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnbGlzdCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmljb25UeXBlcy5HUklEO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnZ3JpZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmljb25UeXBlcy5MSVNUO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZU1vZGUoKSB7XG4gICAgY29uc3QgbmV3TW9kZSA9XG4gICAgICB0aGlzLm1vZGUgPT09IFZpZXdNb2Rlcy5HcmlkID8gVmlld01vZGVzLkxpc3QgOiBWaWV3TW9kZXMuR3JpZDtcbiAgICB0aGlzLm1vZGVDaGFuZ2UuZW1pdChuZXdNb2RlKTtcbiAgfVxufVxuIl19