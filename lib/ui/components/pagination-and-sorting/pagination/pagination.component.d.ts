import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { EventEmitter } from '@angular/core';
import { PaginationModel } from '@spartacus/core';
export declare class PaginationComponent implements OnInit {
    pagination: PaginationModel;
    viewPageEvent: EventEmitter<number>;
    constructor();
    ngOnInit(): void;
    pageChange(page: number): void;
}
