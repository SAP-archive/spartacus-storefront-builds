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
    login: { paths: ['login'], protected: false },
    register: { paths: ['login/register'], protected: false },
    forgotPassword: { paths: ['login/forgot-password'], protected: false },
    resetPassword: { paths: ['login/pw/change'], protected: false },
    logout: { paths: ['logout'] },
    checkoutLogin: { paths: ['checkout-login'] },
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
    orderReturn: {
        paths: ['my-account/order/:orderCode/return'],
        paramsMapping: { orderCode: 'code' },
    },
    orderReturnConfirmation: {
        paths: ['my-account/order/:orderCode/return/confirmation'],
        paramsMapping: { orderCode: 'code' },
    },
    orderCancel: {
        paths: ['my-account/order/:orderCode/cancel'],
        paramsMapping: { orderCode: 'code' },
    },
    orderCancelConfirmation: {
        paths: ['my-account/order/:orderCode/cancel/confirmation'],
        paramsMapping: { orderCode: 'code' },
    },
    returnRequestDetails: {
        paths: ['my-account/return-request/:returnCode'],
        paramsMapping: { returnCode: 'rma' },
    },
};
/** @type {?} */
export const defaultRoutingConfig = {
    routing: {
        routes: defaultStorefrontRoutesConfig,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1yb3V0aW5nLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcm91dGluZy9kZWZhdWx0LXJvdXRpbmctY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxPQUFPLDZCQUE2QixHQUFpQjtJQUN6RCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNyQixRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRTtJQUNsQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTs7SUFHekIsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtJQUM3QyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUU7SUFDekQsY0FBYyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsdUJBQXVCLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFO0lBQ3RFLGFBQWEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtJQUMvRCxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTtJQUM3QixhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO0lBRTVDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO0lBQ2pDLHVCQUF1QixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsMkJBQTJCLENBQUMsRUFBRTtJQUNqRSxvQkFBb0IsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7SUFDM0Qsc0JBQXNCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxFQUFFO0lBQy9ELG1CQUFtQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsdUJBQXVCLENBQUMsRUFBRTtJQUN6RCxpQkFBaUIsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLG9CQUFvQixDQUFDLEVBQUU7O0lBR3BELE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFO0lBQ3BDLFFBQVEsRUFBRTtRQUNSLEtBQUssRUFBRSxDQUFDLHdCQUF3QixDQUFDO1FBQ2pDLGFBQWEsRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUU7S0FDeEM7SUFDRCxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFFOztJQUdwRCxPQUFPLEVBQUU7UUFDUCxLQUFLLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztRQUNyQyxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO0tBQ3ZDO0lBRUQsa0JBQWtCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO0lBQ3ZELFlBQVksRUFBRTtRQUNaLEtBQUssRUFBRSxDQUFDLDZCQUE2QixDQUFDO1FBQ3RDLGFBQWEsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7S0FDckM7SUFDRCxNQUFNLEVBQUU7UUFDTixLQUFLLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztLQUM3QjtJQUNELFdBQVcsRUFBRTtRQUNYLEtBQUssRUFBRSxDQUFDLG9DQUFvQyxDQUFDO1FBQzdDLGFBQWEsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7S0FDckM7SUFDRCx1QkFBdUIsRUFBRTtRQUN2QixLQUFLLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQztRQUMxRCxhQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0tBQ3JDO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsS0FBSyxFQUFFLENBQUMsb0NBQW9DLENBQUM7UUFDN0MsYUFBYSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtLQUNyQztJQUNELHVCQUF1QixFQUFFO1FBQ3ZCLEtBQUssRUFBRSxDQUFDLGlEQUFpRCxDQUFDO1FBQzFELGFBQWEsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7S0FDckM7SUFDRCxvQkFBb0IsRUFBRTtRQUNwQixLQUFLLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztRQUNoRCxhQUFhLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFO0tBQ3JDO0NBQ0Y7O0FBRUQsTUFBTSxPQUFPLG9CQUFvQixHQUFrQjtJQUNqRCxPQUFPLEVBQUU7UUFDUCxNQUFNLEVBQUUsNkJBQTZCO0tBQ3RDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXNDb25maWcsIFJvdXRpbmdDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFN0b3JlZnJvbnRSb3V0ZXNDb25maWc6IFJvdXRlc0NvbmZpZyA9IHtcbiAgaG9tZTogeyBwYXRoczogWycnXSB9LFxuICBub3RGb3VuZDogeyBwYXRoczogWydub3QtZm91bmQnXSB9LFxuICBjYXJ0OiB7IHBhdGhzOiBbJ2NhcnQnXSB9LFxuXG4gIC8vIHNlbWFudGljIGxpbmtzIGZvciBsb2dpbiByZWxhdGVkIHBhZ2VzXG4gIGxvZ2luOiB7IHBhdGhzOiBbJ2xvZ2luJ10sIHByb3RlY3RlZDogZmFsc2UgfSxcbiAgcmVnaXN0ZXI6IHsgcGF0aHM6IFsnbG9naW4vcmVnaXN0ZXInXSwgcHJvdGVjdGVkOiBmYWxzZSB9LFxuICBmb3Jnb3RQYXNzd29yZDogeyBwYXRoczogWydsb2dpbi9mb3Jnb3QtcGFzc3dvcmQnXSwgcHJvdGVjdGVkOiBmYWxzZSB9LFxuICByZXNldFBhc3N3b3JkOiB7IHBhdGhzOiBbJ2xvZ2luL3B3L2NoYW5nZSddLCBwcm90ZWN0ZWQ6IGZhbHNlIH0sXG4gIGxvZ291dDogeyBwYXRoczogWydsb2dvdXQnXSB9LFxuICBjaGVja291dExvZ2luOiB7IHBhdGhzOiBbJ2NoZWNrb3V0LWxvZ2luJ10gfSxcblxuICBjaGVja291dDogeyBwYXRoczogWydjaGVja291dCddIH0sXG4gIGNoZWNrb3V0U2hpcHBpbmdBZGRyZXNzOiB7IHBhdGhzOiBbJ2NoZWNrb3V0L3NoaXBwaW5nLWFkZHJlc3MnXSB9LFxuICBjaGVja291dERlbGl2ZXJ5TW9kZTogeyBwYXRoczogWydjaGVja291dC9kZWxpdmVyeS1tb2RlJ10gfSxcbiAgY2hlY2tvdXRQYXltZW50RGV0YWlsczogeyBwYXRoczogWydjaGVja291dC9wYXltZW50LWRldGFpbHMnXSB9LFxuICBjaGVja291dFJldmlld09yZGVyOiB7IHBhdGhzOiBbJ2NoZWNrb3V0L3Jldmlldy1vcmRlciddIH0sXG4gIG9yZGVyQ29uZmlybWF0aW9uOiB7IHBhdGhzOiBbJ29yZGVyLWNvbmZpcm1hdGlvbiddIH0sXG5cbiAgLy8gcGxwIHJvdXRlc1xuICBzZWFyY2g6IHsgcGF0aHM6IFsnc2VhcmNoLzpxdWVyeSddIH0sXG4gIGNhdGVnb3J5OiB7XG4gICAgcGF0aHM6IFsnY2F0ZWdvcnkvOmNhdGVnb3J5Q29kZSddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgY2F0ZWdvcnlDb2RlOiAnY29kZScgfSxcbiAgfSxcbiAgYnJhbmQ6IHsgcGF0aHM6IFsnQnJhbmRzLzpicmFuZE5hbWUvYy86YnJhbmRDb2RlJ10gfSxcblxuICAvLyBwZHAgcm91dGVzXG4gIHByb2R1Y3Q6IHtcbiAgICBwYXRoczogWydwcm9kdWN0Lzpwcm9kdWN0Q29kZS86bmFtZSddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgcHJvZHVjdENvZGU6ICdjb2RlJyB9LFxuICB9LFxuXG4gIHRlcm1zQW5kQ29uZGl0aW9uczogeyBwYXRoczogWyd0ZXJtcy1hbmQtY29uZGl0aW9ucyddIH0sXG4gIG9yZGVyRGV0YWlsczoge1xuICAgIHBhdGhzOiBbJ215LWFjY291bnQvb3JkZXIvOm9yZGVyQ29kZSddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgb3JkZXJDb2RlOiAnY29kZScgfSxcbiAgfSxcbiAgb3JkZXJzOiB7XG4gICAgcGF0aHM6IFsnbXktYWNjb3VudC9vcmRlcnMnXSxcbiAgfSxcbiAgb3JkZXJSZXR1cm46IHtcbiAgICBwYXRoczogWydteS1hY2NvdW50L29yZGVyLzpvcmRlckNvZGUvcmV0dXJuJ10sXG4gICAgcGFyYW1zTWFwcGluZzogeyBvcmRlckNvZGU6ICdjb2RlJyB9LFxuICB9LFxuICBvcmRlclJldHVybkNvbmZpcm1hdGlvbjoge1xuICAgIHBhdGhzOiBbJ215LWFjY291bnQvb3JkZXIvOm9yZGVyQ29kZS9yZXR1cm4vY29uZmlybWF0aW9uJ10sXG4gICAgcGFyYW1zTWFwcGluZzogeyBvcmRlckNvZGU6ICdjb2RlJyB9LFxuICB9LFxuICBvcmRlckNhbmNlbDoge1xuICAgIHBhdGhzOiBbJ215LWFjY291bnQvb3JkZXIvOm9yZGVyQ29kZS9jYW5jZWwnXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IG9yZGVyQ29kZTogJ2NvZGUnIH0sXG4gIH0sXG4gIG9yZGVyQ2FuY2VsQ29uZmlybWF0aW9uOiB7XG4gICAgcGF0aHM6IFsnbXktYWNjb3VudC9vcmRlci86b3JkZXJDb2RlL2NhbmNlbC9jb25maXJtYXRpb24nXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IG9yZGVyQ29kZTogJ2NvZGUnIH0sXG4gIH0sXG4gIHJldHVyblJlcXVlc3REZXRhaWxzOiB7XG4gICAgcGF0aHM6IFsnbXktYWNjb3VudC9yZXR1cm4tcmVxdWVzdC86cmV0dXJuQ29kZSddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgcmV0dXJuQ29kZTogJ3JtYScgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0Um91dGluZ0NvbmZpZzogUm91dGluZ0NvbmZpZyA9IHtcbiAgcm91dGluZzoge1xuICAgIHJvdXRlczogZGVmYXVsdFN0b3JlZnJvbnRSb3V0ZXNDb25maWcsXG4gIH0sXG59O1xuIl19