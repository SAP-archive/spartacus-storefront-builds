/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Inject, Injectable, PLATFORM_ID, } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { CmsConfig } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "@angular/common";
export class ComponentMapperService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} config
     * @param {?} document
     * @param {?} platform
     */
    constructor(componentFactoryResolver, config, document, platform) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.config = config;
        this.document = document;
        this.platform = platform;
        this.missingComponents = [];
        this.loadedWebComponents = {};
    }
    /**
     * @desc
     * returns a web component for the CMS typecode.
     *
     * The mapping of CMS components to web componetns requires a mapping.
     * This is configurable when the module is loaded.
     *
     * For example:
     *
     *  {
     *      'CMSLinkComponent': 'LinkComponent',
     *      'SimpleResponsiveBannerComponent': 'SimpleResponsiveBannerComponent',
     *      [etc.]
     *  }
     *
     * The type codes are dynamic since they depend on the implementation.
     * Customer will add, extend or ingore standard components.
     *
     * @protected
     * @param {?} typeCode the component type
     * @return {?}
     */
    getComponent(typeCode) {
        /** @type {?} */
        const componentConfig = this.config.cmsComponents[typeCode];
        if (!componentConfig) {
            if (!this.missingComponents.includes(typeCode)) {
                this.missingComponents.push(typeCode);
                console.warn(`No component implementation found for the CMS component type '${typeCode}'.\n`, `Make sure you implement a component and register it in the mapper.`);
            }
        }
        return componentConfig ? componentConfig.component : null;
    }
    /**
     * @param {?} typeCode
     * @return {?}
     */
    getComponentFactoryByCode(typeCode) {
        /** @type {?} */
        const component = this.getComponent(typeCode);
        if (!component) {
            return null;
        }
        /** @type {?} */
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        if (!factory) {
            console.warn(`No component factory found for the CMS component type '${typeCode}'.\n`, `Make sure you add a component to the 'entryComponents' array in the NgModule.`);
            return null;
        }
        return factory;
    }
    /**
     * @param {?} typeCode
     * @return {?}
     */
    isWebComponent(typeCode) {
        /** @type {?} */
        const component = this.getComponent(typeCode);
        return typeof component === 'string' && (component || '').includes('#');
    }
    /**
     * @param {?} componentType
     * @param {?} renderer
     * @return {?}
     */
    initWebComponent(componentType, renderer) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            const [path, selector] = this.getComponent(componentType).split('#');
            /** @type {?} */
            let script = this.loadedWebComponents[path];
            if (!script) {
                if (path) {
                    script = renderer.createElement('script');
                    this.loadedWebComponents[path] = script;
                    script.setAttribute('src', path);
                    renderer.appendChild(this.document.body, script);
                    if (isPlatformBrowser(this.platform)) {
                        script.onload = (/**
                         * @return {?}
                         */
                        () => {
                            script.onload = null;
                        });
                    }
                }
                else {
                    script = {};
                }
            }
            if (script.onload) {
                // If script is still loading (has onload callback defined)
                // add new callback and chain it with the existing one.
                // Needed to support loading multiple components from one script
                /** @type {?} */
                const chainedOnload = script.onload;
                script.onload = (/**
                 * @return {?}
                 */
                () => {
                    chainedOnload();
                    resolve(selector);
                });
            }
            else {
                resolve(selector);
            }
        }));
    }
}
ComponentMapperService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ComponentMapperService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: CmsConfig },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
/** @nocollapse */ ComponentMapperService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ComponentMapperService_Factory() { return new ComponentMapperService(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i1.CmsConfig), i0.ɵɵinject(i2.DOCUMENT), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: ComponentMapperService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ComponentMapperService.prototype.missingComponents;
    /**
     * @type {?}
     * @private
     */
    ComponentMapperService.prototype.loadedWebComponents;
    /**
     * @type {?}
     * @protected
     */
    ComponentMapperService.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @protected
     */
    ComponentMapperService.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    ComponentMapperService.prototype.document;
    /**
     * @type {?}
     * @protected
     */
    ComponentMapperService.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LW1hcHBlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtbWFwcGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsTUFBTSxFQUNOLFVBQVUsRUFDVixXQUFXLEdBRVosTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUc1QyxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7O0lBS2pDLFlBQ1ksd0JBQWtELEVBQ2xELE1BQWlCLEVBQ0MsUUFBYSxFQUNWLFFBQWE7UUFIbEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ0MsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNWLGFBQVEsR0FBUixRQUFRLENBQUs7UUFSOUMsc0JBQWlCLEdBQWEsRUFBRSxDQUFDO1FBRXpCLHdCQUFtQixHQUE0QixFQUFFLENBQUM7SUFPdkQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzQk0sWUFBWSxDQUFDLFFBQWdCOztjQUMvQixlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzNELElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQ1YsaUVBQWlFLFFB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LDBDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBQTEFURk9STV9JRCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5ULCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDbXNDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudE1hcHBlclNlcnZpY2Uge1xuICBtaXNzaW5nQ29tcG9uZW50czogc3RyaW5nW10gPSBbXTtcblxuICBwcml2YXRlIGxvYWRlZFdlYkNvbXBvbmVudHM6IHsgW3BhdGg6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByb3RlY3RlZCBjb25maWc6IENtc0NvbmZpZyxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jdW1lbnQ6IGFueSxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm06IGFueVxuICApIHt9XG5cbiAgLyoqXG4gICAqIEBkZXNjXG4gICAqIHJldHVybnMgYSB3ZWIgY29tcG9uZW50IGZvciB0aGUgQ01TIHR5cGVjb2RlLlxuICAgKlxuICAgKiBUaGUgbWFwcGluZyBvZiBDTVMgY29tcG9uZW50cyB0byB3ZWIgY29tcG9uZXRucyByZXF1aXJlcyBhIG1hcHBpbmcuXG4gICAqIFRoaXMgaXMgY29uZmlndXJhYmxlIHdoZW4gdGhlIG1vZHVsZSBpcyBsb2FkZWQuXG4gICAqXG4gICAqIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAge1xuICAgKiAgICAgICdDTVNMaW5rQ29tcG9uZW50JzogJ0xpbmtDb21wb25lbnQnLFxuICAgKiAgICAgICdTaW1wbGVSZXNwb25zaXZlQmFubmVyQ29tcG9uZW50JzogJ1NpbXBsZVJlc3BvbnNpdmVCYW5uZXJDb21wb25lbnQnLFxuICAgKiAgICAgIFtldGMuXVxuICAgKiAgfVxuICAgKlxuICAgKiBUaGUgdHlwZSBjb2RlcyBhcmUgZHluYW1pYyBzaW5jZSB0aGV5IGRlcGVuZCBvbiB0aGUgaW1wbGVtZW50YXRpb24uXG4gICAqIEN1c3RvbWVyIHdpbGwgYWRkLCBleHRlbmQgb3IgaW5nb3JlIHN0YW5kYXJkIGNvbXBvbmVudHMuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlQ29kZSB0aGUgY29tcG9uZW50IHR5cGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXRDb21wb25lbnQodHlwZUNvZGU6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3QgY29tcG9uZW50Q29uZmlnID0gdGhpcy5jb25maWcuY21zQ29tcG9uZW50c1t0eXBlQ29kZV07XG4gICAgaWYgKCFjb21wb25lbnRDb25maWcpIHtcbiAgICAgIGlmICghdGhpcy5taXNzaW5nQ29tcG9uZW50cy5pbmNsdWRlcyh0eXBlQ29kZSkpIHtcbiAgICAgICAgdGhpcy5taXNzaW5nQ29tcG9uZW50cy5wdXNoKHR5cGVDb2RlKTtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBObyBjb21wb25lbnQgaW1wbGVtZW50YXRpb24gZm91bmQgZm9yIHRoZSBDTVMgY29tcG9uZW50IHR5cGUgJyR7dHlwZUNvZGV9Jy5cXG5gLFxuICAgICAgICAgIGBNYWtlIHN1cmUgeW91IGltcGxlbWVudCBhIGNvbXBvbmVudCBhbmQgcmVnaXN0ZXIgaXQgaW4gdGhlIG1hcHBlci5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnRDb25maWcgPyBjb21wb25lbnRDb25maWcuY29tcG9uZW50IDogbnVsbDtcbiAgfVxuXG4gIGdldENvbXBvbmVudEZhY3RvcnlCeUNvZGUodHlwZUNvZGU6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5nZXRDb21wb25lbnQodHlwZUNvZGUpO1xuICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgY29tcG9uZW50XG4gICAgKTtcblxuICAgIGlmICghZmFjdG9yeSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgTm8gY29tcG9uZW50IGZhY3RvcnkgZm91bmQgZm9yIHRoZSBDTVMgY29tcG9uZW50IHR5cGUgJyR7dHlwZUNvZGV9Jy5cXG5gLFxuICAgICAgICBgTWFrZSBzdXJlIHlvdSBhZGQgYSBjb21wb25lbnQgdG8gdGhlICdlbnRyeUNvbXBvbmVudHMnIGFycmF5IGluIHRoZSBOZ01vZHVsZS5gXG4gICAgICApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBmYWN0b3J5O1xuICB9XG5cbiAgaXNXZWJDb21wb25lbnQodHlwZUNvZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KHR5cGVDb2RlKTtcbiAgICByZXR1cm4gdHlwZW9mIGNvbXBvbmVudCA9PT0gJ3N0cmluZycgJiYgKGNvbXBvbmVudCB8fCAnJykuaW5jbHVkZXMoJyMnKTtcbiAgfVxuXG4gIGluaXRXZWJDb21wb25lbnQoXG4gICAgY29tcG9uZW50VHlwZTogc3RyaW5nLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBjb25zdCBbcGF0aCwgc2VsZWN0b3JdID0gdGhpcy5nZXRDb21wb25lbnQoY29tcG9uZW50VHlwZSkuc3BsaXQoJyMnKTtcblxuICAgICAgbGV0IHNjcmlwdCA9IHRoaXMubG9hZGVkV2ViQ29tcG9uZW50c1twYXRoXTtcblxuICAgICAgaWYgKCFzY3JpcHQpIHtcbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICBzY3JpcHQgPSByZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICB0aGlzLmxvYWRlZFdlYkNvbXBvbmVudHNbcGF0aF0gPSBzY3JpcHQ7XG4gICAgICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgcGF0aCk7XG4gICAgICAgICAgcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5kb2N1bWVudC5ib2R5LCBzY3JpcHQpO1xuICAgICAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtKSkge1xuICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY3JpcHQgPSB7fTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2NyaXB0Lm9ubG9hZCkge1xuICAgICAgICAvLyBJZiBzY3JpcHQgaXMgc3RpbGwgbG9hZGluZyAoaGFzIG9ubG9hZCBjYWxsYmFjayBkZWZpbmVkKVxuICAgICAgICAvLyBhZGQgbmV3IGNhbGxiYWNrIGFuZCBjaGFpbiBpdCB3aXRoIHRoZSBleGlzdGluZyBvbmUuXG4gICAgICAgIC8vIE5lZWRlZCB0byBzdXBwb3J0IGxvYWRpbmcgbXVsdGlwbGUgY29tcG9uZW50cyBmcm9tIG9uZSBzY3JpcHRcbiAgICAgICAgY29uc3QgY2hhaW5lZE9ubG9hZCA9IHNjcmlwdC5vbmxvYWQ7XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgY2hhaW5lZE9ubG9hZCgpO1xuICAgICAgICAgIHJlc29sdmUoc2VsZWN0b3IpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==