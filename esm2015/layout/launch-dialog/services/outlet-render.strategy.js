import { DOCUMENT } from '@angular/common';
import { ComponentFactoryResolver, Inject, Injectable, RendererFactory2, } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { OutletPosition, OutletService, } from '../../../cms-structure/outlet/index';
import { OutletRendererService } from '../../../cms-structure/outlet/outlet-renderer.service';
import { LaunchRenderStrategy } from './launch-render.strategy';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../cms-structure/outlet/outlet.service";
import * as i3 from "../../../cms-structure/outlet/outlet-renderer.service";
export class OutletRenderStrategy extends LaunchRenderStrategy {
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
}
OutletRenderStrategy.ɵprov = i0.ɵɵdefineInjectable({ factory: function OutletRenderStrategy_Factory() { return new OutletRenderStrategy(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i2.OutletService), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i3.OutletRendererService)); }, token: OutletRenderStrategy, providedIn: "root" });
OutletRenderStrategy.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
OutletRenderStrategy.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: RendererFactory2 },
    { type: OutletService },
    { type: ComponentFactoryResolver },
    { type: OutletRendererService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlbmRlci5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2xheW91dC9sYXVuY2gtZGlhbG9nL3NlcnZpY2VzL291dGxldC1yZW5kZXIuc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx3QkFBd0IsRUFFeEIsTUFBTSxFQUNOLFVBQVUsRUFDVixnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLGFBQWEsR0FDZCxNQUFNLHFDQUFxQyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBRTlGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUdoRSxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsb0JBQW9CO0lBQzVELFlBQzhCLFFBQWEsRUFDL0IsZUFBaUMsRUFDakMsYUFBbUQsRUFDbkQsd0JBQWtELEVBQ2xELHFCQUE0QztRQUV0RCxLQUFLLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBTkwsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDakMsa0JBQWEsR0FBYixhQUFhLENBQXNDO1FBQ25ELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUd4RCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsTUFBTSxDQUNKLE1BQTBCLEVBQzFCLE1BQThCO1FBRTlCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDckMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUNwRSxNQUFNLENBQUMsU0FBUyxDQUNqQixDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3BCLE1BQU0sQ0FBQyxNQUFNLEVBQ2IsUUFBUSxFQUNSLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQzFELENBQUM7WUFDRixJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFFdEMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ2hFLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUFFO2dCQUN0QixNQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUN2RCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUNuQyxDQUFDO2dCQUV6QixPQUFPLFVBQVU7cUJBQ2QsT0FBTyxFQUFFO3FCQUNULElBQUksQ0FDSCxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsS0FBSyxRQUFRLENBQUMsYUFBYSxDQUNsRSxDQUFDO1lBQ04sQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7Z0JBQ2hCLElBQUksTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFVBQVUsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFVBQVUsQ0FBQyxDQUFDO2lCQUNsRDtZQUNILENBQUMsQ0FBQyxDQUNILENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsTUFBMEI7UUFDakMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBOEIsRUFBRSxNQUEwQjtRQUMvRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQ3BFLE1BQU0sQ0FBQyxTQUFTLENBQ2pCLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FDdkIsTUFBTSxDQUFDLE1BQU0sRUFDYixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUN6RCxRQUFRLENBQ1QsQ0FBQztRQUVGLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7WUF4RUYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OzRDQUc3QixNQUFNLFNBQUMsUUFBUTtZQWZsQixnQkFBZ0I7WUFNaEIsYUFBYTtZQVZiLHdCQUF3QjtZQVlqQixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBSZW5kZXJlckZhY3RvcnkyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgT3V0bGV0UG9zaXRpb24sXG4gIE91dGxldFNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L2luZGV4JztcbmltcG9ydCB7IE91dGxldFJlbmRlcmVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC1yZW5kZXJlci5zZXJ2aWNlJztcbmltcG9ydCB7IExhdW5jaE91dGxldERpYWxvZywgTEFVTkNIX0NBTExFUiB9IGZyb20gJy4uL2NvbmZpZy9pbmRleCc7XG5pbXBvcnQgeyBMYXVuY2hSZW5kZXJTdHJhdGVneSB9IGZyb20gJy4vbGF1bmNoLXJlbmRlci5zdHJhdGVneSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT3V0bGV0UmVuZGVyU3RyYXRlZ3kgZXh0ZW5kcyBMYXVuY2hSZW5kZXJTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBkb2N1bWVudDogYW55LFxuICAgIHByb3RlY3RlZCByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgcHJvdGVjdGVkIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2U8Q29tcG9uZW50RmFjdG9yeTxhbnk+PixcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJvdGVjdGVkIG91dGxldFJlbmRlcmVyU2VydmljZTogT3V0bGV0UmVuZGVyZXJTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKGRvY3VtZW50LCByZW5kZXJlckZhY3RvcnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGVsZW1lbnQgaW4gdGhlIGNvbmZpZ3VyZWQgb3V0bGV0XG4gICAqXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICogQHBhcmFtIGNhbGxlclxuICAgKiBAcGFyYW0gdmNyXG4gICAqL1xuICByZW5kZXIoXG4gICAgY29uZmlnOiBMYXVuY2hPdXRsZXREaWFsb2csXG4gICAgY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSIHwgc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q29tcG9uZW50UmVmPGFueT4+IHtcbiAgICBpZiAodGhpcy5zaG91bGRSZW5kZXIoY2FsbGVyLCBjb25maWcpKSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICBjb25maWcuY29tcG9uZW50XG4gICAgICApO1xuICAgICAgdGhpcy5vdXRsZXRTZXJ2aWNlLmFkZChcbiAgICAgICAgY29uZmlnLm91dGxldCxcbiAgICAgICAgdGVtcGxhdGUsXG4gICAgICAgIGNvbmZpZy5wb3NpdGlvbiA/IGNvbmZpZy5wb3NpdGlvbiA6IE91dGxldFBvc2l0aW9uLkJFRk9SRVxuICAgICAgKTtcbiAgICAgIHRoaXMub3V0bGV0UmVuZGVyZXJTZXJ2aWNlLnJlbmRlcihjb25maWcub3V0bGV0KTtcbiAgICAgIHRoaXMucmVuZGVyZWRDYWxsZXJzLnB1c2goeyBjYWxsZXIgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLm91dGxldFJlbmRlcmVyU2VydmljZS5nZXRPdXRsZXRSZWYoY29uZmlnLm91dGxldCkucGlwZShcbiAgICAgICAgbWFwKChvdXRsZXREaXJlY3RpdmUpID0+IHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRzID0gb3V0bGV0RGlyZWN0aXZlLnJlbmRlcmVkQ29tcG9uZW50cy5nZXQoXG4gICAgICAgICAgICBjb25maWcucG9zaXRpb24gPyBjb25maWcucG9zaXRpb24gOiBPdXRsZXRQb3NpdGlvbi5CRUZPUkVcbiAgICAgICAgICApIGFzIENvbXBvbmVudFJlZjxhbnk+W107XG5cbiAgICAgICAgICByZXR1cm4gY29tcG9uZW50c1xuICAgICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgICAgLmZpbmQoXG4gICAgICAgICAgICAgIChjb21wb25lbnQpID0+IGNvbXBvbmVudC5jb21wb25lbnRUeXBlID09PSB0ZW1wbGF0ZS5jb21wb25lbnRUeXBlXG4gICAgICAgICAgICApO1xuICAgICAgICB9KSxcbiAgICAgICAgdGFwKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICBpZiAoY29uZmlnPy5kaWFsb2dUeXBlKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGx5Q2xhc3Nlcyhjb21wb25lbnQsIGNvbmZpZz8uZGlhbG9nVHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBoYXNNYXRjaChjb25maWc6IExhdW5jaE91dGxldERpYWxvZykge1xuICAgIHJldHVybiBCb29sZWFuKGNvbmZpZy5vdXRsZXQpO1xuICB9XG5cbiAgcmVtb3ZlKGNhbGxlcjogTEFVTkNIX0NBTExFUiB8IHN0cmluZywgY29uZmlnOiBMYXVuY2hPdXRsZXREaWFsb2cpOiB2b2lkIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgY29uZmlnLmNvbXBvbmVudFxuICAgICk7XG5cbiAgICB0aGlzLm91dGxldFNlcnZpY2UucmVtb3ZlKFxuICAgICAgY29uZmlnLm91dGxldCxcbiAgICAgIGNvbmZpZy5wb3NpdGlvbiA/IGNvbmZpZy5wb3NpdGlvbiA6IE91dGxldFBvc2l0aW9uLkJFRk9SRSxcbiAgICAgIHRlbXBsYXRlXG4gICAgKTtcblxuICAgIHN1cGVyLnJlbW92ZShjYWxsZXIsIGNvbmZpZyk7XG4gIH1cbn1cbiJdfQ==