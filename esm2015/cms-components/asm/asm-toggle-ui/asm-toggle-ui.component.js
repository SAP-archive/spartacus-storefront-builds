import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { AsmService } from '@spartacus/core';
import { Subscription } from 'rxjs';
let AsmToggleUiComponent = class AsmToggleUiComponent {
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
};
AsmToggleUiComponent.ctorParameters = () => [
    { type: AsmService }
];
AsmToggleUiComponent = __decorate([
    Component({
        selector: 'cx-asm-toggle-ui',
        template: "<a class=\"toggleUi\" (click)=\"toggleUi()\">\n  <span [ngClass]=\"!isCollapsed ? 'collapseIcon' : 'expandIcon'\"></span>\n  <span *ngIf=\"!isCollapsed\" class=\"label\">\n    {{ 'asm.toggleUi.collapse' | cxTranslate }}\n  </span>\n  <span *ngIf=\"isCollapsed\" class=\"label\">\n    {{ 'asm.toggleUi.expand' | cxTranslate }}\n  </span>\n</a>\n",
        encapsulation: ViewEncapsulation.None,
        styles: ["cx-asm-toggle-ui{cursor:pointer;display:flex;align-items:center;height:16px;margin:0 15px}cx-asm-toggle-ui .toggleUi{display:inherit;align-items:inherit}cx-asm-toggle-ui .toggleUi .label{margin-left:5px}@media (max-width:575px){cx-asm-toggle-ui .toggleUi .label{display:none}}cx-asm-toggle-ui .toggleUi .collapseIcon,cx-asm-toggle-ui .toggleUi .expandIcon{width:16px;height:16px}cx-asm-toggle-ui .toggleUi .collapseIcon{background:url(\"data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-circle-up' class='svg-inline--fa fa-chevron-circle-up fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23d1e3ff' d='M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm231-113.9L103.5 277.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L256 226.9l101.6 101.6c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L273 142.1c-9.4-9.4-24.6-9.4-34 0z'%3E%3C/path%3E%3C/svg%3E\") center center no-repeat}cx-asm-toggle-ui .toggleUi .expandIcon{background:url(\"data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-circle-down' class='svg-inline--fa fa-chevron-circle-down fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23d1e3ff' d='M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z'%3E%3C/path%3E%3C/svg%3E\") center center no-repeat}"]
    })
], AsmToggleUiComponent);
export { AsmToggleUiComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLXRvZ2dsZS11aS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9hc20vYXNtLXRvZ2dsZS11aS9hc20tdG9nZ2xlLXVpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFRcEMsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFJL0IsWUFBc0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUhwQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFHSyxDQUFDO0lBRWhELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNwRCxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0NBQ0YsQ0FBQTs7WUFqQm1DLFVBQVU7O0FBSmpDLG9CQUFvQjtJQU5oQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLG9XQUE2QztRQUU3QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7S0FDdEMsQ0FBQztHQUNXLG9CQUFvQixDQXFCaEM7U0FyQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFzbVNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFzbS10b2dnbGUtdWknLFxuICB0ZW1wbGF0ZVVybDogJy4vYXNtLXRvZ2dsZS11aS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FzbS10b2dnbGUtdWkuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQXNtVG9nZ2xlVWlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBpc0NvbGxhcHNlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYXNtU2VydmljZTogQXNtU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmFzbVNlcnZpY2UuZ2V0QXNtVWlTdGF0ZSgpLnN1YnNjcmliZSgodWlTdGF0ZSkgPT4ge1xuICAgICAgICB0aGlzLmlzQ29sbGFwc2VkID0gdWlTdGF0ZS5jb2xsYXBzZWQ7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICB0b2dnbGVVaSgpOiB2b2lkIHtcbiAgICB0aGlzLmFzbVNlcnZpY2UudXBkYXRlQXNtVWlTdGF0ZSh7IGNvbGxhcHNlZDogIXRoaXMuaXNDb2xsYXBzZWQgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=