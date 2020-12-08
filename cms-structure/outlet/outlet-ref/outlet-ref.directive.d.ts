import { OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { OutletPosition } from '../outlet.model';
import { OutletService } from '../outlet.service';
export declare class OutletRefDirective implements OnInit, OnDestroy {
    private tpl;
    private outletService;
    cxOutletRef: string;
    cxOutletPos: OutletPosition;
    constructor(tpl: TemplateRef<any>, outletService: OutletService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
