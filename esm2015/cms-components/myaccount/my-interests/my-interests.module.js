import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListNavigationModule } from '../../../shared/components/list-navigation/list-navigation.module';
import { MyInterestsComponent } from './my-interests.component';
import { MediaModule } from '../../../shared/components/media/media.module';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { ConfigModule, I18nModule, UrlModule, AuthGuard, } from '@spartacus/core';
let MyInterestsModule = class MyInterestsModule {
};
MyInterestsModule = __decorate([
    NgModule({
        declarations: [MyInterestsComponent],
        imports: [
            CommonModule,
            I18nModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    MyInterestsComponent: {
                        component: MyInterestsComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
            RouterModule,
            ListNavigationModule,
            I18nModule,
            UrlModule,
            MediaModule,
            SpinnerModule,
        ],
        exports: [MyInterestsComponent],
        entryComponents: [MyInterestsComponent],
    })
], MyInterestsModule);
export { MyInterestsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktaW50ZXJlc3RzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9teS1pbnRlcmVzdHMvbXktaW50ZXJlc3RzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDbEYsT0FBTyxFQUNMLFlBQVksRUFFWixVQUFVLEVBQ1YsU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBeUJ6QixJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtDQUFHLENBQUE7QUFBcEIsaUJBQWlCO0lBdkI3QixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztRQUNwQyxPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osVUFBVTtZQUNWLFlBQVksQ0FBQyxVQUFVLENBQVk7Z0JBQ2pDLGFBQWEsRUFBRTtvQkFDYixvQkFBb0IsRUFBRTt3QkFDcEIsU0FBUyxFQUFFLG9CQUFvQjt3QkFDL0IsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO3FCQUNwQjtpQkFDRjthQUNGLENBQUM7WUFDRixZQUFZO1lBQ1osb0JBQW9CO1lBQ3BCLFVBQVU7WUFDVixTQUFTO1lBQ1QsV0FBVztZQUNYLGFBQWE7U0FDZDtRQUNELE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO1FBQy9CLGVBQWUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO0tBQ3hDLENBQUM7R0FDVyxpQkFBaUIsQ0FBRztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMaXN0TmF2aWdhdGlvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2xpc3QtbmF2aWdhdGlvbi9saXN0LW5hdmlnYXRpb24ubW9kdWxlJztcbmltcG9ydCB7IE15SW50ZXJlc3RzQ29tcG9uZW50IH0gZnJvbSAnLi9teS1pbnRlcmVzdHMuY29tcG9uZW50JztcbmltcG9ydCB7IE1lZGlhTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbWVkaWEvbWVkaWEubW9kdWxlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7XG4gIENvbmZpZ01vZHVsZSxcbiAgQ21zQ29uZmlnLFxuICBJMThuTW9kdWxlLFxuICBVcmxNb2R1bGUsXG4gIEF1dGhHdWFyZCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTXlJbnRlcmVzdHNDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIE15SW50ZXJlc3RzQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBNeUludGVyZXN0c0NvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTGlzdE5hdmlnYXRpb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgTWVkaWFNb2R1bGUsXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW015SW50ZXJlc3RzQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbTXlJbnRlcmVzdHNDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBNeUludGVyZXN0c01vZHVsZSB7fVxuIl19