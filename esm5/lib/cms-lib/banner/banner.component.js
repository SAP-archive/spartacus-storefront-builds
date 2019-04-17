/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BannerComponentService } from './banner.component.service';
var BannerComponent = /** @class */ (function () {
    function BannerComponent(service) {
        this.service = service;
    }
    BannerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-banner',
                    template: "<p class=\"cx-banner-headline\" *ngIf=\"(service.hasHeadline() | async)\">\n  {{ service.getHeadline() | async }}\n</p>\n<cx-generic-link\n  *ngIf=\"\n    (service.hasImage() | async) && (service.getComponentData() | async) as data\n  \"\n  [url]=\"{ url: data.urlLink } | cxTranslateUrl\"\n  [target]=\"service.getTarget() | async\"\n>\n  <img\n    [title]=\"service.getAltText() | async\"\n    [alt]=\"service.getAltText() | async\"\n    [src]=\"service.getImageAbsoluteUrl() | async\"\n    alt=\"\"\n  />\n</cx-generic-link>\n<p class=\"cx-banner-content\" *ngIf=\"(service.hasContent() | async)\">\n  {{ service.getContent() | async }}\n</p>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["img{width:var(--cx-width);margin:var(--cx-margin)}"]
                }] }
    ];
    /** @nocollapse */
    BannerComponent.ctorParameters = function () { return [
        { type: BannerComponentService }
    ]; };
    return BannerComponent;
}());
export { BannerComponent };
if (false) {
    /** @type {?} */
    BannerComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXBFO0lBT0UseUJBQW1CLE9BQStCO1FBQS9CLFlBQU8sR0FBUCxPQUFPLENBQXdCO0lBQUcsQ0FBQzs7Z0JBUHZELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsbXBCQUFzQztvQkFFdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFQUSxzQkFBc0I7O0lBVS9CLHNCQUFDO0NBQUEsQUFSRCxJQVFDO1NBRlksZUFBZTs7O0lBQ2Qsa0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCYW5uZXJDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9iYW5uZXIuY29tcG9uZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1iYW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFubmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFubmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBCYW5uZXJDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogQmFubmVyQ29tcG9uZW50U2VydmljZSkge31cbn1cbiJdfQ==