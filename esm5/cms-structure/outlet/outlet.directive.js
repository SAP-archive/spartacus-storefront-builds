import { __decorate } from "tslib";
import { ComponentFactory, Directive, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, TemplateRef, ViewContainerRef, } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeferLoaderService } from '../../layout/loading/defer-loader.service';
import { OutletPosition, USE_STACKED_OUTLETS } from './outlet.model';
import { OutletService } from './outlet.service';
var OutletDirective = /** @class */ (function () {
    function OutletDirective(vcr, templateRef, outletService, deferLoaderService) {
        this.vcr = vcr;
        this.templateRef = templateRef;
        this.outletService = outletService;
        this.deferLoaderService = deferLoaderService;
        this.loaded = new EventEmitter(true);
        this.subscription = new Subscription();
    }
    OutletDirective.prototype.initializeOutlet = function () {
        this.vcr.clear();
        this.subscription.unsubscribe();
        this.subscription = new Subscription();
        if (this.cxOutletDefer) {
            this.deferLoading();
        }
        else {
            this.render();
        }
    };
    OutletDirective.prototype.ngOnChanges = function (changes) {
        if (changes.cxOutlet) {
            this.initializeOutlet();
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
            _this.render();
            _this.loaded.emit(true);
        }));
    };
    OutletDirective.prototype.render = function () {
        this.renderOutlet(OutletPosition.BEFORE);
        this.renderOutlet(OutletPosition.REPLACE);
        this.renderOutlet(OutletPosition.AFTER);
    };
    OutletDirective.prototype.renderOutlet = function (position) {
        var _this = this;
        var templates = (this.outletService.get(this.cxOutlet, position, USE_STACKED_OUTLETS));
        if (!templates && position === OutletPosition.REPLACE) {
            templates = [this.templateRef];
        }
        // Just in case someone extended the `OutletService` and
        // returns a singular object.
        if (!Array.isArray(templates)) {
            templates = [templates];
        }
        templates.forEach(function (obj) {
            _this.create(obj);
        });
    };
    OutletDirective.prototype.create = function (tmplOrFactory) {
        if (tmplOrFactory instanceof ComponentFactory) {
            this.vcr.createComponent(tmplOrFactory);
        }
        else if (tmplOrFactory instanceof TemplateRef) {
            var view = this.vcr.createEmbeddedView(tmplOrFactory, {
                $implicit: this.cxOutletContext,
            });
            // we do not know if content is created dynamically or not
            // so we apply change detection anyway
            view.markForCheck();
        }
    };
    /**
     * Returns the closest `HtmlElement`, by iterating over the
     * parent elements of the given element.
     *
     * @param element
     */
    OutletDirective.prototype.getHostElement = function (element) {
        if (element instanceof HTMLElement) {
            return element;
        }
        return this.getHostElement(element.parentElement);
    };
    OutletDirective.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    OutletDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef },
        { type: OutletService },
        { type: DeferLoaderService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04sYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBS2pEO0lBOEJFLHlCQUNVLEdBQXFCLEVBQ3JCLFdBQTZCLEVBQzdCLGFBRVAsRUFDTyxrQkFBdUM7UUFMdkMsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUVwQjtRQUNPLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBcUI7UUExQnZDLFdBQU0sR0FBMEIsSUFBSSxZQUFZLENBQVUsSUFBSSxDQUFDLENBQUM7UUFFMUUsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBeUIvQixDQUFDO0lBRUksMENBQWdCLEdBQXhCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztR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Q0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOztnQkFwR2MsZ0JBQWdCO2dCQUNSLFdBQVc7Z0JBQ1QsYUFBYTtnQkFHUCxrQkFBa0I7O0lBbkN4QztRQUFSLEtBQUssRUFBRTtxREFBa0I7SUFFakI7UUFBUixLQUFLLEVBQUU7NERBQXNCO0lBS3JCO1FBQVIsS0FBSyxFQUFFOzBEQUFvQztJQUVsQztRQUFULE1BQU0sRUFBRTttREFBaUU7SUFWL0QsZUFBZTtRQUgzQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtTQUN2QixDQUFDO09BQ1csZUFBZSxDQW9JM0I7SUFBRCxzQkFBQztDQUFBLEFBcElELElBb0lDO1NBcElZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5LFxuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGVmZXJMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbGF5b3V0L2xvYWRpbmcvZGVmZXItbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uT3B0aW9ucyB9IGZyb20gJy4uLy4uL2xheW91dC9sb2FkaW5nL2ludGVyc2VjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBPdXRsZXRQb3NpdGlvbiwgVVNFX1NUQUNLRURfT1VUTEVUUyB9IGZyb20gJy4vb3V0bGV0Lm1vZGVsJztcbmltcG9ydCB7IE91dGxldFNlcnZpY2UgfSBmcm9tICcuL291dGxldC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4T3V0bGV0XScsXG59KVxuZXhwb3J0IGNsYXNzIE91dGxldERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgY3hPdXRsZXQ6IHN0cmluZztcblxuICBASW5wdXQoKSBjeE91dGxldENvbnRleHQ6IGFueTtcblxuICAvKipcbiAgICogRGVmZXJzIGxvYWRpbmcgb3B0aW9ucyBmb3IgdGhlIHRoZSB0ZW1wbGF0ZXMgb2YgdGhpcyBvdXRsZXQuXG4gICAqL1xuICBASW5wdXQoKSBjeE91dGxldERlZmVyOiBJbnRlcnNlY3Rpb25PcHRpb25zO1xuXG4gIEBPdXRwdXQoKSBsb2FkZWQ6IEV2ZW50RW1pdHRlcjxCb29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Qm9vbGVhbj4odHJ1ZSk7XG5cbiAgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPFRlbXBsYXRlUmVmPGFueT4gfCBDb21wb25lbnRGYWN0b3J5PGFueT4+LFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gICAgaW50ZXJzZWN0aW9uU2VydmljZTogRGVmZXJMb2FkZXJTZXJ2aWNlXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNFxuICAgKiBVc2UgY29uc3RydWN0b3IodmNyOiBWaWV3Q29udGFpbmVyUmVmLCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZTxUZW1wbGF0ZVJlZjxhbnk+IHwgQ29tcG9uZW50RmFjdG9yeTxhbnk+PiwgaW50ZXJzZWN0aW9uU2VydmljZT86IEludGVyc2VjdGlvblNlcnZpY2UpIGluc3RlYWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPFRlbXBsYXRlUmVmPGFueT4gfCBDb21wb25lbnRGYWN0b3J5PGFueT4+XG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPFxuICAgICAgVGVtcGxhdGVSZWY8YW55PiB8IENvbXBvbmVudEZhY3Rvcnk8YW55PlxuICAgID4sXG4gICAgcHJpdmF0ZSBkZWZlckxvYWRlclNlcnZpY2U/OiBEZWZlckxvYWRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZU91dGxldCgpOiB2b2lkIHtcbiAgICB0aGlzLnZjci5jbGVhcigpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5jeE91dGxldERlZmVyKSB7XG4gICAgICB0aGlzLmRlZmVyTG9hZGluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5jeE91dGxldCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplT3V0bGV0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZWZlckxvYWRpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkZWQuZW1pdChmYWxzZSk7XG4gICAgY29uc3QgaG9zdEVsZW1lbnQgPSB0aGlzLmdldEhvc3RFbGVtZW50KHRoaXMudmNyLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgLy8gQWx0aG91Z2ggdGhlIGRlZmVyTG9hZGVyU2VydmljZSBtaWdodCBlbWl0IG9ubHkgb25jZSwgYXMgbG9uZyBhcyB0aGUgaG9zdEVsZW1lbnRcbiAgICAvLyBpc24ndCBiZWluZyBsb2FkZWQsIHRoZXJlJ3Mgbm8gdmFsdWUgYmVpbmcgZW1pdHRlZC4gVGhlcmVmb3Igd2UgbmVlZCB0byBjbGVhbiB1cFxuICAgIC8vIHRoZSBzdWJzY3JpcHRpb24gb24gZGVzdHJveS5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmRlZmVyTG9hZGVyU2VydmljZVxuICAgICAgICAubG9hZChob3N0RWxlbWVudCwgdGhpcy5jeE91dGxldERlZmVyKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgIHRoaXMubG9hZGVkLmVtaXQodHJ1ZSk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCkge1xuICAgIHRoaXMucmVuZGVyT3V0bGV0KE91dGxldFBvc2l0aW9uLkJFRk9SRSk7XG4gICAgdGhpcy5yZW5kZXJPdXRsZXQoT3V0bGV0UG9zaXRpb24uUkVQTEFDRSk7XG4gICAgdGhpcy5yZW5kZXJPdXRsZXQoT3V0bGV0UG9zaXRpb24uQUZURVIpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJPdXRsZXQocG9zaXRpb246IE91dGxldFBvc2l0aW9uKTogdm9pZCB7XG4gICAgbGV0IHRlbXBsYXRlczogYW55W10gPSA8YW55W10+KFxuICAgICAgdGhpcy5vdXRsZXRTZXJ2aWNlLmdldCh0aGlzLmN4T3V0bGV0LCBwb3NpdGlvbiwgVVNFX1NUQUNLRURfT1VUTEVUUylcbiAgICApO1xuXG4gICAgaWYgKCF0ZW1wbGF0ZXMgJiYgcG9zaXRpb24gPT09IE91dGxldFBvc2l0aW9uLlJFUExBQ0UpIHtcbiAgICAgIHRlbXBsYXRlcyA9IFt0aGlzLnRlbXBsYXRlUmVmXTtcbiAgICB9XG5cbiAgICAvLyBKdXN0IGluIGNhc2Ugc29tZW9uZSBleHRlbmRlZCB0aGUgYE91dGxldFNlcnZpY2VgIGFuZFxuICAgIC8vIHJldHVybnMgYSBzaW5ndWxhciBvYmplY3QuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRlbXBsYXRlcykpIHtcbiAgICAgIHRlbXBsYXRlcyA9IFt0ZW1wbGF0ZXNdO1xuICAgIH1cblxuICAgIHRlbXBsYXRlcy5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZShvYmopO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGUodG1wbE9yRmFjdG9yeTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRtcGxPckZhY3RvcnkgaW5zdGFuY2VvZiBDb21wb25lbnRGYWN0b3J5KSB7XG4gICAgICB0aGlzLnZjci5jcmVhdGVDb21wb25lbnQodG1wbE9yRmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0bXBsT3JGYWN0b3J5IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLnZjci5jcmVhdGVFbWJlZGRlZFZpZXcoXG4gICAgICAgIDxUZW1wbGF0ZVJlZjxhbnk+PnRtcGxPckZhY3RvcnksXG4gICAgICAgIHtcbiAgICAgICAgICAkaW1wbGljaXQ6IHRoaXMuY3hPdXRsZXRDb250ZXh0LFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICAvLyB3ZSBkbyBub3Qga25vdyBpZiBjb250ZW50IGlzIGNyZWF0ZWQgZHluYW1pY2FsbHkgb3Igbm90XG4gICAgICAvLyBzbyB3ZSBhcHBseSBjaGFuZ2UgZGV0ZWN0aW9uIGFueXdheVxuICAgICAgdmlldy5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2xvc2VzdCBgSHRtbEVsZW1lbnRgLCBieSBpdGVyYXRpbmcgb3ZlciB0aGVcbiAgICogcGFyZW50IGVsZW1lbnRzIG9mIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbWVudFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRIb3N0RWxlbWVudChlbGVtZW50OiBFbGVtZW50KTogSFRNTEVsZW1lbnQge1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXRIb3N0RWxlbWVudChlbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19