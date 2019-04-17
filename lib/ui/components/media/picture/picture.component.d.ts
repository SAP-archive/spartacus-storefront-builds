import { OnChanges, ElementRef, ChangeDetectorRef, EventEmitter, Renderer2 } from '@angular/core';
export declare class PictureComponent implements OnChanges {
    private elRef;
    private cd;
    private renderer;
    imageContainer: any;
    imageFormat: string;
    imagePosition: string;
    imageAlt: string;
    loaded: EventEmitter<HTMLElement>;
    mainImage: string;
    missingProductImgSrc: string;
    missingProductImageAlt: string;
    constructor(elRef: ElementRef, cd: ChangeDetectorRef, renderer: Renderer2);
    ngOnChanges(): void;
    loadImage(): void;
    loadHandler(): void;
    loadErrorHandler(event: any): void;
}
