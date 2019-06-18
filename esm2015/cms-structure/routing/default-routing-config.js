/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1yb3V0aW5nLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcm91dGluZy9kZWZhdWx0LXJvdXRpbmctY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxPQUFPLDZCQUE2QixHQUFpQjtJQUN6RCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNyQixRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRTtJQUNsQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTs7SUFHekIsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7SUFDM0IsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUU7SUFDN0IsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtJQUN2QyxjQUFjLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO0lBRXBELFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO0lBQ2pDLHVCQUF1QixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsMkJBQTJCLENBQUMsRUFBRTtJQUNqRSxvQkFBb0IsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7SUFDM0Qsc0JBQXNCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxFQUFFO0lBQy9ELG1CQUFtQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsdUJBQXVCLENBQUMsRUFBRTtJQUN6RCxpQkFBaUIsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLG9CQUFvQixDQUFDLEVBQUU7O0lBR3BELE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFO0lBQ3BDLFFBQVEsRUFBRTtRQUNSLEtBQUssRUFBRSxDQUFDLHdCQUF3QixDQUFDO1FBQ2pDLGFBQWEsRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUU7S0FDeEM7SUFDRCxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFFOztJQUdwRCxPQUFPLEVBQUU7UUFDUCxLQUFLLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztRQUNyQyxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO0tBQ3ZDO0lBRUQsa0JBQWtCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO0lBQ3ZELFlBQVksRUFBRTtRQUNaLEtBQUssRUFBRSxDQUFDLDZCQUE2QixDQUFDO1FBQ3RDLGFBQWEsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7S0FDckM7SUFDRCxNQUFNLEVBQUU7UUFDTixLQUFLLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztLQUM3QjtDQUNGOztBQUVELE1BQU0sT0FBTyxvQkFBb0IsR0FBa0I7SUFDakQsT0FBTyxFQUFFO1FBQ1AsTUFBTSxFQUFFLDZCQUE2QjtLQUN0QztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzQ29uZmlnLCBSb3V0aW5nQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTdG9yZWZyb250Um91dGVzQ29uZmlnOiBSb3V0ZXNDb25maWcgPSB7XG4gIGhvbWU6IHsgcGF0aHM6IFsnJ10gfSxcbiAgbm90Rm91bmQ6IHsgcGF0aHM6IFsnbm90LWZvdW5kJ10gfSxcbiAgY2FydDogeyBwYXRoczogWydjYXJ0J10gfSxcblxuICAvLyBzZW1hbnRpYyBsaW5rcyBmb3IgbG9naW4gcmVsYXRlZCBwYWdlc1xuICBsb2dpbjogeyBwYXRoczogWydsb2dpbiddIH0sXG4gIGxvZ291dDogeyBwYXRoczogWydsb2dvdXQnXSB9LFxuICByZWdpc3RlcjogeyBwYXRoczogWydsb2dpbi9yZWdpc3RlciddIH0sXG4gIGZvcmdvdFBhc3N3b3JkOiB7IHBhdGhzOiBbJ2xvZ2luL2ZvcmdvdC1wYXNzd29yZCddIH0sXG5cbiAgY2hlY2tvdXQ6IHsgcGF0aHM6IFsnY2hlY2tvdXQnXSB9LFxuICBjaGVja291dFNoaXBwaW5nQWRkcmVzczogeyBwYXRoczogWydjaGVja291dC9zaGlwcGluZy1hZGRyZXNzJ10gfSxcbiAgY2hlY2tvdXREZWxpdmVyeU1vZGU6IHsgcGF0aHM6IFsnY2hlY2tvdXQvZGVsaXZlcnktbW9kZSddIH0sXG4gIGNoZWNrb3V0UGF5bWVudERldGFpbHM6IHsgcGF0aHM6IFsnY2hlY2tvdXQvcGF5bWVudC1kZXRhaWxzJ10gfSxcbiAgY2hlY2tvdXRSZXZpZXdPcmRlcjogeyBwYXRoczogWydjaGVja291dC9yZXZpZXctb3JkZXInXSB9LFxuICBvcmRlckNvbmZpcm1hdGlvbjogeyBwYXRoczogWydvcmRlci1jb25maXJtYXRpb24nXSB9LFxuXG4gIC8vIHBscCByb3V0ZXNcbiAgc2VhcmNoOiB7IHBhdGhzOiBbJ3NlYXJjaC86cXVlcnknXSB9LFxuICBjYXRlZ29yeToge1xuICAgIHBhdGhzOiBbJ2NhdGVnb3J5LzpjYXRlZ29yeUNvZGUnXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IGNhdGVnb3J5Q29kZTogJ2NvZGUnIH0sXG4gIH0sXG4gIGJyYW5kOiB7IHBhdGhzOiBbJ0JyYW5kcy86YnJhbmROYW1lL2MvOmJyYW5kQ29kZSddIH0sXG5cbiAgLy8gcGRwIHJvdXRlc1xuICBwcm9kdWN0OiB7XG4gICAgcGF0aHM6IFsncHJvZHVjdC86cHJvZHVjdENvZGUvOm5hbWUnXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IHByb2R1Y3RDb2RlOiAnY29kZScgfSxcbiAgfSxcblxuICB0ZXJtc0FuZENvbmRpdGlvbnM6IHsgcGF0aHM6IFsndGVybXMtYW5kLWNvbmRpdGlvbnMnXSB9LFxuICBvcmRlckRldGFpbHM6IHtcbiAgICBwYXRoczogWydteS1hY2NvdW50L29yZGVyLzpvcmRlckNvZGUnXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IG9yZGVyQ29kZTogJ2NvZGUnIH0sXG4gIH0sXG4gIG9yZGVyczoge1xuICAgIHBhdGhzOiBbJ215LWFjY291bnQvb3JkZXJzJ10sXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFJvdXRpbmdDb25maWc6IFJvdXRpbmdDb25maWcgPSB7XG4gIHJvdXRpbmc6IHtcbiAgICByb3V0ZXM6IGRlZmF1bHRTdG9yZWZyb250Um91dGVzQ29uZmlnLFxuICB9LFxufTtcbiJdfQ==