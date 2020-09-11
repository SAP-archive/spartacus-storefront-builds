import { ComponentRef, EmbeddedViewRef, EventEmitter, OnChanges, OnDestroy, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
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
    constructor(vcr: ViewContainerRef, templateRef: TemplateRef<any>, outletService: OutletService, deferLoaderService: DeferLoaderService, outletRendererService: OutletRendererService);
    render(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private deferLoading;
    private build;
    private buildOutlet;
    private create;
    /**
     * Returns injector with OutletContextData that can be injected to the component
     * rendered in the outlet
     */
    private getComponentInjector;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJvdXRsZXQuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFJlZiwgRW1iZWRkZWRWaWV3UmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEZWZlckxvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9sYXlvdXQvbG9hZGluZy9kZWZlci1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBJbnRlcnNlY3Rpb25PcHRpb25zIH0gZnJvbSAnLi4vLi4vbGF5b3V0L2xvYWRpbmcvaW50ZXJzZWN0aW9uLm1vZGVsJztcbmltcG9ydCB7IE91dGxldFJlbmRlcmVyU2VydmljZSB9IGZyb20gJy4vb3V0bGV0LXJlbmRlcmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3V0bGV0UG9zaXRpb24gfSBmcm9tICcuL291dGxldC5tb2RlbCc7XG5pbXBvcnQgeyBPdXRsZXRTZXJ2aWNlIH0gZnJvbSAnLi9vdXRsZXQuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPdXRsZXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gICAgcHJpdmF0ZSB2Y3I7XG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjtcbiAgICBwcml2YXRlIG91dGxldFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBkZWZlckxvYWRlclNlcnZpY2U7XG4gICAgcHJpdmF0ZSBvdXRsZXRSZW5kZXJlclNlcnZpY2U7XG4gICAgcHJpdmF0ZSByZW5kZXJlZFRlbXBsYXRlO1xuICAgIHJlbmRlcmVkQ29tcG9uZW50czogTWFwPE91dGxldFBvc2l0aW9uLCAoQ29tcG9uZW50UmVmPGFueT4gfCBFbWJlZGRlZFZpZXdSZWY8YW55PilbXT47XG4gICAgY3hPdXRsZXQ6IHN0cmluZztcbiAgICBjeE91dGxldENvbnRleHQ6IGFueTtcbiAgICAvKipcbiAgICAgKiBEZWZlcnMgbG9hZGluZyBvcHRpb25zIGZvciB0aGUgdGhlIHRlbXBsYXRlcyBvZiB0aGlzIG91dGxldC5cbiAgICAgKi9cbiAgICBjeE91dGxldERlZmVyOiBJbnRlcnNlY3Rpb25PcHRpb25zO1xuICAgIGxvYWRlZDogRXZlbnRFbWl0dGVyPEJvb2xlYW4+O1xuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIGNvbnN0cnVjdG9yKHZjcjogVmlld0NvbnRhaW5lclJlZiwgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2UsIGRlZmVyTG9hZGVyU2VydmljZTogRGVmZXJMb2FkZXJTZXJ2aWNlLCBvdXRsZXRSZW5kZXJlclNlcnZpY2U6IE91dGxldFJlbmRlcmVyU2VydmljZSk7XG4gICAgcmVuZGVyKCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBkZWZlckxvYWRpbmc7XG4gICAgcHJpdmF0ZSBidWlsZDtcbiAgICBwcml2YXRlIGJ1aWxkT3V0bGV0O1xuICAgIHByaXZhdGUgY3JlYXRlO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgaW5qZWN0b3Igd2l0aCBPdXRsZXRDb250ZXh0RGF0YSB0aGF0IGNhbiBiZSBpbmplY3RlZCB0byB0aGUgY29tcG9uZW50XG4gICAgICogcmVuZGVyZWQgaW4gdGhlIG91dGxldFxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0Q29tcG9uZW50SW5qZWN0b3I7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2xvc2VzdCBgSHRtbEVsZW1lbnRgLCBieSBpdGVyYXRpbmcgb3ZlciB0aGVcbiAgICAgKiBwYXJlbnQgbm9kZXMgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBXZSBhdm9pZCB0cmF2ZXJzaW5nIHRoZSBwYXJlbnQgX2VsZW1lbnRzXywgYXMgdGhpcyBpcyBibG9ja2luZ1xuICAgICAqIGllMTEgaW1wbGVtZW50YXRpb25zLiBPbmUgb2YgdGhlIHNwYXJlIGV4Y2x1c2lvbnMgd2UgbWFrZSB0byBub3RcbiAgICAgKiBzdXBwb3J0aW5nIGllMTEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0SG9zdEVsZW1lbnQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==