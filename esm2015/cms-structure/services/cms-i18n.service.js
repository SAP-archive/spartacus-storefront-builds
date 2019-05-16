/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CmsMappingService } from './cms-mapping.service';
import { TranslationService, TranslationChunkService } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "./cms-mapping.service";
import * as i2 from "@spartacus/core";
export class CmsI18nService {
    /**
     * @param {?} cmsMapping
     * @param {?} translation
     * @param {?} translationChunk
     */
    constructor(cmsMapping, translation, translationChunk) {
        this.cmsMapping = cmsMapping;
        this.translation = translation;
        this.translationChunk = translationChunk;
    }
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    loadChunksForComponents(componentTypes) {
        /** @type {?} */
        const i18nKeys = this.cmsMapping.getI18nKeysForComponents(componentTypes);
        /** @type {?} */
        const i18nChunks = new Set();
        for (const key of i18nKeys) {
            i18nChunks.add(this.translationChunk.getChunkNameForKey(key));
        }
        this.translation.loadChunks(Array.from(i18nChunks));
    }
}
CmsI18nService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsI18nService.ctorParameters = () => [
    { type: CmsMappingService },
    { type: TranslationService },
    { type: TranslationChunkService }
];
/** @nocollapse */ CmsI18nService.ngInjectableDef = i0.defineInjectable({ factory: function CmsI18nService_Factory() { return new CmsI18nService(i0.inject(i1.CmsMappingService), i0.inject(i2.TranslationService), i0.inject(i2.TranslationChunkService)); }, token: CmsI18nService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmsI18nService.prototype.cmsMapping;
    /**
     * @type {?}
     * @private
     */
    CmsI18nService.prototype.translation;
    /**
     * @type {?}
     * @private
     */
    CmsI18nService.prototype.translationChunk;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWkxOG4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VydmljZXMvY21zLWkxOG4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUs5RSxNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBQ3pCLFlBQ1UsVUFBNkIsRUFDN0IsV0FBK0IsRUFDL0IsZ0JBQXlDO1FBRnpDLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQzdCLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO0lBQ2hELENBQUM7Ozs7O0lBRUosdUJBQXVCLENBQUMsY0FBd0I7O2NBQ3hDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FBQzs7Y0FDbkUsVUFBVSxHQUFHLElBQUksR0FBRyxFQUFVO1FBQ3BDLEtBQUssTUFBTSxHQUFHLElBQUksUUFBUSxFQUFFO1lBQzFCLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDL0Q7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7O1lBakJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFBRSx1QkFBdUI7Ozs7Ozs7O0lBT2hELG9DQUFxQzs7Ozs7SUFDckMscUNBQXVDOzs7OztJQUN2QywwQ0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNNYXBwaW5nU2VydmljZSB9IGZyb20gJy4vY21zLW1hcHBpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UsIFRyYW5zbGF0aW9uQ2h1bmtTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc0kxOG5TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjbXNNYXBwaW5nOiBDbXNNYXBwaW5nU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbkNodW5rOiBUcmFuc2xhdGlvbkNodW5rU2VydmljZVxuICApIHt9XG5cbiAgbG9hZENodW5rc0ZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgaTE4bktleXMgPSB0aGlzLmNtc01hcHBpbmcuZ2V0STE4bktleXNGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzKTtcbiAgICBjb25zdCBpMThuQ2h1bmtzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgaTE4bktleXMpIHtcbiAgICAgIGkxOG5DaHVua3MuYWRkKHRoaXMudHJhbnNsYXRpb25DaHVuay5nZXRDaHVua05hbWVGb3JLZXkoa2V5KSk7XG4gICAgfVxuICAgIHRoaXMudHJhbnNsYXRpb24ubG9hZENodW5rcyhBcnJheS5mcm9tKGkxOG5DaHVua3MpKTtcbiAgfVxufVxuIl19