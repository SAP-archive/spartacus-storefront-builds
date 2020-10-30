import { BaseFocusService } from '../base/base-focus.service';
import { PersistFocusConfig } from '../keyboard-focus.model';
/**
 * Shared service to persist the focus for an element or a group
 * of elements. The persisted element focus can be used to persist
 * the focus for a DOM tree, so that the focus remains after a repaint
 * or reoccurs when a DOM tree is "unlocked".
 */
import * as ɵngcc0 from '@angular/core';
export declare class PersistFocusService extends BaseFocusService {
    protected focus: Map<string, string>;
    get(group?: string): string;
    /**
     * Persist the keyboard focus state for the given key. The focus is stored globally
     * or for the given group.
     */
    set(key: string, group?: string): void;
    /**
     * Clears the persisted keyboard focus state globally or for the given group.
     */
    clear(group?: string): void;
    /**
     * Returns the group for the host element based on the configured group or
     * by the `data-cx-focus-group` attribute stored on the host.
     */
    getPersistenceGroup(host: HTMLElement, config?: PersistFocusConfig): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PersistFocusService, never>;
}

//# sourceMappingURL=persist-focus.service.d.ts.map