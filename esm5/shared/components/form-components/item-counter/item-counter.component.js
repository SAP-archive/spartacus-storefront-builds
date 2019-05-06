/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, Renderer2, ViewChild, } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
/** @type {?} */
var COUNTER_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line */
    useExisting: forwardRef(function () { return ItemCounterComponent; }),
    multi: true,
};
var ItemCounterComponent = /** @class */ (function () {
    function ItemCounterComponent(renderer) {
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
        this.onTouch = function () { };
        this.onModelChange = function (_rating) { };
    }
    /**
     * @return {?}
     */
    ItemCounterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.writeValue(this.min || 0);
        this.inputValue.valueChanges.pipe(debounceTime(300)).subscribe(function (value) {
            if (value) {
                _this.manualChange(Number(value));
            }
        });
    };
    /**
     * @return {?}
     */
    ItemCounterComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * If value is too small it will be set to min, if is too big it will be set to max.
     */
    /**
     * If value is too small it will be set to min, if is too big it will be set to max.
     * @param {?} incomingValue
     * @return {?}
     */
    ItemCounterComponent.prototype.adjustValueInRange = /**
     * If value is too small it will be set to min, if is too big it will be set to max.
     * @param {?} incomingValue
     * @return {?}
     */
    function (incomingValue) {
        return incomingValue < this.min || !this.min
            ? this.min
            : incomingValue > this.max || !this.max
                ? this.max
                : incomingValue;
    };
    /**
     * Function set 'isValueOutOfRange' flag and adjust value in range. Then update model value and refresh input
     */
    /**
     * Function set 'isValueOutOfRange' flag and adjust value in range. Then update model value and refresh input
     * @param {?} newValue
     * @return {?}
     */
    ItemCounterComponent.prototype.manualChange = /**
     * Function set 'isValueOutOfRange' flag and adjust value in range. Then update model value and refresh input
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        this.isValueOutOfRange = this.isOutOfRange(newValue);
        newValue = this.adjustValueInRange(newValue);
        this.updateValue(newValue);
        /* We use the value from the input, however, this value
          is not the correct value that should be displayed. The correct value to display
          is this.value, which the parent updates if the async call succeed. If the call
          fails, then the input will need to display this.value, and not what the user
          recently typed in */
        this.renderer.setProperty(this.input.nativeElement, 'value', newValue);
    };
    /**
     * Verify value for decision about displaying error about range
     */
    /**
     * Verify value for decision about displaying error about range
     * @param {?} value
     * @return {?}
     */
    ItemCounterComponent.prototype.isOutOfRange = /**
     * Verify value for decision about displaying error about range
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value < this.min || value > this.max;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ItemCounterComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var handlers = {
            ArrowDown: function () { return _this.decrement(); },
            ArrowUp: function () { return _this.increment(); },
        };
        if (handlers[event.code]) {
            handlers[event.code]();
            event.preventDefault();
            event.stopPropagation();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ItemCounterComponent.prototype.onBlur = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.focus = false;
        event.preventDefault();
        event.stopPropagation();
        this.onTouch();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ItemCounterComponent.prototype.onFocus = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.focus = true;
        event.preventDefault();
        event.stopPropagation();
        this.onTouch();
    };
    /**
     * Verify value that it can be incremented, if yes it does that.
     */
    /**
     * Verify value that it can be incremented, if yes it does that.
     * @return {?}
     */
    ItemCounterComponent.prototype.increment = /**
     * Verify value that it can be incremented, if yes it does that.
     * @return {?}
     */
    function () {
        this.manualChange(this.value + this.step);
    };
    /**
     * Verify value that it can be decremented, if yes it does that.
     */
    /**
     * Verify value that it can be decremented, if yes it does that.
     * @return {?}
     */
    ItemCounterComponent.prototype.decrement = /**
     * Verify value that it can be decremented, if yes it does that.
     * @return {?}
     */
    function () {
        this.manualChange(this.value - this.step);
    };
    // ControlValueAccessor interface
    // ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    ItemCounterComponent.prototype.registerOnTouched = 
    // ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouch = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ItemCounterComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelChange = fn;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ItemCounterComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value || this.min || 0;
        this.onModelChange(this.value);
    };
    /**
     * Set up new value for input and emit event outside
     */
    /**
     * Set up new value for input and emit event outside
     * @param {?} updatedQuantity
     * @return {?}
     */
    ItemCounterComponent.prototype.updateValue = /**
     * Set up new value for input and emit event outside
     * @param {?} updatedQuantity
     * @return {?}
     */
    function (updatedQuantity) {
        if (!this.async) {
            // If the async flag is true, then the parent component is responsible for updating the form
            this.writeValue(updatedQuantity);
        }
        // Additionally, we emit a change event, so that users may optionally do something on change
        this.update.emit(updatedQuantity);
        this.onTouch();
    };
    ItemCounterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-item-counter',
                    template: "<div class=\"cx-counter-wrapper\">\n  <div\n    class=\"cx-counter btn-group\"\n    role=\"group\"\n    tabindex=\"0\"\n    aria-label=\"Add more items\"\n    [class.focused]=\"focus\"\n    (keydown)=\"onKeyDown($event)\"\n    (blur)=\"onBlur($event)\"\n    (focus)=\"onFocus($event)\"\n  >\n    <button\n      type=\"button\"\n      class=\"cx-counter-action\"\n      (click)=\"decrement()\"\n      [disabled]=\"cartIsLoading || value <= min\"\n    >\n      -\n    </button>\n    <input\n      #itemCounterInput\n      class=\"cx-counter-value\"\n      type=\"text\"\n      name=\"value\"\n      cxOnlyNumber\n      [formControl]=\"inputValue\"\n      [value]=\"value\"\n      *ngIf=\"isValueChangeable\"\n    />\n    <div class=\"cx-counter-value\" *ngIf=\"!isValueChangeable\">\n      {{ value }}\n    </div>\n    <button\n      type=\"button\"\n      class=\"cx-counter-action\"\n      (click)=\"increment()\"\n      [disabled]=\"cartIsLoading || value >= max\"\n    >\n      +\n    </button>\n  </div>\n</div>\n",
                    providers: [COUNTER_CONTROL_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    ItemCounterComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
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
    return ItemCounterComponent;
}());
export { ItemCounterComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jb3VudGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2Zvcm0tY29tcG9uZW50cy9pdGVtLWNvdW50ZXIvaXRlbS1jb3VudGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLFdBQVcsRUFDWCxpQkFBaUIsR0FDbEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBRXhDLHdCQUF3QixHQUFHO0lBQy9CLE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG9CQUFvQixFQUFwQixDQUFvQixDQUFDO0lBQ25ELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFFRDtJQXlERSw4QkFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQS9DdkMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUVWLFNBQUksR0FBRyxDQUFDLENBQUM7UUFNVCxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBRWQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBRzFCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBSXBDLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixlQUFVLEdBQWdCLElBQUksV0FBVyxDQUFDO1lBQ3hDLFFBQVEsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1NBQ2pDLENBQUMsQ0FBQztRQTJCSCxZQUFPLEdBQWEsY0FBTyxDQUFDLENBQUM7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RTtZQUNmLDRGQUE0RjtZQUM1RixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2xDO1FBRUQsNEZBQTRGO1FBQzVGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOztnQkFuS0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLG9nQ0FBNEM7b0JBQzVDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2lCQUN0Qzs7OztnQkFyQkMsU0FBUzs7O3dCQXdCUixTQUFTLFNBQUMsa0JBQWtCO3VCQUk1QixLQUFLO3NCQUVMLEtBQUs7c0JBRUwsS0FBSzt3QkFFTCxLQUFLO2dDQUVMLEtBQUs7b0NBRUwsS0FBSzt5QkFHTCxNQUFNOztJQTRJVCwyQkFBQztDQUFBLEFBcEtELElBb0tDO1NBL0pZLG9CQUFvQjs7O0lBRS9CLHFDQUN5Qjs7SUFFekIscUNBQVU7O0lBQ1Ysb0NBQ1M7O0lBQ1QsbUNBQ1k7O0lBQ1osbUNBQ1k7O0lBQ1oscUNBQ2M7O0lBQ2QsNkNBQ3NCOztJQUN0QixpREFDMEI7O0lBRTFCLHNDQUNvQzs7SUFFcEMscUNBQWU7O0lBRWYsaURBQTBCOztJQUMxQiwwQ0FFRzs7SUEyQkgsdUNBQTZCOztJQUM3Qiw2Q0FBa0Q7Ozs7O0lBSHRDLHdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIEZvcm1Db250cm9sLFxuICBOR19WQUxVRV9BQ0NFU1NPUixcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBDT1VOVEVSX0NPTlRST0xfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSXRlbUNvdW50ZXJDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWl0ZW0tY291bnRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pdGVtLWNvdW50ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtDT1VOVEVSX0NPTlRST0xfQUNDRVNTT1JdLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtQ291bnRlckNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ2l0ZW1Db3VudGVySW5wdXQnKVxuICBwdWJsaWMgaW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgdmFsdWUgPSAwO1xuICBASW5wdXQoKVxuICBzdGVwID0gMTtcbiAgQElucHV0KClcbiAgbWluOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1heDogbnVtYmVyO1xuICBASW5wdXQoKVxuICBhc3luYyA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBjYXJ0SXNMb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGlzVmFsdWVDaGFuZ2VhYmxlID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIGZvY3VzOiBib29sZWFuO1xuXG4gIGlzVmFsdWVPdXRPZlJhbmdlID0gZmFsc2U7XG4gIGlucHV0VmFsdWU6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKHtcbiAgICBkaXNhYmxlZDogdGhpcy5pc1ZhbHVlQ2hhbmdlYWJsZSxcbiAgfSk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy53cml0ZVZhbHVlKHRoaXMubWluIHx8IDApO1xuICAgIHRoaXMuaW5wdXRWYWx1ZS52YWx1ZUNoYW5nZXMucGlwZShkZWJvdW5jZVRpbWUoMzAwKSkuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLm1hbnVhbENoYW5nZShOdW1iZXIodmFsdWUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmNhcnRJc0xvYWRpbmcpIHtcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZS5kaXNhYmxlKHtcbiAgICAgICAgb25seVNlbGY6IHRydWUsXG4gICAgICAgIGVtaXRFdmVudDogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dFZhbHVlLmVuYWJsZSh7XG4gICAgICAgIG9ubHlTZWxmOiB0cnVlLFxuICAgICAgICBlbWl0RXZlbnQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIG9uVG91Y2g6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKF9yYXRpbmc6IG51bWJlcikgPT4ge307XG5cbiAgLyoqXG4gICAqIElmIHZhbHVlIGlzIHRvbyBzbWFsbCBpdCB3aWxsIGJlIHNldCB0byBtaW4sIGlmIGlzIHRvbyBiaWcgaXQgd2lsbCBiZSBzZXQgdG8gbWF4LlxuICAgKi9cbiAgYWRqdXN0VmFsdWVJblJhbmdlKGluY29taW5nVmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIGluY29taW5nVmFsdWUgPCB0aGlzLm1pbiB8fCAhdGhpcy5taW5cbiAgICAgID8gdGhpcy5taW5cbiAgICAgIDogaW5jb21pbmdWYWx1ZSA+IHRoaXMubWF4IHx8ICF0aGlzLm1heFxuICAgICAgPyB0aGlzLm1heFxuICAgICAgOiBpbmNvbWluZ1ZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHNldCAnaXNWYWx1ZU91dE9mUmFuZ2UnIGZsYWcgYW5kIGFkanVzdCB2YWx1ZSBpbiByYW5nZS4gVGhlbiB1cGRhdGUgbW9kZWwgdmFsdWUgYW5kIHJlZnJlc2ggaW5wdXRcbiAgICovXG4gIG1hbnVhbENoYW5nZShuZXdWYWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5pc1ZhbHVlT3V0T2ZSYW5nZSA9IHRoaXMuaXNPdXRPZlJhbmdlKG5ld1ZhbHVlKTtcbiAgICBuZXdWYWx1ZSA9IHRoaXMuYWRqdXN0VmFsdWVJblJhbmdlKG5ld1ZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKG5ld1ZhbHVlKTtcbiAgICAvKiBXZSB1c2UgdGhlIHZhbHVlIGZyb20gdGhlIGlucHV0LCBob3dldmVyLCB0aGlzIHZhbHVlXG4gICAgICBpcyBub3QgdGhlIGNvcnJlY3QgdmFsdWUgdGhhdCBzaG91bGQgYmUgZGlzcGxheWVkLiBUaGUgY29ycmVjdCB2YWx1ZSB0byBkaXNwbGF5XG4gICAgICBpcyB0aGlzLnZhbHVlLCB3aGljaCB0aGUgcGFyZW50IHVwZGF0ZXMgaWYgdGhlIGFzeW5jIGNhbGwgc3VjY2VlZC4gSWYgdGhlIGNhbGxcbiAgICAgIGZhaWxzLCB0aGVuIHRoZSBpbnB1dCB3aWxsIG5lZWQgdG8gZGlzcGxheSB0aGlzLnZhbHVlLCBhbmQgbm90IHdoYXQgdGhlIHVzZXJcbiAgICAgIHJlY2VudGx5IHR5cGVkIGluICovXG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIG5ld1ZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZnkgdmFsdWUgZm9yIGRlY2lzaW9uIGFib3V0IGRpc3BsYXlpbmcgZXJyb3IgYWJvdXQgcmFuZ2VcbiAgICovXG4gIGlzT3V0T2ZSYW5nZSh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlIDwgdGhpcy5taW4gfHwgdmFsdWUgPiB0aGlzLm1heDtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGhhbmRsZXJzID0ge1xuICAgICAgQXJyb3dEb3duOiAoKSA9PiB0aGlzLmRlY3JlbWVudCgpLFxuICAgICAgQXJyb3dVcDogKCkgPT4gdGhpcy5pbmNyZW1lbnQoKSxcbiAgICB9O1xuXG4gICAgaWYgKGhhbmRsZXJzW2V2ZW50LmNvZGVdKSB7XG4gICAgICBoYW5kbGVyc1tldmVudC5jb2RlXSgpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIG9uQmx1cihldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXMgPSBmYWxzZTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMub25Ub3VjaCgpO1xuICB9XG5cbiAgb25Gb2N1cyhldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXMgPSB0cnVlO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5vblRvdWNoKCk7XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZ5IHZhbHVlIHRoYXQgaXQgY2FuIGJlIGluY3JlbWVudGVkLCBpZiB5ZXMgaXQgZG9lcyB0aGF0LlxuICAgKi9cbiAgaW5jcmVtZW50KCk6IHZvaWQge1xuICAgIHRoaXMubWFudWFsQ2hhbmdlKHRoaXMudmFsdWUgKyB0aGlzLnN0ZXApO1xuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmeSB2YWx1ZSB0aGF0IGl0IGNhbiBiZSBkZWNyZW1lbnRlZCwgaWYgeWVzIGl0IGRvZXMgdGhhdC5cbiAgICovXG4gIGRlY3JlbWVudCgpOiB2b2lkIHtcbiAgICB0aGlzLm1hbnVhbENoYW5nZSh0aGlzLnZhbHVlIC0gdGhpcy5zdGVwKTtcbiAgfVxuXG4gIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSB8fCB0aGlzLm1pbiB8fCAwO1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdXAgbmV3IHZhbHVlIGZvciBpbnB1dCBhbmQgZW1pdCBldmVudCBvdXRzaWRlXG4gICAqL1xuICB1cGRhdGVWYWx1ZSh1cGRhdGVkUXVhbnRpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5hc3luYykge1xuICAgICAgLy8gSWYgdGhlIGFzeW5jIGZsYWcgaXMgdHJ1ZSwgdGhlbiB0aGUgcGFyZW50IGNvbXBvbmVudCBpcyByZXNwb25zaWJsZSBmb3IgdXBkYXRpbmcgdGhlIGZvcm1cbiAgICAgIHRoaXMud3JpdGVWYWx1ZSh1cGRhdGVkUXVhbnRpdHkpO1xuICAgIH1cblxuICAgIC8vIEFkZGl0aW9uYWxseSwgd2UgZW1pdCBhIGNoYW5nZSBldmVudCwgc28gdGhhdCB1c2VycyBtYXkgb3B0aW9uYWxseSBkbyBzb21ldGhpbmcgb24gY2hhbmdlXG4gICAgdGhpcy51cGRhdGUuZW1pdCh1cGRhdGVkUXVhbnRpdHkpO1xuICAgIHRoaXMub25Ub3VjaCgpO1xuICB9XG59XG4iXX0=