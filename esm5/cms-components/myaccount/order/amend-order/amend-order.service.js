import { __decorate } from "tslib";
import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, switchMap, tap } from 'rxjs/operators';
import { OrderDetailsService } from '../order-details/order-details.service';
import { AmendOrderType } from './amend-order.model';
function ValidateQuantity(control) {
    var q = 0;
    Object.keys(control.value).forEach(function (key) { return (q += control.value[key]); });
    return q > 0 ? null : { required: true };
}
var OrderAmendService = /** @class */ (function () {
    function OrderAmendService(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    /**
     * Returns entries with an amended quantity.
     */
    OrderAmendService.prototype.getAmendedEntries = function () {
        var _this = this;
        return this.getForm().pipe(switchMap(function (form) {
            return _this.getEntries().pipe(map(function (entries) {
                return entries.filter(function (entry) { return _this.getFormControl(form, entry).value > 0; });
            }));
        }));
    };
    OrderAmendService.prototype.getOrder = function () {
        return this.orderDetailsService.getOrderDetails();
    };
    /**
     * returns the form with form data at runtime
     */
    OrderAmendService.prototype.getForm = function () {
        var _this = this;
        return this.getOrder().pipe(tap(function (order) {
            if (!_this.form || _this.form.get('orderCode').value !== order.code) {
                _this.buildForm(order);
            }
        }), map(function () { return _this.form; }));
    };
    OrderAmendService.prototype.buildForm = function (order) {
        var _this = this;
        this.form = new FormGroup({});
        this.form.addControl('orderCode', new FormControl(order.code));
        var entryGroup = new FormGroup({}, { validators: [ValidateQuantity] });
        this.form.addControl('entries', entryGroup);
        (order.entries || []).forEach(function (entry) {
            var key = entry.entryNumber.toString();
            entryGroup.addControl(key, new FormControl(0, {
                validators: [
                    Validators.min(0),
                    Validators.max(_this.getMaxAmendQuantity(entry)),
                ],
            }));
        });
    };
    OrderAmendService.prototype.getFormControl = function (form, entry) {
        return form.get('entries').get(entry.entryNumber.toString());
    };
    /**
     * As discussed, this calculation is moved to SPA side.
     * The calculation and validation should be in backend facade layer.
     */
    OrderAmendService.prototype.getAmendedPrice = function (entry) {
        var amendedQuantity = this.getFormControl(this.form, entry).value;
        var amendedPrice = Object.assign({}, entry.basePrice);
        amendedPrice.value =
            Math.round(entry.basePrice.value * amendedQuantity * 100) / 100;
        amendedPrice.formattedValue = formatCurrency(amendedPrice.value, 
        // TODO: user current language
        'en', getCurrencySymbol(amendedPrice.currencyIso, 'narrow'), amendedPrice.currencyIso);
        return amendedPrice;
    };
    OrderAmendService.prototype.getMaxAmendQuantity = function (entry) {
        return ((this.isCancellation()
            ? entry.cancellableQuantity
            : entry.returnableQuantity) || entry.quantity);
    };
    OrderAmendService.prototype.isCancellation = function () {
        return this.amendType === AmendOrderType.CANCEL;
    };
    OrderAmendService.ctorParameters = function () { return [
        { type: OrderDetailsService }
    ]; };
    OrderAmendService = __decorate([
        Injectable()
    ], OrderAmendService);
    return OrderAmendService;
}());
export { OrderAmendService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9hbWVuZC1vcmRlci9hbWVuZC1vcmRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFckQsU0FBUyxnQkFBZ0IsQ0FBQyxPQUFvQjtJQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUVyRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDM0MsQ0FBQztBQUdEO0lBSUUsMkJBQXNCLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQUcsQ0FBQztJQU9sRTs7T0FFRztJQUNILDZD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LENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEQsWUFBWSxDQUFDLEtBQUs7WUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxlQUFlLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBRWxFLFlBQVksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUMxQyxZQUFZLENBQUMsS0FBSztRQUNsQiw4QkFBOEI7UUFDOUIsSUFBSSxFQUNKLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLEVBQ3JELFlBQVksQ0FBQyxXQUFXLENBQ3pCLENBQUM7UUFFRixPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRUQsK0NBQW1CLEdBQW5CLFVBQW9CLEtBQWlCO1FBQ25DLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDcEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxtQkFBbUI7WUFDM0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQ2hELENBQUM7SUFDSixDQUFDO0lBRUQsMENBQWMsR0FBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDO0lBQ2xELENBQUM7O2dCQXJHMEMsbUJBQW1COztJQUoxQyxpQkFBaUI7UUFEdEMsVUFBVSxFQUFFO09BQ1MsaUJBQWlCLENBMEd0QztJQUFELHdCQUFDO0NBQUEsQUExR0QsSUEwR0M7U0ExR3FCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdEN1cnJlbmN5LCBnZXRDdXJyZW5jeVN5bWJvbCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT3JkZXIsIE9yZGVyRW50cnksIFByaWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQW1lbmRPcmRlclR5cGUgfSBmcm9tICcuL2FtZW5kLW9yZGVyLm1vZGVsJztcblxuZnVuY3Rpb24gVmFsaWRhdGVRdWFudGl0eShjb250cm9sOiBGb3JtQ29udHJvbCkge1xuICBsZXQgcSA9IDA7XG4gIE9iamVjdC5rZXlzKGNvbnRyb2wudmFsdWUpLmZvckVhY2goa2V5ID0+IChxICs9IGNvbnRyb2wudmFsdWVba2V5XSkpO1xuXG4gIHJldHVybiBxID4gMCA/IG51bGwgOiB7IHJlcXVpcmVkOiB0cnVlIH07XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBPcmRlckFtZW5kU2VydmljZSB7XG4gIHByb3RlY3RlZCBhbWVuZFR5cGU6IEFtZW5kT3JkZXJUeXBlO1xuICBwcm90ZWN0ZWQgZm9ybTogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGVudHJpZXMgZm9yIHRoZSBnaXZlbiBvcmRlci5cbiAgICovXG4gIGFic3RyYWN0IGdldEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGVudHJpZXMgd2l0aCBhbiBhbWVuZGVkIHF1YW50aXR5LlxuICAgKi9cbiAgZ2V0QW1lbmRlZEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRGb3JtKCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChmb3JtID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RW50cmllcygpLnBpcGUoXG4gICAgICAgICAgbWFwKGVudHJpZXMgPT5cbiAgICAgICAgICAgIGVudHJpZXMuZmlsdGVyKGVudHJ5ID0+IHRoaXMuZ2V0Rm9ybUNvbnRyb2woZm9ybSwgZW50cnkpLnZhbHVlID4gMClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU3VibWl0cyB0aGUgYW1lbmRlZCBvcmRlci5cbiAgICovXG4gIGFic3RyYWN0IHNhdmUoKTogdm9pZDtcblxuICBnZXRPcmRlcigpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJEZXRhaWxzU2VydmljZS5nZXRPcmRlckRldGFpbHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRoZSBmb3JtIHdpdGggZm9ybSBkYXRhIGF0IHJ1bnRpbWVcbiAgICovXG4gIGdldEZvcm0oKTogT2JzZXJ2YWJsZTxGb3JtR3JvdXA+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRPcmRlcigpLnBpcGUoXG4gICAgICB0YXAob3JkZXIgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybSB8fCB0aGlzLmZvcm0uZ2V0KCdvcmRlckNvZGUnKS52YWx1ZSAhPT0gb3JkZXIuY29kZSkge1xuICAgICAgICAgIHRoaXMuYnVpbGRGb3JtKG9yZGVyKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKCkgPT4gdGhpcy5mb3JtKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRm9ybShvcmRlcjogT3JkZXIpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHt9KTtcbiAgICB0aGlzLmZvcm0uYWRkQ29udHJvbCgnb3JkZXJDb2RlJywgbmV3IEZvcm1Db250cm9sKG9yZGVyLmNvZGUpKTtcblxuICAgIGNvbnN0IGVudHJ5R3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9LCB7IHZhbGlkYXRvcnM6IFtWYWxpZGF0ZVF1YW50aXR5XSB9KTtcbiAgICB0aGlzLmZvcm0uYWRkQ29udHJvbCgnZW50cmllcycsIGVudHJ5R3JvdXApO1xuXG4gICAgKG9yZGVyLmVudHJpZXMgfHwgW10pLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gZW50cnkuZW50cnlOdW1iZXIudG9TdHJpbmcoKTtcbiAgICAgIGVudHJ5R3JvdXAuYWRkQ29udHJvbChcbiAgICAgICAga2V5LFxuICAgICAgICBuZXcgRm9ybUNvbnRyb2woMCwge1xuICAgICAgICAgIHZhbGlkYXRvcnM6IFtcbiAgICAgICAgICAgIFZhbGlkYXRvcnMubWluKDApLFxuICAgICAgICAgICAgVmFsaWRhdG9ycy5tYXgodGhpcy5nZXRNYXhBbWVuZFF1YW50aXR5KGVudHJ5KSksXG4gICAgICAgICAgXSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Rm9ybUNvbnRyb2woZm9ybTogRm9ybUdyb3VwLCBlbnRyeTogT3JkZXJFbnRyeSk6IEZvcm1Db250cm9sIHtcbiAgICByZXR1cm4gPEZvcm1Db250cm9sPmZvcm0uZ2V0KCdlbnRyaWVzJykuZ2V0KGVudHJ5LmVudHJ5TnVtYmVyLnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzIGRpc2N1c3NlZCwgdGhpcyBjYWxjdWxhdGlvbiBpcyBtb3ZlZCB0byBTUEEgc2lkZS5cbiAgICogVGhlIGNhbGN1bGF0aW9uIGFuZCB2YWxpZGF0aW9uIHNob3VsZCBiZSBpbiBiYWNrZW5kIGZhY2FkZSBsYXllci5cbiAgICovXG4gIGdldEFtZW5kZWRQcmljZShlbnRyeTogT3JkZXJFbnRyeSk6IFByaWNlIHtcbiAgICBjb25zdCBhbWVuZGVkUXVhbnRpdHkgPSB0aGlzLmdldEZvcm1Db250cm9sKHRoaXMuZm9ybSwgZW50cnkpLnZhbHVlO1xuICAgIGNvbnN0IGFtZW5kZWRQcmljZSA9IE9iamVjdC5hc3NpZ24oe30sIGVudHJ5LmJhc2VQcmljZSk7XG4gICAgYW1lbmRlZFByaWNlLnZhbHVlID1cbiAgICAgIE1hdGgucm91bmQoZW50cnkuYmFzZVByaWNlLnZhbHVlICogYW1lbmRlZFF1YW50aXR5ICogMTAwKSAvIDEwMDtcblxuICAgIGFtZW5kZWRQcmljZS5mb3JtYXR0ZWRWYWx1ZSA9IGZvcm1hdEN1cnJlbmN5KFxuICAgICAgYW1lbmRlZFByaWNlLnZhbHVlLFxuICAgICAgLy8gVE9ETzogdXNlciBjdXJyZW50IGxhbmd1YWdlXG4gICAgICAnZW4nLFxuICAgICAgZ2V0Q3VycmVuY3lTeW1ib2woYW1lbmRlZFByaWNlLmN1cnJlbmN5SXNvLCAnbmFycm93JyksXG4gICAgICBhbWVuZGVkUHJpY2UuY3VycmVuY3lJc29cbiAgICApO1xuXG4gICAgcmV0dXJuIGFtZW5kZWRQcmljZTtcbiAgfVxuXG4gIGdldE1heEFtZW5kUXVhbnRpdHkoZW50cnk6IE9yZGVyRW50cnkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuaXNDYW5jZWxsYXRpb24oKVxuICAgICAgICA/IGVudHJ5LmNhbmNlbGxhYmxlUXVhbnRpdHlcbiAgICAgICAgOiBlbnRyeS5yZXR1cm5hYmxlUXVhbnRpdHkpIHx8IGVudHJ5LnF1YW50aXR5XG4gICAgKTtcbiAgfVxuXG4gIGlzQ2FuY2VsbGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFtZW5kVHlwZSA9PT0gQW1lbmRPcmRlclR5cGUuQ0FOQ0VMO1xuICB9XG59XG4iXX0=