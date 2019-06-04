/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1jaGVja291dC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb25maWcvZGVmYXVsdC1jaGVja291dC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUVoRSxNQUFNLEtBQU8scUJBQXFCLEdBQW1CO0lBQ25ELFFBQVEsRUFBRTtRQUNSLEtBQUssRUFBRTtZQUNMO2dCQUNFLEVBQUUsRUFBRSxpQkFBaUI7Z0JBQ3JCLElBQUksRUFBRSxrQ0FBa0M7Z0JBQ3hDLFNBQVMsRUFBRSx5QkFBeUI7Z0JBQ3BDLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO2FBQzFDO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLGNBQWM7Z0JBQ2xCLElBQUksRUFBRSwrQkFBK0I7Z0JBQ3JDLFNBQVMsRUFBRSxzQkFBc0I7Z0JBQ2pDLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQzthQUN2QztZQUNEO2dCQUNFLEVBQUUsRUFBRSxnQkFBZ0I7Z0JBQ3BCLElBQUksRUFBRSxpQ0FBaUM7Z0JBQ3ZDLFNBQVMsRUFBRSx3QkFBd0I7Z0JBQ25DLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQzthQUN6QztZQUNEO2dCQUNFLEVBQUUsRUFBRSxhQUFhO2dCQUNqQixJQUFJLEVBQUUsOEJBQThCO2dCQUNwQyxTQUFTLEVBQUUscUJBQXFCO2dCQUNoQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7YUFDdEM7U0FDRjtLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGVja291dENvbmZpZyB9IGZyb20gJy4vY2hlY2tvdXQtY29uZmlnJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFR5cGUgfSBmcm9tICcuLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRDaGVja291dENvbmZpZzogQ2hlY2tvdXRDb25maWcgPSB7XG4gIGNoZWNrb3V0OiB7XG4gICAgc3RlcHM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdzaGlwcGluZ0FkZHJlc3MnLFxuICAgICAgICBuYW1lOiAnY2hlY2tvdXRQcm9ncmVzcy5zaGlwcGluZ0FkZHJlc3MnLFxuICAgICAgICByb3V0ZU5hbWU6ICdjaGVja291dFNoaXBwaW5nQWRkcmVzcycsXG4gICAgICAgIHR5cGU6IFtDaGVja291dFN0ZXBUeXBlLlNISVBQSU5HX0FERFJFU1NdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdkZWxpdmVyeU1vZGUnLFxuICAgICAgICBuYW1lOiAnY2hlY2tvdXRQcm9ncmVzcy5kZWxpdmVyeU1vZGUnLFxuICAgICAgICByb3V0ZU5hbWU6ICdjaGVja291dERlbGl2ZXJ5TW9kZScsXG4gICAgICAgIHR5cGU6IFtDaGVja291dFN0ZXBUeXBlLkRFTElWRVJZX01PREVdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdwYXltZW50RGV0YWlscycsXG4gICAgICAgIG5hbWU6ICdjaGVja291dFByb2dyZXNzLnBheW1lbnREZXRhaWxzJyxcbiAgICAgICAgcm91dGVOYW1lOiAnY2hlY2tvdXRQYXltZW50RGV0YWlscycsXG4gICAgICAgIHR5cGU6IFtDaGVja291dFN0ZXBUeXBlLlBBWU1FTlRfREVUQUlMU10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ3Jldmlld09yZGVyJyxcbiAgICAgICAgbmFtZTogJ2NoZWNrb3V0UHJvZ3Jlc3MucmV2aWV3T3JkZXInLFxuICAgICAgICByb3V0ZU5hbWU6ICdjaGVja291dFJldmlld09yZGVyJyxcbiAgICAgICAgdHlwZTogW0NoZWNrb3V0U3RlcFR5cGUuUkVWSUVXX09SREVSXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn07XG4iXX0=