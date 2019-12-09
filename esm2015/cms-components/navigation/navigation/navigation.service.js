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
            // only populate the node link if we have a visible node
            if (node.title) {
                node.url = this.getLink(item);
                // if "NEWWINDOW", target is true
                node.target = item.target;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBRUwsVUFBVSxFQUNWLG1CQUFtQixHQUNwQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBTTdELE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBQzVCLFlBQ1ksVUFBc0IsRUFDdEIsbUJBQXdDO1FBRHhDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUNqRCxDQUFDOzs7OztJQUVHLGdCQUFnQixDQUNyQixLQUF5QztRQUV6QyxPQUFPLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDL0QsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRTtZQUNsQixPQUFPO2dCQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDaEIsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDO2FBQ2hCLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7SUFPTSxpQkFBaUIsQ0FDdEIsS0FBeUM7UUFFekMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sRUFBRSxFQUFFLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FDZixNQUFNOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLEVBQ3RCLFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTs7a0JBQ1QsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDbkUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ2pFLEdBQUc7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRTtnQkFDVixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ2pEO1lBQ0gsQ0FBQyxFQUFDLEVBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUc7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUMsQ0FDN0QsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7Ozs7SUFRTyx3QkFBd0IsQ0FDOUIsUUFBYSxFQUNiLElBQWEsRUFDYixTQUFTLEdBQUcsRUFBRTtRQUVkLElBQUksUUFBUSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQy9CLFNBQVMsQ0FBQyxJQUFJLENBQUM7b0JBQ2IsU0FBUyxFQUFFLEtBQUssQ0FBQyxhQUFhO29CQUM5QixFQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU07aUJBQ2pCLENBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLFFBQVEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JELFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2hDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUN2RCxDQUFDO1NBQ0g7UUFFRCxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM5RDtJQUNILENBQUM7Ozs7Ozs7O0lBT08sc0JBQXNCLENBQUMsUUFBYSxFQUFFLEtBQVU7O2NBQ2hELElBQUksR0FBbUIsRUFBRTtRQUUvQixJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDbEIsK0RBQStEO1lBQy9ELHlDQUF5QztZQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7U0FDN0I7UUFFRCxJQUFJLFFBQVEsQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDckQ7UUFFRCxJQUFJLFFBQVEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztrQkFDL0MsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRO2lCQUMvQixHQUFHOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFDO2lCQUN2RCxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ2xCLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2FBQzFCO1NBQ0Y7UUFFRCw0Q0FBNEM7UUFDNUMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RELENBQUM7Ozs7Ozs7OztJQUtPLFlBQVksQ0FBQyxJQUFvQixFQUFFLEtBQUssRUFBRSxLQUFLOztjQUMvQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFNUQsd0NBQXdDO1FBQ3hDLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssa0JBQWtCLEVBQUU7WUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQzVCO1lBQ0Qsd0RBQXdEO1lBQ3hELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLGlDQUFpQztnQkFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQzNCO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7OztJQU1PLE9BQU8sQ0FBQyxJQUFJO1FBQ2xCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUNqQjthQUFNLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZO29CQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7aUJBQ2hCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7WUFwSkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVEMsVUFBVTtZQUNWLG1CQUFtQjs7Ozs7Ozs7SUFXakIsdUNBQWdDOzs7OztJQUNoQyxnREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNOYXZpZ2F0aW9uQ29tcG9uZW50LFxuICBDbXNTZXJ2aWNlLFxuICBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5hdmlnYXRpb25Ob2RlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLW5vZGUubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvblNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZVxuICApIHt9XG5cbiAgcHVibGljIGNyZWF0ZU5hdmlnYXRpb24oXG4gICAgZGF0YSQ6IE9ic2VydmFibGU8Q21zTmF2aWdhdGlvbkNvbXBvbmVudD5cbiAgKTogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uTm9kZT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtkYXRhJCwgdGhpcy5nZXROYXZpZ2F0aW9uTm9kZShkYXRhJCldKS5waXBlKFxuICAgICAgbWFwKChbZGF0YSwgbmF2XSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiBkYXRhLm5hbWUsXG4gICAgICAgICAgY2hpbGRyZW46IFtuYXZdLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aXRoIHRoZSBgTmF2aWdhdGlvbk5vZGVgIGZvciB0aGUgZ2l2ZW4gYENtc05hdmlnYXRpb25Db21wb25lbnRgLlxuICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgbG9hZCB0aGUgbmF2aWdhdGlvbiB1bmRlcmx5aW5nIGVudHJpZXMgYW5kIGNoaWxkcyBpZiB0aGV5IGhhdmVuJ3QgYmVlblxuICAgKiBsb2FkZWQgc28gZmFyLlxuICAgKi9cbiAgcHVibGljIGdldE5hdmlnYXRpb25Ob2RlKFxuICAgIGRhdGEkOiBPYnNlcnZhYmxlPENtc05hdmlnYXRpb25Db21wb25lbnQ+XG4gICk6IE9ic2VydmFibGU8TmF2aWdhdGlvbk5vZGU+IHtcbiAgICBpZiAoIWRhdGEkKSB7XG4gICAgICByZXR1cm4gb2YoKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGEkLnBpcGUoXG4gICAgICBmaWx0ZXIoZGF0YSA9PiAhIWRhdGEpLFxuICAgICAgc3dpdGNoTWFwKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uID0gZGF0YS5uYXZpZ2F0aW9uTm9kZSA/IGRhdGEubmF2aWdhdGlvbk5vZGUgOiBkYXRhO1xuICAgICAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldE5hdmlnYXRpb25FbnRyeUl0ZW1zKG5hdmlnYXRpb24udWlkKS5waXBlKFxuICAgICAgICAgIHRhcChpdGVtcyA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB0aGlzLmxvYWROYXZpZ2F0aW9uRW50cnlJdGVtcyhuYXZpZ2F0aW9uLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICAgICAgbWFwKGl0ZW1zID0+IHRoaXMucG9wdWxhdGVOYXZpZ2F0aW9uTm9kZShuYXZpZ2F0aW9uLCBpdGVtcykpXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgYWxsIG5hdmlnYXRpb24gZW50cnkgaXRlbXMnIHR5cGUgYW5kIGlkLiBEaXNwYXRjaCBhY3Rpb24gdG8gbG9hZCBhbGwgdGhlc2UgaXRlbXNcbiAgICogQHBhcmFtIG5vZGVEYXRhXG4gICAqIEBwYXJhbSByb290XG4gICAqIEBwYXJhbSBpdGVtc0xpc3RcbiAgICovXG4gIHByaXZhdGUgbG9hZE5hdmlnYXRpb25FbnRyeUl0ZW1zKFxuICAgIG5vZGVEYXRhOiBhbnksXG4gICAgcm9vdDogYm9vbGVhbixcbiAgICBpdGVtc0xpc3QgPSBbXVxuICApOiB2b2lkIHtcbiAgICBpZiAobm9kZURhdGEuZW50cmllcyAmJiBub2RlRGF0YS5lbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIG5vZGVEYXRhLmVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGl0ZW1zTGlzdC5wdXNoKHtcbiAgICAgICAgICBzdXBlclR5cGU6IGVudHJ5Lml0ZW1TdXBlclR5cGUsXG4gICAgICAgICAgaWQ6IGVudHJ5Lml0ZW1JZCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAobm9kZURhdGEuY2hpbGRyZW4gJiYgbm9kZURhdGEuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgbm9kZURhdGEuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PlxuICAgICAgICB0aGlzLmxvYWROYXZpZ2F0aW9uRW50cnlJdGVtcyhjaGlsZCwgZmFsc2UsIGl0ZW1zTGlzdClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHJvb3QpIHtcbiAgICAgIHRoaXMuY21zU2VydmljZS5sb2FkTmF2aWdhdGlvbkl0ZW1zKG5vZGVEYXRhLnVpZCwgaXRlbXNMaXN0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IG5vZGUgdHJlZSBmb3IgdGhlIHZpZXdcbiAgICogQHBhcmFtIG5vZGVEYXRhXG4gICAqIEBwYXJhbSBpdGVtc1xuICAgKi9cbiAgcHJpdmF0ZSBwb3B1bGF0ZU5hdmlnYXRpb25Ob2RlKG5vZGVEYXRhOiBhbnksIGl0ZW1zOiBhbnkpOiBOYXZpZ2F0aW9uTm9kZSB7XG4gICAgY29uc3Qgbm9kZTogTmF2aWdhdGlvbk5vZGUgPSB7fTtcblxuICAgIGlmIChub2RlRGF0YS50aXRsZSkge1xuICAgICAgLy8gdGhlIG5vZGUgdGl0bGUgd2lsbCBiZSBwb3B1bGF0ZWQgYnkgdGhlIGZpcnN0IGVudHJ5IChpZiBhbnkpXG4gICAgICAvLyBpZiB0aGVyZSdzIG5vIG5vZGVEYXRhLnRpdGxlIGF2YWlsYWJsZVxuICAgICAgbm9kZS50aXRsZSA9IG5vZGVEYXRhLnRpdGxlO1xuICAgIH1cblxuICAgIGlmIChub2RlRGF0YS5lbnRyaWVzICYmIG5vZGVEYXRhLmVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5wb3B1bGF0ZUxpbmsobm9kZSwgbm9kZURhdGEuZW50cmllc1swXSwgaXRlbXMpO1xuICAgIH1cblxuICAgIGlmIChub2RlRGF0YS5jaGlsZHJlbiAmJiBub2RlRGF0YS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IG5vZGVEYXRhLmNoaWxkcmVuXG4gICAgICAgIC5tYXAoY2hpbGQgPT4gdGhpcy5wb3B1bGF0ZU5hdmlnYXRpb25Ob2RlKGNoaWxkLCBpdGVtcykpXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbik7XG4gICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBub2RlLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIG51bGwgaW4gY2FzZSB0aGVyZSBhcmUgbm8gY2hpbGRyZW5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMobm9kZSkubGVuZ3RoID09PSAwID8gbnVsbCA6IG5vZGU7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG5vZGUgbGluayBpcyBkcml2ZW4gYnkgdGhlIGZpcnN0IGVudHJ5LlxuICAgKi9cbiAgcHJpdmF0ZSBwb3B1bGF0ZUxpbmsobm9kZTogTmF2aWdhdGlvbk5vZGUsIGVudHJ5LCBpdGVtcykge1xuICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tgJHtlbnRyeS5pdGVtSWR9XyR7ZW50cnkuaXRlbVN1cGVyVHlwZX1gXTtcblxuICAgIC8vIG5vdyB3ZSBvbmx5IGNvbnNpZGVyIENNU0xpbmtDb21wb25lbnRcbiAgICBpZiAoaXRlbSAmJiBlbnRyeS5pdGVtVHlwZSA9PT0gJ0NNU0xpbmtDb21wb25lbnQnKSB7XG4gICAgICBpZiAoIW5vZGUudGl0bGUpIHtcbiAgICAgICAgbm9kZS50aXRsZSA9IGl0ZW0ubGlua05hbWU7XG4gICAgICB9XG4gICAgICAvLyBvbmx5IHBvcHVsYXRlIHRoZSBub2RlIGxpbmsgaWYgd2UgaGF2ZSBhIHZpc2libGUgbm9kZVxuICAgICAgaWYgKG5vZGUudGl0bGUpIHtcbiAgICAgICAgbm9kZS51cmwgPSB0aGlzLmdldExpbmsoaXRlbSk7XG4gICAgICAgIC8vIGlmIFwiTkVXV0lORE9XXCIsIHRhcmdldCBpcyB0cnVlXG4gICAgICAgIG5vZGUudGFyZ2V0ID0gaXRlbS50YXJnZXQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEdldHMgdGhlIFVSTCBvciBsaW5rIHRvIGEgcmVsYXRlZCBpdGVtIChjYXRlZ29yeSlcbiAgICovXG4gIHByaXZhdGUgZ2V0TGluayhpdGVtKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIGlmIChpdGVtLnVybCkge1xuICAgICAgcmV0dXJuIGl0ZW0udXJsO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5jYXRlZ29yeUNvZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbWFudGljUGF0aFNlcnZpY2UudHJhbnNmb3JtKHtcbiAgICAgICAgY3hSb3V0ZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgY29kZTogaXRlbS5jYXRlZ29yeUNvZGUsXG4gICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=