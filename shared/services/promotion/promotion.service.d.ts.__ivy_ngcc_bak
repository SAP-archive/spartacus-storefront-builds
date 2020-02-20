import { OrderEntry, PromotionResult, CartService, CheckoutService, PromotionLocation } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderDetailsService } from '../../../cms-components/myaccount/order/order-details/order-details.service';
export declare class PromotionService {
    protected cartService: CartService;
    protected orderDetailsService: OrderDetailsService;
    protected checkoutService: CheckoutService;
    constructor(cartService: CartService, orderDetailsService: OrderDetailsService, checkoutService: CheckoutService);
    getOrderPromotions(promotionLocation: PromotionLocation): Observable<PromotionResult[]>;
    getOrderPromotionsFromCart(): Observable<PromotionResult[]>;
    private getOrderPromotionsFromCartHelper;
    getOrderPromotionsFromCheckout(): Observable<PromotionResult[]>;
    getOrderPromotionsFromOrder(): Observable<PromotionResult[]>;
    private getOrderPromotionsFromOrderHelper;
    getProductPromotionForEntry(item: OrderEntry, promotionLocation: PromotionLocation): Observable<PromotionResult[]>;
    private getProductPromotion;
    private isConsumedByEntry;
}
