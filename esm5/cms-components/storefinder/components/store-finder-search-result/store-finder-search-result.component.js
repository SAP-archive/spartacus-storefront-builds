import { __assign, __decorate } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GeoPoint, SearchConfig, StoreFinderSearchQuery, StoreFinderService, } from '@spartacus/core';
var StoreFinderSearchResultComponent = /** @class */ (function () {
    function StoreFinderSearchResultComponent(storeFinderService, route) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.countryCode = null;
        this.searchConfig = {
            currentPage: 0,
        };
    }
    StoreFinderSearchResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.queryParams.subscribe(function (params) {
            return _this.initialize(params);
        });
    };
    StoreFinderSearchResultComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    StoreFinderSearchResultComponent.prototype.viewPage = function (pageNumber) {
        this.searchConfig = __assign(__assign({}, this.searchConfig), { currentPage: pageNumber });
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation);
    };
    StoreFinderSearchResultComponent.prototype.initialize = function (params) {
        this.searchQuery = this.parseParameters(params);
        this.useMyLocation = params && params.useMyLocation ? true : false;
        this.searchConfig = __assign(__assign({}, this.searchConfig), { currentPage: 0 });
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation);
        this.isLoading$ = this.storeFinderService.getStoresLoading();
        this.locations$ = this.storeFinderService.getFindStoresEntities();
    };
    StoreFinderSearchResultComponent.prototype.parseParameters = function (queryParams) {
        var searchQuery;
        if (queryParams.query) {
            searchQuery = { queryText: queryParams.query };
        }
        else {
            searchQuery = { queryText: '' };
        }
        searchQuery.useMyLocation =
            queryParams.useMyLocation != null &&
                queryParams.useMyLocation.toUpperCase() === 'TRUE';
        return searchQuery;
    };
    StoreFinderSearchResultComponent.ctorParameters = function () { return [
        { type: StoreFinderService },
        { type: ActivatedRoute }
    ]; };
    StoreFinderSearchResultComponent = __decorate([
        Component({
            selector: 'cx-store-finder-search-result',
            template: "<div\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div *ngIf=\"locations?.stores.length\">\n    <div class=\"cx-pagination\">\n      <cx-pagination\n        [pagination]=\"locations.pagination\"\n        (viewPageEvent)=\"viewPage($event)\"\n      ></cx-pagination>\n    </div>\n  </div>\n  <cx-store-finder-list\n    *ngIf=\"locations?.stores.length\"\n    [locations]=\"locations\"\n    [useMylocation]=\"useMyLocation\"\n  ></cx-store-finder-list>\n  <div class=\"container\" *ngIf=\"!locations?.stores.length\">\n    <div class=\"row\">\n      <span class=\"cx-no-stores\">{{\n        'storeFinder.noStoresMessage' | cxTranslate\n      }}</span>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
        })
    ], StoreFinderSearchResultComponent);
    return StoreFinderSearchResultComponent;
}());
export { StoreFinderSearchResultComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUNMLFFBQVEsRUFDUixZQUFZLEVBQ1osc0JBQXNCLEVBQ3RCLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBT3pCO0lBYUUsMENBQ1Usa0JBQXNDLEVBQ3RDLEtBQXFCO1FBRHJCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFQL0IsZ0JBQVcsR0FBVyxJQUFJLENBQUM7UUFDM0IsaUJBQVksR0FBaUI7WUFDM0IsV0FBVyxFQUFFLENBQUM7U0FDZixDQUFDO0lBS0MsQ0FBQztJQUVKLG1EQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUN6RCxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQXZCLENBQXVCLENBQ3hCLENBQUM7SUFDSixDQUFDO0lBRUQsc0RBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUVELG1EQUFRLEdBQVIsVUFBUyxVQUFrQjtRQUN6QixJQUFJLENBQUMsWUFBWSx5QkFBUSxJQUFJLENBQUMsWUFBWSxLQUFFLFdBQVcsRUFBRSxVQUFVLEdBQUUsQ0FBQztRQUN0RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUMxQixJQUFJLENBQUMsWUFBWSxFQUNqQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsYUFBYSxDQUNuQixDQUFDO0lBQ0osQ0FBQztJQUVPLHFEQUFVLEdBQWxCLFVBQW1CLE1BQWM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ25FLElBQUksQ0FBQyxZQUFZLHlCQUFRLElBQUksQ0FBQyxZQUFZLEtBQUUsV0FBVyxFQUFFLENBQUMsR0FBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQzFCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQUM7UUFFRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDcEUsQ0FBQztJQUVPLDBEQUFlLEdBQXZCLFVBQXdCLFdBRXZCO1FBQ0MsSUFBSSxXQUFtQyxDQUFDO1FBRXhDLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRTtZQUNyQixXQUFXLEdBQUcsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hEO2FBQU07WUFDTCxXQUFXLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7U0FDakM7UUFFRCxXQUFXLENBQUMsYUFBYTtZQUN2QixXQUFXLENBQUMsYUFBYSxJQUFJLElBQUk7Z0JBQ2pDLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLEtBQUssTUFBTSxDQUFDO1FBRXJELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7O2dCQTNENkIsa0JBQWtCO2dCQUMvQixjQUFjOztJQWZwQixnQ0FBZ0M7UUFKNUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLCtCQUErQjtZQUN6QyxrMkJBQTBEO1NBQzNELENBQUM7T0FDVyxnQ0FBZ0MsQ0EwRTVDO0lBQUQsdUNBQUM7Q0FBQSxBQTFFRCxJQTBFQztTQTFFWSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEdlb1BvaW50LFxuICBTZWFyY2hDb25maWcsXG4gIFN0b3JlRmluZGVyU2VhcmNoUXVlcnksXG4gIFN0b3JlRmluZGVyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyU2VhcmNoUmVzdWx0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBsb2NhdGlvbnM6IGFueTtcbiAgc2VhcmNoUXVlcnk6IFN0b3JlRmluZGVyU2VhcmNoUXVlcnk7XG4gIGxvY2F0aW9ucyQ6IE9ic2VydmFibGU8YW55PjtcbiAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBnZW9sb2NhdGlvbjogR2VvUG9pbnQ7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICB1c2VNeUxvY2F0aW9uOiBib29sZWFuO1xuICBjb3VudHJ5Q29kZTogc3RyaW5nID0gbnVsbDtcbiAgc2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWcgPSB7XG4gICAgY3VycmVudFBhZ2U6IDAsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZUZpbmRlclNlcnZpY2U6IFN0b3JlRmluZGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT5cbiAgICAgIHRoaXMuaW5pdGlhbGl6ZShwYXJhbXMpXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICB2aWV3UGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICB0aGlzLnNlYXJjaENvbmZpZyA9IHsgLi4udGhpcy5zZWFyY2hDb25maWcsIGN1cnJlbnRQYWdlOiBwYWdlTnVtYmVyIH07XG4gICAgdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZmluZFN0b3Jlc0FjdGlvbihcbiAgICAgIHRoaXMuc2VhcmNoUXVlcnkucXVlcnlUZXh0LFxuICAgICAgdGhpcy5zZWFyY2hDb25maWcsXG4gICAgICB0aGlzLmdlb2xvY2F0aW9uLFxuICAgICAgdGhpcy5jb3VudHJ5Q29kZSxcbiAgICAgIHRoaXMudXNlTXlMb2NhdGlvblxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemUocGFyYW1zOiBQYXJhbXMpIHtcbiAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gdGhpcy5wYXJzZVBhcmFtZXRlcnMocGFyYW1zKTtcbiAgICB0aGlzLnVzZU15TG9jYXRpb24gPSBwYXJhbXMgJiYgcGFyYW1zLnVzZU15TG9jYXRpb24gPyB0cnVlIDogZmFsc2U7XG4gICAgdGhpcy5zZWFyY2hDb25maWcgPSB7IC4uLnRoaXMuc2VhcmNoQ29uZmlnLCBjdXJyZW50UGFnZTogMCB9O1xuICAgIHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmZpbmRTdG9yZXNBY3Rpb24oXG4gICAgICB0aGlzLnNlYXJjaFF1ZXJ5LnF1ZXJ5VGV4dCxcbiAgICAgIHRoaXMuc2VhcmNoQ29uZmlnLFxuICAgICAgdGhpcy5nZW9sb2NhdGlvbixcbiAgICAgIHRoaXMuY291bnRyeUNvZGUsXG4gICAgICB0aGlzLnVzZU15TG9jYXRpb25cbiAgICApO1xuXG4gICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZ2V0U3RvcmVzTG9hZGluZygpO1xuICAgIHRoaXMubG9jYXRpb25zJCA9IHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmdldEZpbmRTdG9yZXNFbnRpdGllcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZVBhcmFtZXRlcnMocXVlcnlQYXJhbXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH0pOiBTdG9yZUZpbmRlclNlYXJjaFF1ZXJ5IHtcbiAgICBsZXQgc2VhcmNoUXVlcnk6IFN0b3JlRmluZGVyU2VhcmNoUXVlcnk7XG5cbiAgICBpZiAocXVlcnlQYXJhbXMucXVlcnkpIHtcbiAgICAgIHNlYXJjaFF1ZXJ5ID0geyBxdWVyeVRleHQ6IHF1ZXJ5UGFyYW1zLnF1ZXJ5IH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlYXJjaFF1ZXJ5ID0geyBxdWVyeVRleHQ6ICcnIH07XG4gICAgfVxuXG4gICAgc2VhcmNoUXVlcnkudXNlTXlMb2NhdGlvbiA9XG4gICAgICBxdWVyeVBhcmFtcy51c2VNeUxvY2F0aW9uICE9IG51bGwgJiZcbiAgICAgIHF1ZXJ5UGFyYW1zLnVzZU15TG9jYXRpb24udG9VcHBlckNhc2UoKSA9PT0gJ1RSVUUnO1xuXG4gICAgcmV0dXJuIHNlYXJjaFF1ZXJ5O1xuICB9XG59XG4iXX0=