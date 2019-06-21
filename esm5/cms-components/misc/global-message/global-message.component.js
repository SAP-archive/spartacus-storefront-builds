/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, } from '@spartacus/core';
import { ICON_TYPE } from '../../../cms-components/misc/icon/index';
var GlobalMessageComponent = /** @class */ (function () {
    function GlobalMessageComponent(globalMessageService) {
        this.globalMessageService = globalMessageService;
        this.iconTypes = ICON_TYPE;
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
                    template: "<div *ngIf=\"(messages$ | async) as messages\">\n  <div\n    class=\"alert alert-success\"\n    *ngFor=\"\n      let confMsg of messages[messageType.MSG_TYPE_CONFIRMATION];\n      let i = index\n    \"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.SUCCESS\"></cx-icon>\n    </span>\n    <span>{{ confMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_CONFIRMATION, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </div>\n  <div\n    class=\"alert alert-warning\"\n    *ngFor=\"let infoMsg of messages[messageType.MSG_TYPE_INFO]; let i = index\"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.WARNING\"></cx-icon>\n    </span>\n    <span>{{ infoMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_INFO, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </div>\n  <div\n    class=\"alert alert-danger\"\n    *ngFor=\"let errorMsg of messages[messageType.MSG_TYPE_ERROR]; let i = index\"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.ERROR\"></cx-icon>\n    </span>\n    <span>{{ errorMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_ERROR, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </div>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbWlzYy9nbG9iYWwtbWVzc2FnZS9nbG9iYWwtbWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUVMLG9CQUFvQixFQUNwQixpQkFBaUIsR0FDbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFcEU7SUFVRSxnQ0FBc0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFMaEUsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUd0QixnQkFBVyxHQUE2QixpQkFBaUIsQ0FBQztJQUVTLENBQUM7Ozs7SUFFcEUseUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDbkQsQ0FBQzs7Ozs7O0lBRUQsc0NBQUs7Ozs7O0lBQUwsVUFBTSxJQUF1QixFQUFFLEtBQWE7UUFDMUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixxZ0RBQThDO2lCQUMvQzs7OztnQkFUQyxvQkFBb0I7O0lBeUJ0Qiw2QkFBQztDQUFBLEFBbkJELElBbUJDO1NBZlksc0JBQXNCOzs7SUFDakMsMkNBQXNCOztJQUV0QiwyQ0FBNkM7O0lBQzdDLDZDQUEwRDs7Ozs7SUFFOUMsc0RBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VFbnRpdGllcyxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtZ2xvYmFsLW1lc3NhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2xvYmFsLW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBHbG9iYWxNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIG1lc3NhZ2VzJDogT2JzZXJ2YWJsZTxHbG9iYWxNZXNzYWdlRW50aXRpZXM+O1xuICBtZXNzYWdlVHlwZTogdHlwZW9mIEdsb2JhbE1lc3NhZ2VUeXBlID0gR2xvYmFsTWVzc2FnZVR5cGU7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm1lc3NhZ2VzJCA9IHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuZ2V0KCk7XG4gIH1cblxuICBjbGVhcih0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UucmVtb3ZlKHR5cGUsIGluZGV4KTtcbiAgfVxufVxuIl19