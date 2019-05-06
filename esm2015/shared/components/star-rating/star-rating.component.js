/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { ICON_TYPES } from '../../../cms-components/misc/index';
export class StarRatingComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
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
    ngOnInit() {
        this.setRate(this.rating, true);
    }
    /**
     * @param {?} value
     * @param {?=} force
     * @return {?}
     */
    setRate(value, force) {
        if (!this.disabled || force) {
            this.el.nativeElement.style.setProperty('--star-fill', value || this.initialRate);
        }
    }
    /**
     * @param {?} rating
     * @return {?}
     */
    saveRate(rating) {
        if (this.disabled) {
            return;
        }
        this.initialRate = rating;
        this.setRate(rating);
        this.change.emit(rating);
    }
}
StarRatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-star-rating',
                template: "<cx-icon\n  *ngFor=\"let i of [1, 2, 3, 4, 5]\"\n  [type]=\"iconTypes.STAR\"\n  class=\"star\"\n  (mouseover)=\"setRate(i)\"\n  (mouseout)=\"setRate(0)\"\n  (click)=\"saveRate(i)\"\n></cx-icon>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
StarRatingComponent.ctorParameters = () => [
    { type: ElementRef }
];
StarRatingComponent.propDecorators = {
    disabled: [{ type: Input }, { type: HostBinding, args: ['attr.disabled',] }],
    rating: [{ type: Input }],
    change: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci1yYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBRUwsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQU9oRSxNQUFNLE9BQU8sbUJBQW1COzs7O0lBcUI5QixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTs7Ozs7UUFoQkssYUFBUSxHQUFHLEtBQUssQ0FBQzs7OztRQVU5QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUV0QyxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUV4QixjQUFTLEdBQUcsVUFBVSxDQUFDO0lBRWMsQ0FBQzs7OztJQUV0QyxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBQyxLQUFhLEVBQUUsS0FBZTtRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDckMsYUFBYSxFQUNiLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxDQUMxQixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxNQUFjO1FBQ3JCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsK01BQTJDO2dCQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQWJDLFVBQVU7Ozt1QkFtQlQsS0FBSyxZQUFJLFdBQVcsU0FBQyxlQUFlO3FCQUtwQyxLQUFLO3FCQUtMLE1BQU07Ozs7Ozs7O0lBVlAsdUNBQXdEOzs7OztJQUt4RCxxQ0FBd0I7Ozs7O0lBS3hCLHFDQUE4Qzs7Ozs7SUFFOUMsMENBQXdCOztJQUV4Qix3Q0FBdUI7Ozs7O0lBRVgsaUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDT05fVFlQRVMgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3Rhci1yYXRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3Rhci1yYXRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU3RhclJhdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBUaGUgcmF0aW5nIGNvbXBvbmVudCBjYW4gYmUgdXNlZCBpbiBkaXNhYmxlZCBtb2RlLFxuICAgKiBzbyB0aGF0IHRoZSBpbnRlcmF0aW9uIGlzIG5vdCBwcm92aWRlZC5cbiAgICovXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnYXR0ci5kaXNhYmxlZCcpIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSByYXRpbmcgd2lsbCBiZSB1c2VkIHRvIHJlbmRlciBzb21lIGNvbG9yZnVsIHN0YXJzIGluIHRoZSBVSS5cbiAgICovXG4gIEBJbnB1dCgpIHJhdGluZzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB0aGUgZ2l2ZW4gcmF0aW5nIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGEgc3Rhci5cbiAgICovXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBwcml2YXRlIGluaXRpYWxSYXRlID0gMDtcblxuICBpY29uVHlwZXMgPSBJQ09OX1RZUEVTO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRSYXRlKHRoaXMucmF0aW5nLCB0cnVlKTtcbiAgfVxuXG4gIHNldFJhdGUodmFsdWU6IG51bWJlciwgZm9yY2U/OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkIHx8IGZvcmNlKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICctLXN0YXItZmlsbCcsXG4gICAgICAgIHZhbHVlIHx8IHRoaXMuaW5pdGlhbFJhdGVcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgc2F2ZVJhdGUocmF0aW5nOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmluaXRpYWxSYXRlID0gcmF0aW5nO1xuICAgIHRoaXMuc2V0UmF0ZShyYXRpbmcpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQocmF0aW5nKTtcbiAgfVxufVxuIl19