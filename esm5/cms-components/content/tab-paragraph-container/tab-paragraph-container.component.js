import { __assign, __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ViewChildren, } from '@angular/core';
import { CmsService, CMSTabParagraphContainer, WindowRef, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, distinctUntilKeyChanged, map, switchMap, } from 'rxjs/operators';
import { ComponentWrapperDirective } from '../../../cms-structure/page/component/component-wrapper.directive';
import { CmsComponentData } from '../../../cms-structure/page/model/index';
var TabParagraphContainerComponent = /** @class */ (function () {
    function TabParagraphContainerComponent(componentData, cmsService, winRef) {
        var _this = this;
        this.componentData = componentData;
        this.cmsService = cmsService;
        this.winRef = winRef;
        this.activeTabNum = 0;
        this.tabTitleParams = [];
        this.components$ = this.componentData.data$.pipe(distinctUntilKeyChanged('components'), switchMap(function (data) {
            return combineLatest(data.components.split(' ').map(function (component) {
                return _this.cmsService.getComponentData(component).pipe(distinctUntilChanged(), map(function (tab) {
                    if (!tab.flexType) {
                        tab = __assign(__assign({}, tab), { flexType: tab.typeCode });
                    }
                    return __assign(__assign({}, tab), { title: data.uid + ".tabs." + tab.uid });
                }));
            }));
        }));
    }
    TabParagraphContainerComponent.prototype.select = function (tabNum) {
        this.activeTabNum = tabNum;
    };
    TabParagraphContainerComponent.prototype.ngOnInit = function () {
        var _a, _b, _c;
        this.activeTabNum = (_c = (_b = (_a = this.winRef.nativeWindow.history) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.activeTab) !== null && _c !== void 0 ? _c : this.activeTabNum;
    };
    TabParagraphContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // If the sub cms components data exist, the components created before ngAfterViewInit are called.
        // In this case, the title parameters are directly pulled from them.
        // If the sub cms components data does not exist, it should should be loaded first.
        // In this case, listen to the changes to wait for them to be created.
        if (this.children.length > 0) {
            this.getTitleParams(this.children);
        }
        else {
            this.subscription = this.children.changes.subscribe(function (tabComps) {
                return _this.getTitleParams(tabComps);
            });
        }
    };
    TabParagraphContainerComponent.prototype.getTitleParams = function (children) {
        var _this = this;
        children.forEach(function (comp) {
            if (comp.cmpRef && comp.cmpRef.instance.tabTitleParam$) {
                _this.tabTitleParams.push(comp.cmpRef.instance.tabTitleParam$);
            }
            else {
                _this.tabTitleParams.push(null);
            }
        });
    };
    TabParagraphContainerComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    TabParagraphContainerComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: CmsService },
        { type: WindowRef }
    ]; };
    __decorate([
        ViewChildren(ComponentWrapperDirective)
    ], TabParagraphContainerComponent.prototype, "children", void 0);
    TabParagraphContainerComponent = __decorate([
        Component({
            selector: 'cx-tab-paragraph-container',
            template: "<ng-container *ngFor=\"let component of components$ | async; let i = index\">\n  <button [class.active]=\"i === activeTabNum\" (click)=\"select(i)\">\n    {{ component.title | cxTranslate: { param: tabTitleParams[i] | async } }}\n  </button>\n  <div [class.active]=\"i === activeTabNum\">\n    <ng-template [cxOutlet]=\"component.flexType\" [cxOutletContext]=\"{}\">\n      <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n    </ng-template>\n  </div>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], TabParagraphContainerComponent);
    return TabParagraphContainerComponent;
}());
export { TabParagraphContainerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY29udGVudC90YWItcGFyYWdyYXBoLWNvbnRhaW5lci90YWItcGFyYWdyYXBoLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUlULFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsVUFBVSxFQUNWLHdCQUF3QixFQUN4QixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLHVCQUF1QixFQUN2QixHQUFHLEVBQ0gsU0FBUyxHQUNWLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDOUcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFPM0U7SUFZRSx3Q0FDUyxhQUF5RCxFQUN0RCxVQUFzQixFQUN0QixNQUFpQjtRQUg3QixpQkFJSTtRQUhLLGtCQUFhLEdBQWIsYUFBYSxDQUE0QztRQUN0RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFiN0IsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFNakIsbUJBQWMsR0FBc0IsRUFBRSxDQUFDO1FBVXZDLGdCQUFXLEdBQXNCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDNUQsdUJBQXVCLENBQUMsWUFBWSxDQUFDLEVBQ3JDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDYixPQUFBLGFBQWEsQ0FDWCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxTQUFTO2dCQUN2QyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQU0sU0FBUyxDQUFDLENBQUMsSUFBSSxDQUNuRCxvQkFBb0IsRUFBRSxFQUN0QixHQUFHLENBQUMsVUFBQyxHQUFHO29CQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO3dCQUNqQixHQUFHLHlCQUNFLEdBQUcsS0FDTixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsR0FDdkIsQ0FBQztxQkFDSDtvQkFFRCw2QkFDSyxHQUFHLEtBQ04sS0FBSyxFQUFLLElBQUksQ0FBQyxHQUFHLGNBQVMsR0FBRyxDQUFDLEdBQUssSUFDcEM7Z0JBQ0osQ0FBQyxDQUFDLENBQ0g7WUFmRCxDQWVDLENBQ0YsQ0FDRjtRQW5CRCxDQW1CQyxDQUNGLENBQ0YsQ0FBQztJQTFCQyxDQUFDO0lBNEJKLCtDQUFNLEdBQU4sVUFBTyxNQUFjO1FBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUFFRCxpREFBUSxHQUFSOztRQUNFLElBQUksQ0FBQyxZQUFZLHFCQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sMENBQUUsS0FBSywwQ0FBRSxTQUFTLG1DQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDNUUsQ0FBQztJQUVELHdEQUFlLEdBQWY7UUFBQSxpQkFhQztRQVpDLGtHQUFrRztRQUNsRyxvRUFBb0U7UUFDcEUsbUZBQW1GO1FBQ25GLHNFQUFzRTtRQUN0RSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQ2pELFVBQUMsUUFBOEM7Z0JBQzdDLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7WUFBN0IsQ0FBNkIsQ0FDaEMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVPLHVEQUFjLEdBQXRCLFVBQXVCLFFBQThDO1FBQXJFLGlCQVFDO1FBUEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRTtnQkFDdEQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDL0Q7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxvREFBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOztnQkFyRXVCLGdCQUFnQjtnQkFDaEIsVUFBVTtnQkFDZCxTQUFTOztJQVhZO1FBQXhDLFlBQVksQ0FBQyx5QkFBeUIsQ0FBQztvRUFFdEM7SUFOUyw4QkFBOEI7UUFMMUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxtZkFBdUQ7WUFDdkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLDhCQUE4QixDQW1GMUM7SUFBRCxxQ0FBQztDQUFBLEFBbkZELElBbUZDO1NBbkZZLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZHJlbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNTZXJ2aWNlLFxuICBDTVNUYWJQYXJhZ3JhcGhDb250YWluZXIsXG4gIFdpbmRvd1JlZixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGRpc3RpbmN0VW50aWxLZXlDaGFuZ2VkLFxuICBtYXAsXG4gIHN3aXRjaE1hcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9jb21wb25lbnQvY29tcG9uZW50LXdyYXBwZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC10YWItcGFyYWdyYXBoLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWItcGFyYWdyYXBoLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJQYXJhZ3JhcGhDb250YWluZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGFjdGl2ZVRhYk51bSA9IDA7XG5cbiAgQFZpZXdDaGlsZHJlbihDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlKSBjaGlsZHJlbiE6IFF1ZXJ5TGlzdDxcbiAgICBDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlXG4gID47XG5cbiAgdGFiVGl0bGVQYXJhbXM6IE9ic2VydmFibGU8YW55PltdID0gW107XG5cbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q01TVGFiUGFyYWdyYXBoQ29udGFpbmVyPixcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7fVxuXG4gIGNvbXBvbmVudHMkOiBPYnNlcnZhYmxlPGFueVtdPiA9IHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJC5waXBlKFxuICAgIGRpc3RpbmN0VW50aWxLZXlDaGFuZ2VkKCdjb21wb25lbnRzJyksXG4gICAgc3dpdGNoTWFwKChkYXRhKSA9PlxuICAgICAgY29tYmluZUxhdGVzdChcbiAgICAgICAgZGF0YS5jb21wb25lbnRzLnNwbGl0KCcgJykubWFwKChjb21wb25lbnQpID0+XG4gICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmdldENvbXBvbmVudERhdGE8YW55Pihjb21wb25lbnQpLnBpcGUoXG4gICAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgICAgbWFwKCh0YWIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF0YWIuZmxleFR5cGUpIHtcbiAgICAgICAgICAgICAgICB0YWIgPSB7XG4gICAgICAgICAgICAgICAgICAuLi50YWIsXG4gICAgICAgICAgICAgICAgICBmbGV4VHlwZTogdGFiLnR5cGVDb2RlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnRhYixcbiAgICAgICAgICAgICAgICB0aXRsZTogYCR7ZGF0YS51aWR9LnRhYnMuJHt0YWIudWlkfWAsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBzZWxlY3QodGFiTnVtOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZVRhYk51bSA9IHRhYk51bTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlVGFiTnVtID1cbiAgICAgIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdy5oaXN0b3J5Py5zdGF0ZT8uYWN0aXZlVGFiID8/IHRoaXMuYWN0aXZlVGFiTnVtO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIElmIHRoZSBzdWIgY21zIGNvbXBvbmVudHMgZGF0YSBleGlzdCwgdGhlIGNvbXBvbmVudHMgY3JlYXRlZCBiZWZvcmUgbmdBZnRlclZpZXdJbml0IGFyZSBjYWxsZWQuXG4gICAgLy8gSW4gdGhpcyBjYXNlLCB0aGUgdGl0bGUgcGFyYW1ldGVycyBhcmUgZGlyZWN0bHkgcHVsbGVkIGZyb20gdGhlbS5cbiAgICAvLyBJZiB0aGUgc3ViIGNtcyBjb21wb25lbnRzIGRhdGEgZG9lcyBub3QgZXhpc3QsIGl0IHNob3VsZCBzaG91bGQgYmUgbG9hZGVkIGZpcnN0LlxuICAgIC8vIEluIHRoaXMgY2FzZSwgbGlzdGVuIHRvIHRoZSBjaGFuZ2VzIHRvIHdhaXQgZm9yIHRoZW0gdG8gYmUgY3JlYXRlZC5cbiAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmdldFRpdGxlUGFyYW1zKHRoaXMuY2hpbGRyZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuY2hpbGRyZW4uY2hhbmdlcy5zdWJzY3JpYmUoXG4gICAgICAgICh0YWJDb21wczogUXVlcnlMaXN0PENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmU+KSA9PlxuICAgICAgICAgIHRoaXMuZ2V0VGl0bGVQYXJhbXModGFiQ29tcHMpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGl0bGVQYXJhbXMoY2hpbGRyZW46IFF1ZXJ5TGlzdDxDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlPikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goKGNvbXApID0+IHtcbiAgICAgIGlmIChjb21wLmNtcFJlZiAmJiBjb21wLmNtcFJlZi5pbnN0YW5jZS50YWJUaXRsZVBhcmFtJCkge1xuICAgICAgICB0aGlzLnRhYlRpdGxlUGFyYW1zLnB1c2goY29tcC5jbXBSZWYuaW5zdGFuY2UudGFiVGl0bGVQYXJhbSQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YWJUaXRsZVBhcmFtcy5wdXNoKG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19