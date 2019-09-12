/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StoreDataService } from '@spartacus/core';
import { AbstractStoreItemComponent } from '../abstract-store-item/abstract-store-item.component';
export class StoreFinderListItemComponent extends AbstractStoreItemComponent {
    /**
     * @param {?} storeDataService
     */
    constructor(storeDataService) {
        super(storeDataService);
        this.storeDataService = storeDataService;
        this.locationIndex = null;
        this.storeItemClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    handleStoreItemClick() {
        if (this.locationIndex !== null) {
            this.storeItemClick.emit(this.locationIndex);
        }
    }
}
StoreFinderListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-list-item',
                template: "<ng-container>\n  <div (click)=\"handleStoreItemClick()\">\n    <div class=\"cx-store-list-order\">\n      {{ listOrderLabel }}\n    </div>\n    <div class=\"cx-store-name\">\n      {{ location.displayName || location.name }}\n    </div>\n    <div class=\"cx-store-address\" *ngIf=\"location.address\">\n      <div class=\"cx-store-address-street\">\n        {{ location.address.line1 }} {{ location.address.line2 }}\n      </div>\n      {{\n        getFormattedStoreAddress([\n          location.address.town,\n          location.address.postalCode,\n          location.address.country.isocode\n        ])\n      }}\n      <div\n        class=\"cx-store-distance\"\n        *ngIf=\"location.formattedDistance && displayDistance\"\n      >\n        {{ location.formattedDistance }}\n      </div>\n    </div>\n    <a\n      href=\"{{ getDirections(location) }}\"\n      target=\"_blank\"\n      class=\"btn btn-sm btn-action btn-block cx-button\"\n      (click)=\"$event.stopPropagation()\"\n      >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n    >\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
StoreFinderListItemComponent.ctorParameters = () => [
    { type: StoreDataService }
];
StoreFinderListItemComponent.propDecorators = {
    locationIndex: [{ type: Input }],
    listOrderLabel: [{ type: Input }],
    displayDistance: [{ type: Input }],
    storeItemClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    StoreFinderListItemComponent.prototype.locationIndex;
    /** @type {?} */
    StoreFinderListItemComponent.prototype.listOrderLabel;
    /** @type {?} */
    StoreFinderListItemComponent.prototype.displayDistance;
    /** @type {?} */
    StoreFinderListItemComponent.prototype.storeItemClick;
    /**
     * @type {?}
     * @protected
     */
    StoreFinderListItemComponent.prototype.storeDataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1saXN0LWl0ZW0vc3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFNbEcsTUFBTSxPQUFPLDRCQUE2QixTQUFRLDBCQUEwQjs7OztJQVUxRSxZQUFzQixnQkFBa0M7UUFDdEQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFESixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUnhELGtCQUFhLEdBQVcsSUFBSSxDQUFDO1FBTTdCLG1CQUFjLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7SUFJMUQsQ0FBQzs7OztJQUVELG9CQUFvQjtRQUNsQixJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxFQUFFO1lBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsd2tDQUFzRDthQUN2RDs7OztZQU5RLGdCQUFnQjs7OzRCQVF0QixLQUFLOzZCQUVMLEtBQUs7OEJBRUwsS0FBSzs2QkFFTCxNQUFNOzs7O0lBTlAscURBQzZCOztJQUM3QixzREFDb0I7O0lBQ3BCLHVEQUN5Qjs7SUFDekIsc0RBQzBEOzs7OztJQUU5Qyx3REFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVEYXRhU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdFN0b3JlSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LXN0b3JlLWl0ZW0vYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXItbGlzdC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlLWZpbmRlci1saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlckxpc3RJdGVtQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RTdG9yZUl0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKVxuICBsb2NhdGlvbkluZGV4OiBudW1iZXIgPSBudWxsO1xuICBASW5wdXQoKVxuICBsaXN0T3JkZXJMYWJlbDogYW55O1xuICBASW5wdXQoKVxuICBkaXNwbGF5RGlzdGFuY2U6IGJvb2xlYW47XG4gIEBPdXRwdXQoKVxuICBzdG9yZUl0ZW1DbGljazogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlRGF0YVNlcnZpY2U6IFN0b3JlRGF0YVNlcnZpY2UpIHtcbiAgICBzdXBlcihzdG9yZURhdGFTZXJ2aWNlKTtcbiAgfVxuXG4gIGhhbmRsZVN0b3JlSXRlbUNsaWNrKCkge1xuICAgIGlmICh0aGlzLmxvY2F0aW9uSW5kZXggIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc3RvcmVJdGVtQ2xpY2suZW1pdCh0aGlzLmxvY2F0aW9uSW5kZXgpO1xuICAgIH1cbiAgfVxufVxuIl19