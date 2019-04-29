/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartModule, ConfigModule, UrlTranslationModule, } from '@spartacus/core';
import { IconModule } from '../../../../cms-components/misc/icon/index';
import { MiniCartComponent } from './mini-cart.component';
export class MiniCartModule {
}
MiniCartModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    CartModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            MiniCartComponent: { selector: 'cx-mini-cart' },
                        },
                    }))),
                    UrlTranslationModule,
                    IconModule,
                ],
                declarations: [MiniCartComponent],
                entryComponents: [MiniCartComponent],
                exports: [MiniCartComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1jYXJ0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NhcnQvbWluaS1jYXJ0L21pbmktY2FydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsVUFBVSxFQUVWLFlBQVksRUFDWixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFtQjFELE1BQU0sT0FBTyxjQUFjOzs7WUFqQjFCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLFVBQVU7b0JBQ1YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzt3QkFDakMsYUFBYSxFQUFFOzRCQUNiLGlCQUFpQixFQUFFLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTt5QkFDaEQ7cUJBQ0YsRUFBQSxDQUFDO29CQUNGLG9CQUFvQjtvQkFDcEIsVUFBVTtpQkFDWDtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDakMsZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ2FydE1vZHVsZSxcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIFVybFRyYW5zbGF0aW9uTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBNaW5pQ2FydENvbXBvbmVudCB9IGZyb20gJy4vbWluaS1jYXJ0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIENhcnRNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIE1pbmlDYXJ0Q29tcG9uZW50OiB7IHNlbGVjdG9yOiAnY3gtbWluaS1jYXJ0JyB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBVcmxUcmFuc2xhdGlvbk1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtNaW5pQ2FydENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW01pbmlDYXJ0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW01pbmlDYXJ0Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTWluaUNhcnRNb2R1bGUge31cbiJdfQ==