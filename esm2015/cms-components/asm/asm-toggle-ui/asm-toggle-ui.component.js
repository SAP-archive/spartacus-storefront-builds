import { Component, ViewEncapsulation } from '@angular/core';
import { AsmService } from '@spartacus/core';
import { Subscription } from 'rxjs';
export class AsmToggleUiComponent {
    constructor(asmService) {
        this.asmService = asmService;
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.subscription.add(this.asmService.getAsmUiState().subscribe((uiState) => {
            this.isCollapsed = uiState.collapsed;
        }));
    }
    toggleUi() {
        this.asmService.updateAsmUiState({ collapsed: !this.isCollapsed });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
AsmToggleUiComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-asm-toggle-ui',
                template: "<a class=\"toggleUi\" (click)=\"toggleUi()\">\n  <span [ngClass]=\"!isCollapsed ? 'collapseIcon' : 'expandIcon'\"></span>\n  <span *ngIf=\"!isCollapsed\" class=\"label\">\n    {{ 'asm.toggleUi.collapse' | cxTranslate }}\n  </span>\n  <span *ngIf=\"isCollapsed\" class=\"label\">\n    {{ 'asm.toggleUi.expand' | cxTranslate }}\n  </span>\n</a>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["cx-asm-toggle-ui{align-items:center;cursor:pointer;display:flex;height:16px;margin:0 15px}cx-asm-toggle-ui .toggleUi{align-items:inherit;display:inherit}cx-asm-toggle-ui .toggleUi .label{-webkit-margin-start:5px;margin-inline-start:5px}@media (max-width:575px){cx-asm-toggle-ui .toggleUi .label{display:none}}cx-asm-toggle-ui .toggleUi .collapseIcon,cx-asm-toggle-ui .toggleUi .expandIcon{height:16px;width:16px}cx-asm-toggle-ui .toggleUi .collapseIcon{background:url(\"data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-circle-up' class='svg-inline--fa fa-chevron-circle-up fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23d1e3ff' d='M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm231-113.9L103.5 277.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L256 226.9l101.6 101.6c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L273 142.1c-9.4-9.4-24.6-9.4-34 0z'%3E%3C/path%3E%3C/svg%3E\") 50% no-repeat}cx-asm-toggle-ui .toggleUi .expandIcon{background:url(\"data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-circle-down' class='svg-inline--fa fa-chevron-circle-down fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23d1e3ff' d='M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z'%3E%3C/path%3E%3C/svg%3E\") 50% no-repeat}"]
            },] }
];
AsmToggleUiComponent.ctorParameters = () => [
    { type: AsmService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLXRvZ2dsZS11aS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9hc20vYXNtLXRvZ2dsZS11aS9hc20tdG9nZ2xlLXVpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQVFwQyxNQUFNLE9BQU8sb0JBQW9CO0lBSS9CLFlBQXNCLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFIcEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBR0ssQ0FBQztJQUVoRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDcEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7O1lBMUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixvV0FBNkM7Z0JBRTdDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7O1lBUlEsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBc21TZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hc20tdG9nZ2xlLXVpJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FzbS10b2dnbGUtdWkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hc20tdG9nZ2xlLXVpLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEFzbVRvZ2dsZVVpQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgaXNDb2xsYXBzZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFzbVNlcnZpY2U6IEFzbVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5hc21TZXJ2aWNlLmdldEFzbVVpU3RhdGUoKS5zdWJzY3JpYmUoKHVpU3RhdGUpID0+IHtcbiAgICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9IHVpU3RhdGUuY29sbGFwc2VkO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgdG9nZ2xlVWkoKTogdm9pZCB7XG4gICAgdGhpcy5hc21TZXJ2aWNlLnVwZGF0ZUFzbVVpU3RhdGUoeyBjb2xsYXBzZWQ6ICF0aGlzLmlzQ29sbGFwc2VkIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19