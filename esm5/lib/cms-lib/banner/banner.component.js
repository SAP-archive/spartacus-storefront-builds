/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BannerComponentService } from './banner.component.service';
var BannerComponent = /** @class */ (function () {
    function BannerComponent(service) {
        this.service = service;
    }
    BannerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-banner',
                    template: "<p class=\"cx-banner-headline\" *ngIf=\"(service.hasHeadline() | async)\">\n  {{ service.getHeadline() | async }}\n</p>\n<cx-generic-link\n  *ngIf=\"\n    (service.hasImage() | async) && (service.getComponentData() | async) as data\n  \"\n  [url]=\"data.urlLink\"\n  [target]=\"service.getTarget() | async\"\n>\n  <img\n    [title]=\"service.getAltText() | async\"\n    [alt]=\"service.getAltText() | async\"\n    [src]=\"service.getImageAbsoluteUrl() | async\"\n    alt=\"\"\n  />\n</cx-generic-link>\n<p class=\"cx-banner-content\" *ngIf=\"(service.hasContent() | async)\">\n  {{ service.getContent() | async }}\n</p>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXBFO0lBTUUseUJBQW1CLE9BQStCO1FBQS9CLFlBQU8sR0FBUCxPQUFPLENBQXdCO0lBQUcsQ0FBQzs7Z0JBTnZELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIseW5CQUFzQztvQkFDdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQU5RLHNCQUFzQjs7SUFTL0Isc0JBQUM7Q0FBQSxBQVBELElBT0M7U0FGWSxlQUFlOzs7SUFDZCxrQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYW5uZXJDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9iYW5uZXIuY29tcG9uZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1iYW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFubmVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEJhbm5lckNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBCYW5uZXJDb21wb25lbnRTZXJ2aWNlKSB7fVxufVxuIl19