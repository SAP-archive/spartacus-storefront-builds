/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartModule, ConfigModule, UrlTranslationModule, } from '@spartacus/core';
import { BannerModule } from '../../../../lib/cms-lib/banner/banner.module';
import { MediaModule } from '../../../../lib/ui/components/media/media.module';
import { MiniCartComponent } from './mini-cart.component';
export class MiniCartModule {
}
MiniCartModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    BannerModule,
                    MediaModule,
                    CartModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            MiniCartComponent: { selector: 'cx-mini-cart' },
                        },
                    }))),
                    UrlTranslationModule,
                ],
                declarations: [MiniCartComponent],
                entryComponents: [MiniCartComponent],
                exports: [MiniCartComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1jYXJ0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NhcnQvbWluaS1jYXJ0L21pbmktY2FydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsVUFBVSxFQUVWLFlBQVksRUFDWixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBb0IxRCxNQUFNLE9BQU8sY0FBYzs7O1lBbEIxQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsVUFBVTtvQkFDVixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXO3dCQUNqQyxhQUFhLEVBQUU7NEJBQ2IsaUJBQWlCLEVBQUUsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFO3lCQUNoRDtxQkFDRixFQUFBLENBQUM7b0JBQ0Ysb0JBQW9CO2lCQUNyQjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDakMsZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ2FydE1vZHVsZSxcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIFVybFRyYW5zbGF0aW9uTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmFubmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2Ntcy1saWIvYmFubmVyL2Jhbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgTWVkaWFNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvdWkvY29tcG9uZW50cy9tZWRpYS9tZWRpYS5tb2R1bGUnO1xuaW1wb3J0IHsgTWluaUNhcnRDb21wb25lbnQgfSBmcm9tICcuL21pbmktY2FydC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBCYW5uZXJNb2R1bGUsXG4gICAgTWVkaWFNb2R1bGUsXG4gICAgQ2FydE1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgTWluaUNhcnRDb21wb25lbnQ6IHsgc2VsZWN0b3I6ICdjeC1taW5pLWNhcnQnIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFVybFRyYW5zbGF0aW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtNaW5pQ2FydENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW01pbmlDYXJ0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW01pbmlDYXJ0Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTWluaUNhcnRNb2R1bGUge31cbiJdfQ==