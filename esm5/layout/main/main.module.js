/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlobalMessageComponentModule } from '../../cms-components/misc/global-message/global-message.module';
import { UserComponentModule } from '../../cms-components/user/index';
import { SeoModule } from '../../cms-structure/index';
import { OutletRefModule } from '../../cms-structure/outlet/outlet-ref/outlet-ref.module';
import { PageLayoutModule } from '../../cms-structure/page/index';
import { PageSlotModule } from '../../cms-structure/page/slot/page-slot.module';
import { PwaModule } from '../../cms-structure/pwa/index';
import { StorefrontComponent } from './storefront.component';
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        GlobalMessageComponentModule,
                        UserComponentModule,
                        OutletRefModule,
                        PwaModule,
                        PageLayoutModule,
                        SeoModule,
                        PageSlotModule,
                    ],
                    declarations: [StorefrontComponent],
                    exports: [StorefrontComponent],
                },] }
    ];
    return MainModule;
}());
export { MainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbWFpbi9tYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDMUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU3RDtJQUFBO0lBZXlCLENBQUM7O2dCQWZ6QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWiw0QkFBNEI7d0JBQzVCLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixTQUFTO3dCQUNULGdCQUFnQjt3QkFDaEIsU0FBUzt3QkFDVCxjQUFjO3FCQUNmO29CQUNELFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDL0I7O0lBQ3dCLGlCQUFDO0NBQUEsQUFmMUIsSUFlMEI7U0FBYixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZUNvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvZ2xvYmFsLW1lc3NhZ2UvZ2xvYmFsLW1lc3NhZ2UubW9kdWxlJztcbmltcG9ydCB7IFVzZXJDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtY29tcG9uZW50cy91c2VyL2luZGV4JztcbmltcG9ydCB7IFNlb01vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvaW5kZXgnO1xuaW1wb3J0IHsgT3V0bGV0UmVmTW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvb3V0bGV0LXJlZi9vdXRsZXQtcmVmLm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL2luZGV4JztcbmltcG9ydCB7IFBhZ2VTbG90TW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3Nsb3QvcGFnZS1zbG90Lm1vZHVsZSc7XG5pbXBvcnQgeyBQd2FNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL3B3YS9pbmRleCc7XG5pbXBvcnQgeyBTdG9yZWZyb250Q29tcG9uZW50IH0gZnJvbSAnLi9zdG9yZWZyb250LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEdsb2JhbE1lc3NhZ2VDb21wb25lbnRNb2R1bGUsXG4gICAgVXNlckNvbXBvbmVudE1vZHVsZSxcbiAgICBPdXRsZXRSZWZNb2R1bGUsXG4gICAgUHdhTW9kdWxlLFxuICAgIFBhZ2VMYXlvdXRNb2R1bGUsXG4gICAgU2VvTW9kdWxlLFxuICAgIFBhZ2VTbG90TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTdG9yZWZyb250Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1N0b3JlZnJvbnRDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBNYWluTW9kdWxlIHt9XG4iXX0=