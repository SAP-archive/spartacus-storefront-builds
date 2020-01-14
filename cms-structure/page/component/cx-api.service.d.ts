import { NgZone } from '@angular/core';
import { AuthService, BaseSiteService, CartDataService, CartService, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, CmsService, CurrencyService, FeatureConfigService, GlobalMessageService, KymaService, LanguageService, OccEndpointsService, PageMetaService, ProductReferenceService, ProductReviewService, ProductSearchService, ProductService, RoutingService, SearchboxService, TranslationService, UserAddressService, UserConsentService, UserOrderService, UserPaymentService, UserService, UserNotificationPreferenceService, UserInterestsService, SelectiveCartService } from '@spartacus/core';
import { CmsComponentData } from '../model';
export declare class CxApiService {
    auth: AuthService;
    cart: CartService;
    cartData: CartDataService;
    checkout: CheckoutService;
    checkoutDelivery: CheckoutDeliveryService;
    checkoutPayment: CheckoutPaymentService;
    cms: CmsService;
    pageMeta: PageMetaService;
    featureConfig: FeatureConfigService;
    globalMessage: GlobalMessageService;
    translation: TranslationService;
    kyma: KymaService;
    occEndpoints: OccEndpointsService;
    product: ProductService;
    productSearch: ProductSearchService;
    productReview: ProductReviewService;
    productReference: ProductReferenceService;
    searchbox: SearchboxService;
    routing: RoutingService;
    currency: CurrencyService;
    language: LanguageService;
    baseSite: BaseSiteService;
    user: UserService;
    userAddress: UserAddressService;
    userConsent: UserConsentService;
    userOrder: UserOrderService;
    userPayment: UserPaymentService;
    userNotificationPreferenceService: UserNotificationPreferenceService;
    userInterestsService: UserInterestsService;
    selectiveCartService: SelectiveCartService;
    ngZone: NgZone;
    cmsComponentData?: CmsComponentData<any>;
    constructor(auth: AuthService, cart: CartService, cartData: CartDataService, checkout: CheckoutService, checkoutDelivery: CheckoutDeliveryService, checkoutPayment: CheckoutPaymentService, cms: CmsService, pageMeta: PageMetaService, featureConfig: FeatureConfigService, globalMessage: GlobalMessageService, translation: TranslationService, kyma: KymaService, occEndpoints: OccEndpointsService, product: ProductService, productSearch: ProductSearchService, productReview: ProductReviewService, productReference: ProductReferenceService, searchbox: SearchboxService, routing: RoutingService, currency: CurrencyService, language: LanguageService, baseSite: BaseSiteService, user: UserService, userAddress: UserAddressService, userConsent: UserConsentService, userOrder: UserOrderService, userPayment: UserPaymentService, userNotificationPreferenceService: UserNotificationPreferenceService, userInterestsService: UserInterestsService, selectiveCartService: SelectiveCartService, ngZone: NgZone);
}
