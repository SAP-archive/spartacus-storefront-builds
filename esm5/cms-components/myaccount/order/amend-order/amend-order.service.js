import { __decorate } from "tslib";
import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, switchMap, tap } from 'rxjs/operators';
import { OrderDetailsService } from '../order-details/order-details.service';
import { AmendOrderType } from './amend-order.model';
function ValidateQuantityToCancel(control) {
    if (!control.value) {
        return null;
    }
    var quantity = Object.values(control.value).reduce(function (acc, val) { return acc + val; }, 0);
    return quantity > 0 ? null : { cxNoSelectedItemToCancel: true };
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
        var entryGroup = new FormGroup({}, { validators: [ValidateQuantityToCancel] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9hbWVuZC1vcmRlci9hbWVuZC1vcmRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFckQsU0FBUyx3QkFBd0IsQ0FBQyxPQUFvQjtJQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtRQUNsQixPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUNsRCxVQUFDLEdBQVcsRUFBRSxHQUFXLElBQUssT0FBQSxHQUFHLEdBQUcsR0FBRyxFQUFULENBQVMsRUFDdkMsQ0FBQyxDQUNGLENBQUM7SUFDRixPQUFPLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUNsRSxDQUFDO0FBR0Q7SUFJRSwyQkFBc0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FB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TSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELFlBQVksQ0FBQyxLQUFLO1lBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsZUFBZSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUVsRSxZQUFZLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FDMUMsWUFBWSxDQUFDLEtBQUs7UUFDbEIsOEJBQThCO1FBQzlCLElBQUksRUFDSixpQkFBaUIsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxFQUNyRCxZQUFZLENBQUMsV0FBVyxDQUN6QixDQUFDO1FBRUYsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVELCtDQUFtQixHQUFuQixVQUFvQixLQUFpQjtRQUNuQyxPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3BCLENBQUMsQ0FBQyxLQUFLLENBQUMsbUJBQW1CO1lBQzNCLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUNoRCxDQUFDO0lBQ0osQ0FBQztJQUVELDBDQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUNsRCxDQUFDOztnQkExRzBDLG1CQUFtQjs7SUFKMUMsaUJBQWlCO1FBRHRDLFVBQVUsRUFBRTtPQUNTLGlCQUFpQixDQStHdEM7SUFBRCx3QkFBQztDQUFBLEFBL0dELElBK0dDO1NBL0dxQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSwgZ2V0Q3VycmVuY3lTeW1ib2wgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9yZGVyLCBPcmRlckVudHJ5LCBQcmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU2VydmljZSB9IGZyb20gJy4uL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcbmltcG9ydCB7IEFtZW5kT3JkZXJUeXBlIH0gZnJvbSAnLi9hbWVuZC1vcmRlci5tb2RlbCc7XG5cbmZ1bmN0aW9uIFZhbGlkYXRlUXVhbnRpdHlUb0NhbmNlbChjb250cm9sOiBGb3JtQ29udHJvbCkge1xuICBpZiAoIWNvbnRyb2wudmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBxdWFudGl0eSA9IE9iamVjdC52YWx1ZXMoY29udHJvbC52YWx1ZSkucmVkdWNlKFxuICAgIChhY2M6IG51bWJlciwgdmFsOiBudW1iZXIpID0+IGFjYyArIHZhbCxcbiAgICAwXG4gICk7XG4gIHJldHVybiBxdWFudGl0eSA+IDAgPyBudWxsIDogeyBjeE5vU2VsZWN0ZWRJdGVtVG9DYW5jZWw6IHRydWUgfTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE9yZGVyQW1lbmRTZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIGFtZW5kVHlwZTogQW1lbmRPcmRlclR5cGU7XG4gIHByb3RlY3RlZCBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG9yZGVyRGV0YWlsc1NlcnZpY2U6IE9yZGVyRGV0YWlsc1NlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZW50cmllcyBmb3IgdGhlIGdpdmVuIG9yZGVyLlxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0RW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT47XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZW50cmllcyB3aXRoIGFuIGFtZW5kZWQgcXVhbnRpdHkuXG4gICAqL1xuICBnZXRBbWVuZGVkRW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLmdldEZvcm0oKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChmb3JtKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEVudHJpZXMoKS5waXBlKFxuICAgICAgICAgIG1hcCgoZW50cmllcykgPT5cbiAgICAgICAgICAgIGVudHJpZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAoZW50cnkpID0+IHRoaXMuZ2V0Rm9ybUNvbnRyb2woZm9ybSwgZW50cnkpLnZhbHVlID4gMFxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJtaXRzIHRoZSBhbWVuZGVkIG9yZGVyLlxuICAgKi9cbiAgYWJzdHJhY3Qgc2F2ZSgpOiB2b2lkO1xuXG4gIGdldE9yZGVyKCk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5vcmRlckRldGFpbHNTZXJ2aWNlLmdldE9yZGVyRGV0YWlscygpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGZvcm0gd2l0aCBmb3JtIGRhdGEgYXQgcnVudGltZVxuICAgKi9cbiAgZ2V0Rm9ybSgpOiBPYnNlcnZhYmxlPEZvcm1Hcm91cD4ge1xuICAgIHJldHVybiB0aGlzLmdldE9yZGVyKCkucGlwZShcbiAgICAgIHRhcCgob3JkZXIpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmZvcm0gfHwgdGhpcy5mb3JtLmdldCgnb3JkZXJDb2RlJykudmFsdWUgIT09IG9yZGVyLmNvZGUpIHtcbiAgICAgICAgICB0aGlzLmJ1aWxkRm9ybShvcmRlcik7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKCgpID0+IHRoaXMuZm9ybSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEZvcm0ob3JkZXI6IE9yZGVyKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh7fSk7XG4gICAgdGhpcy5mb3JtLmFkZENvbnRyb2woJ29yZGVyQ29kZScsIG5ldyBGb3JtQ29udHJvbChvcmRlci5jb2RlKSk7XG5cbiAgICBjb25zdCBlbnRyeUdyb3VwID0gbmV3IEZvcm1Hcm91cChcbiAgICAgIHt9LFxuICAgICAgeyB2YWxpZGF0b3JzOiBbVmFsaWRhdGVRdWFudGl0eVRvQ2FuY2VsXSB9XG4gICAgKTtcbiAgICB0aGlzLmZvcm0uYWRkQ29udHJvbCgnZW50cmllcycsIGVudHJ5R3JvdXApO1xuXG4gICAgKG9yZGVyLmVudHJpZXMgfHwgW10pLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBlbnRyeS5lbnRyeU51bWJlci50b1N0cmluZygpO1xuICAgICAgZW50cnlHcm91cC5hZGRDb250cm9sKFxuICAgICAgICBrZXksXG4gICAgICAgIG5ldyBGb3JtQ29udHJvbCgwLCB7XG4gICAgICAgICAgdmFsaWRhdG9yczogW1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5taW4oMCksXG4gICAgICAgICAgICBWYWxpZGF0b3JzLm1heCh0aGlzLmdldE1heEFtZW5kUXVhbnRpdHkoZW50cnkpKSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRGb3JtQ29udHJvbChmb3JtOiBGb3JtR3JvdXAsIGVudHJ5OiBPcmRlckVudHJ5KTogRm9ybUNvbnRyb2wge1xuICAgIHJldHVybiA8Rm9ybUNvbnRyb2w+Zm9ybS5nZXQoJ2VudHJpZXMnKS5nZXQoZW50cnkuZW50cnlOdW1iZXIudG9TdHJpbmcoKSk7XG4gIH1cblxuICAvKipcbiAgICogQXMgZGlzY3Vzc2VkLCB0aGlzIGNhbGN1bGF0aW9uIGlzIG1vdmVkIHRvIFNQQSBzaWRlLlxuICAgKiBUaGUgY2FsY3VsYXRpb24gYW5kIHZhbGlkYXRpb24gc2hvdWxkIGJlIGluIGJhY2tlbmQgZmFjYWRlIGxheWVyLlxuICAgKi9cbiAgZ2V0QW1lbmRlZFByaWNlKGVudHJ5OiBPcmRlckVudHJ5KTogUHJpY2Uge1xuICAgIGNvbnN0IGFtZW5kZWRRdWFudGl0eSA9IHRoaXMuZ2V0Rm9ybUNvbnRyb2wodGhpcy5mb3JtLCBlbnRyeSkudmFsdWU7XG4gICAgY29uc3QgYW1lbmRlZFByaWNlID0gT2JqZWN0LmFzc2lnbih7fSwgZW50cnkuYmFzZVByaWNlKTtcbiAgICBhbWVuZGVkUHJpY2UudmFsdWUgPVxuICAgICAgTWF0aC5yb3VuZChlbnRyeS5iYXNlUHJpY2UudmFsdWUgKiBhbWVuZGVkUXVhbnRpdHkgKiAxMDApIC8gMTAwO1xuXG4gICAgYW1lbmRlZFByaWNlLmZvcm1hdHRlZFZhbHVlID0gZm9ybWF0Q3VycmVuY3koXG4gICAgICBhbWVuZGVkUHJpY2UudmFsdWUsXG4gICAgICAvLyBUT0RPOiB1c2VyIGN1cnJlbnQgbGFuZ3VhZ2VcbiAgICAgICdlbicsXG4gICAgICBnZXRDdXJyZW5jeVN5bWJvbChhbWVuZGVkUHJpY2UuY3VycmVuY3lJc28sICduYXJyb3cnKSxcbiAgICAgIGFtZW5kZWRQcmljZS5jdXJyZW5jeUlzb1xuICAgICk7XG5cbiAgICByZXR1cm4gYW1lbmRlZFByaWNlO1xuICB9XG5cbiAgZ2V0TWF4QW1lbmRRdWFudGl0eShlbnRyeTogT3JkZXJFbnRyeSkge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5pc0NhbmNlbGxhdGlvbigpXG4gICAgICAgID8gZW50cnkuY2FuY2VsbGFibGVRdWFudGl0eVxuICAgICAgICA6IGVudHJ5LnJldHVybmFibGVRdWFudGl0eSkgfHwgZW50cnkucXVhbnRpdHlcbiAgICApO1xuICB9XG5cbiAgaXNDYW5jZWxsYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1lbmRUeXBlID09PSBBbWVuZE9yZGVyVHlwZS5DQU5DRUw7XG4gIH1cbn1cbiJdfQ==