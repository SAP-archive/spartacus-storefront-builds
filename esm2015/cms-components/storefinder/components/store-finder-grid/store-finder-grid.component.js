import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreFinderService, GeoPoint } from '@spartacus/core';
let StoreFinderGridComponent = class StoreFinderGridComponent {
    constructor(storeFinderService, route) {
        this.storeFinderService = storeFinderService;
        this.route = route;
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
    ngOnDestroy() { }
};
StoreFinderGridComponent.ctorParameters = () => [
    { type: StoreFinderService },
    { type: ActivatedRoute }
];
StoreFinderGridComponent = __decorate([
    Component({
        selector: 'cx-store-finder-grid',
        template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div\n        class=\"col-sm-4 col-md-4 col-lg-3 item\"\n        *ngFor=\"let location of locations?.stores\"\n      >\n        <cx-store-finder-list-item\n          [location]=\"location\"\n        ></cx-store-finder-list-item>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
    })
], StoreFinderGridComponent);
export { StoreFinderGridComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItZ3JpZC9zdG9yZS1maW5kZXItZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPL0QsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFPbkMsWUFDVSxrQkFBc0MsRUFDdEMsS0FBcUI7UUFEckIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUM1QixDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDcEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNyRSxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUN0QyxFQUFFLEVBQ0Y7Z0JBQ0UsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUNiLEVBQ0QsU0FBUyxFQUNULElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQ25DLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxXQUFXLEtBQUksQ0FBQztDQUNqQixDQUFBOztZQXRCK0Isa0JBQWtCO1lBQy9CLGNBQWM7O0FBVHBCLHdCQUF3QjtJQUpwQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLGlrQkFBaUQ7S0FDbEQsQ0FBQztHQUNXLHdCQUF3QixDQThCcEM7U0E5Qlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZXJ2aWNlLCBHZW9Qb2ludCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b3JlLWZpbmRlci1ncmlkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlLWZpbmRlci1ncmlkLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBsb2NhdGlvbnMkOiBhbnk7XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGRlZmF1bHRMb2NhdGlvbjogR2VvUG9pbnQ7XG4gIGNvdW50cnk6IHN0cmluZztcbiAgcmVnaW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZUZpbmRlclNlcnZpY2U6IFN0b3JlRmluZGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZ2V0Vmlld0FsbFN0b3Jlc0xvYWRpbmcoKTtcbiAgICB0aGlzLmxvY2F0aW9ucyQgPSB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5nZXRWaWV3QWxsU3RvcmVzRW50aXRpZXMoKTtcbiAgICB0aGlzLmRlZmF1bHRMb2NhdGlvbiA9IHt9O1xuXG4gICAgaWYgKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmNvdW50cnkpIHtcbiAgICAgIHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmZpbmRTdG9yZXNBY3Rpb24oXG4gICAgICAgICcnLFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVNpemU6IC0xLFxuICAgICAgICB9LFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmNvdW50cnlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7fVxufVxuIl19