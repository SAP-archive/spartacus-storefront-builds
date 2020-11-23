/**
 * Configuration options for the Qualtrics integration, which allows you to
 * specify the qualtrics project and deployment script.
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class QualtricsConfig {
    /**
     * Holds the qualtrics integration options.
     */
    qualtrics?: {
        /**
         * Deployment script, loaded from a resource, to integrate the deployment of the qualtrics project.
         * You would typically store the file in the local assets folder.
         *
         * Defaults to `assets/qualtricsIntegration.js`
         */
        scriptSource?: string;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<QualtricsConfig, never>;
}

//# sourceMappingURL=qualtrics-config.d.ts.map