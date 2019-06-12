/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { NavigationService } from '../navigation/navigation.service';
var FooterNavigationComponent = /** @class */ (function () {
    function FooterNavigationComponent(componentData, service) {
        this.componentData = componentData;
        this.service = service;
        this.node$ = this.service.getNavigationNode(this.componentData.data$);
        this.styleClass$ = this.componentData.data$.pipe(map((/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return d.styleClass; })));
        this.data$ = this.componentData.data$;
    }
    FooterNavigationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-footer-navigation',
                    template: "<cx-navigation-ui\n  [node]=\"node$ | async\"\n  [flyout]=\"false\"\n  [ngClass]=\"styleClass$ | async\"\n></cx-navigation-ui>\n\n<div class=\"notice\" *ngIf=\"(data$ | async) as data\">\n  {{ data.notice }}\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    FooterNavigationComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: NavigationService }
    ]; };
    return FooterNavigationComponent;
}());
export { FooterNavigationComponent };
if (false) {
    /** @type {?} */
    FooterNavigationComponent.prototype.node$;
    /** @type {?} */
    FooterNavigationComponent.prototype.styleClass$;
    /** @type {?} */
    FooterNavigationComponent.prototype.data$;
    /**
     * @type {?}
     * @protected
     */
    FooterNavigationComponent.prototype.componentData;
    /**
     * @type {?}
     * @protected
     */
    FooterNavigationComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXhGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFO0lBZ0JFLG1DQUNZLGFBQXVELEVBQ3ZELE9BQTBCO1FBRDFCLGtCQUFhLEdBQWIsYUFBYSxDQUEwQztRQUN2RCxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQVp0QyxVQUFLLEdBQStCLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQ2hFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUN6QixDQUFDO1FBRUYsZ0JBQVcsR0FBdUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUM3RCxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsVUFBVSxFQUFaLENBQVksRUFBQyxDQUN2QixDQUFDO1FBRUYsVUFBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBSzlCLENBQUM7O2dCQW5CTCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMscU9BQWlEO29CQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBUlEsZ0JBQWdCO2dCQUVoQixpQkFBaUI7O0lBc0IxQixnQ0FBQztDQUFBLEFBcEJELElBb0JDO1NBZlkseUJBQXlCOzs7SUFDcEMsMENBRUU7O0lBRUYsZ0RBRUU7O0lBRUYsMENBQWlDOzs7OztJQUcvQixrREFBaUU7Ozs7O0lBQ2pFLDRDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc05hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbk5vZGUgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbm9kZS5tb2RlbCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtZm9vdGVyLW5hdmlnYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9vdGVyLW5hdmlnYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyTmF2aWdhdGlvbkNvbXBvbmVudCB7XG4gIG5vZGUkOiBPYnNlcnZhYmxlPE5hdmlnYXRpb25Ob2RlPiA9IHRoaXMuc2VydmljZS5nZXROYXZpZ2F0aW9uTm9kZShcbiAgICB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSRcbiAgKTtcblxuICBzdHlsZUNsYXNzJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5jb21wb25lbnREYXRhLmRhdGEkLnBpcGUoXG4gICAgbWFwKGQgPT4gZC5zdHlsZUNsYXNzKVxuICApO1xuXG4gIGRhdGEkID0gdGhpcy5jb21wb25lbnREYXRhLmRhdGEkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENtc05hdmlnYXRpb25Db21wb25lbnQ+LFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZVxuICApIHt9XG59XG4iXX0=