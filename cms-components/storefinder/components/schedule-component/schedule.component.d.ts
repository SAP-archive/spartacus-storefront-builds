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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ScheduleComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ScheduleComponent, "cx-schedule", never, { "location": "location"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=schedule.component.d.ts.map