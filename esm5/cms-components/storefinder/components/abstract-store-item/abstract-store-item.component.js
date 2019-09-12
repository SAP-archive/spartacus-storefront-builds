/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
var AbstractStoreItemComponent = /** @class */ (function () {
    function AbstractStoreItemComponent(storeDataService) {
        this.storeDataService = storeDataService;
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
     * @param {?} addressParts
     * @return {?}
     */
    AbstractStoreItemComponent.prototype.getFormattedStoreAddress = /**
     * @param {?} addressParts
     * @return {?}
     */
    function (addressParts) {
        return addressParts.filter(Boolean).join(', ');
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
    /**
     * @type {?}
     * @protected
     */
    AbstractStoreItemComponent.prototype.storeDataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL2Fic3RyYWN0LXN0b3JlLWl0ZW0vYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEM7SUFJRSxvQ0FBc0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBRyxDQUFDOzs7OztJQUU1RCxrREFBYTs7OztJQUFiLFVBQWMsUUFBYTs7WUFDbkIsY0FBYyxHQUFHLG1EQUFtRDs7WUFDcEUsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7O1lBQzNELFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDO1FBQ25FLE9BQU8sY0FBYyxHQUFHLFFBQVEsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBRUQsNkRBQXdCOzs7O0lBQXhCLFVBQXlCLFlBQXNCO1FBQzdDLE9BQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7MkJBZEEsS0FBSzs7SUFlUixpQ0FBQztDQUFBLEFBaEJELElBZ0JDO1NBaEJZLDBCQUEwQjs7O0lBQ3JDLDhDQUNTOzs7OztJQUVHLHNEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZURhdGFTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEFic3RyYWN0U3RvcmVJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbG9jYXRpb247XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlRGF0YVNlcnZpY2U6IFN0b3JlRGF0YVNlcnZpY2UpIHt9XG5cbiAgZ2V0RGlyZWN0aW9ucyhsb2NhdGlvbjogYW55KTogc3RyaW5nIHtcbiAgICBjb25zdCBnb29nbGVfbWFwX3VybCA9ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZGlyL0N1cnJlbnQrTG9jYXRpb24vJztcbiAgICBjb25zdCBsYXRpdHVkZSA9IHRoaXMuc3RvcmVEYXRhU2VydmljZS5nZXRTdG9yZUxhdGl0dWRlKGxvY2F0aW9uKTtcbiAgICBjb25zdCBsb25naXR1ZGUgPSB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVMb25naXR1ZGUobG9jYXRpb24pO1xuICAgIHJldHVybiBnb29nbGVfbWFwX3VybCArIGxhdGl0dWRlICsgJywnICsgbG9uZ2l0dWRlO1xuICB9XG5cbiAgZ2V0Rm9ybWF0dGVkU3RvcmVBZGRyZXNzKGFkZHJlc3NQYXJ0czogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIHJldHVybiBhZGRyZXNzUGFydHMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJywgJyk7XG4gIH1cbn1cbiJdfQ==