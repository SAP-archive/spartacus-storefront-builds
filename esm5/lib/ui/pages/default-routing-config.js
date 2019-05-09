/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var defaultStorefrontRoutesConfig = {
    home: { paths: [''] },
    cart: { paths: ['cart'] },
    search: { paths: ['search/:query'] },
    login: { paths: ['login'] },
    register: { paths: ['register'] },
    resetPassword: { paths: ['login/pw/change'] },
    forgotPassword: { paths: ['forgot-password'] },
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
    orders: { paths: ['my-account/orders'] },
    orderDetails: {
        paths: ['my-account/orders/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    addressBook: { paths: ['my-account/address-book'] },
    updatePassword: { paths: ['my-account/update-password'] },
    paymentManagement: { paths: ['my-account/payment-details'] },
    updateEmail: { paths: ['my-account/update-email'] },
    updateProfile: { paths: ['my-account/update-profile'] },
    closeAccount: { paths: ['my-account/close-account'] },
};
/** @type {?} */
export var defaultRoutingConfig = {
    routing: {
        routes: defaultStorefrontRoutesConfig,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1yb3V0aW5nLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9wYWdlcy9kZWZhdWx0LXJvdXRpbmctY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxLQUFPLDZCQUE2QixHQUFpQjtJQUN6RCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNyQixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUN6QixNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRTtJQUNwQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRTtJQUMzQixRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRTtJQUNqQyxhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO0lBQzdDLGNBQWMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7SUFDOUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7SUFDakMsaUJBQWlCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO0lBQ3BELE9BQU8sRUFBRTtRQUNQLEtBQUssRUFBRSxDQUFDLHNCQUFzQixDQUFDO1FBQy9CLGFBQWEsRUFBRSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7S0FDdkM7SUFDRCxRQUFRLEVBQUU7UUFDUixLQUFLLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztRQUNqQyxhQUFhLEVBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFO0tBQ3hDO0lBQ0QsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsZ0NBQWdDLENBQUMsRUFBRTtJQUNwRCxrQkFBa0IsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLG9CQUFvQixDQUFDLEVBQUU7SUFDckQsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBRTtJQUN4QyxZQUFZLEVBQUU7UUFDWixLQUFLLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztRQUN2QyxhQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0tBQ3JDO0lBQ0QsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMseUJBQXlCLENBQUMsRUFBRTtJQUNuRCxjQUFjLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFO0lBQ3pELGlCQUFpQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsNEJBQTRCLENBQUMsRUFBRTtJQUM1RCxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFO0lBQ25ELGFBQWEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLDJCQUEyQixDQUFDLEVBQUU7SUFDdkQsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsMEJBQTBCLENBQUMsRUFBRTtDQUN0RDs7QUFFRCxNQUFNLEtBQU8sb0JBQW9CLEdBQWtCO0lBQ2pELE9BQU8sRUFBRTtRQUNQLE1BQU0sRUFBRSw2QkFBNkI7S0FDdEM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRpbmdDb25maWcsIFJvdXRlc0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RvcmVmcm9udFJvdXRlc0NvbmZpZzogUm91dGVzQ29uZmlnID0ge1xuICBob21lOiB7IHBhdGhzOiBbJyddIH0sXG4gIGNhcnQ6IHsgcGF0aHM6IFsnY2FydCddIH0sXG4gIHNlYXJjaDogeyBwYXRoczogWydzZWFyY2gvOnF1ZXJ5J10gfSxcbiAgbG9naW46IHsgcGF0aHM6IFsnbG9naW4nXSB9LFxuICByZWdpc3RlcjogeyBwYXRoczogWydyZWdpc3RlciddIH0sXG4gIHJlc2V0UGFzc3dvcmQ6IHsgcGF0aHM6IFsnbG9naW4vcHcvY2hhbmdlJ10gfSxcbiAgZm9yZ290UGFzc3dvcmQ6IHsgcGF0aHM6IFsnZm9yZ290LXBhc3N3b3JkJ10gfSxcbiAgY2hlY2tvdXQ6IHsgcGF0aHM6IFsnY2hlY2tvdXQnXSB9LFxuICBvcmRlckNvbmZpcm1hdGlvbjogeyBwYXRoczogWydvcmRlci1jb25maXJtYXRpb24nXSB9LFxuICBwcm9kdWN0OiB7XG4gICAgcGF0aHM6IFsncHJvZHVjdC86cHJvZHVjdENvZGUnXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IHByb2R1Y3RDb2RlOiAnY29kZScgfSxcbiAgfSxcbiAgY2F0ZWdvcnk6IHtcbiAgICBwYXRoczogWydjYXRlZ29yeS86Y2F0ZWdvcnlDb2RlJ10sXG4gICAgcGFyYW1zTWFwcGluZzogeyBjYXRlZ29yeUNvZGU6ICdjb2RlJyB9LFxuICB9LFxuICBicmFuZDogeyBwYXRoczogWydCcmFuZHMvOmJyYW5kTmFtZS9jLzpicmFuZENvZGUnXSB9LFxuICB0ZXJtc0FuZENvbmRpdGlvbnM6IHsgcGF0aHM6IFsndGVybXNBbmRDb25kaXRpb25zJ10gfSxcbiAgb3JkZXJzOiB7IHBhdGhzOiBbJ215LWFjY291bnQvb3JkZXJzJ10gfSxcbiAgb3JkZXJEZXRhaWxzOiB7XG4gICAgcGF0aHM6IFsnbXktYWNjb3VudC9vcmRlcnMvOm9yZGVyQ29kZSddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgb3JkZXJDb2RlOiAnY29kZScgfSxcbiAgfSxcbiAgYWRkcmVzc0Jvb2s6IHsgcGF0aHM6IFsnbXktYWNjb3VudC9hZGRyZXNzLWJvb2snXSB9LFxuICB1cGRhdGVQYXNzd29yZDogeyBwYXRoczogWydteS1hY2NvdW50L3VwZGF0ZS1wYXNzd29yZCddIH0sXG4gIHBheW1lbnRNYW5hZ2VtZW50OiB7IHBhdGhzOiBbJ215LWFjY291bnQvcGF5bWVudC1kZXRhaWxzJ10gfSxcbiAgdXBkYXRlRW1haWw6IHsgcGF0aHM6IFsnbXktYWNjb3VudC91cGRhdGUtZW1haWwnXSB9LFxuICB1cGRhdGVQcm9maWxlOiB7IHBhdGhzOiBbJ215LWFjY291bnQvdXBkYXRlLXByb2ZpbGUnXSB9LFxuICBjbG9zZUFjY291bnQ6IHsgcGF0aHM6IFsnbXktYWNjb3VudC9jbG9zZS1hY2NvdW50J10gfSxcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0Um91dGluZ0NvbmZpZzogUm91dGluZ0NvbmZpZyA9IHtcbiAgcm91dGluZzoge1xuICAgIHJvdXRlczogZGVmYXVsdFN0b3JlZnJvbnRSb3V0ZXNDb25maWcsXG4gIH0sXG59O1xuIl19