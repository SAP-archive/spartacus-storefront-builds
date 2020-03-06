import { __decorate, __extends } from "tslib";
import { ActivatedRoute } from '@angular/router';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StoreDataService, RoutingService } from '@spartacus/core';
import { AbstractStoreItemComponent } from '../abstract-store-item/abstract-store-item.component';
var StoreFinderListItemComponent = /** @class */ (function (_super) {
    __extends(StoreFinderListItemComponent, _super);
    function StoreFinderListItemComponent(storeDataService, route, routingService) {
        var _this = _super.call(this, storeDataService) || this;
        _this.storeDataService = storeDataService;
        _this.route = route;
        _this.routingService = routingService;
        _this.locationIndex = null;
        _this.storeItemClick = new EventEmitter();
        return _this;
    }
    StoreFinderListItemComponent.prototype.handleStoreItemClick = function () {
        if (this.locationIndex !== null) {
            this.storeItemClick.emit(this.locationIndex);
        }
    };
    StoreFinderListItemComponent.prototype.viewStore = function (location) {
        this.routingService.go([this.prepareRouteUrl(location)]);
    };
    StoreFinderListItemComponent.prototype.prepareRouteUrl = function (location) {
        var countryParam = this.route.snapshot.params.country
            ? "country/" + this.route.snapshot.params.country + "/"
            : '';
        var regionParam = this.route.snapshot.params.region
            ? "region/" + this.route.snapshot.params.region + "/"
            : '';
        return "store-finder/" + countryParam + regionParam + location.name;
    };
    StoreFinderListItemComponent.prototype.onKey = function (event) {
        if (event.key === 'Enter') {
            this.handleStoreItemClick();
        }
    };
    StoreFinderListItemComponent.ctorParameters = function () { return [
        { type: StoreDataService },
        { type: ActivatedRoute },
        { type: RoutingService }
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
            template: "<ng-container>\n  <div>\n    <div class=\"cx-store-list-order\">\n      {{ listOrderLabel }}\n    </div>\n    <div class=\"cx-store-name\">\n      <button\n        *ngIf=\"useClickEvent\"\n        (click)=\"handleStoreItemClick()\"\n        (keyup)=\"onKey($event)\"\n      >\n        {{ location.displayName || location.name }}\n      </button>\n      <a *ngIf=\"!useClickEvent\" [href]=\"prepareRouteUrl(location)\">{{\n        location.displayName || location.name\n      }}</a>\n    </div>\n    <div class=\"cx-store-address\" *ngIf=\"location.address\">\n      <div class=\"cx-store-address-street\">\n        {{ location.address.line1 }} {{ location.address.line2 }}\n      </div>\n      {{\n        getFormattedStoreAddress([\n          location.address.town,\n          location.address.postalCode,\n          location.address.country.isocode\n        ])\n      }}\n      <div\n        class=\"cx-store-distance\"\n        *ngIf=\"location.formattedDistance && displayDistance\"\n      >\n        {{ location.formattedDistance }}\n      </div>\n    </div>\n    <a\n      href=\"{{ getDirections(location) }}\"\n      target=\"_blank\"\n      class=\"btn btn-sm btn-action btn-block cx-button\"\n      (click)=\"$event.stopPropagation()\"\n      >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n    >\n  </div>\n</ng-container>\n"
        })
    ], StoreFinderListItemComponent);
    return StoreFinderListItemComponent;
}(AbstractStoreItemComponent));
export { StoreFinderListItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1saXN0LWl0ZW0vc3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQU1sRztJQUFrRCxnREFBMEI7SUFZMUUsc0NBQ1ksZ0JBQWtDLEVBQ2xDLEtBQXFCLEVBQ3JCLGNBQThCO1FBSDFDLFlBS0Usa0JBQU0sZ0JBQWdCLENBQUMsU0FDeEI7UUFMVyxzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFdBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWIxQyxtQkFBYSxHQUFXLElBQUksQ0FBQztRQVE3QixvQkFBYyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDOztJQVExRCxDQUFDO0lBRUQsMkRBQW9CLEdBQXBCO1FBQ0UsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLElBQUksRUFBRTtZQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBRUQsZ0RBQVMsR0FBVCxVQUFVLFFBQWE7UUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsc0RBQWUsR0FBZixVQUFnQixRQUFhO1FBQzNCLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPO1lBQ3JELENBQUMsQ0FBQyxhQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLE1BQUc7WUFDbEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNQLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNO1lBQ25ELENBQUMsQ0FBQyxZQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLE1BQUc7WUFDaEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNQLE9BQU8sa0JBQWdCLFlBQVksR0FBRyxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQU0sQ0FBQztJQUN0RSxDQUFDO0lBRUQsNENBQUssR0FBTCxVQUFNLEtBQW9CO1FBQ3hCLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7WUFDekIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDN0I7SUFDSCxDQUFDOztnQkEvQjZCLGdCQUFnQjtnQkFDM0IsY0FBYztnQkFDTCxjQUFjOztJQWIxQztRQURDLEtBQUssRUFBRTt1RUFDcUI7SUFFN0I7UUFEQyxLQUFLLEVBQUU7d0VBQ1k7SUFFcEI7UUFEQyxLQUFLLEVBQUU7eUVBQ2lCO0lBRXpCO1FBREMsS0FBSyxFQUFFO3VFQUNlO0lBRXZCO1FBREMsTUFBTSxFQUFFO3dFQUNpRDtJQVYvQyw0QkFBNEI7UUFKeEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyx3MENBQXNEO1NBQ3ZELENBQUM7T0FDVyw0QkFBNEIsQ0E2Q3hDO0lBQUQsbUNBQUM7Q0FBQSxBQTdDRCxDQUFrRCwwQkFBMEIsR0E2QzNFO1NBN0NZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZURhdGFTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdFN0b3JlSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LXN0b3JlLWl0ZW0vYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXItbGlzdC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlLWZpbmRlci1saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlckxpc3RJdGVtQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RTdG9yZUl0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKVxuICBsb2NhdGlvbkluZGV4OiBudW1iZXIgPSBudWxsO1xuICBASW5wdXQoKVxuICBsaXN0T3JkZXJMYWJlbDogYW55O1xuICBASW5wdXQoKVxuICBkaXNwbGF5RGlzdGFuY2U6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHVzZUNsaWNrRXZlbnQ6IGJvb2xlYW47XG4gIEBPdXRwdXQoKVxuICBzdG9yZUl0ZW1DbGljazogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlRGF0YVNlcnZpY2U6IFN0b3JlRGF0YVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKHN0b3JlRGF0YVNlcnZpY2UpO1xuICB9XG5cbiAgaGFuZGxlU3RvcmVJdGVtQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMubG9jYXRpb25JbmRleCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zdG9yZUl0ZW1DbGljay5lbWl0KHRoaXMubG9jYXRpb25JbmRleCk7XG4gICAgfVxuICB9XG5cbiAgdmlld1N0b3JlKGxvY2F0aW9uOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKFt0aGlzLnByZXBhcmVSb3V0ZVVybChsb2NhdGlvbildKTtcbiAgfVxuXG4gIHByZXBhcmVSb3V0ZVVybChsb2NhdGlvbjogYW55KTogc3RyaW5nIHtcbiAgICBjb25zdCBjb3VudHJ5UGFyYW0gPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5jb3VudHJ5XG4gICAgICA/IGBjb3VudHJ5LyR7dGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuY291bnRyeX0vYFxuICAgICAgOiAnJztcbiAgICBjb25zdCByZWdpb25QYXJhbSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnJlZ2lvblxuICAgICAgPyBgcmVnaW9uLyR7dGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMucmVnaW9ufS9gXG4gICAgICA6ICcnO1xuICAgIHJldHVybiBgc3RvcmUtZmluZGVyLyR7Y291bnRyeVBhcmFtfSR7cmVnaW9uUGFyYW19JHtsb2NhdGlvbi5uYW1lfWA7XG4gIH1cblxuICBvbktleShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMuaGFuZGxlU3RvcmVJdGVtQ2xpY2soKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==