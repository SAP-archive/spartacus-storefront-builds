/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, ViewChild } from '@angular/core';
import { StoreDataService } from '@spartacus/core';
import { StoreFinderMapComponent } from '../../store-finder-map/store-finder-map.component';
import { ICON_TYPE } from './../../../../misc/icon/icon.model';
var StoreFinderListComponent = /** @class */ (function () {
    function StoreFinderListComponent(storeDataService, document) {
        this.storeDataService = storeDataService;
        this.document = document;
        this.iconTypes = ICON_TYPE;
        this.isDetailsModeVisible = false;
    }
    /**
     * @param {?} index
     * @param {?} location
     * @return {?}
     */
    StoreFinderListComponent.prototype.centerStoreOnMapByIndex = /**
     * @param {?} index
     * @param {?} location
     * @return {?}
     */
    function (index, location) {
        this.showStoreDetails(location);
        this.selectedStoreIndex = index;
        this.selectedStore = location;
        this.storeMap.centerMap(this.storeDataService.getStoreLatitude(this.locations.stores[index]), this.storeDataService.getStoreLongitude(this.locations.stores[index]));
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StoreFinderListComponent.prototype.selectStoreItemList = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.selectedStoreIndex = index;
        /** @type {?} */
        var storeListItem = this.document.getElementById('item-' + index);
        storeListItem.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    };
    /**
     * @param {?} location
     * @return {?}
     */
    StoreFinderListComponent.prototype.showStoreDetails = /**
     * @param {?} location
     * @return {?}
     */
    function (location) {
        this.isDetailsModeVisible = true;
        this.storeDetails = location;
    };
    /**
     * @return {?}
     */
    StoreFinderListComponent.prototype.hideStoreDetails = /**
     * @return {?}
     */
    function () {
        this.isDetailsModeVisible = false;
        this.selectedStoreIndex = undefined;
        this.selectedStore = undefined;
        this.storeMap.renderMap();
    };
    StoreFinderListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-list',
                    template: "<ng-container *ngIf=\"locations\">\n  <div class=\"container mb-2\">\n    <div class=\"row\" *ngIf=\"locations?.pagination\">\n      <div class=\"col-md-12\">\n        <cx-store-finder-pagination-details\n          [pagination]=\"locations.pagination\"\n        ></cx-store-finder-pagination-details>\n      </div>\n      <div class=\"col-md-2 text-left cx-back-wrapper\">\n        <button\n          class=\"btn btn-block btn-action\"\n          *ngIf=\"isDetailsModeVisible\"\n          (click)=\"hideStoreDetails()\"\n        >\n          <cx-icon [type]=\"iconTypes.CARET_LEFT\"></cx-icon>\n          {{ 'storeFinder.backToList' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"locations?.stores\" class=\"row cx-columns\">\n      <div class=\"col-md-4 cx-address-col\">\n        <div class=\"cx-store-details\" *ngIf=\"isDetailsModeVisible\">\n          <cx-store-finder-store-description\n            [location]=\"storeDetails\"\n            [disableMap]=\"true\"\n          ></cx-store-finder-store-description>\n        </div>\n        <ol class=\"cx-list\" *ngIf=\"!isDetailsModeVisible\">\n          <li\n            *ngFor=\"let location of locations?.stores; let i = index\"\n            id=\"{{ 'item-' + i }}\"\n            [ngClass]=\"{\n              'cx-selected-item': selectedStoreIndex === i\n            }\"\n            class=\"cx-list-items\"\n          >\n            <cx-store-finder-list-item\n              [location]=\"location\"\n              [locationIndex]=\"i\"\n              [displayDistance]=\"useMylocation\"\n              (storeItemClick)=\"centerStoreOnMapByIndex($event, location)\"\n              [listOrderLabel]=\"\n                i +\n                locations.pagination.currentPage *\n                  locations.pagination.pageSize +\n                1\n              \"\n            ></cx-store-finder-list-item>\n          </li>\n        </ol>\n      </div>\n      <div class=\"col-md-8 cx-map-col\">\n        <cx-store-finder-map\n          #storeMap\n          [locations]=\"locations.stores\"\n          (selectedStoreItem)=\"selectStoreItemList($event)\"\n        ></cx-store-finder-map>\n      </div>\n    </div>\n\n    <!-- mobile tabs for column set only -->\n\n    <div *ngIf=\"locations?.stores\" class=\"cx-columns-mobile\">\n      <ngb-tabset justify=\"center\">\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.listView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-address-col\">\n              <div class=\"cx-store-details\" *ngIf=\"isDetailsModeVisible\">\n                <cx-store-finder-store-description\n                  [location]=\"storeDetails\"\n                  [disableMap]=\"true\"\n                ></cx-store-finder-store-description>\n              </div>\n              <ol class=\"cx-list\" *ngIf=\"!isDetailsModeVisible\">\n                <li\n                  *ngFor=\"let location of locations?.stores; let i = index\"\n                  id=\"{{ 'item-' + i }}\"\n                  [ngClass]=\"{\n                    'cx-selected-item': selectedStoreIndex === i\n                  }\"\n                  class=\"cx-list-items\"\n                >\n                  <cx-store-finder-list-item\n                    [location]=\"location\"\n                    [locationIndex]=\"i\"\n                    [displayDistance]=\"useMylocation\"\n                    (storeItemClick)=\"centerStoreOnMapByIndex($event, location)\"\n                    [listOrderLabel]=\"\n                      i +\n                      locations.pagination.currentPage *\n                        locations.pagination.pageSize +\n                      1\n                    \"\n                  ></cx-store-finder-list-item>\n                </li>\n              </ol>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.mapView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-map-col\">\n              <cx-store-finder-map\n                #storeMap\n                [locations]=\"selectedStore ? [selectedStore] : locations.stores\"\n                (selectedStoreItem)=\"selectStoreItemList($event)\"\n              ></cx-store-finder-map>\n            </div>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n\n    <!-- mobile tabs end -->\n\n    <div *ngIf=\"!locations?.stores\" class=\"row\">\n      <div class=\"col-md-12 cx-not-found\">\n        {{ 'storeFinder.noStoreFound' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    StoreFinderListComponent.ctorParameters = function () { return [
        { type: StoreDataService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    StoreFinderListComponent.propDecorators = {
        locations: [{ type: Input }],
        useMylocation: [{ type: Input }],
        storeMap: [{ type: ViewChild, args: ['storeMap', { static: false },] }]
    };
    return StoreFinderListComponent;
}());
export { StoreFinderListComponent };
if (false) {
    /** @type {?} */
    StoreFinderListComponent.prototype.locations;
    /** @type {?} */
    StoreFinderListComponent.prototype.useMylocation;
    /** @type {?} */
    StoreFinderListComponent.prototype.storeMap;
    /** @type {?} */
    StoreFinderListComponent.prototype.selectedStore;
    /** @type {?} */
    StoreFinderListComponent.prototype.selectedStoreIndex;
    /** @type {?} */
    StoreFinderListComponent.prototype.isDetailsModeVisible;
    /** @type {?} */
    StoreFinderListComponent.prototype.storeDetails;
    /** @type {?} */
    StoreFinderListComponent.prototype.iconTypes;
    /**
     * @type {?}
     * @private
     */
    StoreFinderListComponent.prototype.storeDataService;
    /**
     * @type {?}
     * @private
     */
    StoreFinderListComponent.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC9zdG9yZS1maW5kZXItbGlzdC9zdG9yZS1maW5kZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBa0IsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFL0Q7SUFrQkUsa0NBQ1UsZ0JBQWtDLEVBQ2hCLFFBQWE7UUFEL0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBSnpDLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFNcEIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFFRCwwREFBdUI7Ozs7O0lBQXZCLFVBQXdCLEtBQWEsRUFBRSxRQUF3QjtRQUM3RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDckIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQ3BFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUN0RSxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxzREFBbUI7Ozs7SUFBbkIsVUFBb0IsS0FBYTtRQUMvQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDOztZQUMxQixhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNuRSxhQUFhLENBQUMsY0FBYyxDQUFDO1lBQzNCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLEtBQUssRUFBRSxRQUFRO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsbURBQWdCOzs7O0lBQWhCLFVBQWlCLFFBQXdCO1FBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELG1EQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Z0JBdERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQywycEpBQWlEO2lCQUNsRDs7OztnQkFQUSxnQkFBZ0I7Z0RBd0JwQixNQUFNLFNBQUMsUUFBUTs7OzRCQWZqQixLQUFLO2dDQUVMLEtBQUs7MkJBRUwsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBOEMxQywrQkFBQztDQUFBLEFBdkRELElBdURDO1NBbkRZLHdCQUF3Qjs7O0lBQ25DLDZDQUNlOztJQUNmLGlEQUN1Qjs7SUFDdkIsNENBQ2tDOztJQUVsQyxpREFBOEI7O0lBQzlCLHNEQUEyQjs7SUFDM0Isd0RBQThCOztJQUM5QixnREFBNkI7O0lBQzdCLDZDQUFzQjs7Ozs7SUFHcEIsb0RBQTBDOzs7OztJQUMxQyw0Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVEYXRhU2VydmljZSwgUG9pbnRPZlNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJNYXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zdG9yZS1maW5kZXItbWFwL3N0b3JlLWZpbmRlci1tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXItbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1maW5kZXItbGlzdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyTGlzdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGxvY2F0aW9uczogYW55O1xuICBASW5wdXQoKVxuICB1c2VNeWxvY2F0aW9uOiBib29sZWFuO1xuICBAVmlld0NoaWxkKCdzdG9yZU1hcCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBzdG9yZU1hcDogU3RvcmVGaW5kZXJNYXBDb21wb25lbnQ7XG5cbiAgc2VsZWN0ZWRTdG9yZTogUG9pbnRPZlNlcnZpY2U7XG4gIHNlbGVjdGVkU3RvcmVJbmRleDogbnVtYmVyO1xuICBpc0RldGFpbHNNb2RlVmlzaWJsZTogYm9vbGVhbjtcbiAgc3RvcmVEZXRhaWxzOiBQb2ludE9mU2VydmljZTtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmVEYXRhU2VydmljZTogU3RvcmVEYXRhU2VydmljZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnlcbiAgKSB7XG4gICAgdGhpcy5pc0RldGFpbHNNb2RlVmlzaWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgY2VudGVyU3RvcmVPbk1hcEJ5SW5kZXgoaW5kZXg6IG51bWJlciwgbG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlKTogdm9pZCB7XG4gICAgdGhpcy5zaG93U3RvcmVEZXRhaWxzKGxvY2F0aW9uKTtcbiAgICB0aGlzLnNlbGVjdGVkU3RvcmVJbmRleCA9IGluZGV4O1xuICAgIHRoaXMuc2VsZWN0ZWRTdG9yZSA9IGxvY2F0aW9uO1xuICAgIHRoaXMuc3RvcmVNYXAuY2VudGVyTWFwKFxuICAgICAgdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmdldFN0b3JlTGF0aXR1ZGUodGhpcy5sb2NhdGlvbnMuc3RvcmVzW2luZGV4XSksXG4gICAgICB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVMb25naXR1ZGUodGhpcy5sb2NhdGlvbnMuc3RvcmVzW2luZGV4XSlcbiAgICApO1xuICB9XG5cbiAgc2VsZWN0U3RvcmVJdGVtTGlzdChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZFN0b3JlSW5kZXggPSBpbmRleDtcbiAgICBjb25zdCBzdG9yZUxpc3RJdGVtID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS0nICsgaW5kZXgpO1xuICAgIHN0b3JlTGlzdEl0ZW0uc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgYmxvY2s6ICdjZW50ZXInLFxuICAgIH0pO1xuICB9XG5cbiAgc2hvd1N0b3JlRGV0YWlscyhsb2NhdGlvbjogUG9pbnRPZlNlcnZpY2UpIHtcbiAgICB0aGlzLmlzRGV0YWlsc01vZGVWaXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLnN0b3JlRGV0YWlscyA9IGxvY2F0aW9uO1xuICB9XG5cbiAgaGlkZVN0b3JlRGV0YWlscygpIHtcbiAgICB0aGlzLmlzRGV0YWlsc01vZGVWaXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZFN0b3JlSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWxlY3RlZFN0b3JlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RvcmVNYXAucmVuZGVyTWFwKCk7XG4gIH1cbn1cbiJdfQ==