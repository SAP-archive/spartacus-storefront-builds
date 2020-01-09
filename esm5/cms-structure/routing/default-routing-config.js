/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var defaultStorefrontRoutesConfig = {
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
    orderGuest: {
        paths: ['guest/order/:orderCode'],
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
export var defaultRoutingConfig = {
    routing: {
        routes: defaultStorefrontRoutesConfig,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1yb3V0aW5nLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcm91dGluZy9kZWZhdWx0LXJvdXRpbmctY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxLQUFPLDZCQUE2QixHQUFpQjtJQUN6RCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNyQixRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRTtJQUNsQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTs7SUFHekIsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtJQUM3QyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUU7SUFDekQsY0FBYyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsdUJBQXVCLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFO0lBQ3RFLGFBQWEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtJQUMvRCxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTtJQUM3QixhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO0lBRTVDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO0lBQ2pDLHVCQUF1QixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsMkJBQTJCLENBQUMsRUFBRTtJQUNqRSxvQkFBb0IsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7SUFDM0Qsc0JBQXNCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxFQUFFO0lBQy9ELG1CQUFtQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsdUJBQXVCLENBQUMsRUFBRTtJQUN6RCxpQkFBaUIsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLG9CQUFvQixDQUFDLEVBQUU7O0lBR3BELE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFO0lBQ3BDLFFBQVEsRUFBRTtRQUNSLEtBQUssRUFBRSxDQUFDLHdCQUF3QixDQUFDO1FBQ2pDLGFBQWEsRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUU7S0FDeEM7SUFDRCxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFFOztJQUdwRCxPQUFPLEVBQUU7UUFDUCxLQUFLLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztRQUNyQyxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO0tBQ3ZDO0lBRUQsa0JBQWtCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO0lBQ3ZELFlBQVksRUFBRTtRQUNaLEtBQUssRUFBRSxDQUFDLDZCQUE2QixDQUFDO1FBQ3RDLGFBQWEsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7S0FDckM7SUFDRCxVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztRQUNqQyxhQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0tBQ3JDO0lBQ0QsTUFBTSxFQUFFO1FBQ04sS0FBSyxFQUFFLENBQUMsbUJBQW1CLENBQUM7S0FDN0I7SUFDRCxXQUFXLEVBQUU7UUFDWCxLQUFLLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztRQUM3QyxhQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0tBQ3JDO0lBQ0QsdUJBQXVCLEVBQUU7UUFDdkIsS0FBSyxFQUFFLENBQUMsaURBQWlELENBQUM7UUFDMUQsYUFBYSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtLQUNyQztJQUNELFdBQVcsRUFBRTtRQUNYLEtBQUssRUFBRSxDQUFDLG9DQUFvQyxDQUFDO1FBQzdDLGFBQWEsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7S0FDckM7SUFDRCx1QkFBdUIsRUFBRTtRQUN2QixLQUFLLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQztRQUMxRCxhQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0tBQ3JDO0lBQ0Qsb0JBQW9CLEVBQUU7UUFDcEIsS0FBSyxFQUFFLENBQUMsdUNBQXVDLENBQUM7UUFDaEQsYUFBYSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTtLQUNyQztDQUNGOztBQUVELE1BQU0sS0FBTyxvQkFBb0IsR0FBa0I7SUFDakQsT0FBTyxFQUFFO1FBQ1AsTUFBTSxFQUFFLDZCQUE2QjtLQUN0QztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzQ29uZmlnLCBSb3V0aW5nQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTdG9yZWZyb250Um91dGVzQ29uZmlnOiBSb3V0ZXNDb25maWcgPSB7XG4gIGhvbWU6IHsgcGF0aHM6IFsnJ10gfSxcbiAgbm90Rm91bmQ6IHsgcGF0aHM6IFsnbm90LWZvdW5kJ10gfSxcbiAgY2FydDogeyBwYXRoczogWydjYXJ0J10gfSxcblxuICAvLyBzZW1hbnRpYyBsaW5rcyBmb3IgbG9naW4gcmVsYXRlZCBwYWdlc1xuICBsb2dpbjogeyBwYXRoczogWydsb2dpbiddLCBwcm90ZWN0ZWQ6IGZhbHNlIH0sXG4gIHJlZ2lzdGVyOiB7IHBhdGhzOiBbJ2xvZ2luL3JlZ2lzdGVyJ10sIHByb3RlY3RlZDogZmFsc2UgfSxcbiAgZm9yZ290UGFzc3dvcmQ6IHsgcGF0aHM6IFsnbG9naW4vZm9yZ290LXBhc3N3b3JkJ10sIHByb3RlY3RlZDogZmFsc2UgfSxcbiAgcmVzZXRQYXNzd29yZDogeyBwYXRoczogWydsb2dpbi9wdy9jaGFuZ2UnXSwgcHJvdGVjdGVkOiBmYWxzZSB9LFxuICBsb2dvdXQ6IHsgcGF0aHM6IFsnbG9nb3V0J10gfSxcbiAgY2hlY2tvdXRMb2dpbjogeyBwYXRoczogWydjaGVja291dC1sb2dpbiddIH0sXG5cbiAgY2hlY2tvdXQ6IHsgcGF0aHM6IFsnY2hlY2tvdXQnXSB9LFxuICBjaGVja291dFNoaXBwaW5nQWRkcmVzczogeyBwYXRoczogWydjaGVja291dC9zaGlwcGluZy1hZGRyZXNzJ10gfSxcbiAgY2hlY2tvdXREZWxpdmVyeU1vZGU6IHsgcGF0aHM6IFsnY2hlY2tvdXQvZGVsaXZlcnktbW9kZSddIH0sXG4gIGNoZWNrb3V0UGF5bWVudERldGFpbHM6IHsgcGF0aHM6IFsnY2hlY2tvdXQvcGF5bWVudC1kZXRhaWxzJ10gfSxcbiAgY2hlY2tvdXRSZXZpZXdPcmRlcjogeyBwYXRoczogWydjaGVja291dC9yZXZpZXctb3JkZXInXSB9LFxuICBvcmRlckNvbmZpcm1hdGlvbjogeyBwYXRoczogWydvcmRlci1jb25maXJtYXRpb24nXSB9LFxuXG4gIC8vIHBscCByb3V0ZXNcbiAgc2VhcmNoOiB7IHBhdGhzOiBbJ3NlYXJjaC86cXVlcnknXSB9LFxuICBjYXRlZ29yeToge1xuICAgIHBhdGhzOiBbJ2NhdGVnb3J5LzpjYXRlZ29yeUNvZGUnXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IGNhdGVnb3J5Q29kZTogJ2NvZGUnIH0sXG4gIH0sXG4gIGJyYW5kOiB7IHBhdGhzOiBbJ0JyYW5kcy86YnJhbmROYW1lL2MvOmJyYW5kQ29kZSddIH0sXG5cbiAgLy8gcGRwIHJvdXRlc1xuICBwcm9kdWN0OiB7XG4gICAgcGF0aHM6IFsncHJvZHVjdC86cHJvZHVjdENvZGUvOm5hbWUnXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IHByb2R1Y3RDb2RlOiAnY29kZScgfSxcbiAgfSxcblxuICB0ZXJtc0FuZENvbmRpdGlvbnM6IHsgcGF0aHM6IFsndGVybXMtYW5kLWNvbmRpdGlvbnMnXSB9LFxuICBvcmRlckRldGFpbHM6IHtcbiAgICBwYXRoczogWydteS1hY2NvdW50L29yZGVyLzpvcmRlckNvZGUnXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IG9yZGVyQ29kZTogJ2NvZGUnIH0sXG4gIH0sXG4gIG9yZGVyR3Vlc3Q6IHtcbiAgICBwYXRoczogWydndWVzdC9vcmRlci86b3JkZXJDb2RlJ10sXG4gICAgcGFyYW1zTWFwcGluZzogeyBvcmRlckNvZGU6ICdjb2RlJyB9LFxuICB9LFxuICBvcmRlcnM6IHtcbiAgICBwYXRoczogWydteS1hY2NvdW50L29yZGVycyddLFxuICB9LFxuICBvcmRlclJldHVybjoge1xuICAgIHBhdGhzOiBbJ215LWFjY291bnQvb3JkZXIvOm9yZGVyQ29kZS9yZXR1cm4nXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IG9yZGVyQ29kZTogJ2NvZGUnIH0sXG4gIH0sXG4gIG9yZGVyUmV0dXJuQ29uZmlybWF0aW9uOiB7XG4gICAgcGF0aHM6IFsnbXktYWNjb3VudC9vcmRlci86b3JkZXJDb2RlL3JldHVybi9jb25maXJtYXRpb24nXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IG9yZGVyQ29kZTogJ2NvZGUnIH0sXG4gIH0sXG4gIG9yZGVyQ2FuY2VsOiB7XG4gICAgcGF0aHM6IFsnbXktYWNjb3VudC9vcmRlci86b3JkZXJDb2RlL2NhbmNlbCddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgb3JkZXJDb2RlOiAnY29kZScgfSxcbiAgfSxcbiAgb3JkZXJDYW5jZWxDb25maXJtYXRpb246IHtcbiAgICBwYXRoczogWydteS1hY2NvdW50L29yZGVyLzpvcmRlckNvZGUvY2FuY2VsL2NvbmZpcm1hdGlvbiddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgb3JkZXJDb2RlOiAnY29kZScgfSxcbiAgfSxcbiAgcmV0dXJuUmVxdWVzdERldGFpbHM6IHtcbiAgICBwYXRoczogWydteS1hY2NvdW50L3JldHVybi1yZXF1ZXN0LzpyZXR1cm5Db2RlJ10sXG4gICAgcGFyYW1zTWFwcGluZzogeyByZXR1cm5Db2RlOiAncm1hJyB9LFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRSb3V0aW5nQ29uZmlnOiBSb3V0aW5nQ29uZmlnID0ge1xuICByb3V0aW5nOiB7XG4gICAgcm91dGVzOiBkZWZhdWx0U3RvcmVmcm9udFJvdXRlc0NvbmZpZyxcbiAgfSxcbn07XG4iXX0=