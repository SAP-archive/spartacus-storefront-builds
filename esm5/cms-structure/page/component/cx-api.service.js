/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional } from '@angular/core';
import { AuthService, CmsService, RoutingService, CurrencyService, LanguageService, BaseSiteService, ProductService, ProductSearchService, ProductReviewService, UserService, TranslationService, } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CxApiService = /** @class */ (function () {
    function CxApiService(auth, cms, routing, currency, language, baseSite, product, productSearch, productReview, user, translation) {
        this.auth = auth;
        this.cms = cms;
        this.routing = routing;
        this.currency = currency;
        this.language = language;
        this.baseSite = baseSite;
        this.product = product;
        this.productSearch = productSearch;
        this.productReview = productReview;
        this.user = user;
        this.translation = translation;
    }
    CxApiService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CxApiService.ctorParameters = function () { return [
        { type: AuthService, decorators: [{ type: Optional }] },
        { type: CmsService, decorators: [{ type: Optional }] },
        { type: RoutingService, decorators: [{ type: Optional }] },
        { type: CurrencyService, decorators: [{ type: Optional }] },
        { type: LanguageService, decorators: [{ type: Optional }] },
        { type: BaseSiteService, decorators: [{ type: Optional }] },
        { type: ProductService, decorators: [{ type: Optional }] },
        { type: ProductSearchService, decorators: [{ type: Optional }] },
        { type: ProductReviewService, decorators: [{ type: Optional }] },
        { type: UserService, decorators: [{ type: Optional }] },
        { type: TranslationService, decorators: [{ type: Optional }] }
    ]; };
    /** @nocollapse */ CxApiService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CxApiService_Factory() { return new CxApiService(i0.ɵɵinject(i1.AuthService, 8), i0.ɵɵinject(i1.CmsService, 8), i0.ɵɵinject(i1.RoutingService, 8), i0.ɵɵinject(i1.CurrencyService, 8), i0.ɵɵinject(i1.LanguageService, 8), i0.ɵɵinject(i1.BaseSiteService, 8), i0.ɵɵinject(i1.ProductService, 8), i0.ɵɵinject(i1.ProductSearchService, 8), i0.ɵɵinject(i1.ProductReviewService, 8), i0.ɵɵinject(i1.UserService, 8), i0.ɵɵinject(i1.TranslationService, 8)); }, token: CxApiService, providedIn: "root" });
    return CxApiService;
}());
export { CxApiService };
if (false) {
    /** @type {?} */
    CxApiService.prototype.auth;
    /** @type {?} */
    CxApiService.prototype.cms;
    /** @type {?} */
    CxApiService.prototype.routing;
    /** @type {?} */
    CxApiService.prototype.currency;
    /** @type {?} */
    CxApiService.prototype.language;
    /** @type {?} */
    CxApiService.prototype.baseSite;
    /** @type {?} */
    CxApiService.prototype.product;
    /** @type {?} */
    CxApiService.prototype.productSearch;
    /** @type {?} */
    CxApiService.prototype.productReview;
    /** @type {?} */
    CxApiService.prototype.user;
    /** @type {?} */
    CxApiService.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3gtYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L2N4LWFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsV0FBVyxFQUNYLFVBQVUsRUFDVixjQUFjLEVBQ2QsZUFBZSxFQUNmLGVBQWUsRUFDZixlQUFlLEVBQ2YsY0FBYyxFQUNkLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsV0FBVyxFQUNYLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDOzs7QUFFekI7SUFJRSxzQkFDcUIsSUFBaUIsRUFDakIsR0FBZSxFQUNmLE9BQXVCLEVBRXZCLFFBQXlCLEVBQ3pCLFFBQXlCLEVBQ3pCLFFBQXlCLEVBRXpCLE9BQXVCLEVBQ3ZCLGFBQW1DLEVBQ25DLGFBQW1DLEVBRW5DLElBQWlCLEVBRWpCLFdBQStCO1FBZC9CLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRXZCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBRXpCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFFbkMsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUVqQixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7SUFDakQsQ0FBQzs7Z0JBcEJMLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBZkMsV0FBVyx1QkFrQlIsUUFBUTtnQkFqQlgsVUFBVSx1QkFrQlAsUUFBUTtnQkFqQlgsY0FBYyx1QkFrQlgsUUFBUTtnQkFqQlgsZUFBZSx1QkFtQlosUUFBUTtnQkFsQlgsZUFBZSx1QkFtQlosUUFBUTtnQkFsQlgsZUFBZSx1QkFtQlosUUFBUTtnQkFsQlgsY0FBYyx1QkFvQlgsUUFBUTtnQkFuQlgsb0JBQW9CLHVCQW9CakIsUUFBUTtnQkFuQlgsb0JBQW9CLHVCQW9CakIsUUFBUTtnQkFuQlgsV0FBVyx1QkFxQlIsUUFBUTtnQkFwQlgsa0JBQWtCLHVCQXNCZixRQUFROzs7dUJBbENiO0NBb0NDLEFBckJELElBcUJDO1NBbEJZLFlBQVk7OztJQUVyQiw0QkFBb0M7O0lBQ3BDLDJCQUFrQzs7SUFDbEMsK0JBQTBDOztJQUUxQyxnQ0FBNEM7O0lBQzVDLGdDQUE0Qzs7SUFDNUMsZ0NBQTRDOztJQUU1QywrQkFBMEM7O0lBQzFDLHFDQUFzRDs7SUFDdEQscUNBQXNEOztJQUV0RCw0QkFBb0M7O0lBRXBDLG1DQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBdXRoU2VydmljZSxcbiAgQ21zU2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIEN1cnJlbmN5U2VydmljZSxcbiAgTGFuZ3VhZ2VTZXJ2aWNlLFxuICBCYXNlU2l0ZVNlcnZpY2UsXG4gIFByb2R1Y3RTZXJ2aWNlLFxuICBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgUHJvZHVjdFJldmlld1NlcnZpY2UsXG4gIFVzZXJTZXJ2aWNlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDeEFwaVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGNtczogQ21zU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgLy8gc2l0ZSBjb250ZXh0XG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGN1cnJlbmN5OiBDdXJyZW5jeVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGxhbmd1YWdlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGJhc2VTaXRlOiBCYXNlU2l0ZVNlcnZpY2UsXG4gICAgLy8gcHJvZHVjdFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBwcm9kdWN0OiBQcm9kdWN0U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcHJvZHVjdFNlYXJjaDogUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHByb2R1Y3RSZXZpZXc6IFByb2R1Y3RSZXZpZXdTZXJ2aWNlLFxuICAgIC8vIHVzZXJcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdXNlcjogVXNlclNlcnZpY2UsXG4gICAgLy8gdHJhbnNsYXRpb25cbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHt9XG59XG4iXX0=