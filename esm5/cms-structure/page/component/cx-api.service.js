/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, NgZone, Optional } from '@angular/core';
import { AuthService, BaseSiteService, CartDataService, CartService, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, CmsService, CurrencyService, FeatureConfigService, GlobalMessageService, KymaService, LanguageService, OccEndpointsService, PageMetaService, ProductReferenceService, ProductReviewService, ProductSearchService, ProductService, RoutingService, SearchboxService, TranslationService, UserAddressService, UserConsentService, UserOrderService, UserPaymentService, UserService, } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CxApiService = /** @class */ (function () {
    function CxApiService(auth, cart, cartData, checkout, checkoutDelivery, checkoutPayment, cms, pageMeta, featureConfig, globalMessage, translation, kyma, occEndpoints, product, productSearch, productReview, productReference, searchbox, routing, currency, language, baseSite, user, userAddress, userConsent, userOrder, userPayment, ngZone) {
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
        { type: NgZone }
    ]; };
    /** @nocollapse */ CxApiService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CxApiService_Factory() { return new CxApiService(i0.ɵɵinject(i1.AuthService, 8), i0.ɵɵinject(i1.CartService, 8), i0.ɵɵinject(i1.CartDataService, 8), i0.ɵɵinject(i1.CheckoutService, 8), i0.ɵɵinject(i1.CheckoutDeliveryService, 8), i0.ɵɵinject(i1.CheckoutPaymentService, 8), i0.ɵɵinject(i1.CmsService, 8), i0.ɵɵinject(i1.PageMetaService, 8), i0.ɵɵinject(i1.FeatureConfigService, 8), i0.ɵɵinject(i1.GlobalMessageService, 8), i0.ɵɵinject(i1.TranslationService, 8), i0.ɵɵinject(i1.KymaService, 8), i0.ɵɵinject(i1.OccEndpointsService, 8), i0.ɵɵinject(i1.ProductService, 8), i0.ɵɵinject(i1.ProductSearchService, 8), i0.ɵɵinject(i1.ProductReviewService, 8), i0.ɵɵinject(i1.ProductReferenceService, 8), i0.ɵɵinject(i1.SearchboxService, 8), i0.ɵɵinject(i1.RoutingService, 8), i0.ɵɵinject(i1.CurrencyService, 8), i0.ɵɵinject(i1.LanguageService, 8), i0.ɵɵinject(i1.BaseSiteService, 8), i0.ɵɵinject(i1.UserService, 8), i0.ɵɵinject(i1.UserAddressService, 8), i0.ɵɵinject(i1.UserConsentService, 8), i0.ɵɵinject(i1.UserOrderService, 8), i0.ɵɵinject(i1.UserPaymentService, 8), i0.ɵɵinject(i0.NgZone)); }, token: CxApiService, providedIn: "root" });
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
    CxApiService.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3gtYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L2N4LWFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFdBQVcsRUFDWCxlQUFlLEVBQ2YsZUFBZSxFQUNmLFdBQVcsRUFDWCx1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3RCLGVBQWUsRUFDZixVQUFVLEVBQ1YsZUFBZSxFQUNmLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsV0FBVyxFQUNYLGVBQWUsRUFDZixtQkFBbUIsRUFDbkIsZUFBZSxFQUNmLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsb0JBQW9CLEVBQ3BCLGNBQWMsRUFDZCxjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7OztBQUd6QjtJQU1FLHNCQUVxQixJQUFpQixFQUVqQixJQUFpQixFQUNqQixRQUF5QixFQUV6QixRQUF5QixFQUN6QixnQkFBeUMsRUFDekMsZUFBdUMsRUFFdkMsR0FBZSxFQUNmLFFBQXlCLEVBRXpCLGFBQW1DLEVBRW5DLGFBQW1DLEVBRW5DLFdBQStCLEVBRS9CLElBQWlCLEVBRWpCLFlBQWlDLEVBRWpDLE9BQXVCLEVBQ3ZCLGFBQW1DLEVBQ25DLGFBQW1DLEVBQ25DLGdCQUF5QyxFQUN6QyxTQUEyQixFQUUzQixPQUF1QixFQUV2QixRQUF5QixFQUN6QixRQUF5QixFQUN6QixRQUF5QixFQUV6QixJQUFpQixFQUNqQixXQUErQixFQUMvQixXQUErQixFQUMvQixTQUEy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SUFDMUMscUNBQXNEOztJQUN0RCxxQ0FBc0Q7O0lBQ3RELHdDQUE0RDs7SUFDNUQsaUNBQThDOztJQUU5QywrQkFBMEM7O0lBRTFDLGdDQUE0Qzs7SUFDNUMsZ0NBQTRDOztJQUM1QyxnQ0FBNEM7O0lBRTVDLDRCQUFvQzs7SUFDcEMsbUNBQWtEOztJQUNsRCxtQ0FBa0Q7O0lBQ2xELGlDQUE4Qzs7SUFDOUMsbUNBQWtEOztJQUVsRCw4QkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBdXRoU2VydmljZSxcbiAgQmFzZVNpdGVTZXJ2aWNlLFxuICBDYXJ0RGF0YVNlcnZpY2UsXG4gIENhcnRTZXJ2aWNlLFxuICBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBDbXNTZXJ2aWNlLFxuICBDdXJyZW5jeVNlcnZpY2UsXG4gIEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgS3ltYVNlcnZpY2UsXG4gIExhbmd1YWdlU2VydmljZSxcbiAgT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgUGFnZU1ldGFTZXJ2aWNlLFxuICBQcm9kdWN0UmVmZXJlbmNlU2VydmljZSxcbiAgUHJvZHVjdFJldmlld1NlcnZpY2UsXG4gIFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICBQcm9kdWN0U2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFNlYXJjaGJveFNlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgVXNlckFkZHJlc3NTZXJ2aWNlLFxuICBVc2VyQ29uc2VudFNlcnZpY2UsXG4gIFVzZXJPcmRlclNlcnZpY2UsXG4gIFVzZXJQYXltZW50U2VydmljZSxcbiAgVXNlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vbW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ3hBcGlTZXJ2aWNlIHtcbiAgY21zQ29tcG9uZW50RGF0YT86IENtc0NvbXBvbmVudERhdGE8YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAvLyBhdXRoXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgIC8vIGNhcnRcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY2FydDogQ2FydFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2UsXG4gICAgLy8gY2hlY2tvdXRcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY2hlY2tvdXQ6IENoZWNrb3V0U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY2hlY2tvdXREZWxpdmVyeTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGNoZWNrb3V0UGF5bWVudDogQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgICAvLyBjbXNcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY21zOiBDbXNTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBwYWdlTWV0YTogUGFnZU1ldGFTZXJ2aWNlLFxuICAgIC8vIGZlYXR1cmVzIGNvbmZpZ1xuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZSxcbiAgICAvLyBnbG9iYWwgbWVzc2FnZVxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBnbG9iYWxNZXNzYWdlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICAvLyBpMThuXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgLy8ga3ltYVxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBreW1hOiBLeW1hU2VydmljZSxcbiAgICAvLyBvY2NcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIC8vIHByb2R1Y3RcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcHJvZHVjdDogUHJvZHVjdFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHByb2R1Y3RTZWFyY2g6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBwcm9kdWN0UmV2aWV3OiBQcm9kdWN0UmV2aWV3U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcHJvZHVjdFJlZmVyZW5jZTogUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHNlYXJjaGJveDogU2VhcmNoYm94U2VydmljZSxcbiAgICAvLyByb3V0aW5nXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIC8vIHNpdGUgY29udGV4dFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBjdXJyZW5jeTogQ3VycmVuY3lTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBsYW5ndWFnZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBiYXNlU2l0ZTogQmFzZVNpdGVTZXJ2aWNlLFxuICAgIC8vIHVzZXJcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdXNlcjogVXNlclNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHVzZXJBZGRyZXNzOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHVzZXJDb25zZW50OiBVc2VyQ29uc2VudFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHVzZXJPcmRlcjogVXNlck9yZGVyU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdXNlclBheW1lbnQ6IFVzZXJQYXltZW50U2VydmljZSxcbiAgICAvLyBmcmFtZXdvcmtcbiAgICBwdWJsaWMgbmdab25lOiBOZ1pvbmVcbiAgKSB7fVxufVxuIl19