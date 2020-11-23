import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { EscapeFocusConfig } from '../keyboard-focus.model';
import { PersistFocusDirective } from '../persist/persist-focus.directive';
import { EscapeFocusService } from './escape-focus.service';
/**
 * Directive to focus the host element whenever the `escape` key is captured.
 * UiEvents bubble up by nature, which is why the `cxEscGroup` can be used
 * on a tree of elements. Each time the escape key is used, the focus will
 * move up in the DOM tree.
 *
 */
import * as ɵngcc0 from '@angular/core';
export declare class EscapeFocusDirective extends PersistFocusDirective implements OnInit {
    protected elementRef: ElementRef;
    protected service: EscapeFocusService;
    protected defaultConfig: EscapeFocusConfig;
    protected config: EscapeFocusConfig;
    esc: EventEmitter<boolean>;
    /**
     * Handles the escape key event.
     * @param event the native keyboard event which contains the escape keydown event
     */
    handleEscape(event: KeyboardEvent): void;
    constructor(elementRef: ElementRef, service: EscapeFocusService);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<EscapeFocusDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<EscapeFocusDirective, never, never, {}, { "esc": "esc"; }, never>;
}

//# sourceMappingURL=escape-focus.directive.d.ts.map