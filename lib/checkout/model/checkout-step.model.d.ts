export declare enum CheckoutStepType {
    SHIPPING_ADDRESS = "shippingAddress",
    DELIVERY_MODE = "deliveryMode",
    PAYMENT_DETAILS = "paymentDetails",
    REVIEW_ORDER = "reviewOrder"
}
export interface CheckoutStep {
    id: string;
    name: string;
    routeName: string;
    type: Array<CheckoutStepType>;
}
