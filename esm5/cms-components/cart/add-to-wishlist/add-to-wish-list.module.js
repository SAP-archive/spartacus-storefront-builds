import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { IconModule } from '../../misc/icon/icon.module';
import { AddToWishListComponent } from './add-to-wish-list.component';
var AddToWishListModule = /** @class */ (function () {
    function AddToWishListModule() {
    }
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
    return AddToWishListModule;
}());
export { AddToWishListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLXdpc2gtbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jYXJ0L2FkZC10by13aXNobGlzdC9hZGQtdG8td2lzaC1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFFTCxZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQXFCdEU7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLG1CQUFtQjtRQW5CL0IsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBWTtvQkFDakMsYUFBYSxFQUFFO3dCQUNiLHNCQUFzQixFQUFFOzRCQUN0QixTQUFTLEVBQUUsc0JBQXNCO3lCQUNsQztxQkFDRjtpQkFDRixDQUFDO2dCQUNGLFVBQVU7Z0JBQ1YsVUFBVTtnQkFDVixZQUFZO2dCQUNaLFNBQVM7YUFDVjtZQUNELFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ3RDLGVBQWUsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ3pDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ2xDLENBQUM7T0FDVyxtQkFBbUIsQ0FBRztJQUFELDBCQUFDO0NBQUEsQUFBbkMsSUFBbUM7U0FBdEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFVybE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9taXNjL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQWRkVG9XaXNoTGlzdENvbXBvbmVudCB9IGZyb20gJy4vYWRkLXRvLXdpc2gtbGlzdC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBBZGRUb1dpc2hMaXN0Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBBZGRUb1dpc2hMaXN0Q29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBJMThuTW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQWRkVG9XaXNoTGlzdENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0FkZFRvV2lzaExpc3RDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQWRkVG9XaXNoTGlzdENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEFkZFRvV2lzaExpc3RNb2R1bGUge31cbiJdfQ==