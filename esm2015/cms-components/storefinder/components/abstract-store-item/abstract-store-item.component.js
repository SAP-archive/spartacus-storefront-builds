/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
export class AbstractStoreItemComponent {
    /**
     * @param {?} storeDataService
     */
    constructor(storeDataService) {
        this.storeDataService = storeDataService;
        this.current_date = new Date();
    }
    /**
     * @param {?} location
     * @return {?}
     */
    getDirections(location) {
        /** @type {?} */
        const google_map_url = 'https://www.google.com/maps/dir/Current+Location/';
        /** @type {?} */
        const latitude = this.storeDataService.getStoreLatitude(location);
        /** @type {?} */
        const longitude = this.storeDataService.getStoreLongitude(location);
        return google_map_url + latitude + ',' + longitude;
    }
    /**
     * @param {?} location
     * @return {?}
     */
    getClosingTime(location) {
        return this.storeDataService.getStoreClosingTime(location, this.current_date);
    }
    /**
     * @param {?} location
     * @return {?}
     */
    getOpeningTime(location) {
        return this.storeDataService.getStoreOpeningTime(location, this.current_date);
    }
    /**
     * @param {?} location
     * @return {?}
     */
    isOpen(location) {
        return this.storeDataService.isStoreOpen(location, this.current_date);
    }
}
AbstractStoreItemComponent.propDecorators = {
    location: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL2Fic3RyYWN0LXN0b3JlLWl0ZW0vYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEMsTUFBTSxPQUFPLDBCQUEwQjs7OztJQUtyQyxZQUFzQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUYvQyxpQkFBWSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFFd0IsQ0FBQzs7Ozs7SUFFNUQsYUFBYSxDQUFDLFFBQWE7O2NBQ25CLGNBQWMsR0FBRyxtREFBbUQ7O2NBQ3BFLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDOztjQUMzRCxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztRQUNuRSxPQUFPLGNBQWMsR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxRQUFhO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUM5QyxRQUFRLEVBQ1IsSUFBSSxDQUFDLFlBQVksQ0FDbEIsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFFBQWE7UUFDMUIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQzlDLFFBQVEsRUFDUixJQUFJLENBQUMsWUFBWSxDQUNsQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsUUFBYTtRQUNsQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7dUJBN0JBLEtBQUs7Ozs7SUFBTiw4Q0FDUzs7SUFDVCxrREFBbUM7Ozs7O0lBRXZCLHNEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZURhdGFTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEFic3RyYWN0U3RvcmVJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbG9jYXRpb247XG4gIHJlYWRvbmx5IGN1cnJlbnRfZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlRGF0YVNlcnZpY2U6IFN0b3JlRGF0YVNlcnZpY2UpIHt9XG5cbiAgZ2V0RGlyZWN0aW9ucyhsb2NhdGlvbjogYW55KTogc3RyaW5nIHtcbiAgICBjb25zdCBnb29nbGVfbWFwX3VybCA9ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZGlyL0N1cnJlbnQrTG9jYXRpb24vJztcbiAgICBjb25zdCBsYXRpdHVkZSA9IHRoaXMuc3RvcmVEYXRhU2VydmljZS5nZXRTdG9yZUxhdGl0dWRlKGxvY2F0aW9uKTtcbiAgICBjb25zdCBsb25naXR1ZGUgPSB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVMb25naXR1ZGUobG9jYXRpb24pO1xuICAgIHJldHVybiBnb29nbGVfbWFwX3VybCArIGxhdGl0dWRlICsgJywnICsgbG9uZ2l0dWRlO1xuICB9XG5cbiAgZ2V0Q2xvc2luZ1RpbWUobG9jYXRpb246IGFueSk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVDbG9zaW5nVGltZShcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdGhpcy5jdXJyZW50X2RhdGVcbiAgICApO1xuICB9XG5cbiAgZ2V0T3BlbmluZ1RpbWUobG9jYXRpb246IGFueSk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVPcGVuaW5nVGltZShcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdGhpcy5jdXJyZW50X2RhdGVcbiAgICApO1xuICB9XG5cbiAgaXNPcGVuKGxvY2F0aW9uOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmlzU3RvcmVPcGVuKGxvY2F0aW9uLCB0aGlzLmN1cnJlbnRfZGF0ZSk7XG4gIH1cbn1cbiJdfQ==