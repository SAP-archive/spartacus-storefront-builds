import { __decorate } from "tslib";
import { Component, HostBinding, HostListener, Input, ViewChild, } from '@angular/core';
import { map, startWith, tap } from 'rxjs/operators';
/**
 * Provides a UI to manage the count of the quantity, typically by using
 * increase and decrease functinality. The item counter expects an input `FormControl`
 * so that the state of the control can be managed outside of this component.
 */
let ItemCounterComponent = class ItemCounterComponent {
    constructor() {
        /**
         * This can be used in case an item has a minmum order quantity.
         * @default 1
         */
        this.min = 1;
        /**
         * The step is used to increment the count. It is supposed to be a
         * positive inteteger or float.
         * @default 1
         */
        this.step = 1;
        /**
         * Inidicates that the input can be manually set to zero,
         * despite the fact that the input controls will be limited to
         * the minimum. The zero value can be used to remove an item.
         */
        this.allowZero = false;
        /**
         * In readonly mode the item counter will only be shown as a label,
         * the form controls are not rendered.
         * Please not that readonly is different from the `disabled` form state.
         * @default false
         */
        this.readonly = false;
    }
    handleClick() {
        this.input.nativeElement.focus();
    }
    increment() {
        // it's too early to use the `stepUp` and `stepDown` API...
        // let's wait for FF: https://caniuse.com/#search=stepUp
        this.control.setValue(this.control.value + this.step);
        this.control.markAsDirty();
    }
    decrement() {
        this.control.setValue(this.control.value - this.step);
        this.control.markAsDirty();
    }
    /**
     * Returns an observable with the control. The value changes of the
     * control are intercepted in order to suppress invalid values.
     */
    getControl() {
        if (!this._control$) {
            this._control$ = this.control.valueChanges.pipe(startWith(this.control.value), tap(value => this.control.setValue(this.getValidCount(value), { emitEvent: false })), map(() => this.control));
        }
        return this._control$;
    }
    /**
     * Validate that the given value is in between
     * the `min` and `max` value. If the value is out
     * of  the min/max range, it will be altered.
     * If `allowZero` is set to true, the 0 value is ignored.
     *
     */
    getValidCount(value) {
        if (value < this.min && !(value === 0 && this.allowZero)) {
            value = this.min;
        }
        if (this.max && value > this.max) {
            value = this.max;
        }
        return value;
    }
};
__decorate([
    Input()
], ItemCounterComponent.prototype, "control", void 0);
__decorate([
    Input()
], ItemCounterComponent.prototype, "min", void 0);
__decorate([
    Input()
], ItemCounterComponent.prototype, "max", void 0);
__decorate([
    Input()
], ItemCounterComponent.prototype, "step", void 0);
__decorate([
    Input()
], ItemCounterComponent.prototype, "allowZero", void 0);
__decorate([
    HostBinding('class.readonly'), Input()
], ItemCounterComponent.prototype, "readonly", void 0);
__decorate([
    ViewChild('qty')
], ItemCounterComponent.prototype, "input", void 0);
__decorate([
    HostListener('click')
], ItemCounterComponent.prototype, "handleClick", null);
ItemCounterComponent = __decorate([
    Component({
        selector: 'cx-item-counter',
        template: "<button\n  type=\"button\"\n  (click)=\"decrement()\"\n  [disabled]=\"qty.disabled || qty?.value <= min\"\n  tabindex=\"-1\"\n>\n  -\n</button>\n\n<input\n  #qty\n  type=\"number\"\n  [min]=\"min\"\n  [max]=\"max\"\n  [step]=\"step\"\n  [formControl]=\"getControl() | async\"\n/>\n\n<button\n  type=\"button\"\n  (click)=\"increment()\"\n  [disabled]=\"qty.disabled || qty?.value >= max\"\n  tabindex=\"-1\"\n>\n  +\n</button>\n"
    })
], ItemCounterComponent);
export { ItemCounterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jb3VudGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2l0ZW0tY291bnRlci9pdGVtLWNvdW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRDs7OztHQUlHO0FBU0gsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFBakM7UUFPRTs7O1dBR0c7UUFDTSxRQUFHLEdBQUcsQ0FBQyxDQUFDO1FBT2pCOzs7O1dBSUc7UUFDTSxTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBRWxCOzs7O1dBSUc7UUFDTSxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBSTNCOzs7OztXQUtHO1FBQ3FDLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFxRDNELENBQUM7SUFqRHdCLFdBQVc7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELFNBQVM7UUFDUCwyREFBMkQ7UUFDM0Qsd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILFVBQVU7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDN0MsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQzdCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FDdkUsRUFDRCxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUN4QixDQUFDO1NBQ0g7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLGFBQWEsQ0FBQyxLQUFhO1FBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3hELEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2hDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0YsQ0FBQTtBQXhGVTtJQUFSLEtBQUssRUFBRTtxREFBc0I7QUFNckI7SUFBUixLQUFLLEVBQUU7aURBQVM7QUFLUjtJQUFSLEtBQUssRUFBRTtpREFBYTtBQU9aO0lBQVIsS0FBSyxFQUFFO2tEQUFVO0FBT1Q7SUFBUixLQUFLLEVBQUU7dURBQW1CO0FBVWE7SUFBdkMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsS0FBSyxFQUFFO3NEQUFrQjtBQUV2QztJQUFqQixTQUFTLENBQUMsS0FBSyxDQUFDO21EQUE2QztBQUV2QztJQUF0QixZQUFZLENBQUMsT0FBTyxDQUFDO3VEQUVyQjtBQTlDVSxvQkFBb0I7SUFSaEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQix3YkFBNEM7S0FLN0MsQ0FBQztHQUNXLG9CQUFvQixDQTZGaEM7U0E3Rlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGgsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBQcm92aWRlcyBhIFVJIHRvIG1hbmFnZSB0aGUgY291bnQgb2YgdGhlIHF1YW50aXR5LCB0eXBpY2FsbHkgYnkgdXNpbmdcbiAqIGluY3JlYXNlIGFuZCBkZWNyZWFzZSBmdW5jdGluYWxpdHkuIFRoZSBpdGVtIGNvdW50ZXIgZXhwZWN0cyBhbiBpbnB1dCBgRm9ybUNvbnRyb2xgXG4gKiBzbyB0aGF0IHRoZSBzdGF0ZSBvZiB0aGUgY29udHJvbCBjYW4gYmUgbWFuYWdlZCBvdXRzaWRlIG9mIHRoaXMgY29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1pdGVtLWNvdW50ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaXRlbS1jb3VudGVyLmNvbXBvbmVudC5odG1sJyxcbiAgLy8gZG8gbm90IHVzZSBPblB1c2ggY2hhbmdlIGRldGVjdGlvbiBzdHJhdGVneSBhcyB3ZSB3b3VsZCBub3RcbiAgLy8gZ2V0IHVwZGF0ZXMgb2Ygb3RoZXIgZm9ybSBjb250cm9sIHN0YXRlIChkaXNhYmxlZCkuIFdlIHdhbnQgdG8gaGF2ZSBhXG4gIC8vIGRpc2FibGVkIHN0YXRlIGluIG9yZGVyIHRvIGVuc3VyZSB0aGF0IHRoZSBjb250cm9sIGNhbm5vdCBiZSB1c2VkIHdoaWxlXG4gIC8vIHRoZSBjYXJ0IGlzIHVwZGF0ZWQuXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Db3VudGVyQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEhvbGRzIHRoZSB2YWx1ZSBvZiB0aGUgY291bnRlciwgdGhlIHN0YXRlIG9mIHRoZSBgRm9ybUNvbnRyb2xgXG4gICAqIGNhbiBiZSBtYW5hZ2VkIG91dHNpZGUgb2YgdGhlIGl0ZW0gY291bnRlci5cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRyb2w6IEZvcm1Db250cm9sO1xuXG4gIC8qKlxuICAgKiBUaGlzIGNhbiBiZSB1c2VkIGluIGNhc2UgYW4gaXRlbSBoYXMgYSBtaW5tdW0gb3JkZXIgcXVhbnRpdHkuXG4gICAqIEBkZWZhdWx0IDFcbiAgICovXG4gIEBJbnB1dCgpIG1pbiA9IDE7XG5cbiAgLyoqXG4gICAqIFRoaXMgY2FuIGJlIHVzZWQgaW4gY2FzZSBhbiBpdGVtIGhhcyBhIG1heGltdW0gb3JkZXIgcXVhbnRpdHkuXG4gICAqL1xuICBASW5wdXQoKSBtYXg6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHN0ZXAgaXMgdXNlZCB0byBpbmNyZW1lbnQgdGhlIGNvdW50LiBJdCBpcyBzdXBwb3NlZCB0byBiZSBhXG4gICAqIHBvc2l0aXZlIGludGV0ZWdlciBvciBmbG9hdC5cbiAgICogQGRlZmF1bHQgMVxuICAgKi9cbiAgQElucHV0KCkgc3RlcCA9IDE7XG5cbiAgLyoqXG4gICAqIEluaWRpY2F0ZXMgdGhhdCB0aGUgaW5wdXQgY2FuIGJlIG1hbnVhbGx5IHNldCB0byB6ZXJvLFxuICAgKiBkZXNwaXRlIHRoZSBmYWN0IHRoYXQgdGhlIGlucHV0IGNvbnRyb2xzIHdpbGwgYmUgbGltaXRlZCB0b1xuICAgKiB0aGUgbWluaW11bS4gVGhlIHplcm8gdmFsdWUgY2FuIGJlIHVzZWQgdG8gcmVtb3ZlIGFuIGl0ZW0uXG4gICAqL1xuICBASW5wdXQoKSBhbGxvd1plcm8gPSBmYWxzZTtcblxuICBwcml2YXRlIF9jb250cm9sJDogT2JzZXJ2YWJsZTxGb3JtQ29udHJvbD47XG5cbiAgLyoqXG4gICAqIEluIHJlYWRvbmx5IG1vZGUgdGhlIGl0ZW0gY291bnRlciB3aWxsIG9ubHkgYmUgc2hvd24gYXMgYSBsYWJlbCxcbiAgICogdGhlIGZvcm0gY29udHJvbHMgYXJlIG5vdCByZW5kZXJlZC5cbiAgICogUGxlYXNlIG5vdCB0aGF0IHJlYWRvbmx5IGlzIGRpZmZlcmVudCBmcm9tIHRoZSBgZGlzYWJsZWRgIGZvcm0gc3RhdGUuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnJlYWRvbmx5JykgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdxdHknKSBwcml2YXRlIGlucHV0OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBpbmNyZW1lbnQoKSB7XG4gICAgLy8gaXQncyB0b28gZWFybHkgdG8gdXNlIHRoZSBgc3RlcFVwYCBhbmQgYHN0ZXBEb3duYCBBUEkuLi5cbiAgICAvLyBsZXQncyB3YWl0IGZvciBGRjogaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXN0ZXBVcFxuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wudmFsdWUgKyB0aGlzLnN0ZXApO1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICB9XG5cbiAgZGVjcmVtZW50KCkge1xuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wudmFsdWUgLSB0aGlzLnN0ZXApO1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aXRoIHRoZSBjb250cm9sLiBUaGUgdmFsdWUgY2hhbmdlcyBvZiB0aGVcbiAgICogY29udHJvbCBhcmUgaW50ZXJjZXB0ZWQgaW4gb3JkZXIgdG8gc3VwcHJlc3MgaW52YWxpZCB2YWx1ZXMuXG4gICAqL1xuICBnZXRDb250cm9sKCk6IE9ic2VydmFibGU8Rm9ybUNvbnRyb2w+IHtcbiAgICBpZiAoIXRoaXMuX2NvbnRyb2wkKSB7XG4gICAgICB0aGlzLl9jb250cm9sJCA9IHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKHRoaXMuY29udHJvbC52YWx1ZSksXG4gICAgICAgIHRhcCh2YWx1ZSA9PlxuICAgICAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh0aGlzLmdldFZhbGlkQ291bnQodmFsdWUpLCB7IGVtaXRFdmVudDogZmFsc2UgfSlcbiAgICAgICAgKSxcbiAgICAgICAgbWFwKCgpID0+IHRoaXMuY29udHJvbClcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jb250cm9sJDtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB0aGF0IHRoZSBnaXZlbiB2YWx1ZSBpcyBpbiBiZXR3ZWVuXG4gICAqIHRoZSBgbWluYCBhbmQgYG1heGAgdmFsdWUuIElmIHRoZSB2YWx1ZSBpcyBvdXRcbiAgICogb2YgIHRoZSBtaW4vbWF4IHJhbmdlLCBpdCB3aWxsIGJlIGFsdGVyZWQuXG4gICAqIElmIGBhbGxvd1plcm9gIGlzIHNldCB0byB0cnVlLCB0aGUgMCB2YWx1ZSBpcyBpZ25vcmVkLlxuICAgKlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRWYWxpZENvdW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgPCB0aGlzLm1pbiAmJiAhKHZhbHVlID09PSAwICYmIHRoaXMuYWxsb3daZXJvKSkge1xuICAgICAgdmFsdWUgPSB0aGlzLm1pbjtcbiAgICB9XG4gICAgaWYgKHRoaXMubWF4ICYmIHZhbHVlID4gdGhpcy5tYXgpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5tYXg7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuIl19