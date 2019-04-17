/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UrlTranslationModule, ConfigModule, I18nModule, } from '@spartacus/core';
import { CartTotalsComponent } from './cart-totals.component';
import { CartSharedModule } from '../cart-shared/cart-shared.module';
export class CartTotalsModule {
}
CartTotalsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    UrlTranslationModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CartTotalsComponent: {
                                selector: 'cx-cart-totals',
                            },
                        },
                    }))),
                    CartSharedModule,
                    I18nModule,
                ],
                declarations: [CartTotalsComponent],
                exports: [CartTotalsComponent],
                entryComponents: [CartTotalsComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC10b3RhbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2NhcnQvY2FydC10b3RhbHMvY2FydC10b3RhbHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixZQUFZLEVBRVosVUFBVSxHQUNYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFxQnJFLE1BQU0sT0FBTyxnQkFBZ0I7OztZQW5CNUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osb0JBQW9CO29CQUNwQixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXO3dCQUNqQyxhQUFhLEVBQUU7NEJBQ2IsbUJBQW1CLEVBQUU7Z0NBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7NkJBQzNCO3lCQUNGO3FCQUNGLEVBQUEsQ0FBQztvQkFDRixnQkFBZ0I7b0JBQ2hCLFVBQVU7aUJBQ1g7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUM5QixlQUFlLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtcbiAgVXJsVHJhbnNsYXRpb25Nb2R1bGUsXG4gIENvbmZpZ01vZHVsZSxcbiAgQ21zQ29uZmlnLFxuICBJMThuTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FydFRvdGFsc0NvbXBvbmVudCB9IGZyb20gJy4vY2FydC10b3RhbHMuY29tcG9uZW50JztcbmltcG9ydCB7IENhcnRTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9jYXJ0LXNoYXJlZC9jYXJ0LXNoYXJlZC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBVcmxUcmFuc2xhdGlvbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ2FydFRvdGFsc0NvbXBvbmVudDoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtY2FydC10b3RhbHMnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NhcnRUb3RhbHNDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2FydFRvdGFsc0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0NhcnRUb3RhbHNDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0VG90YWxzTW9kdWxlIHt9XG4iXX0=