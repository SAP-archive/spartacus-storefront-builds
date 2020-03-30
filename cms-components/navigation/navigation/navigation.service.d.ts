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
     * Gets the URL or link to a related item (category)
     */
    private getLink;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NavigationService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbXNOYXZpZ2F0aW9uQ29tcG9uZW50LCBDbXNTZXJ2aWNlLCBTZW1hbnRpY1BhdGhTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5hdmlnYXRpb25Ob2RlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLW5vZGUubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmF2aWdhdGlvblNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2UpO1xuICAgIGNyZWF0ZU5hdmlnYXRpb24oZGF0YSQ6IE9ic2VydmFibGU8Q21zTmF2aWdhdGlvbkNvbXBvbmVudD4pOiBPYnNlcnZhYmxlPE5hdmlnYXRpb25Ob2RlPjtcbiAgICAvKipcbiAgICAgKiByZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgYE5hdmlnYXRpb25Ob2RlYCBmb3IgdGhlIGdpdmVuIGBDbXNOYXZpZ2F0aW9uQ29tcG9uZW50YC5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgbG9hZCB0aGUgbmF2aWdhdGlvbiB1bmRlcmx5aW5nIGVudHJpZXMgYW5kIGNoaWxkcyBpZiB0aGV5IGhhdmVuJ3QgYmVlblxuICAgICAqIGxvYWRlZCBzbyBmYXIuXG4gICAgICovXG4gICAgZ2V0TmF2aWdhdGlvbk5vZGUoZGF0YSQ6IE9ic2VydmFibGU8Q21zTmF2aWdhdGlvbkNvbXBvbmVudD4pOiBPYnNlcnZhYmxlPE5hdmlnYXRpb25Ob2RlPjtcbiAgICAvKipcbiAgICAgKiBMb2FkcyBhbGwgbmF2aWdhdGlvbiBlbnRyeSBpdGVtcycgdHlwZSBhbmQgaWQuIERpc3BhdGNoIGFjdGlvbiB0byBsb2FkIGFsbCB0aGVzZSBpdGVtc1xuICAgICAqIEBwYXJhbSBub2RlRGF0YVxuICAgICAqIEBwYXJhbSByb290XG4gICAgICogQHBhcmFtIGl0ZW1zTGlzdFxuICAgICAqL1xuICAgIHByaXZhdGUgbG9hZE5hdmlnYXRpb25FbnRyeUl0ZW1zO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBub2RlIHRyZWUgZm9yIHRoZSB2aWV3XG4gICAgICogQHBhcmFtIG5vZGVEYXRhXG4gICAgICogQHBhcmFtIGl0ZW1zXG4gICAgICovXG4gICAgcHJpdmF0ZSBwb3B1bGF0ZU5hdmlnYXRpb25Ob2RlO1xuICAgIC8qKlxuICAgICAqIFRoZSBub2RlIGxpbmsgaXMgZHJpdmVuIGJ5IHRoZSBmaXJzdCBlbnRyeS5cbiAgICAgKi9cbiAgICBwcml2YXRlIHBvcHVsYXRlTGluaztcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEdldHMgdGhlIFVSTCBvciBsaW5rIHRvIGEgcmVsYXRlZCBpdGVtIChjYXRlZ29yeSlcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldExpbms7XG59XG4iXX0=