/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var defaultStorefrontRoutesConfig = {
    home: { paths: [''] },
    cart: { paths: ['cart'] },
    search: { paths: ['search/:query'] },
    // semantic links for login related pages
    login: { paths: ['login'] },
    logout: { paths: ['logout'] },
    register: { paths: ['login/register'] },
    forgotPassword: { paths: ['login/forgot-password'] },
    checkout: { paths: ['checkout'] },
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
export var defaultRoutingConfig = {
    routing: {
        routes: defaultStorefrontRoutesConfig,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1yb3V0aW5nLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9wYWdlcy9kZWZhdWx0LXJvdXRpbmctY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxLQUFPLDZCQUE2QixHQUFpQjtJQUN6RCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNyQixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUN6QixNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRTs7SUFHcEMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7SUFDM0IsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUU7SUFDN0IsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtJQUN2QyxjQUFjLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO0lBRXBELFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO0lBQ2pDLGlCQUFpQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsb0JBQW9CLENBQUMsRUFBRTtJQUNwRCxPQUFPLEVBQUU7UUFDUCxLQUFLLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztRQUMvQixhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO0tBQ3ZDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsS0FBSyxFQUFFLENBQUMsd0JBQXdCLENBQUM7UUFDakMsYUFBYSxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRTtLQUN4QztJQUNELEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLGdDQUFnQyxDQUFDLEVBQUU7SUFDcEQsa0JBQWtCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO0lBQ3JELFlBQVksRUFBRTtRQUNaLEtBQUssRUFBRSxDQUFDLDhCQUE4QixDQUFDO1FBQ3ZDLGFBQWEsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7S0FDckM7Q0FDRjs7QUFFRCxNQUFNLEtBQU8sb0JBQW9CLEdBQWtCO0lBQ2pELE9BQU8sRUFBRTtRQUNQLE1BQU0sRUFBRSw2QkFBNkI7S0FDdEM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlc0NvbmZpZywgUm91dGluZ0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RvcmVmcm9udFJvdXRlc0NvbmZpZzogUm91dGVzQ29uZmlnID0ge1xuICBob21lOiB7IHBhdGhzOiBbJyddIH0sXG4gIGNhcnQ6IHsgcGF0aHM6IFsnY2FydCddIH0sXG4gIHNlYXJjaDogeyBwYXRoczogWydzZWFyY2gvOnF1ZXJ5J10gfSxcblxuICAvLyBzZW1hbnRpYyBsaW5rcyBmb3IgbG9naW4gcmVsYXRlZCBwYWdlc1xuICBsb2dpbjogeyBwYXRoczogWydsb2dpbiddIH0sXG4gIGxvZ291dDogeyBwYXRoczogWydsb2dvdXQnXSB9LFxuICByZWdpc3RlcjogeyBwYXRoczogWydsb2dpbi9yZWdpc3RlciddIH0sXG4gIGZvcmdvdFBhc3N3b3JkOiB7IHBhdGhzOiBbJ2xvZ2luL2ZvcmdvdC1wYXNzd29yZCddIH0sXG5cbiAgY2hlY2tvdXQ6IHsgcGF0aHM6IFsnY2hlY2tvdXQnXSB9LFxuICBvcmRlckNvbmZpcm1hdGlvbjogeyBwYXRoczogWydvcmRlci1jb25maXJtYXRpb24nXSB9LFxuICBwcm9kdWN0OiB7XG4gICAgcGF0aHM6IFsncHJvZHVjdC86cHJvZHVjdENvZGUnXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IHByb2R1Y3RDb2RlOiAnY29kZScgfSxcbiAgfSxcbiAgY2F0ZWdvcnk6IHtcbiAgICBwYXRoczogWydjYXRlZ29yeS86Y2F0ZWdvcnlDb2RlJ10sXG4gICAgcGFyYW1zTWFwcGluZzogeyBjYXRlZ29yeUNvZGU6ICdjb2RlJyB9LFxuICB9LFxuICBicmFuZDogeyBwYXRoczogWydCcmFuZHMvOmJyYW5kTmFtZS9jLzpicmFuZENvZGUnXSB9LFxuICB0ZXJtc0FuZENvbmRpdGlvbnM6IHsgcGF0aHM6IFsndGVybXNBbmRDb25kaXRpb25zJ10gfSxcbiAgb3JkZXJEZXRhaWxzOiB7XG4gICAgcGF0aHM6IFsnbXktYWNjb3VudC9vcmRlcnMvOm9yZGVyQ29kZSddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgb3JkZXJDb2RlOiAnY29kZScgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0Um91dGluZ0NvbmZpZzogUm91dGluZ0NvbmZpZyA9IHtcbiAgcm91dGluZzoge1xuICAgIHJvdXRlczogZGVmYXVsdFN0b3JlZnJvbnRSb3V0ZXNDb25maWcsXG4gIH0sXG59O1xuIl19