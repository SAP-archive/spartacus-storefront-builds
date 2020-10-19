import { ElementRef } from '@angular/core';
import { AutoFocusDirective } from '../autofocus/auto-focus.directive';
import { TabFocusConfig } from '../keyboard-focus.model';
import { TabFocusService } from './tab-focus.service';
/**
 * Directive to move the focus of ("locked") child elements. This is useful
 * for a nested list of tabs, carousel slides or any group of elements that
 * requires horizontal navigation.
 */
import * as ɵngcc0 from '@angular/core';
export declare class TabFocusDirective extends AutoFocusDirective {
    protected elementRef: ElementRef;
    protected service: TabFocusService;
    /** `tab` defaults to true if the directive `cxTabFocus` is used. */
    protected defaultConfig: TabFocusConfig;
    protected config: TabFocusConfig;
    handleNextTab(event: KeyboardEvent): void;
    handlePreviousTab(event: KeyboardEvent): void;
    constructor(elementRef: ElementRef, service: TabFocusService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TabFocusDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<TabFocusDirective, never, never, {}, {}, never>;
}

//# sourceMappingURL=tab-focus.directive.d.ts.map