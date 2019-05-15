/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, } from '@spartacus/core';
import { ICON_TYPES } from '../../../cms-components/misc/icon/index';
var GlobalMessageComponent = /** @class */ (function () {
    function GlobalMessageComponent(globalMessageService) {
        this.globalMessageService = globalMessageService;
        this.iconTypes = ICON_TYPES;
        this.messageType = GlobalMessageType;
    }
    /**
     * @return {?}
     */
    GlobalMessageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.messages$ = this.globalMessageService.get();
    };
    /**
     * @param {?} type
     * @param {?} index
     * @return {?}
     */
    GlobalMessageComponent.prototype.clear = /**
     * @param {?} type
     * @param {?} index
     * @return {?}
     */
    function (type, index) {
        this.globalMessageService.remove(type, index);
    };
    GlobalMessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-global-message',
                    template: "<div *ngIf=\"(messages$ | async) as messages\">\n  <div\n    class=\"alert alert-success\"\n    *ngFor=\"\n      let confMsg of messages[messageType.MSG_TYPE_CONFIRMATION];\n      let i = index\n    \"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.SUCCESS\"></cx-icon>\n    </span>\n    <span>{{ confMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_CONFIRMATION, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.TIMES\"></cx-icon>\n    </button>\n  </div>\n  <div\n    class=\"alert alert-warning\"\n    *ngFor=\"let infoMsg of messages[messageType.MSG_TYPE_INFO]; let i = index\"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.WARNING\"></cx-icon>\n    </span>\n    <span>{{ infoMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_INFO, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.TIMES\"></cx-icon>\n    </button>\n  </div>\n  <div\n    class=\"alert alert-danger\"\n    *ngFor=\"let errorMsg of messages[messageType.MSG_TYPE_ERROR]; let i = index\"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.ERROR\"></cx-icon>\n    </span>\n    <span>{{ errorMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_ERROR, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.TIMES\"></cx-icon>\n    </button>\n  </div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    GlobalMessageComponent.ctorParameters = function () { return [
        { type: GlobalMessageService }
    ]; };
    return GlobalMessageComponent;
}());
export { GlobalMessageComponent };
if (false) {
    /** @type {?} */
    GlobalMessageComponent.prototype.iconTypes;
    /** @type {?} */
    GlobalMessageComponent.prototype.messages$;
    /** @type {?} */
    GlobalMessageComponent.prototype.messageType;
    /**
     * @type {?}
     * @protected
     */
    GlobalMessageComponent.prototype.globalMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbWlzYy9nbG9iYWwtbWVzc2FnZS9nbG9iYWwtbWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbEQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsR0FFbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFckU7SUFXRSxnQ0FBc0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFMaEUsY0FBUyxHQUFHLFVBQVUsQ0FBQztRQUd2QixnQkFBVyxHQUE2QixpQkFBaUIsQ0FBQztJQUVTLENBQUM7Ozs7SUFFcEUseUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDbkQsQ0FBQzs7Ozs7O0lBRUQsc0NBQUs7Ozs7O0lBQUwsVUFBTSxJQUF1QixFQUFFLEtBQWE7UUFDMUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixxZ0RBQThDOztpQkFFL0M7Ozs7Z0JBVkMsb0JBQW9COztJQTBCdEIsNkJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWZZLHNCQUFzQjs7O0lBQ2pDLDJDQUF1Qjs7SUFFdkIsMkNBQTZDOztJQUM3Qyw2Q0FBMEQ7Ozs7O0lBRTlDLHNEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgR2xvYmFsTWVzc2FnZUVudGl0aWVzLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSUNPTl9UWVBFUyB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWdsb2JhbC1tZXNzYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsb2JhbC1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2xvYmFsLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgR2xvYmFsTWVzc2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRVM7XG5cbiAgbWVzc2FnZXMkOiBPYnNlcnZhYmxlPEdsb2JhbE1lc3NhZ2VFbnRpdGllcz47XG4gIG1lc3NhZ2VUeXBlOiB0eXBlb2YgR2xvYmFsTWVzc2FnZVR5cGUgPSBHbG9iYWxNZXNzYWdlVHlwZTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubWVzc2FnZXMkID0gdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5nZXQoKTtcbiAgfVxuXG4gIGNsZWFyKHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5yZW1vdmUodHlwZSwgaW5kZXgpO1xuICB9XG59XG4iXX0=