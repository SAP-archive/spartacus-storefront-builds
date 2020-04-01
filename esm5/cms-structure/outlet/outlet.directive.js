import { __decorate } from "tslib";
import { ComponentFactory, Directive, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, TemplateRef, ViewContainerRef, } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeferLoaderService } from '../../layout/loading/defer-loader.service';
import { OutletRendererService } from './outlet-renderer.service';
import { OutletPosition, USE_STACKED_OUTLETS } from './outlet.model';
import { OutletService } from './outlet.service';
var OutletDirective = /** @class */ (function () {
    function OutletDirective(vcr, templateRef, outletService, deferLoaderService, outletRendererService) {
        this.vcr = vcr;
        this.templateRef = templateRef;
        this.outletService = outletService;
        this.deferLoaderService = deferLoaderService;
        this.outletRendererService = outletRendererService;
        this.renderedTemplate = [];
        this.loaded = new EventEmitter(true);
        this.subscription = new Subscription();
    }
    OutletDirective.prototype.render = function () {
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
    };
    OutletDirective.prototype.ngOnChanges = function (changes) {
        if (changes.cxOutlet) {
            this.render();
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
        this.renderedTemplate.push(tmplOrFactory);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04sYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBS2pEO0lBZ0NFLHlCQUNVLEdBQXFCLEVBQ3JCLFdBQTZCLEVBQzdCLGFBRVAsRUFDTyxrQkFBdUMsRUFDdkMscUJBQTZDO1FBTjdDLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FFcEI7UUFDTyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXFCO1FBQ3ZDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBd0I7UUF0Qy9DLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQVdwQixXQUFNLEdBQTBCLElBQUksWUFBWSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBRTFFLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQTBCL0IsQ0FBQztJQUVHLGdDQUFNLEdBQWI7UUFDRSxJQUFJLENB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QUFDO1NBQ3pDO2FBQU0sSUFBSSxhQUFhLFlBQVksV0FBVyxFQUFFO1lBQy9DLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQ3BCLGFBQWEsRUFDL0I7Z0JBQ0UsU0FBUyxFQUFFLElBQUksQ0FBQyxlQUFlO2FBQ2hDLENBQ0YsQ0FBQztZQUVGLDBEQUEwRDtZQUMxRCxzQ0FBc0M7WUFDdEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyx3Q0FBYyxHQUF0QixVQUF1QixPQUFnQjtRQUNyQyxJQUFJLE9BQU8sWUFBWSxXQUFXLEVBQUU7WUFDbEMsT0FBTyxPQUFPLENBQUM7U0FDaEI7UUFDRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOztnQkExR2MsZ0JBQWdCO2dCQUNSLFdBQVc7Z0JBQ1QsYUFBYTtnQkFHUCxrQkFBa0I7Z0JBQ2YscUJBQXFCOztJQXBDOUM7UUFBUixLQUFLLEVBQUU7cURBQWtCO0lBRWpCO1FBQVIsS0FBSyxFQUFFOzREQUFzQjtJQUtyQjtRQUFSLEtBQUssRUFBRTswREFBb0M7SUFFbEM7UUFBVCxNQUFNLEVBQUU7bURBQWlFO0lBWi9ELGVBQWU7UUFIM0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7U0FDdkIsQ0FBQztPQUNXLGVBQWUsQ0E0STNCO0lBQUQsc0JBQUM7Q0FBQSxBQTVJRCxJQTRJQztTQTVJWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERlZmVyTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL2xheW91dC9sb2FkaW5nL2RlZmVyLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEludGVyc2VjdGlvbk9wdGlvbnMgfSBmcm9tICcuLi8uLi9sYXlvdXQvbG9hZGluZy9pbnRlcnNlY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgT3V0bGV0UmVuZGVyZXJTZXJ2aWNlIH0gZnJvbSAnLi9vdXRsZXQtcmVuZGVyZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPdXRsZXRQb3NpdGlvbiwgVVNFX1NUQUNLRURfT1VUTEVUUyB9IGZyb20gJy4vb3V0bGV0Lm1vZGVsJztcbmltcG9ydCB7IE91dGxldFNlcnZpY2UgfSBmcm9tICcuL291dGxldC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4T3V0bGV0XScsXG59KVxuZXhwb3J0IGNsYXNzIE91dGxldERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSByZW5kZXJlZFRlbXBsYXRlID0gW107XG5cbiAgQElucHV0KCkgY3hPdXRsZXQ6IHN0cmluZztcblxuICBASW5wdXQoKSBjeE91dGxldENvbnRleHQ6IGFueTtcblxuICAvKipcbiAgICogRGVmZXJzIGxvYWRpbmcgb3B0aW9ucyBmb3IgdGhlIHRoZSB0ZW1wbGF0ZXMgb2YgdGhpcyBvdXRsZXQuXG4gICAqL1xuICBASW5wdXQoKSBjeE91dGxldERlZmVyOiBJbnRlcnNlY3Rpb25PcHRpb25zO1xuXG4gIEBPdXRwdXQoKSBsb2FkZWQ6IEV2ZW50RW1pdHRlcjxCb29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Qm9vbGVhbj4odHJ1ZSk7XG5cbiAgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPFRlbXBsYXRlUmVmPGFueT4gfCBDb21wb25lbnRGYWN0b3J5PGFueT4+LFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gICAgaW50ZXJzZWN0aW9uU2VydmljZTogRGVmZXJMb2FkZXJTZXJ2aWNlXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNFxuICAgKiBVc2UgY29uc3RydWN0b3IodmNyOiBWaWV3Q29udGFpbmVyUmVmLCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZTxUZW1wbGF0ZVJlZjxhbnk+IHwgQ29tcG9uZW50RmFjdG9yeTxhbnk+PiwgaW50ZXJzZWN0aW9uU2VydmljZT86IEludGVyc2VjdGlvblNlcnZpY2UpIGluc3RlYWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPFRlbXBsYXRlUmVmPGFueT4gfCBDb21wb25lbnRGYWN0b3J5PGFueT4+XG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPFxuICAgICAgVGVtcGxhdGVSZWY8YW55PiB8IENvbXBvbmVudEZhY3Rvcnk8YW55PlxuICAgID4sXG4gICAgcHJpdmF0ZSBkZWZlckxvYWRlclNlcnZpY2U/OiBEZWZlckxvYWRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvdXRsZXRSZW5kZXJlclNlcnZpY2U/OiBPdXRsZXRSZW5kZXJlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy52Y3IuY2xlYXIoKTtcbiAgICB0aGlzLnJlbmRlcmVkVGVtcGxhdGUgPSBbXTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgIHRoaXMub3V0bGV0UmVuZGVyZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMuY3hPdXRsZXQsIHRoaXMpO1xuXG4gICAgaWYgKHRoaXMuY3hPdXRsZXREZWZlcikge1xuICAgICAgdGhpcy5kZWZlckxvYWRpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5idWlsZCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5jeE91dGxldCkge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlZmVyTG9hZGluZygpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRlZC5lbWl0KGZhbHNlKTtcbiAgICBjb25zdCBob3N0RWxlbWVudCA9IHRoaXMuZ2V0SG9zdEVsZW1lbnQodGhpcy52Y3IuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAvLyBBbHRob3VnaCB0aGUgZGVmZXJMb2FkZXJTZXJ2aWNlIG1pZ2h0IGVtaXQgb25seSBvbmNlLCBhcyBsb25nIGFzIHRoZSBob3N0RWxlbWVudFxuICAgIC8vIGlzbid0IGJlaW5nIGxvYWRlZCwgdGhlcmUncyBubyB2YWx1ZSBiZWluZyBlbWl0dGVkLiBUaGVyZWZvciB3ZSBuZWVkIHRvIGNsZWFuIHVwXG4gICAgLy8gdGhlIHN1YnNjcmlwdGlvbiBvbiBkZXN0cm95LlxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuZGVmZXJMb2FkZXJTZXJ2aWNlXG4gICAgICAgIC5sb2FkKGhvc3RFbGVtZW50LCB0aGlzLmN4T3V0bGV0RGVmZXIpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYnVpbGQoKTtcbiAgICAgICAgICB0aGlzLmxvYWRlZC5lbWl0KHRydWUpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkKCkge1xuICAgIHRoaXMuYnVpbGRPdXRsZXQoT3V0bGV0UG9zaXRpb24uQkVGT1JFKTtcbiAgICB0aGlzLmJ1aWxkT3V0bGV0KE91dGxldFBvc2l0aW9uLlJFUExBQ0UpO1xuICAgIHRoaXMuYnVpbGRPdXRsZXQoT3V0bGV0UG9zaXRpb24uQUZURVIpO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZE91dGxldChwb3NpdGlvbjogT3V0bGV0UG9zaXRpb24pOiB2b2lkIHtcbiAgICBsZXQgdGVtcGxhdGVzOiBhbnlbXSA9IDxhbnlbXT4oXG4gICAgICB0aGlzLm91dGxldFNlcnZpY2UuZ2V0KHRoaXMuY3hPdXRsZXQsIHBvc2l0aW9uLCBVU0VfU1RBQ0tFRF9PVVRMRVRTKVxuICAgICk7XG5cbiAgICB0ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM/LmZpbHRlcigoZWwpID0+ICF0aGlzLnJlbmRlcmVkVGVtcGxhdGUuaW5jbHVkZXMoZWwpKTtcblxuICAgIGlmICghdGVtcGxhdGVzICYmIHBvc2l0aW9uID09PSBPdXRsZXRQb3NpdGlvbi5SRVBMQUNFKSB7XG4gICAgICB0ZW1wbGF0ZXMgPSBbdGhpcy50ZW1wbGF0ZVJlZl07XG4gICAgfVxuXG4gICAgLy8gSnVzdCBpbiBjYXNlIHNvbWVvbmUgZXh0ZW5kZWQgdGhlIGBPdXRsZXRTZXJ2aWNlYCBhbmRcbiAgICAvLyByZXR1cm5zIGEgc2luZ3VsYXIgb2JqZWN0LlxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0ZW1wbGF0ZXMpKSB7XG4gICAgICB0ZW1wbGF0ZXMgPSBbdGVtcGxhdGVzXTtcbiAgICB9XG5cbiAgICB0ZW1wbGF0ZXMuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZShvYmopO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGUodG1wbE9yRmFjdG9yeTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRtcGxPckZhY3RvcnkgaW5zdGFuY2VvZiBDb21wb25lbnRGYWN0b3J5KSB7XG4gICAgICB0aGlzLnZjci5jcmVhdGVDb21wb25lbnQodG1wbE9yRmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0bXBsT3JGYWN0b3J5IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLnZjci5jcmVhdGVFbWJlZGRlZFZpZXcoXG4gICAgICAgIDxUZW1wbGF0ZVJlZjxhbnk+PnRtcGxPckZhY3RvcnksXG4gICAgICAgIHtcbiAgICAgICAgICAkaW1wbGljaXQ6IHRoaXMuY3hPdXRsZXRDb250ZXh0LFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICAvLyB3ZSBkbyBub3Qga25vdyBpZiBjb250ZW50IGlzIGNyZWF0ZWQgZHluYW1pY2FsbHkgb3Igbm90XG4gICAgICAvLyBzbyB3ZSBhcHBseSBjaGFuZ2UgZGV0ZWN0aW9uIGFueXdheVxuICAgICAgdmlldy5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlZFRlbXBsYXRlLnB1c2godG1wbE9yRmFjdG9yeSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2xvc2VzdCBgSHRtbEVsZW1lbnRgLCBieSBpdGVyYXRpbmcgb3ZlciB0aGVcbiAgICogcGFyZW50IGVsZW1lbnRzIG9mIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbWVudFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRIb3N0RWxlbWVudChlbGVtZW50OiBFbGVtZW50KTogSFRNTEVsZW1lbnQge1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXRIb3N0RWxlbWVudChlbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19