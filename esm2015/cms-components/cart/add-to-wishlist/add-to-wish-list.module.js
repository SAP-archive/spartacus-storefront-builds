import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { IconModule } from '../../misc/icon/icon.module';
import { AddToWishListComponent } from './add-to-wish-list.component';
let AddToWishListModule = class AddToWishListModule {
};
AddToWishListModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    AddToWishListComponent: {
                        component: AddToWishListComponent,
                    },
                },
            }),
            I18nModule,
            IconModule,
            RouterModule,
            UrlModule,
        ],
        declarations: [AddToWishListComponent],
        entryComponents: [AddToWishListComponent],
        exports: [AddToWishListComponent],
    })
], AddToWishListModule);
export { AddToWishListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLXdpc2gtbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jYXJ0L2FkZC10by13aXNobGlzdC9hZGQtdG8td2lzaC1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFFTCxZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQXFCdEUsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7Q0FBRyxDQUFBO0FBQXRCLG1CQUFtQjtJQW5CL0IsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFlBQVksQ0FBQyxVQUFVLENBQVk7Z0JBQ2pDLGFBQWEsRUFBRTtvQkFDYixzQkFBc0IsRUFBRTt3QkFDdEIsU0FBUyxFQUFFLHNCQUFzQjtxQkFDbEM7aUJBQ0Y7YUFDRixDQUFDO1lBQ0YsVUFBVTtZQUNWLFVBQVU7WUFDVixZQUFZO1lBQ1osU0FBUztTQUNWO1FBQ0QsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7UUFDdEMsZUFBZSxFQUFFLENBQUMsc0JBQXNCLENBQUM7UUFDekMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDbEMsQ0FBQztHQUNXLG1CQUFtQixDQUFHO1NBQXRCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vbWlzYy9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IEFkZFRvV2lzaExpc3RDb21wb25lbnQgfSBmcm9tICcuL2FkZC10by13aXNoLWxpc3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQWRkVG9XaXNoTGlzdENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQWRkVG9XaXNoTGlzdENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgSTE4bk1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FkZFRvV2lzaExpc3RDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtBZGRUb1dpc2hMaXN0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FkZFRvV2lzaExpc3RDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRUb1dpc2hMaXN0TW9kdWxlIHt9XG4iXX0=