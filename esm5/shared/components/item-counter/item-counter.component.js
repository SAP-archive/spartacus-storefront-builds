/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, Renderer2, ViewChild, } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
/** @type {?} */
var COUNTER_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line */
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return ItemCounterComponent; })),
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
        this.onTouch = (/**
         * @return {?}
         */
        function () { });
        this.onModelChange = (/**
         * @param {?} _rating
         * @return {?}
         */
        function (_rating) { });
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
        this.subscription = this.inputValue.valueChanges
            .pipe(debounceTime(300))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                _this.manualChange(Number(value));
            }
        }));
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
     * Update model value and refresh input
     */
    /**
     * Update model value and refresh input
     * @param {?} newValue
     * @return {?}
     */
    ItemCounterComponent.prototype.manualChange = /**
     * Update model value and refresh input
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
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
            ArrowDown: (/**
             * @return {?}
             */
            function () { return _this.decrement(); }),
            ArrowUp: (/**
             * @return {?}
             */
            function () { return _this.increment(); }),
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
        this.setFocus(true);
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
        this.setFocus(false);
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
    /**
     * Determines which HTML element should have focus at a given time
     */
    /**
     * Determines which HTML element should have focus at a given time
     * @param {?} isIncremented
     * @return {?}
     */
    ItemCounterComponent.prototype.setFocus = /**
     * Determines which HTML element should have focus at a given time
     * @param {?} isIncremented
     * @return {?}
     */
    function (isIncremented) {
        if (this.isMaxOrMinValueOrBeyond()) {
            this.input.nativeElement.focus();
        }
        else if (isIncremented) {
            this.incrementBtn.nativeElement.focus();
        }
        else {
            this.decrementBtn.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    ItemCounterComponent.prototype.isMaxOrMinValueOrBeyond = /**
     * @return {?}
     */
    function () {
        return this.value >= this.max || this.value <= this.min;
    };
    /**
     * @return {?}
     */
    ItemCounterComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ItemCounterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-item-counter',
                    template: "<div class=\"cx-counter-wrapper\">\n  <div\n    class=\"cx-counter btn-group\"\n    role=\"group\"\n    tabindex=\"0\"\n    aria-label=\"Add more items\"\n    [class.focused]=\"focus\"\n    (keydown)=\"onKeyDown($event)\"\n    (blur)=\"onBlur($event)\"\n    (focus)=\"onFocus($event)\"\n  >\n    <button\n      #decrementBtn\n      type=\"button\"\n      class=\"cx-counter-action\"\n      (click)=\"decrement()\"\n      [disabled]=\"cartIsLoading || value <= min\"\n    >\n      -\n    </button>\n    <input\n      #itemCounterInput\n      class=\"cx-counter-value\"\n      type=\"text\"\n      name=\"value\"\n      cxOnlyNumber\n      [formControl]=\"inputValue\"\n      [value]=\"value\"\n      *ngIf=\"isValueChangeable\"\n    />\n    <div class=\"cx-counter-value\" *ngIf=\"!isValueChangeable\">\n      {{ value }}\n    </div>\n    <button\n      #incrementBtn\n      type=\"button\"\n      class=\"cx-counter-action\"\n      (click)=\"increment()\"\n      [disabled]=\"cartIsLoading || value >= max\"\n    >\n      +\n    </button>\n  </div>\n</div>\n",
                    providers: [COUNTER_CONTROL_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    ItemCounterComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    ItemCounterComponent.propDecorators = {
        input: [{ type: ViewChild, args: ['itemCounterInput', { static: false },] }],
        incrementBtn: [{ type: ViewChild, args: ['incrementBtn', { static: false },] }],
        decrementBtn: [{ type: ViewChild, args: ['decrementBtn', { static: false },] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jb3VudGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2l0ZW0tY291bnRlci9pdGVtLWNvdW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBRUwsV0FBVyxFQUNYLGlCQUFpQixHQUNsQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFFeEMsd0JBQXdCLEdBQUc7SUFDL0IsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0IsRUFBQztJQUNuRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBRUQ7SUFpRUUsOEJBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFuRHZDLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFVixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBTVQsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUVkLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUcxQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUlwQyxzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsZUFBVSxHQUFnQixJQUFJLFdBQVcsQ0FBQztZQUN4QyxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtTQUNqQyxDQUFDLENBQUM7UUErQkgsWUFBTzs7O1FBQWEsY0FBTyxDQUFDLEVBQUM7UUFDN0Isa0JBQWE7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QUs7c0JBRUwsS0FBSzt3QkFFTCxLQUFLO2dDQUVMLEtBQUs7b0NBRUwsS0FBSzt5QkFHTCxNQUFNOztJQWlLVCwyQkFBQztDQUFBLEFBN0xELElBNkxDO1NBeExZLG9CQUFvQjs7O0lBRS9CLHFDQUN5Qjs7SUFDekIsNENBQ2dDOztJQUNoQyw0Q0FDZ0M7O0lBRWhDLHFDQUFVOztJQUNWLG9DQUNTOztJQUNULG1DQUNZOztJQUNaLG1DQUNZOztJQUNaLHFDQUNjOztJQUNkLDZDQUNzQjs7SUFDdEIsaURBQzBCOztJQUUxQixzQ0FDb0M7O0lBRXBDLHFDQUFlOztJQUVmLGlEQUEwQjs7SUFDMUIsMENBRUc7O0lBRUgsNENBQTJCOztJQTZCM0IsdUNBQTZCOztJQUM3Qiw2Q0FBa0Q7Ozs7O0lBSHRDLHdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybUNvbnRyb2wsXG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgQ09VTlRFUl9DT05UUk9MX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEl0ZW1Db3VudGVyQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1pdGVtLWNvdW50ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaXRlbS1jb3VudGVyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbQ09VTlRFUl9DT05UUk9MX0FDQ0VTU09SXSxcbn0pXG5leHBvcnQgY2xhc3MgSXRlbUNvdW50ZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ2l0ZW1Db3VudGVySW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgcHVibGljIGlucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdpbmNyZW1lbnRCdG4nLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgcHVibGljIGluY3JlbWVudEJ0bjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZGVjcmVtZW50QnRuJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHB1YmxpYyBkZWNyZW1lbnRCdG46IEVsZW1lbnRSZWY7XG5cbiAgdmFsdWUgPSAwO1xuICBASW5wdXQoKVxuICBzdGVwID0gMTtcbiAgQElucHV0KClcbiAgbWluOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1heDogbnVtYmVyO1xuICBASW5wdXQoKVxuICBhc3luYyA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBjYXJ0SXNMb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGlzVmFsdWVDaGFuZ2VhYmxlID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIGZvY3VzOiBib29sZWFuO1xuXG4gIGlzVmFsdWVPdXRPZlJhbmdlID0gZmFsc2U7XG4gIGlucHV0VmFsdWU6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKHtcbiAgICBkaXNhYmxlZDogdGhpcy5pc1ZhbHVlQ2hhbmdlYWJsZSxcbiAgfSk7XG5cbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy53cml0ZVZhbHVlKHRoaXMubWluIHx8IDApO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5pbnB1dFZhbHVlLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDMwMCkpXG4gICAgICAuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5tYW51YWxDaGFuZ2UoTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuY2FydElzTG9hZGluZykge1xuICAgICAgdGhpcy5pbnB1dFZhbHVlLmRpc2FibGUoe1xuICAgICAgICBvbmx5U2VsZjogdHJ1ZSxcbiAgICAgICAgZW1pdEV2ZW50OiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0VmFsdWUuZW5hYmxlKHtcbiAgICAgICAgb25seVNlbGY6IHRydWUsXG4gICAgICAgIGVtaXRFdmVudDogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgb25Ub3VjaDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoX3JhdGluZzogbnVtYmVyKSA9PiB7fTtcblxuICAvKipcbiAgICogSWYgdmFsdWUgaXMgdG9vIHNtYWxsIGl0IHdpbGwgYmUgc2V0IHRvIG1pbiwgaWYgaXMgdG9vIGJpZyBpdCB3aWxsIGJlIHNldCB0byBtYXguXG4gICAqL1xuICBhZGp1c3RWYWx1ZUluUmFuZ2UoaW5jb21pbmdWYWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gaW5jb21pbmdWYWx1ZSA8IHRoaXMubWluIHx8ICF0aGlzLm1pblxuICAgICAgPyB0aGlzLm1pblxuICAgICAgOiBpbmNvbWluZ1ZhbHVlID4gdGhpcy5tYXggfHwgIXRoaXMubWF4XG4gICAgICA/IHRoaXMubWF4XG4gICAgICA6IGluY29taW5nVmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIG1vZGVsIHZhbHVlIGFuZCByZWZyZXNoIGlucHV0XG4gICAqL1xuICBtYW51YWxDaGFuZ2UobmV3VmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIG5ld1ZhbHVlID0gdGhpcy5hZGp1c3RWYWx1ZUluUmFuZ2UobmV3VmFsdWUpO1xuICAgIHRoaXMudXBkYXRlVmFsdWUobmV3VmFsdWUpO1xuICAgIC8qIFdlIHVzZSB0aGUgdmFsdWUgZnJvbSB0aGUgaW5wdXQsIGhvd2V2ZXIsIHRoaXMgdmFsdWVcbiAgICAgIGlzIG5vdCB0aGUgY29ycmVjdCB2YWx1ZSB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQuIFRoZSBjb3JyZWN0IHZhbHVlIHRvIGRpc3BsYXlcbiAgICAgIGlzIHRoaXMudmFsdWUsIHdoaWNoIHRoZSBwYXJlbnQgdXBkYXRlcyBpZiB0aGUgYXN5bmMgY2FsbCBzdWNjZWVkLiBJZiB0aGUgY2FsbFxuICAgICAgZmFpbHMsIHRoZW4gdGhlIGlucHV0IHdpbGwgbmVlZCB0byBkaXNwbGF5IHRoaXMudmFsdWUsIGFuZCBub3Qgd2hhdCB0aGUgdXNlclxuICAgICAgcmVjZW50bHkgdHlwZWQgaW4gKi9cbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgbmV3VmFsdWUpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB7XG4gICAgICBBcnJvd0Rvd246ICgpID0+IHRoaXMuZGVjcmVtZW50KCksXG4gICAgICBBcnJvd1VwOiAoKSA9PiB0aGlzLmluY3JlbWVudCgpLFxuICAgIH07XG5cbiAgICBpZiAoaGFuZGxlcnNbZXZlbnQuY29kZV0pIHtcbiAgICAgIGhhbmRsZXJzW2V2ZW50LmNvZGVdKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5mb2N1cyA9IGZhbHNlO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5vblRvdWNoKCk7XG4gIH1cblxuICBvbkZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5mb2N1cyA9IHRydWU7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm9uVG91Y2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZnkgdmFsdWUgdGhhdCBpdCBjYW4gYmUgaW5jcmVtZW50ZWQsIGlmIHllcyBpdCBkb2VzIHRoYXQuXG4gICAqL1xuICBpbmNyZW1lbnQoKTogdm9pZCB7XG4gICAgdGhpcy5tYW51YWxDaGFuZ2UodGhpcy52YWx1ZSArIHRoaXMuc3RlcCk7XG4gICAgdGhpcy5zZXRGb2N1cyh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZnkgdmFsdWUgdGhhdCBpdCBjYW4gYmUgZGVjcmVtZW50ZWQsIGlmIHllcyBpdCBkb2VzIHRoYXQuXG4gICAqL1xuICBkZWNyZW1lbnQoKTogdm9pZCB7XG4gICAgdGhpcy5tYW51YWxDaGFuZ2UodGhpcy52YWx1ZSAtIHRoaXMuc3RlcCk7XG4gICAgdGhpcy5zZXRGb2N1cyhmYWxzZSk7XG4gIH1cblxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgdGhpcy5taW4gfHwgMDtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHVwIG5ldyB2YWx1ZSBmb3IgaW5wdXQgYW5kIGVtaXQgZXZlbnQgb3V0c2lkZVxuICAgKi9cbiAgdXBkYXRlVmFsdWUodXBkYXRlZFF1YW50aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYXN5bmMpIHtcbiAgICAgIC8vIElmIHRoZSBhc3luYyBmbGFnIGlzIHRydWUsIHRoZW4gdGhlIHBhcmVudCBjb21wb25lbnQgaXMgcmVzcG9uc2libGUgZm9yIHVwZGF0aW5nIHRoZSBmb3JtXG4gICAgICB0aGlzLndyaXRlVmFsdWUodXBkYXRlZFF1YW50aXR5KTtcbiAgICB9XG5cbiAgICAvLyBBZGRpdGlvbmFsbHksIHdlIGVtaXQgYSBjaGFuZ2UgZXZlbnQsIHNvIHRoYXQgdXNlcnMgbWF5IG9wdGlvbmFsbHkgZG8gc29tZXRoaW5nIG9uIGNoYW5nZVxuICAgIHRoaXMudXBkYXRlLmVtaXQodXBkYXRlZFF1YW50aXR5KTtcbiAgICB0aGlzLm9uVG91Y2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoaWNoIEhUTUwgZWxlbWVudCBzaG91bGQgaGF2ZSBmb2N1cyBhdCBhIGdpdmVuIHRpbWVcbiAgICovXG4gIHNldEZvY3VzKGlzSW5jcmVtZW50ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc01heE9yTWluVmFsdWVPckJleW9uZCgpKSB7XG4gICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKGlzSW5jcmVtZW50ZWQpIHtcbiAgICAgIHRoaXMuaW5jcmVtZW50QnRuLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWNyZW1lbnRCdG4ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGlzTWF4T3JNaW5WYWx1ZU9yQmV5b25kKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZhbHVlID49IHRoaXMubWF4IHx8IHRoaXMudmFsdWUgPD0gdGhpcy5taW47XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=