import { ComponentFactory, ComponentRef, EmbeddedViewRef, EventEmitter, OnChanges, OnDestroy, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeferLoaderService } from '../../layout/loading/defer-loader.service';
import { IntersectionOptions } from '../../layout/loading/intersection.model';
import { OutletRendererService } from './outlet-renderer.service';
import { OutletPosition } from './outlet.model';
import { OutletService } from './outlet.service';
import * as ɵngcc0 from '@angular/core';
export declare class OutletDirective implements OnDestroy, OnChanges {
    private vcr;
    private templateRef;
    private outletService;
    private deferLoaderService;
    private outletRendererService;
    private renderedTemplate;
    renderedComponents: Map<OutletPosition, (ComponentRef<any> | EmbeddedViewRef<any>)[]>;
    cxOutlet: string;
    cxOutletContext: any;
    /**
     * Defers loading options for the the templates of this outlet.
     */
    cxOutletDefer: IntersectionOptions;
    loaded: EventEmitter<Boolean>;
    subscription: Subscription;
    constructor(vcr: ViewContainerRef, templateRef: TemplateRef<any>, outletService: OutletService<TemplateRef<any> | ComponentFactory<any>>, deferLoaderService: DeferLoaderService, outletRendererService: OutletRendererService);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJvdXRsZXQuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5LCBDb21wb25lbnRSZWYsIEVtYmVkZGVkVmlld1JlZiwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGVmZXJMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbGF5b3V0L2xvYWRpbmcvZGVmZXItbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uT3B0aW9ucyB9IGZyb20gJy4uLy4uL2xheW91dC9sb2FkaW5nL2ludGVyc2VjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBPdXRsZXRSZW5kZXJlclNlcnZpY2UgfSBmcm9tICcuL291dGxldC1yZW5kZXJlci5zZXJ2aWNlJztcbmltcG9ydCB7IE91dGxldFBvc2l0aW9uIH0gZnJvbSAnLi9vdXRsZXQubW9kZWwnO1xuaW1wb3J0IHsgT3V0bGV0U2VydmljZSB9IGZyb20gJy4vb3V0bGV0LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3V0bGV0RGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAgIHByaXZhdGUgdmNyO1xuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY7XG4gICAgcHJpdmF0ZSBvdXRsZXRTZXJ2aWNlO1xuICAgIHByaXZhdGUgZGVmZXJMb2FkZXJTZXJ2aWNlO1xuICAgIHByaXZhdGUgb3V0bGV0UmVuZGVyZXJTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVuZGVyZWRUZW1wbGF0ZTtcbiAgICByZW5kZXJlZENvbXBvbmVudHM6IE1hcDxPdXRsZXRQb3NpdGlvbiwgKENvbXBvbmVudFJlZjxhbnk+IHwgRW1iZWRkZWRWaWV3UmVmPGFueT4pW10+O1xuICAgIGN4T3V0bGV0OiBzdHJpbmc7XG4gICAgY3hPdXRsZXRDb250ZXh0OiBhbnk7XG4gICAgLyoqXG4gICAgICogRGVmZXJzIGxvYWRpbmcgb3B0aW9ucyBmb3IgdGhlIHRoZSB0ZW1wbGF0ZXMgb2YgdGhpcyBvdXRsZXQuXG4gICAgICovXG4gICAgY3hPdXRsZXREZWZlcjogSW50ZXJzZWN0aW9uT3B0aW9ucztcbiAgICBsb2FkZWQ6IEV2ZW50RW1pdHRlcjxCb29sZWFuPjtcbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBjb25zdHJ1Y3Rvcih2Y3I6IFZpZXdDb250YWluZXJSZWYsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPFRlbXBsYXRlUmVmPGFueT4gfCBDb21wb25lbnRGYWN0b3J5PGFueT4+LCBkZWZlckxvYWRlclNlcnZpY2U6IERlZmVyTG9hZGVyU2VydmljZSwgb3V0bGV0UmVuZGVyZXJTZXJ2aWNlOiBPdXRsZXRSZW5kZXJlclNlcnZpY2UpO1xuICAgIHJlbmRlcigpOiB2b2lkO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIHByaXZhdGUgZGVmZXJMb2FkaW5nO1xuICAgIHByaXZhdGUgYnVpbGQ7XG4gICAgcHJpdmF0ZSBidWlsZE91dGxldDtcbiAgICBwcml2YXRlIGNyZWF0ZTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjbG9zZXN0IGBIdG1sRWxlbWVudGAsIGJ5IGl0ZXJhdGluZyBvdmVyIHRoZVxuICAgICAqIHBhcmVudCBub2RlcyBvZiB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFdlIGF2b2lkIHRyYXZlcnNpbmcgdGhlIHBhcmVudCBfZWxlbWVudHNfLCBhcyB0aGlzIGlzIGJsb2NraW5nXG4gICAgICogaWUxMSBpbXBsZW1lbnRhdGlvbnMuIE9uZSBvZiB0aGUgc3BhcmUgZXhjbHVzaW9ucyB3ZSBtYWtlIHRvIG5vdFxuICAgICAqIHN1cHBvcnRpbmcgaWUxMS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRIb3N0RWxlbWVudDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19