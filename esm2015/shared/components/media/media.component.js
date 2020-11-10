import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { ImageLoadingStrategy } from './media.model';
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
     * Indicates whether the browser should lazy load the image.
     */
    get loadingStrategy() {
        return this.mediaService.loadingStrategy === ImageLoadingStrategy.LAZY
            ? 'lazy'
            : null;
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
                template: "<img\n  *ngIf=\"media?.src\"\n  [attr.src]=\"media.src\"\n  [attr.srcset]=\"media.srcset\"\n  [attr.alt]=\"media.alt\"\n  [attr.loading]=\"loadingStrategy\"\n  (load)=\"loadHandler()\"\n  (error)=\"errorHandler()\"\n/>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvbWVkaWEvbWVkaWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUVMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU8vQyxNQUFNLE9BQU8sY0FBYztJQW1EekIsWUFBc0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUEvQmhEOztXQUVHO1FBQ08sV0FBTSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBUXRFOzs7V0FHRztRQUNrQyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUUzRDs7OztXQUlHO1FBQzhCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFFbEQ7Ozs7V0FJRztRQUM4QixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBRUEsQ0FBQztJQUVwRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7T0FFRztJQUNPLE1BQU07O1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FDckMsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxHQUFHLENBQ1QsQ0FBQztRQUNGLElBQUksUUFBQyxJQUFJLENBQUMsS0FBSywwQ0FBRSxHQUFHLENBQUEsRUFBRTtZQUNwQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEtBQUssb0JBQW9CLENBQUMsSUFBSTtZQUNwRSxDQUFDLENBQUMsTUFBTTtZQUNSLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsWUFBWTtRQUNWLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRVMsYUFBYTtRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7WUE1R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQix3T0FBcUM7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFOUSxZQUFZOzs7d0JBY2xCLEtBQUs7cUJBS0wsS0FBSztrQkFNTCxLQUFLO3FCQUtMLE1BQU07NEJBWU4sV0FBVyxTQUFDLHNCQUFzQjt3QkFPbEMsV0FBVyxTQUFDLGtCQUFrQjt3QkFPOUIsV0FBVyxTQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbWFnZUxvYWRpbmdTdHJhdGVneSwgTWVkaWEsIE1lZGlhQ29udGFpbmVyIH0gZnJvbSAnLi9tZWRpYS5tb2RlbCc7XG5pbXBvcnQgeyBNZWRpYVNlcnZpY2UgfSBmcm9tICcuL21lZGlhLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1tZWRpYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZWRpYS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNZWRpYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBUaGUgbWVkaWEgY29udGFpbmVyIGNhbiBob2xkIG11bHRpcGxlIG1lZGlhIGl0ZW1zLCBzbyB0aGF0XG4gICAqIGEgc3BlY2lmaWMgbWVkaWEgKGJ5IGZvcm1hdCkgY2FuIGJlIHVzZWQgb3IgbXVsdGlwbGUgbWVkaWFcbiAgICogY2FuIGJlIHByb3ZpZGVkIGluIGEgYHNyY3NldGAgc28gdGhlIGJyb3dzZXIgd2lsbCBmaWd1cmUgb3V0XG4gICAqIHRoZSBiZXN0IG1lZGlhIGZvciB0aGUgZGV2aWNlLlxuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyOiBNZWRpYUNvbnRhaW5lcjtcblxuICAvKipcbiAgICogaWYgYSBtZWRpYSBmb3JtYXQgaXMgZ2l2ZW4sIGEgbWVkaWEgZm9yIHRoZSBnaXZlbiBmb3JtYXQgd2lsbCBiZSByZW5kZXJlZFxuICAgKi9cbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc3BlY2lmaWMgYWx0IHRleHQgZm9yIGFuIGltYWdlLCB3aGljaCBvdmVycnVsZXMgdGhlIGFsdCB0ZXh0XG4gICAqIGZyb20gdGhlIGNvbnRhaW5lciBkYXRhLlxuICAgKi9cbiAgQElucHV0KCkgYWx0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9uY2UgdGhlIG1lZGlhIGlzIGxvYWRlZCwgd2UgZW1pdCBhbiBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoKSBsb2FkZWQ6IEV2ZW50RW1pdHRlcjxCb29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Qm9vbGVhbj4oKTtcblxuICAvKipcbiAgICogVGhlIG1lZGlhIGNvbnRhaW5zIHRoZSBpbmZvIGZvciB0aGUgVUkgdG8gY3JlYXRlIHRoZSBpbWFnZS4gVGhpcyBtZWRpYVxuICAgKiBvYmplY3QgbWlnaHQgY29udGFpbiBtb3JlIGluZm8gb25jZSBvdGhlciBtZWRpYSB0eXBlcyAoaS5lLiB2aWRlbykgaXMgc3VwcG9ydGVkLlxuICAgKi9cbiAgbWVkaWE6IE1lZGlhO1xuXG4gIC8qKlxuICAgKiBUaGUgYGN4LW1lZGlhYCBjb21wb25lbnQgaGFzIGFuIGBpcy1pbml0aWFsaXplZGAgY2xhc3MgYXMgbG9uZyBhcyB0aGVcbiAgICogbWVkaWEgaXMgYmVpbmcgaW5pdGlhbGl6ZWQuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLWluaXRpYWxpemVkJykgaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgYGN4LW1lZGlhYCBjb21wb25lbnQgaGFzIGEgYGlzLWxvYWRpbmdgIGNsYXNzIGFzIGxvbmcgYXMgdGhlXG4gICAqIG1lZGlhIGlzIGxvYWRlZC4gV2VobiB0aGUgbWVkaWEgaXMgbG9hZGVkLCB0aGUgYGlzLWluaXRpYWxpemVkYCBjbGFzc1xuICAgKiBpcyBhZGRlZC5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXMtbG9hZGluZycpIGlzTG9hZGluZyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlcmUncyBubyBtZWRpYSBwcm92aWRlZCBmb3IgdGhlIGNvbnRlbnQsIG9yIGluIGNhc2UgYW4gZXJyb3JcbiAgICogaGFwcGVuZWQgZHVyaW5nIGxvYWRpbmcsIHdlIGFkZCB0aGUgYGlzLW1pc3NpbmdgIGNsYXNzLiBWaXN1YWwgZWZmZWN0c1xuICAgKiBjYW4gYmUgY29udHJvbGxlZCBieSBDU1MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLW1pc3NpbmcnKSBpc01pc3NpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbWVkaWFTZXJ2aWNlOiBNZWRpYVNlcnZpY2UpIHt9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBgTWVkaWFgIG9iamVjdFxuICAgKi9cbiAgcHJvdGVjdGVkIGNyZWF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLm1lZGlhID0gdGhpcy5tZWRpYVNlcnZpY2UuZ2V0TWVkaWEoXG4gICAgICB0aGlzLmNvbnRhaW5lcixcbiAgICAgIHRoaXMuZm9ybWF0LFxuICAgICAgdGhpcy5hbHRcbiAgICApO1xuICAgIGlmICghdGhpcy5tZWRpYT8uc3JjKSB7XG4gICAgICB0aGlzLmhhbmRsZU1pc3NpbmcoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBoYW5kbGVyIGlzIGNhbGxlZCBmcm9tIHRoZSBVSSB3aGVuIHRoZSBpbWFnZSBpcyBsb2FkZWQuXG4gICAqL1xuICBsb2FkSGFuZGxlcigpOiB2b2lkIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5pc01pc3NpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmxvYWRlZC5lbWl0KHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBicm93c2VyIHNob3VsZCBsYXp5IGxvYWQgdGhlIGltYWdlLlxuICAgKi9cbiAgZ2V0IGxvYWRpbmdTdHJhdGVneSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1lZGlhU2VydmljZS5sb2FkaW5nU3RyYXRlZ3kgPT09IEltYWdlTG9hZGluZ1N0cmF0ZWd5LkxBWllcbiAgICAgID8gJ2xhenknXG4gICAgICA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogV2hlbmV2ZXIgYW4gZXJyb3IgaGFwcGVucyBkdXJpbmcgbG9hZCwgd2UgbWFyayB0aGUgY29tcG9uZW50XG4gICAqIHdpdGggY3NzIGNsYXNzZXMgdG8gaGF2ZSBhIG1pc3NpbmcgbWVkaWEuXG4gICAqL1xuICBlcnJvckhhbmRsZXIoKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVNaXNzaW5nKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFuZGxlTWlzc2luZygpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5pc01pc3NpbmcgPSB0cnVlO1xuICAgIHRoaXMubG9hZGVkLmVtaXQoZmFsc2UpO1xuICB9XG59XG4iXX0=