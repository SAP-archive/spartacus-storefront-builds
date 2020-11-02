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

//# sourceMappingURL=category-navigation.component.d.ts.map