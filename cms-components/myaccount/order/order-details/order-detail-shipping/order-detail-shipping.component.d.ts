import { OnInit } from '@angular/core';
import { Address, DeliveryMode, Order, PaymentDetails } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Card } from '../../../../../shared/components/card/card.component';
import { OrderDetailsService } from '../order-details.service';
export declare class OrderDetailShippingComponent implements OnInit {
    private orderDetailsService;
    constructor(orderDetailsService: OrderDetailsService);
    order$: Observable<Order>;
    ngOnInit(): void;
    getAddressCardContent(address: Address): Card;
    getBillingAddressCardContent(billingAddress: Address): Card;
    getPaymentCardContent(payment: PaymentDetails): Card;
    getShippingMethodCardContent(shipping: DeliveryMode): Card;
}
