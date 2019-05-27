/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const defaultStorefrontRoutesConfig = {
    home: { paths: [''] },
    notFound: { paths: ['not-found'] },
    cart: { paths: ['cart'] },
    search: { paths: ['search/:query'] },
    // semantic links for login related pages
    login: { paths: ['login'] },
    logout: { paths: ['logout'] },
    register: { paths: ['login/register'] },
    forgotPassword: { paths: ['login/forgot-password'] },
    checkout: { paths: ['checkout'] },
    checkoutShippingAddress: { paths: ['checkout/shipping-address'] },
    checkoutDeliveryMode: { paths: ['checkout/delivery-mode'] },
    checkoutPaymentDetails: { paths: ['checkout/payment-details'] },
    checkoutReviewOrder: { paths: ['checkout/review-order'] },
    orderConfirmation: { paths: ['order-confirmation'] },
    product: {
        paths: ['product/:productCode'],
        paramsMapping: { productCode: 'code' },
    },
    category: {
        paths: ['category/:categoryCode'],
        paramsMapping: { categoryCode: 'code' },
    },
    brand: { paths: ['Brands/:brandName/c/:brandCode'] },
    termsAndConditions: { paths: ['termsAndConditions'] },
    orderDetails: {
        paths: ['my-account/orders/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
};
/** @type {?} */
export const defaultRoutingConfig = {
    routing: {
        routes: defaultStorefrontRoutesConfig,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1yb3V0aW5nLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9wYWdlcy9kZWZhdWx0LXJvdXRpbmctY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxPQUFPLDZCQUE2QixHQUFpQjtJQUN6RCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNyQixRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRTtJQUNsQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUN6QixNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRTs7SUFHcEMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7SUFDM0IsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUU7SUFDN0IsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtJQUN2QyxjQUFjLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO0lBRXBELFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO0lBQ2pDLHVCQUF1QixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsMkJBQTJCLENBQUMsRUFBRTtJQUNqRSxvQkFBb0IsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7SUFDM0Qsc0JBQXNCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxFQUFFO0lBQy9ELG1CQUFtQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsdUJBQXVCLENBQUMsRUFBRTtJQUN6RCxpQkFBaUIsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLG9CQUFvQixDQUFDLEVBQUU7SUFDcEQsT0FBTyxFQUFFO1FBQ1AsS0FBSyxFQUFFLENBQUMsc0JBQXNCLENBQUM7UUFDL0IsYUFBYSxFQUFFLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtLQUN2QztJQUNELFFBQVEsRUFBRTtRQUNSLEtBQUssRUFBRSxDQUFDLHdCQUF3QixDQUFDO1FBQ2pDLGFBQWEsRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUU7S0FDeEM7SUFDRCxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFFO0lBQ3BELGtCQUFrQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsb0JBQW9CLENBQUMsRUFBRTtJQUNyRCxZQUFZLEVBQUU7UUFDWixLQUFLLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztRQUN2QyxhQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0tBQ3JDO0NBQ0Y7O0FBRUQsTUFBTSxPQUFPLG9CQUFvQixHQUFrQjtJQUNqRCxPQUFPLEVBQUU7UUFDUCxNQUFNLEVBQUUsNkJBQTZCO0tBQ3RDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXNDb25maWcsIFJvdXRpbmdDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFN0b3JlZnJvbnRSb3V0ZXNDb25maWc6IFJvdXRlc0NvbmZpZyA9IHtcbiAgaG9tZTogeyBwYXRoczogWycnXSB9LFxuICBub3RGb3VuZDogeyBwYXRoczogWydub3QtZm91bmQnXSB9LFxuICBjYXJ0OiB7IHBhdGhzOiBbJ2NhcnQnXSB9LFxuICBzZWFyY2g6IHsgcGF0aHM6IFsnc2VhcmNoLzpxdWVyeSddIH0sXG5cbiAgLy8gc2VtYW50aWMgbGlua3MgZm9yIGxvZ2luIHJlbGF0ZWQgcGFnZXNcbiAgbG9naW46IHsgcGF0aHM6IFsnbG9naW4nXSB9LFxuICBsb2dvdXQ6IHsgcGF0aHM6IFsnbG9nb3V0J10gfSxcbiAgcmVnaXN0ZXI6IHsgcGF0aHM6IFsnbG9naW4vcmVnaXN0ZXInXSB9LFxuICBmb3Jnb3RQYXNzd29yZDogeyBwYXRoczogWydsb2dpbi9mb3Jnb3QtcGFzc3dvcmQnXSB9LFxuXG4gIGNoZWNrb3V0OiB7IHBhdGhzOiBbJ2NoZWNrb3V0J10gfSxcbiAgY2hlY2tvdXRTaGlwcGluZ0FkZHJlc3M6IHsgcGF0aHM6IFsnY2hlY2tvdXQvc2hpcHBpbmctYWRkcmVzcyddIH0sXG4gIGNoZWNrb3V0RGVsaXZlcnlNb2RlOiB7IHBhdGhzOiBbJ2NoZWNrb3V0L2RlbGl2ZXJ5LW1vZGUnXSB9LFxuICBjaGVja291dFBheW1lbnREZXRhaWxzOiB7IHBhdGhzOiBbJ2NoZWNrb3V0L3BheW1lbnQtZGV0YWlscyddIH0sXG4gIGNoZWNrb3V0UmV2aWV3T3JkZXI6IHsgcGF0aHM6IFsnY2hlY2tvdXQvcmV2aWV3LW9yZGVyJ10gfSxcbiAgb3JkZXJDb25maXJtYXRpb246IHsgcGF0aHM6IFsnb3JkZXItY29uZmlybWF0aW9uJ10gfSxcbiAgcHJvZHVjdDoge1xuICAgIHBhdGhzOiBbJ3Byb2R1Y3QvOnByb2R1Y3RDb2RlJ10sXG4gICAgcGFyYW1zTWFwcGluZzogeyBwcm9kdWN0Q29kZTogJ2NvZGUnIH0sXG4gIH0sXG4gIGNhdGVnb3J5OiB7XG4gICAgcGF0aHM6IFsnY2F0ZWdvcnkvOmNhdGVnb3J5Q29kZSddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgY2F0ZWdvcnlDb2RlOiAnY29kZScgfSxcbiAgfSxcbiAgYnJhbmQ6IHsgcGF0aHM6IFsnQnJhbmRzLzpicmFuZE5hbWUvYy86YnJhbmRDb2RlJ10gfSxcbiAgdGVybXNBbmRDb25kaXRpb25zOiB7IHBhdGhzOiBbJ3Rlcm1zQW5kQ29uZGl0aW9ucyddIH0sXG4gIG9yZGVyRGV0YWlsczoge1xuICAgIHBhdGhzOiBbJ215LWFjY291bnQvb3JkZXJzLzpvcmRlckNvZGUnXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IG9yZGVyQ29kZTogJ2NvZGUnIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFJvdXRpbmdDb25maWc6IFJvdXRpbmdDb25maWcgPSB7XG4gIHJvdXRpbmc6IHtcbiAgICByb3V0ZXM6IGRlZmF1bHRTdG9yZWZyb250Um91dGVzQ29uZmlnLFxuICB9LFxufTtcbiJdfQ==