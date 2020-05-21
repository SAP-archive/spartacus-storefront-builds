import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentWrapperDirective } from './component-wrapper.directive';
import { ComponentHandler } from './handlers/component-handler';
import { DefaultComponentHandler } from './handlers/default-component.handler';
import { LazyComponentHandler } from './handlers/lazy-component.handler';
let PageComponentModule = class PageComponentModule {
};
PageComponentModule = __decorate([
    NgModule({
        imports: [CommonModule],
        providers: [
            {
                provide: ComponentHandler,
                useExisting: DefaultComponentHandler,
                multi: true,
            },
            {
                provide: ComponentHandler,
                useExisting: LazyComponentHandler,
                multi: true,
            },
        ],
        declarations: [ComponentWrapperDirective],
        exports: [ComponentWrapperDirective],
    })
], PageComponentModule);
export { PageComponentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1jb21wb25lbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9wYWdlLWNvbXBvbmVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBbUJ6RSxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtDQUFHLENBQUE7QUFBdEIsbUJBQW1CO0lBakIvQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDdkIsU0FBUyxFQUFFO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtnQkFDekIsV0FBVyxFQUFFLHVCQUF1QjtnQkFDcEMsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLFdBQVcsRUFBRSxvQkFBb0I7Z0JBQ2pDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjtRQUNELFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO1FBQ3pDLE9BQU8sRUFBRSxDQUFDLHlCQUF5QixDQUFDO0tBQ3JDLENBQUM7R0FDVyxtQkFBbUIsQ0FBRztTQUF0QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NvbXBvbmVudC13cmFwcGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb21wb25lbnRIYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVycy9jb21wb25lbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBEZWZhdWx0Q29tcG9uZW50SGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcnMvZGVmYXVsdC1jb21wb25lbnQuaGFuZGxlcic7XG5pbXBvcnQgeyBMYXp5Q29tcG9uZW50SGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcnMvbGF6eS1jb21wb25lbnQuaGFuZGxlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBDb21wb25lbnRIYW5kbGVyLFxuICAgICAgdXNlRXhpc3Rpbmc6IERlZmF1bHRDb21wb25lbnRIYW5kbGVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDb21wb25lbnRIYW5kbGVyLFxuICAgICAgdXNlRXhpc3Rpbmc6IExhenlDb21wb25lbnRIYW5kbGVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZUNvbXBvbmVudE1vZHVsZSB7fVxuIl19