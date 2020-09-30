import { QualtricsConfig } from './config/qualtrics-config';
import { QualtricsLoaderService } from './qualtrics-loader.service';
/**
 * Adds the Qualtrics deployment script whenever the component is loaded. The
 * deployment script is loaded from the global configuration (`qualtrics.scriptSource`).
 */
export declare class QualtricsComponent {
    protected qualtricsLoader: QualtricsLoaderService;
    protected config: QualtricsConfig;
    constructor(qualtricsLoader: QualtricsLoaderService, config: QualtricsConfig);
}
