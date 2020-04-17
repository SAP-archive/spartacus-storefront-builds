import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule } from '@spartacus/core';
import { KeyboardFocusModule } from '../../../../../layout/a11y/keyboard-focus/keyboard-focus.module';
import { IconModule } from '../../../../misc/icon/icon.module';
import { FacetModule } from '../facet/facet.module';
import { FacetListComponent } from './facet-list.component';
let FacetListModule = class FacetListModule {
};
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
export { FacetListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24vZmFjZXQtbGlzdC9mYWNldC1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFhNUQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtDQUFHLENBQUE7QUFBbEIsZUFBZTtJQVgzQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osVUFBVTtZQUNWLFVBQVU7WUFDVixXQUFXO1lBQ1gsbUJBQW1CO1NBQ3BCO1FBQ0QsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7UUFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7S0FDOUIsQ0FBQztHQUNXLGVBQWUsQ0FBRztTQUFsQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEtleWJvYXJkRm9jdXNNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9sYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9rZXlib2FyZC1mb2N1cy5tb2R1bGUnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL21pc2MvaWNvbi9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBGYWNldE1vZHVsZSB9IGZyb20gJy4uL2ZhY2V0L2ZhY2V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBGYWNldExpc3RDb21wb25lbnQgfSBmcm9tICcuL2ZhY2V0LWxpc3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gICAgRmFjZXRNb2R1bGUsXG4gICAgS2V5Ym9hcmRGb2N1c01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRmFjZXRMaXN0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0ZhY2V0TGlzdENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEZhY2V0TGlzdE1vZHVsZSB7fVxuIl19