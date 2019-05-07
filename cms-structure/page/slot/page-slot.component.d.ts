import { ElementRef, Renderer2 } from '@angular/core';
import { CmsService, ContentSlotComponentData, ContentSlotData, DynamicAttributeService } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
export declare class PageSlotComponent {
    protected cmsService: CmsService;
    protected dynamicAttributeService: DynamicAttributeService;
    protected renderer: Renderer2;
    protected hostElement: ElementRef;
    position: string;
    readonly position$: BehaviorSubject<string>;
    /**
     * observable with `ContentSlotData` for the current position
     */
    readonly slot$: Observable<ContentSlotData>;
    /**
     * observable with components (`ContentSlotComponentData[]`)
     * for the current slot
     */
    readonly components$: Observable<ContentSlotComponentData[]>;
    constructor(cmsService: CmsService, dynamicAttributeService: DynamicAttributeService, renderer: Renderer2, hostElement: ElementRef);
    private addComponentClass;
    private addSmartEditSlotClass;
    private addSmartEditContract;
}
