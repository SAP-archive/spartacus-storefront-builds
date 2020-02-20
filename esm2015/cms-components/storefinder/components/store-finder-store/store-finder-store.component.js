import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { StoreFinderService, PointOfService, RoutingService, } from '@spartacus/core';
import { ActivatedRoute } from '@angular/router';
import { ICON_TYPE } from '../../../misc/icon';
let StoreFinderStoreComponent = class StoreFinderStoreComponent {
    constructor(storeFinderService, route, routingService) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.routingService = routingService;
        this.iconTypes = ICON_TYPE;
    }
    ngOnInit() {
        if (!this.location) {
            this.requestStoresData();
            this.location$ = this.storeFinderService.getFindStoresEntities();
            this.isLoading$ = this.storeFinderService.getStoresLoading();
        }
    }
    requestStoresData() {
        this.storeFinderService.viewStoreById(this.route.snapshot.params.store);
    }
    goBack() {
        this.routingService.go([
            `store-finder/country/${this.route.snapshot.params.country}`,
        ]);
    }
};
StoreFinderStoreComponent.ctorParameters = () => [
    { type: StoreFinderService },
    { type: ActivatedRoute },
    { type: RoutingService }
];
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
export { StoreFinderStoreComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXN0b3JlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3N0b3JlZmluZGVyL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXN0b3JlL3N0b3JlLWZpbmRlci1zdG9yZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLGNBQWMsR0FDZixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFNL0MsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUFRcEMsWUFDVSxrQkFBc0MsRUFDdEMsS0FBcUIsRUFDckIsY0FBOEI7UUFGOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFSeEMsY0FBUyxHQUFHLFNBQVMsQ0FBQztJQVNuQixDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDakUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUM5RDtJQUNILENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO1lBQ3JCLHdCQUF3QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1NBQzdELENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBOztZQXRCK0Isa0JBQWtCO1lBQy9CLGNBQWM7WUFDTCxjQUFjOztBQU4vQjtJQUFSLEtBQUssRUFBRTsyREFBMEI7QUFDekI7SUFBUixLQUFLLEVBQUU7NkRBQXFCO0FBTmxCLHlCQUF5QjtJQUpyQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLDh5QkFBa0Q7S0FDbkQsQ0FBQztHQUNXLHlCQUF5QixDQStCckM7U0EvQlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBTdG9yZUZpbmRlclNlcnZpY2UsXG4gIFBvaW50T2ZTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL21pc2MvaWNvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b3JlLWZpbmRlci1zdG9yZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1maW5kZXItc3RvcmUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlclN0b3JlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbG9jYXRpb24kOiBPYnNlcnZhYmxlPGFueT47XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8YW55PjtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIEBJbnB1dCgpIGxvY2F0aW9uOiBQb2ludE9mU2VydmljZTtcbiAgQElucHV0KCkgZGlzYWJsZU1hcDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlRmluZGVyU2VydmljZTogU3RvcmVGaW5kZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMubG9jYXRpb24pIHtcbiAgICAgIHRoaXMucmVxdWVzdFN0b3Jlc0RhdGEoKTtcbiAgICAgIHRoaXMubG9jYXRpb24kID0gdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZ2V0RmluZFN0b3Jlc0VudGl0aWVzKCk7XG4gICAgICB0aGlzLmlzTG9hZGluZyQgPSB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5nZXRTdG9yZXNMb2FkaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgcmVxdWVzdFN0b3Jlc0RhdGEoKSB7XG4gICAgdGhpcy5zdG9yZUZpbmRlclNlcnZpY2Uudmlld1N0b3JlQnlJZCh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5zdG9yZSk7XG4gIH1cblxuICBnb0JhY2soKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyhbXG4gICAgICBgc3RvcmUtZmluZGVyL2NvdW50cnkvJHt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5jb3VudHJ5fWAsXG4gICAgXSk7XG4gIH1cbn1cbiJdfQ==