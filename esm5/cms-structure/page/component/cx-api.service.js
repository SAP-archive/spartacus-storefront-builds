import { __decorate, __param } from "tslib";
import { Injectable, NgZone, Optional } from '@angular/core';
import { ActiveCartService, AuthService, BaseSiteService, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, CmsService, CurrencyService, FeatureConfigService, GlobalMessageService, KymaService, LanguageService, OccEndpointsService, PageMetaService, ProductReferenceService, ProductReviewService, ProductSearchService, ProductService, RoutingService, SearchboxService, SelectiveCartService, TranslationService, UserAddressService, UserConsentService, UserInterestsService, UserNotificationPreferenceService, UserOrderService, UserPaymentService, UserService, } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CxApiService = /** @class */ (function () {
    function CxApiService(
    // auth
    auth, 
    // cart
    cart, 
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
        { type: ActiveCartService, decorators: [{ type: Optional }] },
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
    CxApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CxApiService_Factory() { return new CxApiService(i0.ɵɵinject(i1.AuthService, 8), i0.ɵɵinject(i1.ActiveCartService, 8), i0.ɵɵinject(i1.CheckoutService, 8), i0.ɵɵinject(i1.CheckoutDeliveryService, 8), i0.ɵɵinject(i1.CheckoutPaymentService, 8), i0.ɵɵinject(i1.CmsService, 8), i0.ɵɵinject(i1.PageMetaService, 8), i0.ɵɵinject(i1.FeatureConfigService, 8), i0.ɵɵinject(i1.GlobalMessageService, 8), i0.ɵɵinject(i1.TranslationService, 8), i0.ɵɵinject(i1.KymaService, 8), i0.ɵɵinject(i1.OccEndpointsService, 8), i0.ɵɵinject(i1.ProductService, 8), i0.ɵɵinject(i1.ProductSearchService, 8), i0.ɵɵinject(i1.ProductReviewService, 8), i0.ɵɵinject(i1.ProductReferenceService, 8), i0.ɵɵinject(i1.SearchboxService, 8), i0.ɵɵinject(i1.RoutingService, 8), i0.ɵɵinject(i1.CurrencyService, 8), i0.ɵɵinject(i1.LanguageService, 8), i0.ɵɵinject(i1.BaseSiteService, 8), i0.ɵɵinject(i1.UserService, 8), i0.ɵɵinject(i1.UserAddressService, 8), i0.ɵɵinject(i1.UserConsentService, 8), i0.ɵɵinject(i1.UserOrderService, 8), i0.ɵɵinject(i1.UserPaymentService, 8), i0.ɵɵinject(i1.UserNotificationPreferenceService, 8), i0.ɵɵinject(i1.UserInterestsService, 8), i0.ɵɵinject(i1.SelectiveCartService, 8), i0.ɵɵinject(i0.NgZone)); }, token: CxApiService, providedIn: "root" });
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
        __param(28, Optional())
    ], CxApiService);
    return CxApiService;
}());
export { CxApiService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3gtYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L2N4LWFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixXQUFXLEVBQ1gsZUFBZSxFQUNmLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsZUFBZSxFQUNmLFVBQVUsRUFDVixlQUFlLEVBQ2Ysb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQixXQUFXLEVBQ1gsZUFBZSxFQUNmLG1CQUFtQixFQUNuQixlQUFlLEVBQ2YsdUJBQXVCLEVBQ3ZCLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsY0FBYyxFQUNkLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIsb0JBQW9CLEVBQ3BCLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLG9CQUFvQixFQUNwQixpQ0FBaUMsRUFDakMsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQzs7O0FBTXpCO0lBR0U7SUFDRSxPQUFPO0lBQ1ksSUFBaUI7SUFDcEMsT0FBTztJQUNZLElBQXVCO0lBQzFDLFdBQVc7SUFDUSxRQUF5QixFQUN6QixnQkFBeUMsRUFDekMsZUFBdUM7SUFDMUQsTUFBTTtJQUNhLEdBQWUsRUFDZixRQUF5QjtJQUM1QyxrQkFBa0I7SUFDQyxhQUFtQztJQUN0RCxpQkFBaUI7SUFDRSxhQUFtQztJQUN0RCxPQUFPO0lBQ1ksV0FBK0I7SUFDbEQsT0FBTztJQUNZLElBQWlCO0lBQ3BDLE1BQU07SUFDYSxZQUFpQztJQUNwRCxVQUFVO0lBQ1MsT0FBdUIsRUFDdkIsYUFBbUMsRUFDbkMsYUFBbUMs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b25lLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aXZlQ2FydFNlcnZpY2UsXG4gIEF1dGhTZXJ2aWNlLFxuICBCYXNlU2l0ZVNlcnZpY2UsXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICBDaGVja291dFNlcnZpY2UsXG4gIENtc1NlcnZpY2UsXG4gIEN1cnJlbmN5U2VydmljZSxcbiAgRmVhdHVyZUNvbmZpZ1NlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBLeW1hU2VydmljZSxcbiAgTGFuZ3VhZ2VTZXJ2aWNlLFxuICBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICBQYWdlTWV0YVNlcnZpY2UsXG4gIFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlLFxuICBQcm9kdWN0UmV2aWV3U2VydmljZSxcbiAgUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gIFByb2R1Y3RTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgU2VhcmNoYm94U2VydmljZSxcbiAgU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgVXNlckFkZHJlc3NTZXJ2aWNlLFxuICBVc2VyQ29uc2VudFNlcnZpY2UsXG4gIFVzZXJJbnRlcmVzdHNTZXJ2aWNlLFxuICBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZVNlcnZpY2UsXG4gIFVzZXJPcmRlclNlcnZpY2UsXG4gIFVzZXJQYXltZW50U2VydmljZSxcbiAgVXNlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vbW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ3hBcGlTZXJ2aWNlIHtcbiAgY21zQ29tcG9uZW50RGF0YT86IENtc0NvbXBvbmVudERhdGE8YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAvLyBhdXRoXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgIC8vIGNhcnRcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY2FydDogQWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgLy8gY2hlY2tvdXRcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY2hlY2tvdXQ6IENoZWNrb3V0U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY2hlY2tvdXREZWxpdmVyeTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGNoZWNrb3V0UGF5bWVudDogQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgICAvLyBjbXNcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY21zOiBDbXNTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBwYWdlTWV0YTogUGFnZU1ldGFTZXJ2aWNlLFxuICAgIC8vIGZlYXR1cmVzIGNvbmZpZ1xuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZSxcbiAgICAvLyBnbG9iYWwgbWVzc2FnZVxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBnbG9iYWxNZXNzYWdlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICAvLyBpMThuXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgLy8ga3ltYVxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBreW1hOiBLeW1hU2VydmljZSxcbiAgICAvLyBvY2NcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIC8vIHByb2R1Y3RcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcHJvZHVjdDogUHJvZHVjdFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHByb2R1Y3RTZWFyY2g6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBwcm9kdWN0UmV2aWV3OiBQcm9kdWN0UmV2aWV3U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcHJvZHVjdFJlZmVyZW5jZTogUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHNlYXJjaGJveDogU2VhcmNoYm94U2VydmljZSxcbiAgICAvLyByb3V0aW5nXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIC8vIHNpdGUgY29udGV4dFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBjdXJyZW5jeTogQ3VycmVuY3lTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBsYW5ndWFnZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBiYXNlU2l0ZTogQmFzZVNpdGVTZXJ2aWNlLFxuICAgIC8vIHVzZXJcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdXNlcjogVXNlclNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHVzZXJBZGRyZXNzOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHVzZXJDb25zZW50OiBVc2VyQ29uc2VudFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHVzZXJPcmRlcjogVXNlck9yZGVyU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdXNlclBheW1lbnQ6IFVzZXJQYXltZW50U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIHB1YmxpYyB1c2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZVNlcnZpY2U6IFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIHB1YmxpYyB1c2VySW50ZXJlc3RzU2VydmljZTogVXNlckludGVyZXN0c1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlOiBTZWxlY3RpdmVDYXJ0U2VydmljZSxcbiAgICAvLyBmcmFtZXdvcmtcbiAgICBwdWJsaWMgbmdab25lOiBOZ1pvbmVcbiAgKSB7fVxufVxuIl19