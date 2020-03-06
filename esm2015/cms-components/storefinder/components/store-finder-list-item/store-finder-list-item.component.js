import { __decorate } from "tslib";
import { ActivatedRoute } from '@angular/router';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StoreDataService, RoutingService } from '@spartacus/core';
import { AbstractStoreItemComponent } from '../abstract-store-item/abstract-store-item.component';
let StoreFinderListItemComponent = class StoreFinderListItemComponent extends AbstractStoreItemComponent {
    constructor(storeDataService, route, routingService) {
        super(storeDataService);
        this.storeDataService = storeDataService;
        this.route = route;
        this.routingService = routingService;
        this.locationIndex = null;
        this.storeItemClick = new EventEmitter();
    }
    handleStoreItemClick() {
        if (this.locationIndex !== null) {
            this.storeItemClick.emit(this.locationIndex);
        }
    }
    viewStore(location) {
        this.routingService.go([this.prepareRouteUrl(location)]);
    }
    prepareRouteUrl(location) {
        const countryParam = this.route.snapshot.params.country
            ? `country/${this.route.snapshot.params.country}/`
            : '';
        const regionParam = this.route.snapshot.params.region
            ? `region/${this.route.snapshot.params.region}/`
            : '';
        return `store-finder/${countryParam}${regionParam}${location.name}`;
    }
    onKey(event) {
        if (event.key === 'Enter') {
            this.handleStoreItemClick();
        }
    }
};
StoreFinderListItemComponent.ctorParameters = () => [
    { type: StoreDataService },
    { type: ActivatedRoute },
    { type: RoutingService }
];
__decorate([
    Input()
], StoreFinderListItemComponent.prototype, "locationIndex", void 0);
__decorate([
    Input()
], StoreFinderListItemComponent.prototype, "listOrderLabel", void 0);
__decorate([
    Input()
], StoreFinderListItemComponent.prototype, "displayDistance", void 0);
__decorate([
    Input()
], StoreFinderListItemComponent.prototype, "useClickEvent", void 0);
__decorate([
    Output()
], StoreFinderListItemComponent.prototype, "storeItemClick", void 0);
StoreFinderListItemComponent = __decorate([
    Component({
        selector: 'cx-store-finder-list-item',
        template: "<ng-container>\n  <div>\n    <div class=\"cx-store-list-order\">\n      {{ listOrderLabel }}\n    </div>\n    <div class=\"cx-store-name\">\n      <button\n        *ngIf=\"useClickEvent\"\n        (click)=\"handleStoreItemClick()\"\n        (keyup)=\"onKey($event)\"\n      >\n        {{ location.displayName || location.name }}\n      </button>\n      <a *ngIf=\"!useClickEvent\" [href]=\"prepareRouteUrl(location)\">{{\n        location.displayName || location.name\n      }}</a>\n    </div>\n    <div class=\"cx-store-address\" *ngIf=\"location.address\">\n      <div class=\"cx-store-address-street\">\n        {{ location.address.line1 }} {{ location.address.line2 }}\n      </div>\n      {{\n        getFormattedStoreAddress([\n          location.address.town,\n          location.address.postalCode,\n          location.address.country.isocode\n        ])\n      }}\n      <div\n        class=\"cx-store-distance\"\n        *ngIf=\"location.formattedDistance && displayDistance\"\n      >\n        {{ location.formattedDistance }}\n      </div>\n    </div>\n    <a\n      href=\"{{ getDirections(location) }}\"\n      target=\"_blank\"\n      class=\"btn btn-sm btn-action btn-block cx-button\"\n      (click)=\"$event.stopPropagation()\"\n      >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n    >\n  </div>\n</ng-container>\n"
    })
], StoreFinderListItemComponent);
export { StoreFinderListItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1saXN0LWl0ZW0vc3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQU1sRyxJQUFhLDRCQUE0QixHQUF6QyxNQUFhLDRCQUE2QixTQUFRLDBCQUEwQjtJQVkxRSxZQUNZLGdCQUFrQyxFQUNsQyxLQUFxQixFQUNyQixjQUE4QjtRQUV4QyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUpkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBYjFDLGtCQUFhLEdBQVcsSUFBSSxDQUFDO1FBUTdCLG1CQUFjLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7SUFRMUQsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxFQUFFO1lBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7SUFFRCxTQUFTLENBQUMsUUFBYTtRQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxlQUFlLENBQUMsUUFBYTtRQUMzQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTztZQUNyRCxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHO1lBQ2xELENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDUCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTTtZQUNuRCxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHO1lBQ2hELENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDUCxPQUFPLGdCQUFnQixZQUFZLEdBQUcsV0FBVyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0RSxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQW9CO1FBQ3hCLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7WUFDekIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDN0I7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFoQytCLGdCQUFnQjtZQUMzQixjQUFjO1lBQ0wsY0FBYzs7QUFiMUM7SUFEQyxLQUFLLEVBQUU7bUVBQ3FCO0FBRTdCO0lBREMsS0FBSyxFQUFFO29FQUNZO0FBRXBCO0lBREMsS0FBSyxFQUFFO3FFQUNpQjtBQUV6QjtJQURDLEtBQUssRUFBRTttRUFDZTtBQUV2QjtJQURDLE1BQU0sRUFBRTtvRUFDaUQ7QUFWL0MsNEJBQTRCO0lBSnhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSwyQkFBMkI7UUFDckMsdzBDQUFzRDtLQUN2RCxDQUFDO0dBQ1csNEJBQTRCLENBNkN4QztTQTdDWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVEYXRhU2VydmljZSwgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RTdG9yZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC1zdG9yZS1pdGVtL2Fic3RyYWN0LXN0b3JlLWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmUtZmluZGVyLWxpc3QtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1maW5kZXItbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJMaXN0SXRlbUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0U3RvcmVJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbG9jYXRpb25JbmRleDogbnVtYmVyID0gbnVsbDtcbiAgQElucHV0KClcbiAgbGlzdE9yZGVyTGFiZWw6IGFueTtcbiAgQElucHV0KClcbiAgZGlzcGxheURpc3RhbmNlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICB1c2VDbGlja0V2ZW50OiBib29sZWFuO1xuICBAT3V0cHV0KClcbiAgc3RvcmVJdGVtQ2xpY2s6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZURhdGFTZXJ2aWNlOiBTdG9yZURhdGFTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHtcbiAgICBzdXBlcihzdG9yZURhdGFTZXJ2aWNlKTtcbiAgfVxuXG4gIGhhbmRsZVN0b3JlSXRlbUNsaWNrKCkge1xuICAgIGlmICh0aGlzLmxvY2F0aW9uSW5kZXggIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc3RvcmVJdGVtQ2xpY2suZW1pdCh0aGlzLmxvY2F0aW9uSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHZpZXdTdG9yZShsb2NhdGlvbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyhbdGhpcy5wcmVwYXJlUm91dGVVcmwobG9jYXRpb24pXSk7XG4gIH1cblxuICBwcmVwYXJlUm91dGVVcmwobG9jYXRpb246IGFueSk6IHN0cmluZyB7XG4gICAgY29uc3QgY291bnRyeVBhcmFtID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuY291bnRyeVxuICAgICAgPyBgY291bnRyeS8ke3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmNvdW50cnl9L2BcbiAgICAgIDogJyc7XG4gICAgY29uc3QgcmVnaW9uUGFyYW0gPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5yZWdpb25cbiAgICAgID8gYHJlZ2lvbi8ke3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnJlZ2lvbn0vYFxuICAgICAgOiAnJztcbiAgICByZXR1cm4gYHN0b3JlLWZpbmRlci8ke2NvdW50cnlQYXJhbX0ke3JlZ2lvblBhcmFtfSR7bG9jYXRpb24ubmFtZX1gO1xuICB9XG5cbiAgb25LZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICB0aGlzLmhhbmRsZVN0b3JlSXRlbUNsaWNrKCk7XG4gICAgfVxuICB9XG59XG4iXX0=