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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NavigationService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ21zTmF2aWdhdGlvbkNvbXBvbmVudCwgQ21zU2VydmljZSwgU2VtYW50aWNQYXRoU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uTm9kZSB9IGZyb20gJy4vbmF2aWdhdGlvbi1ub2RlLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5hdmlnYXRpb25TZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlKTtcbiAgICBjcmVhdGVOYXZpZ2F0aW9uKGRhdGEkOiBPYnNlcnZhYmxlPENtc05hdmlnYXRpb25Db21wb25lbnQ+KTogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uTm9kZT47XG4gICAgLyoqXG4gICAgICogcmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIGBOYXZpZ2F0aW9uTm9kZWAgZm9yIHRoZSBnaXZlbiBgQ21zTmF2aWdhdGlvbkNvbXBvbmVudGAuXG4gICAgICogVGhpcyBmdW5jdGlvbiB3aWxsIGxvYWQgdGhlIG5hdmlnYXRpb24gdW5kZXJseWluZyBlbnRyaWVzIGFuZCBjaGlsZHMgaWYgdGhleSBoYXZlbid0IGJlZW5cbiAgICAgKiBsb2FkZWQgc28gZmFyLlxuICAgICAqL1xuICAgIGdldE5hdmlnYXRpb25Ob2RlKGRhdGEkOiBPYnNlcnZhYmxlPENtc05hdmlnYXRpb25Db21wb25lbnQ+KTogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uTm9kZT47XG4gICAgLyoqXG4gICAgICogTG9hZHMgYWxsIG5hdmlnYXRpb24gZW50cnkgaXRlbXMnIHR5cGUgYW5kIGlkLiBEaXNwYXRjaCBhY3Rpb24gdG8gbG9hZCBhbGwgdGhlc2UgaXRlbXNcbiAgICAgKiBAcGFyYW0gbm9kZURhdGFcbiAgICAgKiBAcGFyYW0gcm9vdFxuICAgICAqIEBwYXJhbSBpdGVtc0xpc3RcbiAgICAgKi9cbiAgICBwcml2YXRlIGxvYWROYXZpZ2F0aW9uRW50cnlJdGVtcztcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgbm9kZSB0cmVlIGZvciB0aGUgdmlld1xuICAgICAqIEBwYXJhbSBub2RlRGF0YVxuICAgICAqIEBwYXJhbSBpdGVtc1xuICAgICAqL1xuICAgIHByaXZhdGUgcG9wdWxhdGVOYXZpZ2F0aW9uTm9kZTtcbiAgICAvKipcbiAgICAgKiBUaGUgbm9kZSBsaW5rIGlzIGRyaXZlbiBieSB0aGUgZmlyc3QgZW50cnkuXG4gICAgICovXG4gICAgcHJpdmF0ZSBwb3B1bGF0ZUxpbms7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBHZXRzIHRoZSBVUkwgb3IgbGluayB0byBhIHJlbGF0ZWQgaXRlbSAoY2F0ZWdvcnkpXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRMaW5rO1xufVxuIl19