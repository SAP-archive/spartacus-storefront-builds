import { CmsMappingService } from './cms-mapping.service';
import { TranslationService, TranslationNamespaceService } from '@spartacus/core';
export declare class CmsI18nService {
    private cmsMapping;
    private translation;
    private translationNamespace;
    constructor(cmsMapping: CmsMappingService, translation: TranslationService, translationNamespace: TranslationNamespaceService);
    loadNamespacesForComponents(componentTypes: string[]): void;
}
