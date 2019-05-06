/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, ViewChild } from '@angular/core';
import { StoreDataService } from '@spartacus/core';
import { StoreFinderMapComponent } from '../../store-finder-map/store-finder-map.component';
var StoreFinderListComponent = /** @class */ (function () {
    function StoreFinderListComponent(storeDataService, document) {
        this.storeDataService = storeDataService;
        this.document = document;
        this.selectedStore = 0;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    StoreFinderListComponent.prototype.centerStoreOnMapByIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.selectedStore = index;
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
        this.selectedStore = index;
        /** @type {?} */
        var storeListItem = this.document.getElementById('item-' + index);
        storeListItem.scrollIntoView();
    };
    StoreFinderListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-list',
                    template: "<ng-container *ngIf=\"locations\">\n  <div class=\"container\">\n    <div class=\"row\" *ngIf=\"locations?.pagination\">\n      <div class=\"col-md-12\">\n        <cx-store-finder-pagination-details\n          [pagination]=\"locations.pagination\"\n        ></cx-store-finder-pagination-details>\n      </div>\n    </div>\n    <div *ngIf=\"locations?.stores\" class=\"row cx-columns\">\n      <div class=\"col-md-4 cx-address-col\">\n        <ol class=\"cx-list\">\n          <li\n            *ngFor=\"let location of locations?.stores; let i = index\"\n            id=\"{{ 'item-' + i }}\"\n            [ngClass]=\"{\n              'cx-selected-item': selectedStore === i\n            }\"\n            class=\"cx-list-items cx-ordered\"\n          >\n            <cx-store-finder-list-item\n              [location]=\"location\"\n              [locationIndex]=\"i\"\n              (storeItemClick)=\"centerStoreOnMapByIndex($event)\"\n            ></cx-store-finder-list-item>\n          </li>\n        </ol>\n      </div>\n      <div class=\"col-md-8 cx-map-col\">\n        <cx-store-finder-map\n          #storeMap\n          [locations]=\"locations.stores\"\n          (selectedStoreItem)=\"selectStoreItemList($event)\"\n        ></cx-store-finder-map>\n      </div>\n    </div>\n\n    <!-- mobile tabs for column set only -->\n\n    <div *ngIf=\"locations?.stores\" class=\"cx-columns-mobile\">\n      <ngb-tabset justify=\"center\">\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.listView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-address-col\">\n              <ol class=\"cx-list\">\n                <li\n                  *ngFor=\"let location of locations?.stores; let i = index\"\n                  id=\"{{ 'item-' + i }}\"\n                  [ngClass]=\"{\n                    'cx-selected-item': selectedStore === i\n                  }\"\n                  class=\"cx-list-items cx-ordered\"\n                >\n                  <cx-store-finder-list-item\n                    [location]=\"location\"\n                    [locationIndex]=\"i\"\n                    (storeItemClick)=\"centerStoreOnMapByIndex($event)\"\n                  ></cx-store-finder-list-item>\n                </li>\n              </ol>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.mapView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-map-col\">\n              <cx-store-finder-map\n                #storeMap\n                [locations]=\"locations.stores\"\n                (selectedStoreItem)=\"selectStoreItemList($event)\"\n              ></cx-store-finder-map>\n            </div>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n\n    <!-- mobile tabs end -->\n\n    <div *ngIf=\"!locations?.stores\" class=\"row\">\n      <div class=\"col-md-12 cx-not-found\">\n        {{ 'storeFinder.noStoreFound' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-columns{display:var(--cx-display,none)}@media (min-width:768px){.cx-columns{display:var(--cx-display,flex);height:var(--cx-height,70vh)}}.cx-columns-mobile{display:var(--cx-display,block)}.cx-address-col{height:var(--cx-height,100%)}@media (min-width:768px){.cx-columns-mobile{display:var(--cx-display,none)}.cx-address-col{height:var(--cx-height,100%);overflow-y:var(--cx-overflow-y,scroll);padding:var(--cx-padding,inherit inherit inherit 0)}.cx-map-col{height:var(--cx-height,100%);overflow-y:var(--cx-overflow-y,scroll)}}.cx-list{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222);list-style:var(--cx-list-style,none);padding:var(--cx-padding,inherit inherit inherit 0)}.cx-list-items{border-width:var(--cx-border-width,1px 0 0 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light));padding:var(--cx-padding,1rem 1.5rem)}.cx-list-items:hover{background-color:var(--cx-background-color,var(--cx-g-color-background))}.cx-list-items.cx-selected-item,.cx-list-items.cx-selected-item:hover{background-color:var(--cx-background-color,var(--cx-g-color-light))}.cx-ordered{counter-increment:var(--cx-counter-increment,resultCount)}.cx-ordered:before{content:var(--cx-content,counter(resultCount,decimal));position:var(--cx-position,absolute);left:var(--cx-left,1rem)}.cx-not-found{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);text-align:var(--cx-text-align,center);padding:var(--cx-padding,3rem 0)}"]
                }] }
    ];
    /** @nocollapse */
    StoreFinderListComponent.ctorParameters = function () { return [
        { type: StoreDataService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    StoreFinderListComponent.propDecorators = {
        locations: [{ type: Input }],
        storeMap: [{ type: ViewChild, args: ['storeMap',] }]
    };
    return StoreFinderListComponent;
}());
export { StoreFinderListComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC9zdG9yZS1maW5kZXItbGlzdC9zdG9yZS1maW5kZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRTVGO0lBYUUsa0NBQ1UsZ0JBQWtDLEVBQ2hCLFFBQWE7UUFEL0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBSnpDLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO0lBS2YsQ0FBQzs7Ozs7SUFFSiwwREFBdUI7Ozs7SUFBdkIsVUFBd0IsS0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDckIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQ3BFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUN0RSxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxzREFBbUI7Ozs7SUFBbkIsVUFBb0IsS0FBYTtRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzs7WUFDckIsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDbkUsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2pDLENBQUM7O2dCQTlCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsd25HQUFpRDs7aUJBRWxEOzs7O2dCQVBRLGdCQUFnQjtnREFrQnBCLE1BQU0sU0FBQyxRQUFROzs7NEJBVGpCLEtBQUs7MkJBRUwsU0FBUyxTQUFDLFVBQVU7O0lBdUJ2QiwrQkFBQztDQUFBLEFBL0JELElBK0JDO1NBMUJZLHdCQUF3Qjs7O0lBQ25DLDZDQUNlOztJQUNmLDRDQUNrQzs7SUFFbEMsaURBQWtCOzs7OztJQUdoQixvREFBMEM7Ozs7O0lBQzFDLDRDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZURhdGFTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc3RvcmUtZmluZGVyLW1hcC9zdG9yZS1maW5kZXItbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b3JlLWZpbmRlci1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlLWZpbmRlci1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RvcmUtZmluZGVyLWxpc3QuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJMaXN0Q29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbG9jYXRpb25zOiBhbnk7XG4gIEBWaWV3Q2hpbGQoJ3N0b3JlTWFwJylcbiAgc3RvcmVNYXA6IFN0b3JlRmluZGVyTWFwQ29tcG9uZW50O1xuXG4gIHNlbGVjdGVkU3RvcmUgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmVEYXRhU2VydmljZTogU3RvcmVEYXRhU2VydmljZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnlcbiAgKSB7fVxuXG4gIGNlbnRlclN0b3JlT25NYXBCeUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkU3RvcmUgPSBpbmRleDtcbiAgICB0aGlzLnN0b3JlTWFwLmNlbnRlck1hcChcbiAgICAgIHRoaXMuc3RvcmVEYXRhU2VydmljZS5nZXRTdG9yZUxhdGl0dWRlKHRoaXMubG9jYXRpb25zLnN0b3Jlc1tpbmRleF0pLFxuICAgICAgdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmdldFN0b3JlTG9uZ2l0dWRlKHRoaXMubG9jYXRpb25zLnN0b3Jlc1tpbmRleF0pXG4gICAgKTtcbiAgfVxuXG4gIHNlbGVjdFN0b3JlSXRlbUxpc3QoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRTdG9yZSA9IGluZGV4O1xuICAgIGNvbnN0IHN0b3JlTGlzdEl0ZW0gPSB0aGlzLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLScgKyBpbmRleCk7XG4gICAgc3RvcmVMaXN0SXRlbS5zY3JvbGxJbnRvVmlldygpO1xuICB9XG59XG4iXX0=