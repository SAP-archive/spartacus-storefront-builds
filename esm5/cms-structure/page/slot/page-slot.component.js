/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, } from '@angular/core';
import { CmsService, DynamicAttributeService, } from '@spartacus/core';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';
var PageSlotComponent = /** @class */ (function () {
    function PageSlotComponent(cmsService, dynamicAttributeService, renderer, hostElement) {
        this.cmsService = cmsService;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.hostElement = hostElement;
    }
    /**
     * @return {?}
     */
    PageSlotComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // add the position name as a css class so that
        // layout can be applied to it, using the position based class.
        this.renderer.addClass(this.hostElement.nativeElement, this.position);
        this.components$ = this.slot$.pipe(map(function (slot) { return (slot && slot.components ? slot.components : []); }), distinctUntilChanged(function (a, b) {
            return a.length === b.length &&
                !a.find(function (el, index) { return el.uid !== b[index].uid; });
        }), tap(function (components) { return _this.addComponentClass(components); }));
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
    PageSlotComponent.prototype.position;
    /**
     * returns an observable with components (`ContentSlotComponentData[]`)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9zbG90L3BhZ2Utc2xvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxVQUFVLEVBR1YsdUJBQXVCLEdBQ3hCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRTtJQWNFLDJCQUNZLFVBQXNCLEVBQ3RCLHVCQUFnRCxFQUNoRCxRQUFtQixFQUNuQixXQUF1QjtRQUh2QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtJQUNoQyxDQUFDOzs7O0lBRUosb0NBQVE7OztJQUFSO1FBQUEsaUJBY0M7UUFiQywrQ0FBK0M7UUFDL0MsK0RBQStEO1FBQy9ELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV0RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNoQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBaEQsQ0FBZ0QsQ0FBQyxFQUM3RCxvQkFBb0IsQ0FDbEIsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNILE9BQUEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsTUFBTTtnQkFDckIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBRSxFQUFFLEtBQUssSUFBSyxPQUFBLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBdkIsQ0FBdUIsQ0FBQztRQUQvQyxDQUMrQyxDQUNsRCxFQUNELEdBQUcsQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQyxDQUN0RCxDQUFDO0lBQ0osQ0FBQztJQUtELHNCQUFJLG9DQUFLO1FBSFQ7O1dBRUc7Ozs7O1FBQ0g7WUFBQSxpQkFJQztZQUhDLE9BQU8sSUFBSSxDQUFDLFVBQVU7aUJBQ25CLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxFQUFoQyxDQUFnQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDOzs7T0FBQTtJQUVELDREQUE0RDs7Ozs7OztJQUNwRCw2Q0FBaUI7Ozs7Ozs7SUFBekIsVUFBMEIsVUFBVTtRQUNsQyxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzFFO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8saURBQXFCOzs7OztJQUE3QixVQUE4QixJQUFJO1FBQ2hDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7OztJQUVPLGdEQUFvQjs7Ozs7SUFBNUIsVUFBNkIsSUFBcUI7UUFDaEQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLG9CQUFvQixDQUMvQyxJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUM5QixJQUFJLENBQUMsUUFBUSxDQUNkLENBQUM7SUFDSixDQUFDOztnQkFqRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4Qiw0UkFBeUM7b0JBQ3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFaQyxVQUFVO2dCQUdWLHVCQUF1QjtnQkFOdkIsU0FBUztnQkFIVCxVQUFVOzs7MkJBb0JULEtBQUs7O0lBNERSLHdCQUFDO0NBQUEsQUFsRUQsSUFrRUM7U0E3RFksaUJBQWlCOzs7SUFDNUIscUNBQTBCOzs7Ozs7SUFNMUIsd0NBQTJEOzs7OztJQUd6RCx1Q0FBZ0M7Ozs7O0lBQ2hDLG9EQUEwRDs7Ozs7SUFDMUQscUNBQTZCOzs7OztJQUM3Qix3Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zU2VydmljZSxcbiAgQ29udGVudFNsb3RDb21wb25lbnREYXRhLFxuICBDb250ZW50U2xvdERhdGEsXG4gIER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYWdlLXNsb3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1zbG90LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VTbG90Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcG9zaXRpb246IHN0cmluZztcblxuICAvKipcbiAgICogcmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggY29tcG9uZW50cyAoYENvbnRlbnRTbG90Q29tcG9uZW50RGF0YVtdYClcbiAgICogZm9yIHRoZSBjdXJyZW50IHNsb3RcbiAgICovXG4gIHB1YmxpYyBjb21wb25lbnRzJDogT2JzZXJ2YWJsZTxDb250ZW50U2xvdENvbXBvbmVudERhdGFbXT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcm90ZWN0ZWQgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIGFkZCB0aGUgcG9zaXRpb24gbmFtZSBhcyBhIGNzcyBjbGFzcyBzbyB0aGF0XG4gICAgLy8gbGF5b3V0IGNhbiBiZSBhcHBsaWVkIHRvIGl0LCB1c2luZyB0aGUgcG9zaXRpb24gYmFzZWQgY2xhc3MuXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMucG9zaXRpb24pO1xuXG4gICAgdGhpcy5jb21wb25lbnRzJCA9IHRoaXMuc2xvdCQucGlwZShcbiAgICAgIG1hcChzbG90ID0+IChzbG90ICYmIHNsb3QuY29tcG9uZW50cyA/IHNsb3QuY29tcG9uZW50cyA6IFtdKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZChcbiAgICAgICAgKGEsIGIpID0+XG4gICAgICAgICAgYS5sZW5ndGggPT09IGIubGVuZ3RoICYmXG4gICAgICAgICAgIWEuZmluZCgoZWwsIGluZGV4KSA9PiBlbC51aWQgIT09IGJbaW5kZXhdLnVpZClcbiAgICAgICksXG4gICAgICB0YXAoY29tcG9uZW50cyA9PiB0aGlzLmFkZENvbXBvbmVudENsYXNzKGNvbXBvbmVudHMpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggYENvbnRlbnRTbG90RGF0YWAgZm9yIHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAqL1xuICBnZXQgc2xvdCQoKTogT2JzZXJ2YWJsZTxDb250ZW50U2xvdERhdGE+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlXG4gICAgICAuZ2V0Q29udGVudFNsb3QodGhpcy5wb3NpdGlvbilcbiAgICAgIC5waXBlKHRhcChzbG90ID0+IHRoaXMuYWRkU21hcnRFZGl0U2xvdENsYXNzKHNsb3QpKSk7XG4gIH1cblxuICAvLyBhZGQgYSBjbGFzcyB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoZSBjbGFzcyBpcyBlbXB0eSBvciBub3RcbiAgcHJpdmF0ZSBhZGRDb21wb25lbnRDbGFzcyhjb21wb25lbnRzKTogdm9pZCB7XG4gICAgaWYgKGNvbXBvbmVudHMgJiYgY29tcG9uZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2hhcy1jb21wb25lbnRzJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRTbWFydEVkaXRTbG90Q2xhc3Moc2xvdCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNtc1NlcnZpY2UuaXNMYXVuY2hJblNtYXJ0RWRpdCgpKSB7XG4gICAgICB0aGlzLmFkZFNtYXJ0RWRpdENvbnRyYWN0KHNsb3QpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkU21hcnRFZGl0Q29udHJhY3Qoc2xvdDogQ29udGVudFNsb3REYXRhKTogdm9pZCB7XG4gICAgdGhpcy5keW5hbWljQXR0cmlidXRlU2VydmljZS5hZGREeW5hbWljQXR0cmlidXRlcyhcbiAgICAgIHNsb3QucHJvcGVydGllcyxcbiAgICAgIHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMucmVuZGVyZXJcbiAgICApO1xuICB9XG59XG4iXX0=