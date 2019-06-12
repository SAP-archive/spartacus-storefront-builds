import { CmsNavigationComponent, CmsService, SemanticPathService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { NavigationNode } from './navigation-node.model';
export declare class NavigationService {
    protected cmsService: CmsService;
    protected semanticPathService: SemanticPathService;
    constructor(cmsService: CmsService, semanticPathService: SemanticPathService);
    createNavigation(data$: Observable<CmsNavigationComponent>): Observable<NavigationNode>;
    getNavigationNode(data$: Observable<CmsNavigationComponent>): Observable<NavigationNode>;
    /**
     * Get all navigation entry items' type and id. Dispatch action to load all these items
     * @param nodeData
     * @param root
     * @param itemsList
     */
    private getNavigationEntryItems;
    private processChildren;
    /**
     * Create a new node tree for display
     * @param nodeData
     * @param items
     */
    private createNode;
    private addLinkToNode;
    /**
     *
     * Gets the URL or link to a related item (category)
     */
    private getLink;
    private createChildren;
}
