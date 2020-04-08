import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { TranslationChunkService, TranslationService } from '@spartacus/core';
import { CmsMappingService } from './cms-mapping.service';
import * as i0 from "@angular/core";
import * as i1 from "./cms-mapping.service";
import * as i2 from "@spartacus/core";
/**
 * Please don't put that service in public API.
 * */
let CmsI18nService = class CmsI18nService {
    constructor(cmsMapping, translation, translationChunk) {
        this.cmsMapping = cmsMapping;
        this.translation = translation;
        this.translationChunk = translationChunk;
    }
    loadForComponents(componentTypes) {
        const i18nKeys = this.cmsMapping.getI18nKeysForComponents(componentTypes);
        const i18nChunks = new Set();
        for (const key of i18nKeys) {
            i18nChunks.add(this.translationChunk.getChunkNameForKey(key));
        }
        this.translation.loadChunks(Array.from(i18nChunks));
    }
};
CmsI18nService.ctorParameters = () => [
    { type: CmsMappingService },
    { type: TranslationService },
    { type: TranslationChunkService }
];
CmsI18nService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsI18nService_Factory() { return new CmsI18nService(i0.ɵɵinject(i1.CmsMappingService), i0.ɵɵinject(i2.TranslationService), i0.ɵɵinject(i2.TranslationChunkService)); }, token: CmsI18nService, providedIn: "root" });
CmsI18nService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsI18nService);
export { CmsI18nService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWkxOG4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VydmljZXMvY21zLWkxOG4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUUxRDs7S0FFSztBQUlMLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFDekIsWUFDVSxVQUE2QixFQUM3QixXQUErQixFQUMvQixnQkFBeUM7UUFGekMsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7SUFDaEQsQ0FBQztJQUVKLGlCQUFpQixDQUFDLGNBQXdCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUUsTUFBTSxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQUNyQyxLQUFLLE1BQU0sR0FBRyxJQUFJLFFBQVEsRUFBRTtZQUMxQixVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQy9EO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDRixDQUFBOztZQWJ1QixpQkFBaUI7WUFDaEIsa0JBQWtCO1lBQ2IsdUJBQXVCOzs7QUFKeEMsY0FBYztJQUgxQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csY0FBYyxDQWUxQjtTQWZZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkNodW5rU2VydmljZSwgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc01hcHBpbmdTZXJ2aWNlIH0gZnJvbSAnLi9jbXMtbWFwcGluZy5zZXJ2aWNlJztcblxuLyoqXG4gKiBQbGVhc2UgZG9uJ3QgcHV0IHRoYXQgc2VydmljZSBpbiBwdWJsaWMgQVBJLlxuICogKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNJMThuU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY21zTWFwcGluZzogQ21zTWFwcGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb25DaHVuazogVHJhbnNsYXRpb25DaHVua1NlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWRGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGkxOG5LZXlzID0gdGhpcy5jbXNNYXBwaW5nLmdldEkxOG5LZXlzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlcyk7XG4gICAgY29uc3QgaTE4bkNodW5rcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGkxOG5LZXlzKSB7XG4gICAgICBpMThuQ2h1bmtzLmFkZCh0aGlzLnRyYW5zbGF0aW9uQ2h1bmsuZ2V0Q2h1bmtOYW1lRm9yS2V5KGtleSkpO1xuICAgIH1cbiAgICB0aGlzLnRyYW5zbGF0aW9uLmxvYWRDaHVua3MoQXJyYXkuZnJvbShpMThuQ2h1bmtzKSk7XG4gIH1cbn1cbiJdfQ==