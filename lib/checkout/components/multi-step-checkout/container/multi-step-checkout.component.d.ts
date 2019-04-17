import { OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CheckoutService, RoutingService, GlobalMessageService, CartService, CartDataService, PaymentDetails, Address, Cart } from '@spartacus/core';
import { Subscription, Observable } from 'rxjs';
import { CheckoutNavBarItem } from './checkout-navigation-bar';
export declare class MultiStepCheckoutComponent implements OnInit, OnDestroy {
    protected checkoutService: CheckoutService;
    protected cartService: CartService;
    protected cartDataService: CartDataService;
    protected routingService: RoutingService;
    protected globalMessageService: GlobalMessageService;
    protected cd: ChangeDetectorRef;
    step: number;
    done: boolean;
    deliveryAddress: Address;
    paymentDetails: PaymentDetails;
    shippingMethod: string;
    subscriptions: Subscription[];
    cart$: Observable<Cart>;
    tAndCToggler: boolean;
    navs: CheckoutNavBarItem[];
    constructor(checkoutService: CheckoutService, cartService: CartService, cartDataService: CartDataService, routingService: RoutingService, globalMessageService: GlobalMessageService, cd: ChangeDetectorRef);
    private refreshCart;
    ngOnInit(): void;
    processSteps(): void;
    setStep(backStep: number): void;
    nextStep(step: number): void;
    addAddress({ newAddress, address, }: {
        newAddress: boolean;
        address: Address;
    }): void;
    setDeliveryMode({ deliveryModeId }: {
        deliveryModeId: string;
    }): void;
    addPaymentInfo({ newPayment, payment, billingAddress, }: {
        newPayment: boolean;
        payment: PaymentDetails;
        billingAddress: Address;
    }): void;
    placeOrder(): void;
    toggleTAndC(): void;
    initializeCheckoutNavBar(): CheckoutNavBarItem[];
    clearCheckoutNavBar(): void;
    ngOnDestroy(): void;
}
