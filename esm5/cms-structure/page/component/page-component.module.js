import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentWrapperDirective } from './component-wrapper.directive';
import { ComponentHandler } from './handlers/component-handler';
import { DefaultComponentHandler } from './handlers/default-component.handler';
import { LazyComponentHandler } from './handlers/lazy-component.handler';
var PageComponentModule = /** @class */ (function () {
    function PageComponentModule() {
    }
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
    return PageComponentModule;
}());
export { PageComponentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1jb21wb25lbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9wYWdlLWNvbXBvbmVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBbUJ6RTtJQUFBO0lBQWtDLENBQUM7SUFBdEIsbUJBQW1CO1FBakIvQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDdkIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLFdBQVcsRUFBRSx1QkFBdUI7b0JBQ3BDLEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLFdBQVcsRUFBRSxvQkFBb0I7b0JBQ2pDLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7WUFDRCxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN6QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUNyQyxDQUFDO09BQ1csbUJBQW1CLENBQUc7SUFBRCwwQkFBQztDQUFBLEFBQW5DLElBQW1DO1NBQXRCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZSB9IGZyb20gJy4vY29tcG9uZW50LXdyYXBwZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbXBvbmVudEhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXJzL2NvbXBvbmVudC1oYW5kbGVyJztcbmltcG9ydCB7IERlZmF1bHRDb21wb25lbnRIYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVycy9kZWZhdWx0LWNvbXBvbmVudC5oYW5kbGVyJztcbmltcG9ydCB7IExhenlDb21wb25lbnRIYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVycy9sYXp5LWNvbXBvbmVudC5oYW5kbGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IENvbXBvbmVudEhhbmRsZXIsXG4gICAgICB1c2VFeGlzdGluZzogRGVmYXVsdENvbXBvbmVudEhhbmRsZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENvbXBvbmVudEhhbmRsZXIsXG4gICAgICB1c2VFeGlzdGluZzogTGF6eUNvbXBvbmVudEhhbmRsZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0NvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlQ29tcG9uZW50TW9kdWxlIHt9XG4iXX0=