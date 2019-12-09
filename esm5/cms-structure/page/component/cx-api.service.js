/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, NgZone, Optional } from '@angular/core';
import { AuthService, BaseSiteService, CartDataService, CartService, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, CmsService, CurrencyService, FeatureConfigService, GlobalMessageService, KymaService, LanguageService, OccEndpointsService, PageMetaService, ProductReferenceService, ProductReviewService, ProductSearchService, ProductService, RoutingService, SearchboxService, TranslationService, UserAddressService, UserConsentService, UserOrderService, UserPaymentService, UserService, UserNotificationPreferenceService, UserInterestsService, } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CxApiService = /** @class */ (function () {
    function CxApiService(auth, cart, cartData, checkout, checkoutDelivery, checkoutPayment, cms, pageMeta, featureConfig, globalMessage, translation, kyma, occEndpoints, product, productSearch, productReview, productReference, searchbox, routing, currency, language, baseSite, user, userAddress, userConsent, userOrder, userPayment, userNotificationPreferenceService, userInterestsService, ngZone) {
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
    CxApiService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CxApiService.ctorParameters = function () { return [
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
    ]; };
    /** @nocollapse */ CxApiService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CxApiService_Factory() { return new CxApiService(i0.ɵɵinject(i1.AuthService, 8), i0.ɵɵinject(i1.CartService, 8), i0.ɵɵinject(i1.CartDataService, 8), i0.ɵɵinject(i1.CheckoutService, 8), i0.ɵɵinject(i1.CheckoutDeliveryService, 8), i0.ɵɵinject(i1.CheckoutPaymentService, 8), i0.ɵɵinject(i1.CmsService, 8), i0.ɵɵinject(i1.PageMetaService, 8), i0.ɵɵinject(i1.FeatureConfigService, 8), i0.ɵɵinject(i1.GlobalMessageService, 8), i0.ɵɵinject(i1.TranslationService, 8), i0.ɵɵinject(i1.KymaService, 8), i0.ɵɵinject(i1.OccEndpointsService, 8), i0.ɵɵinject(i1.ProductService, 8), i0.ɵɵinject(i1.ProductSearchService, 8), i0.ɵɵinject(i1.ProductReviewService, 8), i0.ɵɵinject(i1.ProductReferenceService, 8), i0.ɵɵinject(i1.SearchboxService, 8), i0.ɵɵinject(i1.RoutingService, 8), i0.ɵɵinject(i1.CurrencyService, 8), i0.ɵɵinject(i1.LanguageService, 8), i0.ɵɵinject(i1.BaseSiteService, 8), i0.ɵɵinject(i1.UserService, 8), i0.ɵɵinject(i1.UserAddressService, 8), i0.ɵɵinject(i1.UserConsentService, 8), i0.ɵɵinject(i1.UserOrderService, 8), i0.ɵɵinject(i1.UserPaymentService, 8), i0.ɵɵinject(i1.UserNotificationPreferenceService, 8), i0.ɵɵinject(i1.UserInterestsService, 8), i0.ɵɵinject(i0.NgZone)); }, token: CxApiService, providedIn: "root" });
    return CxApiService;
}());
export { CxApiService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3gtYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L2N4LWFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFdBQVcsRUFDWCxlQUFlLEVBQ2YsZUFBZSxFQUNmLFdBQVcsRUFDWCx1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3RCLGVBQWUsRUFDZixVQUFVLEVBQ1YsZUFBZSxFQUNmLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsV0FBVyxFQUNYLGVBQWUsRUFDZixtQkFBbUIsRUFDbkIsZUFBZSxFQUNmLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsb0JBQW9CLEVBQ3BCLGNBQWMsRUFDZCxjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsV0FBVyxFQUNYLGlDQUFpQyxFQUNqQyxvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBR3pCO0lBTUUsc0JBRXFCLElBQWlCLEVBRWpCLElBQWlCLEVBQ2pCLFFBQXlCLEVBRXpCLFFBQXlCLEVBQ3pCLGdCQUF5QyxFQUN6QyxlQUF1QyxFQUV2QyxHQUFlLEVBQ2YsUUFBeUIsRUFFekIsYUFBbUMsRUFFbkMsYUFBbUMsRUFFbkMsV0FBK0IsRUFFL0IsSUFBaUIsRUFFakIsWUFBaUMsRUFFakMsT0FBdUIsRUFDdkIsYUFBbUMsRUFDbkMsYUFBbUMsRUFDbkMsZ0JBQXlDLEVBQ3pDLFNBQTJCLEVBRTNCLE9BQXVCLEVBRXZCLFFBQXlCLEVBQ3pCLFFBQXlCLEVBQ3pCLFFBQXlCLEVBRXpCLElBQWlCLEVBQ2pCLFdB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OztJQUNwQyxnQ0FBNEM7O0lBRTVDLGdDQUE0Qzs7SUFDNUMsd0NBQTREOztJQUM1RCx1Q0FBMEQ7O0lBRTFELDJCQUFrQzs7SUFDbEMsZ0NBQTRDOztJQUU1QyxxQ0FBc0Q7O0lBRXRELHFDQUFzRDs7SUFFdEQsbUNBQWtEOztJQUVsRCw0QkFBb0M7O0lBRXBDLG9DQUFvRDs7SUFFcEQsK0JBQTBDOztJQUMxQyxxQ0FBc0Q7O0lBQ3RELHFDQUFzRDs7SUFDdEQsd0NBQTREOztJQUM1RCxpQ0FBOEM7O0lBRTlDLCtCQUEwQzs7SUFFMUMsZ0NBQTRDOztJQUM1QyxnQ0FBNEM7O0lBQzVDLGdDQUE0Qzs7SUFFNUMsNEJBQW9DOztJQUNwQyxtQ0FBa0Q7O0lBQ2xELG1DQUFrRDs7SUFDbEQsaUNBQThDOztJQUM5QyxtQ0FBa0Q7O0lBQ2xELHlEQUMyRTs7SUFDM0UsNENBQ2lEOztJQUVqRCw4QkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBdXRoU2VydmljZSxcbiAgQmFzZVNpdGVTZXJ2aWNlLFxuICBDYXJ0RGF0YVNlcnZpY2UsXG4gIENhcnRTZXJ2aWNlLFxuICBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBDbXNTZXJ2aWNlLFxuICBDdXJyZW5jeVNlcnZpY2UsXG4gIEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgS3ltYVNlcnZpY2UsXG4gIExhbmd1YWdlU2VydmljZSxcbiAgT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgUGFnZU1ldGFTZXJ2aWNlLFxuICBQcm9kdWN0UmVmZXJlbmNlU2VydmljZSxcbiAgUHJvZHVjdFJldmlld1NlcnZpY2UsXG4gIFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICBQcm9kdWN0U2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFNlYXJjaGJveFNlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgVXNlckFkZHJlc3NTZXJ2aWNlLFxuICBVc2VyQ29uc2VudFNlcnZpY2UsXG4gIFVzZXJPcmRlclNlcnZpY2UsXG4gIFVzZXJQYXltZW50U2VydmljZSxcbiAgVXNlclNlcnZpY2UsXG4gIFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlU2VydmljZSxcbiAgVXNlckludGVyZXN0c1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vbW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ3hBcGlTZXJ2aWNlIHtcbiAgY21zQ29tcG9uZW50RGF0YT86IENtc0NvbXBvbmVudERhdGE8YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAvLyBhdXRoXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgIC8vIGNhcnRcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY2FydDogQ2FydFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2UsXG4gICAgLy8gY2hlY2tvdXRcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY2hlY2tvdXQ6IENoZWNrb3V0U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY2hlY2tvdXREZWxpdmVyeTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGNoZWNrb3V0UGF5bWVudDogQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgICAvLyBjbXNcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY21zOiBDbXNTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBwYWdlTWV0YTogUGFnZU1ldGFTZXJ2aWNlLFxuICAgIC8vIGZlYXR1cmVzIGNvbmZpZ1xuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZSxcbiAgICAvLyBnbG9iYWwgbWVzc2FnZVxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBnbG9iYWxNZXNzYWdlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICAvLyBpMThuXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgLy8ga3ltYVxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBreW1hOiBLeW1hU2VydmljZSxcbiAgICAvLyBvY2NcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIC8vIHByb2R1Y3RcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcHJvZHVjdDogUHJvZHVjdFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHByb2R1Y3RTZWFyY2g6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBwcm9kdWN0UmV2aWV3OiBQcm9kdWN0UmV2aWV3U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcHJvZHVjdFJlZmVyZW5jZTogUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHNlYXJjaGJveDogU2VhcmNoYm94U2VydmljZSxcbiAgICAvLyByb3V0aW5nXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIC8vIHNpdGUgY29udGV4dFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBjdXJyZW5jeTogQ3VycmVuY3lTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBsYW5ndWFnZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBiYXNlU2l0ZTogQmFzZVNpdGVTZXJ2aWNlLFxuICAgIC8vIHVzZXJcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdXNlcjogVXNlclNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHVzZXJBZGRyZXNzOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHVzZXJDb25zZW50OiBVc2VyQ29uc2VudFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHVzZXJPcmRlcjogVXNlck9yZGVyU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdXNlclBheW1lbnQ6IFVzZXJQYXltZW50U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIHB1YmxpYyB1c2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZVNlcnZpY2U6IFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIHB1YmxpYyB1c2VySW50ZXJlc3RzU2VydmljZTogVXNlckludGVyZXN0c1NlcnZpY2UsXG4gICAgLy8gZnJhbWV3b3JrXG4gICAgcHVibGljIG5nWm9uZTogTmdab25lXG4gICkge31cbn1cbiJdfQ==