import { ChangeDetectionStrategy, Component, ViewChildren, } from '@angular/core';
import { CmsService, WindowRef, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, map, take, switchMap } from 'rxjs/operators';
import { ComponentWrapperDirective } from '../../../cms-structure/page/component/component-wrapper.directive';
import { CmsComponentData } from '../../../cms-structure/page/model/index';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
import { BREAKPOINT } from '../../../layout/config/layout-config';
export class TabParagraphContainerComponent {
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
}
TabParagraphContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-tab-paragraph-container',
                template: "<ng-container *ngFor=\"let component of components$ | async; let i = index\">\n  <ng-container *ngIf=\"component\">\n    <button [class.active]=\"i === activeTabNum\" (click)=\"select(i, $event)\">\n      {{ component.title | cxTranslate: { param: tabTitleParams[i] | async } }}\n    </button>\n    <div [class.active]=\"i === activeTabNum\">\n      <ng-template [cxOutlet]=\"component.flexType\" [cxOutletContext]=\"{}\">\n        <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n      </ng-template>\n    </div>\n  </ng-container>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
TabParagraphContainerComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: CmsService },
    { type: WindowRef },
    { type: BreakpointService }
];
TabParagraphContainerComponent.propDecorators = {
    children: [{ type: ViewChildren, args: [ComponentWrapperDirective,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvY29udGVudC90YWItcGFyYWdyYXBoLWNvbnRhaW5lci90YWItcGFyYWdyYXBoLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBSVQsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxVQUFVLEVBRVYsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDOUcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBT2xFLE1BQU0sT0FBTyw4QkFBOEI7SUEyQnpDLFlBQ1MsYUFBeUQsRUFDdEQsVUFBc0IsRUFDdEIsTUFBa0IsRUFDbEIsaUJBQXFDO1FBSHhDLGtCQUFhLEdBQWIsYUFBYSxDQUE0QztRQUN0RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFvQjtRQTdCakQsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFNakIsbUJBQWMsR0FBc0IsRUFBRSxDQUFDO1FB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akQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FDaEMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVPLGNBQWMsQ0FBQyxRQUE4QztRQUNuRSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRTtnQkFDdEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDL0Q7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7WUF6SEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLG9rQkFBdUQ7Z0JBQ3ZELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFSUSxnQkFBZ0I7WUFQdkIsVUFBVTtZQUVWLFNBQVM7WUFNRixpQkFBaUI7Ozt1QkFZdkIsWUFBWSxTQUFDLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZHJlbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNTZXJ2aWNlLFxuICBDTVNUYWJQYXJhZ3JhcGhDb250YWluZXIsXG4gIFdpbmRvd1JlZixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgdGFrZSwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9jb21wb25lbnQvY29tcG9uZW50LXdyYXBwZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgQnJlYWtwb2ludFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvYnJlYWtwb2ludC9icmVha3BvaW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQlJFQUtQT0lOVCB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXRhYi1wYXJhZ3JhcGgtY29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1wYXJhZ3JhcGgtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRhYlBhcmFncmFwaENvbnRhaW5lckNvbXBvbmVudFxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgYWN0aXZlVGFiTnVtID0gMDtcblxuICBAVmlld0NoaWxkcmVuKENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmUpIGNoaWxkcmVuITogUXVlcnlMaXN0PFxuICAgIENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmVcbiAgPjtcblxuICB0YWJUaXRsZVBhcmFtczogT2JzZXJ2YWJsZTxhbnk+W10gPSBbXTtcblxuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENNU1RhYlBhcmFncmFwaENvbnRhaW5lcj4sXG4gICAgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICB3aW5SZWY/OiBXaW5kb3dSZWYsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIGJyZWFrcG9pbnRTZXJ2aWNlPzogQnJlYWtwb2ludFNlcnZpY2VcbiAgKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDIuMVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDTVNUYWJQYXJhZ3JhcGhDb250YWluZXI+LFxuICAgIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgd2luUmVmPzogV2luZG93UmVmXG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENNU1RhYlBhcmFncmFwaENvbnRhaW5lcj4sXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHdpblJlZj86IFdpbmRvd1JlZixcbiAgICBwcm90ZWN0ZWQgYnJlYWtwb2ludFNlcnZpY2U/OiBCcmVha3BvaW50U2VydmljZVxuICApIHt9XG5cbiAgY29tcG9uZW50cyQ6IE9ic2VydmFibGU8YW55W10+ID0gdGhpcy5jb21wb25lbnREYXRhLmRhdGEkLnBpcGUoXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKHgsIHkpID0+IHg/LmNvbXBvbmVudHMgPT09IHk/LmNvbXBvbmVudHMpLFxuICAgIHN3aXRjaE1hcCgoZGF0YSkgPT5cbiAgICAgIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgIChkYXRhPy5jb21wb25lbnRzID8/ICcnKS5zcGxpdCgnICcpLm1hcCgoY29tcG9uZW50KSA9PlxuICAgICAgICAgIHRoaXMuY21zU2VydmljZS5nZXRDb21wb25lbnREYXRhPGFueT4oY29tcG9uZW50KS5waXBlKFxuICAgICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgICAgIG1hcCgodGFiKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghdGFiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghdGFiLmZsZXhUeXBlKSB7XG4gICAgICAgICAgICAgICAgdGFiID0ge1xuICAgICAgICAgICAgICAgICAgLi4udGFiLFxuICAgICAgICAgICAgICAgICAgZmxleFR5cGU6IHRhYi50eXBlQ29kZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi50YWIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IGAke2RhdGEudWlkfS50YWJzLiR7dGFiLnVpZH1gLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgc2VsZWN0KHRhYk51bTogbnVtYmVyLCBldmVudD86IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlXG4gICAgICA/LmlzRG93bihCUkVBS1BPSU5ULnNtKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVUYWJOdW0gPSB0aGlzLmFjdGl2ZVRhYk51bSA9PT0gdGFiTnVtID8gLTEgOiB0YWJOdW07XG4gICAgICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50Py50YXJnZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0YXJnZXQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMud2luUmVmPy5uYXRpdmVXaW5kb3c/LnNjcm9sbFRvKDAsIHBhcmVudE5vZGUub2Zmc2V0VG9wKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVUYWJOdW0gPSB0YWJOdW07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVUYWJOdW0gPVxuICAgICAgdGhpcy53aW5SZWY/Lm5hdGl2ZVdpbmRvdz8uaGlzdG9yeT8uc3RhdGU/LmFjdGl2ZVRhYiA/PyB0aGlzLmFjdGl2ZVRhYk51bTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvLyBJZiB0aGUgc3ViIGNtcyBjb21wb25lbnRzIGRhdGEgZXhpc3QsIHRoZSBjb21wb25lbnRzIGNyZWF0ZWQgYmVmb3JlIG5nQWZ0ZXJWaWV3SW5pdCBhcmUgY2FsbGVkLlxuICAgIC8vIEluIHRoaXMgY2FzZSwgdGhlIHRpdGxlIHBhcmFtZXRlcnMgYXJlIGRpcmVjdGx5IHB1bGxlZCBmcm9tIHRoZW0uXG4gICAgLy8gSWYgdGhlIHN1YiBjbXMgY29tcG9uZW50cyBkYXRhIGRvZXMgbm90IGV4aXN0LCBpdCBzaG91bGQgc2hvdWxkIGJlIGxvYWRlZCBmaXJzdC5cbiAgICAvLyBJbiB0aGlzIGNhc2UsIGxpc3RlbiB0byB0aGUgY2hhbmdlcyB0byB3YWl0IGZvciB0aGVtIHRvIGJlIGNyZWF0ZWQuXG4gICAgaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5nZXRUaXRsZVBhcmFtcyh0aGlzLmNoaWxkcmVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmNoaWxkcmVuLmNoYW5nZXMuc3Vic2NyaWJlKFxuICAgICAgICAodGFiQ29tcHM6IFF1ZXJ5TGlzdDxDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlPikgPT5cbiAgICAgICAgICB0aGlzLmdldFRpdGxlUGFyYW1zKHRhYkNvbXBzKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFRpdGxlUGFyYW1zKGNoaWxkcmVuOiBRdWVyeUxpc3Q8Q29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZT4pIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjb21wKSA9PiB7XG4gICAgICBpZiAoY29tcC5jbXBSZWYgJiYgY29tcC5jbXBSZWYuaW5zdGFuY2UudGFiVGl0bGVQYXJhbSQpIHtcbiAgICAgICAgdGhpcy50YWJUaXRsZVBhcmFtcy5wdXNoKGNvbXAuY21wUmVmLmluc3RhbmNlLnRhYlRpdGxlUGFyYW0kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFiVGl0bGVQYXJhbXMucHVzaChudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==