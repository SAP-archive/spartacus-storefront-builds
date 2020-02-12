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
                else {
                    // we should check whether the existing node items are what expected
                    /** @type {?} */
                    var expectedItems = [];
                    _this.loadNavigationEntryItems(navigation, false, expectedItems);
                    /** @type {?} */
                    var existingItems_1 = Object.keys(items).map((/**
                     * @param {?} key
                     * @return {?}
                     */
                    function (key) { return items[key].uid; }));
                    /** @type {?} */
                    var missingItems = expectedItems.filter((/**
                     * @param {?} it
                     * @return {?}
                     */
                    function (it) { return !existingItems_1.includes(it.id); }));
                    if (missingItems.length > 0) {
                        _this.cmsService.loadNavigationItems(navigation.uid, missingItems);
                    }
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
            /** @type {?} */
            var url = this.getLink(item);
            // only populate the node link if we have a visible node
            if (node.title && url) {
                node.url = url;
                // the backend provide boolean value for the target
                // in case the link should be opened in a new window
                node.target = !!item.target ? '_blank' : '';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUVMLFVBQVUsRUFDVixtQkFBbUIsR0FDcEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUc3RDtJQUlFLDJCQUNZLFVBQXNCLEVBQ3RCLG1CQUF3QztRQUR4QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDakQsQ0FBQzs7Ozs7SUFFRyw0Q0FBZ0I7Ozs7SUFBdkIsVUFDRSxLQUF5QztRQUV6QyxPQUFPLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDL0QsR0FBRzs7OztRQUFDLFVBQUMsRUFBVztnQkFBWCwwQkFBVyxFQUFWLFlBQUksRUFBRSxXQUFHO1lBQ2IsT0FBTztnQkFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2hCLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQzthQUNoQixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7OztJQUNJLDZDQUFpQjs7Ozs7OztJQUF4QixVQUNFLEtBQXlDO1FBRDNDLGlCQXFDQztRQWxDQyxJQUFJLENB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TEMsQUF2S0QsSUF1S0M7U0FwS1ksaUJBQWlCOzs7Ozs7SUFFMUIsdUNBQWdDOzs7OztJQUNoQyxnREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNOYXZpZ2F0aW9uQ29tcG9uZW50LFxuICBDbXNTZXJ2aWNlLFxuICBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5hdmlnYXRpb25Ob2RlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLW5vZGUubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvblNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZVxuICApIHt9XG5cbiAgcHVibGljIGNyZWF0ZU5hdmlnYXRpb24oXG4gICAgZGF0YSQ6IE9ic2VydmFibGU8Q21zTmF2aWdhdGlvbkNvbXBvbmVudD5cbiAgKTogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uTm9kZT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtkYXRhJCwgdGhpcy5nZXROYXZpZ2F0aW9uTm9kZShkYXRhJCldKS5waXBlKFxuICAgICAgbWFwKChbZGF0YSwgbmF2XSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiBkYXRhLm5hbWUsXG4gICAgICAgICAgY2hpbGRyZW46IFtuYXZdLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aXRoIHRoZSBgTmF2aWdhdGlvbk5vZGVgIGZvciB0aGUgZ2l2ZW4gYENtc05hdmlnYXRpb25Db21wb25lbnRgLlxuICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgbG9hZCB0aGUgbmF2aWdhdGlvbiB1bmRlcmx5aW5nIGVudHJpZXMgYW5kIGNoaWxkcyBpZiB0aGV5IGhhdmVuJ3QgYmVlblxuICAgKiBsb2FkZWQgc28gZmFyLlxuICAgKi9cbiAgcHVibGljIGdldE5hdmlnYXRpb25Ob2RlKFxuICAgIGRhdGEkOiBPYnNlcnZhYmxlPENtc05hdmlnYXRpb25Db21wb25lbnQ+XG4gICk6IE9ic2VydmFibGU8TmF2aWdhdGlvbk5vZGU+IHtcbiAgICBpZiAoIWRhdGEkKSB7XG4gICAgICByZXR1cm4gb2YoKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGEkLnBpcGUoXG4gICAgICBmaWx0ZXIoZGF0YSA9PiAhIWRhdGEpLFxuICAgICAgc3dpdGNoTWFwKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uID0gZGF0YS5uYXZpZ2F0aW9uTm9kZSA/IGRhdGEubmF2aWdhdGlvbk5vZGUgOiBkYXRhO1xuICAgICAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldE5hdmlnYXRpb25FbnRyeUl0ZW1zKG5hdmlnYXRpb24udWlkKS5waXBlKFxuICAgICAgICAgIHRhcChpdGVtcyA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB0aGlzLmxvYWROYXZpZ2F0aW9uRW50cnlJdGVtcyhuYXZpZ2F0aW9uLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIHdlIHNob3VsZCBjaGVjayB3aGV0aGVyIHRoZSBleGlzdGluZyBub2RlIGl0ZW1zIGFyZSB3aGF0IGV4cGVjdGVkXG4gICAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkSXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgdGhpcy5sb2FkTmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbiwgZmFsc2UsIGV4cGVjdGVkSXRlbXMpO1xuICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ0l0ZW1zID0gT2JqZWN0LmtleXMoaXRlbXMpLm1hcChcbiAgICAgICAgICAgICAgICBrZXkgPT4gaXRlbXNba2V5XS51aWRcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ0l0ZW1zID0gZXhwZWN0ZWRJdGVtcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgaXQgPT4gIWV4aXN0aW5nSXRlbXMuaW5jbHVkZXMoaXQuaWQpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGlmIChtaXNzaW5nSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5sb2FkTmF2aWdhdGlvbkl0ZW1zKFxuICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbi51aWQsXG4gICAgICAgICAgICAgICAgICBtaXNzaW5nSXRlbXNcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgICAgIG1hcChpdGVtcyA9PiB0aGlzLnBvcHVsYXRlTmF2aWdhdGlvbk5vZGUobmF2aWdhdGlvbiwgaXRlbXMpKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIGFsbCBuYXZpZ2F0aW9uIGVudHJ5IGl0ZW1zJyB0eXBlIGFuZCBpZC4gRGlzcGF0Y2ggYWN0aW9uIHRvIGxvYWQgYWxsIHRoZXNlIGl0ZW1zXG4gICAqIEBwYXJhbSBub2RlRGF0YVxuICAgKiBAcGFyYW0gcm9vdFxuICAgKiBAcGFyYW0gaXRlbXNMaXN0XG4gICAqL1xuICBwcml2YXRlIGxvYWROYXZpZ2F0aW9uRW50cnlJdGVtcyhcbiAgICBub2RlRGF0YTogYW55LFxuICAgIHJvb3Q6IGJvb2xlYW4sXG4gICAgaXRlbXNMaXN0ID0gW11cbiAgKTogdm9pZCB7XG4gICAgaWYgKG5vZGVEYXRhLmVudHJpZXMgJiYgbm9kZURhdGEuZW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBub2RlRGF0YS5lbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICBpdGVtc0xpc3QucHVzaCh7XG4gICAgICAgICAgc3VwZXJUeXBlOiBlbnRyeS5pdGVtU3VwZXJUeXBlLFxuICAgICAgICAgIGlkOiBlbnRyeS5pdGVtSWQsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGVEYXRhLmNoaWxkcmVuICYmIG5vZGVEYXRhLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIG5vZGVEYXRhLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT5cbiAgICAgICAgdGhpcy5sb2FkTmF2aWdhdGlvbkVudHJ5SXRlbXMoY2hpbGQsIGZhbHNlLCBpdGVtc0xpc3QpXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChyb290KSB7XG4gICAgICB0aGlzLmNtc1NlcnZpY2UubG9hZE5hdmlnYXRpb25JdGVtcyhub2RlRGF0YS51aWQsIGl0ZW1zTGlzdCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBub2RlIHRyZWUgZm9yIHRoZSB2aWV3XG4gICAqIEBwYXJhbSBub2RlRGF0YVxuICAgKiBAcGFyYW0gaXRlbXNcbiAgICovXG4gIHByaXZhdGUgcG9wdWxhdGVOYXZpZ2F0aW9uTm9kZShub2RlRGF0YTogYW55LCBpdGVtczogYW55KTogTmF2aWdhdGlvbk5vZGUge1xuICAgIGNvbnN0IG5vZGU6IE5hdmlnYXRpb25Ob2RlID0ge307XG5cbiAgICBpZiAobm9kZURhdGEudGl0bGUpIHtcbiAgICAgIC8vIHRoZSBub2RlIHRpdGxlIHdpbGwgYmUgcG9wdWxhdGVkIGJ5IHRoZSBmaXJzdCBlbnRyeSAoaWYgYW55KVxuICAgICAgLy8gaWYgdGhlcmUncyBubyBub2RlRGF0YS50aXRsZSBhdmFpbGFibGVcbiAgICAgIG5vZGUudGl0bGUgPSBub2RlRGF0YS50aXRsZTtcbiAgICB9XG5cbiAgICBpZiAobm9kZURhdGEuZW50cmllcyAmJiBub2RlRGF0YS5lbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucG9wdWxhdGVMaW5rKG5vZGUsIG5vZGVEYXRhLmVudHJpZXNbMF0sIGl0ZW1zKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZURhdGEuY2hpbGRyZW4gJiYgbm9kZURhdGEuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBub2RlRGF0YS5jaGlsZHJlblxuICAgICAgICAubWFwKGNoaWxkID0+IHRoaXMucG9wdWxhdGVOYXZpZ2F0aW9uTm9kZShjaGlsZCwgaXRlbXMpKVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbm9kZS5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybiBudWxsIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNoaWxkcmVuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG5vZGUpLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBub2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBub2RlIGxpbmsgaXMgZHJpdmVuIGJ5IHRoZSBmaXJzdCBlbnRyeS5cbiAgICovXG4gIHByaXZhdGUgcG9wdWxhdGVMaW5rKG5vZGU6IE5hdmlnYXRpb25Ob2RlLCBlbnRyeSwgaXRlbXMpIHtcbiAgICBjb25zdCBpdGVtID0gaXRlbXNbYCR7ZW50cnkuaXRlbUlkfV8ke2VudHJ5Lml0ZW1TdXBlclR5cGV9YF07XG5cbiAgICAvLyBub3cgd2Ugb25seSBjb25zaWRlciBDTVNMaW5rQ29tcG9uZW50XG4gICAgaWYgKGl0ZW0gJiYgZW50cnkuaXRlbVR5cGUgPT09ICdDTVNMaW5rQ29tcG9uZW50Jykge1xuICAgICAgaWYgKCFub2RlLnRpdGxlKSB7XG4gICAgICAgIG5vZGUudGl0bGUgPSBpdGVtLmxpbmtOYW1lO1xuICAgICAgfVxuICAgICAgY29uc3QgdXJsID0gdGhpcy5nZXRMaW5rKGl0ZW0pO1xuICAgICAgLy8gb25seSBwb3B1bGF0ZSB0aGUgbm9kZSBsaW5rIGlmIHdlIGhhdmUgYSB2aXNpYmxlIG5vZGVcbiAgICAgIGlmIChub2RlLnRpdGxlICYmIHVybCkge1xuICAgICAgICBub2RlLnVybCA9IHVybDtcbiAgICAgICAgLy8gdGhlIGJhY2tlbmQgcHJvdmlkZSBib29sZWFuIHZhbHVlIGZvciB0aGUgdGFyZ2V0XG4gICAgICAgIC8vIGluIGNhc2UgdGhlIGxpbmsgc2hvdWxkIGJlIG9wZW5lZCBpbiBhIG5ldyB3aW5kb3dcbiAgICAgICAgbm9kZS50YXJnZXQgPSAhIWl0ZW0udGFyZ2V0ID8gJ19ibGFuaycgOiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogR2V0cyB0aGUgVVJMIG9yIGxpbmsgdG8gYSByZWxhdGVkIGl0ZW0gKGNhdGVnb3J5KVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRMaW5rKGl0ZW0pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKGl0ZW0udXJsKSB7XG4gICAgICByZXR1cm4gaXRlbS51cmw7XG4gICAgfSBlbHNlIGlmIChpdGVtLmNhdGVnb3J5Q29kZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VtYW50aWNQYXRoU2VydmljZS50cmFuc2Zvcm0oe1xuICAgICAgICBjeFJvdXRlOiAnY2F0ZWdvcnknLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBjb2RlOiBpdGVtLmNhdGVnb3J5Q29kZSxcbiAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==