/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractStoreItemComponent } from '../abstract-store-item/abstract-store-item.component';
import { StoreDataService, StoreFinderService } from '@spartacus/core';
var StoreFinderStoreDescriptionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StoreFinderStoreDescriptionComponent, _super);
    function StoreFinderStoreDescriptionComponent(storeDataService, storeFinderService, route) {
        var _this = _super.call(this, storeDataService) || this;
        _this.storeDataService = storeDataService;
        _this.storeFinderService = storeFinderService;
        _this.route = route;
        return _this;
    }
    /**
     * @return {?}
     */
    StoreFinderStoreDescriptionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.requestStoresData();
        this.location$ = this.storeFinderService.getFindStoresEntities();
        this.isLoading$ = this.storeFinderService.getStoresLoading();
    };
    /**
     * @return {?}
     */
    StoreFinderStoreDescriptionComponent.prototype.requestStoresData = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var storeId = this.route.snapshot.params.store;
        this.storeFinderService.viewStoreById(storeId);
    };
    StoreFinderStoreDescriptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-store-description',
                    template: "<div\n  class=\"container\"\n  *ngIf=\"!(isLoading$ | async) && (location$ | async) as location; else loading\"\n>\n  <div class=\"row\">\n    <article class=\"cx-store col-lg-4\">\n      <h2>{{ location.displayName }}</h2>\n\n      <p *ngIf=\"location.address\" class=\"storeAddress\">\n        {{ location.address.line1 }} <br />\n        {{ location.address.town + ',' }}\n        {{ location.address.region ? location.address.region.name + ',' : '' }}\n        {{ location.address.postalCode }}\n      </p>\n\n      <section class=\"cx-contact\">\n        <ul class=\"cx-list\">\n          <li class=\"cx-item\">\n            <a\n              class=\"cx-link\"\n              [href]=\"getDirections(location)\"\n              target=\"_blank\"\n              >{{ 'storeFinder.label.getDirections' | cxTranslate }}</a\n            >\n          </li>\n          <li class=\"cx-item\">\n            {{ 'storeFinder.label.call' | cxTranslate }}\n            {{ location.address?.phone }}\n          </li>\n          <li class=\"cx-item\">\n            <a class=\"cx-link\" [routerLink]=\"['/contact']\">{{\n              'storeFinder.action.contactUs' | cxTranslate\n            }}</a>\n          </li>\n        </ul>\n      </section>\n      <div class=\"cx-schedule\">\n        <cx-schedule [location]=\"location\">\n          <h3>{{ 'storeFinder.label.storeHours' | cxTranslate }}</h3>\n        </cx-schedule>\n      </div>\n    </article>\n    <article class=\"cx-storeMap col-lg-8\">\n      <cx-store-finder-map [locations]=\"[location]\"></cx-store-finder-map>\n    </article>\n  </div>\n\n  <div class=\"row cx-feature\">\n    <div class=\"col-lg-12\">\n      <h3 class=\"cx-features-header\">\n        {{ 'storeFinder.label.storeFeatures' | cxTranslate }}\n      </h3>\n    </div>\n  </div>\n\n  <article class=\"row\">\n    <div class=\"col-lg-3\" *ngFor=\"let feature of location.features?.entry\">\n      <div class=\"cx-features\">{{ feature.value }}</div>\n    </div>\n  </article>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n",
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-store{text-align:var(--cx-text-align,left)}.cx-contact{margin-bottom:var(--cx-margin,1rem);font-weight:var(--cx-g-font-weight-bold,700);-webkit-text-decoration:var(--cx-text-dectoration,underline);text-decoration:var(--cx-text-dectoration,underline)}.cx-list{padding:var(--cx-padding,0);list-style:var(--cx-list-style,none)}.cx-link{color:var(--cx-color,var(--cx-g-color-text))}.cx-item{margin-bottom:var(--cx-margin,.5rem)}.cx-schedule{margin-top:var(--cx-margin,1.5rem);font-weight:var(--cx-g-font-weight-bold,700)}.cx-feature{margin-top:var(--cx-margin,30px);margin-bottom:var(--cx-margin,20px)}.cx-features-header{text-align:var(--cx-text-align,left)}.cx-features{border-width:var(--cx-border-width,1px);border-style:var(--cx-border-style,solid)}@media (max-width:991.98px){.cx-features{margin:var(--cx-margin,5px 0)}}"]
                }] }
    ];
    /** @nocollapse */
    StoreFinderStoreDescriptionComponent.ctorParameters = function () { return [
        { type: StoreDataService },
        { type: StoreFinderService },
        { type: ActivatedRoute }
    ]; };
    return StoreFinderStoreDescriptionComponent;
}(AbstractStoreItemComponent));
export { StoreFinderStoreDescriptionComponent };
if (false) {
    /** @type {?} */
    StoreFinderStoreDescriptionComponent.prototype.location$;
    /** @type {?} */
    StoreFinderStoreDescriptionComponent.prototype.isLoading$;
    /**
     * @type {?}
     * @protected
     */
    StoreFinderStoreDescriptionComponent.prototype.storeDataService;
    /**
     * @type {?}
     * @protected
     */
    StoreFinderStoreDescriptionComponent.prototype.storeFinderService;
    /**
     * @type {?}
     * @private
     */
    StoreFinderStoreDescriptionComponent.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXN0b3JlLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9zdG9yZS1maW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItc3RvcmUtZGVzY3JpcHRpb24vc3RvcmUtZmluZGVyLXN0b3JlLWRlc2NyaXB0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR2pELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXZFO0lBTVUsZ0VBQTBCO0lBS2xDLDhDQUNZLGdCQUFrQyxFQUNsQyxrQkFBc0MsRUFDeEMsS0FBcUI7UUFIL0IsWUFLRSxrQkFBTSxnQkFBZ0IsQ0FBQyxTQUN4QjtRQUxXLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN4QyxXQUFLLEdBQUwsS0FBSyxDQUFnQjs7SUFHL0IsQ0FBQzs7OztJQUVELHVEQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDakUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMvRCxDQUFDOzs7O0lBRUQsZ0VBQWlCOzs7SUFBakI7O1lBQ1EsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQ2hELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUNBQW1DO29CQUM3Qyxza0VBQThEOztpQkFFL0Q7Ozs7Z0JBTlEsZ0JBQWdCO2dCQUFFLGtCQUFrQjtnQkFKcEMsY0FBYzs7SUFtQ3ZCLDJDQUFDO0NBQUEsQUE3QkQsQ0FNVSwwQkFBMEIsR0F1Qm5DO1NBeEJZLG9DQUFvQzs7O0lBRy9DLHlEQUEyQjs7SUFDM0IsMERBQTRCOzs7OztJQUcxQixnRUFBNEM7Ozs7O0lBQzVDLGtFQUFnRDs7Ozs7SUFDaEQscURBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWJzdHJhY3RTdG9yZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC1zdG9yZS1pdGVtL2Fic3RyYWN0LXN0b3JlLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRGF0YVNlcnZpY2UsIFN0b3JlRmluZGVyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b3JlLWZpbmRlci1zdG9yZS1kZXNjcmlwdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1maW5kZXItc3RvcmUtZGVzY3JpcHRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdG9yZS1maW5kZXItc3RvcmUtZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJTdG9yZURlc2NyaXB0aW9uQ29tcG9uZW50XG4gIGV4dGVuZHMgQWJzdHJhY3RTdG9yZUl0ZW1Db21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQge1xuICBsb2NhdGlvbiQ6IE9ic2VydmFibGU8YW55PjtcbiAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZURhdGFTZXJ2aWNlOiBTdG9yZURhdGFTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzdG9yZUZpbmRlclNlcnZpY2U6IFN0b3JlRmluZGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHtcbiAgICBzdXBlcihzdG9yZURhdGFTZXJ2aWNlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVxdWVzdFN0b3Jlc0RhdGEoKTtcbiAgICB0aGlzLmxvY2F0aW9uJCA9IHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmdldEZpbmRTdG9yZXNFbnRpdGllcygpO1xuICAgIHRoaXMuaXNMb2FkaW5nJCA9IHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmdldFN0b3Jlc0xvYWRpbmcoKTtcbiAgfVxuXG4gIHJlcXVlc3RTdG9yZXNEYXRhKCkge1xuICAgIGNvbnN0IHN0b3JlSWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5zdG9yZTtcbiAgICB0aGlzLnN0b3JlRmluZGVyU2VydmljZS52aWV3U3RvcmVCeUlkKHN0b3JlSWQpO1xuICB9XG59XG4iXX0=