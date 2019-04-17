/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BannerComponent } from './banner.component';
var ResponsiveBannerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ResponsiveBannerComponent, _super);
    function ResponsiveBannerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    ResponsiveBannerComponent.prototype.getClass = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var RESPONSIVE_BANNER_CLASS = 'responsive-banner';
        return RESPONSIVE_BANNER_CLASS + " " + this.service.getComponentUID();
    };
    ResponsiveBannerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-responsive-banner',
                    template: "<cx-generic-link\n  fxFlex\n  class=\"link\"\n  *ngIf=\"service.hasImage() && (service.getComponentData() | async) as data\"\n  [url]=\"{ url: data.urlLink } | cxTranslateUrl\"\n  [target]=\"service.getTarget() | async\"\n>\n  <picture [class]=\"getClass()\">\n    <img\n      [src]=\"service.getResponsiveImageAbsoluteUrl() | async\"\n      [srcset]=\"service.getResponsiveSrcSet() | async\"\n      sizes=\"100%\"\n      alt=\"\"\n    />\n  </picture>\n</cx-generic-link>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".link{flex:1 1 0%;box-sizing:border-box}.link picture.responsive-banner img{width:100%;display:block}"]
                }] }
    ];
    return ResponsiveBannerComponent;
}(BannerComponent));
export { ResponsiveBannerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS1iYW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2Ntcy1saWIvYmFubmVyL3Jlc3BvbnNpdmUtYmFubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJEO0lBTStDLHFEQUFlO0lBTjlEOztJQVdBLENBQUM7Ozs7SUFKQyw0Q0FBUTs7O0lBQVI7O1lBQ1EsdUJBQXVCLEdBQUcsbUJBQW1CO1FBQ25ELE9BQVUsdUJBQXVCLFNBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUksQ0FBQztJQUN4RSxDQUFDOztnQkFWRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsc2VBQWlEO29CQUVqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOztJQU1ELGdDQUFDO0NBQUEsQUFYRCxDQU0rQyxlQUFlLEdBSzdEO1NBTFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCYW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2Jhbm5lci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1yZXNwb25zaXZlLWJhbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXNwb25zaXZlLWJhbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jlc3BvbnNpdmUtYmFubmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBSZXNwb25zaXZlQmFubmVyQ29tcG9uZW50IGV4dGVuZHMgQmFubmVyQ29tcG9uZW50IHtcbiAgZ2V0Q2xhc3MoKTogc3RyaW5nIHtcbiAgICBjb25zdCBSRVNQT05TSVZFX0JBTk5FUl9DTEFTUyA9ICdyZXNwb25zaXZlLWJhbm5lcic7XG4gICAgcmV0dXJuIGAke1JFU1BPTlNJVkVfQkFOTkVSX0NMQVNTfSAke3RoaXMuc2VydmljZS5nZXRDb21wb25lbnRVSUQoKX1gO1xuICB9XG59XG4iXX0=