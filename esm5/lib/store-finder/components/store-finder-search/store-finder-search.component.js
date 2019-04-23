/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RoutingService } from '@spartacus/core';
import { ActivatedRoute } from '@angular/router';
var StoreFinderSearchComponent = /** @class */ (function () {
    function StoreFinderSearchComponent(routing, route) {
        this.routing = routing;
        this.route = route;
        this.searchBox = new FormControl();
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
        this.routing.go(['find'], { query: address }, { relativeTo: this.route });
    };
    /**
     * @return {?}
     */
    StoreFinderSearchComponent.prototype.viewStoresWithMyLoc = /**
     * @return {?}
     */
    function () {
        this.routing.go(['find'], { useMyLocation: true }, { relativeTo: this.route });
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
        if (event.key === 'Enter') {
            this.findStores(this.searchBox.value);
        }
    };
    StoreFinderSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-search',
                    template: "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n      <div class=\"form-group\">\n        <input\n          #queryInput\n          [formControl]=\"searchBox\"\n          (keyup)=\"onKey($event)\"\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"{{ 'storeFinder.searchBox' | cxTranslate }}\"\n          required\n        />\n      </div>\n      <button\n        type=\"button\"\n        class=\"btn btn-primary btn-block cx-find-store\"\n        [routerLink]=\"['find']\"\n        [queryParams]=\"{ query: queryInput.value }\"\n      >\n        {{ 'storeFinder.findStore' | cxTranslate }}\n      </button>\n\n      <div class=\"cx-bottom-links\">\n        <button (click)=\"viewStoresWithMyLoc()\" class=\"cx-link btn-link\">\n          {{ 'storeFinder.useMyLocation' | cxTranslate }}\n        </button>\n        |\n        <a [routerLink]=\"['view-all']\" class=\"cx-link btn-link\">{{\n          'storeFinder.viewAllStores' | cxTranslate\n        }}</a>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/:host{display:var(--cx-display,block);margin:var(--cx-margin,0 0 3rem)}.cx-find-store{margin:var(--cx-margin,0 0 1rem)}.cx-bottom-links{text-align:var(--cx-text-align,center)}.cx-link{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222);border:var(--cx-border,0);padding:var(--cx-padding,0)}"]
                }] }
    ];
    /** @nocollapse */
    StoreFinderSearchComponent.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ActivatedRoute }
    ]; };
    return StoreFinderSearchComponent;
}());
export { StoreFinderSearchComponent };
if (false) {
    /** @type {?} */
    StoreFinderSearchComponent.prototype.searchBox;
    /**
     * @type {?}
     * @private
     */
    StoreFinderSearchComponent.prototype.routing;
    /**
     * @type {?}
     * @private
     */
    StoreFinderSearchComponent.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvc3RvcmUtZmluZGVyL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXNlYXJjaC9zdG9yZS1maW5kZXItc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRDtJQVFFLG9DQUFvQixPQUF1QixFQUFVLEtBQXFCO1FBQXRELFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFGMUUsY0FBUyxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO0lBRWtDLENBQUM7Ozs7O0lBRTlFLCtDQUFVOzs7O0lBQVYsVUFBVyxPQUFlO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7OztJQUVELHdEQUFtQjs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ2IsQ0FBQyxNQUFNLENBQUMsRUFDUixFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsRUFDdkIsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUMzQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCwwQ0FBSzs7OztJQUFMLFVBQU0sS0FBVTtRQUNkLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7Z0JBMUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxta0NBQW1EOztpQkFFcEQ7Ozs7Z0JBUFEsY0FBYztnQkFDZCxjQUFjOztJQTZCdkIsaUNBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQXRCWSwwQkFBMEI7OztJQUNyQywrQ0FBMkM7Ozs7O0lBRS9CLDZDQUErQjs7Ozs7SUFBRSwyQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXItc2VhcmNoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlLWZpbmRlci1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdG9yZS1maW5kZXItc2VhcmNoLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyU2VhcmNoQ29tcG9uZW50IHtcbiAgc2VhcmNoQm94OiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGluZzogUm91dGluZ1NlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7fVxuXG4gIGZpbmRTdG9yZXMoYWRkcmVzczogc3RyaW5nKSB7XG4gICAgdGhpcy5yb3V0aW5nLmdvKFsnZmluZCddLCB7IHF1ZXJ5OiBhZGRyZXNzIH0sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcbiAgfVxuXG4gIHZpZXdTdG9yZXNXaXRoTXlMb2MoKSB7XG4gICAgdGhpcy5yb3V0aW5nLmdvKFxuICAgICAgWydmaW5kJ10sXG4gICAgICB7IHVzZU15TG9jYXRpb246IHRydWUgfSxcbiAgICAgIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9XG4gICAgKTtcbiAgfVxuXG4gIG9uS2V5KGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICB0aGlzLmZpbmRTdG9yZXModGhpcy5zZWFyY2hCb3gudmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIl19