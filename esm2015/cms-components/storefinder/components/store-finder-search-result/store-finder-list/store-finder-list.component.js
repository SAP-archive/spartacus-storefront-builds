/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, ViewChild } from '@angular/core';
import { StoreDataService } from '@spartacus/core';
import { StoreFinderMapComponent } from '../../store-finder-map/store-finder-map.component';
export class StoreFinderListComponent {
    /**
     * @param {?} storeDataService
     * @param {?} document
     */
    constructor(storeDataService, document) {
        this.storeDataService = storeDataService;
        this.document = document;
        this.selectedStore = 0;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    centerStoreOnMapByIndex(index) {
        this.selectedStore = index;
        this.storeMap.centerMap(this.storeDataService.getStoreLatitude(this.locations.stores[index]), this.storeDataService.getStoreLongitude(this.locations.stores[index]));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    selectStoreItemList(index) {
        this.selectedStore = index;
        /** @type {?} */
        const storeListItem = this.document.getElementById('item-' + index);
        storeListItem.scrollIntoView();
    }
}
StoreFinderListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-list',
                template: "<ng-container *ngIf=\"locations\">\n  <div class=\"container\">\n    <div class=\"row\" *ngIf=\"locations?.pagination\">\n      <div class=\"col-md-12\">\n        <cx-store-finder-pagination-details\n          [pagination]=\"locations.pagination\"\n        ></cx-store-finder-pagination-details>\n      </div>\n    </div>\n    <div *ngIf=\"locations?.stores\" class=\"row cx-columns\">\n      <div class=\"col-md-4 cx-address-col\">\n        <ol class=\"cx-list\">\n          <li\n            *ngFor=\"let location of locations?.stores; let i = index\"\n            id=\"{{ 'item-' + i }}\"\n            [ngClass]=\"{\n              'cx-selected-item': selectedStore === i\n            }\"\n            class=\"cx-list-items cx-ordered\"\n          >\n            <cx-store-finder-list-item\n              [location]=\"location\"\n              [locationIndex]=\"i\"\n              (storeItemClick)=\"centerStoreOnMapByIndex($event)\"\n            ></cx-store-finder-list-item>\n          </li>\n        </ol>\n      </div>\n      <div class=\"col-md-8 cx-map-col\">\n        <cx-store-finder-map\n          #storeMap\n          [locations]=\"locations.stores\"\n          (selectedStoreItem)=\"selectStoreItemList($event)\"\n        ></cx-store-finder-map>\n      </div>\n    </div>\n\n    <!-- mobile tabs for column set only -->\n\n    <div *ngIf=\"locations?.stores\" class=\"cx-columns-mobile\">\n      <ngb-tabset justify=\"center\">\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.listView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-address-col\">\n              <ol class=\"cx-list\">\n                <li\n                  *ngFor=\"let location of locations?.stores; let i = index\"\n                  id=\"{{ 'item-' + i }}\"\n                  [ngClass]=\"{\n                    'cx-selected-item': selectedStore === i\n                  }\"\n                  class=\"cx-list-items cx-ordered\"\n                >\n                  <cx-store-finder-list-item\n                    [location]=\"location\"\n                    [locationIndex]=\"i\"\n                    (storeItemClick)=\"centerStoreOnMapByIndex($event)\"\n                  ></cx-store-finder-list-item>\n                </li>\n              </ol>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.mapView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-map-col\">\n              <cx-store-finder-map\n                #storeMap\n                [locations]=\"locations.stores\"\n                (selectedStoreItem)=\"selectStoreItemList($event)\"\n              ></cx-store-finder-map>\n            </div>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n\n    <!-- mobile tabs end -->\n\n    <div *ngIf=\"!locations?.stores\" class=\"row\">\n      <div class=\"col-md-12 cx-not-found\">\n        {{ 'storeFinder.noStoreFound' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-columns{display:var(--cx-display,none)}@media (min-width:768px){.cx-columns{display:var(--cx-display,flex);height:var(--cx-height,70vh)}}.cx-columns-mobile{display:var(--cx-display,block)}.cx-address-col{height:var(--cx-height,100%)}@media (min-width:768px){.cx-columns-mobile{display:var(--cx-display,none)}.cx-address-col{height:var(--cx-height,100%);overflow-y:var(--cx-overflow-y,scroll);padding:var(--cx-padding,inherit inherit inherit 0)}.cx-map-col{height:var(--cx-height,100%);overflow-y:var(--cx-overflow-y,scroll)}}.cx-list{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222);list-style:var(--cx-list-style,none);padding:var(--cx-padding,inherit inherit inherit 0)}.cx-list-items{border-width:var(--cx-border-width,1px 0 0 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light));padding:var(--cx-padding,1rem 1.5rem)}.cx-list-items:hover{background-color:var(--cx-background-color,var(--cx-g-color-background))}.cx-list-items.cx-selected-item,.cx-list-items.cx-selected-item:hover{background-color:var(--cx-background-color,var(--cx-g-color-light))}.cx-ordered{counter-increment:var(--cx-counter-increment,resultCount)}.cx-ordered:before{content:var(--cx-content,counter(resultCount,decimal));position:var(--cx-position,absolute);left:var(--cx-left,1rem)}.cx-not-found{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);text-align:var(--cx-text-align,center);padding:var(--cx-padding,3rem 0)}"]
            }] }
];
/** @nocollapse */
StoreFinderListComponent.ctorParameters = () => [
    { type: StoreDataService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
StoreFinderListComponent.propDecorators = {
    locations: [{ type: Input }],
    storeMap: [{ type: ViewChild, args: ['storeMap',] }]
};
if (false) {
    /** @type {?} */
    StoreFinderListComponent.prototype.locations;
    /** @type {?} */
    StoreFinderListComponent.prototype.storeMap;
    /** @type {?} */
    StoreFinderListComponent.prototype.selectedStore;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC9zdG9yZS1maW5kZXItbGlzdC9zdG9yZS1maW5kZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBTzVGLE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBUW5DLFlBQ1UsZ0JBQWtDLEVBQ2hCLFFBQWE7UUFEL0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBSnpDLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO0lBS2YsQ0FBQzs7Ozs7SUFFSix1QkFBdUIsQ0FBQyxLQUFhO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDcEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ3RFLENBQUM7SUFDSixDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLEtBQWE7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7O2NBQ3JCLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ25FLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLHduR0FBaUQ7O2FBRWxEOzs7O1lBUFEsZ0JBQWdCOzRDQWtCcEIsTUFBTSxTQUFDLFFBQVE7Ozt3QkFUakIsS0FBSzt1QkFFTCxTQUFTLFNBQUMsVUFBVTs7OztJQUZyQiw2Q0FDZTs7SUFDZiw0Q0FDa0M7O0lBRWxDLGlEQUFrQjs7Ozs7SUFHaEIsb0RBQTBDOzs7OztJQUMxQyw0Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVEYXRhU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlck1hcENvbXBvbmVudCB9IGZyb20gJy4uLy4uL3N0b3JlLWZpbmRlci1tYXAvc3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXItbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1maW5kZXItbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0b3JlLWZpbmRlci1saXN0LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyTGlzdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGxvY2F0aW9uczogYW55O1xuICBAVmlld0NoaWxkKCdzdG9yZU1hcCcpXG4gIHN0b3JlTWFwOiBTdG9yZUZpbmRlck1hcENvbXBvbmVudDtcblxuICBzZWxlY3RlZFN0b3JlID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlRGF0YVNlcnZpY2U6IFN0b3JlRGF0YVNlcnZpY2UsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55XG4gICkge31cblxuICBjZW50ZXJTdG9yZU9uTWFwQnlJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZFN0b3JlID0gaW5kZXg7XG4gICAgdGhpcy5zdG9yZU1hcC5jZW50ZXJNYXAoXG4gICAgICB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVMYXRpdHVkZSh0aGlzLmxvY2F0aW9ucy5zdG9yZXNbaW5kZXhdKSxcbiAgICAgIHRoaXMuc3RvcmVEYXRhU2VydmljZS5nZXRTdG9yZUxvbmdpdHVkZSh0aGlzLmxvY2F0aW9ucy5zdG9yZXNbaW5kZXhdKVxuICAgICk7XG4gIH1cblxuICBzZWxlY3RTdG9yZUl0ZW1MaXN0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkU3RvcmUgPSBpbmRleDtcbiAgICBjb25zdCBzdG9yZUxpc3RJdGVtID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS0nICsgaW5kZXgpO1xuICAgIHN0b3JlTGlzdEl0ZW0uc2Nyb2xsSW50b1ZpZXcoKTtcbiAgfVxufVxuIl19