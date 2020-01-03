/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef } from '@angular/core';
import { SkipLinkService } from '../service/skip-link.service';
export class SkipLinkDirective {
    /**
     * @param {?} elRef
     * @param {?} skipLinkService
     */
    constructor(elRef, skipLinkService) {
        this.elRef = elRef;
        this.skipLinkService = skipLinkService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.skipLinkService.add(this.cxSkipLink, this.elRef.nativeElement);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.skipLinkService.remove(this.cxSkipLink);
    }
}
SkipLinkDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxSkipLink]',
            },] }
];
/** @nocollapse */
SkipLinkDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: SkipLinkService }
];
SkipLinkDirective.propDecorators = {
    cxSkipLink: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SkipLinkDirective.prototype.cxSkipLink;
    /**
     * @type {?}
     * @private
     */
    SkipLinkDirective.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    SkipLinkDirective.prototype.skipLinkService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L3NraXAtbGluay9kaXJlY3RpdmUvc2tpcC1saW5rLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFLL0QsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFJNUIsWUFDVSxLQUE4QixFQUM5QixlQUFnQztRQURoQyxVQUFLLEdBQUwsS0FBSyxDQUF5QjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDdkMsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7OztZQUw2QyxVQUFVO1lBQy9DLGVBQWU7Ozt5QkFNckIsS0FBSzs7OztJQUFOLHVDQUNtQjs7Ozs7SUFHakIsa0NBQXNDOzs7OztJQUN0Qyw0Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2tpcExpbmtTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9za2lwLWxpbmsuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeFNraXBMaW5rXScsXG59KVxuZXhwb3J0IGNsYXNzIFNraXBMaW5rRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBjeFNraXBMaW5rOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBza2lwTGlua1NlcnZpY2U6IFNraXBMaW5rU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5za2lwTGlua1NlcnZpY2UuYWRkKHRoaXMuY3hTa2lwTGluaywgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc2tpcExpbmtTZXJ2aWNlLnJlbW92ZSh0aGlzLmN4U2tpcExpbmspO1xuICB9XG59XG4iXX0=