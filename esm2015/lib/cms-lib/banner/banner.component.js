/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
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
                template: "<p class=\"cx-banner-headline\" *ngIf=\"(service.hasHeadline() | async)\">\n  {{ service.getHeadline() | async }}\n</p>\n<cx-generic-link\n  *ngIf=\"\n    (service.hasImage() | async) && (service.getComponentData() | async) as data\n  \"\n  [url]=\"{ url: data.urlLink } | cxTranslateUrl\"\n  [target]=\"service.getTarget() | async\"\n>\n  <img\n    [title]=\"service.getAltText() | async\"\n    [alt]=\"service.getAltText() | async\"\n    [src]=\"service.getImageAbsoluteUrl() | async\"\n    alt=\"\"\n  />\n</cx-generic-link>\n<p class=\"cx-banner-content\" *ngIf=\"(service.hasContent() | async)\">\n  {{ service.getContent() | async }}\n</p>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["img{width:var(--cx-width);margin:var(--cx-margin)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBUXBFLE1BQU0sT0FBTyxlQUFlOzs7O0lBQzFCLFlBQW1CLE9BQStCO1FBQS9CLFlBQU8sR0FBUCxPQUFPLENBQXdCO0lBQUcsQ0FBQzs7O1lBUHZELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsbXBCQUFzQztnQkFFdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O1lBUFEsc0JBQXNCOzs7O0lBU2pCLGtDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmFubmVyQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vYmFubmVyLmNvbXBvbmVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYmFubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jhbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Jhbm5lci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQmFubmVyQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IEJhbm5lckNvbXBvbmVudFNlcnZpY2UpIHt9XG59XG4iXX0=