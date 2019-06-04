/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CmsMappingService } from './cms-mapping.service';
import { TranslationService, TranslationChunkService } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "./cms-mapping.service";
import * as i2 from "@spartacus/core";
var CmsI18nService = /** @class */ (function () {
    function CmsI18nService(cmsMapping, translation, translationChunk) {
        this.cmsMapping = cmsMapping;
        this.translation = translation;
        this.translationChunk = translationChunk;
    }
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    CmsI18nService.prototype.loadChunksForComponents = /**
     * @param {?} componentTypes
     * @return {?}
     */
    function (componentTypes) {
        var e_1, _a;
        /** @type {?} */
        var i18nKeys = this.cmsMapping.getI18nKeysForComponents(componentTypes);
        /** @type {?} */
        var i18nChunks = new Set();
        try {
            for (var i18nKeys_1 = tslib_1.__values(i18nKeys), i18nKeys_1_1 = i18nKeys_1.next(); !i18nKeys_1_1.done; i18nKeys_1_1 = i18nKeys_1.next()) {
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
    CmsI18nService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CmsI18nService.ctorParameters = function () { return [
        { type: CmsMappingService },
        { type: TranslationService },
        { type: TranslationChunkService }
    ]; };
    /** @nocollapse */ CmsI18nService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CmsI18nService_Factory() { return new CmsI18nService(i0.ɵɵinject(i1.CmsMappingService), i0.ɵɵinject(i2.TranslationService), i0.ɵɵinject(i2.TranslationChunkService)); }, token: CmsI18nService, providedIn: "root" });
    return CmsI18nService;
}());
export { CmsI18nService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWkxOG4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VydmljZXMvY21zLWkxOG4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLHVCQUF1QixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFFOUU7SUFJRSx3QkFDVSxVQUE2QixFQUM3QixXQUErQixFQUMvQixnQkFBeUM7UUFGekMsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7SUFDaEQsQ0FBQzs7Ozs7SUFFSixnREFBdUI7Ozs7SUFBdkIsVUFBd0IsY0FBd0I7OztZQUN4QyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQUM7O1lBQ25FLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBVTs7WUFDcEMsS0FBa0IsSUFBQSxhQUFBLGlCQUFBLFFBQVEsQ0FBQSxrQ0FBQSx3REFBRTtnQkFBdkIsSUFBTSxHQUFHLHFCQUFBO2dCQUNaLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDL0Q7Ozs7Ozs7OztRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkFqQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMUSxpQkFBaUI7Z0JBQ2pCLGtCQUFrQjtnQkFBRSx1QkFBdUI7Ozt5QkFGcEQ7Q0FzQkMsQUFsQkQsSUFrQkM7U0FmWSxjQUFjOzs7Ozs7SUFFdkIsb0NBQXFDOzs7OztJQUNyQyxxQ0FBdUM7Ozs7O0lBQ3ZDLDBDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc01hcHBpbmdTZXJ2aWNlIH0gZnJvbSAnLi9jbXMtbWFwcGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSwgVHJhbnNsYXRpb25DaHVua1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zSTE4blNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNtc01hcHBpbmc6IENtc01hcHBpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uQ2h1bms6IFRyYW5zbGF0aW9uQ2h1bmtTZXJ2aWNlXG4gICkge31cblxuICBsb2FkQ2h1bmtzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBpMThuS2V5cyA9IHRoaXMuY21zTWFwcGluZy5nZXRJMThuS2V5c0ZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXMpO1xuICAgIGNvbnN0IGkxOG5DaHVua3MgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBpMThuS2V5cykge1xuICAgICAgaTE4bkNodW5rcy5hZGQodGhpcy50cmFuc2xhdGlvbkNodW5rLmdldENodW5rTmFtZUZvcktleShrZXkpKTtcbiAgICB9XG4gICAgdGhpcy50cmFuc2xhdGlvbi5sb2FkQ2h1bmtzKEFycmF5LmZyb20oaTE4bkNodW5rcykpO1xuICB9XG59XG4iXX0=