import { __decorate, __read } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { CurrentProductService } from '../current-product.service';
var ProductImagesComponent = /** @class */ (function () {
    function ProductImagesComponent(currentProductService) {
        var _this = this;
        this.currentProductService = currentProductService;
        this.mainMediaContainer = new BehaviorSubject(null);
        this.product$ = this.currentProductService.getProduct().pipe(filter(Boolean), distinctUntilChanged(), tap(function (p) {
            return _this.mainMediaContainer.next(p.images ? p.images.PRIMARY : {});
        }));
        this.thumbs$ = this.product$.pipe(map(function (product) { return _this.createThumbs(product); }), 
        // TODO: deprecated, remove the below tap (issue:#6166)
        tap(function (thumbs) {
            _this.isThumbsEmpty = thumbs.length === 0;
        }));
        this.mainImage$ = combineLatest([this.product$, this.mainMediaContainer]).pipe(map(function (_a) {
            var _b = __read(_a, 2), container = _b[1];
            return container;
        }));
    }
    ProductImagesComponent.prototype.openImage = function (item) {
        this.mainMediaContainer.next(item);
    };
    ProductImagesComponent.prototype.isActive = function (thumbnail) {
        return this.mainMediaContainer.pipe(filter(Boolean), map(function (container) {
            return (container.zoom &&
                container.zoom.url &&
                thumbnail.zoom &&
                thumbnail.zoom.url &&
                container.zoom.url === thumbnail.zoom.url);
        }));
    };
    /** find the index of the main media in the list of media */
    ProductImagesComponent.prototype.getActive = function (thumbs) {
        return this.mainMediaContainer.pipe(filter(Boolean), map(function (container) {
            var current = thumbs.find(function (t) {
                return t.media &&
                    container.zoom &&
                    t.media.container &&
                    t.media.container.zoom &&
                    t.media.container.zoom.url === container.zoom.url;
            });
            return thumbs.indexOf(current);
        }));
    };
    /**
     * Return an array of CarouselItems for the product thumbnails.
     * In case there are less then 2 thumbs, we return null.
     */
    ProductImagesComponent.prototype.createThumbs = function (product) {
        if (!product.images ||
            !product.images.GALLERY ||
            product.images.GALLERY.length < 2) {
            return [];
        }
        return product.images.GALLERY.map(function (c) { return of({ container: c }); });
    };
    ProductImagesComponent.ctorParameters = function () { return [
        { type: CurrentProductService }
    ]; };
    ProductImagesComponent = __decorate([
        Component({
            selector: 'cx-product-images',
            template: "<ng-container *ngIf=\"mainImage$ | async as main\">\n  <cx-media [container]=\"main\" format=\"zoom\"> </cx-media>\n</ng-container>\n\n<ng-container *ngIf=\"thumbs$ | async as thumbs\">\n  <cx-carousel\n    *ngIf=\"thumbs.length\"\n    class=\"thumbs\"\n    [items]=\"thumbs\"\n    itemWidth=\"120px\"\n    [hideIndicators]=\"false\"\n    [template]=\"thumb\"\n  ></cx-carousel>\n</ng-container>\n\n<ng-template #thumb let-item=\"item\">\n  <cx-media\n    [container]=\"item.container\"\n    tabindex=\"0\"\n    format=\"thumbnail\"\n    (focus)=\"openImage(item.container)\"\n    [class.is-active]=\"isActive(item.container) | async\"\n  >\n  </cx-media>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductImagesComponent);
    return ProductImagesComponent;
}());
export { ProductImagesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWltYWdlcy9wcm9kdWN0LWltYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBT25FO0lBZ0NFLGdDQUFvQixxQkFBNEM7UUFBaEUsaUJBQW9FO1FBQWhELDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUEvQnhELHVCQUFrQixHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9DLGFBQVEsR0FFWixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUM5QyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2Ysb0JBQW9CLEVBQUUsRUFDdEIsR0FBRyxDQUFDLFVBQUMsQ0FBVTtZQUNiLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQTlELENBQThELENBQy9ELENBQ0YsQ0FBQztRQVNGLFlBQU8sR0FBc0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzdDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQTFCLENBQTBCLENBQUM7UUFDMUMsdURBQXVEO1FBQ3ZELEdBQUcsQ0FBQyxVQUFBLE1BQU07WUFDUixLQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUNILENBQUM7UUFFRixlQUFVLEdBQUcsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDdkUsR0FBRyxDQUFDLFVBQUMsRUFBYTtnQkFBYixrQkFBYSxFQUFWLGlCQUFTO1lBQU0sT0FBQSxTQUFTO1FBQVQsQ0FBUyxDQUFDLENBQ2xDLENBQUM7SUFFaUUsQ0FBQztJQUVwRSwwQ0FBUyxHQUFULFVBQVUsSUFBUztRQUNqQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCx5Q0FBUSxHQUFSLFVBQVMsU0FBUztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQ2pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMsVUFBQyxTQUFjO1lBQ2pCLE9BQU8sQ0FDTCxTQUFTLENBQUMsSUFBSTtnQkFDZCxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUc7Z0JBQ2xCLFNBQVMsQ0FBQyxJQUFJO2dCQUNkLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRztnQkFDbEIsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQzFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELDREQUE0RDtJQUM1RCwwQ0FBUyxHQUFULFVBQVUsTUFBYTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQ2pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMsVUFBQyxTQUFjO1lBQ2pCLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQ3pCLFVBQUEsQ0FBQztnQkFDQyxPQUFBLENBQUMsQ0FBQyxLQUFLO29CQUNQLFNBQVMsQ0FBQyxJQUFJO29CQUNkLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUztvQkFDakIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSTtvQkFDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFKakQsQ0FJaUQsQ0FDcEQsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNLLDZDQUFZLEdBQXBCLFVBQXFCLE9BQWdCO1FBQ25DLElBQ0UsQ0FBQyxPQUFPLENBQUMsTUFBTTtZQUNmLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPO1lBQ3ZCLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ2pDO1lBQ0EsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELE9BQWUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQXBCLENBQW9CLENBQUMsQ0FBQztJQUN4RSxDQUFDOztnQkFyRDBDLHFCQUFxQjs7SUFoQ3JELHNCQUFzQjtRQUxsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLDZxQkFBOEM7WUFDOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLHNCQUFzQixDQXNGbEM7SUFBRCw2QkFBQztDQUFBLEFBdEZELElBc0ZDO1NBdEZZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtaW1hZ2VzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtaW1hZ2VzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RJbWFnZXNDb21wb25lbnQge1xuICBwcml2YXRlIG1haW5NZWRpYUNvbnRhaW5lciA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cbiAgcHJpdmF0ZSBwcm9kdWN0JDogT2JzZXJ2YWJsZTxcbiAgICBQcm9kdWN0XG4gID4gPSB0aGlzLmN1cnJlbnRQcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0KCkucGlwZShcbiAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICB0YXAoKHA6IFByb2R1Y3QpID0+XG4gICAgICB0aGlzLm1haW5NZWRpYUNvbnRhaW5lci5uZXh0KHAuaW1hZ2VzID8gcC5pbWFnZXMuUFJJTUFSWSA6IHt9KVxuICAgIClcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjVcbiAgICogVGhpcyB2YXJpYWJsZSB3aWxsIG5vIGxvbmdlciBiZSBpbiB1c2UuIFVzZSB0aHVtYnMkIG9ic2VydmFibGUgaW5zdGVhZC5cbiAgICogVE9ETyhpc3N1ZTojNjE2NikuXG4gICAqL1xuICBpc1RodW1ic0VtcHR5OiBib29sZWFuO1xuXG4gIHRodW1icyQ6IE9ic2VydmFibGU8YW55W10+ID0gdGhpcy5wcm9kdWN0JC5waXBlKFxuICAgIG1hcChwcm9kdWN0ID0+IHRoaXMuY3JlYXRlVGh1bWJzKHByb2R1Y3QpKSxcbiAgICAvLyBUT0RPOiBkZXByZWNhdGVkLCByZW1vdmUgdGhlIGJlbG93IHRhcCAoaXNzdWU6IzYxNjYpXG4gICAgdGFwKHRodW1icyA9PiB7XG4gICAgICB0aGlzLmlzVGh1bWJzRW1wdHkgPSB0aHVtYnMubGVuZ3RoID09PSAwO1xuICAgIH0pXG4gICk7XG5cbiAgbWFpbkltYWdlJCA9IGNvbWJpbmVMYXRlc3QoW3RoaXMucHJvZHVjdCQsIHRoaXMubWFpbk1lZGlhQ29udGFpbmVyXSkucGlwZShcbiAgICBtYXAoKFssIGNvbnRhaW5lcl0pID0+IGNvbnRhaW5lcilcbiAgKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlKSB7fVxuXG4gIG9wZW5JbWFnZShpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1haW5NZWRpYUNvbnRhaW5lci5uZXh0KGl0ZW0pO1xuICB9XG5cbiAgaXNBY3RpdmUodGh1bWJuYWlsKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMubWFpbk1lZGlhQ29udGFpbmVyLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBtYXAoKGNvbnRhaW5lcjogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgY29udGFpbmVyLnpvb20gJiZcbiAgICAgICAgICBjb250YWluZXIuem9vbS51cmwgJiZcbiAgICAgICAgICB0aHVtYm5haWwuem9vbSAmJlxuICAgICAgICAgIHRodW1ibmFpbC56b29tLnVybCAmJlxuICAgICAgICAgIGNvbnRhaW5lci56b29tLnVybCA9PT0gdGh1bWJuYWlsLnpvb20udXJsXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKiogZmluZCB0aGUgaW5kZXggb2YgdGhlIG1haW4gbWVkaWEgaW4gdGhlIGxpc3Qgb2YgbWVkaWEgKi9cbiAgZ2V0QWN0aXZlKHRodW1iczogYW55W10pOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLm1haW5NZWRpYUNvbnRhaW5lci5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgbWFwKChjb250YWluZXI6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gdGh1bWJzLmZpbmQoXG4gICAgICAgICAgdCA9PlxuICAgICAgICAgICAgdC5tZWRpYSAmJlxuICAgICAgICAgICAgY29udGFpbmVyLnpvb20gJiZcbiAgICAgICAgICAgIHQubWVkaWEuY29udGFpbmVyICYmXG4gICAgICAgICAgICB0Lm1lZGlhLmNvbnRhaW5lci56b29tICYmXG4gICAgICAgICAgICB0Lm1lZGlhLmNvbnRhaW5lci56b29tLnVybCA9PT0gY29udGFpbmVyLnpvb20udXJsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aHVtYnMuaW5kZXhPZihjdXJyZW50KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgQ2Fyb3VzZWxJdGVtcyBmb3IgdGhlIHByb2R1Y3QgdGh1bWJuYWlscy5cbiAgICogSW4gY2FzZSB0aGVyZSBhcmUgbGVzcyB0aGVuIDIgdGh1bWJzLCB3ZSByZXR1cm4gbnVsbC5cbiAgICovXG4gIHByaXZhdGUgY3JlYXRlVGh1bWJzKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPGFueT5bXSB7XG4gICAgaWYgKFxuICAgICAgIXByb2R1Y3QuaW1hZ2VzIHx8XG4gICAgICAhcHJvZHVjdC5pbWFnZXMuR0FMTEVSWSB8fFxuICAgICAgcHJvZHVjdC5pbWFnZXMuR0FMTEVSWS5sZW5ndGggPCAyXG4gICAgKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuICg8YW55W10+cHJvZHVjdC5pbWFnZXMuR0FMTEVSWSkubWFwKGMgPT4gb2YoeyBjb250YWluZXI6IGMgfSkpO1xuICB9XG59XG4iXX0=