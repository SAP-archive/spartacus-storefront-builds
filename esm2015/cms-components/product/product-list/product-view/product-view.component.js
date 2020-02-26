import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { ICON_TYPE } from '../../../misc/icon/icon.model';
export var ViewModes;
(function (ViewModes) {
    ViewModes["Grid"] = "grid";
    ViewModes["List"] = "list";
})(ViewModes || (ViewModes = {}));
let ProductViewComponent = class ProductViewComponent {
    constructor() {
        this.iconTypes = ICON_TYPE;
        this.modeChange = new EventEmitter();
    }
    get buttonClass() {
        const viewName = this.viewMode.toLowerCase();
        return `cx-product-${viewName}`;
    }
    /**
     *   Display icons inversely to allow users
     *   to see the view they will navigate to
     */
    get viewMode() {
        if (this.mode === 'list') {
            return this.iconTypes.GRID;
        }
        else if (this.mode === 'grid') {
            return this.iconTypes.LIST;
        }
    }
    changeMode() {
        const newMode = this.mode === ViewModes.Grid ? ViewModes.List : ViewModes.Grid;
        this.modeChange.emit(newMode);
    }
};
__decorate([
    Input()
], ProductViewComponent.prototype, "mode", void 0);
__decorate([
    Output()
], ProductViewComponent.prototype, "modeChange", void 0);
ProductViewComponent = __decorate([
    Component({
        selector: 'cx-product-view',
        template: "<button\n  class=\"btn cx-product-layout\"\n  [ngClass]=\"buttonClass\"\n  (click)=\"changeMode()\"\n>\n  <cx-icon\n    *ngIf=\"viewMode === iconTypes.GRID\"\n    [type]=\"iconTypes.GRID\"\n  ></cx-icon>\n  <cx-icon\n    *ngIf=\"viewMode === iconTypes.LIST\"\n    [type]=\"iconTypes.LIST\"\n  ></cx-icon>\n</button>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductViewComponent);
export { ProductViewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFMUQsTUFBTSxDQUFOLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQiwwQkFBYSxDQUFBO0lBQ2IsMEJBQWEsQ0FBQTtBQUNmLENBQUMsRUFIVyxTQUFTLEtBQVQsU0FBUyxRQUdwQjtBQU9ELElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBQWpDO1FBQ0UsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUl0QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQXdCMUMsQ0FBQztJQXRCQyxJQUFJLFdBQVc7UUFDYixNQUFNLFFBQVEsR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JELE9BQU8sY0FBYyxRQUFRLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBSSxRQUFRO1FBQ1YsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQzVCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELFVBQVU7UUFDUixNQUFNLE9BQU8sR0FDWCxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDakUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztDQUNGLENBQUE7QUExQkM7SUFEQyxLQUFLLEVBQUU7a0RBQ1E7QUFFaEI7SUFEQyxNQUFNLEVBQUU7d0RBQytCO0FBTDdCLG9CQUFvQjtJQUxoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLHlVQUE0QztRQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1csb0JBQW9CLENBNkJoQztTQTdCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuXG5leHBvcnQgZW51bSBWaWV3TW9kZXMge1xuICBHcmlkID0gJ2dyaWQnLFxuICBMaXN0ID0gJ2xpc3QnLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC12aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RWaWV3Q29tcG9uZW50IHtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuICBASW5wdXQoKVxuICBtb2RlOiBWaWV3TW9kZXM7XG4gIEBPdXRwdXQoKVxuICBtb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgZ2V0IGJ1dHRvbkNsYXNzKCkge1xuICAgIGNvbnN0IHZpZXdOYW1lOiBzdHJpbmcgPSB0aGlzLnZpZXdNb2RlLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGBjeC1wcm9kdWN0LSR7dmlld05hbWV9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiAgIERpc3BsYXkgaWNvbnMgaW52ZXJzZWx5IHRvIGFsbG93IHVzZXJzXG4gICAqICAgdG8gc2VlIHRoZSB2aWV3IHRoZXkgd2lsbCBuYXZpZ2F0ZSB0b1xuICAgKi9cbiAgZ2V0IHZpZXdNb2RlKCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdsaXN0Jykge1xuICAgICAgcmV0dXJuIHRoaXMuaWNvblR5cGVzLkdSSUQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdncmlkJykge1xuICAgICAgcmV0dXJuIHRoaXMuaWNvblR5cGVzLkxJU1Q7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlTW9kZSgpIHtcbiAgICBjb25zdCBuZXdNb2RlID1cbiAgICAgIHRoaXMubW9kZSA9PT0gVmlld01vZGVzLkdyaWQgPyBWaWV3TW9kZXMuTGlzdCA6IFZpZXdNb2Rlcy5HcmlkO1xuICAgIHRoaXMubW9kZUNoYW5nZS5lbWl0KG5ld01vZGUpO1xuICB9XG59XG4iXX0=