/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuard, ConfigModule, I18nModule, UserService, } from '@spartacus/core';
import { AddressFormModule } from '../../../lib/checkout/components/shipping-address/address-form/address-form.module';
import { CardModule } from '../../../shared/components/card/card.module';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { AddressBookComponent } from './address-book.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { AddressBookComponentService } from './address-book.component.service';
export class AddressBookModule {
}
AddressBookModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            AccountAddressBookComponent: {
                                selector: 'cx-address-book',
                                providers: [
                                    {
                                        provide: AddressBookComponentService,
                                        useClass: AddressBookComponentService,
                                        deps: [UserService],
                                    },
                                ],
                                guards: [AuthGuard],
                            },
                        },
                    }))),
                    CardModule,
                    AddressFormModule,
                    SpinnerModule,
                    I18nModule,
                ],
                declarations: [AddressBookComponent, AddressCardComponent],
                exports: [AddressBookComponent, AddressCardComponent],
                providers: [UserService, AddressBookComponentService],
                entryComponents: [AddressBookComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9hZGRyZXNzLWJvb2svYWRkcmVzcy1ib29rLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsR0FDWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9GQUFvRixDQUFDO0FBQ3ZILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUE4Qi9FLE1BQU0sT0FBTyxpQkFBaUI7OztZQTVCN0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7d0JBQ2pDLGFBQWEsRUFBRTs0QkFDYiwyQkFBMkIsRUFBRTtnQ0FDM0IsUUFBUSxFQUFFLGlCQUFpQjtnQ0FDM0IsU0FBUyxFQUFFO29DQUNUO3dDQUNFLE9BQU8sRUFBRSwyQkFBMkI7d0NBQ3BDLFFBQVEsRUFBRSwyQkFBMkI7d0NBQ3JDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQztxQ0FDcEI7aUNBQ0Y7Z0NBQ0QsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDOzZCQUNwQjt5QkFDRjtxQkFDRixFQUFBLENBQUM7b0JBQ0YsVUFBVTtvQkFDVixpQkFBaUI7b0JBQ2pCLGFBQWE7b0JBQ2IsVUFBVTtpQkFDWDtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxvQkFBb0IsQ0FBQztnQkFDMUQsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsb0JBQW9CLENBQUM7Z0JBQ3JELFNBQVMsRUFBRSxDQUFDLFdBQVcsRUFBRSwyQkFBMkIsQ0FBQztnQkFDckQsZUFBZSxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgVXNlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBBZGRyZXNzRm9ybU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9jaGVja291dC9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3MvYWRkcmVzcy1mb3JtL2FkZHJlc3MtZm9ybS5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgQWRkcmVzc0Jvb2tDb21wb25lbnQgfSBmcm9tICcuL2FkZHJlc3MtYm9vay5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkcmVzc0NhcmRDb21wb25lbnQgfSBmcm9tICcuL2FkZHJlc3MtY2FyZC9hZGRyZXNzLWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZHJlc3NCb29rQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vYWRkcmVzcy1ib29rLmNvbXBvbmVudC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQWNjb3VudEFkZHJlc3NCb29rQ29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1hZGRyZXNzLWJvb2snLFxuICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm92aWRlOiBBZGRyZXNzQm9va0NvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUNsYXNzOiBBZGRyZXNzQm9va0NvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIGRlcHM6IFtVc2VyU2VydmljZV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBBZGRyZXNzRm9ybU1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FkZHJlc3NCb29rQ29tcG9uZW50LCBBZGRyZXNzQ2FyZENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBZGRyZXNzQm9va0NvbXBvbmVudCwgQWRkcmVzc0NhcmRDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZSwgQWRkcmVzc0Jvb2tDb21wb25lbnRTZXJ2aWNlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbQWRkcmVzc0Jvb2tDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRyZXNzQm9va01vZHVsZSB7fVxuIl19