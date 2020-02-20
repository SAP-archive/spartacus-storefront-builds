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
            return {
                title: data.name,
                children: [nav],
            };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLFVBQVUsRUFDVixtQkFBbUIsR0FDcEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU03RDtJQUNFLDJCQUNZLFVBQXNCLEVBQ3RCLG1CQUF3QztRQUR4QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDakQsQ0FBQztJQUVHLDRDQUFnQixHQUF2QixVQUNFLEtBQXlDO1FBRXpDLE9BQU8sYUFBYSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUMvRCxHQUFHLENBQUMsVUFBQyxFQUFXO2dCQUFYLGtCQUFXLEVBQVYsWUFBSSxFQUFFLFdBQUc7WUFDYixPQUFPO2dCQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDaEIsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDO2FBQ2hCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSw2Q0FBaUIsR0FBeEIsVUFDRSxLQUF5QztRQUQzQyxpQkFxQ0M7UUFsQ0MsSUFBSSxDQUFDLEtBQUssRUFBRTtZ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QW9LN0I7NEJBakxEO0NBaUxDLEFBcEtELElBb0tDO1NBcEtZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc05hdmlnYXRpb25Db21wb25lbnQsXG4gIENtc1NlcnZpY2UsXG4gIFNlbWFudGljUGF0aFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbk5vZGUgfSBmcm9tICcuL25hdmlnYXRpb24tbm9kZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlXG4gICkge31cblxuICBwdWJsaWMgY3JlYXRlTmF2aWdhdGlvbihcbiAgICBkYXRhJDogT2JzZXJ2YWJsZTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50PlxuICApOiBPYnNlcnZhYmxlPE5hdmlnYXRpb25Ob2RlPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW2RhdGEkLCB0aGlzLmdldE5hdmlnYXRpb25Ob2RlKGRhdGEkKV0pLnBpcGUoXG4gICAgICBtYXAoKFtkYXRhLCBuYXZdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IGRhdGEubmFtZSxcbiAgICAgICAgICBjaGlsZHJlbjogW25hdl0sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIGBOYXZpZ2F0aW9uTm9kZWAgZm9yIHRoZSBnaXZlbiBgQ21zTmF2aWdhdGlvbkNvbXBvbmVudGAuXG4gICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBsb2FkIHRoZSBuYXZpZ2F0aW9uIHVuZGVybHlpbmcgZW50cmllcyBhbmQgY2hpbGRzIGlmIHRoZXkgaGF2ZW4ndCBiZWVuXG4gICAqIGxvYWRlZCBzbyBmYXIuXG4gICAqL1xuICBwdWJsaWMgZ2V0TmF2aWdhdGlvbk5vZGUoXG4gICAgZGF0YSQ6IE9ic2VydmFibGU8Q21zTmF2aWdhdGlvbkNvbXBvbmVudD5cbiAgKTogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uTm9kZT4ge1xuICAgIGlmICghZGF0YSQpIHtcbiAgICAgIHJldHVybiBvZigpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YSQucGlwZShcbiAgICAgIGZpbHRlcihkYXRhID0+ICEhZGF0YSksXG4gICAgICBzd2l0Y2hNYXAoZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb24gPSBkYXRhLm5hdmlnYXRpb25Ob2RlID8gZGF0YS5uYXZpZ2F0aW9uTm9kZSA6IGRhdGE7XG4gICAgICAgIHJldHVybiB0aGlzLmNtc1NlcnZpY2UuZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbi51aWQpLnBpcGUoXG4gICAgICAgICAgdGFwKGl0ZW1zID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHRoaXMubG9hZE5hdmlnYXRpb25FbnRyeUl0ZW1zKG5hdmlnYXRpb24sIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gd2Ugc2hvdWxkIGNoZWNrIHdoZXRoZXIgdGhlIGV4aXN0aW5nIG5vZGUgaXRlbXMgYXJlIHdoYXQgZXhwZWN0ZWRcbiAgICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRJdGVtcyA9IFtdO1xuICAgICAgICAgICAgICB0aGlzLmxvYWROYXZpZ2F0aW9uRW50cnlJdGVtcyhuYXZpZ2F0aW9uLCBmYWxzZSwgZXhwZWN0ZWRJdGVtcyk7XG4gICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nSXRlbXMgPSBPYmplY3Qua2V5cyhpdGVtcykubWFwKFxuICAgICAgICAgICAgICAgIGtleSA9PiBpdGVtc1trZXldLnVpZFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nSXRlbXMgPSBleHBlY3RlZEl0ZW1zLmZpbHRlcihcbiAgICAgICAgICAgICAgICBpdCA9PiAhZXhpc3RpbmdJdGVtcy5pbmNsdWRlcyhpdC5pZClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKG1pc3NpbmdJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmxvYWROYXZpZ2F0aW9uSXRlbXMoXG4gICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLnVpZCxcbiAgICAgICAgICAgICAgICAgIG1pc3NpbmdJdGVtc1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICAgICAgbWFwKGl0ZW1zID0+IHRoaXMucG9wdWxhdGVOYXZpZ2F0aW9uTm9kZShuYXZpZ2F0aW9uLCBpdGVtcykpXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgYWxsIG5hdmlnYXRpb24gZW50cnkgaXRlbXMnIHR5cGUgYW5kIGlkLiBEaXNwYXRjaCBhY3Rpb24gdG8gbG9hZCBhbGwgdGhlc2UgaXRlbXNcbiAgICogQHBhcmFtIG5vZGVEYXRhXG4gICAqIEBwYXJhbSByb290XG4gICAqIEBwYXJhbSBpdGVtc0xpc3RcbiAgICovXG4gIHByaXZhdGUgbG9hZE5hdmlnYXRpb25FbnRyeUl0ZW1zKFxuICAgIG5vZGVEYXRhOiBhbnksXG4gICAgcm9vdDogYm9vbGVhbixcbiAgICBpdGVtc0xpc3QgPSBbXVxuICApOiB2b2lkIHtcbiAgICBpZiAobm9kZURhdGEuZW50cmllcyAmJiBub2RlRGF0YS5lbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIG5vZGVEYXRhLmVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGl0ZW1zTGlzdC5wdXNoKHtcbiAgICAgICAgICBzdXBlclR5cGU6IGVudHJ5Lml0ZW1TdXBlclR5cGUsXG4gICAgICAgICAgaWQ6IGVudHJ5Lml0ZW1JZCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAobm9kZURhdGEuY2hpbGRyZW4gJiYgbm9kZURhdGEuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgbm9kZURhdGEuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PlxuICAgICAgICB0aGlzLmxvYWROYXZpZ2F0aW9uRW50cnlJdGVtcyhjaGlsZCwgZmFsc2UsIGl0ZW1zTGlzdClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHJvb3QpIHtcbiAgICAgIHRoaXMuY21zU2VydmljZS5sb2FkTmF2aWdhdGlvbkl0ZW1zKG5vZGVEYXRhLnVpZCwgaXRlbXNMaXN0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IG5vZGUgdHJlZSBmb3IgdGhlIHZpZXdcbiAgICogQHBhcmFtIG5vZGVEYXRhXG4gICAqIEBwYXJhbSBpdGVtc1xuICAgKi9cbiAgcHJpdmF0ZSBwb3B1bGF0ZU5hdmlnYXRpb25Ob2RlKG5vZGVEYXRhOiBhbnksIGl0ZW1zOiBhbnkpOiBOYXZpZ2F0aW9uTm9kZSB7XG4gICAgY29uc3Qgbm9kZTogTmF2aWdhdGlvbk5vZGUgPSB7fTtcblxuICAgIGlmIChub2RlRGF0YS50aXRsZSkge1xuICAgICAgLy8gdGhlIG5vZGUgdGl0bGUgd2lsbCBiZSBwb3B1bGF0ZWQgYnkgdGhlIGZpcnN0IGVudHJ5IChpZiBhbnkpXG4gICAgICAvLyBpZiB0aGVyZSdzIG5vIG5vZGVEYXRhLnRpdGxlIGF2YWlsYWJsZVxuICAgICAgbm9kZS50aXRsZSA9IG5vZGVEYXRhLnRpdGxlO1xuICAgIH1cblxuICAgIGlmIChub2RlRGF0YS5lbnRyaWVzICYmIG5vZGVEYXRhLmVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5wb3B1bGF0ZUxpbmsobm9kZSwgbm9kZURhdGEuZW50cmllc1swXSwgaXRlbXMpO1xuICAgIH1cblxuICAgIGlmIChub2RlRGF0YS5jaGlsZHJlbiAmJiBub2RlRGF0YS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IG5vZGVEYXRhLmNoaWxkcmVuXG4gICAgICAgIC5tYXAoY2hpbGQgPT4gdGhpcy5wb3B1bGF0ZU5hdmlnYXRpb25Ob2RlKGNoaWxkLCBpdGVtcykpXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbik7XG4gICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBub2RlLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIG51bGwgaW4gY2FzZSB0aGVyZSBhcmUgbm8gY2hpbGRyZW5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMobm9kZSkubGVuZ3RoID09PSAwID8gbnVsbCA6IG5vZGU7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG5vZGUgbGluayBpcyBkcml2ZW4gYnkgdGhlIGZpcnN0IGVudHJ5LlxuICAgKi9cbiAgcHJpdmF0ZSBwb3B1bGF0ZUxpbmsobm9kZTogTmF2aWdhdGlvbk5vZGUsIGVudHJ5LCBpdGVtcykge1xuICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tgJHtlbnRyeS5pdGVtSWR9XyR7ZW50cnkuaXRlbVN1cGVyVHlwZX1gXTtcblxuICAgIC8vIG5vdyB3ZSBvbmx5IGNvbnNpZGVyIENNU0xpbmtDb21wb25lbnRcbiAgICBpZiAoaXRlbSAmJiBlbnRyeS5pdGVtVHlwZSA9PT0gJ0NNU0xpbmtDb21wb25lbnQnKSB7XG4gICAgICBpZiAoIW5vZGUudGl0bGUpIHtcbiAgICAgICAgbm9kZS50aXRsZSA9IGl0ZW0ubGlua05hbWU7XG4gICAgICB9XG4gICAgICBjb25zdCB1cmwgPSB0aGlzLmdldExpbmsoaXRlbSk7XG4gICAgICAvLyBvbmx5IHBvcHVsYXRlIHRoZSBub2RlIGxpbmsgaWYgd2UgaGF2ZSBhIHZpc2libGUgbm9kZVxuICAgICAgaWYgKG5vZGUudGl0bGUgJiYgdXJsKSB7XG4gICAgICAgIG5vZGUudXJsID0gdXJsO1xuICAgICAgICAvLyB0aGUgYmFja2VuZCBwcm92aWRlIGJvb2xlYW4gdmFsdWUgZm9yIHRoZSB0YXJnZXRcbiAgICAgICAgLy8gaW4gY2FzZSB0aGUgbGluayBzaG91bGQgYmUgb3BlbmVkIGluIGEgbmV3IHdpbmRvd1xuICAgICAgICBub2RlLnRhcmdldCA9ICEhaXRlbS50YXJnZXQgPyAnX2JsYW5rJyA6ICcnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBHZXRzIHRoZSBVUkwgb3IgbGluayB0byBhIHJlbGF0ZWQgaXRlbSAoY2F0ZWdvcnkpXG4gICAqL1xuICBwcml2YXRlIGdldExpbmsoaXRlbSk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoaXRlbS51cmwpIHtcbiAgICAgIHJldHVybiBpdGVtLnVybDtcbiAgICB9IGVsc2UgaWYgKGl0ZW0uY2F0ZWdvcnlDb2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLnRyYW5zZm9ybSh7XG4gICAgICAgIGN4Um91dGU6ICdjYXRlZ29yeScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGNvZGU6IGl0ZW0uY2F0ZWdvcnlDb2RlLFxuICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19