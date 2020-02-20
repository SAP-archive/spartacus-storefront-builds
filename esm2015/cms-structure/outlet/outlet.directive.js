import { __decorate } from "tslib";
import { ComponentFactory, Directive, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, TemplateRef, ViewContainerRef, } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeferLoaderService } from '../../layout/loading/defer-loader.service';
import { OutletPosition, USE_STACKED_OUTLETS } from './outlet.model';
import { OutletService } from './outlet.service';
let OutletDirective = class OutletDirective {
    constructor(vcr, templateRef, outletService, deferLoaderService) {
        this.vcr = vcr;
        this.templateRef = templateRef;
        this.outletService = outletService;
        this.deferLoaderService = deferLoaderService;
        this.loaded = new EventEmitter(true);
        this.subscription = new Subscription();
    }
    initializeOutlet() {
        this.vcr.clear();
        this.subscription.unsubscribe();
        this.subscription = new Subscription();
        if (this.cxOutletDefer) {
            this.deferLoading();
        }
        else {
            this.render();
        }
    }
    ngOnChanges(changes) {
        if (changes.cxOutlet) {
            this.initializeOutlet();
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
            this.render();
            this.loaded.emit(true);
        }));
    }
    render() {
        this.renderOutlet(OutletPosition.BEFORE);
        this.renderOutlet(OutletPosition.REPLACE);
        this.renderOutlet(OutletPosition.AFTER);
    }
    renderOutlet(position) {
        let templates = (this.outletService.get(this.cxOutlet, position, USE_STACKED_OUTLETS));
        if (!templates && position === OutletPosition.REPLACE) {
            templates = [this.templateRef];
        }
        // Just in case someone extended the `OutletService` and
        // returns a singular object.
        if (!Array.isArray(templates)) {
            templates = [templates];
        }
        templates.forEach(obj => {
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
    { type: DeferLoaderService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04sYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBS2pELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUE4QjFCLFlBQ1UsR0FBcUIsRUFDckIsV0FBNkIsRUFDN0IsYUFFUCxFQUNPLGtCQUF1QztRQUx2QyxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBRXBCO1FBQ08sdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFxQjtRQTFCdkMsV0FBTSxHQUEwQixJQUFJLFlBQVksQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUUxRSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUF5Qi9CLENBQUM7SUFFSSxnQkFBZ0I7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcs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QVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Q0FDRixDQUFBOztZQXJHZ0IsZ0JBQWdCO1lBQ1IsV0FBVztZQUNULGFBQWE7WUFHUCxrQkFBa0I7O0FBbkN4QztJQUFSLEtBQUssRUFBRTtpREFBa0I7QUFFakI7SUFBUixLQUFLLEVBQUU7d0RBQXNCO0FBS3JCO0lBQVIsS0FBSyxFQUFFO3NEQUFvQztBQUVsQztJQUFULE1BQU0sRUFBRTsrQ0FBaUU7QUFWL0QsZUFBZTtJQUgzQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtLQUN2QixDQUFDO0dBQ1csZUFBZSxDQW9JM0I7U0FwSVksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnksXG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEZWZlckxvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9sYXlvdXQvbG9hZGluZy9kZWZlci1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBJbnRlcnNlY3Rpb25PcHRpb25zIH0gZnJvbSAnLi4vLi4vbGF5b3V0L2xvYWRpbmcvaW50ZXJzZWN0aW9uLm1vZGVsJztcbmltcG9ydCB7IE91dGxldFBvc2l0aW9uLCBVU0VfU1RBQ0tFRF9PVVRMRVRTIH0gZnJvbSAnLi9vdXRsZXQubW9kZWwnO1xuaW1wb3J0IHsgT3V0bGV0U2VydmljZSB9IGZyb20gJy4vb3V0bGV0LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hPdXRsZXRdJyxcbn0pXG5leHBvcnQgY2xhc3MgT3V0bGV0RGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBjeE91dGxldDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGN4T3V0bGV0Q29udGV4dDogYW55O1xuXG4gIC8qKlxuICAgKiBEZWZlcnMgbG9hZGluZyBvcHRpb25zIGZvciB0aGUgdGhlIHRlbXBsYXRlcyBvZiB0aGlzIG91dGxldC5cbiAgICovXG4gIEBJbnB1dCgpIGN4T3V0bGV0RGVmZXI6IEludGVyc2VjdGlvbk9wdGlvbnM7XG5cbiAgQE91dHB1dCgpIGxvYWRlZDogRXZlbnRFbWl0dGVyPEJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxCb29sZWFuPih0cnVlKTtcblxuICBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2U8VGVtcGxhdGVSZWY8YW55PiB8IENvbXBvbmVudEZhY3Rvcnk8YW55Pj4sXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBpbnRlcnNlY3Rpb25TZXJ2aWNlOiBEZWZlckxvYWRlclNlcnZpY2VcbiAgKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS40XG4gICAqIFVzZSBjb25zdHJ1Y3Rvcih2Y3I6IFZpZXdDb250YWluZXJSZWYsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPFRlbXBsYXRlUmVmPGFueT4gfCBDb21wb25lbnRGYWN0b3J5PGFueT4+LCBpbnRlcnNlY3Rpb25TZXJ2aWNlPzogSW50ZXJzZWN0aW9uU2VydmljZSkgaW5zdGVhZFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2U8VGVtcGxhdGVSZWY8YW55PiB8IENvbXBvbmVudEZhY3Rvcnk8YW55Pj5cbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2U8XG4gICAgICBUZW1wbGF0ZVJlZjxhbnk+IHwgQ29tcG9uZW50RmFjdG9yeTxhbnk+XG4gICAgPixcbiAgICBwcml2YXRlIGRlZmVyTG9hZGVyU2VydmljZT86IERlZmVyTG9hZGVyU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplT3V0bGV0KCk6IHZvaWQge1xuICAgIHRoaXMudmNyLmNsZWFyKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICAgIGlmICh0aGlzLmN4T3V0bGV0RGVmZXIpIHtcbiAgICAgIHRoaXMuZGVmZXJMb2FkaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmN4T3V0bGV0KSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVPdXRsZXQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlZmVyTG9hZGluZygpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRlZC5lbWl0KGZhbHNlKTtcbiAgICBjb25zdCBob3N0RWxlbWVudCA9IHRoaXMuZ2V0SG9zdEVsZW1lbnQodGhpcy52Y3IuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAvLyBBbHRob3VnaCB0aGUgZGVmZXJMb2FkZXJTZXJ2aWNlIG1pZ2h0IGVtaXQgb25seSBvbmNlLCBhcyBsb25nIGFzIHRoZSBob3N0RWxlbWVudFxuICAgIC8vIGlzbid0IGJlaW5nIGxvYWRlZCwgdGhlcmUncyBubyB2YWx1ZSBiZWluZyBlbWl0dGVkLiBUaGVyZWZvciB3ZSBuZWVkIHRvIGNsZWFuIHVwXG4gICAgLy8gdGhlIHN1YnNjcmlwdGlvbiBvbiBkZXN0cm95LlxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuZGVmZXJMb2FkZXJTZXJ2aWNlXG4gICAgICAgIC5sb2FkKGhvc3RFbGVtZW50LCB0aGlzLmN4T3V0bGV0RGVmZXIpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgdGhpcy5sb2FkZWQuZW1pdCh0cnVlKTtcbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKSB7XG4gICAgdGhpcy5yZW5kZXJPdXRsZXQoT3V0bGV0UG9zaXRpb24uQkVGT1JFKTtcbiAgICB0aGlzLnJlbmRlck91dGxldChPdXRsZXRQb3NpdGlvbi5SRVBMQUNFKTtcbiAgICB0aGlzLnJlbmRlck91dGxldChPdXRsZXRQb3NpdGlvbi5BRlRFUik7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlck91dGxldChwb3NpdGlvbjogT3V0bGV0UG9zaXRpb24pOiB2b2lkIHtcbiAgICBsZXQgdGVtcGxhdGVzOiBhbnlbXSA9IDxhbnlbXT4oXG4gICAgICB0aGlzLm91dGxldFNlcnZpY2UuZ2V0KHRoaXMuY3hPdXRsZXQsIHBvc2l0aW9uLCBVU0VfU1RBQ0tFRF9PVVRMRVRTKVxuICAgICk7XG5cbiAgICBpZiAoIXRlbXBsYXRlcyAmJiBwb3NpdGlvbiA9PT0gT3V0bGV0UG9zaXRpb24uUkVQTEFDRSkge1xuICAgICAgdGVtcGxhdGVzID0gW3RoaXMudGVtcGxhdGVSZWZdO1xuICAgIH1cblxuICAgIC8vIEp1c3QgaW4gY2FzZSBzb21lb25lIGV4dGVuZGVkIHRoZSBgT3V0bGV0U2VydmljZWAgYW5kXG4gICAgLy8gcmV0dXJucyBhIHNpbmd1bGFyIG9iamVjdC5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGVtcGxhdGVzKSkge1xuICAgICAgdGVtcGxhdGVzID0gW3RlbXBsYXRlc107XG4gICAgfVxuXG4gICAgdGVtcGxhdGVzLmZvckVhY2gob2JqID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlKG9iaik7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZSh0bXBsT3JGYWN0b3J5OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodG1wbE9yRmFjdG9yeSBpbnN0YW5jZW9mIENvbXBvbmVudEZhY3RvcnkpIHtcbiAgICAgIHRoaXMudmNyLmNyZWF0ZUNvbXBvbmVudCh0bXBsT3JGYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHRtcGxPckZhY3RvcnkgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgY29uc3QgdmlldyA9IHRoaXMudmNyLmNyZWF0ZUVtYmVkZGVkVmlldyhcbiAgICAgICAgPFRlbXBsYXRlUmVmPGFueT4+dG1wbE9yRmFjdG9yeSxcbiAgICAgICAge1xuICAgICAgICAgICRpbXBsaWNpdDogdGhpcy5jeE91dGxldENvbnRleHQsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIC8vIHdlIGRvIG5vdCBrbm93IGlmIGNvbnRlbnQgaXMgY3JlYXRlZCBkeW5hbWljYWxseSBvciBub3RcbiAgICAgIC8vIHNvIHdlIGFwcGx5IGNoYW5nZSBkZXRlY3Rpb24gYW55d2F5XG4gICAgICB2aWV3Lm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjbG9zZXN0IGBIdG1sRWxlbWVudGAsIGJ5IGl0ZXJhdGluZyBvdmVyIHRoZVxuICAgKiBwYXJlbnQgZWxlbWVudHMgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtZW50XG4gICAqL1xuICBwcml2YXRlIGdldEhvc3RFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldEhvc3RFbGVtZW50KGVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=