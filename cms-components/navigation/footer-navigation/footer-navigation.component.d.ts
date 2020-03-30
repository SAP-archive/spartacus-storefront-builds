import { AnonymousConsentsConfig, CmsNavigationComponent } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { NavigationNode } from '../navigation/navigation-node.model';
import { NavigationService } from '../navigation/navigation.service';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FooterNavigationComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FooterNavigationComponent, "cx-footer-navigation", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImZvb3Rlci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c0NvbmZpZywgQ21zTmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uTm9kZSB9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi1ub2RlLm1vZGVsJztcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRm9vdGVyTmF2aWdhdGlvbkNvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zTmF2aWdhdGlvbkNvbXBvbmVudD47XG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhbm9ueW1vdXNDb25zZW50c0NvbmZpZz86IEFub255bW91c0NvbnNlbnRzQ29uZmlnO1xuICAgIG5vZGUkOiBPYnNlcnZhYmxlPE5hdmlnYXRpb25Ob2RlPjtcbiAgICBzdHlsZUNsYXNzJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIGRhdGEkOiBPYnNlcnZhYmxlPENtc05hdmlnYXRpb25Db21wb25lbnQ+O1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zTmF2aWdhdGlvbkNvbXBvbmVudD4sIHNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLCBhbm9ueW1vdXNDb25zZW50c0NvbmZpZzogQW5vbnltb3VzQ29uc2VudHNDb25maWcpO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAgICogSW5zdGVhZCwgdXNlOlxuICAgICAqXG4gICAgICBgYGB0c1xuICAgICAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50PixcbiAgICAgICAgc2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgICAgIGFub255bW91c0NvbnNlbnRzQ29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZ1xuICAgICAgKVxuICAgICAgYGBgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50Piwgc2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UpO1xufVxuIl19