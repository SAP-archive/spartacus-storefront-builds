import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { CancelOrReturnRequestEntryInput, GlobalMessageService, GlobalMessageType, OrderEntry, RoutingService, UserOrderService, } from '@spartacus/core';
import { filter, first, map } from 'rxjs/operators';
import { OrderDetailsService } from '../../order-details/order-details.service';
import { AmendOrderType } from '../amend-order.model';
import { OrderAmendService } from '../amend-order.service';
import * as i0 from "@angular/core";
import * as i1 from "../../order-details/order-details.service";
import * as i2 from "@spartacus/core";
var OrderCancellationService = /** @class */ (function (_super) {
    __extends(OrderCancellationService, _super);
    function OrderCancellationService(orderDetailsService, userOrderService, routing, globalMessageService) {
        var _this = _super.call(this, orderDetailsService) || this;
        _this.orderDetailsService = orderDetailsService;
        _this.userOrderService = userOrderService;
        _this.routing = routing;
        _this.globalMessageService = globalMessageService;
        _this.amendType = AmendOrderType.CANCEL;
        return _this;
    }
    /**
     * Return cancellable order entries.
     */
    OrderCancellationService.prototype.getEntries = function () {
        return this.getOrder().pipe(filter(function (order) { return !!(order === null || order === void 0 ? void 0 : order.entries); }), map(function (order) {
            return order.entries.filter(function (entry) { return entry.entryNumber !== -1 && entry.cancellableQuantity > 0; });
        }));
    };
    OrderCancellationService.prototype.save = function () {
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
        this.userOrderService.cancelOrder(orderCode, {
            cancellationRequestEntryInputs: inputs,
        });
        this.userOrderService
            .getCancelOrderSuccess()
            .pipe(first(Boolean))
            .subscribe(function () { return _this.afterSave(orderCode); });
    };
    OrderCancellationService.prototype.afterSave = function (orderCode) {
        this.userOrderService.resetCancelOrderProcessState();
        this.globalMessageService.add({
            key: 'orderDetails.cancellationAndReturn.cancelSuccess',
            params: { orderCode: orderCode },
        }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        this.routing.go({
            cxRoute: 'orders',
        });
    };
    OrderCancellationService.ctorParameters = function () { return [
        { type: OrderDetailsService },
        { type: UserOrderService },
        { type: RoutingService },
        { type: GlobalMessageService }
    ]; };
    OrderCancellationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OrderCancellationService_Factory() { return new OrderCancellationService(i0.ɵɵinject(i1.OrderDetailsService), i0.ɵɵinject(i2.UserOrderService), i0.ɵɵinject(i2.RoutingService), i0.ɵɵinject(i2.GlobalMessageService)); }, token: OrderCancellationService, providedIn: "root" });
    OrderCancellationService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], OrderCancellationService);
    return OrderCancellationService;
}(OrderAmendService));
export { OrderCancellationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY2FuY2VsbGF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvY2FuY2VsbGF0aW9ucy9vcmRlci1jYW5jZWxsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsK0JBQStCLEVBQy9CLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsVUFBVSxFQUNWLGNBQWMsRUFDZCxnQkFBZ0IsR0FDakIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFLM0Q7SUFBOEMsNENBQWlCO0lBRzdELGtDQUNZLG1CQUF3QyxFQUN4QyxnQkFBa0MsRUFDbEMsT0FBdUIsRUFDdkIsb0JBQTBDO1FBSnRELFlBTUUsa0JBQU0sbUJBQW1CLENBQUMsU0FDM0I7UUFOVyx5QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsYUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQU50RCxlQUFTLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQzs7SUFTbEMsQ0FBQztJQUNEOztPQUVHO0lBQ0gsNkNBQVUsR0FBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FDekIsTUFBTSxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsQ0FBQyxFQUFDLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxPQUFPLENBQUEsRUFBaEIsQ0FBZ0IsQ0FBQyxFQUNuQyxHQUFHLENBQUMsVUFBQyxLQUFLO1lBQ1IsT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FDbEIsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLEVBQXpELENBQXlELENBQ3JFO1FBRkQsQ0FFQyxDQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCx1Q0FBSSxHQUFKO1FBQUEsaUJBdUJDO1FBdEJDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUM1QyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDeEMsSUFBTSxNQUFNLEdBQXNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ25FLE1BQU0sQ0FBQyxVQUFDLFdBQVcsSUFBSyxPQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQWhDLENBQWdDLENBQUM7YUFDekQsR0FBRyxDQUNGLFVBQUMsV0FBVztZQUNWLE9BQUEsQ0FBQztnQkFDQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDO2dCQUNyQyxRQUFRLEVBQVUsT0FBTyxDQUFDLFdBQVcsQ0FBQzthQUNILENBQUE7UUFIckMsQ0FHcUMsQ0FDeEMsQ0FBQztRQUVKLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDM0MsOEJBQThCLEVBQUUsTUFBTTtTQUN2QyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCO2FBQ2xCLHFCQUFxQixFQUFFO2FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDcEIsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVPLDRDQUFTLEdBQWpCLFVBQWtCLFNBQWlCO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCO1lBQ0UsR0FBRyxFQUFFLGtEQUFrRDtZQUN2RCxNQUFNLEVBQUUsRUFBRSxTQUFTLFdBQUEsRUFBRTtTQUN0QixFQUNELGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDZCxPQUFPLEVBQUUsUUFBUTtTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkExRGdDLG1CQUFtQjtnQkFDdEIsZ0JBQWdCO2dCQUN6QixjQUFjO2dCQUNELG9CQUFvQjs7O0lBUDNDLHdCQUF3QjtRQUhwQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csd0JBQXdCLENBK0RwQzttQ0FqRkQ7Q0FpRkMsQUEvREQsQ0FBOEMsaUJBQWlCLEdBK0Q5RDtTQS9EWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDYW5jZWxPclJldHVyblJlcXVlc3RFbnRyeUlucHV0LFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIE9yZGVyRW50cnksXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBVc2VyT3JkZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBmaXJzdCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU2VydmljZSB9IGZyb20gJy4uLy4uL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcbmltcG9ydCB7IEFtZW5kT3JkZXJUeXBlIH0gZnJvbSAnLi4vYW1lbmQtb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJBbWVuZFNlcnZpY2UgfSBmcm9tICcuLi9hbWVuZC1vcmRlci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyQ2FuY2VsbGF0aW9uU2VydmljZSBleHRlbmRzIE9yZGVyQW1lbmRTZXJ2aWNlIHtcbiAgYW1lbmRUeXBlID0gQW1lbmRPcmRlclR5cGUuQ0FOQ0VMO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyT3JkZXJTZXJ2aWNlOiBVc2VyT3JkZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKG9yZGVyRGV0YWlsc1NlcnZpY2UpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gY2FuY2VsbGFibGUgb3JkZXIgZW50cmllcy5cbiAgICovXG4gIGdldEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRPcmRlcigpLnBpcGUoXG4gICAgICBmaWx0ZXIoKG9yZGVyKSA9PiAhIW9yZGVyPy5lbnRyaWVzKSxcbiAgICAgIG1hcCgob3JkZXIpID0+XG4gICAgICAgIG9yZGVyLmVudHJpZXMuZmlsdGVyKFxuICAgICAgICAgIChlbnRyeSkgPT4gZW50cnkuZW50cnlOdW1iZXIgIT09IC0xICYmIGVudHJ5LmNhbmNlbGxhYmxlUXVhbnRpdHkgPiAwXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgc2F2ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBvcmRlckNvZGUgPSB0aGlzLmZvcm0udmFsdWUub3JkZXJDb2RlO1xuICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmZvcm0udmFsdWUuZW50cmllcztcbiAgICBjb25zdCBpbnB1dHM6IENhbmNlbE9yUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRbXSA9IE9iamVjdC5rZXlzKGVudHJpZXMpXG4gICAgICAuZmlsdGVyKChlbnRyeU51bWJlcikgPT4gPG51bWJlcj5lbnRyaWVzW2VudHJ5TnVtYmVyXSA+IDApXG4gICAgICAubWFwKFxuICAgICAgICAoZW50cnlOdW1iZXIpID0+XG4gICAgICAgICAgKHtcbiAgICAgICAgICAgIG9yZGVyRW50cnlOdW1iZXI6IE51bWJlcihlbnRyeU51bWJlciksXG4gICAgICAgICAgICBxdWFudGl0eTogPG51bWJlcj5lbnRyaWVzW2VudHJ5TnVtYmVyXSxcbiAgICAgICAgICB9IGFzIENhbmNlbE9yUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXQpXG4gICAgICApO1xuXG4gICAgdGhpcy5mb3JtLnJlc2V0KCk7XG5cbiAgICB0aGlzLnVzZXJPcmRlclNlcnZpY2UuY2FuY2VsT3JkZXIob3JkZXJDb2RlLCB7XG4gICAgICBjYW5jZWxsYXRpb25SZXF1ZXN0RW50cnlJbnB1dHM6IGlucHV0cyxcbiAgICB9KTtcblxuICAgIHRoaXMudXNlck9yZGVyU2VydmljZVxuICAgICAgLmdldENhbmNlbE9yZGVyU3VjY2VzcygpXG4gICAgICAucGlwZShmaXJzdChCb29sZWFuKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hZnRlclNhdmUob3JkZXJDb2RlKSk7XG4gIH1cblxuICBwcml2YXRlIGFmdGVyU2F2ZShvcmRlckNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudXNlck9yZGVyU2VydmljZS5yZXNldENhbmNlbE9yZGVyUHJvY2Vzc1N0YXRlKCk7XG4gICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICB7XG4gICAgICAgIGtleTogJ29yZGVyRGV0YWlscy5jYW5jZWxsYXRpb25BbmRSZXR1cm4uY2FuY2VsU3VjY2VzcycsXG4gICAgICAgIHBhcmFtczogeyBvcmRlckNvZGUgfSxcbiAgICAgIH0sXG4gICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICApO1xuICAgIHRoaXMucm91dGluZy5nbyh7XG4gICAgICBjeFJvdXRlOiAnb3JkZXJzJyxcbiAgICB9KTtcbiAgfVxufVxuIl19