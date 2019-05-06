/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StoreDataService } from '@spartacus/core';
import { AbstractStoreItemComponent } from '../abstract-store-item/abstract-store-item.component';
var StoreFinderListItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StoreFinderListItemComponent, _super);
    function StoreFinderListItemComponent(storeDataService) {
        var _this = _super.call(this, storeDataService) || this;
        _this.storeDataService = storeDataService;
        _this.locationIndex = null;
        _this.storeItemClick = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    StoreFinderListItemComponent.prototype.handleStoreItemClick = /**
     * @return {?}
     */
    function () {
        if (this.locationIndex !== null) {
            this.storeItemClick.emit(this.locationIndex);
        }
    };
    StoreFinderListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-list-item',
                    template: "<ng-container>\n  <div (click)=\"handleStoreItemClick()\">\n    <div class=\"cx-store-name\">\n      {{ location.displayName }}\n    </div>\n    <div class=\"cx-store-address\" *ngIf=\"location.address\">\n      {{ location.address.line1 }}<br />\n      {{ location.address.town }},\n      {{ location.address.region ? location.address.region.name + ',' : '' }}\n      {{ location.address.postalCode }}\n    </div>\n    <div *ngIf=\"location.openingHours\">\n      <div *ngIf=\"isOpen(location)\" class=\"cx-store-open\">\n        {{ getClosingTime(location) | cxDate: 'EEE' }}:\n        {{ 'storeFinder.openUntil' | cxTranslate }}\n        {{ getClosingTime(location) | cxDate: 'shortTime' }}\n      </div>\n      <div *ngIf=\"!isOpen(location)\" class=\"cx-store-closed\">\n        {{ getClosingTime(location) | cxDate: 'EEE' }}:\n        {{ 'storeFinder.closed' | cxTranslate }}\n      </div>\n    </div>\n    <a\n      href=\"{{ getDirections(location) }}\"\n      target=\"_blank\"\n      class=\"btn btn-sm btn-action btn-block cx-button\"\n      >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n    >\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    StoreFinderListItemComponent.ctorParameters = function () { return [
        { type: StoreDataService }
    ]; };
    StoreFinderListItemComponent.propDecorators = {
        locationIndex: [{ type: Input }],
        storeItemClick: [{ type: Output }]
    };
    return StoreFinderListItemComponent;
}(AbstractStoreItemComponent));
export { StoreFinderListItemComponent };
if (false) {
    /** @type {?} */
    StoreFinderListItemComponent.prototype.locationIndex;
    /** @type {?} */
    StoreFinderListItemComponent.prototype.storeItemClick;
    /**
     * @type {?}
     * @protected
     */
    StoreFinderListItemComponent.prototype.storeDataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1saXN0LWl0ZW0vc3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRWxHO0lBSWtELHdEQUEwQjtJQU0xRSxzQ0FBc0IsZ0JBQWtDO1FBQXhELFlBQ0Usa0JBQU0sZ0JBQWdCLENBQUMsU0FDeEI7UUFGcUIsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUp4RCxtQkFBYSxHQUFXLElBQUksQ0FBQztRQUU3QixvQkFBYyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDOztJQUkxRCxDQUFDOzs7O0lBRUQsMkRBQW9COzs7SUFBcEI7UUFDRSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxFQUFFO1lBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsZ29DQUFzRDtpQkFDdkQ7Ozs7Z0JBTlEsZ0JBQWdCOzs7Z0NBUXRCLEtBQUs7aUNBRUwsTUFBTTs7SUFZVCxtQ0FBQztDQUFBLEFBbkJELENBSWtELDBCQUEwQixHQWUzRTtTQWZZLDRCQUE0Qjs7O0lBQ3ZDLHFEQUM2Qjs7SUFDN0Isc0RBQzBEOzs7OztJQUU5Qyx3REFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVEYXRhU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdFN0b3JlSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LXN0b3JlLWl0ZW0vYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXItbGlzdC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlLWZpbmRlci1saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlckxpc3RJdGVtQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RTdG9yZUl0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKVxuICBsb2NhdGlvbkluZGV4OiBudW1iZXIgPSBudWxsO1xuICBAT3V0cHV0KClcbiAgc3RvcmVJdGVtQ2xpY2s6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZURhdGFTZXJ2aWNlOiBTdG9yZURhdGFTZXJ2aWNlKSB7XG4gICAgc3VwZXIoc3RvcmVEYXRhU2VydmljZSk7XG4gIH1cblxuICBoYW5kbGVTdG9yZUl0ZW1DbGljaygpIHtcbiAgICBpZiAodGhpcy5sb2NhdGlvbkluZGV4ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnN0b3JlSXRlbUNsaWNrLmVtaXQodGhpcy5sb2NhdGlvbkluZGV4KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==