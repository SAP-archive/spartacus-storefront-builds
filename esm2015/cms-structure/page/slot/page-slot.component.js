/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, } from '@angular/core';
import { CmsService, DynamicAttributeService, } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
export class PageSlotComponent {
    /**
     * @param {?} cmsService
     * @param {?} dynamicAttributeService
     * @param {?} renderer
     * @param {?} hostElement
     */
    constructor(cmsService, dynamicAttributeService, renderer, hostElement) {
        this.cmsService = cmsService;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.position$ = new BehaviorSubject(undefined);
        /**
         * observable with `ContentSlotData` for the current position
         */
        this.slot$ = this.position$.pipe(switchMap(position => this.cmsService.getContentSlot(position)), tap(slot => this.addSmartEditSlotClass(slot)));
        /**
         * observable with components (`ContentSlotComponentData[]`)
         * for the current slot
         */
        this.components$ = this.slot$.pipe(map(slot => (slot && slot.components ? slot.components : [])), distinctUntilChanged((a, b) => a.length === b.length && !a.find((el, index) => el.uid !== b[index].uid)), tap(components => this.addComponentClass(components)));
    }
    /**
     * @param {?} position
     * @return {?}
     */
    set position(position) {
        this.position$.next(position);
        // add the position name as a css class so that
        // layout can be applied to it, using the position based class.
        this.renderer.addClass(this.hostElement.nativeElement, position);
    }
    // add a class to indicate whether the class is empty or not
    /**
     * @private
     * @param {?} components
     * @return {?}
     */
    addComponentClass(components) {
        if (components && components.length > 0) {
            this.renderer.addClass(this.hostElement.nativeElement, 'has-components');
        }
    }
    /**
     * @private
     * @param {?} slot
     * @return {?}
     */
    addSmartEditSlotClass(slot) {
        if (slot && this.cmsService.isLaunchInSmartEdit()) {
            this.addSmartEditContract(slot);
        }
    }
    /**
     * @private
     * @param {?} slot
     * @return {?}
     */
    addSmartEditContract(slot) {
        this.dynamicAttributeService.addDynamicAttributes(slot.properties, this.hostElement.nativeElement, this.renderer);
    }
}
PageSlotComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-page-slot',
                template: "<ng-container *cxOutlet=\"(position$ | async)\">\n  <!-- position: {{ position$ | async }} -->\n  <ng-container *ngFor=\"let component of (components$ | async)\">\n    <!-- flexType: {{ component.flexType }} -->\n    <ng-container\n      *cxOutlet=\"component.flexType\"\n      [cxComponentWrapper]=\"component\"\n    >\n    </ng-container>\n  </ng-container>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
PageSlotComponent.ctorParameters = () => [
    { type: CmsService },
    { type: DynamicAttributeService },
    { type: Renderer2 },
    { type: ElementRef }
];
PageSlotComponent.propDecorators = {
    position: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9zbG90L3BhZ2Utc2xvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxVQUFVLEVBR1YsdUJBQXVCLEdBQ3hCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8zRSxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7O0lBaUM1QixZQUNZLFVBQXNCLEVBQ3RCLHVCQUFnRCxFQUNoRCxRQUFtQixFQUNuQixXQUF1QjtRQUh2QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQTdCMUIsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFTLFNBQVMsQ0FBQyxDQUFDOzs7O1FBS25ELFVBQUssR0FBZ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQy9ELFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQy9ELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUM5QyxDQUFDOzs7OztRQU1PLGdCQUFXLEdBRWhCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNqQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUM3RCxvQkFBb0IsQ0FDbEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FDUCxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQzNFLEVBQ0QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQ3RELENBQUM7SUFPQyxDQUFDOzs7OztJQXJDSixJQUFhLFFBQVEsQ0FBQyxRQUFnQjtRQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QiwrQ0FBK0M7UUFDL0MsK0RBQStEO1FBQy9ELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7Ozs7SUFtQ08saUJBQWlCLENBQUMsVUFBVTtRQUNsQyxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzFFO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8scUJBQXFCLENBQUMsSUFBSTtRQUNoQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sb0JBQW9CLENBQUMsSUFBcUI7UUFDaEQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLG9CQUFvQixDQUMvQyxJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUM5QixJQUFJLENBQUMsUUFBUSxDQUNkLENBQUM7SUFDSixDQUFDOzs7WUFoRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixzWUFBeUM7Z0JBQ3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBWkMsVUFBVTtZQUdWLHVCQUF1QjtZQU52QixTQUFTO1lBRlQsVUFBVTs7O3VCQW1CVCxLQUFLOzs7O0lBT04sc0NBQTREOzs7OztJQUs1RCxrQ0FHRTs7Ozs7O0lBTUYsd0NBU0U7Ozs7O0lBR0EsdUNBQWdDOzs7OztJQUNoQyxvREFBMEQ7Ozs7O0lBQzFELHFDQUE2Qjs7Ozs7SUFDN0Isd0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNTZXJ2aWNlLFxuICBDb250ZW50U2xvdENvbXBvbmVudERhdGEsXG4gIENvbnRlbnRTbG90RGF0YSxcbiAgRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYWdlLXNsb3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1zbG90LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VTbG90Q29tcG9uZW50IHtcbiAgQElucHV0KCkgc2V0IHBvc2l0aW9uKHBvc2l0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBvc2l0aW9uJC5uZXh0KHBvc2l0aW9uKTtcbiAgICAvLyBhZGQgdGhlIHBvc2l0aW9uIG5hbWUgYXMgYSBjc3MgY2xhc3Mgc28gdGhhdFxuICAgIC8vIGxheW91dCBjYW4gYmUgYXBwbGllZCB0byBpdCwgdXNpbmcgdGhlIHBvc2l0aW9uIGJhc2VkIGNsYXNzLlxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBwb3NpdGlvbik7XG4gIH1cblxuICByZWFkb25seSBwb3NpdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4odW5kZWZpbmVkKTtcblxuICAvKipcbiAgICogb2JzZXJ2YWJsZSB3aXRoIGBDb250ZW50U2xvdERhdGFgIGZvciB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgKi9cbiAgcmVhZG9ubHkgc2xvdCQ6IE9ic2VydmFibGU8Q29udGVudFNsb3REYXRhPiA9IHRoaXMucG9zaXRpb24kLnBpcGUoXG4gICAgc3dpdGNoTWFwKHBvc2l0aW9uID0+IHRoaXMuY21zU2VydmljZS5nZXRDb250ZW50U2xvdChwb3NpdGlvbikpLFxuICAgIHRhcChzbG90ID0+IHRoaXMuYWRkU21hcnRFZGl0U2xvdENsYXNzKHNsb3QpKVxuICApO1xuXG4gIC8qKlxuICAgKiBvYnNlcnZhYmxlIHdpdGggY29tcG9uZW50cyAoYENvbnRlbnRTbG90Q29tcG9uZW50RGF0YVtdYClcbiAgICogZm9yIHRoZSBjdXJyZW50IHNsb3RcbiAgICovXG4gIHJlYWRvbmx5IGNvbXBvbmVudHMkOiBPYnNlcnZhYmxlPFxuICAgIENvbnRlbnRTbG90Q29tcG9uZW50RGF0YVtdXG4gID4gPSB0aGlzLnNsb3QkLnBpcGUoXG4gICAgbWFwKHNsb3QgPT4gKHNsb3QgJiYgc2xvdC5jb21wb25lbnRzID8gc2xvdC5jb21wb25lbnRzIDogW10pKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZChcbiAgICAgIChhLCBiKSA9PlxuICAgICAgICBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgIWEuZmluZCgoZWwsIGluZGV4KSA9PiBlbC51aWQgIT09IGJbaW5kZXhdLnVpZClcbiAgICApLFxuICAgIHRhcChjb21wb25lbnRzID0+IHRoaXMuYWRkQ29tcG9uZW50Q2xhc3MoY29tcG9uZW50cykpXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcm90ZWN0ZWQgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIC8vIGFkZCBhIGNsYXNzIHRvIGluZGljYXRlIHdoZXRoZXIgdGhlIGNsYXNzIGlzIGVtcHR5IG9yIG5vdFxuICBwcml2YXRlIGFkZENvbXBvbmVudENsYXNzKGNvbXBvbmVudHMpOiB2b2lkIHtcbiAgICBpZiAoY29tcG9uZW50cyAmJiBjb21wb25lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnaGFzLWNvbXBvbmVudHMnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZFNtYXJ0RWRpdFNsb3RDbGFzcyhzbG90KTogdm9pZCB7XG4gICAgaWYgKHNsb3QgJiYgdGhpcy5jbXNTZXJ2aWNlLmlzTGF1bmNoSW5TbWFydEVkaXQoKSkge1xuICAgICAgdGhpcy5hZGRTbWFydEVkaXRDb250cmFjdChzbG90KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZFNtYXJ0RWRpdENvbnRyYWN0KHNsb3Q6IENvbnRlbnRTbG90RGF0YSk6IHZvaWQge1xuICAgIHRoaXMuZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UuYWRkRHluYW1pY0F0dHJpYnV0ZXMoXG4gICAgICBzbG90LnByb3BlcnRpZXMsXG4gICAgICB0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLnJlbmRlcmVyXG4gICAgKTtcbiAgfVxufVxuIl19