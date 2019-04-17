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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RCxPQUFPLEVBQTBCLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXJFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBR3hGO0lBRUUsb0NBQ1ksVUFBc0IsRUFFdEIsYUFBdUQ7UUFGdkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUV0QixrQkFBYSxHQUFiLGFBQWEsQ0FBMEM7SUFDaEUsQ0FBQztJQUVKOzs7OztPQUtHOzs7Ozs7OztJQUNJLDREQUF1Qjs7Ozs7OztJQUE5QixVQUErQixRQUFhLEVBQUUsSUFBYSxFQUFFLFNBQWM7UUFBZCwwQkFBQSxFQUFBLGNBQWM7UUFDekUsSUFBSSxRQUFRLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUMzQzthQUFNLElBQUksUUFBUSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO2dCQUM1QixTQUFTLENBQUMsSUFBSSxDQUFDO29CQUNiLFNBQVMsRUFBRSxLQUFLLENBQUMs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QUNGLFlBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUNuRSxPQUFPLEtBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsWUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDakUsR0FBRyxDQUFDLFVBQUEsS0FBSztvQkFDUCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7d0JBQ3ZCLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFVLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3FCQUNwRDtnQkFDSCxDQUFDLENBQUMsRUFDRixNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLEtBQUssU0FBUyxFQUFuQixDQUFtQixDQUFDLEVBQ3BDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQ2pELENBQUM7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkFwR0YsVUFBVTs7OztnQkFMc0IsVUFBVTtnQkFFbEMsZ0JBQWdCLHVCQU9wQixRQUFROztJQWlHYixpQ0FBQztDQUFBLEFBckdELElBcUdDO1NBcEdZLDBCQUEwQjs7Ozs7O0lBRW5DLGdEQUFnQzs7Ozs7SUFDaEMsbURBQ2lFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ21zTmF2aWdhdGlvbkNvbXBvbmVudCwgQ21zU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uTm9kZSB9IGZyb20gJy4vbmF2aWdhdGlvbi1ub2RlLm1vZGVsJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25Db21wb25lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50PlxuICApIHt9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgbmF2aWdhdGlvbiBlbnRyeSBpdGVtcycgdHlwZSBhbmQgaWQuIERpc3BhdGNoIGFjdGlvbiB0byBsb2FkIGFsbCB0aGVzZSBpdGVtc1xuICAgKiBAcGFyYW0gbm9kZURhdGFcbiAgICogQHBhcmFtIHJvb3RcbiAgICogQHBhcmFtIGl0ZW1zTGlzdFxuICAgKi9cbiAgcHVibGljIGdldE5hdmlnYXRpb25FbnRyeUl0ZW1zKG5vZGVEYXRhOiBhbnksIHJvb3Q6IGJvb2xlYW4sIGl0ZW1zTGlzdCA9IFtdKSB7XG4gICAgaWYgKG5vZGVEYXRhLmNoaWxkcmVuICYmIG5vZGVEYXRhLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucHJvY2Vzc0NoaWxkcmVuKG5vZGVEYXRhLCBpdGVtc0xpc3QpO1xuICAgIH0gZWxzZSBpZiAobm9kZURhdGEuZW50cmllcyAmJiBub2RlRGF0YS5lbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIG5vZGVEYXRhLmVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGl0ZW1zTGlzdC5wdXNoKHtcbiAgICAgICAgICBzdXBlclR5cGU6IGVudHJ5Lml0ZW1TdXBlclR5cGUsXG4gICAgICAgICAgaWQ6IGVudHJ5Lml0ZW1JZCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocm9vdCkge1xuICAgICAgY29uc3Qgcm9vdFVpZCA9IG5vZGVEYXRhLnVpZDtcbiAgICAgIHRoaXMuY21zU2VydmljZS5sb2FkTmF2aWdhdGlvbkl0ZW1zKHJvb3RVaWQsIGl0ZW1zTGlzdCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzQ2hpbGRyZW4obm9kZSwgaXRlbXNMaXN0KTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICB0aGlzLmdldE5hdmlnYXRpb25FbnRyeUl0ZW1zKGNoaWxkLCBmYWxzZSwgaXRlbXNMaXN0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IG5vZGUgdHJlZSBmb3IgZGlzcGxheVxuICAgKiBAcGFyYW0gbm9kZURhdGFcbiAgICogQHBhcmFtIGl0ZW1zXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlTm9kZShub2RlRGF0YTogYW55LCBpdGVtczogYW55KTogTmF2aWdhdGlvbk5vZGUge1xuICAgIGNvbnN0IG5vZGUgPSB7fTtcblxuICAgIG5vZGVbJ3RpdGxlJ10gPSBub2RlRGF0YS50aXRsZTtcbiAgICBub2RlWyd1cmwnXSA9ICcnO1xuXG4gICAgaWYgKG5vZGVEYXRhLmNoaWxkcmVuICYmIG5vZGVEYXRhLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5jcmVhdGVDaGlsZHJlbihub2RlRGF0YSwgaXRlbXMpO1xuICAgICAgbm9kZVsnY2hpbGRyZW4nXSA9IGNoaWxkcmVuO1xuICAgIH0gZWxzZSBpZiAobm9kZURhdGEuZW50cmllcyAmJiBub2RlRGF0YS5lbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGVudHJ5ID0gbm9kZURhdGEuZW50cmllc1swXTtcbiAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tgJHtlbnRyeS5pdGVtSWR9XyR7ZW50cnkuaXRlbVN1cGVyVHlwZX1gXTtcblxuICAgICAgLy8gbm93IHdlIG9ubHkgY29uc2lkZXIgQ01TTGlua0NvbXBvbmVudFxuICAgICAgaWYgKGVudHJ5Lml0ZW1UeXBlID09PSAnQ01TTGlua0NvbXBvbmVudCcgJiYgaXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICghbm9kZVsndGl0bGUnXSkge1xuICAgICAgICAgIG5vZGVbJ3RpdGxlJ10gPSBpdGVtLmxpbmtOYW1lO1xuICAgICAgICB9XG4gICAgICAgIG5vZGVbJ3VybCddID0gaXRlbS51cmw7XG4gICAgICAgIC8vIGlmIFwiTkVXV0lORE9XXCIsIHRhcmdldCBpcyB0cnVlXG4gICAgICAgIG5vZGVbJ3RhcmdldCddID0gaXRlbS50YXJnZXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNoaWxkcmVuKG5vZGUsIGl0ZW1zKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IHRoaXMuY3JlYXRlTm9kZShjaGlsZCwgaXRlbXMpO1xuICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZE5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICBnZXRDb21wb25lbnREYXRhKCk6IE9ic2VydmFibGU8Q21zTmF2aWdhdGlvbkNvbXBvbmVudD4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSQ7XG4gIH1cblxuICBnZXROb2RlcygpOiBPYnNlcnZhYmxlPE5hdmlnYXRpb25Ob2RlPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50RGF0YSgpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgY29uc3QgbmF2aWdhdGlvbiA9IGRhdGEubmF2aWdhdGlvbk5vZGUgPyBkYXRhLm5hdmlnYXRpb25Ob2RlIDogZGF0YTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldE5hdmlnYXRpb25FbnRyeUl0ZW1zKG5hdmlnYXRpb24udWlkKS5waXBlKFxuICAgICAgICAgICAgdGFwKGl0ZW1zID0+IHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW1zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE5hdmlnYXRpb25FbnRyeUl0ZW1zKG5hdmlnYXRpb24sIHRydWUsIFtdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBmaWx0ZXIoaXRlbXMgPT4gaXRlbXMgIT09IHVuZGVmaW5lZCksXG4gICAgICAgICAgICBtYXAoaXRlbXMgPT4gdGhpcy5jcmVhdGVOb2RlKG5hdmlnYXRpb24sIGl0ZW1zKSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==