import { Observable } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
import * as ɵngcc0 from '@angular/core';
export declare class ProductImagesComponent {
    private currentProductService;
    private mainMediaContainer;
    private product$;
    /**
     * @deprecated since version 1.5
     * This variable will no longer be in use. Use thumbs$ observable instead.
     * TODO(issue:#6166).
     */
    isThumbsEmpty: boolean;
    thumbs$: Observable<any[]>;
    mainImage$: Observable<any>;
    constructor(currentProductService: CurrentProductService);
    openImage(item: any): void;
    isActive(thumbnail: any): Observable<boolean>;
    /** find the index of the main media in the list of media */
    getActive(thumbs: any[]): Observable<number>;
    /**
     * Return an array of CarouselItems for the product thumbnails.
     * In case there are less then 2 thumbs, we return null.
     */
    private createThumbs;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductImagesComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductImagesComponent, "cx-product-images", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInByb2R1Y3QtaW1hZ2VzLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RJbWFnZXNDb21wb25lbnQge1xuICAgIHByaXZhdGUgY3VycmVudFByb2R1Y3RTZXJ2aWNlO1xuICAgIHByaXZhdGUgbWFpbk1lZGlhQ29udGFpbmVyO1xuICAgIHByaXZhdGUgcHJvZHVjdCQ7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjVcbiAgICAgKiBUaGlzIHZhcmlhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIHRodW1icyQgb2JzZXJ2YWJsZSBpbnN0ZWFkLlxuICAgICAqIFRPRE8oaXNzdWU6IzYxNjYpLlxuICAgICAqL1xuICAgIGlzVGh1bWJzRW1wdHk6IGJvb2xlYW47XG4gICAgdGh1bWJzJDogT2JzZXJ2YWJsZTxhbnlbXT47XG4gICAgbWFpbkltYWdlJDogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIGNvbnN0cnVjdG9yKGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlKTtcbiAgICBvcGVuSW1hZ2UoaXRlbTogYW55KTogdm9pZDtcbiAgICBpc0FjdGl2ZSh0aHVtYm5haWw6IGFueSk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqIGZpbmQgdGhlIGluZGV4IG9mIHRoZSBtYWluIG1lZGlhIGluIHRoZSBsaXN0IG9mIG1lZGlhICovXG4gICAgZ2V0QWN0aXZlKHRodW1iczogYW55W10pOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFuIGFycmF5IG9mIENhcm91c2VsSXRlbXMgZm9yIHRoZSBwcm9kdWN0IHRodW1ibmFpbHMuXG4gICAgICogSW4gY2FzZSB0aGVyZSBhcmUgbGVzcyB0aGVuIDIgdGh1bWJzLCB3ZSByZXR1cm4gbnVsbC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZVRodW1icztcbn1cbiJdfQ==