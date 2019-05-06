/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional } from '@angular/core';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { CmsService } from '@spartacus/core';
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
     * Get all navigation entry items' type and id. Dispatch action to load all these items
     * @param {?} nodeData
     * @param {?} root
     * @param {?=} itemsList
     * @return {?}
     */
    getNavigationEntryItems(nodeData, root, itemsList = []) {
        if (nodeData.children && nodeData.children.length > 0) {
            this.processChildren(nodeData, itemsList);
        }
        else if (nodeData.entries && nodeData.entries.length > 0) {
            nodeData.entries.forEach(entry => {
                itemsList.push({
                    superType: entry.itemSuperType,
                    id: entry.itemId,
                });
            });
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
     * @param {?} nodeData
     * @param {?} items
     * @return {?}
     */
    createNode(nodeData, items) {
        /** @type {?} */
        const node = {};
        node['title'] = nodeData.title;
        node['url'] = '';
        if (nodeData.children && nodeData.children.length > 0) {
            /** @type {?} */
            const children = this.createChildren(nodeData, items);
            node['children'] = children;
        }
        else if (nodeData.entries && nodeData.entries.length > 0) {
            /** @type {?} */
            const entry = nodeData.entries[0];
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
        return node;
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
    /**
     * @return {?}
     */
    getComponentData() {
        return this.componentData.data$;
    }
    /**
     * @return {?}
     */
    getNodes() {
        return this.getComponentData().pipe(switchMap(data => {
            if (data) {
                /** @type {?} */
                const navigation = data.navigationNode ? data.navigationNode : data;
                return this.cmsService.getNavigationEntryItems(navigation.uid).pipe(tap(items => {
                    if (items === undefined) {
                        this.getNavigationEntryItems(navigation, true, []);
                    }
                }), filter(items => items !== undefined), map(items => this.createNode(navigation, items)));
            }
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0QsT0FBTyxFQUEwQixVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUl4RixNQUFNLE9BQU8sMEJBQTBCOzs7OztJQUNyQyxZQUNZLFVBQXNCLEVBRXRCLGFBQXVEO1FBRnZELGVBQVUsR0FBVixVQUFVLENBQVk7UUFFdEIsa0JBQWEsR0FBYixhQUFhLENBQTBDO0lBQ2hFLENBQUM7Ozs7Ozs7O0lBUUcsdUJBQXVCLENBQUMsUUFBYSxFQUFFLElBQWEsRUFBRSxTQUFTLEdBQUcsRUFBRTtRQUN6RSxJQUFJLFFBQVEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzNDO2FBQU0sSUFBSSxRQUFRLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMxRCxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDL0IsU0FBUyxDQUFDLElBQUksQ0FBQztvQkFDYixTQUFTLEVBQUUsS0FBSyxDQUFD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RSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ1YsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO3dCQUN2QixJQUFJLENBQUMsdUJBQXVCLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztxQkFDcEQ7Z0JBQ0gsQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxFQUNwQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUNqRCxDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBcEdGLFVBQVU7Ozs7WUFMc0IsVUFBVTtZQUVsQyxnQkFBZ0IsdUJBT3BCLFFBQVE7Ozs7Ozs7SUFEVCxnREFBZ0M7Ozs7O0lBQ2hDLG1EQUNpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENtc05hdmlnYXRpb25Db21wb25lbnQsIENtc1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbk5vZGUgfSBmcm9tICcuL25hdmlnYXRpb24tbm9kZS5tb2RlbCc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQ29tcG9uZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zTmF2aWdhdGlvbkNvbXBvbmVudD5cbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIG5hdmlnYXRpb24gZW50cnkgaXRlbXMnIHR5cGUgYW5kIGlkLiBEaXNwYXRjaCBhY3Rpb24gdG8gbG9hZCBhbGwgdGhlc2UgaXRlbXNcbiAgICogQHBhcmFtIG5vZGVEYXRhXG4gICAqIEBwYXJhbSByb290XG4gICAqIEBwYXJhbSBpdGVtc0xpc3RcbiAgICovXG4gIHB1YmxpYyBnZXROYXZpZ2F0aW9uRW50cnlJdGVtcyhub2RlRGF0YTogYW55LCByb290OiBib29sZWFuLCBpdGVtc0xpc3QgPSBbXSkge1xuICAgIGlmIChub2RlRGF0YS5jaGlsZHJlbiAmJiBub2RlRGF0YS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnByb2Nlc3NDaGlsZHJlbihub2RlRGF0YSwgaXRlbXNMaXN0KTtcbiAgICB9IGVsc2UgaWYgKG5vZGVEYXRhLmVudHJpZXMgJiYgbm9kZURhdGEuZW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBub2RlRGF0YS5lbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICBpdGVtc0xpc3QucHVzaCh7XG4gICAgICAgICAgc3VwZXJUeXBlOiBlbnRyeS5pdGVtU3VwZXJUeXBlLFxuICAgICAgICAgIGlkOiBlbnRyeS5pdGVtSWQsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJvb3QpIHtcbiAgICAgIGNvbnN0IHJvb3RVaWQgPSBub2RlRGF0YS51aWQ7XG4gICAgICB0aGlzLmNtc1NlcnZpY2UubG9hZE5hdmlnYXRpb25JdGVtcyhyb290VWlkLCBpdGVtc0xpc3QpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc0NoaWxkcmVuKG5vZGUsIGl0ZW1zTGlzdCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgdGhpcy5nZXROYXZpZ2F0aW9uRW50cnlJdGVtcyhjaGlsZCwgZmFsc2UsIGl0ZW1zTGlzdCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBub2RlIHRyZWUgZm9yIGRpc3BsYXlcbiAgICogQHBhcmFtIG5vZGVEYXRhXG4gICAqIEBwYXJhbSBpdGVtc1xuICAgKi9cbiAgcHVibGljIGNyZWF0ZU5vZGUobm9kZURhdGE6IGFueSwgaXRlbXM6IGFueSk6IE5hdmlnYXRpb25Ob2RlIHtcbiAgICBjb25zdCBub2RlID0ge307XG5cbiAgICBub2RlWyd0aXRsZSddID0gbm9kZURhdGEudGl0bGU7XG4gICAgbm9kZVsndXJsJ10gPSAnJztcblxuICAgIGlmIChub2RlRGF0YS5jaGlsZHJlbiAmJiBub2RlRGF0YS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuY3JlYXRlQ2hpbGRyZW4obm9kZURhdGEsIGl0ZW1zKTtcbiAgICAgIG5vZGVbJ2NoaWxkcmVuJ10gPSBjaGlsZHJlbjtcbiAgICB9IGVsc2UgaWYgKG5vZGVEYXRhLmVudHJpZXMgJiYgbm9kZURhdGEuZW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBlbnRyeSA9IG5vZGVEYXRhLmVudHJpZXNbMF07XG4gICAgICBjb25zdCBpdGVtID0gaXRlbXNbYCR7ZW50cnkuaXRlbUlkfV8ke2VudHJ5Lml0ZW1TdXBlclR5cGV9YF07XG5cbiAgICAgIC8vIG5vdyB3ZSBvbmx5IGNvbnNpZGVyIENNU0xpbmtDb21wb25lbnRcbiAgICAgIGlmIChlbnRyeS5pdGVtVHlwZSA9PT0gJ0NNU0xpbmtDb21wb25lbnQnICYmIGl0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoIW5vZGVbJ3RpdGxlJ10pIHtcbiAgICAgICAgICBub2RlWyd0aXRsZSddID0gaXRlbS5saW5rTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBub2RlWyd1cmwnXSA9IGl0ZW0udXJsO1xuICAgICAgICAvLyBpZiBcIk5FV1dJTkRPV1wiLCB0YXJnZXQgaXMgdHJ1ZVxuICAgICAgICBub2RlWyd0YXJnZXQnXSA9IGl0ZW0udGFyZ2V0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDaGlsZHJlbihub2RlLCBpdGVtcykge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW107XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGUgPSB0aGlzLmNyZWF0ZU5vZGUoY2hpbGQsIGl0ZW1zKTtcbiAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGROb2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50RGF0YSgpOiBPYnNlcnZhYmxlPENtc05hdmlnYXRpb25Db21wb25lbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnREYXRhLmRhdGEkO1xuICB9XG5cbiAgZ2V0Tm9kZXMoKTogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uTm9kZT4ge1xuICAgIHJldHVybiB0aGlzLmdldENvbXBvbmVudERhdGEoKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIGNvbnN0IG5hdmlnYXRpb24gPSBkYXRhLm5hdmlnYXRpb25Ob2RlID8gZGF0YS5uYXZpZ2F0aW9uTm9kZSA6IGRhdGE7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXROYXZpZ2F0aW9uRW50cnlJdGVtcyhuYXZpZ2F0aW9uLnVpZCkucGlwZShcbiAgICAgICAgICAgIHRhcChpdGVtcyA9PiB7XG4gICAgICAgICAgICAgIGlmIChpdGVtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXROYXZpZ2F0aW9uRW50cnlJdGVtcyhuYXZpZ2F0aW9uLCB0cnVlLCBbXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZmlsdGVyKGl0ZW1zID0+IGl0ZW1zICE9PSB1bmRlZmluZWQpLFxuICAgICAgICAgICAgbWFwKGl0ZW1zID0+IHRoaXMuY3JlYXRlTm9kZShuYXZpZ2F0aW9uLCBpdGVtcykpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=