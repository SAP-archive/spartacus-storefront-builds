import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule, provideDefaultConfig, } from '@spartacus/core';
import { CartSharedModule } from '../cart-shared/cart-shared.module';
import { SaveForLaterComponent } from './save-for-later.component';
export class SaveForLaterModule {
}
SaveForLaterModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, I18nModule, CartSharedModule],
                providers: [
                    provideDefaultConfig({
                        cmsComponents: {
                            SaveForLaterComponent: {
                                component: SaveForLaterComponent,
                            },
                        },
                    }),
                ],
                declarations: [SaveForLaterComponent],
                exports: [SaveForLaterComponent],
                entryComponents: [SaveForLaterComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS1mb3ItbGF0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvY2FydC9zYXZlLWZvci1sYXRlci9zYXZlLWZvci1sYXRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUdMLFVBQVUsRUFDVixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQWlCbkUsTUFBTSxPQUFPLGtCQUFrQjs7O1lBZjlCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixDQUFDO2dCQUNyRCxTQUFTLEVBQUU7b0JBQ1Qsb0JBQW9CLENBQTZCO3dCQUMvQyxhQUFhLEVBQUU7NEJBQ2IscUJBQXFCLEVBQUU7Z0NBQ3JCLFNBQVMsRUFBRSxxQkFBcUI7NkJBQ2pDO3lCQUNGO3FCQUNGLENBQUM7aUJBQ0g7Z0JBQ0QsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNoQyxlQUFlLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBGZWF0dXJlc0NvbmZpZyxcbiAgSTE4bk1vZHVsZSxcbiAgcHJvdmlkZURlZmF1bHRDb25maWcsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDYXJ0U2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IFNhdmVGb3JMYXRlckNvbXBvbmVudCB9IGZyb20gJy4vc2F2ZS1mb3ItbGF0ZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSTE4bk1vZHVsZSwgQ2FydFNoYXJlZE1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWcgfCBGZWF0dXJlc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFNhdmVGb3JMYXRlckNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogU2F2ZUZvckxhdGVyQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU2F2ZUZvckxhdGVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NhdmVGb3JMYXRlckNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1NhdmVGb3JMYXRlckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFNhdmVGb3JMYXRlck1vZHVsZSB7fVxuIl19