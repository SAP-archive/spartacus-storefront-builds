import { CmsMappingService } from './cms-mapping.service';
import { TranslationService, TranslationChunkService } from '@spartacus/core';
export declare class CmsI18nService {
    private cmsMapping;
    private translation;
    private translationChunk;
    constructor(cmsMapping: CmsMappingService, translation: TranslationService, translationChunk: TranslationChunkService);
    loadChunksForComponents(componentTypes: string[]): void;
}
