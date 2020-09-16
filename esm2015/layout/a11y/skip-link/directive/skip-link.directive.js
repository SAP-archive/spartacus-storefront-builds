import { Directive, ElementRef, Input } from '@angular/core';
import { SkipLinkService } from '../service/skip-link.service';
export class SkipLinkDirective {
    constructor(elementRef, skipLinkService) {
        this.elementRef = elementRef;
        this.skipLinkService = skipLinkService;
    }
    ngOnInit() {
        this.skipLinkService.add(this.cxSkipLink, this.elementRef.nativeElement);
    }
    ngOnDestroy() {
        this.skipLinkService.remove(this.cxSkipLink);
    }
}
SkipLinkDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxSkipLink]',
            },] }
];
SkipLinkDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: SkipLinkService }
];
SkipLinkDirective.propDecorators = {
    cxSkipLink: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2xheW91dC9hMTF5L3NraXAtbGluay9kaXJlY3RpdmUvc2tpcC1saW5rLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUsvRCxNQUFNLE9BQU8saUJBQWlCO0lBRzVCLFlBQ1ksVUFBbUMsRUFDbkMsZUFBZ0M7UUFEaEMsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3pDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7YUFDekI7OztZQUxtQixVQUFVO1lBQ3JCLGVBQWU7Ozt5QkFNckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTa2lwTGlua1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3NraXAtbGluay5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4U2tpcExpbmtdJyxcbn0pXG5leHBvcnQgY2xhc3MgU2tpcExpbmtEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGN4U2tpcExpbms6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJvdGVjdGVkIHNraXBMaW5rU2VydmljZTogU2tpcExpbmtTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNraXBMaW5rU2VydmljZS5hZGQodGhpcy5jeFNraXBMaW5rLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnNraXBMaW5rU2VydmljZS5yZW1vdmUodGhpcy5jeFNraXBMaW5rKTtcbiAgfVxufVxuIl19