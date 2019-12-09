/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { combineLatest } from 'rxjs';
import { ProductService, TranslationService, UserInterestsService, } from '@spartacus/core';
import { map, tap } from 'rxjs/operators';
/**
 * @record
 */
function ProductInterestSearchResultUI() { }
if (false) {
    /** @type {?|undefined} */
    ProductInterestSearchResultUI.prototype.results;
}
var MyInterestsComponent = /** @class */ (function () {
    function MyInterestsComponent(productInterestService, translationService, productService) {
        this.productInterestService = productInterestService;
        this.translationService = translationService;
        this.productService = productService;
        this.DEFAULT_PAGE_SIZE = 10;
        this.sortMapping = {
            byNameAsc: 'name:asc',
            byNameDesc: 'name:desc',
        };
        this.sort = 'byNameAsc';
        this.sortOptions = [
            {
                code: 'byNameAsc',
                selected: false,
            },
            {
                code: 'byNameDesc',
                selected: false,
            },
        ];
    }
    /**
     * @return {?}
     */
    MyInterestsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.interests$ = this.productInterestService
            .getAndLoadProductInterests(this.DEFAULT_PAGE_SIZE)
            .pipe(tap((/**
         * @param {?} interests
         * @return {?}
         */
        function (interests) {
            return (_this.pagination = {
                currentPage: interests.pagination.page,
                pageSize: interests.pagination.count,
                totalPages: interests.pagination.totalPages,
                totalResults: interests.pagination.totalCount,
                sort: 'byNameAsc',
            });
        })), map((/**
         * @param {?} interest
         * @return {?}
         */
        function (interest) { return (tslib_1.__assign({}, interest, { results: interest.results
                ? interest.results.map((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) { return (tslib_1.__assign({}, result, { product$: _this.getProduct(result) })); }))
                : interest.results })); })));
        this.getInterestsloading$ = this.productInterestService.getProdutInterestsLoading();
        this.isRemoveDisabled$ = combineLatest([
            this.getInterestsloading$,
            this.productInterestService.getRemoveProdutInterestLoading(),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), getLoading = _b[0], removeLoading = _b[1];
            return getLoading || removeLoading;
        })));
        this.sortLabels = this.getSortLabels();
    };
    /**
     * @private
     * @return {?}
     */
    MyInterestsComponent.prototype.getSortLabels = /**
     * @private
     * @return {?}
     */
    function () {
        return combineLatest([
            this.translationService.translate('myInterests.sorting.byNameAsc'),
            this.translationService.translate('myInterests.sorting.byNameDesc'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), asc = _b[0], desc = _b[1];
            return {
                byNameAsc: asc,
                byNameDesc: desc,
            };
        })));
    };
    /**
     * @private
     * @param {?} interest
     * @return {?}
     */
    MyInterestsComponent.prototype.getProduct = /**
     * @private
     * @param {?} interest
     * @return {?}
     */
    function (interest) {
        return this.productService.get(interest.product.code, 'details');
    };
    /**
     * @param {?} relation
     * @return {?}
     */
    MyInterestsComponent.prototype.removeInterest = /**
     * @param {?} relation
     * @return {?}
     */
    function (relation) {
        this.productInterestService.removeProdutInterest({
            product: relation.product,
            productInterestEntry: relation.productInterestEntry,
        });
    };
    /**
     * @param {?} sort
     * @return {?}
     */
    MyInterestsComponent.prototype.sortChange = /**
     * @param {?} sort
     * @return {?}
     */
    function (sort) {
        this.sort = sort;
        this.productInterestService.loadProductInterests(this.DEFAULT_PAGE_SIZE, 0, this.sortMapping[sort]);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    MyInterestsComponent.prototype.pageChange = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.productInterestService.loadProductInterests(this.DEFAULT_PAGE_SIZE, page, this.sortMapping[this.sort]);
    };
    /**
     * @return {?}
     */
    MyInterestsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.productInterestService.clearProductInterests();
        this.productInterestService.resetRemoveInterestState();
    };
    MyInterestsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-my-interests',
                    template: "<div *ngIf=\"interests$ | async as interests\" class=\"container\">\n  <div class=\"cx-product-interests-title h3\">\n    <h3>{{ 'myInterests.header' | cxTranslate }}</h3>\n  </div>\n  <div\n    class=\"cx-product-interests-body\"\n    *ngIf=\"!(getInterestsloading$ | async); else loading\"\n  >\n    <ng-container *ngIf=\"interests.pagination.totalCount > 0; else noInterest\">\n      <div class=\"cx-product-interests-sort top row\">\n        <div\n          class=\"cx-product-interests-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n        >\n          <cx-sorting\n            [sortOptions]=\"sortOptions\"\n            [sortLabels]=\"sortLabels | async\"\n            (sortListEvent)=\"sortChange($event)\"\n            [selectedOption]=\"sort\"\n            placeholder=\"{{ 'myInterests.sortByMostRecent' | cxTranslate }}\"\n          >\n          </cx-sorting>\n        </div>\n        <div\n          class=\"cx-product-interests-pagination cx-product-interests-thead-mobile\"\n        >\n          <cx-pagination\n            [pagination]=\"pagination\"\n            (viewPageEvent)=\"pageChange($event)\"\n          ></cx-pagination>\n        </div>\n      </div>\n      <table class=\"table cx-product-interests-table\">\n        <thead class=\"cx-product-interests-thead-mobile\">\n          <th scope=\"col\">\n            {{ 'myInterests.item' | cxTranslate }}\n          </th>\n          <th scope=\"col\"></th>\n          <th scope=\"col\">\n            {{ 'myInterests.price' | cxTranslate }}\n          </th>\n          <th scope=\"col\">\n            {{ 'myInterests.notifications' | cxTranslate }}\n          </th>\n          <th scope=\"col\"></th>\n        </thead>\n        <tbody>\n          <tr\n            *ngFor=\"let interest of interests.results\"\n            class=\"cx-product-interests-product-item\"\n          >\n            <ng-container *ngIf=\"interest.product$ | async as product\">\n              <td>\n                <div class=\"cx-product-interests-label\">\n                  <a\n                    class=\"cx-product-interests-product-image-link\"\n                    [routerLink]=\"\n                      { cxRoute: 'product', params: product } | cxUrl\n                    \"\n                  >\n                    <cx-media\n                      [container]=\"product.images?.PRIMARY\"\n                      format=\"thumbnail\"\n                    ></cx-media>\n                  </a>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-info col-10\">\n                  <div class=\"cx-info-container row \">\n                    <div>\n                      <div *ngIf=\"product.name\" class=\"cx-name\">\n                        <a\n                          class=\"cx-link cx-product-interests-product-code-link\"\n                          [routerLink]=\"\n                            { cxRoute: 'product', params: product } | cxUrl\n                          \"\n                        >\n                          {{ product.name }}\n                        </a>\n                      </div>\n                      <div *ngIf=\"product.code\" class=\"cx-code\">\n                        <span>{{\n                          'myInterests.productId'\n                            | cxTranslate: { code: product.code }\n                        }}</span>\n                      </div>\n\n                      <ng-container\n                        *ngFor=\"let baseOptions of product.baseOptions\"\n                      >\n                        <div\n                          *ngFor=\"\n                            let variant of baseOptions.selected\n                              ?.variantOptionQualifiers\n                          \"\n                          class=\"cx-property\"\n                        >\n                          <div\n                            class=\"cx-label cx-product-interests-variant-name\"\n                          >\n                            {{ variant.name }}\n                          </div>\n                          <div\n                            class=\"cx-value cx-product-interests-variant-value\"\n                          >\n                            {{ variant.value }}\n                          </div>\n                        </div>\n                      </ng-container>\n                      <div\n                        class=\"cx-property\"\n                        *ngIf=\"product.stock.stockLevelStatus === 'outOfStock'\"\n                      >\n                        <div\n                          class=\"cx-label cx-product-interests-product-stock\"\n                        >\n                          {{ 'myInterests.outOfStock' | cxTranslate }}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-product-interests-product-price\">\n                  <div class=\"d-md-none cx-product-interests-label\">\n                    {{ 'myInterests.price' | cxTranslate }}\n                  </div>\n                  <span>{{ product.price.formattedValue }}</span>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-product-interests-subscriptions\">\n                  <div class=\"d-md-none cx-product-interests-label\">\n                    {{ 'myInterests.notifications' | cxTranslate }}\n                  </div>\n                  <div\n                    class=\"cx-product-interests-notification\"\n                    *ngFor=\"let interestEntry of interest.productInterestEntry\"\n                  >\n                    <span class=\"cx-product-interests-type\">\n                      {{\n                        'myInterests.' + interestEntry.interestType\n                          | cxTranslate\n                      }}\n                    </span>\n                    <span class=\"cx-product-interests-expiration-date\">\n                      {{\n                        'myInterests.expirationDate'\n                          | cxTranslate\n                            : {\n                                expirationDate:\n                                  interestEntry.expirationDate | date\n                              }\n                      }}\n                    </span>\n                  </div>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-actions cx-product-interests-remove-button\">\n                  <button\n                    type=\"button\"\n                    class=\"link cx-product-interests-remove-btn\"\n                    [disabled]=\"isRemoveDisabled$ | async\"\n                    (click)=\"removeInterest(interest)\"\n                  >\n                    {{ 'myInterests.remove' | cxTranslate }}\n                  </button>\n                </div>\n              </td>\n            </ng-container>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"cx-product-interests-sort bottom row\">\n        <div\n          class=\"cx-product-interests-form-group cx-product-interests-thead-mobile form-group col-sm-12 col-md-4 col-lg-4\"\n        >\n          <cx-sorting\n            [sortOptions]=\"sortOptions\"\n            [sortLabels]=\"sortLabels | async\"\n            (sortListEvent)=\"sortChange($event)\"\n            [selectedOption]=\"sort\"\n            placeholder=\"{{ 'myInterests.sortByMostRecent' | cxTranslate }}\"\n          >\n          </cx-sorting>\n        </div>\n        <div class=\"cx-product-interests-pagination\">\n          <cx-pagination\n            [pagination]=\"pagination\"\n            (viewPageEvent)=\"pageChange($event)\"\n          ></cx-pagination>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>\n<ng-template #noInterest>\n  <div class=\"cx-product-interests-message\">\n    {{ 'myInterests.noInterests' | cxTranslate }}\n  </div>\n</ng-template>\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    MyInterestsComponent.ctorParameters = function () { return [
        { type: UserInterestsService },
        { type: TranslationService },
        { type: ProductService }
    ]; };
    return MyInterestsComponent;
}());
export { MyInterestsComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MyInterestsComponent.prototype.DEFAULT_PAGE_SIZE;
    /**
     * @type {?}
     * @private
     */
    MyInterestsComponent.prototype.sortMapping;
    /** @type {?} */
    MyInterestsComponent.prototype.sort;
    /** @type {?} */
    MyInterestsComponent.prototype.sortOptions;
    /** @type {?} */
    MyInterestsComponent.prototype.pagination;
    /** @type {?} */
    MyInterestsComponent.prototype.interests$;
    /** @type {?} */
    MyInterestsComponent.prototype.isRemoveDisabled$;
    /** @type {?} */
    MyInterestsComponent.prototype.getInterestsloading$;
    /** @type {?} */
    MyInterestsComponent.prototype.sortLabels;
    /**
     * @type {?}
     * @private
     */
    MyInterestsComponent.prototype.productInterestService;
    /**
     * @type {?}
     * @private
     */
    MyInterestsComponent.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    MyInterestsComponent.prototype.productService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktaW50ZXJlc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9teS1pbnRlcmVzdHMvbXktaW50ZXJlc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUtMLGNBQWMsRUFDZCxrQkFBa0IsRUFDbEIsb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUUxQyw0Q0FJQzs7O0lBSEMsZ0RBRUs7O0FBR1A7SUE4QkUsOEJBQ1Usc0JBQTRDLEVBQzVDLGtCQUFzQyxFQUN0QyxjQUE4QjtRQUY5QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXNCO1FBQzVDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBM0JoQyxzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBRztZQUNwQixTQUFTLEVBQUUsVUFBVTtZQUNyQixVQUFVLEVBQUUsV0FBVztTQUN4QixDQUFDO1FBRUYsU0FBSSxHQUFHLFdBQVcsQ0FBQztRQUNuQixnQkFBVyxHQUFHO1lBQ1o7Z0JBQ0UsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1NBQ0YsQ0FBQztJQVlDLENBQUM7Ozs7SUFFSix1Q0FBUTs7O0lBQVI7UUFBQSxpQkFnQ0M7UUEvQkMsSUFBSSxDQUFD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QyxJQUFJLENBQUMsQ0FDdkIsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQseUNBQVU7Ozs7SUFBVixVQUFXLElBQVk7UUFDckIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLG9CQUFvQixDQUM5QyxJQUFJLENBQUMsaUJBQWlCLEVBQ3RCLElBQUksRUFDSixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDNUIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsc0JBQXNCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUN6RCxDQUFDOztnQkE1SEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLCsrUEFBNEM7b0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFkQyxvQkFBb0I7Z0JBRHBCLGtCQUFrQjtnQkFEbEIsY0FBYzs7SUF5SWhCLDJCQUFDO0NBQUEsQUE3SEQsSUE2SEM7U0F4SFksb0JBQW9COzs7Ozs7SUFDL0IsaURBQStCOzs7OztJQUMvQiwyQ0FHRTs7SUFFRixvQ0FBbUI7O0lBQ25CLDJDQVNFOztJQUNGLDBDQUE0Qjs7SUFFNUIsMENBQXNEOztJQUN0RCxpREFBdUM7O0lBQ3ZDLG9EQUEwQzs7SUFDMUMsMENBQWtFOzs7OztJQUdoRSxzREFBb0Q7Ozs7O0lBQ3BELGtEQUE4Qzs7Ozs7SUFDOUMsOENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgUGFnaW5hdGlvbk1vZGVsLFxuICBQcm9kdWN0LFxuICBQcm9kdWN0SW50ZXJlc3RFbnRyeVJlbGF0aW9uLFxuICBQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQsXG4gIFByb2R1Y3RTZXJ2aWNlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG4gIFVzZXJJbnRlcmVzdHNTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmludGVyZmFjZSBQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHRVSSBleHRlbmRzIFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdCB7XG4gIHJlc3VsdHM/OiAoUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvbiAmIHtcbiAgICBwcm9kdWN0JD86IE9ic2VydmFibGU8UHJvZHVjdD47XG4gIH0pW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW15LWludGVyZXN0cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9teS1pbnRlcmVzdHMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTXlJbnRlcmVzdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgREVGQVVMVF9QQUdFX1NJWkUgPSAxMDtcbiAgcHJpdmF0ZSBzb3J0TWFwcGluZyA9IHtcbiAgICBieU5hbWVBc2M6ICduYW1lOmFzYycsXG4gICAgYnlOYW1lRGVzYzogJ25hbWU6ZGVzYycsXG4gIH07XG5cbiAgc29ydCA9ICdieU5hbWVBc2MnO1xuICBzb3J0T3B0aW9ucyA9IFtcbiAgICB7XG4gICAgICBjb2RlOiAnYnlOYW1lQXNjJyxcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6ICdieU5hbWVEZXNjJyxcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICB9LFxuICBdO1xuICBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uTW9kZWw7XG5cbiAgaW50ZXJlc3RzJDogT2JzZXJ2YWJsZTxQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHRVST47XG4gIGlzUmVtb3ZlRGlzYWJsZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBnZXRJbnRlcmVzdHNsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgc29ydExhYmVsczogT2JzZXJ2YWJsZTx7IGJ5TmFtZUFzYzogc3RyaW5nOyBieU5hbWVEZXNjOiBzdHJpbmcgfT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwcm9kdWN0SW50ZXJlc3RTZXJ2aWNlOiBVc2VySW50ZXJlc3RzU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmludGVyZXN0cyQgPSB0aGlzLnByb2R1Y3RJbnRlcmVzdFNlcnZpY2VcbiAgICAgIC5nZXRBbmRMb2FkUHJvZHVjdEludGVyZXN0cyh0aGlzLkRFRkFVTFRfUEFHRV9TSVpFKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChcbiAgICAgICAgICBpbnRlcmVzdHMgPT5cbiAgICAgICAgICAgICh0aGlzLnBhZ2luYXRpb24gPSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBpbnRlcmVzdHMucGFnaW5hdGlvbi5wYWdlLFxuICAgICAgICAgICAgICBwYWdlU2l6ZTogaW50ZXJlc3RzLnBhZ2luYXRpb24uY291bnQsXG4gICAgICAgICAgICAgIHRvdGFsUGFnZXM6IGludGVyZXN0cy5wYWdpbmF0aW9uLnRvdGFsUGFnZXMsXG4gICAgICAgICAgICAgIHRvdGFsUmVzdWx0czogaW50ZXJlc3RzLnBhZ2luYXRpb24udG90YWxDb3VudCxcbiAgICAgICAgICAgICAgc29ydDogJ2J5TmFtZUFzYycsXG4gICAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICBtYXAoaW50ZXJlc3QgPT4gKHtcbiAgICAgICAgICAuLi5pbnRlcmVzdCxcbiAgICAgICAgICByZXN1bHRzOiBpbnRlcmVzdC5yZXN1bHRzXG4gICAgICAgICAgICA/IGludGVyZXN0LnJlc3VsdHMubWFwKHJlc3VsdCA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgICAgICBwcm9kdWN0JDogdGhpcy5nZXRQcm9kdWN0KHJlc3VsdCksXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgOiBpbnRlcmVzdC5yZXN1bHRzLFxuICAgICAgICB9KSlcbiAgICAgICk7XG5cbiAgICB0aGlzLmdldEludGVyZXN0c2xvYWRpbmckID0gdGhpcy5wcm9kdWN0SW50ZXJlc3RTZXJ2aWNlLmdldFByb2R1dEludGVyZXN0c0xvYWRpbmcoKTtcbiAgICB0aGlzLmlzUmVtb3ZlRGlzYWJsZWQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmdldEludGVyZXN0c2xvYWRpbmckLFxuICAgICAgdGhpcy5wcm9kdWN0SW50ZXJlc3RTZXJ2aWNlLmdldFJlbW92ZVByb2R1dEludGVyZXN0TG9hZGluZygpLFxuICAgIF0pLnBpcGUobWFwKChbZ2V0TG9hZGluZywgcmVtb3ZlTG9hZGluZ10pID0+IGdldExvYWRpbmcgfHwgcmVtb3ZlTG9hZGluZykpO1xuXG4gICAgdGhpcy5zb3J0TGFiZWxzID0gdGhpcy5nZXRTb3J0TGFiZWxzKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFNvcnRMYWJlbHMoKTogT2JzZXJ2YWJsZTx7XG4gICAgYnlOYW1lQXNjOiBzdHJpbmc7XG4gICAgYnlOYW1lRGVzYzogc3RyaW5nO1xuICB9PiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvblNlcnZpY2UudHJhbnNsYXRlKCdteUludGVyZXN0cy5zb3J0aW5nLmJ5TmFtZUFzYycpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvblNlcnZpY2UudHJhbnNsYXRlKCdteUludGVyZXN0cy5zb3J0aW5nLmJ5TmFtZURlc2MnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbYXNjLCBkZXNjXSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGJ5TmFtZUFzYzogYXNjLFxuICAgICAgICAgIGJ5TmFtZURlc2M6IGRlc2MsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldFByb2R1Y3QoXG4gICAgaW50ZXJlc3Q6IFByb2R1Y3RJbnRlcmVzdEVudHJ5UmVsYXRpb25cbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0KGludGVyZXN0LnByb2R1Y3QuY29kZSwgJ2RldGFpbHMnKTtcbiAgfVxuXG4gIHJlbW92ZUludGVyZXN0KFxuICAgIHJlbGF0aW9uOiBQcm9kdWN0SW50ZXJlc3RFbnRyeVJlbGF0aW9uICYge1xuICAgICAgcHJvZHVjdCQ/OiBPYnNlcnZhYmxlPFByb2R1Y3Q+O1xuICAgIH1cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5wcm9kdWN0SW50ZXJlc3RTZXJ2aWNlLnJlbW92ZVByb2R1dEludGVyZXN0KHtcbiAgICAgIHByb2R1Y3Q6IHJlbGF0aW9uLnByb2R1Y3QsXG4gICAgICBwcm9kdWN0SW50ZXJlc3RFbnRyeTogcmVsYXRpb24ucHJvZHVjdEludGVyZXN0RW50cnksXG4gICAgfSk7XG4gIH1cblxuICBzb3J0Q2hhbmdlKHNvcnQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc29ydCA9IHNvcnQ7XG4gICAgdGhpcy5wcm9kdWN0SW50ZXJlc3RTZXJ2aWNlLmxvYWRQcm9kdWN0SW50ZXJlc3RzKFxuICAgICAgdGhpcy5ERUZBVUxUX1BBR0VfU0laRSxcbiAgICAgIDAsXG4gICAgICB0aGlzLnNvcnRNYXBwaW5nW3NvcnRdXG4gICAgKTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wcm9kdWN0SW50ZXJlc3RTZXJ2aWNlLmxvYWRQcm9kdWN0SW50ZXJlc3RzKFxuICAgICAgdGhpcy5ERUZBVUxUX1BBR0VfU0laRSxcbiAgICAgIHBhZ2UsXG4gICAgICB0aGlzLnNvcnRNYXBwaW5nW3RoaXMuc29ydF1cbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5wcm9kdWN0SW50ZXJlc3RTZXJ2aWNlLmNsZWFyUHJvZHVjdEludGVyZXN0cygpO1xuICAgIHRoaXMucHJvZHVjdEludGVyZXN0U2VydmljZS5yZXNldFJlbW92ZUludGVyZXN0U3RhdGUoKTtcbiAgfVxufVxuIl19