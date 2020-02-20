import { __decorate } from "tslib";
import { Directive, Input, OnDestroy, OnInit, ElementRef } from '@angular/core';
import { SkipLinkService } from '../service/skip-link.service';
let SkipLinkDirective = class SkipLinkDirective {
    constructor(elRef, skipLinkService) {
        this.elRef = elRef;
        this.skipLinkService = skipLinkService;
    }
    ngOnInit() {
        this.skipLinkService.add(this.cxSkipLink, this.elRef.nativeElement);
    }
    ngOnDestroy() {
        this.skipLinkService.remove(this.cxSkipLink);
    }
};
SkipLinkDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: SkipLinkService }
];
__decorate([
    Input()
], SkipLinkDirective.prototype, "cxSkipLink", void 0);
SkipLinkDirective = __decorate([
    Directive({
        selector: '[cxSkipLink]',
    })
], SkipLinkDirective);
export { SkipLinkDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L3NraXAtbGluay9kaXJlY3RpdmUvc2tpcC1saW5rLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSy9ELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBSTVCLFlBQ1UsS0FBOEIsRUFDOUIsZUFBZ0M7UUFEaEMsVUFBSyxHQUFMLEtBQUssQ0FBeUI7UUFDOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3ZDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRixDQUFBOztZQVhrQixVQUFVO1lBQ0EsZUFBZTs7QUFKMUM7SUFEQyxLQUFLLEVBQUU7cURBQ1c7QUFGUixpQkFBaUI7SUFIN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7S0FDekIsQ0FBQztHQUNXLGlCQUFpQixDQWdCN0I7U0FoQlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNraXBMaW5rU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2Uvc2tpcC1saW5rLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hTa2lwTGlua10nLFxufSlcbmV4cG9ydCBjbGFzcyBTa2lwTGlua0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgY3hTa2lwTGluazogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgc2tpcExpbmtTZXJ2aWNlOiBTa2lwTGlua1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2tpcExpbmtTZXJ2aWNlLmFkZCh0aGlzLmN4U2tpcExpbmssIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnNraXBMaW5rU2VydmljZS5yZW1vdmUodGhpcy5jeFNraXBMaW5rKTtcbiAgfVxufVxuIl19