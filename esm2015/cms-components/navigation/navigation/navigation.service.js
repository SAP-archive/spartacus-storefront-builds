import { Injectable } from '@angular/core';
import { CmsService, SemanticPathService, } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class NavigationService {
    constructor(cmsService, semanticPathService) {
        this.cmsService = cmsService;
        this.semanticPathService = semanticPathService;
    }
    createNavigation(data$) {
        return combineLatest([data$, this.getNavigationNode(data$)]).pipe(map(([data, nav]) => {
            return data
                ? {
                    title: data.name,
                    children: [nav],
                }
                : undefined;
        }));
    }
    /**
     * returns an observable with the `NavigationNode` for the given `CmsNavigationComponent`.
     * This function will load the navigation underlying entries and children if they haven't been
     * loaded so far.
     */
    getNavigationNode(data$) {
        if (!data$) {
            return of();
        }
        return data$.pipe(filter((data) => !!data), switchMap((data) => {
            const navigation = data.navigationNode ? data.navigationNode : data;
            return this.cmsService.getNavigationEntryItems(navigation.uid).pipe(tap((items) => {
                if (items === undefined) {
                    this.loadNavigationEntryItems(navigation, true);
                }
                else {
                    // we should check whether the existing node items are what expected
                    const expectedItems = [];
                    this.loadNavigationEntryItems(navigation, false, expectedItems);
                    const existingItems = Object.keys(items).map((key) => items[key].uid);
                    const missingItems = expectedItems.filter((it) => !existingItems.includes(it.id));
                    if (missingItems.length > 0) {
                        this.cmsService.loadNavigationItems(navigation.uid, missingItems);
                    }
                }
            }), filter(Boolean), map((items) => this.populateNavigationNode(navigation, items)));
        }));
    }
    /**
     * Loads all navigation entry items' type and id. Dispatch action to load all these items
     * @param nodeData
     * @param root
     * @param itemsList
     */
    loadNavigationEntryItems(nodeData, root, itemsList = []) {
        if (nodeData.entries && nodeData.entries.length > 0) {
            nodeData.entries.forEach((entry) => {
                itemsList.push({
                    superType: entry.itemSuperType,
                    id: entry.itemId,
                });
            });
        }
        if (nodeData.children && nodeData.children.length > 0) {
            nodeData.children.forEach((child) => this.loadNavigationEntryItems(child, false, itemsList));
        }
        if (root) {
            this.cmsService.loadNavigationItems(nodeData.uid, itemsList);
        }
    }
    /**
     * Create a new node tree for the view
     * @param nodeData
     * @param items
     */
    populateNavigationNode(nodeData, items) {
        var _a;
        const node = {};
        if (nodeData.title) {
            // the node title will be populated by the first entry (if any)
            // if there's no nodeData.title available
            node.title = nodeData.title;
        }
        // populate style classes to apply CMS driven styling
        if (nodeData.styleClasses) {
            node.styleClasses = nodeData.styleClasses;
        }
        // populate style attributes to apply CMS driven styling
        if (nodeData.styleAttributes) {
            node.styleAttributes = nodeData.styleAttributes;
        }
        if (nodeData.entries && nodeData.entries.length > 0) {
            this.populateLink(node, nodeData.entries[0], items);
        }
        if (((_a = nodeData.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            const children = nodeData.children
                .map((child) => this.populateNavigationNode(child, items))
                .filter(Boolean);
            if (children.length > 0) {
                node.children = children;
            }
        }
        // return null in case there are no children
        return Object.keys(node).length === 0 ? null : node;
    }
    /**
     * The node link is driven by the first entry.
     */
    populateLink(node, entry, items) {
        const item = items[`${entry.itemId}_${entry.itemSuperType}`];
        // now we only consider CMSLinkComponent
        if (item && entry.itemType === 'CMSLinkComponent') {
            if (!node.title) {
                node.title = item.linkName;
            }
            const url = this.getLink(item);
            // only populate the node link if we have a visible node
            if (node.title && url) {
                node.url = url;
                // the backend provide boolean value for the target
                // in case the link should be opened in a new window
                if (item.target === 'true' || item.target === true) {
                    node.target = '_blank';
                }
            }
            // populate style classes to apply CMS driven styling
            if (item.styleClasses) {
                node.styleClasses = item.styleClasses;
            }
            // populate style attributes to apply CMS driven styling
            if (item.styleAttributes) {
                node.styleAttributes = item.styleAttributes;
            }
        }
    }
    /**
     *
     * Gets the URL or link to a related item (category),
     * also taking into account content pages (contentPageLabelOrId)
     * and product pages (productCode)
     */
    getLink(item) {
        if (item.url) {
            return item.url;
        }
        else if (item.contentPageLabelOrId) {
            return item.contentPageLabelOrId;
        }
        else if (item.categoryCode) {
            return this.semanticPathService.transform({
                cxRoute: 'category',
                params: {
                    code: item.categoryCode,
                    name: item.name,
                },
            });
        }
        else if (item.productCode) {
            return this.semanticPathService.transform({
                cxRoute: 'product',
                params: {
                    code: item.productCode,
                    name: item.name,
                },
            });
        }
    }
}
NavigationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NavigationService_Factory() { return new NavigationService(i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i1.SemanticPathService)); }, token: NavigationService, providedIn: "root" });
NavigationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
NavigationService.ctorParameters = () => [
    { type: CmsService },
    { type: SemanticPathService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFFTCxVQUFVLEVBQ1YsbUJBQW1CLEdBQ3BCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFNN0QsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixZQUNZLFVBQXNCLEVBQ3RCLG1CQUF3QztRQUR4QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDakQsQ0FBQztJQUVHLGdCQUFnQixDQUNyQixLQUF5QztRQUV6QyxPQUFPLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDL0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRTtZQUNsQixPQUFPLElBQUk7Z0JBQ1QsQ0FBQyxDQUFDO29CQUNFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDO2lCQUNoQjtnQkFDSCxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGlCQUFpQixDQUN0QixLQUF5QztRQUV6QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxFQUFFLEVBQUUsQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUNmLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUN4QixTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNqQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDcEUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ2pFLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNaLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtvQkFDdkIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDakQ7cUJBQU07b0JBQ0wsb0VBQW9FO29CQUNwRSxNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7b0JBQ3pCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO29CQUNoRSxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FDMUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQ3hCLENBQUM7b0JBQ0YsTUFBTSxZQUFZLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FDdkMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQ3ZDLENBQUM7b0JBQ0YsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FDakMsVUFBVSxDQUFDLEdBQUcsRUFDZCxZQUFZLENBQ2IsQ0FBQztxQkFDSDtpQkFDRjtZQUNILENBQUMsQ0FBQyxFQUNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FDL0QsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyx3QkFBd0IsQ0FDOUIsUUFBYSxFQUNiLElBQWEsRUFDYixTQUFTLEdBQUcsRUFBRTtRQUVkLElBQUksUUFBUSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDakMsU0FBUyxDQUFDLElBQUksQ0FBQztvQkFDYixTQUFTLEVBQUUsS0FBSyxDQUFDLGFBQWE7b0JBQzlCLEVBQUUsRUFBRSxLQUFLLENBQUMsTUFBTTtpQkFDakIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELElBQUksUUFBUSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNsQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FDdkQsQ0FBQztTQUNIO1FBRUQsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLHNCQUFzQixDQUFDLFFBQWEsRUFBRSxLQUFVOztRQUN0RCxNQUFNLElBQUksR0FBbUIsRUFBRSxDQUFDO1FBRWhDLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRTtZQUNsQiwrREFBK0Q7WUFDL0QseUNBQXlDO1lBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztTQUM3QjtRQUVELHFEQUFxRDtRQUNyRCxJQUFJLFFBQVEsQ0FBQyxZQUFZLEVBQUU7WUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1NBQzNDO1FBQ0Qsd0RBQXdEO1FBQ3hELElBQUksUUFBUSxDQUFDLGVBQWUsRUFBRTtZQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7U0FDakQ7UUFFRCxJQUFJLFFBQVEsQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDckQ7UUFFRCxJQUFJLE9BQUEsUUFBUSxDQUFDLFFBQVEsMENBQUUsTUFBTSxJQUFHLENBQUMsRUFBRTtZQUNqQyxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUTtpQkFDL0IsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUN6RCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkIsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7YUFDMUI7U0FDRjtRQUVELDRDQUE0QztRQUM1QyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdEQsQ0FBQztJQUVEOztPQUVHO0lBQ0ssWUFBWSxDQUFDLElBQW9CLEVBQUUsS0FBSyxFQUFFLEtBQUs7UUFDckQsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUU3RCx3Q0FBd0M7UUFDeEMsSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxrQkFBa0IsRUFBRTtZQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDNUI7WUFDRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLHdEQUF3RDtZQUN4RCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxFQUFFO2dCQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDZixtREFBbUQ7Z0JBQ25ELG9EQUFvRDtnQkFDcEQsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtvQkFDbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7aUJBQ3hCO2FBQ0Y7WUFDRCxxREFBcUQ7WUFDckQsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDdkM7WUFDRCx3REFBd0Q7WUFDeEQsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7YUFDN0M7U0FDRjtJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLE9BQU8sQ0FBQyxJQUFJO1FBQ3BCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUNqQjthQUFNLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO1NBQ2xDO2FBQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVk7b0JBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtpQkFDaEI7YUFDRixDQUFDLENBQUM7U0FDSjthQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxTQUFTO2dCQUNsQixNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXO29CQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7aUJBQ2hCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O1lBdk1GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBVEMsVUFBVTtZQUNWLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc05hdmlnYXRpb25Db21wb25lbnQsXG4gIENtc1NlcnZpY2UsXG4gIFNlbWFudGljUGF0aFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbk5vZGUgfSBmcm9tICcuL25hdmlnYXRpb24tbm9kZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlXG4gICkge31cblxuICBwdWJsaWMgY3JlYXRlTmF2aWdhdGlvbihcbiAgICBkYXRhJDogT2JzZXJ2YWJsZTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50PlxuICApOiBPYnNlcnZhYmxlPE5hdmlnYXRpb25Ob2RlPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW2RhdGEkLCB0aGlzLmdldE5hdmlnYXRpb25Ob2RlKGRhdGEkKV0pLnBpcGUoXG4gICAgICBtYXAoKFtkYXRhLCBuYXZdKSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIHRpdGxlOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbbmF2XSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgYE5hdmlnYXRpb25Ob2RlYCBmb3IgdGhlIGdpdmVuIGBDbXNOYXZpZ2F0aW9uQ29tcG9uZW50YC5cbiAgICogVGhpcyBmdW5jdGlvbiB3aWxsIGxvYWQgdGhlIG5hdmlnYXRpb24gdW5kZXJseWluZyBlbnRyaWVzIGFuZCBjaGlsZHJlbiBpZiB0aGV5IGhhdmVuJ3QgYmVlblxuICAgKiBsb2FkZWQgc28gZmFyLlxuICAgKi9cbiAgcHVibGljIGdldE5hdmlnYXRpb25Ob2RlKFxuICAgIGRhdGEkOiBPYnNlcnZhYmxlPENtc05hdmlnYXRpb25Db21wb25lbnQ+XG4gICk6IE9ic2VydmFibGU8TmF2aWdhdGlvbk5vZGU+IHtcbiAgICBpZiAoIWRhdGEkKSB7XG4gICAgICByZXR1cm4gb2YoKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGEkLnBpcGUoXG4gICAgICBmaWx0ZXIoKGRhdGEpID0+ICEhZGF0YSksXG4gICAgICBzd2l0Y2hNYXAoKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbiA9IGRhdGEubmF2aWdhdGlvbk5vZGUgPyBkYXRhLm5hdmlnYXRpb25Ob2RlIDogZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXROYXZpZ2F0aW9uRW50cnlJdGVtcyhuYXZpZ2F0aW9uLnVpZCkucGlwZShcbiAgICAgICAgICB0YXAoKGl0ZW1zKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB0aGlzLmxvYWROYXZpZ2F0aW9uRW50cnlJdGVtcyhuYXZpZ2F0aW9uLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIHdlIHNob3VsZCBjaGVjayB3aGV0aGVyIHRoZSBleGlzdGluZyBub2RlIGl0ZW1zIGFyZSB3aGF0IGV4cGVjdGVkXG4gICAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkSXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgdGhpcy5sb2FkTmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbiwgZmFsc2UsIGV4cGVjdGVkSXRlbXMpO1xuICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ0l0ZW1zID0gT2JqZWN0LmtleXMoaXRlbXMpLm1hcChcbiAgICAgICAgICAgICAgICAoa2V5KSA9PiBpdGVtc1trZXldLnVpZFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nSXRlbXMgPSBleHBlY3RlZEl0ZW1zLmZpbHRlcihcbiAgICAgICAgICAgICAgICAoaXQpID0+ICFleGlzdGluZ0l0ZW1zLmluY2x1ZGVzKGl0LmlkKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAobWlzc2luZ0l0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNtc1NlcnZpY2UubG9hZE5hdmlnYXRpb25JdGVtcyhcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb24udWlkLFxuICAgICAgICAgICAgICAgICAgbWlzc2luZ0l0ZW1zXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgICAgICBtYXAoKGl0ZW1zKSA9PiB0aGlzLnBvcHVsYXRlTmF2aWdhdGlvbk5vZGUobmF2aWdhdGlvbiwgaXRlbXMpKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIGFsbCBuYXZpZ2F0aW9uIGVudHJ5IGl0ZW1zJyB0eXBlIGFuZCBpZC4gRGlzcGF0Y2ggYWN0aW9uIHRvIGxvYWQgYWxsIHRoZXNlIGl0ZW1zXG4gICAqIEBwYXJhbSBub2RlRGF0YVxuICAgKiBAcGFyYW0gcm9vdFxuICAgKiBAcGFyYW0gaXRlbXNMaXN0XG4gICAqL1xuICBwcml2YXRlIGxvYWROYXZpZ2F0aW9uRW50cnlJdGVtcyhcbiAgICBub2RlRGF0YTogYW55LFxuICAgIHJvb3Q6IGJvb2xlYW4sXG4gICAgaXRlbXNMaXN0ID0gW11cbiAgKTogdm9pZCB7XG4gICAgaWYgKG5vZGVEYXRhLmVudHJpZXMgJiYgbm9kZURhdGEuZW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBub2RlRGF0YS5lbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGl0ZW1zTGlzdC5wdXNoKHtcbiAgICAgICAgICBzdXBlclR5cGU6IGVudHJ5Lml0ZW1TdXBlclR5cGUsXG4gICAgICAgICAgaWQ6IGVudHJ5Lml0ZW1JZCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAobm9kZURhdGEuY2hpbGRyZW4gJiYgbm9kZURhdGEuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgbm9kZURhdGEuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+XG4gICAgICAgIHRoaXMubG9hZE5hdmlnYXRpb25FbnRyeUl0ZW1zKGNoaWxkLCBmYWxzZSwgaXRlbXNMaXN0KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAocm9vdCkge1xuICAgICAgdGhpcy5jbXNTZXJ2aWNlLmxvYWROYXZpZ2F0aW9uSXRlbXMobm9kZURhdGEudWlkLCBpdGVtc0xpc3QpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgbm9kZSB0cmVlIGZvciB0aGUgdmlld1xuICAgKiBAcGFyYW0gbm9kZURhdGFcbiAgICogQHBhcmFtIGl0ZW1zXG4gICAqL1xuICBwcml2YXRlIHBvcHVsYXRlTmF2aWdhdGlvbk5vZGUobm9kZURhdGE6IGFueSwgaXRlbXM6IGFueSk6IE5hdmlnYXRpb25Ob2RlIHtcbiAgICBjb25zdCBub2RlOiBOYXZpZ2F0aW9uTm9kZSA9IHt9O1xuXG4gICAgaWYgKG5vZGVEYXRhLnRpdGxlKSB7XG4gICAgICAvLyB0aGUgbm9kZSB0aXRsZSB3aWxsIGJlIHBvcHVsYXRlZCBieSB0aGUgZmlyc3QgZW50cnkgKGlmIGFueSlcbiAgICAgIC8vIGlmIHRoZXJlJ3Mgbm8gbm9kZURhdGEudGl0bGUgYXZhaWxhYmxlXG4gICAgICBub2RlLnRpdGxlID0gbm9kZURhdGEudGl0bGU7XG4gICAgfVxuXG4gICAgLy8gcG9wdWxhdGUgc3R5bGUgY2xhc3NlcyB0byBhcHBseSBDTVMgZHJpdmVuIHN0eWxpbmdcbiAgICBpZiAobm9kZURhdGEuc3R5bGVDbGFzc2VzKSB7XG4gICAgICBub2RlLnN0eWxlQ2xhc3NlcyA9IG5vZGVEYXRhLnN0eWxlQ2xhc3NlcztcbiAgICB9XG4gICAgLy8gcG9wdWxhdGUgc3R5bGUgYXR0cmlidXRlcyB0byBhcHBseSBDTVMgZHJpdmVuIHN0eWxpbmdcbiAgICBpZiAobm9kZURhdGEuc3R5bGVBdHRyaWJ1dGVzKSB7XG4gICAgICBub2RlLnN0eWxlQXR0cmlidXRlcyA9IG5vZGVEYXRhLnN0eWxlQXR0cmlidXRlcztcbiAgICB9XG5cbiAgICBpZiAobm9kZURhdGEuZW50cmllcyAmJiBub2RlRGF0YS5lbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucG9wdWxhdGVMaW5rKG5vZGUsIG5vZGVEYXRhLmVudHJpZXNbMF0sIGl0ZW1zKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZURhdGEuY2hpbGRyZW4/Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gbm9kZURhdGEuY2hpbGRyZW5cbiAgICAgICAgLm1hcCgoY2hpbGQpID0+IHRoaXMucG9wdWxhdGVOYXZpZ2F0aW9uTm9kZShjaGlsZCwgaXRlbXMpKVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbm9kZS5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybiBudWxsIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNoaWxkcmVuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG5vZGUpLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBub2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBub2RlIGxpbmsgaXMgZHJpdmVuIGJ5IHRoZSBmaXJzdCBlbnRyeS5cbiAgICovXG4gIHByaXZhdGUgcG9wdWxhdGVMaW5rKG5vZGU6IE5hdmlnYXRpb25Ob2RlLCBlbnRyeSwgaXRlbXMpIHtcbiAgICBjb25zdCBpdGVtID0gaXRlbXNbYCR7ZW50cnkuaXRlbUlkfV8ke2VudHJ5Lml0ZW1TdXBlclR5cGV9YF07XG5cbiAgICAvLyBub3cgd2Ugb25seSBjb25zaWRlciBDTVNMaW5rQ29tcG9uZW50XG4gICAgaWYgKGl0ZW0gJiYgZW50cnkuaXRlbVR5cGUgPT09ICdDTVNMaW5rQ29tcG9uZW50Jykge1xuICAgICAgaWYgKCFub2RlLnRpdGxlKSB7XG4gICAgICAgIG5vZGUudGl0bGUgPSBpdGVtLmxpbmtOYW1lO1xuICAgICAgfVxuICAgICAgY29uc3QgdXJsID0gdGhpcy5nZXRMaW5rKGl0ZW0pO1xuICAgICAgLy8gb25seSBwb3B1bGF0ZSB0aGUgbm9kZSBsaW5rIGlmIHdlIGhhdmUgYSB2aXNpYmxlIG5vZGVcbiAgICAgIGlmIChub2RlLnRpdGxlICYmIHVybCkge1xuICAgICAgICBub2RlLnVybCA9IHVybDtcbiAgICAgICAgLy8gdGhlIGJhY2tlbmQgcHJvdmlkZSBib29sZWFuIHZhbHVlIGZvciB0aGUgdGFyZ2V0XG4gICAgICAgIC8vIGluIGNhc2UgdGhlIGxpbmsgc2hvdWxkIGJlIG9wZW5lZCBpbiBhIG5ldyB3aW5kb3dcbiAgICAgICAgaWYgKGl0ZW0udGFyZ2V0ID09PSAndHJ1ZScgfHwgaXRlbS50YXJnZXQgPT09IHRydWUpIHtcbiAgICAgICAgICBub2RlLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBwb3B1bGF0ZSBzdHlsZSBjbGFzc2VzIHRvIGFwcGx5IENNUyBkcml2ZW4gc3R5bGluZ1xuICAgICAgaWYgKGl0ZW0uc3R5bGVDbGFzc2VzKSB7XG4gICAgICAgIG5vZGUuc3R5bGVDbGFzc2VzID0gaXRlbS5zdHlsZUNsYXNzZXM7XG4gICAgICB9XG4gICAgICAvLyBwb3B1bGF0ZSBzdHlsZSBhdHRyaWJ1dGVzIHRvIGFwcGx5IENNUyBkcml2ZW4gc3R5bGluZ1xuICAgICAgaWYgKGl0ZW0uc3R5bGVBdHRyaWJ1dGVzKSB7XG4gICAgICAgIG5vZGUuc3R5bGVBdHRyaWJ1dGVzID0gaXRlbS5zdHlsZUF0dHJpYnV0ZXM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEdldHMgdGhlIFVSTCBvciBsaW5rIHRvIGEgcmVsYXRlZCBpdGVtIChjYXRlZ29yeSksXG4gICAqIGFsc28gdGFraW5nIGludG8gYWNjb3VudCBjb250ZW50IHBhZ2VzIChjb250ZW50UGFnZUxhYmVsT3JJZClcbiAgICogYW5kIHByb2R1Y3QgcGFnZXMgKHByb2R1Y3RDb2RlKVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldExpbmsoaXRlbSk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoaXRlbS51cmwpIHtcbiAgICAgIHJldHVybiBpdGVtLnVybDtcbiAgICB9IGVsc2UgaWYgKGl0ZW0uY29udGVudFBhZ2VMYWJlbE9ySWQpIHtcbiAgICAgIHJldHVybiBpdGVtLmNvbnRlbnRQYWdlTGFiZWxPcklkO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5jYXRlZ29yeUNvZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbWFudGljUGF0aFNlcnZpY2UudHJhbnNmb3JtKHtcbiAgICAgICAgY3hSb3V0ZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgY29kZTogaXRlbS5jYXRlZ29yeUNvZGUsXG4gICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpdGVtLnByb2R1Y3RDb2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLnRyYW5zZm9ybSh7XG4gICAgICAgIGN4Um91dGU6ICdwcm9kdWN0JyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgY29kZTogaXRlbS5wcm9kdWN0Q29kZSxcbiAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==