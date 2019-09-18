/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const defaultStorefrontRoutesConfig = {
    home: { paths: [''] },
    notFound: { paths: ['not-found'] },
    cart: { paths: ['cart'] },
    // semantic links for login related pages
    login: { paths: ['login'] },
    logout: { paths: ['logout'] },
    register: { paths: ['login/register'] },
    checkoutLogin: { paths: ['checkout-login'] },
    forgotPassword: { paths: ['login/forgot-password'] },
    checkout: { paths: ['checkout'] },
    checkoutShippingAddress: { paths: ['checkout/shipping-address'] },
    checkoutDeliveryMode: { paths: ['checkout/delivery-mode'] },
    checkoutPaymentDetails: { paths: ['checkout/payment-details'] },
    checkoutReviewOrder: { paths: ['checkout/review-order'] },
    orderConfirmation: { paths: ['order-confirmation'] },
    // plp routes
    search: { paths: ['search/:query'] },
    category: {
        paths: ['category/:categoryCode'],
        paramsMapping: { categoryCode: 'code' },
    },
    brand: { paths: ['Brands/:brandName/c/:brandCode'] },
    // pdp routes
    product: {
        paths: ['product/:productCode/:name'],
        paramsMapping: { productCode: 'code' },
    },
    termsAndConditions: { paths: ['terms-and-conditions'] },
    orderDetails: {
        paths: ['my-account/order/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    orders: {
        paths: ['my-account/orders'],
    },
};
/** @type {?} */
export const defaultRoutingConfig = {
    routing: {
        routes: defaultStorefrontRoutesConfig,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1yb3V0aW5nLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcm91dGluZy9kZWZhdWx0LXJvdXRpbmctY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxPQUFPLDZCQUE2QixHQUFpQjtJQUN6RCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNyQixRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRTtJQUNsQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTs7SUFHekIsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7SUFDM0IsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUU7SUFDN0IsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtJQUN2QyxhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO0lBQzVDLGNBQWMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLHVCQUF1QixDQUFDLEVBQUU7SUFFcEQsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7SUFDakMsdUJBQXVCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxFQUFFO0lBQ2pFLG9CQUFvQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsd0JBQXdCLENBQUMsRUFBRTtJQUMzRCxzQkFBc0IsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLDBCQUEwQixDQUFDLEVBQUU7SUFDL0QsbUJBQW1CLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO0lBQ3pELGlCQUFpQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsb0JBQW9CLENBQUMsRUFBRTs7SUFHcEQsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUU7SUFDcEMsUUFBUSxFQUFFO1FBQ1IsS0FBSyxFQUFFLENBQUMsd0JBQXdCLENBQUM7UUFDakMsYUFBYSxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRTtLQUN4QztJQUNELEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLGdDQUFnQyxDQUFDLEVBQUU7O0lBR3BELE9BQU8sRUFBRTtRQUNQLEtBQUssRUFBRSxDQUFDLDRCQUE0QixDQUFDO1FBQ3JDLGFBQWEsRUFBRSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7S0FDdkM7SUFFRCxrQkFBa0IsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7SUFDdkQsWUFBWSxFQUFFO1FBQ1osS0FBSyxFQUFFLENBQUMsNkJBQTZCLENBQUM7UUFDdEMsYUFBYSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtLQUNyQztJQUNELE1BQU0sRUFBRTtRQUNOLEtBQUssRUFBRSxDQUFDLG1CQUFtQixDQUFDO0tBQzdCO0NBQ0Y7O0FBRUQsTUFBTSxPQUFPLG9CQUFvQixHQUFrQjtJQUNqRCxPQUFPLEVBQUU7UUFDUCxNQUFNLEVBQUUsNkJBQTZCO0tBQ3RDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXNDb25maWcsIFJvdXRpbmdDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFN0b3JlZnJvbnRSb3V0ZXNDb25maWc6IFJvdXRlc0NvbmZpZyA9IHtcbiAgaG9tZTogeyBwYXRoczogWycnXSB9LFxuICBub3RGb3VuZDogeyBwYXRoczogWydub3QtZm91bmQnXSB9LFxuICBjYXJ0OiB7IHBhdGhzOiBbJ2NhcnQnXSB9LFxuXG4gIC8vIHNlbWFudGljIGxpbmtzIGZvciBsb2dpbiByZWxhdGVkIHBhZ2VzXG4gIGxvZ2luOiB7IHBhdGhzOiBbJ2xvZ2luJ10gfSxcbiAgbG9nb3V0OiB7IHBhdGhzOiBbJ2xvZ291dCddIH0sXG4gIHJlZ2lzdGVyOiB7IHBhdGhzOiBbJ2xvZ2luL3JlZ2lzdGVyJ10gfSxcbiAgY2hlY2tvdXRMb2dpbjogeyBwYXRoczogWydjaGVja291dC1sb2dpbiddIH0sXG4gIGZvcmdvdFBhc3N3b3JkOiB7IHBhdGhzOiBbJ2xvZ2luL2ZvcmdvdC1wYXNzd29yZCddIH0sXG5cbiAgY2hlY2tvdXQ6IHsgcGF0aHM6IFsnY2hlY2tvdXQnXSB9LFxuICBjaGVja291dFNoaXBwaW5nQWRkcmVzczogeyBwYXRoczogWydjaGVja291dC9zaGlwcGluZy1hZGRyZXNzJ10gfSxcbiAgY2hlY2tvdXREZWxpdmVyeU1vZGU6IHsgcGF0aHM6IFsnY2hlY2tvdXQvZGVsaXZlcnktbW9kZSddIH0sXG4gIGNoZWNrb3V0UGF5bWVudERldGFpbHM6IHsgcGF0aHM6IFsnY2hlY2tvdXQvcGF5bWVudC1kZXRhaWxzJ10gfSxcbiAgY2hlY2tvdXRSZXZpZXdPcmRlcjogeyBwYXRoczogWydjaGVja291dC9yZXZpZXctb3JkZXInXSB9LFxuICBvcmRlckNvbmZpcm1hdGlvbjogeyBwYXRoczogWydvcmRlci1jb25maXJtYXRpb24nXSB9LFxuXG4gIC8vIHBscCByb3V0ZXNcbiAgc2VhcmNoOiB7IHBhdGhzOiBbJ3NlYXJjaC86cXVlcnknXSB9LFxuICBjYXRlZ29yeToge1xuICAgIHBhdGhzOiBbJ2NhdGVnb3J5LzpjYXRlZ29yeUNvZGUnXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IGNhdGVnb3J5Q29kZTogJ2NvZGUnIH0sXG4gIH0sXG4gIGJyYW5kOiB7IHBhdGhzOiBbJ0JyYW5kcy86YnJhbmROYW1lL2MvOmJyYW5kQ29kZSddIH0sXG5cbiAgLy8gcGRwIHJvdXRlc1xuICBwcm9kdWN0OiB7XG4gICAgcGF0aHM6IFsncHJvZHVjdC86cHJvZHVjdENvZGUvOm5hbWUnXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IHByb2R1Y3RDb2RlOiAnY29kZScgfSxcbiAgfSxcblxuICB0ZXJtc0FuZENvbmRpdGlvbnM6IHsgcGF0aHM6IFsndGVybXMtYW5kLWNvbmRpdGlvbnMnXSB9LFxuICBvcmRlckRldGFpbHM6IHtcbiAgICBwYXRoczogWydteS1hY2NvdW50L29yZGVyLzpvcmRlckNvZGUnXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IG9yZGVyQ29kZTogJ2NvZGUnIH0sXG4gIH0sXG4gIG9yZGVyczoge1xuICAgIHBhdGhzOiBbJ215LWFjY291bnQvb3JkZXJzJ10sXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFJvdXRpbmdDb25maWc6IFJvdXRpbmdDb25maWcgPSB7XG4gIHJvdXRpbmc6IHtcbiAgICByb3V0ZXM6IGRlZmF1bHRTdG9yZWZyb250Um91dGVzQ29uZmlnLFxuICB9LFxufTtcbiJdfQ==