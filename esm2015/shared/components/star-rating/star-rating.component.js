/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2, } from '@angular/core';
import { ICON_TYPE } from '../../../cms-components/misc/index';
export class StarRatingComponent {
    /**
     * @param {?} el
     * @param {?=} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
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
            // TODO(issue:#3803) deprecated since 1.0.2
            if (this.renderer) {
                this.renderer.setAttribute(this.el.nativeElement, 'style', `--star-fill:${value || this.initialRate};`);
            }
            else {
                this.el.nativeElement.style.setProperty('--star-fill', value || this.initialRate);
            }
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
    { type: ElementRef },
    { type: Renderer2 }
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
     * @protected
     */
    StarRatingComponent.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    StarRatingComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci1yYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFPL0QsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUE2QjlCLFlBQXNCLEVBQWMsRUFBWSxRQUFvQjtRQUE5QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVksYUFBUSxHQUFSLFFBQVEsQ0FBWTs7Ozs7UUF4QjdCLGFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7UUFVOUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFdEMsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFFeEIsY0FBUyxHQUFHLFNBQVMsQ0FBQztJQVVpRCxDQUFDOzs7O0lBRXhFLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQWEsRUFBRSxLQUFlO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssRUFBRTtZQUMzQiwyQ0FBMkM7WUFDM0MsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ3JCLE9BQU8sRUFDUCxlQUFlLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQzVDLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUNyQyxhQUFhLEVBQ2IsS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQzFCLENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsTUFBYztRQUNyQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUFqRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLCtNQUEyQztnQkFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFkQyxVQUFVO1lBTVYsU0FBUzs7O3VCQWNSLEtBQUssWUFBSSxXQUFXLFNBQUMsZUFBZTtxQkFLcEMsS0FBSztxQkFLTCxNQUFNOzs7Ozs7OztJQVZQLHVDQUF3RDs7Ozs7SUFLeEQscUNBQXdCOzs7OztJQUt4QixxQ0FBOEM7Ozs7O0lBRTlDLDBDQUF3Qjs7SUFFeEIsd0NBQXNCOzs7OztJQVVWLGlDQUF3Qjs7Ozs7SUFBRSx1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3Rhci1yYXRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3Rhci1yYXRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU3RhclJhdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBUaGUgcmF0aW5nIGNvbXBvbmVudCBjYW4gYmUgdXNlZCBpbiBkaXNhYmxlZCBtb2RlLFxuICAgKiBzbyB0aGF0IHRoZSBpbnRlcmF0aW9uIGlzIG5vdCBwcm92aWRlZC5cbiAgICovXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnYXR0ci5kaXNhYmxlZCcpIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSByYXRpbmcgd2lsbCBiZSB1c2VkIHRvIHJlbmRlciBzb21lIGNvbG9yZnVsIHN0YXJzIGluIHRoZSBVSS5cbiAgICovXG4gIEBJbnB1dCgpIHJhdGluZzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB0aGUgZ2l2ZW4gcmF0aW5nIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGEgc3Rhci5cbiAgICovXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBwcml2YXRlIGluaXRpYWxSYXRlID0gMDtcblxuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuMC4yXG4gICAqICBVc2UgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIGluc3RlYWRcbiAgICpcbiAgICogIFRPRE8oaXNzdWU6IzM4MDMpIGRlcHJlY2F0ZWQgc2luY2UgMS4wLjJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmKTtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgcmVuZGVyZXI/OiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRSYXRlKHRoaXMucmF0aW5nLCB0cnVlKTtcbiAgfVxuXG4gIHNldFJhdGUodmFsdWU6IG51bWJlciwgZm9yY2U/OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkIHx8IGZvcmNlKSB7XG4gICAgICAvLyBUT0RPKGlzc3VlOiMzODAzKSBkZXByZWNhdGVkIHNpbmNlIDEuMC4yXG4gICAgICBpZiAodGhpcy5yZW5kZXJlcikge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ3N0eWxlJyxcbiAgICAgICAgICBgLS1zdGFyLWZpbGw6JHt2YWx1ZSB8fCB0aGlzLmluaXRpYWxSYXRlfTtgXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICAgJy0tc3Rhci1maWxsJyxcbiAgICAgICAgICB2YWx1ZSB8fCB0aGlzLmluaXRpYWxSYXRlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2F2ZVJhdGUocmF0aW5nOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmluaXRpYWxSYXRlID0gcmF0aW5nO1xuICAgIHRoaXMuc2V0UmF0ZShyYXRpbmcpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQocmF0aW5nKTtcbiAgfVxufVxuIl19