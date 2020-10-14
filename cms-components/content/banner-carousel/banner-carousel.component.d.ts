import { CmsBannerCarouselComponent as model, CmsService, ContentSlotComponentData } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../cms-structure/index';
/**
 * Generic carousel that renders CMS Components.
 */
export declare class BannerCarouselComponent {
    private componentData;
    private cmsService;
    private componentData$;
    private items$;
    /**
     * Adds a specific theme for the carousel. The effect can be
     * used in CSS customisations.
     */
    theme: string;
    constructor(componentData: CmsComponentData<model>, cmsService: CmsService);
    /**
     * Returns an Obervable with an Array of Observables. This is done, so that
     * the component UI could consider to lazy load the UI components when they're
     * in the viewpoint.
     */
    getItems(): Observable<Observable<ContentSlotComponentData>[]>;
}
