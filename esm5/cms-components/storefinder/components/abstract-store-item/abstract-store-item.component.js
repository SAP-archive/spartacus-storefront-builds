/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
var AbstractStoreItemComponent = /** @class */ (function () {
    function AbstractStoreItemComponent(storeDataService) {
        this.storeDataService = storeDataService;
        this.current_date = new Date();
    }
    /**
     * @param {?} location
     * @return {?}
     */
    AbstractStoreItemComponent.prototype.getDirections = /**
     * @param {?} location
     * @return {?}
     */
    function (location) {
        /** @type {?} */
        var google_map_url = 'https://www.google.com/maps/dir/Current+Location/';
        /** @type {?} */
        var latitude = this.storeDataService.getStoreLatitude(location);
        /** @type {?} */
        var longitude = this.storeDataService.getStoreLongitude(location);
        return google_map_url + latitude + ',' + longitude;
    };
    /**
     * @param {?} location
     * @return {?}
     */
    AbstractStoreItemComponent.prototype.getClosingTime = /**
     * @param {?} location
     * @return {?}
     */
    function (location) {
        return this.storeDataService.getStoreClosingTime(location, this.current_date);
    };
    /**
     * @param {?} location
     * @return {?}
     */
    AbstractStoreItemComponent.prototype.getOpeningTime = /**
     * @param {?} location
     * @return {?}
     */
    function (location) {
        return this.storeDataService.getStoreOpeningTime(location, this.current_date);
    };
    /**
     * @param {?} location
     * @return {?}
     */
    AbstractStoreItemComponent.prototype.isOpen = /**
     * @param {?} location
     * @return {?}
     */
    function (location) {
        return this.storeDataService.isStoreOpen(location, this.current_date);
    };
    AbstractStoreItemComponent.propDecorators = {
        location: [{ type: Input }]
    };
    return AbstractStoreItemComponent;
}());
export { AbstractStoreItemComponent };
if (false) {
    /** @type {?} */
    AbstractStoreItemComponent.prototype.location;
    /** @type {?} */
    AbstractStoreItemComponent.prototype.current_date;
    /**
     * @type {?}
     * @protected
     */
    AbstractStoreItemComponent.prototype.storeDataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL2Fic3RyYWN0LXN0b3JlLWl0ZW0vYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEM7SUFLRSxvQ0FBc0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFGL0MsaUJBQVksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBRXdCLENBQUM7Ozs7O0lBRTVELGtEQUFhOzs7O0lBQWIsVUFBYyxRQUFhOztZQUNuQixjQUFjLEdBQUcsbURBQW1EOztZQUNwRSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQzs7WUFDM0QsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7UUFDbkUsT0FBTyxjQUFjLEdBQUcsUUFBUSxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFRCxtREFBYzs7OztJQUFkLFVBQWUsUUFBYTtRQUMxQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FDOUMsUUFBUSxFQUNSLElBQUksQ0FBQyxZQUFZLENBQ2xCLENBQUM7SUFDSixDQUFDOzs7OztJQUVELG1EQUFjOzs7O0lBQWQsVUFBZSxRQUFhO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUM5QyxRQUFRLEVBQ1IsSUFBSSxDQUFDLFlBQVksQ0FDbEIsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsMkNBQU07Ozs7SUFBTixVQUFPLFFBQWE7UUFDbEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7MkJBN0JBLEtBQUs7O0lBOEJSLGlDQUFDO0NBQUEsQUEvQkQsSUErQkM7U0EvQlksMEJBQTBCOzs7SUFDckMsOENBQ1M7O0lBQ1Qsa0RBQW1DOzs7OztJQUV2QixzREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVEYXRhU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBYnN0cmFjdFN0b3JlSXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGxvY2F0aW9uO1xuICByZWFkb25seSBjdXJyZW50X2RhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZURhdGFTZXJ2aWNlOiBTdG9yZURhdGFTZXJ2aWNlKSB7fVxuXG4gIGdldERpcmVjdGlvbnMobG9jYXRpb246IGFueSk6IHN0cmluZyB7XG4gICAgY29uc3QgZ29vZ2xlX21hcF91cmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2Rpci9DdXJyZW50K0xvY2F0aW9uLyc7XG4gICAgY29uc3QgbGF0aXR1ZGUgPSB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVMYXRpdHVkZShsb2NhdGlvbik7XG4gICAgY29uc3QgbG9uZ2l0dWRlID0gdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmdldFN0b3JlTG9uZ2l0dWRlKGxvY2F0aW9uKTtcbiAgICByZXR1cm4gZ29vZ2xlX21hcF91cmwgKyBsYXRpdHVkZSArICcsJyArIGxvbmdpdHVkZTtcbiAgfVxuXG4gIGdldENsb3NpbmdUaW1lKGxvY2F0aW9uOiBhbnkpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmdldFN0b3JlQ2xvc2luZ1RpbWUoXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRoaXMuY3VycmVudF9kYXRlXG4gICAgKTtcbiAgfVxuXG4gIGdldE9wZW5pbmdUaW1lKGxvY2F0aW9uOiBhbnkpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmdldFN0b3JlT3BlbmluZ1RpbWUoXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRoaXMuY3VycmVudF9kYXRlXG4gICAgKTtcbiAgfVxuXG4gIGlzT3Blbihsb2NhdGlvbjogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmVEYXRhU2VydmljZS5pc1N0b3JlT3Blbihsb2NhdGlvbiwgdGhpcy5jdXJyZW50X2RhdGUpO1xuICB9XG59XG4iXX0=