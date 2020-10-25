import { OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { FeatureConfigService } from '@spartacus/core';
import { OutletPosition } from '../outlet.model';
import { OutletService } from '../outlet.service';
export declare class OutletRefDirective implements OnInit, OnDestroy {
    private tpl;
    private outletService;
    private features?;
    cxOutletRef: string;
    cxOutletPos: OutletPosition;
    /**
     * @deprecated since 2.1, see #8201
     */
    constructor(tpl: TemplateRef<any>, outletService: OutletService);
    constructor(tpl: TemplateRef<any>, outletService: OutletService, features: FeatureConfigService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
