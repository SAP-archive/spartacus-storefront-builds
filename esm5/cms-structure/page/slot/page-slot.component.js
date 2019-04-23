/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, } from '@angular/core';
import { CmsService, DynamicAttributeService, } from '@spartacus/core';
import { map, tap } from 'rxjs/operators';
import { CmsMappingService } from '../../../lib/cms/services/cms-mapping.service';
var PageSlotComponent = /** @class */ (function () {
    function PageSlotComponent(cmsService, dynamicAttributeService, renderer, hostElement, cmsMapping) {
        this.cmsService = cmsService;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.cmsMapping = cmsMapping;
    }
    /**
     * @return {?}
     */
    PageSlotComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // add the position name as a css class so that
        // layout can be applied to it, using the position based class.
        this.renderer.addClass(this.hostElement.nativeElement, this.position);
    };
    Object.defineProperty(PageSlotComponent.prototype, "slot$", {
        /**
         * returns an observable with `ContentSlotData` for the current position
         */
        get: /**
         * returns an observable with `ContentSlotData` for the current position
         * @return {?}
         */
        function () {
            var _this = this;
            return this.cmsService
                .getContentSlot(this.position)
                .pipe(tap(function (slot) { return _this.addSmartEditSlotClass(slot); }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageSlotComponent.prototype, "components$", {
        /**
         * returns an observable with components (`ContentSlotComponentData[]`)
         * for the current slot
         */
        get: /**
         * returns an observable with components (`ContentSlotComponentData[]`)
         * for the current slot
         * @return {?}
         */
        function () {
            var _this = this;
            return this.slot$.pipe(map(function (slot) { return (slot && slot.components ? slot.components : []); }), tap(function (components) { return _this.addComponentClass(components); }));
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
                    template: "<ng-container *cxOutlet=\"position\">\n  <ng-container *ngFor=\"let component of (components$ | async)\">\n    <ng-container\n      *cxOutlet=\"component.flexType\"\n      [cxComponentWrapper]=\"component\"\n    >\n    </ng-container>\n  </ng-container>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    PageSlotComponent.ctorParameters = function () { return [
        { type: CmsService },
        { type: DynamicAttributeService },
        { type: Renderer2 },
        { type: ElementRef },
        { type: CmsMappingService }
    ]; };
    PageSlotComponent.propDecorators = {
        position: [{ type: Input }]
    };
    return PageSlotComponent;
}());
export { PageSlotComponent };
if (false) {
    /** @type {?} */
    PageSlotComponent.prototype.position;
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
    /**
     * @type {?}
     * @protected
     */
    PageSlotComponent.prototype.cmsMapping;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9zbG90L3BhZ2Utc2xvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxVQUFVLEVBR1YsdUJBQXVCLEdBQ3hCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUVsRjtJQVFFLDJCQUNZLFVBQXNCLEVBQ3RCLHVCQUFnRCxFQUNoRCxRQUFtQixFQUNuQixXQUF1QixFQUN2QixVQUE2QjtRQUo3QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtJQUN0QyxDQUFDOzs7O0lBRUosb0NBQVE7OztJQUFSO1FBQ0UsK0NBQStDO1FBQy9DLCtEQUErRDtRQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUtELHNCQUFJLG9DQUFLO1FBSFQ7O1dBRUc7Ozs7O1FBQ0g7WUFBQSxpQkFJQztZQUhDLE9BQU8sSUFBSSxDQUFDLFVBQVU7aUJBQ25CLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxFQUFoQyxDQUFnQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLDBDQUFXO1FBSmY7OztXQUdHOzs7Ozs7UUFDSDtZQUFBLGlCQUtDO1lBSkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQWhELENBQWdELENBQUMsRUFDN0QsR0FBRyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQ3RELENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELDREQUE0RDs7Ozs7OztJQUNwRCw2Q0FBaUI7Ozs7Ozs7SUFBekIsVUFBMEIsVUFBVTtRQUNsQyxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzFFO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8saURBQXFCOzs7OztJQUE3QixVQUE4QixJQUFJO1FBQ2hDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7OztJQUVPLGdEQUFvQjs7Ozs7SUFBNUIsVUFBNkIsSUFBcUI7UUFDaEQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLG9CQUFvQixDQUMvQyxJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUM5QixJQUFJLENBQUMsUUFBUSxDQUNkLENBQUM7SUFDSixDQUFDOztnQkE3REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4Qiw0UkFBeUM7b0JBQ3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFiQyxVQUFVO2dCQUdWLHVCQUF1QjtnQkFOdkIsU0FBUztnQkFIVCxVQUFVO2dCQWFILGlCQUFpQjs7OzJCQVF2QixLQUFLOztJQXdEUix3QkFBQztDQUFBLEFBOURELElBOERDO1NBekRZLGlCQUFpQjs7O0lBQzVCLHFDQUEwQjs7Ozs7SUFHeEIsdUNBQWdDOzs7OztJQUNoQyxvREFBMEQ7Ozs7O0lBQzFELHFDQUE2Qjs7Ozs7SUFDN0Isd0NBQWlDOzs7OztJQUNqQyx1Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zU2VydmljZSxcbiAgQ29udGVudFNsb3RDb21wb25lbnREYXRhLFxuICBDb250ZW50U2xvdERhdGEsXG4gIER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNNYXBwaW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9jbXMvc2VydmljZXMvY21zLW1hcHBpbmcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBhZ2Utc2xvdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLXNsb3QuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZVNsb3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwb3NpdGlvbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJvdGVjdGVkIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBjbXNNYXBwaW5nOiBDbXNNYXBwaW5nU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gYWRkIHRoZSBwb3NpdGlvbiBuYW1lIGFzIGEgY3NzIGNsYXNzIHNvIHRoYXRcbiAgICAvLyBsYXlvdXQgY2FuIGJlIGFwcGxpZWQgdG8gaXQsIHVzaW5nIHRoZSBwb3NpdGlvbiBiYXNlZCBjbGFzcy5cbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5wb3NpdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggYENvbnRlbnRTbG90RGF0YWAgZm9yIHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAqL1xuICBnZXQgc2xvdCQoKTogT2JzZXJ2YWJsZTxDb250ZW50U2xvdERhdGE+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlXG4gICAgICAuZ2V0Q29udGVudFNsb3QodGhpcy5wb3NpdGlvbilcbiAgICAgIC5waXBlKHRhcChzbG90ID0+IHRoaXMuYWRkU21hcnRFZGl0U2xvdENsYXNzKHNsb3QpKSk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggY29tcG9uZW50cyAoYENvbnRlbnRTbG90Q29tcG9uZW50RGF0YVtdYClcbiAgICogZm9yIHRoZSBjdXJyZW50IHNsb3RcbiAgICovXG4gIGdldCBjb21wb25lbnRzJCgpOiBPYnNlcnZhYmxlPENvbnRlbnRTbG90Q29tcG9uZW50RGF0YVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc2xvdCQucGlwZShcbiAgICAgIG1hcChzbG90ID0+IChzbG90ICYmIHNsb3QuY29tcG9uZW50cyA/IHNsb3QuY29tcG9uZW50cyA6IFtdKSksXG4gICAgICB0YXAoY29tcG9uZW50cyA9PiB0aGlzLmFkZENvbXBvbmVudENsYXNzKGNvbXBvbmVudHMpKVxuICAgICk7XG4gIH1cblxuICAvLyBhZGQgYSBjbGFzcyB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoZSBjbGFzcyBpcyBlbXB0eSBvciBub3RcbiAgcHJpdmF0ZSBhZGRDb21wb25lbnRDbGFzcyhjb21wb25lbnRzKTogdm9pZCB7XG4gICAgaWYgKGNvbXBvbmVudHMgJiYgY29tcG9uZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2hhcy1jb21wb25lbnRzJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRTbWFydEVkaXRTbG90Q2xhc3Moc2xvdCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNtc1NlcnZpY2UuaXNMYXVuY2hJblNtYXJ0RWRpdCgpKSB7XG4gICAgICB0aGlzLmFkZFNtYXJ0RWRpdENvbnRyYWN0KHNsb3QpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkU21hcnRFZGl0Q29udHJhY3Qoc2xvdDogQ29udGVudFNsb3REYXRhKTogdm9pZCB7XG4gICAgdGhpcy5keW5hbWljQXR0cmlidXRlU2VydmljZS5hZGREeW5hbWljQXR0cmlidXRlcyhcbiAgICAgIHNsb3QucHJvcGVydGllcyxcbiAgICAgIHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMucmVuZGVyZXJcbiAgICApO1xuICB9XG59XG4iXX0=