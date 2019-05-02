/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, } from '@spartacus/core';
export class GlobalMessageComponent {
    /**
     * @param {?} globalMessageService
     */
    constructor(globalMessageService) {
        this.globalMessageService = globalMessageService;
        this.messageType = GlobalMessageType;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.messages$ = this.globalMessageService.get();
    }
    /**
     * @param {?} type
     * @param {?} index
     * @return {?}
     */
    clear(type, index) {
        this.globalMessageService.remove(type, index);
    }
}
GlobalMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-global-message',
                template: "<div *ngIf=\"(messages$ | async) as messages\">\n  <div\n    class=\"alert alert-success\"\n    *ngFor=\"\n      let confMsg of messages[messageType.MSG_TYPE_CONFIRMATION];\n      let i = index\n    \"\n  >\n    <span class=\"alert-icon\"></span> <span>{{ confMsg }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_CONFIRMATION, i)\"\n    >\n      \u00D7\n    </button>\n  </div>\n  <div\n    class=\"alert alert-warning\"\n    *ngFor=\"let infoMsg of messages[messageType.MSG_TYPE_INFO]; let i = index\"\n  >\n    <span class=\"alert-icon\"></span> <span>{{ infoMsg }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_INFO, i)\"\n    >\n      \u00D7\n    </button>\n  </div>\n  <div\n    class=\"alert alert-danger\"\n    *ngFor=\"let errorMsg of messages[messageType.MSG_TYPE_ERROR]; let i = index\"\n  >\n    <span class=\"alert-icon\"></span> <span>{{ errorMsg }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_ERROR, i)\"\n    >\n      \u00D7\n    </button>\n  </div>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
GlobalMessageComponent.ctorParameters = () => [
    { type: GlobalMessageService }
];
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2dsb2JhbC1tZXNzYWdlL2dsb2JhbC1tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUdsRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLGlCQUFpQixHQUVsQixNQUFNLGlCQUFpQixDQUFDO0FBT3pCLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFJakMsWUFBc0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFGaEUsZ0JBQVcsR0FBNkIsaUJBQWlCLENBQUM7SUFFUyxDQUFDOzs7O0lBRXBFLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFFRCxLQUFLLENBQUMsSUFBdUIsRUFBRSxLQUFhO1FBQzFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsNHBDQUE4Qzs7YUFFL0M7Ozs7WUFUQyxvQkFBb0I7Ozs7SUFXcEIsMkNBQTZDOztJQUM3Qyw2Q0FBMEQ7Ozs7O0lBRTlDLHNEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgR2xvYmFsTWVzc2FnZUVudGl0aWVzLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1nbG9iYWwtbWVzc2FnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbG9iYWwtbWVzc2FnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsb2JhbC1tZXNzYWdlLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEdsb2JhbE1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtZXNzYWdlcyQ6IE9ic2VydmFibGU8R2xvYmFsTWVzc2FnZUVudGl0aWVzPjtcbiAgbWVzc2FnZVR5cGU6IHR5cGVvZiBHbG9iYWxNZXNzYWdlVHlwZSA9IEdsb2JhbE1lc3NhZ2VUeXBlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5tZXNzYWdlcyQgPSB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmdldCgpO1xuICB9XG5cbiAgY2xlYXIodHlwZTogR2xvYmFsTWVzc2FnZVR5cGUsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLnJlbW92ZSh0eXBlLCBpbmRleCk7XG4gIH1cbn1cbiJdfQ==