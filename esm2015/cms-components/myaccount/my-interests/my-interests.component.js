/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { combineLatest } from 'rxjs';
import { ProductScope, ProductService, TranslationService, UserInterestsService, } from '@spartacus/core';
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
        return this.productService.get(interest.product.code, ProductScope.DETAILS);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktaW50ZXJlc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9teS1pbnRlcmVzdHMvbXktaW50ZXJlc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEdBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBS0wsWUFBWSxFQUNaLGNBQWMsRUFDZCxrQkFBa0IsRUFDbEIsb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUUxQyw0Q0FJQzs7O0lBSEMsZ0RBRUs7O0FBUVAsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBeUIvQixZQUNVLHNCQUE0QyxFQUM1QyxrQkFBc0MsRUFDdEMsY0FBOEI7UUFGOUIsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFzQjtRQUM1Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQTNCaEMsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQUc7WUFDcEIsU0FBUyxFQUFFLFVBQVU7WUFDckIsVUFBVSxFQUFFLFdBQVc7U0FDeEIsQ0FBQztRQUVGLFNBQUksR0FBRyxXQUFXLENBQUM7UUFDbkIsZ0JBQVcsR0FBRztZQUNaO2dCQUNFLElBQUksRUFBRSxXQUFXO2dCQUNqQixRQUFRLEVBQUUsS0FBSzthQUNoQjtZQUNEO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixRQUFRLEVBQUUsS0FBSzthQUNoQjtTQUNGLENBQUM7SUFZQyxDQUFDOzs7O0lBRUosUUFBUTtRQUNO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Q0FBQyxvQkFBb0IsQ0FDOUMsSUFBSSxDQUFDLGlCQUFpQixFQUN0QixJQUFJLEVBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQzVCLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ3pELENBQUM7OztZQTVIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsKytQQUE0QztnQkFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFkQyxvQkFBb0I7WUFEcEIsa0JBQWtCO1lBRGxCLGNBQWM7Ozs7Ozs7SUFrQmQsaURBQStCOzs7OztJQUMvQiwyQ0FHRTs7SUFFRixvQ0FBbUI7O0lBQ25CLDJDQVNFOztJQUNGLDBDQUE0Qjs7SUFFNUIsMENBQXNEOztJQUN0RCxpREFBdUM7O0lBQ3ZDLG9EQUEwQzs7SUFDMUMsMENBQWtFOzs7OztJQUdoRSxzREFBb0Q7Ozs7O0lBQ3BELGtEQUE4Qzs7Ozs7SUFDOUMsOENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgUGFnaW5hdGlvbk1vZGVsLFxuICBQcm9kdWN0LFxuICBQcm9kdWN0SW50ZXJlc3RFbnRyeVJlbGF0aW9uLFxuICBQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQsXG4gIFByb2R1Y3RTY29wZSxcbiAgUHJvZHVjdFNlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgVXNlckludGVyZXN0c1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW50ZXJmYWNlIFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdFVJIGV4dGVuZHMgUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0IHtcbiAgcmVzdWx0cz86IChQcm9kdWN0SW50ZXJlc3RFbnRyeVJlbGF0aW9uICYge1xuICAgIHByb2R1Y3QkPzogT2JzZXJ2YWJsZTxQcm9kdWN0PjtcbiAgfSlbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbXktaW50ZXJlc3RzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL215LWludGVyZXN0cy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNeUludGVyZXN0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBERUZBVUxUX1BBR0VfU0laRSA9IDEwO1xuICBwcml2YXRlIHNvcnRNYXBwaW5nID0ge1xuICAgIGJ5TmFtZUFzYzogJ25hbWU6YXNjJyxcbiAgICBieU5hbWVEZXNjOiAnbmFtZTpkZXNjJyxcbiAgfTtcblxuICBzb3J0ID0gJ2J5TmFtZUFzYyc7XG4gIHNvcnRPcHRpb25zID0gW1xuICAgIHtcbiAgICAgIGNvZGU6ICdieU5hbWVBc2MnLFxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogJ2J5TmFtZURlc2MnLFxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIH0sXG4gIF07XG4gIHBhZ2luYXRpb246IFBhZ2luYXRpb25Nb2RlbDtcblxuICBpbnRlcmVzdHMkOiBPYnNlcnZhYmxlPFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdFVJPjtcbiAgaXNSZW1vdmVEaXNhYmxlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGdldEludGVyZXN0c2xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBzb3J0TGFiZWxzOiBPYnNlcnZhYmxlPHsgYnlOYW1lQXNjOiBzdHJpbmc7IGJ5TmFtZURlc2M6IHN0cmluZyB9PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHByb2R1Y3RJbnRlcmVzdFNlcnZpY2U6IFVzZXJJbnRlcmVzdHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW50ZXJlc3RzJCA9IHRoaXMucHJvZHVjdEludGVyZXN0U2VydmljZVxuICAgICAgLmdldEFuZExvYWRQcm9kdWN0SW50ZXJlc3RzKHRoaXMuREVGQVVMVF9QQUdFX1NJWkUpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKFxuICAgICAgICAgIGludGVyZXN0cyA9PlxuICAgICAgICAgICAgKHRoaXMucGFnaW5hdGlvbiA9IHtcbiAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IGludGVyZXN0cy5wYWdpbmF0aW9uLnBhZ2UsXG4gICAgICAgICAgICAgIHBhZ2VTaXplOiBpbnRlcmVzdHMucGFnaW5hdGlvbi5jb3VudCxcbiAgICAgICAgICAgICAgdG90YWxQYWdlczogaW50ZXJlc3RzLnBhZ2luYXRpb24udG90YWxQYWdlcyxcbiAgICAgICAgICAgICAgdG90YWxSZXN1bHRzOiBpbnRlcmVzdHMucGFnaW5hdGlvbi50b3RhbENvdW50LFxuICAgICAgICAgICAgICBzb3J0OiAnYnlOYW1lQXNjJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgIG1hcChpbnRlcmVzdCA9PiAoe1xuICAgICAgICAgIC4uLmludGVyZXN0LFxuICAgICAgICAgIHJlc3VsdHM6IGludGVyZXN0LnJlc3VsdHNcbiAgICAgICAgICAgID8gaW50ZXJlc3QucmVzdWx0cy5tYXAocmVzdWx0ID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgICAgIHByb2R1Y3QkOiB0aGlzLmdldFByb2R1Y3QocmVzdWx0KSxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICA6IGludGVyZXN0LnJlc3VsdHMsXG4gICAgICAgIH0pKVxuICAgICAgKTtcblxuICAgIHRoaXMuZ2V0SW50ZXJlc3RzbG9hZGluZyQgPSB0aGlzLnByb2R1Y3RJbnRlcmVzdFNlcnZpY2UuZ2V0UHJvZHV0SW50ZXJlc3RzTG9hZGluZygpO1xuICAgIHRoaXMuaXNSZW1vdmVEaXNhYmxlZCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuZ2V0SW50ZXJlc3RzbG9hZGluZyQsXG4gICAgICB0aGlzLnByb2R1Y3RJbnRlcmVzdFNlcnZpY2UuZ2V0UmVtb3ZlUHJvZHV0SW50ZXJlc3RMb2FkaW5nKCksXG4gICAgXSkucGlwZShtYXAoKFtnZXRMb2FkaW5nLCByZW1vdmVMb2FkaW5nXSkgPT4gZ2V0TG9hZGluZyB8fCByZW1vdmVMb2FkaW5nKSk7XG5cbiAgICB0aGlzLnNvcnRMYWJlbHMgPSB0aGlzLmdldFNvcnRMYWJlbHMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U29ydExhYmVscygpOiBPYnNlcnZhYmxlPHtcbiAgICBieU5hbWVBc2M6IHN0cmluZztcbiAgICBieU5hbWVEZXNjOiBzdHJpbmc7XG4gIH0+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS50cmFuc2xhdGUoJ215SW50ZXJlc3RzLnNvcnRpbmcuYnlOYW1lQXNjJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS50cmFuc2xhdGUoJ215SW50ZXJlc3RzLnNvcnRpbmcuYnlOYW1lRGVzYycpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFthc2MsIGRlc2NdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYnlOYW1lQXNjOiBhc2MsXG4gICAgICAgICAgYnlOYW1lRGVzYzogZGVzYyxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJvZHVjdChcbiAgICBpbnRlcmVzdDogUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvblxuICApOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0U2VydmljZS5nZXQoaW50ZXJlc3QucHJvZHVjdC5jb2RlLCBQcm9kdWN0U2NvcGUuREVUQUlMUyk7XG4gIH1cblxuICByZW1vdmVJbnRlcmVzdChcbiAgICByZWxhdGlvbjogUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvbiAmIHtcbiAgICAgIHByb2R1Y3QkPzogT2JzZXJ2YWJsZTxQcm9kdWN0PjtcbiAgICB9XG4gICk6IHZvaWQge1xuICAgIHRoaXMucHJvZHVjdEludGVyZXN0U2VydmljZS5yZW1vdmVQcm9kdXRJbnRlcmVzdCh7XG4gICAgICBwcm9kdWN0OiByZWxhdGlvbi5wcm9kdWN0LFxuICAgICAgcHJvZHVjdEludGVyZXN0RW50cnk6IHJlbGF0aW9uLnByb2R1Y3RJbnRlcmVzdEVudHJ5LFxuICAgIH0pO1xuICB9XG5cbiAgc29ydENoYW5nZShzb3J0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNvcnQgPSBzb3J0O1xuICAgIHRoaXMucHJvZHVjdEludGVyZXN0U2VydmljZS5sb2FkUHJvZHVjdEludGVyZXN0cyhcbiAgICAgIHRoaXMuREVGQVVMVF9QQUdFX1NJWkUsXG4gICAgICAwLFxuICAgICAgdGhpcy5zb3J0TWFwcGluZ1tzb3J0XVxuICAgICk7XG4gIH1cblxuICBwYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucHJvZHVjdEludGVyZXN0U2VydmljZS5sb2FkUHJvZHVjdEludGVyZXN0cyhcbiAgICAgIHRoaXMuREVGQVVMVF9QQUdFX1NJWkUsXG4gICAgICBwYWdlLFxuICAgICAgdGhpcy5zb3J0TWFwcGluZ1t0aGlzLnNvcnRdXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucHJvZHVjdEludGVyZXN0U2VydmljZS5jbGVhclByb2R1Y3RJbnRlcmVzdHMoKTtcbiAgICB0aGlzLnByb2R1Y3RJbnRlcmVzdFNlcnZpY2UucmVzZXRSZW1vdmVJbnRlcmVzdFN0YXRlKCk7XG4gIH1cbn1cbiJdfQ==