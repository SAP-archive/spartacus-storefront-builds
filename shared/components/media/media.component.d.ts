import { EventEmitter, OnInit } from '@angular/core';
import { Media } from './media.model';
import { MediaService } from './media.service';
export declare class MediaComponent implements OnInit {
    protected mediaService: MediaService;
    /**
     * The media container can hold multiple media items, so that
     * a specific media (by format) can be used or multiple media
     * can be provided in a `srcset` so the browser will figure out
     * the best media for the device.
     */
    container: any;
    /**
     * if a media format is given, a media for the given format will be rendered
     */
    format: string;
    /**
     * A specific alt text for an image, which overrules the alt text
     * from the container data.
     */
    alt: string;
    /**
     * Once the media is loaded, we emit an event.
     */
    loaded: EventEmitter<Boolean>;
    /**
     * The media contains the info for the UI to create the image. This media
     * object might contain more info once other media types (i.e. video) is supported.
     */
    media: Media;
    /**
     * The `cx-media` component has a `loading` class as long as the
     * media is loaded. Wehn the media is loaded, the `initialized` class
     * is added.
     */
    isLoading: boolean;
    isInitialized: boolean;
    constructor(mediaService: MediaService);
    ngOnInit(): void;
    /**
     * Creates the `Media` object
     */
    private create;
    /**
     * This handler is called from the UI when the image is loaded.
     * The
     */
    loadHandler(): void;
    /**
     * Whenever an error happens during load, we fall back to a missing image.
     * This means we need to update the local media object. In this scenario we
     * do not provide a `srcset` for responsive images.
     */
    errorHandler(): void;
}
