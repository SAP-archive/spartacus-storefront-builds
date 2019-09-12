/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, ViewChild } from '@angular/core';
import { StoreDataService } from '@spartacus/core';
import { StoreFinderMapComponent } from '../../store-finder-map/store-finder-map.component';
import { ICON_TYPE } from './../../../../misc/icon/icon.model';
export class StoreFinderListComponent {
    /**
     * @param {?} storeDataService
     * @param {?} document
     */
    constructor(storeDataService, document) {
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
    centerStoreOnMapByIndex(index, location) {
        this.showStoreDetails(location);
        this.selectedStoreIndex = index;
        this.selectedStore = location;
        this.storeMap.centerMap(this.storeDataService.getStoreLatitude(this.locations.stores[index]), this.storeDataService.getStoreLongitude(this.locations.stores[index]));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    selectStoreItemList(index) {
        this.selectedStoreIndex = index;
        /** @type {?} */
        const storeListItem = this.document.getElementById('item-' + index);
        storeListItem.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    }
    /**
     * @param {?} location
     * @return {?}
     */
    showStoreDetails(location) {
        this.isDetailsModeVisible = true;
        this.storeDetails = location;
    }
    /**
     * @return {?}
     */
    hideStoreDetails() {
        this.isDetailsModeVisible = false;
        this.selectedStoreIndex = undefined;
        this.selectedStore = undefined;
        this.storeMap.renderMap();
    }
}
StoreFinderListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-list',
                template: "<ng-container *ngIf=\"locations\">\n  <div class=\"container mb-2\">\n    <div class=\"row\" *ngIf=\"locations?.pagination\">\n      <div class=\"col-md-12\">\n        <cx-store-finder-pagination-details\n          [pagination]=\"locations.pagination\"\n        ></cx-store-finder-pagination-details>\n      </div>\n      <div class=\"col-md-2 text-left cx-back-wrapper\">\n        <button\n          class=\"btn btn-block btn-action\"\n          *ngIf=\"isDetailsModeVisible\"\n          (click)=\"hideStoreDetails()\"\n        >\n          <cx-icon [type]=\"iconTypes.CARET_LEFT\"></cx-icon>\n          {{ 'storeFinder.backToList' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"locations?.stores\" class=\"row cx-columns\">\n      <div class=\"col-md-4 cx-address-col\">\n        <div class=\"cx-store-details\" *ngIf=\"isDetailsModeVisible\">\n          <cx-store-finder-store-description\n            [location]=\"storeDetails\"\n            [disableMap]=\"true\"\n          ></cx-store-finder-store-description>\n        </div>\n        <ol class=\"cx-list\" *ngIf=\"!isDetailsModeVisible\">\n          <li\n            *ngFor=\"let location of locations?.stores; let i = index\"\n            id=\"{{ 'item-' + i }}\"\n            [ngClass]=\"{\n              'cx-selected-item': selectedStoreIndex === i\n            }\"\n            class=\"cx-list-items\"\n          >\n            <cx-store-finder-list-item\n              [location]=\"location\"\n              [locationIndex]=\"i\"\n              [displayDistance]=\"useMylocation\"\n              (storeItemClick)=\"centerStoreOnMapByIndex($event, location)\"\n              [listOrderLabel]=\"\n                i +\n                locations.pagination.currentPage *\n                  locations.pagination.pageSize +\n                1\n              \"\n            ></cx-store-finder-list-item>\n          </li>\n        </ol>\n      </div>\n      <div class=\"col-md-8 cx-map-col\">\n        <cx-store-finder-map\n          #storeMap\n          [locations]=\"locations.stores\"\n          (selectedStoreItem)=\"selectStoreItemList($event)\"\n        ></cx-store-finder-map>\n      </div>\n    </div>\n\n    <!-- mobile tabs for column set only -->\n\n    <div *ngIf=\"locations?.stores\" class=\"cx-columns-mobile\">\n      <ngb-tabset justify=\"center\">\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.listView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-address-col\">\n              <div class=\"cx-store-details\" *ngIf=\"isDetailsModeVisible\">\n                <cx-store-finder-store-description\n                  [location]=\"storeDetails\"\n                  [disableMap]=\"true\"\n                ></cx-store-finder-store-description>\n              </div>\n              <ol class=\"cx-list\" *ngIf=\"!isDetailsModeVisible\">\n                <li\n                  *ngFor=\"let location of locations?.stores; let i = index\"\n                  id=\"{{ 'item-' + i }}\"\n                  [ngClass]=\"{\n                    'cx-selected-item': selectedStoreIndex === i\n                  }\"\n                  class=\"cx-list-items\"\n                >\n                  <cx-store-finder-list-item\n                    [location]=\"location\"\n                    [locationIndex]=\"i\"\n                    [displayDistance]=\"useMylocation\"\n                    (storeItemClick)=\"centerStoreOnMapByIndex($event, location)\"\n                    [listOrderLabel]=\"\n                      i +\n                      locations.pagination.currentPage *\n                        locations.pagination.pageSize +\n                      1\n                    \"\n                  ></cx-store-finder-list-item>\n                </li>\n              </ol>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.mapView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-map-col\">\n              <cx-store-finder-map\n                #storeMap\n                [locations]=\"selectedStore ? [selectedStore] : locations.stores\"\n                (selectedStoreItem)=\"selectStoreItemList($event)\"\n              ></cx-store-finder-map>\n            </div>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n\n    <!-- mobile tabs end -->\n\n    <div *ngIf=\"!locations?.stores\" class=\"row\">\n      <div class=\"col-md-12 cx-not-found\">\n        {{ 'storeFinder.noStoreFound' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
StoreFinderListComponent.ctorParameters = () => [
    { type: StoreDataService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
StoreFinderListComponent.propDecorators = {
    locations: [{ type: Input }],
    useMylocation: [{ type: Input }],
    storeMap: [{ type: ViewChild, args: ['storeMap', { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC9zdG9yZS1maW5kZXItbGlzdC9zdG9yZS1maW5kZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBa0IsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFNL0QsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUFjbkMsWUFDVSxnQkFBa0MsRUFDaEIsUUFBYTtRQUQvQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFKekMsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQU1wQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQUVELHVCQUF1QixDQUFDLEtBQWEsRUFBRSxRQUF3QjtRQUM3RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDckIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQ3BFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUN0RSxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7O2NBQzFCLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ25FLGFBQWEsQ0FBQyxjQUFjLENBQUM7WUFDM0IsUUFBUSxFQUFFLFFBQVE7WUFDbEIsS0FBSyxFQUFFLFFBQVE7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxRQUF3QjtRQUN2QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7WUF0REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLDJwSkFBaUQ7YUFDbEQ7Ozs7WUFQUSxnQkFBZ0I7NENBd0JwQixNQUFNLFNBQUMsUUFBUTs7O3dCQWZqQixLQUFLOzRCQUVMLEtBQUs7dUJBRUwsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUFKeEMsNkNBQ2U7O0lBQ2YsaURBQ3VCOztJQUN2Qiw0Q0FDa0M7O0lBRWxDLGlEQUE4Qjs7SUFDOUIsc0RBQTJCOztJQUMzQix3REFBOEI7O0lBQzlCLGdEQUE2Qjs7SUFDN0IsNkNBQXNCOzs7OztJQUdwQixvREFBMEM7Ozs7O0lBQzFDLDRDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZURhdGFTZXJ2aWNlLCBQb2ludE9mU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlck1hcENvbXBvbmVudCB9IGZyb20gJy4uLy4uL3N0b3JlLWZpbmRlci1tYXAvc3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b3JlLWZpbmRlci1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlLWZpbmRlci1saXN0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJMaXN0Q29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbG9jYXRpb25zOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHVzZU15bG9jYXRpb246IGJvb2xlYW47XG4gIEBWaWV3Q2hpbGQoJ3N0b3JlTWFwJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHN0b3JlTWFwOiBTdG9yZUZpbmRlck1hcENvbXBvbmVudDtcblxuICBzZWxlY3RlZFN0b3JlOiBQb2ludE9mU2VydmljZTtcbiAgc2VsZWN0ZWRTdG9yZUluZGV4OiBudW1iZXI7XG4gIGlzRGV0YWlsc01vZGVWaXNpYmxlOiBib29sZWFuO1xuICBzdG9yZURldGFpbHM6IFBvaW50T2ZTZXJ2aWNlO1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZURhdGFTZXJ2aWNlOiBTdG9yZURhdGFTZXJ2aWNlLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueVxuICApIHtcbiAgICB0aGlzLmlzRGV0YWlsc01vZGVWaXNpYmxlID0gZmFsc2U7XG4gIH1cblxuICBjZW50ZXJTdG9yZU9uTWFwQnlJbmRleChpbmRleDogbnVtYmVyLCBsb2NhdGlvbjogUG9pbnRPZlNlcnZpY2UpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dTdG9yZURldGFpbHMobG9jYXRpb24pO1xuICAgIHRoaXMuc2VsZWN0ZWRTdG9yZUluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5zZWxlY3RlZFN0b3JlID0gbG9jYXRpb247XG4gICAgdGhpcy5zdG9yZU1hcC5jZW50ZXJNYXAoXG4gICAgICB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVMYXRpdHVkZSh0aGlzLmxvY2F0aW9ucy5zdG9yZXNbaW5kZXhdKSxcbiAgICAgIHRoaXMuc3RvcmVEYXRhU2VydmljZS5nZXRTdG9yZUxvbmdpdHVkZSh0aGlzLmxvY2F0aW9ucy5zdG9yZXNbaW5kZXhdKVxuICAgICk7XG4gIH1cblxuICBzZWxlY3RTdG9yZUl0ZW1MaXN0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkU3RvcmVJbmRleCA9IGluZGV4O1xuICAgIGNvbnN0IHN0b3JlTGlzdEl0ZW0gPSB0aGlzLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLScgKyBpbmRleCk7XG4gICAgc3RvcmVMaXN0SXRlbS5zY3JvbGxJbnRvVmlldyh7XG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICBibG9jazogJ2NlbnRlcicsXG4gICAgfSk7XG4gIH1cblxuICBzaG93U3RvcmVEZXRhaWxzKGxvY2F0aW9uOiBQb2ludE9mU2VydmljZSkge1xuICAgIHRoaXMuaXNEZXRhaWxzTW9kZVZpc2libGUgPSB0cnVlO1xuICAgIHRoaXMuc3RvcmVEZXRhaWxzID0gbG9jYXRpb247XG4gIH1cblxuICBoaWRlU3RvcmVEZXRhaWxzKCkge1xuICAgIHRoaXMuaXNEZXRhaWxzTW9kZVZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkU3RvcmVJbmRleCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNlbGVjdGVkU3RvcmUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdG9yZU1hcC5yZW5kZXJNYXAoKTtcbiAgfVxufVxuIl19