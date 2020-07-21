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
        var _a, _b, _c, _d;
        this.activeTabNum = (_d = (_c = (_b = (_a = this.winRef.nativeWindow) === null || _a === void 0 ? void 0 : _a.history) === null || _b === void 0 ? void 0 : _b.state) === null || _c === void 0 ? void 0 : _c.activeTab) !== null && _d !== void 0 ? _d : this.activeTabNum;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY29udGVudC90YWItcGFyYWdyYXBoLWNvbnRhaW5lci90YWItcGFyYWdyYXBoLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUlULFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsVUFBVSxFQUNWLHdCQUF3QixFQUN4QixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBTzNFO0lBWUUsd0NBQ1MsYUFBeUQsRUFDdEQsVUFBc0IsRUFDdEIsTUFBaUI7UUFIN0IsaUJBSUk7UUFISyxrQkFBYSxHQUFiLGFBQWEsQ0FBNEM7UUFDdEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBYjdCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBTWpCLG1CQUFjLEdBQXNCLEVBQUUsQ0FBQztRQVV2QyxnQkFBVyxHQUFzQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQzVELG9CQUFvQixDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUEsQ0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLFVBQVUsT0FBSyxDQUFDLGFBQUQs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O09BQ1csOEJBQThCLENBdUYxQztJQUFELHFDQUFDO0NBQUEsQUF2RkQsSUF1RkM7U0F2RlksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkcmVuLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc1NlcnZpY2UsXG4gIENNU1RhYlBhcmFncmFwaENvbnRhaW5lcixcbiAgV2luZG93UmVmLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtd3JhcHBlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXRhYi1wYXJhZ3JhcGgtY29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1wYXJhZ3JhcGgtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRhYlBhcmFncmFwaENvbnRhaW5lckNvbXBvbmVudFxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgYWN0aXZlVGFiTnVtID0gMDtcblxuICBAVmlld0NoaWxkcmVuKENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmUpIGNoaWxkcmVuITogUXVlcnlMaXN0PFxuICAgIENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmVcbiAgPjtcblxuICB0YWJUaXRsZVBhcmFtczogT2JzZXJ2YWJsZTxhbnk+W10gPSBbXTtcblxuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDTVNUYWJQYXJhZ3JhcGhDb250YWluZXI+LFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHt9XG5cbiAgY29tcG9uZW50cyQ6IE9ic2VydmFibGU8YW55W10+ID0gdGhpcy5jb21wb25lbnREYXRhLmRhdGEkLnBpcGUoXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKHgsIHkpID0+IHg/LmNvbXBvbmVudHMgPT09IHk/LmNvbXBvbmVudHMpLFxuICAgIHN3aXRjaE1hcCgoZGF0YSkgPT5cbiAgICAgIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgIChkYXRhPy5jb21wb25lbnRzID8/ICcnKS5zcGxpdCgnICcpLm1hcCgoY29tcG9uZW50KSA9PlxuICAgICAgICAgIHRoaXMuY21zU2VydmljZS5nZXRDb21wb25lbnREYXRhPGFueT4oY29tcG9uZW50KS5waXBlKFxuICAgICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgICAgIG1hcCgodGFiKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghdGFiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghdGFiLmZsZXhUeXBlKSB7XG4gICAgICAgICAgICAgICAgdGFiID0ge1xuICAgICAgICAgICAgICAgICAgLi4udGFiLFxuICAgICAgICAgICAgICAgICAgZmxleFR5cGU6IHRhYi50eXBlQ29kZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi50YWIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IGAke2RhdGEudWlkfS50YWJzLiR7dGFiLnVpZH1gLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgc2VsZWN0KHRhYk51bTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVUYWJOdW0gPSB0YWJOdW07XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZVRhYk51bSA9XG4gICAgICB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3c/Lmhpc3Rvcnk/LnN0YXRlPy5hY3RpdmVUYWIgPz8gdGhpcy5hY3RpdmVUYWJOdW07XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgLy8gSWYgdGhlIHN1YiBjbXMgY29tcG9uZW50cyBkYXRhIGV4aXN0LCB0aGUgY29tcG9uZW50cyBjcmVhdGVkIGJlZm9yZSBuZ0FmdGVyVmlld0luaXQgYXJlIGNhbGxlZC5cbiAgICAvLyBJbiB0aGlzIGNhc2UsIHRoZSB0aXRsZSBwYXJhbWV0ZXJzIGFyZSBkaXJlY3RseSBwdWxsZWQgZnJvbSB0aGVtLlxuICAgIC8vIElmIHRoZSBzdWIgY21zIGNvbXBvbmVudHMgZGF0YSBkb2VzIG5vdCBleGlzdCwgaXQgc2hvdWxkIHNob3VsZCBiZSBsb2FkZWQgZmlyc3QuXG4gICAgLy8gSW4gdGhpcyBjYXNlLCBsaXN0ZW4gdG8gdGhlIGNoYW5nZXMgdG8gd2FpdCBmb3IgdGhlbSB0byBiZSBjcmVhdGVkLlxuICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZ2V0VGl0bGVQYXJhbXModGhpcy5jaGlsZHJlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5jaGlsZHJlbi5jaGFuZ2VzLnN1YnNjcmliZShcbiAgICAgICAgKHRhYkNvbXBzOiBRdWVyeUxpc3Q8Q29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZT4pID0+XG4gICAgICAgICAgdGhpcy5nZXRUaXRsZVBhcmFtcyh0YWJDb21wcylcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRUaXRsZVBhcmFtcyhjaGlsZHJlbjogUXVlcnlMaXN0PENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmU+KSB7XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY29tcCkgPT4ge1xuICAgICAgaWYgKGNvbXAuY21wUmVmICYmIGNvbXAuY21wUmVmLmluc3RhbmNlLnRhYlRpdGxlUGFyYW0kKSB7XG4gICAgICAgIHRoaXMudGFiVGl0bGVQYXJhbXMucHVzaChjb21wLmNtcFJlZi5pbnN0YW5jZS50YWJUaXRsZVBhcmFtJCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhYlRpdGxlUGFyYW1zLnB1c2gobnVsbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=