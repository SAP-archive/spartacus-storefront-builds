/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { StoreDataService } from '@spartacus/core';
/** @type {?} */
const WEEK_DAYS_NUMBER = 7;
export class ScheduleComponent {
    /**
     * @param {?} storeDataService
     */
    constructor(storeDataService) {
        this.storeDataService = storeDataService;
        this.displayDays = null;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.location && this.location) {
            /** @type {?} */
            const initialDate = this.getInitialDate();
            this.displayDays = [];
            for (let i = 0; i < WEEK_DAYS_NUMBER; i++) {
                /** @type {?} */
                const date = new Date(initialDate.valueOf());
                date.setDate(date.getDate() + i);
                this.displayDays.push(date);
            }
        }
    }
    /**
     * Returns the store's opening time for the given date
     * @param {?} date date
     * @return {?}
     */
    getStoreOpeningTime(date) {
        return this.storeDataService.getStoreOpeningTime(this.location, date);
    }
    /**
     * Returns the store's closing time for the given date
     * @param {?} date date
     * @return {?}
     */
    getStoreClosingTime(date) {
        return this.storeDataService.getStoreClosingTime(this.location, date);
    }
    /**
     * return initial (first) date to be displayed in the schedule
     * @private
     * @return {?}
     */
    getInitialDate() {
        /** @type {?} */
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - currentDate.getDay());
        return currentDate;
    }
}
ScheduleComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-schedule',
                template: "<ng-content></ng-content>\n<div class=\"container cx-store-hours\" *ngIf=\"location.openingHours\">\n  <div *ngFor=\"let day of displayDays\" class=\"row\">\n    <div class=\"cx-days col-6\">{{ day | cxDate: 'EEE' }}</div>\n    <div *ngIf=\"getStoreOpeningTime(day) !== null\" class=\"cx-hours col-6\">\n      {{ getStoreOpeningTime(day) | cxDate: 'HH:mm' }} -\n      {{ getStoreClosingTime(day) | cxDate: 'HH:mm' }}\n    </div>\n    <div *ngIf=\"getStoreOpeningTime(day) === null\" class=\"cx-hours col-6\">\n      {{ 'storeFinder.closed' | cxTranslate }}\n    </div>\n  </div>\n</div>\n",
                styles: [".cx-days{padding:var(--cx-padding,0 1rem 0 0)}.cx-store-hours{margin:var(--cx-margin,1.5rem 0)}.cx-hours{text-align:var(--cx-text-align,center)}"]
            }] }
];
/** @nocollapse */
ScheduleComponent.ctorParameters = () => [
    { type: StoreDataService }
];
ScheduleComponent.propDecorators = {
    location: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ScheduleComponent.prototype.location;
    /** @type {?} */
    ScheduleComponent.prototype.displayDays;
    /**
     * @type {?}
     * @private
     */
    ScheduleComponent.prototype.storeDataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3N0b3JlLWZpbmRlci9jb21wb25lbnRzL3NjaGVkdWxlLWNvbXBvbmVudC9zY2hlZHVsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7TUFFN0MsZ0JBQWdCLEdBQUcsQ0FBQztBQU8xQixNQUFNLE9BQU8saUJBQWlCOzs7O0lBSzVCLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRnRELGdCQUFXLEdBQVcsSUFBSSxDQUFDO0lBRThCLENBQUM7Ozs7O0lBRTFELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTs7a0JBQy9CLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBRXRCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsRUFBRTs7c0JBQ25DLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3QjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBTUQsbUJBQW1CLENBQUMsSUFBVTtRQUM1QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7OztJQU1ELG1CQUFtQixDQUFDLElBQVU7UUFDNUIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7Ozs7SUFLTyxjQUFjOztjQUNkLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRTtRQUM5QixXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUVsRSxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2Qix3bEJBQXdDOzthQUV6Qzs7OztZQVJRLGdCQUFnQjs7O3VCQVV0QixLQUFLOzs7O0lBQU4scUNBQ2M7O0lBQ2Qsd0NBQTJCOzs7OztJQUVmLDZDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVEYXRhU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmNvbnN0IFdFRUtfREFZU19OVU1CRVIgPSA3O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zY2hlZHVsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zY2hlZHVsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NjaGVkdWxlLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgbG9jYXRpb246IGFueTtcbiAgZGlzcGxheURheXM6IERhdGVbXSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZURhdGFTZXJ2aWNlOiBTdG9yZURhdGFTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5sb2NhdGlvbiAmJiB0aGlzLmxvY2F0aW9uKSB7XG4gICAgICBjb25zdCBpbml0aWFsRGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbERhdGUoKTtcbiAgICAgIHRoaXMuZGlzcGxheURheXMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBXRUVLX0RBWVNfTlVNQkVSOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGluaXRpYWxEYXRlLnZhbHVlT2YoKSk7XG4gICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGkpO1xuICAgICAgICB0aGlzLmRpc3BsYXlEYXlzLnB1c2goZGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHN0b3JlJ3Mgb3BlbmluZyB0aW1lIGZvciB0aGUgZ2l2ZW4gZGF0ZVxuICAgKiBAcGFyYW0gZGF0ZSBkYXRlXG4gICAqL1xuICBnZXRTdG9yZU9wZW5pbmdUaW1lKGRhdGU6IERhdGUpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmdldFN0b3JlT3BlbmluZ1RpbWUodGhpcy5sb2NhdGlvbiwgZGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3RvcmUncyBjbG9zaW5nIHRpbWUgZm9yIHRoZSBnaXZlbiBkYXRlXG4gICAqIEBwYXJhbSBkYXRlIGRhdGVcbiAgICovXG4gIGdldFN0b3JlQ2xvc2luZ1RpbWUoZGF0ZTogRGF0ZSk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVDbG9zaW5nVGltZSh0aGlzLmxvY2F0aW9uLCBkYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gaW5pdGlhbCAoZmlyc3QpIGRhdGUgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBzY2hlZHVsZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRJbml0aWFsRGF0ZSgpOiBEYXRlIHtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY3VycmVudERhdGUuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgLSBjdXJyZW50RGF0ZS5nZXREYXkoKSk7XG5cbiAgICByZXR1cm4gY3VycmVudERhdGU7XG4gIH1cbn1cbiJdfQ==