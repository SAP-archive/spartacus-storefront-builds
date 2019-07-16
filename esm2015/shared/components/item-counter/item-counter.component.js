/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, Renderer2, ViewChild, } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
/** @type {?} */
const COUNTER_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line */
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => ItemCounterComponent)),
    multi: true,
};
export class ItemCounterComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.value = 0;
        this.step = 1;
        this.async = false;
        this.cartIsLoading = false;
        this.isValueChangeable = false;
        this.update = new EventEmitter();
        this.isValueOutOfRange = false;
        this.inputValue = new FormControl({
            disabled: this.isValueChangeable,
        });
        this.onTouch = (/**
         * @return {?}
         */
        () => { });
        this.onModelChange = (/**
         * @param {?} _rating
         * @return {?}
         */
        (_rating) => { });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.writeValue(this.min || 0);
        this.subscription = this.inputValue.valueChanges
            .pipe(debounceTime(300))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (value) {
                this.manualChange(Number(value));
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.cartIsLoading) {
            this.inputValue.disable({
                onlySelf: true,
                emitEvent: false,
            });
        }
        else {
            this.inputValue.enable({
                onlySelf: true,
                emitEvent: false,
            });
        }
    }
    /**
     * If value is too small it will be set to min, if is too big it will be set to max.
     * @param {?} incomingValue
     * @return {?}
     */
    adjustValueInRange(incomingValue) {
        return incomingValue < this.min || !this.min
            ? this.min
            : incomingValue > this.max || !this.max
                ? this.max
                : incomingValue;
    }
    /**
     * Update model value and refresh input
     * @param {?} newValue
     * @return {?}
     */
    manualChange(newValue) {
        newValue = this.adjustValueInRange(newValue);
        this.updateValue(newValue);
        /* We use the value from the input, however, this value
          is not the correct value that should be displayed. The correct value to display
          is this.value, which the parent updates if the async call succeed. If the call
          fails, then the input will need to display this.value, and not what the user
          recently typed in */
        this.renderer.setProperty(this.input.nativeElement, 'value', newValue);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        /** @type {?} */
        const handlers = {
            ArrowDown: (/**
             * @return {?}
             */
            () => this.decrement()),
            ArrowUp: (/**
             * @return {?}
             */
            () => this.increment()),
        };
        if (handlers[event.code]) {
            handlers[event.code]();
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        this.focus = false;
        event.preventDefault();
        event.stopPropagation();
        this.onTouch();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFocus(event) {
        this.focus = true;
        event.preventDefault();
        event.stopPropagation();
        this.onTouch();
    }
    /**
     * Verify value that it can be incremented, if yes it does that.
     * @return {?}
     */
    increment() {
        this.manualChange(this.value + this.step);
        this.setFocus(true);
    }
    /**
     * Verify value that it can be decremented, if yes it does that.
     * @return {?}
     */
    decrement() {
        this.manualChange(this.value - this.step);
        this.setFocus(false);
    }
    // ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value || this.min || 0;
        this.onModelChange(this.value);
    }
    /**
     * Set up new value for input and emit event outside
     * @param {?} updatedQuantity
     * @return {?}
     */
    updateValue(updatedQuantity) {
        if (!this.async) {
            // If the async flag is true, then the parent component is responsible for updating the form
            this.writeValue(updatedQuantity);
        }
        // Additionally, we emit a change event, so that users may optionally do something on change
        this.update.emit(updatedQuantity);
        this.onTouch();
    }
    /**
     * Determines which HTML element should have focus at a given time
     * @param {?} isIncremented
     * @return {?}
     */
    setFocus(isIncremented) {
        if (this.isMaxOrMinValueOrBeyond()) {
            this.input.nativeElement.focus();
        }
        else if (isIncremented) {
            this.incrementBtn.nativeElement.focus();
        }
        else {
            this.decrementBtn.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    isMaxOrMinValueOrBeyond() {
        return this.value >= this.max || this.value <= this.min;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
ItemCounterComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-item-counter',
                template: "<div class=\"cx-counter-wrapper\">\n  <div\n    class=\"cx-counter btn-group\"\n    role=\"group\"\n    tabindex=\"0\"\n    aria-label=\"Add more items\"\n    [class.focused]=\"focus\"\n    (keydown)=\"onKeyDown($event)\"\n    (blur)=\"onBlur($event)\"\n    (focus)=\"onFocus($event)\"\n  >\n    <button\n      #decrementBtn\n      type=\"button\"\n      class=\"cx-counter-action\"\n      (click)=\"decrement()\"\n      [disabled]=\"cartIsLoading || value <= min\"\n      *ngIf=\"isValueChangeable\"\n    >\n      -\n    </button>\n\n    <input\n      #itemCounterInput\n      class=\"cx-counter-value\"\n      type=\"text\"\n      name=\"value\"\n      cxOnlyNumber\n      [formControl]=\"inputValue\"\n      [value]=\"value\"\n      *ngIf=\"isValueChangeable\"\n    />\n    <div class=\"cx-counter-value\" *ngIf=\"!isValueChangeable\">\n      {{ value }}\n    </div>\n    <button\n      #incrementBtn\n      type=\"button\"\n      class=\"cx-counter-action\"\n      (click)=\"increment()\"\n      [disabled]=\"cartIsLoading || value >= max\"\n      *ngIf=\"isValueChangeable\"\n    >\n      +\n    </button>\n  </div>\n</div>\n",
                providers: [COUNTER_CONTROL_ACCESSOR]
            }] }
];
/** @nocollapse */
ItemCounterComponent.ctorParameters = () => [
    { type: Renderer2 }
];
ItemCounterComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['itemCounterInput', { static: false },] }],
    incrementBtn: [{ type: ViewChild, args: ['incrementBtn', { static: false },] }],
    decrementBtn: [{ type: ViewChild, args: ['decrementBtn', { static: false },] }],
    value: [{ type: Input }],
    step: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    async: [{ type: Input }],
    cartIsLoading: [{ type: Input }],
    isValueChangeable: [{ type: Input }],
    update: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ItemCounterComponent.prototype.input;
    /** @type {?} */
    ItemCounterComponent.prototype.incrementBtn;
    /** @type {?} */
    ItemCounterComponent.prototype.decrementBtn;
    /** @type {?} */
    ItemCounterComponent.prototype.value;
    /** @type {?} */
    ItemCounterComponent.prototype.step;
    /** @type {?} */
    ItemCounterComponent.prototype.min;
    /** @type {?} */
    ItemCounterComponent.prototype.max;
    /** @type {?} */
    ItemCounterComponent.prototype.async;
    /** @type {?} */
    ItemCounterComponent.prototype.cartIsLoading;
    /** @type {?} */
    ItemCounterComponent.prototype.isValueChangeable;
    /** @type {?} */
    ItemCounterComponent.prototype.update;
    /** @type {?} */
    ItemCounterComponent.prototype.focus;
    /** @type {?} */
    ItemCounterComponent.prototype.isValueOutOfRange;
    /** @type {?} */
    ItemCounterComponent.prototype.inputValue;
    /** @type {?} */
    ItemCounterComponent.prototype.subscription;
    /** @type {?} */
    ItemCounterComponent.prototype.onTouch;
    /** @type {?} */
    ItemCounterComponent.prototype.onModelChange;
    /**
     * @type {?}
     * @private
     */
    ItemCounterComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jb3VudGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2l0ZW0tY291bnRlci9pdGVtLWNvdW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBRUwsV0FBVyxFQUNYLGlCQUFpQixHQUNsQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7TUFFeEMsd0JBQXdCLEdBQUc7SUFDL0IsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixFQUFDO0lBQ25ELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFPRCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBNkQvQixZQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBbkR2QyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRVYsU0FBSSxHQUFHLENBQUMsQ0FBQztRQU1ULFVBQUssR0FBRyxLQUFLLENBQUM7UUFFZCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFHMUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFJcEMsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGVBQVUsR0FBZ0IsSUFBSSxXQUFXLENBQUM7WUFDeEMsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUI7U0FDakMsQ0FBQyxDQUFDO1FBK0JILFlBQU87OztRQUFhLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBQztRQUM3QixrQkFBYTs7OztRQUFhLENBQUMsT0FBZSxFQUFFLEVBQUUsR0FBRSxDQUFDLEVBQUM7SUFIUixDQUFDOzs7O0lBekIzQyxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZO2FBQzdDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkIsU0FBUzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDbEM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2dCQUN0QixRQUFRLEVBQUUsSUFBSTtnQkFDZCxTQUFTLEVBQUUsS0FBSzthQUNqQixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7Z0JBQ3JCLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7O0lBVUQsa0JBQWtCLENBQUMsYUFBcUI7UUFDdEMsT0FBTyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQzFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRztZQUNWLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO2dCQUN2QyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Z0JBQ1YsQ0FBQyxDQUFDLGFBQWEsQ0FBQztJQUNwQixDQUFDOzs7Ozs7SUFLRCxZQUFZLENBQUMsUUFBZ0I7UUFDM0IsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCOzs7OzhCQUlzQjtRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBb0I7O2NBQ3RCLFFBQVEsR0FBRztZQUNmLFNBQVM7OztZQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtZQUNqQyxPQUFPOzs7WUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7U0FDaEM7UUFFRCxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEIsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFpQjtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFpQjtRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7OztJQUtELFNBQVM7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFLRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUlELGlCQUFpQixDQUFDLEVBQVk7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFZO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBS0QsV0FBVyxDQUFDLGVBQXVCO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsNEZBQTRGO1lBQzVGLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDbEM7UUFFRCw0RkFBNEY7UUFDNUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7OztJQUtELFFBQVEsQ0FBQyxhQUFzQjtRQUM3QixJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2xDO2FBQU0sSUFBSSxhQUFhLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDekM7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7OztJQUVELHVCQUF1QjtRQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDMUQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7OztZQTdMRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0Isc25DQUE0QztnQkFDNUMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDdEM7Ozs7WUF0QkMsU0FBUzs7O29CQXlCUixTQUFTLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzJCQUUvQyxTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTsyQkFFM0MsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7b0JBRzNDLEtBQUs7bUJBRUwsS0FBSztrQkFFTCxLQUFLO2tCQUVMLEtBQUs7b0JBRUwsS0FBSzs0QkFFTCxLQUFLO2dDQUVMLEtBQUs7cUJBR0wsTUFBTTs7OztJQXRCUCxxQ0FDeUI7O0lBQ3pCLDRDQUNnQzs7SUFDaEMsNENBQ2dDOztJQUVoQyxxQ0FDVTs7SUFDVixvQ0FDUzs7SUFDVCxtQ0FDWTs7SUFDWixtQ0FDWTs7SUFDWixxQ0FDYzs7SUFDZCw2Q0FDc0I7O0lBQ3RCLGlEQUMwQjs7SUFFMUIsc0NBQ29DOztJQUVwQyxxQ0FBZTs7SUFFZixpREFBMEI7O0lBQzFCLDBDQUVHOztJQUVILDRDQUEyQjs7SUE2QjNCLHVDQUE2Qjs7SUFDN0IsNkNBQWtEOzs7OztJQUh0Qyx3Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIEZvcm1Db250cm9sLFxuICBOR19WQUxVRV9BQ0NFU1NPUixcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IENPVU5URVJfQ09OVFJPTF9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJdGVtQ291bnRlckNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtaXRlbS1jb3VudGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2l0ZW0tY291bnRlci5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW0NPVU5URVJfQ09OVFJPTF9BQ0NFU1NPUl0sXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Db3VudGVyQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCdpdGVtQ291bnRlcklucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHB1YmxpYyBpbnB1dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnaW5jcmVtZW50QnRuJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHB1YmxpYyBpbmNyZW1lbnRCdG46IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2RlY3JlbWVudEJ0bicsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBwdWJsaWMgZGVjcmVtZW50QnRuOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpXG4gIHZhbHVlID0gMDtcbiAgQElucHV0KClcbiAgc3RlcCA9IDE7XG4gIEBJbnB1dCgpXG4gIG1pbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBtYXg6IG51bWJlcjtcbiAgQElucHV0KClcbiAgYXN5bmMgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgY2FydElzTG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBpc1ZhbHVlQ2hhbmdlYWJsZSA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBmb2N1czogYm9vbGVhbjtcblxuICBpc1ZhbHVlT3V0T2ZSYW5nZSA9IGZhbHNlO1xuICBpbnB1dFZhbHVlOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCh7XG4gICAgZGlzYWJsZWQ6IHRoaXMuaXNWYWx1ZUNoYW5nZWFibGUsXG4gIH0pO1xuXG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMud3JpdGVWYWx1ZSh0aGlzLm1pbiB8fCAwKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuaW5wdXRWYWx1ZS52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgzMDApKVxuICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIHRoaXMubWFudWFsQ2hhbmdlKE51bWJlcih2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmNhcnRJc0xvYWRpbmcpIHtcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZS5kaXNhYmxlKHtcbiAgICAgICAgb25seVNlbGY6IHRydWUsXG4gICAgICAgIGVtaXRFdmVudDogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dFZhbHVlLmVuYWJsZSh7XG4gICAgICAgIG9ubHlTZWxmOiB0cnVlLFxuICAgICAgICBlbWl0RXZlbnQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIG9uVG91Y2g6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKF9yYXRpbmc6IG51bWJlcikgPT4ge307XG5cbiAgLyoqXG4gICAqIElmIHZhbHVlIGlzIHRvbyBzbWFsbCBpdCB3aWxsIGJlIHNldCB0byBtaW4sIGlmIGlzIHRvbyBiaWcgaXQgd2lsbCBiZSBzZXQgdG8gbWF4LlxuICAgKi9cbiAgYWRqdXN0VmFsdWVJblJhbmdlKGluY29taW5nVmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIGluY29taW5nVmFsdWUgPCB0aGlzLm1pbiB8fCAhdGhpcy5taW5cbiAgICAgID8gdGhpcy5taW5cbiAgICAgIDogaW5jb21pbmdWYWx1ZSA+IHRoaXMubWF4IHx8ICF0aGlzLm1heFxuICAgICAgPyB0aGlzLm1heFxuICAgICAgOiBpbmNvbWluZ1ZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBtb2RlbCB2YWx1ZSBhbmQgcmVmcmVzaCBpbnB1dFxuICAgKi9cbiAgbWFudWFsQ2hhbmdlKG5ld1ZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBuZXdWYWx1ZSA9IHRoaXMuYWRqdXN0VmFsdWVJblJhbmdlKG5ld1ZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKG5ld1ZhbHVlKTtcbiAgICAvKiBXZSB1c2UgdGhlIHZhbHVlIGZyb20gdGhlIGlucHV0LCBob3dldmVyLCB0aGlzIHZhbHVlXG4gICAgICBpcyBub3QgdGhlIGNvcnJlY3QgdmFsdWUgdGhhdCBzaG91bGQgYmUgZGlzcGxheWVkLiBUaGUgY29ycmVjdCB2YWx1ZSB0byBkaXNwbGF5XG4gICAgICBpcyB0aGlzLnZhbHVlLCB3aGljaCB0aGUgcGFyZW50IHVwZGF0ZXMgaWYgdGhlIGFzeW5jIGNhbGwgc3VjY2VlZC4gSWYgdGhlIGNhbGxcbiAgICAgIGZhaWxzLCB0aGVuIHRoZSBpbnB1dCB3aWxsIG5lZWQgdG8gZGlzcGxheSB0aGlzLnZhbHVlLCBhbmQgbm90IHdoYXQgdGhlIHVzZXJcbiAgICAgIHJlY2VudGx5IHR5cGVkIGluICovXG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIG5ld1ZhbHVlKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGhhbmRsZXJzID0ge1xuICAgICAgQXJyb3dEb3duOiAoKSA9PiB0aGlzLmRlY3JlbWVudCgpLFxuICAgICAgQXJyb3dVcDogKCkgPT4gdGhpcy5pbmNyZW1lbnQoKSxcbiAgICB9O1xuXG4gICAgaWYgKGhhbmRsZXJzW2V2ZW50LmNvZGVdKSB7XG4gICAgICBoYW5kbGVyc1tldmVudC5jb2RlXSgpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIG9uQmx1cihldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXMgPSBmYWxzZTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMub25Ub3VjaCgpO1xuICB9XG5cbiAgb25Gb2N1cyhldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXMgPSB0cnVlO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5vblRvdWNoKCk7XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZ5IHZhbHVlIHRoYXQgaXQgY2FuIGJlIGluY3JlbWVudGVkLCBpZiB5ZXMgaXQgZG9lcyB0aGF0LlxuICAgKi9cbiAgaW5jcmVtZW50KCk6IHZvaWQge1xuICAgIHRoaXMubWFudWFsQ2hhbmdlKHRoaXMudmFsdWUgKyB0aGlzLnN0ZXApO1xuICAgIHRoaXMuc2V0Rm9jdXModHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZ5IHZhbHVlIHRoYXQgaXQgY2FuIGJlIGRlY3JlbWVudGVkLCBpZiB5ZXMgaXQgZG9lcyB0aGF0LlxuICAgKi9cbiAgZGVjcmVtZW50KCk6IHZvaWQge1xuICAgIHRoaXMubWFudWFsQ2hhbmdlKHRoaXMudmFsdWUgLSB0aGlzLnN0ZXApO1xuICAgIHRoaXMuc2V0Rm9jdXMoZmFsc2UpO1xuICB9XG5cbiAgLy8gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlIHx8IHRoaXMubWluIHx8IDA7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB1cCBuZXcgdmFsdWUgZm9yIGlucHV0IGFuZCBlbWl0IGV2ZW50IG91dHNpZGVcbiAgICovXG4gIHVwZGF0ZVZhbHVlKHVwZGF0ZWRRdWFudGl0eTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmFzeW5jKSB7XG4gICAgICAvLyBJZiB0aGUgYXN5bmMgZmxhZyBpcyB0cnVlLCB0aGVuIHRoZSBwYXJlbnQgY29tcG9uZW50IGlzIHJlc3BvbnNpYmxlIGZvciB1cGRhdGluZyB0aGUgZm9ybVxuICAgICAgdGhpcy53cml0ZVZhbHVlKHVwZGF0ZWRRdWFudGl0eSk7XG4gICAgfVxuXG4gICAgLy8gQWRkaXRpb25hbGx5LCB3ZSBlbWl0IGEgY2hhbmdlIGV2ZW50LCBzbyB0aGF0IHVzZXJzIG1heSBvcHRpb25hbGx5IGRvIHNvbWV0aGluZyBvbiBjaGFuZ2VcbiAgICB0aGlzLnVwZGF0ZS5lbWl0KHVwZGF0ZWRRdWFudGl0eSk7XG4gICAgdGhpcy5vblRvdWNoKCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGljaCBIVE1MIGVsZW1lbnQgc2hvdWxkIGhhdmUgZm9jdXMgYXQgYSBnaXZlbiB0aW1lXG4gICAqL1xuICBzZXRGb2N1cyhpc0luY3JlbWVudGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNNYXhPck1pblZhbHVlT3JCZXlvbmQoKSkge1xuICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmIChpc0luY3JlbWVudGVkKSB7XG4gICAgICB0aGlzLmluY3JlbWVudEJ0bi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVjcmVtZW50QnRuLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBpc01heE9yTWluVmFsdWVPckJleW9uZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSA+PSB0aGlzLm1heCB8fCB0aGlzLnZhbHVlIDw9IHRoaXMubWluO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19