import { OnDestroy, OnInit } from '@angular/core';
import { AsmService } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class AsmToggleUiComponent implements OnInit, OnDestroy {
    protected asmService: AsmService;
    private subscription;
    isCollapsed: boolean;
    constructor(asmService: AsmService);
    ngOnInit(): void;
    toggleUi(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsmToggleUiComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AsmToggleUiComponent, "cx-asm-toggle-ui", never, {}, {}, never, never>;
}

//# sourceMappingURL=asm-toggle-ui.component.d.ts.map