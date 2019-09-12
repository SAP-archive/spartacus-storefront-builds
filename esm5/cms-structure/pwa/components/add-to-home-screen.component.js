/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcHdhL2NvbXBvbmVudHMvYWRkLXRvLWhvbWUtc2NyZWVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7Ozs7SUFFRSxrQ0FBc0Isc0JBQThDO1FBQTlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFBRyxDQUFDOzs7O0lBRXhFLDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQztJQUMzRCxDQUFDOzs7O0lBRUQseUNBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUFYRCxJQVdDOzs7Ozs7O0lBVkMsOENBQWdDOzs7OztJQUNwQiwwREFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFkZFRvSG9tZVNjcmVlblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hZGQtdG8taG9tZS1zY3JlZW4uc2VydmljZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBZGRUb0hvbWVTY3JlZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjYW5Qcm9tcHQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRkVG9Ib21lU2NyZWVuU2VydmljZTogQWRkVG9Ib21lU2NyZWVuU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhblByb21wdCQgPSB0aGlzLmFkZFRvSG9tZVNjcmVlblNlcnZpY2UuY2FuUHJvbXB0JDtcbiAgfVxuXG4gIHByb21wdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZFRvSG9tZVNjcmVlblNlcnZpY2UuZmlyZVByb21wdCgpO1xuICB9XG59XG4iXX0=