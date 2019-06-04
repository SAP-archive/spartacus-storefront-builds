/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AddToHomeScreenService } from '../../services/add-to-home-screen.service';
import { AddToHomeScreenComponent } from '../add-to-home-screen.component';
export class AddToHomeScreenBannerComponent extends AddToHomeScreenComponent {
    /**
     * @param {?} addToHomeScreenService
     */
    constructor(addToHomeScreenService) {
        super(addToHomeScreenService);
        this.addToHomeScreenService = addToHomeScreenService;
    }
}
AddToHomeScreenBannerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-add-to-home-screen-banner',
                template: "<div *ngIf=\"(canPrompt$ | async)\">\n  <div class=\"cx-add-to-home-screen-banner\">\n    <div class=\"cx-add-to-home-screen-banner-inner\">\n      <p>\n        {{ 'pwa.addSapStorefront' | cxTranslate }}\n      </p>\n      <ul>\n        <li>{{ 'pwa.noInstallationNeeded' | cxTranslate }}</li>\n        <li>{{ 'pwa.fastAccessToApplication' | cxTranslate }}</li>\n      </ul>\n      <button (click)=\"prompt()\" class=\"btn btn-primary\">\n        {{ 'pwa.addToHomeScreen' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
AddToHomeScreenBannerComponent.ctorParameters = () => [
    { type: AddToHomeScreenService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AddToHomeScreenBannerComponent.prototype.addToHomeScreenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLWJhbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3B3YS9jb21wb25lbnRzL2FkZC10by1ob21lLXNjcmVlbi1iYW5uZXIvYWRkLXRvLWhvbWUtc2NyZWVuLWJhbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFNM0UsTUFBTSxPQUFPLDhCQUErQixTQUFRLHdCQUF3Qjs7OztJQUMxRSxZQUFzQixzQkFBOEM7UUFDbEUsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFEViwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO0lBRXBFLENBQUM7OztZQVBGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxvaUJBQXlEO2FBQzFEOzs7O1lBTlEsc0JBQXNCOzs7Ozs7O0lBUWpCLGdFQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWRkVG9Ib21lU2NyZWVuU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FkZC10by1ob21lLXNjcmVlbi5zZXJ2aWNlJztcbmltcG9ydCB7IEFkZFRvSG9tZVNjcmVlbkNvbXBvbmVudCB9IGZyb20gJy4uL2FkZC10by1ob21lLXNjcmVlbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hZGQtdG8taG9tZS1zY3JlZW4tYmFubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC10by1ob21lLXNjcmVlbi1iYW5uZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRUb0hvbWVTY3JlZW5CYW5uZXJDb21wb25lbnQgZXh0ZW5kcyBBZGRUb0hvbWVTY3JlZW5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRkVG9Ib21lU2NyZWVuU2VydmljZTogQWRkVG9Ib21lU2NyZWVuU2VydmljZSkge1xuICAgIHN1cGVyKGFkZFRvSG9tZVNjcmVlblNlcnZpY2UpO1xuICB9XG59XG4iXX0=