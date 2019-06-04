/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Optional } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
var NavigationComponentService = /** @class */ (function () {
    function NavigationComponentService(cmsService, componentData) {
        this.cmsService = cmsService;
        this.componentData = componentData;
    }
    /**
     * @return {?}
     */
    NavigationComponentService.prototype.getComponentData = /**
     * @return {?}
     */
    function () {
        return this.componentData.data$;
    };
    /**
     * @return {?}
     */
    NavigationComponentService.prototype.createNavigation = /**
     * @return {?}
     */
    function () {
        return combineLatest(this.getComponentData(), this.getNavigationNode()).pipe(map((/**
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
     * @return {?}
     */
    NavigationComponentService.prototype.getNavigationNode = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.getComponentData().pipe(filter(Boolean), switchMap((/**
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
    NavigationComponentService.prototype.getNavigationEntryItems = /**
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
    NavigationComponentService.prototype.processChildren = /**
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
    NavigationComponentService.prototype.createNode = /**
     * Create a new node tree for display
     * @private
     * @param {?} nodeData
     * @param {?} items
     * @return {?}
     */
    function (nodeData, items) {
        /** @type {?} */
        var node = {};
        node['title'] = nodeData.title;
        if (nodeData.entries && nodeData.entries.length > 0) {
            this.addLinkToNode(node, nodeData.entries[0], items);
        }
        if (nodeData.children && nodeData.children.length > 0) {
            /** @type {?} */
            var children = this.createChildren(nodeData, items);
            node['children'] = children;
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
    NavigationComponentService.prototype.addLinkToNode = /**
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
            if (!node['title']) {
                node['title'] = item.linkName;
            }
            node['url'] = item.url;
            // if "NEWWINDOW", target is true
            node['target'] = item.target;
        }
    };
    /**
     * @private
     * @param {?} node
     * @param {?} items
     * @return {?}
     */
    NavigationComponentService.prototype.createChildren = /**
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
    NavigationComponentService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NavigationComponentService.ctorParameters = function () { return [
        { type: CmsService },
        { type: CmsComponentData, decorators: [{ type: Optional }] }
    ]; };
    return NavigationComponentService;
}());
export { NavigationComponentService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUEwQixVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUd4RjtJQUVFLG9DQUNZLFVBQXNCLEVBRXRCLGFBQXVEO1FBRnZELGVBQVUsR0FBVixVQUFVLENBQVk7UUFFdEIsa0JBQWEsR0FBYixhQUFhLENBQTBDO0lBQ2hFLENBQUM7Ozs7SUFFRyxxREFBZ0I7OztJQUF2QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVNLHFEQUFnQjs7O0lBQXZCO1FBQ0UsT0FBTyxhQUFhLENBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUN2QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FDekIsQ0FBQyxJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsRUFBVztnQkFBWCwwQkFBVyxFQUFWLFlBQUksRUFBRSxXQUFHO1lBQ2IsT0FBTztnQkFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2hCLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQzthQUNoQixDQUFDO1FBQ0osQ0FBQyxF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QVU7Z0JBR2xDLGdCQUFnQix1QkFPcEIsUUFBUTs7SUF3SGIsaUNBQUM7Q0FBQSxBQTVIRCxJQTRIQztTQTNIWSwwQkFBMEI7Ozs7OztJQUVuQyxnREFBZ0M7Ozs7O0lBQ2hDLG1EQUNpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNOYXZpZ2F0aW9uQ29tcG9uZW50LCBDbXNTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IE5hdmlnYXRpb25Ob2RlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLW5vZGUubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIHByb3RlY3RlZCBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENtc05hdmlnYXRpb25Db21wb25lbnQ+XG4gICkge31cblxuICBwdWJsaWMgZ2V0Q29tcG9uZW50RGF0YSgpOiBPYnNlcnZhYmxlPENtc05hdmlnYXRpb25Db21wb25lbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnREYXRhLmRhdGEkO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZU5hdmlnYXRpb24oKTogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uTm9kZT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy5nZXRDb21wb25lbnREYXRhKCksXG4gICAgICB0aGlzLmdldE5hdmlnYXRpb25Ob2RlKClcbiAgICApLnBpcGUoXG4gICAgICBtYXAoKFtkYXRhLCBuYXZdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IGRhdGEubmFtZSxcbiAgICAgICAgICBjaGlsZHJlbjogW25hdl0sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TmF2aWdhdGlvbk5vZGUoKTogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uTm9kZT4ge1xuICAgIHJldHVybiB0aGlzLmdldENvbXBvbmVudERhdGEoKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgc3dpdGNoTWFwKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uID0gZGF0YS5uYXZpZ2F0aW9uTm9kZSA/IGRhdGEubmF2aWdhdGlvbk5vZGUgOiBkYXRhO1xuICAgICAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldE5hdmlnYXRpb25FbnRyeUl0ZW1zKG5hdmlnYXRpb24udWlkKS5waXBlKFxuICAgICAgICAgIHRhcChpdGVtcyA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB0aGlzLmdldE5hdmlnYXRpb25FbnRyeUl0ZW1zKG5hdmlnYXRpb24sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgICAgICBtYXAoaXRlbXMgPT4gdGhpcy5jcmVhdGVOb2RlKG5hdmlnYXRpb24sIGl0ZW1zKSlcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIG5hdmlnYXRpb24gZW50cnkgaXRlbXMnIHR5cGUgYW5kIGlkLiBEaXNwYXRjaCBhY3Rpb24gdG8gbG9hZCBhbGwgdGhlc2UgaXRlbXNcbiAgICogQHBhcmFtIG5vZGVEYXRhXG4gICAqIEBwYXJhbSByb290XG4gICAqIEBwYXJhbSBpdGVtc0xpc3RcbiAgICovXG4gIHByaXZhdGUgZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMoXG4gICAgbm9kZURhdGE6IGFueSxcbiAgICByb290OiBib29sZWFuLFxuICAgIGl0ZW1zTGlzdCA9IFtdXG4gICkge1xuICAgIGlmIChub2RlRGF0YS5lbnRyaWVzICYmIG5vZGVEYXRhLmVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgbm9kZURhdGEuZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgaXRlbXNMaXN0LnB1c2goe1xuICAgICAgICAgIHN1cGVyVHlwZTogZW50cnkuaXRlbVN1cGVyVHlwZSxcbiAgICAgICAgICBpZDogZW50cnkuaXRlbUlkLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChub2RlRGF0YS5jaGlsZHJlbiAmJiBub2RlRGF0YS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnByb2Nlc3NDaGlsZHJlbihub2RlRGF0YSwgaXRlbXNMaXN0KTtcbiAgICB9XG5cbiAgICBpZiAocm9vdCkge1xuICAgICAgY29uc3Qgcm9vdFVpZCA9IG5vZGVEYXRhLnVpZDtcbiAgICAgIHRoaXMuY21zU2VydmljZS5sb2FkTmF2aWdhdGlvbkl0ZW1zKHJvb3RVaWQsIGl0ZW1zTGlzdCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzQ2hpbGRyZW4obm9kZSwgaXRlbXNMaXN0KTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICB0aGlzLmdldE5hdmlnYXRpb25FbnRyeUl0ZW1zKGNoaWxkLCBmYWxzZSwgaXRlbXNMaXN0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IG5vZGUgdHJlZSBmb3IgZGlzcGxheVxuICAgKiBAcGFyYW0gbm9kZURhdGFcbiAgICogQHBhcmFtIGl0ZW1zXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZU5vZGUobm9kZURhdGE6IGFueSwgaXRlbXM6IGFueSk6IE5hdmlnYXRpb25Ob2RlIHtcbiAgICBjb25zdCBub2RlID0ge307XG5cbiAgICBub2RlWyd0aXRsZSddID0gbm9kZURhdGEudGl0bGU7XG5cbiAgICBpZiAobm9kZURhdGEuZW50cmllcyAmJiBub2RlRGF0YS5lbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYWRkTGlua1RvTm9kZShub2RlLCBub2RlRGF0YS5lbnRyaWVzWzBdLCBpdGVtcyk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGVEYXRhLmNoaWxkcmVuICYmIG5vZGVEYXRhLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5jcmVhdGVDaGlsZHJlbihub2RlRGF0YSwgaXRlbXMpO1xuICAgICAgbm9kZVsnY2hpbGRyZW4nXSA9IGNoaWxkcmVuO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRMaW5rVG9Ob2RlKG5vZGUsIGVudHJ5LCBpdGVtcykge1xuICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tgJHtlbnRyeS5pdGVtSWR9XyR7ZW50cnkuaXRlbVN1cGVyVHlwZX1gXTtcblxuICAgIC8vIG5vdyB3ZSBvbmx5IGNvbnNpZGVyIENNU0xpbmtDb21wb25lbnRcbiAgICBpZiAoZW50cnkuaXRlbVR5cGUgPT09ICdDTVNMaW5rQ29tcG9uZW50JyAmJiBpdGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICghbm9kZVsndGl0bGUnXSkge1xuICAgICAgICBub2RlWyd0aXRsZSddID0gaXRlbS5saW5rTmFtZTtcbiAgICAgIH1cbiAgICAgIG5vZGVbJ3VybCddID0gaXRlbS51cmw7XG4gICAgICAvLyBpZiBcIk5FV1dJTkRPV1wiLCB0YXJnZXQgaXMgdHJ1ZVxuICAgICAgbm9kZVsndGFyZ2V0J10gPSBpdGVtLnRhcmdldDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNoaWxkcmVuKG5vZGUsIGl0ZW1zKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IHRoaXMuY3JlYXRlTm9kZShjaGlsZCwgaXRlbXMpO1xuICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZE5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbn1cbiJdfQ==