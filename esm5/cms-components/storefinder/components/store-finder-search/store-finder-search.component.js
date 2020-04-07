import { __decorate } from "tslib";
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
    StoreFinderSearchComponent.prototype.findStores = function (address) {
        this.routingService.go(['store-finder/find'], { query: address });
    };
    StoreFinderSearchComponent.prototype.viewStoresWithMyLoc = function () {
        this.routingService.go(['store-finder/find'], { useMyLocation: true });
    };
    StoreFinderSearchComponent.prototype.onKey = function (event) {
        if (this.searchBox.value &&
            this.searchBox.value.length &&
            event.key === 'Enter') {
            this.findStores(this.searchBox.value);
        }
    };
    StoreFinderSearchComponent.ctorParameters = function () { return [
        { type: RoutingService }
    ]; };
    StoreFinderSearchComponent = __decorate([
        Component({
            selector: 'cx-store-finder-search',
            template: "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-7\">\n      <div class=\"form-group search-wrapper\">\n        <input\n          #queryInput\n          [formControl]=\"searchBox\"\n          (keyup)=\"onKey($event)\"\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"{{ 'storeFinder.searchBox' | cxTranslate }}\"\n        />\n        <cx-icon\n          [type]=\"iconTypes.SEARCH\"\n          aria-label=\"search\"\n          class=\"search\"\n          (keyup)=\"onKey($event)\"\n          [routerLink]=\"['/store-finder/find']\"\n          [queryParams]=\"{ query: queryInput.value }\"\n          [ngClass]=\"{\n            'disabled-action': !(queryInput.value && queryInput.value.length)\n          }\"\n        ></cx-icon>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-lg-5\">\n      <div class=\"row cx-search-links mb-3\">\n        <div class=\"col-6\">\n          <button\n            (click)=\"viewStoresWithMyLoc()\"\n            class=\"btn btn-primary btn-block\"\n          >\n            {{ 'storeFinder.useMyLocation' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-6\">\n          <button\n            [routerLink]=\"['/store-finder/view-all']\"\n            class=\"btn btn-primary btn-block\"\n          >\n            {{ 'storeFinder.viewAllStores' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
        })
    ], StoreFinderSearchComponent);
    return StoreFinderSearchComponent;
}());
export { StoreFinderSearchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1zZWFyY2gvc3RvcmUtZmluZGVyLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFNL0M7SUFJRSxvQ0FBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSGxELGNBQVMsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUMzQyxjQUFTLEdBQUcsU0FBUyxDQUFDO0lBRStCLENBQUM7SUFFdEQsK0NBQVUsR0FBVixVQUFXLE9BQWU7UUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELHdEQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsbUJBQW1CLENBQUMsRUFBRSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCwwQ0FBSyxHQUFMLFVBQU0sS0FBVTtRQUNkLElBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLO1lBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDM0IsS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQ3JCO1lBQ0EsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7Z0JBbEJtQyxjQUFjOztJQUp2QywwQkFBMEI7UUFKdEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxxOUNBQW1EO1NBQ3BELENBQUM7T0FDVywwQkFBMEIsQ0F1QnRDO0lBQUQsaUNBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXZCWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vbWlzYy9pY29uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmUtZmluZGVyLXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1maW5kZXItc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJTZWFyY2hDb21wb25lbnQge1xuICBzZWFyY2hCb3g6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSkge31cblxuICBmaW5kU3RvcmVzKGFkZHJlc3M6IHN0cmluZykge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oWydzdG9yZS1maW5kZXIvZmluZCddLCB7IHF1ZXJ5OiBhZGRyZXNzIH0pO1xuICB9XG5cbiAgdmlld1N0b3Jlc1dpdGhNeUxvYygpIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKFsnc3RvcmUtZmluZGVyL2ZpbmQnXSwgeyB1c2VNeUxvY2F0aW9uOiB0cnVlIH0pO1xuICB9XG5cbiAgb25LZXkoZXZlbnQ6IGFueSkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuc2VhcmNoQm94LnZhbHVlICYmXG4gICAgICB0aGlzLnNlYXJjaEJveC52YWx1ZS5sZW5ndGggJiZcbiAgICAgIGV2ZW50LmtleSA9PT0gJ0VudGVyJ1xuICAgICkge1xuICAgICAgdGhpcy5maW5kU3RvcmVzKHRoaXMuc2VhcmNoQm94LnZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==