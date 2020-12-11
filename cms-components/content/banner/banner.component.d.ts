import { CmsBannerComponent } from '@spartacus/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
export declare class BannerComponent {
    protected component: CmsComponentData<CmsBannerComponent>;
    styleClasses: string;
    data$: import("rxjs").Observable<CmsBannerComponent>;
    constructor(component: CmsComponentData<CmsBannerComponent>);
    /**
     * Returns `_blank` to force opening the link in a new window whenever the
     * `data.external` flag is set to true.
     */
    getTarget(data: CmsBannerComponent): string | null;
}
