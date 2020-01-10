/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, switchMap, tap } from 'rxjs/operators';
import { OrderDetailsService } from '../order-details/order-details.service';
import { AmendOrderType } from './amend-order.model';
/**
 * @param {?} control
 * @return {?}
 */
function ValidateQuantity(control) {
    /** @type {?} */
    let q = 0;
    Object.keys(control.value).forEach((/**
     * @param {?} key
     * @return {?}
     */
    key => (q += control.value[key])));
    return q > 0 ? null : { required: true };
}
/**
 * @abstract
 */
export class OrderAmendService {
    /**
     * @param {?} orderDetailsService
     */
    constructor(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    /**
     * Returns entries with an amended quantity.
     * @return {?}
     */
    getAmendedEntries() {
        return this.getForm().pipe(switchMap((/**
         * @param {?} form
         * @return {?}
         */
        form => {
            return this.getEntries().pipe(map((/**
             * @param {?} entries
             * @return {?}
             */
            entries => entries.filter((/**
             * @param {?} entry
             * @return {?}
             */
            entry => this.getFormControl(form, entry).value > 0)))));
        })));
    }
    /**
     * @return {?}
     */
    getOrder() {
        return this.orderDetailsService.getOrderDetails();
    }
    /**
     * returns the form with form data at runtime
     * @return {?}
     */
    getForm() {
        return this.getOrder().pipe(tap((/**
         * @param {?} order
         * @return {?}
         */
        order => {
            if (!this.form || this.form.get('orderCode').value !== order.code) {
                this.buildForm(order);
            }
        })), map((/**
         * @return {?}
         */
        () => this.form)));
    }
    /**
     * @private
     * @param {?} order
     * @return {?}
     */
    buildForm(order) {
        this.form = new FormGroup({});
        this.form.addControl('orderCode', new FormControl(order.code));
        /** @type {?} */
        const entryGroup = new FormGroup({}, { validators: [ValidateQuantity] });
        this.form.addControl('entries', entryGroup);
        (order.entries || []).forEach((/**
         * @param {?} entry
         * @return {?}
         */
        entry => {
            /** @type {?} */
            const key = entry.entryNumber.toString();
            entryGroup.addControl(key, new FormControl(0, {
                validators: [
                    Validators.min(0),
                    Validators.max(this.getMaxAmendQuantity(entry)),
                ],
            }));
        }));
    }
    /**
     * @protected
     * @param {?} form
     * @param {?} entry
     * @return {?}
     */
    getFormControl(form, entry) {
        return (/** @type {?} */ (form.get('entries').get(entry.entryNumber.toString())));
    }
    /**
     * As discussed, this calculation is moved to SPA side.
     * The calculation and validation should be in backend facade layer.
     * @param {?} entry
     * @return {?}
     */
    getAmendedPrice(entry) {
        /** @type {?} */
        const amendedQuantity = this.getFormControl(this.form, entry).value;
        /** @type {?} */
        const amendedPrice = Object.assign({}, entry.basePrice);
        amendedPrice.value =
            Math.round(entry.basePrice.value * amendedQuantity * 100) / 100;
        amendedPrice.formattedValue = formatCurrency(amendedPrice.value, 
        // TODO: user current language
        'en', getCurrencySymbol(amendedPrice.currencyIso, 'narrow'), amendedPrice.currencyIso);
        return amendedPrice;
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    getMaxAmendQuantity(entry) {
        return ((this.isCancellation()
            ? entry.cancellableQuantity
            : entry.returnableQuantity) || entry.quantity);
    }
    /**
     * @return {?}
     */
    isCancellation() {
        return this.amendType === AmendOrderType.CANCEL;
    }
}
OrderAmendService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OrderAmendService.ctorParameters = () => [
    { type: OrderDetailsService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OrderAmendService.prototype.amendType;
    /**
     * @type {?}
     * @protected
     */
    OrderAmendService.prototype.form;
    /**
     * @type {?}
     * @protected
     */
    OrderAmendService.prototype.orderDetailsService;
    /**
     * Returns entries for the given order.
     * @abstract
     * @return {?}
     */
    OrderAmendService.prototype.getEntries = function () { };
    /**
     * Submits the amended order.
     * @abstract
     * @return {?}
     */
    OrderAmendService.prototype.save = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9hbWVuZC1vcmRlci9hbWVuZC1vcmRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBRXJELFNBQVMsZ0JBQWdCLENBQUMsT0FBb0I7O1FBQ3hDLENBQUMsR0FBRyxDQUFDO0lBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTzs7OztJQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFFckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0FBQzNDLENBQUM7Ozs7QUFHRCxNQUFNLE9BQWdCLGlCQUFpQjs7OztJQUlyQyxZQUFzQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUFHLENBQUM7Ozs7O0lB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LEdBQUcsZUFBZSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUVsRSxZQUFZLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FDMUMsWUFBWSxDQUFDLEtBQUs7UUFDbEIsOEJBQThCO1FBQzlCLElBQUksRUFDSixpQkFBaUIsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxFQUNyRCxZQUFZLENBQUMsV0FBVyxDQUN6QixDQUFDO1FBRUYsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxLQUFpQjtRQUNuQyxPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3BCLENBQUMsQ0FBQyxLQUFLLENBQUMsbUJBQW1CO1lBQzNCLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUNoRCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUNsRCxDQUFDOzs7WUExR0YsVUFBVTs7OztZQVZGLG1CQUFtQjs7Ozs7OztJQVkxQixzQ0FBb0M7Ozs7O0lBQ3BDLGlDQUEwQjs7Ozs7SUFFZCxnREFBa0Q7Ozs7OztJQUs5RCx5REFBZ0Q7Ozs7OztJQW9CaEQsbURBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3ksIGdldEN1cnJlbmN5U3ltYm9sIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPcmRlciwgT3JkZXJFbnRyeSwgUHJpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMuc2VydmljZSc7XG5pbXBvcnQgeyBBbWVuZE9yZGVyVHlwZSB9IGZyb20gJy4vYW1lbmQtb3JkZXIubW9kZWwnO1xuXG5mdW5jdGlvbiBWYWxpZGF0ZVF1YW50aXR5KGNvbnRyb2w6IEZvcm1Db250cm9sKSB7XG4gIGxldCBxID0gMDtcbiAgT2JqZWN0LmtleXMoY29udHJvbC52YWx1ZSkuZm9yRWFjaChrZXkgPT4gKHEgKz0gY29udHJvbC52YWx1ZVtrZXldKSk7XG5cbiAgcmV0dXJuIHEgPiAwID8gbnVsbCA6IHsgcmVxdWlyZWQ6IHRydWUgfTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE9yZGVyQW1lbmRTZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIGFtZW5kVHlwZTogQW1lbmRPcmRlclR5cGU7XG4gIHByb3RlY3RlZCBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG9yZGVyRGV0YWlsc1NlcnZpY2U6IE9yZGVyRGV0YWlsc1NlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZW50cmllcyBmb3IgdGhlIGdpdmVuIG9yZGVyLlxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0RW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT47XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZW50cmllcyB3aXRoIGFuIGFtZW5kZWQgcXVhbnRpdHkuXG4gICAqL1xuICBnZXRBbWVuZGVkRW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLmdldEZvcm0oKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKGZvcm0gPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbnRyaWVzKCkucGlwZShcbiAgICAgICAgICBtYXAoZW50cmllcyA9PlxuICAgICAgICAgICAgZW50cmllcy5maWx0ZXIoZW50cnkgPT4gdGhpcy5nZXRGb3JtQ29udHJvbChmb3JtLCBlbnRyeSkudmFsdWUgPiAwKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJtaXRzIHRoZSBhbWVuZGVkIG9yZGVyLlxuICAgKi9cbiAgYWJzdHJhY3Qgc2F2ZSgpOiB2b2lkO1xuXG4gIGdldE9yZGVyKCk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5vcmRlckRldGFpbHNTZXJ2aWNlLmdldE9yZGVyRGV0YWlscygpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGZvcm0gd2l0aCBmb3JtIGRhdGEgYXQgcnVudGltZVxuICAgKi9cbiAgZ2V0Rm9ybSgpOiBPYnNlcnZhYmxlPEZvcm1Hcm91cD4ge1xuICAgIHJldHVybiB0aGlzLmdldE9yZGVyKCkucGlwZShcbiAgICAgIHRhcChvcmRlciA9PiB7XG4gICAgICAgIGlmICghdGhpcy5mb3JtIHx8IHRoaXMuZm9ybS5nZXQoJ29yZGVyQ29kZScpLnZhbHVlICE9PSBvcmRlci5jb2RlKSB7XG4gICAgICAgICAgdGhpcy5idWlsZEZvcm0ob3JkZXIpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoKSA9PiB0aGlzLmZvcm0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRGb3JtKG9yZGVyOiBPcmRlcik6IHZvaWQge1xuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe30pO1xuICAgIHRoaXMuZm9ybS5hZGRDb250cm9sKCdvcmRlckNvZGUnLCBuZXcgRm9ybUNvbnRyb2wob3JkZXIuY29kZSkpO1xuXG4gICAgY29uc3QgZW50cnlHcm91cCA9IG5ldyBGb3JtR3JvdXAoe30sIHsgdmFsaWRhdG9yczogW1ZhbGlkYXRlUXVhbnRpdHldIH0pO1xuICAgIHRoaXMuZm9ybS5hZGRDb250cm9sKCdlbnRyaWVzJywgZW50cnlHcm91cCk7XG5cbiAgICAob3JkZXIuZW50cmllcyB8fCBbXSkuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBlbnRyeS5lbnRyeU51bWJlci50b1N0cmluZygpO1xuICAgICAgZW50cnlHcm91cC5hZGRDb250cm9sKFxuICAgICAgICBrZXksXG4gICAgICAgIG5ldyBGb3JtQ29udHJvbCgwLCB7XG4gICAgICAgICAgdmFsaWRhdG9yczogW1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5taW4oMCksXG4gICAgICAgICAgICBWYWxpZGF0b3JzLm1heCh0aGlzLmdldE1heEFtZW5kUXVhbnRpdHkoZW50cnkpKSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRGb3JtQ29udHJvbChmb3JtOiBGb3JtR3JvdXAsIGVudHJ5OiBPcmRlckVudHJ5KTogRm9ybUNvbnRyb2wge1xuICAgIHJldHVybiA8Rm9ybUNvbnRyb2w+Zm9ybS5nZXQoJ2VudHJpZXMnKS5nZXQoZW50cnkuZW50cnlOdW1iZXIudG9TdHJpbmcoKSk7XG4gIH1cblxuICAvKipcbiAgICogQXMgZGlzY3Vzc2VkLCB0aGlzIGNhbGN1bGF0aW9uIGlzIG1vdmVkIHRvIFNQQSBzaWRlLlxuICAgKiBUaGUgY2FsY3VsYXRpb24gYW5kIHZhbGlkYXRpb24gc2hvdWxkIGJlIGluIGJhY2tlbmQgZmFjYWRlIGxheWVyLlxuICAgKi9cbiAgZ2V0QW1lbmRlZFByaWNlKGVudHJ5OiBPcmRlckVudHJ5KTogUHJpY2Uge1xuICAgIGNvbnN0IGFtZW5kZWRRdWFudGl0eSA9IHRoaXMuZ2V0Rm9ybUNvbnRyb2wodGhpcy5mb3JtLCBlbnRyeSkudmFsdWU7XG4gICAgY29uc3QgYW1lbmRlZFByaWNlID0gT2JqZWN0LmFzc2lnbih7fSwgZW50cnkuYmFzZVByaWNlKTtcbiAgICBhbWVuZGVkUHJpY2UudmFsdWUgPVxuICAgICAgTWF0aC5yb3VuZChlbnRyeS5iYXNlUHJpY2UudmFsdWUgKiBhbWVuZGVkUXVhbnRpdHkgKiAxMDApIC8gMTAwO1xuXG4gICAgYW1lbmRlZFByaWNlLmZvcm1hdHRlZFZhbHVlID0gZm9ybWF0Q3VycmVuY3koXG4gICAgICBhbWVuZGVkUHJpY2UudmFsdWUsXG4gICAgICAvLyBUT0RPOiB1c2VyIGN1cnJlbnQgbGFuZ3VhZ2VcbiAgICAgICdlbicsXG4gICAgICBnZXRDdXJyZW5jeVN5bWJvbChhbWVuZGVkUHJpY2UuY3VycmVuY3lJc28sICduYXJyb3cnKSxcbiAgICAgIGFtZW5kZWRQcmljZS5jdXJyZW5jeUlzb1xuICAgICk7XG5cbiAgICByZXR1cm4gYW1lbmRlZFByaWNlO1xuICB9XG5cbiAgZ2V0TWF4QW1lbmRRdWFudGl0eShlbnRyeTogT3JkZXJFbnRyeSkge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5pc0NhbmNlbGxhdGlvbigpXG4gICAgICAgID8gZW50cnkuY2FuY2VsbGFibGVRdWFudGl0eVxuICAgICAgICA6IGVudHJ5LnJldHVybmFibGVRdWFudGl0eSkgfHwgZW50cnkucXVhbnRpdHlcbiAgICApO1xuICB9XG5cbiAgaXNDYW5jZWxsYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1lbmRUeXBlID09PSBBbWVuZE9yZGVyVHlwZS5DQU5DRUw7XG4gIH1cbn1cbiJdfQ==