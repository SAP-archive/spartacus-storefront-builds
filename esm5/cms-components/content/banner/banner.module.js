/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule } from '@spartacus/core';
import { GenericLinkModule } from '../../../shared/components/generic-link/generic-link.module';
import { MediaModule } from '../../../shared/components/media/media.module';
import { BannerComponent } from './banner.component';
var BannerModule = /** @class */ (function () {
    function BannerModule() {
    }
    BannerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        GenericLinkModule,
                        MediaModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
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
                        }))),
                    ],
                    declarations: [BannerComponent],
                    entryComponents: [BannerComponent],
                    exports: [BannerComponent],
                },] }
    ];
    return BannerModule;
}());
export { BannerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NvbnRlbnQvYmFubmVyL2Jhbm5lci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQWEsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDaEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRDtJQUFBO0lBd0IyQixDQUFDOztnQkF4QjNCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIsV0FBVzt3QkFDWCxZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2IsK0JBQStCLEVBQUU7b0NBQy9CLFNBQVMsRUFBRSxlQUFlO2lDQUMzQjtnQ0FDRCxlQUFlLEVBQUU7b0NBQ2YsU0FBUyxFQUFFLGVBQWU7aUNBQzNCO2dDQUNELHFCQUFxQixFQUFFO29DQUNyQixTQUFTLEVBQUUsZUFBZTtpQ0FDM0I7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3FCQUNIO29CQUNELFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDL0IsZUFBZSxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUNsQyxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQzNCOztJQUMwQixtQkFBQztDQUFBLEFBeEI1QixJQXdCNEI7U0FBZixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBDb25maWdNb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgR2VuZXJpY0xpbmtNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9nZW5lcmljLWxpbmsvZ2VuZXJpYy1saW5rLm1vZHVsZSc7XG5pbXBvcnQgeyBNZWRpYU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21lZGlhL21lZGlhLm1vZHVsZSc7XG5pbXBvcnQgeyBCYW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2Jhbm5lci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBHZW5lcmljTGlua01vZHVsZSxcbiAgICBNZWRpYU1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgU2ltcGxlUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQmFubmVyQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBCYW5uZXJDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IEJhbm5lckNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgU2ltcGxlQmFubmVyQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBCYW5uZXJDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtCYW5uZXJDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtCYW5uZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQmFubmVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQmFubmVyTW9kdWxlIHt9XG4iXX0=