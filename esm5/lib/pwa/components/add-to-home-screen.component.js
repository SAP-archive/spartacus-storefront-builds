/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
AddToHomeScreenComponent = /** @class */ (function () {
    function AddToHomeScreenComponent(addToHomeScreenService) {
        this.addToHomeScreenService = addToHomeScreenService;
    }
    /**
     * @return {?}
     */
    AddToHomeScreenComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.canPrompt$ = this.addToHomeScreenService.canPrompt$;
    };
    /**
     * @return {?}
     */
    AddToHomeScreenComponent.prototype.prompt = /**
     * @return {?}
     */
    function () {
        this.addToHomeScreenService.firePrompt();
    };
    return AddToHomeScreenComponent;
}());
/**
 * @abstract
 */
export { AddToHomeScreenComponent };
if (false) {
    /** @type {?} */
    AddToHomeScreenComponent.prototype.canPrompt$;
    /**
     * @type {?}
     * @protected
     */
    AddToHomeScreenComponent.prototype.addToHomeScreenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wd2EvY29tcG9uZW50cy9hZGQtdG8taG9tZS1zY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQTs7OztJQUVFLGtDQUFzQixzQkFBOEM7UUFBOUMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUFHLENBQUM7Ozs7SUFFeEUsMkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDO0lBQzNELENBQUM7Ozs7SUFFRCx5Q0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7Ozs7Ozs7SUFWQyw4Q0FBZ0M7Ozs7O0lBQ3BCLDBEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWRkVG9Ib21lU2NyZWVuU2VydmljZSB9IGZyb20gJy4vLi4vc2VydmljZXMvYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWRkVG9Ib21lU2NyZWVuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2FuUHJvbXB0JDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkZFRvSG9tZVNjcmVlblNlcnZpY2U6IEFkZFRvSG9tZVNjcmVlblNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jYW5Qcm9tcHQkID0gdGhpcy5hZGRUb0hvbWVTY3JlZW5TZXJ2aWNlLmNhblByb21wdCQ7XG4gIH1cblxuICBwcm9tcHQoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRUb0hvbWVTY3JlZW5TZXJ2aWNlLmZpcmVQcm9tcHQoKTtcbiAgfVxufVxuIl19