import { ComponentFactory, EventEmitter, OnChanges, OnDestroy, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeferLoaderService } from '../../layout/loading/defer-loader.service';
import { IntersectionOptions } from '../../layout/loading/intersection.model';
import { OutletService } from './outlet.service';
import * as ɵngcc0 from '@angular/core';
export declare class OutletDirective implements OnDestroy, OnChanges {
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
    private initializeOutlet;
    ngOnChanges(changes: SimpleChanges): void;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OutletDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<OutletDirective, "[cxOutlet]", never, { "cxOutlet": "cxOutlet"; "cxOutletContext": "cxOutletContext"; "cxOutletDefer": "cxOutletDefer"; }, { "loaded": "loaded"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJvdXRsZXQuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnksIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERlZmVyTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL2xheW91dC9sb2FkaW5nL2RlZmVyLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEludGVyc2VjdGlvbk9wdGlvbnMgfSBmcm9tICcuLi8uLi9sYXlvdXQvbG9hZGluZy9pbnRlcnNlY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgT3V0bGV0U2VydmljZSB9IGZyb20gJy4vb3V0bGV0LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3V0bGV0RGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAgIHByaXZhdGUgdmNyO1xuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY7XG4gICAgcHJpdmF0ZSBvdXRsZXRTZXJ2aWNlO1xuICAgIHByaXZhdGUgZGVmZXJMb2FkZXJTZXJ2aWNlPztcbiAgICBjeE91dGxldDogc3RyaW5nO1xuICAgIGN4T3V0bGV0Q29udGV4dDogYW55O1xuICAgIC8qKlxuICAgICAqIERlZmVycyBsb2FkaW5nIG9wdGlvbnMgZm9yIHRoZSB0aGUgdGVtcGxhdGVzIG9mIHRoaXMgb3V0bGV0LlxuICAgICAqL1xuICAgIGN4T3V0bGV0RGVmZXI6IEludGVyc2VjdGlvbk9wdGlvbnM7XG4gICAgbG9hZGVkOiBFdmVudEVtaXR0ZXI8Qm9vbGVhbj47XG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgY29uc3RydWN0b3IodmNyOiBWaWV3Q29udGFpbmVyUmVmLCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZTxUZW1wbGF0ZVJlZjxhbnk+IHwgQ29tcG9uZW50RmFjdG9yeTxhbnk+PiwgaW50ZXJzZWN0aW9uU2VydmljZTogRGVmZXJMb2FkZXJTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNFxuICAgICAqIFVzZSBjb25zdHJ1Y3Rvcih2Y3I6IFZpZXdDb250YWluZXJSZWYsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPFRlbXBsYXRlUmVmPGFueT4gfCBDb21wb25lbnRGYWN0b3J5PGFueT4+LCBpbnRlcnNlY3Rpb25TZXJ2aWNlPzogSW50ZXJzZWN0aW9uU2VydmljZSkgaW5zdGVhZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZjcjogVmlld0NvbnRhaW5lclJlZiwgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2U8VGVtcGxhdGVSZWY8YW55PiB8IENvbXBvbmVudEZhY3Rvcnk8YW55Pj4pO1xuICAgIHByaXZhdGUgaW5pdGlhbGl6ZU91dGxldDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICBwcml2YXRlIGRlZmVyTG9hZGluZztcbiAgICBwcml2YXRlIHJlbmRlcjtcbiAgICBwcml2YXRlIHJlbmRlck91dGxldDtcbiAgICBwcml2YXRlIGNyZWF0ZTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjbG9zZXN0IGBIdG1sRWxlbWVudGAsIGJ5IGl0ZXJhdGluZyBvdmVyIHRoZVxuICAgICAqIHBhcmVudCBlbGVtZW50cyBvZiB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRIb3N0RWxlbWVudDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19