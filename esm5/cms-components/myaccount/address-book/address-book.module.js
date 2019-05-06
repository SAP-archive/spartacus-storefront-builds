/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule, I18nModule, UserService, } from '@spartacus/core';
import { AddressFormModule } from '../../../lib/checkout/components/multi-step-checkout/shipping-address/address-form/address-form.module';
import { CardModule } from '../../../shared/components/card/card.module';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9hZGRyZXNzLWJvb2svYWRkcmVzcy1ib29rLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUVMLFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0dBQXdHLENBQUM7QUFDM0ksT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUU3RTtJQUFBO0lBMkJnQyxDQUFDOztnQkEzQmhDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2IsMkJBQTJCLEVBQUU7b0NBQzNCLFFBQVEsRUFBRSxpQkFBaUI7b0NBQzNCLFNBQVMsRUFBRTt3Q0FDVDs0Q0FDRSxPQUFPLEVBQUUsMkJBQTJCOzRDQUNwQyxRQUFRLEVBQUUsMkJBQTJCOzRDQUNyQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUM7eUNBQ3BCO3FDQUNGO2lDQUNGOzZCQUNGO3lCQUNGLEVBQUEsQ0FBQzt3QkFDRixVQUFVO3dCQUNWLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixVQUFVO3FCQUNYO29CQUNELFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLG9CQUFvQixDQUFDO29CQUMxRCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxvQkFBb0IsQ0FBQztvQkFDckQsU0FBUyxFQUFFLENBQUMsV0FBVyxFQUFFLDJCQUEyQixDQUFDO29CQUNyRCxlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDeEM7O0lBQytCLHdCQUFDO0NBQUEsQUEzQmpDLElBMkJpQztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBVc2VyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEFkZHJlc3NGb3JtTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2NoZWNrb3V0L2NvbXBvbmVudHMvbXVsdGktc3RlcC1jaGVja291dC9zaGlwcGluZy1hZGRyZXNzL2FkZHJlc3MtZm9ybS9hZGRyZXNzLWZvcm0ubW9kdWxlJztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IEFkZHJlc3NCb29rQ29tcG9uZW50IH0gZnJvbSAnLi9hZGRyZXNzLWJvb2suY29tcG9uZW50JztcbmltcG9ydCB7IEFkZHJlc3NCb29rQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vYWRkcmVzcy1ib29rLmNvbXBvbmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEFkZHJlc3NDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9hZGRyZXNzLWNhcmQvYWRkcmVzcy1jYXJkLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIEFjY291bnRBZGRyZXNzQm9va0NvbXBvbmVudDoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtYWRkcmVzcy1ib29rJyxcbiAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcHJvdmlkZTogQWRkcmVzc0Jvb2tDb21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICB1c2VDbGFzczogQWRkcmVzc0Jvb2tDb21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBkZXBzOiBbVXNlclNlcnZpY2VdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBDYXJkTW9kdWxlLFxuICAgIEFkZHJlc3NGb3JtTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQWRkcmVzc0Jvb2tDb21wb25lbnQsIEFkZHJlc3NDYXJkQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FkZHJlc3NCb29rQ29tcG9uZW50LCBBZGRyZXNzQ2FyZENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlLCBBZGRyZXNzQm9va0NvbXBvbmVudFNlcnZpY2VdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtBZGRyZXNzQm9va0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NCb29rTW9kdWxlIHt9XG4iXX0=