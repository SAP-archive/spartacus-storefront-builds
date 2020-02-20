import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule, FeaturesConfigModule, } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/icon.module';
import { AutoFocusDirectiveModule } from '../../../shared/directives/auto-focus/auto-focus.directive.module';
import { ItemCounterModule, SpinnerModule } from '../../../shared/index';
import { CartSharedModule } from './../cart-shared/cart-shared.module';
import { AddToCartComponent } from './add-to-cart.component';
import { AddedToCartDialogComponent } from './added-to-cart-dialog/added-to-cart-dialog.component';
import { PromotionsModule } from '../../checkout/components/promotions/promotions.module';
let AddToCartModule = class AddToCartModule {
};
AddToCartModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule,
            CartSharedModule,
            RouterModule,
            SpinnerModule,
            PromotionsModule,
            FeaturesConfigModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    ProductAddToCartComponent: {
                        component: AddToCartComponent,
                    },
                },
            }),
            UrlModule,
            IconModule,
            I18nModule,
            ItemCounterModule,
            AutoFocusDirectiveModule,
        ],
        declarations: [AddToCartComponent, AddedToCartDialogComponent],
        entryComponents: [AddToCartComponent, AddedToCartDialogComponent],
        exports: [AddToCartComponent, AddedToCartDialogComponent],
    })
], AddToCartModule);
export { AddToCartModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWNhcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9hZGQtdG8tY2FydC9hZGQtdG8tY2FydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEVBQ1Qsb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQTRCMUYsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtDQUFHLENBQUE7QUFBbEIsZUFBZTtJQTFCM0IsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIsb0JBQW9CO1lBQ3BCLFlBQVksQ0FBQyxVQUFVLENBQVk7Z0JBQ2pDLGFBQWEsRUFBRTtvQkFDYix5QkFBeUIsRUFBRTt3QkFDekIsU0FBUyxFQUFFLGtCQUFrQjtxQkFDOUI7aUJBQ0Y7YUFDRixDQUFDO1lBQ0YsU0FBUztZQUNULFVBQVU7WUFDVixVQUFVO1lBQ1YsaUJBQWlCO1lBQ2pCLHdCQUF3QjtTQUN6QjtRQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLDBCQUEwQixDQUFDO1FBQzlELGVBQWUsRUFBRSxDQUFDLGtCQUFrQixFQUFFLDBCQUEwQixDQUFDO1FBQ2pFLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLDBCQUEwQixDQUFDO0tBQzFELENBQUM7R0FDVyxlQUFlLENBQUc7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgVXJsTW9kdWxlLFxuICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQXV0b0ZvY3VzRGlyZWN0aXZlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2RpcmVjdGl2ZXMvYXV0by1mb2N1cy9hdXRvLWZvY3VzLmRpcmVjdGl2ZS5tb2R1bGUnO1xuaW1wb3J0IHsgSXRlbUNvdW50ZXJNb2R1bGUsIFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vLi4vY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IEFkZFRvQ2FydENvbXBvbmVudCB9IGZyb20gJy4vYWRkLXRvLWNhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZGVkVG9DYXJ0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9hZGRlZC10by1jYXJ0LWRpYWxvZy9hZGRlZC10by1jYXJ0LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvbW90aW9uc01vZHVsZSB9IGZyb20gJy4uLy4uL2NoZWNrb3V0L2NvbXBvbmVudHMvcHJvbW90aW9ucy9wcm9tb3Rpb25zLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIFByb21vdGlvbnNNb2R1bGUsXG4gICAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFByb2R1Y3RBZGRUb0NhcnRDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IEFkZFRvQ2FydENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgVXJsTW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBJdGVtQ291bnRlck1vZHVsZSxcbiAgICBBdXRvRm9jdXNEaXJlY3RpdmVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FkZFRvQ2FydENvbXBvbmVudCwgQWRkZWRUb0NhcnREaWFsb2dDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtBZGRUb0NhcnRDb21wb25lbnQsIEFkZGVkVG9DYXJ0RGlhbG9nQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FkZFRvQ2FydENvbXBvbmVudCwgQWRkZWRUb0NhcnREaWFsb2dDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRUb0NhcnRNb2R1bGUge31cbiJdfQ==