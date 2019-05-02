import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { CmsService, ContentSlotComponentData, ContentSlotData, DynamicAttributeService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class PageSlotComponent implements OnInit {
    protected cmsService: CmsService;
    protected dynamicAttributeService: DynamicAttributeService;
    protected renderer: Renderer2;
    protected hostElement: ElementRef;
    position: string;
    /**
     * returns an observable with components (`ContentSlotComponentData[]`)
     * for the current slot
     */
    components$: Observable<ContentSlotComponentData[]>;
    constructor(cmsService: CmsService, dynamicAttributeService: DynamicAttributeService, renderer: Renderer2, hostElement: ElementRef);
    ngOnInit(): void;
    /**
     * returns an observable with `ContentSlotData` for the current position
     */
    readonly slot$: Observable<ContentSlotData>;
    private addComponentClass;
    private addSmartEditSlotClass;
    private addSmartEditContract;
}
