import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, Address, PaymentDetails, DeliveryMode } from '@spartacus/core';
import { Card } from '../../../../ui/components/card/card.component';
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
