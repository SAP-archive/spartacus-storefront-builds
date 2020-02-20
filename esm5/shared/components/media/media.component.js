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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvbWVkaWEvbWVkaWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTy9DO0lBbURFLHdCQUFzQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQS9CaEQ7O1dBRUc7UUFDTyxXQUFNLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFRdEU7OztXQUdHO1FBQ2tDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRTNEOzs7O1dBSUc7UUFDOEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVsRDs7OztXQUlHO1FBQzhCLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFFQSxDQUFDO0lBRXBELG9DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssK0JBQU0sR0FBZDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQ3JDLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsR0FBRyxDQUNULENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsb0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxxQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxzQ0FBYSxHQUFyQjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7O2dCQTNDbUMsWUFBWTs7SUE1Q3ZDO1FBQVIsS0FBSyxFQUFFO3FEQUFnQjtJQUtmO1FBQVIsS0FBSyxFQUFFO2tEQUFnQjtJQU1mO1FBQVIsS0FBSyxFQUFFOytDQUFhO0lBS1g7UUFBVCxNQUFNLEVBQUU7a0RBQTZEO0lBWWpDO1FBQXBDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQzt5REFBdUI7SUFPMUI7UUFBaEMsV0FBVyxDQUFDLGtCQUFrQixDQUFDO3FEQUFrQjtJQU9qQjtRQUFoQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7cURBQW1CO0lBakR4QyxjQUFjO1FBTDFCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLGtNQUFxQztZQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csY0FBYyxDQStGMUI7SUFBRCxxQkFBQztDQUFBLEFBL0ZELElBK0ZDO1NBL0ZZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVkaWEgfSBmcm9tICcuL21lZGlhLm1vZGVsJztcbmltcG9ydCB7IE1lZGlhU2VydmljZSB9IGZyb20gJy4vbWVkaWEuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW1lZGlhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lZGlhLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIFRoZSBtZWRpYSBjb250YWluZXIgY2FuIGhvbGQgbXVsdGlwbGUgbWVkaWEgaXRlbXMsIHNvIHRoYXRcbiAgICogYSBzcGVjaWZpYyBtZWRpYSAoYnkgZm9ybWF0KSBjYW4gYmUgdXNlZCBvciBtdWx0aXBsZSBtZWRpYVxuICAgKiBjYW4gYmUgcHJvdmlkZWQgaW4gYSBgc3Jjc2V0YCBzbyB0aGUgYnJvd3NlciB3aWxsIGZpZ3VyZSBvdXRcbiAgICogdGhlIGJlc3QgbWVkaWEgZm9yIHRoZSBkZXZpY2UuXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXI6IGFueTtcblxuICAvKipcbiAgICogaWYgYSBtZWRpYSBmb3JtYXQgaXMgZ2l2ZW4sIGEgbWVkaWEgZm9yIHRoZSBnaXZlbiBmb3JtYXQgd2lsbCBiZSByZW5kZXJlZFxuICAgKi9cbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc3BlY2lmaWMgYWx0IHRleHQgZm9yIGFuIGltYWdlLCB3aGljaCBvdmVycnVsZXMgdGhlIGFsdCB0ZXh0XG4gICAqIGZyb20gdGhlIGNvbnRhaW5lciBkYXRhLlxuICAgKi9cbiAgQElucHV0KCkgYWx0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9uY2UgdGhlIG1lZGlhIGlzIGxvYWRlZCwgd2UgZW1pdCBhbiBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoKSBsb2FkZWQ6IEV2ZW50RW1pdHRlcjxCb29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Qm9vbGVhbj4oKTtcblxuICAvKipcbiAgICogVGhlIG1lZGlhIGNvbnRhaW5zIHRoZSBpbmZvIGZvciB0aGUgVUkgdG8gY3JlYXRlIHRoZSBpbWFnZS4gVGhpcyBtZWRpYVxuICAgKiBvYmplY3QgbWlnaHQgY29udGFpbiBtb3JlIGluZm8gb25jZSBvdGhlciBtZWRpYSB0eXBlcyAoaS5lLiB2aWRlbykgaXMgc3VwcG9ydGVkLlxuICAgKi9cbiAgbWVkaWE6IE1lZGlhO1xuXG4gIC8qKlxuICAgKiBUaGUgYGN4LW1lZGlhYCBjb21wb25lbnQgaGFzIGFuIGBpcy1pbml0aWFsaXplZGAgY2xhc3MgYXMgbG9uZyBhcyB0aGVcbiAgICogbWVkaWEgaXMgYmVpbmcgaW5pdGlhbGl6ZWQuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLWluaXRpYWxpemVkJykgaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgYGN4LW1lZGlhYCBjb21wb25lbnQgaGFzIGEgYGlzLWxvYWRpbmdgIGNsYXNzIGFzIGxvbmcgYXMgdGhlXG4gICAqIG1lZGlhIGlzIGxvYWRlZC4gV2VobiB0aGUgbWVkaWEgaXMgbG9hZGVkLCB0aGUgYGlzLWluaXRpYWxpemVkYCBjbGFzc1xuICAgKiBpcyBhZGRlZC5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXMtbG9hZGluZycpIGlzTG9hZGluZyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlcmUncyBubyBtZWRpYSBwcm92aWRlZCBmb3IgdGhlIGNvbnRlbnQsIG9yIGluIGNhc2UgYW4gZXJyb3JcbiAgICogaGFwcGVuZWQgZHVyaW5nIGxvYWRpbmcsIHdlIGFkZCB0aGUgYGlzLW1pc3NpbmdgIGNsYXNzLiBWaXN1YWwgZWZmZWN0c1xuICAgKiBjYW4gYmUgY29udHJvbGxlZCBieSBDU1MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLW1pc3NpbmcnKSBpc01pc3NpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbWVkaWFTZXJ2aWNlOiBNZWRpYVNlcnZpY2UpIHt9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBgTWVkaWFgIG9iamVjdFxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5tZWRpYSA9IHRoaXMubWVkaWFTZXJ2aWNlLmdldE1lZGlhKFxuICAgICAgdGhpcy5jb250YWluZXIsXG4gICAgICB0aGlzLmZvcm1hdCxcbiAgICAgIHRoaXMuYWx0XG4gICAgKTtcbiAgICBpZiAoIXRoaXMubWVkaWEuc3JjKSB7XG4gICAgICB0aGlzLmhhbmRsZU1pc3NpbmcoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBoYW5kbGVyIGlzIGNhbGxlZCBmcm9tIHRoZSBVSSB3aGVuIHRoZSBpbWFnZSBpcyBsb2FkZWQuXG4gICAqL1xuICBsb2FkSGFuZGxlcigpOiB2b2lkIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5pc01pc3NpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmxvYWRlZC5lbWl0KHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW5ldmVyIGFuIGVycm9yIGhhcHBlbnMgZHVyaW5nIGxvYWQsIHdlIG1hcmsgdGhlIGNvbXBvbmVudFxuICAgKiB3aXRoIGNzcyBjbGFzc2VzIHRvIGhhdmUgYSBtaXNzaW5nIG1lZGlhLlxuICAgKi9cbiAgZXJyb3JIYW5kbGVyKCk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlTWlzc2luZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVNaXNzaW5nKCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLmlzTWlzc2luZyA9IHRydWU7XG4gICAgdGhpcy5sb2FkZWQuZW1pdChmYWxzZSk7XG4gIH1cbn1cbiJdfQ==