import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ViewChildren, } from '@angular/core';
import { CmsService, CMSTabParagraphContainer, WindowRef, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { ComponentWrapperDirective } from '../../../cms-structure/page/component/component-wrapper.directive';
import { CmsComponentData } from '../../../cms-structure/page/model/index';
let TabParagraphContainerComponent = class TabParagraphContainerComponent {
    constructor(componentData, cmsService, winRef) {
        this.componentData = componentData;
        this.cmsService = cmsService;
        this.winRef = winRef;
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
    select(tabNum) {
        this.activeTabNum = tabNum;
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
        template: "<ng-container *ngFor=\"let component of components$ | async; let i = index\">\n  <ng-container *ngIf=\"component\">\n    <button [class.active]=\"i === activeTabNum\" (click)=\"select(i)\">\n      {{ component.title | cxTranslate: { param: tabTitleParams[i] | async } }}\n    </button>\n    <div [class.active]=\"i === activeTabNum\">\n      <ng-template [cxOutlet]=\"component.flexType\" [cxOutletContext]=\"{}\">\n        <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n      </ng-template>\n    </div>\n  </ng-container>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], TabParagraphContainerComponent);
export { TabParagraphContainerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY29udGVudC90YWItcGFyYWdyYXBoLWNvbnRhaW5lci90YWItcGFyYWdyYXBoLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUlULFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsVUFBVSxFQUNWLHdCQUF3QixFQUN4QixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBTzNFLElBQWEsOEJBQThCLEdBQTNDLE1BQWEsOEJBQThCO0lBWXpDLFlBQ1MsYUFBeUQsRUFDdEQsVUFBc0IsRUFDdEIsTUFBaUI7UUFGcEIsa0JBQWEsR0FBYixhQUFhLENBQTRDO1FBQ3RELGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQWI3QixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQU1qQixtQkFBYyxHQUFzQixFQUFFLENBQUM7UUFVdkMsZ0JBQVcsR0FBc0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUM1RCxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUEsQ0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxD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QixDQXVGMUM7U0F2RlksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkcmVuLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc1NlcnZpY2UsXG4gIENNU1RhYlBhcmFncmFwaENvbnRhaW5lcixcbiAgV2luZG93UmVmLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtd3JhcHBlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXRhYi1wYXJhZ3JhcGgtY29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1wYXJhZ3JhcGgtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRhYlBhcmFncmFwaENvbnRhaW5lckNvbXBvbmVudFxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgYWN0aXZlVGFiTnVtID0gMDtcblxuICBAVmlld0NoaWxkcmVuKENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmUpIGNoaWxkcmVuITogUXVlcnlMaXN0PFxuICAgIENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmVcbiAgPjtcblxuICB0YWJUaXRsZVBhcmFtczogT2JzZXJ2YWJsZTxhbnk+W10gPSBbXTtcblxuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDTVNUYWJQYXJhZ3JhcGhDb250YWluZXI+LFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHt9XG5cbiAgY29tcG9uZW50cyQ6IE9ic2VydmFibGU8YW55W10+ID0gdGhpcy5jb21wb25lbnREYXRhLmRhdGEkLnBpcGUoXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKHgsIHkpID0+IHg/LmNvbXBvbmVudHMgPT09IHk/LmNvbXBvbmVudHMpLFxuICAgIHN3aXRjaE1hcCgoZGF0YSkgPT5cbiAgICAgIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgIChkYXRhPy5jb21wb25lbnRzID8/ICcnKS5zcGxpdCgnICcpLm1hcCgoY29tcG9uZW50KSA9PlxuICAgICAgICAgIHRoaXMuY21zU2VydmljZS5nZXRDb21wb25lbnREYXRhPGFueT4oY29tcG9uZW50KS5waXBlKFxuICAgICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgICAgIG1hcCgodGFiKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghdGFiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghdGFiLmZsZXhUeXBlKSB7XG4gICAgICAgICAgICAgICAgdGFiID0ge1xuICAgICAgICAgICAgICAgICAgLi4udGFiLFxuICAgICAgICAgICAgICAgICAgZmxleFR5cGU6IHRhYi50eXBlQ29kZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi50YWIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IGAke2RhdGEudWlkfS50YWJzLiR7dGFiLnVpZH1gLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgc2VsZWN0KHRhYk51bTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVUYWJOdW0gPSB0YWJOdW07XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZVRhYk51bSA9XG4gICAgICB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3c/Lmhpc3Rvcnk/LnN0YXRlPy5hY3RpdmVUYWIgPz8gdGhpcy5hY3RpdmVUYWJOdW07XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgLy8gSWYgdGhlIHN1YiBjbXMgY29tcG9uZW50cyBkYXRhIGV4aXN0LCB0aGUgY29tcG9uZW50cyBjcmVhdGVkIGJlZm9yZSBuZ0FmdGVyVmlld0luaXQgYXJlIGNhbGxlZC5cbiAgICAvLyBJbiB0aGlzIGNhc2UsIHRoZSB0aXRsZSBwYXJhbWV0ZXJzIGFyZSBkaXJlY3RseSBwdWxsZWQgZnJvbSB0aGVtLlxuICAgIC8vIElmIHRoZSBzdWIgY21zIGNvbXBvbmVudHMgZGF0YSBkb2VzIG5vdCBleGlzdCwgaXQgc2hvdWxkIHNob3VsZCBiZSBsb2FkZWQgZmlyc3QuXG4gICAgLy8gSW4gdGhpcyBjYXNlLCBsaXN0ZW4gdG8gdGhlIGNoYW5nZXMgdG8gd2FpdCBmb3IgdGhlbSB0byBiZSBjcmVhdGVkLlxuICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZ2V0VGl0bGVQYXJhbXModGhpcy5jaGlsZHJlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5jaGlsZHJlbi5jaGFuZ2VzLnN1YnNjcmliZShcbiAgICAgICAgKHRhYkNvbXBzOiBRdWVyeUxpc3Q8Q29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZT4pID0+XG4gICAgICAgICAgdGhpcy5nZXRUaXRsZVBhcmFtcyh0YWJDb21wcylcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRUaXRsZVBhcmFtcyhjaGlsZHJlbjogUXVlcnlMaXN0PENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmU+KSB7XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY29tcCkgPT4ge1xuICAgICAgaWYgKGNvbXAuY21wUmVmICYmIGNvbXAuY21wUmVmLmluc3RhbmNlLnRhYlRpdGxlUGFyYW0kKSB7XG4gICAgICAgIHRoaXMudGFiVGl0bGVQYXJhbXMucHVzaChjb21wLmNtcFJlZi5pbnN0YW5jZS50YWJUaXRsZVBhcmFtJCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhYlRpdGxlUGFyYW1zLnB1c2gobnVsbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=