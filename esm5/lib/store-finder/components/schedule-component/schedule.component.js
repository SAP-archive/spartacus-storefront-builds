/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { StoreDataService } from '@spartacus/core';
/** @type {?} */
var WEEK_DAYS_NUMBER = 7;
var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(storeDataService) {
        this.storeDataService = storeDataService;
        this.displayDays = null;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ScheduleComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.location && this.location) {
            /** @type {?} */
            var initialDate = this.getInitialDate();
            this.displayDays = [];
            for (var i = 0; i < WEEK_DAYS_NUMBER; i++) {
                /** @type {?} */
                var date = new Date(initialDate.valueOf());
                date.setDate(date.getDate() + i);
                this.displayDays.push(date);
            }
        }
    };
    /**
     * Returns the store's opening time for the given date
     * @param date date
     */
    /**
     * Returns the store's opening time for the given date
     * @param {?} date date
     * @return {?}
     */
    ScheduleComponent.prototype.getStoreOpeningTime = /**
     * Returns the store's opening time for the given date
     * @param {?} date date
     * @return {?}
     */
    function (date) {
        return this.storeDataService.getStoreOpeningTime(this.location, date);
    };
    /**
     * Returns the store's closing time for the given date
     * @param date date
     */
    /**
     * Returns the store's closing time for the given date
     * @param {?} date date
     * @return {?}
     */
    ScheduleComponent.prototype.getStoreClosingTime = /**
     * Returns the store's closing time for the given date
     * @param {?} date date
     * @return {?}
     */
    function (date) {
        return this.storeDataService.getStoreClosingTime(this.location, date);
    };
    /**
     * return initial (first) date to be displayed in the schedule
     */
    /**
     * return initial (first) date to be displayed in the schedule
     * @private
     * @return {?}
     */
    ScheduleComponent.prototype.getInitialDate = /**
     * return initial (first) date to be displayed in the schedule
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - currentDate.getDay());
        return currentDate;
    };
    ScheduleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-schedule',
                    template: "<ng-content></ng-content>\n<div class=\"container cx-store-hours\" *ngIf=\"location.openingHours\">\n  <div *ngFor=\"let day of displayDays\" class=\"row\">\n    <div class=\"cx-days col-6\">{{ day | cxDate: 'EEE' }}</div>\n    <div *ngIf=\"getStoreOpeningTime(day) !== null\" class=\"cx-hours col-6\">\n      {{ getStoreOpeningTime(day) | cxDate: 'HH:mm' }} -\n      {{ getStoreClosingTime(day) | cxDate: 'HH:mm' }}\n    </div>\n    <div *ngIf=\"getStoreOpeningTime(day) === null\" class=\"cx-hours col-6\">\n      {{ 'storeFinder.closed' | cxTranslate }}\n    </div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    ScheduleComponent.ctorParameters = function () { return [
        { type: StoreDataService }
    ]; };
    ScheduleComponent.propDecorators = {
        location: [{ type: Input }]
    };
    return ScheduleComponent;
}());
export { ScheduleComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3N0b3JlLWZpbmRlci9jb21wb25lbnRzL3NjaGVkdWxlLWNvbXBvbmVudC9zY2hlZHVsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7SUFFN0MsZ0JBQWdCLEdBQUcsQ0FBQztBQUUxQjtJQVNFLDJCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUZ0RCxnQkFBVyxHQUFXLElBQUksQ0FBQztJQUU4QixDQUFDOzs7OztJQUUxRCx1Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7O2dCQUMvQixXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUV0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O29CQUNuQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDN0I7U0FDRjtJQUNILENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILCtDQUFtQjs7Ozs7SUFBbkIsVUFBb0IsSUFBVTtRQUM1QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILCtDQUFtQjs7Ozs7SUFBbkIsVUFBb0IsSUFBVTtRQUM1QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0ssMENBQWM7Ozs7O0lBQXRCOztZQUNRLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRTtRQUM5QixXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUVsRSxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOztnQkFoREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2Qix3bEJBQXdDO2lCQUN6Qzs7OztnQkFQUSxnQkFBZ0I7OzsyQkFTdEIsS0FBSzs7SUE0Q1Isd0JBQUM7Q0FBQSxBQWpERCxJQWlEQztTQTdDWSxpQkFBaUI7OztJQUM1QixxQ0FDYzs7SUFDZCx3Q0FBMkI7Ozs7O0lBRWYsNkNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZURhdGFTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuY29uc3QgV0VFS19EQVlTX05VTUJFUiA9IDc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNjaGVkdWxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NjaGVkdWxlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICBsb2NhdGlvbjogYW55O1xuICBkaXNwbGF5RGF5czogRGF0ZVtdID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlRGF0YVNlcnZpY2U6IFN0b3JlRGF0YVNlcnZpY2UpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmxvY2F0aW9uICYmIHRoaXMubG9jYXRpb24pIHtcbiAgICAgIGNvbnN0IGluaXRpYWxEYXRlID0gdGhpcy5nZXRJbml0aWFsRGF0ZSgpO1xuICAgICAgdGhpcy5kaXNwbGF5RGF5cyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFdFRUtfREFZU19OVU1CRVI7IGkrKykge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoaW5pdGlhbERhdGUudmFsdWVPZigpKTtcbiAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgaSk7XG4gICAgICAgIHRoaXMuZGlzcGxheURheXMucHVzaChkYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3RvcmUncyBvcGVuaW5nIHRpbWUgZm9yIHRoZSBnaXZlbiBkYXRlXG4gICAqIEBwYXJhbSBkYXRlIGRhdGVcbiAgICovXG4gIGdldFN0b3JlT3BlbmluZ1RpbWUoZGF0ZTogRGF0ZSk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVPcGVuaW5nVGltZSh0aGlzLmxvY2F0aW9uLCBkYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzdG9yZSdzIGNsb3NpbmcgdGltZSBmb3IgdGhlIGdpdmVuIGRhdGVcbiAgICogQHBhcmFtIGRhdGUgZGF0ZVxuICAgKi9cbiAgZ2V0U3RvcmVDbG9zaW5nVGltZShkYXRlOiBEYXRlKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmVEYXRhU2VydmljZS5nZXRTdG9yZUNsb3NpbmdUaW1lKHRoaXMubG9jYXRpb24sIGRhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiBpbml0aWFsIChmaXJzdCkgZGF0ZSB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHNjaGVkdWxlXG4gICAqL1xuICBwcml2YXRlIGdldEluaXRpYWxEYXRlKCk6IERhdGUge1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBjdXJyZW50RGF0ZS5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSAtIGN1cnJlbnREYXRlLmdldERheSgpKTtcblxuICAgIHJldHVybiBjdXJyZW50RGF0ZTtcbiAgfVxufVxuIl19