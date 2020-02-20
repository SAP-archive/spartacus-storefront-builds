import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
var LinkComponent = /** @class */ (function () {
    function LinkComponent(component) {
        this.component = component;
    }
    LinkComponent.ctorParameters = function () { return [
        { type: CmsComponentData }
    ]; };
    LinkComponent = __decorate([
        Component({
            selector: 'cx-link',
            template: "<cx-generic-link\n  *ngIf=\"component.data$ | async as data\"\n  [url]=\"data.url\"\n  [style]=\"data.styleAttributes\"\n  >{{ data.linkName }}</cx-generic-link\n>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], LinkComponent);
    return LinkComponent;
}());
export { LinkComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jb250ZW50L2xpbmsvbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFPeEY7SUFDRSx1QkFBbUIsU0FBNkM7UUFBN0MsY0FBUyxHQUFULFNBQVMsQ0FBb0M7SUFBRyxDQUFDOztnQkFBdEMsZ0JBQWdCOztJQURuQyxhQUFhO1FBTHpCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLGlMQUFvQztZQUNwQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csYUFBYSxDQUV6QjtJQUFELG9CQUFDO0NBQUEsQUFGRCxJQUVDO1NBRlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0xpbmtDb21wb25lbnQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpbmsuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTGlua0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb21wb25lbnQ6IENtc0NvbXBvbmVudERhdGE8Q21zTGlua0NvbXBvbmVudD4pIHt9XG59XG4iXX0=