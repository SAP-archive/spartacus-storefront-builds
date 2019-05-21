/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CheckoutStepType } from '../model/checkout-step.model';
/** @type {?} */
export const defaultCheckoutConfig = {
    checkout: {
        steps: [
            {
                id: 'shippingAddress',
                name: 'checkoutProgress.shippingAddress',
                route: 'checkoutShippingAddress',
                type: [CheckoutStepType.shippingAddress],
            },
            {
                id: 'deliveryMode',
                name: 'checkoutProgress.deliveryMode',
                route: 'checkoutDeliveryMode',
                type: [CheckoutStepType.deliveryMode],
            },
            {
                id: 'paymentDetails',
                name: 'checkoutProgress.paymentDetails',
                route: 'checkoutPaymentDetails',
                type: [CheckoutStepType.paymentDetails],
            },
            {
                id: 'reviewOrder',
                name: 'checkoutProgress.reviewOrder',
                route: 'checkoutReviewOrder',
                type: [CheckoutStepType.reviewOrder],
            },
        ],
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1jaGVja291dC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29uZmlnL2RlZmF1bHQtY2hlY2tvdXQtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFFaEUsTUFBTSxPQUFPLHFCQUFxQixHQUFtQjtJQUNuRCxRQUFRLEVBQUU7UUFDUixLQUFLLEVBQUU7WUFDTDtnQkFDRSxFQUFFLEVBQUUsaUJBQWlCO2dCQUNyQixJQUFJLEVBQUUsa0NBQWtDO2dCQUN4QyxLQUFLLEVBQUUseUJBQXlCO2dCQUNoQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7YUFDekM7WUFDRDtnQkFDRSxFQUFFLEVBQUUsY0FBYztnQkFDbEIsSUFBSSxFQUFFLCtCQUErQjtnQkFDckMsS0FBSyxFQUFFLHNCQUFzQjtnQkFDN0IsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO2FBQ3RDO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLGdCQUFnQjtnQkFDcEIsSUFBSSxFQUFFLGlDQUFpQztnQkFDdkMsS0FBSyxFQUFFLHdCQUF3QjtnQkFDL0IsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO2FBQ3hDO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLGFBQWE7Z0JBQ2pCLElBQUksRUFBRSw4QkFBOEI7Z0JBQ3BDLEtBQUssRUFBRSxxQkFBcUI7Z0JBQzVCLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQzthQUNyQztTQUNGO0tBQ0Y7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoZWNrb3V0Q29uZmlnIH0gZnJvbSAnLi9jaGVja291dC1jb25maWcnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwVHlwZSB9IGZyb20gJy4uL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdENoZWNrb3V0Q29uZmlnOiBDaGVja291dENvbmZpZyA9IHtcbiAgY2hlY2tvdXQ6IHtcbiAgICBzdGVwczogW1xuICAgICAge1xuICAgICAgICBpZDogJ3NoaXBwaW5nQWRkcmVzcycsXG4gICAgICAgIG5hbWU6ICdjaGVja291dFByb2dyZXNzLnNoaXBwaW5nQWRkcmVzcycsXG4gICAgICAgIHJvdXRlOiAnY2hlY2tvdXRTaGlwcGluZ0FkZHJlc3MnLFxuICAgICAgICB0eXBlOiBbQ2hlY2tvdXRTdGVwVHlwZS5zaGlwcGluZ0FkZHJlc3NdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdkZWxpdmVyeU1vZGUnLFxuICAgICAgICBuYW1lOiAnY2hlY2tvdXRQcm9ncmVzcy5kZWxpdmVyeU1vZGUnLFxuICAgICAgICByb3V0ZTogJ2NoZWNrb3V0RGVsaXZlcnlNb2RlJyxcbiAgICAgICAgdHlwZTogW0NoZWNrb3V0U3RlcFR5cGUuZGVsaXZlcnlNb2RlXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAncGF5bWVudERldGFpbHMnLFxuICAgICAgICBuYW1lOiAnY2hlY2tvdXRQcm9ncmVzcy5wYXltZW50RGV0YWlscycsXG4gICAgICAgIHJvdXRlOiAnY2hlY2tvdXRQYXltZW50RGV0YWlscycsXG4gICAgICAgIHR5cGU6IFtDaGVja291dFN0ZXBUeXBlLnBheW1lbnREZXRhaWxzXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAncmV2aWV3T3JkZXInLFxuICAgICAgICBuYW1lOiAnY2hlY2tvdXRQcm9ncmVzcy5yZXZpZXdPcmRlcicsXG4gICAgICAgIHJvdXRlOiAnY2hlY2tvdXRSZXZpZXdPcmRlcicsXG4gICAgICAgIHR5cGU6IFtDaGVja291dFN0ZXBUeXBlLnJldmlld09yZGVyXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn07XG4iXX0=