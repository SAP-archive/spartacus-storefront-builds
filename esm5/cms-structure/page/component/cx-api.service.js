import { __decorate, __param } from "tslib";
import { Injectable, NgZone, Optional } from '@angular/core';
import { AuthService, BaseSiteService, CartDataService, CartService, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, CmsService, CurrencyService, FeatureConfigService, GlobalMessageService, KymaService, LanguageService, OccEndpointsService, PageMetaService, ProductReferenceService, ProductReviewService, ProductSearchService, ProductService, RoutingService, SearchboxService, TranslationService, UserAddressService, UserConsentService, UserOrderService, UserPaymentService, UserService, UserNotificationPreferenceService, UserInterestsService, SelectiveCartService, } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CxApiService = /** @class */ (function () {
    function CxApiService(
    // auth
    auth, 
    // cart
    cart, cartData, 
    // checkout
    checkout, checkoutDelivery, checkoutPayment, 
    // cms
    cms, pageMeta, 
    // features config
    featureConfig, 
    // global message
    globalMessage, 
    // i18n
    translation, 
    // kyma
    kyma, 
    // occ
    occEndpoints, 
    // product
    product, productSearch, productReview, productReference, searchbox, 
    // routing
    routing, 
    // site context
    currency, language, baseSite, 
    // user
    user, userAddress, userConsent, userOrder, userPayment, userNotificationPreferenceService, userInterestsService, selectiveCartService, 
    // framework
    ngZone) {
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
    CxApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CxApiService_Factory() { return new CxApiService(i0.ɵɵinject(i1.AuthService, 8), i0.ɵɵinject(i1.CartService, 8), i0.ɵɵinject(i1.CartDataService, 8), i0.ɵɵinject(i1.CheckoutService, 8), i0.ɵɵinject(i1.CheckoutDeliveryService, 8), i0.ɵɵinject(i1.CheckoutPaymentService, 8), i0.ɵɵinject(i1.CmsService, 8), i0.ɵɵinject(i1.PageMetaService, 8), i0.ɵɵinject(i1.FeatureConfigService, 8), i0.ɵɵinject(i1.GlobalMessageService, 8), i0.ɵɵinject(i1.TranslationService, 8), i0.ɵɵinject(i1.KymaService, 8), i0.ɵɵinject(i1.OccEndpointsService, 8), i0.ɵɵinject(i1.ProductService, 8), i0.ɵɵinject(i1.ProductSearchService, 8), i0.ɵɵinject(i1.ProductReviewService, 8), i0.ɵɵinject(i1.ProductReferenceService, 8), i0.ɵɵinject(i1.SearchboxService, 8), i0.ɵɵinject(i1.RoutingService, 8), i0.ɵɵinject(i1.CurrencyService, 8), i0.ɵɵinject(i1.LanguageService, 8), i0.ɵɵinject(i1.BaseSiteService, 8), i0.ɵɵinject(i1.UserService, 8), i0.ɵɵinject(i1.UserAddressService, 8), i0.ɵɵinject(i1.UserConsentService, 8), i0.ɵɵinject(i1.UserOrderService, 8), i0.ɵɵinject(i1.UserPaymentService, 8), i0.ɵɵinject(i1.UserNotificationPreferenceService, 8), i0.ɵɵinject(i1.UserInterestsService, 8), i0.ɵɵinject(i1.SelectiveCartService, 8), i0.ɵɵinject(i0.NgZone)); }, token: CxApiService, providedIn: "root" });
    CxApiService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(0, Optional()),
        __param(1, Optional()),
        __param(2, Optional()),
        __param(3, Optional()),
        __param(4, Optional()),
        __param(5, Optional()),
        __param(6, Optional()),
        __param(7, Optional()),
        __param(8, Optional()),
        __param(9, Optional()),
        __param(10, Optional()),
        __param(11, Optional()),
        __param(12, Optional()),
        __param(13, Optional()),
        __param(14, Optional()),
        __param(15, Optional()),
        __param(16, Optional()),
        __param(17, Optional()),
        __param(18, Optional()),
        __param(19, Optional()),
        __param(20, Optional()),
        __param(21, Optional()),
        __param(22, Optional()),
        __param(23, Optional()),
        __param(24, Optional()),
        __param(25, Optional()),
        __param(26, Optional()),
        __param(27, Optional()),
        __param(28, Optional()),
        __param(29, Optional())
    ], CxApiService);
    return CxApiService;
}());
export { CxApiService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3gtYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L2N4LWFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFdBQVcsRUFDWCxlQUFlLEVBQ2YsZUFBZSxFQUNmLFdBQVcsRUFDWCx1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3RCLGVBQWUsRUFDZixVQUFVLEVBQ1YsZUFBZSxFQUNmLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsV0FBVyxFQUNYLGVBQWUsRUFDZixtQkFBbUIsRUFDbkIsZUFBZSxFQUNmLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsb0JBQW9CLEVBQ3BCLGNBQWMsRUFDZCxjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsV0FBVyxFQUNYLGlDQUFpQyxFQUNqQyxvQkFBb0IsRUFDcEIsb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7OztBQU16QjtJQUdFO0lBQ0UsT0FBTztJQUNZLElBQWlCO0lBQ3BDLE9BQU87SUFDWSxJQUFpQixFQUNqQixRQUF5QjtJQUM1QyxXQUFXO0lBQ1EsUUFBeUIsRUFDekIsZ0JBQXlDLEVBQ3pDLGVBQXVDO0lBQzFELE1BQU07SUFDYSxHQUFlLEVBQ2YsUUFBeUI7SUFDNUMsa0JBQWtCO0lBQ0MsYUFBbUM7SUFDdEQsaUJBQWlCO0lBQ0UsYUFBbUM7SUFDdEQsT0FBTztJQUNZLFdBQStCO0lBQ2xELE9BQU87SUFDWSxJQUFpQjtJQUNwQyxNQUFNO0lBQ2EsWUFBaUM7SUFDcEQsVUFBVTtJQUNTLE9BQXVCLEVBQ3ZC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WUFBWSxDQW9EeEI7dUJBMUZEO0NBMEZDLEFBcERELElBb0RDO1NBcERZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBdXRoU2VydmljZSxcbiAgQmFzZVNpdGVTZXJ2aWNlLFxuICBDYXJ0RGF0YVNlcnZpY2UsXG4gIENhcnRTZXJ2aWNlLFxuICBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBDbXNTZXJ2aWNlLFxuICBDdXJyZW5jeVNlcnZpY2UsXG4gIEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgS3ltYVNlcnZpY2UsXG4gIExhbmd1YWdlU2VydmljZSxcbiAgT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgUGFnZU1ldGFTZXJ2aWNlLFxuICBQcm9kdWN0UmVmZXJlbmNlU2VydmljZSxcbiAgUHJvZHVjdFJldmlld1NlcnZpY2UsXG4gIFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICBQcm9kdWN0U2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFNlYXJjaGJveFNlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgVXNlckFkZHJlc3NTZXJ2aWNlLFxuICBVc2VyQ29uc2VudFNlcnZpY2UsXG4gIFVzZXJPcmRlclNlcnZpY2UsXG4gIFVzZXJQYXltZW50U2VydmljZSxcbiAgVXNlclNlcnZpY2UsXG4gIFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlU2VydmljZSxcbiAgVXNlckludGVyZXN0c1NlcnZpY2UsXG4gIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uL21vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEN4QXBpU2VydmljZSB7XG4gIGNtc0NvbXBvbmVudERhdGE/OiBDbXNDb21wb25lbnREYXRhPGFueT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gYXV0aFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBhdXRoOiBBdXRoU2VydmljZSxcbiAgICAvLyBjYXJ0XG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGNhcnQ6IENhcnRTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlLFxuICAgIC8vIGNoZWNrb3V0XG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGNoZWNrb3V0OiBDaGVja291dFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGNoZWNrb3V0RGVsaXZlcnk6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBjaGVja291dFBheW1lbnQ6IENoZWNrb3V0UGF5bWVudFNlcnZpY2UsXG4gICAgLy8gY21zXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGNtczogQ21zU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcGFnZU1ldGE6IFBhZ2VNZXRhU2VydmljZSxcbiAgICAvLyBmZWF0dXJlcyBjb25maWdcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgZmVhdHVyZUNvbmZpZzogRmVhdHVyZUNvbmZpZ1NlcnZpY2UsXG4gICAgLy8gZ2xvYmFsIG1lc3NhZ2VcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgZ2xvYmFsTWVzc2FnZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgLy8gaTE4blxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIC8vIGt5bWFcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMga3ltYTogS3ltYVNlcnZpY2UsXG4gICAgLy8gb2NjXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICAvLyBwcm9kdWN0XG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHByb2R1Y3Q6IFByb2R1Y3RTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBwcm9kdWN0U2VhcmNoOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcHJvZHVjdFJldmlldzogUHJvZHVjdFJldmlld1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHByb2R1Y3RSZWZlcmVuY2U6IFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBzZWFyY2hib3g6IFNlYXJjaGJveFNlcnZpY2UsXG4gICAgLy8gcm91dGluZ1xuICAgIEBPcHRpb25hbCgpIHB1YmxpYyByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICAvLyBzaXRlIGNvbnRleHRcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY3VycmVuY3k6IEN1cnJlbmN5U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgYmFzZVNpdGU6IEJhc2VTaXRlU2VydmljZSxcbiAgICAvLyB1c2VyXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHVzZXI6IFVzZXJTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyB1c2VyQWRkcmVzczogVXNlckFkZHJlc3NTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyB1c2VyQ29uc2VudDogVXNlckNvbnNlbnRTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyB1c2VyT3JkZXI6IFVzZXJPcmRlclNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHVzZXJQYXltZW50OiBVc2VyUGF5bWVudFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBwdWJsaWMgdXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VTZXJ2aWNlOiBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBwdWJsaWMgdXNlckludGVyZXN0c1NlcnZpY2U6IFVzZXJJbnRlcmVzdHNTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBzZWxlY3RpdmVDYXJ0U2VydmljZTogU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgLy8gZnJhbWV3b3JrXG4gICAgcHVibGljIG5nWm9uZTogTmdab25lXG4gICkge31cbn1cbiJdfQ==