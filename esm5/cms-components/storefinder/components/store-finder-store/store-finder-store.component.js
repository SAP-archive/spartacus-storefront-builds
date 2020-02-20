import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { StoreFinderService, PointOfService, RoutingService, } from '@spartacus/core';
import { ActivatedRoute } from '@angular/router';
import { ICON_TYPE } from '../../../misc/icon';
var StoreFinderStoreComponent = /** @class */ (function () {
    function StoreFinderStoreComponent(storeFinderService, route, routingService) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.routingService = routingService;
        this.iconTypes = ICON_TYPE;
    }
    StoreFinderStoreComponent.prototype.ngOnInit = function () {
        if (!this.location) {
            this.requestStoresData();
            this.location$ = this.storeFinderService.getFindStoresEntities();
            this.isLoading$ = this.storeFinderService.getStoresLoading();
        }
    };
    StoreFinderStoreComponent.prototype.requestStoresData = function () {
        this.storeFinderService.viewStoreById(this.route.snapshot.params.store);
    };
    StoreFinderStoreComponent.prototype.goBack = function () {
        this.routingService.go([
            "store-finder/country/" + this.route.snapshot.params.country,
        ]);
    };
    StoreFinderStoreComponent.ctorParameters = function () { return [
        { type: StoreFinderService },
        { type: ActivatedRoute },
        { type: RoutingService }
    ]; };
    __decorate([
        Input()
    ], StoreFinderStoreComponent.prototype, "location", void 0);
    __decorate([
        Input()
    ], StoreFinderStoreComponent.prototype, "disableMap", void 0);
    StoreFinderStoreComponent = __decorate([
        Component({
            selector: 'cx-store-finder-store',
            template: "<div\n  class=\"container\"\n  *ngIf=\"\n    location || (!(isLoading$ | async) && (location$ | async)) as location;\n    else loading\n  \"\n>\n  <div class=\"row cx-store-actions\">\n    <div class=\"col-md-4 col-sm-6 col-lg-2\">\n      <button class=\"btn btn-block btn-action\" (click)=\"goBack()\">\n        <cx-icon [type]=\"iconTypes.CARET_LEFT\"></cx-icon>\n        {{ 'storeFinder.backToList' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12 p-0\">\n      <cx-store-finder-store-description\n        [disableMap]=\"disableMap\"\n        [location]=\"location\"\n      ></cx-store-finder-store-description>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
        })
    ], StoreFinderStoreComponent);
    return StoreFinderStoreComponent;
}());
export { StoreFinderStoreComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXN0b3JlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3N0b3JlZmluZGVyL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXN0b3JlL3N0b3JlLWZpbmRlci1zdG9yZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLGNBQWMsR0FDZixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFNL0M7SUFRRSxtQ0FDVSxrQkFBc0MsRUFDdEMsS0FBcUIsRUFDckIsY0FBOEI7UUFGOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFSeEMsY0FBUyxHQUFHLFNBQVMsQ0FBQztJQVNuQixDQUFDO0lBRUosNENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDakUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUM5RDtJQUNILENBQUM7SUFFRCxxREFBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsMENBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO1lBQ3JCLDBCQUF3QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBUztTQUM3RCxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFyQjZCLGtCQUFrQjtnQkFDL0IsY0FBYztnQkFDTCxjQUFjOztJQU4vQjtRQUFSLEtBQUssRUFBRTsrREFBMEI7SUFDekI7UUFBUixLQUFLLEVBQUU7aUVBQXFCO0lBTmxCLHlCQUF5QjtRQUpyQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLDh5QkFBa0Q7U0FDbkQsQ0FBQztPQUNXLHlCQUF5QixDQStCckM7SUFBRCxnQ0FBQztDQUFBLEFBL0JELElBK0JDO1NBL0JZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgU3RvcmVGaW5kZXJTZXJ2aWNlLFxuICBQb2ludE9mU2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9taXNjL2ljb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXItc3RvcmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmUtZmluZGVyLXN0b3JlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJTdG9yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxvY2F0aW9uJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGFueT47XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICBASW5wdXQoKSBsb2NhdGlvbjogUG9pbnRPZlNlcnZpY2U7XG4gIEBJbnB1dCgpIGRpc2FibGVNYXA6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZUZpbmRlclNlcnZpY2U6IFN0b3JlRmluZGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmxvY2F0aW9uKSB7XG4gICAgICB0aGlzLnJlcXVlc3RTdG9yZXNEYXRhKCk7XG4gICAgICB0aGlzLmxvY2F0aW9uJCA9IHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmdldEZpbmRTdG9yZXNFbnRpdGllcygpO1xuICAgICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZ2V0U3RvcmVzTG9hZGluZygpO1xuICAgIH1cbiAgfVxuXG4gIHJlcXVlc3RTdG9yZXNEYXRhKCkge1xuICAgIHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLnZpZXdTdG9yZUJ5SWQodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuc3RvcmUpO1xuICB9XG5cbiAgZ29CYWNrKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oW1xuICAgICAgYHN0b3JlLWZpbmRlci9jb3VudHJ5LyR7dGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuY291bnRyeX1gLFxuICAgIF0pO1xuICB9XG59XG4iXX0=