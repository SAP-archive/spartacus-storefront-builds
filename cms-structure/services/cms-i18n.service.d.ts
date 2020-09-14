import { TranslationChunkService, TranslationService } from '@spartacus/core';
import { CmsComponentsService } from './cms-components.service';
export declare class CmsI18nService {
    protected cmsComponentsService: CmsComponentsService;
    protected translation: TranslationService;
    protected translationChunk: TranslationChunkService;
    constructor(cmsComponentsService: CmsComponentsService, translation: TranslationService, translationChunk: TranslationChunkService);
    loadForComponents(componentTypes: string[]): void;
}
