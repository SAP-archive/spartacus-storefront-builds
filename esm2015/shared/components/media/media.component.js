import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { MediaService } from './media.service';
let MediaComponent = class MediaComponent {
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
        this.media = this.mediaService.getMedia(this.container, this.format, this.alt);
        if (!this.media.src) {
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
};
MediaComponent.ctorParameters = () => [
    { type: MediaService }
];
__decorate([
    Input()
], MediaComponent.prototype, "container", void 0);
__decorate([
    Input()
], MediaComponent.prototype, "format", void 0);
__decorate([
    Input()
], MediaComponent.prototype, "alt", void 0);
__decorate([
    Output()
], MediaComponent.prototype, "loaded", void 0);
__decorate([
    HostBinding('class.is-initialized')
], MediaComponent.prototype, "isInitialized", void 0);
__decorate([
    HostBinding('class.is-loading')
], MediaComponent.prototype, "isLoading", void 0);
__decorate([
    HostBinding('class.is-missing')
], MediaComponent.prototype, "isMissing", void 0);
MediaComponent = __decorate([
    Component({
        selector: 'cx-media',
        template: "<img\n  *ngIf=\"media?.src\"\n  [attr.src]=\"media.src\"\n  [attr.srcset]=\"media.srcset\"\n  [attr.alt]=\"media.alt\"\n  (load)=\"loadHandler()\"\n  (error)=\"errorHandler()\"\n/>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], MediaComponent);
export { MediaComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvbWVkaWEvbWVkaWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTy9DLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFtRHpCLFlBQXNCLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBL0JoRDs7V0FFRztRQUNPLFdBQU0sR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQVF0RTs7O1dBR0c7UUFDa0Msa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFM0Q7Ozs7V0FJRztRQUM4QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWxEOzs7O1dBSUc7UUFDOEIsY0FBUyxHQUFHLEtBQUssQ0FBQztJQUVBLENBQUM7SUFFcEQsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQ7O09BRUc7SUFDSyxNQUFNO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FDckMsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxHQUFHLENBQ1QsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNuQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7T0FHRztJQUNILFlBQVk7UUFDVixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVPLGFBQWE7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNGLENBQUE7O1lBNUNxQyxZQUFZOztBQTVDdkM7SUFBUixLQUFLLEVBQUU7aURBQWdCO0FBS2Y7SUFBUixLQUFLLEVBQUU7OENBQWdCO0FBTWY7SUFBUixLQUFLLEVBQUU7MkNBQWE7QUFLWDtJQUFULE1BQU0sRUFBRTs4Q0FBNkQ7QUFZakM7SUFBcEMsV0FBVyxDQUFDLHNCQUFzQixDQUFDO3FEQUF1QjtBQU8xQjtJQUFoQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7aURBQWtCO0FBT2pCO0lBQWhDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztpREFBbUI7QUFqRHhDLGNBQWM7SUFMMUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsa01BQXFDO1FBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7R0FDVyxjQUFjLENBK0YxQjtTQS9GWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lZGlhIH0gZnJvbSAnLi9tZWRpYS5tb2RlbCc7XG5pbXBvcnQgeyBNZWRpYVNlcnZpY2UgfSBmcm9tICcuL21lZGlhLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1tZWRpYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZWRpYS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNZWRpYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBUaGUgbWVkaWEgY29udGFpbmVyIGNhbiBob2xkIG11bHRpcGxlIG1lZGlhIGl0ZW1zLCBzbyB0aGF0XG4gICAqIGEgc3BlY2lmaWMgbWVkaWEgKGJ5IGZvcm1hdCkgY2FuIGJlIHVzZWQgb3IgbXVsdGlwbGUgbWVkaWFcbiAgICogY2FuIGJlIHByb3ZpZGVkIGluIGEgYHNyY3NldGAgc28gdGhlIGJyb3dzZXIgd2lsbCBmaWd1cmUgb3V0XG4gICAqIHRoZSBiZXN0IG1lZGlhIGZvciB0aGUgZGV2aWNlLlxuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyOiBhbnk7XG5cbiAgLyoqXG4gICAqIGlmIGEgbWVkaWEgZm9ybWF0IGlzIGdpdmVuLCBhIG1lZGlhIGZvciB0aGUgZ2l2ZW4gZm9ybWF0IHdpbGwgYmUgcmVuZGVyZWRcbiAgICovXG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHNwZWNpZmljIGFsdCB0ZXh0IGZvciBhbiBpbWFnZSwgd2hpY2ggb3ZlcnJ1bGVzIHRoZSBhbHQgdGV4dFxuICAgKiBmcm9tIHRoZSBjb250YWluZXIgZGF0YS5cbiAgICovXG4gIEBJbnB1dCgpIGFsdDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPbmNlIHRoZSBtZWRpYSBpcyBsb2FkZWQsIHdlIGVtaXQgYW4gZXZlbnQuXG4gICAqL1xuICBAT3V0cHV0KCkgbG9hZGVkOiBFdmVudEVtaXR0ZXI8Qm9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPEJvb2xlYW4+KCk7XG5cbiAgLyoqXG4gICAqIFRoZSBtZWRpYSBjb250YWlucyB0aGUgaW5mbyBmb3IgdGhlIFVJIHRvIGNyZWF0ZSB0aGUgaW1hZ2UuIFRoaXMgbWVkaWFcbiAgICogb2JqZWN0IG1pZ2h0IGNvbnRhaW4gbW9yZSBpbmZvIG9uY2Ugb3RoZXIgbWVkaWEgdHlwZXMgKGkuZS4gdmlkZW8pIGlzIHN1cHBvcnRlZC5cbiAgICovXG4gIG1lZGlhOiBNZWRpYTtcblxuICAvKipcbiAgICogVGhlIGBjeC1tZWRpYWAgY29tcG9uZW50IGhhcyBhbiBgaXMtaW5pdGlhbGl6ZWRgIGNsYXNzIGFzIGxvbmcgYXMgdGhlXG4gICAqIG1lZGlhIGlzIGJlaW5nIGluaXRpYWxpemVkLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1pbml0aWFsaXplZCcpIGlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIGBjeC1tZWRpYWAgY29tcG9uZW50IGhhcyBhIGBpcy1sb2FkaW5nYCBjbGFzcyBhcyBsb25nIGFzIHRoZVxuICAgKiBtZWRpYSBpcyBsb2FkZWQuIFdlaG4gdGhlIG1lZGlhIGlzIGxvYWRlZCwgdGhlIGBpcy1pbml0aWFsaXplZGAgY2xhc3NcbiAgICogaXMgYWRkZWQuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLWxvYWRpbmcnKSBpc0xvYWRpbmcgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRoZXJlJ3Mgbm8gbWVkaWEgcHJvdmlkZWQgZm9yIHRoZSBjb250ZW50LCBvciBpbiBjYXNlIGFuIGVycm9yXG4gICAqIGhhcHBlbmVkIGR1cmluZyBsb2FkaW5nLCB3ZSBhZGQgdGhlIGBpcy1taXNzaW5nYCBjbGFzcy4gVmlzdWFsIGVmZmVjdHNcbiAgICogY2FuIGJlIGNvbnRyb2xsZWQgYnkgQ1NTLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1taXNzaW5nJykgaXNNaXNzaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1lZGlhU2VydmljZTogTWVkaWFTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgYE1lZGlhYCBvYmplY3RcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlKCk6IHZvaWQge1xuICAgIHRoaXMubWVkaWEgPSB0aGlzLm1lZGlhU2VydmljZS5nZXRNZWRpYShcbiAgICAgIHRoaXMuY29udGFpbmVyLFxuICAgICAgdGhpcy5mb3JtYXQsXG4gICAgICB0aGlzLmFsdFxuICAgICk7XG4gICAgaWYgKCF0aGlzLm1lZGlhLnNyYykge1xuICAgICAgdGhpcy5oYW5kbGVNaXNzaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaGFuZGxlciBpcyBjYWxsZWQgZnJvbSB0aGUgVUkgd2hlbiB0aGUgaW1hZ2UgaXMgbG9hZGVkLlxuICAgKi9cbiAgbG9hZEhhbmRsZXIoKTogdm9pZCB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMuaXNNaXNzaW5nID0gZmFsc2U7XG4gICAgdGhpcy5sb2FkZWQuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuZXZlciBhbiBlcnJvciBoYXBwZW5zIGR1cmluZyBsb2FkLCB3ZSBtYXJrIHRoZSBjb21wb25lbnRcbiAgICogd2l0aCBjc3MgY2xhc3NlcyB0byBoYXZlIGEgbWlzc2luZyBtZWRpYS5cbiAgICovXG4gIGVycm9ySGFuZGxlcigpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZU1pc3NpbmcoKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTWlzc2luZygpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5pc01pc3NpbmcgPSB0cnVlO1xuICAgIHRoaXMubG9hZGVkLmVtaXQoZmFsc2UpO1xuICB9XG59XG4iXX0=