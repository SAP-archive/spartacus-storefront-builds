/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, Input, ChangeDetectionStrategy, forwardRef, } from '@angular/core';
var StarRatingComponent = /** @class */ (function () {
    function StarRatingComponent() {
        this.rating = 1;
        this.disabled = false;
        this.steps = 1;
        this.onChange = function (_rating) { };
        this.onTouched = function () { };
    }
    Object.defineProperty(StarRatingComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.rating;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} rating
     * @return {?}
     */
    StarRatingComponent.prototype.setRating = /**
     * @param {?} rating
     * @return {?}
     */
    function (rating) {
        if (!this.disabled) {
            this.writeValue(rating);
        }
    };
    // ControlvalueAccessor interface
    // ControlvalueAccessor interface
    /**
     * @param {?} rating
     * @return {?}
     */
    StarRatingComponent.prototype.writeValue = 
    // ControlvalueAccessor interface
    /**
     * @param {?} rating
     * @return {?}
     */
    function (rating) {
        this.rating = rating;
        this.onChange(this.rating);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StarRatingComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StarRatingComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    StarRatingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-star-rating',
                    template: "<div class=\"cx-star-rating\" tabindex=\"0\">\n  <ng-template #template let-fill=\"fill\">\n    <span class=\"star\" [class.full]=\"fill === 100\">\n      <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span> &#9733;\n    </span>\n  </ng-template>\n  <ngb-rating\n    [(rate)]=\"rating\"\n    (rateChange)=\"onTouched(); setRating($event)\"\n    [starTemplate]=\"template\"\n    [readonly]=\"disabled\"\n    max=\"5\"\n  ></ngb-rating>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef(function () { return StarRatingComponent; }),
                        },
                    ]
                }] }
    ];
    StarRatingComponent.propDecorators = {
        rating: [{ type: Input }],
        disabled: [{ type: Input }],
        steps: [{ type: Input }]
    };
    return StarRatingComponent;
}());
export { StarRatingComponent };
if (false) {
    /** @type {?} */
    StarRatingComponent.prototype.rating;
    /** @type {?} */
    StarRatingComponent.prototype.disabled;
    /** @type {?} */
    StarRatingComponent.prototype.steps;
    /** @type {?} */
    StarRatingComponent.prototype.onChange;
    /** @type {?} */
    StarRatingComponent.prototype.onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci1yYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL2NvbXBvbmVudHMvZm9ybS1jb21wb25lbnRzL3N0YXItcmF0aW5nL3N0YXItcmF0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHVCQUF1QixFQUN2QixVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkI7SUFBQTtRQWNFLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFFWCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFVixhQUFRLEdBQUcsVUFBQyxPQUFlLElBQU0sQ0FBQyxDQUFDO1FBQ25DLGNBQVMsR0FBRyxjQUFPLENBQUMsQ0FBQztJQTBCdkIsQ0FBQztJQXhCQyxzQkFBSSxzQ0FBSzs7OztRQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBOzs7OztJQUVELHVDQUFTOzs7O0lBQVQsVUFBVSxNQUFjO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsaUNBQWlDOzs7Ozs7SUFFakMsd0NBQVU7Ozs7OztJQUFWLFVBQVcsTUFBYztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELDhDQUFnQjs7OztJQUFoQixVQUFpQixFQUE0QjtRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELCtDQUFpQjs7OztJQUFqQixVQUFrQixFQUFjO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7O2dCQTlDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsZ2RBQTJDO29CQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLEtBQUssRUFBRSxJQUFJOzRCQUNYLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixDQUFDO3lCQUNuRDtxQkFDRjtpQkFDRjs7O3lCQUVFLEtBQUs7MkJBRUwsS0FBSzt3QkFFTCxLQUFLOztJQThCUiwwQkFBQztDQUFBLEFBL0NELElBK0NDO1NBbkNZLG1CQUFtQjs7O0lBQzlCLHFDQUNXOztJQUNYLHVDQUNpQjs7SUFDakIsb0NBQ1U7O0lBRVYsdUNBQW1DOztJQUNuQyx3Q0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0YXItcmF0aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0YXItcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTdGFyUmF0aW5nQ29tcG9uZW50KSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTdGFyUmF0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKVxuICByYXRpbmcgPSAxO1xuICBASW5wdXQoKVxuICBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBzdGVwcyA9IDE7XG5cbiAgb25DaGFuZ2UgPSAoX3JhdGluZzogbnVtYmVyKSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucmF0aW5nO1xuICB9XG5cbiAgc2V0UmF0aW5nKHJhdGluZzogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLndyaXRlVmFsdWUocmF0aW5nKTtcbiAgICB9XG4gIH1cblxuICAvLyBDb250cm9sdmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcblxuICB3cml0ZVZhbHVlKHJhdGluZzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5yYXRpbmcgPSByYXRpbmc7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnJhdGluZyk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAocmF0aW5nOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==