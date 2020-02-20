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
let AddressBookModule = class AddressBookModule {
};
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
export { AddressBookModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9hZGRyZXNzLWJvb2svYWRkcmVzcy1ib29rLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUNWLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDbEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDaEgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUE4QjdFLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0NBQUcsQ0FBQTtBQUFwQixpQkFBaUI7SUE1QjdCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixZQUFZLENBQUMsVUFBVSxDQUFZO2dCQUNqQyxhQUFhLEVBQUU7b0JBQ2IsMkJBQTJCLEVBQUU7d0JBQzNCLFNBQVMsRUFBRSxvQkFBb0I7d0JBQy9CLFNBQVMsRUFBRTs0QkFDVDtnQ0FDRSxPQUFPLEVBQUUsMkJBQTJCO2dDQUNwQyxRQUFRLEVBQUUsMkJBQTJCO2dDQUNyQyxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzs2QkFDM0I7eUJBQ0Y7d0JBQ0QsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO3FCQUNwQjtpQkFDRjthQUNGLENBQUM7WUFDRixVQUFVO1lBQ1YsaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYixVQUFVO1NBQ1g7UUFDRCxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxvQkFBb0IsQ0FBQztRQUMxRCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxvQkFBb0IsQ0FBQztRQUNyRCxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSwyQkFBMkIsQ0FBQztRQUM1RCxlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztLQUN4QyxDQUFDO0dBQ1csaUJBQWlCLENBQUc7U0FBcEIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBdXRoR3VhcmQsXG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBVc2VyQWRkcmVzc1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBBZGRyZXNzRm9ybU1vZHVsZSB9IGZyb20gJy4uLy4uL2NoZWNrb3V0L2NvbXBvbmVudHMvc2hpcHBpbmctYWRkcmVzcy9hZGRyZXNzLWZvcm0vYWRkcmVzcy1mb3JtLm1vZHVsZSc7XG5pbXBvcnQgeyBBZGRyZXNzQm9va0NvbXBvbmVudCB9IGZyb20gJy4vYWRkcmVzcy1ib29rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGRyZXNzQm9va0NvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL2FkZHJlc3MtYm9vay5jb21wb25lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBZGRyZXNzQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vYWRkcmVzcy1jYXJkL2FkZHJlc3MtY2FyZC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBBY2NvdW50QWRkcmVzc0Jvb2tDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IEFkZHJlc3NCb29rQ29tcG9uZW50LFxuICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm92aWRlOiBBZGRyZXNzQm9va0NvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUNsYXNzOiBBZGRyZXNzQm9va0NvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIGRlcHM6IFtVc2VyQWRkcmVzc1NlcnZpY2VdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGd1YXJkczogW0F1dGhHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIENhcmRNb2R1bGUsXG4gICAgQWRkcmVzc0Zvcm1Nb2R1bGUsXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtBZGRyZXNzQm9va0NvbXBvbmVudCwgQWRkcmVzc0NhcmRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQWRkcmVzc0Jvb2tDb21wb25lbnQsIEFkZHJlc3NDYXJkQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbVXNlckFkZHJlc3NTZXJ2aWNlLCBBZGRyZXNzQm9va0NvbXBvbmVudFNlcnZpY2VdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtBZGRyZXNzQm9va0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NCb29rTW9kdWxlIHt9XG4iXX0=