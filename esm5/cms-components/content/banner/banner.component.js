/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
var BannerComponent = /** @class */ (function () {
    function BannerComponent(component) {
        this.component = component;
    }
    BannerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-banner',
                    template: "<ng-container *ngIf=\"(component.data$ | async) as data\">\n  <p *ngIf=\"data.headLine\" [innerHTML]=\"data.headLine\"></p>\n  <cx-generic-link\n    [url]=\"data.urlLink\"\n    [target]=\"data.external ? '_blank' : null\"\n    [title]=\"data.media?.altText\"\n  >\n    <cx-media [container]=\"data.media\"></cx-media>\n  </cx-generic-link>\n\n  <p *ngIf=\"data.content\" [innerHTML]=\"data.content\"></p>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    BannerComponent.ctorParameters = function () { return [
        { type: CmsComponentData }
    ]; };
    return BannerComponent;
}());
export { BannerComponent };
if (false) {
    /** @type {?} */
    BannerComponent.prototype.component;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NvbnRlbnQvYmFubmVyL2Jhbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFeEY7SUFNRSx5QkFBbUIsU0FBK0M7UUFBL0MsY0FBUyxHQUFULFNBQVMsQ0FBc0M7SUFBRyxDQUFDOztnQkFOdkUsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixtYkFBc0M7b0JBQ3RDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFOUSxnQkFBZ0I7O0lBU3pCLHNCQUFDO0NBQUEsQUFQRCxJQU9DO1NBRlksZUFBZTs7O0lBQ2Qsb0NBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQmFubmVyQ29tcG9uZW50IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYmFubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jhbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBCYW5uZXJDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29tcG9uZW50OiBDbXNDb21wb25lbnREYXRhPENtc0Jhbm5lckNvbXBvbmVudD4pIHt9XG59XG4iXX0=