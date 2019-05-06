/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoutingService } from '@spartacus/core';
export class StoreFinderSearchComponent {
    /**
     * @param {?} routing
     * @param {?} route
     */
    constructor(routing, route) {
        this.routing = routing;
        this.route = route;
        this.searchBox = new FormControl();
    }
    /**
     * @param {?} address
     * @return {?}
     */
    findStores(address) {
        this.routing.go(['find'], { query: address }, { relativeTo: this.route });
    }
    /**
     * @return {?}
     */
    viewStoresWithMyLoc() {
        this.routing.go(['find'], { useMyLocation: true }, { relativeTo: this.route });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKey(event) {
        if (event.key === 'Enter') {
            this.findStores(this.searchBox.value);
        }
    }
}
StoreFinderSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-search',
                template: "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n      <div class=\"form-group\">\n        <input\n          #queryInput\n          [formControl]=\"searchBox\"\n          (keyup)=\"onKey($event)\"\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"{{ 'storeFinder.searchBox' | cxTranslate }}\"\n          required\n        />\n      </div>\n      <button\n        type=\"button\"\n        class=\"btn btn-primary btn-block cx-find-store\"\n        [routerLink]=\"['find']\"\n        [queryParams]=\"{ query: queryInput.value }\"\n      >\n        {{ 'storeFinder.findStore' | cxTranslate }}\n      </button>\n\n      <div class=\"cx-bottom-links\">\n        <button (click)=\"viewStoresWithMyLoc()\" class=\"cx-link btn-link\">\n          {{ 'storeFinder.useMyLocation' | cxTranslate }}\n        </button>\n        |\n        <a [routerLink]=\"['view-all']\" class=\"cx-link btn-link\">{{\n          'storeFinder.viewAllStores' | cxTranslate\n        }}</a>\n      </div>\n    </div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
StoreFinderSearchComponent.ctorParameters = () => [
    { type: RoutingService },
    { type: ActivatedRoute }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1zZWFyY2gvc3RvcmUtZmluZGVyLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFNakQsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFHckMsWUFBb0IsT0FBdUIsRUFBVSxLQUFxQjtRQUF0RCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBRjFFLGNBQVMsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQUVrQyxDQUFDOzs7OztJQUU5RSxVQUFVLENBQUMsT0FBZTtRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ2IsQ0FBQyxNQUFNLENBQUMsRUFDUixFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsRUFDdkIsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUMzQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsS0FBVTtRQUNkLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxta0NBQW1EO2FBQ3BEOzs7O1lBTFEsY0FBYztZQURkLGNBQWM7Ozs7SUFRckIsK0NBQTJDOzs7OztJQUUvQiw2Q0FBK0I7Ozs7O0lBQUUsMkNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmUtZmluZGVyLXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1maW5kZXItc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJTZWFyY2hDb21wb25lbnQge1xuICBzZWFyY2hCb3g6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0aW5nOiBSb3V0aW5nU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHt9XG5cbiAgZmluZFN0b3JlcyhhZGRyZXNzOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJvdXRpbmcuZ28oWydmaW5kJ10sIHsgcXVlcnk6IGFkZHJlc3MgfSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xuICB9XG5cbiAgdmlld1N0b3Jlc1dpdGhNeUxvYygpIHtcbiAgICB0aGlzLnJvdXRpbmcuZ28oXG4gICAgICBbJ2ZpbmQnXSxcbiAgICAgIHsgdXNlTXlMb2NhdGlvbjogdHJ1ZSB9LFxuICAgICAgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH1cbiAgICApO1xuICB9XG5cbiAgb25LZXkoZXZlbnQ6IGFueSkge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMuZmluZFN0b3Jlcyh0aGlzLnNlYXJjaEJveC52YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=