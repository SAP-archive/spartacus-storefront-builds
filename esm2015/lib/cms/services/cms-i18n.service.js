/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CmsMappingService } from './cms-mapping.service';
import { TranslationService, TranslationNamespaceService, } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "./cms-mapping.service";
import * as i2 from "@spartacus/core";
export class CmsI18nService {
    /**
     * @param {?} cmsMapping
     * @param {?} translation
     * @param {?} translationNamespace
     */
    constructor(cmsMapping, translation, translationNamespace) {
        this.cmsMapping = cmsMapping;
        this.translation = translation;
        this.translationNamespace = translationNamespace;
    }
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    loadNamespacesForComponents(componentTypes) {
        /** @type {?} */
        const i18nKeys = this.cmsMapping.getI18nKeysForComponents(componentTypes);
        /** @type {?} */
        const i18nNamespaces = new Set();
        for (const key of i18nKeys) {
            i18nNamespaces.add(this.translationNamespace.getNamespace(key));
        }
        this.translation.loadNamespaces(Array.from(i18nNamespaces));
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
    { type: TranslationNamespaceService }
];
/** @nocollapse */ CmsI18nService.ngInjectableDef = i0.defineInjectable({ factory: function CmsI18nService_Factory() { return new CmsI18nService(i0.inject(i1.CmsMappingService), i0.inject(i2.TranslationService), i0.inject(i2.TranslationNamespaceService)); }, token: CmsI18nService, providedIn: "root" });
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
    CmsI18nService.prototype.translationNamespace;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWkxOG4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMvc2VydmljZXMvY21zLWkxOG4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLDJCQUEyQixHQUM1QixNQUFNLGlCQUFpQixDQUFDOzs7O0FBS3pCLE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFDekIsWUFDVSxVQUE2QixFQUM3QixXQUErQixFQUMvQixvQkFBaUQ7UUFGakQsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBNkI7SUFDeEQsQ0FBQzs7Ozs7SUFFSiwyQkFBMkIsQ0FBQyxjQUF3Qjs7Y0FDNUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsY0FBYyxDQUFDOztjQUNuRSxjQUFjLEdBQUcsSUFBSSxHQUFHLEVBQVU7UUFDeEMsS0FBSyxNQUFNLEdBQUcsSUFBSSxRQUFRLEVBQUU7WUFDMUIsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDakU7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7O1lBakJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJRLGlCQUFpQjtZQUV4QixrQkFBa0I7WUFDbEIsMkJBQTJCOzs7Ozs7OztJQVF6QixvQ0FBcUM7Ozs7O0lBQ3JDLHFDQUF1Qzs7Ozs7SUFDdkMsOENBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zTWFwcGluZ1NlcnZpY2UgfSBmcm9tICcuL2Ntcy1tYXBwaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBUcmFuc2xhdGlvbk5hbWVzcGFjZVNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNJMThuU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY21zTWFwcGluZzogQ21zTWFwcGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb25OYW1lc3BhY2U6IFRyYW5zbGF0aW9uTmFtZXNwYWNlU2VydmljZVxuICApIHt9XG5cbiAgbG9hZE5hbWVzcGFjZXNGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGkxOG5LZXlzID0gdGhpcy5jbXNNYXBwaW5nLmdldEkxOG5LZXlzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlcyk7XG4gICAgY29uc3QgaTE4bk5hbWVzcGFjZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBpMThuS2V5cykge1xuICAgICAgaTE4bk5hbWVzcGFjZXMuYWRkKHRoaXMudHJhbnNsYXRpb25OYW1lc3BhY2UuZ2V0TmFtZXNwYWNlKGtleSkpO1xuICAgIH1cbiAgICB0aGlzLnRyYW5zbGF0aW9uLmxvYWROYW1lc3BhY2VzKEFycmF5LmZyb20oaTE4bk5hbWVzcGFjZXMpKTtcbiAgfVxufVxuIl19