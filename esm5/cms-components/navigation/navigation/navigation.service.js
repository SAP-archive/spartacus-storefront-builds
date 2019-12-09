/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * returns an observable with the `NavigationNode` for the given `CmsNavigationComponent`.
     * This function will load the navigation underlying entries and childs if they haven't been
     * loaded so far.
     */
    /**
     * returns an observable with the `NavigationNode` for the given `CmsNavigationComponent`.
     * This function will load the navigation underlying entries and childs if they haven't been
     * loaded so far.
     * @param {?} data$
     * @return {?}
     */
    NavigationService.prototype.getNavigationNode = /**
     * returns an observable with the `NavigationNode` for the given `CmsNavigationComponent`.
     * This function will load the navigation underlying entries and childs if they haven't been
     * loaded so far.
     * @param {?} data$
     * @return {?}
     */
    function (data$) {
        var _this = this;
        if (!data$) {
            return of();
        }
        return data$.pipe(filter((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return !!data; })), switchMap((/**
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
                    _this.loadNavigationEntryItems(navigation, true);
                }
            })), filter(Boolean), map((/**
             * @param {?} items
             * @return {?}
             */
            function (items) { return _this.populateNavigationNode(navigation, items); })));
        })));
    };
    /**
     * Loads all navigation entry items' type and id. Dispatch action to load all these items
     * @param nodeData
     * @param root
     * @param itemsList
     */
    /**
     * Loads all navigation entry items' type and id. Dispatch action to load all these items
     * @private
     * @param {?} nodeData
     * @param {?} root
     * @param {?=} itemsList
     * @return {?}
     */
    NavigationService.prototype.loadNavigationEntryItems = /**
     * Loads all navigation entry items' type and id. Dispatch action to load all these items
     * @private
     * @param {?} nodeData
     * @param {?} root
     * @param {?=} itemsList
     * @return {?}
     */
    function (nodeData, root, itemsList) {
        var _this = this;
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
            nodeData.children.forEach((/**
             * @param {?} child
             * @return {?}
             */
            function (child) {
                return _this.loadNavigationEntryItems(child, false, itemsList);
            }));
        }
        if (root) {
            this.cmsService.loadNavigationItems(nodeData.uid, itemsList);
        }
    };
    /**
     * Create a new node tree for the view
     * @param nodeData
     * @param items
     */
    /**
     * Create a new node tree for the view
     * @private
     * @param {?} nodeData
     * @param {?} items
     * @return {?}
     */
    NavigationService.prototype.populateNavigationNode = /**
     * Create a new node tree for the view
     * @private
     * @param {?} nodeData
     * @param {?} items
     * @return {?}
     */
    function (nodeData, items) {
        var _this = this;
        /** @type {?} */
        var node = {};
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
            var children = nodeData.children
                .map((/**
             * @param {?} child
             * @return {?}
             */
            function (child) { return _this.populateNavigationNode(child, items); }))
                .filter(Boolean);
            if (children.length > 0) {
                node.children = children;
            }
        }
        // return null in case there are no children
        return Object.keys(node).length === 0 ? null : node;
    };
    /**
     * The node link is driven by the first entry.
     */
    /**
     * The node link is driven by the first entry.
     * @private
     * @param {?} node
     * @param {?} entry
     * @param {?} items
     * @return {?}
     */
    NavigationService.prototype.populateLink = /**
     * The node link is driven by the first entry.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUVMLFVBQVUsRUFDVixtQkFBbUIsR0FDcEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUc3RDtJQUlFLDJCQUNZLFVBQXNCLEVBQ3RCLG1CQUF3QztRQUR4QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDakQsQ0FBQzs7Ozs7SUFFRyw0Q0FBZ0I7Ozs7SUFBdkIsVUFDRSxLQUF5QztRQUV6QyxPQUFPLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDL0QsR0FBRzs7OztRQUFDLFVBQUMsRUFBVztnQkFBWCwwQkFBVyxFQUFWLFlBQUksRUFBRSxXQUFHO1lBQ2IsT0FBTztnQkFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2hCLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQzthQUNoQixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7OztJQUNJLDZDQUFpQjs7Ozs7OztJQUF4QixVQUNFLEtBQXlDO1FBRDNDLGlCQXFCQztRQWxCQyxJQUFJLENB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SUFBSSxDQUFDLEdBQUcsQ0FBQztTQUNqQjthQUFNLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZO29CQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7aUJBQ2hCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkFwSkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFUQyxVQUFVO2dCQUNWLG1CQUFtQjs7OzRCQUpyQjtDQStKQyxBQXJKRCxJQXFKQztTQWxKWSxpQkFBaUI7Ozs7OztJQUUxQix1Q0FBZ0M7Ozs7O0lBQ2hDLGdEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc05hdmlnYXRpb25Db21wb25lbnQsXG4gIENtc1NlcnZpY2UsXG4gIFNlbWFudGljUGF0aFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbk5vZGUgfSBmcm9tICcuL25hdmlnYXRpb24tbm9kZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlXG4gICkge31cblxuICBwdWJsaWMgY3JlYXRlTmF2aWdhdGlvbihcbiAgICBkYXRhJDogT2JzZXJ2YWJsZTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50PlxuICApOiBPYnNlcnZhYmxlPE5hdmlnYXRpb25Ob2RlPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW2RhdGEkLCB0aGlzLmdldE5hdmlnYXRpb25Ob2RlKGRhdGEkKV0pLnBpcGUoXG4gICAgICBtYXAoKFtkYXRhLCBuYXZdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IGRhdGEubmFtZSxcbiAgICAgICAgICBjaGlsZHJlbjogW25hdl0sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIGBOYXZpZ2F0aW9uTm9kZWAgZm9yIHRoZSBnaXZlbiBgQ21zTmF2aWdhdGlvbkNvbXBvbmVudGAuXG4gICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBsb2FkIHRoZSBuYXZpZ2F0aW9uIHVuZGVybHlpbmcgZW50cmllcyBhbmQgY2hpbGRzIGlmIHRoZXkgaGF2ZW4ndCBiZWVuXG4gICAqIGxvYWRlZCBzbyBmYXIuXG4gICAqL1xuICBwdWJsaWMgZ2V0TmF2aWdhdGlvbk5vZGUoXG4gICAgZGF0YSQ6IE9ic2VydmFibGU8Q21zTmF2aWdhdGlvbkNvbXBvbmVudD5cbiAgKTogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uTm9kZT4ge1xuICAgIGlmICghZGF0YSQpIHtcbiAgICAgIHJldHVybiBvZigpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YSQucGlwZShcbiAgICAgIGZpbHRlcihkYXRhID0+ICEhZGF0YSksXG4gICAgICBzd2l0Y2hNYXAoZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb24gPSBkYXRhLm5hdmlnYXRpb25Ob2RlID8gZGF0YS5uYXZpZ2F0aW9uTm9kZSA6IGRhdGE7XG4gICAgICAgIHJldHVybiB0aGlzLmNtc1NlcnZpY2UuZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbi51aWQpLnBpcGUoXG4gICAgICAgICAgdGFwKGl0ZW1zID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHRoaXMubG9hZE5hdmlnYXRpb25FbnRyeUl0ZW1zKG5hdmlnYXRpb24sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgICAgICBtYXAoaXRlbXMgPT4gdGhpcy5wb3B1bGF0ZU5hdmlnYXRpb25Ob2RlKG5hdmlnYXRpb24sIGl0ZW1zKSlcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhbGwgbmF2aWdhdGlvbiBlbnRyeSBpdGVtcycgdHlwZSBhbmQgaWQuIERpc3BhdGNoIGFjdGlvbiB0byBsb2FkIGFsbCB0aGVzZSBpdGVtc1xuICAgKiBAcGFyYW0gbm9kZURhdGFcbiAgICogQHBhcmFtIHJvb3RcbiAgICogQHBhcmFtIGl0ZW1zTGlzdFxuICAgKi9cbiAgcHJpdmF0ZSBsb2FkTmF2aWdhdGlvbkVudHJ5SXRlbXMoXG4gICAgbm9kZURhdGE6IGFueSxcbiAgICByb290OiBib29sZWFuLFxuICAgIGl0ZW1zTGlzdCA9IFtdXG4gICk6IHZvaWQge1xuICAgIGlmIChub2RlRGF0YS5lbnRyaWVzICYmIG5vZGVEYXRhLmVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgbm9kZURhdGEuZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgaXRlbXNMaXN0LnB1c2goe1xuICAgICAgICAgIHN1cGVyVHlwZTogZW50cnkuaXRlbVN1cGVyVHlwZSxcbiAgICAgICAgICBpZDogZW50cnkuaXRlbUlkLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChub2RlRGF0YS5jaGlsZHJlbiAmJiBub2RlRGF0YS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICBub2RlRGF0YS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+XG4gICAgICAgIHRoaXMubG9hZE5hdmlnYXRpb25FbnRyeUl0ZW1zKGNoaWxkLCBmYWxzZSwgaXRlbXNMaXN0KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAocm9vdCkge1xuICAgICAgdGhpcy5jbXNTZXJ2aWNlLmxvYWROYXZpZ2F0aW9uSXRlbXMobm9kZURhdGEudWlkLCBpdGVtc0xpc3QpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgbm9kZSB0cmVlIGZvciB0aGUgdmlld1xuICAgKiBAcGFyYW0gbm9kZURhdGFcbiAgICogQHBhcmFtIGl0ZW1zXG4gICAqL1xuICBwcml2YXRlIHBvcHVsYXRlTmF2aWdhdGlvbk5vZGUobm9kZURhdGE6IGFueSwgaXRlbXM6IGFueSk6IE5hdmlnYXRpb25Ob2RlIHtcbiAgICBjb25zdCBub2RlOiBOYXZpZ2F0aW9uTm9kZSA9IHt9O1xuXG4gICAgaWYgKG5vZGVEYXRhLnRpdGxlKSB7XG4gICAgICAvLyB0aGUgbm9kZSB0aXRsZSB3aWxsIGJlIHBvcHVsYXRlZCBieSB0aGUgZmlyc3QgZW50cnkgKGlmIGFueSlcbiAgICAgIC8vIGlmIHRoZXJlJ3Mgbm8gbm9kZURhdGEudGl0bGUgYXZhaWxhYmxlXG4gICAgICBub2RlLnRpdGxlID0gbm9kZURhdGEudGl0bGU7XG4gICAgfVxuXG4gICAgaWYgKG5vZGVEYXRhLmVudHJpZXMgJiYgbm9kZURhdGEuZW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnBvcHVsYXRlTGluayhub2RlLCBub2RlRGF0YS5lbnRyaWVzWzBdLCBpdGVtcyk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGVEYXRhLmNoaWxkcmVuICYmIG5vZGVEYXRhLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gbm9kZURhdGEuY2hpbGRyZW5cbiAgICAgICAgLm1hcChjaGlsZCA9PiB0aGlzLnBvcHVsYXRlTmF2aWdhdGlvbk5vZGUoY2hpbGQsIGl0ZW1zKSlcbiAgICAgICAgLmZpbHRlcihCb29sZWFuKTtcbiAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIG5vZGUuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXR1cm4gbnVsbCBpbiBjYXNlIHRoZXJlIGFyZSBubyBjaGlsZHJlblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhub2RlKS5sZW5ndGggPT09IDAgPyBudWxsIDogbm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbm9kZSBsaW5rIGlzIGRyaXZlbiBieSB0aGUgZmlyc3QgZW50cnkuXG4gICAqL1xuICBwcml2YXRlIHBvcHVsYXRlTGluayhub2RlOiBOYXZpZ2F0aW9uTm9kZSwgZW50cnksIGl0ZW1zKSB7XG4gICAgY29uc3QgaXRlbSA9IGl0ZW1zW2Ake2VudHJ5Lml0ZW1JZH1fJHtlbnRyeS5pdGVtU3VwZXJUeXBlfWBdO1xuXG4gICAgLy8gbm93IHdlIG9ubHkgY29uc2lkZXIgQ01TTGlua0NvbXBvbmVudFxuICAgIGlmIChpdGVtICYmIGVudHJ5Lml0ZW1UeXBlID09PSAnQ01TTGlua0NvbXBvbmVudCcpIHtcbiAgICAgIGlmICghbm9kZS50aXRsZSkge1xuICAgICAgICBub2RlLnRpdGxlID0gaXRlbS5saW5rTmFtZTtcbiAgICAgIH1cbiAgICAgIC8vIG9ubHkgcG9wdWxhdGUgdGhlIG5vZGUgbGluayBpZiB3ZSBoYXZlIGEgdmlzaWJsZSBub2RlXG4gICAgICBpZiAobm9kZS50aXRsZSkge1xuICAgICAgICBub2RlLnVybCA9IHRoaXMuZ2V0TGluayhpdGVtKTtcbiAgICAgICAgLy8gaWYgXCJORVdXSU5ET1dcIiwgdGFyZ2V0IGlzIHRydWVcbiAgICAgICAgbm9kZS50YXJnZXQgPSBpdGVtLnRhcmdldDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogR2V0cyB0aGUgVVJMIG9yIGxpbmsgdG8gYSByZWxhdGVkIGl0ZW0gKGNhdGVnb3J5KVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRMaW5rKGl0ZW0pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKGl0ZW0udXJsKSB7XG4gICAgICByZXR1cm4gaXRlbS51cmw7XG4gICAgfSBlbHNlIGlmIChpdGVtLmNhdGVnb3J5Q29kZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VtYW50aWNQYXRoU2VydmljZS50cmFuc2Zvcm0oe1xuICAgICAgICBjeFJvdXRlOiAnY2F0ZWdvcnknLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBjb2RlOiBpdGVtLmNhdGVnb3J5Q29kZSxcbiAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==