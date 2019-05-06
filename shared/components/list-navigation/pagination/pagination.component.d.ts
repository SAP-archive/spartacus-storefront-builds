import { EventEmitter } from '@angular/core';
import { PaginationModel } from '@spartacus/core';
export declare class PaginationComponent {
    pagination: PaginationModel;
    viewPageEvent: EventEmitter<number>;
    pageChange(page: number): void;
}
