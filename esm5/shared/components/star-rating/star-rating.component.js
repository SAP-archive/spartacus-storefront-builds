/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { ICON_TYPES } from '../../../cms-components/misc/index';
var StarRatingComponent = /** @class */ (function () {
    function StarRatingComponent(el) {
        this.el = el;
        /**
         * The rating component can be used in disabled mode,
         * so that the interation is not provided.
         */
        this.disabled = false;
        /**
         * Emits the given rating when the user clicks on a star.
         */
        this.change = new EventEmitter();
        this.initialRate = 0;
        this.iconTypes = ICON_TYPES;
    }
    /**
     * @return {?}
     */
    StarRatingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setRate(this.rating, true);
    };
    /**
     * @param {?} value
     * @param {?=} force
     * @return {?}
     */
    StarRatingComponent.prototype.setRate = /**
     * @param {?} value
     * @param {?=} force
     * @return {?}
     */
    function (value, force) {
        if (!this.disabled || force) {
            this.el.nativeElement.style.setProperty('--star-fill', value || this.initialRate);
        }
    };
    /**
     * @param {?} rating
     * @return {?}
     */
    StarRatingComponent.prototype.saveRate = /**
     * @param {?} rating
     * @return {?}
     */
    function (rating) {
        if (this.disabled) {
            return;
        }
        this.initialRate = rating;
        this.setRate(rating);
        this.change.emit(rating);
    };
    StarRatingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-star-rating',
                    template: "<cx-icon\n  *ngFor=\"let i of [1, 2, 3, 4, 5]\"\n  [type]=\"iconTypes.STAR\"\n  class=\"star\"\n  (mouseover)=\"setRate(i)\"\n  (mouseout)=\"setRate(0)\"\n  (click)=\"saveRate(i)\"\n></cx-icon>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StarRatingComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    StarRatingComponent.propDecorators = {
        disabled: [{ type: Input }, { type: HostBinding, args: ['attr.disabled',] }],
        rating: [{ type: Input }],
        change: [{ type: Output }]
    };
    return StarRatingComponent;
}());
export { StarRatingComponent };
if (false) {
    /**
     * The rating component can be used in disabled mode,
     * so that the interation is not provided.
     * @type {?}
     */
    StarRatingComponent.prototype.disabled;
    /**
     * The rating will be used to render some colorful stars in the UI.
     * @type {?}
     */
    StarRatingComponent.prototype.rating;
    /**
     * Emits the given rating when the user clicks on a star.
     * @type {?}
     */
    StarRatingComponent.prototype.change;
    /**
     * @type {?}
     * @private
     */
    StarRatingComponent.prototype.initialRate;
    /** @type {?} */
    StarRatingComponent.prototype.iconTypes;
    /**
     * @type {?}
     * @private
     */
    StarRatingComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci1yYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBRUwsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVoRTtJQTBCRSw2QkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7Ozs7O1FBaEJLLGFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7UUFVOUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFdEMsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFFeEIsY0FBUyxHQUFHLFVBQVUsQ0FBQztJQUVjLENBQUM7Ozs7SUFFdEMsc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7OztJQUVELHFDQUFPOzs7OztJQUFQLFVBQVEsS0FBYSxFQUFFLEtBQWU7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxFQUFFO1lBQzNCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQ3JDLGFBQWEsRUFDYixLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FDMUIsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxzQ0FBUTs7OztJQUFSLFVBQVMsTUFBYztRQUNyQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDOztnQkFoREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLCtNQUEyQztvQkFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQWJDLFVBQVU7OzsyQkFtQlQsS0FBSyxZQUFJLFdBQVcsU0FBQyxlQUFlO3lCQUtwQyxLQUFLO3lCQUtMLE1BQU07O0lBNkJULDBCQUFDO0NBQUEsQUFqREQsSUFpREM7U0E1Q1ksbUJBQW1COzs7Ozs7O0lBSzlCLHVDQUF3RDs7Ozs7SUFLeEQscUNBQXdCOzs7OztJQUt4QixxQ0FBOEM7Ozs7O0lBRTlDLDBDQUF3Qjs7SUFFeEIsd0NBQXVCOzs7OztJQUVYLGlDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEVTIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0YXItcmF0aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0YXItcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFN0YXJSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogVGhlIHJhdGluZyBjb21wb25lbnQgY2FuIGJlIHVzZWQgaW4gZGlzYWJsZWQgbW9kZSxcbiAgICogc28gdGhhdCB0aGUgaW50ZXJhdGlvbiBpcyBub3QgcHJvdmlkZWQuXG4gICAqL1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2F0dHIuZGlzYWJsZWQnKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgcmF0aW5nIHdpbGwgYmUgdXNlZCB0byByZW5kZXIgc29tZSBjb2xvcmZ1bCBzdGFycyBpbiB0aGUgVUkuXG4gICAqL1xuICBASW5wdXQoKSByYXRpbmc6IG51bWJlcjtcblxuICAvKipcbiAgICogRW1pdHMgdGhlIGdpdmVuIHJhdGluZyB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBhIHN0YXIuXG4gICAqL1xuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgcHJpdmF0ZSBpbml0aWFsUmF0ZSA9IDA7XG5cbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFUztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0UmF0ZSh0aGlzLnJhdGluZywgdHJ1ZSk7XG4gIH1cblxuICBzZXRSYXRlKHZhbHVlOiBudW1iZXIsIGZvcmNlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCB8fCBmb3JjZSkge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnLS1zdGFyLWZpbGwnLFxuICAgICAgICB2YWx1ZSB8fCB0aGlzLmluaXRpYWxSYXRlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHNhdmVSYXRlKHJhdGluZzogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbml0aWFsUmF0ZSA9IHJhdGluZztcbiAgICB0aGlzLnNldFJhdGUocmF0aW5nKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHJhdGluZyk7XG4gIH1cbn1cbiJdfQ==