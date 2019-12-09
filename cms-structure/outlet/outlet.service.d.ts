import { TemplateRef } from '@angular/core';
import { OutletPosition } from './outlet.model';
export declare class OutletService<T = TemplateRef<any>> {
    private templatesRefs;
    private templatesRefsBefore;
    private templatesRefsAfter;
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
    private store;
}
