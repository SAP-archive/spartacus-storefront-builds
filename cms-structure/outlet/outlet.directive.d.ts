import { ComponentFactory, EventEmitter, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeferLoaderService } from '../../layout/loading/defer-loader.service';
import { IntersectionOptions } from '../../layout/loading/intersection.model';
import { OutletService } from './outlet.service';
export declare class OutletDirective implements OnInit, OnDestroy {
    private vcr;
    private templateRef;
    private outletService;
    private deferLoaderService?;
    cxOutlet: string;
    cxOutletContext: any;
    /**
     * Defers loading options for the the templates of this outlet.
     */
    cxOutletDefer: IntersectionOptions;
    loaded: EventEmitter<Boolean>;
    subscription: Subscription;
    constructor(vcr: ViewContainerRef, templateRef: TemplateRef<any>, outletService: OutletService<TemplateRef<any> | ComponentFactory<any>>, intersectionService: DeferLoaderService);
    /**
     * @deprecated since version 1.4
     * Use constructor(vcr: ViewContainerRef, templateRef: TemplateRef<any>, outletService: OutletService<TemplateRef<any> | ComponentFactory<any>>, intersectionService?: IntersectionService) instead
     */
    constructor(vcr: ViewContainerRef, templateRef: TemplateRef<any>, outletService: OutletService<TemplateRef<any> | ComponentFactory<any>>);
    ngOnInit(): void;
    private deferLoading;
    private render;
    private renderOutlet;
    private create;
    /**
     * Returns the closest `HtmlElement`, by iterating over the
     * parent elements of the given element.
     *
     * @param element
     */
    private getHostElement;
    ngOnDestroy(): void;
}
