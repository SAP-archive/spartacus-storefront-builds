/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, NgZone, Optional } from '@angular/core';
import { AuthService, BaseSiteService, CartDataService, CartService, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, CmsService, CurrencyService, FeatureConfigService, GlobalMessageService, KymaService, LanguageService, OccEndpointsService, PageMetaService, ProductReferenceService, ProductReviewService, ProductSearchService, ProductService, RoutingService, SearchboxService, TranslationService, UserAddressService, UserConsentService, UserOrderService, UserPaymentService, UserService, UserNotificationPreferenceService, UserInterestsService, } from '@spartacus/core';
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
     * @param {?} ngZone
     */
    constructor(auth, cart, cartData, checkout, checkoutDelivery, checkoutPayment, cms, pageMeta, featureConfig, globalMessage, translation, kyma, occEndpoints, product, productSearch, productReview, productReference, searchbox, routing, currency, language, baseSite, user, userAddress, userConsent, userOrder, userPayment, userNotificationPreferenceService, userInterestsService, ngZone) {
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
    { type: NgZone }
];
/** @nocollapse */ CxApiService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CxApiService_Factory() { return new CxApiService(i0.ɵɵinject(i1.AuthService, 8), i0.ɵɵinject(i1.CartService, 8), i0.ɵɵinject(i1.CartDataService, 8), i0.ɵɵinject(i1.CheckoutService, 8), i0.ɵɵinject(i1.CheckoutDeliveryService, 8), i0.ɵɵinject(i1.CheckoutPaymentService, 8), i0.ɵɵinject(i1.CmsService, 8), i0.ɵɵinject(i1.PageMetaService, 8), i0.ɵɵinject(i1.FeatureConfigService, 8), i0.ɵɵinject(i1.GlobalMessageService, 8), i0.ɵɵinject(i1.TranslationService, 8), i0.ɵɵinject(i1.KymaService, 8), i0.ɵɵinject(i1.OccEndpointsService, 8), i0.ɵɵinject(i1.ProductService, 8), i0.ɵɵinject(i1.ProductSearchService, 8), i0.ɵɵinject(i1.ProductReviewService, 8), i0.ɵɵinject(i1.ProductReferenceService, 8), i0.ɵɵinject(i1.SearchboxService, 8), i0.ɵɵinject(i1.RoutingService, 8), i0.ɵɵinject(i1.CurrencyService, 8), i0.ɵɵinject(i1.LanguageService, 8), i0.ɵɵinject(i1.BaseSiteService, 8), i0.ɵɵinject(i1.UserService, 8), i0.ɵɵinject(i1.UserAddressService, 8), i0.ɵɵinject(i1.UserConsentService, 8), i0.ɵɵinject(i1.UserOrderService, 8), i0.ɵɵinject(i1.UserPaymentService, 8), i0.ɵɵinject(i1.UserNotificationPreferenceService, 8), i0.ɵɵinject(i1.UserInterestsService, 8), i0.ɵɵinject(i0.NgZone)); }, token: CxApiService, providedIn: "root" });
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
    CxApiService.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3gtYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L2N4LWFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFdBQVcsRUFDWCxlQUFlLEVBQ2YsZUFBZSxFQUNmLFdBQVcsRUFDWCx1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3RCLGVBQWUsRUFDZixVQUFVLEVBQ1YsZUFBZSxFQUNmLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsV0FBVyxFQUNYLGVBQWUsRUFDZixtQkFBbUIsRUFDbkIsZUFBZSxFQUNmLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsb0JBQW9CLEVBQ3BCLGNBQWMsRUFDZCxjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsV0FBVyxFQUNYLGlDQUFpQyxFQUNqQyxvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBTXpCLE1BQU0sT0FBTyxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHdkIsWUFFcUIsSUFBaUIsRUFFakIsSUFBaUIsRUFDakIsUUFBeUIsRUFFekIsUUFBeUIsRUFDekIsZ0JBQXlDLEVBQ3pDLGVBQXVDLEVBRXZDLEdBQWUsRUFDZixRQUF5QixFQUV6QixhQUFtQyxFQUVuQyxhQUFtQyxFQUVuQyxXQUErQixFQUUvQixJQUFpQixFQUVqQixZQUFpQyxFQUVqQyxPQUF1QixFQUN2QixhQUFtQyxFQUNuQyxhQUFtQyxFQUNuQyxnQkFBeUMsRUFDekMsU0FBMkIsRUFFM0IsT0FBdUIsRUFFdkIsUUFB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NUMsZ0NBQTRDOztJQUM1Qyx3Q0FBNEQ7O0lBQzVELHVDQUEwRDs7SUFFMUQsMkJBQWtDOztJQUNsQyxnQ0FBNEM7O0lBRTVDLHFDQUFzRDs7SUFFdEQscUNBQXNEOztJQUV0RCxtQ0FBa0Q7O0lBRWxELDRCQUFvQzs7SUFFcEMsb0NBQW9EOztJQUVwRCwrQkFBMEM7O0lBQzFDLHFDQUFzRDs7SUFDdEQscUNBQXNEOztJQUN0RCx3Q0FBNEQ7O0lBQzVELGlDQUE4Qzs7SUFFOUMsK0JBQTBDOztJQUUxQyxnQ0FBNEM7O0lBQzVDLGdDQUE0Qzs7SUFDNUMsZ0NBQTRDOztJQUU1Qyw0QkFBb0M7O0lBQ3BDLG1DQUFrRDs7SUFDbEQsbUNBQWtEOztJQUNsRCxpQ0FBOEM7O0lBQzlDLG1DQUFrRDs7SUFDbEQseURBQzJFOztJQUMzRSw0Q0FDaUQ7O0lBRWpELDhCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEF1dGhTZXJ2aWNlLFxuICBCYXNlU2l0ZVNlcnZpY2UsXG4gIENhcnREYXRhU2VydmljZSxcbiAgQ2FydFNlcnZpY2UsXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICBDaGVja291dFNlcnZpY2UsXG4gIENtc1NlcnZpY2UsXG4gIEN1cnJlbmN5U2VydmljZSxcbiAgRmVhdHVyZUNvbmZpZ1NlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBLeW1hU2VydmljZSxcbiAgTGFuZ3VhZ2VTZXJ2aWNlLFxuICBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICBQYWdlTWV0YVNlcnZpY2UsXG4gIFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlLFxuICBQcm9kdWN0UmV2aWV3U2VydmljZSxcbiAgUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gIFByb2R1Y3RTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgU2VhcmNoYm94U2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gIFVzZXJDb25zZW50U2VydmljZSxcbiAgVXNlck9yZGVyU2VydmljZSxcbiAgVXNlclBheW1lbnRTZXJ2aWNlLFxuICBVc2VyU2VydmljZSxcbiAgVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VTZXJ2aWNlLFxuICBVc2VySW50ZXJlc3RzU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi9tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDeEFwaVNlcnZpY2Uge1xuICBjbXNDb21wb25lbnREYXRhPzogQ21zQ29tcG9uZW50RGF0YTxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIGF1dGhcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgLy8gY2FydFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBjYXJ0OiBDYXJ0U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY2FydERhdGE6IENhcnREYXRhU2VydmljZSxcbiAgICAvLyBjaGVja291dFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBjaGVja291dDogQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBjaGVja291dERlbGl2ZXJ5OiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY2hlY2tvdXRQYXltZW50OiBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICAgIC8vIGNtc1xuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBjbXM6IENtc1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHBhZ2VNZXRhOiBQYWdlTWV0YVNlcnZpY2UsXG4gICAgLy8gZmVhdHVyZXMgY29uZmlnXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICAgIC8vIGdsb2JhbCBtZXNzYWdlXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGdsb2JhbE1lc3NhZ2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIC8vIGkxOG5cbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICAvLyBreW1hXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGt5bWE6IEt5bWFTZXJ2aWNlLFxuICAgIC8vIG9jY1xuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgLy8gcHJvZHVjdFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBwcm9kdWN0OiBQcm9kdWN0U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcHJvZHVjdFNlYXJjaDogUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHByb2R1Y3RSZXZpZXc6IFByb2R1Y3RSZXZpZXdTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBwcm9kdWN0UmVmZXJlbmNlOiBQcm9kdWN0UmVmZXJlbmNlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgc2VhcmNoYm94OiBTZWFyY2hib3hTZXJ2aWNlLFxuICAgIC8vIHJvdXRpbmdcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgLy8gc2l0ZSBjb250ZXh0XG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGN1cnJlbmN5OiBDdXJyZW5jeVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGxhbmd1YWdlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGJhc2VTaXRlOiBCYXNlU2l0ZVNlcnZpY2UsXG4gICAgLy8gdXNlclxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyB1c2VyOiBVc2VyU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdXNlckFkZHJlc3M6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdXNlckNvbnNlbnQ6IFVzZXJDb25zZW50U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdXNlck9yZGVyOiBVc2VyT3JkZXJTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyB1c2VyUGF5bWVudDogVXNlclBheW1lbnRTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgcHVibGljIHVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlU2VydmljZTogVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgcHVibGljIHVzZXJJbnRlcmVzdHNTZXJ2aWNlOiBVc2VySW50ZXJlc3RzU2VydmljZSxcbiAgICAvLyBmcmFtZXdvcmtcbiAgICBwdWJsaWMgbmdab25lOiBOZ1pvbmVcbiAgKSB7fVxufVxuIl19