/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef } from '@angular/core';
import { SkipLinkService } from '../service/skip-link.service';
var SkipLinkDirective = /** @class */ (function () {
    function SkipLinkDirective(elRef, skipLinkService) {
        this.elRef = elRef;
        this.skipLinkService = skipLinkService;
    }
    /**
     * @return {?}
     */
    SkipLinkDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.skipLinkService.add(this.cxSkipLink, this.elRef.nativeElement);
    };
    /**
     * @return {?}
     */
    SkipLinkDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.skipLinkService.remove(this.cxSkipLink);
    };
    SkipLinkDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cxSkipLink]',
                },] }
    ];
    /** @nocollapse */
    SkipLinkDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: SkipLinkService }
    ]; };
    SkipLinkDirective.propDecorators = {
        cxSkipLink: [{ type: Input }]
    };
    return SkipLinkDirective;
}());
export { SkipLinkDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L3NraXAtbGluay9kaXJlY3RpdmUvc2tpcC1saW5rLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFL0Q7SUFPRSwyQkFDVSxLQUE4QixFQUM5QixlQUFnQztRQURoQyxVQUFLLEdBQUwsS0FBSyxDQUF5QjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDdkMsQ0FBQzs7OztJQUVKLG9DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQUw2QyxVQUFVO2dCQUMvQyxlQUFlOzs7NkJBTXJCLEtBQUs7O0lBZVIsd0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWhCWSxpQkFBaUI7OztJQUM1Qix1Q0FDbUI7Ozs7O0lBR2pCLGtDQUFzQzs7Ozs7SUFDdEMsNENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNraXBMaW5rU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2Uvc2tpcC1saW5rLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hTa2lwTGlua10nLFxufSlcbmV4cG9ydCBjbGFzcyBTa2lwTGlua0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgY3hTa2lwTGluazogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgc2tpcExpbmtTZXJ2aWNlOiBTa2lwTGlua1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2tpcExpbmtTZXJ2aWNlLmFkZCh0aGlzLmN4U2tpcExpbmssIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnNraXBMaW5rU2VydmljZS5yZW1vdmUodGhpcy5jeFNraXBMaW5rKTtcbiAgfVxufVxuIl19