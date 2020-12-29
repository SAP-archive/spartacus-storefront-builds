import { EscapeFocusService } from '../escape/escape-focus.service';
import { AutoFocusConfig, PersistFocusConfig } from '../keyboard-focus.model';
import * as ɵngcc0 from '@angular/core';
export declare class AutoFocusService extends EscapeFocusService {
    /**
     * Returns the first focusable child element of the host element.
     */
    findFirstFocusable(host: HTMLElement, config?: AutoFocusConfig): HTMLElement;
    /**
     * Indicates whether any of the focusabe child elements is focused.
     */
    hasPersistedFocus(host: HTMLElement, config: PersistFocusConfig): boolean;
    /**
     * Returns the element that has a persisted focus state.
     *
     * @param host the `HTMLElement` used to query for focusable children
     * @param group the optional group for the persistent state, to separate different focus
     *   groups and remain the persistence
     */
    protected getPersisted(host: HTMLElement, group?: string): HTMLElement;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AutoFocusService, never>;
}

//# sourceMappingURL=auto-focus.service.d.ts.map