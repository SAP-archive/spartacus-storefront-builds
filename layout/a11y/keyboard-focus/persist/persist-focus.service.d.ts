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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1mb2N1cy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInBlcnNpc3QtZm9jdXMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUZvY3VzU2VydmljZSB9IGZyb20gJy4uL2Jhc2UvYmFzZS1mb2N1cy5zZXJ2aWNlJztcbmltcG9ydCB7IFBlcnNpc3RGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbi8qKlxuICogU2hhcmVkIHNlcnZpY2UgdG8gcGVyc2lzdCB0aGUgZm9jdXMgZm9yIGFuIGVsZW1lbnQgb3IgYSBncm91cFxuICogb2YgZWxlbWVudHMuIFRoZSBwZXJzaXN0ZWQgZWxlbWVudCBmb2N1cyBjYW4gYmUgdXNlZCB0byBwZXJzaXN0XG4gKiB0aGUgZm9jdXMgZm9yIGEgRE9NIHRyZWUsIHNvIHRoYXQgdGhlIGZvY3VzIHJlbWFpbnMgYWZ0ZXIgYSByZXBhaW50XG4gKiBvciByZW9jY3VycyB3aGVuIGEgRE9NIHRyZWUgaXMgXCJ1bmxvY2tlZFwiLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQZXJzaXN0Rm9jdXNTZXJ2aWNlIGV4dGVuZHMgQmFzZUZvY3VzU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGZvY3VzOiBNYXA8c3RyaW5nLCBzdHJpbmc+O1xuICAgIGdldChncm91cD86IHN0cmluZyk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBQZXJzaXN0IHRoZSBrZXlib2FyZCBmb2N1cyBzdGF0ZSBmb3IgdGhlIGdpdmVuIGtleS4gVGhlIGZvY3VzIGlzIHN0b3JlZCBnbG9iYWxseVxuICAgICAqIG9yIGZvciB0aGUgZ2l2ZW4gZ3JvdXAuXG4gICAgICovXG4gICAgc2V0KGtleTogc3RyaW5nLCBncm91cD86IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBwZXJzaXN0ZWQga2V5Ym9hcmQgZm9jdXMgc3RhdGUgZ2xvYmFsbHkgb3IgZm9yIHRoZSBnaXZlbiBncm91cC5cbiAgICAgKi9cbiAgICBjbGVhcihncm91cD86IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZ3JvdXAgZm9yIHRoZSBob3N0IGVsZW1lbnQgYmFzZWQgb24gdGhlIGNvbmZpZ3VyZWQgZ3JvdXAgb3JcbiAgICAgKiBieSB0aGUgYGRhdGEtY3gtZm9jdXMtZ3JvdXBgIGF0dHJpYnV0ZSBzdG9yZWQgb24gdGhlIGhvc3QuXG4gICAgICovXG4gICAgZ2V0UGVyc2lzdGVuY2VHcm91cChob3N0OiBIVE1MRWxlbWVudCwgY29uZmlnPzogUGVyc2lzdEZvY3VzQ29uZmlnKTogc3RyaW5nO1xufVxuIl19