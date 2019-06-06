/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, ComponentFactoryResolver, Inject, PLATFORM_ID, } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LW1hcHBlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtbWFwcGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1Ysd0JBQXdCLEVBQ3hCLE1BQU0sRUFFTixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUc1QyxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7O0lBS2pDLFlBQ1ksd0JBQWtELEVBQ2xELE1BQWlCLEVBQ0MsUUFBYSxFQUNWLFFBQWE7UUFIbEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ0MsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNWLGFBQVEsR0FBUixRQUFRLENBQUs7UUFSOUMsc0JBQWlCLEdBQWEsRUFBRSxDQUFDO1FBRXpCLHdCQUFtQixHQUE0QixFQUFFLENBQUM7SUFPdkQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzQk0sWUFBWSxDQUFDLFFBQWdCOztjQUMvQixlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzNELElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQ1YsaUVBQWlFLFFB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YWN0b3J5UmVzb2x2ZXIsXG4gIEluamVjdCxcbiAgUmVuZGVyZXIyLFxuICBQTEFURk9STV9JRCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ21zQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRNYXBwZXJTZXJ2aWNlIHtcbiAgbWlzc2luZ0NvbXBvbmVudHM6IHN0cmluZ1tdID0gW107XG5cbiAgcHJpdmF0ZSBsb2FkZWRXZWJDb21wb25lbnRzOiB7IFtwYXRoOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBDbXNDb25maWcsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJvdGVjdGVkIGRvY3VtZW50OiBhbnksXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJvdGVjdGVkIHBsYXRmb3JtOiBhbnlcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBAZGVzY1xuICAgKiByZXR1cm5zIGEgd2ViIGNvbXBvbmVudCBmb3IgdGhlIENNUyB0eXBlY29kZS5cbiAgICpcbiAgICogVGhlIG1hcHBpbmcgb2YgQ01TIGNvbXBvbmVudHMgdG8gd2ViIGNvbXBvbmV0bnMgcmVxdWlyZXMgYSBtYXBwaW5nLlxuICAgKiBUaGlzIGlzIGNvbmZpZ3VyYWJsZSB3aGVuIHRoZSBtb2R1bGUgaXMgbG9hZGVkLlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHtcbiAgICogICAgICAnQ01TTGlua0NvbXBvbmVudCc6ICdMaW5rQ29tcG9uZW50JyxcbiAgICogICAgICAnU2ltcGxlUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudCc6ICdTaW1wbGVSZXNwb25zaXZlQmFubmVyQ29tcG9uZW50JyxcbiAgICogICAgICBbZXRjLl1cbiAgICogIH1cbiAgICpcbiAgICogVGhlIHR5cGUgY29kZXMgYXJlIGR5bmFtaWMgc2luY2UgdGhleSBkZXBlbmQgb24gdGhlIGltcGxlbWVudGF0aW9uLlxuICAgKiBDdXN0b21lciB3aWxsIGFkZCwgZXh0ZW5kIG9yIGluZ29yZSBzdGFuZGFyZCBjb21wb25lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZUNvZGUgdGhlIGNvbXBvbmVudCB0eXBlXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0Q29tcG9uZW50KHR5cGVDb2RlOiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IGNvbXBvbmVudENvbmZpZyA9IHRoaXMuY29uZmlnLmNtc0NvbXBvbmVudHNbdHlwZUNvZGVdO1xuICAgIGlmICghY29tcG9uZW50Q29uZmlnKSB7XG4gICAgICBpZiAoIXRoaXMubWlzc2luZ0NvbXBvbmVudHMuaW5jbHVkZXModHlwZUNvZGUpKSB7XG4gICAgICAgIHRoaXMubWlzc2luZ0NvbXBvbmVudHMucHVzaCh0eXBlQ29kZSk7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgTm8gY29tcG9uZW50IGltcGxlbWVudGF0aW9uIGZvdW5kIGZvciB0aGUgQ01TIGNvbXBvbmVudCB0eXBlICcke3R5cGVDb2RlfScuXFxuYCxcbiAgICAgICAgICBgTWFrZSBzdXJlIHlvdSBpbXBsZW1lbnQgYSBjb21wb25lbnQgYW5kIHJlZ2lzdGVyIGl0IGluIHRoZSBtYXBwZXIuYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50Q29uZmlnID8gY29tcG9uZW50Q29uZmlnLmNvbXBvbmVudCA6IG51bGw7XG4gIH1cblxuICBnZXRDb21wb25lbnRGYWN0b3J5QnlDb2RlKHR5cGVDb2RlOiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KHR5cGVDb2RlKTtcbiAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgIGNvbXBvbmVudFxuICAgICk7XG5cbiAgICBpZiAoIWZhY3RvcnkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYE5vIGNvbXBvbmVudCBmYWN0b3J5IGZvdW5kIGZvciB0aGUgQ01TIGNvbXBvbmVudCB0eXBlICcke3R5cGVDb2RlfScuXFxuYCxcbiAgICAgICAgYE1ha2Ugc3VyZSB5b3UgYWRkIGEgY29tcG9uZW50IHRvIHRoZSAnZW50cnlDb21wb25lbnRzJyBhcnJheSBpbiB0aGUgTmdNb2R1bGUuYFxuICAgICAgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZmFjdG9yeTtcbiAgfVxuXG4gIGlzV2ViQ29tcG9uZW50KHR5cGVDb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmdldENvbXBvbmVudCh0eXBlQ29kZSk7XG4gICAgcmV0dXJuIHR5cGVvZiBjb21wb25lbnQgPT09ICdzdHJpbmcnICYmIChjb21wb25lbnQgfHwgJycpLmluY2x1ZGVzKCcjJyk7XG4gIH1cblxuICBpbml0V2ViQ29tcG9uZW50KFxuICAgIGNvbXBvbmVudFR5cGU6IHN0cmluZyxcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXG4gICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgW3BhdGgsIHNlbGVjdG9yXSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNvbXBvbmVudFR5cGUpLnNwbGl0KCcjJyk7XG5cbiAgICAgIGxldCBzY3JpcHQgPSB0aGlzLmxvYWRlZFdlYkNvbXBvbmVudHNbcGF0aF07XG5cbiAgICAgIGlmICghc2NyaXB0KSB7XG4gICAgICAgIHNjcmlwdCA9IHJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICB0aGlzLmxvYWRlZFdlYkNvbXBvbmVudHNbcGF0aF0gPSBzY3JpcHQ7XG4gICAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBhdGgpO1xuICAgICAgICByZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmRvY3VtZW50LmJvZHksIHNjcmlwdCk7XG5cbiAgICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm0pKSB7XG4gICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNjcmlwdC5vbmxvYWQpIHtcbiAgICAgICAgLy8gSWYgc2NyaXB0IGlzIHN0aWxsIGxvYWRpbmcgKGhhcyBvbmxvYWQgY2FsbGJhY2sgZGVmaW5lZClcbiAgICAgICAgLy8gYWRkIG5ldyBjYWxsYmFjayBhbmQgY2hhaW4gaXQgd2l0aCB0aGUgZXhpc3Rpbmcgb25lLlxuICAgICAgICAvLyBOZWVkZWQgdG8gc3VwcG9ydCBsb2FkaW5nIG11bHRpcGxlIGNvbXBvbmVudHMgZnJvbSBvbmUgc2NyaXB0XG4gICAgICAgIGNvbnN0IGNoYWluZWRPbmxvYWQgPSBzY3JpcHQub25sb2FkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgIGNoYWluZWRPbmxvYWQoKTtcbiAgICAgICAgICByZXNvbHZlKHNlbGVjdG9yKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoc2VsZWN0b3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=