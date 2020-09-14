import { CmsNavigationComponent, CmsService, SemanticPathService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { NavigationNode } from './navigation-node.model';
import * as ɵngcc0 from '@angular/core';
export declare class NavigationService {
    protected cmsService: CmsService;
    protected semanticPathService: SemanticPathService;
    constructor(cmsService: CmsService, semanticPathService: SemanticPathService);
    createNavigation(data$: Observable<CmsNavigationComponent>): Observable<NavigationNode>;
    /**
     * returns an observable with the `NavigationNode` for the given `CmsNavigationComponent`.
     * This function will load the navigation underlying entries and childs if they haven't been
     * loaded so far.
     */
    getNavigationNode(data$: Observable<CmsNavigationComponent>): Observable<NavigationNode>;
    /**
     * Loads all navigation entry items' type and id. Dispatch action to load all these items
     * @param nodeData
     * @param root
     * @param itemsList
     */
    private loadNavigationEntryItems;
    /**
     * Create a new node tree for the view
     * @param nodeData
     * @param items
     */
    private populateNavigationNode;
    /**
     * The node link is driven by the first entry.
     */
    private populateLink;
    /**
     *
     * Gets the URL or link to a related item (category),
     * also taking into account content pages (contentPageLabelOrId)
     * and product pages (productCode)
     */
    protected getLink(item: any): string | string[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NavigationService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENtc05hdmlnYXRpb25Db21wb25lbnQsIENtc1NlcnZpY2UsIFNlbWFudGljUGF0aFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbk5vZGUgfSBmcm9tICcuL25hdmlnYXRpb24tbm9kZS5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOYXZpZ2F0aW9uU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoY21zU2VydmljZTogQ21zU2VydmljZSwgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZSk7XG4gICAgY3JlYXRlTmF2aWdhdGlvbihkYXRhJDogT2JzZXJ2YWJsZTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50Pik6IE9ic2VydmFibGU8TmF2aWdhdGlvbk5vZGU+O1xuICAgIC8qKlxuICAgICAqIHJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aXRoIHRoZSBgTmF2aWdhdGlvbk5vZGVgIGZvciB0aGUgZ2l2ZW4gYENtc05hdmlnYXRpb25Db21wb25lbnRgLlxuICAgICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBsb2FkIHRoZSBuYXZpZ2F0aW9uIHVuZGVybHlpbmcgZW50cmllcyBhbmQgY2hpbGRzIGlmIHRoZXkgaGF2ZW4ndCBiZWVuXG4gICAgICogbG9hZGVkIHNvIGZhci5cbiAgICAgKi9cbiAgICBnZXROYXZpZ2F0aW9uTm9kZShkYXRhJDogT2JzZXJ2YWJsZTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50Pik6IE9ic2VydmFibGU8TmF2aWdhdGlvbk5vZGU+O1xuICAgIC8qKlxuICAgICAqIExvYWRzIGFsbCBuYXZpZ2F0aW9uIGVudHJ5IGl0ZW1zJyB0eXBlIGFuZCBpZC4gRGlzcGF0Y2ggYWN0aW9uIHRvIGxvYWQgYWxsIHRoZXNlIGl0ZW1zXG4gICAgICogQHBhcmFtIG5vZGVEYXRhXG4gICAgICogQHBhcmFtIHJvb3RcbiAgICAgKiBAcGFyYW0gaXRlbXNMaXN0XG4gICAgICovXG4gICAgcHJpdmF0ZSBsb2FkTmF2aWdhdGlvbkVudHJ5SXRlbXM7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IG5vZGUgdHJlZSBmb3IgdGhlIHZpZXdcbiAgICAgKiBAcGFyYW0gbm9kZURhdGFcbiAgICAgKiBAcGFyYW0gaXRlbXNcbiAgICAgKi9cbiAgICBwcml2YXRlIHBvcHVsYXRlTmF2aWdhdGlvbk5vZGU7XG4gICAgLyoqXG4gICAgICogVGhlIG5vZGUgbGluayBpcyBkcml2ZW4gYnkgdGhlIGZpcnN0IGVudHJ5LlxuICAgICAqL1xuICAgIHByaXZhdGUgcG9wdWxhdGVMaW5rO1xuICAgIC8qKlxuICAgICAqXG4gICAgICogR2V0cyB0aGUgVVJMIG9yIGxpbmsgdG8gYSByZWxhdGVkIGl0ZW0gKGNhdGVnb3J5KSxcbiAgICAgKiBhbHNvIHRha2luZyBpbnRvIGFjY291bnQgY29udGVudCBwYWdlcyAoY29udGVudFBhZ2VMYWJlbE9ySWQpXG4gICAgICogYW5kIHByb2R1Y3QgcGFnZXMgKHByb2R1Y3RDb2RlKVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRMaW5rKGl0ZW06IGFueSk6IHN0cmluZyB8IHN0cmluZ1tdO1xufVxuIl19