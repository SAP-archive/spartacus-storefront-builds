/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CmsService, SemanticPathService, } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class NavigationService {
    /**
     * @param {?} cmsService
     * @param {?} semanticPathService
     */
    constructor(cmsService, semanticPathService) {
        this.cmsService = cmsService;
        this.semanticPathService = semanticPathService;
    }
    /**
     * @param {?} data$
     * @return {?}
     */
    createNavigation(data$) {
        return combineLatest([data$, this.getNavigationNode(data$)]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([data, nav]) => {
            return {
                title: data.name,
                children: [nav],
            };
        })));
    }
    /**
     * returns an observable with the `NavigationNode` for the given `CmsNavigationComponent`.
     * This function will load the navigation underlying entries and childs if they haven't been
     * loaded so far.
     * @param {?} data$
     * @return {?}
     */
    getNavigationNode(data$) {
        if (!data$) {
            return of();
        }
        return data$.pipe(filter((/**
         * @param {?} data
         * @return {?}
         */
        data => !!data)), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            /** @type {?} */
            const navigation = data.navigationNode ? data.navigationNode : data;
            return this.cmsService.getNavigationEntryItems(navigation.uid).pipe(tap((/**
             * @param {?} items
             * @return {?}
             */
            items => {
                if (items === undefined) {
                    this.loadNavigationEntryItems(navigation, true);
                }
            })), filter(Boolean), map((/**
             * @param {?} items
             * @return {?}
             */
            items => this.populateNavigationNode(navigation, items))));
        })));
    }
    /**
     * Loads all navigation entry items' type and id. Dispatch action to load all these items
     * @private
     * @param {?} nodeData
     * @param {?} root
     * @param {?=} itemsList
     * @return {?}
     */
    loadNavigationEntryItems(nodeData, root, itemsList = []) {
        if (nodeData.entries && nodeData.entries.length > 0) {
            nodeData.entries.forEach((/**
             * @param {?} entry
             * @return {?}
             */
            entry => {
                itemsList.push({
                    superType: entry.itemSuperType,
                    id: entry.itemId,
                });
            }));
        }
        if (nodeData.children && nodeData.children.length > 0) {
            nodeData.children.forEach((/**
             * @param {?} child
             * @return {?}
             */
            child => this.loadNavigationEntryItems(child, false, itemsList)));
        }
        if (root) {
            this.cmsService.loadNavigationItems(nodeData.uid, itemsList);
        }
    }
    /**
     * Create a new node tree for the view
     * @private
     * @param {?} nodeData
     * @param {?} items
     * @return {?}
     */
    populateNavigationNode(nodeData, items) {
        /** @type {?} */
        const node = {};
        if (nodeData.title) {
            // the node title will be populated by the first entry (if any)
            // if there's no nodeData.title available
            node.title = nodeData.title;
        }
        if (nodeData.entries && nodeData.entries.length > 0) {
            this.populateLink(node, nodeData.entries[0], items);
        }
        if (nodeData.children && nodeData.children.length > 0) {
            /** @type {?} */
            const children = nodeData.children
                .map((/**
             * @param {?} child
             * @return {?}
             */
            child => this.populateNavigationNode(child, items)))
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
     * @private
     * @param {?} node
     * @param {?} entry
     * @param {?} items
     * @return {?}
     */
    populateLink(node, entry, items) {
        /** @type {?} */
        const item = items[`${entry.itemId}_${entry.itemSuperType}`];
        // now we only consider CMSLinkComponent
        if (item && entry.itemType === 'CMSLinkComponent') {
            if (!node.title) {
                node.title = item.linkName;
            }
            /** @type {?} */
            const url = this.getLink(item);
            // only populate the node link if we have a visible node
            if (node.title && url) {
                node.url = url;
                // the backend provide boolean value for the target
                // in case the link should be opened in a new window
                node.target = !!item.target ? '_blank' : '';
            }
        }
    }
    /**
     *
     * Gets the URL or link to a related item (category)
     * @private
     * @param {?} item
     * @return {?}
     */
    getLink(item) {
        if (item.url) {
            return item.url;
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
    }
}
NavigationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
NavigationService.ctorParameters = () => [
    { type: CmsService },
    { type: SemanticPathService }
];
/** @nocollapse */ NavigationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NavigationService_Factory() { return new NavigationService(i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i1.SemanticPathService)); }, token: NavigationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    NavigationService.prototype.cmsService;
    /**
     * @type {?}
     * @protected
     */
    NavigationService.prototype.semanticPathService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBRUwsVUFBVSxFQUNWLG1CQUFtQixHQUNwQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBTTdELE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBQzVCLFlBQ1ksVUFBc0IsRUFDdEIsbUJBQXdDO1FBRHhDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUNqRCxDQUFDOzs7OztJQUVHLGdCQUFnQixDQUNyQixLQUF5QztRQUV6QyxPQUFPLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDL0QsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRTtZQUNsQixPQUFPO2dCQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDaEIsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDO2FBQ2hCLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7SUFPTSxpQkFBaUIsQ0FDdEIsS0FBeUM7UUFFekMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sRUFBRSxFQUFFLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FDZixNQUFNOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLEVBQ3RCLFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTs7a0JBQ1QsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDbkUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ2pFLEdBQUc7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRTtnQkFDVixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ2pEO1lBQ0gsQ0FBQyxFQUFDLEVBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUc7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUMsQ0FDN0QsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7Ozs7SUFRTyx3QkFBd0IsQ0FDOUIsUUFBYSxFQUNiLElBQWEsRUFDYixTQUFTLEdBQUcsRUFBRTtRQUVkLElBQUksUUFBUSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQy9CLFNBQVMsQ0FBQyxJQUFJLENBQUM7b0JBQ2IsU0FBUyxFQUFFLEtBQUssQ0FBQyxhQUFhO29CQUM5QixFQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU07aUJBQ2pCLENBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLFFBQVEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JELFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2hDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUN2RCxDQUFDO1NBQ0g7UUFFRCxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM5RDtJQUNILENBQUM7Ozs7Ozs7O0lBT08sc0JBQXNCLENBQUMsUUFBYSxFQUFFLEtBQVU7O2NBQ2hELElBQUksR0FBbUIsRUFBRTtRQUUvQixJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDbEIsK0RBQStEO1lBQy9ELHlDQUF5QztZQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7U0FDN0I7UUFFRCxJQUFJLFFBQVEsQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDckQ7UUFFRCxJQUFJLFFBQVEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztrQkFDL0MsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRO2lCQUMvQixHQUFHOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFDO2lCQUN2RCxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ2xCLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2FBQzFCO1NBQ0Y7UUFFRCw0Q0FBNEM7UUFDNUMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RELENBQUM7Ozs7Ozs7OztJQUtPLFlBQVksQ0FBQyxJQUFvQixFQUFFLEtBQUssRUFBRSxLQUFLOztjQUMvQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFNUQsd0NBQXdDO1FBQ3hDLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssa0JBQWtCLEVBQUU7WUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQzVCOztrQkFDSyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDOUIsd0RBQXdEO1lBQ3hELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUNmLG1EQUFtRDtnQkFDbkQsb0RBQW9EO2dCQUNwRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUM3QztTQUNGO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFNTyxPQUFPLENBQUMsSUFBSTtRQUNsQixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDakI7YUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDO2dCQUN4QyxPQUFPLEVBQUUsVUFBVTtnQkFDbkIsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWTtvQkFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2lCQUNoQjthQUNGLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7O1lBdEpGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVRDLFVBQVU7WUFDVixtQkFBbUI7Ozs7Ozs7O0lBV2pCLHVDQUFnQzs7Ozs7SUFDaEMsZ0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zTmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgQ21zU2VydmljZSxcbiAgU2VtYW50aWNQYXRoU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uTm9kZSB9IGZyb20gJy4vbmF2aWdhdGlvbi1ub2RlLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyBjcmVhdGVOYXZpZ2F0aW9uKFxuICAgIGRhdGEkOiBPYnNlcnZhYmxlPENtc05hdmlnYXRpb25Db21wb25lbnQ+XG4gICk6IE9ic2VydmFibGU8TmF2aWdhdGlvbk5vZGU+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbZGF0YSQsIHRoaXMuZ2V0TmF2aWdhdGlvbk5vZGUoZGF0YSQpXSkucGlwZShcbiAgICAgIG1hcCgoW2RhdGEsIG5hdl0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogZGF0YS5uYW1lLFxuICAgICAgICAgIGNoaWxkcmVuOiBbbmF2XSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgYE5hdmlnYXRpb25Ob2RlYCBmb3IgdGhlIGdpdmVuIGBDbXNOYXZpZ2F0aW9uQ29tcG9uZW50YC5cbiAgICogVGhpcyBmdW5jdGlvbiB3aWxsIGxvYWQgdGhlIG5hdmlnYXRpb24gdW5kZXJseWluZyBlbnRyaWVzIGFuZCBjaGlsZHMgaWYgdGhleSBoYXZlbid0IGJlZW5cbiAgICogbG9hZGVkIHNvIGZhci5cbiAgICovXG4gIHB1YmxpYyBnZXROYXZpZ2F0aW9uTm9kZShcbiAgICBkYXRhJDogT2JzZXJ2YWJsZTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50PlxuICApOiBPYnNlcnZhYmxlPE5hdmlnYXRpb25Ob2RlPiB7XG4gICAgaWYgKCFkYXRhJCkge1xuICAgICAgcmV0dXJuIG9mKCk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhJC5waXBlKFxuICAgICAgZmlsdGVyKGRhdGEgPT4gISFkYXRhKSxcbiAgICAgIHN3aXRjaE1hcChkYXRhID0+IHtcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbiA9IGRhdGEubmF2aWdhdGlvbk5vZGUgPyBkYXRhLm5hdmlnYXRpb25Ob2RlIDogZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXROYXZpZ2F0aW9uRW50cnlJdGVtcyhuYXZpZ2F0aW9uLnVpZCkucGlwZShcbiAgICAgICAgICB0YXAoaXRlbXMgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW1zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5sb2FkTmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgICAgIG1hcChpdGVtcyA9PiB0aGlzLnBvcHVsYXRlTmF2aWdhdGlvbk5vZGUobmF2aWdhdGlvbiwgaXRlbXMpKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIGFsbCBuYXZpZ2F0aW9uIGVudHJ5IGl0ZW1zJyB0eXBlIGFuZCBpZC4gRGlzcGF0Y2ggYWN0aW9uIHRvIGxvYWQgYWxsIHRoZXNlIGl0ZW1zXG4gICAqIEBwYXJhbSBub2RlRGF0YVxuICAgKiBAcGFyYW0gcm9vdFxuICAgKiBAcGFyYW0gaXRlbXNMaXN0XG4gICAqL1xuICBwcml2YXRlIGxvYWROYXZpZ2F0aW9uRW50cnlJdGVtcyhcbiAgICBub2RlRGF0YTogYW55LFxuICAgIHJvb3Q6IGJvb2xlYW4sXG4gICAgaXRlbXNMaXN0ID0gW11cbiAgKTogdm9pZCB7XG4gICAgaWYgKG5vZGVEYXRhLmVudHJpZXMgJiYgbm9kZURhdGEuZW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBub2RlRGF0YS5lbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICBpdGVtc0xpc3QucHVzaCh7XG4gICAgICAgICAgc3VwZXJUeXBlOiBlbnRyeS5pdGVtU3VwZXJUeXBlLFxuICAgICAgICAgIGlkOiBlbnRyeS5pdGVtSWQsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGVEYXRhLmNoaWxkcmVuICYmIG5vZGVEYXRhLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIG5vZGVEYXRhLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT5cbiAgICAgICAgdGhpcy5sb2FkTmF2aWdhdGlvbkVudHJ5SXRlbXMoY2hpbGQsIGZhbHNlLCBpdGVtc0xpc3QpXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChyb290KSB7XG4gICAgICB0aGlzLmNtc1NlcnZpY2UubG9hZE5hdmlnYXRpb25JdGVtcyhub2RlRGF0YS51aWQsIGl0ZW1zTGlzdCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBub2RlIHRyZWUgZm9yIHRoZSB2aWV3XG4gICAqIEBwYXJhbSBub2RlRGF0YVxuICAgKiBAcGFyYW0gaXRlbXNcbiAgICovXG4gIHByaXZhdGUgcG9wdWxhdGVOYXZpZ2F0aW9uTm9kZShub2RlRGF0YTogYW55LCBpdGVtczogYW55KTogTmF2aWdhdGlvbk5vZGUge1xuICAgIGNvbnN0IG5vZGU6IE5hdmlnYXRpb25Ob2RlID0ge307XG5cbiAgICBpZiAobm9kZURhdGEudGl0bGUpIHtcbiAgICAgIC8vIHRoZSBub2RlIHRpdGxlIHdpbGwgYmUgcG9wdWxhdGVkIGJ5IHRoZSBmaXJzdCBlbnRyeSAoaWYgYW55KVxuICAgICAgLy8gaWYgdGhlcmUncyBubyBub2RlRGF0YS50aXRsZSBhdmFpbGFibGVcbiAgICAgIG5vZGUudGl0bGUgPSBub2RlRGF0YS50aXRsZTtcbiAgICB9XG5cbiAgICBpZiAobm9kZURhdGEuZW50cmllcyAmJiBub2RlRGF0YS5lbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucG9wdWxhdGVMaW5rKG5vZGUsIG5vZGVEYXRhLmVudHJpZXNbMF0sIGl0ZW1zKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZURhdGEuY2hpbGRyZW4gJiYgbm9kZURhdGEuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBub2RlRGF0YS5jaGlsZHJlblxuICAgICAgICAubWFwKGNoaWxkID0+IHRoaXMucG9wdWxhdGVOYXZpZ2F0aW9uTm9kZShjaGlsZCwgaXRlbXMpKVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbm9kZS5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybiBudWxsIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNoaWxkcmVuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG5vZGUpLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBub2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBub2RlIGxpbmsgaXMgZHJpdmVuIGJ5IHRoZSBmaXJzdCBlbnRyeS5cbiAgICovXG4gIHByaXZhdGUgcG9wdWxhdGVMaW5rKG5vZGU6IE5hdmlnYXRpb25Ob2RlLCBlbnRyeSwgaXRlbXMpIHtcbiAgICBjb25zdCBpdGVtID0gaXRlbXNbYCR7ZW50cnkuaXRlbUlkfV8ke2VudHJ5Lml0ZW1TdXBlclR5cGV9YF07XG5cbiAgICAvLyBub3cgd2Ugb25seSBjb25zaWRlciBDTVNMaW5rQ29tcG9uZW50XG4gICAgaWYgKGl0ZW0gJiYgZW50cnkuaXRlbVR5cGUgPT09ICdDTVNMaW5rQ29tcG9uZW50Jykge1xuICAgICAgaWYgKCFub2RlLnRpdGxlKSB7XG4gICAgICAgIG5vZGUudGl0bGUgPSBpdGVtLmxpbmtOYW1lO1xuICAgICAgfVxuICAgICAgY29uc3QgdXJsID0gdGhpcy5nZXRMaW5rKGl0ZW0pO1xuICAgICAgLy8gb25seSBwb3B1bGF0ZSB0aGUgbm9kZSBsaW5rIGlmIHdlIGhhdmUgYSB2aXNpYmxlIG5vZGVcbiAgICAgIGlmIChub2RlLnRpdGxlICYmIHVybCkge1xuICAgICAgICBub2RlLnVybCA9IHVybDtcbiAgICAgICAgLy8gdGhlIGJhY2tlbmQgcHJvdmlkZSBib29sZWFuIHZhbHVlIGZvciB0aGUgdGFyZ2V0XG4gICAgICAgIC8vIGluIGNhc2UgdGhlIGxpbmsgc2hvdWxkIGJlIG9wZW5lZCBpbiBhIG5ldyB3aW5kb3dcbiAgICAgICAgbm9kZS50YXJnZXQgPSAhIWl0ZW0udGFyZ2V0ID8gJ19ibGFuaycgOiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogR2V0cyB0aGUgVVJMIG9yIGxpbmsgdG8gYSByZWxhdGVkIGl0ZW0gKGNhdGVnb3J5KVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRMaW5rKGl0ZW0pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKGl0ZW0udXJsKSB7XG4gICAgICByZXR1cm4gaXRlbS51cmw7XG4gICAgfSBlbHNlIGlmIChpdGVtLmNhdGVnb3J5Q29kZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VtYW50aWNQYXRoU2VydmljZS50cmFuc2Zvcm0oe1xuICAgICAgICBjeFJvdXRlOiAnY2F0ZWdvcnknLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBjb2RlOiBpdGVtLmNhdGVnb3J5Q29kZSxcbiAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==