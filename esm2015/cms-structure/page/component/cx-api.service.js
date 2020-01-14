/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, NgZone, Optional } from '@angular/core';
import { AuthService, BaseSiteService, CartDataService, CartService, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, CmsService, CurrencyService, FeatureConfigService, GlobalMessageService, KymaService, LanguageService, OccEndpointsService, PageMetaService, ProductReferenceService, ProductReviewService, ProductSearchService, ProductService, RoutingService, SearchboxService, TranslationService, UserAddressService, UserConsentService, UserOrderService, UserPaymentService, UserService, UserNotificationPreferenceService, UserInterestsService, SelectiveCartService, } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class CxApiService {
    /**
     * @param {?} auth
     * @param {?} cart
     * @param {?} cartData
     * @param {?} checkout
     * @param {?} checkoutDelivery
     * @param {?} checkoutPayment
     * @param {?} cms
     * @param {?} pageMeta
     * @param {?} featureConfig
     * @param {?} globalMessage
     * @param {?} translation
     * @param {?} kyma
     * @param {?} occEndpoints
     * @param {?} product
     * @param {?} productSearch
     * @param {?} productReview
     * @param {?} productReference
     * @param {?} searchbox
     * @param {?} routing
     * @param {?} currency
     * @param {?} language
     * @param {?} baseSite
     * @param {?} user
     * @param {?} userAddress
     * @param {?} userConsent
     * @param {?} userOrder
     * @param {?} userPayment
     * @param {?} userNotificationPreferenceService
     * @param {?} userInterestsService
     * @param {?} selectiveCartService
     * @param {?} ngZone
     */
    constructor(auth, cart, cartData, checkout, checkoutDelivery, checkoutPayment, cms, pageMeta, featureConfig, globalMessage, translation, kyma, occEndpoints, product, productSearch, productReview, productReference, searchbox, routing, currency, language, baseSite, user, userAddress, userConsent, userOrder, userPayment, userNotificationPreferenceService, userInterestsService, selectiveCartService, ngZone) {
        this.auth = auth;
        this.cart = cart;
        this.cartData = cartData;
        this.checkout = checkout;
        this.checkoutDelivery = checkoutDelivery;
        this.checkoutPayment = checkoutPayment;
        this.cms = cms;
        this.pageMeta = pageMeta;
        this.featureConfig = featureConfig;
        this.globalMessage = globalMessage;
        this.translation = translation;
        this.kyma = kyma;
        this.occEndpoints = occEndpoints;
        this.product = product;
        this.productSearch = productSearch;
        this.productReview = productReview;
        this.productReference = productReference;
        this.searchbox = searchbox;
        this.routing = routing;
        this.currency = currency;
        this.language = language;
        this.baseSite = baseSite;
        this.user = user;
        this.userAddress = userAddress;
        this.userConsent = userConsent;
        this.userOrder = userOrder;
        this.userPayment = userPayment;
        this.userNotificationPreferenceService = userNotificationPreferenceService;
        this.userInterestsService = userInterestsService;
        this.selectiveCartService = selectiveCartService;
        this.ngZone = ngZone;
    }
}
CxApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CxApiService.ctorParameters = () => [
    { type: AuthService, decorators: [{ type: Optional }] },
    { type: CartService, decorators: [{ type: Optional }] },
    { type: CartDataService, decorators: [{ type: Optional }] },
    { type: CheckoutService, decorators: [{ type: Optional }] },
    { type: CheckoutDeliveryService, decorators: [{ type: Optional }] },
    { type: CheckoutPaymentService, decorators: [{ type: Optional }] },
    { type: CmsService, decorators: [{ type: Optional }] },
    { type: PageMetaService, decorators: [{ type: Optional }] },
    { type: FeatureConfigService, decorators: [{ type: Optional }] },
    { type: GlobalMessageService, decorators: [{ type: Optional }] },
    { type: TranslationService, decorators: [{ type: Optional }] },
    { type: KymaService, decorators: [{ type: Optional }] },
    { type: OccEndpointsService, decorators: [{ type: Optional }] },
    { type: ProductService, decorators: [{ type: Optional }] },
    { type: ProductSearchService, decorators: [{ type: Optional }] },
    { type: ProductReviewService, decorators: [{ type: Optional }] },
    { type: ProductReferenceService, decorators: [{ type: Optional }] },
    { type: SearchboxService, decorators: [{ type: Optional }] },
    { type: RoutingService, decorators: [{ type: Optional }] },
    { type: CurrencyService, decorators: [{ type: Optional }] },
    { type: LanguageService, decorators: [{ type: Optional }] },
    { type: BaseSiteService, decorators: [{ type: Optional }] },
    { type: UserService, decorators: [{ type: Optional }] },
    { type: UserAddressService, decorators: [{ type: Optional }] },
    { type: UserConsentService, decorators: [{ type: Optional }] },
    { type: UserOrderService, decorators: [{ type: Optional }] },
    { type: UserPaymentService, decorators: [{ type: Optional }] },
    { type: UserNotificationPreferenceService, decorators: [{ type: Optional }] },
    { type: UserInterestsService, decorators: [{ type: Optional }] },
    { type: SelectiveCartService, decorators: [{ type: Optional }] },
    { type: NgZone }
];
/** @nocollapse */ CxApiService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CxApiService_Factory() { return new CxApiService(i0.ɵɵinject(i1.AuthService, 8), i0.ɵɵinject(i1.CartService, 8), i0.ɵɵinject(i1.CartDataService, 8), i0.ɵɵinject(i1.CheckoutService, 8), i0.ɵɵinject(i1.CheckoutDeliveryService, 8), i0.ɵɵinject(i1.CheckoutPaymentService, 8), i0.ɵɵinject(i1.CmsService, 8), i0.ɵɵinject(i1.PageMetaService, 8), i0.ɵɵinject(i1.FeatureConfigService, 8), i0.ɵɵinject(i1.GlobalMessageService, 8), i0.ɵɵinject(i1.TranslationService, 8), i0.ɵɵinject(i1.KymaService, 8), i0.ɵɵinject(i1.OccEndpointsService, 8), i0.ɵɵinject(i1.ProductService, 8), i0.ɵɵinject(i1.ProductSearchService, 8), i0.ɵɵinject(i1.ProductReviewService, 8), i0.ɵɵinject(i1.ProductReferenceService, 8), i0.ɵɵinject(i1.SearchboxService, 8), i0.ɵɵinject(i1.RoutingService, 8), i0.ɵɵinject(i1.CurrencyService, 8), i0.ɵɵinject(i1.LanguageService, 8), i0.ɵɵinject(i1.BaseSiteService, 8), i0.ɵɵinject(i1.UserService, 8), i0.ɵɵinject(i1.UserAddressService, 8), i0.ɵɵinject(i1.UserConsentService, 8), i0.ɵɵinject(i1.UserOrderService, 8), i0.ɵɵinject(i1.UserPaymentService, 8), i0.ɵɵinject(i1.UserNotificationPreferenceService, 8), i0.ɵɵinject(i1.UserInterestsService, 8), i0.ɵɵinject(i1.SelectiveCartService, 8), i0.ɵɵinject(i0.NgZone)); }, token: CxApiService, providedIn: "root" });
if (false) {
    /** @type {?} */
    CxApiService.prototype.cmsComponentData;
    /** @type {?} */
    CxApiService.prototype.auth;
    /** @type {?} */
    CxApiService.prototype.cart;
    /** @type {?} */
    CxApiService.prototype.cartData;
    /** @type {?} */
    CxApiService.prototype.checkout;
    /** @type {?} */
    CxApiService.prototype.checkoutDelivery;
    /** @type {?} */
    CxApiService.prototype.checkoutPayment;
    /** @type {?} */
    CxApiService.prototype.cms;
    /** @type {?} */
    CxApiService.prototype.pageMeta;
    /** @type {?} */
    CxApiService.prototype.featureConfig;
    /** @type {?} */
    CxApiService.prototype.globalMessage;
    /** @type {?} */
    CxApiService.prototype.translation;
    /** @type {?} */
    CxApiService.prototype.kyma;
    /** @type {?} */
    CxApiService.prototype.occEndpoints;
    /** @type {?} */
    CxApiService.prototype.product;
    /** @type {?} */
    CxApiService.prototype.productSearch;
    /** @type {?} */
    CxApiService.prototype.productReview;
    /** @type {?} */
    CxApiService.prototype.productReference;
    /** @type {?} */
    CxApiService.prototype.searchbox;
    /** @type {?} */
    CxApiService.prototype.routing;
    /** @type {?} */
    CxApiService.prototype.currency;
    /** @type {?} */
    CxApiService.prototype.language;
    /** @type {?} */
    CxApiService.prototype.baseSite;
    /** @type {?} */
    CxApiService.prototype.user;
    /** @type {?} */
    CxApiService.prototype.userAddress;
    /** @type {?} */
    CxApiService.prototype.userConsent;
    /** @type {?} */
    CxApiService.prototype.userOrder;
    /** @type {?} */
    CxApiService.prototype.userPayment;
    /** @type {?} */
    CxApiService.prototype.userNotificationPreferenceService;
    /** @type {?} */
    CxApiService.prototype.userInterestsService;
    /** @type {?} */
    CxApiService.prototype.selectiveCartService;
    /** @type {?} */
    CxApiService.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3gtYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L2N4LWFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFdBQVcsRUFDWCxlQUFlLEVBQ2YsZUFBZSxFQUNmLFdBQVcsRUFDWCx1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3RCLGVBQWUsRUFDZixVQUFVLEVBQ1YsZUFBZSxFQUNmLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsV0FBVyxFQUNYLGVBQWUsRUFDZixtQkFBbUIsRUFDbkIsZUFBZSxFQUNmLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsb0JBQW9CLEVBQ3BCLGNBQWMsRUFDZCxjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsV0FBVyxFQUNYLGlDQUFpQyxFQUNqQyxvQkFBb0IsRUFDcEIsb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7OztBQU16QixNQUFNLE9BQU8sWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUd2QixZQUVxQixJQUFpQixFQUVqQixJQUFpQixFQUNqQixRQUF5QixFQUV6QixRQUF5QixFQUN6QixnQkFBeUMsRUFDekMsZUFBdUMsRUFFdkMsR0FBZSxFQUNmLFFBQXlCLEVBRXpCLGFBQW1DLEVBRW5DLGFBQW1DLEVBRW5DLFdBQStCLEVBRS9CLElBQWlCLEVBRWpCLFlBQWlDLEVBRWpDLE9BQXVCLEVBQ3ZCLGFBQW1DLEVBQ25DLGFBQW1DLEVBQ25DLGdCQUF5QyxFQUN6QyxTQUEyQixFQUUzQixP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dURqQixRQUFRO1lBdEZRLE1BQU07Ozs7O0lBdUN6Qix3Q0FBeUM7O0lBSXZDLDRCQUFvQzs7SUFFcEMsNEJBQW9DOztJQUNwQyxnQ0FBNEM7O0lBRTVDLGdDQUE0Qzs7SUFDNUMsd0NBQTREOztJQUM1RCx1Q0FBMEQ7O0lBRTFELDJCQUFrQzs7SUFDbEMsZ0NBQTRDOztJQUU1QyxxQ0FBc0Q7O0lBRXRELHFDQUFzRDs7SUFFdEQsbUNBQWtEOztJQUVsRCw0QkFBb0M7O0lBRXBDLG9DQUFvRDs7SUFFcEQsK0JBQTBDOztJQUMxQyxxQ0FBc0Q7O0lBQ3RELHFDQUFzRDs7SUFDdEQsd0NBQTREOztJQUM1RCxpQ0FBOEM7O0lBRTlDLCtCQUEwQzs7SUFFMUMsZ0NBQTRDOztJQUM1QyxnQ0FBNEM7O0lBQzVDLGdDQUE0Qzs7SUFFNUMsNEJBQW9DOztJQUNwQyxtQ0FBa0Q7O0lBQ2xELG1DQUFrRDs7SUFDbEQsaUNBQThDOztJQUM5QyxtQ0FBa0Q7O0lBQ2xELHlEQUMyRTs7SUFDM0UsNENBQ2lEOztJQUNqRCw0Q0FBNkQ7O0lBRTdELDhCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEF1dGhTZXJ2aWNlLFxuICBCYXNlU2l0ZVNlcnZpY2UsXG4gIENhcnREYXRhU2VydmljZSxcbiAgQ2FydFNlcnZpY2UsXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICBDaGVja291dFNlcnZpY2UsXG4gIENtc1NlcnZpY2UsXG4gIEN1cnJlbmN5U2VydmljZSxcbiAgRmVhdHVyZUNvbmZpZ1NlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBLeW1hU2VydmljZSxcbiAgTGFuZ3VhZ2VTZXJ2aWNlLFxuICBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICBQYWdlTWV0YVNlcnZpY2UsXG4gIFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlLFxuICBQcm9kdWN0UmV2aWV3U2VydmljZSxcbiAgUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gIFByb2R1Y3RTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgU2VhcmNoYm94U2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gIFVzZXJDb25zZW50U2VydmljZSxcbiAgVXNlck9yZGVyU2VydmljZSxcbiAgVXNlclBheW1lbnRTZXJ2aWNlLFxuICBVc2VyU2VydmljZSxcbiAgVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VTZXJ2aWNlLFxuICBVc2VySW50ZXJlc3RzU2VydmljZSxcbiAgU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vbW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ3hBcGlTZXJ2aWNlIHtcbiAgY21zQ29tcG9uZW50RGF0YT86IENtc0NvbXBvbmVudERhdGE8YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAvLyBhdXRoXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgIC8vIGNhcnRcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY2FydDogQ2FydFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2UsXG4gICAgLy8gY2hlY2tvdXRcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY2hlY2tvdXQ6IENoZWNrb3V0U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY2hlY2tvdXREZWxpdmVyeTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGNoZWNrb3V0UGF5bWVudDogQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgICAvLyBjbXNcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY21zOiBDbXNTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBwYWdlTWV0YTogUGFnZU1ldGFTZXJ2aWNlLFxuICAgIC8vIGZlYXR1cmVzIGNvbmZpZ1xuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZSxcbiAgICAvLyBnbG9iYWwgbWVzc2FnZVxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBnbG9iYWxNZXNzYWdlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICAvLyBpMThuXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgLy8ga3ltYVxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBreW1hOiBLeW1hU2VydmljZSxcbiAgICAvLyBvY2NcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIC8vIHByb2R1Y3RcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcHJvZHVjdDogUHJvZHVjdFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHByb2R1Y3RTZWFyY2g6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBwcm9kdWN0UmV2aWV3OiBQcm9kdWN0UmV2aWV3U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcHJvZHVjdFJlZmVyZW5jZTogUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHNlYXJjaGJveDogU2VhcmNoYm94U2VydmljZSxcbiAgICAvLyByb3V0aW5nXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIC8vIHNpdGUgY29udGV4dFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBjdXJyZW5jeTogQ3VycmVuY3lTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBsYW5ndWFnZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBiYXNlU2l0ZTogQmFzZVNpdGVTZXJ2aWNlLFxuICAgIC8vIHVzZXJcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdXNlcjogVXNlclNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHVzZXJBZGRyZXNzOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHVzZXJDb25zZW50OiBVc2VyQ29uc2VudFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHVzZXJPcmRlcjogVXNlck9yZGVyU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdXNlclBheW1lbnQ6IFVzZXJQYXltZW50U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIHB1YmxpYyB1c2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZVNlcnZpY2U6IFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIHB1YmxpYyB1c2VySW50ZXJlc3RzU2VydmljZTogVXNlckludGVyZXN0c1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlOiBTZWxlY3RpdmVDYXJ0U2VydmljZSxcbiAgICAvLyBmcmFtZXdvcmtcbiAgICBwdWJsaWMgbmdab25lOiBOZ1pvbmVcbiAgKSB7fVxufVxuIl19