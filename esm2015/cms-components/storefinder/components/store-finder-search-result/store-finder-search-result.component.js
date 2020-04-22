import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GeoPoint, SearchConfig, StoreFinderSearchQuery, StoreFinderService, StoreFinderConfig, } from '@spartacus/core';
let StoreFinderSearchResultComponent = class StoreFinderSearchResultComponent {
    constructor(storeFinderService, route, config) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.config = config;
        this.countryCode = null;
        this.searchConfig = {
            currentPage: 0,
        };
    }
    ngOnInit() {
        this.subscription = this.route.queryParams.subscribe((params) => this.initialize(params));
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    viewPage(pageNumber) {
        this.searchConfig = Object.assign(Object.assign({}, this.searchConfig), { currentPage: pageNumber });
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation, this.radius);
    }
    initialize(params) {
        this.searchQuery = this.parseParameters(params);
        this.useMyLocation = params && params.useMyLocation ? true : false;
        this.searchConfig = Object.assign(Object.assign({}, this.searchConfig), { currentPage: 0 });
        this.radius = this.config.googleMaps.radius;
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation, this.radius);
        this.isLoading$ = this.storeFinderService.getStoresLoading();
        this.locations$ = this.storeFinderService.getFindStoresEntities();
    }
    parseParameters(queryParams) {
        let searchQuery;
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
    }
};
StoreFinderSearchResultComponent.ctorParameters = () => [
    { type: StoreFinderService },
    { type: ActivatedRoute },
    { type: StoreFinderConfig }
];
StoreFinderSearchResultComponent = __decorate([
    Component({
        selector: 'cx-store-finder-search-result',
        template: "<div\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div *ngIf=\"locations?.stores.length\">\n    <div class=\"cx-pagination\">\n      <cx-pagination\n        [pagination]=\"locations.pagination\"\n        (viewPageEvent)=\"viewPage($event)\"\n      ></cx-pagination>\n    </div>\n  </div>\n  <cx-store-finder-list\n    *ngIf=\"locations?.stores.length\"\n    [locations]=\"locations\"\n    [useMylocation]=\"useMyLocation\"\n  ></cx-store-finder-list>\n  <div class=\"container\" *ngIf=\"!locations?.stores.length\">\n    <div class=\"row\">\n      <span class=\"cx-no-stores\">{{\n        'storeFinder.noStoresMessage' | cxTranslate\n      }}</span>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
    })
], StoreFinderSearchResultComponent);
export { StoreFinderSearchResultComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUNMLFFBQVEsRUFDUixZQUFZLEVBQ1osc0JBQXNCLEVBQ3RCLGtCQUFrQixFQUNsQixpQkFBaUIsR0FDbEIsTUFBTSxpQkFBaUIsQ0FBQztBQU96QixJQUFhLGdDQUFnQyxHQUE3QyxNQUFhLGdDQUFnQztJQWMzQyxZQUNVLGtCQUFzQyxFQUN0QyxLQUFxQixFQUNuQixNQUF5QjtRQUYzQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBYnJDLGdCQUFXLEdBQVcsSUFBSSxDQUFDO1FBQzNCLGlCQUFZLEdBQWlCO1lBQzNCLFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQztJQVdDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUM5RCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUN4QixDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsVUFBa0I7UUFDekIsSUFBSSxDQUFDLFlBQVksbUNBQVEsSUFBSSxDQUFDLFlBQVksS0FBRSxXQUFXLEVBQUUsVUFBVSxHQUFFLENBQUM7UUFDdEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFDMUIsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FDWixDQUFDO0lBQ0osQ0FBQztJQUVPLFVBQVUsQ0FBQyxNQUFjO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNuRSxJQUFJLENBQUMsWUFBWSxtQ0FBUSxJQUFJLENBQUMsWUFBWSxLQUFFLFdBQVcsRUFBRSxDQUFDLEdBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUM1QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUMxQixJQUFJLENBQUMsWUFBWSxFQUNqQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsTUFBTSxDQUNaLENBQUM7UUFFRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDcEUsQ0FBQztJQUVPLGVBQWUsQ0FBQyxXQUV2QjtRQUNDLElBQUksV0FBbUMsQ0FBQztRQUV4QyxJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUU7WUFDckIsV0FBVyxHQUFHLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoRDthQUFNO1lBQ0wsV0FBVyxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO1NBQ2pDO1FBRUQsV0FBVyxDQUFDLGFBQWE7WUFDdkIsV0FBVyxDQUFDLGFBQWEsSUFBSSxJQUFJO2dCQUNqQyxXQUFXLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxLQUFLLE1BQU0sQ0FBQztRQUVyRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0NBQ0YsQ0FBQTs7WUFoRStCLGtCQUFrQjtZQUMvQixjQUFjO1lBQ1gsaUJBQWlCOztBQWpCMUIsZ0NBQWdDO0lBSjVDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSwrQkFBK0I7UUFDekMsazJCQUEwRDtLQUMzRCxDQUFDO0dBQ1csZ0NBQWdDLENBK0U1QztTQS9FWSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEdlb1BvaW50LFxuICBTZWFyY2hDb25maWcsXG4gIFN0b3JlRmluZGVyU2VhcmNoUXVlcnksXG4gIFN0b3JlRmluZGVyU2VydmljZSxcbiAgU3RvcmVGaW5kZXJDb25maWcsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlclNlYXJjaFJlc3VsdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgbG9jYXRpb25zOiBhbnk7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICB1c2VNeUxvY2F0aW9uOiBib29sZWFuO1xuICBjb3VudHJ5Q29kZTogc3RyaW5nID0gbnVsbDtcbiAgc2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWcgPSB7XG4gICAgY3VycmVudFBhZ2U6IDAsXG4gIH07XG4gIHJhZGl1czogbnVtYmVyO1xuICBzZWFyY2hRdWVyeTogU3RvcmVGaW5kZXJTZWFyY2hRdWVyeTtcbiAgZ2VvbG9jYXRpb246IEdlb1BvaW50O1xuICBsb2NhdGlvbnMkOiBPYnNlcnZhYmxlPGFueT47XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlRmluZGVyU2VydmljZTogU3RvcmVGaW5kZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByb3RlY3RlZCBjb25maWc6IFN0b3JlRmluZGVyQ29uZmlnXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+XG4gICAgICB0aGlzLmluaXRpYWxpemUocGFyYW1zKVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgdmlld1BhZ2UocGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWFyY2hDb25maWcgPSB7IC4uLnRoaXMuc2VhcmNoQ29uZmlnLCBjdXJyZW50UGFnZTogcGFnZU51bWJlciB9O1xuICAgIHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmZpbmRTdG9yZXNBY3Rpb24oXG4gICAgICB0aGlzLnNlYXJjaFF1ZXJ5LnF1ZXJ5VGV4dCxcbiAgICAgIHRoaXMuc2VhcmNoQ29uZmlnLFxuICAgICAgdGhpcy5nZW9sb2NhdGlvbixcbiAgICAgIHRoaXMuY291bnRyeUNvZGUsXG4gICAgICB0aGlzLnVzZU15TG9jYXRpb24sXG4gICAgICB0aGlzLnJhZGl1c1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemUocGFyYW1zOiBQYXJhbXMpIHtcbiAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gdGhpcy5wYXJzZVBhcmFtZXRlcnMocGFyYW1zKTtcbiAgICB0aGlzLnVzZU15TG9jYXRpb24gPSBwYXJhbXMgJiYgcGFyYW1zLnVzZU15TG9jYXRpb24gPyB0cnVlIDogZmFsc2U7XG4gICAgdGhpcy5zZWFyY2hDb25maWcgPSB7IC4uLnRoaXMuc2VhcmNoQ29uZmlnLCBjdXJyZW50UGFnZTogMCB9O1xuICAgIHRoaXMucmFkaXVzID0gdGhpcy5jb25maWcuZ29vZ2xlTWFwcy5yYWRpdXM7XG4gICAgdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZmluZFN0b3Jlc0FjdGlvbihcbiAgICAgIHRoaXMuc2VhcmNoUXVlcnkucXVlcnlUZXh0LFxuICAgICAgdGhpcy5zZWFyY2hDb25maWcsXG4gICAgICB0aGlzLmdlb2xvY2F0aW9uLFxuICAgICAgdGhpcy5jb3VudHJ5Q29kZSxcbiAgICAgIHRoaXMudXNlTXlMb2NhdGlvbixcbiAgICAgIHRoaXMucmFkaXVzXG4gICAgKTtcblxuICAgIHRoaXMuaXNMb2FkaW5nJCA9IHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmdldFN0b3Jlc0xvYWRpbmcoKTtcbiAgICB0aGlzLmxvY2F0aW9ucyQgPSB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5nZXRGaW5kU3RvcmVzRW50aXRpZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VQYXJhbWV0ZXJzKHF1ZXJ5UGFyYW1zOiB7XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9KTogU3RvcmVGaW5kZXJTZWFyY2hRdWVyeSB7XG4gICAgbGV0IHNlYXJjaFF1ZXJ5OiBTdG9yZUZpbmRlclNlYXJjaFF1ZXJ5O1xuXG4gICAgaWYgKHF1ZXJ5UGFyYW1zLnF1ZXJ5KSB7XG4gICAgICBzZWFyY2hRdWVyeSA9IHsgcXVlcnlUZXh0OiBxdWVyeVBhcmFtcy5xdWVyeSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWFyY2hRdWVyeSA9IHsgcXVlcnlUZXh0OiAnJyB9O1xuICAgIH1cblxuICAgIHNlYXJjaFF1ZXJ5LnVzZU15TG9jYXRpb24gPVxuICAgICAgcXVlcnlQYXJhbXMudXNlTXlMb2NhdGlvbiAhPSBudWxsICYmXG4gICAgICBxdWVyeVBhcmFtcy51c2VNeUxvY2F0aW9uLnRvVXBwZXJDYXNlKCkgPT09ICdUUlVFJztcblxuICAgIHJldHVybiBzZWFyY2hRdWVyeTtcbiAgfVxufVxuIl19