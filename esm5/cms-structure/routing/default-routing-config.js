/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var defaultStorefrontRoutesConfig = {
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
        paths: ['my-account/order/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    orders: {
        paths: ['my-account/orders'],
    },
};
/** @type {?} */
export var defaultRoutingConfig = {
    routing: {
        routes: defaultStorefrontRoutesConfig,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1yb3V0aW5nLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcm91dGluZy9kZWZhdWx0LXJvdXRpbmctY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxLQUFPLDZCQUE2QixHQUFpQjtJQUN6RCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNyQixRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRTtJQUNsQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUN6QixNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRTs7SUFHcEMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7SUFDM0IsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUU7SUFDN0IsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtJQUN2QyxjQUFjLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO0lBRXBELFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO0lBQ2pDLHVCQUF1QixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsMkJBQTJCLENBQUMsRUFBRTtJQUNqRSxvQkFBb0IsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7SUFDM0Qsc0JBQXNCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxFQUFFO0lBQy9ELG1CQUFtQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsdUJBQXVCLENBQUMsRUFBRTtJQUN6RCxpQkFBaUIsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLG9CQUFvQixDQUFDLEVBQUU7SUFDcEQsT0FBTyxFQUFFO1FBQ1AsS0FBSyxFQUFFLENBQUMsc0JBQXNCLENBQUM7UUFDL0IsYUFBYSxFQUFFLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtLQUN2QztJQUNELFFBQVEsRUFBRTtRQUNSLEtBQUssRUFBRSxDQUFDLHdCQUF3QixDQUFDO1FBQ2pDLGFBQWEsRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUU7S0FDeEM7SUFDRCxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFFO0lBQ3BELGtCQUFrQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsb0JBQW9CLENBQUMsRUFBRTtJQUNyRCxZQUFZLEVBQUU7UUFDWixLQUFLLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztRQUN0QyxhQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0tBQ3JDO0lBQ0QsTUFBTSxFQUFFO1FBQ04sS0FBSyxFQUFFLENBQUMsbUJBQW1CLENBQUM7S0FDN0I7Q0FDRjs7QUFFRCxNQUFNLEtBQU8sb0JBQW9CLEdBQWtCO0lBQ2pELE9BQU8sRUFBRTtRQUNQLE1BQU0sRUFBRSw2QkFBNkI7S0FDdEM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlc0NvbmZpZywgUm91dGluZ0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RvcmVmcm9udFJvdXRlc0NvbmZpZzogUm91dGVzQ29uZmlnID0ge1xuICBob21lOiB7IHBhdGhzOiBbJyddIH0sXG4gIG5vdEZvdW5kOiB7IHBhdGhzOiBbJ25vdC1mb3VuZCddIH0sXG4gIGNhcnQ6IHsgcGF0aHM6IFsnY2FydCddIH0sXG4gIHNlYXJjaDogeyBwYXRoczogWydzZWFyY2gvOnF1ZXJ5J10gfSxcblxuICAvLyBzZW1hbnRpYyBsaW5rcyBmb3IgbG9naW4gcmVsYXRlZCBwYWdlc1xuICBsb2dpbjogeyBwYXRoczogWydsb2dpbiddIH0sXG4gIGxvZ291dDogeyBwYXRoczogWydsb2dvdXQnXSB9LFxuICByZWdpc3RlcjogeyBwYXRoczogWydsb2dpbi9yZWdpc3RlciddIH0sXG4gIGZvcmdvdFBhc3N3b3JkOiB7IHBhdGhzOiBbJ2xvZ2luL2ZvcmdvdC1wYXNzd29yZCddIH0sXG5cbiAgY2hlY2tvdXQ6IHsgcGF0aHM6IFsnY2hlY2tvdXQnXSB9LFxuICBjaGVja291dFNoaXBwaW5nQWRkcmVzczogeyBwYXRoczogWydjaGVja291dC9zaGlwcGluZy1hZGRyZXNzJ10gfSxcbiAgY2hlY2tvdXREZWxpdmVyeU1vZGU6IHsgcGF0aHM6IFsnY2hlY2tvdXQvZGVsaXZlcnktbW9kZSddIH0sXG4gIGNoZWNrb3V0UGF5bWVudERldGFpbHM6IHsgcGF0aHM6IFsnY2hlY2tvdXQvcGF5bWVudC1kZXRhaWxzJ10gfSxcbiAgY2hlY2tvdXRSZXZpZXdPcmRlcjogeyBwYXRoczogWydjaGVja291dC9yZXZpZXctb3JkZXInXSB9LFxuICBvcmRlckNvbmZpcm1hdGlvbjogeyBwYXRoczogWydvcmRlci1jb25maXJtYXRpb24nXSB9LFxuICBwcm9kdWN0OiB7XG4gICAgcGF0aHM6IFsncHJvZHVjdC86cHJvZHVjdENvZGUnXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IHByb2R1Y3RDb2RlOiAnY29kZScgfSxcbiAgfSxcbiAgY2F0ZWdvcnk6IHtcbiAgICBwYXRoczogWydjYXRlZ29yeS86Y2F0ZWdvcnlDb2RlJ10sXG4gICAgcGFyYW1zTWFwcGluZzogeyBjYXRlZ29yeUNvZGU6ICdjb2RlJyB9LFxuICB9LFxuICBicmFuZDogeyBwYXRoczogWydCcmFuZHMvOmJyYW5kTmFtZS9jLzpicmFuZENvZGUnXSB9LFxuICB0ZXJtc0FuZENvbmRpdGlvbnM6IHsgcGF0aHM6IFsndGVybXNBbmRDb25kaXRpb25zJ10gfSxcbiAgb3JkZXJEZXRhaWxzOiB7XG4gICAgcGF0aHM6IFsnbXktYWNjb3VudC9vcmRlci86b3JkZXJDb2RlJ10sXG4gICAgcGFyYW1zTWFwcGluZzogeyBvcmRlckNvZGU6ICdjb2RlJyB9LFxuICB9LFxuICBvcmRlcnM6IHtcbiAgICBwYXRoczogWydteS1hY2NvdW50L29yZGVycyddLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRSb3V0aW5nQ29uZmlnOiBSb3V0aW5nQ29uZmlnID0ge1xuICByb3V0aW5nOiB7XG4gICAgcm91dGVzOiBkZWZhdWx0U3RvcmVmcm9udFJvdXRlc0NvbmZpZyxcbiAgfSxcbn07XG4iXX0=