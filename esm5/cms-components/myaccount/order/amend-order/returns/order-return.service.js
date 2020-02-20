import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { CancelOrReturnRequestEntryInput, GlobalMessageService, GlobalMessageType, OrderEntry, OrderReturnRequestService, RoutingService, } from '@spartacus/core';
import { filter, first, map } from 'rxjs/operators';
import { OrderDetailsService } from '../../order-details/order-details.service';
import { AmendOrderType } from '../amend-order.model';
import { OrderAmendService } from '../amend-order.service';
import * as i0 from "@angular/core";
import * as i1 from "../../order-details/order-details.service";
import * as i2 from "@spartacus/core";
var OrderReturnService = /** @class */ (function (_super) {
    __extends(OrderReturnService, _super);
    function OrderReturnService(orderDetailsService, returnRequestService, routing, globalMessageService) {
        var _this = _super.call(this, orderDetailsService) || this;
        _this.orderDetailsService = orderDetailsService;
        _this.returnRequestService = returnRequestService;
        _this.routing = routing;
        _this.globalMessageService = globalMessageService;
        _this.amendType = AmendOrderType.RETURN;
        return _this;
    }
    OrderReturnService.prototype.getEntries = function () {
        return this.getOrder().pipe(filter(function (order) { return !!order.entries; }), map(function (order) {
            return order.entries.filter(function (entry) { return entry.entryNumber !== -1 && entry.returnableQuantity > 0; });
        }));
    };
    OrderReturnService.prototype.save = function () {
        var _this = this;
        var orderCode = this.form.value.orderCode;
        var entries = this.form.value.entries;
        var inputs = Object.keys(entries)
            .filter(function (entryNumber) { return entries[entryNumber] > 0; })
            .map(function (entryNumber) {
            return ({
                orderEntryNumber: Number(entryNumber),
                quantity: entries[entryNumber],
            });
        });
        this.form.reset();
        this.returnRequestService.createOrderReturnRequest({
            orderCode: orderCode,
            returnRequestEntryInputs: inputs,
        });
        this.returnRequestService
            .getReturnRequestSuccess()
            .pipe(first(Boolean))
            .subscribe(function () { return _this.afterSave(); });
    };
    OrderReturnService.prototype.afterSave = function () {
        var _this = this;
        this.returnRequestService
            .getOrderReturnRequest()
            .pipe(first(function (r) { return !!r; }))
            .subscribe(function (returnRequest) {
            var rma = returnRequest.rma;
            _this.globalMessageService.add({
                key: 'orderDetails.cancellationAndReturn.returnSuccess',
                params: { rma: rma },
            }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            _this.routing.go({
                cxRoute: 'returnRequestDetails',
                params: { rma: rma },
            });
        });
    };
    OrderReturnService.ctorParameters = function () { return [
        { type: OrderDetailsService },
        { type: OrderReturnRequestService },
        { type: RoutingService },
        { type: GlobalMessageService }
    ]; };
    OrderReturnService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OrderReturnService_Factory() { return new OrderReturnService(i0.ɵɵinject(i1.OrderDetailsService), i0.ɵɵinject(i2.OrderReturnRequestService), i0.ɵɵinject(i2.RoutingService), i0.ɵɵinject(i2.GlobalMessageService)); }, token: OrderReturnService, providedIn: "root" });
    OrderReturnService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], OrderReturnService);
    return OrderReturnService;
}(OrderAmendService));
export { OrderReturnService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvcmV0dXJucy9vcmRlci1yZXR1cm4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsK0JBQStCLEVBQy9CLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsVUFBVSxFQUNWLHlCQUF5QixFQUN6QixjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFLM0Q7SUFBd0Msc0NBQWlCO0lBR3ZELDRCQUNZLG1CQUF3QyxFQUN4QyxvQkFBK0MsRUFDL0MsT0FBdUIsRUFDdkIsb0JBQTBDO1FBSnRELFlBTUUsa0JBQU0sbUJBQW1CLENBQUMsU0FDM0I7UUFOVyx5QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBMkI7UUFDL0MsYUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQU50RCxlQUFTLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQzs7SUFTbEMsQ0FBQztJQUVELHVDQUFVLEdBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQ3pCLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFmLENBQWUsQ0FBQyxFQUNoQyxHQUFHLENBQUMsVUFBQSxLQUFLO1lBQ1AsT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FDbEIsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLEVBQXhELENBQXdELENBQ2xFO1FBRkQsQ0FFQyxDQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxpQ0FBSSxHQUFKO1FBQUEsaUJBd0JDO1FBdkJDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUM1QyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDeEMsSUFBTSxNQUFNLEdBQXNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ25FLE1BQU0sQ0FBQyxVQUFBLFdBQVcsSUFBSSxPQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQWhDLENBQWdDLENBQUM7YUFDdkQsR0FBRyxDQUNGLFVBQUEsV0FBVztZQUNULE9BQUEsQ0FBQztnQkFDQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDO2dCQUNyQyxRQUFRLEVBQVUsT0FBTyxDQUFDLFdBQVcsQ0FBQzthQUNILENBQUE7UUFIckMsQ0FHcUMsQ0FDeEMsQ0FBQztRQUVKLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLHdCQUF3QixDQUFDO1lBQ2pELFNBQVMsV0FBQTtZQUNULHdCQUF3QixFQUFFLE1BQU07U0FDakMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLG9CQUFvQjthQUN0Qix1QkFBdUIsRUFBRTthQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3BCLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsRUFBRSxFQUFoQixDQUFnQixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVPLHNDQUFTLEdBQWpCO1FBQUEsaUJBa0JDO1FBakJDLElBQUksQ0FBQyxvQkFBb0I7YUFDdEIscUJBQXFCLEVBQUU7YUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLEVBQUgsQ0FBRyxDQUFDLENBQUM7YUFDckIsU0FBUyxDQUFDLFVBQUEsYUFBYTtZQUN0QixJQUFNLEdBQUcsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCO2dCQUNFLEdBQUcsRUFBRSxrREFBa0Q7Z0JBQ3ZELE1BQU0sRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFO2FBQ2hCLEVBQ0QsaUJBQWlCLENBQUMscUJBQXFCLENBQ3hDLENBQUM7WUFDRixLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDZCxPQUFPLEVBQUUsc0JBQXNCO2dCQUMvQixNQUFNLEVBQUUsRUFBRSxHQUFHLEtBQUEsRUFBRTthQUNoQixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O2dCQS9EZ0MsbUJBQW1CO2dCQUNsQix5QkFBeUI7Z0JBQ3RDLGNBQWM7Z0JBQ0Qsb0JBQW9COzs7SUFQM0Msa0JBQWtCO1FBSDlCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxrQkFBa0IsQ0FvRTlCOzZCQXRGRDtDQXNGQyxBQXBFRCxDQUF3QyxpQkFBaUIsR0FvRXhEO1NBcEVZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhbmNlbE9yUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXQsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgT3JkZXJFbnRyeSxcbiAgT3JkZXJSZXR1cm5SZXF1ZXN0U2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIGZpcnN0LCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQW1lbmRPcmRlclR5cGUgfSBmcm9tICcuLi9hbWVuZC1vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckFtZW5kU2VydmljZSB9IGZyb20gJy4uL2FtZW5kLW9yZGVyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJSZXR1cm5TZXJ2aWNlIGV4dGVuZHMgT3JkZXJBbWVuZFNlcnZpY2Uge1xuICBhbWVuZFR5cGUgPSBBbWVuZE9yZGVyVHlwZS5SRVRVUk47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG9yZGVyRGV0YWlsc1NlcnZpY2U6IE9yZGVyRGV0YWlsc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJldHVyblJlcXVlc3RTZXJ2aWNlOiBPcmRlclJldHVyblJlcXVlc3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKG9yZGVyRGV0YWlsc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0RW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLmdldE9yZGVyKCkucGlwZShcbiAgICAgIGZpbHRlcihvcmRlciA9PiAhIW9yZGVyLmVudHJpZXMpLFxuICAgICAgbWFwKG9yZGVyID0+XG4gICAgICAgIG9yZGVyLmVudHJpZXMuZmlsdGVyKFxuICAgICAgICAgIGVudHJ5ID0+IGVudHJ5LmVudHJ5TnVtYmVyICE9PSAtMSAmJiBlbnRyeS5yZXR1cm5hYmxlUXVhbnRpdHkgPiAwXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgc2F2ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBvcmRlckNvZGUgPSB0aGlzLmZvcm0udmFsdWUub3JkZXJDb2RlO1xuICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmZvcm0udmFsdWUuZW50cmllcztcbiAgICBjb25zdCBpbnB1dHM6IENhbmNlbE9yUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRbXSA9IE9iamVjdC5rZXlzKGVudHJpZXMpXG4gICAgICAuZmlsdGVyKGVudHJ5TnVtYmVyID0+IDxudW1iZXI+ZW50cmllc1tlbnRyeU51bWJlcl0gPiAwKVxuICAgICAgLm1hcChcbiAgICAgICAgZW50cnlOdW1iZXIgPT5cbiAgICAgICAgICAoe1xuICAgICAgICAgICAgb3JkZXJFbnRyeU51bWJlcjogTnVtYmVyKGVudHJ5TnVtYmVyKSxcbiAgICAgICAgICAgIHF1YW50aXR5OiA8bnVtYmVyPmVudHJpZXNbZW50cnlOdW1iZXJdLFxuICAgICAgICAgIH0gYXMgQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dClcbiAgICAgICk7XG5cbiAgICB0aGlzLmZvcm0ucmVzZXQoKTtcblxuICAgIHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2UuY3JlYXRlT3JkZXJSZXR1cm5SZXF1ZXN0KHtcbiAgICAgIG9yZGVyQ29kZSxcbiAgICAgIHJldHVyblJlcXVlc3RFbnRyeUlucHV0czogaW5wdXRzLFxuICAgIH0pO1xuXG4gICAgdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZVxuICAgICAgLmdldFJldHVyblJlcXVlc3RTdWNjZXNzKClcbiAgICAgIC5waXBlKGZpcnN0KEJvb2xlYW4pKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmFmdGVyU2F2ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgYWZ0ZXJTYXZlKCk6IHZvaWQge1xuICAgIHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2VcbiAgICAgIC5nZXRPcmRlclJldHVyblJlcXVlc3QoKVxuICAgICAgLnBpcGUoZmlyc3QociA9PiAhIXIpKVxuICAgICAgLnN1YnNjcmliZShyZXR1cm5SZXF1ZXN0ID0+IHtcbiAgICAgICAgY29uc3Qgcm1hID0gcmV0dXJuUmVxdWVzdC5ybWE7XG4gICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogJ29yZGVyRGV0YWlscy5jYW5jZWxsYXRpb25BbmRSZXR1cm4ucmV0dXJuU3VjY2VzcycsXG4gICAgICAgICAgICBwYXJhbXM6IHsgcm1hIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5yb3V0aW5nLmdvKHtcbiAgICAgICAgICBjeFJvdXRlOiAncmV0dXJuUmVxdWVzdERldGFpbHMnLFxuICAgICAgICAgIHBhcmFtczogeyBybWEgfSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxufVxuIl19