/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule, I18nModule, UserService, } from '@spartacus/core';
import { CardModule } from '../../../shared/components/card/card.module';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { PaymentMethodsComponent } from './payment-methods.component';
var PaymentMethodsModule = /** @class */ (function () {
    function PaymentMethodsModule() {
    }
    PaymentMethodsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        CardModule,
                        SpinnerModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                AccountPaymentDetailsComponent: { selector: 'cx-payment-methods' },
                            },
                        }))),
                        I18nModule,
                    ],
                    providers: [UserService],
                    declarations: [PaymentMethodsComponent],
                    exports: [PaymentMethodsComponent],
                    entryComponents: [PaymentMethodsComponent],
                },] }
    ];
    return PaymentMethodsModule;
}());
export { PaymentMethodsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9wYXltZW50LW1ldGhvZHMvcGF5bWVudC1tZXRob2RzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUVMLFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNsRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RTtJQUFBO0lBaUJtQyxDQUFDOztnQkFqQm5DLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixVQUFVO3dCQUNWLGFBQWE7d0JBQ2IsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLDhCQUE4QixFQUFFLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFOzZCQUNuRTt5QkFDRixFQUFBLENBQUM7d0JBQ0YsVUFBVTtxQkFDWDtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7b0JBQ3hCLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUN2QyxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDbEMsZUFBZSxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQzNDOztJQUNrQywyQkFBQztDQUFBLEFBakJwQyxJQWlCb0M7U0FBdkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgVXNlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBQYXltZW50TWV0aG9kc0NvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1tZXRob2RzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBBY2NvdW50UGF5bWVudERldGFpbHNDb21wb25lbnQ6IHsgc2VsZWN0b3I6ICdjeC1wYXltZW50LW1ldGhvZHMnIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgZGVjbGFyYXRpb25zOiBbUGF5bWVudE1ldGhvZHNDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUGF5bWVudE1ldGhvZHNDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtQYXltZW50TWV0aG9kc0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRNZXRob2RzTW9kdWxlIHt9XG4iXX0=