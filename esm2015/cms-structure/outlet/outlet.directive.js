import { ComponentFactory, Directive, EventEmitter, Injector, Input, Output, TemplateRef, ViewContainerRef, } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeferLoaderService } from '../../layout/loading/defer-loader.service';
import { OutletRendererService } from './outlet-renderer.service';
import { OutletContextData, OutletPosition, USE_STACKED_OUTLETS, } from './outlet.model';
import { OutletService } from './outlet.service';
export class OutletDirective {
    constructor(vcr, templateRef, outletService, deferLoaderService, outletRendererService) {
        this.vcr = vcr;
        this.templateRef = templateRef;
        this.outletService = outletService;
        this.deferLoaderService = deferLoaderService;
        this.outletRendererService = outletRendererService;
        this.renderedTemplate = [];
        this.renderedComponents = new Map();
        this.loaded = new EventEmitter(true);
        this.subscription = new Subscription();
    }
    render() {
        this.vcr.clear();
        this.renderedTemplate = [];
        this.renderedComponents.clear();
        this.subscription.unsubscribe();
        this.subscription = new Subscription();
        if (this.cxOutletDefer) {
            this.deferLoading();
        }
        else {
            this.build();
        }
    }
    ngOnChanges(changes) {
        if (changes.cxOutlet) {
            this.render();
            this.outletRendererService.register(this.cxOutlet, this);
        }
    }
    deferLoading() {
        this.loaded.emit(false);
        const hostElement = this.getHostElement(this.vcr.element.nativeElement);
        // Although the deferLoaderService might emit only once, as long as the hostElement
        // isn't being loaded, there's no value being emitted. Therefor we need to clean up
        // the subscription on destroy.
        this.subscription.add(this.deferLoaderService
            .load(hostElement, this.cxOutletDefer)
            .subscribe(() => {
            this.build();
            this.loaded.emit(true);
        }));
    }
    build() {
        this.buildOutlet(OutletPosition.BEFORE);
        this.buildOutlet(OutletPosition.REPLACE);
        this.buildOutlet(OutletPosition.AFTER);
    }
    buildOutlet(position) {
        let templates = (this.outletService.get(this.cxOutlet, position, USE_STACKED_OUTLETS));
        templates = templates === null || templates === void 0 ? void 0 : templates.filter((el) => !this.renderedTemplate.includes(el));
        if (!templates && position === OutletPosition.REPLACE) {
            templates = [this.templateRef];
        }
        // Just in case someone extended the `OutletService` and
        // returns a singular object.
        if (!Array.isArray(templates)) {
            templates = [templates];
        }
        const components = [];
        templates.forEach((obj) => {
            const component = this.create(obj, position);
            components.push(component);
        });
        this.renderedComponents.set(position, components);
    }
    create(tmplOrFactory, position) {
        this.renderedTemplate.push(tmplOrFactory);
        if (tmplOrFactory instanceof ComponentFactory) {
            const component = this.vcr.createComponent(tmplOrFactory, undefined, this.getComponentInjector(position));
            return component;
        }
        else if (tmplOrFactory instanceof TemplateRef) {
            const view = this.vcr.createEmbeddedView(tmplOrFactory, {
                $implicit: this.cxOutletContext,
            });
            // we do not know if content is created dynamically or not
            // so we apply change detection anyway
            view.markForCheck();
            return view;
        }
    }
    /**
     * Returns injector with OutletContextData that can be injected to the component
     * rendered in the outlet
     */
    getComponentInjector(position) {
        const contextData = {
            reference: this.cxOutlet,
            position,
            context: this.cxOutletContext,
        };
        return Injector.create({
            providers: [
                {
                    provide: OutletContextData,
                    useValue: contextData,
                },
            ],
            parent: this.vcr.injector,
        });
    }
    /**
     * Returns the closest `HtmlElement`, by iterating over the
     * parent nodes of the given element.
     *
     * We avoid traversing the parent _elements_, as this is blocking
     * ie11 implementations. One of the spare exclusions we make to not
     * supporting ie11.
     *
     * @param element
     */
    getHostElement(element) {
        if (element instanceof HTMLElement) {
            return element;
        }
        return this.getHostElement(element.parentNode);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
OutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxOutlet]',
            },] }
];
OutletDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef },
    { type: OutletService },
    { type: DeferLoaderService },
    { type: OutletRendererService }
];
OutletDirective.propDecorators = {
    cxOutlet: [{ type: Input }],
    cxOutletContext: [{ type: Input }],
    cxOutletDefer: [{ type: Input }],
    loaded: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLGdCQUFnQixFQUVoQixTQUFTLEVBRVQsWUFBWSxFQUNaLFFBQVEsRUFDUixLQUFLLEVBR0wsTUFBTSxFQUVOLFdBQVcsRUFDWCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxtQkFBbUIsR0FDcEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFLakQsTUFBTSxPQUFPLGVBQWU7SUFvQjFCLFlBQ1UsR0FBcUIsRUFDckIsV0FBNkIsRUFDN0IsYUFBNEIsRUFDNUIsa0JBQXNDLEVBQ3RDLHFCQUE0QztRQUo1QyxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBeEI5QyxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdkIsdUJBQWtCLEdBQUcsSUFBSSxHQUFHLEVBR2hDLENBQUM7UUFXTSxXQUFNLEdBQTBCLElBQUksWUFBWSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBRTFFLGlCQUFZLEdB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QzFCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSyxjQUFjLENBQUMsT0FBYTtRQUNsQyxJQUFJLE9BQU8sWUFBWSxXQUFXLEVBQUU7WUFDbEMsT0FBTyxPQUFPLENBQUM7U0FDaEI7UUFDRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7WUF6S0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7WUFmQyxnQkFBZ0I7WUFEaEIsV0FBVztZQVlKLGFBQWE7WUFSYixrQkFBa0I7WUFFbEIscUJBQXFCOzs7dUJBa0IzQixLQUFLOzhCQUVMLEtBQUs7NEJBS0wsS0FBSztxQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50UmVmLFxuICBEaXJlY3RpdmUsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGVmZXJMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbGF5b3V0L2xvYWRpbmcvZGVmZXItbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uT3B0aW9ucyB9IGZyb20gJy4uLy4uL2xheW91dC9sb2FkaW5nL2ludGVyc2VjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBPdXRsZXRSZW5kZXJlclNlcnZpY2UgfSBmcm9tICcuL291dGxldC1yZW5kZXJlci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIE91dGxldENvbnRleHREYXRhLFxuICBPdXRsZXRQb3NpdGlvbixcbiAgVVNFX1NUQUNLRURfT1VUTEVUUyxcbn0gZnJvbSAnLi9vdXRsZXQubW9kZWwnO1xuaW1wb3J0IHsgT3V0bGV0U2VydmljZSB9IGZyb20gJy4vb3V0bGV0LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hPdXRsZXRdJyxcbn0pXG5leHBvcnQgY2xhc3MgT3V0bGV0RGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIHJlbmRlcmVkVGVtcGxhdGUgPSBbXTtcbiAgcHVibGljIHJlbmRlcmVkQ29tcG9uZW50cyA9IG5ldyBNYXA8XG4gICAgT3V0bGV0UG9zaXRpb24sXG4gICAgQXJyYXk8Q29tcG9uZW50UmVmPGFueT4gfCBFbWJlZGRlZFZpZXdSZWY8YW55Pj5cbiAgPigpO1xuXG4gIEBJbnB1dCgpIGN4T3V0bGV0OiBzdHJpbmc7XG5cbiAgQElucHV0KCkgY3hPdXRsZXRDb250ZXh0OiBhbnk7XG5cbiAgLyoqXG4gICAqIERlZmVycyBsb2FkaW5nIG9wdGlvbnMgZm9yIHRoZSB0aGUgdGVtcGxhdGVzIG9mIHRoaXMgb3V0bGV0LlxuICAgKi9cbiAgQElucHV0KCkgY3hPdXRsZXREZWZlcjogSW50ZXJzZWN0aW9uT3B0aW9ucztcblxuICBAT3V0cHV0KCkgbG9hZGVkOiBFdmVudEVtaXR0ZXI8Qm9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPEJvb2xlYW4+KHRydWUpO1xuXG4gIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZSxcbiAgICBwcml2YXRlIGRlZmVyTG9hZGVyU2VydmljZTogRGVmZXJMb2FkZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgb3V0bGV0UmVuZGVyZXJTZXJ2aWNlOiBPdXRsZXRSZW5kZXJlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy52Y3IuY2xlYXIoKTtcbiAgICB0aGlzLnJlbmRlcmVkVGVtcGxhdGUgPSBbXTtcbiAgICB0aGlzLnJlbmRlcmVkQ29tcG9uZW50cy5jbGVhcigpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5jeE91dGxldERlZmVyKSB7XG4gICAgICB0aGlzLmRlZmVyTG9hZGluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ1aWxkKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmN4T3V0bGV0KSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgdGhpcy5vdXRsZXRSZW5kZXJlclNlcnZpY2UucmVnaXN0ZXIodGhpcy5jeE91dGxldCwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZWZlckxvYWRpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkZWQuZW1pdChmYWxzZSk7XG4gICAgY29uc3QgaG9zdEVsZW1lbnQgPSB0aGlzLmdldEhvc3RFbGVtZW50KHRoaXMudmNyLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgLy8gQWx0aG91Z2ggdGhlIGRlZmVyTG9hZGVyU2VydmljZSBtaWdodCBlbWl0IG9ubHkgb25jZSwgYXMgbG9uZyBhcyB0aGUgaG9zdEVsZW1lbnRcbiAgICAvLyBpc24ndCBiZWluZyBsb2FkZWQsIHRoZXJlJ3Mgbm8gdmFsdWUgYmVpbmcgZW1pdHRlZC4gVGhlcmVmb3Igd2UgbmVlZCB0byBjbGVhbiB1cFxuICAgIC8vIHRoZSBzdWJzY3JpcHRpb24gb24gZGVzdHJveS5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmRlZmVyTG9hZGVyU2VydmljZVxuICAgICAgICAubG9hZChob3N0RWxlbWVudCwgdGhpcy5jeE91dGxldERlZmVyKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmJ1aWxkKCk7XG4gICAgICAgICAgdGhpcy5sb2FkZWQuZW1pdCh0cnVlKTtcbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZCgpIHtcbiAgICB0aGlzLmJ1aWxkT3V0bGV0KE91dGxldFBvc2l0aW9uLkJFRk9SRSk7XG4gICAgdGhpcy5idWlsZE91dGxldChPdXRsZXRQb3NpdGlvbi5SRVBMQUNFKTtcbiAgICB0aGlzLmJ1aWxkT3V0bGV0KE91dGxldFBvc2l0aW9uLkFGVEVSKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRPdXRsZXQocG9zaXRpb246IE91dGxldFBvc2l0aW9uKTogdm9pZCB7XG4gICAgbGV0IHRlbXBsYXRlczogYW55W10gPSA8YW55W10+KFxuICAgICAgdGhpcy5vdXRsZXRTZXJ2aWNlLmdldCh0aGlzLmN4T3V0bGV0LCBwb3NpdGlvbiwgVVNFX1NUQUNLRURfT1VUTEVUUylcbiAgICApO1xuXG4gICAgdGVtcGxhdGVzID0gdGVtcGxhdGVzPy5maWx0ZXIoKGVsKSA9PiAhdGhpcy5yZW5kZXJlZFRlbXBsYXRlLmluY2x1ZGVzKGVsKSk7XG5cbiAgICBpZiAoIXRlbXBsYXRlcyAmJiBwb3NpdGlvbiA9PT0gT3V0bGV0UG9zaXRpb24uUkVQTEFDRSkge1xuICAgICAgdGVtcGxhdGVzID0gW3RoaXMudGVtcGxhdGVSZWZdO1xuICAgIH1cblxuICAgIC8vIEp1c3QgaW4gY2FzZSBzb21lb25lIGV4dGVuZGVkIHRoZSBgT3V0bGV0U2VydmljZWAgYW5kXG4gICAgLy8gcmV0dXJucyBhIHNpbmd1bGFyIG9iamVjdC5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGVtcGxhdGVzKSkge1xuICAgICAgdGVtcGxhdGVzID0gW3RlbXBsYXRlc107XG4gICAgfVxuXG4gICAgY29uc3QgY29tcG9uZW50cyA9IFtdO1xuICAgIHRlbXBsYXRlcy5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY3JlYXRlKG9iaiwgcG9zaXRpb24pO1xuICAgICAgY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlbmRlcmVkQ29tcG9uZW50cy5zZXQocG9zaXRpb24sIGNvbXBvbmVudHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGUoXG4gICAgdG1wbE9yRmFjdG9yeTogYW55LFxuICAgIHBvc2l0aW9uOiBPdXRsZXRQb3NpdGlvblxuICApOiBDb21wb25lbnRSZWY8YW55PiB8IEVtYmVkZGVkVmlld1JlZjxhbnk+IHtcbiAgICB0aGlzLnJlbmRlcmVkVGVtcGxhdGUucHVzaCh0bXBsT3JGYWN0b3J5KTtcblxuICAgIGlmICh0bXBsT3JGYWN0b3J5IGluc3RhbmNlb2YgQ29tcG9uZW50RmFjdG9yeSkge1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy52Y3IuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICB0bXBsT3JGYWN0b3J5LFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50SW5qZWN0b3IocG9zaXRpb24pXG4gICAgICApO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9IGVsc2UgaWYgKHRtcGxPckZhY3RvcnkgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgY29uc3QgdmlldyA9IHRoaXMudmNyLmNyZWF0ZUVtYmVkZGVkVmlldyhcbiAgICAgICAgPFRlbXBsYXRlUmVmPGFueT4+dG1wbE9yRmFjdG9yeSxcbiAgICAgICAge1xuICAgICAgICAgICRpbXBsaWNpdDogdGhpcy5jeE91dGxldENvbnRleHQsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIC8vIHdlIGRvIG5vdCBrbm93IGlmIGNvbnRlbnQgaXMgY3JlYXRlZCBkeW5hbWljYWxseSBvciBub3RcbiAgICAgIC8vIHNvIHdlIGFwcGx5IGNoYW5nZSBkZXRlY3Rpb24gYW55d2F5XG4gICAgICB2aWV3Lm1hcmtGb3JDaGVjaygpO1xuICAgICAgcmV0dXJuIHZpZXc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaW5qZWN0b3Igd2l0aCBPdXRsZXRDb250ZXh0RGF0YSB0aGF0IGNhbiBiZSBpbmplY3RlZCB0byB0aGUgY29tcG9uZW50XG4gICAqIHJlbmRlcmVkIGluIHRoZSBvdXRsZXRcbiAgICovXG4gIHByaXZhdGUgZ2V0Q29tcG9uZW50SW5qZWN0b3IocG9zaXRpb246IE91dGxldFBvc2l0aW9uKTogSW5qZWN0b3Ige1xuICAgIGNvbnN0IGNvbnRleHREYXRhOiBPdXRsZXRDb250ZXh0RGF0YSA9IHtcbiAgICAgIHJlZmVyZW5jZTogdGhpcy5jeE91dGxldCxcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgY29udGV4dDogdGhpcy5jeE91dGxldENvbnRleHQsXG4gICAgfTtcblxuICAgIHJldHVybiBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBPdXRsZXRDb250ZXh0RGF0YSxcbiAgICAgICAgICB1c2VWYWx1ZTogY29udGV4dERhdGEsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgcGFyZW50OiB0aGlzLnZjci5pbmplY3RvcixcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjbG9zZXN0IGBIdG1sRWxlbWVudGAsIGJ5IGl0ZXJhdGluZyBvdmVyIHRoZVxuICAgKiBwYXJlbnQgbm9kZXMgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqXG4gICAqIFdlIGF2b2lkIHRyYXZlcnNpbmcgdGhlIHBhcmVudCBfZWxlbWVudHNfLCBhcyB0aGlzIGlzIGJsb2NraW5nXG4gICAqIGllMTEgaW1wbGVtZW50YXRpb25zLiBPbmUgb2YgdGhlIHNwYXJlIGV4Y2x1c2lvbnMgd2UgbWFrZSB0byBub3RcbiAgICogc3VwcG9ydGluZyBpZTExLlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbWVudFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRIb3N0RWxlbWVudChlbGVtZW50OiBOb2RlKTogSFRNTEVsZW1lbnQge1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXRIb3N0RWxlbWVudChlbGVtZW50LnBhcmVudE5vZGUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19