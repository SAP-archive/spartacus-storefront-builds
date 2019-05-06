import { ElementRef, EventEmitter, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { Media } from './media.model';
import { MediaService } from './media.service';
export declare class MediaComponent implements OnChanges, OnInit {
    private elRef;
    private renderer;
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
    loaded: EventEmitter<HTMLElement>;
    /**
     * The media contains the info for the UI to create the image. This media
     * object might contain more info once other media types (i.e. video) is supported.
     */
    media: Media;
    constructor(elRef: ElementRef, renderer: Renderer2, mediaService: MediaService);
    ngOnInit(): void;
    ngOnChanges(): void;
    private loadImage;
    loadHandler(): void;
    loadErrorHandler(event: any): void;
}
