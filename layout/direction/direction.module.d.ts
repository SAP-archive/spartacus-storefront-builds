import { FeatureConfigService } from '@spartacus/core';
import { DirectionService } from './direction.service';
export declare function initHtmlDirAttribute(directionService: DirectionService, featureConfigService: FeatureConfigService): () => Promise<void>;
/**
 * Provides a configuration and APP_INITIALIZER to add the correct (language drive) html direction.
 */
export declare class DirectionModule {
}
