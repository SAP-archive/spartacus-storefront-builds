import { DeliveryModePreferences, } from '../../cms-components/checkout/config/checkout-config';
import { CheckoutStepType } from '../../cms-components/checkout/model/checkout-step.model';
export const defaultB2bCheckoutConfig = {
    checkout: {
        steps: [
            {
                id: 'paymentType',
                name: 'checkoutProgress.methodOfPayment',
                routeName: 'checkoutPaymentType',
                type: [CheckoutStepType.PAYMENT_TYPE],
            },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJiLWNoZWNrb3V0LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInJlY2lwZXMvY29uZmlnL2IyYi1jaGVja291dC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLHVCQUF1QixHQUN4QixNQUFNLHNEQUFzRCxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRTNGLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFtQjtJQUN0RCxRQUFRLEVBQUU7UUFDUixLQUFLLEVBQUU7WUFDTDtnQkFDRSxFQUFFLEVBQUUsYUFBYTtnQkFDakIsSUFBSSxFQUFFLGtDQUFrQztnQkFDeEMsU0FBUyxFQUFFLHFCQUFxQjtnQkFDaEMsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO2FBQ3RDO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLGlCQUFpQjtnQkFDckIsSUFBSSxFQUFFLGtDQUFrQztnQkFDeEMsU0FBUyxFQUFFLHlCQUF5QjtnQkFDcEMsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7YUFDMUM7WUFDRDtnQkFDRSxFQUFFLEVBQUUsY0FBYztnQkFDbEIsSUFBSSxFQUFFLCtCQUErQjtnQkFDckMsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO2FBQ3ZDO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLGdCQUFnQjtnQkFDcEIsSUFBSSxFQUFFLGlDQUFpQztnQkFDdkMsU0FBUyxFQUFFLHdCQUF3QjtnQkFDbkMsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO2FBQ3pDO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLGFBQWE7Z0JBQ2pCLElBQUksRUFBRSw4QkFBOEI7Z0JBQ3BDLFNBQVMsRUFBRSxxQkFBcUI7Z0JBQ2hDLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQzthQUN0QztTQUNGO1FBQ0QsT0FBTyxFQUFFLEtBQUs7UUFDZCxtQkFBbUIsRUFBRSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQztRQUNuRCxLQUFLLEVBQUUsS0FBSztLQUNiO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoZWNrb3V0Q29uZmlnLFxuICBEZWxpdmVyeU1vZGVQcmVmZXJlbmNlcyxcbn0gZnJvbSAnLi4vLi4vY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29uZmlnL2NoZWNrb3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXBUeXBlIH0gZnJvbSAnLi4vLi4vY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0QjJiQ2hlY2tvdXRDb25maWc6IENoZWNrb3V0Q29uZmlnID0ge1xuICBjaGVja291dDoge1xuICAgIHN0ZXBzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAncGF5bWVudFR5cGUnLFxuICAgICAgICBuYW1lOiAnY2hlY2tvdXRQcm9ncmVzcy5tZXRob2RPZlBheW1lbnQnLFxuICAgICAgICByb3V0ZU5hbWU6ICdjaGVja291dFBheW1lbnRUeXBlJyxcbiAgICAgICAgdHlwZTogW0NoZWNrb3V0U3RlcFR5cGUuUEFZTUVOVF9UWVBFXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnc2hpcHBpbmdBZGRyZXNzJyxcbiAgICAgICAgbmFtZTogJ2NoZWNrb3V0UHJvZ3Jlc3Muc2hpcHBpbmdBZGRyZXNzJyxcbiAgICAgICAgcm91dGVOYW1lOiAnY2hlY2tvdXRTaGlwcGluZ0FkZHJlc3MnLFxuICAgICAgICB0eXBlOiBbQ2hlY2tvdXRTdGVwVHlwZS5TSElQUElOR19BRERSRVNTXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnZGVsaXZlcnlNb2RlJyxcbiAgICAgICAgbmFtZTogJ2NoZWNrb3V0UHJvZ3Jlc3MuZGVsaXZlcnlNb2RlJyxcbiAgICAgICAgcm91dGVOYW1lOiAnY2hlY2tvdXREZWxpdmVyeU1vZGUnLFxuICAgICAgICB0eXBlOiBbQ2hlY2tvdXRTdGVwVHlwZS5ERUxJVkVSWV9NT0RFXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAncGF5bWVudERldGFpbHMnLFxuICAgICAgICBuYW1lOiAnY2hlY2tvdXRQcm9ncmVzcy5wYXltZW50RGV0YWlscycsXG4gICAgICAgIHJvdXRlTmFtZTogJ2NoZWNrb3V0UGF5bWVudERldGFpbHMnLFxuICAgICAgICB0eXBlOiBbQ2hlY2tvdXRTdGVwVHlwZS5QQVlNRU5UX0RFVEFJTFNdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdyZXZpZXdPcmRlcicsXG4gICAgICAgIG5hbWU6ICdjaGVja291dFByb2dyZXNzLnJldmlld09yZGVyJyxcbiAgICAgICAgcm91dGVOYW1lOiAnY2hlY2tvdXRSZXZpZXdPcmRlcicsXG4gICAgICAgIHR5cGU6IFtDaGVja291dFN0ZXBUeXBlLlJFVklFV19PUkRFUl0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgZXhwcmVzczogZmFsc2UsXG4gICAgZGVmYXVsdERlbGl2ZXJ5TW9kZTogW0RlbGl2ZXJ5TW9kZVByZWZlcmVuY2VzLkZSRUVdLFxuICAgIGd1ZXN0OiBmYWxzZSxcbiAgfSxcbn07XG4iXX0=