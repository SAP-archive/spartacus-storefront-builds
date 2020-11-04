import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FeaturesConfigModule, I18nModule, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/icon.module';
import { KeyboardFocusModule } from '../../../layout/a11y/keyboard-focus/keyboard-focus.module';
import { ItemCounterModule, ModalModule, SpinnerModule, } from '../../../shared/index';
import { PromotionsModule } from '../../checkout/components/promotions/promotions.module';
import { CartSharedModule } from './../cart-shared/cart-shared.module';
import { AddToCartComponent } from './add-to-cart.component';
import { AddedToCartDialogComponent } from './added-to-cart-dialog/added-to-cart-dialog.component';
export class AddToCartModule {
}
AddToCartModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    CartSharedModule,
                    RouterModule,
                    SpinnerModule,
                    PromotionsModule,
                    FeaturesConfigModule,
                    UrlModule,
                    IconModule,
                    I18nModule,
                    ItemCounterModule,
                    KeyboardFocusModule,
                    ModalModule,
                ],
                providers: [
                    provideDefaultConfig({
                        cmsComponents: {
                            ProductAddToCartComponent: {
                                component: AddToCartComponent,
                            },
                        },
                    }),
                ],
                declarations: [AddToCartComponent, AddedToCartDialogComponent],
                entryComponents: [AddToCartComponent, AddedToCartDialogComponent],
                exports: [AddToCartComponent, AddedToCartDialogComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWNhcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvY2FydC9hZGQtdG8tY2FydC9hZGQtdG8tY2FydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFFTCxvQkFBb0IsRUFDcEIsVUFBVSxFQUNWLG9CQUFvQixFQUNwQixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDaEcsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixXQUFXLEVBQ1gsYUFBYSxHQUNkLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDMUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUErQm5HLE1BQU0sT0FBTyxlQUFlOzs7WUE3QjNCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDaEIsWUFBWTtvQkFDWixhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsb0JBQW9CO29CQUNwQixTQUFTO29CQUNULFVBQVU7b0JBQ1YsVUFBVTtvQkFDVixpQkFBaUI7b0JBQ2pCLG1CQUFtQjtvQkFDbkIsV0FBVztpQkFDWjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Qsb0JBQW9CLENBQVk7d0JBQzlCLGFBQWEsRUFBRTs0QkFDYix5QkFBeUIsRUFBRTtnQ0FDekIsU0FBUyxFQUFFLGtCQUFrQjs2QkFDOUI7eUJBQ0Y7cUJBQ0YsQ0FBQztpQkFDSDtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSwwQkFBMEIsQ0FBQztnQkFDOUQsZUFBZSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsMEJBQTBCLENBQUM7Z0JBQ2pFLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLDBCQUEwQixDQUFDO2FBQzFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IEtleWJvYXJkRm9jdXNNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9rZXlib2FyZC1mb2N1cy5tb2R1bGUnO1xuaW1wb3J0IHtcbiAgSXRlbUNvdW50ZXJNb2R1bGUsXG4gIE1vZGFsTW9kdWxlLFxuICBTcGlubmVyTW9kdWxlLFxufSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgUHJvbW90aW9uc01vZHVsZSB9IGZyb20gJy4uLy4uL2NoZWNrb3V0L2NvbXBvbmVudHMvcHJvbW90aW9ucy9wcm9tb3Rpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0U2hhcmVkTW9kdWxlIH0gZnJvbSAnLi8uLi9jYXJ0LXNoYXJlZC9jYXJ0LXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQWRkVG9DYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9hZGQtdG8tY2FydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkZWRUb0NhcnREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2FkZGVkLXRvLWNhcnQtZGlhbG9nL2FkZGVkLXRvLWNhcnQtZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIFByb21vdGlvbnNNb2R1bGUsXG4gICAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBJdGVtQ291bnRlck1vZHVsZSxcbiAgICBLZXlib2FyZEZvY3VzTW9kdWxlLFxuICAgIE1vZGFsTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgUHJvZHVjdEFkZFRvQ2FydENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQWRkVG9DYXJ0Q29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQWRkVG9DYXJ0Q29tcG9uZW50LCBBZGRlZFRvQ2FydERpYWxvZ0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0FkZFRvQ2FydENvbXBvbmVudCwgQWRkZWRUb0NhcnREaWFsb2dDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQWRkVG9DYXJ0Q29tcG9uZW50LCBBZGRlZFRvQ2FydERpYWxvZ0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEFkZFRvQ2FydE1vZHVsZSB7fVxuIl19