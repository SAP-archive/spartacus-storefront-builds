import { __decorate } from "tslib";
import { Directive, Input, OnDestroy, OnInit, ElementRef } from '@angular/core';
import { SkipLinkService } from '../service/skip-link.service';
var SkipLinkDirective = /** @class */ (function () {
    function SkipLinkDirective(elRef, skipLinkService) {
        this.elRef = elRef;
        this.skipLinkService = skipLinkService;
    }
    SkipLinkDirective.prototype.ngOnInit = function () {
        this.skipLinkService.add(this.cxSkipLink, this.elRef.nativeElement);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L3NraXAtbGluay9kaXJlY3RpdmUvc2tpcC1saW5rLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSy9EO0lBSUUsMkJBQ1UsS0FBOEIsRUFDOUIsZUFBZ0M7UUFEaEMsVUFBSyxHQUFMLEtBQUssQ0FBeUI7UUFDOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3ZDLENBQUM7SUFFSixvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2dCQVZnQixVQUFVO2dCQUNBLGVBQWU7O0lBSjFDO1FBREMsS0FBSyxFQUFFO3lEQUNXO0lBRlIsaUJBQWlCO1FBSDdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1NBQ3pCLENBQUM7T0FDVyxpQkFBaUIsQ0FnQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWhCWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2tpcExpbmtTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9za2lwLWxpbmsuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeFNraXBMaW5rXScsXG59KVxuZXhwb3J0IGNsYXNzIFNraXBMaW5rRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBjeFNraXBMaW5rOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBza2lwTGlua1NlcnZpY2U6IFNraXBMaW5rU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5za2lwTGlua1NlcnZpY2UuYWRkKHRoaXMuY3hTa2lwTGluaywgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc2tpcExpbmtTZXJ2aWNlLnJlbW92ZSh0aGlzLmN4U2tpcExpbmspO1xuICB9XG59XG4iXX0=