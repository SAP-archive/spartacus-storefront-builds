import { CmsNavigationComponent, CmsService } from '@spartacus/core';
import { NavigationNode } from './navigation-node.model';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { Observable } from 'rxjs';
export declare class NavigationComponentService {
    protected cmsService: CmsService;
    protected componentData: CmsComponentData<CmsNavigationComponent>;
    constructor(cmsService: CmsService, componentData: CmsComponentData<CmsNavigationComponent>);
    /**
     * Get all navigation entry items' type and id. Dispatch action to load all these items
     * @param nodeData
     * @param root
     * @param itemsList
     */
    getNavigationEntryItems(nodeData: any, root: boolean, itemsList?: any[]): void;
    private processChildren;
    /**
     * Create a new node tree for display
     * @param nodeData
     * @param items
     */
    createNode(nodeData: any, items: any): NavigationNode;
    private createChildren;
    getComponentData(): Observable<CmsNavigationComponent>;
    getNodes(): Observable<NavigationNode>;
}
