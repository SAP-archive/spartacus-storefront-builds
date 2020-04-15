import { __decorate } from "tslib";
import { ComponentFactory, Directive, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, TemplateRef, ViewContainerRef, } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeferLoaderService } from '../../layout/loading/defer-loader.service';
import { OutletRendererService } from './outlet-renderer.service';
import { OutletPosition, USE_STACKED_OUTLETS } from './outlet.model';
import { OutletService } from './outlet.service';
let OutletDirective = class OutletDirective {
    constructor(vcr, templateRef, outletService, deferLoaderService, outletRendererService) {
        this.vcr = vcr;
        this.templateRef = templateRef;
        this.outletService = outletService;
        this.deferLoaderService = deferLoaderService;
        this.outletRendererService = outletRendererService;
        this.renderedTemplate = [];
        this.loaded = new EventEmitter(true);
        this.subscription = new Subscription();
    }
    render() {
        this.vcr.clear();
        this.renderedTemplate = [];
        this.subscription.unsubscribe();
        this.subscription = new Subscription();
        this.outletRendererService.register(this.cxOutlet, this);
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
        templates.forEach((obj) => {
            this.create(obj);
        });
    }
    create(tmplOrFactory) {
        if (tmplOrFactory instanceof ComponentFactory) {
            this.vcr.createComponent(tmplOrFactory);
        }
        else if (tmplOrFactory instanceof TemplateRef) {
            const view = this.vcr.createEmbeddedView(tmplOrFactory, {
                $implicit: this.cxOutletContext,
            });
            // we do not know if content is created dynamically or not
            // so we apply change detection anyway
            view.markForCheck();
        }
        this.renderedTemplate.push(tmplOrFactory);
    }
    /**
     * Returns the closest `HtmlElement`, by iterating over the
     * parent elements of the given element.
     *
     * @param element
     */
    getHostElement(element) {
        if (element instanceof HTMLElement) {
            return element;
        }
        return this.getHostElement(element.parentElement);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
OutletDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef },
    { type: OutletService },
    { type: DeferLoaderService },
    { type: OutletRendererService }
];
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
export { OutletDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04sYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBS2pELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFnQjFCLFlBQ1UsR0FBcUIsRUFDckIsV0FBNkIsRUFDN0IsYUFFUCxFQUNPLGtCQUFzQyxFQUN0QyxxQkFBNkM7UUFON0MsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUVwQjtRQUNPLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF3QjtRQXRCL0MscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBV3BCLFdBQU0sR0FBMEIsSUFBSSxZQUFZLENBQVUsSUFBSSxDQUFDLENBQUM7UUFFMUUsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBVS9CLENBQUM7SUFF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LFlBQVksV0FBVyxFQUFFO1lBQy9DLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQ3BCLGFBQWEsRUFDL0I7Z0JBQ0UsU0FBUyxFQUFFLElBQUksQ0FBQyxlQUFlO2FBQ2hDLENBQ0YsQ0FBQztZQUVGLDBEQUEwRDtZQUMxRCxzQ0FBc0M7WUFDdEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxjQUFjLENBQUMsT0FBZ0I7UUFDckMsSUFBSSxPQUFPLFlBQVksV0FBVyxFQUFFO1lBQ2xDLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztDQUNGLENBQUE7O1lBM0dnQixnQkFBZ0I7WUFDUixXQUFXO1lBQ1QsYUFBYTtZQUdSLGtCQUFrQjtZQUNkLHFCQUFxQjs7QUFwQjlDO0lBQVIsS0FBSyxFQUFFO2lEQUFrQjtBQUVqQjtJQUFSLEtBQUssRUFBRTt3REFBc0I7QUFLckI7SUFBUixLQUFLLEVBQUU7c0RBQW9DO0FBRWxDO0lBQVQsTUFBTSxFQUFFOytDQUFpRTtBQVovRCxlQUFlO0lBSDNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO0tBQ3ZCLENBQUM7R0FDVyxlQUFlLENBNEgzQjtTQTVIWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERlZmVyTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL2xheW91dC9sb2FkaW5nL2RlZmVyLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEludGVyc2VjdGlvbk9wdGlvbnMgfSBmcm9tICcuLi8uLi9sYXlvdXQvbG9hZGluZy9pbnRlcnNlY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgT3V0bGV0UmVuZGVyZXJTZXJ2aWNlIH0gZnJvbSAnLi9vdXRsZXQtcmVuZGVyZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPdXRsZXRQb3NpdGlvbiwgVVNFX1NUQUNLRURfT1VUTEVUUyB9IGZyb20gJy4vb3V0bGV0Lm1vZGVsJztcbmltcG9ydCB7IE91dGxldFNlcnZpY2UgfSBmcm9tICcuL291dGxldC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4T3V0bGV0XScsXG59KVxuZXhwb3J0IGNsYXNzIE91dGxldERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSByZW5kZXJlZFRlbXBsYXRlID0gW107XG5cbiAgQElucHV0KCkgY3hPdXRsZXQ6IHN0cmluZztcblxuICBASW5wdXQoKSBjeE91dGxldENvbnRleHQ6IGFueTtcblxuICAvKipcbiAgICogRGVmZXJzIGxvYWRpbmcgb3B0aW9ucyBmb3IgdGhlIHRoZSB0ZW1wbGF0ZXMgb2YgdGhpcyBvdXRsZXQuXG4gICAqL1xuICBASW5wdXQoKSBjeE91dGxldERlZmVyOiBJbnRlcnNlY3Rpb25PcHRpb25zO1xuXG4gIEBPdXRwdXQoKSBsb2FkZWQ6IEV2ZW50RW1pdHRlcjxCb29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Qm9vbGVhbj4odHJ1ZSk7XG5cbiAgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPFxuICAgICAgVGVtcGxhdGVSZWY8YW55PiB8IENvbXBvbmVudEZhY3Rvcnk8YW55PlxuICAgID4sXG4gICAgcHJpdmF0ZSBkZWZlckxvYWRlclNlcnZpY2U6IERlZmVyTG9hZGVyU2VydmljZSxcbiAgICBwcml2YXRlIG91dGxldFJlbmRlcmVyU2VydmljZT86IE91dGxldFJlbmRlcmVyU2VydmljZVxuICApIHt9XG5cbiAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLnZjci5jbGVhcigpO1xuICAgIHRoaXMucmVuZGVyZWRUZW1wbGF0ZSA9IFtdO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgdGhpcy5vdXRsZXRSZW5kZXJlclNlcnZpY2UucmVnaXN0ZXIodGhpcy5jeE91dGxldCwgdGhpcyk7XG5cbiAgICBpZiAodGhpcy5jeE91dGxldERlZmVyKSB7XG4gICAgICB0aGlzLmRlZmVyTG9hZGluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ1aWxkKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmN4T3V0bGV0KSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVmZXJMb2FkaW5nKCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGVkLmVtaXQoZmFsc2UpO1xuICAgIGNvbnN0IGhvc3RFbGVtZW50ID0gdGhpcy5nZXRIb3N0RWxlbWVudCh0aGlzLnZjci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIC8vIEFsdGhvdWdoIHRoZSBkZWZlckxvYWRlclNlcnZpY2UgbWlnaHQgZW1pdCBvbmx5IG9uY2UsIGFzIGxvbmcgYXMgdGhlIGhvc3RFbGVtZW50XG4gICAgLy8gaXNuJ3QgYmVpbmcgbG9hZGVkLCB0aGVyZSdzIG5vIHZhbHVlIGJlaW5nIGVtaXR0ZWQuIFRoZXJlZm9yIHdlIG5lZWQgdG8gY2xlYW4gdXBcbiAgICAvLyB0aGUgc3Vic2NyaXB0aW9uIG9uIGRlc3Ryb3kuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5kZWZlckxvYWRlclNlcnZpY2VcbiAgICAgICAgLmxvYWQoaG9zdEVsZW1lbnQsIHRoaXMuY3hPdXRsZXREZWZlcilcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5idWlsZCgpO1xuICAgICAgICAgIHRoaXMubG9hZGVkLmVtaXQodHJ1ZSk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGQoKSB7XG4gICAgdGhpcy5idWlsZE91dGxldChPdXRsZXRQb3NpdGlvbi5CRUZPUkUpO1xuICAgIHRoaXMuYnVpbGRPdXRsZXQoT3V0bGV0UG9zaXRpb24uUkVQTEFDRSk7XG4gICAgdGhpcy5idWlsZE91dGxldChPdXRsZXRQb3NpdGlvbi5BRlRFUik7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkT3V0bGV0KHBvc2l0aW9uOiBPdXRsZXRQb3NpdGlvbik6IHZvaWQge1xuICAgIGxldCB0ZW1wbGF0ZXM6IGFueVtdID0gPGFueVtdPihcbiAgICAgIHRoaXMub3V0bGV0U2VydmljZS5nZXQodGhpcy5jeE91dGxldCwgcG9zaXRpb24sIFVTRV9TVEFDS0VEX09VVExFVFMpXG4gICAgKTtcblxuICAgIHRlbXBsYXRlcyA9IHRlbXBsYXRlcz8uZmlsdGVyKChlbCkgPT4gIXRoaXMucmVuZGVyZWRUZW1wbGF0ZS5pbmNsdWRlcyhlbCkpO1xuXG4gICAgaWYgKCF0ZW1wbGF0ZXMgJiYgcG9zaXRpb24gPT09IE91dGxldFBvc2l0aW9uLlJFUExBQ0UpIHtcbiAgICAgIHRlbXBsYXRlcyA9IFt0aGlzLnRlbXBsYXRlUmVmXTtcbiAgICB9XG5cbiAgICAvLyBKdXN0IGluIGNhc2Ugc29tZW9uZSBleHRlbmRlZCB0aGUgYE91dGxldFNlcnZpY2VgIGFuZFxuICAgIC8vIHJldHVybnMgYSBzaW5ndWxhciBvYmplY3QuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRlbXBsYXRlcykpIHtcbiAgICAgIHRlbXBsYXRlcyA9IFt0ZW1wbGF0ZXNdO1xuICAgIH1cblxuICAgIHRlbXBsYXRlcy5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlKG9iaik7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZSh0bXBsT3JGYWN0b3J5OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodG1wbE9yRmFjdG9yeSBpbnN0YW5jZW9mIENvbXBvbmVudEZhY3RvcnkpIHtcbiAgICAgIHRoaXMudmNyLmNyZWF0ZUNvbXBvbmVudCh0bXBsT3JGYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHRtcGxPckZhY3RvcnkgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgY29uc3QgdmlldyA9IHRoaXMudmNyLmNyZWF0ZUVtYmVkZGVkVmlldyhcbiAgICAgICAgPFRlbXBsYXRlUmVmPGFueT4+dG1wbE9yRmFjdG9yeSxcbiAgICAgICAge1xuICAgICAgICAgICRpbXBsaWNpdDogdGhpcy5jeE91dGxldENvbnRleHQsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIC8vIHdlIGRvIG5vdCBrbm93IGlmIGNvbnRlbnQgaXMgY3JlYXRlZCBkeW5hbWljYWxseSBvciBub3RcbiAgICAgIC8vIHNvIHdlIGFwcGx5IGNoYW5nZSBkZXRlY3Rpb24gYW55d2F5XG4gICAgICB2aWV3Lm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVkVGVtcGxhdGUucHVzaCh0bXBsT3JGYWN0b3J5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjbG9zZXN0IGBIdG1sRWxlbWVudGAsIGJ5IGl0ZXJhdGluZyBvdmVyIHRoZVxuICAgKiBwYXJlbnQgZWxlbWVudHMgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtZW50XG4gICAqL1xuICBwcml2YXRlIGdldEhvc3RFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldEhvc3RFbGVtZW50KGVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=