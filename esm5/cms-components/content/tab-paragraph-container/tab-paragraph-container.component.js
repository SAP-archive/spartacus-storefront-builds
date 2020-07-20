import { __assign, __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ViewChildren, } from '@angular/core';
import { CmsService, CMSTabParagraphContainer, WindowRef, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
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
        this.tabSubscription = this.breakpointService
            .isDown(BREAKPOINT.sm)
            .subscribe(function (res) {
            if (res) {
                _this.activeTabNum = _this.activeTabNum === tabNum ? -1 : tabNum;
                window.scrollTo(0, event.path[1].offsetTop);
            }
            else {
                _this.activeTabNum = tabNum;
            }
        });
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
        if (this.tabSubscription) {
            this.tabSubscription.unsubscribe();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY29udGVudC90YWItcGFyYWdyYXBoLWNvbnRhaW5lci90YWItcGFyYWdyYXBoLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUlULFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsVUFBVSxFQUNWLHdCQUF3QixFQUN4QixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQU9sRTtJQWFFLHdDQUNTLGFBQXlELEVBQ3RELFVBQXNCLEVBQ3RCLE1BQWlCLEVBQ2pCLGlCQUFvQztRQUpoRCxpQkFLSTtRQUpLLGtCQUFhLEdBQWIsYUFBYSxDQUE0QztRQUN0RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQWZoRCxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQU1qQixtQkFBYyxHQUFzQixFQUFFLENBQUM7UUFZdkMsZ0JBQVcsR0FBc0IsSUFBSSxD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QUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7Z0JBQ3RELEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQy9EO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0RBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEM7SUFDSCxDQUFDOztnQkF0RnVCLGdCQUFnQjtnQkFDaEIsVUFBVTtnQkFDZCxTQUFTO2dCQUNFLGlCQUFpQjs7SUFiUDtRQUF4QyxZQUFZLENBQUMseUJBQXlCLENBQUM7b0VBRXRDO0lBTlMsOEJBQThCO1FBTDFDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMsb2tCQUF1RDtZQUN2RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csOEJBQThCLENBcUcxQztJQUFELHFDQUFDO0NBQUEsQUFyR0QsSUFxR0M7U0FyR1ksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkcmVuLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc1NlcnZpY2UsXG4gIENNU1RhYlBhcmFncmFwaENvbnRhaW5lcixcbiAgV2luZG93UmVmLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtd3JhcHBlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBCcmVha3BvaW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9icmVha3BvaW50L2JyZWFrcG9pbnQuc2VydmljZSc7XG5pbXBvcnQgeyBCUkVBS1BPSU5UIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2NvbmZpZy9sYXlvdXQtY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtdGFiLXBhcmFncmFwaC1jb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGFiUGFyYWdyYXBoQ29udGFpbmVyQ29tcG9uZW50XG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBhY3RpdmVUYWJOdW0gPSAwO1xuXG4gIEBWaWV3Q2hpbGRyZW4oQ29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZSkgY2hpbGRyZW4hOiBRdWVyeUxpc3Q8XG4gICAgQ29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZVxuICA+O1xuXG4gIHRhYlRpdGxlUGFyYW1zOiBPYnNlcnZhYmxlPGFueT5bXSA9IFtdO1xuXG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICB0YWJTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDTVNUYWJQYXJhZ3JhcGhDb250YWluZXI+LFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBwcm90ZWN0ZWQgYnJlYWtwb2ludFNlcnZpY2U6IEJyZWFrcG9pbnRTZXJ2aWNlXG4gICkge31cblxuICBjb21wb25lbnRzJDogT2JzZXJ2YWJsZTxhbnlbXT4gPSB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSQucGlwZShcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgoeCwgeSkgPT4geD8uY29tcG9uZW50cyA9PT0geT8uY29tcG9uZW50cyksXG4gICAgc3dpdGNoTWFwKChkYXRhKSA9PlxuICAgICAgY29tYmluZUxhdGVzdChcbiAgICAgICAgKGRhdGE/LmNvbXBvbmVudHMgPz8gJycpLnNwbGl0KCcgJykubWFwKChjb21wb25lbnQpID0+XG4gICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmdldENvbXBvbmVudERhdGE8YW55Pihjb21wb25lbnQpLnBpcGUoXG4gICAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgICAgbWFwKCh0YWIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF0YWIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCF0YWIuZmxleFR5cGUpIHtcbiAgICAgICAgICAgICAgICB0YWIgPSB7XG4gICAgICAgICAgICAgICAgICAuLi50YWIsXG4gICAgICAgICAgICAgICAgICBmbGV4VHlwZTogdGFiLnR5cGVDb2RlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnRhYixcbiAgICAgICAgICAgICAgICB0aXRsZTogYCR7ZGF0YS51aWR9LnRhYnMuJHt0YWIudWlkfWAsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBzZWxlY3QodGFiTnVtOiBudW1iZXIsIGV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy50YWJTdWJzY3JpcHRpb24gPSB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlXG4gICAgICAuaXNEb3duKEJSRUFLUE9JTlQuc20pXG4gICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgIHRoaXMuYWN0aXZlVGFiTnVtID0gdGhpcy5hY3RpdmVUYWJOdW0gPT09IHRhYk51bSA/IC0xIDogdGFiTnVtO1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBldmVudC5wYXRoWzFdLm9mZnNldFRvcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVUYWJOdW0gPSB0YWJOdW07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVUYWJOdW0gPVxuICAgICAgdGhpcy53aW5SZWYubmF0aXZlV2luZG93Py5oaXN0b3J5Py5zdGF0ZT8uYWN0aXZlVGFiID8/IHRoaXMuYWN0aXZlVGFiTnVtO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIElmIHRoZSBzdWIgY21zIGNvbXBvbmVudHMgZGF0YSBleGlzdCwgdGhlIGNvbXBvbmVudHMgY3JlYXRlZCBiZWZvcmUgbmdBZnRlclZpZXdJbml0IGFyZSBjYWxsZWQuXG4gICAgLy8gSW4gdGhpcyBjYXNlLCB0aGUgdGl0bGUgcGFyYW1ldGVycyBhcmUgZGlyZWN0bHkgcHVsbGVkIGZyb20gdGhlbS5cbiAgICAvLyBJZiB0aGUgc3ViIGNtcyBjb21wb25lbnRzIGRhdGEgZG9lcyBub3QgZXhpc3QsIGl0IHNob3VsZCBzaG91bGQgYmUgbG9hZGVkIGZpcnN0LlxuICAgIC8vIEluIHRoaXMgY2FzZSwgbGlzdGVuIHRvIHRoZSBjaGFuZ2VzIHRvIHdhaXQgZm9yIHRoZW0gdG8gYmUgY3JlYXRlZC5cbiAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmdldFRpdGxlUGFyYW1zKHRoaXMuY2hpbGRyZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuY2hpbGRyZW4uY2hhbmdlcy5zdWJzY3JpYmUoXG4gICAgICAgICh0YWJDb21wczogUXVlcnlMaXN0PENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmU+KSA9PlxuICAgICAgICAgIHRoaXMuZ2V0VGl0bGVQYXJhbXModGFiQ29tcHMpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGl0bGVQYXJhbXMoY2hpbGRyZW46IFF1ZXJ5TGlzdDxDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlPikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goKGNvbXApID0+IHtcbiAgICAgIGlmIChjb21wLmNtcFJlZiAmJiBjb21wLmNtcFJlZi5pbnN0YW5jZS50YWJUaXRsZVBhcmFtJCkge1xuICAgICAgICB0aGlzLnRhYlRpdGxlUGFyYW1zLnB1c2goY29tcC5jbXBSZWYuaW5zdGFuY2UudGFiVGl0bGVQYXJhbSQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YWJUaXRsZVBhcmFtcy5wdXNoKG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy50YWJTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMudGFiU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=