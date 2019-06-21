/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class AddToHomeScreenComponent {
    /**
     * @param {?} addToHomeScreenService
     */
    constructor(addToHomeScreenService) {
        this.addToHomeScreenService = addToHomeScreenService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.canPrompt$ = this.addToHomeScreenService.canPrompt$;
    }
    /**
     * @return {?}
     */
    prompt() {
        this.addToHomeScreenService.firePrompt();
    }
}
if (false) {
    /** @type {?} */
    AddToHomeScreenComponent.prototype.canPrompt$;
    /**
     * @type {?}
     * @protected
     */
    AddToHomeScreenComponent.prototype.addToHomeScreenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcHdhL2NvbXBvbmVudHMvYWRkLXRvLWhvbWUtc2NyZWVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsTUFBTSxPQUFnQix3QkFBd0I7Ozs7SUFFNUMsWUFBc0Isc0JBQThDO1FBQTlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFBRyxDQUFDOzs7O0lBRXhFLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUM7SUFDM0QsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0MsQ0FBQztDQUNGOzs7SUFWQyw4Q0FBZ0M7Ozs7O0lBQ3BCLDBEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWRkVG9Ib21lU2NyZWVuU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FkZC10by1ob21lLXNjcmVlbi5zZXJ2aWNlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFkZFRvSG9tZVNjcmVlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNhblByb21wdCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGRUb0hvbWVTY3JlZW5TZXJ2aWNlOiBBZGRUb0hvbWVTY3JlZW5TZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2FuUHJvbXB0JCA9IHRoaXMuYWRkVG9Ib21lU2NyZWVuU2VydmljZS5jYW5Qcm9tcHQkO1xuICB9XG5cbiAgcHJvbXB0KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkVG9Ib21lU2NyZWVuU2VydmljZS5maXJlUHJvbXB0KCk7XG4gIH1cbn1cbiJdfQ==