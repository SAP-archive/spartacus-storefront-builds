import { __decorate, __param } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Inject, Injectable, RendererFactory2, } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { OutletPosition, OutletService, } from '../../../cms-structure/outlet/index';
import { OutletRendererService } from '../../../cms-structure/outlet/outlet-renderer.service';
import { LaunchRenderStrategy } from './launch-render.strategy';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../cms-structure/outlet/outlet.service";
import * as i3 from "../../../cms-structure/outlet/outlet-renderer.service";
let OutletRenderStrategy = class OutletRenderStrategy extends LaunchRenderStrategy {
    constructor(document, rendererFactory, outletService, componentFactoryResolver, outletRendererService) {
        super(document, rendererFactory);
        this.document = document;
        this.rendererFactory = rendererFactory;
        this.outletService = outletService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.outletRendererService = outletRendererService;
    }
    /**
     * Renders the element in the configured outlet
     *
     * @param config
     * @param caller
     * @param vcr
     */
    render(config, caller) {
        if (this.shouldRender(caller, config)) {
            const template = this.componentFactoryResolver.resolveComponentFactory(config.component);
            this.outletService.add(config.outlet, template, config.position ? config.position : OutletPosition.BEFORE);
            this.outletRendererService.render(config.outlet);
            this.renderedCallers.push({ caller });
            return this.outletRendererService.getOutletRef(config.outlet).pipe(map((outletDirective) => {
                const components = outletDirective.renderedComponents.get(config.position ? config.position : OutletPosition.BEFORE);
                return components
                    .reverse()
                    .find((component) => component.componentType === template.componentType);
            }), tap((component) => {
                if (config === null || config === void 0 ? void 0 : config.dialogType) {
                    this.applyClasses(component, config === null || config === void 0 ? void 0 : config.dialogType);
                }
            }));
        }
    }
    hasMatch(config) {
        return Boolean(config.outlet);
    }
    remove(caller, config) {
        const template = this.componentFactoryResolver.resolveComponentFactory(config.component);
        this.outletService.remove(config.outlet, config.position ? config.position : OutletPosition.BEFORE, template);
        super.remove(caller, config);
    }
};
OutletRenderStrategy.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: RendererFactory2 },
    { type: OutletService },
    { type: ComponentFactoryResolver },
    { type: OutletRendererService }
];
OutletRenderStrategy.ɵprov = i0.ɵɵdefineInjectable({ factory: function OutletRenderStrategy_Factory() { return new OutletRenderStrategy(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i2.OutletService), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i3.OutletRendererService)); }, token: OutletRenderStrategy, providedIn: "root" });
OutletRenderStrategy = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(0, Inject(DOCUMENT))
], OutletRenderStrategy);
export { OutletRenderStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlbmRlci5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9sYXVuY2gtZGlhbG9nL3NlcnZpY2VzL291dGxldC1yZW5kZXIuc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLHdCQUF3QixFQUN4QixZQUFZLEVBQ1osTUFBTSxFQUNOLFVBQVUsRUFDVixnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLGFBQWEsR0FDZCxNQUFNLHFDQUFxQyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBRTlGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUdoRSxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFxQixTQUFRLG9CQUFvQjtJQUM1RCxZQUM4QixRQUFhLEVBQy9CLGVBQWlDLEVBQ2pDLGFBQW1ELEVBQ25ELHdCQUFrRCxFQUNsRCxxQkFBNEM7UUFFdEQsS0FBSyxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQztRQU5MLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0Isb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ2pDLGtCQUFhLEdBQWIsYUFBYSxDQUFzQztRQUNuRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFHeEQsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILE1BQU0sQ0FDSixNQUEwQixFQUMxQixNQUE4QjtRQUU5QixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3JDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FDcEUsTUFBTSxDQUFDLFNBQVMsQ0FDakIsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUNwQixNQUFNLENBQUMsTUFBTSxFQUNiLFFBQVEsRUFDUixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUMxRCxDQUFDO1lBQ0YsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBRXRDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUNoRSxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBRTtnQkFDdEIsTUFBTSxVQUFVLEdBQUcsZUFBZSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FDdkQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FDbkMsQ0FBQztnQkFFekIsT0FBTyxVQUFVO3FCQUNkLE9BQU8sRUFBRTtxQkFDVCxJQUFJLENBQ0gsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEtBQUssUUFBUSxDQUFDLGFBQWEsQ0FDbEUsQ0FBQztZQUNOLENBQUMsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUNoQixJQUFJLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxVQUFVLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxVQUFVLENBQUMsQ0FBQztpQkFDbEQ7WUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQTBCO1FBQ2pDLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQThCLEVBQUUsTUFBMEI7UUFDL0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUNwRSxNQUFNLENBQUMsU0FBUyxDQUNqQixDQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQ3ZCLE1BQU0sQ0FBQyxNQUFNLEVBQ2IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFDekQsUUFBUSxDQUNULENBQUM7UUFFRixLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0YsQ0FBQTs7NENBdEVJLE1BQU0sU0FBQyxRQUFRO1lBQ1csZ0JBQWdCO1lBQ2xCLGFBQWE7WUFDRix3QkFBd0I7WUFDM0IscUJBQXFCOzs7QUFON0Msb0JBQW9CO0lBRGhDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUc5QixXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtHQUZSLG9CQUFvQixDQXdFaEM7U0F4RVksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgUmVuZGVyZXJGYWN0b3J5Mixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIE91dGxldFBvc2l0aW9uLFxuICBPdXRsZXRTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9pbmRleCc7XG5pbXBvcnQgeyBPdXRsZXRSZW5kZXJlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQtcmVuZGVyZXIuc2VydmljZSc7XG5pbXBvcnQgeyBMYXVuY2hPdXRsZXREaWFsb2csIExBVU5DSF9DQUxMRVIgfSBmcm9tICcuLi9jb25maWcvaW5kZXgnO1xuaW1wb3J0IHsgTGF1bmNoUmVuZGVyU3RyYXRlZ3kgfSBmcm9tICcuL2xhdW5jaC1yZW5kZXIuc3RyYXRlZ3knO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE91dGxldFJlbmRlclN0cmF0ZWd5IGV4dGVuZHMgTGF1bmNoUmVuZGVyU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jdW1lbnQ6IGFueSxcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIHByb3RlY3RlZCBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPENvbXBvbmVudEZhY3Rvcnk8YW55Pj4sXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByb3RlY3RlZCBvdXRsZXRSZW5kZXJlclNlcnZpY2U6IE91dGxldFJlbmRlcmVyU2VydmljZVxuICApIHtcbiAgICBzdXBlcihkb2N1bWVudCwgcmVuZGVyZXJGYWN0b3J5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBlbGVtZW50IGluIHRoZSBjb25maWd1cmVkIG91dGxldFxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnXG4gICAqIEBwYXJhbSBjYWxsZXJcbiAgICogQHBhcmFtIHZjclxuICAgKi9cbiAgcmVuZGVyKFxuICAgIGNvbmZpZzogTGF1bmNoT3V0bGV0RGlhbG9nLFxuICAgIGNhbGxlcjogTEFVTkNIX0NBTExFUiB8IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENvbXBvbmVudFJlZjxhbnk+PiB7XG4gICAgaWYgKHRoaXMuc2hvdWxkUmVuZGVyKGNhbGxlciwgY29uZmlnKSkge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgICAgY29uZmlnLmNvbXBvbmVudFxuICAgICAgKTtcbiAgICAgIHRoaXMub3V0bGV0U2VydmljZS5hZGQoXG4gICAgICAgIGNvbmZpZy5vdXRsZXQsXG4gICAgICAgIHRlbXBsYXRlLFxuICAgICAgICBjb25maWcucG9zaXRpb24gPyBjb25maWcucG9zaXRpb24gOiBPdXRsZXRQb3NpdGlvbi5CRUZPUkVcbiAgICAgICk7XG4gICAgICB0aGlzLm91dGxldFJlbmRlcmVyU2VydmljZS5yZW5kZXIoY29uZmlnLm91dGxldCk7XG4gICAgICB0aGlzLnJlbmRlcmVkQ2FsbGVycy5wdXNoKHsgY2FsbGVyIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5vdXRsZXRSZW5kZXJlclNlcnZpY2UuZ2V0T3V0bGV0UmVmKGNvbmZpZy5vdXRsZXQpLnBpcGUoXG4gICAgICAgIG1hcCgob3V0bGV0RGlyZWN0aXZlKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IG91dGxldERpcmVjdGl2ZS5yZW5kZXJlZENvbXBvbmVudHMuZ2V0KFxuICAgICAgICAgICAgY29uZmlnLnBvc2l0aW9uID8gY29uZmlnLnBvc2l0aW9uIDogT3V0bGV0UG9zaXRpb24uQkVGT1JFXG4gICAgICAgICAgKSBhcyBDb21wb25lbnRSZWY8YW55PltdO1xuXG4gICAgICAgICAgcmV0dXJuIGNvbXBvbmVudHNcbiAgICAgICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgICAgIC5maW5kKFxuICAgICAgICAgICAgICAoY29tcG9uZW50KSA9PiBjb21wb25lbnQuY29tcG9uZW50VHlwZSA9PT0gdGVtcGxhdGUuY29tcG9uZW50VHlwZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSksXG4gICAgICAgIHRhcCgoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGNvbmZpZz8uZGlhbG9nVHlwZSkge1xuICAgICAgICAgICAgdGhpcy5hcHBseUNsYXNzZXMoY29tcG9uZW50LCBjb25maWc/LmRpYWxvZ1R5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgaGFzTWF0Y2goY29uZmlnOiBMYXVuY2hPdXRsZXREaWFsb2cpIHtcbiAgICByZXR1cm4gQm9vbGVhbihjb25maWcub3V0bGV0KTtcbiAgfVxuXG4gIHJlbW92ZShjYWxsZXI6IExBVU5DSF9DQUxMRVIgfCBzdHJpbmcsIGNvbmZpZzogTGF1bmNoT3V0bGV0RGlhbG9nKTogdm9pZCB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgIGNvbmZpZy5jb21wb25lbnRcbiAgICApO1xuXG4gICAgdGhpcy5vdXRsZXRTZXJ2aWNlLnJlbW92ZShcbiAgICAgIGNvbmZpZy5vdXRsZXQsXG4gICAgICBjb25maWcucG9zaXRpb24gPyBjb25maWcucG9zaXRpb24gOiBPdXRsZXRQb3NpdGlvbi5CRUZPUkUsXG4gICAgICB0ZW1wbGF0ZVxuICAgICk7XG5cbiAgICBzdXBlci5yZW1vdmUoY2FsbGVyLCBjb25maWcpO1xuICB9XG59XG4iXX0=