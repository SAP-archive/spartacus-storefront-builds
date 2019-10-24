import { AnonymousConsentsConfig, CmsNavigationComponent } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { NavigationNode } from '../navigation/navigation-node.model';
import { NavigationService } from '../navigation/navigation.service';
export declare class FooterNavigationComponent {
    protected componentData: CmsComponentData<CmsNavigationComponent>;
    protected service: NavigationService;
    protected anonymousConsentsConfig?: AnonymousConsentsConfig;
    node$: Observable<NavigationNode>;
    styleClass$: Observable<string>;
    data$: Observable<CmsNavigationComponent>;
    constructor(componentData: CmsComponentData<CmsNavigationComponent>, service: NavigationService, anonymousConsentsConfig: AnonymousConsentsConfig);
    /**
     * @deprecated since version 1.3
     * Instead, use:
     *
      ```ts
        constructor(
        componentData: CmsComponentData<CmsNavigationComponent>,
        service: NavigationService,
        anonymousConsentsConfig: AnonymousConsentsConfig
      )
      ```
     */
    constructor(componentData: CmsComponentData<CmsNavigationComponent>, service: NavigationService);
}
