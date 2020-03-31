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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9hbWVuZC1vcmRlci9hbWVuZC1vcmRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFckQsU0FBUyxnQkFBZ0IsQ0FBQyxPQUFvQjtJQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUV2RSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDM0MsQ0FBQztBQUdEO0lBSUUsMkJBQXNCLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQUcsQ0FBQztJQU9sRTs7T0FFRztJQUNILDZD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QUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELFlBQVksQ0FBQyxLQUFLO1lBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsZUFBZSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUVsRSxZQUFZLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FDMUMsWUFBWSxDQUFDLEtBQUs7UUFDbEIsOEJBQThCO1FBQzlCLElBQUksRUFDSixpQkFBaUIsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxFQUNyRCxZQUFZLENBQUMsV0FBVyxDQUN6QixDQUFDO1FBRUYsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVELCtDQUFtQixHQUFuQixVQUFvQixLQUFpQjtRQUNuQyxPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3BCLENBQUMsQ0FBQyxLQUFLLENBQUMsbUJBQW1CO1lBQzNCLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUNoRCxDQUFDO0lBQ0osQ0FBQztJQUVELDBDQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUNsRCxDQUFDOztnQkF2RzBDLG1CQUFtQjs7SUFKMUMsaUJBQWlCO1FBRHRDLFVBQVUsRUFBRTtPQUNTLGlCQUFpQixDQTRHdEM7SUFBRCx3QkFBQztDQUFBLEFBNUdELElBNEdDO1NBNUdxQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSwgZ2V0Q3VycmVuY3lTeW1ib2wgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9yZGVyLCBPcmRlckVudHJ5LCBQcmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU2VydmljZSB9IGZyb20gJy4uL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcbmltcG9ydCB7IEFtZW5kT3JkZXJUeXBlIH0gZnJvbSAnLi9hbWVuZC1vcmRlci5tb2RlbCc7XG5cbmZ1bmN0aW9uIFZhbGlkYXRlUXVhbnRpdHkoY29udHJvbDogRm9ybUNvbnRyb2wpIHtcbiAgbGV0IHEgPSAwO1xuICBPYmplY3Qua2V5cyhjb250cm9sLnZhbHVlKS5mb3JFYWNoKChrZXkpID0+IChxICs9IGNvbnRyb2wudmFsdWVba2V5XSkpO1xuXG4gIHJldHVybiBxID4gMCA/IG51bGwgOiB7IHJlcXVpcmVkOiB0cnVlIH07XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBPcmRlckFtZW5kU2VydmljZSB7XG4gIHByb3RlY3RlZCBhbWVuZFR5cGU6IEFtZW5kT3JkZXJUeXBlO1xuICBwcm90ZWN0ZWQgZm9ybTogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGVudHJpZXMgZm9yIHRoZSBnaXZlbiBvcmRlci5cbiAgICovXG4gIGFic3RyYWN0IGdldEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGVudHJpZXMgd2l0aCBhbiBhbWVuZGVkIHF1YW50aXR5LlxuICAgKi9cbiAgZ2V0QW1lbmRlZEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRGb3JtKCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoZm9ybSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbnRyaWVzKCkucGlwZShcbiAgICAgICAgICBtYXAoKGVudHJpZXMpID0+XG4gICAgICAgICAgICBlbnRyaWVzLmZpbHRlcihcbiAgICAgICAgICAgICAgKGVudHJ5KSA9PiB0aGlzLmdldEZvcm1Db250cm9sKGZvcm0sIGVudHJ5KS52YWx1ZSA+IDBcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU3VibWl0cyB0aGUgYW1lbmRlZCBvcmRlci5cbiAgICovXG4gIGFic3RyYWN0IHNhdmUoKTogdm9pZDtcblxuICBnZXRPcmRlcigpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJEZXRhaWxzU2VydmljZS5nZXRPcmRlckRldGFpbHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRoZSBmb3JtIHdpdGggZm9ybSBkYXRhIGF0IHJ1bnRpbWVcbiAgICovXG4gIGdldEZvcm0oKTogT2JzZXJ2YWJsZTxGb3JtR3JvdXA+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRPcmRlcigpLnBpcGUoXG4gICAgICB0YXAoKG9yZGVyKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5mb3JtIHx8IHRoaXMuZm9ybS5nZXQoJ29yZGVyQ29kZScpLnZhbHVlICE9PSBvcmRlci5jb2RlKSB7XG4gICAgICAgICAgdGhpcy5idWlsZEZvcm0ob3JkZXIpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoKSA9PiB0aGlzLmZvcm0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRGb3JtKG9yZGVyOiBPcmRlcik6IHZvaWQge1xuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe30pO1xuICAgIHRoaXMuZm9ybS5hZGRDb250cm9sKCdvcmRlckNvZGUnLCBuZXcgRm9ybUNvbnRyb2wob3JkZXIuY29kZSkpO1xuXG4gICAgY29uc3QgZW50cnlHcm91cCA9IG5ldyBGb3JtR3JvdXAoe30sIHsgdmFsaWRhdG9yczogW1ZhbGlkYXRlUXVhbnRpdHldIH0pO1xuICAgIHRoaXMuZm9ybS5hZGRDb250cm9sKCdlbnRyaWVzJywgZW50cnlHcm91cCk7XG5cbiAgICAob3JkZXIuZW50cmllcyB8fCBbXSkuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGVudHJ5LmVudHJ5TnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICBlbnRyeUdyb3VwLmFkZENvbnRyb2woXG4gICAgICAgIGtleSxcbiAgICAgICAgbmV3IEZvcm1Db250cm9sKDAsIHtcbiAgICAgICAgICB2YWxpZGF0b3JzOiBbXG4gICAgICAgICAgICBWYWxpZGF0b3JzLm1pbigwKSxcbiAgICAgICAgICAgIFZhbGlkYXRvcnMubWF4KHRoaXMuZ2V0TWF4QW1lbmRRdWFudGl0eShlbnRyeSkpLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEZvcm1Db250cm9sKGZvcm06IEZvcm1Hcm91cCwgZW50cnk6IE9yZGVyRW50cnkpOiBGb3JtQ29udHJvbCB7XG4gICAgcmV0dXJuIDxGb3JtQ29udHJvbD5mb3JtLmdldCgnZW50cmllcycpLmdldChlbnRyeS5lbnRyeU51bWJlci50b1N0cmluZygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcyBkaXNjdXNzZWQsIHRoaXMgY2FsY3VsYXRpb24gaXMgbW92ZWQgdG8gU1BBIHNpZGUuXG4gICAqIFRoZSBjYWxjdWxhdGlvbiBhbmQgdmFsaWRhdGlvbiBzaG91bGQgYmUgaW4gYmFja2VuZCBmYWNhZGUgbGF5ZXIuXG4gICAqL1xuICBnZXRBbWVuZGVkUHJpY2UoZW50cnk6IE9yZGVyRW50cnkpOiBQcmljZSB7XG4gICAgY29uc3QgYW1lbmRlZFF1YW50aXR5ID0gdGhpcy5nZXRGb3JtQ29udHJvbCh0aGlzLmZvcm0sIGVudHJ5KS52YWx1ZTtcbiAgICBjb25zdCBhbWVuZGVkUHJpY2UgPSBPYmplY3QuYXNzaWduKHt9LCBlbnRyeS5iYXNlUHJpY2UpO1xuICAgIGFtZW5kZWRQcmljZS52YWx1ZSA9XG4gICAgICBNYXRoLnJvdW5kKGVudHJ5LmJhc2VQcmljZS52YWx1ZSAqIGFtZW5kZWRRdWFudGl0eSAqIDEwMCkgLyAxMDA7XG5cbiAgICBhbWVuZGVkUHJpY2UuZm9ybWF0dGVkVmFsdWUgPSBmb3JtYXRDdXJyZW5jeShcbiAgICAgIGFtZW5kZWRQcmljZS52YWx1ZSxcbiAgICAgIC8vIFRPRE86IHVzZXIgY3VycmVudCBsYW5ndWFnZVxuICAgICAgJ2VuJyxcbiAgICAgIGdldEN1cnJlbmN5U3ltYm9sKGFtZW5kZWRQcmljZS5jdXJyZW5jeUlzbywgJ25hcnJvdycpLFxuICAgICAgYW1lbmRlZFByaWNlLmN1cnJlbmN5SXNvXG4gICAgKTtcblxuICAgIHJldHVybiBhbWVuZGVkUHJpY2U7XG4gIH1cblxuICBnZXRNYXhBbWVuZFF1YW50aXR5KGVudHJ5OiBPcmRlckVudHJ5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmlzQ2FuY2VsbGF0aW9uKClcbiAgICAgICAgPyBlbnRyeS5jYW5jZWxsYWJsZVF1YW50aXR5XG4gICAgICAgIDogZW50cnkucmV0dXJuYWJsZVF1YW50aXR5KSB8fCBlbnRyeS5xdWFudGl0eVxuICAgICk7XG4gIH1cblxuICBpc0NhbmNlbGxhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hbWVuZFR5cGUgPT09IEFtZW5kT3JkZXJUeXBlLkNBTkNFTDtcbiAgfVxufVxuIl19