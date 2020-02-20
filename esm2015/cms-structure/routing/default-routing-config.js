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
    orders: {
        paths: ['my-account/orders'],
    },
    orderDetails: {
        paths: ['my-account/order/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    orderGuest: {
        paths: ['guest/order/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    orderReturn: {
        paths: ['my-account/order/return/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    orderReturnConfirmation: {
        paths: ['my-account/order/return/confirmation/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    orderCancel: {
        paths: ['my-account/order/cancel/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    orderCancelConfirmation: {
        paths: ['my-account/order/cancel/confirmation/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    returnRequestDetails: {
        paths: ['my-account/return-request/:returnCode'],
        paramsMapping: { returnCode: 'rma' },
    },
    coupons: { paths: ['my-account/coupons'] },
    couponClaim: {
        paths: ['my-account/coupon/claim/:couponCode'],
        paramsMapping: { couponCode: 'code' },
    },
};
export const defaultRoutingConfig = {
    routing: {
        routes: defaultStorefrontRoutesConfig,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1yb3V0aW5nLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcm91dGluZy9kZWZhdWx0LXJvdXRpbmctY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLDZCQUE2QixHQUFpQjtJQUN6RCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNyQixRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRTtJQUNsQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUV6Qix5Q0FBeUM7SUFDekMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtJQUM3QyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUU7SUFDekQsY0FBYyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsdUJBQXVCLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFO0lBQ3RFLGFBQWEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtJQUMvRCxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTtJQUM3QixhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO0lBRTVDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO0lBQ2pDLHVCQUF1QixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsMkJBQTJCLENBQUMsRUFBRTtJQUNqRSxvQkFBb0IsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7SUFDM0Qsc0JBQXNCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxFQUFFO0lBQy9ELG1CQUFtQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsdUJBQXVCLENBQUMsRUFBRTtJQUN6RCxpQkFBaUIsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLG9CQUFvQixDQUFDLEVBQUU7SUFFcEQsYUFBYTtJQUNiLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFO0lBQ3BDLFFBQVEsRUFBRTtRQUNSLEtBQUssRUFBRSxDQUFDLHdCQUF3QixDQUFDO1FBQ2pDLGFBQWEsRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUU7S0FDeEM7SUFDRCxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFFO0lBRXBELGFBQWE7SUFDYixPQUFPLEVBQUU7UUFDUCxLQUFLLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztRQUNyQyxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO0tBQ3ZDO0lBRUQsa0JBQWtCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO0lBQ3ZELE1BQU0sRUFBRTtRQUNOLEtBQUssRUFBRSxDQUFDLG1CQUFtQixDQUFDO0tBQzdCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osS0FBSyxFQUFFLENBQUMsNkJBQTZCLENBQUM7UUFDdEMsYUFBYSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtLQUNyQztJQUNELFVBQVUsRUFBRTtRQUNWLEtBQUssRUFBRSxDQUFDLHdCQUF3QixDQUFDO1FBQ2pDLGFBQWEsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7S0FDckM7SUFDRCxXQUFXLEVBQUU7UUFDWCxLQUFLLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztRQUM3QyxhQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0tBQ3JDO0lBQ0QsdUJBQXVCLEVBQUU7UUFDdkIsS0FBSyxFQUFFLENBQUMsaURBQWlELENBQUM7UUFDMUQsYUFBYSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtLQUNyQztJQUNELFdBQVcsRUFBRTtRQUNYLEtBQUssRUFBRSxDQUFDLG9DQUFvQyxDQUFDO1FBQzdDLGFBQWEsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7S0FDckM7SUFDRCx1QkFBdUIsRUFBRTtRQUN2QixLQUFLLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQztRQUMxRCxhQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0tBQ3JDO0lBQ0Qsb0JBQW9CLEVBQUU7UUFDcEIsS0FBSyxFQUFFLENBQUMsdUNBQXVDLENBQUM7UUFDaEQsYUFBYSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTtLQUNyQztJQUNELE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLG9CQUFvQixDQUFDLEVBQUU7SUFDMUMsV0FBVyxFQUFFO1FBQ1gsS0FBSyxFQUFFLENBQUMscUNBQXFDLENBQUM7UUFDOUMsYUFBYSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTtLQUN0QztDQUNGLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBa0I7SUFDakQsT0FBTyxFQUFFO1FBQ1AsTUFBTSxFQUFFLDZCQUE2QjtLQUN0QztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXNDb25maWcsIFJvdXRpbmdDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFN0b3JlZnJvbnRSb3V0ZXNDb25maWc6IFJvdXRlc0NvbmZpZyA9IHtcbiAgaG9tZTogeyBwYXRoczogWycnXSB9LFxuICBub3RGb3VuZDogeyBwYXRoczogWydub3QtZm91bmQnXSB9LFxuICBjYXJ0OiB7IHBhdGhzOiBbJ2NhcnQnXSB9LFxuXG4gIC8vIHNlbWFudGljIGxpbmtzIGZvciBsb2dpbiByZWxhdGVkIHBhZ2VzXG4gIGxvZ2luOiB7IHBhdGhzOiBbJ2xvZ2luJ10sIHByb3RlY3RlZDogZmFsc2UgfSxcbiAgcmVnaXN0ZXI6IHsgcGF0aHM6IFsnbG9naW4vcmVnaXN0ZXInXSwgcHJvdGVjdGVkOiBmYWxzZSB9LFxuICBmb3Jnb3RQYXNzd29yZDogeyBwYXRoczogWydsb2dpbi9mb3Jnb3QtcGFzc3dvcmQnXSwgcHJvdGVjdGVkOiBmYWxzZSB9LFxuICByZXNldFBhc3N3b3JkOiB7IHBhdGhzOiBbJ2xvZ2luL3B3L2NoYW5nZSddLCBwcm90ZWN0ZWQ6IGZhbHNlIH0sXG4gIGxvZ291dDogeyBwYXRoczogWydsb2dvdXQnXSB9LFxuICBjaGVja291dExvZ2luOiB7IHBhdGhzOiBbJ2NoZWNrb3V0LWxvZ2luJ10gfSxcblxuICBjaGVja291dDogeyBwYXRoczogWydjaGVja291dCddIH0sXG4gIGNoZWNrb3V0U2hpcHBpbmdBZGRyZXNzOiB7IHBhdGhzOiBbJ2NoZWNrb3V0L3NoaXBwaW5nLWFkZHJlc3MnXSB9LFxuICBjaGVja291dERlbGl2ZXJ5TW9kZTogeyBwYXRoczogWydjaGVja291dC9kZWxpdmVyeS1tb2RlJ10gfSxcbiAgY2hlY2tvdXRQYXltZW50RGV0YWlsczogeyBwYXRoczogWydjaGVja291dC9wYXltZW50LWRldGFpbHMnXSB9LFxuICBjaGVja291dFJldmlld09yZGVyOiB7IHBhdGhzOiBbJ2NoZWNrb3V0L3Jldmlldy1vcmRlciddIH0sXG4gIG9yZGVyQ29uZmlybWF0aW9uOiB7IHBhdGhzOiBbJ29yZGVyLWNvbmZpcm1hdGlvbiddIH0sXG5cbiAgLy8gcGxwIHJvdXRlc1xuICBzZWFyY2g6IHsgcGF0aHM6IFsnc2VhcmNoLzpxdWVyeSddIH0sXG4gIGNhdGVnb3J5OiB7XG4gICAgcGF0aHM6IFsnY2F0ZWdvcnkvOmNhdGVnb3J5Q29kZSddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgY2F0ZWdvcnlDb2RlOiAnY29kZScgfSxcbiAgfSxcbiAgYnJhbmQ6IHsgcGF0aHM6IFsnQnJhbmRzLzpicmFuZE5hbWUvYy86YnJhbmRDb2RlJ10gfSxcblxuICAvLyBwZHAgcm91dGVzXG4gIHByb2R1Y3Q6IHtcbiAgICBwYXRoczogWydwcm9kdWN0Lzpwcm9kdWN0Q29kZS86bmFtZSddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgcHJvZHVjdENvZGU6ICdjb2RlJyB9LFxuICB9LFxuXG4gIHRlcm1zQW5kQ29uZGl0aW9uczogeyBwYXRoczogWyd0ZXJtcy1hbmQtY29uZGl0aW9ucyddIH0sXG4gIG9yZGVyczoge1xuICAgIHBhdGhzOiBbJ215LWFjY291bnQvb3JkZXJzJ10sXG4gIH0sXG4gIG9yZGVyRGV0YWlsczoge1xuICAgIHBhdGhzOiBbJ215LWFjY291bnQvb3JkZXIvOm9yZGVyQ29kZSddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgb3JkZXJDb2RlOiAnY29kZScgfSxcbiAgfSxcbiAgb3JkZXJHdWVzdDoge1xuICAgIHBhdGhzOiBbJ2d1ZXN0L29yZGVyLzpvcmRlckNvZGUnXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IG9yZGVyQ29kZTogJ2NvZGUnIH0sXG4gIH0sXG4gIG9yZGVyUmV0dXJuOiB7XG4gICAgcGF0aHM6IFsnbXktYWNjb3VudC9vcmRlci9yZXR1cm4vOm9yZGVyQ29kZSddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgb3JkZXJDb2RlOiAnY29kZScgfSxcbiAgfSxcbiAgb3JkZXJSZXR1cm5Db25maXJtYXRpb246IHtcbiAgICBwYXRoczogWydteS1hY2NvdW50L29yZGVyL3JldHVybi9jb25maXJtYXRpb24vOm9yZGVyQ29kZSddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgb3JkZXJDb2RlOiAnY29kZScgfSxcbiAgfSxcbiAgb3JkZXJDYW5jZWw6IHtcbiAgICBwYXRoczogWydteS1hY2NvdW50L29yZGVyL2NhbmNlbC86b3JkZXJDb2RlJ10sXG4gICAgcGFyYW1zTWFwcGluZzogeyBvcmRlckNvZGU6ICdjb2RlJyB9LFxuICB9LFxuICBvcmRlckNhbmNlbENvbmZpcm1hdGlvbjoge1xuICAgIHBhdGhzOiBbJ215LWFjY291bnQvb3JkZXIvY2FuY2VsL2NvbmZpcm1hdGlvbi86b3JkZXJDb2RlJ10sXG4gICAgcGFyYW1zTWFwcGluZzogeyBvcmRlckNvZGU6ICdjb2RlJyB9LFxuICB9LFxuICByZXR1cm5SZXF1ZXN0RGV0YWlsczoge1xuICAgIHBhdGhzOiBbJ215LWFjY291bnQvcmV0dXJuLXJlcXVlc3QvOnJldHVybkNvZGUnXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IHJldHVybkNvZGU6ICdybWEnIH0sXG4gIH0sXG4gIGNvdXBvbnM6IHsgcGF0aHM6IFsnbXktYWNjb3VudC9jb3Vwb25zJ10gfSxcbiAgY291cG9uQ2xhaW06IHtcbiAgICBwYXRoczogWydteS1hY2NvdW50L2NvdXBvbi9jbGFpbS86Y291cG9uQ29kZSddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgY291cG9uQ29kZTogJ2NvZGUnIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFJvdXRpbmdDb25maWc6IFJvdXRpbmdDb25maWcgPSB7XG4gIHJvdXRpbmc6IHtcbiAgICByb3V0ZXM6IGRlZmF1bHRTdG9yZWZyb250Um91dGVzQ29uZmlnLFxuICB9LFxufTtcbiJdfQ==