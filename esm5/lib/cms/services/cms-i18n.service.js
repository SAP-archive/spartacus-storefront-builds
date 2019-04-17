/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CmsMappingService } from './cms-mapping.service';
import { TranslationService, TranslationNamespaceService, } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "./cms-mapping.service";
import * as i2 from "@spartacus/core";
var CmsI18nService = /** @class */ (function () {
    function CmsI18nService(cmsMapping, translation, translationNamespace) {
        this.cmsMapping = cmsMapping;
        this.translation = translation;
        this.translationNamespace = translationNamespace;
    }
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    CmsI18nService.prototype.loadNamespacesForComponents = /**
     * @param {?} componentTypes
     * @return {?}
     */
    function (componentTypes) {
        var e_1, _a;
        /** @type {?} */
        var i18nKeys = this.cmsMapping.getI18nKeysForComponents(componentTypes);
        /** @type {?} */
        var i18nNamespaces = new Set();
        try {
            for (var i18nKeys_1 = tslib_1.__values(i18nKeys), i18nKeys_1_1 = i18nKeys_1.next(); !i18nKeys_1_1.done; i18nKeys_1_1 = i18nKeys_1.next()) {
                var key = i18nKeys_1_1.value;
                i18nNamespaces.add(this.translationNamespace.getNamespace(key));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (i18nKeys_1_1 && !i18nKeys_1_1.done && (_a = i18nKeys_1.return)) _a.call(i18nKeys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.translation.loadNamespaces(Array.from(i18nNamespaces));
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
        { type: TranslationNamespaceService }
    ]; };
    /** @nocollapse */ CmsI18nService.ngInjectableDef = i0.defineInjectable({ factory: function CmsI18nService_Factory() { return new CmsI18nService(i0.inject(i1.CmsMappingService), i0.inject(i2.TranslationService), i0.inject(i2.TranslationNamespaceService)); }, token: CmsI18nService, providedIn: "root" });
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
    CmsI18nService.prototype.translationNamespace;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWkxOG4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMvc2VydmljZXMvY21zLWkxOG4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUNMLGtCQUFrQixFQUNsQiwyQkFBMkIsR0FDNUIsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUV6QjtJQUlFLHdCQUNVLFVBQTZCLEVBQzdCLFdBQStCLEVBQy9CLG9CQUFpRDtRQUZqRCxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM3QixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFDL0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUE2QjtJQUN4RCxDQUFDOzs7OztJQUVKLG9EQUEyQjs7OztJQUEzQixVQUE0QixjQUF3Qjs7O1lBQzVDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FBQzs7WUFDbkUsY0FBYyxHQUFHLElBQUksR0FBRyxFQUFVOztZQUN4QyxLQUFrQixJQUFBLGFBQUEsaUJBQUEsUUFBUSxDQUFBLGtDQUFBLHdEQUFFO2dCQUF2QixJQUFNLEdBQUcscUJBQUE7Z0JBQ1osY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDakU7Ozs7Ozs7OztRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDOztnQkFqQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFSUSxpQkFBaUI7Z0JBRXhCLGtCQUFrQjtnQkFDbEIsMkJBQTJCOzs7eUJBSjdCO0NBeUJDLEFBbEJELElBa0JDO1NBZlksY0FBYzs7Ozs7O0lBRXZCLG9DQUFxQzs7Ozs7SUFDckMscUNBQXVDOzs7OztJQUN2Qyw4Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNNYXBwaW5nU2VydmljZSB9IGZyb20gJy4vY21zLW1hcHBpbmcuc2VydmljZSc7XG5pbXBvcnQge1xuICBUcmFuc2xhdGlvblNlcnZpY2UsXG4gIFRyYW5zbGF0aW9uTmFtZXNwYWNlU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc0kxOG5TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjbXNNYXBwaW5nOiBDbXNNYXBwaW5nU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbk5hbWVzcGFjZTogVHJhbnNsYXRpb25OYW1lc3BhY2VTZXJ2aWNlXG4gICkge31cblxuICBsb2FkTmFtZXNwYWNlc0ZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgaTE4bktleXMgPSB0aGlzLmNtc01hcHBpbmcuZ2V0STE4bktleXNGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzKTtcbiAgICBjb25zdCBpMThuTmFtZXNwYWNlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGkxOG5LZXlzKSB7XG4gICAgICBpMThuTmFtZXNwYWNlcy5hZGQodGhpcy50cmFuc2xhdGlvbk5hbWVzcGFjZS5nZXROYW1lc3BhY2Uoa2V5KSk7XG4gICAgfVxuICAgIHRoaXMudHJhbnNsYXRpb24ubG9hZE5hbWVzcGFjZXMoQXJyYXkuZnJvbShpMThuTmFtZXNwYWNlcykpO1xuICB9XG59XG4iXX0=