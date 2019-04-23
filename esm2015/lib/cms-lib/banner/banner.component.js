/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BannerComponentService } from './banner.component.service';
export class BannerComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
    }
}
BannerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-banner',
                template: "<p class=\"cx-banner-headline\" *ngIf=\"(service.hasHeadline() | async)\">\n  {{ service.getHeadline() | async }}\n</p>\n<cx-generic-link\n  *ngIf=\"\n    (service.hasImage() | async) && (service.getComponentData() | async) as data\n  \"\n  [url]=\"data.urlLink\"\n  [target]=\"service.getTarget() | async\"\n>\n  <img\n    [title]=\"service.getAltText() | async\"\n    [alt]=\"service.getAltText() | async\"\n    [src]=\"service.getImageAbsoluteUrl() | async\"\n    alt=\"\"\n  />\n</cx-generic-link>\n<p class=\"cx-banner-content\" *ngIf=\"(service.hasContent() | async)\">\n  {{ service.getContent() | async }}\n</p>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
BannerComponent.ctorParameters = () => [
    { type: BannerComponentService }
];
if (false) {
    /** @type {?} */
    BannerComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBT3BFLE1BQU0sT0FBTyxlQUFlOzs7O0lBQzFCLFlBQW1CLE9BQStCO1FBQS9CLFlBQU8sR0FBUCxPQUFPLENBQXdCO0lBQUcsQ0FBQzs7O1lBTnZELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIseW5CQUFzQztnQkFDdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFOUSxzQkFBc0I7Ozs7SUFRakIsa0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFubmVyQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vYmFubmVyLmNvbXBvbmVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYmFubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jhbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBCYW5uZXJDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogQmFubmVyQ29tcG9uZW50U2VydmljZSkge31cbn1cbiJdfQ==