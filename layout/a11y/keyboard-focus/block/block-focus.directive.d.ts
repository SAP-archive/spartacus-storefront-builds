import { ElementRef, OnInit } from '@angular/core';
import { BaseFocusService } from '../base/base-focus.service';
import { BlockFocusConfig } from '../keyboard-focus.model';
import { VisibleFocusDirective } from '../visible/visible-focus.directive';
import * as ɵngcc0 from '@angular/core';
export declare class BlockFocusDirective extends VisibleFocusDirective implements OnInit {
    protected elementRef: ElementRef;
    protected service: BaseFocusService;
    protected defaultConfig: BlockFocusConfig;
    protected config: BlockFocusConfig;
    constructor(elementRef: ElementRef, service: BaseFocusService);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BlockFocusDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<BlockFocusDirective, never, never, {}, {}, never>;
}

//# sourceMappingURL=block-focus.directive.d.ts.map