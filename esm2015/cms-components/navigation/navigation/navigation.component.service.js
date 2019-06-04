/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
export class NavigationComponentService {
    /**
     * @param {?} cmsService
     * @param {?} componentData
     */
    constructor(cmsService, componentData) {
        this.cmsService = cmsService;
        this.componentData = componentData;
    }
    /**
     * @return {?}
     */
    getComponentData() {
        return this.componentData.data$;
    }
    /**
     * @return {?}
     */
    createNavigation() {
        return combineLatest(this.getComponentData(), this.getNavigationNode()).pipe(map(([data, nav]) => {
            return {
                title: data.name,
                children: [nav],
            };
        }));
    }
    /**
     * @return {?}
     */
    getNavigationNode() {
        return this.getComponentData().pipe(filter(Boolean), switchMap(data => {
            /** @type {?} */
            const navigation = data.navigationNode ? data.navigationNode : data;
            return this.cmsService.getNavigationEntryItems(navigation.uid).pipe(tap(items => {
                if (items === undefined) {
                    this.getNavigationEntryItems(navigation, true);
                }
            }), filter(Boolean), map(items => this.createNode(navigation, items)));
        }));
    }
    /**
     * Get all navigation entry items' type and id. Dispatch action to load all these items
     * @private
     * @param {?} nodeData
     * @param {?} root
     * @param {?=} itemsList
     * @return {?}
     */
    getNavigationEntryItems(nodeData, root, itemsList = []) {
        if (nodeData.entries && nodeData.entries.length > 0) {
            nodeData.entries.forEach(entry => {
                itemsList.push({
                    superType: entry.itemSuperType,
                    id: entry.itemId,
                });
            });
        }
        if (nodeData.children && nodeData.children.length > 0) {
            this.processChildren(nodeData, itemsList);
        }
        if (root) {
            /** @type {?} */
            const rootUid = nodeData.uid;
            this.cmsService.loadNavigationItems(rootUid, itemsList);
        }
    }
    /**
     * @private
     * @param {?} node
     * @param {?} itemsList
     * @return {?}
     */
    processChildren(node, itemsList) {
        for (const child of node.children) {
            this.getNavigationEntryItems(child, false, itemsList);
        }
    }
    /**
     * Create a new node tree for display
     * @private
     * @param {?} nodeData
     * @param {?} items
     * @return {?}
     */
    createNode(nodeData, items) {
        /** @type {?} */
        const node = {};
        node['title'] = nodeData.title;
        if (nodeData.entries && nodeData.entries.length > 0) {
            this.addLinkToNode(node, nodeData.entries[0], items);
        }
        if (nodeData.children && nodeData.children.length > 0) {
            /** @type {?} */
            const children = this.createChildren(nodeData, items);
            node['children'] = children;
        }
        return node;
    }
    /**
     * @private
     * @param {?} node
     * @param {?} entry
     * @param {?} items
     * @return {?}
     */
    addLinkToNode(node, entry, items) {
        /** @type {?} */
        const item = items[`${entry.itemId}_${entry.itemSuperType}`];
        // now we only consider CMSLinkComponent
        if (entry.itemType === 'CMSLinkComponent' && item !== undefined) {
            if (!node['title']) {
                node['title'] = item.linkName;
            }
            node['url'] = item.url;
            // if "NEWWINDOW", target is true
            node['target'] = item.target;
        }
    }
    /**
     * @private
     * @param {?} node
     * @param {?} items
     * @return {?}
     */
    createChildren(node, items) {
        /** @type {?} */
        const children = [];
        for (const child of node.children) {
            /** @type {?} */
            const childNode = this.createNode(child, items);
            children.push(childNode);
        }
        return children;
    }
}
NavigationComponentService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NavigationComponentService.ctorParameters = () => [
    { type: CmsService },
    { type: CmsComponentData, decorators: [{ type: Optional }] }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    NavigationComponentService.prototype.cmsService;
    /**
     * @type {?}
     * @protected
     */
    NavigationComponentService.prototype.componentData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQTBCLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBSXhGLE1BQU0sT0FBTywwQkFBMEI7Ozs7O0lBQ3JDLFlBQ1ksVUFBc0IsRUFFdEIsYUFBdUQ7UUFGdkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUV0QixrQkFBYSxHQUFiLGFBQWEsQ0FBMEM7SUFDaEUsQ0FBQzs7OztJQUVHLGdCQUFnQjtRQUNyQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFTSxnQkFBZ0I7UUFDckIsT0FBTyxhQUFhLENBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUN2QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FDekIsQ0FBQyxJQUFJLENBQ0osR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRTtZQUNsQixPQUFPO2dCQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDaEIsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDO2FBQ2hCLENBQUM7UUFDSixDQUFD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O0lBRU8sYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSzs7Y0FDaEMsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRTVELHdDQUF3QztRQUN4QyxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssa0JBQWtCLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMvRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUMvQjtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLGlDQUFpQztZQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM5QjtJQUNILENBQUM7Ozs7Ozs7SUFFTyxjQUFjLENBQUMsSUFBSSxFQUFFLEtBQUs7O2NBQzFCLFFBQVEsR0FBRyxFQUFFO1FBQ25CLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTs7a0JBQzNCLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDL0MsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMxQjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7OztZQTNIRixVQUFVOzs7O1lBTnNCLFVBQVU7WUFHbEMsZ0JBQWdCLHVCQU9wQixRQUFROzs7Ozs7O0lBRFQsZ0RBQWdDOzs7OztJQUNoQyxtREFDaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zTmF2aWdhdGlvbkNvbXBvbmVudCwgQ21zU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uTm9kZSB9IGZyb20gJy4vbmF2aWdhdGlvbi1ub2RlLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25Db21wb25lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50PlxuICApIHt9XG5cbiAgcHVibGljIGdldENvbXBvbmVudERhdGEoKTogT2JzZXJ2YWJsZTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJDtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVOYXZpZ2F0aW9uKCk6IE9ic2VydmFibGU8TmF2aWdhdGlvbk5vZGU+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgIHRoaXMuZ2V0Q29tcG9uZW50RGF0YSgpLFxuICAgICAgdGhpcy5nZXROYXZpZ2F0aW9uTm9kZSgpXG4gICAgKS5waXBlKFxuICAgICAgbWFwKChbZGF0YSwgbmF2XSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiBkYXRhLm5hbWUsXG4gICAgICAgICAgY2hpbGRyZW46IFtuYXZdLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGdldE5hdmlnYXRpb25Ob2RlKCk6IE9ic2VydmFibGU8TmF2aWdhdGlvbk5vZGU+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnREYXRhKCkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIHN3aXRjaE1hcChkYXRhID0+IHtcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbiA9IGRhdGEubmF2aWdhdGlvbk5vZGUgPyBkYXRhLm5hdmlnYXRpb25Ob2RlIDogZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXROYXZpZ2F0aW9uRW50cnlJdGVtcyhuYXZpZ2F0aW9uLnVpZCkucGlwZShcbiAgICAgICAgICB0YXAoaXRlbXMgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW1zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXROYXZpZ2F0aW9uRW50cnlJdGVtcyhuYXZpZ2F0aW9uLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICAgICAgbWFwKGl0ZW1zID0+IHRoaXMuY3JlYXRlTm9kZShuYXZpZ2F0aW9uLCBpdGVtcykpXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBuYXZpZ2F0aW9uIGVudHJ5IGl0ZW1zJyB0eXBlIGFuZCBpZC4gRGlzcGF0Y2ggYWN0aW9uIHRvIGxvYWQgYWxsIHRoZXNlIGl0ZW1zXG4gICAqIEBwYXJhbSBub2RlRGF0YVxuICAgKiBAcGFyYW0gcm9vdFxuICAgKiBAcGFyYW0gaXRlbXNMaXN0XG4gICAqL1xuICBwcml2YXRlIGdldE5hdmlnYXRpb25FbnRyeUl0ZW1zKFxuICAgIG5vZGVEYXRhOiBhbnksXG4gICAgcm9vdDogYm9vbGVhbixcbiAgICBpdGVtc0xpc3QgPSBbXVxuICApIHtcbiAgICBpZiAobm9kZURhdGEuZW50cmllcyAmJiBub2RlRGF0YS5lbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIG5vZGVEYXRhLmVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGl0ZW1zTGlzdC5wdXNoKHtcbiAgICAgICAgICBzdXBlclR5cGU6IGVudHJ5Lml0ZW1TdXBlclR5cGUsXG4gICAgICAgICAgaWQ6IGVudHJ5Lml0ZW1JZCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAobm9kZURhdGEuY2hpbGRyZW4gJiYgbm9kZURhdGEuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5wcm9jZXNzQ2hpbGRyZW4obm9kZURhdGEsIGl0ZW1zTGlzdCk7XG4gICAgfVxuXG4gICAgaWYgKHJvb3QpIHtcbiAgICAgIGNvbnN0IHJvb3RVaWQgPSBub2RlRGF0YS51aWQ7XG4gICAgICB0aGlzLmNtc1NlcnZpY2UubG9hZE5hdmlnYXRpb25JdGVtcyhyb290VWlkLCBpdGVtc0xpc3QpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc0NoaWxkcmVuKG5vZGUsIGl0ZW1zTGlzdCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgdGhpcy5nZXROYXZpZ2F0aW9uRW50cnlJdGVtcyhjaGlsZCwgZmFsc2UsIGl0ZW1zTGlzdCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBub2RlIHRyZWUgZm9yIGRpc3BsYXlcbiAgICogQHBhcmFtIG5vZGVEYXRhXG4gICAqIEBwYXJhbSBpdGVtc1xuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVOb2RlKG5vZGVEYXRhOiBhbnksIGl0ZW1zOiBhbnkpOiBOYXZpZ2F0aW9uTm9kZSB7XG4gICAgY29uc3Qgbm9kZSA9IHt9O1xuXG4gICAgbm9kZVsndGl0bGUnXSA9IG5vZGVEYXRhLnRpdGxlO1xuXG4gICAgaWYgKG5vZGVEYXRhLmVudHJpZXMgJiYgbm9kZURhdGEuZW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmFkZExpbmtUb05vZGUobm9kZSwgbm9kZURhdGEuZW50cmllc1swXSwgaXRlbXMpO1xuICAgIH1cblxuICAgIGlmIChub2RlRGF0YS5jaGlsZHJlbiAmJiBub2RlRGF0YS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuY3JlYXRlQ2hpbGRyZW4obm9kZURhdGEsIGl0ZW1zKTtcbiAgICAgIG5vZGVbJ2NoaWxkcmVuJ10gPSBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkTGlua1RvTm9kZShub2RlLCBlbnRyeSwgaXRlbXMpIHtcbiAgICBjb25zdCBpdGVtID0gaXRlbXNbYCR7ZW50cnkuaXRlbUlkfV8ke2VudHJ5Lml0ZW1TdXBlclR5cGV9YF07XG5cbiAgICAvLyBub3cgd2Ugb25seSBjb25zaWRlciBDTVNMaW5rQ29tcG9uZW50XG4gICAgaWYgKGVudHJ5Lml0ZW1UeXBlID09PSAnQ01TTGlua0NvbXBvbmVudCcgJiYgaXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoIW5vZGVbJ3RpdGxlJ10pIHtcbiAgICAgICAgbm9kZVsndGl0bGUnXSA9IGl0ZW0ubGlua05hbWU7XG4gICAgICB9XG4gICAgICBub2RlWyd1cmwnXSA9IGl0ZW0udXJsO1xuICAgICAgLy8gaWYgXCJORVdXSU5ET1dcIiwgdGFyZ2V0IGlzIHRydWVcbiAgICAgIG5vZGVbJ3RhcmdldCddID0gaXRlbS50YXJnZXQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDaGlsZHJlbihub2RlLCBpdGVtcykge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW107XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGUgPSB0aGlzLmNyZWF0ZU5vZGUoY2hpbGQsIGl0ZW1zKTtcbiAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGROb2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG59XG4iXX0=