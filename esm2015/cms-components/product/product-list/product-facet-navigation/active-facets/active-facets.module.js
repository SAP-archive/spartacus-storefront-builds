import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nModule } from '@spartacus/core';
import { IconModule } from '../../../../../cms-components/misc/icon/icon.module';
import { KeyboardFocusModule } from '../../../../../layout/a11y/keyboard-focus/keyboard-focus.module';
import { ActiveFacetsComponent } from './active-facets.component';
let ActiveFacetsModule = class ActiveFacetsModule {
};
ActiveFacetsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            I18nModule,
            IconModule,
            KeyboardFocusModule,
        ],
        declarations: [ActiveFacetsComponent],
        exports: [ActiveFacetsComponent],
    })
], ActiveFacetsModule);
export { ActiveFacetsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZhY2V0cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24vYWN0aXZlLWZhY2V0cy9hY3RpdmUtZmFjZXRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDdEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFhbEUsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7Q0FBRyxDQUFBO0FBQXJCLGtCQUFrQjtJQVg5QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osWUFBWTtZQUNaLFVBQVU7WUFDVixVQUFVO1lBQ1YsbUJBQW1CO1NBQ3BCO1FBQ0QsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDckMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7S0FDakMsQ0FBQztHQUNXLGtCQUFrQixDQUFHO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBLZXlib2FyZEZvY3VzTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMva2V5Ym9hcmQtZm9jdXMubW9kdWxlJztcbmltcG9ydCB7IEFjdGl2ZUZhY2V0c0NvbXBvbmVudCB9IGZyb20gJy4vYWN0aXZlLWZhY2V0cy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gICAgS2V5Ym9hcmRGb2N1c01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQWN0aXZlRmFjZXRzQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FjdGl2ZUZhY2V0c0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUZhY2V0c01vZHVsZSB7fVxuIl19