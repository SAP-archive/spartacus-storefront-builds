import { OnInit, Renderer2, ElementRef } from '@angular/core';
import { CmsService, DynamicAttributeService, ContentSlotData, ContentSlotComponentData } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsMappingService } from '../../../lib/cms/services/cms-mapping.service';
export declare class PageSlotComponent implements OnInit {
    protected cmsService: CmsService;
    protected dynamicAttributeService: DynamicAttributeService;
    protected renderer: Renderer2;
    protected hostElement: ElementRef;
    protected cmsMapping: CmsMappingService;
    position: string;
    constructor(cmsService: CmsService, dynamicAttributeService: DynamicAttributeService, renderer: Renderer2, hostElement: ElementRef, cmsMapping: CmsMappingService);
    ngOnInit(): void;
    /**
     * returns an observable with `ContentSlotData` for the current position
     */
    readonly slot$: Observable<ContentSlotData>;
    /**
     * returns an observable with components (`ContentSlotComponentData[]`)
     * for the current slot
     */
    readonly components$: Observable<ContentSlotComponentData[]>;
    private addComponentClass;
    private addSmartEditSlotClass;
    private addSmartEditContract;
}
