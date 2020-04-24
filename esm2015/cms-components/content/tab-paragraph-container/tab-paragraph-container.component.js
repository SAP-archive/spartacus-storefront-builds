import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ViewChildren, } from '@angular/core';
import { CmsService, CMSTabParagraphContainer, WindowRef, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, distinctUntilKeyChanged, map, switchMap, } from 'rxjs/operators';
import { ComponentWrapperDirective } from '../../../cms-structure/page/component/component-wrapper.directive';
import { CmsComponentData } from '../../../cms-structure/page/model/index';
let TabParagraphContainerComponent = class TabParagraphContainerComponent {
    constructor(componentData, cmsService, winRef) {
        this.componentData = componentData;
        this.cmsService = cmsService;
        this.winRef = winRef;
        this.activeTabNum = 0;
        this.tabTitleParams = [];
        this.components$ = this.componentData.data$.pipe(distinctUntilKeyChanged('components'), switchMap((data) => combineLatest(data.components.split(' ').map((component) => this.cmsService.getComponentData(component).pipe(distinctUntilChanged(), map((tab) => {
            if (!tab.flexType) {
                tab = Object.assign(Object.assign({}, tab), { flexType: tab.typeCode });
            }
            return Object.assign(Object.assign({}, tab), { title: `${data.uid}.tabs.${tab.uid}` });
        }))))));
    }
    select(tabNum) {
        this.activeTabNum = tabNum;
    }
    ngOnInit() {
        var _a, _b, _c;
        this.activeTabNum = (_c = (_b = (_a = this.winRef.nativeWindow.history) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.activeTab) !== null && _c !== void 0 ? _c : this.activeTabNum;
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
    { type: WindowRef }
];
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
export { TabParagraphContainerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY29udGVudC90YWItcGFyYWdyYXBoLWNvbnRhaW5lci90YWItcGFyYWdyYXBoLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUlULFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsVUFBVSxFQUNWLHdCQUF3QixFQUN4QixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLHVCQUF1QixFQUN2QixHQUFHLEVBQ0gsU0FBUyxHQUNWLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDOUcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFPM0UsSUFBYSw4QkFBOEIsR0FBM0MsTUFBYSw4QkFBOEI7SUFZekMsWUFDUyxhQUF5RCxFQUN0RCxVQUFzQixFQUN0QixNQUFpQjtRQUZwQixrQkFBYSxHQUFiLGFBQWEsQ0FBNEM7UUFDdEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBYjdCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBTWpCLG1CQUFjLEdBQXNCLEVBQUUsQ0FBQztRQVV2QyxnQkFBVyxHQUFzQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQzVELHVCQUF1QixDQUFDLFlBQVksQ0FBQyxFQUNyQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUNqQixhQUFhLENBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBTSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQ25ELG9CQUFvQixFQUFFLEVBQ3RCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLEdBQUcsbUNBQ0UsR0FBRyxLQUNOLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUSxHQUN2QixDQUFDO2FBQ0g7WUFFRCx1Q0FDSyxHQUFHLEtBQ04sS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQ3BDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FDRixDQUNGLENBQ0YsQ0FDRixDQUFDO0lBMUJDLENBQUM7SUE0QkosTUFBTSxDQUFDLE1BQWM7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUVELFFBQVE7O1FBQ04sSUFBSSxDQUFDLFlBQVkscUJBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTywwQ0FBRSxLQUFLLDBDQUFFLFNBQVMsbUNBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM1RSxDQUFDO0lBRUQsZUFBZTtRQUNiLGtHQUFrRztRQUNsRyxvRUFBb0U7UUFDcEUsbUZBQW1GO1FBQ25GLHNFQUFzRTtRQUN0RSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQ2pELENBQUMsUUFBOEMsRUFBRSxFQUFFLENBQ2pELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQ2hDLENBQUM7U0FDSDtJQUNILENBQUM7SUFFTyxjQUFjLENBQUMsUUFBOEM7UUFDbkUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7Z0JBQ3RELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQy9EO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBdEV5QixnQkFBZ0I7WUFDaEIsVUFBVTtZQUNkLFNBQVM7O0FBWFk7SUFBeEMsWUFBWSxDQUFDLHlCQUF5QixDQUFDO2dFQUV0QztBQU5TLDhCQUE4QjtJQUwxQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsNEJBQTRCO1FBQ3RDLG1mQUF1RDtRQUN2RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1csOEJBQThCLENBbUYxQztTQW5GWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGRyZW4sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zU2VydmljZSxcbiAgQ01TVGFiUGFyYWdyYXBoQ29udGFpbmVyLFxuICBXaW5kb3dSZWYsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBkaXN0aW5jdFVudGlsS2V5Q2hhbmdlZCxcbiAgbWFwLFxuICBzd2l0Y2hNYXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L2NvbXBvbmVudC13cmFwcGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtdGFiLXBhcmFncmFwaC1jb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGFiUGFyYWdyYXBoQ29udGFpbmVyQ29tcG9uZW50XG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBhY3RpdmVUYWJOdW0gPSAwO1xuXG4gIEBWaWV3Q2hpbGRyZW4oQ29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZSkgY2hpbGRyZW4hOiBRdWVyeUxpc3Q8XG4gICAgQ29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZVxuICA+O1xuXG4gIHRhYlRpdGxlUGFyYW1zOiBPYnNlcnZhYmxlPGFueT5bXSA9IFtdO1xuXG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENNU1RhYlBhcmFncmFwaENvbnRhaW5lcj4sXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmXG4gICkge31cblxuICBjb21wb25lbnRzJDogT2JzZXJ2YWJsZTxhbnlbXT4gPSB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSQucGlwZShcbiAgICBkaXN0aW5jdFVudGlsS2V5Q2hhbmdlZCgnY29tcG9uZW50cycpLFxuICAgIHN3aXRjaE1hcCgoZGF0YSkgPT5cbiAgICAgIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgIGRhdGEuY29tcG9uZW50cy5zcGxpdCgnICcpLm1hcCgoY29tcG9uZW50KSA9PlxuICAgICAgICAgIHRoaXMuY21zU2VydmljZS5nZXRDb21wb25lbnREYXRhPGFueT4oY29tcG9uZW50KS5waXBlKFxuICAgICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgICAgIG1hcCgodGFiKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghdGFiLmZsZXhUeXBlKSB7XG4gICAgICAgICAgICAgICAgdGFiID0ge1xuICAgICAgICAgICAgICAgICAgLi4udGFiLFxuICAgICAgICAgICAgICAgICAgZmxleFR5cGU6IHRhYi50eXBlQ29kZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi50YWIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IGAke2RhdGEudWlkfS50YWJzLiR7dGFiLnVpZH1gLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgc2VsZWN0KHRhYk51bTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVUYWJOdW0gPSB0YWJOdW07XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZVRhYk51bSA9XG4gICAgICB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cuaGlzdG9yeT8uc3RhdGU/LmFjdGl2ZVRhYiA/PyB0aGlzLmFjdGl2ZVRhYk51bTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvLyBJZiB0aGUgc3ViIGNtcyBjb21wb25lbnRzIGRhdGEgZXhpc3QsIHRoZSBjb21wb25lbnRzIGNyZWF0ZWQgYmVmb3JlIG5nQWZ0ZXJWaWV3SW5pdCBhcmUgY2FsbGVkLlxuICAgIC8vIEluIHRoaXMgY2FzZSwgdGhlIHRpdGxlIHBhcmFtZXRlcnMgYXJlIGRpcmVjdGx5IHB1bGxlZCBmcm9tIHRoZW0uXG4gICAgLy8gSWYgdGhlIHN1YiBjbXMgY29tcG9uZW50cyBkYXRhIGRvZXMgbm90IGV4aXN0LCBpdCBzaG91bGQgc2hvdWxkIGJlIGxvYWRlZCBmaXJzdC5cbiAgICAvLyBJbiB0aGlzIGNhc2UsIGxpc3RlbiB0byB0aGUgY2hhbmdlcyB0byB3YWl0IGZvciB0aGVtIHRvIGJlIGNyZWF0ZWQuXG4gICAgaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5nZXRUaXRsZVBhcmFtcyh0aGlzLmNoaWxkcmVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmNoaWxkcmVuLmNoYW5nZXMuc3Vic2NyaWJlKFxuICAgICAgICAodGFiQ29tcHM6IFF1ZXJ5TGlzdDxDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlPikgPT5cbiAgICAgICAgICB0aGlzLmdldFRpdGxlUGFyYW1zKHRhYkNvbXBzKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFRpdGxlUGFyYW1zKGNoaWxkcmVuOiBRdWVyeUxpc3Q8Q29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZT4pIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjb21wKSA9PiB7XG4gICAgICBpZiAoY29tcC5jbXBSZWYgJiYgY29tcC5jbXBSZWYuaW5zdGFuY2UudGFiVGl0bGVQYXJhbSQpIHtcbiAgICAgICAgdGhpcy50YWJUaXRsZVBhcmFtcy5wdXNoKGNvbXAuY21wUmVmLmluc3RhbmNlLnRhYlRpdGxlUGFyYW0kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFiVGl0bGVQYXJhbXMucHVzaChudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==