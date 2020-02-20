import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CancelOrReturnRequestEntryInput, GlobalMessageService, GlobalMessageType, OrderEntry, OrderReturnRequestService, RoutingService, } from '@spartacus/core';
import { filter, first, map } from 'rxjs/operators';
import { OrderDetailsService } from '../../order-details/order-details.service';
import { AmendOrderType } from '../amend-order.model';
import { OrderAmendService } from '../amend-order.service';
import * as i0 from "@angular/core";
import * as i1 from "../../order-details/order-details.service";
import * as i2 from "@spartacus/core";
let OrderReturnService = class OrderReturnService extends OrderAmendService {
    constructor(orderDetailsService, returnRequestService, routing, globalMessageService) {
        super(orderDetailsService);
        this.orderDetailsService = orderDetailsService;
        this.returnRequestService = returnRequestService;
        this.routing = routing;
        this.globalMessageService = globalMessageService;
        this.amendType = AmendOrderType.RETURN;
    }
    getEntries() {
        return this.getOrder().pipe(filter(order => !!order.entries), map(order => order.entries.filter(entry => entry.entryNumber !== -1 && entry.returnableQuantity > 0)));
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
        this.returnRequestService.createOrderReturnRequest({
            orderCode,
            returnRequestEntryInputs: inputs,
        });
        this.returnRequestService
            .getReturnRequestSuccess()
            .pipe(first(Boolean))
            .subscribe(() => this.afterSave());
    }
    afterSave() {
        this.returnRequestService
            .getOrderReturnRequest()
            .pipe(first(r => !!r))
            .subscribe(returnRequest => {
            const rma = returnRequest.rma;
            this.globalMessageService.add({
                key: 'orderDetails.cancellationAndReturn.returnSuccess',
                params: { rma },
            }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            this.routing.go({
                cxRoute: 'returnRequestDetails',
                params: { rma },
            });
        });
    }
};
OrderReturnService.ctorParameters = () => [
    { type: OrderDetailsService },
    { type: OrderReturnRequestService },
    { type: RoutingService },
    { type: GlobalMessageService }
];
OrderReturnService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OrderReturnService_Factory() { return new OrderReturnService(i0.ɵɵinject(i1.OrderDetailsService), i0.ɵɵinject(i2.OrderReturnRequestService), i0.ɵɵinject(i2.RoutingService), i0.ɵɵinject(i2.GlobalMessageService)); }, token: OrderReturnService, providedIn: "root" });
OrderReturnService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OrderReturnService);
export { OrderReturnService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvcmV0dXJucy9vcmRlci1yZXR1cm4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsK0JBQStCLEVBQy9CLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsVUFBVSxFQUNWLHlCQUF5QixFQUN6QixjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFLM0QsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBbUIsU0FBUSxpQkFBaUI7SUFHdkQsWUFDWSxtQkFBd0MsRUFDeEMsb0JBQStDLEVBQy9DLE9BQXVCLEVBQ3ZCLG9CQUEwQztRQUVwRCxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUxqQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBMkI7UUFDL0MsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQU50RCxjQUFTLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQVNsQyxDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FDekIsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFDaEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ1YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQ2xCLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUNsRSxDQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQzVDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUN4QyxNQUFNLE1BQU0sR0FBc0MsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDbkUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQVMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2RCxHQUFHLENBQ0YsV0FBVyxDQUFDLEVBQUUsQ0FDWixDQUFDO1lBQ0MsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUNyQyxRQUFRLEVBQVUsT0FBTyxDQUFDLFdBQVcsQ0FBQztTQUNILENBQUEsQ0FDeEMsQ0FBQztRQUVKLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLHdCQUF3QixDQUFDO1lBQ2pELFNBQVM7WUFDVCx3QkFBd0IsRUFBRSxNQUFNO1NBQ2pDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxvQkFBb0I7YUFDdEIsdUJBQXVCLEVBQUU7YUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNwQixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVPLFNBQVM7UUFDZixJQUFJLENBQUMsb0JBQW9CO2FBQ3RCLHFCQUFxQixFQUFFO2FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDckIsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3pCLE1BQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUM7WUFDOUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0I7Z0JBQ0UsR0FBRyxFQUFFLGtEQUFrRDtnQkFDdkQsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFO2FBQ2hCLEVBQ0QsaUJBQWlCLENBQUMscUJBQXFCLENBQ3hDLENBQUM7WUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDZCxPQUFPLEVBQUUsc0JBQXNCO2dCQUMvQixNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUU7YUFDaEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0YsQ0FBQTs7WUFoRWtDLG1CQUFtQjtZQUNsQix5QkFBeUI7WUFDdEMsY0FBYztZQUNELG9CQUFvQjs7O0FBUDNDLGtCQUFrQjtJQUg5QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csa0JBQWtCLENBb0U5QjtTQXBFWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDYW5jZWxPclJldHVyblJlcXVlc3RFbnRyeUlucHV0LFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIE9yZGVyRW50cnksXG4gIE9yZGVyUmV0dXJuUmVxdWVzdFNlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBmaXJzdCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU2VydmljZSB9IGZyb20gJy4uLy4uL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcbmltcG9ydCB7IEFtZW5kT3JkZXJUeXBlIH0gZnJvbSAnLi4vYW1lbmQtb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJBbWVuZFNlcnZpY2UgfSBmcm9tICcuLi9hbWVuZC1vcmRlci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyUmV0dXJuU2VydmljZSBleHRlbmRzIE9yZGVyQW1lbmRTZXJ2aWNlIHtcbiAgYW1lbmRUeXBlID0gQW1lbmRPcmRlclR5cGUuUkVUVVJOO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByZXR1cm5SZXF1ZXN0U2VydmljZTogT3JkZXJSZXR1cm5SZXF1ZXN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHtcbiAgICBzdXBlcihvcmRlckRldGFpbHNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRPcmRlcigpLnBpcGUoXG4gICAgICBmaWx0ZXIob3JkZXIgPT4gISFvcmRlci5lbnRyaWVzKSxcbiAgICAgIG1hcChvcmRlciA9PlxuICAgICAgICBvcmRlci5lbnRyaWVzLmZpbHRlcihcbiAgICAgICAgICBlbnRyeSA9PiBlbnRyeS5lbnRyeU51bWJlciAhPT0gLTEgJiYgZW50cnkucmV0dXJuYWJsZVF1YW50aXR5ID4gMFxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHNhdmUoKTogdm9pZCB7XG4gICAgY29uc3Qgb3JkZXJDb2RlID0gdGhpcy5mb3JtLnZhbHVlLm9yZGVyQ29kZTtcbiAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5mb3JtLnZhbHVlLmVudHJpZXM7XG4gICAgY29uc3QgaW5wdXRzOiBDYW5jZWxPclJldHVyblJlcXVlc3RFbnRyeUlucHV0W10gPSBPYmplY3Qua2V5cyhlbnRyaWVzKVxuICAgICAgLmZpbHRlcihlbnRyeU51bWJlciA9PiA8bnVtYmVyPmVudHJpZXNbZW50cnlOdW1iZXJdID4gMClcbiAgICAgIC5tYXAoXG4gICAgICAgIGVudHJ5TnVtYmVyID0+XG4gICAgICAgICAgKHtcbiAgICAgICAgICAgIG9yZGVyRW50cnlOdW1iZXI6IE51bWJlcihlbnRyeU51bWJlciksXG4gICAgICAgICAgICBxdWFudGl0eTogPG51bWJlcj5lbnRyaWVzW2VudHJ5TnVtYmVyXSxcbiAgICAgICAgICB9IGFzIENhbmNlbE9yUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXQpXG4gICAgICApO1xuXG4gICAgdGhpcy5mb3JtLnJlc2V0KCk7XG5cbiAgICB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlLmNyZWF0ZU9yZGVyUmV0dXJuUmVxdWVzdCh7XG4gICAgICBvcmRlckNvZGUsXG4gICAgICByZXR1cm5SZXF1ZXN0RW50cnlJbnB1dHM6IGlucHV0cyxcbiAgICB9KTtcblxuICAgIHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2VcbiAgICAgIC5nZXRSZXR1cm5SZXF1ZXN0U3VjY2VzcygpXG4gICAgICAucGlwZShmaXJzdChCb29sZWFuKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hZnRlclNhdmUoKSk7XG4gIH1cblxuICBwcml2YXRlIGFmdGVyU2F2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlXG4gICAgICAuZ2V0T3JkZXJSZXR1cm5SZXF1ZXN0KClcbiAgICAgIC5waXBlKGZpcnN0KHIgPT4gISFyKSlcbiAgICAgIC5zdWJzY3JpYmUocmV0dXJuUmVxdWVzdCA9PiB7XG4gICAgICAgIGNvbnN0IHJtYSA9IHJldHVyblJlcXVlc3Qucm1hO1xuICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6ICdvcmRlckRldGFpbHMuY2FuY2VsbGF0aW9uQW5kUmV0dXJuLnJldHVyblN1Y2Nlc3MnLFxuICAgICAgICAgICAgcGFyYW1zOiB7IHJtYSB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucm91dGluZy5nbyh7XG4gICAgICAgICAgY3hSb3V0ZTogJ3JldHVyblJlcXVlc3REZXRhaWxzJyxcbiAgICAgICAgICBwYXJhbXM6IHsgcm1hIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==