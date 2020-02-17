/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, HostListener, Input, ViewChild, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith, tap } from 'rxjs/operators';
/**
 * Provides a UI to manage the count of the quantity, typically by using
 * increase and decrease functinality. The item counter expects an input `FormControl`
 * so that the state of the control can be managed outside of this component.
 */
export class ItemCounterComponent {
    constructor() {
        /**
         * This can be used in case an item has a minmum order quantity.
         * \@default 1
         */
        this.min = 1;
        /**
         * The step is used to increment the count. It is supposed to be a
         * positive inteteger or float.
         * \@default 1
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
         * \@default false
         */
        this.readonly = false;
    }
    /**
     * @return {?}
     */
    handleClick() {
        this.input.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    increment() {
        // it's too early to use the `stepUp` and `stepDown` API...
        // let's wait for FF: https://caniuse.com/#search=stepUp
        this.control.setValue(this.control.value + this.step);
        this.control.markAsDirty();
    }
    /**
     * @return {?}
     */
    decrement() {
        this.control.setValue(this.control.value - this.step);
        this.control.markAsDirty();
    }
    /**
     * Returns an observable with the control. The value changes of the
     * control are intercepted in order to suppress invalid values.
     * @return {?}
     */
    getControl() {
        if (!this._control$) {
            this._control$ = this.control.valueChanges.pipe(startWith(this.control.value), tap((/**
             * @param {?} value
             * @return {?}
             */
            value => this.control.setValue(this.getValidCount(value), { emitEvent: false }))), map((/**
             * @return {?}
             */
            () => this.control)));
        }
        return this._control$;
    }
    /**
     * Validate that the given value is in between
     * the `min` and `max` value. If the value is out
     * of  the min/max range, it will be altered.
     * If `allowZero` is set to true, the 0 value is ignored.
     *
     * @private
     * @param {?} value
     * @return {?}
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
}
ItemCounterComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-item-counter',
                template: "<button\n  type=\"button\"\n  (click)=\"decrement()\"\n  [disabled]=\"qty.disabled || qty?.value <= min\"\n  tabindex=\"-1\"\n>\n  -\n</button>\n\n<input\n  #qty\n  type=\"number\"\n  [min]=\"min\"\n  [max]=\"max\"\n  [step]=\"step\"\n  [formControl]=\"getControl() | async\"\n/>\n\n<button\n  type=\"button\"\n  (click)=\"increment()\"\n  [disabled]=\"qty.disabled || qty?.value >= max\"\n  tabindex=\"-1\"\n>\n  +\n</button>\n"
            }] }
];
ItemCounterComponent.propDecorators = {
    control: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }],
    allowZero: [{ type: Input }],
    readonly: [{ type: HostBinding, args: ['class.readonly',] }, { type: Input }],
    input: [{ type: ViewChild, args: ['qty', { static: false },] }],
    handleClick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /**
     * Holds the value of the counter, the state of the `FormControl`
     * can be managed outside of the item counter.
     * @type {?}
     */
    ItemCounterComponent.prototype.control;
    /**
     * This can be used in case an item has a minmum order quantity.
     * \@default 1
     * @type {?}
     */
    ItemCounterComponent.prototype.min;
    /**
     * This can be used in case an item has a maximum order quantity.
     * @type {?}
     */
    ItemCounterComponent.prototype.max;
    /**
     * The step is used to increment the count. It is supposed to be a
     * positive inteteger or float.
     * \@default 1
     * @type {?}
     */
    ItemCounterComponent.prototype.step;
    /**
     * Inidicates that the input can be manually set to zero,
     * despite the fact that the input controls will be limited to
     * the minimum. The zero value can be used to remove an item.
     * @type {?}
     */
    ItemCounterComponent.prototype.allowZero;
    /**
     * @type {?}
     * @private
     */
    ItemCounterComponent.prototype._control$;
    /**
     * In readonly mode the item counter will only be shown as a label,
     * the form controls are not rendered.
     * Please not that readonly is different from the `disabled` form state.
     * \@default false
     * @type {?}
     */
    ItemCounterComponent.prototype.readonly;
    /**
     * @type {?}
     * @private
     */
    ItemCounterComponent.prototype.input;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jb3VudGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2l0ZW0tY291bnRlci9pdGVtLWNvdW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFlckQsTUFBTSxPQUFPLG9CQUFvQjtJQVJqQzs7Ozs7UUFtQlcsUUFBRyxHQUFHLENBQUMsQ0FBQzs7Ozs7O1FBWVIsU0FBSSxHQUFHLENBQUMsQ0FBQzs7Ozs7O1FBT1QsY0FBUyxHQUFHLEtBQUssQ0FBQzs7Ozs7OztRQVVhLGFBQVEsR0FBRyxLQUFLLENBQUM7SUF1RDNELENBQUM7Ozs7SUFqRHdCLFdBQVc7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCwyREFBMkQ7UUFDM0Qsd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7O0lBTUQsVUFBVTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUM3QyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFDN0IsR0FBRzs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUN2RSxFQUNELEdBQUc7OztZQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FDeEIsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7Ozs7Ozs7O0lBU08sYUFBYSxDQUFDLEtBQWE7UUFDakMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDeEQsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDbEI7UUFDRCxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDaEMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDbEI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQXRHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0Isd2JBQTRDO2FBSzdDOzs7c0JBTUUsS0FBSztrQkFNTCxLQUFLO2tCQUtMLEtBQUs7bUJBT0wsS0FBSzt3QkFPTCxLQUFLO3VCQVVMLFdBQVcsU0FBQyxnQkFBZ0IsY0FBRyxLQUFLO29CQUVwQyxTQUFTLFNBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTswQkFJbEMsWUFBWSxTQUFDLE9BQU87Ozs7Ozs7O0lBekNyQix1Q0FBOEI7Ozs7OztJQU05QixtQ0FBaUI7Ozs7O0lBS2pCLG1DQUFxQjs7Ozs7OztJQU9yQixvQ0FBa0I7Ozs7Ozs7SUFPbEIseUNBQTJCOzs7OztJQUUzQix5Q0FBMkM7Ozs7Ozs7O0lBUTNDLHdDQUF5RDs7Ozs7SUFFekQscUNBRUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIFByb3ZpZGVzIGEgVUkgdG8gbWFuYWdlIHRoZSBjb3VudCBvZiB0aGUgcXVhbnRpdHksIHR5cGljYWxseSBieSB1c2luZ1xuICogaW5jcmVhc2UgYW5kIGRlY3JlYXNlIGZ1bmN0aW5hbGl0eS4gVGhlIGl0ZW0gY291bnRlciBleHBlY3RzIGFuIGlucHV0IGBGb3JtQ29udHJvbGBcbiAqIHNvIHRoYXQgdGhlIHN0YXRlIG9mIHRoZSBjb250cm9sIGNhbiBiZSBtYW5hZ2VkIG91dHNpZGUgb2YgdGhpcyBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWl0ZW0tY291bnRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pdGVtLWNvdW50ZXIuY29tcG9uZW50Lmh0bWwnLFxuICAvLyBkbyBub3QgdXNlIE9uUHVzaCBjaGFuZ2UgZGV0ZWN0aW9uIHN0cmF0ZWd5IGFzIHdlIHdvdWxkIG5vdFxuICAvLyBnZXQgdXBkYXRlcyBvZiBvdGhlciBmb3JtIGNvbnRyb2wgc3RhdGUgKGRpc2FibGVkKS4gV2Ugd2FudCB0byBoYXZlIGFcbiAgLy8gZGlzYWJsZWQgc3RhdGUgaW4gb3JkZXIgdG8gZW5zdXJlIHRoYXQgdGhlIGNvbnRyb2wgY2Fubm90IGJlIHVzZWQgd2hpbGVcbiAgLy8gdGhlIGNhcnQgaXMgdXBkYXRlZC5cbn0pXG5leHBvcnQgY2xhc3MgSXRlbUNvdW50ZXJDb21wb25lbnQge1xuICAvKipcbiAgICogSG9sZHMgdGhlIHZhbHVlIG9mIHRoZSBjb3VudGVyLCB0aGUgc3RhdGUgb2YgdGhlIGBGb3JtQ29udHJvbGBcbiAgICogY2FuIGJlIG1hbmFnZWQgb3V0c2lkZSBvZiB0aGUgaXRlbSBjb3VudGVyLlxuICAgKi9cbiAgQElucHV0KCkgY29udHJvbDogRm9ybUNvbnRyb2w7XG5cbiAgLyoqXG4gICAqIFRoaXMgY2FuIGJlIHVzZWQgaW4gY2FzZSBhbiBpdGVtIGhhcyBhIG1pbm11bSBvcmRlciBxdWFudGl0eS5cbiAgICogQGRlZmF1bHQgMVxuICAgKi9cbiAgQElucHV0KCkgbWluID0gMTtcblxuICAvKipcbiAgICogVGhpcyBjYW4gYmUgdXNlZCBpbiBjYXNlIGFuIGl0ZW0gaGFzIGEgbWF4aW11bSBvcmRlciBxdWFudGl0eS5cbiAgICovXG4gIEBJbnB1dCgpIG1heDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgc3RlcCBpcyB1c2VkIHRvIGluY3JlbWVudCB0aGUgY291bnQuIEl0IGlzIHN1cHBvc2VkIHRvIGJlIGFcbiAgICogcG9zaXRpdmUgaW50ZXRlZ2VyIG9yIGZsb2F0LlxuICAgKiBAZGVmYXVsdCAxXG4gICAqL1xuICBASW5wdXQoKSBzdGVwID0gMTtcblxuICAvKipcbiAgICogSW5pZGljYXRlcyB0aGF0IHRoZSBpbnB1dCBjYW4gYmUgbWFudWFsbHkgc2V0IHRvIHplcm8sXG4gICAqIGRlc3BpdGUgdGhlIGZhY3QgdGhhdCB0aGUgaW5wdXQgY29udHJvbHMgd2lsbCBiZSBsaW1pdGVkIHRvXG4gICAqIHRoZSBtaW5pbXVtLiBUaGUgemVybyB2YWx1ZSBjYW4gYmUgdXNlZCB0byByZW1vdmUgYW4gaXRlbS5cbiAgICovXG4gIEBJbnB1dCgpIGFsbG93WmVybyA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2NvbnRyb2wkOiBPYnNlcnZhYmxlPEZvcm1Db250cm9sPjtcblxuICAvKipcbiAgICogSW4gcmVhZG9ubHkgbW9kZSB0aGUgaXRlbSBjb3VudGVyIHdpbGwgb25seSBiZSBzaG93biBhcyBhIGxhYmVsLFxuICAgKiB0aGUgZm9ybSBjb250cm9scyBhcmUgbm90IHJlbmRlcmVkLlxuICAgKiBQbGVhc2Ugbm90IHRoYXQgcmVhZG9ubHkgaXMgZGlmZmVyZW50IGZyb20gdGhlIGBkaXNhYmxlZGAgZm9ybSBzdGF0ZS5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MucmVhZG9ubHknKSBASW5wdXQoKSByZWFkb25seSA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ3F0eScsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIGlucHV0OiBFbGVtZW50UmVmPFxuICAgIEhUTUxJbnB1dEVsZW1lbnRcbiAgPjtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIGhhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgaW5jcmVtZW50KCkge1xuICAgIC8vIGl0J3MgdG9vIGVhcmx5IHRvIHVzZSB0aGUgYHN0ZXBVcGAgYW5kIGBzdGVwRG93bmAgQVBJLi4uXG4gICAgLy8gbGV0J3Mgd2FpdCBmb3IgRkY6IGh0dHBzOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1zdGVwVXBcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodGhpcy5jb250cm9sLnZhbHVlICsgdGhpcy5zdGVwKTtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgfVxuXG4gIGRlY3JlbWVudCgpIHtcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodGhpcy5jb250cm9sLnZhbHVlIC0gdGhpcy5zdGVwKTtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgY29udHJvbC4gVGhlIHZhbHVlIGNoYW5nZXMgb2YgdGhlXG4gICAqIGNvbnRyb2wgYXJlIGludGVyY2VwdGVkIGluIG9yZGVyIHRvIHN1cHByZXNzIGludmFsaWQgdmFsdWVzLlxuICAgKi9cbiAgZ2V0Q29udHJvbCgpOiBPYnNlcnZhYmxlPEZvcm1Db250cm9sPiB7XG4gICAgaWYgKCF0aGlzLl9jb250cm9sJCkge1xuICAgICAgdGhpcy5fY29udHJvbCQgPSB0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCh0aGlzLmNvbnRyb2wudmFsdWUpLFxuICAgICAgICB0YXAodmFsdWUgPT5cbiAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodGhpcy5nZXRWYWxpZENvdW50KHZhbHVlKSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pXG4gICAgICAgICksXG4gICAgICAgIG1hcCgoKSA9PiB0aGlzLmNvbnRyb2wpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY29udHJvbCQ7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgdGhhdCB0aGUgZ2l2ZW4gdmFsdWUgaXMgaW4gYmV0d2VlblxuICAgKiB0aGUgYG1pbmAgYW5kIGBtYXhgIHZhbHVlLiBJZiB0aGUgdmFsdWUgaXMgb3V0XG4gICAqIG9mICB0aGUgbWluL21heCByYW5nZSwgaXQgd2lsbCBiZSBhbHRlcmVkLlxuICAgKiBJZiBgYWxsb3daZXJvYCBpcyBzZXQgdG8gdHJ1ZSwgdGhlIDAgdmFsdWUgaXMgaWdub3JlZC5cbiAgICpcbiAgICovXG4gIHByaXZhdGUgZ2V0VmFsaWRDb3VudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlIDwgdGhpcy5taW4gJiYgISh2YWx1ZSA9PT0gMCAmJiB0aGlzLmFsbG93WmVybykpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5taW47XG4gICAgfVxuICAgIGlmICh0aGlzLm1heCAmJiB2YWx1ZSA+IHRoaXMubWF4KSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubWF4O1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbiJdfQ==