/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CheckoutStepType } from '../model/checkout-step.model';
import { DeliveryModePreferences } from './checkout-config';
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
        guest: false,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1jaGVja291dC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb25maWcvZGVmYXVsdC1jaGVja291dC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBa0IsdUJBQXVCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFNUUsTUFBTSxLQUFPLHFCQUFxQixHQUFtQjtJQUNuRCxRQUFRLEVBQUU7UUFDUixLQUFLLEVBQUU7WUFDTDtnQkFDRSxFQUFFLEVBQUUsaUJBQWlCO2dCQUNyQixJQUFJLEVBQUUsa0NBQWtDO2dCQUN4QyxTQUFTLEVBQUUseUJBQXlCO2dCQUNwQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQzthQUMxQztZQUNEO2dCQUNFLEVBQUUsRUFBRSxjQUFjO2dCQUNsQixJQUFJLEVBQUUsK0JBQStCO2dCQUNyQyxTQUFTLEVBQUUsc0JBQXNCO2dCQUNqQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7YUFDdkM7WUFDRDtnQkFDRSxFQUFFLEVBQUUsZ0JBQWdCO2dCQUNwQixJQUFJLEVBQUUsaUNBQWlDO2dCQUN2QyxTQUFTLEVBQUUsd0JBQXdCO2dCQUNuQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7YUFDekM7WUFDRDtnQkFDRSxFQUFFLEVBQUUsYUFBYTtnQkFDakIsSUFBSSxFQUFFLDhCQUE4QjtnQkFDcEMsU0FBUyxFQUFFLHFCQUFxQjtnQkFDaEMsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO2FBQ3RDO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsS0FBSztRQUNkLG1CQUFtQixFQUFFLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDO1FBQ25ELEtBQUssRUFBRSxLQUFLO0tBQ2I7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoZWNrb3V0U3RlcFR5cGUgfSBmcm9tICcuLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnLCBEZWxpdmVyeU1vZGVQcmVmZXJlbmNlcyB9IGZyb20gJy4vY2hlY2tvdXQtY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRDaGVja291dENvbmZpZzogQ2hlY2tvdXRDb25maWcgPSB7XG4gIGNoZWNrb3V0OiB7XG4gICAgc3RlcHM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdzaGlwcGluZ0FkZHJlc3MnLFxuICAgICAgICBuYW1lOiAnY2hlY2tvdXRQcm9ncmVzcy5zaGlwcGluZ0FkZHJlc3MnLFxuICAgICAgICByb3V0ZU5hbWU6ICdjaGVja291dFNoaXBwaW5nQWRkcmVzcycsXG4gICAgICAgIHR5cGU6IFtDaGVja291dFN0ZXBUeXBlLlNISVBQSU5HX0FERFJFU1NdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdkZWxpdmVyeU1vZGUnLFxuICAgICAgICBuYW1lOiAnY2hlY2tvdXRQcm9ncmVzcy5kZWxpdmVyeU1vZGUnLFxuICAgICAgICByb3V0ZU5hbWU6ICdjaGVja291dERlbGl2ZXJ5TW9kZScsXG4gICAgICAgIHR5cGU6IFtDaGVja291dFN0ZXBUeXBlLkRFTElWRVJZX01PREVdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdwYXltZW50RGV0YWlscycsXG4gICAgICAgIG5hbWU6ICdjaGVja291dFByb2dyZXNzLnBheW1lbnREZXRhaWxzJyxcbiAgICAgICAgcm91dGVOYW1lOiAnY2hlY2tvdXRQYXltZW50RGV0YWlscycsXG4gICAgICAgIHR5cGU6IFtDaGVja291dFN0ZXBUeXBlLlBBWU1FTlRfREVUQUlMU10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ3Jldmlld09yZGVyJyxcbiAgICAgICAgbmFtZTogJ2NoZWNrb3V0UHJvZ3Jlc3MucmV2aWV3T3JkZXInLFxuICAgICAgICByb3V0ZU5hbWU6ICdjaGVja291dFJldmlld09yZGVyJyxcbiAgICAgICAgdHlwZTogW0NoZWNrb3V0U3RlcFR5cGUuUkVWSUVXX09SREVSXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBleHByZXNzOiBmYWxzZSxcbiAgICBkZWZhdWx0RGVsaXZlcnlNb2RlOiBbRGVsaXZlcnlNb2RlUHJlZmVyZW5jZXMuRlJFRV0sXG4gICAgZ3Vlc3Q6IGZhbHNlLFxuICB9LFxufTtcbiJdfQ==