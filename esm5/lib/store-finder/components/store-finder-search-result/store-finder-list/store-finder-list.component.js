/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { StoreFinderMapComponent } from '../../store-finder-map/store-finder-map.component';
import { StoreDataService } from '@spartacus/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3N0b3JlLWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1zZWFyY2gtcmVzdWx0L3N0b3JlLWZpbmRlci1saXN0L3N0b3JlLWZpbmRlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbkQ7SUFhRSxrQ0FDVSxnQkFBa0MsRUFDaEIsUUFBYTtRQUQvQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFKekMsa0JBQWEsR0FBRyxDQUFDLENBQUM7SUFLZixDQUFDOzs7OztJQUVKLDBEQUF1Qjs7OztJQUF2QixVQUF3QixLQUFhO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDcEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ3RFLENBQUM7SUFDSixDQUFDOzs7OztJQUVELHNEQUFtQjs7OztJQUFuQixVQUFvQixLQUFhO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDOztZQUNyQixhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNuRSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDakMsQ0FBQzs7Z0JBOUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyx3bkdBQWlEOztpQkFFbEQ7Ozs7Z0JBTlEsZ0JBQWdCO2dEQWlCcEIsTUFBTSxTQUFDLFFBQVE7Ozs0QkFUakIsS0FBSzsyQkFFTCxTQUFTLFNBQUMsVUFBVTs7SUF1QnZCLCtCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0ExQlksd0JBQXdCOzs7SUFDbkMsNkNBQ2U7O0lBQ2YsNENBQ2tDOztJQUVsQyxpREFBa0I7Ozs7O0lBR2hCLG9EQUEwQzs7Ozs7SUFDMUMsNENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgU3RvcmVGaW5kZXJNYXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zdG9yZS1maW5kZXItbWFwL3N0b3JlLWZpbmRlci1tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRGF0YVNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXItbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1maW5kZXItbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0b3JlLWZpbmRlci1saXN0LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyTGlzdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGxvY2F0aW9uczogYW55O1xuICBAVmlld0NoaWxkKCdzdG9yZU1hcCcpXG4gIHN0b3JlTWFwOiBTdG9yZUZpbmRlck1hcENvbXBvbmVudDtcblxuICBzZWxlY3RlZFN0b3JlID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlRGF0YVNlcnZpY2U6IFN0b3JlRGF0YVNlcnZpY2UsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55XG4gICkge31cblxuICBjZW50ZXJTdG9yZU9uTWFwQnlJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZFN0b3JlID0gaW5kZXg7XG4gICAgdGhpcy5zdG9yZU1hcC5jZW50ZXJNYXAoXG4gICAgICB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVMYXRpdHVkZSh0aGlzLmxvY2F0aW9ucy5zdG9yZXNbaW5kZXhdKSxcbiAgICAgIHRoaXMuc3RvcmVEYXRhU2VydmljZS5nZXRTdG9yZUxvbmdpdHVkZSh0aGlzLmxvY2F0aW9ucy5zdG9yZXNbaW5kZXhdKVxuICAgICk7XG4gIH1cblxuICBzZWxlY3RTdG9yZUl0ZW1MaXN0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkU3RvcmUgPSBpbmRleDtcbiAgICBjb25zdCBzdG9yZUxpc3RJdGVtID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS0nICsgaW5kZXgpO1xuICAgIHN0b3JlTGlzdEl0ZW0uc2Nyb2xsSW50b1ZpZXcoKTtcbiAgfVxufVxuIl19