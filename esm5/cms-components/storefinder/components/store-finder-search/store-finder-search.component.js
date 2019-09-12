/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RoutingService } from '@spartacus/core';
import { ICON_TYPE } from '../../../misc/icon';
var StoreFinderSearchComponent = /** @class */ (function () {
    function StoreFinderSearchComponent(routingService) {
        this.routingService = routingService;
        this.searchBox = new FormControl();
        this.iconTypes = ICON_TYPE;
    }
    /**
     * @param {?} address
     * @return {?}
     */
    StoreFinderSearchComponent.prototype.findStores = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        this.routingService.go(['store-finder/find'], { query: address });
    };
    /**
     * @return {?}
     */
    StoreFinderSearchComponent.prototype.viewStoresWithMyLoc = /**
     * @return {?}
     */
    function () {
        this.routingService.go(['store-finder/find'], { useMyLocation: true });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StoreFinderSearchComponent.prototype.onKey = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.searchBox.value &&
            this.searchBox.value.length &&
            event.key === 'Enter') {
            this.findStores(this.searchBox.value);
        }
    };
    StoreFinderSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-search',
                    template: "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-7\">\n      <div class=\"form-group search-wrapper\">\n        <input\n          #queryInput\n          [formControl]=\"searchBox\"\n          (keyup)=\"onKey($event)\"\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"{{ 'storeFinder.searchBox' | cxTranslate }}\"\n          required\n        />\n        <cx-icon\n          [type]=\"iconTypes.SEARCH\"\n          aria-label=\"search\"\n          class=\"search\"\n          [routerLink]=\"['/store-finder/find']\"\n          [queryParams]=\"{ query: queryInput.value }\"\n          [ngClass]=\"{\n            'disabled-action': !(queryInput.value && queryInput.value.length)\n          }\"\n        ></cx-icon>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-lg-5\">\n      <div class=\"row cx-search-links mb-3\">\n        <div class=\"col-6\">\n          <button\n            (click)=\"viewStoresWithMyLoc()\"\n            class=\"btn btn-primary btn-block\"\n          >\n            {{ 'storeFinder.useMyLocation' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-6\">\n          <button\n            [routerLink]=\"['/store-finder/view-all']\"\n            class=\"btn btn-primary btn-block\"\n          >\n            {{ 'storeFinder.viewAllStores' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    StoreFinderSearchComponent.ctorParameters = function () { return [
        { type: RoutingService }
    ]; };
    return StoreFinderSearchComponent;
}());
export { StoreFinderSearchComponent };
if (false) {
    /** @type {?} */
    StoreFinderSearchComponent.prototype.searchBox;
    /** @type {?} */
    StoreFinderSearchComponent.prototype.iconTypes;
    /**
     * @type {?}
     * @private
     */
    StoreFinderSearchComponent.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1zZWFyY2gvc3RvcmUtZmluZGVyLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0M7SUFRRSxvQ0FBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSGxELGNBQVMsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUMzQyxjQUFTLEdBQUcsU0FBUyxDQUFDO0lBRStCLENBQUM7Ozs7O0lBRXRELCtDQUFVOzs7O0lBQVYsVUFBVyxPQUFlO1FBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsbUJBQW1CLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFFRCx3REFBbUI7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsbUJBQW1CLENBQUMsRUFBRSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7O0lBRUQsMENBQUs7Ozs7SUFBTCxVQUFNLEtBQVU7UUFDZCxJQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSztZQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQzNCLEtBQUssQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUNyQjtZQUNBLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7O2dCQTFCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsbzhDQUFtRDtpQkFDcEQ7Ozs7Z0JBTlEsY0FBYzs7SUE4QnZCLGlDQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0F2QlksMEJBQTBCOzs7SUFDckMsK0NBQTJDOztJQUMzQywrQ0FBc0I7Ozs7O0lBRVYsb0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL21pc2MvaWNvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b3JlLWZpbmRlci1zZWFyY2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmUtZmluZGVyLXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyU2VhcmNoQ29tcG9uZW50IHtcbiAgc2VhcmNoQm94OiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UpIHt9XG5cbiAgZmluZFN0b3JlcyhhZGRyZXNzOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKFsnc3RvcmUtZmluZGVyL2ZpbmQnXSwgeyBxdWVyeTogYWRkcmVzcyB9KTtcbiAgfVxuXG4gIHZpZXdTdG9yZXNXaXRoTXlMb2MoKSB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyhbJ3N0b3JlLWZpbmRlci9maW5kJ10sIHsgdXNlTXlMb2NhdGlvbjogdHJ1ZSB9KTtcbiAgfVxuXG4gIG9uS2V5KGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnNlYXJjaEJveC52YWx1ZSAmJlxuICAgICAgdGhpcy5zZWFyY2hCb3gudmFsdWUubGVuZ3RoICYmXG4gICAgICBldmVudC5rZXkgPT09ICdFbnRlcidcbiAgICApIHtcbiAgICAgIHRoaXMuZmluZFN0b3Jlcyh0aGlzLnNlYXJjaEJveC52YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=