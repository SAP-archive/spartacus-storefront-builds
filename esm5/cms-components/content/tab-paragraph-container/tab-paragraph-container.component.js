import { __assign, __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ViewChildren, } from '@angular/core';
import { CmsService, CMSTabParagraphContainer, WindowRef, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
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
        this.components$ = this.componentData.data$.pipe(distinctUntilChanged(function (x, y) { return (x === null || x === void 0 ? void 0 : x.components) === (y === null || y === void 0 ? void 0 : y.components); }), switchMap(function (data) {
            var _a;
            return combineLatest(((_a = data === null || data === void 0 ? void 0 : data.components) !== null && _a !== void 0 ? _a : '').split(' ').map(function (component) {
                return _this.cmsService.getComponentData(component).pipe(distinctUntilChanged(), map(function (tab) {
                    if (!tab) {
                        return undefined;
                    }
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
            template: "<ng-container *ngFor=\"let component of components$ | async; let i = index\">\n  <ng-container *ngIf=\"component\">\n    <button [class.active]=\"i === activeTabNum\" (click)=\"select(i)\">\n      {{ component.title | cxTranslate: { param: tabTitleParams[i] | async } }}\n    </button>\n    <div [class.active]=\"i === activeTabNum\">\n      <ng-template [cxOutlet]=\"component.flexType\" [cxOutletContext]=\"{}\">\n        <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n      </ng-template>\n    </div>\n  </ng-container>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], TabParagraphContainerComponent);
    return TabParagraphContainerComponent;
}());
export { TabParagraphContainerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY29udGVudC90YWItcGFyYWdyYXBoLWNvbnRhaW5lci90YWItcGFyYWdyYXBoLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUlULFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsVUFBVSxFQUNWLHdCQUF3QixFQUN4QixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBTzNFO0lBWUUsd0NBQ1MsYUFBeUQsRUFDdEQsVUFBc0IsRUFDdEIsTUFBaUI7UUFIN0IsaUJBSUk7UUFISyxrQkFBYSxHQUFiLGFBQWEsQ0FBNEM7UUFDdEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBYjdCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBTWpCLG1CQUFjLEdBQXNCLEVBQUUsQ0FBQztRQVV2QyxnQkFBVyxHQUFzQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQzVELG9CQUFvQixDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUEsQ0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLFVBQVUsT0FBSyxDQUFDLGFBQUQs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T0FDVyw4QkFBOEIsQ0F1RjFDO0lBQUQscUNBQUM7Q0FBQSxBQXZGRCxJQXVGQztTQXZGWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGRyZW4sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zU2VydmljZSxcbiAgQ01TVGFiUGFyYWdyYXBoQ29udGFpbmVyLFxuICBXaW5kb3dSZWYsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L2NvbXBvbmVudC13cmFwcGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtdGFiLXBhcmFncmFwaC1jb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGFiUGFyYWdyYXBoQ29udGFpbmVyQ29tcG9uZW50XG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBhY3RpdmVUYWJOdW0gPSAwO1xuXG4gIEBWaWV3Q2hpbGRyZW4oQ29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZSkgY2hpbGRyZW4hOiBRdWVyeUxpc3Q8XG4gICAgQ29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZVxuICA+O1xuXG4gIHRhYlRpdGxlUGFyYW1zOiBPYnNlcnZhYmxlPGFueT5bXSA9IFtdO1xuXG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENNU1RhYlBhcmFncmFwaENvbnRhaW5lcj4sXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmXG4gICkge31cblxuICBjb21wb25lbnRzJDogT2JzZXJ2YWJsZTxhbnlbXT4gPSB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSQucGlwZShcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgoeCwgeSkgPT4geD8uY29tcG9uZW50cyA9PT0geT8uY29tcG9uZW50cyksXG4gICAgc3dpdGNoTWFwKChkYXRhKSA9PlxuICAgICAgY29tYmluZUxhdGVzdChcbiAgICAgICAgKGRhdGE/LmNvbXBvbmVudHMgPz8gJycpLnNwbGl0KCcgJykubWFwKChjb21wb25lbnQpID0+XG4gICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmdldENvbXBvbmVudERhdGE8YW55Pihjb21wb25lbnQpLnBpcGUoXG4gICAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgICAgbWFwKCh0YWIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF0YWIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCF0YWIuZmxleFR5cGUpIHtcbiAgICAgICAgICAgICAgICB0YWIgPSB7XG4gICAgICAgICAgICAgICAgICAuLi50YWIsXG4gICAgICAgICAgICAgICAgICBmbGV4VHlwZTogdGFiLnR5cGVDb2RlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnRhYixcbiAgICAgICAgICAgICAgICB0aXRsZTogYCR7ZGF0YS51aWR9LnRhYnMuJHt0YWIudWlkfWAsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBzZWxlY3QodGFiTnVtOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZVRhYk51bSA9IHRhYk51bTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlVGFiTnVtID1cbiAgICAgIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdy5oaXN0b3J5Py5zdGF0ZT8uYWN0aXZlVGFiID8/IHRoaXMuYWN0aXZlVGFiTnVtO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIElmIHRoZSBzdWIgY21zIGNvbXBvbmVudHMgZGF0YSBleGlzdCwgdGhlIGNvbXBvbmVudHMgY3JlYXRlZCBiZWZvcmUgbmdBZnRlclZpZXdJbml0IGFyZSBjYWxsZWQuXG4gICAgLy8gSW4gdGhpcyBjYXNlLCB0aGUgdGl0bGUgcGFyYW1ldGVycyBhcmUgZGlyZWN0bHkgcHVsbGVkIGZyb20gdGhlbS5cbiAgICAvLyBJZiB0aGUgc3ViIGNtcyBjb21wb25lbnRzIGRhdGEgZG9lcyBub3QgZXhpc3QsIGl0IHNob3VsZCBzaG91bGQgYmUgbG9hZGVkIGZpcnN0LlxuICAgIC8vIEluIHRoaXMgY2FzZSwgbGlzdGVuIHRvIHRoZSBjaGFuZ2VzIHRvIHdhaXQgZm9yIHRoZW0gdG8gYmUgY3JlYXRlZC5cbiAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmdldFRpdGxlUGFyYW1zKHRoaXMuY2hpbGRyZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuY2hpbGRyZW4uY2hhbmdlcy5zdWJzY3JpYmUoXG4gICAgICAgICh0YWJDb21wczogUXVlcnlMaXN0PENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmU+KSA9PlxuICAgICAgICAgIHRoaXMuZ2V0VGl0bGVQYXJhbXModGFiQ29tcHMpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGl0bGVQYXJhbXMoY2hpbGRyZW46IFF1ZXJ5TGlzdDxDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlPikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goKGNvbXApID0+IHtcbiAgICAgIGlmIChjb21wLmNtcFJlZiAmJiBjb21wLmNtcFJlZi5pbnN0YW5jZS50YWJUaXRsZVBhcmFtJCkge1xuICAgICAgICB0aGlzLnRhYlRpdGxlUGFyYW1zLnB1c2goY29tcC5jbXBSZWYuaW5zdGFuY2UudGFiVGl0bGVQYXJhbSQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YWJUaXRsZVBhcmFtcy5wdXNoKG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19