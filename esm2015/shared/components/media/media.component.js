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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvbWVkaWEvbWVkaWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTy9DLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFtRHpCLFlBQXNCLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBL0JoRDs7V0FFRztRQUNPLFdBQU0sR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQVF0RTs7O1dBR0c7UUFDa0Msa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFM0Q7Ozs7V0FJRztRQUM4QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWxEOzs7O1dBSUc7UUFDOEIsY0FBUyxHQUFHLEtBQUssQ0FBQztJQUVBLENBQUM7SUFFcEQsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQ7O09BRUc7SUFDTyxNQUFNO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FDckMsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxHQUFHLENBQ1QsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNuQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7T0FHRztJQUNILFlBQVk7UUFDVixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVTLGFBQWE7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNGLENBQUE7O1lBNUNxQyxZQUFZOztBQTVDdkM7SUFBUixLQUFLLEVBQUU7aURBQTJCO0FBSzFCO0lBQVIsS0FBSyxFQUFFOzhDQUFnQjtBQU1mO0lBQVIsS0FBSyxFQUFFOzJDQUFhO0FBS1g7SUFBVCxNQUFNLEVBQUU7OENBQTZEO0FBWWpDO0lBQXBDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQztxREFBdUI7QUFPMUI7SUFBaEMsV0FBVyxDQUFDLGtCQUFrQixDQUFDO2lEQUFrQjtBQU9qQjtJQUFoQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7aURBQW1CO0FBakR4QyxjQUFjO0lBTDFCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLGtNQUFxQztRQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1csY0FBYyxDQStGMUI7U0EvRlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZWRpYSwgTWVkaWFDb250YWluZXIgfSBmcm9tICcuL21lZGlhLm1vZGVsJztcbmltcG9ydCB7IE1lZGlhU2VydmljZSB9IGZyb20gJy4vbWVkaWEuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW1lZGlhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lZGlhLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIFRoZSBtZWRpYSBjb250YWluZXIgY2FuIGhvbGQgbXVsdGlwbGUgbWVkaWEgaXRlbXMsIHNvIHRoYXRcbiAgICogYSBzcGVjaWZpYyBtZWRpYSAoYnkgZm9ybWF0KSBjYW4gYmUgdXNlZCBvciBtdWx0aXBsZSBtZWRpYVxuICAgKiBjYW4gYmUgcHJvdmlkZWQgaW4gYSBgc3Jjc2V0YCBzbyB0aGUgYnJvd3NlciB3aWxsIGZpZ3VyZSBvdXRcbiAgICogdGhlIGJlc3QgbWVkaWEgZm9yIHRoZSBkZXZpY2UuXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXI6IE1lZGlhQ29udGFpbmVyO1xuXG4gIC8qKlxuICAgKiBpZiBhIG1lZGlhIGZvcm1hdCBpcyBnaXZlbiwgYSBtZWRpYSBmb3IgdGhlIGdpdmVuIGZvcm1hdCB3aWxsIGJlIHJlbmRlcmVkXG4gICAqL1xuICBASW5wdXQoKSBmb3JtYXQ6IHN0cmluZztcblxuICAvKipcbiAgICogQSBzcGVjaWZpYyBhbHQgdGV4dCBmb3IgYW4gaW1hZ2UsIHdoaWNoIG92ZXJydWxlcyB0aGUgYWx0IHRleHRcbiAgICogZnJvbSB0aGUgY29udGFpbmVyIGRhdGEuXG4gICAqL1xuICBASW5wdXQoKSBhbHQ6IHN0cmluZztcblxuICAvKipcbiAgICogT25jZSB0aGUgbWVkaWEgaXMgbG9hZGVkLCB3ZSBlbWl0IGFuIGV2ZW50LlxuICAgKi9cbiAgQE91dHB1dCgpIGxvYWRlZDogRXZlbnRFbWl0dGVyPEJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxCb29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBUaGUgbWVkaWEgY29udGFpbnMgdGhlIGluZm8gZm9yIHRoZSBVSSB0byBjcmVhdGUgdGhlIGltYWdlLiBUaGlzIG1lZGlhXG4gICAqIG9iamVjdCBtaWdodCBjb250YWluIG1vcmUgaW5mbyBvbmNlIG90aGVyIG1lZGlhIHR5cGVzIChpLmUuIHZpZGVvKSBpcyBzdXBwb3J0ZWQuXG4gICAqL1xuICBtZWRpYTogTWVkaWE7XG5cbiAgLyoqXG4gICAqIFRoZSBgY3gtbWVkaWFgIGNvbXBvbmVudCBoYXMgYW4gYGlzLWluaXRpYWxpemVkYCBjbGFzcyBhcyBsb25nIGFzIHRoZVxuICAgKiBtZWRpYSBpcyBiZWluZyBpbml0aWFsaXplZC5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXMtaW5pdGlhbGl6ZWQnKSBpc0luaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBgY3gtbWVkaWFgIGNvbXBvbmVudCBoYXMgYSBgaXMtbG9hZGluZ2AgY2xhc3MgYXMgbG9uZyBhcyB0aGVcbiAgICogbWVkaWEgaXMgbG9hZGVkLiBXZWhuIHRoZSBtZWRpYSBpcyBsb2FkZWQsIHRoZSBgaXMtaW5pdGlhbGl6ZWRgIGNsYXNzXG4gICAqIGlzIGFkZGVkLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1sb2FkaW5nJykgaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAvKipcbiAgICogV2hlbiB0aGVyZSdzIG5vIG1lZGlhIHByb3ZpZGVkIGZvciB0aGUgY29udGVudCwgb3IgaW4gY2FzZSBhbiBlcnJvclxuICAgKiBoYXBwZW5lZCBkdXJpbmcgbG9hZGluZywgd2UgYWRkIHRoZSBgaXMtbWlzc2luZ2AgY2xhc3MuIFZpc3VhbCBlZmZlY3RzXG4gICAqIGNhbiBiZSBjb250cm9sbGVkIGJ5IENTUy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXMtbWlzc2luZycpIGlzTWlzc2luZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtZWRpYVNlcnZpY2U6IE1lZGlhU2VydmljZSkge31cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGBNZWRpYWAgb2JqZWN0XG4gICAqL1xuICBwcm90ZWN0ZWQgY3JlYXRlKCk6IHZvaWQge1xuICAgIHRoaXMubWVkaWEgPSB0aGlzLm1lZGlhU2VydmljZS5nZXRNZWRpYShcbiAgICAgIHRoaXMuY29udGFpbmVyLFxuICAgICAgdGhpcy5mb3JtYXQsXG4gICAgICB0aGlzLmFsdFxuICAgICk7XG4gICAgaWYgKCF0aGlzLm1lZGlhLnNyYykge1xuICAgICAgdGhpcy5oYW5kbGVNaXNzaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaGFuZGxlciBpcyBjYWxsZWQgZnJvbSB0aGUgVUkgd2hlbiB0aGUgaW1hZ2UgaXMgbG9hZGVkLlxuICAgKi9cbiAgbG9hZEhhbmRsZXIoKTogdm9pZCB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMuaXNNaXNzaW5nID0gZmFsc2U7XG4gICAgdGhpcy5sb2FkZWQuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuZXZlciBhbiBlcnJvciBoYXBwZW5zIGR1cmluZyBsb2FkLCB3ZSBtYXJrIHRoZSBjb21wb25lbnRcbiAgICogd2l0aCBjc3MgY2xhc3NlcyB0byBoYXZlIGEgbWlzc2luZyBtZWRpYS5cbiAgICovXG4gIGVycm9ySGFuZGxlcigpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZU1pc3NpbmcoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYW5kbGVNaXNzaW5nKCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLmlzTWlzc2luZyA9IHRydWU7XG4gICAgdGhpcy5sb2FkZWQuZW1pdChmYWxzZSk7XG4gIH1cbn1cbiJdfQ==