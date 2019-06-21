import { CheckoutStep } from '../model/checkout-step.model';
export declare abstract class CheckoutConfig {
    checkout?: {
        steps: Array<CheckoutStep>;
    };
}
