import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nModule, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { IconModule } from '../../misc/icon/icon.module';
import { AddToWishListComponent } from './add-to-wish-list.component';
export class AddToWishListModule {
}
AddToWishListModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, I18nModule, IconModule, RouterModule, UrlModule],
                providers: [
                    provideDefaultConfig({
                        cmsComponents: {
                            AddToWishListComponent: {
                                component: AddToWishListComponent,
                            },
                        },
                    }),
                ],
                declarations: [AddToWishListComponent],
                entryComponents: [AddToWishListComponent],
                exports: [AddToWishListComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLXdpc2gtbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9jYXJ0L2FkZC10by13aXNobGlzdC9hZGQtdG8td2lzaC1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUVMLFVBQVUsRUFDVixvQkFBb0IsRUFDcEIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBaUJ0RSxNQUFNLE9BQU8sbUJBQW1COzs7WUFmL0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLENBQUM7Z0JBQ3hFLFNBQVMsRUFBRTtvQkFDVCxvQkFBb0IsQ0FBWTt3QkFDOUIsYUFBYSxFQUFFOzRCQUNiLHNCQUFzQixFQUFFO2dDQUN0QixTQUFTLEVBQUUsc0JBQXNCOzZCQUNsQzt5QkFDRjtxQkFDRixDQUFDO2lCQUNIO2dCQUNELFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUN0QyxlQUFlLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDekMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIEkxOG5Nb2R1bGUsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vbWlzYy9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IEFkZFRvV2lzaExpc3RDb21wb25lbnQgfSBmcm9tICcuL2FkZC10by13aXNoLWxpc3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSTE4bk1vZHVsZSwgSWNvbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBVcmxNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQWRkVG9XaXNoTGlzdENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQWRkVG9XaXNoTGlzdENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FkZFRvV2lzaExpc3RDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtBZGRUb1dpc2hMaXN0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FkZFRvV2lzaExpc3RDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRUb1dpc2hMaXN0TW9kdWxlIHt9XG4iXX0=