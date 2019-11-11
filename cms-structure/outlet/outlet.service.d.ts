import { ComponentFactory, TemplateRef } from '@angular/core';
import { OutletPosition } from './outlet.model';
export declare class OutletService {
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
    add(outlet: string, template: TemplateRef<any>, position?: OutletPosition): void;
    /**
     * @param factory The `ComponentFactory` that will be dynamically added to the outlet UI
     */
    add(outlet: string, factory: ComponentFactory<any>, position?: OutletPosition): void;
    get(outlet: string, position?: OutletPosition): TemplateRef<any> | ComponentFactory<any>;
}
