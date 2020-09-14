import { OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { FeatureConfigService } from '@spartacus/core';
import { OutletPosition } from '../outlet.model';
import { OutletService } from '../outlet.service';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OutletRefDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<OutletRefDirective, "[cxOutletRef]", never, { "cxOutletRef": "cxOutletRef"; "cxOutletPos": "cxOutletPos"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlZi5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsib3V0bGV0LXJlZi5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FBYUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE91dGxldFBvc2l0aW9uIH0gZnJvbSAnLi4vb3V0bGV0Lm1vZGVsJztcbmltcG9ydCB7IE91dGxldFNlcnZpY2UgfSBmcm9tICcuLi9vdXRsZXQuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPdXRsZXRSZWZEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSB0cGw7XG4gICAgcHJpdmF0ZSBvdXRsZXRTZXJ2aWNlO1xuICAgIHByaXZhdGUgZmVhdHVyZXM/O1xuICAgIGN4T3V0bGV0UmVmOiBzdHJpbmc7XG4gICAgY3hPdXRsZXRQb3M6IE91dGxldFBvc2l0aW9uO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIDIuMSwgc2VlICM4MjAxXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodHBsOiBUZW1wbGF0ZVJlZjxhbnk+LCBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlKTtcbiAgICBjb25zdHJ1Y3Rvcih0cGw6IFRlbXBsYXRlUmVmPGFueT4sIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2UsIGZlYXR1cmVzOiBGZWF0dXJlQ29uZmlnU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19