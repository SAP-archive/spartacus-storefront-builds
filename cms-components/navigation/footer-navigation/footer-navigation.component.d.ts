import { AnonymousConsentsConfig, AuthService, CmsNavigationComponent } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { ModalService } from '../../../shared/components/modal/index';
import { NavigationNode } from '../navigation/navigation-node.model';
import { NavigationService } from '../navigation/navigation.service';
export declare class FooterNavigationComponent {
    protected componentData: CmsComponentData<CmsNavigationComponent>;
    protected service: NavigationService;
    protected anonymousConsentsConfig?: AnonymousConsentsConfig;
    protected authService?: AuthService;
    protected modalService?: ModalService;
    node$: Observable<NavigationNode>;
    styleClass$: Observable<string>;
    data$: Observable<CmsNavigationComponent>;
    constructor(componentData: CmsComponentData<CmsNavigationComponent>, service: NavigationService, anonymousConsentsConfig: AnonymousConsentsConfig, authService: AuthService, modalService: ModalService);
    /**
     * @deprecated since version 1.3
     * Instead, use:
     *
      ```ts
        constructor(
        componentData: CmsComponentData<CmsNavigationComponent>,
        service: NavigationService,
        anonymousConsentsConfig: AnonymousConsentsConfig,
        authService: AuthService,
        modalService: ModalService
      )
      ```
     */
    constructor(componentData: CmsComponentData<CmsNavigationComponent>, service: NavigationService);
    readonly showConsentPreferences: Observable<boolean>;
    openDialog(): void;
}
