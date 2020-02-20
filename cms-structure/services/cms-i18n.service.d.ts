import { CmsMappingService } from './cms-mapping.service';
import { TranslationService, TranslationChunkService } from '@spartacus/core';
/**
 * Please don't put that service in public API.
 * */
import * as ɵngcc0 from '@angular/core';
export declare class CmsI18nService {
    private cmsMapping;
    private translation;
    private translationChunk;
    constructor(cmsMapping: CmsMappingService, translation: TranslationService, translationChunk: TranslationChunkService);
    loadChunksForComponents(componentTypes: string[]): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsI18nService>;
}

//# sourceMappingURL=cms-i18n.service.d.ts.map