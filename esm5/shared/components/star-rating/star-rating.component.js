/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { ICON_TYPE } from '../../../cms-components/misc/index';
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
        this.iconTypes = ICON_TYPE;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci1yYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBRUwsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUUvRDtJQTBCRSw2QkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7Ozs7O1FBaEJLLGFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7UUFVOUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFdEMsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFFeEIsY0FBUyxHQUFHLFNBQVMsQ0FBQztJQUVlLENBQUM7Ozs7SUFFdEMsc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7OztJQUVELHFDQUFPOzs7OztJQUFQLFVBQVEsS0FBYSxFQUFFLEtBQWU7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxFQUFFO1lBQzNCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQ3JDLGFBQWEsRUFDYixLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FDMUIsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxzQ0FBUTs7OztJQUFSLFVBQVMsTUFBYztRQUNyQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDOztnQkFoREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLCtNQUEyQztvQkFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQWJDLFVBQVU7OzsyQkFtQlQsS0FBSyxZQUFJLFdBQVcsU0FBQyxlQUFlO3lCQUtwQyxLQUFLO3lCQUtMLE1BQU07O0lBNkJULDBCQUFDO0NBQUEsQUFqREQsSUFpREM7U0E1Q1ksbUJBQW1COzs7Ozs7O0lBSzlCLHVDQUF3RDs7Ozs7SUFLeEQscUNBQXdCOzs7OztJQUt4QixxQ0FBOEM7Ozs7O0lBRTlDLDBDQUF3Qjs7SUFFeEIsd0NBQXNCOzs7OztJQUVWLGlDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3Rhci1yYXRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3Rhci1yYXRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU3RhclJhdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBUaGUgcmF0aW5nIGNvbXBvbmVudCBjYW4gYmUgdXNlZCBpbiBkaXNhYmxlZCBtb2RlLFxuICAgKiBzbyB0aGF0IHRoZSBpbnRlcmF0aW9uIGlzIG5vdCBwcm92aWRlZC5cbiAgICovXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnYXR0ci5kaXNhYmxlZCcpIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSByYXRpbmcgd2lsbCBiZSB1c2VkIHRvIHJlbmRlciBzb21lIGNvbG9yZnVsIHN0YXJzIGluIHRoZSBVSS5cbiAgICovXG4gIEBJbnB1dCgpIHJhdGluZzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB0aGUgZ2l2ZW4gcmF0aW5nIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGEgc3Rhci5cbiAgICovXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBwcml2YXRlIGluaXRpYWxSYXRlID0gMDtcblxuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFJhdGUodGhpcy5yYXRpbmcsIHRydWUpO1xuICB9XG5cbiAgc2V0UmF0ZSh2YWx1ZTogbnVtYmVyLCBmb3JjZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgfHwgZm9yY2UpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJy0tc3Rhci1maWxsJyxcbiAgICAgICAgdmFsdWUgfHwgdGhpcy5pbml0aWFsUmF0ZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzYXZlUmF0ZShyYXRpbmc6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW5pdGlhbFJhdGUgPSByYXRpbmc7XG4gICAgdGhpcy5zZXRSYXRlKHJhdGluZyk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChyYXRpbmcpO1xuICB9XG59XG4iXX0=