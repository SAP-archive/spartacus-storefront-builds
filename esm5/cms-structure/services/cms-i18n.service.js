import { __decorate, __values } from "tslib";
import { Injectable } from '@angular/core';
import { CmsMappingService } from './cms-mapping.service';
import { TranslationService, TranslationChunkService } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "./cms-mapping.service";
import * as i2 from "@spartacus/core";
/**
 * Please don't put that service in public API.
 * */
var CmsI18nService = /** @class */ (function () {
    function CmsI18nService(cmsMapping, translation, translationChunk) {
        this.cmsMapping = cmsMapping;
        this.translation = translation;
        this.translationChunk = translationChunk;
    }
    CmsI18nService.prototype.loadChunksForComponents = function (componentTypes) {
        var e_1, _a;
        var i18nKeys = this.cmsMapping.getI18nKeysForComponents(componentTypes);
        var i18nChunks = new Set();
        try {
            for (var i18nKeys_1 = __values(i18nKeys), i18nKeys_1_1 = i18nKeys_1.next(); !i18nKeys_1_1.done; i18nKeys_1_1 = i18nKeys_1.next()) {
                var key = i18nKeys_1_1.value;
                i18nChunks.add(this.translationChunk.getChunkNameForKey(key));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (i18nKeys_1_1 && !i18nKeys_1_1.done && (_a = i18nKeys_1.return)) _a.call(i18nKeys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.translation.loadChunks(Array.from(i18nChunks));
    };
    CmsI18nService.ctorParameters = function () { return [
        { type: CmsMappingService },
        { type: TranslationService },
        { type: TranslationChunkService }
    ]; };
    CmsI18nService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsI18nService_Factory() { return new CmsI18nService(i0.ɵɵinject(i1.CmsMappingService), i0.ɵɵinject(i2.TranslationService), i0.ɵɵinject(i2.TranslationChunkService)); }, token: CmsI18nService, providedIn: "root" });
    CmsI18nService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CmsI18nService);
    return CmsI18nService;
}());
export { CmsI18nService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWkxOG4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VydmljZXMvY21zLWkxOG4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUU5RTs7S0FFSztBQUlMO0lBQ0Usd0JBQ1UsVUFBNkIsRUFDN0IsV0FBK0IsRUFDL0IsZ0JBQXlDO1FBRnpDLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQzdCLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO0lBQ2hELENBQUM7SUFFSixnREFBdUIsR0FBdkIsVUFBd0IsY0FBd0I7O1FBQzlDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUUsSUFBTSxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQzs7WUFDckMsS0FBa0IsSUFBQSxhQUFBLFNBQUEsUUFBUSxDQUFBLGtDQUFBLHdEQUFFO2dCQUF2QixJQUFNLEdBQUcscUJBQUE7Z0JBQ1osVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMvRDs7Ozs7Ozs7O1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7O2dCQVpxQixpQkFBaUI7Z0JBQ2hCLGtCQUFrQjtnQkFDYix1QkFBdUI7OztJQUp4QyxjQUFjO1FBSDFCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxjQUFjLENBZTFCO3lCQXpCRDtDQXlCQyxBQWZELElBZUM7U0FmWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zTWFwcGluZ1NlcnZpY2UgfSBmcm9tICcuL2Ntcy1tYXBwaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlLCBUcmFuc2xhdGlvbkNodW5rU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbi8qKlxuICogUGxlYXNlIGRvbid0IHB1dCB0aGF0IHNlcnZpY2UgaW4gcHVibGljIEFQSS5cbiAqICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zSTE4blNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNtc01hcHBpbmc6IENtc01hcHBpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uQ2h1bms6IFRyYW5zbGF0aW9uQ2h1bmtTZXJ2aWNlXG4gICkge31cblxuICBsb2FkQ2h1bmtzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBpMThuS2V5cyA9IHRoaXMuY21zTWFwcGluZy5nZXRJMThuS2V5c0ZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXMpO1xuICAgIGNvbnN0IGkxOG5DaHVua3MgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBpMThuS2V5cykge1xuICAgICAgaTE4bkNodW5rcy5hZGQodGhpcy50cmFuc2xhdGlvbkNodW5rLmdldENodW5rTmFtZUZvcktleShrZXkpKTtcbiAgICB9XG4gICAgdGhpcy50cmFuc2xhdGlvbi5sb2FkQ2h1bmtzKEFycmF5LmZyb20oaTE4bkNodW5rcykpO1xuICB9XG59XG4iXX0=