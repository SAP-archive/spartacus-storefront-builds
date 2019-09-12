/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/index';
import { MiniCartComponent } from './mini-cart.component';
var MiniCartModule = /** @class */ (function () {
    function MiniCartModule() {
    }
    MiniCartModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                MiniCartComponent: {
                                    component: MiniCartComponent,
                                },
                            },
                        }))),
                        UrlModule,
                        IconModule,
                        I18nModule,
                    ],
                    declarations: [MiniCartComponent],
                    exports: [MiniCartComponent],
                    entryComponents: [MiniCartComponent],
                },] }
    ];
    return MiniCartModule;
}());
export { MiniCartModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1jYXJ0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvbWluaS1jYXJ0L21pbmktY2FydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQ7SUFBQTtJQW1CNkIsQ0FBQzs7Z0JBbkI3QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2IsaUJBQWlCLEVBQUU7b0NBQ2pCLFNBQVMsRUFBRSxpQkFBaUI7aUNBQzdCOzZCQUNGO3lCQUNGLEVBQUEsQ0FBQzt3QkFDRixTQUFTO3dCQUNULFVBQVU7d0JBQ1YsVUFBVTtxQkFDWDtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQzVCLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUNyQzs7SUFDNEIscUJBQUM7Q0FBQSxBQW5COUIsSUFtQjhCO1NBQWpCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBNaW5pQ2FydENvbXBvbmVudCB9IGZyb20gJy4vbWluaS1jYXJ0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBNaW5pQ2FydENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogTWluaUNhcnRDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFVybE1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW01pbmlDYXJ0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW01pbmlDYXJ0Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbTWluaUNhcnRDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBNaW5pQ2FydE1vZHVsZSB7fVxuIl19