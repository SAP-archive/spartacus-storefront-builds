import { OnChanges, SimpleChanges } from '@angular/core';
import { StoreDataService } from '@spartacus/core';
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
}
