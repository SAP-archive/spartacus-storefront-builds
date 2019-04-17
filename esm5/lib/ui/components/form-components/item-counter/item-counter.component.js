/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild, Renderer2, } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl, } from '@angular/forms';
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
                    providers: [COUNTER_CONTROL_ACCESSOR],
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after{margin-left:0}.dropleft .dropdown-toggle-split::before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio],.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.cx-counter-wrapper{display:var(--cx-display,inline-flex);flex-direction:var(--cx-flex-direction,column)}.cx-counter{border-radius:var(--cx-border-radius,4px);border-width:var(--cx-border-width,1px);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}.cx-counter-value{border:var(--cx-border,none);text-align:var(--cx-text-align,center);border-width:var(--cx-border-width,0 1px 0 1px);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light));padding:var(--cx-padding,12px 9px 12px 9px);max-height:var(--cx-max-height,46px);min-width:var(--cx-min-width,48px);max-width:var(--cx-max-width,78px)}.cx-counter-action{max-height:var(--cx-max-height,48px);min-width:var(--cx-minwidth,40px);border:var(--cx-border,none);cursor:var(--cx-cursor,pointer);color:var(--cx-color,var(--cx-g-color-text));background-color:var(--cx-background-color,var(--cx-g-color-transparent));margin:var(--cx-margin,0);font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.6)}.cx-counter-action:hover{color:var(--cx-color,var(--cx-g-color-primary))}.cx-counter-action:disabled{color:var(--cx-color,var(--cx-g-color-light));opacity:var(--cx-opacity,1);cursor:var(--cx-cursor,not-allowed)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jb3VudGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9jb21wb25lbnRzL2Zvcm0tY29tcG9uZW50cy9pdGVtLWNvdW50ZXIvaXRlbS1jb3VudGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFFVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixXQUFXLEdBQ1osTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBRXhDLHdCQUF3QixHQUFHO0lBQy9CLE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG9CQUFvQixFQUFwQixDQUFvQixDQUFDO0lBQ25ELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFFRDtJQTBERSw4QkFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQS9DdkMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUVWLFNBQUksR0FBRyxDQUFDLENBQUM7UUFNVCxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBRWQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBRzFCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBSXBDLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixlQUFVLEdBQWdCLElBQUksV0FBVyxDQUFDO1lBQ3hDLFFBQVEsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1NBQ2pDLENBQUMsQ0FBQztRQTJCSCxZQUFPLEdBQWEsY0FBTyxDQUFDLENBQUM7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RTtZQUNmLDRGQUE0RjtZQUM1RixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2xDO1FBRUQsNEZBQTRGO1FBQzVGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOztnQkFwS0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLG9nQ0FBNEM7b0JBRTVDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDOztpQkFDdEM7Ozs7Z0JBckJDLFNBQVM7Ozt3QkF3QlIsU0FBUyxTQUFDLGtCQUFrQjt1QkFJNUIsS0FBSztzQkFFTCxLQUFLO3NCQUVMLEtBQUs7d0JBRUwsS0FBSztnQ0FFTCxLQUFLO29DQUVMLEtBQUs7eUJBR0wsTUFBTTs7SUE0SVQsMkJBQUM7Q0FBQSxBQXJLRCxJQXFLQztTQS9KWSxvQkFBb0I7OztJQUUvQixxQ0FDeUI7O0lBRXpCLHFDQUFVOztJQUNWLG9DQUNTOztJQUNULG1DQUNZOztJQUNaLG1DQUNZOztJQUNaLHFDQUNjOztJQUNkLDZDQUNzQjs7SUFDdEIsaURBQzBCOztJQUUxQixzQ0FDb0M7O0lBRXBDLHFDQUFlOztJQUVmLGlEQUEwQjs7SUFDMUIsMENBRUc7O0lBMkJILHVDQUE2Qjs7SUFDN0IsNkNBQWtEOzs7OztJQUh0Qyx3Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIE9uQ2hhbmdlcyxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBOR19WQUxVRV9BQ0NFU1NPUixcbiAgRm9ybUNvbnRyb2wsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgQ09VTlRFUl9DT05UUk9MX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEl0ZW1Db3VudGVyQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1pdGVtLWNvdW50ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaXRlbS1jb3VudGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaXRlbS1jb3VudGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW0NPVU5URVJfQ09OVFJPTF9BQ0NFU1NPUl0sXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Db3VudGVyQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnaXRlbUNvdW50ZXJJbnB1dCcpXG4gIHB1YmxpYyBpbnB1dDogRWxlbWVudFJlZjtcblxuICB2YWx1ZSA9IDA7XG4gIEBJbnB1dCgpXG4gIHN0ZXAgPSAxO1xuICBASW5wdXQoKVxuICBtaW46IG51bWJlcjtcbiAgQElucHV0KClcbiAgbWF4OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGFzeW5jID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGNhcnRJc0xvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgaXNWYWx1ZUNoYW5nZWFibGUgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgZm9jdXM6IGJvb2xlYW47XG5cbiAgaXNWYWx1ZU91dE9mUmFuZ2UgPSBmYWxzZTtcbiAgaW5wdXRWYWx1ZTogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woe1xuICAgIGRpc2FibGVkOiB0aGlzLmlzVmFsdWVDaGFuZ2VhYmxlLFxuICB9KTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5taW4gfHwgMCk7XG4gICAgdGhpcy5pbnB1dFZhbHVlLnZhbHVlQ2hhbmdlcy5waXBlKGRlYm91bmNlVGltZSgzMDApKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWFudWFsQ2hhbmdlKE51bWJlcih2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuY2FydElzTG9hZGluZykge1xuICAgICAgdGhpcy5pbnB1dFZhbHVlLmRpc2FibGUoe1xuICAgICAgICBvbmx5U2VsZjogdHJ1ZSxcbiAgICAgICAgZW1pdEV2ZW50OiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0VmFsdWUuZW5hYmxlKHtcbiAgICAgICAgb25seVNlbGY6IHRydWUsXG4gICAgICAgIGVtaXRFdmVudDogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgb25Ub3VjaDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoX3JhdGluZzogbnVtYmVyKSA9PiB7fTtcblxuICAvKipcbiAgICogSWYgdmFsdWUgaXMgdG9vIHNtYWxsIGl0IHdpbGwgYmUgc2V0IHRvIG1pbiwgaWYgaXMgdG9vIGJpZyBpdCB3aWxsIGJlIHNldCB0byBtYXguXG4gICAqL1xuICBhZGp1c3RWYWx1ZUluUmFuZ2UoaW5jb21pbmdWYWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gaW5jb21pbmdWYWx1ZSA8IHRoaXMubWluIHx8ICF0aGlzLm1pblxuICAgICAgPyB0aGlzLm1pblxuICAgICAgOiBpbmNvbWluZ1ZhbHVlID4gdGhpcy5tYXggfHwgIXRoaXMubWF4XG4gICAgICA/IHRoaXMubWF4XG4gICAgICA6IGluY29taW5nVmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogRnVuY3Rpb24gc2V0ICdpc1ZhbHVlT3V0T2ZSYW5nZScgZmxhZyBhbmQgYWRqdXN0IHZhbHVlIGluIHJhbmdlLiBUaGVuIHVwZGF0ZSBtb2RlbCB2YWx1ZSBhbmQgcmVmcmVzaCBpbnB1dFxuICAgKi9cbiAgbWFudWFsQ2hhbmdlKG5ld1ZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmlzVmFsdWVPdXRPZlJhbmdlID0gdGhpcy5pc091dE9mUmFuZ2UobmV3VmFsdWUpO1xuICAgIG5ld1ZhbHVlID0gdGhpcy5hZGp1c3RWYWx1ZUluUmFuZ2UobmV3VmFsdWUpO1xuICAgIHRoaXMudXBkYXRlVmFsdWUobmV3VmFsdWUpO1xuICAgIC8qIFdlIHVzZSB0aGUgdmFsdWUgZnJvbSB0aGUgaW5wdXQsIGhvd2V2ZXIsIHRoaXMgdmFsdWVcbiAgICAgIGlzIG5vdCB0aGUgY29ycmVjdCB2YWx1ZSB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQuIFRoZSBjb3JyZWN0IHZhbHVlIHRvIGRpc3BsYXlcbiAgICAgIGlzIHRoaXMudmFsdWUsIHdoaWNoIHRoZSBwYXJlbnQgdXBkYXRlcyBpZiB0aGUgYXN5bmMgY2FsbCBzdWNjZWVkLiBJZiB0aGUgY2FsbFxuICAgICAgZmFpbHMsIHRoZW4gdGhlIGlucHV0IHdpbGwgbmVlZCB0byBkaXNwbGF5IHRoaXMudmFsdWUsIGFuZCBub3Qgd2hhdCB0aGUgdXNlclxuICAgICAgcmVjZW50bHkgdHlwZWQgaW4gKi9cbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgbmV3VmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmeSB2YWx1ZSBmb3IgZGVjaXNpb24gYWJvdXQgZGlzcGxheWluZyBlcnJvciBhYm91dCByYW5nZVxuICAgKi9cbiAgaXNPdXRPZlJhbmdlKHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsdWUgPCB0aGlzLm1pbiB8fCB2YWx1ZSA+IHRoaXMubWF4O1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB7XG4gICAgICBBcnJvd0Rvd246ICgpID0+IHRoaXMuZGVjcmVtZW50KCksXG4gICAgICBBcnJvd1VwOiAoKSA9PiB0aGlzLmluY3JlbWVudCgpLFxuICAgIH07XG5cbiAgICBpZiAoaGFuZGxlcnNbZXZlbnQuY29kZV0pIHtcbiAgICAgIGhhbmRsZXJzW2V2ZW50LmNvZGVdKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5mb2N1cyA9IGZhbHNlO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5vblRvdWNoKCk7XG4gIH1cblxuICBvbkZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5mb2N1cyA9IHRydWU7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm9uVG91Y2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZnkgdmFsdWUgdGhhdCBpdCBjYW4gYmUgaW5jcmVtZW50ZWQsIGlmIHllcyBpdCBkb2VzIHRoYXQuXG4gICAqL1xuICBpbmNyZW1lbnQoKTogdm9pZCB7XG4gICAgdGhpcy5tYW51YWxDaGFuZ2UodGhpcy52YWx1ZSArIHRoaXMuc3RlcCk7XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZ5IHZhbHVlIHRoYXQgaXQgY2FuIGJlIGRlY3JlbWVudGVkLCBpZiB5ZXMgaXQgZG9lcyB0aGF0LlxuICAgKi9cbiAgZGVjcmVtZW50KCk6IHZvaWQge1xuICAgIHRoaXMubWFudWFsQ2hhbmdlKHRoaXMudmFsdWUgLSB0aGlzLnN0ZXApO1xuICB9XG5cbiAgLy8gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlIHx8IHRoaXMubWluIHx8IDA7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB1cCBuZXcgdmFsdWUgZm9yIGlucHV0IGFuZCBlbWl0IGV2ZW50IG91dHNpZGVcbiAgICovXG4gIHVwZGF0ZVZhbHVlKHVwZGF0ZWRRdWFudGl0eTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmFzeW5jKSB7XG4gICAgICAvLyBJZiB0aGUgYXN5bmMgZmxhZyBpcyB0cnVlLCB0aGVuIHRoZSBwYXJlbnQgY29tcG9uZW50IGlzIHJlc3BvbnNpYmxlIGZvciB1cGRhdGluZyB0aGUgZm9ybVxuICAgICAgdGhpcy53cml0ZVZhbHVlKHVwZGF0ZWRRdWFudGl0eSk7XG4gICAgfVxuXG4gICAgLy8gQWRkaXRpb25hbGx5LCB3ZSBlbWl0IGEgY2hhbmdlIGV2ZW50LCBzbyB0aGF0IHVzZXJzIG1heSBvcHRpb25hbGx5IGRvIHNvbWV0aGluZyBvbiBjaGFuZ2VcbiAgICB0aGlzLnVwZGF0ZS5lbWl0KHVwZGF0ZWRRdWFudGl0eSk7XG4gICAgdGhpcy5vblRvdWNoKCk7XG4gIH1cbn1cbiJdfQ==