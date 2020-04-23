import { __decorate, __extends } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StoreDataService } from '@spartacus/core';
import { AbstractStoreItemComponent } from '../abstract-store-item/abstract-store-item.component';
var StoreFinderListItemComponent = /** @class */ (function (_super) {
    __extends(StoreFinderListItemComponent, _super);
    function StoreFinderListItemComponent(storeDataService) {
        var _this = _super.call(this, storeDataService) || this;
        _this.storeDataService = storeDataService;
        _this.locationIndex = null;
        _this.storeItemClick = new EventEmitter();
        return _this;
    }
    StoreFinderListItemComponent.prototype.handleStoreItemClick = function () {
        if (this.locationIndex !== null) {
            this.storeItemClick.emit(this.locationIndex);
        }
    };
    StoreFinderListItemComponent.prototype.onKey = function (event) {
        if (event.key === 'Enter') {
            this.handleStoreItemClick();
        }
    };
    StoreFinderListItemComponent.ctorParameters = function () { return [
        { type: StoreDataService }
    ]; };
    __decorate([
        Input()
    ], StoreFinderListItemComponent.prototype, "locationIndex", void 0);
    __decorate([
        Input()
    ], StoreFinderListItemComponent.prototype, "listOrderLabel", void 0);
    __decorate([
        Input()
    ], StoreFinderListItemComponent.prototype, "displayDistance", void 0);
    __decorate([
        Input()
    ], StoreFinderListItemComponent.prototype, "useClickEvent", void 0);
    __decorate([
        Output()
    ], StoreFinderListItemComponent.prototype, "storeItemClick", void 0);
    StoreFinderListItemComponent = __decorate([
        Component({
            selector: 'cx-store-finder-list-item',
            template: "<ng-container>\n  <div>\n    <div class=\"cx-store-list-order\">\n      {{ listOrderLabel }}\n    </div>\n    <div class=\"cx-store-name\">\n      <button\n        *ngIf=\"useClickEvent\"\n        (click)=\"handleStoreItemClick()\"\n        (keyup)=\"onKey($event)\"\n      >\n        {{ location.displayName || location.name }}\n      </button>\n      <a *ngIf=\"!useClickEvent\" [routerLink]=\"[location.name]\">{{\n        location.displayName || location.name\n      }}</a>\n    </div>\n    <div class=\"cx-store-address\" *ngIf=\"location.address\">\n      <div class=\"cx-store-address-street\">\n        {{ location.address.line1 }} {{ location.address.line2 }}\n      </div>\n      {{\n        getFormattedStoreAddress([\n          location.address.town,\n          location.address.postalCode,\n          location.address.country.isocode\n        ])\n      }}\n      <div\n        class=\"cx-store-distance\"\n        *ngIf=\"location.formattedDistance && displayDistance\"\n      >\n        {{ location.formattedDistance }}\n      </div>\n    </div>\n    <a\n      href=\"{{ getDirections(location) }}\"\n      target=\"_blank\"\n      class=\"btn btn-sm btn-action btn-block cx-button\"\n      (click)=\"$event.stopPropagation()\"\n      >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n    >\n  </div>\n</ng-container>\n"
        })
    ], StoreFinderListItemComponent);
    return StoreFinderListItemComponent;
}(AbstractStoreItemComponent));
export { StoreFinderListItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1saXN0LWl0ZW0vc3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFNbEc7SUFBa0QsZ0RBQTBCO0lBWTFFLHNDQUFzQixnQkFBa0M7UUFBeEQsWUFDRSxrQkFBTSxnQkFBZ0IsQ0FBQyxTQUN4QjtRQUZxQixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBVnhELG1CQUFhLEdBQVcsSUFBSSxDQUFDO1FBUTdCLG9CQUFjLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7O0lBSTFELENBQUM7SUFFRCwyREFBb0IsR0FBcEI7UUFDRSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxFQUFFO1lBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7SUFFRCw0Q0FBSyxHQUFMLFVBQU0sS0FBb0I7UUFDeEIsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRTtZQUN6QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7O2dCQWR1QyxnQkFBZ0I7O0lBVnhEO1FBREMsS0FBSyxFQUFFO3VFQUNxQjtJQUU3QjtRQURDLEtBQUssRUFBRTt3RUFDWTtJQUVwQjtRQURDLEtBQUssRUFBRTt5RUFDaUI7SUFFekI7UUFEQyxLQUFLLEVBQUU7dUVBQ2U7SUFFdkI7UUFEQyxNQUFNLEVBQUU7d0VBQ2lEO0lBVi9DLDRCQUE0QjtRQUp4QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLG8wQ0FBc0Q7U0FDdkQsQ0FBQztPQUNXLDRCQUE0QixDQTJCeEM7SUFBRCxtQ0FBQztDQUFBLEFBM0JELENBQWtELDBCQUEwQixHQTJCM0U7U0EzQlksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlRGF0YVNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RTdG9yZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC1zdG9yZS1pdGVtL2Fic3RyYWN0LXN0b3JlLWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmUtZmluZGVyLWxpc3QtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1maW5kZXItbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJMaXN0SXRlbUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0U3RvcmVJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbG9jYXRpb25JbmRleDogbnVtYmVyID0gbnVsbDtcbiAgQElucHV0KClcbiAgbGlzdE9yZGVyTGFiZWw6IGFueTtcbiAgQElucHV0KClcbiAgZGlzcGxheURpc3RhbmNlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICB1c2VDbGlja0V2ZW50OiBib29sZWFuO1xuICBAT3V0cHV0KClcbiAgc3RvcmVJdGVtQ2xpY2s6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZURhdGFTZXJ2aWNlOiBTdG9yZURhdGFTZXJ2aWNlKSB7XG4gICAgc3VwZXIoc3RvcmVEYXRhU2VydmljZSk7XG4gIH1cblxuICBoYW5kbGVTdG9yZUl0ZW1DbGljaygpIHtcbiAgICBpZiAodGhpcy5sb2NhdGlvbkluZGV4ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnN0b3JlSXRlbUNsaWNrLmVtaXQodGhpcy5sb2NhdGlvbkluZGV4KTtcbiAgICB9XG4gIH1cblxuICBvbktleShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMuaGFuZGxlU3RvcmVJdGVtQ2xpY2soKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==