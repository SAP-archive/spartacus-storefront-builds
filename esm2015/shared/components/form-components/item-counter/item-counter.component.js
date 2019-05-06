/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, Renderer2, ViewChild, } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
/** @type {?} */
const COUNTER_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line */
    useExisting: forwardRef(() => ItemCounterComponent),
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
        this.onTouch = () => { };
        this.onModelChange = (_rating) => { };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.writeValue(this.min || 0);
        this.inputValue.valueChanges.pipe(debounceTime(300)).subscribe(value => {
            if (value) {
                this.manualChange(Number(value));
            }
        });
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
     * Function set 'isValueOutOfRange' flag and adjust value in range. Then update model value and refresh input
     * @param {?} newValue
     * @return {?}
     */
    manualChange(newValue) {
        this.isValueOutOfRange = this.isOutOfRange(newValue);
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
     * Verify value for decision about displaying error about range
     * @param {?} value
     * @return {?}
     */
    isOutOfRange(value) {
        return value < this.min || value > this.max;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        /** @type {?} */
        const handlers = {
            ArrowDown: () => this.decrement(),
            ArrowUp: () => this.increment(),
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
    }
    /**
     * Verify value that it can be decremented, if yes it does that.
     * @return {?}
     */
    decrement() {
        this.manualChange(this.value - this.step);
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
}
ItemCounterComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-item-counter',
                template: "<div class=\"cx-counter-wrapper\">\n  <div\n    class=\"cx-counter btn-group\"\n    role=\"group\"\n    tabindex=\"0\"\n    aria-label=\"Add more items\"\n    [class.focused]=\"focus\"\n    (keydown)=\"onKeyDown($event)\"\n    (blur)=\"onBlur($event)\"\n    (focus)=\"onFocus($event)\"\n  >\n    <button\n      type=\"button\"\n      class=\"cx-counter-action\"\n      (click)=\"decrement()\"\n      [disabled]=\"cartIsLoading || value <= min\"\n    >\n      -\n    </button>\n    <input\n      #itemCounterInput\n      class=\"cx-counter-value\"\n      type=\"text\"\n      name=\"value\"\n      cxOnlyNumber\n      [formControl]=\"inputValue\"\n      [value]=\"value\"\n      *ngIf=\"isValueChangeable\"\n    />\n    <div class=\"cx-counter-value\" *ngIf=\"!isValueChangeable\">\n      {{ value }}\n    </div>\n    <button\n      type=\"button\"\n      class=\"cx-counter-action\"\n      (click)=\"increment()\"\n      [disabled]=\"cartIsLoading || value >= max\"\n    >\n      +\n    </button>\n  </div>\n</div>\n",
                providers: [COUNTER_CONTROL_ACCESSOR]
            }] }
];
/** @nocollapse */
ItemCounterComponent.ctorParameters = () => [
    { type: Renderer2 }
];
ItemCounterComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['itemCounterInput',] }],
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
    ItemCounterComponent.prototype.onTouch;
    /** @type {?} */
    ItemCounterComponent.prototype.onModelChange;
    /**
     * @type {?}
     * @private
     */
    ItemCounterComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jb3VudGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2Zvcm0tY29tcG9uZW50cy9pdGVtLWNvdW50ZXIvaXRlbS1jb3VudGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLFdBQVcsRUFDWCxpQkFBaUIsR0FDbEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O01BRXhDLHdCQUF3QixHQUFHO0lBQy9CLE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUM7SUFDbkQsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQU9ELE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFvRC9CLFlBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUEvQ3ZDLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFVixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBTVQsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUVkLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUcxQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUlwQyxzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsZUFBVSxHQUFnQixJQUFJLFdBQVcsQ0FBQztZQUN4QyxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtTQUNqQyxDQUFDLENBQUM7UUEyQkgsWUFBTyxHQUFhLEdB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QzNCLG9nQ0FBNEM7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDOzs7O1lBckJDLFNBQVM7OztvQkF3QlIsU0FBUyxTQUFDLGtCQUFrQjttQkFJNUIsS0FBSztrQkFFTCxLQUFLO2tCQUVMLEtBQUs7b0JBRUwsS0FBSzs0QkFFTCxLQUFLO2dDQUVMLEtBQUs7cUJBR0wsTUFBTTs7OztJQWpCUCxxQ0FDeUI7O0lBRXpCLHFDQUFVOztJQUNWLG9DQUNTOztJQUNULG1DQUNZOztJQUNaLG1DQUNZOztJQUNaLHFDQUNjOztJQUNkLDZDQUNzQjs7SUFDdEIsaURBQzBCOztJQUUxQixzQ0FDb0M7O0lBRXBDLHFDQUFlOztJQUVmLGlEQUEwQjs7SUFDMUIsMENBRUc7O0lBMkJILHVDQUE2Qjs7SUFDN0IsNkNBQWtEOzs7OztJQUh0Qyx3Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBGb3JtQ29udHJvbCxcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgQ09VTlRFUl9DT05UUk9MX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEl0ZW1Db3VudGVyQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1pdGVtLWNvdW50ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaXRlbS1jb3VudGVyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbQ09VTlRFUl9DT05UUk9MX0FDQ0VTU09SXSxcbn0pXG5leHBvcnQgY2xhc3MgSXRlbUNvdW50ZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdpdGVtQ291bnRlcklucHV0JylcbiAgcHVibGljIGlucHV0OiBFbGVtZW50UmVmO1xuXG4gIHZhbHVlID0gMDtcbiAgQElucHV0KClcbiAgc3RlcCA9IDE7XG4gIEBJbnB1dCgpXG4gIG1pbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBtYXg6IG51bWJlcjtcbiAgQElucHV0KClcbiAgYXN5bmMgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgY2FydElzTG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBpc1ZhbHVlQ2hhbmdlYWJsZSA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBmb2N1czogYm9vbGVhbjtcblxuICBpc1ZhbHVlT3V0T2ZSYW5nZSA9IGZhbHNlO1xuICBpbnB1dFZhbHVlOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCh7XG4gICAgZGlzYWJsZWQ6IHRoaXMuaXNWYWx1ZUNoYW5nZWFibGUsXG4gIH0pO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMud3JpdGVWYWx1ZSh0aGlzLm1pbiB8fCAwKTtcbiAgICB0aGlzLmlucHV0VmFsdWUudmFsdWVDaGFuZ2VzLnBpcGUoZGVib3VuY2VUaW1lKDMwMCkpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5tYW51YWxDaGFuZ2UoTnVtYmVyKHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5jYXJ0SXNMb2FkaW5nKSB7XG4gICAgICB0aGlzLmlucHV0VmFsdWUuZGlzYWJsZSh7XG4gICAgICAgIG9ubHlTZWxmOiB0cnVlLFxuICAgICAgICBlbWl0RXZlbnQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZS5lbmFibGUoe1xuICAgICAgICBvbmx5U2VsZjogdHJ1ZSxcbiAgICAgICAgZW1pdEV2ZW50OiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBvblRvdWNoOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9IChfcmF0aW5nOiBudW1iZXIpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBJZiB2YWx1ZSBpcyB0b28gc21hbGwgaXQgd2lsbCBiZSBzZXQgdG8gbWluLCBpZiBpcyB0b28gYmlnIGl0IHdpbGwgYmUgc2V0IHRvIG1heC5cbiAgICovXG4gIGFkanVzdFZhbHVlSW5SYW5nZShpbmNvbWluZ1ZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBpbmNvbWluZ1ZhbHVlIDwgdGhpcy5taW4gfHwgIXRoaXMubWluXG4gICAgICA/IHRoaXMubWluXG4gICAgICA6IGluY29taW5nVmFsdWUgPiB0aGlzLm1heCB8fCAhdGhpcy5tYXhcbiAgICAgID8gdGhpcy5tYXhcbiAgICAgIDogaW5jb21pbmdWYWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBzZXQgJ2lzVmFsdWVPdXRPZlJhbmdlJyBmbGFnIGFuZCBhZGp1c3QgdmFsdWUgaW4gcmFuZ2UuIFRoZW4gdXBkYXRlIG1vZGVsIHZhbHVlIGFuZCByZWZyZXNoIGlucHV0XG4gICAqL1xuICBtYW51YWxDaGFuZ2UobmV3VmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaXNWYWx1ZU91dE9mUmFuZ2UgPSB0aGlzLmlzT3V0T2ZSYW5nZShuZXdWYWx1ZSk7XG4gICAgbmV3VmFsdWUgPSB0aGlzLmFkanVzdFZhbHVlSW5SYW5nZShuZXdWYWx1ZSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZShuZXdWYWx1ZSk7XG4gICAgLyogV2UgdXNlIHRoZSB2YWx1ZSBmcm9tIHRoZSBpbnB1dCwgaG93ZXZlciwgdGhpcyB2YWx1ZVxuICAgICAgaXMgbm90IHRoZSBjb3JyZWN0IHZhbHVlIHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZC4gVGhlIGNvcnJlY3QgdmFsdWUgdG8gZGlzcGxheVxuICAgICAgaXMgdGhpcy52YWx1ZSwgd2hpY2ggdGhlIHBhcmVudCB1cGRhdGVzIGlmIHRoZSBhc3luYyBjYWxsIHN1Y2NlZWQuIElmIHRoZSBjYWxsXG4gICAgICBmYWlscywgdGhlbiB0aGUgaW5wdXQgd2lsbCBuZWVkIHRvIGRpc3BsYXkgdGhpcy52YWx1ZSwgYW5kIG5vdCB3aGF0IHRoZSB1c2VyXG4gICAgICByZWNlbnRseSB0eXBlZCBpbiAqL1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCBuZXdWYWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZ5IHZhbHVlIGZvciBkZWNpc2lvbiBhYm91dCBkaXNwbGF5aW5nIGVycm9yIGFib3V0IHJhbmdlXG4gICAqL1xuICBpc091dE9mUmFuZ2UodmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2YWx1ZSA8IHRoaXMubWluIHx8IHZhbHVlID4gdGhpcy5tYXg7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHtcbiAgICAgIEFycm93RG93bjogKCkgPT4gdGhpcy5kZWNyZW1lbnQoKSxcbiAgICAgIEFycm93VXA6ICgpID0+IHRoaXMuaW5jcmVtZW50KCksXG4gICAgfTtcblxuICAgIGlmIChoYW5kbGVyc1tldmVudC5jb2RlXSkge1xuICAgICAgaGFuZGxlcnNbZXZlbnQuY29kZV0oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBvbkJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzID0gZmFsc2U7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm9uVG91Y2goKTtcbiAgfVxuXG4gIG9uRm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzID0gdHJ1ZTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMub25Ub3VjaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmeSB2YWx1ZSB0aGF0IGl0IGNhbiBiZSBpbmNyZW1lbnRlZCwgaWYgeWVzIGl0IGRvZXMgdGhhdC5cbiAgICovXG4gIGluY3JlbWVudCgpOiB2b2lkIHtcbiAgICB0aGlzLm1hbnVhbENoYW5nZSh0aGlzLnZhbHVlICsgdGhpcy5zdGVwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZnkgdmFsdWUgdGhhdCBpdCBjYW4gYmUgZGVjcmVtZW50ZWQsIGlmIHllcyBpdCBkb2VzIHRoYXQuXG4gICAqL1xuICBkZWNyZW1lbnQoKTogdm9pZCB7XG4gICAgdGhpcy5tYW51YWxDaGFuZ2UodGhpcy52YWx1ZSAtIHRoaXMuc3RlcCk7XG4gIH1cblxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgdGhpcy5taW4gfHwgMDtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHVwIG5ldyB2YWx1ZSBmb3IgaW5wdXQgYW5kIGVtaXQgZXZlbnQgb3V0c2lkZVxuICAgKi9cbiAgdXBkYXRlVmFsdWUodXBkYXRlZFF1YW50aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYXN5bmMpIHtcbiAgICAgIC8vIElmIHRoZSBhc3luYyBmbGFnIGlzIHRydWUsIHRoZW4gdGhlIHBhcmVudCBjb21wb25lbnQgaXMgcmVzcG9uc2libGUgZm9yIHVwZGF0aW5nIHRoZSBmb3JtXG4gICAgICB0aGlzLndyaXRlVmFsdWUodXBkYXRlZFF1YW50aXR5KTtcbiAgICB9XG5cbiAgICAvLyBBZGRpdGlvbmFsbHksIHdlIGVtaXQgYSBjaGFuZ2UgZXZlbnQsIHNvIHRoYXQgdXNlcnMgbWF5IG9wdGlvbmFsbHkgZG8gc29tZXRoaW5nIG9uIGNoYW5nZVxuICAgIHRoaXMudXBkYXRlLmVtaXQodXBkYXRlZFF1YW50aXR5KTtcbiAgICB0aGlzLm9uVG91Y2goKTtcbiAgfVxufVxuIl19