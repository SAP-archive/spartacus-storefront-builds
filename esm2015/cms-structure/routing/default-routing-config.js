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
    checkoutPaymentType: { paths: ['checkout/payment-type'] },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1yb3V0aW5nLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcm91dGluZy9kZWZhdWx0LXJvdXRpbmctY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLDZCQUE2QixHQUFpQjtJQUN6RCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNyQixRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRTtJQUNsQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUV6Qix5Q0FBeUM7SUFDekMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtJQUM3QyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUU7SUFDekQsY0FBYyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsdUJBQXVCLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFO0lBQ3RFLGFBQWEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtJQUMvRCxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTtJQUM3QixhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO0lBRTVDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO0lBQ2pDLG1CQUFtQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsdUJBQXVCLENBQUMsRUFBRTtJQUN6RCx1QkFBdUIsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLDJCQUEyQixDQUFDLEVBQUU7SUFDakUsb0JBQW9CLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFO0lBQzNELHNCQUFzQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsMEJBQTBCLENBQUMsRUFBRTtJQUMvRCxtQkFBbUIsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLHVCQUF1QixDQUFDLEVBQUU7SUFDekQsaUJBQWlCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO0lBRXBELGFBQWE7SUFDYixNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRTtJQUNwQyxRQUFRLEVBQUU7UUFDUixLQUFLLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztRQUNqQyxhQUFhLEVBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFO0tBQ3hDO0lBQ0QsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsZ0NBQWdDLENBQUMsRUFBRTtJQUVwRCxhQUFhO0lBQ2IsT0FBTyxFQUFFO1FBQ1AsS0FBSyxFQUFFLENBQUMsNEJBQTRCLENBQUM7UUFDckMsYUFBYSxFQUFFLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtLQUN2QztJQUVELGtCQUFrQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsc0JBQXNCLENBQUMsRUFBRTtJQUN2RCxNQUFNLEVBQUU7UUFDTixLQUFLLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztLQUM3QjtJQUNELFlBQVksRUFBRTtRQUNaLEtBQUssRUFBRSxDQUFDLDZCQUE2QixDQUFDO1FBQ3RDLGFBQWEsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7S0FDckM7SUFDRCxVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztRQUNqQyxhQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0tBQ3JDO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsS0FBSyxFQUFFLENBQUMsb0NBQW9DLENBQUM7UUFDN0MsYUFBYSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtLQUNyQztJQUNELHVCQUF1QixFQUFFO1FBQ3ZCLEtBQUssRUFBRSxDQUFDLGlEQUFpRCxDQUFDO1FBQzFELGFBQWEsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7S0FDckM7SUFDRCxXQUFXLEVBQUU7UUFDWCxLQUFLLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztRQUM3QyxhQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0tBQ3JDO0lBQ0QsdUJBQXVCLEVBQUU7UUFDdkIsS0FBSyxFQUFFLENBQUMsaURBQWlELENBQUM7UUFDMUQsYUFBYSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtLQUNyQztJQUNELG9CQUFvQixFQUFFO1FBQ3BCLEtBQUssRUFBRSxDQUFDLHVDQUF1QyxDQUFDO1FBQ2hELGFBQWEsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUU7S0FDckM7SUFDRCxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO0lBQzFDLFdBQVcsRUFBRTtRQUNYLEtBQUssRUFBRSxDQUFDLHFDQUFxQyxDQUFDO1FBQzlDLGFBQWEsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7S0FDdEM7Q0FDRixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQWtCO0lBQ2pELE9BQU8sRUFBRTtRQUNQLE1BQU0sRUFBRSw2QkFBNkI7S0FDdEM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzQ29uZmlnLCBSb3V0aW5nQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTdG9yZWZyb250Um91dGVzQ29uZmlnOiBSb3V0ZXNDb25maWcgPSB7XG4gIGhvbWU6IHsgcGF0aHM6IFsnJ10gfSxcbiAgbm90Rm91bmQ6IHsgcGF0aHM6IFsnbm90LWZvdW5kJ10gfSxcbiAgY2FydDogeyBwYXRoczogWydjYXJ0J10gfSxcblxuICAvLyBzZW1hbnRpYyBsaW5rcyBmb3IgbG9naW4gcmVsYXRlZCBwYWdlc1xuICBsb2dpbjogeyBwYXRoczogWydsb2dpbiddLCBwcm90ZWN0ZWQ6IGZhbHNlIH0sXG4gIHJlZ2lzdGVyOiB7IHBhdGhzOiBbJ2xvZ2luL3JlZ2lzdGVyJ10sIHByb3RlY3RlZDogZmFsc2UgfSxcbiAgZm9yZ290UGFzc3dvcmQ6IHsgcGF0aHM6IFsnbG9naW4vZm9yZ290LXBhc3N3b3JkJ10sIHByb3RlY3RlZDogZmFsc2UgfSxcbiAgcmVzZXRQYXNzd29yZDogeyBwYXRoczogWydsb2dpbi9wdy9jaGFuZ2UnXSwgcHJvdGVjdGVkOiBmYWxzZSB9LFxuICBsb2dvdXQ6IHsgcGF0aHM6IFsnbG9nb3V0J10gfSxcbiAgY2hlY2tvdXRMb2dpbjogeyBwYXRoczogWydjaGVja291dC1sb2dpbiddIH0sXG5cbiAgY2hlY2tvdXQ6IHsgcGF0aHM6IFsnY2hlY2tvdXQnXSB9LFxuICBjaGVja291dFBheW1lbnRUeXBlOiB7IHBhdGhzOiBbJ2NoZWNrb3V0L3BheW1lbnQtdHlwZSddIH0sXG4gIGNoZWNrb3V0U2hpcHBpbmdBZGRyZXNzOiB7IHBhdGhzOiBbJ2NoZWNrb3V0L3NoaXBwaW5nLWFkZHJlc3MnXSB9LFxuICBjaGVja291dERlbGl2ZXJ5TW9kZTogeyBwYXRoczogWydjaGVja291dC9kZWxpdmVyeS1tb2RlJ10gfSxcbiAgY2hlY2tvdXRQYXltZW50RGV0YWlsczogeyBwYXRoczogWydjaGVja291dC9wYXltZW50LWRldGFpbHMnXSB9LFxuICBjaGVja291dFJldmlld09yZGVyOiB7IHBhdGhzOiBbJ2NoZWNrb3V0L3Jldmlldy1vcmRlciddIH0sXG4gIG9yZGVyQ29uZmlybWF0aW9uOiB7IHBhdGhzOiBbJ29yZGVyLWNvbmZpcm1hdGlvbiddIH0sXG5cbiAgLy8gcGxwIHJvdXRlc1xuICBzZWFyY2g6IHsgcGF0aHM6IFsnc2VhcmNoLzpxdWVyeSddIH0sXG4gIGNhdGVnb3J5OiB7XG4gICAgcGF0aHM6IFsnY2F0ZWdvcnkvOmNhdGVnb3J5Q29kZSddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgY2F0ZWdvcnlDb2RlOiAnY29kZScgfSxcbiAgfSxcbiAgYnJhbmQ6IHsgcGF0aHM6IFsnQnJhbmRzLzpicmFuZE5hbWUvYy86YnJhbmRDb2RlJ10gfSxcblxuICAvLyBwZHAgcm91dGVzXG4gIHByb2R1Y3Q6IHtcbiAgICBwYXRoczogWydwcm9kdWN0Lzpwcm9kdWN0Q29kZS86bmFtZSddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgcHJvZHVjdENvZGU6ICdjb2RlJyB9LFxuICB9LFxuXG4gIHRlcm1zQW5kQ29uZGl0aW9uczogeyBwYXRoczogWyd0ZXJtcy1hbmQtY29uZGl0aW9ucyddIH0sXG4gIG9yZGVyczoge1xuICAgIHBhdGhzOiBbJ215LWFjY291bnQvb3JkZXJzJ10sXG4gIH0sXG4gIG9yZGVyRGV0YWlsczoge1xuICAgIHBhdGhzOiBbJ215LWFjY291bnQvb3JkZXIvOm9yZGVyQ29kZSddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgb3JkZXJDb2RlOiAnY29kZScgfSxcbiAgfSxcbiAgb3JkZXJHdWVzdDoge1xuICAgIHBhdGhzOiBbJ2d1ZXN0L29yZGVyLzpvcmRlckNvZGUnXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IG9yZGVyQ29kZTogJ2NvZGUnIH0sXG4gIH0sXG4gIG9yZGVyUmV0dXJuOiB7XG4gICAgcGF0aHM6IFsnbXktYWNjb3VudC9vcmRlci9yZXR1cm4vOm9yZGVyQ29kZSddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgb3JkZXJDb2RlOiAnY29kZScgfSxcbiAgfSxcbiAgb3JkZXJSZXR1cm5Db25maXJtYXRpb246IHtcbiAgICBwYXRoczogWydteS1hY2NvdW50L29yZGVyL3JldHVybi9jb25maXJtYXRpb24vOm9yZGVyQ29kZSddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgb3JkZXJDb2RlOiAnY29kZScgfSxcbiAgfSxcbiAgb3JkZXJDYW5jZWw6IHtcbiAgICBwYXRoczogWydteS1hY2NvdW50L29yZGVyL2NhbmNlbC86b3JkZXJDb2RlJ10sXG4gICAgcGFyYW1zTWFwcGluZzogeyBvcmRlckNvZGU6ICdjb2RlJyB9LFxuICB9LFxuICBvcmRlckNhbmNlbENvbmZpcm1hdGlvbjoge1xuICAgIHBhdGhzOiBbJ215LWFjY291bnQvb3JkZXIvY2FuY2VsL2NvbmZpcm1hdGlvbi86b3JkZXJDb2RlJ10sXG4gICAgcGFyYW1zTWFwcGluZzogeyBvcmRlckNvZGU6ICdjb2RlJyB9LFxuICB9LFxuICByZXR1cm5SZXF1ZXN0RGV0YWlsczoge1xuICAgIHBhdGhzOiBbJ215LWFjY291bnQvcmV0dXJuLXJlcXVlc3QvOnJldHVybkNvZGUnXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IHJldHVybkNvZGU6ICdybWEnIH0sXG4gIH0sXG4gIGNvdXBvbnM6IHsgcGF0aHM6IFsnbXktYWNjb3VudC9jb3Vwb25zJ10gfSxcbiAgY291cG9uQ2xhaW06IHtcbiAgICBwYXRoczogWydteS1hY2NvdW50L2NvdXBvbi9jbGFpbS86Y291cG9uQ29kZSddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgY291cG9uQ29kZTogJ2NvZGUnIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFJvdXRpbmdDb25maWc6IFJvdXRpbmdDb25maWcgPSB7XG4gIHJvdXRpbmc6IHtcbiAgICByb3V0ZXM6IGRlZmF1bHRTdG9yZWZyb250Um91dGVzQ29uZmlnLFxuICB9LFxufTtcbiJdfQ==