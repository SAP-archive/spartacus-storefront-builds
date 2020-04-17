import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { MediaService } from './media.service';
var MediaComponent = /** @class */ (function () {
    function MediaComponent(mediaService) {
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
    MediaComponent.prototype.ngOnChanges = function () {
        this.create();
    };
    /**
     * Creates the `Media` object
     */
    MediaComponent.prototype.create = function () {
        this.media = this.mediaService.getMedia(this.container, this.format, this.alt);
        if (!this.media.src) {
            this.handleMissing();
        }
    };
    /**
     * This handler is called from the UI when the image is loaded.
     */
    MediaComponent.prototype.loadHandler = function () {
        this.isLoading = false;
        this.isInitialized = true;
        this.isMissing = false;
        this.loaded.emit(true);
    };
    /**
     * Whenever an error happens during load, we mark the component
     * with css classes to have a missing media.
     */
    MediaComponent.prototype.errorHandler = function () {
        this.handleMissing();
    };
    MediaComponent.prototype.handleMissing = function () {
        this.isLoading = false;
        this.isInitialized = true;
        this.isMissing = true;
        this.loaded.emit(false);
    };
    MediaComponent.ctorParameters = function () { return [
        { type: MediaService }
    ]; };
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
    return MediaComponent;
}());
export { MediaComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvbWVkaWEvbWVkaWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTy9DO0lBbURFLHdCQUFzQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQS9CaEQ7O1dBRUc7UUFDTyxXQUFNLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFRdEU7OztXQUdHO1FBQ2tDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRTNEOzs7O1dBSUc7UUFDOEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVsRDs7OztXQUlHO1FBQzhCLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFFQSxDQUFDO0lBRXBELG9DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHO0lBQ08sK0JBQU0sR0FBaEI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUNyQyxJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FDVCxDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILG9DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gscUNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRVMsc0NBQWEsR0FBdkI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOztnQkEzQ21DLFlBQVk7O0lBNUN2QztRQUFSLEtBQUssRUFBRTtxREFBMkI7SUFLMUI7UUFBUixLQUFLLEVBQUU7a0RBQWdCO0lBTWY7UUFBUixLQUFLLEVBQUU7K0NBQWE7SUFLWDtRQUFULE1BQU0sRUFBRTtrREFBNkQ7SUFZakM7UUFBcEMsV0FBVyxDQUFDLHNCQUFzQixDQUFDO3lEQUF1QjtJQU8xQjtRQUFoQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7cURBQWtCO0lBT2pCO1FBQWhDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztxREFBbUI7SUFqRHhDLGNBQWM7UUFMMUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsa01BQXFDO1lBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxjQUFjLENBK0YxQjtJQUFELHFCQUFDO0NBQUEsQUEvRkQsSUErRkM7U0EvRlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZWRpYSwgTWVkaWFDb250YWluZXIgfSBmcm9tICcuL21lZGlhLm1vZGVsJztcbmltcG9ydCB7IE1lZGlhU2VydmljZSB9IGZyb20gJy4vbWVkaWEuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW1lZGlhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lZGlhLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIFRoZSBtZWRpYSBjb250YWluZXIgY2FuIGhvbGQgbXVsdGlwbGUgbWVkaWEgaXRlbXMsIHNvIHRoYXRcbiAgICogYSBzcGVjaWZpYyBtZWRpYSAoYnkgZm9ybWF0KSBjYW4gYmUgdXNlZCBvciBtdWx0aXBsZSBtZWRpYVxuICAgKiBjYW4gYmUgcHJvdmlkZWQgaW4gYSBgc3Jjc2V0YCBzbyB0aGUgYnJvd3NlciB3aWxsIGZpZ3VyZSBvdXRcbiAgICogdGhlIGJlc3QgbWVkaWEgZm9yIHRoZSBkZXZpY2UuXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXI6IE1lZGlhQ29udGFpbmVyO1xuXG4gIC8qKlxuICAgKiBpZiBhIG1lZGlhIGZvcm1hdCBpcyBnaXZlbiwgYSBtZWRpYSBmb3IgdGhlIGdpdmVuIGZvcm1hdCB3aWxsIGJlIHJlbmRlcmVkXG4gICAqL1xuICBASW5wdXQoKSBmb3JtYXQ6IHN0cmluZztcblxuICAvKipcbiAgICogQSBzcGVjaWZpYyBhbHQgdGV4dCBmb3IgYW4gaW1hZ2UsIHdoaWNoIG92ZXJydWxlcyB0aGUgYWx0IHRleHRcbiAgICogZnJvbSB0aGUgY29udGFpbmVyIGRhdGEuXG4gICAqL1xuICBASW5wdXQoKSBhbHQ6IHN0cmluZztcblxuICAvKipcbiAgICogT25jZSB0aGUgbWVkaWEgaXMgbG9hZGVkLCB3ZSBlbWl0IGFuIGV2ZW50LlxuICAgKi9cbiAgQE91dHB1dCgpIGxvYWRlZDogRXZlbnRFbWl0dGVyPEJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxCb29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBUaGUgbWVkaWEgY29udGFpbnMgdGhlIGluZm8gZm9yIHRoZSBVSSB0byBjcmVhdGUgdGhlIGltYWdlLiBUaGlzIG1lZGlhXG4gICAqIG9iamVjdCBtaWdodCBjb250YWluIG1vcmUgaW5mbyBvbmNlIG90aGVyIG1lZGlhIHR5cGVzIChpLmUuIHZpZGVvKSBpcyBzdXBwb3J0ZWQuXG4gICAqL1xuICBtZWRpYTogTWVkaWE7XG5cbiAgLyoqXG4gICAqIFRoZSBgY3gtbWVkaWFgIGNvbXBvbmVudCBoYXMgYW4gYGlzLWluaXRpYWxpemVkYCBjbGFzcyBhcyBsb25nIGFzIHRoZVxuICAgKiBtZWRpYSBpcyBiZWluZyBpbml0aWFsaXplZC5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXMtaW5pdGlhbGl6ZWQnKSBpc0luaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBgY3gtbWVkaWFgIGNvbXBvbmVudCBoYXMgYSBgaXMtbG9hZGluZ2AgY2xhc3MgYXMgbG9uZyBhcyB0aGVcbiAgICogbWVkaWEgaXMgbG9hZGVkLiBXZWhuIHRoZSBtZWRpYSBpcyBsb2FkZWQsIHRoZSBgaXMtaW5pdGlhbGl6ZWRgIGNsYXNzXG4gICAqIGlzIGFkZGVkLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1sb2FkaW5nJykgaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAvKipcbiAgICogV2hlbiB0aGVyZSdzIG5vIG1lZGlhIHByb3ZpZGVkIGZvciB0aGUgY29udGVudCwgb3IgaW4gY2FzZSBhbiBlcnJvclxuICAgKiBoYXBwZW5lZCBkdXJpbmcgbG9hZGluZywgd2UgYWRkIHRoZSBgaXMtbWlzc2luZ2AgY2xhc3MuIFZpc3VhbCBlZmZlY3RzXG4gICAqIGNhbiBiZSBjb250cm9sbGVkIGJ5IENTUy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXMtbWlzc2luZycpIGlzTWlzc2luZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtZWRpYVNlcnZpY2U6IE1lZGlhU2VydmljZSkge31cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGBNZWRpYWAgb2JqZWN0XG4gICAqL1xuICBwcm90ZWN0ZWQgY3JlYXRlKCk6IHZvaWQge1xuICAgIHRoaXMubWVkaWEgPSB0aGlzLm1lZGlhU2VydmljZS5nZXRNZWRpYShcbiAgICAgIHRoaXMuY29udGFpbmVyLFxuICAgICAgdGhpcy5mb3JtYXQsXG4gICAgICB0aGlzLmFsdFxuICAgICk7XG4gICAgaWYgKCF0aGlzLm1lZGlhLnNyYykge1xuICAgICAgdGhpcy5oYW5kbGVNaXNzaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaGFuZGxlciBpcyBjYWxsZWQgZnJvbSB0aGUgVUkgd2hlbiB0aGUgaW1hZ2UgaXMgbG9hZGVkLlxuICAgKi9cbiAgbG9hZEhhbmRsZXIoKTogdm9pZCB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMuaXNNaXNzaW5nID0gZmFsc2U7XG4gICAgdGhpcy5sb2FkZWQuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuZXZlciBhbiBlcnJvciBoYXBwZW5zIGR1cmluZyBsb2FkLCB3ZSBtYXJrIHRoZSBjb21wb25lbnRcbiAgICogd2l0aCBjc3MgY2xhc3NlcyB0byBoYXZlIGEgbWlzc2luZyBtZWRpYS5cbiAgICovXG4gIGVycm9ySGFuZGxlcigpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZU1pc3NpbmcoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYW5kbGVNaXNzaW5nKCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLmlzTWlzc2luZyA9IHRydWU7XG4gICAgdGhpcy5sb2FkZWQuZW1pdChmYWxzZSk7XG4gIH1cbn1cbiJdfQ==