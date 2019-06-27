import { AuthService, CmsService, RoutingService, CurrencyService, LanguageService, BaseSiteService, ProductService, ProductSearchService, ProductReviewService, UserService, TranslationService } from '@spartacus/core';
export declare class CxApiService {
    auth: AuthService;
    cms: CmsService;
    routing: RoutingService;
    currency: CurrencyService;
    language: LanguageService;
    baseSite: BaseSiteService;
    product: ProductService;
    productSearch: ProductSearchService;
    productReview: ProductReviewService;
    user: UserService;
    translation: TranslationService;
    constructor(auth: AuthService, cms: CmsService, routing: RoutingService, currency: CurrencyService, language: LanguageService, baseSite: BaseSiteService, product: ProductService, productSearch: ProductSearchService, productReview: ProductReviewService, user: UserService, translation: TranslationService);
}
