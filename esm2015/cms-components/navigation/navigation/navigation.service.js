import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CmsNavigationComponent, CmsService, SemanticPathService, } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
let NavigationService = class NavigationService {
    constructor(cmsService, semanticPathService) {
        this.cmsService = cmsService;
        this.semanticPathService = semanticPathService;
    }
    createNavigation(data$) {
        return combineLatest([data$, this.getNavigationNode(data$)]).pipe(map(([data, nav]) => {
            return {
                title: data.name,
                children: [nav],
            };
        }));
    }
    /**
     * returns an observable with the `NavigationNode` for the given `CmsNavigationComponent`.
     * This function will load the navigation underlying entries and childs if they haven't been
     * loaded so far.
     */
    getNavigationNode(data$) {
        if (!data$) {
            return of();
        }
        return data$.pipe(filter(data => !!data), switchMap(data => {
            const navigation = data.navigationNode ? data.navigationNode : data;
            return this.cmsService.getNavigationEntryItems(navigation.uid).pipe(tap(items => {
                if (items === undefined) {
                    this.loadNavigationEntryItems(navigation, true);
                }
                else {
                    // we should check whether the existing node items are what expected
                    const expectedItems = [];
                    this.loadNavigationEntryItems(navigation, false, expectedItems);
                    const existingItems = Object.keys(items).map(key => items[key].uid);
                    const missingItems = expectedItems.filter(it => !existingItems.includes(it.id));
                    if (missingItems.length > 0) {
                        this.cmsService.loadNavigationItems(navigation.uid, missingItems);
                    }
                }
            }), filter(Boolean), map(items => this.populateNavigationNode(navigation, items)));
        }));
    }
    /**
     * Loads all navigation entry items' type and id. Dispatch action to load all these items
     * @param nodeData
     * @param root
     * @param itemsList
     */
    loadNavigationEntryItems(nodeData, root, itemsList = []) {
        if (nodeData.entries && nodeData.entries.length > 0) {
            nodeData.entries.forEach(entry => {
                itemsList.push({
                    superType: entry.itemSuperType,
                    id: entry.itemId,
                });
            });
        }
        if (nodeData.children && nodeData.children.length > 0) {
            nodeData.children.forEach(child => this.loadNavigationEntryItems(child, false, itemsList));
        }
        if (root) {
            this.cmsService.loadNavigationItems(nodeData.uid, itemsList);
        }
    }
    /**
     * Create a new node tree for the view
     * @param nodeData
     * @param items
     */
    populateNavigationNode(nodeData, items) {
        const node = {};
        if (nodeData.title) {
            // the node title will be populated by the first entry (if any)
            // if there's no nodeData.title available
            node.title = nodeData.title;
        }
        if (nodeData.entries && nodeData.entries.length > 0) {
            this.populateLink(node, nodeData.entries[0], items);
        }
        if (nodeData.children && nodeData.children.length > 0) {
            const children = nodeData.children
                .map(child => this.populateNavigationNode(child, items))
                .filter(Boolean);
            if (children.length > 0) {
                node.children = children;
            }
        }
        // return null in case there are no children
        return Object.keys(node).length === 0 ? null : node;
    }
    /**
     * The node link is driven by the first entry.
     */
    populateLink(node, entry, items) {
        const item = items[`${entry.itemId}_${entry.itemSuperType}`];
        // now we only consider CMSLinkComponent
        if (item && entry.itemType === 'CMSLinkComponent') {
            if (!node.title) {
                node.title = item.linkName;
            }
            const url = this.getLink(item);
            // only populate the node link if we have a visible node
            if (node.title && url) {
                node.url = url;
                // the backend provide boolean value for the target
                // in case the link should be opened in a new window
                node.target = !!item.target ? '_blank' : '';
            }
        }
    }
    /**
     *
     * Gets the URL or link to a related item (category)
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
};
NavigationService.ctorParameters = () => [
    { type: CmsService },
    { type: SemanticPathService }
];
NavigationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NavigationService_Factory() { return new NavigationService(i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i1.SemanticPathService)); }, token: NavigationService, providedIn: "root" });
NavigationService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], NavigationService);
export { NavigationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLFVBQVUsRUFDVixtQkFBbUIsR0FDcEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU03RCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQUM1QixZQUNZLFVBQXNCLEVBQ3RCLG1CQUF3QztRQUR4QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDakQsQ0FBQztJQUVHLGdCQUFnQixDQUNyQixLQUF5QztRQUV6QyxPQUFPLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDL0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRTtZQUNsQixPQUFPO2dCQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDaEIsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDO2FBQ2hCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxpQkFBaUIsQ0FDdEIsS0FBeUM7UUFFekMsSUFBSSxDQUFDLEtBQUss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RUFBRTtZQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDNUI7WUFDRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLHdEQUF3RDtZQUN4RCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxFQUFFO2dCQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDZixtREFBbUQ7Z0JBQ25ELG9EQUFvRDtnQkFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDN0M7U0FDRjtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSyxPQUFPLENBQUMsSUFBSTtRQUNsQixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDakI7YUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDO2dCQUN4QyxPQUFPLEVBQUUsVUFBVTtnQkFDbkIsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWTtvQkFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2lCQUNoQjthQUNGLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBbEt5QixVQUFVO1lBQ0QsbUJBQW1COzs7QUFIekMsaUJBQWlCO0lBSDdCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxpQkFBaUIsQ0FvSzdCO1NBcEtZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc05hdmlnYXRpb25Db21wb25lbnQsXG4gIENtc1NlcnZpY2UsXG4gIFNlbWFudGljUGF0aFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbk5vZGUgfSBmcm9tICcuL25hdmlnYXRpb24tbm9kZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlXG4gICkge31cblxuICBwdWJsaWMgY3JlYXRlTmF2aWdhdGlvbihcbiAgICBkYXRhJDogT2JzZXJ2YWJsZTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50PlxuICApOiBPYnNlcnZhYmxlPE5hdmlnYXRpb25Ob2RlPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW2RhdGEkLCB0aGlzLmdldE5hdmlnYXRpb25Ob2RlKGRhdGEkKV0pLnBpcGUoXG4gICAgICBtYXAoKFtkYXRhLCBuYXZdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IGRhdGEubmFtZSxcbiAgICAgICAgICBjaGlsZHJlbjogW25hdl0sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIGBOYXZpZ2F0aW9uTm9kZWAgZm9yIHRoZSBnaXZlbiBgQ21zTmF2aWdhdGlvbkNvbXBvbmVudGAuXG4gICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBsb2FkIHRoZSBuYXZpZ2F0aW9uIHVuZGVybHlpbmcgZW50cmllcyBhbmQgY2hpbGRzIGlmIHRoZXkgaGF2ZW4ndCBiZWVuXG4gICAqIGxvYWRlZCBzbyBmYXIuXG4gICAqL1xuICBwdWJsaWMgZ2V0TmF2aWdhdGlvbk5vZGUoXG4gICAgZGF0YSQ6IE9ic2VydmFibGU8Q21zTmF2aWdhdGlvbkNvbXBvbmVudD5cbiAgKTogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uTm9kZT4ge1xuICAgIGlmICghZGF0YSQpIHtcbiAgICAgIHJldHVybiBvZigpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YSQucGlwZShcbiAgICAgIGZpbHRlcihkYXRhID0+ICEhZGF0YSksXG4gICAgICBzd2l0Y2hNYXAoZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb24gPSBkYXRhLm5hdmlnYXRpb25Ob2RlID8gZGF0YS5uYXZpZ2F0aW9uTm9kZSA6IGRhdGE7XG4gICAgICAgIHJldHVybiB0aGlzLmNtc1NlcnZpY2UuZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbi51aWQpLnBpcGUoXG4gICAgICAgICAgdGFwKGl0ZW1zID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHRoaXMubG9hZE5hdmlnYXRpb25FbnRyeUl0ZW1zKG5hdmlnYXRpb24sIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gd2Ugc2hvdWxkIGNoZWNrIHdoZXRoZXIgdGhlIGV4aXN0aW5nIG5vZGUgaXRlbXMgYXJlIHdoYXQgZXhwZWN0ZWRcbiAgICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRJdGVtcyA9IFtdO1xuICAgICAgICAgICAgICB0aGlzLmxvYWROYXZpZ2F0aW9uRW50cnlJdGVtcyhuYXZpZ2F0aW9uLCBmYWxzZSwgZXhwZWN0ZWRJdGVtcyk7XG4gICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nSXRlbXMgPSBPYmplY3Qua2V5cyhpdGVtcykubWFwKFxuICAgICAgICAgICAgICAgIGtleSA9PiBpdGVtc1trZXldLnVpZFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nSXRlbXMgPSBleHBlY3RlZEl0ZW1zLmZpbHRlcihcbiAgICAgICAgICAgICAgICBpdCA9PiAhZXhpc3RpbmdJdGVtcy5pbmNsdWRlcyhpdC5pZClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKG1pc3NpbmdJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmxvYWROYXZpZ2F0aW9uSXRlbXMoXG4gICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLnVpZCxcbiAgICAgICAgICAgICAgICAgIG1pc3NpbmdJdGVtc1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICAgICAgbWFwKGl0ZW1zID0+IHRoaXMucG9wdWxhdGVOYXZpZ2F0aW9uTm9kZShuYXZpZ2F0aW9uLCBpdGVtcykpXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgYWxsIG5hdmlnYXRpb24gZW50cnkgaXRlbXMnIHR5cGUgYW5kIGlkLiBEaXNwYXRjaCBhY3Rpb24gdG8gbG9hZCBhbGwgdGhlc2UgaXRlbXNcbiAgICogQHBhcmFtIG5vZGVEYXRhXG4gICAqIEBwYXJhbSByb290XG4gICAqIEBwYXJhbSBpdGVtc0xpc3RcbiAgICovXG4gIHByaXZhdGUgbG9hZE5hdmlnYXRpb25FbnRyeUl0ZW1zKFxuICAgIG5vZGVEYXRhOiBhbnksXG4gICAgcm9vdDogYm9vbGVhbixcbiAgICBpdGVtc0xpc3QgPSBbXVxuICApOiB2b2lkIHtcbiAgICBpZiAobm9kZURhdGEuZW50cmllcyAmJiBub2RlRGF0YS5lbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIG5vZGVEYXRhLmVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGl0ZW1zTGlzdC5wdXNoKHtcbiAgICAgICAgICBzdXBlclR5cGU6IGVudHJ5Lml0ZW1TdXBlclR5cGUsXG4gICAgICAgICAgaWQ6IGVudHJ5Lml0ZW1JZCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAobm9kZURhdGEuY2hpbGRyZW4gJiYgbm9kZURhdGEuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgbm9kZURhdGEuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PlxuICAgICAgICB0aGlzLmxvYWROYXZpZ2F0aW9uRW50cnlJdGVtcyhjaGlsZCwgZmFsc2UsIGl0ZW1zTGlzdClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHJvb3QpIHtcbiAgICAgIHRoaXMuY21zU2VydmljZS5sb2FkTmF2aWdhdGlvbkl0ZW1zKG5vZGVEYXRhLnVpZCwgaXRlbXNMaXN0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IG5vZGUgdHJlZSBmb3IgdGhlIHZpZXdcbiAgICogQHBhcmFtIG5vZGVEYXRhXG4gICAqIEBwYXJhbSBpdGVtc1xuICAgKi9cbiAgcHJpdmF0ZSBwb3B1bGF0ZU5hdmlnYXRpb25Ob2RlKG5vZGVEYXRhOiBhbnksIGl0ZW1zOiBhbnkpOiBOYXZpZ2F0aW9uTm9kZSB7XG4gICAgY29uc3Qgbm9kZTogTmF2aWdhdGlvbk5vZGUgPSB7fTtcblxuICAgIGlmIChub2RlRGF0YS50aXRsZSkge1xuICAgICAgLy8gdGhlIG5vZGUgdGl0bGUgd2lsbCBiZSBwb3B1bGF0ZWQgYnkgdGhlIGZpcnN0IGVudHJ5IChpZiBhbnkpXG4gICAgICAvLyBpZiB0aGVyZSdzIG5vIG5vZGVEYXRhLnRpdGxlIGF2YWlsYWJsZVxuICAgICAgbm9kZS50aXRsZSA9IG5vZGVEYXRhLnRpdGxlO1xuICAgIH1cblxuICAgIGlmIChub2RlRGF0YS5lbnRyaWVzICYmIG5vZGVEYXRhLmVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5wb3B1bGF0ZUxpbmsobm9kZSwgbm9kZURhdGEuZW50cmllc1swXSwgaXRlbXMpO1xuICAgIH1cblxuICAgIGlmIChub2RlRGF0YS5jaGlsZHJlbiAmJiBub2RlRGF0YS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IG5vZGVEYXRhLmNoaWxkcmVuXG4gICAgICAgIC5tYXAoY2hpbGQgPT4gdGhpcy5wb3B1bGF0ZU5hdmlnYXRpb25Ob2RlKGNoaWxkLCBpdGVtcykpXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbik7XG4gICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBub2RlLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIG51bGwgaW4gY2FzZSB0aGVyZSBhcmUgbm8gY2hpbGRyZW5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMobm9kZSkubGVuZ3RoID09PSAwID8gbnVsbCA6IG5vZGU7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG5vZGUgbGluayBpcyBkcml2ZW4gYnkgdGhlIGZpcnN0IGVudHJ5LlxuICAgKi9cbiAgcHJpdmF0ZSBwb3B1bGF0ZUxpbmsobm9kZTogTmF2aWdhdGlvbk5vZGUsIGVudHJ5LCBpdGVtcykge1xuICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tgJHtlbnRyeS5pdGVtSWR9XyR7ZW50cnkuaXRlbVN1cGVyVHlwZX1gXTtcblxuICAgIC8vIG5vdyB3ZSBvbmx5IGNvbnNpZGVyIENNU0xpbmtDb21wb25lbnRcbiAgICBpZiAoaXRlbSAmJiBlbnRyeS5pdGVtVHlwZSA9PT0gJ0NNU0xpbmtDb21wb25lbnQnKSB7XG4gICAgICBpZiAoIW5vZGUudGl0bGUpIHtcbiAgICAgICAgbm9kZS50aXRsZSA9IGl0ZW0ubGlua05hbWU7XG4gICAgICB9XG4gICAgICBjb25zdCB1cmwgPSB0aGlzLmdldExpbmsoaXRlbSk7XG4gICAgICAvLyBvbmx5IHBvcHVsYXRlIHRoZSBub2RlIGxpbmsgaWYgd2UgaGF2ZSBhIHZpc2libGUgbm9kZVxuICAgICAgaWYgKG5vZGUudGl0bGUgJiYgdXJsKSB7XG4gICAgICAgIG5vZGUudXJsID0gdXJsO1xuICAgICAgICAvLyB0aGUgYmFja2VuZCBwcm92aWRlIGJvb2xlYW4gdmFsdWUgZm9yIHRoZSB0YXJnZXRcbiAgICAgICAgLy8gaW4gY2FzZSB0aGUgbGluayBzaG91bGQgYmUgb3BlbmVkIGluIGEgbmV3IHdpbmRvd1xuICAgICAgICBub2RlLnRhcmdldCA9ICEhaXRlbS50YXJnZXQgPyAnX2JsYW5rJyA6ICcnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBHZXRzIHRoZSBVUkwgb3IgbGluayB0byBhIHJlbGF0ZWQgaXRlbSAoY2F0ZWdvcnkpXG4gICAqL1xuICBwcml2YXRlIGdldExpbmsoaXRlbSk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoaXRlbS51cmwpIHtcbiAgICAgIHJldHVybiBpdGVtLnVybDtcbiAgICB9IGVsc2UgaWYgKGl0ZW0uY2F0ZWdvcnlDb2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLnRyYW5zZm9ybSh7XG4gICAgICAgIGN4Um91dGU6ICdjYXRlZ29yeScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGNvZGU6IGl0ZW0uY2F0ZWdvcnlDb2RlLFxuICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19