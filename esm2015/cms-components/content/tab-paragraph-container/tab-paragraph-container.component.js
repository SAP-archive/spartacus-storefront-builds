import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ViewChildren, } from '@angular/core';
import { CmsService, CMSTabParagraphContainer, WindowRef, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
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
        this.tabSubscription = this.breakpointService
            .isDown(BREAKPOINT.sm)
            .subscribe((res) => {
            if (res) {
                this.activeTabNum = this.activeTabNum === tabNum ? -1 : tabNum;
                window.scrollTo(0, event.path[1].offsetTop);
            }
            else {
                this.activeTabNum = tabNum;
            }
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        this.activeTabNum = (_d = (_c = (_b = (_a = this.winRef.nativeWindow) === null || _a === void 0 ? void 0 : _a.history) === null || _b === void 0 ? void 0 : _b.state) === null || _c === void 0 ? void 0 : _c.activeTab) !== null && _d !== void 0 ? _d : this.activeTabNum;
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
        if (this.tabSubscription) {
            this.tabSubscription.unsubscribe();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY29udGVudC90YWItcGFyYWdyYXBoLWNvbnRhaW5lci90YWItcGFyYWdyYXBoLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUlULFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsVUFBVSxFQUNWLHdCQUF3QixFQUN4QixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQU9sRSxJQUFhLDhCQUE4QixHQUEzQyxNQUFhLDhCQUE4QjtJQWF6QyxZQUNTLGFBQXlELEVBQ3RELFVBQXNCLEVBQ3RCLE1BQWlCLEVBQ2pCLGlCQUFvQztRQUh2QyxrQkFBYSxHQUFiLGFBQWEsQ0FBNEM7UUFDdEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFmaEQsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFNakIsbUJBQWMsR0FBc0IsRUFBRSxDQUFDO1FBWXZD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LFFBQVEsQ0FBQyxjQUFjLEVBQUU7Z0JBQ3RELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQy9EO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUF2RnlCLGdCQUFnQjtZQUNoQixVQUFVO1lBQ2QsU0FBUztZQUNFLGlCQUFpQjs7QUFiUDtJQUF4QyxZQUFZLENBQUMseUJBQXlCLENBQUM7Z0VBRXRDO0FBTlMsOEJBQThCO0lBTDFDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSw0QkFBNEI7UUFDdEMsb2tCQUF1RDtRQUN2RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1csOEJBQThCLENBcUcxQztTQXJHWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGRyZW4sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zU2VydmljZSxcbiAgQ01TVGFiUGFyYWdyYXBoQ29udGFpbmVyLFxuICBXaW5kb3dSZWYsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L2NvbXBvbmVudC13cmFwcGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2luZGV4JztcbmltcG9ydCB7IEJyZWFrcG9pbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlJztcbmltcG9ydCB7IEJSRUFLUE9JTlQgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvY29uZmlnL2xheW91dC1jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC10YWItcGFyYWdyYXBoLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWItcGFyYWdyYXBoLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJQYXJhZ3JhcGhDb250YWluZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGFjdGl2ZVRhYk51bSA9IDA7XG5cbiAgQFZpZXdDaGlsZHJlbihDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlKSBjaGlsZHJlbiE6IFF1ZXJ5TGlzdDxcbiAgICBDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlXG4gID47XG5cbiAgdGFiVGl0bGVQYXJhbXM6IE9ic2VydmFibGU8YW55PltdID0gW107XG5cbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHRhYlN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENNU1RhYlBhcmFncmFwaENvbnRhaW5lcj4sXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByb3RlY3RlZCBicmVha3BvaW50U2VydmljZTogQnJlYWtwb2ludFNlcnZpY2VcbiAgKSB7fVxuXG4gIGNvbXBvbmVudHMkOiBPYnNlcnZhYmxlPGFueVtdPiA9IHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJC5waXBlKFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCh4LCB5KSA9PiB4Py5jb21wb25lbnRzID09PSB5Py5jb21wb25lbnRzKSxcbiAgICBzd2l0Y2hNYXAoKGRhdGEpID0+XG4gICAgICBjb21iaW5lTGF0ZXN0KFxuICAgICAgICAoZGF0YT8uY29tcG9uZW50cyA/PyAnJykuc3BsaXQoJyAnKS5tYXAoKGNvbXBvbmVudCkgPT5cbiAgICAgICAgICB0aGlzLmNtc1NlcnZpY2UuZ2V0Q29tcG9uZW50RGF0YTxhbnk+KGNvbXBvbmVudCkucGlwZShcbiAgICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgICBtYXAoKHRhYikgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXRhYikge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIXRhYi5mbGV4VHlwZSkge1xuICAgICAgICAgICAgICAgIHRhYiA9IHtcbiAgICAgICAgICAgICAgICAgIC4uLnRhYixcbiAgICAgICAgICAgICAgICAgIGZsZXhUeXBlOiB0YWIudHlwZUNvZGUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4udGFiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBgJHtkYXRhLnVpZH0udGFicy4ke3RhYi51aWR9YCxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIHNlbGVjdCh0YWJOdW06IG51bWJlciwgZXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLnRhYlN1YnNjcmlwdGlvbiA9IHRoaXMuYnJlYWtwb2ludFNlcnZpY2VcbiAgICAgIC5pc0Rvd24oQlJFQUtQT0lOVC5zbSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVUYWJOdW0gPSB0aGlzLmFjdGl2ZVRhYk51bSA9PT0gdGFiTnVtID8gLTEgOiB0YWJOdW07XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGV2ZW50LnBhdGhbMV0ub2Zmc2V0VG9wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVRhYk51bSA9IHRhYk51bTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZVRhYk51bSA9XG4gICAgICB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3c/Lmhpc3Rvcnk/LnN0YXRlPy5hY3RpdmVUYWIgPz8gdGhpcy5hY3RpdmVUYWJOdW07XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgLy8gSWYgdGhlIHN1YiBjbXMgY29tcG9uZW50cyBkYXRhIGV4aXN0LCB0aGUgY29tcG9uZW50cyBjcmVhdGVkIGJlZm9yZSBuZ0FmdGVyVmlld0luaXQgYXJlIGNhbGxlZC5cbiAgICAvLyBJbiB0aGlzIGNhc2UsIHRoZSB0aXRsZSBwYXJhbWV0ZXJzIGFyZSBkaXJlY3RseSBwdWxsZWQgZnJvbSB0aGVtLlxuICAgIC8vIElmIHRoZSBzdWIgY21zIGNvbXBvbmVudHMgZGF0YSBkb2VzIG5vdCBleGlzdCwgaXQgc2hvdWxkIHNob3VsZCBiZSBsb2FkZWQgZmlyc3QuXG4gICAgLy8gSW4gdGhpcyBjYXNlLCBsaXN0ZW4gdG8gdGhlIGNoYW5nZXMgdG8gd2FpdCBmb3IgdGhlbSB0byBiZSBjcmVhdGVkLlxuICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZ2V0VGl0bGVQYXJhbXModGhpcy5jaGlsZHJlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5jaGlsZHJlbi5jaGFuZ2VzLnN1YnNjcmliZShcbiAgICAgICAgKHRhYkNvbXBzOiBRdWVyeUxpc3Q8Q29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZT4pID0+XG4gICAgICAgICAgdGhpcy5nZXRUaXRsZVBhcmFtcyh0YWJDb21wcylcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRUaXRsZVBhcmFtcyhjaGlsZHJlbjogUXVlcnlMaXN0PENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmU+KSB7XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY29tcCkgPT4ge1xuICAgICAgaWYgKGNvbXAuY21wUmVmICYmIGNvbXAuY21wUmVmLmluc3RhbmNlLnRhYlRpdGxlUGFyYW0kKSB7XG4gICAgICAgIHRoaXMudGFiVGl0bGVQYXJhbXMucHVzaChjb21wLmNtcFJlZi5pbnN0YW5jZS50YWJUaXRsZVBhcmFtJCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhYlRpdGxlUGFyYW1zLnB1c2gobnVsbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnRhYlN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy50YWJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==