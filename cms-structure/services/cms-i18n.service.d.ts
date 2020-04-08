import { TranslationChunkService, TranslationService } from '@spartacus/core';
import { CmsMappingService } from './cms-mapping.service';
/**
 * Please don't put that service in public API.
 * */
import * as ɵngcc0 from '@angular/core';
export declare class CmsI18nService {
    private cmsMapping;
    private translation;
    private translationChunk;
    constructor(cmsMapping: CmsMappingService, translation: TranslationService, translationChunk: TranslationChunkService);
    loadForComponents(componentTypes: string[]): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsI18nService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWkxOG4uc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjbXMtaTE4bi5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7O0FBTUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2xhdGlvbkNodW5rU2VydmljZSwgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc01hcHBpbmdTZXJ2aWNlIH0gZnJvbSAnLi9jbXMtbWFwcGluZy5zZXJ2aWNlJztcbi8qKlxuICogUGxlYXNlIGRvbid0IHB1dCB0aGF0IHNlcnZpY2UgaW4gcHVibGljIEFQSS5cbiAqICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDbXNJMThuU2VydmljZSB7XG4gICAgcHJpdmF0ZSBjbXNNYXBwaW5nO1xuICAgIHByaXZhdGUgdHJhbnNsYXRpb247XG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbkNodW5rO1xuICAgIGNvbnN0cnVjdG9yKGNtc01hcHBpbmc6IENtc01hcHBpbmdTZXJ2aWNlLCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLCB0cmFuc2xhdGlvbkNodW5rOiBUcmFuc2xhdGlvbkNodW5rU2VydmljZSk7XG4gICAgbG9hZEZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogdm9pZDtcbn1cbiJdfQ==