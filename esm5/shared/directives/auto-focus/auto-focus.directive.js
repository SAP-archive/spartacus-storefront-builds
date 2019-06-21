/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
var AutoFocusDirective = /** @class */ (function () {
    function AutoFocusDirective(hostElement) {
        this.hostElement = hostElement;
    }
    /**
     * @return {?}
     */
    AutoFocusDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.hostElement.nativeElement.focus();
    };
    AutoFocusDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cxAutoFocus]',
                },] }
    ];
    /** @nocollapse */
    AutoFocusDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return AutoFocusDirective;
}());
export { AutoFocusDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AutoFocusDirective.prototype.hostElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvZGlyZWN0aXZlcy9hdXRvLWZvY3VzL2F1dG8tZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckU7SUFJRSw0QkFBb0IsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7SUFBRyxDQUFDOzs7O0lBRS9DLDRDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pDLENBQUM7O2dCQVJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7Ozs7Z0JBSmtDLFVBQVU7O0lBVzdDLHlCQUFDO0NBQUEsQUFURCxJQVNDO1NBTlksa0JBQWtCOzs7Ozs7SUFDakIseUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeEF1dG9Gb2N1c10nLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvRm9jdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0RWxlbWVudDogRWxlbWVudFJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cbiJdfQ==