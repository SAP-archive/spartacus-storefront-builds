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
                    template: "<div class=\"cx-counter-wrapper\">\n  <div\n    class=\"cx-counter btn-group\"\n    role=\"group\"\n    tabindex=\"0\"\n    aria-label=\"Add more items\"\n    [class.focused]=\"focus\"\n    (keydown)=\"onKeyDown($event)\"\n    (blur)=\"onBlur($event)\"\n    (focus)=\"onFocus($event)\"\n  >\n    <button\n      #decrementBtn\n      type=\"button\"\n      class=\"cx-counter-action\"\n      (click)=\"decrement()\"\n      [disabled]=\"cartIsLoading || value <= min\"\n      *ngIf=\"isValueChangeable\"\n    >\n      -\n    </button>\n\n    <input\n      #itemCounterInput\n      class=\"cx-counter-value\"\n      type=\"text\"\n      name=\"value\"\n      cxOnlyNumber\n      [formControl]=\"inputValue\"\n      [value]=\"value\"\n      *ngIf=\"isValueChangeable\"\n    />\n    <div class=\"cx-counter-value\" *ngIf=\"!isValueChangeable\">\n      {{ value }}\n    </div>\n    <button\n      #incrementBtn\n      type=\"button\"\n      class=\"cx-counter-action\"\n      (click)=\"increment()\"\n      [disabled]=\"cartIsLoading || value >= max\"\n      *ngIf=\"isValueChangeable\"\n    >\n      +\n    </button>\n  </div>\n</div>\n",
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
        value: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jb3VudGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2l0ZW0tY291bnRlci9pdGVtLWNvdW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBRUwsV0FBVyxFQUNYLGlCQUFpQixHQUNsQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFFeEMsd0JBQXdCLEdBQUc7SUFDL0IsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0IsRUFBQztJQUNuRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBRUQ7SUFrRUUsOEJBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFuRHZDLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFVixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBTVQsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUVkLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUcxQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUlwQyxzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsZUFBVSxHQUFnQixJQUFJLFdBQVcsQ0FBQztZQUN4QyxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtTQUNqQyxDQUFDLENBQUM7UUErQkgsWUFBTzs7O1FBQWEsY0FBTyxDQUFDLEVBQUM7UUFDN0Isa0JBQWE7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QUs7c0JBRUwsS0FBSztzQkFFTCxLQUFLO3dCQUVMLEtBQUs7Z0NBRUwsS0FBSztvQ0FFTCxLQUFLO3lCQUdMLE1BQU07O0lBaUtULDJCQUFDO0NBQUEsQUE5TEQsSUE4TEM7U0F6TFksb0JBQW9COzs7SUFFL0IscUNBQ3lCOztJQUN6Qiw0Q0FDZ0M7O0lBQ2hDLDRDQUNnQzs7SUFFaEMscUNBQ1U7O0lBQ1Ysb0NBQ1M7O0lBQ1QsbUNBQ1k7O0lBQ1osbUNBQ1k7O0lBQ1oscUNBQ2M7O0lBQ2QsNkNBQ3NCOztJQUN0QixpREFDMEI7O0lBRTFCLHNDQUNvQzs7SUFFcEMscUNBQWU7O0lBRWYsaURBQTBCOztJQUMxQiwwQ0FFRzs7SUFFSCw0Q0FBMkI7O0lBNkIzQix1Q0FBNkI7O0lBQzdCLDZDQUFrRDs7Ozs7SUFIdEMsd0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBGb3JtQ29udHJvbCxcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBDT1VOVEVSX0NPTlRST0xfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSXRlbUNvdW50ZXJDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWl0ZW0tY291bnRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pdGVtLWNvdW50ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtDT1VOVEVSX0NPTlRST0xfQUNDRVNTT1JdLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtQ291bnRlckNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnaXRlbUNvdW50ZXJJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBwdWJsaWMgaW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2luY3JlbWVudEJ0bicsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBwdWJsaWMgaW5jcmVtZW50QnRuOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdkZWNyZW1lbnRCdG4nLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgcHVibGljIGRlY3JlbWVudEJ0bjogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKVxuICB2YWx1ZSA9IDA7XG4gIEBJbnB1dCgpXG4gIHN0ZXAgPSAxO1xuICBASW5wdXQoKVxuICBtaW46IG51bWJlcjtcbiAgQElucHV0KClcbiAgbWF4OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGFzeW5jID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGNhcnRJc0xvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgaXNWYWx1ZUNoYW5nZWFibGUgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgZm9jdXM6IGJvb2xlYW47XG5cbiAgaXNWYWx1ZU91dE9mUmFuZ2UgPSBmYWxzZTtcbiAgaW5wdXRWYWx1ZTogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woe1xuICAgIGRpc2FibGVkOiB0aGlzLmlzVmFsdWVDaGFuZ2VhYmxlLFxuICB9KTtcblxuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5taW4gfHwgMCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmlucHV0VmFsdWUudmFsdWVDaGFuZ2VzXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMzAwKSlcbiAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLm1hbnVhbENoYW5nZShOdW1iZXIodmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5jYXJ0SXNMb2FkaW5nKSB7XG4gICAgICB0aGlzLmlucHV0VmFsdWUuZGlzYWJsZSh7XG4gICAgICAgIG9ubHlTZWxmOiB0cnVlLFxuICAgICAgICBlbWl0RXZlbnQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZS5lbmFibGUoe1xuICAgICAgICBvbmx5U2VsZjogdHJ1ZSxcbiAgICAgICAgZW1pdEV2ZW50OiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBvblRvdWNoOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9IChfcmF0aW5nOiBudW1iZXIpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBJZiB2YWx1ZSBpcyB0b28gc21hbGwgaXQgd2lsbCBiZSBzZXQgdG8gbWluLCBpZiBpcyB0b28gYmlnIGl0IHdpbGwgYmUgc2V0IHRvIG1heC5cbiAgICovXG4gIGFkanVzdFZhbHVlSW5SYW5nZShpbmNvbWluZ1ZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBpbmNvbWluZ1ZhbHVlIDwgdGhpcy5taW4gfHwgIXRoaXMubWluXG4gICAgICA/IHRoaXMubWluXG4gICAgICA6IGluY29taW5nVmFsdWUgPiB0aGlzLm1heCB8fCAhdGhpcy5tYXhcbiAgICAgID8gdGhpcy5tYXhcbiAgICAgIDogaW5jb21pbmdWYWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgbW9kZWwgdmFsdWUgYW5kIHJlZnJlc2ggaW5wdXRcbiAgICovXG4gIG1hbnVhbENoYW5nZShuZXdWYWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgbmV3VmFsdWUgPSB0aGlzLmFkanVzdFZhbHVlSW5SYW5nZShuZXdWYWx1ZSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZShuZXdWYWx1ZSk7XG4gICAgLyogV2UgdXNlIHRoZSB2YWx1ZSBmcm9tIHRoZSBpbnB1dCwgaG93ZXZlciwgdGhpcyB2YWx1ZVxuICAgICAgaXMgbm90IHRoZSBjb3JyZWN0IHZhbHVlIHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZC4gVGhlIGNvcnJlY3QgdmFsdWUgdG8gZGlzcGxheVxuICAgICAgaXMgdGhpcy52YWx1ZSwgd2hpY2ggdGhlIHBhcmVudCB1cGRhdGVzIGlmIHRoZSBhc3luYyBjYWxsIHN1Y2NlZWQuIElmIHRoZSBjYWxsXG4gICAgICBmYWlscywgdGhlbiB0aGUgaW5wdXQgd2lsbCBuZWVkIHRvIGRpc3BsYXkgdGhpcy52YWx1ZSwgYW5kIG5vdCB3aGF0IHRoZSB1c2VyXG4gICAgICByZWNlbnRseSB0eXBlZCBpbiAqL1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCBuZXdWYWx1ZSk7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHtcbiAgICAgIEFycm93RG93bjogKCkgPT4gdGhpcy5kZWNyZW1lbnQoKSxcbiAgICAgIEFycm93VXA6ICgpID0+IHRoaXMuaW5jcmVtZW50KCksXG4gICAgfTtcblxuICAgIGlmIChoYW5kbGVyc1tldmVudC5jb2RlXSkge1xuICAgICAgaGFuZGxlcnNbZXZlbnQuY29kZV0oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBvbkJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzID0gZmFsc2U7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm9uVG91Y2goKTtcbiAgfVxuXG4gIG9uRm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzID0gdHJ1ZTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMub25Ub3VjaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmeSB2YWx1ZSB0aGF0IGl0IGNhbiBiZSBpbmNyZW1lbnRlZCwgaWYgeWVzIGl0IGRvZXMgdGhhdC5cbiAgICovXG4gIGluY3JlbWVudCgpOiB2b2lkIHtcbiAgICB0aGlzLm1hbnVhbENoYW5nZSh0aGlzLnZhbHVlICsgdGhpcy5zdGVwKTtcbiAgICB0aGlzLnNldEZvY3VzKHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmeSB2YWx1ZSB0aGF0IGl0IGNhbiBiZSBkZWNyZW1lbnRlZCwgaWYgeWVzIGl0IGRvZXMgdGhhdC5cbiAgICovXG4gIGRlY3JlbWVudCgpOiB2b2lkIHtcbiAgICB0aGlzLm1hbnVhbENoYW5nZSh0aGlzLnZhbHVlIC0gdGhpcy5zdGVwKTtcbiAgICB0aGlzLnNldEZvY3VzKGZhbHNlKTtcbiAgfVxuXG4gIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSB8fCB0aGlzLm1pbiB8fCAwO1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdXAgbmV3IHZhbHVlIGZvciBpbnB1dCBhbmQgZW1pdCBldmVudCBvdXRzaWRlXG4gICAqL1xuICB1cGRhdGVWYWx1ZSh1cGRhdGVkUXVhbnRpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5hc3luYykge1xuICAgICAgLy8gSWYgdGhlIGFzeW5jIGZsYWcgaXMgdHJ1ZSwgdGhlbiB0aGUgcGFyZW50IGNvbXBvbmVudCBpcyByZXNwb25zaWJsZSBmb3IgdXBkYXRpbmcgdGhlIGZvcm1cbiAgICAgIHRoaXMud3JpdGVWYWx1ZSh1cGRhdGVkUXVhbnRpdHkpO1xuICAgIH1cblxuICAgIC8vIEFkZGl0aW9uYWxseSwgd2UgZW1pdCBhIGNoYW5nZSBldmVudCwgc28gdGhhdCB1c2VycyBtYXkgb3B0aW9uYWxseSBkbyBzb21ldGhpbmcgb24gY2hhbmdlXG4gICAgdGhpcy51cGRhdGUuZW1pdCh1cGRhdGVkUXVhbnRpdHkpO1xuICAgIHRoaXMub25Ub3VjaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hpY2ggSFRNTCBlbGVtZW50IHNob3VsZCBoYXZlIGZvY3VzIGF0IGEgZ2l2ZW4gdGltZVxuICAgKi9cbiAgc2V0Rm9jdXMoaXNJbmNyZW1lbnRlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzTWF4T3JNaW5WYWx1ZU9yQmV5b25kKCkpIHtcbiAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoaXNJbmNyZW1lbnRlZCkge1xuICAgICAgdGhpcy5pbmNyZW1lbnRCdG4ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlY3JlbWVudEJ0bi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgaXNNYXhPck1pblZhbHVlT3JCZXlvbmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUgPj0gdGhpcy5tYXggfHwgdGhpcy52YWx1ZSA8PSB0aGlzLm1pbjtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==