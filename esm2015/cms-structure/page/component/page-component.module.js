import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentWrapperDirective } from './component-wrapper.directive';
import { ComponentHandler } from './handlers/component-handler';
import { DefaultComponentHandler } from './handlers/default-component.handler';
import { WebComponentHandler } from './handlers/web-component.handler';
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
            {
                provide: ComponentHandler,
                useExisting: WebComponentHandler,
                multi: true,
            },
        ],
        declarations: [ComponentWrapperDirective],
        exports: [ComponentWrapperDirective],
    })
], PageComponentModule);
export { PageComponentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1jb21wb25lbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9wYWdlLWNvbXBvbmVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBd0J6RSxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtDQUFHLENBQUE7QUFBdEIsbUJBQW1CO0lBdEIvQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDdkIsU0FBUyxFQUFFO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtnQkFDekIsV0FBVyxFQUFFLHVCQUF1QjtnQkFDcEMsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLFdBQVcsRUFBRSxvQkFBb0I7Z0JBQ2pDLEtBQUssRUFBRSxJQUFJO2FBQ1o7WUFDRDtnQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO2dCQUN6QixXQUFXLEVBQUUsbUJBQW1CO2dCQUNoQyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7UUFDRCxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztRQUN6QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztLQUNyQyxDQUFDO0dBQ1csbUJBQW1CLENBQUc7U0FBdEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21wb25lbnQtd3JhcHBlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50SGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcnMvY29tcG9uZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgRGVmYXVsdENvbXBvbmVudEhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXJzL2RlZmF1bHQtY29tcG9uZW50LmhhbmRsZXInO1xuaW1wb3J0IHsgV2ViQ29tcG9uZW50SGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcnMvd2ViLWNvbXBvbmVudC5oYW5kbGVyJztcbmltcG9ydCB7IExhenlDb21wb25lbnRIYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVycy9sYXp5LWNvbXBvbmVudC5oYW5kbGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IENvbXBvbmVudEhhbmRsZXIsXG4gICAgICB1c2VFeGlzdGluZzogRGVmYXVsdENvbXBvbmVudEhhbmRsZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENvbXBvbmVudEhhbmRsZXIsXG4gICAgICB1c2VFeGlzdGluZzogTGF6eUNvbXBvbmVudEhhbmRsZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENvbXBvbmVudEhhbmRsZXIsXG4gICAgICB1c2VFeGlzdGluZzogV2ViQ29tcG9uZW50SGFuZGxlcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbQ29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VDb21wb25lbnRNb2R1bGUge31cbiJdfQ==