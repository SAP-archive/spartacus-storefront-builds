import { CmsLinkComponent } from '@spartacus/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import * as ɵngcc0 from '@angular/core';
export declare class LinkComponent {
    protected component: CmsComponentData<CmsLinkComponent>;
    styleClasses: string;
    data$: import("rxjs").Observable<CmsLinkComponent>;
    constructor(component: CmsComponentData<CmsLinkComponent>);
    /**
     * Returns `_blank` to force opening the link in a new window whenever the
     * `data.target` flag is set to `true`.
     */
    getTarget(data: CmsLinkComponent): string | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LinkComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LinkComponent, "cx-link", never, {}, {}, never, never>;
}

//# sourceMappingURL=link.component.d.ts.map