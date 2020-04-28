import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { CmsNavigationComponent, CmsService, SemanticPathService, } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var NavigationService = /** @class */ (function () {
    function NavigationService(cmsService, semanticPathService) {
        this.cmsService = cmsService;
        this.semanticPathService = semanticPathService;
    }
    NavigationService.prototype.createNavigation = function (data$) {
        return combineLatest([data$, this.getNavigationNode(data$)]).pipe(map(function (_a) {
            var _b = __read(_a, 2), data = _b[0], nav = _b[1];
            return data
                ? {
                    title: data.name,
                    children: [nav],
                }
                : undefined;
        }));
    };
    /**
     * returns an observable with the `NavigationNode` for the given `CmsNavigationComponent`.
     * This function will load the navigation underlying entries and childs if they haven't been
     * loaded so far.
     */
    NavigationService.prototype.getNavigationNode = function (data$) {
        var _this = this;
        if (!data$) {
            return of();
        }
        return data$.pipe(filter(function (data) { return !!data; }), switchMap(function (data) {
            var navigation = data.navigationNode ? data.navigationNode : data;
            return _this.cmsService.getNavigationEntryItems(navigation.uid).pipe(tap(function (items) {
                if (items === undefined) {
                    _this.loadNavigationEntryItems(navigation, true);
                }
                else {
                    // we should check whether the existing node items are what expected
                    var expectedItems = [];
                    _this.loadNavigationEntryItems(navigation, false, expectedItems);
                    var existingItems_1 = Object.keys(items).map(function (key) { return items[key].uid; });
                    var missingItems = expectedItems.filter(function (it) { return !existingItems_1.includes(it.id); });
                    if (missingItems.length > 0) {
                        _this.cmsService.loadNavigationItems(navigation.uid, missingItems);
                    }
                }
            }), filter(Boolean), map(function (items) { return _this.populateNavigationNode(navigation, items); }));
        }));
    };
    /**
     * Loads all navigation entry items' type and id. Dispatch action to load all these items
     * @param nodeData
     * @param root
     * @param itemsList
     */
    NavigationService.prototype.loadNavigationEntryItems = function (nodeData, root, itemsList) {
        var _this = this;
        if (itemsList === void 0) { itemsList = []; }
        if (nodeData.entries && nodeData.entries.length > 0) {
            nodeData.entries.forEach(function (entry) {
                itemsList.push({
                    superType: entry.itemSuperType,
                    id: entry.itemId,
                });
            });
        }
        if (nodeData.children && nodeData.children.length > 0) {
            nodeData.children.forEach(function (child) {
                return _this.loadNavigationEntryItems(child, false, itemsList);
            });
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
    NavigationService.prototype.populateNavigationNode = function (nodeData, items) {
        var _this = this;
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
            var children = nodeData.children
                .map(function (child) { return _this.populateNavigationNode(child, items); })
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
    NavigationService.prototype.populateLink = function (node, entry, items) {
        var item = items[entry.itemId + "_" + entry.itemSuperType];
        // now we only consider CMSLinkComponent
        if (item && entry.itemType === 'CMSLinkComponent') {
            if (!node.title) {
                node.title = item.linkName;
            }
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
    NavigationService.prototype.getLink = function (item) {
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
    NavigationService.ctorParameters = function () { return [
        { type: CmsService },
        { type: SemanticPathService }
    ]; };
    NavigationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NavigationService_Factory() { return new NavigationService(i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i1.SemanticPathService)); }, token: NavigationService, providedIn: "root" });
    NavigationService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], NavigationService);
    return NavigationService;
}());
export { NavigationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLFVBQVUsRUFDVixtQkFBbUIsR0FDcEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU03RDtJQUNFLDJCQUNZLFVBQXNCLEVBQ3RCLG1CQUF3QztRQUR4QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDakQsQ0FBQztJQUVHLDRDQUFnQixHQUF2QixVQUNFLEtBQXlDO1FBRXpDLE9BQU8sYUFBYSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUMvRCxHQUFHLENBQUMsVUFBQyxFQUFXO2dCQUFYLGtCQUFXLEVBQVYsWUFBSSxFQUFFLFdBQUc7WUFDYixPQUFPLElBQUk7Z0JBQ1QsQ0FBQyxDQUFDO29CQUNFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDO2lCQUNoQjtnQkFDSCxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDZDQUFpQixHQUF4QixVQUNFLEtB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WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csaUJBQWlCLENBc0s3Qjs0QkFuTEQ7Q0FtTEMsQUF0S0QsSUFzS0M7U0F0S1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zTmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgQ21zU2VydmljZSxcbiAgU2VtYW50aWNQYXRoU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uTm9kZSB9IGZyb20gJy4vbmF2aWdhdGlvbi1ub2RlLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyBjcmVhdGVOYXZpZ2F0aW9uKFxuICAgIGRhdGEkOiBPYnNlcnZhYmxlPENtc05hdmlnYXRpb25Db21wb25lbnQ+XG4gICk6IE9ic2VydmFibGU8TmF2aWdhdGlvbk5vZGU+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbZGF0YSQsIHRoaXMuZ2V0TmF2aWdhdGlvbk5vZGUoZGF0YSQpXSkucGlwZShcbiAgICAgIG1hcCgoW2RhdGEsIG5hdl0pID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgdGl0bGU6IGRhdGEubmFtZSxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtuYXZdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aXRoIHRoZSBgTmF2aWdhdGlvbk5vZGVgIGZvciB0aGUgZ2l2ZW4gYENtc05hdmlnYXRpb25Db21wb25lbnRgLlxuICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgbG9hZCB0aGUgbmF2aWdhdGlvbiB1bmRlcmx5aW5nIGVudHJpZXMgYW5kIGNoaWxkcyBpZiB0aGV5IGhhdmVuJ3QgYmVlblxuICAgKiBsb2FkZWQgc28gZmFyLlxuICAgKi9cbiAgcHVibGljIGdldE5hdmlnYXRpb25Ob2RlKFxuICAgIGRhdGEkOiBPYnNlcnZhYmxlPENtc05hdmlnYXRpb25Db21wb25lbnQ+XG4gICk6IE9ic2VydmFibGU8TmF2aWdhdGlvbk5vZGU+IHtcbiAgICBpZiAoIWRhdGEkKSB7XG4gICAgICByZXR1cm4gb2YoKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGEkLnBpcGUoXG4gICAgICBmaWx0ZXIoKGRhdGEpID0+ICEhZGF0YSksXG4gICAgICBzd2l0Y2hNYXAoKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbiA9IGRhdGEubmF2aWdhdGlvbk5vZGUgPyBkYXRhLm5hdmlnYXRpb25Ob2RlIDogZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXROYXZpZ2F0aW9uRW50cnlJdGVtcyhuYXZpZ2F0aW9uLnVpZCkucGlwZShcbiAgICAgICAgICB0YXAoKGl0ZW1zKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB0aGlzLmxvYWROYXZpZ2F0aW9uRW50cnlJdGVtcyhuYXZpZ2F0aW9uLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIHdlIHNob3VsZCBjaGVjayB3aGV0aGVyIHRoZSBleGlzdGluZyBub2RlIGl0ZW1zIGFyZSB3aGF0IGV4cGVjdGVkXG4gICAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkSXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgdGhpcy5sb2FkTmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbiwgZmFsc2UsIGV4cGVjdGVkSXRlbXMpO1xuICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ0l0ZW1zID0gT2JqZWN0LmtleXMoaXRlbXMpLm1hcChcbiAgICAgICAgICAgICAgICAoa2V5KSA9PiBpdGVtc1trZXldLnVpZFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nSXRlbXMgPSBleHBlY3RlZEl0ZW1zLmZpbHRlcihcbiAgICAgICAgICAgICAgICAoaXQpID0+ICFleGlzdGluZ0l0ZW1zLmluY2x1ZGVzKGl0LmlkKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAobWlzc2luZ0l0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNtc1NlcnZpY2UubG9hZE5hdmlnYXRpb25JdGVtcyhcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb24udWlkLFxuICAgICAgICAgICAgICAgICAgbWlzc2luZ0l0ZW1zXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgICAgICBtYXAoKGl0ZW1zKSA9PiB0aGlzLnBvcHVsYXRlTmF2aWdhdGlvbk5vZGUobmF2aWdhdGlvbiwgaXRlbXMpKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIGFsbCBuYXZpZ2F0aW9uIGVudHJ5IGl0ZW1zJyB0eXBlIGFuZCBpZC4gRGlzcGF0Y2ggYWN0aW9uIHRvIGxvYWQgYWxsIHRoZXNlIGl0ZW1zXG4gICAqIEBwYXJhbSBub2RlRGF0YVxuICAgKiBAcGFyYW0gcm9vdFxuICAgKiBAcGFyYW0gaXRlbXNMaXN0XG4gICAqL1xuICBwcml2YXRlIGxvYWROYXZpZ2F0aW9uRW50cnlJdGVtcyhcbiAgICBub2RlRGF0YTogYW55LFxuICAgIHJvb3Q6IGJvb2xlYW4sXG4gICAgaXRlbXNMaXN0ID0gW11cbiAgKTogdm9pZCB7XG4gICAgaWYgKG5vZGVEYXRhLmVudHJpZXMgJiYgbm9kZURhdGEuZW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBub2RlRGF0YS5lbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGl0ZW1zTGlzdC5wdXNoKHtcbiAgICAgICAgICBzdXBlclR5cGU6IGVudHJ5Lml0ZW1TdXBlclR5cGUsXG4gICAgICAgICAgaWQ6IGVudHJ5Lml0ZW1JZCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAobm9kZURhdGEuY2hpbGRyZW4gJiYgbm9kZURhdGEuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgbm9kZURhdGEuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+XG4gICAgICAgIHRoaXMubG9hZE5hdmlnYXRpb25FbnRyeUl0ZW1zKGNoaWxkLCBmYWxzZSwgaXRlbXNMaXN0KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAocm9vdCkge1xuICAgICAgdGhpcy5jbXNTZXJ2aWNlLmxvYWROYXZpZ2F0aW9uSXRlbXMobm9kZURhdGEudWlkLCBpdGVtc0xpc3QpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgbm9kZSB0cmVlIGZvciB0aGUgdmlld1xuICAgKiBAcGFyYW0gbm9kZURhdGFcbiAgICogQHBhcmFtIGl0ZW1zXG4gICAqL1xuICBwcml2YXRlIHBvcHVsYXRlTmF2aWdhdGlvbk5vZGUobm9kZURhdGE6IGFueSwgaXRlbXM6IGFueSk6IE5hdmlnYXRpb25Ob2RlIHtcbiAgICBjb25zdCBub2RlOiBOYXZpZ2F0aW9uTm9kZSA9IHt9O1xuXG4gICAgaWYgKG5vZGVEYXRhLnRpdGxlKSB7XG4gICAgICAvLyB0aGUgbm9kZSB0aXRsZSB3aWxsIGJlIHBvcHVsYXRlZCBieSB0aGUgZmlyc3QgZW50cnkgKGlmIGFueSlcbiAgICAgIC8vIGlmIHRoZXJlJ3Mgbm8gbm9kZURhdGEudGl0bGUgYXZhaWxhYmxlXG4gICAgICBub2RlLnRpdGxlID0gbm9kZURhdGEudGl0bGU7XG4gICAgfVxuXG4gICAgaWYgKG5vZGVEYXRhLmVudHJpZXMgJiYgbm9kZURhdGEuZW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnBvcHVsYXRlTGluayhub2RlLCBub2RlRGF0YS5lbnRyaWVzWzBdLCBpdGVtcyk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGVEYXRhLmNoaWxkcmVuICYmIG5vZGVEYXRhLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gbm9kZURhdGEuY2hpbGRyZW5cbiAgICAgICAgLm1hcCgoY2hpbGQpID0+IHRoaXMucG9wdWxhdGVOYXZpZ2F0aW9uTm9kZShjaGlsZCwgaXRlbXMpKVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbm9kZS5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybiBudWxsIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNoaWxkcmVuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG5vZGUpLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBub2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBub2RlIGxpbmsgaXMgZHJpdmVuIGJ5IHRoZSBmaXJzdCBlbnRyeS5cbiAgICovXG4gIHByaXZhdGUgcG9wdWxhdGVMaW5rKG5vZGU6IE5hdmlnYXRpb25Ob2RlLCBlbnRyeSwgaXRlbXMpIHtcbiAgICBjb25zdCBpdGVtID0gaXRlbXNbYCR7ZW50cnkuaXRlbUlkfV8ke2VudHJ5Lml0ZW1TdXBlclR5cGV9YF07XG5cbiAgICAvLyBub3cgd2Ugb25seSBjb25zaWRlciBDTVNMaW5rQ29tcG9uZW50XG4gICAgaWYgKGl0ZW0gJiYgZW50cnkuaXRlbVR5cGUgPT09ICdDTVNMaW5rQ29tcG9uZW50Jykge1xuICAgICAgaWYgKCFub2RlLnRpdGxlKSB7XG4gICAgICAgIG5vZGUudGl0bGUgPSBpdGVtLmxpbmtOYW1lO1xuICAgICAgfVxuICAgICAgY29uc3QgdXJsID0gdGhpcy5nZXRMaW5rKGl0ZW0pO1xuICAgICAgLy8gb25seSBwb3B1bGF0ZSB0aGUgbm9kZSBsaW5rIGlmIHdlIGhhdmUgYSB2aXNpYmxlIG5vZGVcbiAgICAgIGlmIChub2RlLnRpdGxlICYmIHVybCkge1xuICAgICAgICBub2RlLnVybCA9IHVybDtcbiAgICAgICAgLy8gdGhlIGJhY2tlbmQgcHJvdmlkZSBib29sZWFuIHZhbHVlIGZvciB0aGUgdGFyZ2V0XG4gICAgICAgIC8vIGluIGNhc2UgdGhlIGxpbmsgc2hvdWxkIGJlIG9wZW5lZCBpbiBhIG5ldyB3aW5kb3dcbiAgICAgICAgbm9kZS50YXJnZXQgPSAhIWl0ZW0udGFyZ2V0ID8gJ19ibGFuaycgOiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogR2V0cyB0aGUgVVJMIG9yIGxpbmsgdG8gYSByZWxhdGVkIGl0ZW0gKGNhdGVnb3J5KVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRMaW5rKGl0ZW0pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKGl0ZW0udXJsKSB7XG4gICAgICByZXR1cm4gaXRlbS51cmw7XG4gICAgfSBlbHNlIGlmIChpdGVtLmNhdGVnb3J5Q29kZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VtYW50aWNQYXRoU2VydmljZS50cmFuc2Zvcm0oe1xuICAgICAgICBjeFJvdXRlOiAnY2F0ZWdvcnknLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBjb2RlOiBpdGVtLmNhdGVnb3J5Q29kZSxcbiAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==