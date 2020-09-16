import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { MediaService } from './media.service';
export class MediaComponent {
    constructor(mediaService) {
        this.mediaService = mediaService;
        /**
         * Once the media is loaded, we emit an event.
         */
        this.loaded = new EventEmitter();
        /**
         * The `cx-media` component has an `is-initialized` class as long as the
         * media is being initialized.
         */
        this.isInitialized = false;
        /**
         * The `cx-media` component has a `is-loading` class as long as the
         * media is loaded. Wehn the media is loaded, the `is-initialized` class
         * is added.
         */
        this.isLoading = true;
        /**
         * When there's no media provided for the content, or in case an error
         * happened during loading, we add the `is-missing` class. Visual effects
         * can be controlled by CSS.
         */
        this.isMissing = false;
    }
    ngOnChanges() {
        this.create();
    }
    /**
     * Creates the `Media` object
     */
    create() {
        var _a;
        this.media = this.mediaService.getMedia(this.container, this.format, this.alt);
        if (!((_a = this.media) === null || _a === void 0 ? void 0 : _a.src)) {
            this.handleMissing();
        }
    }
    /**
     * This handler is called from the UI when the image is loaded.
     */
    loadHandler() {
        this.isLoading = false;
        this.isInitialized = true;
        this.isMissing = false;
        this.loaded.emit(true);
    }
    /**
     * Whenever an error happens during load, we mark the component
     * with css classes to have a missing media.
     */
    errorHandler() {
        this.handleMissing();
    }
    handleMissing() {
        this.isLoading = false;
        this.isInitialized = true;
        this.isMissing = true;
        this.loaded.emit(false);
    }
}
MediaComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-media',
                template: "<img\n  *ngIf=\"media?.src\"\n  [attr.src]=\"media.src\"\n  [attr.srcset]=\"media.srcset\"\n  [attr.alt]=\"media.alt\"\n  (load)=\"loadHandler()\"\n  (error)=\"errorHandler()\"\n/>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MediaComponent.ctorParameters = () => [
    { type: MediaService }
];
MediaComponent.propDecorators = {
    container: [{ type: Input }],
    format: [{ type: Input }],
    alt: [{ type: Input }],
    loaded: [{ type: Output }],
    isInitialized: [{ type: HostBinding, args: ['class.is-initialized',] }],
    isLoading: [{ type: HostBinding, args: ['class.is-loading',] }],
    isMissing: [{ type: HostBinding, args: ['class.is-missing',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvbWVkaWEvbWVkaWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUVMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPL0MsTUFBTSxPQUFPLGNBQWM7SUFtRHpCLFlBQXNCLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBL0JoRDs7V0FFRztRQUNPLFdBQU0sR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQVF0RTs7O1dBR0c7UUFDa0Msa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFM0Q7Ozs7V0FJRztRQUM4QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWxEOzs7O1dBSUc7UUFDOEIsY0FBUyxHQUFHLEtBQUssQ0FBQztJQUVBLENBQUM7SUFFcEQsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQ7O09BRUc7SUFDTyxNQUFNOztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQ3JDLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsR0FBRyxDQUNULENBQUM7UUFDRixJQUFJLFFBQUMsSUFBSSxDQUFDLEtBQUssMENBQUUsR0FBRyxDQUFBLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxZQUFZO1FBQ1YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFUyxhQUFhO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7OztZQW5HRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLGtNQUFxQztnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQU5RLFlBQVk7Ozt3QkFjbEIsS0FBSztxQkFLTCxLQUFLO2tCQU1MLEtBQUs7cUJBS0wsTUFBTTs0QkFZTixXQUFXLFNBQUMsc0JBQXNCO3dCQU9sQyxXQUFXLFNBQUMsa0JBQWtCO3dCQU85QixXQUFXLFNBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lZGlhLCBNZWRpYUNvbnRhaW5lciB9IGZyb20gJy4vbWVkaWEubW9kZWwnO1xuaW1wb3J0IHsgTWVkaWFTZXJ2aWNlIH0gZnJvbSAnLi9tZWRpYS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbWVkaWEnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVkaWEuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAvKipcbiAgICogVGhlIG1lZGlhIGNvbnRhaW5lciBjYW4gaG9sZCBtdWx0aXBsZSBtZWRpYSBpdGVtcywgc28gdGhhdFxuICAgKiBhIHNwZWNpZmljIG1lZGlhIChieSBmb3JtYXQpIGNhbiBiZSB1c2VkIG9yIG11bHRpcGxlIG1lZGlhXG4gICAqIGNhbiBiZSBwcm92aWRlZCBpbiBhIGBzcmNzZXRgIHNvIHRoZSBicm93c2VyIHdpbGwgZmlndXJlIG91dFxuICAgKiB0aGUgYmVzdCBtZWRpYSBmb3IgdGhlIGRldmljZS5cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogTWVkaWFDb250YWluZXI7XG5cbiAgLyoqXG4gICAqIGlmIGEgbWVkaWEgZm9ybWF0IGlzIGdpdmVuLCBhIG1lZGlhIGZvciB0aGUgZ2l2ZW4gZm9ybWF0IHdpbGwgYmUgcmVuZGVyZWRcbiAgICovXG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHNwZWNpZmljIGFsdCB0ZXh0IGZvciBhbiBpbWFnZSwgd2hpY2ggb3ZlcnJ1bGVzIHRoZSBhbHQgdGV4dFxuICAgKiBmcm9tIHRoZSBjb250YWluZXIgZGF0YS5cbiAgICovXG4gIEBJbnB1dCgpIGFsdDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPbmNlIHRoZSBtZWRpYSBpcyBsb2FkZWQsIHdlIGVtaXQgYW4gZXZlbnQuXG4gICAqL1xuICBAT3V0cHV0KCkgbG9hZGVkOiBFdmVudEVtaXR0ZXI8Qm9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPEJvb2xlYW4+KCk7XG5cbiAgLyoqXG4gICAqIFRoZSBtZWRpYSBjb250YWlucyB0aGUgaW5mbyBmb3IgdGhlIFVJIHRvIGNyZWF0ZSB0aGUgaW1hZ2UuIFRoaXMgbWVkaWFcbiAgICogb2JqZWN0IG1pZ2h0IGNvbnRhaW4gbW9yZSBpbmZvIG9uY2Ugb3RoZXIgbWVkaWEgdHlwZXMgKGkuZS4gdmlkZW8pIGlzIHN1cHBvcnRlZC5cbiAgICovXG4gIG1lZGlhOiBNZWRpYTtcblxuICAvKipcbiAgICogVGhlIGBjeC1tZWRpYWAgY29tcG9uZW50IGhhcyBhbiBgaXMtaW5pdGlhbGl6ZWRgIGNsYXNzIGFzIGxvbmcgYXMgdGhlXG4gICAqIG1lZGlhIGlzIGJlaW5nIGluaXRpYWxpemVkLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1pbml0aWFsaXplZCcpIGlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIGBjeC1tZWRpYWAgY29tcG9uZW50IGhhcyBhIGBpcy1sb2FkaW5nYCBjbGFzcyBhcyBsb25nIGFzIHRoZVxuICAgKiBtZWRpYSBpcyBsb2FkZWQuIFdlaG4gdGhlIG1lZGlhIGlzIGxvYWRlZCwgdGhlIGBpcy1pbml0aWFsaXplZGAgY2xhc3NcbiAgICogaXMgYWRkZWQuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLWxvYWRpbmcnKSBpc0xvYWRpbmcgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRoZXJlJ3Mgbm8gbWVkaWEgcHJvdmlkZWQgZm9yIHRoZSBjb250ZW50LCBvciBpbiBjYXNlIGFuIGVycm9yXG4gICAqIGhhcHBlbmVkIGR1cmluZyBsb2FkaW5nLCB3ZSBhZGQgdGhlIGBpcy1taXNzaW5nYCBjbGFzcy4gVmlzdWFsIGVmZmVjdHNcbiAgICogY2FuIGJlIGNvbnRyb2xsZWQgYnkgQ1NTLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1taXNzaW5nJykgaXNNaXNzaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1lZGlhU2VydmljZTogTWVkaWFTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgYE1lZGlhYCBvYmplY3RcbiAgICovXG4gIHByb3RlY3RlZCBjcmVhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5tZWRpYSA9IHRoaXMubWVkaWFTZXJ2aWNlLmdldE1lZGlhKFxuICAgICAgdGhpcy5jb250YWluZXIsXG4gICAgICB0aGlzLmZvcm1hdCxcbiAgICAgIHRoaXMuYWx0XG4gICAgKTtcbiAgICBpZiAoIXRoaXMubWVkaWE/LnNyYykge1xuICAgICAgdGhpcy5oYW5kbGVNaXNzaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaGFuZGxlciBpcyBjYWxsZWQgZnJvbSB0aGUgVUkgd2hlbiB0aGUgaW1hZ2UgaXMgbG9hZGVkLlxuICAgKi9cbiAgbG9hZEhhbmRsZXIoKTogdm9pZCB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMuaXNNaXNzaW5nID0gZmFsc2U7XG4gICAgdGhpcy5sb2FkZWQuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuZXZlciBhbiBlcnJvciBoYXBwZW5zIGR1cmluZyBsb2FkLCB3ZSBtYXJrIHRoZSBjb21wb25lbnRcbiAgICogd2l0aCBjc3MgY2xhc3NlcyB0byBoYXZlIGEgbWlzc2luZyBtZWRpYS5cbiAgICovXG4gIGVycm9ySGFuZGxlcigpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZU1pc3NpbmcoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYW5kbGVNaXNzaW5nKCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLmlzTWlzc2luZyA9IHRydWU7XG4gICAgdGhpcy5sb2FkZWQuZW1pdChmYWxzZSk7XG4gIH1cbn1cbiJdfQ==