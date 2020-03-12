import { __decorate } from "tslib";
import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { SkipLinkService } from '../service/skip-link.service';
var SkipLinkDirective = /** @class */ (function () {
    function SkipLinkDirective(elementRef, skipLinkService) {
        this.elementRef = elementRef;
        this.skipLinkService = skipLinkService;
    }
    SkipLinkDirective.prototype.ngOnInit = function () {
        this.skipLinkService.add(this.cxSkipLink, this.elementRef.nativeElement);
    };
    SkipLinkDirective.prototype.ngOnDestroy = function () {
        this.skipLinkService.remove(this.cxSkipLink);
    };
    SkipLinkDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: SkipLinkService }
    ]; };
    __decorate([
        Input()
    ], SkipLinkDirective.prototype, "cxSkipLink", void 0);
    SkipLinkDirective = __decorate([
        Directive({
            selector: '[cxSkipLink]',
        })
    ], SkipLinkDirective);
    return SkipLinkDirective;
}());
export { SkipLinkDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L3NraXAtbGluay9kaXJlY3RpdmUvc2tpcC1saW5rLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSy9EO0lBR0UsMkJBQ1ksVUFBbUMsRUFDbkMsZUFBZ0M7UUFEaEMsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3pDLENBQUM7SUFFSixvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2dCQVZ1QixVQUFVO2dCQUNMLGVBQWU7O0lBSm5DO1FBQVIsS0FBSyxFQUFFO3lEQUFvQjtJQURqQixpQkFBaUI7UUFIN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7U0FDekIsQ0FBQztPQUNXLGlCQUFpQixDQWU3QjtJQUFELHdCQUFDO0NBQUEsQUFmRCxJQWVDO1NBZlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNraXBMaW5rU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2Uvc2tpcC1saW5rLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hTa2lwTGlua10nLFxufSlcbmV4cG9ydCBjbGFzcyBTa2lwTGlua0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgY3hTa2lwTGluazogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgc2tpcExpbmtTZXJ2aWNlOiBTa2lwTGlua1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2tpcExpbmtTZXJ2aWNlLmFkZCh0aGlzLmN4U2tpcExpbmssIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc2tpcExpbmtTZXJ2aWNlLnJlbW92ZSh0aGlzLmN4U2tpcExpbmspO1xuICB9XG59XG4iXX0=