import { __decorate } from "tslib";
import { ComponentFactory, ComponentRef, Directive, EmbeddedViewRef, EventEmitter, Injector, Input, OnChanges, OnDestroy, Output, SimpleChanges, TemplateRef, ViewContainerRef, } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeferLoaderService } from '../../layout/loading/defer-loader.service';
import { OutletRendererService } from './outlet-renderer.service';
import { OutletContextData, OutletPosition, USE_STACKED_OUTLETS, } from './outlet.model';
import { OutletService } from './outlet.service';
var OutletDirective = /** @class */ (function () {
    function OutletDirective(vcr, templateRef, outletService, deferLoaderService, outletRendererService) {
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
    OutletDirective.prototype.render = function () {
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
    };
    OutletDirective.prototype.ngOnChanges = function (changes) {
        if (changes.cxOutlet) {
            this.render();
            this.outletRendererService.register(this.cxOutlet, this);
        }
    };
    OutletDirective.prototype.deferLoading = function () {
        var _this = this;
        this.loaded.emit(false);
        var hostElement = this.getHostElement(this.vcr.element.nativeElement);
        // Although the deferLoaderService might emit only once, as long as the hostElement
        // isn't being loaded, there's no value being emitted. Therefor we need to clean up
        // the subscription on destroy.
        this.subscription.add(this.deferLoaderService
            .load(hostElement, this.cxOutletDefer)
            .subscribe(function () {
            _this.build();
            _this.loaded.emit(true);
        }));
    };
    OutletDirective.prototype.build = function () {
        this.buildOutlet(OutletPosition.BEFORE);
        this.buildOutlet(OutletPosition.REPLACE);
        this.buildOutlet(OutletPosition.AFTER);
    };
    OutletDirective.prototype.buildOutlet = function (position) {
        var _this = this;
        var templates = (this.outletService.get(this.cxOutlet, position, USE_STACKED_OUTLETS));
        templates = templates === null || templates === void 0 ? void 0 : templates.filter(function (el) { return !_this.renderedTemplate.includes(el); });
        if (!templates && position === OutletPosition.REPLACE) {
            templates = [this.templateRef];
        }
        // Just in case someone extended the `OutletService` and
        // returns a singular object.
        if (!Array.isArray(templates)) {
            templates = [templates];
        }
        var components = [];
        templates.forEach(function (obj) {
            var component = _this.create(obj, position);
            components.push(component);
        });
        this.renderedComponents.set(position, components);
    };
    OutletDirective.prototype.create = function (tmplOrFactory, position) {
        this.renderedTemplate.push(tmplOrFactory);
        if (tmplOrFactory instanceof ComponentFactory) {
            var component = this.vcr.createComponent(tmplOrFactory, undefined, this.getComponentInjector(position));
            return component;
        }
        else if (tmplOrFactory instanceof TemplateRef) {
            var view = this.vcr.createEmbeddedView(tmplOrFactory, {
                $implicit: this.cxOutletContext,
            });
            // we do not know if content is created dynamically or not
            // so we apply change detection anyway
            view.markForCheck();
            return view;
        }
    };
    /**
     * Returns injector with OutletContextData that can be injected to the component
     * rendered in the outlet
     */
    OutletDirective.prototype.getComponentInjector = function (position) {
        var contextData = {
            reference: this.cxOutlet,
            position: position,
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
    };
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
    OutletDirective.prototype.getHostElement = function (element) {
        if (element instanceof HTMLElement) {
            return element;
        }
        return this.getHostElement(element.parentNode);
    };
    OutletDirective.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    OutletDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef },
        { type: OutletService },
        { type: DeferLoaderService },
        { type: OutletRendererService }
    ]; };
    __decorate([
        Input()
    ], OutletDirective.prototype, "cxOutlet", void 0);
    __decorate([
        Input()
    ], OutletDirective.prototype, "cxOutletContext", void 0);
    __decorate([
        Input()
    ], OutletDirective.prototype, "cxOutletDefer", void 0);
    __decorate([
        Output()
    ], OutletDirective.prototype, "loaded", void 0);
    OutletDirective = __decorate([
        Directive({
            selector: '[cxOutlet]',
        })
    ], OutletDirective);
    return OutletDirective;
}());
export { OutletDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUNaLFFBQVEsRUFDUixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04sYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxtQkFBbUIsR0FDcEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFLakQ7SUFvQkUseUJBQ1UsR0FBcUIsRUFDckIsV0FBNkIsRUFDN0IsYUFBNEIsRUFDNUIsa0JBQXNDLEVBQ3RDLHFCQUE0QztRQUo1QyxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBeEI5QyxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdkIsdUJBQWtCLEdBQUcsSUFBSSxHQUFHLEVBR2hDLENBQUM7UUFXTSxXQUFNLEdBQTBCLElBQUksWUFBWSxDQUFVLElBQUksQ0FB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QkFBaUI7b0JBQzFCLFFBQVEsRUFBRSxXQUFXO2lCQUN0QjthQUNGO1lBQ0QsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUTtTQUMxQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0ssd0NBQWMsR0FBdEIsVUFBdUIsT0FBYTtRQUNsQyxJQUFJLE9BQU8sWUFBWSxXQUFXLEVBQUU7WUFDbEMsT0FBTyxPQUFPLENBQUM7U0FDaEI7UUFDRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOztnQkFqSmMsZ0JBQWdCO2dCQUNSLFdBQVc7Z0JBQ1QsYUFBYTtnQkFDUixrQkFBa0I7Z0JBQ2YscUJBQXFCOztJQWxCN0M7UUFBUixLQUFLLEVBQUU7cURBQWtCO0lBRWpCO1FBQVIsS0FBSyxFQUFFOzREQUFzQjtJQUtyQjtRQUFSLEtBQUssRUFBRTswREFBb0M7SUFFbEM7UUFBVCxNQUFNLEVBQUU7bURBQWlFO0lBaEIvRCxlQUFlO1FBSDNCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1NBQ3ZCLENBQUM7T0FDVyxlQUFlLENBdUszQjtJQUFELHNCQUFDO0NBQUEsQUF2S0QsSUF1S0M7U0F2S1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnksXG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERlZmVyTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL2xheW91dC9sb2FkaW5nL2RlZmVyLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEludGVyc2VjdGlvbk9wdGlvbnMgfSBmcm9tICcuLi8uLi9sYXlvdXQvbG9hZGluZy9pbnRlcnNlY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgT3V0bGV0UmVuZGVyZXJTZXJ2aWNlIH0gZnJvbSAnLi9vdXRsZXQtcmVuZGVyZXIuc2VydmljZSc7XG5pbXBvcnQge1xuICBPdXRsZXRDb250ZXh0RGF0YSxcbiAgT3V0bGV0UG9zaXRpb24sXG4gIFVTRV9TVEFDS0VEX09VVExFVFMsXG59IGZyb20gJy4vb3V0bGV0Lm1vZGVsJztcbmltcG9ydCB7IE91dGxldFNlcnZpY2UgfSBmcm9tICcuL291dGxldC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4T3V0bGV0XScsXG59KVxuZXhwb3J0IGNsYXNzIE91dGxldERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSByZW5kZXJlZFRlbXBsYXRlID0gW107XG4gIHB1YmxpYyByZW5kZXJlZENvbXBvbmVudHMgPSBuZXcgTWFwPFxuICAgIE91dGxldFBvc2l0aW9uLFxuICAgIEFycmF5PENvbXBvbmVudFJlZjxhbnk+IHwgRW1iZWRkZWRWaWV3UmVmPGFueT4+XG4gID4oKTtcblxuICBASW5wdXQoKSBjeE91dGxldDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGN4T3V0bGV0Q29udGV4dDogYW55O1xuXG4gIC8qKlxuICAgKiBEZWZlcnMgbG9hZGluZyBvcHRpb25zIGZvciB0aGUgdGhlIHRlbXBsYXRlcyBvZiB0aGlzIG91dGxldC5cbiAgICovXG4gIEBJbnB1dCgpIGN4T3V0bGV0RGVmZXI6IEludGVyc2VjdGlvbk9wdGlvbnM7XG5cbiAgQE91dHB1dCgpIGxvYWRlZDogRXZlbnRFbWl0dGVyPEJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxCb29sZWFuPih0cnVlKTtcblxuICBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkZWZlckxvYWRlclNlcnZpY2U6IERlZmVyTG9hZGVyU2VydmljZSxcbiAgICBwcml2YXRlIG91dGxldFJlbmRlcmVyU2VydmljZTogT3V0bGV0UmVuZGVyZXJTZXJ2aWNlXG4gICkge31cblxuICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgIHRoaXMudmNyLmNsZWFyKCk7XG4gICAgdGhpcy5yZW5kZXJlZFRlbXBsYXRlID0gW107XG4gICAgdGhpcy5yZW5kZXJlZENvbXBvbmVudHMuY2xlYXIoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuY3hPdXRsZXREZWZlcikge1xuICAgICAgdGhpcy5kZWZlckxvYWRpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5idWlsZCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5jeE91dGxldCkge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIHRoaXMub3V0bGV0UmVuZGVyZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMuY3hPdXRsZXQsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVmZXJMb2FkaW5nKCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGVkLmVtaXQoZmFsc2UpO1xuICAgIGNvbnN0IGhvc3RFbGVtZW50ID0gdGhpcy5nZXRIb3N0RWxlbWVudCh0aGlzLnZjci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIC8vIEFsdGhvdWdoIHRoZSBkZWZlckxvYWRlclNlcnZpY2UgbWlnaHQgZW1pdCBvbmx5IG9uY2UsIGFzIGxvbmcgYXMgdGhlIGhvc3RFbGVtZW50XG4gICAgLy8gaXNuJ3QgYmVpbmcgbG9hZGVkLCB0aGVyZSdzIG5vIHZhbHVlIGJlaW5nIGVtaXR0ZWQuIFRoZXJlZm9yIHdlIG5lZWQgdG8gY2xlYW4gdXBcbiAgICAvLyB0aGUgc3Vic2NyaXB0aW9uIG9uIGRlc3Ryb3kuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5kZWZlckxvYWRlclNlcnZpY2VcbiAgICAgICAgLmxvYWQoaG9zdEVsZW1lbnQsIHRoaXMuY3hPdXRsZXREZWZlcilcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5idWlsZCgpO1xuICAgICAgICAgIHRoaXMubG9hZGVkLmVtaXQodHJ1ZSk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGQoKSB7XG4gICAgdGhpcy5idWlsZE91dGxldChPdXRsZXRQb3NpdGlvbi5CRUZPUkUpO1xuICAgIHRoaXMuYnVpbGRPdXRsZXQoT3V0bGV0UG9zaXRpb24uUkVQTEFDRSk7XG4gICAgdGhpcy5idWlsZE91dGxldChPdXRsZXRQb3NpdGlvbi5BRlRFUik7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkT3V0bGV0KHBvc2l0aW9uOiBPdXRsZXRQb3NpdGlvbik6IHZvaWQge1xuICAgIGxldCB0ZW1wbGF0ZXM6IGFueVtdID0gPGFueVtdPihcbiAgICAgIHRoaXMub3V0bGV0U2VydmljZS5nZXQodGhpcy5jeE91dGxldCwgcG9zaXRpb24sIFVTRV9TVEFDS0VEX09VVExFVFMpXG4gICAgKTtcblxuICAgIHRlbXBsYXRlcyA9IHRlbXBsYXRlcz8uZmlsdGVyKChlbCkgPT4gIXRoaXMucmVuZGVyZWRUZW1wbGF0ZS5pbmNsdWRlcyhlbCkpO1xuXG4gICAgaWYgKCF0ZW1wbGF0ZXMgJiYgcG9zaXRpb24gPT09IE91dGxldFBvc2l0aW9uLlJFUExBQ0UpIHtcbiAgICAgIHRlbXBsYXRlcyA9IFt0aGlzLnRlbXBsYXRlUmVmXTtcbiAgICB9XG5cbiAgICAvLyBKdXN0IGluIGNhc2Ugc29tZW9uZSBleHRlbmRlZCB0aGUgYE91dGxldFNlcnZpY2VgIGFuZFxuICAgIC8vIHJldHVybnMgYSBzaW5ndWxhciBvYmplY3QuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRlbXBsYXRlcykpIHtcbiAgICAgIHRlbXBsYXRlcyA9IFt0ZW1wbGF0ZXNdO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbXTtcbiAgICB0ZW1wbGF0ZXMuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNyZWF0ZShvYmosIHBvc2l0aW9uKTtcbiAgICAgIGNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZW5kZXJlZENvbXBvbmVudHMuc2V0KHBvc2l0aW9uLCBjb21wb25lbnRzKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlKFxuICAgIHRtcGxPckZhY3Rvcnk6IGFueSxcbiAgICBwb3NpdGlvbjogT3V0bGV0UG9zaXRpb25cbiAgKTogQ29tcG9uZW50UmVmPGFueT4gfCBFbWJlZGRlZFZpZXdSZWY8YW55PiB7XG4gICAgdGhpcy5yZW5kZXJlZFRlbXBsYXRlLnB1c2godG1wbE9yRmFjdG9yeSk7XG5cbiAgICBpZiAodG1wbE9yRmFjdG9yeSBpbnN0YW5jZW9mIENvbXBvbmVudEZhY3RvcnkpIHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMudmNyLmNyZWF0ZUNvbXBvbmVudChcbiAgICAgICAgdG1wbE9yRmFjdG9yeSxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmdldENvbXBvbmVudEluamVjdG9yKHBvc2l0aW9uKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfSBlbHNlIGlmICh0bXBsT3JGYWN0b3J5IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLnZjci5jcmVhdGVFbWJlZGRlZFZpZXcoXG4gICAgICAgIDxUZW1wbGF0ZVJlZjxhbnk+PnRtcGxPckZhY3RvcnksXG4gICAgICAgIHtcbiAgICAgICAgICAkaW1wbGljaXQ6IHRoaXMuY3hPdXRsZXRDb250ZXh0LFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICAvLyB3ZSBkbyBub3Qga25vdyBpZiBjb250ZW50IGlzIGNyZWF0ZWQgZHluYW1pY2FsbHkgb3Igbm90XG4gICAgICAvLyBzbyB3ZSBhcHBseSBjaGFuZ2UgZGV0ZWN0aW9uIGFueXdheVxuICAgICAgdmlldy5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHJldHVybiB2aWV3O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGluamVjdG9yIHdpdGggT3V0bGV0Q29udGV4dERhdGEgdGhhdCBjYW4gYmUgaW5qZWN0ZWQgdG8gdGhlIGNvbXBvbmVudFxuICAgKiByZW5kZXJlZCBpbiB0aGUgb3V0bGV0XG4gICAqL1xuICBwcml2YXRlIGdldENvbXBvbmVudEluamVjdG9yKHBvc2l0aW9uOiBPdXRsZXRQb3NpdGlvbik6IEluamVjdG9yIHtcbiAgICBjb25zdCBjb250ZXh0RGF0YTogT3V0bGV0Q29udGV4dERhdGEgPSB7XG4gICAgICByZWZlcmVuY2U6IHRoaXMuY3hPdXRsZXQsXG4gICAgICBwb3NpdGlvbixcbiAgICAgIGNvbnRleHQ6IHRoaXMuY3hPdXRsZXRDb250ZXh0LFxuICAgIH07XG5cbiAgICByZXR1cm4gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogT3V0bGV0Q29udGV4dERhdGEsXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbnRleHREYXRhLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHBhcmVudDogdGhpcy52Y3IuaW5qZWN0b3IsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2xvc2VzdCBgSHRtbEVsZW1lbnRgLCBieSBpdGVyYXRpbmcgb3ZlciB0aGVcbiAgICogcGFyZW50IG5vZGVzIG9mIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKlxuICAgKiBXZSBhdm9pZCB0cmF2ZXJzaW5nIHRoZSBwYXJlbnQgX2VsZW1lbnRzXywgYXMgdGhpcyBpcyBibG9ja2luZ1xuICAgKiBpZTExIGltcGxlbWVudGF0aW9ucy4gT25lIG9mIHRoZSBzcGFyZSBleGNsdXNpb25zIHdlIG1ha2UgdG8gbm90XG4gICAqIHN1cHBvcnRpbmcgaWUxMS5cbiAgICpcbiAgICogQHBhcmFtIGVsZW1lbnRcbiAgICovXG4gIHByaXZhdGUgZ2V0SG9zdEVsZW1lbnQoZWxlbWVudDogTm9kZSk6IEhUTUxFbGVtZW50IHtcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2V0SG9zdEVsZW1lbnQoZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==