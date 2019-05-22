/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, } from '@angular/core';
import { CmsService, DynamicAttributeService, } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
var PageSlotComponent = /** @class */ (function () {
    function PageSlotComponent(cmsService, dynamicAttributeService, renderer, hostElement) {
        var _this = this;
        this.cmsService = cmsService;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.position$ = new BehaviorSubject(undefined);
        /**
         * observable with `ContentSlotData` for the current position
         */
        this.slot$ = this.position$.pipe(switchMap(function (position) { return _this.cmsService.getContentSlot(position); }), tap(function (slot) { return _this.addSmartEditSlotClass(slot); }));
        /**
         * observable with components (`ContentSlotComponentData[]`)
         * for the current slot
         */
        this.components$ = this.slot$.pipe(map(function (slot) { return (slot && slot.components ? slot.components : []); }), distinctUntilChanged(function (a, b) {
            return a.length === b.length && !a.find(function (el, index) { return el.uid !== b[index].uid; });
        }), tap(function (components) { return _this.addComponentClass(components); }));
    }
    Object.defineProperty(PageSlotComponent.prototype, "position", {
        set: /**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            this.position$.next(position);
            // add the position name as a css class so that
            // layout can be applied to it, using the position based class.
            this.renderer.addClass(this.hostElement.nativeElement, position);
        },
        enumerable: true,
        configurable: true
    });
    // add a class to indicate whether the class is empty or not
    // add a class to indicate whether the class is empty or not
    /**
     * @private
     * @param {?} components
     * @return {?}
     */
    PageSlotComponent.prototype.addComponentClass = 
    // add a class to indicate whether the class is empty or not
    /**
     * @private
     * @param {?} components
     * @return {?}
     */
    function (components) {
        if (components && components.length > 0) {
            this.renderer.addClass(this.hostElement.nativeElement, 'has-components');
        }
    };
    /**
     * @private
     * @param {?} slot
     * @return {?}
     */
    PageSlotComponent.prototype.addSmartEditSlotClass = /**
     * @private
     * @param {?} slot
     * @return {?}
     */
    function (slot) {
        if (this.cmsService.isLaunchInSmartEdit()) {
            this.addSmartEditContract(slot);
        }
    };
    /**
     * @private
     * @param {?} slot
     * @return {?}
     */
    PageSlotComponent.prototype.addSmartEditContract = /**
     * @private
     * @param {?} slot
     * @return {?}
     */
    function (slot) {
        this.dynamicAttributeService.addDynamicAttributes(slot.properties, this.hostElement.nativeElement, this.renderer);
    };
    PageSlotComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-page-slot',
                    template: "<ng-container *cxOutlet=\"(position$ | async)\">\n  <!-- position: {{ position$ | async }} -->\n  <ng-container *ngFor=\"let component of (components$ | async)\">\n    <!-- flexType: {{ component.flexType }} -->\n    <ng-container\n      *cxOutlet=\"component.flexType\"\n      [cxComponentWrapper]=\"component\"\n    >\n    </ng-container>\n  </ng-container>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    PageSlotComponent.ctorParameters = function () { return [
        { type: CmsService },
        { type: DynamicAttributeService },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    PageSlotComponent.propDecorators = {
        position: [{ type: Input }]
    };
    return PageSlotComponent;
}());
export { PageSlotComponent };
if (false) {
    /** @type {?} */
    PageSlotComponent.prototype.position$;
    /**
     * observable with `ContentSlotData` for the current position
     * @type {?}
     */
    PageSlotComponent.prototype.slot$;
    /**
     * observable with components (`ContentSlotComponentData[]`)
     * for the current slot
     * @type {?}
     */
    PageSlotComponent.prototype.components$;
    /**
     * @type {?}
     * @protected
     */
    PageSlotComponent.prototype.cmsService;
    /**
     * @type {?}
     * @protected
     */
    PageSlotComponent.prototype.dynamicAttributeService;
    /**
     * @type {?}
     * @protected
     */
    PageSlotComponent.prototype.renderer;
    /**
     * @type {?}
     * @protected
     */
    PageSlotComponent.prototype.hostElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9zbG90L3BhZ2Utc2xvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxVQUFVLEVBR1YsdUJBQXVCLEdBQ3hCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRTtJQXNDRSwyQkFDWSxVQUFzQixFQUN0Qix1QkFBZ0QsRUFDaEQsUUFBbUIsRUFDbkIsV0FBdUI7UUFKbkMsaUJBS0k7UUFKUSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQTdCMUIsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFTLFNBQVMsQ0FBQyxDQUFDOzs7O1FBS25ELFVBQUssR0FBZ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQy9ELFNBQVMsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLEVBQy9ELEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUM5QyxDQUFDOzs7OztRQU1PLGdCQUFXLEdBRWhCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNqQixHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBaEQsQ0FBZ0QsQ0FBQyxFQUM3RCxvQkFBb0IsQ0FDbEIsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNILE9BQUEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQUUsRUFBRSxLQUFLLElBQUssT0FBQSxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQXZCLENBQXVCLENBQUM7UUFBeEUsQ0FBd0UsQ0FDM0UsRUFDRCxHQUFHLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEVBQWxDLENBQWtDLENBQUMsQ0FDdEQsQ0FBQztJQU9DLENBQUM7SUFyQ0osc0JBQWEsdUNBQVE7Ozs7O1FBQXJCLFVBQXNCLFFBQWdCO1lBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlCLCtDQUErQztZQUMvQywrREFBK0Q7WUFDL0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbkUsQ0FBQzs7O09BQUE7SUFrQ0QsNERBQTREOzs7Ozs7O0lBQ3BELDZDQUFpQjs7Ozs7OztJQUF6QixVQUEwQixVQUFVO1FBQ2xDLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDMUU7SUFDSCxDQUFDOzs7Ozs7SUFFTyxpREFBcUI7Ozs7O0lBQTdCLFVBQThCLElBQUk7UUFDaEMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLEVBQUU7WUFDekMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sZ0RBQW9COzs7OztJQUE1QixVQUE2QixJQUFxQjtRQUNoRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLENBQy9DLElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQzlCLElBQUksQ0FBQyxRQUFRLENBQ2QsQ0FBQztJQUNKLENBQUM7O2dCQWhFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLHNZQUF5QztvQkFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVpDLFVBQVU7Z0JBR1YsdUJBQXVCO2dCQU52QixTQUFTO2dCQUZULFVBQVU7OzsyQkFtQlQsS0FBSzs7SUEyRFIsd0JBQUM7Q0FBQSxBQWpFRCxJQWlFQztTQTVEWSxpQkFBaUI7OztJQVE1QixzQ0FBNEQ7Ozs7O0lBSzVELGtDQUdFOzs7Ozs7SUFNRix3Q0FTRTs7Ozs7SUFHQSx1Q0FBZ0M7Ozs7O0lBQ2hDLG9EQUEwRDs7Ozs7SUFDMUQscUNBQTZCOzs7OztJQUM3Qix3Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc1NlcnZpY2UsXG4gIENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSxcbiAgQ29udGVudFNsb3REYXRhLFxuICBEeW5hbWljQXR0cmlidXRlU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBhZ2Utc2xvdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLXNsb3QuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZVNsb3RDb21wb25lbnQge1xuICBASW5wdXQoKSBzZXQgcG9zaXRpb24ocG9zaXRpb246IHN0cmluZykge1xuICAgIHRoaXMucG9zaXRpb24kLm5leHQocG9zaXRpb24pO1xuICAgIC8vIGFkZCB0aGUgcG9zaXRpb24gbmFtZSBhcyBhIGNzcyBjbGFzcyBzbyB0aGF0XG4gICAgLy8gbGF5b3V0IGNhbiBiZSBhcHBsaWVkIHRvIGl0LCB1c2luZyB0aGUgcG9zaXRpb24gYmFzZWQgY2xhc3MuXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHBvc2l0aW9uKTtcbiAgfVxuXG4gIHJlYWRvbmx5IHBvc2l0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPih1bmRlZmluZWQpO1xuXG4gIC8qKlxuICAgKiBvYnNlcnZhYmxlIHdpdGggYENvbnRlbnRTbG90RGF0YWAgZm9yIHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAqL1xuICByZWFkb25seSBzbG90JDogT2JzZXJ2YWJsZTxDb250ZW50U2xvdERhdGE+ID0gdGhpcy5wb3NpdGlvbiQucGlwZShcbiAgICBzd2l0Y2hNYXAocG9zaXRpb24gPT4gdGhpcy5jbXNTZXJ2aWNlLmdldENvbnRlbnRTbG90KHBvc2l0aW9uKSksXG4gICAgdGFwKHNsb3QgPT4gdGhpcy5hZGRTbWFydEVkaXRTbG90Q2xhc3Moc2xvdCkpXG4gICk7XG5cbiAgLyoqXG4gICAqIG9ic2VydmFibGUgd2l0aCBjb21wb25lbnRzIChgQ29udGVudFNsb3RDb21wb25lbnREYXRhW11gKVxuICAgKiBmb3IgdGhlIGN1cnJlbnQgc2xvdFxuICAgKi9cbiAgcmVhZG9ubHkgY29tcG9uZW50cyQ6IE9ic2VydmFibGU8XG4gICAgQ29udGVudFNsb3RDb21wb25lbnREYXRhW11cbiAgPiA9IHRoaXMuc2xvdCQucGlwZShcbiAgICBtYXAoc2xvdCA9PiAoc2xvdCAmJiBzbG90LmNvbXBvbmVudHMgPyBzbG90LmNvbXBvbmVudHMgOiBbXSkpLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKFxuICAgICAgKGEsIGIpID0+XG4gICAgICAgIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiAhYS5maW5kKChlbCwgaW5kZXgpID0+IGVsLnVpZCAhPT0gYltpbmRleF0udWlkKVxuICAgICksXG4gICAgdGFwKGNvbXBvbmVudHMgPT4gdGhpcy5hZGRDb21wb25lbnRDbGFzcyhjb21wb25lbnRzKSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByb3RlY3RlZCBob3N0RWxlbWVudDogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgLy8gYWRkIGEgY2xhc3MgdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgY2xhc3MgaXMgZW1wdHkgb3Igbm90XG4gIHByaXZhdGUgYWRkQ29tcG9uZW50Q2xhc3MoY29tcG9uZW50cyk6IHZvaWQge1xuICAgIGlmIChjb21wb25lbnRzICYmIGNvbXBvbmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdoYXMtY29tcG9uZW50cycpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkU21hcnRFZGl0U2xvdENsYXNzKHNsb3QpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbXNTZXJ2aWNlLmlzTGF1bmNoSW5TbWFydEVkaXQoKSkge1xuICAgICAgdGhpcy5hZGRTbWFydEVkaXRDb250cmFjdChzbG90KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZFNtYXJ0RWRpdENvbnRyYWN0KHNsb3Q6IENvbnRlbnRTbG90RGF0YSk6IHZvaWQge1xuICAgIHRoaXMuZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UuYWRkRHluYW1pY0F0dHJpYnV0ZXMoXG4gICAgICBzbG90LnByb3BlcnRpZXMsXG4gICAgICB0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLnJlbmRlcmVyXG4gICAgKTtcbiAgfVxufVxuIl19