/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { StoreFinderService } from '@spartacus/core';
var StoreFinderStoresCountComponent = /** @class */ (function () {
    function StoreFinderStoresCountComponent(storeFinderService) {
        this.storeFinderService = storeFinderService;
    }
    /**
     * @return {?}
     */
    StoreFinderStoresCountComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.storeFinderService.viewAllStores();
        this.locations$ = this.storeFinderService.getViewAllStoresEntities();
        this.isLoading$ = this.storeFinderService.getViewAllStoresLoading();
    };
    StoreFinderStoresCountComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-stores-count',
                    template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"cx-count container\">\n    <div *ngFor=\"let country of locations\" class=\"cx-set\">\n      <a [routerLink]=\"['../country', country.isoCode]\" class=\"btn-link\">\n        <div class=\"cx-title\">\n          <span\n            [ngClass]=\"\n              country?.storeCountDataList\n                ? 'country-header'\n                : 'country-header-link'\n            \"\n            class=\"cx-name\"\n            >{{ country.name }}</span\n          >\n          <span\n            [ngClass]=\"\n              country?.storeCountDataList\n                ? 'country-header'\n                : 'country-header-link'\n            \"\n            *ngIf=\"!country?.storeCountDataList\"\n            class=\"cx-country-count\"\n            >({{ country.count }})</span\n          >\n        </div>\n      </a>\n    </div>\n  </div>\n</ng-container>\n<ng-template #loading>\n  <div class=\"cx-count-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    StoreFinderStoresCountComponent.ctorParameters = function () { return [
        { type: StoreFinderService }
    ]; };
    return StoreFinderStoresCountComponent;
}());
export { StoreFinderStoresCountComponent };
if (false) {
    /** @type {?} */
    StoreFinderStoresCountComponent.prototype.locations$;
    /** @type {?} */
    StoreFinderStoresCountComponent.prototype.isLoading$;
    /**
     * @type {?}
     * @private
     */
    StoreFinderStoresCountComponent.prototype.storeFinderService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXN0b3Jlcy1jb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1zdG9yZXMtY291bnQvc3RvcmUtZmluZGVyLXN0b3Jlcy1jb3VudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHckQ7SUFRRSx5Q0FBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFBRyxDQUFDOzs7O0lBRTlELGtEQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDdEUsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLG9sQ0FBeUQ7aUJBQzFEOzs7O2dCQU5RLGtCQUFrQjs7SUFrQjNCLHNDQUFDO0NBQUEsQUFmRCxJQWVDO1NBWFksK0JBQStCOzs7SUFDMUMscURBQTRCOztJQUM1QixxREFBZ0M7Ozs7O0lBRXBCLDZEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXItc3RvcmVzLWNvdW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlLWZpbmRlci1zdG9yZXMtY291bnQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlclN0b3Jlc0NvdW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbG9jYXRpb25zJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmVGaW5kZXJTZXJ2aWNlOiBTdG9yZUZpbmRlclNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdG9yZUZpbmRlclNlcnZpY2Uudmlld0FsbFN0b3JlcygpO1xuICAgIHRoaXMubG9jYXRpb25zJCA9IHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmdldFZpZXdBbGxTdG9yZXNFbnRpdGllcygpO1xuICAgIHRoaXMuaXNMb2FkaW5nJCA9IHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmdldFZpZXdBbGxTdG9yZXNMb2FkaW5nKCk7XG4gIH1cbn1cbiJdfQ==