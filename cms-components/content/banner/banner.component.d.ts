import { CmsBannerComponent } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import * as ɵngcc0 from '@angular/core';
export declare class BannerComponent {
    protected component: CmsComponentData<CmsBannerComponent>;
    styleClasses: string;
    data$: Observable<CmsBannerComponent>;
    constructor(component: CmsComponentData<CmsBannerComponent>);
    /**
     * Returns `_blank` to force opening the link in a new window whenever the
     * `data.external` flag is set to true.
     */
    getTarget(data: CmsBannerComponent): string | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BannerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BannerComponent, "cx-banner", never, {}, {}, never, never>;
}

//# sourceMappingURL=banner.component.d.ts.map