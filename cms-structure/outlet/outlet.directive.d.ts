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

//# sourceMappingURL=outlet.directive.d.ts.map