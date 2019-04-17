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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvc3RvcmUtZmluZGVyL2NvbXBvbmVudHMvYWJzdHJhY3Qtc3RvcmUtaXRlbS9hYnN0cmFjdC1zdG9yZS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd0QztJQUtFLG9DQUFzQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUYvQyxpQkFBWSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFFd0IsQ0FBQzs7Ozs7SUFFNUQsa0RBQWE7Ozs7SUFBYixVQUFjLFFBQWE7O1lBQ25CLGNBQWMsR0FBRyxtREFBbUQ7O1lBQ3BFLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDOztZQUMzRCxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztRQUNuRSxPQUFPLGNBQWMsR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVELG1EQUFjOzs7O0lBQWQsVUFBZSxRQUFhO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUM5QyxRQUFRLEVBQ1IsSUFBSSxDQUFDLFlBQVksQ0FDbEIsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsbURBQWM7Ozs7SUFBZCxVQUFlLFFBQWE7UUFDMUIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQzlDLFFBQVEsRUFDUixJQUFJLENBQUMsWUFBWSxDQUNsQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCwyQ0FBTTs7OztJQUFOLFVBQU8sUUFBYTtRQUNsQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4RSxDQUFDOzsyQkE3QkEsS0FBSzs7SUE4QlIsaUNBQUM7Q0FBQSxBQS9CRCxJQStCQztTQS9CWSwwQkFBMEI7OztJQUNyQyw4Q0FDUzs7SUFDVCxrREFBbUM7Ozs7O0lBRXZCLHNEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZURhdGFTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEFic3RyYWN0U3RvcmVJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbG9jYXRpb247XG4gIHJlYWRvbmx5IGN1cnJlbnRfZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlRGF0YVNlcnZpY2U6IFN0b3JlRGF0YVNlcnZpY2UpIHt9XG5cbiAgZ2V0RGlyZWN0aW9ucyhsb2NhdGlvbjogYW55KTogc3RyaW5nIHtcbiAgICBjb25zdCBnb29nbGVfbWFwX3VybCA9ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZGlyL0N1cnJlbnQrTG9jYXRpb24vJztcbiAgICBjb25zdCBsYXRpdHVkZSA9IHRoaXMuc3RvcmVEYXRhU2VydmljZS5nZXRTdG9yZUxhdGl0dWRlKGxvY2F0aW9uKTtcbiAgICBjb25zdCBsb25naXR1ZGUgPSB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVMb25naXR1ZGUobG9jYXRpb24pO1xuICAgIHJldHVybiBnb29nbGVfbWFwX3VybCArIGxhdGl0dWRlICsgJywnICsgbG9uZ2l0dWRlO1xuICB9XG5cbiAgZ2V0Q2xvc2luZ1RpbWUobG9jYXRpb246IGFueSk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVDbG9zaW5nVGltZShcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdGhpcy5jdXJyZW50X2RhdGVcbiAgICApO1xuICB9XG5cbiAgZ2V0T3BlbmluZ1RpbWUobG9jYXRpb246IGFueSk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVPcGVuaW5nVGltZShcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdGhpcy5jdXJyZW50X2RhdGVcbiAgICApO1xuICB9XG5cbiAgaXNPcGVuKGxvY2F0aW9uOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmlzU3RvcmVPcGVuKGxvY2F0aW9uLCB0aGlzLmN1cnJlbnRfZGF0ZSk7XG4gIH1cbn1cbiJdfQ==