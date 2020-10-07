import { ElementRef, OnInit } from '@angular/core';
import { BaseFocusConfig } from '../keyboard-focus.model';
import { BaseFocusService } from './base-focus.service';
/**
 * Abstract directive that provides a common interface for all focus directives:
 * - Block Focus
 * - Persist Focus
 * - Escape Focus
 * - Auto Focus
 * - Tab Focus
 * - Trap Focus
 * - Lock Focus
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class BaseFocusDirective implements OnInit {
    protected elementRef: ElementRef<HTMLElement>;
    protected service: BaseFocusService;
    /**
     * Optional configuration for the focus directive drives the behaviour of the keyboard
     * focus directive.
     */
    protected config: BaseFocusConfig;
    /**
     * A default config can be provided for each directive if a specific focus directive
     * is used directly. i.e. `<div cxAutoFocus></div>`
     */
    protected defaultConfig: BaseFocusConfig;
    tabindex: number;
    constructor(elementRef: ElementRef<HTMLElement>, service: BaseFocusService);
    ngOnInit(): void;
    /**
     * Override the (input) config if it undefined or an empty string, with the
     * `defaultConfig`. The `defaultConfig` might be specified for each directive
     * differently. If a specific directive is used (i.e. `cxAutoFocus`), the
     * specific (inherited) defaultConfig will be used.
     */
    protected setDefaultConfiguration(): void;
    /**
     * Helper method to return the host element for the directive
     * given by the `elementRef`.
     */
    protected get host(): HTMLElement;
    /**
     * Force a tabindex on the host element if it is _requried_ to make the element
     * focusable. If the element is focusable by nature or by a given tabindex, the
     * `tabindex` is not applied.
     *
     * Buttons, active links, etc. do no need an explicit tabindex to receive focus.
     */
    protected set requiredTabindex(tabindex: number);
    /**
     * Returns true if the host element does not have a tabindex defined
     * and it also doesn't get focus by browsers nature (i.e. button or
     * active link).
     */
    protected get requiresExplicitTabIndex(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseFocusDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<BaseFocusDirective, never, never, { "tabindex": "tabindex"; }, {}, never>;
}

//# sourceMappingURL=base-focus.directive.d.ts.map