import { GlobalMessageService, OrderEntry, RoutingService, UserOrderService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderDetailsService } from '../../order-details/order-details.service';
import { AmendOrderType } from '../amend-order.model';
import { OrderAmendService } from '../amend-order.service';
import * as ɵngcc0 from '@angular/core';
export declare class OrderCancellationService extends OrderAmendService {
    protected orderDetailsService: OrderDetailsService;
    protected userOrderService: UserOrderService;
    protected routing: RoutingService;
    protected globalMessageService: GlobalMessageService;
    amendType: AmendOrderType;
    constructor(orderDetailsService: OrderDetailsService, userOrderService: UserOrderService, routing: RoutingService, globalMessageService: GlobalMessageService);
    /**
     * Return cancellable order entries.
     */
    getEntries(): Observable<OrderEntry[]>;
    save(): void;
    private afterSave;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderCancellationService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY2FuY2VsbGF0aW9uLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsib3JkZXItY2FuY2VsbGF0aW9uLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVNlcnZpY2UsIE9yZGVyRW50cnksIFJvdXRpbmdTZXJ2aWNlLCBVc2VyT3JkZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMuc2VydmljZSc7XG5pbXBvcnQgeyBBbWVuZE9yZGVyVHlwZSB9IGZyb20gJy4uL2FtZW5kLW9yZGVyLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyQW1lbmRTZXJ2aWNlIH0gZnJvbSAnLi4vYW1lbmQtb3JkZXIuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPcmRlckNhbmNlbGxhdGlvblNlcnZpY2UgZXh0ZW5kcyBPcmRlckFtZW5kU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIG9yZGVyRGV0YWlsc1NlcnZpY2U6IE9yZGVyRGV0YWlsc1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHVzZXJPcmRlclNlcnZpY2U6IFVzZXJPcmRlclNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2U7XG4gICAgYW1lbmRUeXBlOiBBbWVuZE9yZGVyVHlwZTtcbiAgICBjb25zdHJ1Y3RvcihvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlLCB1c2VyT3JkZXJTZXJ2aWNlOiBVc2VyT3JkZXJTZXJ2aWNlLCByb3V0aW5nOiBSb3V0aW5nU2VydmljZSwgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gY2FuY2VsbGFibGUgb3JkZXIgZW50cmllcy5cbiAgICAgKi9cbiAgICBnZXRFbnRyaWVzKCk6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPjtcbiAgICBzYXZlKCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBhZnRlclNhdmU7XG59XG4iXX0=