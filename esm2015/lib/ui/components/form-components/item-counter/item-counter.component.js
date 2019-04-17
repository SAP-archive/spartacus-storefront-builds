/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild, Renderer2, } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl, } from '@angular/forms';
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
                providers: [COUNTER_CONTROL_ACCESSOR],
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after{margin-left:0}.dropleft .dropdown-toggle-split::before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio],.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.cx-counter-wrapper{display:var(--cx-display,inline-flex);flex-direction:var(--cx-flex-direction,column)}.cx-counter{border-radius:var(--cx-border-radius,4px);border-width:var(--cx-border-width,1px);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}.cx-counter-value{border:var(--cx-border,none);text-align:var(--cx-text-align,center);border-width:var(--cx-border-width,0 1px 0 1px);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light));padding:var(--cx-padding,12px 9px 12px 9px);max-height:var(--cx-max-height,46px);min-width:var(--cx-min-width,48px);max-width:var(--cx-max-width,78px)}.cx-counter-action{max-height:var(--cx-max-height,48px);min-width:var(--cx-minwidth,40px);border:var(--cx-border,none);cursor:var(--cx-cursor,pointer);color:var(--cx-color,var(--cx-g-color-text));background-color:var(--cx-background-color,var(--cx-g-color-transparent));margin:var(--cx-margin,0);font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.6)}.cx-counter-action:hover{color:var(--cx-color,var(--cx-g-color-primary))}.cx-counter-action:disabled{color:var(--cx-color,var(--cx-g-color-light));opacity:var(--cx-opacity,1);cursor:var(--cx-cursor,not-allowed)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jb3VudGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9jb21wb25lbnRzL2Zvcm0tY29tcG9uZW50cy9pdGVtLWNvdW50ZXIvaXRlbS1jb3VudGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFFVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixXQUFXLEdBQ1osTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O01BRXhDLHdCQUF3QixHQUFHO0lBQy9CLE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUM7SUFDbkQsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQVFELE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFvRC9CLFlBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUEvQ3ZDLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFVixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBTVQsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUVkLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUcxQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUlwQyxzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsZUFBVSxHQUFnQixJQUFJLFdBQVcsQ0FBQztZQUN4QyxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtTQUNqQyxDQUFDLENBQUM7UUEyQkgsWUFBTyxHQUFhLEdB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QzNCLG9nQ0FBNEM7Z0JBRTVDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDOzthQUN0Qzs7OztZQXJCQyxTQUFTOzs7b0JBd0JSLFNBQVMsU0FBQyxrQkFBa0I7bUJBSTVCLEtBQUs7a0JBRUwsS0FBSztrQkFFTCxLQUFLO29CQUVMLEtBQUs7NEJBRUwsS0FBSztnQ0FFTCxLQUFLO3FCQUdMLE1BQU07Ozs7SUFqQlAscUNBQ3lCOztJQUV6QixxQ0FBVTs7SUFDVixvQ0FDUzs7SUFDVCxtQ0FDWTs7SUFDWixtQ0FDWTs7SUFDWixxQ0FDYzs7SUFDZCw2Q0FDc0I7O0lBQ3RCLGlEQUMwQjs7SUFFMUIsc0NBQ29DOztJQUVwQyxxQ0FBZTs7SUFFZixpREFBMEI7O0lBQzFCLDBDQUVHOztJQTJCSCx1Q0FBNkI7O0lBQzdCLDZDQUFrRDs7Ozs7SUFIdEMsd0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBPbkNoYW5nZXMsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIEZvcm1Db250cm9sLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IENPVU5URVJfQ09OVFJPTF9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJdGVtQ291bnRlckNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtaXRlbS1jb3VudGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2l0ZW0tY291bnRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2l0ZW0tY291bnRlci5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtDT1VOVEVSX0NPTlRST0xfQUNDRVNTT1JdLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtQ291bnRlckNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ2l0ZW1Db3VudGVySW5wdXQnKVxuICBwdWJsaWMgaW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgdmFsdWUgPSAwO1xuICBASW5wdXQoKVxuICBzdGVwID0gMTtcbiAgQElucHV0KClcbiAgbWluOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1heDogbnVtYmVyO1xuICBASW5wdXQoKVxuICBhc3luYyA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBjYXJ0SXNMb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGlzVmFsdWVDaGFuZ2VhYmxlID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIGZvY3VzOiBib29sZWFuO1xuXG4gIGlzVmFsdWVPdXRPZlJhbmdlID0gZmFsc2U7XG4gIGlucHV0VmFsdWU6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKHtcbiAgICBkaXNhYmxlZDogdGhpcy5pc1ZhbHVlQ2hhbmdlYWJsZSxcbiAgfSk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy53cml0ZVZhbHVlKHRoaXMubWluIHx8IDApO1xuICAgIHRoaXMuaW5wdXRWYWx1ZS52YWx1ZUNoYW5nZXMucGlwZShkZWJvdW5jZVRpbWUoMzAwKSkuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLm1hbnVhbENoYW5nZShOdW1iZXIodmFsdWUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmNhcnRJc0xvYWRpbmcpIHtcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZS5kaXNhYmxlKHtcbiAgICAgICAgb25seVNlbGY6IHRydWUsXG4gICAgICAgIGVtaXRFdmVudDogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dFZhbHVlLmVuYWJsZSh7XG4gICAgICAgIG9ubHlTZWxmOiB0cnVlLFxuICAgICAgICBlbWl0RXZlbnQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIG9uVG91Y2g6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKF9yYXRpbmc6IG51bWJlcikgPT4ge307XG5cbiAgLyoqXG4gICAqIElmIHZhbHVlIGlzIHRvbyBzbWFsbCBpdCB3aWxsIGJlIHNldCB0byBtaW4sIGlmIGlzIHRvbyBiaWcgaXQgd2lsbCBiZSBzZXQgdG8gbWF4LlxuICAgKi9cbiAgYWRqdXN0VmFsdWVJblJhbmdlKGluY29taW5nVmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIGluY29taW5nVmFsdWUgPCB0aGlzLm1pbiB8fCAhdGhpcy5taW5cbiAgICAgID8gdGhpcy5taW5cbiAgICAgIDogaW5jb21pbmdWYWx1ZSA+IHRoaXMubWF4IHx8ICF0aGlzLm1heFxuICAgICAgPyB0aGlzLm1heFxuICAgICAgOiBpbmNvbWluZ1ZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHNldCAnaXNWYWx1ZU91dE9mUmFuZ2UnIGZsYWcgYW5kIGFkanVzdCB2YWx1ZSBpbiByYW5nZS4gVGhlbiB1cGRhdGUgbW9kZWwgdmFsdWUgYW5kIHJlZnJlc2ggaW5wdXRcbiAgICovXG4gIG1hbnVhbENoYW5nZShuZXdWYWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5pc1ZhbHVlT3V0T2ZSYW5nZSA9IHRoaXMuaXNPdXRPZlJhbmdlKG5ld1ZhbHVlKTtcbiAgICBuZXdWYWx1ZSA9IHRoaXMuYWRqdXN0VmFsdWVJblJhbmdlKG5ld1ZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKG5ld1ZhbHVlKTtcbiAgICAvKiBXZSB1c2UgdGhlIHZhbHVlIGZyb20gdGhlIGlucHV0LCBob3dldmVyLCB0aGlzIHZhbHVlXG4gICAgICBpcyBub3QgdGhlIGNvcnJlY3QgdmFsdWUgdGhhdCBzaG91bGQgYmUgZGlzcGxheWVkLiBUaGUgY29ycmVjdCB2YWx1ZSB0byBkaXNwbGF5XG4gICAgICBpcyB0aGlzLnZhbHVlLCB3aGljaCB0aGUgcGFyZW50IHVwZGF0ZXMgaWYgdGhlIGFzeW5jIGNhbGwgc3VjY2VlZC4gSWYgdGhlIGNhbGxcbiAgICAgIGZhaWxzLCB0aGVuIHRoZSBpbnB1dCB3aWxsIG5lZWQgdG8gZGlzcGxheSB0aGlzLnZhbHVlLCBhbmQgbm90IHdoYXQgdGhlIHVzZXJcbiAgICAgIHJlY2VudGx5IHR5cGVkIGluICovXG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIG5ld1ZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZnkgdmFsdWUgZm9yIGRlY2lzaW9uIGFib3V0IGRpc3BsYXlpbmcgZXJyb3IgYWJvdXQgcmFuZ2VcbiAgICovXG4gIGlzT3V0T2ZSYW5nZSh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlIDwgdGhpcy5taW4gfHwgdmFsdWUgPiB0aGlzLm1heDtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGhhbmRsZXJzID0ge1xuICAgICAgQXJyb3dEb3duOiAoKSA9PiB0aGlzLmRlY3JlbWVudCgpLFxuICAgICAgQXJyb3dVcDogKCkgPT4gdGhpcy5pbmNyZW1lbnQoKSxcbiAgICB9O1xuXG4gICAgaWYgKGhhbmRsZXJzW2V2ZW50LmNvZGVdKSB7XG4gICAgICBoYW5kbGVyc1tldmVudC5jb2RlXSgpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIG9uQmx1cihldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXMgPSBmYWxzZTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMub25Ub3VjaCgpO1xuICB9XG5cbiAgb25Gb2N1cyhldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXMgPSB0cnVlO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5vblRvdWNoKCk7XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZ5IHZhbHVlIHRoYXQgaXQgY2FuIGJlIGluY3JlbWVudGVkLCBpZiB5ZXMgaXQgZG9lcyB0aGF0LlxuICAgKi9cbiAgaW5jcmVtZW50KCk6IHZvaWQge1xuICAgIHRoaXMubWFudWFsQ2hhbmdlKHRoaXMudmFsdWUgKyB0aGlzLnN0ZXApO1xuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmeSB2YWx1ZSB0aGF0IGl0IGNhbiBiZSBkZWNyZW1lbnRlZCwgaWYgeWVzIGl0IGRvZXMgdGhhdC5cbiAgICovXG4gIGRlY3JlbWVudCgpOiB2b2lkIHtcbiAgICB0aGlzLm1hbnVhbENoYW5nZSh0aGlzLnZhbHVlIC0gdGhpcy5zdGVwKTtcbiAgfVxuXG4gIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSB8fCB0aGlzLm1pbiB8fCAwO1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdXAgbmV3IHZhbHVlIGZvciBpbnB1dCBhbmQgZW1pdCBldmVudCBvdXRzaWRlXG4gICAqL1xuICB1cGRhdGVWYWx1ZSh1cGRhdGVkUXVhbnRpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5hc3luYykge1xuICAgICAgLy8gSWYgdGhlIGFzeW5jIGZsYWcgaXMgdHJ1ZSwgdGhlbiB0aGUgcGFyZW50IGNvbXBvbmVudCBpcyByZXNwb25zaWJsZSBmb3IgdXBkYXRpbmcgdGhlIGZvcm1cbiAgICAgIHRoaXMud3JpdGVWYWx1ZSh1cGRhdGVkUXVhbnRpdHkpO1xuICAgIH1cblxuICAgIC8vIEFkZGl0aW9uYWxseSwgd2UgZW1pdCBhIGNoYW5nZSBldmVudCwgc28gdGhhdCB1c2VycyBtYXkgb3B0aW9uYWxseSBkbyBzb21ldGhpbmcgb24gY2hhbmdlXG4gICAgdGhpcy51cGRhdGUuZW1pdCh1cGRhdGVkUXVhbnRpdHkpO1xuICAgIHRoaXMub25Ub3VjaCgpO1xuICB9XG59XG4iXX0=