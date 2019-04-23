/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { StoreFinderMapComponent } from '../../store-finder-map/store-finder-map.component';
import { StoreDataService } from '@spartacus/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3N0b3JlLWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1zZWFyY2gtcmVzdWx0L3N0b3JlLWZpbmRlci1saXN0L3N0b3JlLWZpbmRlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPbkQsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUFRbkMsWUFDVSxnQkFBa0MsRUFDaEIsUUFBYTtRQUQvQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFKekMsa0JBQWEsR0FBRyxDQUFDLENBQUM7SUFLZixDQUFDOzs7OztJQUVKLHVCQUF1QixDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUNwRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDdEUsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsS0FBYTtRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzs7Y0FDckIsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDbkUsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2pDLENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsd25HQUFpRDs7YUFFbEQ7Ozs7WUFOUSxnQkFBZ0I7NENBaUJwQixNQUFNLFNBQUMsUUFBUTs7O3dCQVRqQixLQUFLO3VCQUVMLFNBQVMsU0FBQyxVQUFVOzs7O0lBRnJCLDZDQUNlOztJQUNmLDRDQUNrQzs7SUFFbEMsaURBQWtCOzs7OztJQUdoQixvREFBMEM7Ozs7O0lBQzFDLDRDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFN0b3JlRmluZGVyTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc3RvcmUtZmluZGVyLW1hcC9zdG9yZS1maW5kZXItbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdG9yZURhdGFTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmUtZmluZGVyLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmUtZmluZGVyLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdG9yZS1maW5kZXItbGlzdC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlckxpc3RDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBsb2NhdGlvbnM6IGFueTtcbiAgQFZpZXdDaGlsZCgnc3RvcmVNYXAnKVxuICBzdG9yZU1hcDogU3RvcmVGaW5kZXJNYXBDb21wb25lbnQ7XG5cbiAgc2VsZWN0ZWRTdG9yZSA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZURhdGFTZXJ2aWNlOiBTdG9yZURhdGFTZXJ2aWNlLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueVxuICApIHt9XG5cbiAgY2VudGVyU3RvcmVPbk1hcEJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRTdG9yZSA9IGluZGV4O1xuICAgIHRoaXMuc3RvcmVNYXAuY2VudGVyTWFwKFxuICAgICAgdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmdldFN0b3JlTGF0aXR1ZGUodGhpcy5sb2NhdGlvbnMuc3RvcmVzW2luZGV4XSksXG4gICAgICB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVMb25naXR1ZGUodGhpcy5sb2NhdGlvbnMuc3RvcmVzW2luZGV4XSlcbiAgICApO1xuICB9XG5cbiAgc2VsZWN0U3RvcmVJdGVtTGlzdChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZFN0b3JlID0gaW5kZXg7XG4gICAgY29uc3Qgc3RvcmVMaXN0SXRlbSA9IHRoaXMuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tJyArIGluZGV4KTtcbiAgICBzdG9yZUxpc3RJdGVtLnNjcm9sbEludG9WaWV3KCk7XG4gIH1cbn1cbiJdfQ==