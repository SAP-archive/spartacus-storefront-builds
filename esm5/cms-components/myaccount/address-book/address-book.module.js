/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuard, ConfigModule, I18nModule, UserService, } from '@spartacus/core';
import { CardModule } from '../../../shared/components/card/card.module';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { AddressFormModule } from '../../checkout/components/shipping-address/address-form/address-form.module';
import { AddressBookComponent } from './address-book.component';
import { AddressBookComponentService } from './address-book.component.service';
import { AddressCardComponent } from './address-card/address-card.component';
var AddressBookModule = /** @class */ (function () {
    function AddressBookModule() {
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
    return AddressBookModule;
}());
export { AddressBookModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9hZGRyZXNzLWJvb2svYWRkcmVzcy1ib29rLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsR0FDWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDbEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDaEgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFN0U7SUFBQTtJQTRCZ0MsQ0FBQzs7Z0JBNUJoQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLDJCQUEyQixFQUFFO29DQUMzQixRQUFRLEVBQUUsaUJBQWlCO29DQUMzQixTQUFTLEVBQUU7d0NBQ1Q7NENBQ0UsT0FBTyxFQUFFLDJCQUEyQjs0Q0FDcEMsUUFBUSxFQUFFLDJCQUEyQjs0Q0FDckMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDO3lDQUNwQjtxQ0FDRjtvQ0FDRCxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUM7aUNBQ3BCOzZCQUNGO3lCQUNGLEVBQUEsQ0FBQzt3QkFDRixVQUFVO3dCQUNWLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixVQUFVO3FCQUNYO29CQUNELFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLG9CQUFvQixDQUFDO29CQUMxRCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxvQkFBb0IsQ0FBQztvQkFDckQsU0FBUyxFQUFFLENBQUMsV0FBVyxFQUFFLDJCQUEyQixDQUFDO29CQUNyRCxlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDeEM7O0lBQytCLHdCQUFDO0NBQUEsQUE1QmpDLElBNEJpQztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEF1dGhHdWFyZCxcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFVzZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgQWRkcmVzc0Zvcm1Nb2R1bGUgfSBmcm9tICcuLi8uLi9jaGVja291dC9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3MvYWRkcmVzcy1mb3JtL2FkZHJlc3MtZm9ybS5tb2R1bGUnO1xuaW1wb3J0IHsgQWRkcmVzc0Jvb2tDb21wb25lbnQgfSBmcm9tICcuL2FkZHJlc3MtYm9vay5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkcmVzc0Jvb2tDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9hZGRyZXNzLWJvb2suY29tcG9uZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQWRkcmVzc0NhcmRDb21wb25lbnQgfSBmcm9tICcuL2FkZHJlc3MtY2FyZC9hZGRyZXNzLWNhcmQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQWNjb3VudEFkZHJlc3NCb29rQ29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1hZGRyZXNzLWJvb2snLFxuICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm92aWRlOiBBZGRyZXNzQm9va0NvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUNsYXNzOiBBZGRyZXNzQm9va0NvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIGRlcHM6IFtVc2VyU2VydmljZV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBBZGRyZXNzRm9ybU1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FkZHJlc3NCb29rQ29tcG9uZW50LCBBZGRyZXNzQ2FyZENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBZGRyZXNzQm9va0NvbXBvbmVudCwgQWRkcmVzc0NhcmRDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZSwgQWRkcmVzc0Jvb2tDb21wb25lbnRTZXJ2aWNlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbQWRkcmVzc0Jvb2tDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRyZXNzQm9va01vZHVsZSB7fVxuIl19