import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutingService, StoreFinderService, GeoPoint } from '@spartacus/core';
let StoreFinderGridComponent = class StoreFinderGridComponent {
    constructor(storeFinderService, route, routingService) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.routingService = routingService;
    }
    ngOnInit() {
        this.isLoading$ = this.storeFinderService.getViewAllStoresLoading();
        this.locations$ = this.storeFinderService.getViewAllStoresEntities();
        this.defaultLocation = {};
        if (this.route.snapshot.params.country) {
            this.storeFinderService.findStoresAction('', {
                pageSize: -1,
            }, undefined, this.route.snapshot.params.country);
        }
    }
    viewStore(location) {
        this.routingService.go([this.prepareRouteUrl(location)]);
    }
    prepareRouteUrl(location) {
        const countryParam = this.route.snapshot.params.country
            ? `country/${this.route.snapshot.params.country}/`
            : '';
        const regionParam = this.route.snapshot.params.region
            ? `region/${this.route.snapshot.params.region}/`
            : '';
        return `store-finder/${countryParam}${regionParam}${location.name}`;
    }
    ngOnDestroy() { }
};
StoreFinderGridComponent.ctorParameters = () => [
    { type: StoreFinderService },
    { type: ActivatedRoute },
    { type: RoutingService }
];
StoreFinderGridComponent = __decorate([
    Component({
        selector: 'cx-store-finder-grid',
        template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div\n        class=\"col-sm-4 col-md-4 col-lg-3 item\"\n        *ngFor=\"let location of locations?.stores\"\n        (click)=\"viewStore(location)\"\n      >\n        <cx-store-finder-list-item\n          [location]=\"location\"\n        ></cx-store-finder-list-item>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
    })
], StoreFinderGridComponent);
export { StoreFinderGridComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItZ3JpZC9zdG9yZS1maW5kZXItZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTy9FLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBT25DLFlBQ1Usa0JBQXNDLEVBQ3RDLEtBQXFCLEVBQ3JCLGNBQThCO1FBRjlCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3JDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUNwRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBRTFCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQ3RDLEVBQUUsRUFDRjtnQkFDRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ2IsRUFDRCxTQUFTLEVBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDbkMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVELFNBQVMsQ0FBQyxRQUFhO1FBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELGVBQWUsQ0FBQyxRQUFhO1FBQzNCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPO1lBQ3JELENBQUMsQ0FBQyxXQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUc7WUFDbEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNQLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNO1lBQ25ELENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUc7WUFDaEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNQLE9BQU8sZ0JBQWdCLFlBQVksR0FBRyxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RFLENBQUM7SUFFRCxXQUFXLEtBQUksQ0FBQztDQUNqQixDQUFBOztZQXJDK0Isa0JBQWtCO1lBQy9CLGNBQWM7WUFDTCxjQUFjOztBQVY3Qix3QkFBd0I7SUFKcEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQywwbUJBQWlEO0tBQ2xELENBQUM7R0FDVyx3QkFBd0IsQ0E2Q3BDO1NBN0NZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlLCBTdG9yZUZpbmRlclNlcnZpY2UsIEdlb1BvaW50IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmUtZmluZGVyLWdyaWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmUtZmluZGVyLWdyaWQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlckdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGxvY2F0aW9ucyQ6IGFueTtcbiAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgZGVmYXVsdExvY2F0aW9uOiBHZW9Qb2ludDtcbiAgY291bnRyeTogc3RyaW5nO1xuICByZWdpb246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlRmluZGVyU2VydmljZTogU3RvcmVGaW5kZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzTG9hZGluZyQgPSB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5nZXRWaWV3QWxsU3RvcmVzTG9hZGluZygpO1xuICAgIHRoaXMubG9jYXRpb25zJCA9IHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmdldFZpZXdBbGxTdG9yZXNFbnRpdGllcygpO1xuICAgIHRoaXMuZGVmYXVsdExvY2F0aW9uID0ge307XG5cbiAgICBpZiAodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuY291bnRyeSkge1xuICAgICAgdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZmluZFN0b3Jlc0FjdGlvbihcbiAgICAgICAgJycsXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlU2l6ZTogLTEsXG4gICAgICAgIH0sXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuY291bnRyeVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB2aWV3U3RvcmUobG9jYXRpb246IGFueSk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oW3RoaXMucHJlcGFyZVJvdXRlVXJsKGxvY2F0aW9uKV0pO1xuICB9XG5cbiAgcHJlcGFyZVJvdXRlVXJsKGxvY2F0aW9uOiBhbnkpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNvdW50cnlQYXJhbSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmNvdW50cnlcbiAgICAgID8gYGNvdW50cnkvJHt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5jb3VudHJ5fS9gXG4gICAgICA6ICcnO1xuICAgIGNvbnN0IHJlZ2lvblBhcmFtID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMucmVnaW9uXG4gICAgICA/IGByZWdpb24vJHt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5yZWdpb259L2BcbiAgICAgIDogJyc7XG4gICAgcmV0dXJuIGBzdG9yZS1maW5kZXIvJHtjb3VudHJ5UGFyYW19JHtyZWdpb25QYXJhbX0ke2xvY2F0aW9uLm5hbWV9YDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge31cbn1cbiJdfQ==