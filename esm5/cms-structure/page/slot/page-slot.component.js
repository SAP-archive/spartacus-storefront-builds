import { __decorate } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, OnDestroy, OnInit, Renderer2, } from '@angular/core';
import { CmsService, ContentSlotComponentData, ContentSlotData, DynamicAttributeService, } from '@spartacus/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { CmsComponentsService } from '../../services/cms-components.service';
/**
 * The `PageSlotComponent` is used to render the CMS page slot and it's components.
 *
 * The Page slot host element will be supplemented with css classes so that the layout
 * can be fully controlled by customers:
 * - The page slot _position_ is added as a css class by default.
 * - The `cx-pending` is added for as long as the slot hasn't start loading.
 * - The `page-fold` style class is added for the page slot which is configured as the page fold.
 */
var PageSlotComponent = /** @class */ (function () {
    function PageSlotComponent(cmsService, dynamicAttributeService, renderer, elementRef, cmsComponentsService, cd) {
        var _this = this;
        this.cmsService = cmsService;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.cmsComponentsService = cmsComponentsService;
        this.cd = cd;
        /**
         * Indicates that the page slot is the last page slot above the fold.
         */
        this.isPageFold = false;
        /**
         * Indicates that the components of the page slot haven't been loaded as long
         * as the isPending state is true.
         */
        this.isPending = true;
        /**
         * Indicates that the page slot doesn't contain any components. This is no
         * longer used in spartacus, but kept for backwards compatibility.
         */
        this.hasComponents = false;
        this.position$ = new BehaviorSubject(undefined);
        this.slot$ = this.position$.pipe(switchMap(function (position) { return _this.cmsService.getContentSlot(position); }), distinctUntilChanged(this.isDistinct));
        /** Observes the components for the given page slot. */
        this.components$ = this.slot$.pipe(map(function (slot) { var _a; return (_a = slot === null || slot === void 0 ? void 0 : slot.components) !== null && _a !== void 0 ? _a : []; }));
        this.subscription = new Subscription();
        /** Keeps track of the pending components that must be loaded for the page slot */
        this.pendingComponentCount = 0;
    }
    Object.defineProperty(PageSlotComponent.prototype, "position", {
        get: function () {
            return this.position$.value;
        },
        /**
         * The position represents the unique key for a page slot on a single page, but can
         * be reused cross pages.
         *
         * The position is used to find the CMS components for the page slot. It is also
         * added as an additional CSS class so that layoutt can be applied.
         */
        set: function (value) {
            this.position$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    PageSlotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription.add(this.slot$.pipe(tap(function (slot) { return _this.decorate(slot); })).subscribe(function (value) {
            _this.components = (value === null || value === void 0 ? void 0 : value.components) || [];
            _this.cd.markForCheck();
        }));
    };
    PageSlotComponent.prototype.decorate = function (slot) {
        var _a, _b;
        var cls = this.class || '';
        if (this.lastPosition && cls.indexOf(this.lastPosition) > -1) {
            cls = cls.replace(this.lastPosition, '');
        }
        if (this.position$.value) {
            cls += " " + this.position$.value;
            this.lastPosition = this.position$.value;
        }
        // host bindings
        this.pending = ((_a = slot === null || slot === void 0 ? void 0 : slot.components) === null || _a === void 0 ? void 0 : _a.length) || 0;
        this.hasComponents = ((_b = slot === null || slot === void 0 ? void 0 : slot.components) === null || _b === void 0 ? void 0 : _b.length) > 0;
        if (cls && cls !== this.class) {
            this.class = cls;
        }
        this.addSmartEditSlotClass(slot);
    };
    Object.defineProperty(PageSlotComponent.prototype, "pending", {
        get: function () {
            return this.pendingComponentCount;
        },
        /**
         * Sets the pending count for the page slot components. Once all pending components are
         * loaded, the `isPending` flag is updated, so that the associated class can be updated
         */
        set: function (count) {
            this.pendingComponentCount = count;
            this.isPending = this.pendingComponentCount > 0;
        },
        enumerable: true,
        configurable: true
    });
    /*
     * Is triggered when a component is added to the view. This is used to
     * update the pending count
     */
    PageSlotComponent.prototype.isLoaded = function (loadState) {
        if (loadState) {
            this.pending--;
            this.cd.markForCheck();
        }
    };
    /**
     * The `DeferLoadingStrategy` indicates whether the component should be
     * rendered instantly or whether it should be deferred.
     */
    PageSlotComponent.prototype.getComponentDeferOptions = function (componentType) {
        var deferLoading = this.cmsComponentsService.getDeferLoadingStrategy(componentType);
        return { deferLoading: deferLoading };
    };
    PageSlotComponent.prototype.isDistinct = function (old, current) {
        var _a;
        return (current.components &&
            ((_a = old.components) === null || _a === void 0 ? void 0 : _a.length) === current.components.length &&
            !old.components.find(function (el, index) { return el.uid !== current.components[index].uid; }));
    };
    PageSlotComponent.prototype.addSmartEditSlotClass = function (slot) {
        if (slot && this.cmsService.isLaunchInSmartEdit()) {
            this.dynamicAttributeService.addDynamicAttributes(slot.properties, this.elementRef.nativeElement, this.renderer);
        }
    };
    PageSlotComponent.prototype.ngOnDestroy = function () {
        var _a;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    };
    PageSlotComponent.ctorParameters = function () { return [
        { type: CmsService },
        { type: DynamicAttributeService },
        { type: Renderer2 },
        { type: ElementRef },
        { type: CmsComponentsService },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input()
    ], PageSlotComponent.prototype, "position", null);
    __decorate([
        Input(), HostBinding()
    ], PageSlotComponent.prototype, "class", void 0);
    __decorate([
        HostBinding('class.page-fold'), Input()
    ], PageSlotComponent.prototype, "isPageFold", void 0);
    __decorate([
        HostBinding('class.cx-pending')
    ], PageSlotComponent.prototype, "isPending", void 0);
    __decorate([
        HostBinding('class.has-components'), Input()
    ], PageSlotComponent.prototype, "hasComponents", void 0);
    PageSlotComponent = __decorate([
        Component({
            selector: 'cx-page-slot,[cx-page-slot]',
            template: "<ng-template\n  [cxOutlet]=\"position\"\n  [cxOutletContext]=\"{ components$: components$ }\"\n>\n  <ng-template\n    *ngFor=\"let component of components\"\n    [cxOutlet]=\"component.flexType\"\n    [cxOutletContext]=\"{ component: component }\"\n    [cxOutletDefer]=\"getComponentDeferOptions(component.flexType)\"\n    (loaded)=\"isLoaded($event)\"\n  >\n    <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n  </ng-template>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], PageSlotComponent);
    return PageSlotComponent;
}());
export { PageSlotComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9zbG90L3BhZ2Utc2xvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsVUFBVSxFQUNWLHdCQUF3QixFQUN4QixlQUFlLEVBQ2YsdUJBQXVCLEdBQ3hCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGVBQWUsRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFN0U7Ozs7Ozs7O0dBUUc7QUFNSDtJQTBERSwyQkFDWSxVQUFzQixFQUN0Qix1QkFBZ0QsRUFDaEQsUUFBbUIsRUFDbkIsVUFBc0IsRUFDdEIsb0JBQTBDLEVBQzFDLEVBQXFCO1FBTmpDLGlCQU9JO1FBTlEsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBNUNqQzs7V0FFRztRQUNzQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRTVEOzs7V0FHRztRQUM4QixjQUFTLEdBQUcs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QW1CLEVBQUUsRUFBRTtZQUNqRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLENBQy9DLElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCLElBQUksQ0FBQyxRQUFRLENBQ2QsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVELHVDQUFXLEdBQVg7O1FBQ0UsTUFBQSxJQUFJLENBQUMsWUFBWSwwQ0FBRSxXQUFXLEdBQUc7SUFDbkMsQ0FBQzs7Z0JBL0Z1QixVQUFVO2dCQUNHLHVCQUF1QjtnQkFDdEMsU0FBUztnQkFDUCxVQUFVO2dCQUNBLG9CQUFvQjtnQkFDdEMsaUJBQWlCOztJQXhEeEI7UUFBUixLQUFLLEVBQUU7cURBRVA7SUFRdUI7UUFBdkIsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFO29EQUFlO0lBS0c7UUFBeEMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsS0FBSyxFQUFFO3lEQUFvQjtJQU0zQjtRQUFoQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7d0RBQWtCO0lBTUo7UUFBN0MsV0FBVyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsS0FBSyxFQUFFOzREQUF1QjtJQW5DekQsaUJBQWlCO1FBTDdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw2QkFBNkI7WUFDdkMsMmRBQXlDO1lBQ3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxpQkFBaUIsQ0EySjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTNKRCxJQTJKQztTQTNKWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc1NlcnZpY2UsXG4gIENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSxcbiAgQ29udGVudFNsb3REYXRhLFxuICBEeW5hbWljQXR0cmlidXRlU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEludGVyc2VjdGlvbk9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvbG9hZGluZy9pbnRlcnNlY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jbXMtY29tcG9uZW50cy5zZXJ2aWNlJztcblxuLyoqXG4gKiBUaGUgYFBhZ2VTbG90Q29tcG9uZW50YCBpcyB1c2VkIHRvIHJlbmRlciB0aGUgQ01TIHBhZ2Ugc2xvdCBhbmQgaXQncyBjb21wb25lbnRzLlxuICpcbiAqIFRoZSBQYWdlIHNsb3QgaG9zdCBlbGVtZW50IHdpbGwgYmUgc3VwcGxlbWVudGVkIHdpdGggY3NzIGNsYXNzZXMgc28gdGhhdCB0aGUgbGF5b3V0XG4gKiBjYW4gYmUgZnVsbHkgY29udHJvbGxlZCBieSBjdXN0b21lcnM6XG4gKiAtIFRoZSBwYWdlIHNsb3QgX3Bvc2l0aW9uXyBpcyBhZGRlZCBhcyBhIGNzcyBjbGFzcyBieSBkZWZhdWx0LlxuICogLSBUaGUgYGN4LXBlbmRpbmdgIGlzIGFkZGVkIGZvciBhcyBsb25nIGFzIHRoZSBzbG90IGhhc24ndCBzdGFydCBsb2FkaW5nLlxuICogLSBUaGUgYHBhZ2UtZm9sZGAgc3R5bGUgY2xhc3MgaXMgYWRkZWQgZm9yIHRoZSBwYWdlIHNsb3Qgd2hpY2ggaXMgY29uZmlndXJlZCBhcyB0aGUgcGFnZSBmb2xkLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYWdlLXNsb3QsW2N4LXBhZ2Utc2xvdF0nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1zbG90LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VTbG90Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogVGhlIHBvc2l0aW9uIHJlcHJlc2VudHMgdGhlIHVuaXF1ZSBrZXkgZm9yIGEgcGFnZSBzbG90IG9uIGEgc2luZ2xlIHBhZ2UsIGJ1dCBjYW5cbiAgICogYmUgcmV1c2VkIGNyb3NzIHBhZ2VzLlxuICAgKlxuICAgKiBUaGUgcG9zaXRpb24gaXMgdXNlZCB0byBmaW5kIHRoZSBDTVMgY29tcG9uZW50cyBmb3IgdGhlIHBhZ2Ugc2xvdC4gSXQgaXMgYWxzb1xuICAgKiBhZGRlZCBhcyBhbiBhZGRpdGlvbmFsIENTUyBjbGFzcyBzbyB0aGF0IGxheW91dHQgY2FuIGJlIGFwcGxpZWQuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgcG9zaXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMucG9zaXRpb24kLm5leHQodmFsdWUpO1xuICB9XG4gIGdldCBwb3NpdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uJC52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWludGFpbnMgY3NzIGNsYXNzZXMgaW50cm9kdWNlZCBieSB0aGUgaG9zdCBhbmQgYWRkcyBhZGRpdGlvbmFsIGNsYXNzZXMuXG4gICAqL1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoKSBjbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgcGFnZSBzbG90IGlzIHRoZSBsYXN0IHBhZ2Ugc2xvdCBhYm92ZSB0aGUgZm9sZC5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MucGFnZS1mb2xkJykgQElucHV0KCkgaXNQYWdlRm9sZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgY29tcG9uZW50cyBvZiB0aGUgcGFnZSBzbG90IGhhdmVuJ3QgYmVlbiBsb2FkZWQgYXMgbG9uZ1xuICAgKiBhcyB0aGUgaXNQZW5kaW5nIHN0YXRlIGlzIHRydWUuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmN4LXBlbmRpbmcnKSBpc1BlbmRpbmcgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgcGFnZSBzbG90IGRvZXNuJ3QgY29udGFpbiBhbnkgY29tcG9uZW50cy4gVGhpcyBpcyBub1xuICAgKiBsb25nZXIgdXNlZCBpbiBzcGFydGFjdXMsIGJ1dCBrZXB0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGFzLWNvbXBvbmVudHMnKSBASW5wdXQoKSBoYXNDb21wb25lbnRzID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHBvc2l0aW9uJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG5cbiAgY29tcG9uZW50czogQ29udGVudFNsb3RDb21wb25lbnREYXRhW107XG5cbiAgcHJvdGVjdGVkIHNsb3QkOiBPYnNlcnZhYmxlPENvbnRlbnRTbG90RGF0YT4gPSB0aGlzLnBvc2l0aW9uJC5waXBlKFxuICAgIHN3aXRjaE1hcCgocG9zaXRpb24pID0+IHRoaXMuY21zU2VydmljZS5nZXRDb250ZW50U2xvdChwb3NpdGlvbikpLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKHRoaXMuaXNEaXN0aW5jdClcbiAgKTtcblxuICAvKiogT2JzZXJ2ZXMgdGhlIGNvbXBvbmVudHMgZm9yIHRoZSBnaXZlbiBwYWdlIHNsb3QuICovXG4gIGNvbXBvbmVudHMkOiBPYnNlcnZhYmxlPENvbnRlbnRTbG90Q29tcG9uZW50RGF0YVtdPiA9IHRoaXMuc2xvdCQucGlwZShcbiAgICBtYXAoKHNsb3QpID0+IHNsb3Q/LmNvbXBvbmVudHMgPz8gW10pXG4gICk7XG5cbiAgcHJvdGVjdGVkIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIC8qKiBLZWVwcyB0cmFjayBvZiB0aGUgcGVuZGluZyBjb21wb25lbnRzIHRoYXQgbXVzdCBiZSBsb2FkZWQgZm9yIHRoZSBwYWdlIHNsb3QgKi9cbiAgcHJpdmF0ZSBwZW5kaW5nQ29tcG9uZW50Q291bnQgPSAwO1xuXG4gIC8qKiBUcmFja3MgdGhlIGxhc3QgdXNlZCBwb3NpdGlvbiwgaW4gY2FzZSB0aGUgcGFnZSBzbG90IGlzIHVzZWQgZHluYW1pY2FsbHkgKi9cbiAgcHJpdmF0ZSBsYXN0UG9zaXRpb246IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgY21zQ29tcG9uZW50c1NlcnZpY2U6IENtc0NvbXBvbmVudHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuc2xvdCQucGlwZSh0YXAoKHNsb3QpID0+IHRoaXMuZGVjb3JhdGUoc2xvdCkpKS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHZhbHVlPy5jb21wb25lbnRzIHx8IFtdO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRlY29yYXRlKHNsb3Q6IENvbnRlbnRTbG90RGF0YSk6IHZvaWQge1xuICAgIGxldCBjbHMgPSB0aGlzLmNsYXNzIHx8ICcnO1xuXG4gICAgaWYgKHRoaXMubGFzdFBvc2l0aW9uICYmIGNscy5pbmRleE9mKHRoaXMubGFzdFBvc2l0aW9uKSA+IC0xKSB7XG4gICAgICBjbHMgPSBjbHMucmVwbGFjZSh0aGlzLmxhc3RQb3NpdGlvbiwgJycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3NpdGlvbiQudmFsdWUpIHtcbiAgICAgIGNscyArPSBgICR7dGhpcy5wb3NpdGlvbiQudmFsdWV9YDtcbiAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbiQudmFsdWU7XG4gICAgfVxuXG4gICAgLy8gaG9zdCBiaW5kaW5nc1xuICAgIHRoaXMucGVuZGluZyA9IHNsb3Q/LmNvbXBvbmVudHM/Lmxlbmd0aCB8fCAwO1xuICAgIHRoaXMuaGFzQ29tcG9uZW50cyA9IHNsb3Q/LmNvbXBvbmVudHM/Lmxlbmd0aCA+IDA7XG4gICAgaWYgKGNscyAmJiBjbHMgIT09IHRoaXMuY2xhc3MpIHtcbiAgICAgIHRoaXMuY2xhc3MgPSBjbHM7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRTbWFydEVkaXRTbG90Q2xhc3Moc2xvdCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcGVuZGluZyBjb3VudCBmb3IgdGhlIHBhZ2Ugc2xvdCBjb21wb25lbnRzLiBPbmNlIGFsbCBwZW5kaW5nIGNvbXBvbmVudHMgYXJlXG4gICAqIGxvYWRlZCwgdGhlIGBpc1BlbmRpbmdgIGZsYWcgaXMgdXBkYXRlZCwgc28gdGhhdCB0aGUgYXNzb2NpYXRlZCBjbGFzcyBjYW4gYmUgdXBkYXRlZFxuICAgKi9cbiAgcHJvdGVjdGVkIHNldCBwZW5kaW5nKGNvdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLnBlbmRpbmdDb21wb25lbnRDb3VudCA9IGNvdW50O1xuICAgIHRoaXMuaXNQZW5kaW5nID0gdGhpcy5wZW5kaW5nQ29tcG9uZW50Q291bnQgPiAwO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBwZW5kaW5nKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGVuZGluZ0NvbXBvbmVudENvdW50O1xuICB9XG5cbiAgLypcbiAgICogSXMgdHJpZ2dlcmVkIHdoZW4gYSBjb21wb25lbnQgaXMgYWRkZWQgdG8gdGhlIHZpZXcuIFRoaXMgaXMgdXNlZCB0b1xuICAgKiB1cGRhdGUgdGhlIHBlbmRpbmcgY291bnRcbiAgICovXG4gIGlzTG9hZGVkKGxvYWRTdGF0ZTogYm9vbGVhbikge1xuICAgIGlmIChsb2FkU3RhdGUpIHtcbiAgICAgIHRoaXMucGVuZGluZy0tO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIGBEZWZlckxvYWRpbmdTdHJhdGVneWAgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBzaG91bGQgYmVcbiAgICogcmVuZGVyZWQgaW5zdGFudGx5IG9yIHdoZXRoZXIgaXQgc2hvdWxkIGJlIGRlZmVycmVkLlxuICAgKi9cbiAgZ2V0Q29tcG9uZW50RGVmZXJPcHRpb25zKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IEludGVyc2VjdGlvbk9wdGlvbnMge1xuICAgIGNvbnN0IGRlZmVyTG9hZGluZyA9IHRoaXMuY21zQ29tcG9uZW50c1NlcnZpY2UuZ2V0RGVmZXJMb2FkaW5nU3RyYXRlZ3koXG4gICAgICBjb21wb25lbnRUeXBlXG4gICAgKTtcbiAgICByZXR1cm4geyBkZWZlckxvYWRpbmcgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc0Rpc3RpbmN0KG9sZDogQ29udGVudFNsb3REYXRhLCBjdXJyZW50OiBDb250ZW50U2xvdERhdGEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgY3VycmVudC5jb21wb25lbnRzICYmXG4gICAgICBvbGQuY29tcG9uZW50cz8ubGVuZ3RoID09PSBjdXJyZW50LmNvbXBvbmVudHMubGVuZ3RoICYmXG4gICAgICAhb2xkLmNvbXBvbmVudHMuZmluZChcbiAgICAgICAgKGVsLCBpbmRleCkgPT4gZWwudWlkICE9PSBjdXJyZW50LmNvbXBvbmVudHNbaW5kZXhdLnVpZFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFkZFNtYXJ0RWRpdFNsb3RDbGFzcyhzbG90KTogdm9pZCB7XG4gICAgaWYgKHNsb3QgJiYgdGhpcy5jbXNTZXJ2aWNlLmlzTGF1bmNoSW5TbWFydEVkaXQoKSkge1xuICAgICAgdGhpcy5keW5hbWljQXR0cmlidXRlU2VydmljZS5hZGREeW5hbWljQXR0cmlidXRlcyhcbiAgICAgICAgc2xvdC5wcm9wZXJ0aWVzLFxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5yZW5kZXJlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19