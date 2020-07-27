import { __assign, __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ViewChildren, } from '@angular/core';
import { CmsService, CMSTabParagraphContainer, WindowRef, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, map, take, switchMap } from 'rxjs/operators';
import { ComponentWrapperDirective } from '../../../cms-structure/page/component/component-wrapper.directive';
import { CmsComponentData } from '../../../cms-structure/page/model/index';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
import { BREAKPOINT } from '../../../layout/config/layout-config';
var TabParagraphContainerComponent = /** @class */ (function () {
    function TabParagraphContainerComponent(componentData, cmsService, winRef, breakpointService) {
        var _this = this;
        this.componentData = componentData;
        this.cmsService = cmsService;
        this.winRef = winRef;
        this.breakpointService = breakpointService;
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
    TabParagraphContainerComponent.prototype.select = function (tabNum, event) {
        var _this = this;
        var _a;
        (_a = this.breakpointService) === null || _a === void 0 ? void 0 : _a.isDown(BREAKPOINT.sm).pipe(take(1)).subscribe(function (res) {
            var _a, _b;
            if (res) {
                _this.activeTabNum = _this.activeTabNum === tabNum ? -1 : tabNum;
                if (event && (event === null || event === void 0 ? void 0 : event.target)) {
                    var target = event.target;
                    var parentNode = target.parentNode;
                    (_b = (_a = _this.winRef) === null || _a === void 0 ? void 0 : _a.nativeWindow) === null || _b === void 0 ? void 0 : _b.scrollTo(0, parentNode.offsetTop);
                }
            }
            else {
                _this.activeTabNum = tabNum;
            }
        });
    };
    TabParagraphContainerComponent.prototype.ngOnInit = function () {
        var _a, _b, _c, _d, _e;
        this.activeTabNum = (_e = (_d = (_c = (_b = (_a = this.winRef) === null || _a === void 0 ? void 0 : _a.nativeWindow) === null || _b === void 0 ? void 0 : _b.history) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.activeTab) !== null && _e !== void 0 ? _e : this.activeTabNum;
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
        { type: WindowRef },
        { type: BreakpointService }
    ]; };
    __decorate([
        ViewChildren(ComponentWrapperDirective)
    ], TabParagraphContainerComponent.prototype, "children", void 0);
    TabParagraphContainerComponent = __decorate([
        Component({
            selector: 'cx-tab-paragraph-container',
            template: "<ng-container *ngFor=\"let component of components$ | async; let i = index\">\n  <ng-container *ngIf=\"component\">\n    <button [class.active]=\"i === activeTabNum\" (click)=\"select(i, $event)\">\n      {{ component.title | cxTranslate: { param: tabTitleParams[i] | async } }}\n    </button>\n    <div [class.active]=\"i === activeTabNum\">\n      <ng-template [cxOutlet]=\"component.flexType\" [cxOutletContext]=\"{}\">\n        <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n      </ng-template>\n    </div>\n  </ng-container>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], TabParagraphContainerComponent);
    return TabParagraphContainerComponent;
}());
export { TabParagraphContainerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY29udGVudC90YWItcGFyYWdyYXBoLWNvbnRhaW5lci90YWItcGFyYWdyYXBoLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUlULFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsVUFBVSxFQUNWLHdCQUF3QixFQUN4QixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFPbEU7SUEyQkUsd0NBQ1MsYUFBeUQsRUFDdEQsVUFBc0IsRUFDdEIsTUFBa0IsRUFDbEIsaUJBQXFDO1FBSmpELGlCQUtJO1FBSkssa0JBQWEsR0FBYixhQUFhLENBQTRDO1FBQ3RELGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUNsQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW9CO1FBN0JqRCxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQU1qQixtQkFBYyxHQUFzQixFQUFFLENBQUM7UUEwQnZDLGdCQUFX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QUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO1lBQTdCLENBQTZCLENBQ2hDLENBQUM7U0FDSDtJQUNILENBQUM7SUFFTyx1REFBYyxHQUF0QixVQUF1QixRQUE4QztRQUFyRSxpQkFRQztRQVBDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ3BCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7Z0JBQ3RELEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQy9EO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0RBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Z0JBeEZ1QixnQkFBZ0I7Z0JBQ2hCLFVBQVU7Z0JBQ2IsU0FBUztnQkFDRSxpQkFBaUI7O0lBM0JSO1FBQXhDLFlBQVksQ0FBQyx5QkFBeUIsQ0FBQztvRUFFdEM7SUFOUyw4QkFBOEI7UUFMMUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDRCQUE0QjtZQUN0Qyxva0JBQXVEO1lBQ3ZELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyw4QkFBOEIsQ0FxSDFDO0lBQUQscUNBQUM7Q0FBQSxBQXJIRCxJQXFIQztTQXJIWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGRyZW4sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zU2VydmljZSxcbiAgQ01TVGFiUGFyYWdyYXBoQ29udGFpbmVyLFxuICBXaW5kb3dSZWYsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHRha2UsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L2NvbXBvbmVudC13cmFwcGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2luZGV4JztcbmltcG9ydCB7IEJyZWFrcG9pbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlJztcbmltcG9ydCB7IEJSRUFLUE9JTlQgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvY29uZmlnL2xheW91dC1jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC10YWItcGFyYWdyYXBoLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWItcGFyYWdyYXBoLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJQYXJhZ3JhcGhDb250YWluZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGFjdGl2ZVRhYk51bSA9IDA7XG5cbiAgQFZpZXdDaGlsZHJlbihDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlKSBjaGlsZHJlbiE6IFF1ZXJ5TGlzdDxcbiAgICBDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlXG4gID47XG5cbiAgdGFiVGl0bGVQYXJhbXM6IE9ic2VydmFibGU8YW55PltdID0gW107XG5cbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDTVNUYWJQYXJhZ3JhcGhDb250YWluZXI+LFxuICAgIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgd2luUmVmPzogV2luZG93UmVmLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBicmVha3BvaW50U2VydmljZT86IEJyZWFrcG9pbnRTZXJ2aWNlXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAyLjFcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q01TVGFiUGFyYWdyYXBoQ29udGFpbmVyPixcbiAgICBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHdpblJlZj86IFdpbmRvd1JlZlxuICApO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDTVNUYWJQYXJhZ3JhcGhDb250YWluZXI+LFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB3aW5SZWY/OiBXaW5kb3dSZWYsXG4gICAgcHJvdGVjdGVkIGJyZWFrcG9pbnRTZXJ2aWNlPzogQnJlYWtwb2ludFNlcnZpY2VcbiAgKSB7fVxuXG4gIGNvbXBvbmVudHMkOiBPYnNlcnZhYmxlPGFueVtdPiA9IHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJC5waXBlKFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCh4LCB5KSA9PiB4Py5jb21wb25lbnRzID09PSB5Py5jb21wb25lbnRzKSxcbiAgICBzd2l0Y2hNYXAoKGRhdGEpID0+XG4gICAgICBjb21iaW5lTGF0ZXN0KFxuICAgICAgICAoZGF0YT8uY29tcG9uZW50cyA/PyAnJykuc3BsaXQoJyAnKS5tYXAoKGNvbXBvbmVudCkgPT5cbiAgICAgICAgICB0aGlzLmNtc1NlcnZpY2UuZ2V0Q29tcG9uZW50RGF0YTxhbnk+KGNvbXBvbmVudCkucGlwZShcbiAgICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgICBtYXAoKHRhYikgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXRhYikge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIXRhYi5mbGV4VHlwZSkge1xuICAgICAgICAgICAgICAgIHRhYiA9IHtcbiAgICAgICAgICAgICAgICAgIC4uLnRhYixcbiAgICAgICAgICAgICAgICAgIGZsZXhUeXBlOiB0YWIudHlwZUNvZGUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4udGFiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBgJHtkYXRhLnVpZH0udGFicy4ke3RhYi51aWR9YCxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIHNlbGVjdCh0YWJOdW06IG51bWJlciwgZXZlbnQ/OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5icmVha3BvaW50U2VydmljZVxuICAgICAgPy5pc0Rvd24oQlJFQUtQT0lOVC5zbSlcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgIHRoaXMuYWN0aXZlVGFiTnVtID0gdGhpcy5hY3RpdmVUYWJOdW0gPT09IHRhYk51bSA/IC0xIDogdGFiTnVtO1xuICAgICAgICAgIGlmIChldmVudCAmJiBldmVudD8udGFyZ2V0KSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gdGFyZ2V0LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLndpblJlZj8ubmF0aXZlV2luZG93Py5zY3JvbGxUbygwLCBwYXJlbnROb2RlLm9mZnNldFRvcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWN0aXZlVGFiTnVtID0gdGFiTnVtO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlVGFiTnVtID1cbiAgICAgIHRoaXMud2luUmVmPy5uYXRpdmVXaW5kb3c/Lmhpc3Rvcnk/LnN0YXRlPy5hY3RpdmVUYWIgPz8gdGhpcy5hY3RpdmVUYWJOdW07XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgLy8gSWYgdGhlIHN1YiBjbXMgY29tcG9uZW50cyBkYXRhIGV4aXN0LCB0aGUgY29tcG9uZW50cyBjcmVhdGVkIGJlZm9yZSBuZ0FmdGVyVmlld0luaXQgYXJlIGNhbGxlZC5cbiAgICAvLyBJbiB0aGlzIGNhc2UsIHRoZSB0aXRsZSBwYXJhbWV0ZXJzIGFyZSBkaXJlY3RseSBwdWxsZWQgZnJvbSB0aGVtLlxuICAgIC8vIElmIHRoZSBzdWIgY21zIGNvbXBvbmVudHMgZGF0YSBkb2VzIG5vdCBleGlzdCwgaXQgc2hvdWxkIHNob3VsZCBiZSBsb2FkZWQgZmlyc3QuXG4gICAgLy8gSW4gdGhpcyBjYXNlLCBsaXN0ZW4gdG8gdGhlIGNoYW5nZXMgdG8gd2FpdCBmb3IgdGhlbSB0byBiZSBjcmVhdGVkLlxuICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZ2V0VGl0bGVQYXJhbXModGhpcy5jaGlsZHJlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5jaGlsZHJlbi5jaGFuZ2VzLnN1YnNjcmliZShcbiAgICAgICAgKHRhYkNvbXBzOiBRdWVyeUxpc3Q8Q29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZT4pID0+XG4gICAgICAgICAgdGhpcy5nZXRUaXRsZVBhcmFtcyh0YWJDb21wcylcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRUaXRsZVBhcmFtcyhjaGlsZHJlbjogUXVlcnlMaXN0PENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmU+KSB7XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY29tcCkgPT4ge1xuICAgICAgaWYgKGNvbXAuY21wUmVmICYmIGNvbXAuY21wUmVmLmluc3RhbmNlLnRhYlRpdGxlUGFyYW0kKSB7XG4gICAgICAgIHRoaXMudGFiVGl0bGVQYXJhbXMucHVzaChjb21wLmNtcFJlZi5pbnN0YW5jZS50YWJUaXRsZVBhcmFtJCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhYlRpdGxlUGFyYW1zLnB1c2gobnVsbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=