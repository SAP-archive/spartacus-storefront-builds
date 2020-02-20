import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { StoreDataService } from '@spartacus/core';
var WEEK_DAYS_NUMBER = 7;
var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(storeDataService) {
        this.storeDataService = storeDataService;
        this.displayDays = null;
    }
    ScheduleComponent.prototype.ngOnChanges = function (changes) {
        if (changes.location && this.location) {
            var initialDate = this.getInitialDate();
            this.displayDays = [];
            for (var i = 0; i < WEEK_DAYS_NUMBER; i++) {
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
    ScheduleComponent.prototype.getStoreOpeningTime = function (date) {
        return this.storeDataService.getStoreOpeningTime(this.location, date);
    };
    /**
     * Returns the store's closing time for the given date
     * @param date date
     */
    ScheduleComponent.prototype.getStoreClosingTime = function (date) {
        return this.storeDataService.getStoreClosingTime(this.location, date);
    };
    /**
     * return initial (first) date to be displayed in the schedule
     */
    ScheduleComponent.prototype.getInitialDate = function () {
        var currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - currentDate.getDay());
        return currentDate;
    };
    ScheduleComponent.ctorParameters = function () { return [
        { type: StoreDataService }
    ]; };
    __decorate([
        Input()
    ], ScheduleComponent.prototype, "location", void 0);
    ScheduleComponent = __decorate([
        Component({
            selector: 'cx-schedule',
            template: "<ng-content></ng-content>\n<div class=\"container cx-store-hours\" *ngIf=\"location.openingHours\">\n  <div *ngFor=\"let day of displayDays\" class=\"row\">\n    <div class=\"cx-days col-4\">{{ day | cxDate: 'EEE' }}</div>\n    <div *ngIf=\"getStoreOpeningTime(day) !== 'closed'\" class=\"cx-hours col-8\">\n      {{ getStoreOpeningTime(day) }} -\n      {{ getStoreClosingTime(day) }}\n    </div>\n    <div\n      *ngIf=\"getStoreOpeningTime(day) === 'closed'\"\n      class=\"cx-hours col-8 closed\"\n    >\n      {{ 'storeFinder.closed' | cxTranslate }}\n    </div>\n  </div>\n</div>\n"
        })
    ], ScheduleComponent);
    return ScheduleComponent;
}());
export { ScheduleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zY2hlZHVsZS1jb21wb25lbnQvc2NoZWR1bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbkQsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUFNM0I7SUFLRSwyQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFGdEQsZ0JBQVcsR0FBVyxJQUFJLENBQUM7SUFFOEIsQ0FBQztJQUUxRCx1Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDckMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBRXRCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekMsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3QjtTQUNGO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILCtDQUFtQixHQUFuQixVQUFvQixJQUFVO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOzs7T0FHRztJQUNILCtDQUFtQixHQUFuQixVQUFvQixJQUFVO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOztPQUVHO0lBQ0ssMENBQWMsR0FBdEI7UUFDRSxJQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQy9CLFdBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBRWxFLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7O2dCQXZDcUMsZ0JBQWdCOztJQUh0RDtRQURDLEtBQUssRUFBRTt1REFDTTtJQUZILGlCQUFpQjtRQUo3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2Qix1bEJBQXdDO1NBQ3pDLENBQUM7T0FDVyxpQkFBaUIsQ0E2QzdCO0lBQUQsd0JBQUM7Q0FBQSxBQTdDRCxJQTZDQztTQTdDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlRGF0YVNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5jb25zdCBXRUVLX0RBWVNfTlVNQkVSID0gNztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc2NoZWR1bGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2NoZWR1bGUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIGxvY2F0aW9uOiBhbnk7XG4gIGRpc3BsYXlEYXlzOiBEYXRlW10gPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmVEYXRhU2VydmljZTogU3RvcmVEYXRhU2VydmljZSkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubG9jYXRpb24gJiYgdGhpcy5sb2NhdGlvbikge1xuICAgICAgY29uc3QgaW5pdGlhbERhdGUgPSB0aGlzLmdldEluaXRpYWxEYXRlKCk7XG4gICAgICB0aGlzLmRpc3BsYXlEYXlzID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgV0VFS19EQVlTX05VTUJFUjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShpbml0aWFsRGF0ZS52YWx1ZU9mKCkpO1xuICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBpKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5RGF5cy5wdXNoKGRhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzdG9yZSdzIG9wZW5pbmcgdGltZSBmb3IgdGhlIGdpdmVuIGRhdGVcbiAgICogQHBhcmFtIGRhdGUgZGF0ZVxuICAgKi9cbiAgZ2V0U3RvcmVPcGVuaW5nVGltZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmdldFN0b3JlT3BlbmluZ1RpbWUodGhpcy5sb2NhdGlvbiwgZGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3RvcmUncyBjbG9zaW5nIHRpbWUgZm9yIHRoZSBnaXZlbiBkYXRlXG4gICAqIEBwYXJhbSBkYXRlIGRhdGVcbiAgICovXG4gIGdldFN0b3JlQ2xvc2luZ1RpbWUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmVEYXRhU2VydmljZS5nZXRTdG9yZUNsb3NpbmdUaW1lKHRoaXMubG9jYXRpb24sIGRhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiBpbml0aWFsIChmaXJzdCkgZGF0ZSB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHNjaGVkdWxlXG4gICAqL1xuICBwcml2YXRlIGdldEluaXRpYWxEYXRlKCk6IERhdGUge1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBjdXJyZW50RGF0ZS5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSAtIGN1cnJlbnREYXRlLmdldERheSgpKTtcblxuICAgIHJldHVybiBjdXJyZW50RGF0ZTtcbiAgfVxufVxuIl19