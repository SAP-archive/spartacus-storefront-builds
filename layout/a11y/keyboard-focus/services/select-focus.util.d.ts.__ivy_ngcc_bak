import { AutoFocusConfig } from '../keyboard-focus.model';
export declare class SelectFocusUtility {
    /**
     * Query selectors used to query focusable child elements of the host element.
     * The selectors are supplemented with `:not([disabled])` and `:not([hidden])`.
     */
    protected focusableSelectors: string[];
    protected focusableSelectorSuffix: string;
    query(host: HTMLElement, selector: string): HTMLElement[];
    findFirstFocusable(host: HTMLElement, config?: AutoFocusConfig): HTMLElement;
    /**
     * returns all focusable child elements of the host element. The element selectors
     * are build from the `focusableSelectors`.
     *
     * @param host the `HTMLElement` used to query focusable elements
     * @param locked indicates whether inactive (`tabindex="-1"`) focusable elements should be returned
     * @param invisible indicates whether hidden focusable elements should be returned
     */
    findFocusable(host: HTMLElement, locked?: boolean, invisible?: boolean): HTMLElement[];
    /**
     * Indicates whether the element is hidden by CSS. There are various CSS rules and
     * HTML structures which can lead to an hidden or invisible element. An `offsetParent`
     * of null indicates that the element or any of it's decendants is hidden (`display:none`).
     *
     * Oother techniques use the visibility (`visibility: hidden`), opacity (`opacity`) or
     * phyisical location on the element itself or any of it's anchestor elements. Those
     * technique require to work with the _computed styles_, which will cause a performance
     * downgrade. We don't do this in the standard implementaton.
     */
    protected isHidden(el: HTMLElement): boolean;
}
