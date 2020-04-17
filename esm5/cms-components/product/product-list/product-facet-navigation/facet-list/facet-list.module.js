import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule } from '@spartacus/core';
import { KeyboardFocusModule } from '../../../../../layout/a11y/keyboard-focus/keyboard-focus.module';
import { IconModule } from '../../../../misc/icon/icon.module';
import { FacetModule } from '../facet/facet.module';
import { FacetListComponent } from './facet-list.component';
var FacetListModule = /** @class */ (function () {
    function FacetListModule() {
    }
    FacetListModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                I18nModule,
                IconModule,
                FacetModule,
                KeyboardFocusModule,
            ],
            declarations: [FacetListComponent],
            exports: [FacetListComponent],
        })
    ], FacetListModule);
    return FacetListModule;
}());
export { FacetListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24vZmFjZXQtbGlzdC9mYWNldC1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFhNUQ7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGVBQWU7UUFYM0IsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osVUFBVTtnQkFDVixVQUFVO2dCQUNWLFdBQVc7Z0JBQ1gsbUJBQW1CO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7WUFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7U0FDOUIsQ0FBQztPQUNXLGVBQWUsQ0FBRztJQUFELHNCQUFDO0NBQUEsQUFBL0IsSUFBK0I7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSTE4bk1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBLZXlib2FyZEZvY3VzTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMva2V5Ym9hcmQtZm9jdXMubW9kdWxlJztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9taXNjL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgRmFjZXRNb2R1bGUgfSBmcm9tICcuLi9mYWNldC9mYWNldC5tb2R1bGUnO1xuaW1wb3J0IHsgRmFjZXRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9mYWNldC1saXN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIEZhY2V0TW9kdWxlLFxuICAgIEtleWJvYXJkRm9jdXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0ZhY2V0TGlzdENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtGYWNldExpc3RDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBGYWNldExpc3RNb2R1bGUge31cbiJdfQ==