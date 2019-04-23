/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AddToHomeScreenService } from '../../services/add-to-home-screen.service';
import { AddToHomeScreenComponent } from './../add-to-home-screen.component';
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
                template: "<div *ngIf=\"(canPrompt$ | async)\">\n  <div class=\"cx-add-to-home-screen-banner\">\n    <div class=\"cx-add-to-home-screen-banner-inner\">\n      <p>\n        {{ 'pwa.addSapStorefront' | cxTranslate }}\n      </p>\n      <ul>\n        <li>{{ 'pwa.noInstallationNeeded' | cxTranslate }}</li>\n        <li>{{ 'pwa.fastAccessToApplication' | cxTranslate }}</li>\n      </ul>\n      <button (click)=\"prompt()\" class=\"btn btn-primary\">\n        {{ 'pwa.addToHomeScreen' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-add-to-home-screen-banner{background-color:var(--cx-background-color,var(--cx-g-color-background));padding:var(--cx-padding,20px);text-align:var(--cx-text-align,center);margin:var(--cx-margin,0 0 2.5rem)}.cx-add-to-home-screen-banner ul{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,space-around);flex-wrap:var(--cx-flex-wrap,wrap);padding:var(--cx-padding,10px 40px)}@media (max-width:767.98px){.cx-add-to-home-screen-banner{margin:var(--cx-margin,0 1.25rem 2rem)}.cx-add-to-home-screen-banner ul{flex-direction:var(--cx-flex-direction,column);margin:var(--cx-margin,0 auto 0 auto);max-width:var(--cx-max-width,280px);padding:var(--cx-padding,0 20px 20px 50px)}}.cx-add-to-home-screen-banner ul li{min-width:var(--cx-min-width,35%);text-align:var(--cx-text-align,left)}.cx-add-to-home-screen-banner-inner{max-width:var(--cx-max-width,600px);margin:var(--cx-margin,0 auto)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLWJhbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvcHdhL2NvbXBvbmVudHMvYWRkLXRvLWhvbWUtc2NyZWVuLWJhbm5lci9hZGQtdG8taG9tZS1zY3JlZW4tYmFubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQU83RSxNQUFNLE9BQU8sOEJBQStCLFNBQVEsd0JBQXdCOzs7O0lBQzFFLFlBQXNCLHNCQUE4QztRQUNsRSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQURWLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFFcEUsQ0FBQzs7O1lBUkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBRXhDLG9pQkFBeUQ7O2FBQzFEOzs7O1lBUFEsc0JBQXNCOzs7Ozs7O0lBU2pCLGdFQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWRkVG9Ib21lU2NyZWVuU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FkZC10by1ob21lLXNjcmVlbi5zZXJ2aWNlJztcbmltcG9ydCB7IEFkZFRvSG9tZVNjcmVlbkNvbXBvbmVudCB9IGZyb20gJy4vLi4vYWRkLXRvLWhvbWUtc2NyZWVuLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFkZC10by1ob21lLXNjcmVlbi1iYW5uZXInLFxuICBzdHlsZVVybHM6IFsnLi9hZGQtdG8taG9tZS1zY3JlZW4tYmFubmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtdG8taG9tZS1zY3JlZW4tYmFubmVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQWRkVG9Ib21lU2NyZWVuQmFubmVyQ29tcG9uZW50IGV4dGVuZHMgQWRkVG9Ib21lU2NyZWVuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkZFRvSG9tZVNjcmVlblNlcnZpY2U6IEFkZFRvSG9tZVNjcmVlblNlcnZpY2UpIHtcbiAgICBzdXBlcihhZGRUb0hvbWVTY3JlZW5TZXJ2aWNlKTtcbiAgfVxufVxuIl19