import { ComponentFactory, EventEmitter, OnChanges, OnDestroy, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeferLoaderService } from '../../layout/loading/defer-loader.service';
import { IntersectionOptions } from '../../layout/loading/intersection.model';
import { OutletRendererService } from './outlet-renderer.service';
import { OutletService } from './outlet.service';
import * as ɵngcc0 from '@angular/core';
export declare class OutletDirective implements OnDestroy, OnChanges {
    private vcr;
    private templateRef;
    private outletService;
    private deferLoaderService;
    private outletRendererService?;
    private renderedTemplate;
    cxOutlet: string;
    cxOutletContext: any;
    /**
     * Defers loading options for the the templates of this outlet.
     */
    cxOutletDefer: IntersectionOptions;
    loaded: EventEmitter<Boolean>;
    subscription: Subscription;
    constructor(vcr: ViewContainerRef, templateRef: TemplateRef<any>, outletService: OutletService<TemplateRef<any> | ComponentFactory<any>>, deferLoaderService: DeferLoaderService, outletRendererService?: OutletRendererService);
    render(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private deferLoading;
    private build;
    private buildOutlet;
    private create;
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
    private getHostElement;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OutletDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<OutletDirective, "[cxOutlet]", never, { "cxOutlet": "cxOutlet"; "cxOutletContext": "cxOutletContext"; "cxOutletDefer": "cxOutletDefer"; }, { "loaded": "loaded"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJvdXRsZXQuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeSwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGVmZXJMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbGF5b3V0L2xvYWRpbmcvZGVmZXItbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uT3B0aW9ucyB9IGZyb20gJy4uLy4uL2xheW91dC9sb2FkaW5nL2ludGVyc2VjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBPdXRsZXRSZW5kZXJlclNlcnZpY2UgfSBmcm9tICcuL291dGxldC1yZW5kZXJlci5zZXJ2aWNlJztcbmltcG9ydCB7IE91dGxldFNlcnZpY2UgfSBmcm9tICcuL291dGxldC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE91dGxldERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgICBwcml2YXRlIHZjcjtcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmO1xuICAgIHByaXZhdGUgb3V0bGV0U2VydmljZTtcbiAgICBwcml2YXRlIGRlZmVyTG9hZGVyU2VydmljZTtcbiAgICBwcml2YXRlIG91dGxldFJlbmRlcmVyU2VydmljZT87XG4gICAgcHJpdmF0ZSByZW5kZXJlZFRlbXBsYXRlO1xuICAgIGN4T3V0bGV0OiBzdHJpbmc7XG4gICAgY3hPdXRsZXRDb250ZXh0OiBhbnk7XG4gICAgLyoqXG4gICAgICogRGVmZXJzIGxvYWRpbmcgb3B0aW9ucyBmb3IgdGhlIHRoZSB0ZW1wbGF0ZXMgb2YgdGhpcyBvdXRsZXQuXG4gICAgICovXG4gICAgY3hPdXRsZXREZWZlcjogSW50ZXJzZWN0aW9uT3B0aW9ucztcbiAgICBsb2FkZWQ6IEV2ZW50RW1pdHRlcjxCb29sZWFuPjtcbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBjb25zdHJ1Y3Rvcih2Y3I6IFZpZXdDb250YWluZXJSZWYsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPFRlbXBsYXRlUmVmPGFueT4gfCBDb21wb25lbnRGYWN0b3J5PGFueT4+LCBkZWZlckxvYWRlclNlcnZpY2U6IERlZmVyTG9hZGVyU2VydmljZSwgb3V0bGV0UmVuZGVyZXJTZXJ2aWNlPzogT3V0bGV0UmVuZGVyZXJTZXJ2aWNlKTtcbiAgICByZW5kZXIoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICBwcml2YXRlIGRlZmVyTG9hZGluZztcbiAgICBwcml2YXRlIGJ1aWxkO1xuICAgIHByaXZhdGUgYnVpbGRPdXRsZXQ7XG4gICAgcHJpdmF0ZSBjcmVhdGU7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2xvc2VzdCBgSHRtbEVsZW1lbnRgLCBieSBpdGVyYXRpbmcgb3ZlciB0aGVcbiAgICAgKiBwYXJlbnQgbm9kZXMgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBXZSBhdm9pZCB0cmF2ZXJzaW5nIHRoZSBwYXJlbnQgX2VsZW1lbnRzXywgYXMgdGhpcyBpcyBibG9ja2luZ1xuICAgICAqIGllMTEgaW1wbGVtZW50YXRpb25zLiBPbmUgb2YgdGhlIHNwYXJlIGV4Y2x1c2lvbnMgd2UgbWFrZSB0byBub3RcbiAgICAgKiBzdXBwb3J0aW5nIGllMTEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0SG9zdEVsZW1lbnQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==