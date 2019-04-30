/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, Input, ChangeDetectionStrategy, forwardRef, } from '@angular/core';
export class StarRatingComponent {
    constructor() {
        this.rating = 1;
        this.disabled = false;
        this.steps = 1;
        this.onChange = (_rating) => { };
        this.onTouched = () => { };
    }
    /**
     * @return {?}
     */
    get value() {
        return this.rating;
    }
    /**
     * @param {?} rating
     * @return {?}
     */
    setRating(rating) {
        if (!this.disabled) {
            this.writeValue(rating);
        }
    }
    // ControlvalueAccessor interface
    /**
     * @param {?} rating
     * @return {?}
     */
    writeValue(rating) {
        this.rating = rating;
        this.onChange(this.rating);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
StarRatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-star-rating',
                template: "<div class=\"cx-star-rating\" tabindex=\"0\">\n  <ng-template #template let-fill=\"fill\">\n    <span class=\"star\" [class.full]=\"fill === 100\">\n      <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span> &#9733;\n    </span>\n  </ng-template>\n  <ngb-rating\n    [(rate)]=\"rating\"\n    (rateChange)=\"onTouched(); setRating($event)\"\n    [starTemplate]=\"template\"\n    [readonly]=\"disabled\"\n    max=\"5\"\n  ></ngb-rating>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef(() => StarRatingComponent),
                    },
                ]
            }] }
];
StarRatingComponent.propDecorators = {
    rating: [{ type: Input }],
    disabled: [{ type: Input }],
    steps: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci1yYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL2NvbXBvbmVudHMvZm9ybS1jb21wb25lbnRzL3N0YXItcmF0aW5nL3N0YXItcmF0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHVCQUF1QixFQUN2QixVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFjdkIsTUFBTSxPQUFPLG1CQUFtQjtJQVpoQztRQWNFLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFFWCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFVixhQUFRLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUNuQyxjQUFTLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBMEJ2QixDQUFDOzs7O0lBeEJDLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFjO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7Ozs7SUFJRCxVQUFVLENBQUMsTUFBYztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQTRCO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBYztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7WUE5Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGdkQUEyQztnQkFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixLQUFLLEVBQUUsSUFBSTt3QkFDWCxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO3FCQUNuRDtpQkFDRjthQUNGOzs7cUJBRUUsS0FBSzt1QkFFTCxLQUFLO29CQUVMLEtBQUs7Ozs7SUFKTixxQ0FDVzs7SUFDWCx1Q0FDaUI7O0lBQ2pCLG9DQUNVOztJQUVWLHVDQUFtQzs7SUFDbkMsd0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdGFyLXJhdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGFyLXJhdGluZy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU3RhclJhdGluZ0NvbXBvbmVudCksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RhclJhdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KClcbiAgcmF0aW5nID0gMTtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgc3RlcHMgPSAxO1xuXG4gIG9uQ2hhbmdlID0gKF9yYXRpbmc6IG51bWJlcikgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIGdldCB2YWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnJhdGluZztcbiAgfVxuXG4gIHNldFJhdGluZyhyYXRpbmc6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy53cml0ZVZhbHVlKHJhdGluZyk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ29udHJvbHZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXG5cbiAgd3JpdGVWYWx1ZShyYXRpbmc6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucmF0aW5nID0gcmF0aW5nO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5yYXRpbmcpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHJhdGluZzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=