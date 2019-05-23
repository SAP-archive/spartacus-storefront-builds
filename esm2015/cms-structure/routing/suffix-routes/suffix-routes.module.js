/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductPageComponent } from '../../../lib/ui/pages/product-page/product-page.component';
import { ProductPageModule } from '../../../lib/ui/pages/product-page/product-page.module';
import { CmsPageGuard } from '../../guards/cms-page.guard';
import { PageLayoutComponent } from '../../page/index';
import { suffixUrlMatcher } from './suffix-url-matcher';
const ɵ0 = {
    cxSuffixUrlMatcher: {
        marker: 'p',
        paramName: 'productCode',
    },
}, ɵ1 = {
    cxSuffixUrlMatcher: {
        marker: 'c',
        paramName: 'categoryCode',
    },
};
export class SuffixRoutesModule {
}
SuffixRoutesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ProductPageModule,
                    RouterModule.forChild([
                        {
                            matcher: suffixUrlMatcher,
                            canActivate: [CmsPageGuard],
                            component: ProductPageComponent,
                            data: ɵ0,
                        },
                        {
                            matcher: suffixUrlMatcher,
                            canActivate: [CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ1,
                        },
                    ]),
                ],
            },] }
];
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VmZml4LXJvdXRlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3JvdXRpbmcvc3VmZml4LXJvdXRlcy9zdWZmaXgtcm91dGVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDakcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDM0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO1dBVTFDO0lBQ0osa0JBQWtCLEVBQUU7UUFDbEIsTUFBTSxFQUFFLEdBQUc7UUFDWCxTQUFTLEVBQUUsYUFBYTtLQUN6QjtDQUNGLE9BTUs7SUFDSixrQkFBa0IsRUFBRTtRQUNsQixNQUFNLEVBQUUsR0FBRztRQUNYLFNBQVMsRUFBRSxjQUFjO0tBQzFCO0NBQ0Y7QUFLVCxNQUFNLE9BQU8sa0JBQWtCOzs7WUE3QjlCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsaUJBQWlCO29CQUNqQixZQUFZLENBQUMsUUFBUSxDQUFDO3dCQUNwQjs0QkFDRSxPQUFPLEVBQUUsZ0JBQWdCOzRCQUN6QixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7NEJBQzNCLFNBQVMsRUFBRSxvQkFBb0I7NEJBQy9CLElBQUksSUFLSDt5QkFDRjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsZ0JBQWdCOzRCQUN6QixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7NEJBQzNCLFNBQVMsRUFBRSxtQkFBbUI7NEJBQzlCLElBQUksSUFLSDt5QkFDRjtxQkFDRixDQUFDO2lCQUNIO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFByb2R1Y3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbGliL3VpL3BhZ2VzL3Byb2R1Y3QtcGFnZS9wcm9kdWN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y3RQYWdlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbGliL3VpL3BhZ2VzL3Byb2R1Y3QtcGFnZS9wcm9kdWN0LXBhZ2UubW9kdWxlJztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uL2d1YXJkcy9jbXMtcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vcGFnZS9pbmRleCc7XG5pbXBvcnQgeyBzdWZmaXhVcmxNYXRjaGVyIH0gZnJvbSAnLi9zdWZmaXgtdXJsLW1hdGNoZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUHJvZHVjdFBhZ2VNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgbWF0Y2hlcjogc3VmZml4VXJsTWF0Y2hlcixcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFByb2R1Y3RQYWdlQ29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY3hTdWZmaXhVcmxNYXRjaGVyOiB7XG4gICAgICAgICAgICBtYXJrZXI6ICdwJyxcbiAgICAgICAgICAgIHBhcmFtTmFtZTogJ3Byb2R1Y3RDb2RlJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbWF0Y2hlcjogc3VmZml4VXJsTWF0Y2hlcixcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjeFN1ZmZpeFVybE1hdGNoZXI6IHtcbiAgICAgICAgICAgIG1hcmtlcjogJ2MnLFxuICAgICAgICAgICAgcGFyYW1OYW1lOiAnY2F0ZWdvcnlDb2RlJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU3VmZml4Um91dGVzTW9kdWxlIHt9XG4iXX0=