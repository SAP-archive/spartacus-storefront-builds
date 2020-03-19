import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { BlockFocusDirective } from '../block/block-focus.directive';
import { PersistFocusConfig } from '../keyboard-focus.model';
import { PersistFocusService } from './persist-focus.service';
/**
 * Directive that provides persistence of the focused state. This is useful
 * when a group of focusable elements got refocused or even recreated. That
 * happens often when the DOM is constructed with an `*ngIf` or `*ngFor`.
 *
 * The focus state is based on a configured _key_, which can be passed in the
 * config input, either by using a string primitive or `PersistFocusConfig.key`:
 *
 * ```html
 * <button cxPersistFocus="myKey"></button>
 * <button cxFocus="myKey"></button>
 * <button [cxFocus]="{{key:'myKey'}"></button>
 * ```
 *
 * The focus state can be part of a focus _group_, so that the state is shared
 * and remember for the given group. In order to detect the persistence for a
 * given element, we store the persistence key as a data attribute (`data-cx-focus`):
 *
 * ```html
 * <button data-cx-focus="myKey"></button>
 * ```
 *
 * Other keyboard focus directives can read the key to understand whether the element
 * should retrieve focus.
 *
 */
import * as ɵngcc0 from '@angular/core';
export declare class PersistFocusDirective extends BlockFocusDirective implements OnInit, AfterViewInit {
    protected elementRef: ElementRef;
    protected service: PersistFocusService;
    protected defaultConfig: PersistFocusConfig;
    /**
     * The persistence key can be passed directly or through the `FocusConfig.key`.
     * While this could be considered a global key, the likeliness of conflicts
     * is very small since the key is cleared when the focus is changed.
     */
    protected config: PersistFocusConfig;
    /**
     * The persistance key is maintained in an element attribute for other
     * implementations. This is needed to ensure that we can resolve the focus
     * state in case of a repaint.
     */
    attr: string;
    /**
     * The persistence key is maintained in a singleton cross the app to ensure we
     * can reset the focus if the DOM gets rebuild.
     */
    handleFocus(event?: KeyboardEvent): void;
    constructor(elementRef: ElementRef, service: PersistFocusService);
    ngOnInit(): void;
    protected setDefaultConfiguration(): void;
    /**
     * Focus the element explicitly if it was focused before.
     */
    ngAfterViewInit(): void;
    protected get isPersisted(): boolean;
    /**
     * Returns the key for the host element, which is used to persist the
     * focus state. This is useful in cases where the DOM is rebuild.
     */
    protected get key(): string;
    /**
     * returns the persistence group (if any) for the focusable elements.
     */
    protected get group(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PersistFocusDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<PersistFocusDirective, "[cxPersistFocus]", never, {
    "config": "cxPersistFocus";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1mb2N1cy5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsicGVyc2lzdC1mb2N1cy5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCbG9ja0ZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi4vYmxvY2svYmxvY2stZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFBlcnNpc3RGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IFBlcnNpc3RGb2N1c1NlcnZpY2UgfSBmcm9tICcuL3BlcnNpc3QtZm9jdXMuc2VydmljZSc7XG4vKipcbiAqIERpcmVjdGl2ZSB0aGF0IHByb3ZpZGVzIHBlcnNpc3RlbmNlIG9mIHRoZSBmb2N1c2VkIHN0YXRlLiBUaGlzIGlzIHVzZWZ1bFxuICogd2hlbiBhIGdyb3VwIG9mIGZvY3VzYWJsZSBlbGVtZW50cyBnb3QgcmVmb2N1c2VkIG9yIGV2ZW4gcmVjcmVhdGVkLiBUaGF0XG4gKiBoYXBwZW5zIG9mdGVuIHdoZW4gdGhlIERPTSBpcyBjb25zdHJ1Y3RlZCB3aXRoIGFuIGAqbmdJZmAgb3IgYCpuZ0ZvcmAuXG4gKlxuICogVGhlIGZvY3VzIHN0YXRlIGlzIGJhc2VkIG9uIGEgY29uZmlndXJlZCBfa2V5Xywgd2hpY2ggY2FuIGJlIHBhc3NlZCBpbiB0aGVcbiAqIGNvbmZpZyBpbnB1dCwgZWl0aGVyIGJ5IHVzaW5nIGEgc3RyaW5nIHByaW1pdGl2ZSBvciBgUGVyc2lzdEZvY3VzQ29uZmlnLmtleWA6XG4gKlxuICogYGBgaHRtbFxuICogPGJ1dHRvbiBjeFBlcnNpc3RGb2N1cz1cIm15S2V5XCI+PC9idXR0b24+XG4gKiA8YnV0dG9uIGN4Rm9jdXM9XCJteUtleVwiPjwvYnV0dG9uPlxuICogPGJ1dHRvbiBbY3hGb2N1c109XCJ7e2tleTonbXlLZXknfVwiPjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogVGhlIGZvY3VzIHN0YXRlIGNhbiBiZSBwYXJ0IG9mIGEgZm9jdXMgX2dyb3VwXywgc28gdGhhdCB0aGUgc3RhdGUgaXMgc2hhcmVkXG4gKiBhbmQgcmVtZW1iZXIgZm9yIHRoZSBnaXZlbiBncm91cC4gSW4gb3JkZXIgdG8gZGV0ZWN0IHRoZSBwZXJzaXN0ZW5jZSBmb3IgYVxuICogZ2l2ZW4gZWxlbWVudCwgd2Ugc3RvcmUgdGhlIHBlcnNpc3RlbmNlIGtleSBhcyBhIGRhdGEgYXR0cmlidXRlIChgZGF0YS1jeC1mb2N1c2ApOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gZGF0YS1jeC1mb2N1cz1cIm15S2V5XCI+PC9idXR0b24+XG4gKiBgYGBcbiAqXG4gKiBPdGhlciBrZXlib2FyZCBmb2N1cyBkaXJlY3RpdmVzIGNhbiByZWFkIHRoZSBrZXkgdG8gdW5kZXJzdGFuZCB3aGV0aGVyIHRoZSBlbGVtZW50XG4gKiBzaG91bGQgcmV0cmlldmUgZm9jdXMuXG4gKlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQZXJzaXN0Rm9jdXNEaXJlY3RpdmUgZXh0ZW5kcyBCbG9ja0ZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogUGVyc2lzdEZvY3VzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogUGVyc2lzdEZvY3VzQ29uZmlnO1xuICAgIC8qKlxuICAgICAqIFRoZSBwZXJzaXN0ZW5jZSBrZXkgY2FuIGJlIHBhc3NlZCBkaXJlY3RseSBvciB0aHJvdWdoIHRoZSBgRm9jdXNDb25maWcua2V5YC5cbiAgICAgKiBXaGlsZSB0aGlzIGNvdWxkIGJlIGNvbnNpZGVyZWQgYSBnbG9iYWwga2V5LCB0aGUgbGlrZWxpbmVzcyBvZiBjb25mbGljdHNcbiAgICAgKiBpcyB2ZXJ5IHNtYWxsIHNpbmNlIHRoZSBrZXkgaXMgY2xlYXJlZCB3aGVuIHRoZSBmb2N1cyBpcyBjaGFuZ2VkLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjb25maWc6IFBlcnNpc3RGb2N1c0NvbmZpZztcbiAgICAvKipcbiAgICAgKiBUaGUgcGVyc2lzdGFuY2Uga2V5IGlzIG1haW50YWluZWQgaW4gYW4gZWxlbWVudCBhdHRyaWJ1dGUgZm9yIG90aGVyXG4gICAgICogaW1wbGVtZW50YXRpb25zLiBUaGlzIGlzIG5lZWRlZCB0byBlbnN1cmUgdGhhdCB3ZSBjYW4gcmVzb2x2ZSB0aGUgZm9jdXNcbiAgICAgKiBzdGF0ZSBpbiBjYXNlIG9mIGEgcmVwYWludC5cbiAgICAgKi9cbiAgICBhdHRyOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHBlcnNpc3RlbmNlIGtleSBpcyBtYWludGFpbmVkIGluIGEgc2luZ2xldG9uIGNyb3NzIHRoZSBhcHAgdG8gZW5zdXJlIHdlXG4gICAgICogY2FuIHJlc2V0IHRoZSBmb2N1cyBpZiB0aGUgRE9NIGdldHMgcmVidWlsZC5cbiAgICAgKi9cbiAgICBoYW5kbGVGb2N1cyhldmVudD86IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHNlcnZpY2U6IFBlcnNpc3RGb2N1c1NlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRDb25maWd1cmF0aW9uKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogRm9jdXMgdGhlIGVsZW1lbnQgZXhwbGljaXRseSBpZiBpdCB3YXMgZm9jdXNlZCBiZWZvcmUuXG4gICAgICovXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGdldCBpc1BlcnNpc3RlZCgpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGtleSBmb3IgdGhlIGhvc3QgZWxlbWVudCwgd2hpY2ggaXMgdXNlZCB0byBwZXJzaXN0IHRoZVxuICAgICAqIGZvY3VzIHN0YXRlLiBUaGlzIGlzIHVzZWZ1bCBpbiBjYXNlcyB3aGVyZSB0aGUgRE9NIGlzIHJlYnVpbGQuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldCBrZXkoKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIHJldHVybnMgdGhlIHBlcnNpc3RlbmNlIGdyb3VwIChpZiBhbnkpIGZvciB0aGUgZm9jdXNhYmxlIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXQgZ3JvdXAoKTogc3RyaW5nO1xufVxuIl19