/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GlobalMessageModule, I18nModule } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/index';
import { GlobalMessageComponent } from './global-message.component';
var GlobalMessageComponentModule = /** @class */ (function () {
    function GlobalMessageComponentModule() {
    }
    GlobalMessageComponentModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        IconModule,
                        I18nModule,
                        GlobalMessageModule.forRoot(),
                    ],
                    declarations: [GlobalMessageComponent],
                    exports: [GlobalMessageComponent],
                },] }
    ];
    return GlobalMessageComponentModule;
}());
export { GlobalMessageComponentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbWlzYy9nbG9iYWwtbWVzc2FnZS9nbG9iYWwtbWVzc2FnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFcEU7SUFBQTtJQVcyQyxDQUFDOztnQkFYM0MsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsVUFBVTt3QkFDVixVQUFVO3dCQUNWLG1CQUFtQixDQUFDLE9BQU8sRUFBRTtxQkFDOUI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUNsQzs7SUFDMEMsbUNBQUM7Q0FBQSxBQVg1QyxJQVc0QztTQUEvQiw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlTW9kdWxlLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vZ2xvYmFsLW1lc3NhZ2UuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBHbG9iYWxNZXNzYWdlTW9kdWxlLmZvclJvb3QoKSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbR2xvYmFsTWVzc2FnZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtHbG9iYWxNZXNzYWdlQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgR2xvYmFsTWVzc2FnZUNvbXBvbmVudE1vZHVsZSB7fVxuIl19