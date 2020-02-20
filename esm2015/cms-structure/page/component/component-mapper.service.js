import { __decorate, __param } from "tslib";
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ComponentFactoryResolver, Inject, Injectable, PLATFORM_ID, Renderer2, } from '@angular/core';
import { CmsConfig } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "@angular/common";
let ComponentMapperService = class ComponentMapperService {
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
     * @param typeCode the component type
     */
    getComponent(typeCode) {
        const componentConfig = this.config.cmsComponents[typeCode];
        if (!componentConfig) {
            if (!this.missingComponents.includes(typeCode)) {
                this.missingComponents.push(typeCode);
                console.warn(`No component implementation found for the CMS component type '${typeCode}'.\n`, `Make sure you implement a component and register it in the mapper.`);
            }
        }
        return componentConfig ? componentConfig.component : null;
    }
    getComponentFactoryByCode(typeCode) {
        const component = this.getComponent(typeCode);
        if (!component) {
            return null;
        }
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        if (!factory) {
            console.warn(`No component factory found for the CMS component type '${typeCode}'.\n`, `Make sure you add a component to the 'entryComponents' array in the NgModule.`);
            return null;
        }
        return factory;
    }
    isWebComponent(typeCode) {
        const component = this.getComponent(typeCode);
        return typeof component === 'string' && (component || '').includes('#');
    }
    initWebComponent(componentType, renderer) {
        return new Promise(resolve => {
            const [path, selector] = this.getComponent(componentType).split('#');
            let script = this.loadedWebComponents[path];
            if (!script) {
                if (path) {
                    script = renderer.createElement('script');
                    this.loadedWebComponents[path] = script;
                    script.setAttribute('src', path);
                    renderer.appendChild(this.document.body, script);
                    if (isPlatformBrowser(this.platform)) {
                        script.onload = () => {
                            script.onload = null;
                        };
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
                const chainedOnload = script.onload;
                script.onload = () => {
                    chainedOnload();
                    resolve(selector);
                };
            }
            else {
                resolve(selector);
            }
        });
    }
};
ComponentMapperService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: CmsConfig },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
ComponentMapperService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ComponentMapperService_Factory() { return new ComponentMapperService(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i1.CmsConfig), i0.ɵɵinject(i2.DOCUMENT), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: ComponentMapperService, providedIn: "root" });
ComponentMapperService = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(2, Inject(DOCUMENT)),
    __param(3, Inject(PLATFORM_ID))
], ComponentMapperService);
export { ComponentMapperService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LW1hcHBlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtbWFwcGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLE1BQU0sRUFDTixVQUFVLEVBQ1YsV0FBVyxFQUNYLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFHNUMsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFLakMsWUFDWSx3QkFBa0QsRUFDbEQsTUFBaUIsRUFDQyxRQUFhLEVBQ1YsUUFBYTtRQUhsQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELFdBQU0sR0FBTixNQUFNLENBQVc7UUFDQyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ1YsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQVI5QyxzQkFBaUIsR0FBYSxFQUFFLENBQUM7UUFFekIsd0JBQW1CLEdBQTRCLEVBQUUsQ0FBQztJQU92RCxDQUFDO0lBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FtQkc7SUFDTyxZQUFZLENBQUMsUUFBZ0I7UUFDckMsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDOUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEMs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QVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztJQVM5QixXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNoQixXQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtHQVRYLHNCQUFzQixDQTZHbEM7U0E3R1ksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBQTEFURk9STV9JRCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TWFwcGVyU2VydmljZSB7XG4gIG1pc3NpbmdDb21wb25lbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHByaXZhdGUgbG9hZGVkV2ViQ29tcG9uZW50czogeyBbcGF0aDogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQ21zQ29uZmlnLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBkb2N1bWVudDogYW55LFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybTogYW55XG4gICkge31cblxuICAvKipcbiAgICogQGRlc2NcbiAgICogcmV0dXJucyBhIHdlYiBjb21wb25lbnQgZm9yIHRoZSBDTVMgdHlwZWNvZGUuXG4gICAqXG4gICAqIFRoZSBtYXBwaW5nIG9mIENNUyBjb21wb25lbnRzIHRvIHdlYiBjb21wb25ldG5zIHJlcXVpcmVzIGEgbWFwcGluZy5cbiAgICogVGhpcyBpcyBjb25maWd1cmFibGUgd2hlbiB0aGUgbW9kdWxlIGlzIGxvYWRlZC5cbiAgICpcbiAgICogRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB7XG4gICAqICAgICAgJ0NNU0xpbmtDb21wb25lbnQnOiAnTGlua0NvbXBvbmVudCcsXG4gICAqICAgICAgJ1NpbXBsZVJlc3BvbnNpdmVCYW5uZXJDb21wb25lbnQnOiAnU2ltcGxlUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudCcsXG4gICAqICAgICAgW2V0Yy5dXG4gICAqICB9XG4gICAqXG4gICAqIFRoZSB0eXBlIGNvZGVzIGFyZSBkeW5hbWljIHNpbmNlIHRoZXkgZGVwZW5kIG9uIHRoZSBpbXBsZW1lbnRhdGlvbi5cbiAgICogQ3VzdG9tZXIgd2lsbCBhZGQsIGV4dGVuZCBvciBpbmdvcmUgc3RhbmRhcmQgY29tcG9uZW50cy5cbiAgICpcbiAgICogQHBhcmFtIHR5cGVDb2RlIHRoZSBjb21wb25lbnQgdHlwZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldENvbXBvbmVudCh0eXBlQ29kZTogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCBjb21wb25lbnRDb25maWcgPSB0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzW3R5cGVDb2RlXTtcbiAgICBpZiAoIWNvbXBvbmVudENvbmZpZykge1xuICAgICAgaWYgKCF0aGlzLm1pc3NpbmdDb21wb25lbnRzLmluY2x1ZGVzKHR5cGVDb2RlKSkge1xuICAgICAgICB0aGlzLm1pc3NpbmdDb21wb25lbnRzLnB1c2godHlwZUNvZGUpO1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgYE5vIGNvbXBvbmVudCBpbXBsZW1lbnRhdGlvbiBmb3VuZCBmb3IgdGhlIENNUyBjb21wb25lbnQgdHlwZSAnJHt0eXBlQ29kZX0nLlxcbmAsXG4gICAgICAgICAgYE1ha2Ugc3VyZSB5b3UgaW1wbGVtZW50IGEgY29tcG9uZW50IGFuZCByZWdpc3RlciBpdCBpbiB0aGUgbWFwcGVyLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudENvbmZpZyA/IGNvbXBvbmVudENvbmZpZy5jb21wb25lbnQgOiBudWxsO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50RmFjdG9yeUJ5Q29kZSh0eXBlQ29kZTogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmdldENvbXBvbmVudCh0eXBlQ29kZSk7XG4gICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICBjb21wb25lbnRcbiAgICApO1xuXG4gICAgaWYgKCFmYWN0b3J5KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBObyBjb21wb25lbnQgZmFjdG9yeSBmb3VuZCBmb3IgdGhlIENNUyBjb21wb25lbnQgdHlwZSAnJHt0eXBlQ29kZX0nLlxcbmAsXG4gICAgICAgIGBNYWtlIHN1cmUgeW91IGFkZCBhIGNvbXBvbmVudCB0byB0aGUgJ2VudHJ5Q29tcG9uZW50cycgYXJyYXkgaW4gdGhlIE5nTW9kdWxlLmBcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGZhY3Rvcnk7XG4gIH1cblxuICBpc1dlYkNvbXBvbmVudCh0eXBlQ29kZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5nZXRDb21wb25lbnQodHlwZUNvZGUpO1xuICAgIHJldHVybiB0eXBlb2YgY29tcG9uZW50ID09PSAnc3RyaW5nJyAmJiAoY29tcG9uZW50IHx8ICcnKS5pbmNsdWRlcygnIycpO1xuICB9XG5cbiAgaW5pdFdlYkNvbXBvbmVudChcbiAgICBjb21wb25lbnRUeXBlOiBzdHJpbmcsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IFtwYXRoLCBzZWxlY3Rvcl0gPSB0aGlzLmdldENvbXBvbmVudChjb21wb25lbnRUeXBlKS5zcGxpdCgnIycpO1xuXG4gICAgICBsZXQgc2NyaXB0ID0gdGhpcy5sb2FkZWRXZWJDb21wb25lbnRzW3BhdGhdO1xuXG4gICAgICBpZiAoIXNjcmlwdCkge1xuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgIHNjcmlwdCA9IHJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgIHRoaXMubG9hZGVkV2ViQ29tcG9uZW50c1twYXRoXSA9IHNjcmlwdDtcbiAgICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCBwYXRoKTtcbiAgICAgICAgICByZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmRvY3VtZW50LmJvZHksIHNjcmlwdCk7XG4gICAgICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm0pKSB7XG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICBzY3JpcHQub25sb2FkID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjcmlwdCA9IHt9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzY3JpcHQub25sb2FkKSB7XG4gICAgICAgIC8vIElmIHNjcmlwdCBpcyBzdGlsbCBsb2FkaW5nIChoYXMgb25sb2FkIGNhbGxiYWNrIGRlZmluZWQpXG4gICAgICAgIC8vIGFkZCBuZXcgY2FsbGJhY2sgYW5kIGNoYWluIGl0IHdpdGggdGhlIGV4aXN0aW5nIG9uZS5cbiAgICAgICAgLy8gTmVlZGVkIHRvIHN1cHBvcnQgbG9hZGluZyBtdWx0aXBsZSBjb21wb25lbnRzIGZyb20gb25lIHNjcmlwdFxuICAgICAgICBjb25zdCBjaGFpbmVkT25sb2FkID0gc2NyaXB0Lm9ubG9hZDtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICBjaGFpbmVkT25sb2FkKCk7XG4gICAgICAgICAgcmVzb2x2ZShzZWxlY3Rvcik7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19