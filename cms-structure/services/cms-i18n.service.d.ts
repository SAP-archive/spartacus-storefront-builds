import { TranslationChunkService, TranslationService } from '@spartacus/core';
import { CmsComponentsService } from './cms-components.service';
import * as ɵngcc0 from '@angular/core';
export declare class CmsI18nService {
    protected cmsComponentsService: CmsComponentsService;
    protected translation: TranslationService;
    protected translationChunk: TranslationChunkService;
    constructor(cmsComponentsService: CmsComponentsService, translation: TranslationService, translationChunk: TranslationChunkService);
    loadForComponents(componentTypes: string[]): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsI18nService, never>;
}

//# sourceMappingURL=cms-i18n.service.d.ts.map