import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { I18nModule } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/icon.module';
import { GlobalMessageComponent } from './global-message.component';
var GlobalMessageComponentModule = /** @class */ (function () {
    function GlobalMessageComponentModule() {
    }
    GlobalMessageComponentModule = __decorate([
        NgModule({
            imports: [CommonModule, HttpClientModule, IconModule, I18nModule],
            declarations: [GlobalMessageComponent],
            exports: [GlobalMessageComponent],
        })
    ], GlobalMessageComponentModule);
    return GlobalMessageComponentModule;
}());
export { GlobalMessageComponentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbWlzYy9nbG9iYWwtbWVzc2FnZS9nbG9iYWwtbWVzc2FnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFPcEU7SUFBQTtJQUEyQyxDQUFDO0lBQS9CLDRCQUE0QjtRQUx4QyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQztZQUNqRSxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUN0QyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNsQyxDQUFDO09BQ1csNEJBQTRCLENBQUc7SUFBRCxtQ0FBQztDQUFBLEFBQTVDLElBQTRDO1NBQS9CLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9nbG9iYWwtbWVzc2FnZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlLCBJY29uTW9kdWxlLCBJMThuTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbR2xvYmFsTWVzc2FnZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtHbG9iYWxNZXNzYWdlQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgR2xvYmFsTWVzc2FnZUNvbXBvbmVudE1vZHVsZSB7fVxuIl19