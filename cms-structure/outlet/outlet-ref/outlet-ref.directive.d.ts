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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlZi5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsib3V0bGV0LXJlZi5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7QUFPQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE91dGxldFBvc2l0aW9uIH0gZnJvbSAnLi4vb3V0bGV0Lm1vZGVsJztcbmltcG9ydCB7IE91dGxldFNlcnZpY2UgfSBmcm9tICcuLi9vdXRsZXQuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPdXRsZXRSZWZEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgdHBsO1xuICAgIHByaXZhdGUgb3V0bGV0U2VydmljZTtcbiAgICBjeE91dGxldFJlZjogc3RyaW5nO1xuICAgIGN4T3V0bGV0UG9zOiBPdXRsZXRQb3NpdGlvbjtcbiAgICBjb25zdHJ1Y3Rvcih0cGw6IFRlbXBsYXRlUmVmPGFueT4sIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG59XG4iXX0=