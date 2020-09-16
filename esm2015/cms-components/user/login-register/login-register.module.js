import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckoutModule, I18nModule, NotAuthGuard, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { PageSlotModule } from '../../../cms-structure/page/slot/page-slot.module';
import { LoginRegisterComponent } from './login-register.component';
export class LoginRegisterModule {
}
LoginRegisterModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    UrlModule,
                    PageSlotModule,
                    I18nModule,
                    CheckoutModule,
                ],
                providers: [
                    provideDefaultConfig({
                        cmsComponents: {
                            ReturningCustomerRegisterComponent: {
                                component: LoginRegisterComponent,
                                guards: [NotAuthGuard],
                            },
                        },
                    }),
                ],
                declarations: [LoginRegisterComponent],
                entryComponents: [LoginRegisterComponent],
                exports: [LoginRegisterComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcmVnaXN0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvdXNlci9sb2dpbi1yZWdpc3Rlci9sb2dpbi1yZWdpc3Rlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxjQUFjLEVBRWQsVUFBVSxFQUNWLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBeUJwRSxNQUFNLE9BQU8sbUJBQW1COzs7WUF2Qi9CLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLFNBQVM7b0JBQ1QsY0FBYztvQkFDZCxVQUFVO29CQUNWLGNBQWM7aUJBQ2Y7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULG9CQUFvQixDQUFZO3dCQUM5QixhQUFhLEVBQUU7NEJBQ2Isa0NBQWtDLEVBQUU7Z0NBQ2xDLFNBQVMsRUFBRSxzQkFBc0I7Z0NBQ2pDLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQzs2QkFDdkI7eUJBQ0Y7cUJBQ0YsQ0FBQztpQkFDSDtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDdEMsZUFBZSxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ3pDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ2hlY2tvdXRNb2R1bGUsXG4gIENtc0NvbmZpZyxcbiAgSTE4bk1vZHVsZSxcbiAgTm90QXV0aEd1YXJkLFxuICBwcm92aWRlRGVmYXVsdENvbmZpZyxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUGFnZVNsb3RNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2Uvc2xvdC9wYWdlLXNsb3QubW9kdWxlJztcbmltcG9ydCB7IExvZ2luUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL2xvZ2luLXJlZ2lzdGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBQYWdlU2xvdE1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIENoZWNrb3V0TW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgUmV0dXJuaW5nQ3VzdG9tZXJSZWdpc3RlckNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogTG9naW5SZWdpc3RlckNvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtOb3RBdXRoR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTG9naW5SZWdpc3RlckNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0xvZ2luUmVnaXN0ZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTG9naW5SZWdpc3RlckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luUmVnaXN0ZXJNb2R1bGUge31cbiJdfQ==