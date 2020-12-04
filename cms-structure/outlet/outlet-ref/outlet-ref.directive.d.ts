import { OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { OutletPosition } from '../outlet.model';
import { OutletService } from '../outlet.service';
import * as ɵngcc0 from '@angular/core';
export declare class OutletRefDirective implements OnInit, OnDestroy {
    private tpl;
    private outletService;
    cxOutletRef: string;
    cxOutletPos: OutletPosition;
    constructor(tpl: TemplateRef<any>, outletService: OutletService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OutletRefDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<OutletRefDirective, "[cxOutletRef]", never, { "cxOutletRef": "cxOutletRef"; "cxOutletPos": "cxOutletPos"; }, {}, never>;
}

//# sourceMappingURL=outlet-ref.directive.d.ts.map