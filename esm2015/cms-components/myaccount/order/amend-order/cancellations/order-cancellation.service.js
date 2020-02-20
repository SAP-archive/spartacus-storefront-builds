import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CancelOrReturnRequestEntryInput, GlobalMessageService, GlobalMessageType, OrderEntry, RoutingService, UserOrderService, } from '@spartacus/core';
import { filter, first, map } from 'rxjs/operators';
import { OrderDetailsService } from '../../order-details/order-details.service';
import { AmendOrderType } from '../amend-order.model';
import { OrderAmendService } from '../amend-order.service';
import * as i0 from "@angular/core";
import * as i1 from "../../order-details/order-details.service";
import * as i2 from "@spartacus/core";
let OrderCancellationService = class OrderCancellationService extends OrderAmendService {
    constructor(orderDetailsService, userOrderService, routing, globalMessageService) {
        super(orderDetailsService);
        this.orderDetailsService = orderDetailsService;
        this.userOrderService = userOrderService;
        this.routing = routing;
        this.globalMessageService = globalMessageService;
        this.amendType = AmendOrderType.CANCEL;
    }
    /**
     * Return cancellable order entries.
     */
    getEntries() {
        return this.getOrder().pipe(filter(order => Boolean(order)), map(order => order.entries.filter(entry => entry.entryNumber !== -1 && entry.cancellableQuantity > 0)));
    }
    save() {
        const orderCode = this.form.value.orderCode;
        const entries = this.form.value.entries;
        const inputs = Object.keys(entries)
            .filter(entryNumber => entries[entryNumber] > 0)
            .map(entryNumber => ({
            orderEntryNumber: Number(entryNumber),
            quantity: entries[entryNumber],
        }));
        this.form.reset();
        this.userOrderService.cancelOrder(orderCode, {
            cancellationRequestEntryInputs: inputs,
        });
        this.userOrderService
            .getCancelOrderSuccess()
            .pipe(first(Boolean))
            .subscribe(() => this.afterSave(orderCode));
    }
    afterSave(orderCode) {
        this.userOrderService.resetCancelOrderProcessState();
        this.globalMessageService.add({
            key: 'orderDetails.cancellationAndReturn.cancelSuccess',
            params: { orderCode },
        }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        this.routing.go({
            cxRoute: 'orders',
        });
    }
};
OrderCancellationService.ctorParameters = () => [
    { type: OrderDetailsService },
    { type: UserOrderService },
    { type: RoutingService },
    { type: GlobalMessageService }
];
OrderCancellationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OrderCancellationService_Factory() { return new OrderCancellationService(i0.ɵɵinject(i1.OrderDetailsService), i0.ɵɵinject(i2.UserOrderService), i0.ɵɵinject(i2.RoutingService), i0.ɵɵinject(i2.GlobalMessageService)); }, token: OrderCancellationService, providedIn: "root" });
OrderCancellationService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OrderCancellationService);
export { OrderCancellationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY2FuY2VsbGF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvY2FuY2VsbGF0aW9ucy9vcmRlci1jYW5jZWxsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsK0JBQStCLEVBQy9CLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsVUFBVSxFQUNWLGNBQWMsRUFDZCxnQkFBZ0IsR0FDakIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFLM0QsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBeUIsU0FBUSxpQkFBaUI7SUFHN0QsWUFDWSxtQkFBd0MsRUFDeEMsZ0JBQWtDLEVBQ2xDLE9BQXVCLEVBQ3ZCLG9CQUEwQztRQUVwRCxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUxqQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQU50RCxjQUFTLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQVNsQyxDQUFDO0lBQ0Q7O09BRUc7SUFDSCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUN6QixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDL0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ1YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQ2xCLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUNuRSxDQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQzVDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUN4QyxNQUFNLE1BQU0sR0FBc0MsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDbkUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQVMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2RCxHQUFHLENBQ0YsV0FBVyxDQUFDLEVBQUUsQ0FDWixDQUFDO1lBQ0MsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUNyQyxRQUFRLEVBQVUsT0FBTyxDQUFDLFdBQVcsQ0FBQztTQUNILENBQUEsQ0FDeEMsQ0FBQztRQUVKLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDM0MsOEJBQThCLEVBQUUsTUFBTTtTQUN2QyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCO2FBQ2xCLHFCQUFxQixFQUFFO2FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDcEIsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU8sU0FBUyxDQUFDLFNBQWlCO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCO1lBQ0UsR0FBRyxFQUFFLGtEQUFrRDtZQUN2RCxNQUFNLEVBQUUsRUFBRSxTQUFTLEVBQUU7U0FDdEIsRUFDRCxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FDeEMsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ2QsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7O1lBM0RrQyxtQkFBbUI7WUFDdEIsZ0JBQWdCO1lBQ3pCLGNBQWM7WUFDRCxvQkFBb0I7OztBQVAzQyx3QkFBd0I7SUFIcEMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHdCQUF3QixDQStEcEM7U0EvRFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dCxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBPcmRlckVudHJ5LFxuICBSb3V0aW5nU2VydmljZSxcbiAgVXNlck9yZGVyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZmlyc3QsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMuc2VydmljZSc7XG5pbXBvcnQgeyBBbWVuZE9yZGVyVHlwZSB9IGZyb20gJy4uL2FtZW5kLW9yZGVyLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyQW1lbmRTZXJ2aWNlIH0gZnJvbSAnLi4vYW1lbmQtb3JkZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckNhbmNlbGxhdGlvblNlcnZpY2UgZXh0ZW5kcyBPcmRlckFtZW5kU2VydmljZSB7XG4gIGFtZW5kVHlwZSA9IEFtZW5kT3JkZXJUeXBlLkNBTkNFTDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgb3JkZXJEZXRhaWxzU2VydmljZTogT3JkZXJEZXRhaWxzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlck9yZGVyU2VydmljZTogVXNlck9yZGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHtcbiAgICBzdXBlcihvcmRlckRldGFpbHNTZXJ2aWNlKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIGNhbmNlbGxhYmxlIG9yZGVyIGVudHJpZXMuXG4gICAqL1xuICBnZXRFbnRyaWVzKCk6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0T3JkZXIoKS5waXBlKFxuICAgICAgZmlsdGVyKG9yZGVyID0+IEJvb2xlYW4ob3JkZXIpKSxcbiAgICAgIG1hcChvcmRlciA9PlxuICAgICAgICBvcmRlci5lbnRyaWVzLmZpbHRlcihcbiAgICAgICAgICBlbnRyeSA9PiBlbnRyeS5lbnRyeU51bWJlciAhPT0gLTEgJiYgZW50cnkuY2FuY2VsbGFibGVRdWFudGl0eSA+IDBcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBzYXZlKCk6IHZvaWQge1xuICAgIGNvbnN0IG9yZGVyQ29kZSA9IHRoaXMuZm9ybS52YWx1ZS5vcmRlckNvZGU7XG4gICAgY29uc3QgZW50cmllcyA9IHRoaXMuZm9ybS52YWx1ZS5lbnRyaWVzO1xuICAgIGNvbnN0IGlucHV0czogQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dFtdID0gT2JqZWN0LmtleXMoZW50cmllcylcbiAgICAgIC5maWx0ZXIoZW50cnlOdW1iZXIgPT4gPG51bWJlcj5lbnRyaWVzW2VudHJ5TnVtYmVyXSA+IDApXG4gICAgICAubWFwKFxuICAgICAgICBlbnRyeU51bWJlciA9PlxuICAgICAgICAgICh7XG4gICAgICAgICAgICBvcmRlckVudHJ5TnVtYmVyOiBOdW1iZXIoZW50cnlOdW1iZXIpLFxuICAgICAgICAgICAgcXVhbnRpdHk6IDxudW1iZXI+ZW50cmllc1tlbnRyeU51bWJlcl0sXG4gICAgICAgICAgfSBhcyBDYW5jZWxPclJldHVyblJlcXVlc3RFbnRyeUlucHV0KVxuICAgICAgKTtcblxuICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuXG4gICAgdGhpcy51c2VyT3JkZXJTZXJ2aWNlLmNhbmNlbE9yZGVyKG9yZGVyQ29kZSwge1xuICAgICAgY2FuY2VsbGF0aW9uUmVxdWVzdEVudHJ5SW5wdXRzOiBpbnB1dHMsXG4gICAgfSk7XG5cbiAgICB0aGlzLnVzZXJPcmRlclNlcnZpY2VcbiAgICAgIC5nZXRDYW5jZWxPcmRlclN1Y2Nlc3MoKVxuICAgICAgLnBpcGUoZmlyc3QoQm9vbGVhbikpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuYWZ0ZXJTYXZlKG9yZGVyQ29kZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZnRlclNhdmUob3JkZXJDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJPcmRlclNlcnZpY2UucmVzZXRDYW5jZWxPcmRlclByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAge1xuICAgICAgICBrZXk6ICdvcmRlckRldGFpbHMuY2FuY2VsbGF0aW9uQW5kUmV0dXJuLmNhbmNlbFN1Y2Nlc3MnLFxuICAgICAgICBwYXJhbXM6IHsgb3JkZXJDb2RlIH0sXG4gICAgICB9LFxuICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgKTtcbiAgICB0aGlzLnJvdXRpbmcuZ28oe1xuICAgICAgY3hSb3V0ZTogJ29yZGVycycsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==