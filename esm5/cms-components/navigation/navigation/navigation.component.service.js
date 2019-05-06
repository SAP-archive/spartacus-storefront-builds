/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Optional } from '@angular/core';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { CmsService } from '@spartacus/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
var NavigationComponentService = /** @class */ (function () {
    function NavigationComponentService(cmsService, componentData) {
        this.cmsService = cmsService;
        this.componentData = componentData;
    }
    /**
     * Get all navigation entry items' type and id. Dispatch action to load all these items
     * @param nodeData
     * @param root
     * @param itemsList
     */
    /**
     * Get all navigation entry items' type and id. Dispatch action to load all these items
     * @param {?} nodeData
     * @param {?} root
     * @param {?=} itemsList
     * @return {?}
     */
    NavigationComponentService.prototype.getNavigationEntryItems = /**
     * Get all navigation entry items' type and id. Dispatch action to load all these items
     * @param {?} nodeData
     * @param {?} root
     * @param {?=} itemsList
     * @return {?}
     */
    function (nodeData, root, itemsList) {
        if (itemsList === void 0) { itemsList = []; }
        if (nodeData.children && nodeData.children.length > 0) {
            this.processChildren(nodeData, itemsList);
        }
        else if (nodeData.entries && nodeData.entries.length > 0) {
            nodeData.entries.forEach(function (entry) {
                itemsList.push({
                    superType: entry.itemSuperType,
                    id: entry.itemId,
                });
            });
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
     * @param {?} nodeData
     * @param {?} items
     * @return {?}
     */
    NavigationComponentService.prototype.createNode = /**
     * Create a new node tree for display
     * @param {?} nodeData
     * @param {?} items
     * @return {?}
     */
    function (nodeData, items) {
        /** @type {?} */
        var node = {};
        node['title'] = nodeData.title;
        node['url'] = '';
        if (nodeData.children && nodeData.children.length > 0) {
            /** @type {?} */
            var children = this.createChildren(nodeData, items);
            node['children'] = children;
        }
        else if (nodeData.entries && nodeData.entries.length > 0) {
            /** @type {?} */
            var entry = nodeData.entries[0];
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
        }
        return node;
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
    NavigationComponentService.prototype.getNodes = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.getComponentData().pipe(switchMap(function (data) {
            if (data) {
                /** @type {?} */
                var navigation_1 = data.navigationNode ? data.navigationNode : data;
                return _this.cmsService.getNavigationEntryItems(navigation_1.uid).pipe(tap(function (items) {
                    if (items === undefined) {
                        _this.getNavigationEntryItems(navigation_1, true, []);
                    }
                }), filter(function (items) { return items !== undefined; }), map(function (items) { return _this.createNode(navigation_1, items); }));
            }
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdELE9BQU8sRUFBMEIsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFHeEY7SUFFRSxvQ0FDWSxVQUFzQixFQUV0QixhQUF1RDtRQUZ2RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRXRCLGtCQUFhLEdBQWIsYUFBYSxDQUEwQztJQUNoRSxDQUFDO0lBRUo7Ozs7O09BS0c7Ozs7Ozs7O0lBQ0ksNERBQXVCOzs7Ozs7O0lBQTlCLFVBQStCLFFBQWEsRUFBRSxJQUFhLEVBQUUsU0FBYztRQUFkLDBCQUFBLEVBQUEsY0FBYztRQUN6RSxJQUFJLFFBQVEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzNDO2FBQU0sSUFBSSxRQUFRLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMxRCxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7Z0JBQzVCLFNBQVMsQ0FBQyxJQUFJLENBQUM7b0JBQ2IsU0FBUyxF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LElBQUksRUFBRTs7b0JBQ0YsWUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQ25FLE9BQU8sS0FBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxZQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNqRSxHQUFHLENBQUMsVUFBQSxLQUFLO29CQUNQLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTt3QkFDdkIsS0FBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7cUJBQ3BEO2dCQUNILENBQUMsQ0FBQyxFQUNGLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssS0FBSyxTQUFTLEVBQW5CLENBQW1CLENBQUMsRUFDcEMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFVLEVBQUUsS0FBSyxDQUFDLEVBQWxDLENBQWtDLENBQUMsQ0FDakQsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQXBHRixVQUFVOzs7O2dCQUxzQixVQUFVO2dCQUVsQyxnQkFBZ0IsdUJBT3BCLFFBQVE7O0lBaUdiLGlDQUFDO0NBQUEsQUFyR0QsSUFxR0M7U0FwR1ksMEJBQTBCOzs7Ozs7SUFFbkMsZ0RBQWdDOzs7OztJQUNoQyxtREFDaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDbXNOYXZpZ2F0aW9uQ29tcG9uZW50LCBDbXNTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25Ob2RlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLW5vZGUubW9kZWwnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIHByb3RlY3RlZCBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENtc05hdmlnYXRpb25Db21wb25lbnQ+XG4gICkge31cblxuICAvKipcbiAgICogR2V0IGFsbCBuYXZpZ2F0aW9uIGVudHJ5IGl0ZW1zJyB0eXBlIGFuZCBpZC4gRGlzcGF0Y2ggYWN0aW9uIHRvIGxvYWQgYWxsIHRoZXNlIGl0ZW1zXG4gICAqIEBwYXJhbSBub2RlRGF0YVxuICAgKiBAcGFyYW0gcm9vdFxuICAgKiBAcGFyYW0gaXRlbXNMaXN0XG4gICAqL1xuICBwdWJsaWMgZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMobm9kZURhdGE6IGFueSwgcm9vdDogYm9vbGVhbiwgaXRlbXNMaXN0ID0gW10pIHtcbiAgICBpZiAobm9kZURhdGEuY2hpbGRyZW4gJiYgbm9kZURhdGEuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5wcm9jZXNzQ2hpbGRyZW4obm9kZURhdGEsIGl0ZW1zTGlzdCk7XG4gICAgfSBlbHNlIGlmIChub2RlRGF0YS5lbnRyaWVzICYmIG5vZGVEYXRhLmVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgbm9kZURhdGEuZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgaXRlbXNMaXN0LnB1c2goe1xuICAgICAgICAgIHN1cGVyVHlwZTogZW50cnkuaXRlbVN1cGVyVHlwZSxcbiAgICAgICAgICBpZDogZW50cnkuaXRlbUlkLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyb290KSB7XG4gICAgICBjb25zdCByb290VWlkID0gbm9kZURhdGEudWlkO1xuICAgICAgdGhpcy5jbXNTZXJ2aWNlLmxvYWROYXZpZ2F0aW9uSXRlbXMocm9vdFVpZCwgaXRlbXNMaXN0KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NDaGlsZHJlbihub2RlLCBpdGVtc0xpc3QpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIHRoaXMuZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMoY2hpbGQsIGZhbHNlLCBpdGVtc0xpc3QpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgbm9kZSB0cmVlIGZvciBkaXNwbGF5XG4gICAqIEBwYXJhbSBub2RlRGF0YVxuICAgKiBAcGFyYW0gaXRlbXNcbiAgICovXG4gIHB1YmxpYyBjcmVhdGVOb2RlKG5vZGVEYXRhOiBhbnksIGl0ZW1zOiBhbnkpOiBOYXZpZ2F0aW9uTm9kZSB7XG4gICAgY29uc3Qgbm9kZSA9IHt9O1xuXG4gICAgbm9kZVsndGl0bGUnXSA9IG5vZGVEYXRhLnRpdGxlO1xuICAgIG5vZGVbJ3VybCddID0gJyc7XG5cbiAgICBpZiAobm9kZURhdGEuY2hpbGRyZW4gJiYgbm9kZURhdGEuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmNyZWF0ZUNoaWxkcmVuKG5vZGVEYXRhLCBpdGVtcyk7XG4gICAgICBub2RlWydjaGlsZHJlbiddID0gY2hpbGRyZW47XG4gICAgfSBlbHNlIGlmIChub2RlRGF0YS5lbnRyaWVzICYmIG5vZGVEYXRhLmVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZW50cnkgPSBub2RlRGF0YS5lbnRyaWVzWzBdO1xuICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2Ake2VudHJ5Lml0ZW1JZH1fJHtlbnRyeS5pdGVtU3VwZXJUeXBlfWBdO1xuXG4gICAgICAvLyBub3cgd2Ugb25seSBjb25zaWRlciBDTVNMaW5rQ29tcG9uZW50XG4gICAgICBpZiAoZW50cnkuaXRlbVR5cGUgPT09ICdDTVNMaW5rQ29tcG9uZW50JyAmJiBpdGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFub2RlWyd0aXRsZSddKSB7XG4gICAgICAgICAgbm9kZVsndGl0bGUnXSA9IGl0ZW0ubGlua05hbWU7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZVsndXJsJ10gPSBpdGVtLnVybDtcbiAgICAgICAgLy8gaWYgXCJORVdXSU5ET1dcIiwgdGFyZ2V0IGlzIHRydWVcbiAgICAgICAgbm9kZVsndGFyZ2V0J10gPSBpdGVtLnRhcmdldDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQ2hpbGRyZW4obm9kZSwgaXRlbXMpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdO1xuICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgY29uc3QgY2hpbGROb2RlID0gdGhpcy5jcmVhdGVOb2RlKGNoaWxkLCBpdGVtcyk7XG4gICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkTm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIGdldENvbXBvbmVudERhdGEoKTogT2JzZXJ2YWJsZTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJDtcbiAgfVxuXG4gIGdldE5vZGVzKCk6IE9ic2VydmFibGU8TmF2aWdhdGlvbk5vZGU+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnREYXRhKCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICBjb25zdCBuYXZpZ2F0aW9uID0gZGF0YS5uYXZpZ2F0aW9uTm9kZSA/IGRhdGEubmF2aWdhdGlvbk5vZGUgOiBkYXRhO1xuICAgICAgICAgIHJldHVybiB0aGlzLmNtc1NlcnZpY2UuZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbi51aWQpLnBpcGUoXG4gICAgICAgICAgICB0YXAoaXRlbXMgPT4ge1xuICAgICAgICAgICAgICBpZiAoaXRlbXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbiwgdHJ1ZSwgW10pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZpbHRlcihpdGVtcyA9PiBpdGVtcyAhPT0gdW5kZWZpbmVkKSxcbiAgICAgICAgICAgIG1hcChpdGVtcyA9PiB0aGlzLmNyZWF0ZU5vZGUobmF2aWdhdGlvbiwgaXRlbXMpKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19