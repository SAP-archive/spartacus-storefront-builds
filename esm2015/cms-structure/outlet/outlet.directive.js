import { ComponentFactory, Directive, EventEmitter, Injector, Input, Output, TemplateRef, ViewContainerRef, } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';
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
        /**
         * Observable with current outlet context
         */
        this.outletContext$ = new ReplaySubject(1);
        this.loaded = new EventEmitter(true);
        this.subscription = new Subscription();
    }
    /**
     * Renders view for outlet or defers it, depending on the input `cxOutletDefer`
     */
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
        if (changes.cxOutletContext) {
            this.outletContext$.next(this.cxOutletContext);
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
    /**
     * Renders view for outlet
     */
    build() {
        this.buildOutlet(OutletPosition.BEFORE);
        this.buildOutlet(OutletPosition.REPLACE);
        this.buildOutlet(OutletPosition.AFTER);
    }
    /**
     * Renders view in a given position for outlet
     */
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
    /**
     * Renders view based on the given template or component factory
     */
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
            context$: this.outletContext$.asObservable(),
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
        this.outletContext$.complete();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLGdCQUFnQixFQUVoQixTQUFTLEVBRVQsWUFBWSxFQUNaLFFBQVEsRUFDUixLQUFLLEVBR0wsTUFBTSxFQUVOLFdBQVcsRUFDWCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixjQUFjLEVBQ2QsbUJBQW1CLEdBQ3BCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBS2pELE1BQU0sT0FBTyxlQUFlO0lBNEIxQixZQUNVLEdBQXFCLEVBQ3JCLFdBQTZCLEVBQzdCLGFBQTRCLEVBQzVCLGtCQUFzQyxFQUN0QyxxQkFBNEM7UUFKNUMsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQWhDOUMscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLHVCQUFrQixHQUFHLElBQUksR0FBRyxFQUdoQyxDQUFDO1FBU0o7O1dBRUc7UUFDYyxtQkFBYyxHQUFHLElBQUksYUFBYSxDQUFJLENBQUMsQ0FB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LFFBQVE7WUFDeEIsUUFBUTtZQUNSLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZTtZQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUU7U0FDN0MsQ0FBQztRQUVGLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNyQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLFdBQVc7aUJBQ3RCO2FBQ0Y7WUFDRCxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRO1NBQzFCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSyxjQUFjLENBQUMsT0FBYTtRQUNsQyxJQUFJLE9BQU8sWUFBWSxXQUFXLEVBQUU7WUFDbEMsT0FBTyxPQUFPLENBQUM7U0FDaEI7UUFDRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUM7OztZQWxNRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7YUFDdkI7OztZQWZDLGdCQUFnQjtZQURoQixXQUFXO1lBWUosYUFBYTtZQVJiLGtCQUFrQjtZQUVsQixxQkFBcUI7Ozt1QkFrQjNCLEtBQUs7OEJBS0wsS0FBSzs0QkFVTCxLQUFLO3FCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEZWZlckxvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9sYXlvdXQvbG9hZGluZy9kZWZlci1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBJbnRlcnNlY3Rpb25PcHRpb25zIH0gZnJvbSAnLi4vLi4vbGF5b3V0L2xvYWRpbmcvaW50ZXJzZWN0aW9uLm1vZGVsJztcbmltcG9ydCB7IE91dGxldFJlbmRlcmVyU2VydmljZSB9IGZyb20gJy4vb3V0bGV0LXJlbmRlcmVyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgT3V0bGV0Q29udGV4dERhdGEsXG4gIE91dGxldFBvc2l0aW9uLFxuICBVU0VfU1RBQ0tFRF9PVVRMRVRTLFxufSBmcm9tICcuL291dGxldC5tb2RlbCc7XG5pbXBvcnQgeyBPdXRsZXRTZXJ2aWNlIH0gZnJvbSAnLi9vdXRsZXQuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeE91dGxldF0nLFxufSlcbmV4cG9ydCBjbGFzcyBPdXRsZXREaXJlY3RpdmU8VCA9IGFueT4gaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgcmVuZGVyZWRUZW1wbGF0ZSA9IFtdO1xuICBwdWJsaWMgcmVuZGVyZWRDb21wb25lbnRzID0gbmV3IE1hcDxcbiAgICBPdXRsZXRQb3NpdGlvbixcbiAgICBBcnJheTxDb21wb25lbnRSZWY8YW55PiB8IEVtYmVkZGVkVmlld1JlZjxhbnk+PlxuICA+KCk7XG5cbiAgQElucHV0KCkgY3hPdXRsZXQ6IHN0cmluZztcblxuICAvKipcbiAgICogQ29udGV4dCBkYXRhIHRvIGJlIHByb3ZpZGVkIHRvIGNoaWxkIHZpZXcgb2YgdGhlIG91dGxldFxuICAgKi9cbiAgQElucHV0KCkgY3hPdXRsZXRDb250ZXh0OiBUO1xuXG4gIC8qKlxuICAgKiBPYnNlcnZhYmxlIHdpdGggY3VycmVudCBvdXRsZXQgY29udGV4dFxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBvdXRsZXRDb250ZXh0JCA9IG5ldyBSZXBsYXlTdWJqZWN0PFQ+KDEpO1xuXG4gIC8qKlxuICAgKiBEZWZlcnMgbG9hZGluZyBvcHRpb25zIGZvciB0aGUgdGhlIHRlbXBsYXRlcyBvZiB0aGlzIG91dGxldC5cbiAgICovXG4gIEBJbnB1dCgpIGN4T3V0bGV0RGVmZXI6IEludGVyc2VjdGlvbk9wdGlvbnM7XG5cbiAgQE91dHB1dCgpIGxvYWRlZDogRXZlbnRFbWl0dGVyPEJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxCb29sZWFuPih0cnVlKTtcblxuICBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkZWZlckxvYWRlclNlcnZpY2U6IERlZmVyTG9hZGVyU2VydmljZSxcbiAgICBwcml2YXRlIG91dGxldFJlbmRlcmVyU2VydmljZTogT3V0bGV0UmVuZGVyZXJTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmVuZGVycyB2aWV3IGZvciBvdXRsZXQgb3IgZGVmZXJzIGl0LCBkZXBlbmRpbmcgb24gdGhlIGlucHV0IGBjeE91dGxldERlZmVyYFxuICAgKi9cbiAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLnZjci5jbGVhcigpO1xuICAgIHRoaXMucmVuZGVyZWRUZW1wbGF0ZSA9IFtdO1xuICAgIHRoaXMucmVuZGVyZWRDb21wb25lbnRzLmNsZWFyKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICAgIGlmICh0aGlzLmN4T3V0bGV0RGVmZXIpIHtcbiAgICAgIHRoaXMuZGVmZXJMb2FkaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnVpbGQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuY3hPdXRsZXQpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICB0aGlzLm91dGxldFJlbmRlcmVyU2VydmljZS5yZWdpc3Rlcih0aGlzLmN4T3V0bGV0LCB0aGlzKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuY3hPdXRsZXRDb250ZXh0KSB7XG4gICAgICB0aGlzLm91dGxldENvbnRleHQkLm5leHQodGhpcy5jeE91dGxldENvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVmZXJMb2FkaW5nKCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGVkLmVtaXQoZmFsc2UpO1xuICAgIGNvbnN0IGhvc3RFbGVtZW50ID0gdGhpcy5nZXRIb3N0RWxlbWVudCh0aGlzLnZjci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIC8vIEFsdGhvdWdoIHRoZSBkZWZlckxvYWRlclNlcnZpY2UgbWlnaHQgZW1pdCBvbmx5IG9uY2UsIGFzIGxvbmcgYXMgdGhlIGhvc3RFbGVtZW50XG4gICAgLy8gaXNuJ3QgYmVpbmcgbG9hZGVkLCB0aGVyZSdzIG5vIHZhbHVlIGJlaW5nIGVtaXR0ZWQuIFRoZXJlZm9yIHdlIG5lZWQgdG8gY2xlYW4gdXBcbiAgICAvLyB0aGUgc3Vic2NyaXB0aW9uIG9uIGRlc3Ryb3kuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5kZWZlckxvYWRlclNlcnZpY2VcbiAgICAgICAgLmxvYWQoaG9zdEVsZW1lbnQsIHRoaXMuY3hPdXRsZXREZWZlcilcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5idWlsZCgpO1xuICAgICAgICAgIHRoaXMubG9hZGVkLmVtaXQodHJ1ZSk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHZpZXcgZm9yIG91dGxldFxuICAgKi9cbiAgcHJpdmF0ZSBidWlsZCgpIHtcbiAgICB0aGlzLmJ1aWxkT3V0bGV0KE91dGxldFBvc2l0aW9uLkJFRk9SRSk7XG4gICAgdGhpcy5idWlsZE91dGxldChPdXRsZXRQb3NpdGlvbi5SRVBMQUNFKTtcbiAgICB0aGlzLmJ1aWxkT3V0bGV0KE91dGxldFBvc2l0aW9uLkFGVEVSKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHZpZXcgaW4gYSBnaXZlbiBwb3NpdGlvbiBmb3Igb3V0bGV0XG4gICAqL1xuICBwcml2YXRlIGJ1aWxkT3V0bGV0KHBvc2l0aW9uOiBPdXRsZXRQb3NpdGlvbik6IHZvaWQge1xuICAgIGxldCB0ZW1wbGF0ZXM6IGFueVtdID0gPGFueVtdPihcbiAgICAgIHRoaXMub3V0bGV0U2VydmljZS5nZXQodGhpcy5jeE91dGxldCwgcG9zaXRpb24sIFVTRV9TVEFDS0VEX09VVExFVFMpXG4gICAgKTtcblxuICAgIHRlbXBsYXRlcyA9IHRlbXBsYXRlcz8uZmlsdGVyKChlbCkgPT4gIXRoaXMucmVuZGVyZWRUZW1wbGF0ZS5pbmNsdWRlcyhlbCkpO1xuXG4gICAgaWYgKCF0ZW1wbGF0ZXMgJiYgcG9zaXRpb24gPT09IE91dGxldFBvc2l0aW9uLlJFUExBQ0UpIHtcbiAgICAgIHRlbXBsYXRlcyA9IFt0aGlzLnRlbXBsYXRlUmVmXTtcbiAgICB9XG5cbiAgICAvLyBKdXN0IGluIGNhc2Ugc29tZW9uZSBleHRlbmRlZCB0aGUgYE91dGxldFNlcnZpY2VgIGFuZFxuICAgIC8vIHJldHVybnMgYSBzaW5ndWxhciBvYmplY3QuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRlbXBsYXRlcykpIHtcbiAgICAgIHRlbXBsYXRlcyA9IFt0ZW1wbGF0ZXNdO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbXTtcbiAgICB0ZW1wbGF0ZXMuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNyZWF0ZShvYmosIHBvc2l0aW9uKTtcbiAgICAgIGNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZW5kZXJlZENvbXBvbmVudHMuc2V0KHBvc2l0aW9uLCBjb21wb25lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHZpZXcgYmFzZWQgb24gdGhlIGdpdmVuIHRlbXBsYXRlIG9yIGNvbXBvbmVudCBmYWN0b3J5XG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZShcbiAgICB0bXBsT3JGYWN0b3J5OiBhbnksXG4gICAgcG9zaXRpb246IE91dGxldFBvc2l0aW9uXG4gICk6IENvbXBvbmVudFJlZjxhbnk+IHwgRW1iZWRkZWRWaWV3UmVmPGFueT4ge1xuICAgIHRoaXMucmVuZGVyZWRUZW1wbGF0ZS5wdXNoKHRtcGxPckZhY3RvcnkpO1xuXG4gICAgaWYgKHRtcGxPckZhY3RvcnkgaW5zdGFuY2VvZiBDb21wb25lbnRGYWN0b3J5KSB7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLnZjci5jcmVhdGVDb21wb25lbnQoXG4gICAgICAgIHRtcGxPckZhY3RvcnksXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnRJbmplY3Rvcihwb3NpdGlvbilcbiAgICAgICk7XG4gICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH0gZWxzZSBpZiAodG1wbE9yRmFjdG9yeSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICBjb25zdCB2aWV3ID0gdGhpcy52Y3IuY3JlYXRlRW1iZWRkZWRWaWV3KFxuICAgICAgICA8VGVtcGxhdGVSZWY8YW55Pj50bXBsT3JGYWN0b3J5LFxuICAgICAgICB7XG4gICAgICAgICAgJGltcGxpY2l0OiB0aGlzLmN4T3V0bGV0Q29udGV4dCxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgLy8gd2UgZG8gbm90IGtub3cgaWYgY29udGVudCBpcyBjcmVhdGVkIGR5bmFtaWNhbGx5IG9yIG5vdFxuICAgICAgLy8gc28gd2UgYXBwbHkgY2hhbmdlIGRldGVjdGlvbiBhbnl3YXlcbiAgICAgIHZpZXcubWFya0ZvckNoZWNrKCk7XG4gICAgICByZXR1cm4gdmlldztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBpbmplY3RvciB3aXRoIE91dGxldENvbnRleHREYXRhIHRoYXQgY2FuIGJlIGluamVjdGVkIHRvIHRoZSBjb21wb25lbnRcbiAgICogcmVuZGVyZWQgaW4gdGhlIG91dGxldFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRDb21wb25lbnRJbmplY3Rvcihwb3NpdGlvbjogT3V0bGV0UG9zaXRpb24pOiBJbmplY3RvciB7XG4gICAgY29uc3QgY29udGV4dERhdGE6IE91dGxldENvbnRleHREYXRhPFQ+ID0ge1xuICAgICAgcmVmZXJlbmNlOiB0aGlzLmN4T3V0bGV0LFxuICAgICAgcG9zaXRpb24sXG4gICAgICBjb250ZXh0OiB0aGlzLmN4T3V0bGV0Q29udGV4dCxcbiAgICAgIGNvbnRleHQkOiB0aGlzLm91dGxldENvbnRleHQkLmFzT2JzZXJ2YWJsZSgpLFxuICAgIH07XG5cbiAgICByZXR1cm4gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogT3V0bGV0Q29udGV4dERhdGEsXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbnRleHREYXRhLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHBhcmVudDogdGhpcy52Y3IuaW5qZWN0b3IsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2xvc2VzdCBgSHRtbEVsZW1lbnRgLCBieSBpdGVyYXRpbmcgb3ZlciB0aGVcbiAgICogcGFyZW50IG5vZGVzIG9mIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKlxuICAgKiBXZSBhdm9pZCB0cmF2ZXJzaW5nIHRoZSBwYXJlbnQgX2VsZW1lbnRzXywgYXMgdGhpcyBpcyBibG9ja2luZ1xuICAgKiBpZTExIGltcGxlbWVudGF0aW9ucy4gT25lIG9mIHRoZSBzcGFyZSBleGNsdXNpb25zIHdlIG1ha2UgdG8gbm90XG4gICAqIHN1cHBvcnRpbmcgaWUxMS5cbiAgICpcbiAgICogQHBhcmFtIGVsZW1lbnRcbiAgICovXG4gIHByaXZhdGUgZ2V0SG9zdEVsZW1lbnQoZWxlbWVudDogTm9kZSk6IEhUTUxFbGVtZW50IHtcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2V0SG9zdEVsZW1lbnQoZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5vdXRsZXRDb250ZXh0JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=