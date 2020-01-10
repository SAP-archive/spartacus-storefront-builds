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
    var q = 0;
    Object.keys(control.value).forEach((/**
     * @param {?} key
     * @return {?}
     */
    function (key) { return (q += control.value[key]); }));
    return q > 0 ? null : { required: true };
}
/**
 * @abstract
 */
var OrderAmendService = /** @class */ (function () {
    function OrderAmendService(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    /**
     * Returns entries with an amended quantity.
     */
    /**
     * Returns entries with an amended quantity.
     * @return {?}
     */
    OrderAmendService.prototype.getAmendedEntries = /**
     * Returns entries with an amended quantity.
     * @return {?}
     */
    function () {
        var _this = this;
        return this.getForm().pipe(switchMap((/**
         * @param {?} form
         * @return {?}
         */
        function (form) {
            return _this.getEntries().pipe(map((/**
             * @param {?} entries
             * @return {?}
             */
            function (entries) {
                return entries.filter((/**
                 * @param {?} entry
                 * @return {?}
                 */
                function (entry) { return _this.getFormControl(form, entry).value > 0; }));
            })));
        })));
    };
    /**
     * @return {?}
     */
    OrderAmendService.prototype.getOrder = /**
     * @return {?}
     */
    function () {
        return this.orderDetailsService.getOrderDetails();
    };
    /**
     * returns the form with form data at runtime
     */
    /**
     * returns the form with form data at runtime
     * @return {?}
     */
    OrderAmendService.prototype.getForm = /**
     * returns the form with form data at runtime
     * @return {?}
     */
    function () {
        var _this = this;
        return this.getOrder().pipe(tap((/**
         * @param {?} order
         * @return {?}
         */
        function (order) {
            if (!_this.form || _this.form.get('orderCode').value !== order.code) {
                _this.buildForm(order);
            }
        })), map((/**
         * @return {?}
         */
        function () { return _this.form; })));
    };
    /**
     * @private
     * @param {?} order
     * @return {?}
     */
    OrderAmendService.prototype.buildForm = /**
     * @private
     * @param {?} order
     * @return {?}
     */
    function (order) {
        var _this = this;
        this.form = new FormGroup({});
        this.form.addControl('orderCode', new FormControl(order.code));
        /** @type {?} */
        var entryGroup = new FormGroup({}, { validators: [ValidateQuantity] });
        this.form.addControl('entries', entryGroup);
        (order.entries || []).forEach((/**
         * @param {?} entry
         * @return {?}
         */
        function (entry) {
            /** @type {?} */
            var key = entry.entryNumber.toString();
            entryGroup.addControl(key, new FormControl(0, {
                validators: [
                    Validators.min(0),
                    Validators.max(_this.getMaxAmendQuantity(entry)),
                ],
            }));
        }));
    };
    /**
     * @protected
     * @param {?} form
     * @param {?} entry
     * @return {?}
     */
    OrderAmendService.prototype.getFormControl = /**
     * @protected
     * @param {?} form
     * @param {?} entry
     * @return {?}
     */
    function (form, entry) {
        return (/** @type {?} */ (form.get('entries').get(entry.entryNumber.toString())));
    };
    /**
     * As discussed, this calculation is moved to SPA side.
     * The calculation and validation should be in backend facade layer.
     */
    /**
     * As discussed, this calculation is moved to SPA side.
     * The calculation and validation should be in backend facade layer.
     * @param {?} entry
     * @return {?}
     */
    OrderAmendService.prototype.getAmendedPrice = /**
     * As discussed, this calculation is moved to SPA side.
     * The calculation and validation should be in backend facade layer.
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        /** @type {?} */
        var amendedQuantity = this.getFormControl(this.form, entry).value;
        /** @type {?} */
        var amendedPrice = Object.assign({}, entry.basePrice);
        amendedPrice.value =
            Math.round(entry.basePrice.value * amendedQuantity * 100) / 100;
        amendedPrice.formattedValue = formatCurrency(amendedPrice.value, 
        // TODO: user current language
        'en', getCurrencySymbol(amendedPrice.currencyIso, 'narrow'), amendedPrice.currencyIso);
        return amendedPrice;
    };
    /**
     * @param {?} entry
     * @return {?}
     */
    OrderAmendService.prototype.getMaxAmendQuantity = /**
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        return ((this.isCancellation()
            ? entry.cancellableQuantity
            : entry.returnableQuantity) || entry.quantity);
    };
    /**
     * @return {?}
     */
    OrderAmendService.prototype.isCancellation = /**
     * @return {?}
     */
    function () {
        return this.amendType === AmendOrderType.CANCEL;
    };
    OrderAmendService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OrderAmendService.ctorParameters = function () { return [
        { type: OrderDetailsService }
    ]; };
    return OrderAmendService;
}());
export { OrderAmendService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9hbWVuZC1vcmRlci9hbWVuZC1vcmRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBRXJELFNBQVMsZ0JBQWdCLENBQUMsT0FBb0I7O1FBQ3hDLENBQUMsR0FBRyxDQUFDO0lBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTzs7OztJQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUF6QixDQUF5QixFQUFDLENBQUM7SUFFckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0FBQzNDLENBQUM7Ozs7QUFFRDtJQUtFLDJCQUFzQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUFHLENBQUM7SUFPbEU7O09BRUc7Ozs7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OztZQUM3RCxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUN2RCxZQUFZLENBQUMsS0FBSztZQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLGVBQWUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFbEUsWUFBWSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQzFDLFlBQVksQ0FBQyxLQUFLO1FBQ2xCLDhCQUE4QjtRQUM5QixJQUFJLEVBQ0osaUJBQWlCLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsRUFDckQsWUFBWSxDQUFDLFdBQVcsQ0FDekIsQ0FBQztRQUVGLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsK0NBQW1COzs7O0lBQW5CLFVBQW9CLEtBQWlCO1FBQ25DLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDcEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxtQkFBbUI7WUFDM0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQ2hELENBQUM7SUFDSixDQUFDOzs7O0lBRUQsMENBQWM7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLGNBQWMsQ0FBQyxNQUFNLENBQUM7SUFDbEQsQ0FBQzs7Z0JBMUdGLFVBQVU7Ozs7Z0JBVkYsbUJBQW1COztJQXFINUIsd0JBQUM7Q0FBQSxBQTNHRCxJQTJHQztTQTFHcUIsaUJBQWlCOzs7Ozs7SUFDckMsc0NBQW9DOzs7OztJQUNwQyxpQ0FBMEI7Ozs7O0lBRWQsZ0RBQWtEOzs7Ozs7SUFLOUQseURBQWdEOzs7Ozs7SUFvQmhELG1EQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdEN1cnJlbmN5LCBnZXRDdXJyZW5jeVN5bWJvbCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT3JkZXIsIE9yZGVyRW50cnksIFByaWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQW1lbmRPcmRlclR5cGUgfSBmcm9tICcuL2FtZW5kLW9yZGVyLm1vZGVsJztcblxuZnVuY3Rpb24gVmFsaWRhdGVRdWFudGl0eShjb250cm9sOiBGb3JtQ29udHJvbCkge1xuICBsZXQgcSA9IDA7XG4gIE9iamVjdC5rZXlzKGNvbnRyb2wudmFsdWUpLmZvckVhY2goa2V5ID0+IChxICs9IGNvbnRyb2wudmFsdWVba2V5XSkpO1xuXG4gIHJldHVybiBxID4gMCA/IG51bGwgOiB7IHJlcXVpcmVkOiB0cnVlIH07XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBPcmRlckFtZW5kU2VydmljZSB7XG4gIHByb3RlY3RlZCBhbWVuZFR5cGU6IEFtZW5kT3JkZXJUeXBlO1xuICBwcm90ZWN0ZWQgZm9ybTogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGVudHJpZXMgZm9yIHRoZSBnaXZlbiBvcmRlci5cbiAgICovXG4gIGFic3RyYWN0IGdldEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGVudHJpZXMgd2l0aCBhbiBhbWVuZGVkIHF1YW50aXR5LlxuICAgKi9cbiAgZ2V0QW1lbmRlZEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRGb3JtKCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChmb3JtID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RW50cmllcygpLnBpcGUoXG4gICAgICAgICAgbWFwKGVudHJpZXMgPT5cbiAgICAgICAgICAgIGVudHJpZXMuZmlsdGVyKGVudHJ5ID0+IHRoaXMuZ2V0Rm9ybUNvbnRyb2woZm9ybSwgZW50cnkpLnZhbHVlID4gMClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU3VibWl0cyB0aGUgYW1lbmRlZCBvcmRlci5cbiAgICovXG4gIGFic3RyYWN0IHNhdmUoKTogdm9pZDtcblxuICBnZXRPcmRlcigpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJEZXRhaWxzU2VydmljZS5nZXRPcmRlckRldGFpbHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRoZSBmb3JtIHdpdGggZm9ybSBkYXRhIGF0IHJ1bnRpbWVcbiAgICovXG4gIGdldEZvcm0oKTogT2JzZXJ2YWJsZTxGb3JtR3JvdXA+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRPcmRlcigpLnBpcGUoXG4gICAgICB0YXAob3JkZXIgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybSB8fCB0aGlzLmZvcm0uZ2V0KCdvcmRlckNvZGUnKS52YWx1ZSAhPT0gb3JkZXIuY29kZSkge1xuICAgICAgICAgIHRoaXMuYnVpbGRGb3JtKG9yZGVyKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKCkgPT4gdGhpcy5mb3JtKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRm9ybShvcmRlcjogT3JkZXIpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHt9KTtcbiAgICB0aGlzLmZvcm0uYWRkQ29udHJvbCgnb3JkZXJDb2RlJywgbmV3IEZvcm1Db250cm9sKG9yZGVyLmNvZGUpKTtcblxuICAgIGNvbnN0IGVudHJ5R3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9LCB7IHZhbGlkYXRvcnM6IFtWYWxpZGF0ZVF1YW50aXR5XSB9KTtcbiAgICB0aGlzLmZvcm0uYWRkQ29udHJvbCgnZW50cmllcycsIGVudHJ5R3JvdXApO1xuXG4gICAgKG9yZGVyLmVudHJpZXMgfHwgW10pLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gZW50cnkuZW50cnlOdW1iZXIudG9TdHJpbmcoKTtcbiAgICAgIGVudHJ5R3JvdXAuYWRkQ29udHJvbChcbiAgICAgICAga2V5LFxuICAgICAgICBuZXcgRm9ybUNvbnRyb2woMCwge1xuICAgICAgICAgIHZhbGlkYXRvcnM6IFtcbiAgICAgICAgICAgIFZhbGlkYXRvcnMubWluKDApLFxuICAgICAgICAgICAgVmFsaWRhdG9ycy5tYXgodGhpcy5nZXRNYXhBbWVuZFF1YW50aXR5KGVudHJ5KSksXG4gICAgICAgICAgXSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Rm9ybUNvbnRyb2woZm9ybTogRm9ybUdyb3VwLCBlbnRyeTogT3JkZXJFbnRyeSk6IEZvcm1Db250cm9sIHtcbiAgICByZXR1cm4gPEZvcm1Db250cm9sPmZvcm0uZ2V0KCdlbnRyaWVzJykuZ2V0KGVudHJ5LmVudHJ5TnVtYmVyLnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzIGRpc2N1c3NlZCwgdGhpcyBjYWxjdWxhdGlvbiBpcyBtb3ZlZCB0byBTUEEgc2lkZS5cbiAgICogVGhlIGNhbGN1bGF0aW9uIGFuZCB2YWxpZGF0aW9uIHNob3VsZCBiZSBpbiBiYWNrZW5kIGZhY2FkZSBsYXllci5cbiAgICovXG4gIGdldEFtZW5kZWRQcmljZShlbnRyeTogT3JkZXJFbnRyeSk6IFByaWNlIHtcbiAgICBjb25zdCBhbWVuZGVkUXVhbnRpdHkgPSB0aGlzLmdldEZvcm1Db250cm9sKHRoaXMuZm9ybSwgZW50cnkpLnZhbHVlO1xuICAgIGNvbnN0IGFtZW5kZWRQcmljZSA9IE9iamVjdC5hc3NpZ24oe30sIGVudHJ5LmJhc2VQcmljZSk7XG4gICAgYW1lbmRlZFByaWNlLnZhbHVlID1cbiAgICAgIE1hdGgucm91bmQoZW50cnkuYmFzZVByaWNlLnZhbHVlICogYW1lbmRlZFF1YW50aXR5ICogMTAwKSAvIDEwMDtcblxuICAgIGFtZW5kZWRQcmljZS5mb3JtYXR0ZWRWYWx1ZSA9IGZvcm1hdEN1cnJlbmN5KFxuICAgICAgYW1lbmRlZFByaWNlLnZhbHVlLFxuICAgICAgLy8gVE9ETzogdXNlciBjdXJyZW50IGxhbmd1YWdlXG4gICAgICAnZW4nLFxuICAgICAgZ2V0Q3VycmVuY3lTeW1ib2woYW1lbmRlZFByaWNlLmN1cnJlbmN5SXNvLCAnbmFycm93JyksXG4gICAgICBhbWVuZGVkUHJpY2UuY3VycmVuY3lJc29cbiAgICApO1xuXG4gICAgcmV0dXJuIGFtZW5kZWRQcmljZTtcbiAgfVxuXG4gIGdldE1heEFtZW5kUXVhbnRpdHkoZW50cnk6IE9yZGVyRW50cnkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuaXNDYW5jZWxsYXRpb24oKVxuICAgICAgICA/IGVudHJ5LmNhbmNlbGxhYmxlUXVhbnRpdHlcbiAgICAgICAgOiBlbnRyeS5yZXR1cm5hYmxlUXVhbnRpdHkpIHx8IGVudHJ5LnF1YW50aXR5XG4gICAgKTtcbiAgfVxuXG4gIGlzQ2FuY2VsbGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFtZW5kVHlwZSA9PT0gQW1lbmRPcmRlclR5cGUuQ0FOQ0VMO1xuICB9XG59XG4iXX0=