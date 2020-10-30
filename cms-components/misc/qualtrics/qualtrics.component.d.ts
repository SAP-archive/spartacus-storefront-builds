import { QualtricsConfig } from './config/qualtrics-config';
import { QualtricsLoaderService } from './qualtrics-loader.service';
/**
 * Adds the Qualtrics deployment script whenever the component is loaded. The
 * deployment script is loaded from the global configuration (`qualtrics.scriptSource`).
 */
import * as ɵngcc0 from '@angular/core';
export declare class QualtricsComponent {
    protected qualtricsLoader: QualtricsLoaderService;
    protected config: QualtricsConfig;
    constructor(qualtricsLoader: QualtricsLoaderService, config: QualtricsConfig);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<QualtricsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<QualtricsComponent, "cx-qualtrics", never, {}, {}, never, never>;
}

//# sourceMappingURL=qualtrics.component.d.ts.map