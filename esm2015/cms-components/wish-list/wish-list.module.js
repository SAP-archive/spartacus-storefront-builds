import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, I18nModule, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { ItemCounterModule, MediaModule, StarRatingModule, } from '../../shared/index';
import { AddToCartModule } from '../cart/index';
import { WishListItemComponent } from './components/wish-list-item/wish-list-item.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
export class WishListModule {
}
WishListModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL3dpc2gtbGlzdC93aXNoLWxpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsU0FBUyxFQUVULFVBQVUsRUFDVixvQkFBb0IsRUFDcEIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixXQUFXLEVBQ1gsZ0JBQWdCLEdBQ2pCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQTJCL0UsTUFBTSxPQUFPLGNBQWM7OztZQXpCMUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxlQUFlO29CQUNmLFlBQVk7b0JBQ1osVUFBVTtvQkFDVixXQUFXO29CQUNYLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixTQUFTO29CQUNULGlCQUFpQjtpQkFDbEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULG9CQUFvQixDQUFZO3dCQUM5QixhQUFhLEVBQUU7NEJBQ2IsaUJBQWlCLEVBQUU7Z0NBQ2pCLFNBQVMsRUFBRSxpQkFBaUI7Z0NBQzVCLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQzs2QkFDcEI7eUJBQ0Y7cUJBQ0YsQ0FBQztpQkFDSDtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsQ0FBQztnQkFDeEQsZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixDQUFDO2FBQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIEkxOG5Nb2R1bGUsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQge1xuICBJdGVtQ291bnRlck1vZHVsZSxcbiAgTWVkaWFNb2R1bGUsXG4gIFN0YXJSYXRpbmdNb2R1bGUsXG59IGZyb20gJy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBBZGRUb0NhcnRNb2R1bGUgfSBmcm9tICcuLi9jYXJ0L2luZGV4JztcbmltcG9ydCB7IFdpc2hMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy93aXNoLWxpc3QtaXRlbS93aXNoLWxpc3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2lzaExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvd2lzaC1saXN0L3dpc2gtbGlzdC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQWRkVG9DYXJ0TW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIE1lZGlhTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBTdGFyUmF0aW5nTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBJdGVtQ291bnRlck1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFdpc2hMaXN0Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBXaXNoTGlzdENvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbV2lzaExpc3RDb21wb25lbnQsIFdpc2hMaXN0SXRlbUNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1dpc2hMaXN0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1dpc2hMaXN0Q29tcG9uZW50LCBXaXNoTGlzdEl0ZW1Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBXaXNoTGlzdE1vZHVsZSB7fVxuIl19