import { ElementRef, Renderer2 } from '@angular/core';
import { FocusConfig } from './keyboard-focus.model';
import { LockFocusDirective } from './lock/lock-focus.directive';
import { KeyboardFocusService } from './services/keyboard-focus.service';
export declare class FocusDirective extends LockFocusDirective {
    protected elementRef: ElementRef;
    protected service: KeyboardFocusService;
    protected renderer: Renderer2;
    protected defaultConfig: FocusConfig;
    protected config: FocusConfig;
    constructor(elementRef: ElementRef, service: KeyboardFocusService, renderer: Renderer2);
}
