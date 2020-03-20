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
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<PersistFocusDirective, never, never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1mb2N1cy5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsicGVyc2lzdC1mb2N1cy5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmxvY2tGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4uL2Jsb2NrL2Jsb2NrLWZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQZXJzaXN0Rm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBQZXJzaXN0Rm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi9wZXJzaXN0LWZvY3VzLnNlcnZpY2UnO1xuLyoqXG4gKiBEaXJlY3RpdmUgdGhhdCBwcm92aWRlcyBwZXJzaXN0ZW5jZSBvZiB0aGUgZm9jdXNlZCBzdGF0ZS4gVGhpcyBpcyB1c2VmdWxcbiAqIHdoZW4gYSBncm91cCBvZiBmb2N1c2FibGUgZWxlbWVudHMgZ290IHJlZm9jdXNlZCBvciBldmVuIHJlY3JlYXRlZC4gVGhhdFxuICogaGFwcGVucyBvZnRlbiB3aGVuIHRoZSBET00gaXMgY29uc3RydWN0ZWQgd2l0aCBhbiBgKm5nSWZgIG9yIGAqbmdGb3JgLlxuICpcbiAqIFRoZSBmb2N1cyBzdGF0ZSBpcyBiYXNlZCBvbiBhIGNvbmZpZ3VyZWQgX2tleV8sIHdoaWNoIGNhbiBiZSBwYXNzZWQgaW4gdGhlXG4gKiBjb25maWcgaW5wdXQsIGVpdGhlciBieSB1c2luZyBhIHN0cmluZyBwcmltaXRpdmUgb3IgYFBlcnNpc3RGb2N1c0NvbmZpZy5rZXlgOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gY3hQZXJzaXN0Rm9jdXM9XCJteUtleVwiPjwvYnV0dG9uPlxuICogPGJ1dHRvbiBjeEZvY3VzPVwibXlLZXlcIj48L2J1dHRvbj5cbiAqIDxidXR0b24gW2N4Rm9jdXNdPVwie3trZXk6J215S2V5J31cIj48L2J1dHRvbj5cbiAqIGBgYFxuICpcbiAqIFRoZSBmb2N1cyBzdGF0ZSBjYW4gYmUgcGFydCBvZiBhIGZvY3VzIF9ncm91cF8sIHNvIHRoYXQgdGhlIHN0YXRlIGlzIHNoYXJlZFxuICogYW5kIHJlbWVtYmVyIGZvciB0aGUgZ2l2ZW4gZ3JvdXAuIEluIG9yZGVyIHRvIGRldGVjdCB0aGUgcGVyc2lzdGVuY2UgZm9yIGFcbiAqIGdpdmVuIGVsZW1lbnQsIHdlIHN0b3JlIHRoZSBwZXJzaXN0ZW5jZSBrZXkgYXMgYSBkYXRhIGF0dHJpYnV0ZSAoYGRhdGEtY3gtZm9jdXNgKTpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIGRhdGEtY3gtZm9jdXM9XCJteUtleVwiPjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogT3RoZXIga2V5Ym9hcmQgZm9jdXMgZGlyZWN0aXZlcyBjYW4gcmVhZCB0aGUga2V5IHRvIHVuZGVyc3RhbmQgd2hldGhlciB0aGUgZWxlbWVudFxuICogc2hvdWxkIHJldHJpZXZlIGZvY3VzLlxuICpcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUGVyc2lzdEZvY3VzRGlyZWN0aXZlIGV4dGVuZHMgQmxvY2tGb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IFBlcnNpc3RGb2N1c1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IFBlcnNpc3RGb2N1c0NvbmZpZztcbiAgICAvKipcbiAgICAgKiBUaGUgcGVyc2lzdGVuY2Uga2V5IGNhbiBiZSBwYXNzZWQgZGlyZWN0bHkgb3IgdGhyb3VnaCB0aGUgYEZvY3VzQ29uZmlnLmtleWAuXG4gICAgICogV2hpbGUgdGhpcyBjb3VsZCBiZSBjb25zaWRlcmVkIGEgZ2xvYmFsIGtleSwgdGhlIGxpa2VsaW5lc3Mgb2YgY29uZmxpY3RzXG4gICAgICogaXMgdmVyeSBzbWFsbCBzaW5jZSB0aGUga2V5IGlzIGNsZWFyZWQgd2hlbiB0aGUgZm9jdXMgaXMgY2hhbmdlZC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBQZXJzaXN0Rm9jdXNDb25maWc7XG4gICAgLyoqXG4gICAgICogVGhlIHBlcnNpc3RhbmNlIGtleSBpcyBtYWludGFpbmVkIGluIGFuIGVsZW1lbnQgYXR0cmlidXRlIGZvciBvdGhlclxuICAgICAqIGltcGxlbWVudGF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgdG8gZW5zdXJlIHRoYXQgd2UgY2FuIHJlc29sdmUgdGhlIGZvY3VzXG4gICAgICogc3RhdGUgaW4gY2FzZSBvZiBhIHJlcGFpbnQuXG4gICAgICovXG4gICAgYXR0cjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBwZXJzaXN0ZW5jZSBrZXkgaXMgbWFpbnRhaW5lZCBpbiBhIHNpbmdsZXRvbiBjcm9zcyB0aGUgYXBwIHRvIGVuc3VyZSB3ZVxuICAgICAqIGNhbiByZXNldCB0aGUgZm9jdXMgaWYgdGhlIERPTSBnZXRzIHJlYnVpbGQuXG4gICAgICovXG4gICAgaGFuZGxlRm9jdXMoZXZlbnQ/OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBzZXJ2aWNlOiBQZXJzaXN0Rm9jdXNTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0Q29uZmlndXJhdGlvbigpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEZvY3VzIHRoZSBlbGVtZW50IGV4cGxpY2l0bHkgaWYgaXQgd2FzIGZvY3VzZWQgYmVmb3JlLlxuICAgICAqL1xuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBnZXQgaXNQZXJzaXN0ZWQoKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBrZXkgZm9yIHRoZSBob3N0IGVsZW1lbnQsIHdoaWNoIGlzIHVzZWQgdG8gcGVyc2lzdCB0aGVcbiAgICAgKiBmb2N1cyBzdGF0ZS4gVGhpcyBpcyB1c2VmdWwgaW4gY2FzZXMgd2hlcmUgdGhlIERPTSBpcyByZWJ1aWxkLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXQga2V5KCk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiByZXR1cm5zIHRoZSBwZXJzaXN0ZW5jZSBncm91cCAoaWYgYW55KSBmb3IgdGhlIGZvY3VzYWJsZSBlbGVtZW50cy5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0IGdyb3VwKCk6IHN0cmluZztcbn1cbiJdfQ==