import { OnChanges, SimpleChanges } from '@angular/core';
import { StoreDataService } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class ScheduleComponent implements OnChanges {
    private storeDataService;
    location: any;
    displayDays: Date[];
    constructor(storeDataService: StoreDataService);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Returns the store's opening time for the given date
     * @param date date
     */
    getStoreOpeningTime(date: Date): string;
    /**
     * Returns the store's closing time for the given date
     * @param date date
     */
    getStoreClosingTime(date: Date): string;
    /**
     * return initial (first) date to be displayed in the schedule
     */
    private getInitialDate;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ScheduleComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ScheduleComponent, "cx-schedule", never, {
    "location": "location";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInNjaGVkdWxlLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZURhdGFTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNjaGVkdWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBwcml2YXRlIHN0b3JlRGF0YVNlcnZpY2U7XG4gICAgbG9jYXRpb246IGFueTtcbiAgICBkaXNwbGF5RGF5czogRGF0ZVtdO1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlRGF0YVNlcnZpY2U6IFN0b3JlRGF0YVNlcnZpY2UpO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHN0b3JlJ3Mgb3BlbmluZyB0aW1lIGZvciB0aGUgZ2l2ZW4gZGF0ZVxuICAgICAqIEBwYXJhbSBkYXRlIGRhdGVcbiAgICAgKi9cbiAgICBnZXRTdG9yZU9wZW5pbmdUaW1lKGRhdGU6IERhdGUpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc3RvcmUncyBjbG9zaW5nIHRpbWUgZm9yIHRoZSBnaXZlbiBkYXRlXG4gICAgICogQHBhcmFtIGRhdGUgZGF0ZVxuICAgICAqL1xuICAgIGdldFN0b3JlQ2xvc2luZ1RpbWUoZGF0ZTogRGF0ZSk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiByZXR1cm4gaW5pdGlhbCAoZmlyc3QpIGRhdGUgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBzY2hlZHVsZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0SW5pdGlhbERhdGU7XG59XG4iXX0=