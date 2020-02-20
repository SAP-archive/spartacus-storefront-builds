import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent, PageLayoutModule, } from '../../../cms-structure/page/index';
import { LogoutGuard } from './logout-guard';
var ɵ0 = { cxRoute: 'logout' };
var LogoutModule = /** @class */ (function () {
    function LogoutModule() {
    }
    LogoutModule = __decorate([
        NgModule({
            imports: [
                PageLayoutModule,
                RouterModule.forChild([
                    {
                        path: null,
                        canActivate: [LogoutGuard],
                        component: PageLayoutComponent,
                        data: ɵ0,
                    },
                ]),
            ],
        })
    ], LogoutModule);
    return LogoutModule;
}());
export { LogoutModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3VzZXIvbG9nb3V0L2xvZ291dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsZ0JBQWdCLEdBQ2pCLE1BQU0sbUNBQW1DLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO1NBVS9CLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTtBQUtuQztJQUFBO0lBQTJCLENBQUM7SUFBZixZQUFZO1FBYnhCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxnQkFBZ0I7Z0JBQ2hCLFlBQVksQ0FBQyxRQUFRLENBQUM7b0JBQ3BCO3dCQUNFLElBQUksRUFBRSxJQUFJO3dCQUNWLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDMUIsU0FBUyxFQUFFLG1CQUFtQjt3QkFDOUIsSUFBSSxJQUF1QjtxQkFDNUI7aUJBQ0YsQ0FBQzthQUNIO1NBQ0YsQ0FBQztPQUNXLFlBQVksQ0FBRztJQUFELG1CQUFDO0NBQUEsQUFBNUIsSUFBNEI7U0FBZixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICBQYWdlTGF5b3V0TW9kdWxlLFxufSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvaW5kZXgnO1xuaW1wb3J0IHsgTG9nb3V0R3VhcmQgfSBmcm9tICcuL2xvZ291dC1ndWFyZCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBQYWdlTGF5b3V0TW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbTG9nb3V0R3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgY3hSb3V0ZTogJ2xvZ291dCcgfSxcbiAgICAgIH0sXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIExvZ291dE1vZHVsZSB7fVxuIl19