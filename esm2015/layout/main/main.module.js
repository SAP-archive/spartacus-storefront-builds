import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeaturesConfigModule } from '@spartacus/core';
import { GlobalMessageComponentModule } from '../../cms-components/misc/global-message/global-message.module';
import { OutletRefModule } from '../../cms-structure/outlet/outlet-ref/outlet-ref.module';
import { OutletModule } from '../../cms-structure/outlet/outlet.module';
import { PageLayoutModule } from '../../cms-structure/page/page-layout/page-layout.module';
import { PageSlotModule } from '../../cms-structure/page/slot/page-slot.module';
import { PwaModule } from '../../cms-structure/pwa/pwa.module';
import { SeoModule } from '../../cms-structure/seo/seo.module';
import { AnonymousConsentsModule } from '../../shared/components/anonymous-consents/anonymous-consents.module';
import { KeyboardFocusModule } from '../a11y/keyboard-focus/keyboard-focus.module';
import { SkipLinkModule } from '../a11y/skip-link/skip-link.module';
import { StorefrontComponent } from './storefront.component';
let MainModule = class MainModule {
};
MainModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            GlobalMessageComponentModule,
            OutletModule,
            OutletRefModule,
            PwaModule,
            PageLayoutModule,
            SeoModule,
            PageSlotModule,
            AnonymousConsentsModule,
            FeaturesConfigModule,
            SkipLinkModule,
            KeyboardFocusModule,
        ],
        declarations: [StorefrontComponent],
        exports: [StorefrontComponent],
    })
], MainModule);
export { MainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbWFpbi9tYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUMxRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDM0YsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDL0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDL0csT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBc0I3RCxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0NBQUcsQ0FBQTtBQUFiLFVBQVU7SUFwQnRCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixZQUFZO1lBQ1osNEJBQTRCO1lBQzVCLFlBQVk7WUFDWixlQUFlO1lBQ2YsU0FBUztZQUNULGdCQUFnQjtZQUNoQixTQUFTO1lBQ1QsY0FBYztZQUNkLHVCQUF1QjtZQUN2QixvQkFBb0I7WUFFcEIsY0FBYztZQUNkLG1CQUFtQjtTQUNwQjtRQUNELFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO0tBQy9CLENBQUM7R0FDVyxVQUFVLENBQUc7U0FBYixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRmVhdHVyZXNDb25maWdNb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZUNvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvZ2xvYmFsLW1lc3NhZ2UvZ2xvYmFsLW1lc3NhZ2UubW9kdWxlJztcbmltcG9ydCB7IE91dGxldFJlZk1vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC1yZWYvb3V0bGV0LXJlZi5tb2R1bGUnO1xuaW1wb3J0IHsgT3V0bGV0TW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvb3V0bGV0Lm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdlU2xvdE1vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9zbG90L3BhZ2Utc2xvdC5tb2R1bGUnO1xuaW1wb3J0IHsgUHdhTW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9wd2EvcHdhLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW9Nb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL3Nlby9zZW8ubW9kdWxlJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnRzL2Fub255bW91cy1jb25zZW50cy5tb2R1bGUnO1xuaW1wb3J0IHsgS2V5Ym9hcmRGb2N1c01vZHVsZSB9IGZyb20gJy4uL2ExMXkva2V5Ym9hcmQtZm9jdXMva2V5Ym9hcmQtZm9jdXMubW9kdWxlJztcbmltcG9ydCB7IFNraXBMaW5rTW9kdWxlIH0gZnJvbSAnLi4vYTExeS9za2lwLWxpbmsvc2tpcC1saW5rLm1vZHVsZSc7XG5pbXBvcnQgeyBTdG9yZWZyb250Q29tcG9uZW50IH0gZnJvbSAnLi9zdG9yZWZyb250LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEdsb2JhbE1lc3NhZ2VDb21wb25lbnRNb2R1bGUsXG4gICAgT3V0bGV0TW9kdWxlLFxuICAgIE91dGxldFJlZk1vZHVsZSxcbiAgICBQd2FNb2R1bGUsXG4gICAgUGFnZUxheW91dE1vZHVsZSxcbiAgICBTZW9Nb2R1bGUsXG4gICAgUGFnZVNsb3RNb2R1bGUsXG4gICAgQW5vbnltb3VzQ29uc2VudHNNb2R1bGUsXG4gICAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG5cbiAgICBTa2lwTGlua01vZHVsZSxcbiAgICBLZXlib2FyZEZvY3VzTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTdG9yZWZyb250Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1N0b3JlZnJvbnRDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBNYWluTW9kdWxlIHt9XG4iXX0=