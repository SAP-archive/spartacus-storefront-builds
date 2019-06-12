import { CmsNavigationComponent } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { NavigationNode } from './navigation-node.model';
import { NavigationService } from './navigation.service';
export declare class NavigationComponent {
    protected componentData: CmsComponentData<CmsNavigationComponent>;
    protected service: NavigationService;
    node$: Observable<NavigationNode>;
    styleClass$: Observable<string>;
    constructor(componentData: CmsComponentData<CmsNavigationComponent>, service: NavigationService);
}
