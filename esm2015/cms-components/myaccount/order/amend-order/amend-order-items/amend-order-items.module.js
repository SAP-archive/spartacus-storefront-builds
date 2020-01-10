/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { I18nModule, FeaturesConfigModule } from '@spartacus/core';
import { ItemCounterModule, MediaModule } from '../../../../../shared/index';
import { CancelOrReturnItemsComponent } from './amend-order-items.component';
export class AmendOrderItemsModule {
}
AmendOrderItemsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    I18nModule,
                    MediaModule,
                    ItemCounterModule,
                    FeaturesConfigModule,
                ],
                declarations: [CancelOrReturnItemsComponent],
                exports: [CancelOrReturnItemsComponent],
                entryComponents: [CancelOrReturnItemsComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXItaXRlbXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL2FtZW5kLW9yZGVyL2FtZW5kLW9yZGVyLWl0ZW1zL2FtZW5kLW9yZGVyLWl0ZW1zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQWU3RSxNQUFNLE9BQU8scUJBQXFCOzs7WUFiakMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsVUFBVTtvQkFDVixXQUFXO29CQUNYLGlCQUFpQjtvQkFDakIsb0JBQW9CO2lCQUNyQjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztnQkFDNUMsT0FBTyxFQUFFLENBQUMsNEJBQTRCLENBQUM7Z0JBQ3ZDLGVBQWUsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSTE4bk1vZHVsZSwgRmVhdHVyZXNDb25maWdNb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSXRlbUNvdW50ZXJNb2R1bGUsIE1lZGlhTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IENhbmNlbE9yUmV0dXJuSXRlbXNDb21wb25lbnQgfSBmcm9tICcuL2FtZW5kLW9yZGVyLWl0ZW1zLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIE1lZGlhTW9kdWxlLFxuICAgIEl0ZW1Db3VudGVyTW9kdWxlLFxuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDYW5jZWxPclJldHVybkl0ZW1zQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NhbmNlbE9yUmV0dXJuSXRlbXNDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDYW5jZWxPclJldHVybkl0ZW1zQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQW1lbmRPcmRlckl0ZW1zTW9kdWxlIHt9XG4iXX0=