import { IntersectionOptions } from '../../../layout/loading/intersection.model';
import { CmsComponentsService } from '../../services/cms-components.service';
import * as ɵngcc0 from '@angular/core';
export declare class PageSlotService {
    protected cmsComponentsService: CmsComponentsService;
    protected platformId: any;
    protected document: any;
    protected prerenderedSlots: string[] | undefined;
    constructor(cmsComponentsService: CmsComponentsService, platformId: any, document: any);
    /**
     * Finds all slots visible in the SSR pre-rendered DOM
     */
    protected resolvePrerenderedSlots(): void;
    /**
     * Indicates if certain slot should be rendered instantly.
     *
     * It's especially useful when transitioning from SSR to CSR application,
     * where we don't want to apply deferring logic to slots that are visible
     * to avoid unnecessary flickering.
     */
    shouldNotDefer(slot: string): boolean;
    /**
     * Returns the defer options for the given component. If the wrapping
     * page slot is prerendered, we would ignore the defer options altogether.
     */
    getComponentDeferOptions(slot: string, componentType: string): IntersectionOptions;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PageSlotService, never>;
}

//# sourceMappingURL=page-slot.service.d.ts.map