import { TemplateRef } from '@angular/core';
import { FeatureConfigService } from '@spartacus/core';
import { OutletPosition } from './outlet.model';
export declare class OutletService<T = TemplateRef<any>> {
    protected features?: FeatureConfigService;
    /**
     * @deprecated since 2.1, see #8116
     */
    constructor();
    constructor(features: FeatureConfigService);
    private templatesRefs;
    /**
     * Adds a template or ComponentFactory, so that UI outlets can be replaced dynamically.
     * The UI position where this template or ComponentFactory is inserted is given by a
     * string reference (called `outlet`) and optional `OutletPosition`. The `OutletPosition`
     * is either before or after, or replaces the entire UI.
     *
     * @param outlet the UI location represented by a string
     * @param template the `TemplateRef` that will be used to insert UI
     * @param position the `OutletPosition` in the UI
     */
    add(outlet: string, template: T, position?: OutletPosition): void;
    /**
     * @param factory The `ComponentFactory` that will be dynamically added to the outlet UI
     */
    add(outlet: string, factory: T, position?: OutletPosition): void;
    /**
     *
     * Returns a single object or multiple objects for the given outlet reference,
     * depending on the `stacked` argument.
     *
     * @param outlet The outlet reference
     * @param position the outlet position, `OutletPosition.before`, `OutletPosition.AFTER` or `OutletPosition.REPLACE`
     * @param stacked Indicates whether an array of outlet components is returned
     */
    get(outlet: string, position?: OutletPosition, stacked?: boolean): T[] | T;
    remove(outlet: string, position?: OutletPosition, value?: T): void;
    protected removeValueOrAll(store: Map<string, T[]>, outlet: string, value?: T): void;
}
