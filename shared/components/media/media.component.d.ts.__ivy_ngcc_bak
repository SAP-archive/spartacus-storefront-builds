import { EventEmitter, OnChanges } from '@angular/core';
import { Media, MediaContainer } from './media.model';
import { MediaService } from './media.service';
export declare class MediaComponent implements OnChanges {
    protected mediaService: MediaService;
    /**
     * The media container can hold multiple media items, so that
     * a specific media (by format) can be used or multiple media
     * can be provided in a `srcset` so the browser will figure out
     * the best media for the device.
     */
    container: MediaContainer;
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
     * The `cx-media` component has an `is-initialized` class as long as the
     * media is being initialized.
     */
    isInitialized: boolean;
    /**
     * The `cx-media` component has a `is-loading` class as long as the
     * media is loaded. Wehn the media is loaded, the `is-initialized` class
     * is added.
     */
    isLoading: boolean;
    /**
     * When there's no media provided for the content, or in case an error
     * happened during loading, we add the `is-missing` class. Visual effects
     * can be controlled by CSS.
     */
    isMissing: boolean;
    constructor(mediaService: MediaService);
    ngOnChanges(): void;
    /**
     * Creates the `Media` object
     */
    protected create(): void;
    /**
     * This handler is called from the UI when the image is loaded.
     */
    loadHandler(): void;
    /**
     * Whenever an error happens during load, we mark the component
     * with css classes to have a missing media.
     */
    errorHandler(): void;
    protected handleMissing(): void;
}
