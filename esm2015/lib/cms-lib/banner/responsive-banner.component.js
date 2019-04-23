/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BannerComponent } from './banner.component';
export class ResponsiveBannerComponent extends BannerComponent {
    /**
     * @return {?}
     */
    getClass() {
        /** @type {?} */
        const RESPONSIVE_BANNER_CLASS = 'responsive-banner';
        return `${RESPONSIVE_BANNER_CLASS} ${this.service.getComponentUID()}`;
    }
}
ResponsiveBannerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-responsive-banner',
                template: "<cx-generic-link\n  fxFlex\n  class=\"link\"\n  *ngIf=\"service.hasImage() && (service.getComponentData() | async) as data\"\n  [url]=\"data.urlLink\"\n  [target]=\"service.getTarget() | async\"\n>\n  <picture [class]=\"getClass()\">\n    <img\n      [src]=\"service.getResponsiveImageAbsoluteUrl() | async\"\n      [srcset]=\"service.getResponsiveSrcSet() | async\"\n      sizes=\"100%\"\n      alt=\"\"\n    />\n  </picture>\n</cx-generic-link>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS1iYW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2Ntcy1saWIvYmFubmVyL3Jlc3BvbnNpdmUtYmFubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPckQsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGVBQWU7Ozs7SUFDNUQsUUFBUTs7Y0FDQSx1QkFBdUIsR0FBRyxtQkFBbUI7UUFDbkQsT0FBTyxHQUFHLHVCQUF1QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQztJQUN4RSxDQUFDOzs7WUFURixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsNGNBQWlEO2dCQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhbm5lckNvbXBvbmVudCB9IGZyb20gJy4vYmFubmVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXJlc3BvbnNpdmUtYmFubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc3BvbnNpdmUtYmFubmVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFJlc3BvbnNpdmVCYW5uZXJDb21wb25lbnQgZXh0ZW5kcyBCYW5uZXJDb21wb25lbnQge1xuICBnZXRDbGFzcygpOiBzdHJpbmcge1xuICAgIGNvbnN0IFJFU1BPTlNJVkVfQkFOTkVSX0NMQVNTID0gJ3Jlc3BvbnNpdmUtYmFubmVyJztcbiAgICByZXR1cm4gYCR7UkVTUE9OU0lWRV9CQU5ORVJfQ0xBU1N9ICR7dGhpcy5zZXJ2aWNlLmdldENvbXBvbmVudFVJRCgpfWA7XG4gIH1cbn1cbiJdfQ==