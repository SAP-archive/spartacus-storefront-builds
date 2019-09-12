/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2, } from '@angular/core';
import { ICON_TYPE } from '../../../cms-components/misc/index';
var StarRatingComponent = /** @class */ (function () {
    function StarRatingComponent(el, renderer) {
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
            // TODO(issue:#3803) deprecated since 1.0.2
            if (this.renderer) {
                this.renderer.setAttribute(this.el.nativeElement, 'style', "--star-fill:" + (value || this.initialRate) + ";");
            }
            else {
                this.el.nativeElement.style.setProperty('--star-fill', value || this.initialRate);
            }
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
        { type: ElementRef },
        { type: Renderer2 }
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
     * @protected
     */
    StarRatingComponent.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    StarRatingComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci1yYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFL0Q7SUFrQ0UsNkJBQXNCLEVBQWMsRUFBWSxRQUFvQjtRQUE5QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVksYUFBUSxHQUFSLFFBQVEsQ0FBWTs7Ozs7UUF4QjdCLGFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7UUFVOUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFdEMsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFFeEIsY0FBUyxHQUFHLFNBQVMsQ0FBQztJQVVpRCxDQUFDOzs7O0lBRXhFLHNDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUFFRCxxQ0FBTzs7Ozs7SUFBUCxVQUFRLEtBQWEsRUFBRSxLQUFlO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssRUFBRTtZQUMzQiwyQ0FBMkM7WUFDM0MsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ3JCLE9BQU8sRUFDUCxrQkFBZSxLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsT0FBRyxDQUM1QyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDckMsYUFBYSxFQUNiLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxDQUMxQixDQUFDO2FBQ0g7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsc0NBQVE7Ozs7SUFBUixVQUFTLE1BQWM7UUFDckIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Z0JBakVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQiwrTUFBMkM7b0JBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFkQyxVQUFVO2dCQU1WLFNBQVM7OzsyQkFjUixLQUFLLFlBQUksV0FBVyxTQUFDLGVBQWU7eUJBS3BDLEtBQUs7eUJBS0wsTUFBTTs7SUE4Q1QsMEJBQUM7Q0FBQSxBQWxFRCxJQWtFQztTQTdEWSxtQkFBbUI7Ozs7Ozs7SUFLOUIsdUNBQXdEOzs7OztJQUt4RCxxQ0FBd0I7Ozs7O0lBS3hCLHFDQUE4Qzs7Ozs7SUFFOUMsMENBQXdCOztJQUV4Qix3Q0FBc0I7Ozs7O0lBVVYsaUNBQXdCOzs7OztJQUFFLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdGFyLXJhdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGFyLXJhdGluZy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTdGFyUmF0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIFRoZSByYXRpbmcgY29tcG9uZW50IGNhbiBiZSB1c2VkIGluIGRpc2FibGVkIG1vZGUsXG4gICAqIHNvIHRoYXQgdGhlIGludGVyYXRpb24gaXMgbm90IHByb3ZpZGVkLlxuICAgKi9cbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdhdHRyLmRpc2FibGVkJykgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIHJhdGluZyB3aWxsIGJlIHVzZWQgdG8gcmVuZGVyIHNvbWUgY29sb3JmdWwgc3RhcnMgaW4gdGhlIFVJLlxuICAgKi9cbiAgQElucHV0KCkgcmF0aW5nOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHRoZSBnaXZlbiByYXRpbmcgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gYSBzdGFyLlxuICAgKi9cbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIHByaXZhdGUgaW5pdGlhbFJhdGUgPSAwO1xuXG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMik7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4wLjJcbiAgICogIFVzZSBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikgaW5zdGVhZFxuICAgKlxuICAgKiAgVE9ETyhpc3N1ZTojMzgwMykgZGVwcmVjYXRlZCBzaW5jZSAxLjAuMlxuICAgKi9cbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpO1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCByZW5kZXJlcj86IFJlbmRlcmVyMikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFJhdGUodGhpcy5yYXRpbmcsIHRydWUpO1xuICB9XG5cbiAgc2V0UmF0ZSh2YWx1ZTogbnVtYmVyLCBmb3JjZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgfHwgZm9yY2UpIHtcbiAgICAgIC8vIFRPRE8oaXNzdWU6IzM4MDMpIGRlcHJlY2F0ZWQgc2luY2UgMS4wLjJcbiAgICAgIGlmICh0aGlzLnJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKFxuICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAnc3R5bGUnLFxuICAgICAgICAgIGAtLXN0YXItZmlsbDoke3ZhbHVlIHx8IHRoaXMuaW5pdGlhbFJhdGV9O2BcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAnLS1zdGFyLWZpbGwnLFxuICAgICAgICAgIHZhbHVlIHx8IHRoaXMuaW5pdGlhbFJhdGVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzYXZlUmF0ZShyYXRpbmc6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW5pdGlhbFJhdGUgPSByYXRpbmc7XG4gICAgdGhpcy5zZXRSYXRlKHJhdGluZyk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChyYXRpbmcpO1xuICB9XG59XG4iXX0=