/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, ComponentFactoryResolver, Inject, PLATFORM_ID, } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { CmsConfig } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "@angular/common";
var ComponentMapperService = /** @class */ (function () {
    function ComponentMapperService(componentFactoryResolver, config, document, platform) {
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
     * @param typeCode the component type
     */
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
    ComponentMapperService.prototype.getComponent = /**
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
    function (typeCode) {
        /** @type {?} */
        var componentConfig = this.config.cmsComponents[typeCode];
        if (!componentConfig) {
            if (!this.missingComponents.includes(typeCode)) {
                this.missingComponents.push(typeCode);
                console.warn("No component implementation found for the CMS component type '" + typeCode + "'.\n", "Make sure you implement a component and register it in the mapper.");
            }
        }
        return componentConfig ? componentConfig.component : null;
    };
    /**
     * @param {?} typeCode
     * @return {?}
     */
    ComponentMapperService.prototype.getComponentFactoryByCode = /**
     * @param {?} typeCode
     * @return {?}
     */
    function (typeCode) {
        /** @type {?} */
        var component = this.getComponent(typeCode);
        if (!component) {
            return null;
        }
        /** @type {?} */
        var factory = this.componentFactoryResolver.resolveComponentFactory(component);
        if (!factory) {
            console.warn("No component factory found for the CMS component type '" + typeCode + "'.\n", "Make sure you add a component to the 'entryComponents' array in the NgModule.");
            return null;
        }
        return factory;
    };
    /**
     * @param {?} typeCode
     * @return {?}
     */
    ComponentMapperService.prototype.isWebComponent = /**
     * @param {?} typeCode
     * @return {?}
     */
    function (typeCode) {
        /** @type {?} */
        var component = this.getComponent(typeCode);
        return typeof component === 'string' && (component || '').includes('#');
    };
    /**
     * @param {?} componentType
     * @param {?} renderer
     * @return {?}
     */
    ComponentMapperService.prototype.initWebComponent = /**
     * @param {?} componentType
     * @param {?} renderer
     * @return {?}
     */
    function (componentType, renderer) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            var _a = tslib_1.__read(_this.getComponent(componentType).split('#'), 2), path = _a[0], selector = _a[1];
            /** @type {?} */
            var script = _this.loadedWebComponents[path];
            if (!script) {
                script = renderer.createElement('script');
                _this.loadedWebComponents[path] = script;
                script.setAttribute('src', path);
                renderer.appendChild(_this.document.body, script);
                if (isPlatformBrowser(_this.platform)) {
                    script.onload = (/**
                     * @return {?}
                     */
                    function () {
                        script.onload = null;
                    });
                }
            }
            if (script.onload) {
                // If script is still loading (has onload callback defined)
                // add new callback and chain it with the existing one.
                // Needed to support loading multiple components from one script
                /** @type {?} */
                var chainedOnload_1 = script.onload;
                script.onload = (/**
                 * @return {?}
                 */
                function () {
                    chainedOnload_1();
                    resolve(selector);
                });
            }
            else {
                resolve(selector);
            }
        }));
    };
    ComponentMapperService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ComponentMapperService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: CmsConfig },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    /** @nocollapse */ ComponentMapperService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ComponentMapperService_Factory() { return new ComponentMapperService(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i1.CmsConfig), i0.ɵɵinject(i2.DOCUMENT), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: ComponentMapperService, providedIn: "root" });
    return ComponentMapperService;
}());
export { ComponentMapperService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LW1hcHBlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtbWFwcGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLHdCQUF3QixFQUN4QixNQUFNLEVBRU4sV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFFNUM7SUFNRSxnQ0FDWSx3QkFBa0QsRUFDbEQsTUFBaUIsRUFDQyxRQUFhLEVBQ1YsUUFBYTtRQUhsQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELFdBQU0sR0FBTixNQUFNLENBQVc7UUFDQyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ1YsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQVI5QyxzQkFBaUIsR0FBYSxFQUFFLENBQUM7UUFFekIsd0JBQW1CLEdBQTRCLEVBQUUsQ0FBQztJQU92RCxDQUFDO0lBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FtQkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ08sNkNBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBdEIsVUFBdUIsUUFBZ0I7O1lBQy9CLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDM0QsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDOUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztn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OlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBJbmplY3QsXG4gIFJlbmRlcmVyMixcbiAgUExBVEZPUk1fSUQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENtc0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TWFwcGVyU2VydmljZSB7XG4gIG1pc3NpbmdDb21wb25lbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHByaXZhdGUgbG9hZGVkV2ViQ29tcG9uZW50czogeyBbcGF0aDogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQ21zQ29uZmlnLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBkb2N1bWVudDogYW55LFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybTogYW55XG4gICkge31cblxuICAvKipcbiAgICogQGRlc2NcbiAgICogcmV0dXJucyBhIHdlYiBjb21wb25lbnQgZm9yIHRoZSBDTVMgdHlwZWNvZGUuXG4gICAqXG4gICAqIFRoZSBtYXBwaW5nIG9mIENNUyBjb21wb25lbnRzIHRvIHdlYiBjb21wb25ldG5zIHJlcXVpcmVzIGEgbWFwcGluZy5cbiAgICogVGhpcyBpcyBjb25maWd1cmFibGUgd2hlbiB0aGUgbW9kdWxlIGlzIGxvYWRlZC5cbiAgICpcbiAgICogRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB7XG4gICAqICAgICAgJ0NNU0xpbmtDb21wb25lbnQnOiAnTGlua0NvbXBvbmVudCcsXG4gICAqICAgICAgJ1NpbXBsZVJlc3BvbnNpdmVCYW5uZXJDb21wb25lbnQnOiAnU2ltcGxlUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudCcsXG4gICAqICAgICAgW2V0Yy5dXG4gICAqICB9XG4gICAqXG4gICAqIFRoZSB0eXBlIGNvZGVzIGFyZSBkeW5hbWljIHNpbmNlIHRoZXkgZGVwZW5kIG9uIHRoZSBpbXBsZW1lbnRhdGlvbi5cbiAgICogQ3VzdG9tZXIgd2lsbCBhZGQsIGV4dGVuZCBvciBpbmdvcmUgc3RhbmRhcmQgY29tcG9uZW50cy5cbiAgICpcbiAgICogQHBhcmFtIHR5cGVDb2RlIHRoZSBjb21wb25lbnQgdHlwZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldENvbXBvbmVudCh0eXBlQ29kZTogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCBjb21wb25lbnRDb25maWcgPSB0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzW3R5cGVDb2RlXTtcbiAgICBpZiAoIWNvbXBvbmVudENvbmZpZykge1xuICAgICAgaWYgKCF0aGlzLm1pc3NpbmdDb21wb25lbnRzLmluY2x1ZGVzKHR5cGVDb2RlKSkge1xuICAgICAgICB0aGlzLm1pc3NpbmdDb21wb25lbnRzLnB1c2godHlwZUNvZGUpO1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgYE5vIGNvbXBvbmVudCBpbXBsZW1lbnRhdGlvbiBmb3VuZCBmb3IgdGhlIENNUyBjb21wb25lbnQgdHlwZSAnJHt0eXBlQ29kZX0nLlxcbmAsXG4gICAgICAgICAgYE1ha2Ugc3VyZSB5b3UgaW1wbGVtZW50IGEgY29tcG9uZW50IGFuZCByZWdpc3RlciBpdCBpbiB0aGUgbWFwcGVyLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudENvbmZpZyA/IGNvbXBvbmVudENvbmZpZy5jb21wb25lbnQgOiBudWxsO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50RmFjdG9yeUJ5Q29kZSh0eXBlQ29kZTogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmdldENvbXBvbmVudCh0eXBlQ29kZSk7XG4gICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICBjb21wb25lbnRcbiAgICApO1xuXG4gICAgaWYgKCFmYWN0b3J5KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBObyBjb21wb25lbnQgZmFjdG9yeSBmb3VuZCBmb3IgdGhlIENNUyBjb21wb25lbnQgdHlwZSAnJHt0eXBlQ29kZX0nLlxcbmAsXG4gICAgICAgIGBNYWtlIHN1cmUgeW91IGFkZCBhIGNvbXBvbmVudCB0byB0aGUgJ2VudHJ5Q29tcG9uZW50cycgYXJyYXkgaW4gdGhlIE5nTW9kdWxlLmBcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGZhY3Rvcnk7XG4gIH1cblxuICBpc1dlYkNvbXBvbmVudCh0eXBlQ29kZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5nZXRDb21wb25lbnQodHlwZUNvZGUpO1xuICAgIHJldHVybiB0eXBlb2YgY29tcG9uZW50ID09PSAnc3RyaW5nJyAmJiAoY29tcG9uZW50IHx8ICcnKS5pbmNsdWRlcygnIycpO1xuICB9XG5cbiAgaW5pdFdlYkNvbXBvbmVudChcbiAgICBjb21wb25lbnRUeXBlOiBzdHJpbmcsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IFtwYXRoLCBzZWxlY3Rvcl0gPSB0aGlzLmdldENvbXBvbmVudChjb21wb25lbnRUeXBlKS5zcGxpdCgnIycpO1xuXG4gICAgICBsZXQgc2NyaXB0ID0gdGhpcy5sb2FkZWRXZWJDb21wb25lbnRzW3BhdGhdO1xuXG4gICAgICBpZiAoIXNjcmlwdCkge1xuICAgICAgICBzY3JpcHQgPSByZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgdGhpcy5sb2FkZWRXZWJDb21wb25lbnRzW3BhdGhdID0gc2NyaXB0O1xuICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCBwYXRoKTtcbiAgICAgICAgcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5kb2N1bWVudC5ib2R5LCBzY3JpcHQpO1xuXG4gICAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtKSkge1xuICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gbnVsbDtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzY3JpcHQub25sb2FkKSB7XG4gICAgICAgIC8vIElmIHNjcmlwdCBpcyBzdGlsbCBsb2FkaW5nIChoYXMgb25sb2FkIGNhbGxiYWNrIGRlZmluZWQpXG4gICAgICAgIC8vIGFkZCBuZXcgY2FsbGJhY2sgYW5kIGNoYWluIGl0IHdpdGggdGhlIGV4aXN0aW5nIG9uZS5cbiAgICAgICAgLy8gTmVlZGVkIHRvIHN1cHBvcnQgbG9hZGluZyBtdWx0aXBsZSBjb21wb25lbnRzIGZyb20gb25lIHNjcmlwdFxuICAgICAgICBjb25zdCBjaGFpbmVkT25sb2FkID0gc2NyaXB0Lm9ubG9hZDtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICBjaGFpbmVkT25sb2FkKCk7XG4gICAgICAgICAgcmVzb2x2ZShzZWxlY3Rvcik7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19