import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule } from '@spartacus/core';
import { GenericLinkModule } from '../../../shared/components/generic-link/generic-link.module';
import { MediaModule } from '../../../shared/components/media/media.module';
import { BannerComponent } from './banner.component';
let BannerModule = class BannerModule {
};
BannerModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            GenericLinkModule,
            MediaModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    SimpleResponsiveBannerComponent: {
                        component: BannerComponent,
                    },
                    BannerComponent: {
                        component: BannerComponent,
                    },
                    SimpleBannerComponent: {
                        component: BannerComponent,
                    },
                },
            }),
        ],
        declarations: [BannerComponent],
        entryComponents: [BannerComponent],
        exports: [BannerComponent],
    })
], BannerModule);
export { BannerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NvbnRlbnQvYmFubmVyL2Jhbm5lci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQWEsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDaEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQTBCckQsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtDQUFHLENBQUE7QUFBZixZQUFZO0lBeEJ4QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixXQUFXO1lBQ1gsWUFBWSxDQUFDLFVBQVUsQ0FBWTtnQkFDakMsYUFBYSxFQUFFO29CQUNiLCtCQUErQixFQUFFO3dCQUMvQixTQUFTLEVBQUUsZUFBZTtxQkFDM0I7b0JBQ0QsZUFBZSxFQUFFO3dCQUNmLFNBQVMsRUFBRSxlQUFlO3FCQUMzQjtvQkFDRCxxQkFBcUIsRUFBRTt3QkFDckIsU0FBUyxFQUFFLGVBQWU7cUJBQzNCO2lCQUNGO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO1FBQy9CLGVBQWUsRUFBRSxDQUFDLGVBQWUsQ0FBQztRQUNsQyxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7S0FDM0IsQ0FBQztHQUNXLFlBQVksQ0FBRztTQUFmLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDbXNDb25maWcsIENvbmZpZ01vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBHZW5lcmljTGlua01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2dlbmVyaWMtbGluay9nZW5lcmljLWxpbmsubW9kdWxlJztcbmltcG9ydCB7IE1lZGlhTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbWVkaWEvbWVkaWEubW9kdWxlJztcbmltcG9ydCB7IEJhbm5lckNvbXBvbmVudCB9IGZyb20gJy4vYmFubmVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEdlbmVyaWNMaW5rTW9kdWxlLFxuICAgIE1lZGlhTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBTaW1wbGVSZXNwb25zaXZlQmFubmVyQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBCYW5uZXJDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIEJhbm5lckNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQmFubmVyQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBTaW1wbGVCYW5uZXJDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IEJhbm5lckNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0Jhbm5lckNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0Jhbm5lckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtCYW5uZXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBCYW5uZXJNb2R1bGUge31cbiJdfQ==