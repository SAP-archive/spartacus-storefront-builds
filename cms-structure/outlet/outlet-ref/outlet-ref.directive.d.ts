import { TemplateRef, OnInit } from '@angular/core';
import { OutletPosition } from '../outlet.model';
import { OutletService } from '../outlet.service';
import * as ɵngcc0 from '@angular/core';
export declare class OutletRefDirective implements OnInit {
    private tpl;
    private outletService;
    cxOutletRef: string;
    cxOutletPos: OutletPosition;
    constructor(tpl: TemplateRef<any>, outletService: OutletService);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OutletRefDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<OutletRefDirective, "[cxOutletRef]", never, {
    "cxOutletRef": "cxOutletRef";
    "cxOutletPos": "cxOutletPos";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlZi5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsib3V0bGV0LXJlZi5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7QUFPQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXRQb3NpdGlvbiB9IGZyb20gJy4uL291dGxldC5tb2RlbCc7XG5pbXBvcnQgeyBPdXRsZXRTZXJ2aWNlIH0gZnJvbSAnLi4vb3V0bGV0LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3V0bGV0UmVmRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIHRwbDtcbiAgICBwcml2YXRlIG91dGxldFNlcnZpY2U7XG4gICAgY3hPdXRsZXRSZWY6IHN0cmluZztcbiAgICBjeE91dGxldFBvczogT3V0bGV0UG9zaXRpb247XG4gICAgY29uc3RydWN0b3IodHBsOiBUZW1wbGF0ZVJlZjxhbnk+LCBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xufVxuIl19