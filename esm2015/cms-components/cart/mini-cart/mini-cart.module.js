import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/icon.module';
import { MiniCartComponent } from './mini-cart.component';
let MiniCartModule = class MiniCartModule {
};
MiniCartModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    MiniCartComponent: {
                        component: MiniCartComponent,
                    },
                },
            }),
            UrlModule,
            IconModule,
            I18nModule,
        ],
        declarations: [MiniCartComponent],
        exports: [MiniCartComponent],
        entryComponents: [MiniCartComponent],
    })
], MiniCartModule);
export { MiniCartModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1jYXJ0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvbWluaS1jYXJ0L21pbmktY2FydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFxQjFELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7Q0FBRyxDQUFBO0FBQWpCLGNBQWM7SUFuQjFCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBWTtnQkFDakMsYUFBYSxFQUFFO29CQUNiLGlCQUFpQixFQUFFO3dCQUNqQixTQUFTLEVBQUUsaUJBQWlCO3FCQUM3QjtpQkFDRjthQUNGLENBQUM7WUFDRixTQUFTO1lBQ1QsVUFBVTtZQUNWLFVBQVU7U0FDWDtRQUNELFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO1FBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO1FBQzVCLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO0tBQ3JDLENBQUM7R0FDVyxjQUFjLENBQUc7U0FBakIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IE1pbmlDYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9taW5pLWNhcnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIE1pbmlDYXJ0Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBNaW5pQ2FydENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgVXJsTW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTWluaUNhcnRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTWluaUNhcnRDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtNaW5pQ2FydENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE1pbmlDYXJ0TW9kdWxlIHt9XG4iXX0=