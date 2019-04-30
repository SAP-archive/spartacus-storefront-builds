/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvc3RvcmUtZmluZGVyL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLWxpc3QtaXRlbS9zdG9yZS1maW5kZXItbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFbEc7SUFJa0Qsd0RBQTBCO0lBTTFFLHNDQUFzQixnQkFBa0M7UUFBeEQsWUFDRSxrQkFBTSxnQkFBZ0IsQ0FBQyxTQUN4QjtRQUZxQixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSnhELG1CQUFhLEdBQVcsSUFBSSxDQUFDO1FBRTdCLG9CQUFjLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7O0lBSTFELENBQUM7Ozs7SUFFRCwyREFBb0I7OztJQUFwQjtRQUNFLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxJQUFJLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxnb0NBQXNEO2lCQUN2RDs7OztnQkFOUSxnQkFBZ0I7OztnQ0FRdEIsS0FBSztpQ0FFTCxNQUFNOztJQVlULG1DQUFDO0NBQUEsQUFuQkQsQ0FJa0QsMEJBQTBCLEdBZTNFO1NBZlksNEJBQTRCOzs7SUFDdkMscURBQzZCOztJQUM3QixzREFDMEQ7Ozs7O0lBRTlDLHdEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0b3JlRGF0YVNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RTdG9yZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC1zdG9yZS1pdGVtL2Fic3RyYWN0LXN0b3JlLWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmUtZmluZGVyLWxpc3QtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1maW5kZXItbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJMaXN0SXRlbUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0U3RvcmVJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbG9jYXRpb25JbmRleDogbnVtYmVyID0gbnVsbDtcbiAgQE91dHB1dCgpXG4gIHN0b3JlSXRlbUNsaWNrOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmVEYXRhU2VydmljZTogU3RvcmVEYXRhU2VydmljZSkge1xuICAgIHN1cGVyKHN0b3JlRGF0YVNlcnZpY2UpO1xuICB9XG5cbiAgaGFuZGxlU3RvcmVJdGVtQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMubG9jYXRpb25JbmRleCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zdG9yZUl0ZW1DbGljay5lbWl0KHRoaXMubG9jYXRpb25JbmRleCk7XG4gICAgfVxuICB9XG59XG4iXX0=