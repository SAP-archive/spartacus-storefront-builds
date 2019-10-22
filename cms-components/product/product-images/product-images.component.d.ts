import { Observable } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
export declare class ProductImagesComponent {
    private currentProductService;
    private mainMediaContainer;
    private product$;
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
}
