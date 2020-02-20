import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { StoreFinderService } from '@spartacus/core';
var StoreFinderStoresCountComponent = /** @class */ (function () {
    function StoreFinderStoresCountComponent(storeFinderService) {
        this.storeFinderService = storeFinderService;
    }
    StoreFinderStoresCountComponent.prototype.ngOnInit = function () {
        this.storeFinderService.viewAllStores();
        this.locations$ = this.storeFinderService.getViewAllStoresEntities();
        this.isLoading$ = this.storeFinderService.getViewAllStoresLoading();
    };
    StoreFinderStoresCountComponent.ctorParameters = function () { return [
        { type: StoreFinderService }
    ]; };
    StoreFinderStoresCountComponent = __decorate([
        Component({
            selector: 'cx-store-finder-stores-count',
            template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"cx-count container\">\n    <div class=\"row\" *ngIf=\"locations?.length\">\n      <div\n        *ngFor=\"let country of locations\"\n        class=\"cx-set col-sm-6 col-md-4 col-lg-4 col-xl-3\"\n      >\n        <a [routerLink]=\"['../country', country.isoCode]\" class=\"btn-link\">\n          <div class=\"cx-title\">\n            <span\n              [ngClass]=\"\n                country?.storeCountDataList\n                  ? 'country-header'\n                  : 'country-header-link'\n              \"\n              class=\"cx-name\"\n              >{{ country.name }}</span\n            >\n            <span\n              [ngClass]=\"\n                country?.storeCountDataList\n                  ? 'country-header'\n                  : 'country-header-link'\n              \"\n              *ngIf=\"!country?.storeCountDataList\"\n              class=\"cx-country-count\"\n              >({{ country.count }})</span\n            >\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"!locations?.length\">\n      <span class=\"cx-no-stores\">{{\n        'storeFinder.noStoresMessage' | cxTranslate\n      }}</span>\n    </div>\n  </div>\n</ng-container>\n<ng-template #loading>\n  <div class=\"cx-count-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
        })
    ], StoreFinderStoresCountComponent);
    return StoreFinderStoresCountComponent;
}());
export { StoreFinderStoresCountComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXN0b3Jlcy1jb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1zdG9yZXMtY291bnQvc3RvcmUtZmluZGVyLXN0b3Jlcy1jb3VudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPckQ7SUFJRSx5Q0FBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFBRyxDQUFDO0lBRTlELGtEQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQ3RFLENBQUM7O2dCQU51QyxrQkFBa0I7O0lBSi9DLCtCQUErQjtRQUozQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsOEJBQThCO1lBQ3hDLG83Q0FBeUQ7U0FDMUQsQ0FBQztPQUNXLCtCQUErQixDQVczQztJQUFELHNDQUFDO0NBQUEsQUFYRCxJQVdDO1NBWFksK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b3JlLWZpbmRlci1zdG9yZXMtY291bnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmUtZmluZGVyLXN0b3Jlcy1jb3VudC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyU3RvcmVzQ291bnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsb2NhdGlvbnMkOiBPYnNlcnZhYmxlPGFueT47XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZUZpbmRlclNlcnZpY2U6IFN0b3JlRmluZGVyU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0b3JlRmluZGVyU2VydmljZS52aWV3QWxsU3RvcmVzKCk7XG4gICAgdGhpcy5sb2NhdGlvbnMkID0gdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZ2V0Vmlld0FsbFN0b3Jlc0VudGl0aWVzKCk7XG4gICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZ2V0Vmlld0FsbFN0b3Jlc0xvYWRpbmcoKTtcbiAgfVxufVxuIl19