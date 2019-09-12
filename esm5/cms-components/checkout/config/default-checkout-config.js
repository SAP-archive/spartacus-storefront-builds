/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DeliveryModePreferences } from './checkout-config';
import { CheckoutStepType } from '../model/checkout-step.model';
/** @type {?} */
export var defaultCheckoutConfig = {
    checkout: {
        steps: [
            {
                id: 'shippingAddress',
                name: 'checkoutProgress.shippingAddress',
                routeName: 'checkoutShippingAddress',
                type: [CheckoutStepType.SHIPPING_ADDRESS],
            },
            {
                id: 'deliveryMode',
                name: 'checkoutProgress.deliveryMode',
                routeName: 'checkoutDeliveryMode',
                type: [CheckoutStepType.DELIVERY_MODE],
            },
            {
                id: 'paymentDetails',
                name: 'checkoutProgress.paymentDetails',
                routeName: 'checkoutPaymentDetails',
                type: [CheckoutStepType.PAYMENT_DETAILS],
            },
            {
                id: 'reviewOrder',
                name: 'checkoutProgress.reviewOrder',
                routeName: 'checkoutReviewOrder',
                type: [CheckoutStepType.REVIEW_ORDER],
            },
        ],
        express: false,
        defaultDeliveryMode: [DeliveryModePreferences.FREE],
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1jaGVja291dC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb25maWcvZGVmYXVsdC1jaGVja291dC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBa0IsdUJBQXVCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFFaEUsTUFBTSxLQUFPLHFCQUFxQixHQUFtQjtJQUNuRCxRQUFRLEVBQUU7UUFDUixLQUFLLEVBQUU7WUFDTDtnQkFDRSxFQUFFLEVBQUUsaUJBQWlCO2dCQUNyQixJQUFJLEVBQUUsa0NBQWtDO2dCQUN4QyxTQUFTLEVBQUUseUJBQXlCO2dCQUNwQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQzthQUMxQztZQUNEO2dCQUNFLEVBQUUsRUFBRSxjQUFjO2dCQUNsQixJQUFJLEVBQUUsK0JBQStCO2dCQUNyQyxTQUFTLEVBQUUsc0JBQXNCO2dCQUNqQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7YUFDdkM7WUFDRDtnQkFDRSxFQUFFLEVBQUUsZ0JBQWdCO2dCQUNwQixJQUFJLEVBQUUsaUNBQWlDO2dCQUN2QyxTQUFTLEVBQUUsd0JBQXdCO2dCQUNuQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7YUFDekM7WUFDRDtnQkFDRSxFQUFFLEVBQUUsYUFBYTtnQkFDakIsSUFBSSxFQUFFLDhCQUE4QjtnQkFDcEMsU0FBUyxFQUFFLHFCQUFxQjtnQkFDaEMsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO2FBQ3RDO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsS0FBSztRQUNkLG1CQUFtQixFQUFFLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDO0tBQ3BEO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGVja291dENvbmZpZywgRGVsaXZlcnlNb2RlUHJlZmVyZW5jZXMgfSBmcm9tICcuL2NoZWNrb3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXBUeXBlIH0gZnJvbSAnLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0Q2hlY2tvdXRDb25maWc6IENoZWNrb3V0Q29uZmlnID0ge1xuICBjaGVja291dDoge1xuICAgIHN0ZXBzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAnc2hpcHBpbmdBZGRyZXNzJyxcbiAgICAgICAgbmFtZTogJ2NoZWNrb3V0UHJvZ3Jlc3Muc2hpcHBpbmdBZGRyZXNzJyxcbiAgICAgICAgcm91dGVOYW1lOiAnY2hlY2tvdXRTaGlwcGluZ0FkZHJlc3MnLFxuICAgICAgICB0eXBlOiBbQ2hlY2tvdXRTdGVwVHlwZS5TSElQUElOR19BRERSRVNTXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnZGVsaXZlcnlNb2RlJyxcbiAgICAgICAgbmFtZTogJ2NoZWNrb3V0UHJvZ3Jlc3MuZGVsaXZlcnlNb2RlJyxcbiAgICAgICAgcm91dGVOYW1lOiAnY2hlY2tvdXREZWxpdmVyeU1vZGUnLFxuICAgICAgICB0eXBlOiBbQ2hlY2tvdXRTdGVwVHlwZS5ERUxJVkVSWV9NT0RFXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAncGF5bWVudERldGFpbHMnLFxuICAgICAgICBuYW1lOiAnY2hlY2tvdXRQcm9ncmVzcy5wYXltZW50RGV0YWlscycsXG4gICAgICAgIHJvdXRlTmFtZTogJ2NoZWNrb3V0UGF5bWVudERldGFpbHMnLFxuICAgICAgICB0eXBlOiBbQ2hlY2tvdXRTdGVwVHlwZS5QQVlNRU5UX0RFVEFJTFNdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdyZXZpZXdPcmRlcicsXG4gICAgICAgIG5hbWU6ICdjaGVja291dFByb2dyZXNzLnJldmlld09yZGVyJyxcbiAgICAgICAgcm91dGVOYW1lOiAnY2hlY2tvdXRSZXZpZXdPcmRlcicsXG4gICAgICAgIHR5cGU6IFtDaGVja291dFN0ZXBUeXBlLlJFVklFV19PUkRFUl0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgZXhwcmVzczogZmFsc2UsXG4gICAgZGVmYXVsdERlbGl2ZXJ5TW9kZTogW0RlbGl2ZXJ5TW9kZVByZWZlcmVuY2VzLkZSRUVdLFxuICB9LFxufTtcbiJdfQ==