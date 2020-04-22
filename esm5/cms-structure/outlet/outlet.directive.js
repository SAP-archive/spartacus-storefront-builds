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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04sYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBS2pEO0lBZ0JFLHlCQUNVLEdBQXFCLEVBQ3JCLFdBQTZCLEVBQzdCLGFBRVAsRUFDTyxrQkFBc0MsRUFDdEMscUJBQTZDO1FBTjdDLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FFcEI7UUFDTyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBd0I7UUF0Qi9DLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQVdwQixXQUFNLEdBQTBCLElBQUksWUFBWSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBRTFFLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVUvQixDQUFDO0lBRUcsZ0NBQU0sR0FBYjtRQUNFLElBQUksQ0FB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QUM7U0FDekM7YUFBTSxJQUFJLGFBQWEsWUFBWSxXQUFXLEVBQUU7WUFDL0MsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FDcEIsYUFBYSxFQUMvQjtnQkFDRSxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWU7YUFDaEMsQ0FDRixDQUFDO1lBRUYsMERBQTBEO1lBQzFELHNDQUFzQztZQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSyx3Q0FBYyxHQUF0QixVQUF1QixPQUFhO1FBQ2xDLElBQUksT0FBTyxZQUFZLFdBQVcsRUFBRTtZQUNsQyxPQUFPLE9BQU8sQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELHFDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7O2dCQTlHYyxnQkFBZ0I7Z0JBQ1IsV0FBVztnQkFDVCxhQUFhO2dCQUdSLGtCQUFrQjtnQkFDZCxxQkFBcUI7O0lBcEI5QztRQUFSLEtBQUssRUFBRTtxREFBa0I7SUFFakI7UUFBUixLQUFLLEVBQUU7NERBQXNCO0lBS3JCO1FBQVIsS0FBSyxFQUFFOzBEQUFvQztJQUVsQztRQUFULE1BQU0sRUFBRTttREFBaUU7SUFaL0QsZUFBZTtRQUgzQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtTQUN2QixDQUFDO09BQ1csZUFBZSxDQWdJM0I7SUFBRCxzQkFBQztDQUFBLEFBaElELElBZ0lDO1NBaElZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5LFxuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGVmZXJMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbGF5b3V0L2xvYWRpbmcvZGVmZXItbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uT3B0aW9ucyB9IGZyb20gJy4uLy4uL2xheW91dC9sb2FkaW5nL2ludGVyc2VjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBPdXRsZXRSZW5kZXJlclNlcnZpY2UgfSBmcm9tICcuL291dGxldC1yZW5kZXJlci5zZXJ2aWNlJztcbmltcG9ydCB7IE91dGxldFBvc2l0aW9uLCBVU0VfU1RBQ0tFRF9PVVRMRVRTIH0gZnJvbSAnLi9vdXRsZXQubW9kZWwnO1xuaW1wb3J0IHsgT3V0bGV0U2VydmljZSB9IGZyb20gJy4vb3V0bGV0LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hPdXRsZXRdJyxcbn0pXG5leHBvcnQgY2xhc3MgT3V0bGV0RGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIHJlbmRlcmVkVGVtcGxhdGUgPSBbXTtcblxuICBASW5wdXQoKSBjeE91dGxldDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGN4T3V0bGV0Q29udGV4dDogYW55O1xuXG4gIC8qKlxuICAgKiBEZWZlcnMgbG9hZGluZyBvcHRpb25zIGZvciB0aGUgdGhlIHRlbXBsYXRlcyBvZiB0aGlzIG91dGxldC5cbiAgICovXG4gIEBJbnB1dCgpIGN4T3V0bGV0RGVmZXI6IEludGVyc2VjdGlvbk9wdGlvbnM7XG5cbiAgQE91dHB1dCgpIGxvYWRlZDogRXZlbnRFbWl0dGVyPEJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxCb29sZWFuPih0cnVlKTtcblxuICBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2U8XG4gICAgICBUZW1wbGF0ZVJlZjxhbnk+IHwgQ29tcG9uZW50RmFjdG9yeTxhbnk+XG4gICAgPixcbiAgICBwcml2YXRlIGRlZmVyTG9hZGVyU2VydmljZTogRGVmZXJMb2FkZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgb3V0bGV0UmVuZGVyZXJTZXJ2aWNlPzogT3V0bGV0UmVuZGVyZXJTZXJ2aWNlXG4gICkge31cblxuICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgIHRoaXMudmNyLmNsZWFyKCk7XG4gICAgdGhpcy5yZW5kZXJlZFRlbXBsYXRlID0gW107XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICB0aGlzLm91dGxldFJlbmRlcmVyU2VydmljZS5yZWdpc3Rlcih0aGlzLmN4T3V0bGV0LCB0aGlzKTtcblxuICAgIGlmICh0aGlzLmN4T3V0bGV0RGVmZXIpIHtcbiAgICAgIHRoaXMuZGVmZXJMb2FkaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnVpbGQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuY3hPdXRsZXQpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZWZlckxvYWRpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkZWQuZW1pdChmYWxzZSk7XG4gICAgY29uc3QgaG9zdEVsZW1lbnQgPSB0aGlzLmdldEhvc3RFbGVtZW50KHRoaXMudmNyLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgLy8gQWx0aG91Z2ggdGhlIGRlZmVyTG9hZGVyU2VydmljZSBtaWdodCBlbWl0IG9ubHkgb25jZSwgYXMgbG9uZyBhcyB0aGUgaG9zdEVsZW1lbnRcbiAgICAvLyBpc24ndCBiZWluZyBsb2FkZWQsIHRoZXJlJ3Mgbm8gdmFsdWUgYmVpbmcgZW1pdHRlZC4gVGhlcmVmb3Igd2UgbmVlZCB0byBjbGVhbiB1cFxuICAgIC8vIHRoZSBzdWJzY3JpcHRpb24gb24gZGVzdHJveS5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmRlZmVyTG9hZGVyU2VydmljZVxuICAgICAgICAubG9hZChob3N0RWxlbWVudCwgdGhpcy5jeE91dGxldERlZmVyKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmJ1aWxkKCk7XG4gICAgICAgICAgdGhpcy5sb2FkZWQuZW1pdCh0cnVlKTtcbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZCgpIHtcbiAgICB0aGlzLmJ1aWxkT3V0bGV0KE91dGxldFBvc2l0aW9uLkJFRk9SRSk7XG4gICAgdGhpcy5idWlsZE91dGxldChPdXRsZXRQb3NpdGlvbi5SRVBMQUNFKTtcbiAgICB0aGlzLmJ1aWxkT3V0bGV0KE91dGxldFBvc2l0aW9uLkFGVEVSKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRPdXRsZXQocG9zaXRpb246IE91dGxldFBvc2l0aW9uKTogdm9pZCB7XG4gICAgbGV0IHRlbXBsYXRlczogYW55W10gPSA8YW55W10+KFxuICAgICAgdGhpcy5vdXRsZXRTZXJ2aWNlLmdldCh0aGlzLmN4T3V0bGV0LCBwb3NpdGlvbiwgVVNFX1NUQUNLRURfT1VUTEVUUylcbiAgICApO1xuXG4gICAgdGVtcGxhdGVzID0gdGVtcGxhdGVzPy5maWx0ZXIoKGVsKSA9PiAhdGhpcy5yZW5kZXJlZFRlbXBsYXRlLmluY2x1ZGVzKGVsKSk7XG5cbiAgICBpZiAoIXRlbXBsYXRlcyAmJiBwb3NpdGlvbiA9PT0gT3V0bGV0UG9zaXRpb24uUkVQTEFDRSkge1xuICAgICAgdGVtcGxhdGVzID0gW3RoaXMudGVtcGxhdGVSZWZdO1xuICAgIH1cblxuICAgIC8vIEp1c3QgaW4gY2FzZSBzb21lb25lIGV4dGVuZGVkIHRoZSBgT3V0bGV0U2VydmljZWAgYW5kXG4gICAgLy8gcmV0dXJucyBhIHNpbmd1bGFyIG9iamVjdC5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGVtcGxhdGVzKSkge1xuICAgICAgdGVtcGxhdGVzID0gW3RlbXBsYXRlc107XG4gICAgfVxuXG4gICAgdGVtcGxhdGVzLmZvckVhY2goKG9iaikgPT4ge1xuICAgICAgdGhpcy5jcmVhdGUob2JqKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlKHRtcGxPckZhY3Rvcnk6IGFueSk6IHZvaWQge1xuICAgIGlmICh0bXBsT3JGYWN0b3J5IGluc3RhbmNlb2YgQ29tcG9uZW50RmFjdG9yeSkge1xuICAgICAgdGhpcy52Y3IuY3JlYXRlQ29tcG9uZW50KHRtcGxPckZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodG1wbE9yRmFjdG9yeSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICBjb25zdCB2aWV3ID0gdGhpcy52Y3IuY3JlYXRlRW1iZWRkZWRWaWV3KFxuICAgICAgICA8VGVtcGxhdGVSZWY8YW55Pj50bXBsT3JGYWN0b3J5LFxuICAgICAgICB7XG4gICAgICAgICAgJGltcGxpY2l0OiB0aGlzLmN4T3V0bGV0Q29udGV4dCxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgLy8gd2UgZG8gbm90IGtub3cgaWYgY29udGVudCBpcyBjcmVhdGVkIGR5bmFtaWNhbGx5IG9yIG5vdFxuICAgICAgLy8gc28gd2UgYXBwbHkgY2hhbmdlIGRldGVjdGlvbiBhbnl3YXlcbiAgICAgIHZpZXcubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZWRUZW1wbGF0ZS5wdXNoKHRtcGxPckZhY3RvcnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNsb3Nlc3QgYEh0bWxFbGVtZW50YCwgYnkgaXRlcmF0aW5nIG92ZXIgdGhlXG4gICAqIHBhcmVudCBub2RlcyBvZiB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICpcbiAgICogV2UgYXZvaWQgdHJhdmVyc2luZyB0aGUgcGFyZW50IF9lbGVtZW50c18sIGFzIHRoaXMgaXMgYmxvY2tpbmdcbiAgICogaWUxMSBpbXBsZW1lbnRhdGlvbnMuIE9uZSBvZiB0aGUgc3BhcmUgZXhjbHVzaW9ucyB3ZSBtYWtlIHRvIG5vdFxuICAgKiBzdXBwb3J0aW5nIGllMTEuXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtZW50XG4gICAqL1xuICBwcml2YXRlIGdldEhvc3RFbGVtZW50KGVsZW1lbnQ6IE5vZGUpOiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldEhvc3RFbGVtZW50KGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=