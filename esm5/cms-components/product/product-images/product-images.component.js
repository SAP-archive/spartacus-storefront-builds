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
            var _a;
            _this.mainMediaContainer.next(((_a = p.images) === null || _a === void 0 ? void 0 : _a.PRIMARY) ? p.images.PRIMARY : {});
        }));
        this.thumbs$ = this.product$.pipe(map(function (p) { return _this.createThumbs(p); }));
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
            template: "<ng-container *ngIf=\"mainImage$ | async as main\">\n  <cx-media [container]=\"main\"> </cx-media>\n</ng-container>\n\n<ng-container *ngIf=\"thumbs$ | async as thumbs\">\n  <cx-carousel\n    *ngIf=\"thumbs.length\"\n    class=\"thumbs\"\n    [items]=\"thumbs\"\n    itemWidth=\"120px\"\n    [hideIndicators]=\"false\"\n    [template]=\"thumb\"\n  ></cx-carousel>\n</ng-container>\n\n<ng-template #thumb let-item=\"item\">\n  <cx-media\n    [container]=\"item.container\"\n    tabindex=\"0\"\n    (focus)=\"openImage(item.container)\"\n    [class.is-active]=\"isActive(item.container) | async\"\n  >\n  </cx-media>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductImagesComponent);
    return ProductImagesComponent;
}());
export { ProductImagesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWltYWdlcy9wcm9kdWN0LWltYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBT25FO0lBcUJFLGdDQUFvQixxQkFBNEM7UUFBaEUsaUJBQW9FO1FBQWhELDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFwQnhELHVCQUFrQixHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9DLGFBQVEsR0FFWixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUM5QyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2Ysb0JBQW9CLEVBQUUsRUFDdEIsR0FBRyxDQUFDLFVBQUMsQ0FBVTs7WUFDYixLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQUEsQ0FBQyxDQUFDLE1BQU0sMENBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUUsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVGLFlBQU8sR0FBc0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzdDLEdBQUcsQ0FBQyxVQUFDLENBQVUsSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQXBCLENBQW9CLENBQUMsQ0FDMUMsQ0FBQztRQUVGLGVBQVUsR0FBRyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUN2RSxHQUFHLENBQUMsVUFBQyxFQUFhO2dCQUFiLGtCQUFhLEVBQVYsaUJBQVM7WUFBTSxPQUFBLFNBQVM7UUFBVCxDQUFTLENBQUMsQ0FDbEMsQ0FBQztJQUVpRSxDQUFDO0lBRXBFLDBDQUFTLEdBQVQsVUFBVSxJQUFTO1FBQ2pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHlDQUFRLEdBQVIsVUFBUyxTQUFTO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FDakMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUcsQ0FBQyxVQUFDLFNBQWM7WUFDakIsT0FBTyxDQUNMLFNBQVMsQ0FBQyxJQUFJO2dCQUNkLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRztnQkFDbEIsU0FBUyxDQUFDLElBQUk7Z0JBQ2QsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHO2dCQUNsQixTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDMUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsNERBQTREO0lBQzVELDBDQUFTLEdBQVQsVUFBVSxNQUFhO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FDakMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUcsQ0FBQyxVQUFDLFNBQWM7WUFDakIsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FDekIsVUFBQyxDQUFDO2dCQUNBLE9BQUEsQ0FBQyxDQUFDLEtBQUs7b0JBQ1AsU0FBUyxDQUFDLElBQUk7b0JBQ2QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTO29CQUNqQixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJO29CQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRztZQUpqRCxDQUlpRCxDQUNwRCxDQUFDO1lBQ0YsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssNkNBQVksR0FBcEIsVUFBcUIsT0FBZ0I7UUFDbkMsSUFDRSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQ2YsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU87WUFDdkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDakM7WUFDQSxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsT0FBZSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQzFFLENBQUM7O2dCQXJEMEMscUJBQXFCOztJQXJCckQsc0JBQXNCO1FBTGxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsbW9CQUE4QztZQUM5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csc0JBQXNCLENBMkVsQztJQUFELDZCQUFDO0NBQUEsQUEzRUQsSUEyRUM7U0EzRVksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1pbWFnZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1pbWFnZXMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdEltYWdlc0NvbXBvbmVudCB7XG4gIHByaXZhdGUgbWFpbk1lZGlhQ29udGFpbmVyID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblxuICBwcml2YXRlIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFxuICAgIFByb2R1Y3RcbiAgPiA9IHRoaXMuY3VycmVudFByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3QoKS5waXBlKFxuICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgIHRhcCgocDogUHJvZHVjdCkgPT4ge1xuICAgICAgdGhpcy5tYWluTWVkaWFDb250YWluZXIubmV4dChwLmltYWdlcz8uUFJJTUFSWSA/IHAuaW1hZ2VzLlBSSU1BUlkgOiB7fSk7XG4gICAgfSlcbiAgKTtcblxuICB0aHVtYnMkOiBPYnNlcnZhYmxlPGFueVtdPiA9IHRoaXMucHJvZHVjdCQucGlwZShcbiAgICBtYXAoKHA6IFByb2R1Y3QpID0+IHRoaXMuY3JlYXRlVGh1bWJzKHApKVxuICApO1xuXG4gIG1haW5JbWFnZSQgPSBjb21iaW5lTGF0ZXN0KFt0aGlzLnByb2R1Y3QkLCB0aGlzLm1haW5NZWRpYUNvbnRhaW5lcl0pLnBpcGUoXG4gICAgbWFwKChbLCBjb250YWluZXJdKSA9PiBjb250YWluZXIpXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZSkge31cblxuICBvcGVuSW1hZ2UoaXRlbTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tYWluTWVkaWFDb250YWluZXIubmV4dChpdGVtKTtcbiAgfVxuXG4gIGlzQWN0aXZlKHRodW1ibmFpbCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLm1haW5NZWRpYUNvbnRhaW5lci5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgbWFwKChjb250YWluZXI6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGNvbnRhaW5lci56b29tICYmXG4gICAgICAgICAgY29udGFpbmVyLnpvb20udXJsICYmXG4gICAgICAgICAgdGh1bWJuYWlsLnpvb20gJiZcbiAgICAgICAgICB0aHVtYm5haWwuem9vbS51cmwgJiZcbiAgICAgICAgICBjb250YWluZXIuem9vbS51cmwgPT09IHRodW1ibmFpbC56b29tLnVybFxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqIGZpbmQgdGhlIGluZGV4IG9mIHRoZSBtYWluIG1lZGlhIGluIHRoZSBsaXN0IG9mIG1lZGlhICovXG4gIGdldEFjdGl2ZSh0aHVtYnM6IGFueVtdKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5tYWluTWVkaWFDb250YWluZXIucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgoY29udGFpbmVyOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHRodW1icy5maW5kKFxuICAgICAgICAgICh0KSA9PlxuICAgICAgICAgICAgdC5tZWRpYSAmJlxuICAgICAgICAgICAgY29udGFpbmVyLnpvb20gJiZcbiAgICAgICAgICAgIHQubWVkaWEuY29udGFpbmVyICYmXG4gICAgICAgICAgICB0Lm1lZGlhLmNvbnRhaW5lci56b29tICYmXG4gICAgICAgICAgICB0Lm1lZGlhLmNvbnRhaW5lci56b29tLnVybCA9PT0gY29udGFpbmVyLnpvb20udXJsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aHVtYnMuaW5kZXhPZihjdXJyZW50KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgQ2Fyb3VzZWxJdGVtcyBmb3IgdGhlIHByb2R1Y3QgdGh1bWJuYWlscy5cbiAgICogSW4gY2FzZSB0aGVyZSBhcmUgbGVzcyB0aGVuIDIgdGh1bWJzLCB3ZSByZXR1cm4gbnVsbC5cbiAgICovXG4gIHByaXZhdGUgY3JlYXRlVGh1bWJzKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPGFueT5bXSB7XG4gICAgaWYgKFxuICAgICAgIXByb2R1Y3QuaW1hZ2VzIHx8XG4gICAgICAhcHJvZHVjdC5pbWFnZXMuR0FMTEVSWSB8fFxuICAgICAgcHJvZHVjdC5pbWFnZXMuR0FMTEVSWS5sZW5ndGggPCAyXG4gICAgKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuICg8YW55W10+cHJvZHVjdC5pbWFnZXMuR0FMTEVSWSkubWFwKChjKSA9PiBvZih7IGNvbnRhaW5lcjogYyB9KSk7XG4gIH1cbn1cbiJdfQ==