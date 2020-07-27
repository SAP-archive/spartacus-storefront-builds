import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ViewChildren, } from '@angular/core';
import { CmsService, CMSTabParagraphContainer, WindowRef, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, map, take, switchMap } from 'rxjs/operators';
import { ComponentWrapperDirective } from '../../../cms-structure/page/component/component-wrapper.directive';
import { CmsComponentData } from '../../../cms-structure/page/model/index';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
import { BREAKPOINT } from '../../../layout/config/layout-config';
let TabParagraphContainerComponent = class TabParagraphContainerComponent {
    constructor(componentData, cmsService, winRef, breakpointService) {
        this.componentData = componentData;
        this.cmsService = cmsService;
        this.winRef = winRef;
        this.breakpointService = breakpointService;
        this.activeTabNum = 0;
        this.tabTitleParams = [];
        this.components$ = this.componentData.data$.pipe(distinctUntilChanged((x, y) => (x === null || x === void 0 ? void 0 : x.components) === (y === null || y === void 0 ? void 0 : y.components)), switchMap((data) => {
            var _a;
            return combineLatest(((_a = data === null || data === void 0 ? void 0 : data.components) !== null && _a !== void 0 ? _a : '').split(' ').map((component) => this.cmsService.getComponentData(component).pipe(distinctUntilChanged(), map((tab) => {
                if (!tab) {
                    return undefined;
                }
                if (!tab.flexType) {
                    tab = Object.assign(Object.assign({}, tab), { flexType: tab.typeCode });
                }
                return Object.assign(Object.assign({}, tab), { title: `${data.uid}.tabs.${tab.uid}` });
            }))));
        }));
    }
    select(tabNum, event) {
        var _a;
        (_a = this.breakpointService) === null || _a === void 0 ? void 0 : _a.isDown(BREAKPOINT.sm).pipe(take(1)).subscribe((res) => {
            var _a, _b;
            if (res) {
                this.activeTabNum = this.activeTabNum === tabNum ? -1 : tabNum;
                if (event && (event === null || event === void 0 ? void 0 : event.target)) {
                    const target = event.target;
                    const parentNode = target.parentNode;
                    (_b = (_a = this.winRef) === null || _a === void 0 ? void 0 : _a.nativeWindow) === null || _b === void 0 ? void 0 : _b.scrollTo(0, parentNode.offsetTop);
                }
            }
            else {
                this.activeTabNum = tabNum;
            }
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e;
        this.activeTabNum = (_e = (_d = (_c = (_b = (_a = this.winRef) === null || _a === void 0 ? void 0 : _a.nativeWindow) === null || _b === void 0 ? void 0 : _b.history) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.activeTab) !== null && _e !== void 0 ? _e : this.activeTabNum;
    }
    ngAfterViewInit() {
        // If the sub cms components data exist, the components created before ngAfterViewInit are called.
        // In this case, the title parameters are directly pulled from them.
        // If the sub cms components data does not exist, it should should be loaded first.
        // In this case, listen to the changes to wait for them to be created.
        if (this.children.length > 0) {
            this.getTitleParams(this.children);
        }
        else {
            this.subscription = this.children.changes.subscribe((tabComps) => this.getTitleParams(tabComps));
        }
    }
    getTitleParams(children) {
        children.forEach((comp) => {
            if (comp.cmpRef && comp.cmpRef.instance.tabTitleParam$) {
                this.tabTitleParams.push(comp.cmpRef.instance.tabTitleParam$);
            }
            else {
                this.tabTitleParams.push(null);
            }
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
TabParagraphContainerComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: CmsService },
    { type: WindowRef },
    { type: BreakpointService }
];
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
export { TabParagraphContainerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY29udGVudC90YWItcGFyYWdyYXBoLWNvbnRhaW5lci90YWItcGFyYWdyYXBoLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUlULFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsVUFBVSxFQUNWLHdCQUF3QixFQUN4QixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFPbEUsSUFBYSw4QkFBOEIsR0FBM0MsTUFBYSw4QkFBOEI7SUEyQnpDLFlBQ1MsYUFBeUQsRUFDdEQsVUFBc0IsRUFDdEIsTUFBa0IsRUFDbEIsaUJBQXFDO1FBSHhDLGtCQUFhLEdBQWIsYUFBYSxDQUE0QztRQUN0RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFvQjtRQTdCakQsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFNakIsbUJBQWMsR0FBc0IsRUFB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LEVBQUUsQ0FDakQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FDaEMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVPLGNBQWMsQ0FBQyxRQUE4QztRQUNuRSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRTtnQkFDdEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDL0Q7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUF6RnlCLGdCQUFnQjtZQUNoQixVQUFVO1lBQ2IsU0FBUztZQUNFLGlCQUFpQjs7QUEzQlI7SUFBeEMsWUFBWSxDQUFDLHlCQUF5QixDQUFDO2dFQUV0QztBQU5TLDhCQUE4QjtJQUwxQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsNEJBQTRCO1FBQ3RDLG9rQkFBdUQ7UUFDdkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLDhCQUE4QixDQXFIMUM7U0FySFksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkcmVuLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc1NlcnZpY2UsXG4gIENNU1RhYlBhcmFncmFwaENvbnRhaW5lcixcbiAgV2luZG93UmVmLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCB0YWtlLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtd3JhcHBlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBCcmVha3BvaW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9icmVha3BvaW50L2JyZWFrcG9pbnQuc2VydmljZSc7XG5pbXBvcnQgeyBCUkVBS1BPSU5UIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2NvbmZpZy9sYXlvdXQtY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtdGFiLXBhcmFncmFwaC1jb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGFiUGFyYWdyYXBoQ29udGFpbmVyQ29tcG9uZW50XG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBhY3RpdmVUYWJOdW0gPSAwO1xuXG4gIEBWaWV3Q2hpbGRyZW4oQ29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZSkgY2hpbGRyZW4hOiBRdWVyeUxpc3Q8XG4gICAgQ29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZVxuICA+O1xuXG4gIHRhYlRpdGxlUGFyYW1zOiBPYnNlcnZhYmxlPGFueT5bXSA9IFtdO1xuXG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q01TVGFiUGFyYWdyYXBoQ29udGFpbmVyPixcbiAgICBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHdpblJlZj86IFdpbmRvd1JlZixcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dW5pZmllZC1zaWduYXR1cmVzXG4gICAgYnJlYWtwb2ludFNlcnZpY2U/OiBCcmVha3BvaW50U2VydmljZVxuICApO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgMi4xXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENNU1RhYlBhcmFncmFwaENvbnRhaW5lcj4sXG4gICAgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICB3aW5SZWY/OiBXaW5kb3dSZWZcbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q01TVGFiUGFyYWdyYXBoQ29udGFpbmVyPixcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgd2luUmVmPzogV2luZG93UmVmLFxuICAgIHByb3RlY3RlZCBicmVha3BvaW50U2VydmljZT86IEJyZWFrcG9pbnRTZXJ2aWNlXG4gICkge31cblxuICBjb21wb25lbnRzJDogT2JzZXJ2YWJsZTxhbnlbXT4gPSB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSQucGlwZShcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgoeCwgeSkgPT4geD8uY29tcG9uZW50cyA9PT0geT8uY29tcG9uZW50cyksXG4gICAgc3dpdGNoTWFwKChkYXRhKSA9PlxuICAgICAgY29tYmluZUxhdGVzdChcbiAgICAgICAgKGRhdGE/LmNvbXBvbmVudHMgPz8gJycpLnNwbGl0KCcgJykubWFwKChjb21wb25lbnQpID0+XG4gICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmdldENvbXBvbmVudERhdGE8YW55Pihjb21wb25lbnQpLnBpcGUoXG4gICAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgICAgbWFwKCh0YWIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF0YWIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCF0YWIuZmxleFR5cGUpIHtcbiAgICAgICAgICAgICAgICB0YWIgPSB7XG4gICAgICAgICAgICAgICAgICAuLi50YWIsXG4gICAgICAgICAgICAgICAgICBmbGV4VHlwZTogdGFiLnR5cGVDb2RlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnRhYixcbiAgICAgICAgICAgICAgICB0aXRsZTogYCR7ZGF0YS51aWR9LnRhYnMuJHt0YWIudWlkfWAsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBzZWxlY3QodGFiTnVtOiBudW1iZXIsIGV2ZW50PzogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuYnJlYWtwb2ludFNlcnZpY2VcbiAgICAgID8uaXNEb3duKEJSRUFLUE9JTlQuc20pXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVRhYk51bSA9IHRoaXMuYWN0aXZlVGFiTnVtID09PSB0YWJOdW0gPyAtMSA6IHRhYk51bTtcbiAgICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnQ/LnRhcmdldCkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IHRhcmdldC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgdGhpcy53aW5SZWY/Lm5hdGl2ZVdpbmRvdz8uc2Nyb2xsVG8oMCwgcGFyZW50Tm9kZS5vZmZzZXRUb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVRhYk51bSA9IHRhYk51bTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZVRhYk51bSA9XG4gICAgICB0aGlzLndpblJlZj8ubmF0aXZlV2luZG93Py5oaXN0b3J5Py5zdGF0ZT8uYWN0aXZlVGFiID8/IHRoaXMuYWN0aXZlVGFiTnVtO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIElmIHRoZSBzdWIgY21zIGNvbXBvbmVudHMgZGF0YSBleGlzdCwgdGhlIGNvbXBvbmVudHMgY3JlYXRlZCBiZWZvcmUgbmdBZnRlclZpZXdJbml0IGFyZSBjYWxsZWQuXG4gICAgLy8gSW4gdGhpcyBjYXNlLCB0aGUgdGl0bGUgcGFyYW1ldGVycyBhcmUgZGlyZWN0bHkgcHVsbGVkIGZyb20gdGhlbS5cbiAgICAvLyBJZiB0aGUgc3ViIGNtcyBjb21wb25lbnRzIGRhdGEgZG9lcyBub3QgZXhpc3QsIGl0IHNob3VsZCBzaG91bGQgYmUgbG9hZGVkIGZpcnN0LlxuICAgIC8vIEluIHRoaXMgY2FzZSwgbGlzdGVuIHRvIHRoZSBjaGFuZ2VzIHRvIHdhaXQgZm9yIHRoZW0gdG8gYmUgY3JlYXRlZC5cbiAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmdldFRpdGxlUGFyYW1zKHRoaXMuY2hpbGRyZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuY2hpbGRyZW4uY2hhbmdlcy5zdWJzY3JpYmUoXG4gICAgICAgICh0YWJDb21wczogUXVlcnlMaXN0PENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmU+KSA9PlxuICAgICAgICAgIHRoaXMuZ2V0VGl0bGVQYXJhbXModGFiQ29tcHMpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGl0bGVQYXJhbXMoY2hpbGRyZW46IFF1ZXJ5TGlzdDxDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlPikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goKGNvbXApID0+IHtcbiAgICAgIGlmIChjb21wLmNtcFJlZiAmJiBjb21wLmNtcFJlZi5pbnN0YW5jZS50YWJUaXRsZVBhcmFtJCkge1xuICAgICAgICB0aGlzLnRhYlRpdGxlUGFyYW1zLnB1c2goY29tcC5jbXBSZWYuaW5zdGFuY2UudGFiVGl0bGVQYXJhbSQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YWJUaXRsZVBhcmFtcy5wdXNoKG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19