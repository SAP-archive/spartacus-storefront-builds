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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInNjaGVkdWxlLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVEYXRhU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTY2hlZHVsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgcHJpdmF0ZSBzdG9yZURhdGFTZXJ2aWNlO1xuICAgIGxvY2F0aW9uOiBhbnk7XG4gICAgZGlzcGxheURheXM6IERhdGVbXTtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZURhdGFTZXJ2aWNlOiBTdG9yZURhdGFTZXJ2aWNlKTtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzdG9yZSdzIG9wZW5pbmcgdGltZSBmb3IgdGhlIGdpdmVuIGRhdGVcbiAgICAgKiBAcGFyYW0gZGF0ZSBkYXRlXG4gICAgICovXG4gICAgZ2V0U3RvcmVPcGVuaW5nVGltZShkYXRlOiBEYXRlKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHN0b3JlJ3MgY2xvc2luZyB0aW1lIGZvciB0aGUgZ2l2ZW4gZGF0ZVxuICAgICAqIEBwYXJhbSBkYXRlIGRhdGVcbiAgICAgKi9cbiAgICBnZXRTdG9yZUNsb3NpbmdUaW1lKGRhdGU6IERhdGUpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogcmV0dXJuIGluaXRpYWwgKGZpcnN0KSBkYXRlIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgc2NoZWR1bGVcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldEluaXRpYWxEYXRlO1xufVxuIl19