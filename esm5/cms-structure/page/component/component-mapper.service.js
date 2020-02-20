import { __decorate, __param, __read } from "tslib";
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ComponentFactoryResolver, Inject, Injectable, PLATFORM_ID, Renderer2, } from '@angular/core';
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
    ComponentMapperService.prototype.getComponent = function (typeCode) {
        var componentConfig = this.config.cmsComponents[typeCode];
        if (!componentConfig) {
            if (!this.missingComponents.includes(typeCode)) {
                this.missingComponents.push(typeCode);
                console.warn("No component implementation found for the CMS component type '" + typeCode + "'.\n", "Make sure you implement a component and register it in the mapper.");
            }
        }
        return componentConfig ? componentConfig.component : null;
    };
    ComponentMapperService.prototype.getComponentFactoryByCode = function (typeCode) {
        var component = this.getComponent(typeCode);
        if (!component) {
            return null;
        }
        var factory = this.componentFactoryResolver.resolveComponentFactory(component);
        if (!factory) {
            console.warn("No component factory found for the CMS component type '" + typeCode + "'.\n", "Make sure you add a component to the 'entryComponents' array in the NgModule.");
            return null;
        }
        return factory;
    };
    ComponentMapperService.prototype.isWebComponent = function (typeCode) {
        var component = this.getComponent(typeCode);
        return typeof component === 'string' && (component || '').includes('#');
    };
    ComponentMapperService.prototype.initWebComponent = function (componentType, renderer) {
        var _this = this;
        return new Promise(function (resolve) {
            var _a = __read(_this.getComponent(componentType).split('#'), 2), path = _a[0], selector = _a[1];
            var script = _this.loadedWebComponents[path];
            if (!script) {
                if (path) {
                    script = renderer.createElement('script');
                    _this.loadedWebComponents[path] = script;
                    script.setAttribute('src', path);
                    renderer.appendChild(_this.document.body, script);
                    if (isPlatformBrowser(_this.platform)) {
                        script.onload = function () {
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
                var chainedOnload_1 = script.onload;
                script.onload = function () {
                    chainedOnload_1();
                    resolve(selector);
                };
            }
            else {
                resolve(selector);
            }
        });
    };
    ComponentMapperService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: CmsConfig },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    ComponentMapperService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ComponentMapperService_Factory() { return new ComponentMapperService(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i1.CmsConfig), i0.ɵɵinject(i2.DOCUMENT), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: ComponentMapperService, providedIn: "root" });
    ComponentMapperService = __decorate([
        Injectable({ providedIn: 'root' }),
        __param(2, Inject(DOCUMENT)),
        __param(3, Inject(PLATFORM_ID))
    ], ComponentMapperService);
    return ComponentMapperService;
}());
export { ComponentMapperService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LW1hcHBlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtbWFwcGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLE1BQU0sRUFDTixVQUFVLEVBQ1YsV0FBVyxFQUNYLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFHNUM7SUFLRSxnQ0FDWSx3QkFBa0QsRUFDbEQsTUFBaUIsRUFDQyxRQUFhLEVBQ1YsUUFBYTtRQUhsQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELFdBQU0sR0FBTixNQUFNLENBQVc7UUFDQyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ1YsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQVI5QyxzQkFBaUIsR0FBYSxFQUFFLENBQUM7UUFFekIsd0JBQW1CLEdBQTRCLEVBQUUsQ0FBQztJQU92RCxDQUFDO0lBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FtQkc7SUFDTyw2Q0FBWSxHQUF0QixVQUF1QixRQUFnQjtRQUNyQyxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUM5QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLENBQUMsSUFBSSxDQUNWLG1F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V0FBVyxDQUFDLENBQUE7T0FUWCxzQkFBc0IsQ0E2R2xDO2lDQXhIRDtDQXdIQyxBQTdHRCxJQTZHQztTQTdHWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIFBMQVRGT1JNX0lELFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRNYXBwZXJTZXJ2aWNlIHtcbiAgbWlzc2luZ0NvbXBvbmVudHM6IHN0cmluZ1tdID0gW107XG5cbiAgcHJpdmF0ZSBsb2FkZWRXZWJDb21wb25lbnRzOiB7IFtwYXRoOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBDbXNDb25maWcsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJvdGVjdGVkIGRvY3VtZW50OiBhbnksXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJvdGVjdGVkIHBsYXRmb3JtOiBhbnlcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBAZGVzY1xuICAgKiByZXR1cm5zIGEgd2ViIGNvbXBvbmVudCBmb3IgdGhlIENNUyB0eXBlY29kZS5cbiAgICpcbiAgICogVGhlIG1hcHBpbmcgb2YgQ01TIGNvbXBvbmVudHMgdG8gd2ViIGNvbXBvbmV0bnMgcmVxdWlyZXMgYSBtYXBwaW5nLlxuICAgKiBUaGlzIGlzIGNvbmZpZ3VyYWJsZSB3aGVuIHRoZSBtb2R1bGUgaXMgbG9hZGVkLlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHtcbiAgICogICAgICAnQ01TTGlua0NvbXBvbmVudCc6ICdMaW5rQ29tcG9uZW50JyxcbiAgICogICAgICAnU2ltcGxlUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudCc6ICdTaW1wbGVSZXNwb25zaXZlQmFubmVyQ29tcG9uZW50JyxcbiAgICogICAgICBbZXRjLl1cbiAgICogIH1cbiAgICpcbiAgICogVGhlIHR5cGUgY29kZXMgYXJlIGR5bmFtaWMgc2luY2UgdGhleSBkZXBlbmQgb24gdGhlIGltcGxlbWVudGF0aW9uLlxuICAgKiBDdXN0b21lciB3aWxsIGFkZCwgZXh0ZW5kIG9yIGluZ29yZSBzdGFuZGFyZCBjb21wb25lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZUNvZGUgdGhlIGNvbXBvbmVudCB0eXBlXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0Q29tcG9uZW50KHR5cGVDb2RlOiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IGNvbXBvbmVudENvbmZpZyA9IHRoaXMuY29uZmlnLmNtc0NvbXBvbmVudHNbdHlwZUNvZGVdO1xuICAgIGlmICghY29tcG9uZW50Q29uZmlnKSB7XG4gICAgICBpZiAoIXRoaXMubWlzc2luZ0NvbXBvbmVudHMuaW5jbHVkZXModHlwZUNvZGUpKSB7XG4gICAgICAgIHRoaXMubWlzc2luZ0NvbXBvbmVudHMucHVzaCh0eXBlQ29kZSk7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgTm8gY29tcG9uZW50IGltcGxlbWVudGF0aW9uIGZvdW5kIGZvciB0aGUgQ01TIGNvbXBvbmVudCB0eXBlICcke3R5cGVDb2RlfScuXFxuYCxcbiAgICAgICAgICBgTWFrZSBzdXJlIHlvdSBpbXBsZW1lbnQgYSBjb21wb25lbnQgYW5kIHJlZ2lzdGVyIGl0IGluIHRoZSBtYXBwZXIuYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50Q29uZmlnID8gY29tcG9uZW50Q29uZmlnLmNvbXBvbmVudCA6IG51bGw7XG4gIH1cblxuICBnZXRDb21wb25lbnRGYWN0b3J5QnlDb2RlKHR5cGVDb2RlOiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KHR5cGVDb2RlKTtcbiAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgIGNvbXBvbmVudFxuICAgICk7XG5cbiAgICBpZiAoIWZhY3RvcnkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYE5vIGNvbXBvbmVudCBmYWN0b3J5IGZvdW5kIGZvciB0aGUgQ01TIGNvbXBvbmVudCB0eXBlICcke3R5cGVDb2RlfScuXFxuYCxcbiAgICAgICAgYE1ha2Ugc3VyZSB5b3UgYWRkIGEgY29tcG9uZW50IHRvIHRoZSAnZW50cnlDb21wb25lbnRzJyBhcnJheSBpbiB0aGUgTmdNb2R1bGUuYFxuICAgICAgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZmFjdG9yeTtcbiAgfVxuXG4gIGlzV2ViQ29tcG9uZW50KHR5cGVDb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmdldENvbXBvbmVudCh0eXBlQ29kZSk7XG4gICAgcmV0dXJuIHR5cGVvZiBjb21wb25lbnQgPT09ICdzdHJpbmcnICYmIChjb21wb25lbnQgfHwgJycpLmluY2x1ZGVzKCcjJyk7XG4gIH1cblxuICBpbml0V2ViQ29tcG9uZW50KFxuICAgIGNvbXBvbmVudFR5cGU6IHN0cmluZyxcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXG4gICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgW3BhdGgsIHNlbGVjdG9yXSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNvbXBvbmVudFR5cGUpLnNwbGl0KCcjJyk7XG5cbiAgICAgIGxldCBzY3JpcHQgPSB0aGlzLmxvYWRlZFdlYkNvbXBvbmVudHNbcGF0aF07XG5cbiAgICAgIGlmICghc2NyaXB0KSB7XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgc2NyaXB0ID0gcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgdGhpcy5sb2FkZWRXZWJDb21wb25lbnRzW3BhdGhdID0gc2NyaXB0O1xuICAgICAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBhdGgpO1xuICAgICAgICAgIHJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZG9jdW1lbnQuYm9keSwgc2NyaXB0KTtcbiAgICAgICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkpIHtcbiAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2NyaXB0ID0ge307XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNjcmlwdC5vbmxvYWQpIHtcbiAgICAgICAgLy8gSWYgc2NyaXB0IGlzIHN0aWxsIGxvYWRpbmcgKGhhcyBvbmxvYWQgY2FsbGJhY2sgZGVmaW5lZClcbiAgICAgICAgLy8gYWRkIG5ldyBjYWxsYmFjayBhbmQgY2hhaW4gaXQgd2l0aCB0aGUgZXhpc3Rpbmcgb25lLlxuICAgICAgICAvLyBOZWVkZWQgdG8gc3VwcG9ydCBsb2FkaW5nIG11bHRpcGxlIGNvbXBvbmVudHMgZnJvbSBvbmUgc2NyaXB0XG4gICAgICAgIGNvbnN0IGNoYWluZWRPbmxvYWQgPSBzY3JpcHQub25sb2FkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgIGNoYWluZWRPbmxvYWQoKTtcbiAgICAgICAgICByZXNvbHZlKHNlbGVjdG9yKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoc2VsZWN0b3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=