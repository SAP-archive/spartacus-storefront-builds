/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @param {?} data$
     * @return {?}
     */
    getNavigationNode(data$) {
        if (!data$) {
            return of();
        }
        return data$.pipe(filter(Boolean), switchMap((/**
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
                    this.getNavigationEntryItems(navigation, true);
                }
            })), filter(Boolean), map((/**
             * @param {?} items
             * @return {?}
             */
            items => this.createNode(navigation, items))));
        })));
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
        node.title = nodeData.title;
        if (nodeData.entries && nodeData.entries.length > 0) {
            this.addLinkToNode(node, nodeData.entries[0], items);
        }
        if (nodeData.children && nodeData.children.length > 0) {
            /** @type {?} */
            const children = this.createChildren(nodeData, items);
            node.children = children;
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
            if (!node.title) {
                node.title = item.linkName;
            }
            node.url = this.getLink(item);
            // if "NEWWINDOW", target is true
            node.target = item.target;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBRUwsVUFBVSxFQUNWLG1CQUFtQixHQUNwQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBTTdELE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBQzVCLFlBQ1ksVUFBc0IsRUFDdEIsbUJBQXdDO1FBRHhDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUNqRCxDQUFDOzs7OztJQUVHLGdCQUFnQixDQUNyQixLQUF5QztRQUV6QyxPQUFPLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDL0QsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRTtZQUNsQixPQUFPO2dCQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDaEIsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDO2FBQ2hCLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTSxpQkFBaUIsQ0FDdEIsS0FBeUM7UUFFekMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sRUFBRSxF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LFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7WUFsSkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVEMsVUFBVTtZQUNWLG1CQUFtQjs7Ozs7Ozs7SUFXakIsdUNBQWdDOzs7OztJQUNoQyxnREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNOYXZpZ2F0aW9uQ29tcG9uZW50LFxuICBDbXNTZXJ2aWNlLFxuICBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5hdmlnYXRpb25Ob2RlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLW5vZGUubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvblNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZVxuICApIHt9XG5cbiAgcHVibGljIGNyZWF0ZU5hdmlnYXRpb24oXG4gICAgZGF0YSQ6IE9ic2VydmFibGU8Q21zTmF2aWdhdGlvbkNvbXBvbmVudD5cbiAgKTogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uTm9kZT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtkYXRhJCwgdGhpcy5nZXROYXZpZ2F0aW9uTm9kZShkYXRhJCldKS5waXBlKFxuICAgICAgbWFwKChbZGF0YSwgbmF2XSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiBkYXRhLm5hbWUsXG4gICAgICAgICAgY2hpbGRyZW46IFtuYXZdLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGdldE5hdmlnYXRpb25Ob2RlKFxuICAgIGRhdGEkOiBPYnNlcnZhYmxlPENtc05hdmlnYXRpb25Db21wb25lbnQ+XG4gICk6IE9ic2VydmFibGU8TmF2aWdhdGlvbk5vZGU+IHtcbiAgICBpZiAoIWRhdGEkKSB7XG4gICAgICByZXR1cm4gb2YoKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGEkLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBzd2l0Y2hNYXAoZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb24gPSBkYXRhLm5hdmlnYXRpb25Ob2RlID8gZGF0YS5uYXZpZ2F0aW9uTm9kZSA6IGRhdGE7XG4gICAgICAgIHJldHVybiB0aGlzLmNtc1NlcnZpY2UuZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbi51aWQpLnBpcGUoXG4gICAgICAgICAgdGFwKGl0ZW1zID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgICAgIG1hcChpdGVtcyA9PiB0aGlzLmNyZWF0ZU5vZGUobmF2aWdhdGlvbiwgaXRlbXMpKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgbmF2aWdhdGlvbiBlbnRyeSBpdGVtcycgdHlwZSBhbmQgaWQuIERpc3BhdGNoIGFjdGlvbiB0byBsb2FkIGFsbCB0aGVzZSBpdGVtc1xuICAgKiBAcGFyYW0gbm9kZURhdGFcbiAgICogQHBhcmFtIHJvb3RcbiAgICogQHBhcmFtIGl0ZW1zTGlzdFxuICAgKi9cbiAgcHJpdmF0ZSBnZXROYXZpZ2F0aW9uRW50cnlJdGVtcyhcbiAgICBub2RlRGF0YTogYW55LFxuICAgIHJvb3Q6IGJvb2xlYW4sXG4gICAgaXRlbXNMaXN0ID0gW11cbiAgKSB7XG4gICAgaWYgKG5vZGVEYXRhLmVudHJpZXMgJiYgbm9kZURhdGEuZW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBub2RlRGF0YS5lbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICBpdGVtc0xpc3QucHVzaCh7XG4gICAgICAgICAgc3VwZXJUeXBlOiBlbnRyeS5pdGVtU3VwZXJUeXBlLFxuICAgICAgICAgIGlkOiBlbnRyeS5pdGVtSWQsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGVEYXRhLmNoaWxkcmVuICYmIG5vZGVEYXRhLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucHJvY2Vzc0NoaWxkcmVuKG5vZGVEYXRhLCBpdGVtc0xpc3QpO1xuICAgIH1cblxuICAgIGlmIChyb290KSB7XG4gICAgICBjb25zdCByb290VWlkID0gbm9kZURhdGEudWlkO1xuICAgICAgdGhpcy5jbXNTZXJ2aWNlLmxvYWROYXZpZ2F0aW9uSXRlbXMocm9vdFVpZCwgaXRlbXNMaXN0KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NDaGlsZHJlbihub2RlLCBpdGVtc0xpc3QpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIHRoaXMuZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMoY2hpbGQsIGZhbHNlLCBpdGVtc0xpc3QpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgbm9kZSB0cmVlIGZvciBkaXNwbGF5XG4gICAqIEBwYXJhbSBub2RlRGF0YVxuICAgKiBAcGFyYW0gaXRlbXNcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlTm9kZShub2RlRGF0YTogYW55LCBpdGVtczogYW55KTogTmF2aWdhdGlvbk5vZGUge1xuICAgIGNvbnN0IG5vZGU6IE5hdmlnYXRpb25Ob2RlID0ge307XG5cbiAgICBub2RlLnRpdGxlID0gbm9kZURhdGEudGl0bGU7XG5cbiAgICBpZiAobm9kZURhdGEuZW50cmllcyAmJiBub2RlRGF0YS5lbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYWRkTGlua1RvTm9kZShub2RlLCBub2RlRGF0YS5lbnRyaWVzWzBdLCBpdGVtcyk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGVEYXRhLmNoaWxkcmVuICYmIG5vZGVEYXRhLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5jcmVhdGVDaGlsZHJlbihub2RlRGF0YSwgaXRlbXMpO1xuICAgICAgbm9kZS5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRMaW5rVG9Ob2RlKG5vZGU6IE5hdmlnYXRpb25Ob2RlLCBlbnRyeSwgaXRlbXMpIHtcbiAgICBjb25zdCBpdGVtID0gaXRlbXNbYCR7ZW50cnkuaXRlbUlkfV8ke2VudHJ5Lml0ZW1TdXBlclR5cGV9YF07XG5cbiAgICAvLyBub3cgd2Ugb25seSBjb25zaWRlciBDTVNMaW5rQ29tcG9uZW50XG4gICAgaWYgKGVudHJ5Lml0ZW1UeXBlID09PSAnQ01TTGlua0NvbXBvbmVudCcgJiYgaXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoIW5vZGUudGl0bGUpIHtcbiAgICAgICAgbm9kZS50aXRsZSA9IGl0ZW0ubGlua05hbWU7XG4gICAgICB9XG5cbiAgICAgIG5vZGUudXJsID0gdGhpcy5nZXRMaW5rKGl0ZW0pO1xuXG4gICAgICAvLyBpZiBcIk5FV1dJTkRPV1wiLCB0YXJnZXQgaXMgdHJ1ZVxuICAgICAgbm9kZS50YXJnZXQgPSBpdGVtLnRhcmdldDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogR2V0cyB0aGUgVVJMIG9yIGxpbmsgdG8gYSByZWxhdGVkIGl0ZW0gKGNhdGVnb3J5KVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRMaW5rKGl0ZW0pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKGl0ZW0udXJsKSB7XG4gICAgICByZXR1cm4gaXRlbS51cmw7XG4gICAgfSBlbHNlIGlmIChpdGVtLmNhdGVnb3J5Q29kZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VtYW50aWNQYXRoU2VydmljZS50cmFuc2Zvcm0oe1xuICAgICAgICBjeFJvdXRlOiAnY2F0ZWdvcnknLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBjb2RlOiBpdGVtLmNhdGVnb3J5Q29kZSxcbiAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNoaWxkcmVuKG5vZGUsIGl0ZW1zKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXTtcblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgY29uc3QgY2hpbGROb2RlID0gdGhpcy5jcmVhdGVOb2RlKGNoaWxkLCBpdGVtcyk7XG4gICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG59XG4iXX0=