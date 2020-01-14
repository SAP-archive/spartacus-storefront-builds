/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, NgZone, Optional } from '@angular/core';
import { AuthService, BaseSiteService, CartDataService, CartService, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, CmsService, CurrencyService, FeatureConfigService, GlobalMessageService, KymaService, LanguageService, OccEndpointsService, PageMetaService, ProductReferenceService, ProductReviewService, ProductSearchService, ProductService, RoutingService, SearchboxService, TranslationService, UserAddressService, UserConsentService, UserOrderService, UserPaymentService, UserService, UserNotificationPreferenceService, UserInterestsService, SelectiveCartService, } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CxApiService = /** @class */ (function () {
    function CxApiService(auth, cart, cartData, checkout, checkoutDelivery, checkoutPayment, cms, pageMeta, featureConfig, globalMessage, translation, kyma, occEndpoints, product, productSearch, productReview, productReference, searchbox, routing, currency, language, baseSite, user, userAddress, userConsent, userOrder, userPayment, userNotificationPreferenceService, userInterestsService, selectiveCartService, ngZone) {
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
        { type: SelectiveCartService, decorators: [{ type: Optional }] },
        { type: NgZone }
    ]; };
    /** @nocollapse */ CxApiService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CxApiService_Factory() { return new CxApiService(i0.ɵɵinject(i1.AuthService, 8), i0.ɵɵinject(i1.CartService, 8), i0.ɵɵinject(i1.CartDataService, 8), i0.ɵɵinject(i1.CheckoutService, 8), i0.ɵɵinject(i1.CheckoutDeliveryService, 8), i0.ɵɵinject(i1.CheckoutPaymentService, 8), i0.ɵɵinject(i1.CmsService, 8), i0.ɵɵinject(i1.PageMetaService, 8), i0.ɵɵinject(i1.FeatureConfigService, 8), i0.ɵɵinject(i1.GlobalMessageService, 8), i0.ɵɵinject(i1.TranslationService, 8), i0.ɵɵinject(i1.KymaService, 8), i0.ɵɵinject(i1.OccEndpointsService, 8), i0.ɵɵinject(i1.ProductService, 8), i0.ɵɵinject(i1.ProductSearchService, 8), i0.ɵɵinject(i1.ProductReviewService, 8), i0.ɵɵinject(i1.ProductReferenceService, 8), i0.ɵɵinject(i1.SearchboxService, 8), i0.ɵɵinject(i1.RoutingService, 8), i0.ɵɵinject(i1.CurrencyService, 8), i0.ɵɵinject(i1.LanguageService, 8), i0.ɵɵinject(i1.BaseSiteService, 8), i0.ɵɵinject(i1.UserService, 8), i0.ɵɵinject(i1.UserAddressService, 8), i0.ɵɵinject(i1.UserConsentService, 8), i0.ɵɵinject(i1.UserOrderService, 8), i0.ɵɵinject(i1.UserPaymentService, 8), i0.ɵɵinject(i1.UserNotificationPreferenceService, 8), i0.ɵɵinject(i1.UserInterestsService, 8), i0.ɵɵinject(i1.SelectiveCartService, 8), i0.ɵɵinject(i0.NgZone)); }, token: CxApiService, providedIn: "root" });
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
    CxApiService.prototype.selectiveCartService;
    /** @type {?} */
    CxApiService.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3gtYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L2N4LWFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFdBQVcsRUFDWCxlQUFlLEVBQ2YsZUFBZSxFQUNmLFdBQVcsRUFDWCx1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3RCLGVBQWUsRUFDZixVQUFVLEVBQ1YsZUFBZSxFQUNmLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsV0FBVyxFQUNYLGVBQWUsRUFDZixtQkFBbUIsRUFDbkIsZUFBZSxFQUNmLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsb0JBQW9CLEVBQ3BCLGNBQWMsRUFDZCxjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsV0FBVyxFQUNYLGlDQUFpQyxFQUNqQyxvQkFBb0IsRUFDcEIsb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7OztBQUd6QjtJQU1FLHNCQUVxQixJQUFpQixFQUVqQixJQUFpQixFQUNqQixRQUF5QixFQUV6QixRQUF5QixFQUN6QixnQkFBeUMsRUFDekMsZUFBdUMsRUFFdkMsR0FBZSxFQUNmLFFBQXlCLEVBRXpCLGFBQW1DLEVBRW5DLGFBQW1DLEVBRW5DLFdBQStCLEVBRS9CLElBQWlCLEVBRWpCLFlBQWlDLEVBRWpDLE9BQXVCLEVBQ3ZCLGFBQW1DLEVBQ25DLGFBQW1DLEVBQ25DLGdCQUF5QyxFQUN6QyxTQUEyQixFQUUzQixPQUF1QixFQUV2QixRQUF5QixFQUN6QixRQUF5QixFQUN6QixRQUF5QixFQUV6QixJ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TUFBTTs7O3VCQUEzQjtDQTBGQyxBQXZERCxJQXVEQztTQXBEWSxZQUFZOzs7SUFDdkIsd0NBQXlDOztJQUl2Qyw0QkFBb0M7O0lBRXBDLDRCQUFvQzs7SUFDcEMsZ0NBQTRDOztJQUU1QyxnQ0FBNEM7O0lBQzVDLHdDQUE0RDs7SUFDNUQsdUNBQTBEOztJQUUxRCwyQkFBa0M7O0lBQ2xDLGdDQUE0Qzs7SUFFNUMscUNBQXNEOztJQUV0RCxxQ0FBc0Q7O0lBRXRELG1DQUFrRDs7SUFFbEQsNEJBQW9DOztJQUVwQyxvQ0FBb0Q7O0lBRXBELCtCQUEwQzs7SUFDMUMscUNBQXNEOztJQUN0RCxxQ0FBc0Q7O0lBQ3RELHdDQUE0RDs7SUFDNUQsaUNBQThDOztJQUU5QywrQkFBMEM7O0lBRTFDLGdDQUE0Qzs7SUFDNUMsZ0NBQTRDOztJQUM1QyxnQ0FBNEM7O0lBRTVDLDRCQUFvQzs7SUFDcEMsbUNBQWtEOztJQUNsRCxtQ0FBa0Q7O0lBQ2xELGlDQUE4Qzs7SUFDOUMsbUNBQWtEOztJQUNsRCx5REFDMkU7O0lBQzNFLDRDQUNpRDs7SUFDakQsNENBQTZEOztJQUU3RCw4QkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBdXRoU2VydmljZSxcbiAgQmFzZVNpdGVTZXJ2aWNlLFxuICBDYXJ0RGF0YVNlcnZpY2UsXG4gIENhcnRTZXJ2aWNlLFxuICBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBDbXNTZXJ2aWNlLFxuICBDdXJyZW5jeVNlcnZpY2UsXG4gIEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgS3ltYVNlcnZpY2UsXG4gIExhbmd1YWdlU2VydmljZSxcbiAgT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgUGFnZU1ldGFTZXJ2aWNlLFxuICBQcm9kdWN0UmVmZXJlbmNlU2VydmljZSxcbiAgUHJvZHVjdFJldmlld1NlcnZpY2UsXG4gIFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICBQcm9kdWN0U2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFNlYXJjaGJveFNlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgVXNlckFkZHJlc3NTZXJ2aWNlLFxuICBVc2VyQ29uc2VudFNlcnZpY2UsXG4gIFVzZXJPcmRlclNlcnZpY2UsXG4gIFVzZXJQYXltZW50U2VydmljZSxcbiAgVXNlclNlcnZpY2UsXG4gIFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlU2VydmljZSxcbiAgVXNlckludGVyZXN0c1NlcnZpY2UsXG4gIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uL21vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEN4QXBpU2VydmljZSB7XG4gIGNtc0NvbXBvbmVudERhdGE/OiBDbXNDb21wb25lbnREYXRhPGFueT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gYXV0aFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBhdXRoOiBBdXRoU2VydmljZSxcbiAgICAvLyBjYXJ0XG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGNhcnQ6IENhcnRTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlLFxuICAgIC8vIGNoZWNrb3V0XG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGNoZWNrb3V0OiBDaGVja291dFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGNoZWNrb3V0RGVsaXZlcnk6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBjaGVja291dFBheW1lbnQ6IENoZWNrb3V0UGF5bWVudFNlcnZpY2UsXG4gICAgLy8gY21zXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGNtczogQ21zU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcGFnZU1ldGE6IFBhZ2VNZXRhU2VydmljZSxcbiAgICAvLyBmZWF0dXJlcyBjb25maWdcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgZmVhdHVyZUNvbmZpZzogRmVhdHVyZUNvbmZpZ1NlcnZpY2UsXG4gICAgLy8gZ2xvYmFsIG1lc3NhZ2VcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgZ2xvYmFsTWVzc2FnZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgLy8gaTE4blxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIC8vIGt5bWFcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMga3ltYTogS3ltYVNlcnZpY2UsXG4gICAgLy8gb2NjXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICAvLyBwcm9kdWN0XG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHByb2R1Y3Q6IFByb2R1Y3RTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBwcm9kdWN0U2VhcmNoOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcHJvZHVjdFJldmlldzogUHJvZHVjdFJldmlld1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHByb2R1Y3RSZWZlcmVuY2U6IFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBzZWFyY2hib3g6IFNlYXJjaGJveFNlcnZpY2UsXG4gICAgLy8gcm91dGluZ1xuICAgIEBPcHRpb25hbCgpIHB1YmxpYyByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICAvLyBzaXRlIGNvbnRleHRcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY3VycmVuY3k6IEN1cnJlbmN5U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgYmFzZVNpdGU6IEJhc2VTaXRlU2VydmljZSxcbiAgICAvLyB1c2VyXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHVzZXI6IFVzZXJTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyB1c2VyQWRkcmVzczogVXNlckFkZHJlc3NTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyB1c2VyQ29uc2VudDogVXNlckNvbnNlbnRTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyB1c2VyT3JkZXI6IFVzZXJPcmRlclNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHVzZXJQYXltZW50OiBVc2VyUGF5bWVudFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBwdWJsaWMgdXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VTZXJ2aWNlOiBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBwdWJsaWMgdXNlckludGVyZXN0c1NlcnZpY2U6IFVzZXJJbnRlcmVzdHNTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBzZWxlY3RpdmVDYXJ0U2VydmljZTogU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgLy8gZnJhbWV3b3JrXG4gICAgcHVibGljIG5nWm9uZTogTmdab25lXG4gICkge31cbn1cbiJdfQ==