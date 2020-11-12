import { ElementRef, Renderer2 } from '@angular/core';
import { FocusConfig } from './keyboard-focus.model';
import { LockFocusDirective } from './lock/lock-focus.directive';
import { KeyboardFocusService } from './services/keyboard-focus.service';
import * as ɵngcc0 from '@angular/core';
export declare class FocusDirective extends LockFocusDirective {
    protected elementRef: ElementRef;
    protected service: KeyboardFocusService;
    protected renderer: Renderer2;
    protected defaultConfig: FocusConfig;
    protected config: FocusConfig;
    constructor(elementRef: ElementRef, service: KeyboardFocusService, renderer: Renderer2);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FocusDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<FocusDirective, "[cxFocus]", never, { "config": "cxFocus"; }, {}, never>;
}

//# sourceMappingURL=focus.directive.d.ts.map