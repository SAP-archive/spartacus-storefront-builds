import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, I18nModule, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { ItemCounterModule, MediaModule, StarRatingModule, } from '../../shared/index';
import { AddToCartModule } from '../cart/index';
import { WishListItemComponent } from './components/wish-list-item/wish-list-item.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
let WishListModule = class WishListModule {
};
WishListModule = __decorate([
    NgModule({
        imports: [
            AddToCartModule,
            CommonModule,
            I18nModule,
            MediaModule,
            RouterModule,
            StarRatingModule,
            UrlModule,
            ItemCounterModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    WishListComponent: {
                        component: WishListComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
        ],
        declarations: [WishListComponent, WishListItemComponent],
        entryComponents: [WishListComponent],
        exports: [WishListComponent, WishListItemComponent],
    })
], WishListModule);
export { WishListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3dpc2gtbGlzdC93aXNoLWxpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLFNBQVMsRUFFVCxVQUFVLEVBQ1Ysb0JBQW9CLEVBQ3BCLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsV0FBVyxFQUNYLGdCQUFnQixHQUNqQixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDN0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUEyQi9FLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7Q0FBRyxDQUFBO0FBQWpCLGNBQWM7SUF6QjFCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGVBQWU7WUFDZixZQUFZO1lBQ1osVUFBVTtZQUNWLFdBQVc7WUFDWCxZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLFNBQVM7WUFDVCxpQkFBaUI7U0FDbEI7UUFDRCxTQUFTLEVBQUU7WUFDVCxvQkFBb0IsQ0FBWTtnQkFDOUIsYUFBYSxFQUFFO29CQUNiLGlCQUFpQixFQUFFO3dCQUNqQixTQUFTLEVBQUUsaUJBQWlCO3dCQUM1QixNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUM7cUJBQ3BCO2lCQUNGO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLENBQUM7UUFDeEQsZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUM7UUFDcEMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLENBQUM7S0FDcEQsQ0FBQztHQUNXLGNBQWMsQ0FBRztTQUFqQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIEkxOG5Nb2R1bGUsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQge1xuICBJdGVtQ291bnRlck1vZHVsZSxcbiAgTWVkaWFNb2R1bGUsXG4gIFN0YXJSYXRpbmdNb2R1bGUsXG59IGZyb20gJy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBBZGRUb0NhcnRNb2R1bGUgfSBmcm9tICcuLi9jYXJ0L2luZGV4JztcbmltcG9ydCB7IFdpc2hMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy93aXNoLWxpc3QtaXRlbS93aXNoLWxpc3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2lzaExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvd2lzaC1saXN0L3dpc2gtbGlzdC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQWRkVG9DYXJ0TW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIE1lZGlhTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBTdGFyUmF0aW5nTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBJdGVtQ291bnRlck1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFdpc2hMaXN0Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBXaXNoTGlzdENvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbV2lzaExpc3RDb21wb25lbnQsIFdpc2hMaXN0SXRlbUNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1dpc2hMaXN0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1dpc2hMaXN0Q29tcG9uZW50LCBXaXNoTGlzdEl0ZW1Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBXaXNoTGlzdE1vZHVsZSB7fVxuIl19