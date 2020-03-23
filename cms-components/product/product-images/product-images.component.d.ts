import { Observable } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
import * as ɵngcc0 from '@angular/core';
export declare class ProductImagesComponent {
    private currentProductService;
    private mainMediaContainer;
    private product$;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInByb2R1Y3QtaW1hZ2VzLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvZHVjdEltYWdlc0NvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBjdXJyZW50UHJvZHVjdFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBtYWluTWVkaWFDb250YWluZXI7XG4gICAgcHJpdmF0ZSBwcm9kdWN0JDtcbiAgICB0aHVtYnMkOiBPYnNlcnZhYmxlPGFueVtdPjtcbiAgICBtYWluSW1hZ2UkOiBPYnNlcnZhYmxlPGFueT47XG4gICAgY29uc3RydWN0b3IoY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UpO1xuICAgIG9wZW5JbWFnZShpdGVtOiBhbnkpOiB2b2lkO1xuICAgIGlzQWN0aXZlKHRodW1ibmFpbDogYW55KTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKiogZmluZCB0aGUgaW5kZXggb2YgdGhlIG1haW4gbWVkaWEgaW4gdGhlIGxpc3Qgb2YgbWVkaWEgKi9cbiAgICBnZXRBY3RpdmUodGh1bWJzOiBhbnlbXSk6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgQ2Fyb3VzZWxJdGVtcyBmb3IgdGhlIHByb2R1Y3QgdGh1bWJuYWlscy5cbiAgICAgKiBJbiBjYXNlIHRoZXJlIGFyZSBsZXNzIHRoZW4gMiB0aHVtYnMsIHdlIHJldHVybiBudWxsLlxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlVGh1bWJzO1xufVxuIl19