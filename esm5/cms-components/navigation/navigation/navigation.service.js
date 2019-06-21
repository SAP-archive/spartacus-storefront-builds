/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CmsService, SemanticPathService, } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var NavigationService = /** @class */ (function () {
    function NavigationService(cmsService, semanticPathService) {
        this.cmsService = cmsService;
        this.semanticPathService = semanticPathService;
    }
    /**
     * @param {?} data$
     * @return {?}
     */
    NavigationService.prototype.createNavigation = /**
     * @param {?} data$
     * @return {?}
     */
    function (data$) {
        return combineLatest([data$, this.getNavigationNode(data$)]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), data = _b[0], nav = _b[1];
            return {
                title: data.name,
                children: [nav],
            };
        })));
    };
    /**
     * @param {?} data$
     * @return {?}
     */
    NavigationService.prototype.getNavigationNode = /**
     * @param {?} data$
     * @return {?}
     */
    function (data$) {
        var _this = this;
        if (!data$) {
            return of();
        }
        return data$.pipe(filter(Boolean), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var navigation = data.navigationNode ? data.navigationNode : data;
            return _this.cmsService.getNavigationEntryItems(navigation.uid).pipe(tap((/**
             * @param {?} items
             * @return {?}
             */
            function (items) {
                if (items === undefined) {
                    _this.getNavigationEntryItems(navigation, true);
                }
            })), filter(Boolean), map((/**
             * @param {?} items
             * @return {?}
             */
            function (items) { return _this.createNode(navigation, items); })));
        })));
    };
    /**
     * Get all navigation entry items' type and id. Dispatch action to load all these items
     * @param nodeData
     * @param root
     * @param itemsList
     */
    /**
     * Get all navigation entry items' type and id. Dispatch action to load all these items
     * @private
     * @param {?} nodeData
     * @param {?} root
     * @param {?=} itemsList
     * @return {?}
     */
    NavigationService.prototype.getNavigationEntryItems = /**
     * Get all navigation entry items' type and id. Dispatch action to load all these items
     * @private
     * @param {?} nodeData
     * @param {?} root
     * @param {?=} itemsList
     * @return {?}
     */
    function (nodeData, root, itemsList) {
        if (itemsList === void 0) { itemsList = []; }
        if (nodeData.entries && nodeData.entries.length > 0) {
            nodeData.entries.forEach((/**
             * @param {?} entry
             * @return {?}
             */
            function (entry) {
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
            var rootUid = nodeData.uid;
            this.cmsService.loadNavigationItems(rootUid, itemsList);
        }
    };
    /**
     * @private
     * @param {?} node
     * @param {?} itemsList
     * @return {?}
     */
    NavigationService.prototype.processChildren = /**
     * @private
     * @param {?} node
     * @param {?} itemsList
     * @return {?}
     */
    function (node, itemsList) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                this.getNavigationEntryItems(child, false, itemsList);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Create a new node tree for display
     * @param nodeData
     * @param items
     */
    /**
     * Create a new node tree for display
     * @private
     * @param {?} nodeData
     * @param {?} items
     * @return {?}
     */
    NavigationService.prototype.createNode = /**
     * Create a new node tree for display
     * @private
     * @param {?} nodeData
     * @param {?} items
     * @return {?}
     */
    function (nodeData, items) {
        /** @type {?} */
        var node = {};
        node.title = nodeData.title;
        if (nodeData.entries && nodeData.entries.length > 0) {
            this.addLinkToNode(node, nodeData.entries[0], items);
        }
        if (nodeData.children && nodeData.children.length > 0) {
            /** @type {?} */
            var children = this.createChildren(nodeData, items);
            node.children = children;
        }
        return node;
    };
    /**
     * @private
     * @param {?} node
     * @param {?} entry
     * @param {?} items
     * @return {?}
     */
    NavigationService.prototype.addLinkToNode = /**
     * @private
     * @param {?} node
     * @param {?} entry
     * @param {?} items
     * @return {?}
     */
    function (node, entry, items) {
        /** @type {?} */
        var item = items[entry.itemId + "_" + entry.itemSuperType];
        // now we only consider CMSLinkComponent
        if (entry.itemType === 'CMSLinkComponent' && item !== undefined) {
            if (!node.title) {
                node.title = item.linkName;
            }
            node.url = this.getLink(item);
            // if "NEWWINDOW", target is true
            node.target = item.target;
        }
    };
    /**
     *
     * Gets the URL or link to a related item (category)
     */
    /**
     *
     * Gets the URL or link to a related item (category)
     * @private
     * @param {?} item
     * @return {?}
     */
    NavigationService.prototype.getLink = /**
     *
     * Gets the URL or link to a related item (category)
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
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
    };
    /**
     * @private
     * @param {?} node
     * @param {?} items
     * @return {?}
     */
    NavigationService.prototype.createChildren = /**
     * @private
     * @param {?} node
     * @param {?} items
     * @return {?}
     */
    function (node, items) {
        var e_2, _a;
        /** @type {?} */
        var children = [];
        try {
            for (var _b = tslib_1.__values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                /** @type {?} */
                var childNode = this.createNode(child, items);
                children.push(childNode);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return children;
    };
    NavigationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    NavigationService.ctorParameters = function () { return [
        { type: CmsService },
        { type: SemanticPathService }
    ]; };
    /** @nocollapse */ NavigationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NavigationService_Factory() { return new NavigationService(i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i1.SemanticPathService)); }, token: NavigationService, providedIn: "root" });
    return NavigationService;
}());
export { NavigationService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUVMLFVBQVUsRUFDVixtQkFBbUIsR0FDcEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUc3RDtJQUlFLDJCQUNZLFVBQXNCLEVBQ3RCLG1CQUF3QztRQUR4QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDakQsQ0FBQzs7Ozs7SUFFRyw0Q0FBZ0I7Ozs7SUFBdkIsVUFDRSxLQUF5QztRQUV6QyxPQUFPLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDL0QsR0FBRzs7OztRQUFDLFVBQUMsRUFBVztnQkFBWCwwQkFBVyxFQUFWLFlBQUksRUFBRSxXQUFHO1lBQ2IsT0FBTztnQkFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2hCLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQzthQUNoQixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU0sNkNBQWlCOzs7O0lBQXhCLFVBQ0UsS0FBeUM7UUFEM0MsaUJBcUJDO1FBbEJDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixP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QVEsR0FBRyxFQUFFOztZQUVuQixLQUFvQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBOUIsSUFBTSxLQUFLLFdBQUE7O29CQUNSLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7Z0JBQy9DLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDMUI7Ozs7Ozs7OztRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7O2dCQWxKRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVRDLFVBQVU7Z0JBQ1YsbUJBQW1COzs7NEJBSnJCO0NBNkpDLEFBbkpELElBbUpDO1NBaEpZLGlCQUFpQjs7Ozs7O0lBRTFCLHVDQUFnQzs7Ozs7SUFDaEMsZ0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zTmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgQ21zU2VydmljZSxcbiAgU2VtYW50aWNQYXRoU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uTm9kZSB9IGZyb20gJy4vbmF2aWdhdGlvbi1ub2RlLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyBjcmVhdGVOYXZpZ2F0aW9uKFxuICAgIGRhdGEkOiBPYnNlcnZhYmxlPENtc05hdmlnYXRpb25Db21wb25lbnQ+XG4gICk6IE9ic2VydmFibGU8TmF2aWdhdGlvbk5vZGU+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbZGF0YSQsIHRoaXMuZ2V0TmF2aWdhdGlvbk5vZGUoZGF0YSQpXSkucGlwZShcbiAgICAgIG1hcCgoW2RhdGEsIG5hdl0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogZGF0YS5uYW1lLFxuICAgICAgICAgIGNoaWxkcmVuOiBbbmF2XSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXROYXZpZ2F0aW9uTm9kZShcbiAgICBkYXRhJDogT2JzZXJ2YWJsZTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50PlxuICApOiBPYnNlcnZhYmxlPE5hdmlnYXRpb25Ob2RlPiB7XG4gICAgaWYgKCFkYXRhJCkge1xuICAgICAgcmV0dXJuIG9mKCk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhJC5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgc3dpdGNoTWFwKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uID0gZGF0YS5uYXZpZ2F0aW9uTm9kZSA/IGRhdGEubmF2aWdhdGlvbk5vZGUgOiBkYXRhO1xuICAgICAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldE5hdmlnYXRpb25FbnRyeUl0ZW1zKG5hdmlnYXRpb24udWlkKS5waXBlKFxuICAgICAgICAgIHRhcChpdGVtcyA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB0aGlzLmdldE5hdmlnYXRpb25FbnRyeUl0ZW1zKG5hdmlnYXRpb24sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgICAgICBtYXAoaXRlbXMgPT4gdGhpcy5jcmVhdGVOb2RlKG5hdmlnYXRpb24sIGl0ZW1zKSlcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIG5hdmlnYXRpb24gZW50cnkgaXRlbXMnIHR5cGUgYW5kIGlkLiBEaXNwYXRjaCBhY3Rpb24gdG8gbG9hZCBhbGwgdGhlc2UgaXRlbXNcbiAgICogQHBhcmFtIG5vZGVEYXRhXG4gICAqIEBwYXJhbSByb290XG4gICAqIEBwYXJhbSBpdGVtc0xpc3RcbiAgICovXG4gIHByaXZhdGUgZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMoXG4gICAgbm9kZURhdGE6IGFueSxcbiAgICByb290OiBib29sZWFuLFxuICAgIGl0ZW1zTGlzdCA9IFtdXG4gICkge1xuICAgIGlmIChub2RlRGF0YS5lbnRyaWVzICYmIG5vZGVEYXRhLmVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgbm9kZURhdGEuZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgaXRlbXNMaXN0LnB1c2goe1xuICAgICAgICAgIHN1cGVyVHlwZTogZW50cnkuaXRlbVN1cGVyVHlwZSxcbiAgICAgICAgICBpZDogZW50cnkuaXRlbUlkLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChub2RlRGF0YS5jaGlsZHJlbiAmJiBub2RlRGF0YS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnByb2Nlc3NDaGlsZHJlbihub2RlRGF0YSwgaXRlbXNMaXN0KTtcbiAgICB9XG5cbiAgICBpZiAocm9vdCkge1xuICAgICAgY29uc3Qgcm9vdFVpZCA9IG5vZGVEYXRhLnVpZDtcbiAgICAgIHRoaXMuY21zU2VydmljZS5sb2FkTmF2aWdhdGlvbkl0ZW1zKHJvb3RVaWQsIGl0ZW1zTGlzdCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzQ2hpbGRyZW4obm9kZSwgaXRlbXNMaXN0KTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICB0aGlzLmdldE5hdmlnYXRpb25FbnRyeUl0ZW1zKGNoaWxkLCBmYWxzZSwgaXRlbXNMaXN0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IG5vZGUgdHJlZSBmb3IgZGlzcGxheVxuICAgKiBAcGFyYW0gbm9kZURhdGFcbiAgICogQHBhcmFtIGl0ZW1zXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZU5vZGUobm9kZURhdGE6IGFueSwgaXRlbXM6IGFueSk6IE5hdmlnYXRpb25Ob2RlIHtcbiAgICBjb25zdCBub2RlOiBOYXZpZ2F0aW9uTm9kZSA9IHt9O1xuXG4gICAgbm9kZS50aXRsZSA9IG5vZGVEYXRhLnRpdGxlO1xuXG4gICAgaWYgKG5vZGVEYXRhLmVudHJpZXMgJiYgbm9kZURhdGEuZW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmFkZExpbmtUb05vZGUobm9kZSwgbm9kZURhdGEuZW50cmllc1swXSwgaXRlbXMpO1xuICAgIH1cblxuICAgIGlmIChub2RlRGF0YS5jaGlsZHJlbiAmJiBub2RlRGF0YS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuY3JlYXRlQ2hpbGRyZW4obm9kZURhdGEsIGl0ZW1zKTtcbiAgICAgIG5vZGUuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkTGlua1RvTm9kZShub2RlOiBOYXZpZ2F0aW9uTm9kZSwgZW50cnksIGl0ZW1zKSB7XG4gICAgY29uc3QgaXRlbSA9IGl0ZW1zW2Ake2VudHJ5Lml0ZW1JZH1fJHtlbnRyeS5pdGVtU3VwZXJUeXBlfWBdO1xuXG4gICAgLy8gbm93IHdlIG9ubHkgY29uc2lkZXIgQ01TTGlua0NvbXBvbmVudFxuICAgIGlmIChlbnRyeS5pdGVtVHlwZSA9PT0gJ0NNU0xpbmtDb21wb25lbnQnICYmIGl0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKCFub2RlLnRpdGxlKSB7XG4gICAgICAgIG5vZGUudGl0bGUgPSBpdGVtLmxpbmtOYW1lO1xuICAgICAgfVxuXG4gICAgICBub2RlLnVybCA9IHRoaXMuZ2V0TGluayhpdGVtKTtcblxuICAgICAgLy8gaWYgXCJORVdXSU5ET1dcIiwgdGFyZ2V0IGlzIHRydWVcbiAgICAgIG5vZGUudGFyZ2V0ID0gaXRlbS50YXJnZXQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEdldHMgdGhlIFVSTCBvciBsaW5rIHRvIGEgcmVsYXRlZCBpdGVtIChjYXRlZ29yeSlcbiAgICovXG4gIHByaXZhdGUgZ2V0TGluayhpdGVtKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIGlmIChpdGVtLnVybCkge1xuICAgICAgcmV0dXJuIGl0ZW0udXJsO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5jYXRlZ29yeUNvZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbWFudGljUGF0aFNlcnZpY2UudHJhbnNmb3JtKHtcbiAgICAgICAgY3hSb3V0ZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgY29kZTogaXRlbS5jYXRlZ29yeUNvZGUsXG4gICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDaGlsZHJlbihub2RlLCBpdGVtcykge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IHRoaXMuY3JlYXRlTm9kZShjaGlsZCwgaXRlbXMpO1xuICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxufVxuIl19