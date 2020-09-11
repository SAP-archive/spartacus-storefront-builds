import { CmsBannerCarouselComponent as model, CmsService, ContentSlotComponentData } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../cms-structure/index';
/**
 * Generic carousel that renders CMS Components.
 */
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BannerCarouselComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BannerCarouselComponent, "cx-banner-carousel", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLWNhcm91c2VsLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJiYW5uZXItY2Fyb3VzZWwuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENtc0Jhbm5lckNhcm91c2VsQ29tcG9uZW50IGFzIG1vZGVsLCBDbXNTZXJ2aWNlLCBDb250ZW50U2xvdENvbXBvbmVudERhdGEgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvaW5kZXgnO1xuLyoqXG4gKiBHZW5lcmljIGNhcm91c2VsIHRoYXQgcmVuZGVycyBDTVMgQ29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQmFubmVyQ2Fyb3VzZWxDb21wb25lbnQge1xuICAgIHByaXZhdGUgY29tcG9uZW50RGF0YTtcbiAgICBwcml2YXRlIGNtc1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBjb21wb25lbnREYXRhJDtcbiAgICBwcml2YXRlIGl0ZW1zJDtcbiAgICAvKipcbiAgICAgKiBBZGRzIGEgc3BlY2lmaWMgdGhlbWUgZm9yIHRoZSBjYXJvdXNlbC4gVGhlIGVmZmVjdCBjYW4gYmVcbiAgICAgKiB1c2VkIGluIENTUyBjdXN0b21pc2F0aW9ucy5cbiAgICAgKi9cbiAgICB0aGVtZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8bW9kZWw+LCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIE9iZXJ2YWJsZSB3aXRoIGFuIEFycmF5IG9mIE9ic2VydmFibGVzLiBUaGlzIGlzIGRvbmUsIHNvIHRoYXRcbiAgICAgKiB0aGUgY29tcG9uZW50IFVJIGNvdWxkIGNvbnNpZGVyIHRvIGxhenkgbG9hZCB0aGUgVUkgY29tcG9uZW50cyB3aGVuIHRoZXkncmVcbiAgICAgKiBpbiB0aGUgdmlld3BvaW50LlxuICAgICAqL1xuICAgIGdldEl0ZW1zKCk6IE9ic2VydmFibGU8T2JzZXJ2YWJsZTxDb250ZW50U2xvdENvbXBvbmVudERhdGE+W10+O1xufVxuIl19