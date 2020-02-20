import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
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
            ConfigModule.withConfig({
                cmsComponents: {
                    WishListComponent: {
                        component: WishListComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
            I18nModule,
            MediaModule,
            RouterModule,
            StarRatingModule,
            UrlModule,
            ItemCounterModule,
        ],
        declarations: [WishListComponent, WishListItemComponent],
        entryComponents: [WishListComponent],
        exports: [WishListComponent, WishListItemComponent],
    })
], WishListModule);
export { WishListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3dpc2gtbGlzdC93aXNoLWxpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsV0FBVyxFQUNYLGdCQUFnQixHQUNqQixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDN0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUF5Qi9FLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7Q0FBRyxDQUFBO0FBQWpCLGNBQWM7SUF2QjFCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGVBQWU7WUFDZixZQUFZO1lBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBWTtnQkFDakMsYUFBYSxFQUFFO29CQUNiLGlCQUFpQixFQUFFO3dCQUNqQixTQUFTLEVBQUUsaUJBQWlCO3dCQUM1QixNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUM7cUJBQ3BCO2lCQUNGO2FBQ0YsQ0FBQztZQUNGLFVBQVU7WUFDVixXQUFXO1lBQ1gsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixTQUFTO1lBQ1QsaUJBQWlCO1NBQ2xCO1FBQ0QsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLENBQUM7UUFDeEQsZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUM7UUFDcEMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLENBQUM7S0FDcEQsQ0FBQztHQUNXLGNBQWMsQ0FBRztTQUFqQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHtcbiAgSXRlbUNvdW50ZXJNb2R1bGUsXG4gIE1lZGlhTW9kdWxlLFxuICBTdGFyUmF0aW5nTW9kdWxlLFxufSBmcm9tICcuLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgQWRkVG9DYXJ0TW9kdWxlIH0gZnJvbSAnLi4vY2FydC9pbmRleCc7XG5pbXBvcnQgeyBXaXNoTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvd2lzaC1saXN0LWl0ZW0vd2lzaC1saXN0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFdpc2hMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3dpc2gtbGlzdC93aXNoLWxpc3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEFkZFRvQ2FydE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFdpc2hMaXN0Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBXaXNoTGlzdENvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBJMThuTW9kdWxlLFxuICAgIE1lZGlhTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBTdGFyUmF0aW5nTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBJdGVtQ291bnRlck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbV2lzaExpc3RDb21wb25lbnQsIFdpc2hMaXN0SXRlbUNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1dpc2hMaXN0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1dpc2hMaXN0Q29tcG9uZW50LCBXaXNoTGlzdEl0ZW1Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBXaXNoTGlzdE1vZHVsZSB7fVxuIl19