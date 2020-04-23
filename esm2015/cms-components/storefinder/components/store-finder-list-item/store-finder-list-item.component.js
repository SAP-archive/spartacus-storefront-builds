import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StoreDataService } from '@spartacus/core';
import { AbstractStoreItemComponent } from '../abstract-store-item/abstract-store-item.component';
let StoreFinderListItemComponent = class StoreFinderListItemComponent extends AbstractStoreItemComponent {
    constructor(storeDataService) {
        super(storeDataService);
        this.storeDataService = storeDataService;
        this.locationIndex = null;
        this.storeItemClick = new EventEmitter();
    }
    handleStoreItemClick() {
        if (this.locationIndex !== null) {
            this.storeItemClick.emit(this.locationIndex);
        }
    }
    onKey(event) {
        if (event.key === 'Enter') {
            this.handleStoreItemClick();
        }
    }
};
StoreFinderListItemComponent.ctorParameters = () => [
    { type: StoreDataService }
];
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
export { StoreFinderListItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1saXN0LWl0ZW0vc3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFNbEcsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNkIsU0FBUSwwQkFBMEI7SUFZMUUsWUFBc0IsZ0JBQWtDO1FBQ3RELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBREoscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVZ4RCxrQkFBYSxHQUFXLElBQUksQ0FBQztRQVE3QixtQkFBYyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBSTFELENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLElBQUksRUFBRTtZQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQW9CO1FBQ3hCLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7WUFDekIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDN0I7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFmeUMsZ0JBQWdCOztBQVZ4RDtJQURDLEtBQUssRUFBRTttRUFDcUI7QUFFN0I7SUFEQyxLQUFLLEVBQUU7b0VBQ1k7QUFFcEI7SUFEQyxLQUFLLEVBQUU7cUVBQ2lCO0FBRXpCO0lBREMsS0FBSyxFQUFFO21FQUNlO0FBRXZCO0lBREMsTUFBTSxFQUFFO29FQUNpRDtBQVYvQyw0QkFBNEI7SUFKeEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyxvMENBQXNEO0tBQ3ZELENBQUM7R0FDVyw0QkFBNEIsQ0EyQnhDO1NBM0JZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZURhdGFTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0U3RvcmVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3Qtc3RvcmUtaXRlbS9hYnN0cmFjdC1zdG9yZS1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b3JlLWZpbmRlci1saXN0LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyTGlzdEl0ZW1Db21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFN0b3JlSXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGxvY2F0aW9uSW5kZXg6IG51bWJlciA9IG51bGw7XG4gIEBJbnB1dCgpXG4gIGxpc3RPcmRlckxhYmVsOiBhbnk7XG4gIEBJbnB1dCgpXG4gIGRpc3BsYXlEaXN0YW5jZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgdXNlQ2xpY2tFdmVudDogYm9vbGVhbjtcbiAgQE91dHB1dCgpXG4gIHN0b3JlSXRlbUNsaWNrOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmVEYXRhU2VydmljZTogU3RvcmVEYXRhU2VydmljZSkge1xuICAgIHN1cGVyKHN0b3JlRGF0YVNlcnZpY2UpO1xuICB9XG5cbiAgaGFuZGxlU3RvcmVJdGVtQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMubG9jYXRpb25JbmRleCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zdG9yZUl0ZW1DbGljay5lbWl0KHRoaXMubG9jYXRpb25JbmRleCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICB0aGlzLmhhbmRsZVN0b3JlSXRlbUNsaWNrKCk7XG4gICAgfVxuICB9XG59XG4iXX0=