import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { ICON_TYPE } from '../../../misc/icon/icon.model';
export var ViewModes;
(function (ViewModes) {
    ViewModes["Grid"] = "grid";
    ViewModes["List"] = "list";
})(ViewModes || (ViewModes = {}));
var ProductViewComponent = /** @class */ (function () {
    function ProductViewComponent() {
        this.iconTypes = ICON_TYPE;
        this.modeChange = new EventEmitter();
    }
    Object.defineProperty(ProductViewComponent.prototype, "buttonClass", {
        get: function () {
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
        get: function () {
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
    ProductViewComponent.prototype.changeMode = function () {
        var newMode = this.mode === ViewModes.Grid ? ViewModes.List : ViewModes.Grid;
        this.modeChange.emit(newMode);
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
    return ProductViewComponent;
}());
export { ProductViewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFMUQsTUFBTSxDQUFOLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQiwwQkFBYSxDQUFBO0lBQ2IsMEJBQWEsQ0FBQTtBQUNmLENBQUMsRUFIVyxTQUFTLEtBQVQsU0FBUyxRQUdwQjtBQU9EO0lBQUE7UUFDRSxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBSXRCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBd0IxQyxDQUFDO0lBdEJDLHNCQUFJLDZDQUFXO2FBQWY7WUFDRSxJQUFNLFFBQVEsR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JELE9BQU8sZ0JBQWMsUUFBVSxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBTUQsc0JBQUksMENBQVE7UUFKWjs7O1dBR0c7YUFDSDtZQUNFLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQ3hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7YUFDNUI7aUJBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDL0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzthQUM1QjtRQUNILENBQUM7OztPQUFBO0lBRUQseUNBQVUsR0FBVjtRQUNFLElBQU0sT0FBTyxHQUNYLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUNqRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBekJEO1FBREMsS0FBSyxFQUFFO3NEQUNRO0lBRWhCO1FBREMsTUFBTSxFQUFFOzREQUMrQjtJQUw3QixvQkFBb0I7UUFMaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQix5VUFBNEM7WUFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLG9CQUFvQixDQTZCaEM7SUFBRCwyQkFBQztDQUFBLEFBN0JELElBNkJDO1NBN0JZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5cbmV4cG9ydCBlbnVtIFZpZXdNb2RlcyB7XG4gIEdyaWQgPSAnZ3JpZCcsXG4gIExpc3QgPSAnbGlzdCcsXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtdmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFZpZXdDb21wb25lbnQge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG4gIEBJbnB1dCgpXG4gIG1vZGU6IFZpZXdNb2RlcztcbiAgQE91dHB1dCgpXG4gIG1vZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBnZXQgYnV0dG9uQ2xhc3MoKSB7XG4gICAgY29uc3Qgdmlld05hbWU6IHN0cmluZyA9IHRoaXMudmlld01vZGUudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gYGN4LXByb2R1Y3QtJHt2aWV3TmFtZX1gO1xuICB9XG5cbiAgLyoqXG4gICAqICAgRGlzcGxheSBpY29ucyBpbnZlcnNlbHkgdG8gYWxsb3cgdXNlcnNcbiAgICogICB0byBzZWUgdGhlIHZpZXcgdGhleSB3aWxsIG5hdmlnYXRlIHRvXG4gICAqL1xuICBnZXQgdmlld01vZGUoKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2xpc3QnKSB7XG4gICAgICByZXR1cm4gdGhpcy5pY29uVHlwZXMuR1JJRDtcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ2dyaWQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5pY29uVHlwZXMuTElTVDtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VNb2RlKCkge1xuICAgIGNvbnN0IG5ld01vZGUgPVxuICAgICAgdGhpcy5tb2RlID09PSBWaWV3TW9kZXMuR3JpZCA/IFZpZXdNb2Rlcy5MaXN0IDogVmlld01vZGVzLkdyaWQ7XG4gICAgdGhpcy5tb2RlQ2hhbmdlLmVtaXQobmV3TW9kZSk7XG4gIH1cbn1cbiJdfQ==