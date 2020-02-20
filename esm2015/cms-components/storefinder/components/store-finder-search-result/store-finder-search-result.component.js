import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GeoPoint, SearchConfig, StoreFinderSearchQuery, StoreFinderService, } from '@spartacus/core';
let StoreFinderSearchResultComponent = class StoreFinderSearchResultComponent {
    constructor(storeFinderService, route) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.countryCode = null;
        this.searchConfig = {
            currentPage: 0,
        };
    }
    ngOnInit() {
        this.subscription = this.route.queryParams.subscribe(params => this.initialize(params));
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    viewPage(pageNumber) {
        this.searchConfig = Object.assign(Object.assign({}, this.searchConfig), { currentPage: pageNumber });
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation);
    }
    initialize(params) {
        this.searchQuery = this.parseParameters(params);
        this.useMyLocation = params && params.useMyLocation ? true : false;
        this.searchConfig = Object.assign(Object.assign({}, this.searchConfig), { currentPage: 0 });
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation);
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
    { type: ActivatedRoute }
];
StoreFinderSearchResultComponent = __decorate([
    Component({
        selector: 'cx-store-finder-search-result',
        template: "<div\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div *ngIf=\"locations?.stores.length\">\n    <div class=\"cx-pagination\">\n      <cx-pagination\n        [pagination]=\"locations.pagination\"\n        (viewPageEvent)=\"viewPage($event)\"\n      ></cx-pagination>\n    </div>\n  </div>\n  <cx-store-finder-list\n    *ngIf=\"locations?.stores.length\"\n    [locations]=\"locations\"\n    [useMylocation]=\"useMyLocation\"\n  ></cx-store-finder-list>\n  <div class=\"container\" *ngIf=\"!locations?.stores.length\">\n    <div class=\"row\">\n      <span class=\"cx-no-stores\">{{\n        'storeFinder.noStoresMessage' | cxTranslate\n      }}</span>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
    })
], StoreFinderSearchResultComponent);
export { StoreFinderSearchResultComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUNMLFFBQVEsRUFDUixZQUFZLEVBQ1osc0JBQXNCLEVBQ3RCLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBT3pCLElBQWEsZ0NBQWdDLEdBQTdDLE1BQWEsZ0NBQWdDO0lBYTNDLFlBQ1Usa0JBQXNDLEVBQ3RDLEtBQXFCO1FBRHJCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFQL0IsZ0JBQVcsR0FBVyxJQUFJLENBQUM7UUFDM0IsaUJBQVksR0FBaUI7WUFDM0IsV0FBVyxFQUFFLENBQUM7U0FDZixDQUFDO0lBS0MsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUM1RCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUN4QixDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsVUFBa0I7UUFDekIsSUFBSSxDQUFDLFlBQVksbUNBQVEsSUFBSSxDQUFDLFlBQVksS0FBRSxXQUFXLEVBQUUsVUFBVSxHQUFFLENBQUM7UUFDdEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFDMUIsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FDbkIsQ0FBQztJQUNKLENBQUM7SUFFTyxVQUFVLENBQUMsTUFBYztRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbkUsSUFBSSxDQUFDLFlBQVksbUNBQVEsSUFBSSxDQUFDLFlBQVksS0FBRSxXQUFXLEVBQUUsQ0FBQyxHQUFFLENBQUM7UUFDN0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFDMUIsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FDbkIsQ0FBQztRQUVGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDN0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNwRSxDQUFDO0lBRU8sZUFBZSxDQUFDLFdBRXZCO1FBQ0MsSUFBSSxXQUFtQyxDQUFDO1FBRXhDLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRTtZQUNyQixXQUFXLEdBQUcsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hEO2FBQU07WUFDTCxXQUFXLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7U0FDakM7UUFFRCxXQUFXLENBQUMsYUFBYTtZQUN2QixXQUFXLENBQUMsYUFBYSxJQUFJLElBQUk7Z0JBQ2pDLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLEtBQUssTUFBTSxDQUFDO1FBRXJELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7Q0FDRixDQUFBOztZQTVEK0Isa0JBQWtCO1lBQy9CLGNBQWM7O0FBZnBCLGdDQUFnQztJQUo1QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsK0JBQStCO1FBQ3pDLGsyQkFBMEQ7S0FDM0QsQ0FBQztHQUNXLGdDQUFnQyxDQTBFNUM7U0ExRVksZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBHZW9Qb2ludCxcbiAgU2VhcmNoQ29uZmlnLFxuICBTdG9yZUZpbmRlclNlYXJjaFF1ZXJ5LFxuICBTdG9yZUZpbmRlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlclNlYXJjaFJlc3VsdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgbG9jYXRpb25zOiBhbnk7XG4gIHNlYXJjaFF1ZXJ5OiBTdG9yZUZpbmRlclNlYXJjaFF1ZXJ5O1xuICBsb2NhdGlvbnMkOiBPYnNlcnZhYmxlPGFueT47XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8YW55PjtcbiAgZ2VvbG9jYXRpb246IEdlb1BvaW50O1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgdXNlTXlMb2NhdGlvbjogYm9vbGVhbjtcbiAgY291bnRyeUNvZGU6IHN0cmluZyA9IG51bGw7XG4gIHNlYXJjaENvbmZpZzogU2VhcmNoQ29uZmlnID0ge1xuICAgIGN1cnJlbnRQYWdlOiAwLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmVGaW5kZXJTZXJ2aWNlOiBTdG9yZUZpbmRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+XG4gICAgICB0aGlzLmluaXRpYWxpemUocGFyYW1zKVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgdmlld1BhZ2UocGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWFyY2hDb25maWcgPSB7IC4uLnRoaXMuc2VhcmNoQ29uZmlnLCBjdXJyZW50UGFnZTogcGFnZU51bWJlciB9O1xuICAgIHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmZpbmRTdG9yZXNBY3Rpb24oXG4gICAgICB0aGlzLnNlYXJjaFF1ZXJ5LnF1ZXJ5VGV4dCxcbiAgICAgIHRoaXMuc2VhcmNoQ29uZmlnLFxuICAgICAgdGhpcy5nZW9sb2NhdGlvbixcbiAgICAgIHRoaXMuY291bnRyeUNvZGUsXG4gICAgICB0aGlzLnVzZU15TG9jYXRpb25cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplKHBhcmFtczogUGFyYW1zKSB7XG4gICAgdGhpcy5zZWFyY2hRdWVyeSA9IHRoaXMucGFyc2VQYXJhbWV0ZXJzKHBhcmFtcyk7XG4gICAgdGhpcy51c2VNeUxvY2F0aW9uID0gcGFyYW1zICYmIHBhcmFtcy51c2VNeUxvY2F0aW9uID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHRoaXMuc2VhcmNoQ29uZmlnID0geyAuLi50aGlzLnNlYXJjaENvbmZpZywgY3VycmVudFBhZ2U6IDAgfTtcbiAgICB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5maW5kU3RvcmVzQWN0aW9uKFxuICAgICAgdGhpcy5zZWFyY2hRdWVyeS5xdWVyeVRleHQsXG4gICAgICB0aGlzLnNlYXJjaENvbmZpZyxcbiAgICAgIHRoaXMuZ2VvbG9jYXRpb24sXG4gICAgICB0aGlzLmNvdW50cnlDb2RlLFxuICAgICAgdGhpcy51c2VNeUxvY2F0aW9uXG4gICAgKTtcblxuICAgIHRoaXMuaXNMb2FkaW5nJCA9IHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmdldFN0b3Jlc0xvYWRpbmcoKTtcbiAgICB0aGlzLmxvY2F0aW9ucyQgPSB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5nZXRGaW5kU3RvcmVzRW50aXRpZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VQYXJhbWV0ZXJzKHF1ZXJ5UGFyYW1zOiB7XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9KTogU3RvcmVGaW5kZXJTZWFyY2hRdWVyeSB7XG4gICAgbGV0IHNlYXJjaFF1ZXJ5OiBTdG9yZUZpbmRlclNlYXJjaFF1ZXJ5O1xuXG4gICAgaWYgKHF1ZXJ5UGFyYW1zLnF1ZXJ5KSB7XG4gICAgICBzZWFyY2hRdWVyeSA9IHsgcXVlcnlUZXh0OiBxdWVyeVBhcmFtcy5xdWVyeSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWFyY2hRdWVyeSA9IHsgcXVlcnlUZXh0OiAnJyB9O1xuICAgIH1cblxuICAgIHNlYXJjaFF1ZXJ5LnVzZU15TG9jYXRpb24gPVxuICAgICAgcXVlcnlQYXJhbXMudXNlTXlMb2NhdGlvbiAhPSBudWxsICYmXG4gICAgICBxdWVyeVBhcmFtcy51c2VNeUxvY2F0aW9uLnRvVXBwZXJDYXNlKCkgPT09ICdUUlVFJztcblxuICAgIHJldHVybiBzZWFyY2hRdWVyeTtcbiAgfVxufVxuIl19