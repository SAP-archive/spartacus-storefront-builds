import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { CurrentProductService } from '../current-product.service';
let ProductImagesComponent = class ProductImagesComponent {
    constructor(currentProductService) {
        this.currentProductService = currentProductService;
        this.mainMediaContainer = new BehaviorSubject(null);
        this.product$ = this.currentProductService.getProduct().pipe(filter(Boolean), distinctUntilChanged(), tap((p) => {
            var _a;
            this.mainMediaContainer.next(((_a = p.images) === null || _a === void 0 ? void 0 : _a.PRIMARY) ? p.images.PRIMARY : {});
        }));
        this.thumbs$ = this.product$.pipe(map((p) => this.createThumbs(p)));
        this.mainImage$ = combineLatest([this.product$, this.mainMediaContainer]).pipe(map(([, container]) => container));
    }
    openImage(item) {
        this.mainMediaContainer.next(item);
    }
    isActive(thumbnail) {
        return this.mainMediaContainer.pipe(filter(Boolean), map((container) => {
            return (container.zoom &&
                container.zoom.url &&
                thumbnail.zoom &&
                thumbnail.zoom.url &&
                container.zoom.url === thumbnail.zoom.url);
        }));
    }
    /** find the index of the main media in the list of media */
    getActive(thumbs) {
        return this.mainMediaContainer.pipe(filter(Boolean), map((container) => {
            const current = thumbs.find((t) => t.media &&
                container.zoom &&
                t.media.container &&
                t.media.container.zoom &&
                t.media.container.zoom.url === container.zoom.url);
            return thumbs.indexOf(current);
        }));
    }
    /**
     * Return an array of CarouselItems for the product thumbnails.
     * In case there are less then 2 thumbs, we return null.
     */
    createThumbs(product) {
        if (!product.images ||
            !product.images.GALLERY ||
            product.images.GALLERY.length < 2) {
            return [];
        }
        return product.images.GALLERY.map((c) => of({ container: c }));
    }
};
ProductImagesComponent.ctorParameters = () => [
    { type: CurrentProductService }
];
ProductImagesComponent = __decorate([
    Component({
        selector: 'cx-product-images',
        template: "<ng-container *ngIf=\"mainImage$ | async as main\">\n  <cx-media [container]=\"main\"> </cx-media>\n</ng-container>\n\n<ng-container *ngIf=\"thumbs$ | async as thumbs\">\n  <cx-carousel\n    *ngIf=\"thumbs.length\"\n    class=\"thumbs\"\n    [items]=\"thumbs\"\n    itemWidth=\"120px\"\n    [hideIndicators]=\"false\"\n    [template]=\"thumb\"\n  ></cx-carousel>\n</ng-container>\n\n<ng-template #thumb let-item=\"item\">\n  <cx-media\n    [container]=\"item.container\"\n    tabindex=\"0\"\n    (focus)=\"openImage(item.container)\"\n    [class.is-active]=\"isActive(item.container) | async\"\n  >\n  </cx-media>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductImagesComponent);
export { ProductImagesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWltYWdlcy9wcm9kdWN0LWltYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBT25FLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBcUJqQyxZQUFvQixxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQXBCeEQsdUJBQWtCLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0MsYUFBUSxHQUVaLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQzlDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixvQkFBb0IsRUFBRSxFQUN0QixHQUFHLENBQUMsQ0FBQyxDQUFVLEVBQUUsRUFBRTs7WUFDakIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFBLENBQUMsQ0FBQyxNQUFNLDBDQUFFLE9BQU8sRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFFLENBQUMsQ0FBQyxDQUNILENBQUM7UUFFRixZQUFPLEdBQXNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3QyxHQUFHLENBQUMsQ0FBQyxDQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDMUMsQ0FBQztRQUVGLGVBQVUsR0FBRyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUN2RSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUNsQyxDQUFDO0lBRWlFLENBQUM7SUFFcEUsU0FBUyxDQUFDLElBQVM7UUFDakIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsUUFBUSxDQUFDLFNBQVM7UUFDaEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsR0FBRyxDQUFDLENBQUMsU0FBYyxFQUFFLEVBQUU7WUFDckIsT0FBTyxDQUNMLFNBQVMsQ0FBQyxJQUFJO2dCQUNkLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRztnQkFDbEIsU0FBUyxDQUFDLElBQUk7Z0JBQ2QsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHO2dCQUNsQixTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDMUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsNERBQTREO0lBQzVELFNBQVMsQ0FBQyxNQUFhO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FDakMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUcsQ0FBQyxDQUFDLFNBQWMsRUFBRSxFQUFFO1lBQ3JCLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQ3pCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FDSixDQUFDLENBQUMsS0FBSztnQkFDUCxTQUFTLENBQUMsSUFBSTtnQkFDZCxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVM7Z0JBQ2pCLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUk7Z0JBQ3RCLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ3BELENBQUM7WUFDRixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSyxZQUFZLENBQUMsT0FBZ0I7UUFDbkMsSUFDRSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQ2YsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU87WUFDdkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDakM7WUFDQSxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsT0FBZSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztDQUNGLENBQUE7O1lBdEQ0QyxxQkFBcUI7O0FBckJyRCxzQkFBc0I7SUFMbEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3Qixtb0JBQThDO1FBQzlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7R0FDVyxzQkFBc0IsQ0EyRWxDO1NBM0VZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtaW1hZ2VzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtaW1hZ2VzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RJbWFnZXNDb21wb25lbnQge1xuICBwcml2YXRlIG1haW5NZWRpYUNvbnRhaW5lciA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cbiAgcHJpdmF0ZSBwcm9kdWN0JDogT2JzZXJ2YWJsZTxcbiAgICBQcm9kdWN0XG4gID4gPSB0aGlzLmN1cnJlbnRQcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0KCkucGlwZShcbiAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICB0YXAoKHA6IFByb2R1Y3QpID0+IHtcbiAgICAgIHRoaXMubWFpbk1lZGlhQ29udGFpbmVyLm5leHQocC5pbWFnZXM/LlBSSU1BUlkgPyBwLmltYWdlcy5QUklNQVJZIDoge30pO1xuICAgIH0pXG4gICk7XG5cbiAgdGh1bWJzJDogT2JzZXJ2YWJsZTxhbnlbXT4gPSB0aGlzLnByb2R1Y3QkLnBpcGUoXG4gICAgbWFwKChwOiBQcm9kdWN0KSA9PiB0aGlzLmNyZWF0ZVRodW1icyhwKSlcbiAgKTtcblxuICBtYWluSW1hZ2UkID0gY29tYmluZUxhdGVzdChbdGhpcy5wcm9kdWN0JCwgdGhpcy5tYWluTWVkaWFDb250YWluZXJdKS5waXBlKFxuICAgIG1hcCgoWywgY29udGFpbmVyXSkgPT4gY29udGFpbmVyKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UpIHt9XG5cbiAgb3BlbkltYWdlKGl0ZW06IGFueSk6IHZvaWQge1xuICAgIHRoaXMubWFpbk1lZGlhQ29udGFpbmVyLm5leHQoaXRlbSk7XG4gIH1cblxuICBpc0FjdGl2ZSh0aHVtYm5haWwpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5tYWluTWVkaWFDb250YWluZXIucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgoY29udGFpbmVyOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBjb250YWluZXIuem9vbSAmJlxuICAgICAgICAgIGNvbnRhaW5lci56b29tLnVybCAmJlxuICAgICAgICAgIHRodW1ibmFpbC56b29tICYmXG4gICAgICAgICAgdGh1bWJuYWlsLnpvb20udXJsICYmXG4gICAgICAgICAgY29udGFpbmVyLnpvb20udXJsID09PSB0aHVtYm5haWwuem9vbS51cmxcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKiBmaW5kIHRoZSBpbmRleCBvZiB0aGUgbWFpbiBtZWRpYSBpbiB0aGUgbGlzdCBvZiBtZWRpYSAqL1xuICBnZXRBY3RpdmUodGh1bWJzOiBhbnlbXSk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMubWFpbk1lZGlhQ29udGFpbmVyLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBtYXAoKGNvbnRhaW5lcjogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aHVtYnMuZmluZChcbiAgICAgICAgICAodCkgPT5cbiAgICAgICAgICAgIHQubWVkaWEgJiZcbiAgICAgICAgICAgIGNvbnRhaW5lci56b29tICYmXG4gICAgICAgICAgICB0Lm1lZGlhLmNvbnRhaW5lciAmJlxuICAgICAgICAgICAgdC5tZWRpYS5jb250YWluZXIuem9vbSAmJlxuICAgICAgICAgICAgdC5tZWRpYS5jb250YWluZXIuem9vbS51cmwgPT09IGNvbnRhaW5lci56b29tLnVybFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdGh1bWJzLmluZGV4T2YoY3VycmVudCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIENhcm91c2VsSXRlbXMgZm9yIHRoZSBwcm9kdWN0IHRodW1ibmFpbHMuXG4gICAqIEluIGNhc2UgdGhlcmUgYXJlIGxlc3MgdGhlbiAyIHRodW1icywgd2UgcmV0dXJuIG51bGwuXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZVRodW1icyhwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxhbnk+W10ge1xuICAgIGlmIChcbiAgICAgICFwcm9kdWN0LmltYWdlcyB8fFxuICAgICAgIXByb2R1Y3QuaW1hZ2VzLkdBTExFUlkgfHxcbiAgICAgIHByb2R1Y3QuaW1hZ2VzLkdBTExFUlkubGVuZ3RoIDwgMlxuICAgICkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiAoPGFueVtdPnByb2R1Y3QuaW1hZ2VzLkdBTExFUlkpLm1hcCgoYykgPT4gb2YoeyBjb250YWluZXI6IGMgfSkpO1xuICB9XG59XG4iXX0=