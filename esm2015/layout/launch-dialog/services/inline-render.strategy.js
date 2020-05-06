import { __decorate, __param } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ComponentFactoryResolver, ComponentRef, Inject, Injectable, isDevMode, RendererFactory2, ViewContainerRef, } from '@angular/core';
import { of } from 'rxjs';
import { LaunchRenderStrategy } from './launch-render.strategy';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
let InlineRenderStrategy = class InlineRenderStrategy extends LaunchRenderStrategy {
    constructor(document, rendererFactory, componentFactoryResolver) {
        super(document, rendererFactory);
        this.document = document;
        this.rendererFactory = rendererFactory;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /**
     * Renders the component from the configuration in the view container ref
     *
     * @param config
     * @param caller
     * @param vcr
     */
    render(config, caller, vcr) {
        // Only render if a ViewContainerRef is provided
        if (vcr && this.shouldRender(caller, config)) {
            const template = this.componentFactoryResolver.resolveComponentFactory(config.component);
            const component = vcr.createComponent(template);
            if (config === null || config === void 0 ? void 0 : config.dialogType) {
                this.applyClasses(component, config === null || config === void 0 ? void 0 : config.dialogType);
            }
            this.renderedCallers.push({ caller, element: vcr.element, component });
            return of(component);
        }
        else if (isDevMode()) {
            if (!vcr) {
                console.warn(`No view container ref provided for ${caller}`);
            }
            else {
                console.warn(`Element for ${caller} already rendered. To allow multi rendering add property multi: true.`);
            }
        }
    }
    hasMatch(config) {
        return Boolean(config.inline);
    }
};
InlineRenderStrategy.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: RendererFactory2 },
    { type: ComponentFactoryResolver }
];
InlineRenderStrategy.ɵprov = i0.ɵɵdefineInjectable({ factory: function InlineRenderStrategy_Factory() { return new InlineRenderStrategy(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i0.ComponentFactoryResolver)); }, token: InlineRenderStrategy, providedIn: "root" });
InlineRenderStrategy = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(0, Inject(DOCUMENT))
], InlineRenderStrategy);
export { InlineRenderStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLXJlbmRlci5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9sYXVuY2gtZGlhbG9nL3NlcnZpY2VzL2lubGluZS1yZW5kZXIuc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLFlBQVksRUFDWixNQUFNLEVBQ04sVUFBVSxFQUNWLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUdoRSxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFxQixTQUFRLG9CQUFvQjtJQUM1RCxZQUM4QixRQUFhLEVBQy9CLGVBQWlDLEVBQ2pDLHdCQUFrRDtRQUU1RCxLQUFLLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBSkwsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDakMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUc5RCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsTUFBTSxDQUNKLE1BQTBCLEVBQzFCLE1BQThCLEVBQzlCLEdBQXFCO1FBRXJCLGdEQUFnRDtRQUNoRCxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRTtZQUM1QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQ3BFLE1BQU0sQ0FBQyxTQUFTLENBQ2pCLENBQUM7WUFFRixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWhELElBQUksTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFVBQVUsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ2xEO1lBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUV2RSxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN0QjthQUFNLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDUixPQUFPLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQzlEO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxJQUFJLENBQ1YsZUFBZSxNQUFNLHVFQUF1RSxDQUM3RixDQUFDO2FBQ0g7U0FDRjtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsTUFBMEI7UUFDakMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRixDQUFBOzs0Q0FoREksTUFBTSxTQUFDLFFBQVE7WUFDVyxnQkFBZ0I7WUFDUCx3QkFBd0I7OztBQUpuRCxvQkFBb0I7SUFEaEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBRzlCLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0dBRlIsb0JBQW9CLENBa0RoQztTQWxEWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBpc0Rldk1vZGUsXG4gIFJlbmRlcmVyRmFjdG9yeTIsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExhdW5jaElubGluZURpYWxvZywgTEFVTkNIX0NBTExFUiB9IGZyb20gJy4uL2NvbmZpZy9pbmRleCc7XG5pbXBvcnQgeyBMYXVuY2hSZW5kZXJTdHJhdGVneSB9IGZyb20gJy4vbGF1bmNoLXJlbmRlci5zdHJhdGVneSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgSW5saW5lUmVuZGVyU3RyYXRlZ3kgZXh0ZW5kcyBMYXVuY2hSZW5kZXJTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBkb2N1bWVudDogYW55LFxuICAgIHByb3RlY3RlZCByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICkge1xuICAgIHN1cGVyKGRvY3VtZW50LCByZW5kZXJlckZhY3RvcnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGNvbXBvbmVudCBmcm9tIHRoZSBjb25maWd1cmF0aW9uIGluIHRoZSB2aWV3IGNvbnRhaW5lciByZWZcbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKiBAcGFyYW0gY2FsbGVyXG4gICAqIEBwYXJhbSB2Y3JcbiAgICovXG4gIHJlbmRlcihcbiAgICBjb25maWc6IExhdW5jaElubGluZURpYWxvZyxcbiAgICBjYWxsZXI6IExBVU5DSF9DQUxMRVIgfCBzdHJpbmcsXG4gICAgdmNyOiBWaWV3Q29udGFpbmVyUmVmXG4gICk6IE9ic2VydmFibGU8Q29tcG9uZW50UmVmPGFueT4+IHtcbiAgICAvLyBPbmx5IHJlbmRlciBpZiBhIFZpZXdDb250YWluZXJSZWYgaXMgcHJvdmlkZWRcbiAgICBpZiAodmNyICYmIHRoaXMuc2hvdWxkUmVuZGVyKGNhbGxlciwgY29uZmlnKSkge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgICAgY29uZmlnLmNvbXBvbmVudFxuICAgICAgKTtcblxuICAgICAgY29uc3QgY29tcG9uZW50ID0gdmNyLmNyZWF0ZUNvbXBvbmVudCh0ZW1wbGF0ZSk7XG5cbiAgICAgIGlmIChjb25maWc/LmRpYWxvZ1R5cGUpIHtcbiAgICAgICAgdGhpcy5hcHBseUNsYXNzZXMoY29tcG9uZW50LCBjb25maWc/LmRpYWxvZ1R5cGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJlbmRlcmVkQ2FsbGVycy5wdXNoKHsgY2FsbGVyLCBlbGVtZW50OiB2Y3IuZWxlbWVudCwgY29tcG9uZW50IH0pO1xuXG4gICAgICByZXR1cm4gb2YoY29tcG9uZW50KTtcbiAgICB9IGVsc2UgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBpZiAoIXZjcikge1xuICAgICAgICBjb25zb2xlLndhcm4oYE5vIHZpZXcgY29udGFpbmVyIHJlZiBwcm92aWRlZCBmb3IgJHtjYWxsZXJ9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgYEVsZW1lbnQgZm9yICR7Y2FsbGVyfSBhbHJlYWR5IHJlbmRlcmVkLiBUbyBhbGxvdyBtdWx0aSByZW5kZXJpbmcgYWRkIHByb3BlcnR5IG11bHRpOiB0cnVlLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYXNNYXRjaChjb25maWc6IExhdW5jaElubGluZURpYWxvZykge1xuICAgIHJldHVybiBCb29sZWFuKGNvbmZpZy5pbmxpbmUpO1xuICB9XG59XG4iXX0=