import { CheckoutStepType } from '../model/checkout-step.model';
import { DeliveryModePreferences } from './checkout-config';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1jaGVja291dC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb25maWcvZGVmYXVsdC1jaGVja291dC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFrQix1QkFBdUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTVFLE1BQU0sQ0FBQyxJQUFNLHFCQUFxQixHQUFtQjtJQUNuRCxRQUFRLEVBQUU7UUFDUixLQUFLLEVBQUU7WUFDTDtnQkFDRSxFQUFFLEVBQUUsaUJBQWlCO2dCQUNyQixJQUFJLEVBQUUsa0NBQWtDO2dCQUN4QyxTQUFTLEVBQUUseUJBQXlCO2dCQUNwQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQzthQUMxQztZQUNEO2dCQUNFLEVBQUUsRUFBRSxjQUFjO2dCQUNsQixJQUFJLEVBQUUsK0JBQStCO2dCQUNyQyxTQUFTLEVBQUUsc0JBQXNCO2dCQUNqQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7YUFDdkM7WUFDRDtnQkFDRSxFQUFFLEVBQUUsZ0JBQWdCO2dCQUNwQixJQUFJLEVBQUUsaUNBQWlDO2dCQUN2QyxTQUFTLEVBQUUsd0JBQXdCO2dCQUNuQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7YUFDekM7WUFDRDtnQkFDRSxFQUFFLEVBQUUsYUFBYTtnQkFDakIsSUFBSSxFQUFFLDhCQUE4QjtnQkFDcEMsU0FBUyxFQUFFLHFCQUFxQjtnQkFDaEMsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO2FBQ3RDO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsS0FBSztRQUNkLG1CQUFtQixFQUFFLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDO1FBQ25ELEtBQUssRUFBRSxLQUFLO0tBQ2I7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hlY2tvdXRTdGVwVHlwZSB9IGZyb20gJy4uL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWcsIERlbGl2ZXJ5TW9kZVByZWZlcmVuY2VzIH0gZnJvbSAnLi9jaGVja291dC1jb25maWcnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdENoZWNrb3V0Q29uZmlnOiBDaGVja291dENvbmZpZyA9IHtcbiAgY2hlY2tvdXQ6IHtcbiAgICBzdGVwczogW1xuICAgICAge1xuICAgICAgICBpZDogJ3NoaXBwaW5nQWRkcmVzcycsXG4gICAgICAgIG5hbWU6ICdjaGVja291dFByb2dyZXNzLnNoaXBwaW5nQWRkcmVzcycsXG4gICAgICAgIHJvdXRlTmFtZTogJ2NoZWNrb3V0U2hpcHBpbmdBZGRyZXNzJyxcbiAgICAgICAgdHlwZTogW0NoZWNrb3V0U3RlcFR5cGUuU0hJUFBJTkdfQUREUkVTU10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ2RlbGl2ZXJ5TW9kZScsXG4gICAgICAgIG5hbWU6ICdjaGVja291dFByb2dyZXNzLmRlbGl2ZXJ5TW9kZScsXG4gICAgICAgIHJvdXRlTmFtZTogJ2NoZWNrb3V0RGVsaXZlcnlNb2RlJyxcbiAgICAgICAgdHlwZTogW0NoZWNrb3V0U3RlcFR5cGUuREVMSVZFUllfTU9ERV0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ3BheW1lbnREZXRhaWxzJyxcbiAgICAgICAgbmFtZTogJ2NoZWNrb3V0UHJvZ3Jlc3MucGF5bWVudERldGFpbHMnLFxuICAgICAgICByb3V0ZU5hbWU6ICdjaGVja291dFBheW1lbnREZXRhaWxzJyxcbiAgICAgICAgdHlwZTogW0NoZWNrb3V0U3RlcFR5cGUuUEFZTUVOVF9ERVRBSUxTXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAncmV2aWV3T3JkZXInLFxuICAgICAgICBuYW1lOiAnY2hlY2tvdXRQcm9ncmVzcy5yZXZpZXdPcmRlcicsXG4gICAgICAgIHJvdXRlTmFtZTogJ2NoZWNrb3V0UmV2aWV3T3JkZXInLFxuICAgICAgICB0eXBlOiBbQ2hlY2tvdXRTdGVwVHlwZS5SRVZJRVdfT1JERVJdLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGV4cHJlc3M6IGZhbHNlLFxuICAgIGRlZmF1bHREZWxpdmVyeU1vZGU6IFtEZWxpdmVyeU1vZGVQcmVmZXJlbmNlcy5GUkVFXSxcbiAgICBndWVzdDogZmFsc2UsXG4gIH0sXG59O1xuIl19