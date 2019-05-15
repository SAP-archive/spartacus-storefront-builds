/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { ICON_TYPES } from '../../../misc/icon';
/** @enum {string} */
const ViewModes = {
    Grid: 'grid',
    List: 'list',
};
export { ViewModes };
export class ProductViewComponent {
    constructor() {
        this.iconTypes = ICON_TYPES;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztJQUc5QyxNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07OztBQVFmLE1BQU0sT0FBTyxvQkFBb0I7SUFMakM7UUFNRSxjQUFTLEdBQUcsVUFBVSxDQUFDO1FBSXZCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBbUIxQyxDQUFDOzs7O0lBakJDLElBQUksV0FBVztRQUNiLE9BQU8sY0FBYyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNWLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDeEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUM1QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7SUFFRCxVQUFVOztjQUNGLE9BQU8sR0FDWCxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJO1FBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztZQTVCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsMEtBQTRDO2dCQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O21CQUdFLEtBQUs7eUJBRUwsTUFBTTs7OztJQUhQLHlDQUF1Qjs7SUFDdkIsb0NBQ2dCOztJQUNoQiwwQ0FDd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNPTl9UWVBFUyB9IGZyb20gJy4uLy4uLy4uL21pc2MvaWNvbic7XG5cbmV4cG9ydCBlbnVtIFZpZXdNb2RlcyB7XG4gIEdyaWQgPSAnZ3JpZCcsXG4gIExpc3QgPSAnbGlzdCcsXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtdmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFZpZXdDb21wb25lbnQge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEVTO1xuICBASW5wdXQoKVxuICBtb2RlOiBWaWV3TW9kZXM7XG4gIEBPdXRwdXQoKVxuICBtb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgZ2V0IGJ1dHRvbkNsYXNzKCkge1xuICAgIHJldHVybiBgY3gtcHJvZHVjdC0ke3RoaXMubW9kZX1gO1xuICB9XG5cbiAgZ2V0IHZpZXdNb2RlKCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdsaXN0Jykge1xuICAgICAgcmV0dXJuIHRoaXMuaWNvblR5cGVzLkxJU1Q7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdncmlkJykge1xuICAgICAgcmV0dXJuIHRoaXMuaWNvblR5cGVzLkdSSUQ7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlTW9kZSgpIHtcbiAgICBjb25zdCBuZXdNb2RlID1cbiAgICAgIHRoaXMubW9kZSA9PT0gVmlld01vZGVzLkdyaWQgPyBWaWV3TW9kZXMuTGlzdCA6IFZpZXdNb2Rlcy5HcmlkO1xuICAgIHRoaXMubW9kZUNoYW5nZS5lbWl0KG5ld01vZGUpO1xuICB9XG59XG4iXX0=