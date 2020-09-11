import { CmsNavigationComponent } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { NavigationNode } from '../navigation/navigation-node.model';
import { NavigationService } from '../navigation/navigation.service';
import * as ɵngcc0 from '@angular/core';
export declare class CategoryNavigationComponent {
    protected componentData: CmsComponentData<CmsNavigationComponent>;
    protected service: NavigationService;
    node$: Observable<NavigationNode>;
    data$: Observable<CmsNavigationComponent>;
    constructor(componentData: CmsComponentData<CmsNavigationComponent>, service: NavigationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CategoryNavigationComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CategoryNavigationComponent, "cx-category-navigation", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktbmF2aWdhdGlvbi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY2F0ZWdvcnktbmF2aWdhdGlvbi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7O0FBTUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbXNOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IE5hdmlnYXRpb25Ob2RlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW5vZGUubW9kZWwnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYXRlZ29yeU5hdmlnYXRpb25Db21wb25lbnQge1xuICAgIHByb3RlY3RlZCBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENtc05hdmlnYXRpb25Db21wb25lbnQ+O1xuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZTtcbiAgICBub2RlJDogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uTm9kZT47XG4gICAgZGF0YSQ6IE9ic2VydmFibGU8Q21zTmF2aWdhdGlvbkNvbXBvbmVudD47XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50Piwgc2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UpO1xufVxuIl19