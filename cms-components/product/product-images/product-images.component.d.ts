import { Observable } from 'rxjs';
import { CarouselItem } from '../../../shared/components/carousel/index';
import { CurrentProductService } from '../current-product.service';
export declare class ProductImagesComponent {
    private currentProductService;
    private mainMediaContainer;
    private product$;
    private thumbs$;
    private mainImage$;
    constructor(currentProductService: CurrentProductService);
    getThumbs(): Observable<CarouselItem[]>;
    getMain(): Observable<any>;
    openImage(item: CarouselItem): void;
    /** find the index of the main media in the list of media */
    getActive(thumbs: CarouselItem[]): Observable<number>;
    /**
     * Return an array of CarouselItems for the product thumbnails.
     * In case there are less then 2 thumbs, we return null.
     */
    private createCarouselItems;
}
