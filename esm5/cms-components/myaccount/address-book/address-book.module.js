import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuard, ConfigModule, I18nModule, UserAddressService, } from '@spartacus/core';
import { CardModule } from '../../../shared/components/card/card.module';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { AddressFormModule } from '../../checkout/components/shipping-address/address-form/address-form.module';
import { AddressBookComponent } from './address-book.component';
import { AddressBookComponentService } from './address-book.component.service';
import { AddressCardComponent } from './address-card/address-card.component';
var AddressBookModule = /** @class */ (function () {
    function AddressBookModule() {
    }
    AddressBookModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        AccountAddressBookComponent: {
                            component: AddressBookComponent,
                            providers: [
                                {
                                    provide: AddressBookComponentService,
                                    useClass: AddressBookComponentService,
                                    deps: [UserAddressService],
                                },
                            ],
                            guards: [AuthGuard],
                        },
                    },
                }),
                CardModule,
                AddressFormModule,
                SpinnerModule,
                I18nModule,
            ],
            declarations: [AddressBookComponent, AddressCardComponent],
            exports: [AddressBookComponent, AddressCardComponent],
            providers: [UserAddressService, AddressBookComponentService],
            entryComponents: [AddressBookComponent],
        })
    ], AddressBookModule);
    return AddressBookModule;
}());
export { AddressBookModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9hZGRyZXNzLWJvb2svYWRkcmVzcy1ib29rLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUNWLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDbEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDaEgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUE4QjdFO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixpQkFBaUI7UUE1QjdCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFlBQVksQ0FBQyxVQUFVLENBQVk7b0JBQ2pDLGFBQWEsRUFBRTt3QkFDYiwyQkFBMkIsRUFBRTs0QkFDM0IsU0FBUyxFQUFFLG9CQUFvQjs0QkFDL0IsU0FBUyxFQUFFO2dDQUNUO29DQUNFLE9BQU8sRUFBRSwyQkFBMkI7b0NBQ3BDLFFBQVEsRUFBRSwyQkFBMkI7b0NBQ3JDLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDO2lDQUMzQjs2QkFDRjs0QkFDRCxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUM7eUJBQ3BCO3FCQUNGO2lCQUNGLENBQUM7Z0JBQ0YsVUFBVTtnQkFDVixpQkFBaUI7Z0JBQ2pCLGFBQWE7Z0JBQ2IsVUFBVTthQUNYO1lBQ0QsWUFBWSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsb0JBQW9CLENBQUM7WUFDMUQsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsb0JBQW9CLENBQUM7WUFDckQsU0FBUyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsMkJBQTJCLENBQUM7WUFDNUQsZUFBZSxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDeEMsQ0FBQztPQUNXLGlCQUFpQixDQUFHO0lBQUQsd0JBQUM7Q0FBQSxBQUFqQyxJQUFpQztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEF1dGhHdWFyZCxcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFVzZXJBZGRyZXNzU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IEFkZHJlc3NGb3JtTW9kdWxlIH0gZnJvbSAnLi4vLi4vY2hlY2tvdXQvY29tcG9uZW50cy9zaGlwcGluZy1hZGRyZXNzL2FkZHJlc3MtZm9ybS9hZGRyZXNzLWZvcm0ubW9kdWxlJztcbmltcG9ydCB7IEFkZHJlc3NCb29rQ29tcG9uZW50IH0gZnJvbSAnLi9hZGRyZXNzLWJvb2suY29tcG9uZW50JztcbmltcG9ydCB7IEFkZHJlc3NCb29rQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vYWRkcmVzcy1ib29rLmNvbXBvbmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEFkZHJlc3NDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9hZGRyZXNzLWNhcmQvYWRkcmVzcy1jYXJkLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIEFjY291bnRBZGRyZXNzQm9va0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQWRkcmVzc0Jvb2tDb21wb25lbnQsXG4gICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHByb3ZpZGU6IEFkZHJlc3NCb29rQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgdXNlQ2xhc3M6IEFkZHJlc3NCb29rQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgZGVwczogW1VzZXJBZGRyZXNzU2VydmljZV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBBZGRyZXNzRm9ybU1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FkZHJlc3NCb29rQ29tcG9uZW50LCBBZGRyZXNzQ2FyZENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBZGRyZXNzQm9va0NvbXBvbmVudCwgQWRkcmVzc0NhcmRDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtVc2VyQWRkcmVzc1NlcnZpY2UsIEFkZHJlc3NCb29rQ29tcG9uZW50U2VydmljZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW0FkZHJlc3NCb29rQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQWRkcmVzc0Jvb2tNb2R1bGUge31cbiJdfQ==