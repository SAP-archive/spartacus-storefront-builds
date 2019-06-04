import { CmsNavigationComponent, CmsService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { NavigationNode } from './navigation-node.model';
export declare class NavigationComponentService {
    protected cmsService: CmsService;
    protected componentData: CmsComponentData<CmsNavigationComponent>;
    constructor(cmsService: CmsService, componentData: CmsComponentData<CmsNavigationComponent>);
    getComponentData(): Observable<CmsNavigationComponent>;
    createNavigation(): Observable<NavigationNode>;
    getNavigationNode(): Observable<NavigationNode>;
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
    private createChildren;
}
