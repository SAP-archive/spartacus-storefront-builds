import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard, I18nModule, provideDefaultConfig, } from '@spartacus/core';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { UpdateProfileFormComponent } from './components/update-profile-form.component';
import { UpdateProfileComponent } from './update-profile.component';
import { FormErrorsModule } from '../../../shared/index';
var UpdateProfileModule = /** @class */ (function () {
    function UpdateProfileModule() {
    }
    UpdateProfileModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SpinnerModule,
                I18nModule,
                FormErrorsModule,
            ],
            providers: [
                provideDefaultConfig({
                    cmsComponents: {
                        UpdateProfileComponent: {
                            component: UpdateProfileComponent,
                            guards: [AuthGuard],
                        },
                    },
                }),
            ],
            declarations: [UpdateProfileComponent, UpdateProfileFormComponent],
            exports: [UpdateProfileComponent, UpdateProfileFormComponent],
            entryComponents: [UpdateProfileComponent],
        })
    ], UpdateProfileModule);
    return UpdateProfileModule;
}());
export { UpdateProfileModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXByb2ZpbGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L3VwZGF0ZS1wcm9maWxlL3VwZGF0ZS1wcm9maWxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFDTCxTQUFTLEVBRVQsVUFBVSxFQUNWLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNsRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQXlCekQ7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLG1CQUFtQjtRQXZCL0IsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxtQkFBbUI7Z0JBQ25CLGFBQWE7Z0JBQ2IsVUFBVTtnQkFDVixnQkFBZ0I7YUFDakI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Qsb0JBQW9CLENBQVk7b0JBQzlCLGFBQWEsRUFBRTt3QkFDYixzQkFBc0IsRUFBRTs0QkFDdEIsU0FBUyxFQUFFLHNCQUFzQjs0QkFDakMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO3lCQUNwQjtxQkFDRjtpQkFDRixDQUFDO2FBQ0g7WUFDRCxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSwwQkFBMEIsQ0FBQztZQUNsRSxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSwwQkFBMEIsQ0FBQztZQUM3RCxlQUFlLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUMxQyxDQUFDO09BQ1csbUJBQW1CLENBQUc7SUFBRCwwQkFBQztDQUFBLEFBQW5DLElBQW1DO1NBQXRCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBBdXRoR3VhcmQsXG4gIENtc0NvbmZpZyxcbiAgSTE4bk1vZHVsZSxcbiAgcHJvdmlkZURlZmF1bHRDb25maWcsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBVcGRhdGVQcm9maWxlRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91cGRhdGUtcHJvZmlsZS1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcGRhdGVQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi91cGRhdGUtcHJvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUVycm9yc01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgRm9ybUVycm9yc01vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFVwZGF0ZVByb2ZpbGVDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFVwZGF0ZVByb2ZpbGVDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1VwZGF0ZVByb2ZpbGVDb21wb25lbnQsIFVwZGF0ZVByb2ZpbGVGb3JtQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1VwZGF0ZVByb2ZpbGVDb21wb25lbnQsIFVwZGF0ZVByb2ZpbGVGb3JtQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbVXBkYXRlUHJvZmlsZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFVwZGF0ZVByb2ZpbGVNb2R1bGUge31cbiJdfQ==