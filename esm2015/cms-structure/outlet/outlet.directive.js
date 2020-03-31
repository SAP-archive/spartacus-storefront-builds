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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04sYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBS2pELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUE4QjFCLFlBQ1UsR0FBcUIsRUFDckIsV0FBNkIsRUFDN0IsYUFFUCxFQUNPLGtCQUF1QztRQUx2QyxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBRXBCO1FBQ08sdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFxQjtRQTFCdkMsV0FBTSxHQUEwQixJQUFJLFlBQVksQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUUxRSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUF5Qi9CLENBQUM7SUFFSSxnQkFBZ0I7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcs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RUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztDQUNGLENBQUE7O1lBckdnQixnQkFBZ0I7WUFDUixXQUFXO1lBQ1QsYUFBYTtZQUdQLGtCQUFrQjs7QUFuQ3hDO0lBQVIsS0FBSyxFQUFFO2lEQUFrQjtBQUVqQjtJQUFSLEtBQUssRUFBRTt3REFBc0I7QUFLckI7SUFBUixLQUFLLEVBQUU7c0RBQW9DO0FBRWxDO0lBQVQsTUFBTSxFQUFFOytDQUFpRTtBQVYvRCxlQUFlO0lBSDNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO0tBQ3ZCLENBQUM7R0FDVyxlQUFlLENBb0kzQjtTQXBJWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERlZmVyTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL2xheW91dC9sb2FkaW5nL2RlZmVyLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEludGVyc2VjdGlvbk9wdGlvbnMgfSBmcm9tICcuLi8uLi9sYXlvdXQvbG9hZGluZy9pbnRlcnNlY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgT3V0bGV0UG9zaXRpb24sIFVTRV9TVEFDS0VEX09VVExFVFMgfSBmcm9tICcuL291dGxldC5tb2RlbCc7XG5pbXBvcnQgeyBPdXRsZXRTZXJ2aWNlIH0gZnJvbSAnLi9vdXRsZXQuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeE91dGxldF0nLFxufSlcbmV4cG9ydCBjbGFzcyBPdXRsZXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGN4T3V0bGV0OiBzdHJpbmc7XG5cbiAgQElucHV0KCkgY3hPdXRsZXRDb250ZXh0OiBhbnk7XG5cbiAgLyoqXG4gICAqIERlZmVycyBsb2FkaW5nIG9wdGlvbnMgZm9yIHRoZSB0aGUgdGVtcGxhdGVzIG9mIHRoaXMgb3V0bGV0LlxuICAgKi9cbiAgQElucHV0KCkgY3hPdXRsZXREZWZlcjogSW50ZXJzZWN0aW9uT3B0aW9ucztcblxuICBAT3V0cHV0KCkgbG9hZGVkOiBFdmVudEVtaXR0ZXI8Qm9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPEJvb2xlYW4+KHRydWUpO1xuXG4gIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZTxUZW1wbGF0ZVJlZjxhbnk+IHwgQ29tcG9uZW50RmFjdG9yeTxhbnk+PixcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIGludGVyc2VjdGlvblNlcnZpY2U6IERlZmVyTG9hZGVyU2VydmljZVxuICApO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjRcbiAgICogVXNlIGNvbnN0cnVjdG9yKHZjcjogVmlld0NvbnRhaW5lclJlZiwgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2U8VGVtcGxhdGVSZWY8YW55PiB8IENvbXBvbmVudEZhY3Rvcnk8YW55Pj4sIGludGVyc2VjdGlvblNlcnZpY2U/OiBJbnRlcnNlY3Rpb25TZXJ2aWNlKSBpbnN0ZWFkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZTxUZW1wbGF0ZVJlZjxhbnk+IHwgQ29tcG9uZW50RmFjdG9yeTxhbnk+PlxuICApO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZTxcbiAgICAgIFRlbXBsYXRlUmVmPGFueT4gfCBDb21wb25lbnRGYWN0b3J5PGFueT5cbiAgICA+LFxuICAgIHByaXZhdGUgZGVmZXJMb2FkZXJTZXJ2aWNlPzogRGVmZXJMb2FkZXJTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIGluaXRpYWxpemVPdXRsZXQoKTogdm9pZCB7XG4gICAgdGhpcy52Y3IuY2xlYXIoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuY3hPdXRsZXREZWZlcikge1xuICAgICAgdGhpcy5kZWZlckxvYWRpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuY3hPdXRsZXQpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZU91dGxldCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVmZXJMb2FkaW5nKCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGVkLmVtaXQoZmFsc2UpO1xuICAgIGNvbnN0IGhvc3RFbGVtZW50ID0gdGhpcy5nZXRIb3N0RWxlbWVudCh0aGlzLnZjci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIC8vIEFsdGhvdWdoIHRoZSBkZWZlckxvYWRlclNlcnZpY2UgbWlnaHQgZW1pdCBvbmx5IG9uY2UsIGFzIGxvbmcgYXMgdGhlIGhvc3RFbGVtZW50XG4gICAgLy8gaXNuJ3QgYmVpbmcgbG9hZGVkLCB0aGVyZSdzIG5vIHZhbHVlIGJlaW5nIGVtaXR0ZWQuIFRoZXJlZm9yIHdlIG5lZWQgdG8gY2xlYW4gdXBcbiAgICAvLyB0aGUgc3Vic2NyaXB0aW9uIG9uIGRlc3Ryb3kuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5kZWZlckxvYWRlclNlcnZpY2VcbiAgICAgICAgLmxvYWQoaG9zdEVsZW1lbnQsIHRoaXMuY3hPdXRsZXREZWZlcilcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICB0aGlzLmxvYWRlZC5lbWl0KHRydWUpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpIHtcbiAgICB0aGlzLnJlbmRlck91dGxldChPdXRsZXRQb3NpdGlvbi5CRUZPUkUpO1xuICAgIHRoaXMucmVuZGVyT3V0bGV0KE91dGxldFBvc2l0aW9uLlJFUExBQ0UpO1xuICAgIHRoaXMucmVuZGVyT3V0bGV0KE91dGxldFBvc2l0aW9uLkFGVEVSKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyT3V0bGV0KHBvc2l0aW9uOiBPdXRsZXRQb3NpdGlvbik6IHZvaWQge1xuICAgIGxldCB0ZW1wbGF0ZXM6IGFueVtdID0gPGFueVtdPihcbiAgICAgIHRoaXMub3V0bGV0U2VydmljZS5nZXQodGhpcy5jeE91dGxldCwgcG9zaXRpb24sIFVTRV9TVEFDS0VEX09VVExFVFMpXG4gICAgKTtcblxuICAgIGlmICghdGVtcGxhdGVzICYmIHBvc2l0aW9uID09PSBPdXRsZXRQb3NpdGlvbi5SRVBMQUNFKSB7XG4gICAgICB0ZW1wbGF0ZXMgPSBbdGhpcy50ZW1wbGF0ZVJlZl07XG4gICAgfVxuXG4gICAgLy8gSnVzdCBpbiBjYXNlIHNvbWVvbmUgZXh0ZW5kZWQgdGhlIGBPdXRsZXRTZXJ2aWNlYCBhbmRcbiAgICAvLyByZXR1cm5zIGEgc2luZ3VsYXIgb2JqZWN0LlxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0ZW1wbGF0ZXMpKSB7XG4gICAgICB0ZW1wbGF0ZXMgPSBbdGVtcGxhdGVzXTtcbiAgICB9XG5cbiAgICB0ZW1wbGF0ZXMuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZShvYmopO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGUodG1wbE9yRmFjdG9yeTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRtcGxPckZhY3RvcnkgaW5zdGFuY2VvZiBDb21wb25lbnRGYWN0b3J5KSB7XG4gICAgICB0aGlzLnZjci5jcmVhdGVDb21wb25lbnQodG1wbE9yRmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0bXBsT3JGYWN0b3J5IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLnZjci5jcmVhdGVFbWJlZGRlZFZpZXcoXG4gICAgICAgIDxUZW1wbGF0ZVJlZjxhbnk+PnRtcGxPckZhY3RvcnksXG4gICAgICAgIHtcbiAgICAgICAgICAkaW1wbGljaXQ6IHRoaXMuY3hPdXRsZXRDb250ZXh0LFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICAvLyB3ZSBkbyBub3Qga25vdyBpZiBjb250ZW50IGlzIGNyZWF0ZWQgZHluYW1pY2FsbHkgb3Igbm90XG4gICAgICAvLyBzbyB3ZSBhcHBseSBjaGFuZ2UgZGV0ZWN0aW9uIGFueXdheVxuICAgICAgdmlldy5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2xvc2VzdCBgSHRtbEVsZW1lbnRgLCBieSBpdGVyYXRpbmcgb3ZlciB0aGVcbiAgICogcGFyZW50IGVsZW1lbnRzIG9mIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbWVudFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRIb3N0RWxlbWVudChlbGVtZW50OiBFbGVtZW50KTogSFRNTEVsZW1lbnQge1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXRIb3N0RWxlbWVudChlbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19