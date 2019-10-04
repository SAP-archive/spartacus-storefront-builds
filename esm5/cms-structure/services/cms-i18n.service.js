/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CmsMappingService } from './cms-mapping.service';
import { TranslationService, TranslationChunkService } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "./cms-mapping.service";
import * as i2 from "@spartacus/core";
/**
 * Please don't put that service in public API.
 *
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWkxOG4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VydmljZXMvY21zLWkxOG4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLHVCQUF1QixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7O0FBSzlFO0lBSUUsd0JBQ1UsVUFBNkIsRUFDN0IsV0FBK0IsRUFDL0IsZ0JBQXlDO1FBRnpDLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQzdCLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO0lBQ2hELENBQUM7Ozs7O0lBRUosZ0RBQXVCOzs7O0lBQXZCLFVBQXdCLGNBQXdCOzs7WUFDeEMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsY0FBYyxDQUFDOztZQUNuRSxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQVU7O1lBQ3BDLEtBQWtCLElBQUEsYUFBQSxpQkFBQSxRQUFRLENBQUEsa0NBQUEsd0RBQUU7Z0JBQXZCLElBQU0sR0FBRyxxQkFBQTtnQkFDWixVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQy9EOzs7Ozs7Ozs7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBakJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUlEsaUJBQWlCO2dCQUNqQixrQkFBa0I7Z0JBQUUsdUJBQXVCOzs7eUJBRnBEO0NBeUJDLEFBbEJELElBa0JDO1NBZlksY0FBYzs7Ozs7O0lBRXZCLG9DQUFxQzs7Ozs7SUFDckMscUNBQXVDOzs7OztJQUN2QywwQ0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNNYXBwaW5nU2VydmljZSB9IGZyb20gJy4vY21zLW1hcHBpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UsIFRyYW5zbGF0aW9uQ2h1bmtTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuLyoqXG4gKiBQbGVhc2UgZG9uJ3QgcHV0IHRoYXQgc2VydmljZSBpbiBwdWJsaWMgQVBJLlxuICogKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNJMThuU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY21zTWFwcGluZzogQ21zTWFwcGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb25DaHVuazogVHJhbnNsYXRpb25DaHVua1NlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWRDaHVua3NGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGkxOG5LZXlzID0gdGhpcy5jbXNNYXBwaW5nLmdldEkxOG5LZXlzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlcyk7XG4gICAgY29uc3QgaTE4bkNodW5rcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGkxOG5LZXlzKSB7XG4gICAgICBpMThuQ2h1bmtzLmFkZCh0aGlzLnRyYW5zbGF0aW9uQ2h1bmsuZ2V0Q2h1bmtOYW1lRm9yS2V5KGtleSkpO1xuICAgIH1cbiAgICB0aGlzLnRyYW5zbGF0aW9uLmxvYWRDaHVua3MoQXJyYXkuZnJvbShpMThuQ2h1bmtzKSk7XG4gIH1cbn1cbiJdfQ==