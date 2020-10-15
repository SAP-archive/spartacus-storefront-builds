import { CmsNavigationComponent } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { NavigationNode } from '../navigation/navigation-node.model';
import { NavigationService } from '../navigation/navigation.service';
import * as ɵngcc0 from '@angular/core';
export declare class FooterNavigationComponent {
    protected componentData: CmsComponentData<CmsNavigationComponent>;
    protected service: NavigationService;
    node$: Observable<NavigationNode>;
    styleClass$: Observable<string>;
    constructor(componentData: CmsComponentData<CmsNavigationComponent>, service: NavigationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FooterNavigationComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FooterNavigationComponent, "cx-footer-navigation", never, {}, {}, never, never>;
}

//# sourceMappingURL=footer-navigation.component.d.ts.map