import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
let LinkComponent = class LinkComponent {
    constructor(component) {
        this.component = component;
    }
};
LinkComponent.ctorParameters = () => [
    { type: CmsComponentData }
];
LinkComponent = __decorate([
    Component({
        selector: 'cx-link',
        template: "<cx-generic-link\n  *ngIf=\"component.data$ | async as data\"\n  [url]=\"data.url\"\n  [style]=\"data.styleAttributes\"\n  >{{ data.linkName }}</cx-generic-link\n>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], LinkComponent);
export { LinkComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jb250ZW50L2xpbmsvbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFPeEYsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUN4QixZQUFtQixTQUE2QztRQUE3QyxjQUFTLEdBQVQsU0FBUyxDQUFvQztJQUFHLENBQUM7Q0FDckUsQ0FBQTs7WUFEK0IsZ0JBQWdCOztBQURuQyxhQUFhO0lBTHpCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxTQUFTO1FBQ25CLGlMQUFvQztRQUNwQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1csYUFBYSxDQUV6QjtTQUZZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNMaW5rQ29tcG9uZW50IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9saW5rLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIExpbmtDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29tcG9uZW50OiBDbXNDb21wb25lbnREYXRhPENtc0xpbmtDb21wb25lbnQ+KSB7fVxufVxuIl19