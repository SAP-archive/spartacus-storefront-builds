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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci1yYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBQ3ZCLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQUFBO1FBY0UsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUVYLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUVWLGFBQVEsR0FBRyxVQUFDLE9BQWUsSUFBTSxDQUFDLENBQUM7UUFDbkMsY0FBUyxHQUFHLGNBQU8sQ0FBQyxDQUFDO0lBMEJ2QixDQUFDO0lBeEJDLHNCQUFJLHNDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsdUNBQVM7Ozs7SUFBVCxVQUFVLE1BQWM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRCxpQ0FBaUM7Ozs7OztJQUVqQyx3Q0FBVTs7Ozs7O0lBQVYsVUFBVyxNQUFjO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsOENBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQTRCO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsK0NBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Z0JBOUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixnZEFBMkM7b0JBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsS0FBSyxFQUFFLElBQUk7NEJBQ1gsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CLENBQUM7eUJBQ25EO3FCQUNGO2lCQUNGOzs7eUJBRUUsS0FBSzsyQkFFTCxLQUFLO3dCQUVMLEtBQUs7O0lBOEJSLDBCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0FuQ1ksbUJBQW1COzs7SUFDOUIscUNBQ1c7O0lBQ1gsdUNBQ2lCOztJQUNqQixvQ0FDVTs7SUFFVix1Q0FBbUM7O0lBQ25DLHdDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3Rhci1yYXRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3Rhci1yYXRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFN0YXJSYXRpbmdDb21wb25lbnQpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFN0YXJSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpXG4gIHJhdGluZyA9IDE7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHN0ZXBzID0gMTtcblxuICBvbkNoYW5nZSA9IChfcmF0aW5nOiBudW1iZXIpID0+IHt9O1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBnZXQgdmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5yYXRpbmc7XG4gIH1cblxuICBzZXRSYXRpbmcocmF0aW5nOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMud3JpdGVWYWx1ZShyYXRpbmcpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENvbnRyb2x2YWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuXG4gIHdyaXRlVmFsdWUocmF0aW5nOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnJhdGluZyA9IHJhdGluZztcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMucmF0aW5nKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChyYXRpbmc6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19