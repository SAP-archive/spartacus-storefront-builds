export declare enum CheckoutStepType {
    SHIPPING_ADDRESS = "shippingAddress",
    DELIVERY_MODE = "deliveryMode",
    PAYMENT_DETAILS = "paymentDetails",
    REVIEW_ORDER = "reviewOrder",
    PAYMENT_TYPE = "paymentType"
}
export declare const checkoutShippingSteps: CheckoutStepType[];
export declare const checkoutPaymentSteps: CheckoutStepType[];
export interface CheckoutStep {
    id: string;
    name: string;
    routeName: string;
    type: Array<CheckoutStepType>;
    disabled?: boolean;
}
