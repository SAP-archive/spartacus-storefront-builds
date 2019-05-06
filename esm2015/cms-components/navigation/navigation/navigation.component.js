/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavigationComponentService } from './navigation.component.service';
export class NavigationComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.dropdownMode = 'list';
        this.node$ = this.service.getNodes();
    }
}
NavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-navigation',
                template: "<cx-navigation-ui [node]=\"node$ | async\" [dropdownMode]=\"dropdownMode\">\n</cx-navigation-ui>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NavigationComponent.ctorParameters = () => [
    { type: NavigationComponentService }
];
NavigationComponent.propDecorators = {
    dropdownMode: [{ type: Input }],
    node: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NavigationComponent.prototype.dropdownMode;
    /** @type {?} */
    NavigationComponent.prototype.node;
    /** @type {?} */
    NavigationComponent.prototype.node$;
    /** @type {?} */
    NavigationComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBTzVFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFNOUIsWUFBbUIsT0FBbUM7UUFBbkMsWUFBTyxHQUFQLE9BQU8sQ0FBNEI7UUFMN0MsaUJBQVksR0FBRyxNQUFNLENBQUM7UUFNN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsOEdBQTBDO2dCQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQU5RLDBCQUEwQjs7OzJCQVFoQyxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETiwyQ0FBK0I7O0lBQy9CLG1DQUE4Qjs7SUFFOUIsb0NBQWtDOztJQUV0QixzQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbk5vZGUgfSBmcm9tICcuL25hdmlnYXRpb24tbm9kZS5tb2RlbCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vbmF2aWdhdGlvbi5jb21wb25lbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW5hdmlnYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZHJvcGRvd25Nb2RlID0gJ2xpc3QnO1xuICBASW5wdXQoKSBub2RlOiBOYXZpZ2F0aW9uTm9kZTtcblxuICBub2RlJDogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uTm9kZT47XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IE5hdmlnYXRpb25Db21wb25lbnRTZXJ2aWNlKSB7XG4gICAgdGhpcy5ub2RlJCA9IHRoaXMuc2VydmljZS5nZXROb2RlcygpO1xuICB9XG59XG4iXX0=