/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoutingService } from '@spartacus/core';
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
                    template: "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n      <div class=\"form-group\">\n        <input\n          #queryInput\n          [formControl]=\"searchBox\"\n          (keyup)=\"onKey($event)\"\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"{{ 'storeFinder.searchBox' | cxTranslate }}\"\n          required\n        />\n      </div>\n      <button\n        type=\"button\"\n        class=\"btn btn-primary btn-block cx-find-store\"\n        [routerLink]=\"['find']\"\n        [queryParams]=\"{ query: queryInput.value }\"\n      >\n        {{ 'storeFinder.findStore' | cxTranslate }}\n      </button>\n\n      <div class=\"cx-bottom-links\">\n        <button (click)=\"viewStoresWithMyLoc()\" class=\"cx-link btn-link\">\n          {{ 'storeFinder.useMyLocation' | cxTranslate }}\n        </button>\n        |\n        <a [routerLink]=\"['view-all']\" class=\"cx-link btn-link\">{{\n          'storeFinder.viewAllStores' | cxTranslate\n        }}</a>\n      </div>\n    </div>\n  </div>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1zZWFyY2gvc3RvcmUtZmluZGVyLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakQ7SUFPRSxvQ0FBb0IsT0FBdUIsRUFBVSxLQUFxQjtRQUF0RCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBRjFFLGNBQVMsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQUVrQyxDQUFDOzs7OztJQUU5RSwrQ0FBVTs7OztJQUFWLFVBQVcsT0FBZTtRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7SUFFRCx3REFBbUI7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUNiLENBQUMsTUFBTSxDQUFDLEVBQ1IsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEVBQ3ZCLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FDM0IsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsMENBQUs7Ozs7SUFBTCxVQUFNLEtBQVU7UUFDZCxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsbWtDQUFtRDtpQkFDcEQ7Ozs7Z0JBTFEsY0FBYztnQkFEZCxjQUFjOztJQTZCdkIsaUNBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXRCWSwwQkFBMEI7OztJQUNyQywrQ0FBMkM7Ozs7O0lBRS9CLDZDQUErQjs7Ozs7SUFBRSwyQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXItc2VhcmNoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlLWZpbmRlci1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlclNlYXJjaENvbXBvbmVudCB7XG4gIHNlYXJjaEJveDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge31cblxuICBmaW5kU3RvcmVzKGFkZHJlc3M6IHN0cmluZykge1xuICAgIHRoaXMucm91dGluZy5nbyhbJ2ZpbmQnXSwgeyBxdWVyeTogYWRkcmVzcyB9LCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XG4gIH1cblxuICB2aWV3U3RvcmVzV2l0aE15TG9jKCkge1xuICAgIHRoaXMucm91dGluZy5nbyhcbiAgICAgIFsnZmluZCddLFxuICAgICAgeyB1c2VNeUxvY2F0aW9uOiB0cnVlIH0sXG4gICAgICB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfVxuICAgICk7XG4gIH1cblxuICBvbktleShldmVudDogYW55KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5maW5kU3RvcmVzKHRoaXMuc2VhcmNoQm94LnZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==