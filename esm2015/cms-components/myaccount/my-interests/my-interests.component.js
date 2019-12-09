/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class MyInterestsComponent {
    /**
     * @param {?} productInterestService
     * @param {?} translationService
     * @param {?} productService
     */
    constructor(productInterestService, translationService, productService) {
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
    ngOnInit() {
        this.interests$ = this.productInterestService
            .getAndLoadProductInterests(this.DEFAULT_PAGE_SIZE)
            .pipe(tap((/**
         * @param {?} interests
         * @return {?}
         */
        interests => (this.pagination = {
            currentPage: interests.pagination.page,
            pageSize: interests.pagination.count,
            totalPages: interests.pagination.totalPages,
            totalResults: interests.pagination.totalCount,
            sort: 'byNameAsc',
        }))), map((/**
         * @param {?} interest
         * @return {?}
         */
        interest => (Object.assign({}, interest, { results: interest.results
                ? interest.results.map((/**
                 * @param {?} result
                 * @return {?}
                 */
                result => (Object.assign({}, result, { product$: this.getProduct(result) }))))
                : interest.results })))));
        this.getInterestsloading$ = this.productInterestService.getProdutInterestsLoading();
        this.isRemoveDisabled$ = combineLatest([
            this.getInterestsloading$,
            this.productInterestService.getRemoveProdutInterestLoading(),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([getLoading, removeLoading]) => getLoading || removeLoading)));
        this.sortLabels = this.getSortLabels();
    }
    /**
     * @private
     * @return {?}
     */
    getSortLabels() {
        return combineLatest([
            this.translationService.translate('myInterests.sorting.byNameAsc'),
            this.translationService.translate('myInterests.sorting.byNameDesc'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([asc, desc]) => {
            return {
                byNameAsc: asc,
                byNameDesc: desc,
            };
        })));
    }
    /**
     * @private
     * @param {?} interest
     * @return {?}
     */
    getProduct(interest) {
        return this.productService.get(interest.product.code, 'details');
    }
    /**
     * @param {?} relation
     * @return {?}
     */
    removeInterest(relation) {
        this.productInterestService.removeProdutInterest({
            product: relation.product,
            productInterestEntry: relation.productInterestEntry,
        });
    }
    /**
     * @param {?} sort
     * @return {?}
     */
    sortChange(sort) {
        this.sort = sort;
        this.productInterestService.loadProductInterests(this.DEFAULT_PAGE_SIZE, 0, this.sortMapping[sort]);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    pageChange(page) {
        this.productInterestService.loadProductInterests(this.DEFAULT_PAGE_SIZE, page, this.sortMapping[this.sort]);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.productInterestService.clearProductInterests();
        this.productInterestService.resetRemoveInterestState();
    }
}
MyInterestsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-my-interests',
                template: "<div *ngIf=\"interests$ | async as interests\" class=\"container\">\n  <div class=\"cx-product-interests-title h3\">\n    <h3>{{ 'myInterests.header' | cxTranslate }}</h3>\n  </div>\n  <div\n    class=\"cx-product-interests-body\"\n    *ngIf=\"!(getInterestsloading$ | async); else loading\"\n  >\n    <ng-container *ngIf=\"interests.pagination.totalCount > 0; else noInterest\">\n      <div class=\"cx-product-interests-sort top row\">\n        <div\n          class=\"cx-product-interests-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n        >\n          <cx-sorting\n            [sortOptions]=\"sortOptions\"\n            [sortLabels]=\"sortLabels | async\"\n            (sortListEvent)=\"sortChange($event)\"\n            [selectedOption]=\"sort\"\n            placeholder=\"{{ 'myInterests.sortByMostRecent' | cxTranslate }}\"\n          >\n          </cx-sorting>\n        </div>\n        <div\n          class=\"cx-product-interests-pagination cx-product-interests-thead-mobile\"\n        >\n          <cx-pagination\n            [pagination]=\"pagination\"\n            (viewPageEvent)=\"pageChange($event)\"\n          ></cx-pagination>\n        </div>\n      </div>\n      <table class=\"table cx-product-interests-table\">\n        <thead class=\"cx-product-interests-thead-mobile\">\n          <th scope=\"col\">\n            {{ 'myInterests.item' | cxTranslate }}\n          </th>\n          <th scope=\"col\"></th>\n          <th scope=\"col\">\n            {{ 'myInterests.price' | cxTranslate }}\n          </th>\n          <th scope=\"col\">\n            {{ 'myInterests.notifications' | cxTranslate }}\n          </th>\n          <th scope=\"col\"></th>\n        </thead>\n        <tbody>\n          <tr\n            *ngFor=\"let interest of interests.results\"\n            class=\"cx-product-interests-product-item\"\n          >\n            <ng-container *ngIf=\"interest.product$ | async as product\">\n              <td>\n                <div class=\"cx-product-interests-label\">\n                  <a\n                    class=\"cx-product-interests-product-image-link\"\n                    [routerLink]=\"\n                      { cxRoute: 'product', params: product } | cxUrl\n                    \"\n                  >\n                    <cx-media\n                      [container]=\"product.images?.PRIMARY\"\n                      format=\"thumbnail\"\n                    ></cx-media>\n                  </a>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-info col-10\">\n                  <div class=\"cx-info-container row \">\n                    <div>\n                      <div *ngIf=\"product.name\" class=\"cx-name\">\n                        <a\n                          class=\"cx-link cx-product-interests-product-code-link\"\n                          [routerLink]=\"\n                            { cxRoute: 'product', params: product } | cxUrl\n                          \"\n                        >\n                          {{ product.name }}\n                        </a>\n                      </div>\n                      <div *ngIf=\"product.code\" class=\"cx-code\">\n                        <span>{{\n                          'myInterests.productId'\n                            | cxTranslate: { code: product.code }\n                        }}</span>\n                      </div>\n\n                      <ng-container\n                        *ngFor=\"let baseOptions of product.baseOptions\"\n                      >\n                        <div\n                          *ngFor=\"\n                            let variant of baseOptions.selected\n                              ?.variantOptionQualifiers\n                          \"\n                          class=\"cx-property\"\n                        >\n                          <div\n                            class=\"cx-label cx-product-interests-variant-name\"\n                          >\n                            {{ variant.name }}\n                          </div>\n                          <div\n                            class=\"cx-value cx-product-interests-variant-value\"\n                          >\n                            {{ variant.value }}\n                          </div>\n                        </div>\n                      </ng-container>\n                      <div\n                        class=\"cx-property\"\n                        *ngIf=\"product.stock.stockLevelStatus === 'outOfStock'\"\n                      >\n                        <div\n                          class=\"cx-label cx-product-interests-product-stock\"\n                        >\n                          {{ 'myInterests.outOfStock' | cxTranslate }}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-product-interests-product-price\">\n                  <div class=\"d-md-none cx-product-interests-label\">\n                    {{ 'myInterests.price' | cxTranslate }}\n                  </div>\n                  <span>{{ product.price.formattedValue }}</span>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-product-interests-subscriptions\">\n                  <div class=\"d-md-none cx-product-interests-label\">\n                    {{ 'myInterests.notifications' | cxTranslate }}\n                  </div>\n                  <div\n                    class=\"cx-product-interests-notification\"\n                    *ngFor=\"let interestEntry of interest.productInterestEntry\"\n                  >\n                    <span class=\"cx-product-interests-type\">\n                      {{\n                        'myInterests.' + interestEntry.interestType\n                          | cxTranslate\n                      }}\n                    </span>\n                    <span class=\"cx-product-interests-expiration-date\">\n                      {{\n                        'myInterests.expirationDate'\n                          | cxTranslate\n                            : {\n                                expirationDate:\n                                  interestEntry.expirationDate | date\n                              }\n                      }}\n                    </span>\n                  </div>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-actions cx-product-interests-remove-button\">\n                  <button\n                    type=\"button\"\n                    class=\"link cx-product-interests-remove-btn\"\n                    [disabled]=\"isRemoveDisabled$ | async\"\n                    (click)=\"removeInterest(interest)\"\n                  >\n                    {{ 'myInterests.remove' | cxTranslate }}\n                  </button>\n                </div>\n              </td>\n            </ng-container>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"cx-product-interests-sort bottom row\">\n        <div\n          class=\"cx-product-interests-form-group cx-product-interests-thead-mobile form-group col-sm-12 col-md-4 col-lg-4\"\n        >\n          <cx-sorting\n            [sortOptions]=\"sortOptions\"\n            [sortLabels]=\"sortLabels | async\"\n            (sortListEvent)=\"sortChange($event)\"\n            [selectedOption]=\"sort\"\n            placeholder=\"{{ 'myInterests.sortByMostRecent' | cxTranslate }}\"\n          >\n          </cx-sorting>\n        </div>\n        <div class=\"cx-product-interests-pagination\">\n          <cx-pagination\n            [pagination]=\"pagination\"\n            (viewPageEvent)=\"pageChange($event)\"\n          ></cx-pagination>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>\n<ng-template #noInterest>\n  <div class=\"cx-product-interests-message\">\n    {{ 'myInterests.noInterests' | cxTranslate }}\n  </div>\n</ng-template>\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
MyInterestsComponent.ctorParameters = () => [
    { type: UserInterestsService },
    { type: TranslationService },
    { type: ProductService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktaW50ZXJlc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9teS1pbnRlcmVzdHMvbXktaW50ZXJlc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEdBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBS0wsY0FBYyxFQUNkLGtCQUFrQixFQUNsQixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRTFDLDRDQUlDOzs7SUFIQyxnREFFSzs7QUFRUCxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7SUF5Qi9CLFlBQ1Usc0JBQTRDLEVBQzVDLGtCQUFzQyxFQUN0QyxjQUE4QjtRQUY5QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXNCO1FBQzVDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBM0JoQyxzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBRztZQUNwQixTQUFTLEVBQUUsVUFBVTtZQUNyQixVQUFVLEVBQUUsV0FBVztTQUN4QixDQUFDO1FBRUYsU0FBSSxHQUFHLFdBQVcsQ0FBQztRQUNuQixnQkFBVyxHQUFHO1lBQ1o7Z0JBQ0UsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1NBQ0YsQ0FBQztJQVlDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsc0JBQXNCO2FBQzFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzthQUNsRCxJQUFJLENBQ0gsR0FBRzs7OztRQUNELFNBQVMsQ0FBQyxFQUFFLENBQ1YsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2pCLFdBQVcsRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUk7WUFDdEMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSztZQUNwQyxVQUFVLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVO1lBQzNDLFlBQVksRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLFVBQVU7WUFDN0MsSUFBSSxFQUFFLFdBQVc7U0FDbEIsQ0FBQyxFQUNMLEVBQ0QsR0FBRzs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsbUJBQ1gsUUFBUSxJQUNYLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTztnQkFDdkIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztnQkFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLG1CQUMxQixNQUFNLElBQ1QsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQ2pDLEVBQUM7Z0JBQ0wsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQ3BCLEVBQUMsQ0FDSixDQUFDO1FBRUosSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ3BGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxhQUFhLENBQUM7WUFDckMsSUFBSSxDQUFDLG9CQUFvQjtZQUN6QixJQUFJLENBQUMsc0JBQXNCLENBQUMsOEJBQThCLEVBQUU7U0FDN0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxJQUFJLGFBQWEsRUFBQyxDQUFDLENBQUM7UUFFM0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFTyxhQUFhO1FBSW5CLE9BQU8sYUFBYSxDQUFDO1lBQ25CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsK0JBQStCLENBQUM7WUFDbEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUNwRSxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDbEIsT0FBTztnQkFDTCxTQUFTLEVBQUUsR0FBRztnQkFDZCxVQUFVLEVBQUUsSUFBSTthQUNqQixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLFVBQVUsQ0FDaEIsUUFBc0M7UUFFdEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7OztJQUVELGNBQWMsQ0FDWixRQUVDO1FBRUQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLG9CQUFvQixDQUFDO1lBQy9DLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTztZQUN6QixvQkFBb0IsRUFBRSxRQUFRLENBQUMsb0JBQW9CO1NBQ3BELENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQVk7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLG9CQUFvQixDQUM5QyxJQUFJLENBQUMsaUJBQWlCLEVBQ3RCLENBQUMsRUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUN2QixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBWTtRQUNyQixJQUFJLENBQUMsc0JBQXNCLENBQUMsb0JBQW9CLENBQzlDLElBQUksQ0FBQyxpQkFBaUIsRUFDdEIsSUFBSSxFQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUM1QixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsc0JBQXNCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUN6RCxDQUFDOzs7WUE1SEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLCsrUEFBNEM7Z0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBZEMsb0JBQW9CO1lBRHBCLGtCQUFrQjtZQURsQixjQUFjOzs7Ozs7O0lBa0JkLGlEQUErQjs7Ozs7SUFDL0IsMkNBR0U7O0lBRUYsb0NBQW1COztJQUNuQiwyQ0FTRTs7SUFDRiwwQ0FBNEI7O0lBRTVCLDBDQUFzRDs7SUFDdEQsaURBQXVDOztJQUN2QyxvREFBMEM7O0lBQzFDLDBDQUFrRTs7Ozs7SUFHaEUsc0RBQW9EOzs7OztJQUNwRCxrREFBOEM7Ozs7O0lBQzlDLDhDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIFBhZ2luYXRpb25Nb2RlbCxcbiAgUHJvZHVjdCxcbiAgUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvbixcbiAgUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0LFxuICBQcm9kdWN0U2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBVc2VySW50ZXJlc3RzU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbnRlcmZhY2UgUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0VUkgZXh0ZW5kcyBQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQge1xuICByZXN1bHRzPzogKFByb2R1Y3RJbnRlcmVzdEVudHJ5UmVsYXRpb24gJiB7XG4gICAgcHJvZHVjdCQ/OiBPYnNlcnZhYmxlPFByb2R1Y3Q+O1xuICB9KVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1teS1pbnRlcmVzdHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vbXktaW50ZXJlc3RzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE15SW50ZXJlc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIERFRkFVTFRfUEFHRV9TSVpFID0gMTA7XG4gIHByaXZhdGUgc29ydE1hcHBpbmcgPSB7XG4gICAgYnlOYW1lQXNjOiAnbmFtZTphc2MnLFxuICAgIGJ5TmFtZURlc2M6ICduYW1lOmRlc2MnLFxuICB9O1xuXG4gIHNvcnQgPSAnYnlOYW1lQXNjJztcbiAgc29ydE9wdGlvbnMgPSBbXG4gICAge1xuICAgICAgY29kZTogJ2J5TmFtZUFzYycsXG4gICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiAnYnlOYW1lRGVzYycsXG4gICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgfSxcbiAgXTtcbiAgcGFnaW5hdGlvbjogUGFnaW5hdGlvbk1vZGVsO1xuXG4gIGludGVyZXN0cyQ6IE9ic2VydmFibGU8UHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0VUk+O1xuICBpc1JlbW92ZURpc2FibGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgZ2V0SW50ZXJlc3RzbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHNvcnRMYWJlbHM6IE9ic2VydmFibGU8eyBieU5hbWVBc2M6IHN0cmluZzsgYnlOYW1lRGVzYzogc3RyaW5nIH0+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcHJvZHVjdEludGVyZXN0U2VydmljZTogVXNlckludGVyZXN0c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnRlcmVzdHMkID0gdGhpcy5wcm9kdWN0SW50ZXJlc3RTZXJ2aWNlXG4gICAgICAuZ2V0QW5kTG9hZFByb2R1Y3RJbnRlcmVzdHModGhpcy5ERUZBVUxUX1BBR0VfU0laRSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoXG4gICAgICAgICAgaW50ZXJlc3RzID0+XG4gICAgICAgICAgICAodGhpcy5wYWdpbmF0aW9uID0ge1xuICAgICAgICAgICAgICBjdXJyZW50UGFnZTogaW50ZXJlc3RzLnBhZ2luYXRpb24ucGFnZSxcbiAgICAgICAgICAgICAgcGFnZVNpemU6IGludGVyZXN0cy5wYWdpbmF0aW9uLmNvdW50LFxuICAgICAgICAgICAgICB0b3RhbFBhZ2VzOiBpbnRlcmVzdHMucGFnaW5hdGlvbi50b3RhbFBhZ2VzLFxuICAgICAgICAgICAgICB0b3RhbFJlc3VsdHM6IGludGVyZXN0cy5wYWdpbmF0aW9uLnRvdGFsQ291bnQsXG4gICAgICAgICAgICAgIHNvcnQ6ICdieU5hbWVBc2MnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKSxcbiAgICAgICAgbWFwKGludGVyZXN0ID0+ICh7XG4gICAgICAgICAgLi4uaW50ZXJlc3QsXG4gICAgICAgICAgcmVzdWx0czogaW50ZXJlc3QucmVzdWx0c1xuICAgICAgICAgICAgPyBpbnRlcmVzdC5yZXN1bHRzLm1hcChyZXN1bHQgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgcHJvZHVjdCQ6IHRoaXMuZ2V0UHJvZHVjdChyZXN1bHQpLFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIDogaW50ZXJlc3QucmVzdWx0cyxcbiAgICAgICAgfSkpXG4gICAgICApO1xuXG4gICAgdGhpcy5nZXRJbnRlcmVzdHNsb2FkaW5nJCA9IHRoaXMucHJvZHVjdEludGVyZXN0U2VydmljZS5nZXRQcm9kdXRJbnRlcmVzdHNMb2FkaW5nKCk7XG4gICAgdGhpcy5pc1JlbW92ZURpc2FibGVkJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5nZXRJbnRlcmVzdHNsb2FkaW5nJCxcbiAgICAgIHRoaXMucHJvZHVjdEludGVyZXN0U2VydmljZS5nZXRSZW1vdmVQcm9kdXRJbnRlcmVzdExvYWRpbmcoKSxcbiAgICBdKS5waXBlKG1hcCgoW2dldExvYWRpbmcsIHJlbW92ZUxvYWRpbmddKSA9PiBnZXRMb2FkaW5nIHx8IHJlbW92ZUxvYWRpbmcpKTtcblxuICAgIHRoaXMuc29ydExhYmVscyA9IHRoaXMuZ2V0U29ydExhYmVscygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTb3J0TGFiZWxzKCk6IE9ic2VydmFibGU8e1xuICAgIGJ5TmFtZUFzYzogc3RyaW5nO1xuICAgIGJ5TmFtZURlc2M6IHN0cmluZztcbiAgfT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLnRyYW5zbGF0ZSgnbXlJbnRlcmVzdHMuc29ydGluZy5ieU5hbWVBc2MnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLnRyYW5zbGF0ZSgnbXlJbnRlcmVzdHMuc29ydGluZy5ieU5hbWVEZXNjJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW2FzYywgZGVzY10pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBieU5hbWVBc2M6IGFzYyxcbiAgICAgICAgICBieU5hbWVEZXNjOiBkZXNjLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0KFxuICAgIGludGVyZXN0OiBQcm9kdWN0SW50ZXJlc3RFbnRyeVJlbGF0aW9uXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldChpbnRlcmVzdC5wcm9kdWN0LmNvZGUsICdkZXRhaWxzJyk7XG4gIH1cblxuICByZW1vdmVJbnRlcmVzdChcbiAgICByZWxhdGlvbjogUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvbiAmIHtcbiAgICAgIHByb2R1Y3QkPzogT2JzZXJ2YWJsZTxQcm9kdWN0PjtcbiAgICB9XG4gICk6IHZvaWQge1xuICAgIHRoaXMucHJvZHVjdEludGVyZXN0U2VydmljZS5yZW1vdmVQcm9kdXRJbnRlcmVzdCh7XG4gICAgICBwcm9kdWN0OiByZWxhdGlvbi5wcm9kdWN0LFxuICAgICAgcHJvZHVjdEludGVyZXN0RW50cnk6IHJlbGF0aW9uLnByb2R1Y3RJbnRlcmVzdEVudHJ5LFxuICAgIH0pO1xuICB9XG5cbiAgc29ydENoYW5nZShzb3J0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNvcnQgPSBzb3J0O1xuICAgIHRoaXMucHJvZHVjdEludGVyZXN0U2VydmljZS5sb2FkUHJvZHVjdEludGVyZXN0cyhcbiAgICAgIHRoaXMuREVGQVVMVF9QQUdFX1NJWkUsXG4gICAgICAwLFxuICAgICAgdGhpcy5zb3J0TWFwcGluZ1tzb3J0XVxuICAgICk7XG4gIH1cblxuICBwYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucHJvZHVjdEludGVyZXN0U2VydmljZS5sb2FkUHJvZHVjdEludGVyZXN0cyhcbiAgICAgIHRoaXMuREVGQVVMVF9QQUdFX1NJWkUsXG4gICAgICBwYWdlLFxuICAgICAgdGhpcy5zb3J0TWFwcGluZ1t0aGlzLnNvcnRdXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucHJvZHVjdEludGVyZXN0U2VydmljZS5jbGVhclByb2R1Y3RJbnRlcmVzdHMoKTtcbiAgICB0aGlzLnByb2R1Y3RJbnRlcmVzdFNlcnZpY2UucmVzZXRSZW1vdmVJbnRlcmVzdFN0YXRlKCk7XG4gIH1cbn1cbiJdfQ==