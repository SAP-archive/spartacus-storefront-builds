/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const defaultStorefrontRoutesConfig = {
    home: { paths: [''] },
    cart: { paths: ['cart'] },
    search: { paths: ['search/:query'] },
    // semantic links for login related pages
    login: { paths: ['login'] },
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
export const defaultRoutingConfig = {
    routing: {
        routes: defaultStorefrontRoutesConfig,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1yb3V0aW5nLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9wYWdlcy9kZWZhdWx0LXJvdXRpbmctY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxPQUFPLDZCQUE2QixHQUFpQjtJQUN6RCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNyQixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUN6QixNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRTs7SUFHcEMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7SUFDM0IsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtJQUN2QyxjQUFjLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO0lBRXBELFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO0lBQ2pDLGlCQUFpQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsb0JBQW9CLENBQUMsRUFBRTtJQUNwRCxPQUFPLEVBQUU7UUFDUCxLQUFLLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztRQUMvQixhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO0tBQ3ZDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsS0FBSyxFQUFFLENBQUMsd0JBQXdCLENBQUM7UUFDakMsYUFBYSxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRTtLQUN4QztJQUNELEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLGdDQUFnQyxDQUFDLEVBQUU7SUFDcEQsa0JBQWtCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO0lBQ3JELFlBQVksRUFBRTtRQUNaLEtBQUssRUFBRSxDQUFDLDhCQUE4QixDQUFDO1FBQ3ZDLGFBQWEsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7S0FDckM7Q0FDRjs7QUFFRCxNQUFNLE9BQU8sb0JBQW9CLEdBQWtCO0lBQ2pELE9BQU8sRUFBRTtRQUNQLE1BQU0sRUFBRSw2QkFBNkI7S0FDdEM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlc0NvbmZpZywgUm91dGluZ0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RvcmVmcm9udFJvdXRlc0NvbmZpZzogUm91dGVzQ29uZmlnID0ge1xuICBob21lOiB7IHBhdGhzOiBbJyddIH0sXG4gIGNhcnQ6IHsgcGF0aHM6IFsnY2FydCddIH0sXG4gIHNlYXJjaDogeyBwYXRoczogWydzZWFyY2gvOnF1ZXJ5J10gfSxcblxuICAvLyBzZW1hbnRpYyBsaW5rcyBmb3IgbG9naW4gcmVsYXRlZCBwYWdlc1xuICBsb2dpbjogeyBwYXRoczogWydsb2dpbiddIH0sXG4gIHJlZ2lzdGVyOiB7IHBhdGhzOiBbJ2xvZ2luL3JlZ2lzdGVyJ10gfSxcbiAgZm9yZ290UGFzc3dvcmQ6IHsgcGF0aHM6IFsnbG9naW4vZm9yZ290LXBhc3N3b3JkJ10gfSxcblxuICBjaGVja291dDogeyBwYXRoczogWydjaGVja291dCddIH0sXG4gIG9yZGVyQ29uZmlybWF0aW9uOiB7IHBhdGhzOiBbJ29yZGVyLWNvbmZpcm1hdGlvbiddIH0sXG4gIHByb2R1Y3Q6IHtcbiAgICBwYXRoczogWydwcm9kdWN0Lzpwcm9kdWN0Q29kZSddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgcHJvZHVjdENvZGU6ICdjb2RlJyB9LFxuICB9LFxuICBjYXRlZ29yeToge1xuICAgIHBhdGhzOiBbJ2NhdGVnb3J5LzpjYXRlZ29yeUNvZGUnXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IGNhdGVnb3J5Q29kZTogJ2NvZGUnIH0sXG4gIH0sXG4gIGJyYW5kOiB7IHBhdGhzOiBbJ0JyYW5kcy86YnJhbmROYW1lL2MvOmJyYW5kQ29kZSddIH0sXG4gIHRlcm1zQW5kQ29uZGl0aW9uczogeyBwYXRoczogWyd0ZXJtc0FuZENvbmRpdGlvbnMnXSB9LFxuICBvcmRlckRldGFpbHM6IHtcbiAgICBwYXRoczogWydteS1hY2NvdW50L29yZGVycy86b3JkZXJDb2RlJ10sXG4gICAgcGFyYW1zTWFwcGluZzogeyBvcmRlckNvZGU6ICdjb2RlJyB9LFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRSb3V0aW5nQ29uZmlnOiBSb3V0aW5nQ29uZmlnID0ge1xuICByb3V0aW5nOiB7XG4gICAgcm91dGVzOiBkZWZhdWx0U3RvcmVmcm9udFJvdXRlc0NvbmZpZyxcbiAgfSxcbn07XG4iXX0=