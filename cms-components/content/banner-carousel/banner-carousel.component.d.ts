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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BannerCarouselComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BannerCarouselComponent, "cx-banner-carousel", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLWNhcm91c2VsLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJiYW5uZXItY2Fyb3VzZWwuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbXNCYW5uZXJDYXJvdXNlbENvbXBvbmVudCBhcyBtb2RlbCwgQ21zU2VydmljZSwgQ29udGVudFNsb3RDb21wb25lbnREYXRhIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL2luZGV4Jztcbi8qKlxuICogR2VuZXJpYyBjYXJvdXNlbCB0aGF0IHJlbmRlcnMgQ01TIENvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEJhbm5lckNhcm91c2VsQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIGNvbXBvbmVudERhdGE7XG4gICAgcHJpdmF0ZSBjbXNTZXJ2aWNlO1xuICAgIHByaXZhdGUgY29tcG9uZW50RGF0YSQ7XG4gICAgcHJpdmF0ZSBpdGVtcyQ7XG4gICAgLyoqXG4gICAgICogQWRkcyBhIHNwZWNpZmljIHRoZW1lIGZvciB0aGUgY2Fyb3VzZWwuIFRoZSBlZmZlY3QgY2FuIGJlXG4gICAgICogdXNlZCBpbiBDU1MgY3VzdG9taXNhdGlvbnMuXG4gICAgICovXG4gICAgdGhlbWU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPG1vZGVsPiwgY21zU2VydmljZTogQ21zU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBPYmVydmFibGUgd2l0aCBhbiBBcnJheSBvZiBPYnNlcnZhYmxlcy4gVGhpcyBpcyBkb25lLCBzbyB0aGF0XG4gICAgICogdGhlIGNvbXBvbmVudCBVSSBjb3VsZCBjb25zaWRlciB0byBsYXp5IGxvYWQgdGhlIFVJIGNvbXBvbmVudHMgd2hlbiB0aGV5J3JlXG4gICAgICogaW4gdGhlIHZpZXdwb2ludC5cbiAgICAgKi9cbiAgICBnZXRJdGVtcygpOiBPYnNlcnZhYmxlPE9ic2VydmFibGU8Q29udGVudFNsb3RDb21wb25lbnREYXRhPltdPjtcbn1cbiJdfQ==