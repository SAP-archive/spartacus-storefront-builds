/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { CurrentProductService } from '../current-product.service';
/** @type {?} */
var WAITING_CLASS = 'waiting';
var ProductImagesComponent = /** @class */ (function () {
    function ProductImagesComponent(currentProductService) {
        this.currentProductService = currentProductService;
        this.imageContainer$ = new BehaviorSubject(null);
    }
    /**
     * @return {?}
     */
    ProductImagesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.product$ = this.currentProductService.getProduct().pipe(filter(Boolean), tap(function (p) {
            if (!_this.imageContainer$.value) {
                _this.imageContainer$.next(p.images.PRIMARY);
            }
        }));
    };
    /**
     * @param {?} event
     * @param {?} imageContainer
     * @return {?}
     */
    ProductImagesComponent.prototype.showImage = /**
     * @param {?} event
     * @param {?} imageContainer
     * @return {?}
     */
    function (event, imageContainer) {
        if (this.imageContainer$.value === imageContainer) {
            return;
        }
        this.startWaiting((/** @type {?} */ (event.target)));
        this.imageContainer$.next(imageContainer);
    };
    /**
     * @param {?} currentContainer
     * @return {?}
     */
    ProductImagesComponent.prototype.isMainImageContainer = /**
     * @param {?} currentContainer
     * @return {?}
     */
    function (currentContainer) {
        return this.imageContainer$.pipe(map(function (container) {
            return container.zoom && container.zoom.url === currentContainer.zoom.url;
        }));
    };
    /**
     * @return {?}
     */
    ProductImagesComponent.prototype.loadHandler = /**
     * @return {?}
     */
    function () {
        this.clearWaitList();
    };
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    ProductImagesComponent.prototype.startWaiting = /**
     * @private
     * @param {?} el
     * @return {?}
     */
    function (el) {
        this.clearWaitList();
        el.classList.add(WAITING_CLASS);
        this.waiting = el;
    };
    /**
     * @private
     * @return {?}
     */
    ProductImagesComponent.prototype.clearWaitList = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.waiting) {
            this.waiting.classList.remove(WAITING_CLASS);
            delete this.waiting;
        }
    };
    ProductImagesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-images',
                    template: "<cx-media\n  [container]=\"imageContainer$ | async\"\n  format=\"zoom\"\n  (loaded)=\"loadHandler()\"\n>\n</cx-media>\n\n<div\n  class=\"thumbs\"\n  *ngIf=\"(product$ | async) as product\"\n  [class.hidden]=\"product.images?.GALLERY?.length === 1\"\n>\n  <cx-media\n    *ngFor=\"let image of product.images?.GALLERY\"\n    [container]=\"image\"\n    format=\"thumbnail\"\n    (focus)=\"showImage($event, image)\"\n    tabindex=\"0\"\n    [class.active]=\"isMainImageContainer(image) | async\"\n  >\n  </cx-media>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    ProductImagesComponent.ctorParameters = function () { return [
        { type: CurrentProductService }
    ]; };
    return ProductImagesComponent;
}());
export { ProductImagesComponent };
if (false) {
    /** @type {?} */
    ProductImagesComponent.prototype.imageContainer$;
    /** @type {?} */
    ProductImagesComponent.prototype.waiting;
    /** @type {?} */
    ProductImagesComponent.prototype.product$;
    /**
     * @type {?}
     * @private
     */
    ProductImagesComponent.prototype.currentProductService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWltYWdlcy9wcm9kdWN0LWltYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7SUFFN0QsYUFBYSxHQUFHLFNBQVM7QUFFL0I7SUFXRSxnQ0FBb0IscUJBQTRDO1FBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFOaEUsb0JBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQU11QixDQUFDOzs7O0lBRXBFLHlDQUFROzs7SUFBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUMxRCxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsR0FBRyxDQUFDLFVBQUEsQ0FBQztZQUNILElBQUksQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRTtnQkFDL0IsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM3QztRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCwwQ0FBUzs7Ozs7SUFBVCxVQUFVLEtBQWlCLEVBQUUsY0FBYztRQUN6QyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxLQUFLLGNBQWMsRUFBRTtZQUNqRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQscURBQW9COzs7O0lBQXBCLFVBQXFCLGdCQUFnQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUM5QixHQUFHLENBQ0QsVUFBQyxTQUFjO1lBQ2IsT0FBQSxTQUFTLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHO1FBQWxFLENBQWtFLENBQ3JFLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8sNkNBQVk7Ozs7O0lBQXBCLFVBQXFCLEVBQWU7UUFDbEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRU8sOENBQWE7Ozs7SUFBckI7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjtJQUNILENBQUM7O2dCQXhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0Isc2hCQUE4QztpQkFDL0M7Ozs7Z0JBUFEscUJBQXFCOztJQTZEOUIsNkJBQUM7Q0FBQSxBQXpERCxJQXlEQztTQXJEWSxzQkFBc0I7OztJQUNqQyxpREFBNEM7O0lBRTVDLHlDQUFxQjs7SUFFckIsMENBQThCOzs7OztJQUVsQix1REFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5cbmNvbnN0IFdBSVRJTkdfQ0xBU1MgPSAnd2FpdGluZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtaW1hZ2VzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtaW1hZ2VzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdEltYWdlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGltYWdlQ29udGFpbmVyJCA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cbiAgd2FpdGluZzogSFRNTEVsZW1lbnQ7XG5cbiAgcHJvZHVjdCQ6IE9ic2VydmFibGU8UHJvZHVjdD47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnByb2R1Y3QkID0gdGhpcy5jdXJyZW50UHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdCgpLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICB0YXAocCA9PiB7XG4gICAgICAgIGlmICghdGhpcy5pbWFnZUNvbnRhaW5lciQudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmltYWdlQ29udGFpbmVyJC5uZXh0KHAuaW1hZ2VzLlBSSU1BUlkpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBzaG93SW1hZ2UoZXZlbnQ6IE1vdXNlRXZlbnQsIGltYWdlQ29udGFpbmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW1hZ2VDb250YWluZXIkLnZhbHVlID09PSBpbWFnZUNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN0YXJ0V2FpdGluZyg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KTtcbiAgICB0aGlzLmltYWdlQ29udGFpbmVyJC5uZXh0KGltYWdlQ29udGFpbmVyKTtcbiAgfVxuXG4gIGlzTWFpbkltYWdlQ29udGFpbmVyKGN1cnJlbnRDb250YWluZXIpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZUNvbnRhaW5lciQucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKGNvbnRhaW5lcjogYW55KSA9PlxuICAgICAgICAgIGNvbnRhaW5lci56b29tICYmIGNvbnRhaW5lci56b29tLnVybCA9PT0gY3VycmVudENvbnRhaW5lci56b29tLnVybFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBsb2FkSGFuZGxlcigpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyV2FpdExpc3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRXYWl0aW5nKGVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJXYWl0TGlzdCgpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoV0FJVElOR19DTEFTUyk7XG4gICAgdGhpcy53YWl0aW5nID0gZWw7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyV2FpdExpc3QoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMud2FpdGluZykge1xuICAgICAgdGhpcy53YWl0aW5nLmNsYXNzTGlzdC5yZW1vdmUoV0FJVElOR19DTEFTUyk7XG4gICAgICBkZWxldGUgdGhpcy53YWl0aW5nO1xuICAgIH1cbiAgfVxufVxuIl19