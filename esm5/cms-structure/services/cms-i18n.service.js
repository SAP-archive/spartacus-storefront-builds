import { __decorate, __values } from "tslib";
import { Injectable } from '@angular/core';
import { TranslationChunkService, TranslationService } from '@spartacus/core';
import { CmsComponentsService } from './cms-components.service';
import * as i0 from "@angular/core";
import * as i1 from "./cms-components.service";
import * as i2 from "@spartacus/core";
var CmsI18nService = /** @class */ (function () {
    function CmsI18nService(cmsComponentsService, translation, translationChunk) {
        this.cmsComponentsService = cmsComponentsService;
        this.translation = translation;
        this.translationChunk = translationChunk;
    }
    CmsI18nService.prototype.loadForComponents = function (componentTypes) {
        var e_1, _a;
        var i18nKeys = this.cmsComponentsService.getI18nKeys(componentTypes);
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
        { type: CmsComponentsService },
        { type: TranslationService },
        { type: TranslationChunkService }
    ]; };
    CmsI18nService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsI18nService_Factory() { return new CmsI18nService(i0.ɵɵinject(i1.CmsComponentsService), i0.ɵɵinject(i2.TranslationService), i0.ɵɵinject(i2.TranslationChunkService)); }, token: CmsI18nService, providedIn: "root" });
    CmsI18nService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CmsI18nService);
    return CmsI18nService;
}());
export { CmsI18nService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWkxOG4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VydmljZXMvY21zLWkxOG4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUtoRTtJQUNFLHdCQUNZLG9CQUEwQyxFQUMxQyxXQUErQixFQUMvQixnQkFBeUM7UUFGekMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFDL0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtJQUNsRCxDQUFDO0lBRUosMENBQWlCLEdBQWpCLFVBQWtCLGNBQXdCOztRQUN4QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZFLElBQU0sVUFBVSxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7O1lBQ3JDLEtBQWtCLElBQUEsYUFBQSxTQUFBLFFBQVEsQ0FBQSxrQ0FBQSx3REFBRTtnQkFBdkIsSUFBTSxHQUFHLHFCQUFBO2dCQUNaLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDL0Q7Ozs7Ozs7OztRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkFaaUMsb0JBQW9CO2dCQUM3QixrQkFBa0I7Z0JBQ2IsdUJBQXVCOzs7SUFKMUMsY0FBYztRQUgxQixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csY0FBYyxDQWUxQjt5QkF0QkQ7Q0FzQkMsQUFmRCxJQWVDO1NBZlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uQ2h1bmtTZXJ2aWNlLCBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50c1NlcnZpY2UgfSBmcm9tICcuL2Ntcy1jb21wb25lbnRzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zSTE4blNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zQ29tcG9uZW50c1NlcnZpY2U6IENtc0NvbXBvbmVudHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbkNodW5rOiBUcmFuc2xhdGlvbkNodW5rU2VydmljZVxuICApIHt9XG5cbiAgbG9hZEZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgaTE4bktleXMgPSB0aGlzLmNtc0NvbXBvbmVudHNTZXJ2aWNlLmdldEkxOG5LZXlzKGNvbXBvbmVudFR5cGVzKTtcbiAgICBjb25zdCBpMThuQ2h1bmtzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgaTE4bktleXMpIHtcbiAgICAgIGkxOG5DaHVua3MuYWRkKHRoaXMudHJhbnNsYXRpb25DaHVuay5nZXRDaHVua05hbWVGb3JLZXkoa2V5KSk7XG4gICAgfVxuICAgIHRoaXMudHJhbnNsYXRpb24ubG9hZENodW5rcyhBcnJheS5mcm9tKGkxOG5DaHVua3MpKTtcbiAgfVxufVxuIl19