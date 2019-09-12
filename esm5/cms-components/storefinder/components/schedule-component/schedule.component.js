/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<ng-content></ng-content>\n<div class=\"container cx-store-hours\" *ngIf=\"location.openingHours\">\n  <div *ngFor=\"let day of displayDays\" class=\"row\">\n    <div class=\"cx-days col-4\">{{ day | cxDate: 'EEE' }}</div>\n    <div *ngIf=\"getStoreOpeningTime(day) !== 'closed'\" class=\"cx-hours col-8\">\n      {{ getStoreOpeningTime(day) }} -\n      {{ getStoreClosingTime(day) }}\n    </div>\n    <div\n      *ngIf=\"getStoreOpeningTime(day) === 'closed'\"\n      class=\"cx-hours col-8 closed\"\n    >\n      {{ 'storeFinder.closed' | cxTranslate }}\n    </div>\n  </div>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zY2hlZHVsZS1jb21wb25lbnQvc2NoZWR1bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBRTdDLGdCQUFnQixHQUFHLENBQUM7QUFFMUI7SUFTRSwyQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFGdEQsZ0JBQVcsR0FBVyxJQUFJLENBQUM7SUFFOEIsQ0FBQzs7Ozs7SUFFMUQsdUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFOztnQkFDL0IsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFFdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixFQUFFLENBQUMsRUFBRSxFQUFFOztvQkFDbkMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCwrQ0FBbUI7Ozs7O0lBQW5CLFVBQW9CLElBQVU7UUFDNUIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCwrQ0FBbUI7Ozs7O0lBQW5CLFVBQW9CLElBQVU7UUFDNUIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNLLDBDQUFjOzs7OztJQUF0Qjs7WUFDUSxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDOUIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFbEUsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7Z0JBaERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsdWxCQUF3QztpQkFDekM7Ozs7Z0JBUFEsZ0JBQWdCOzs7MkJBU3RCLEtBQUs7O0lBNENSLHdCQUFDO0NBQUEsQUFqREQsSUFpREM7U0E3Q1ksaUJBQWlCOzs7SUFDNUIscUNBQ2M7O0lBQ2Qsd0NBQTJCOzs7OztJQUVmLDZDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVEYXRhU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmNvbnN0IFdFRUtfREFZU19OVU1CRVIgPSA3O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zY2hlZHVsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zY2hlZHVsZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgbG9jYXRpb246IGFueTtcbiAgZGlzcGxheURheXM6IERhdGVbXSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZURhdGFTZXJ2aWNlOiBTdG9yZURhdGFTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5sb2NhdGlvbiAmJiB0aGlzLmxvY2F0aW9uKSB7XG4gICAgICBjb25zdCBpbml0aWFsRGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbERhdGUoKTtcbiAgICAgIHRoaXMuZGlzcGxheURheXMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBXRUVLX0RBWVNfTlVNQkVSOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGluaXRpYWxEYXRlLnZhbHVlT2YoKSk7XG4gICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGkpO1xuICAgICAgICB0aGlzLmRpc3BsYXlEYXlzLnB1c2goZGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHN0b3JlJ3Mgb3BlbmluZyB0aW1lIGZvciB0aGUgZ2l2ZW4gZGF0ZVxuICAgKiBAcGFyYW0gZGF0ZSBkYXRlXG4gICAqL1xuICBnZXRTdG9yZU9wZW5pbmdUaW1lKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVPcGVuaW5nVGltZSh0aGlzLmxvY2F0aW9uLCBkYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzdG9yZSdzIGNsb3NpbmcgdGltZSBmb3IgdGhlIGdpdmVuIGRhdGVcbiAgICogQHBhcmFtIGRhdGUgZGF0ZVxuICAgKi9cbiAgZ2V0U3RvcmVDbG9zaW5nVGltZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmdldFN0b3JlQ2xvc2luZ1RpbWUodGhpcy5sb2NhdGlvbiwgZGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJuIGluaXRpYWwgKGZpcnN0KSBkYXRlIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgc2NoZWR1bGVcbiAgICovXG4gIHByaXZhdGUgZ2V0SW5pdGlhbERhdGUoKTogRGF0ZSB7XG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGN1cnJlbnREYXRlLnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpIC0gY3VycmVudERhdGUuZ2V0RGF5KCkpO1xuXG4gICAgcmV0dXJuIGN1cnJlbnREYXRlO1xuICB9XG59XG4iXX0=