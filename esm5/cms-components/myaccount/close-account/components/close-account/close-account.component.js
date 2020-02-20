import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CloseAccountModalComponent } from '../close-account-modal/close-account-modal.component';
import { ModalService } from '../../../../../shared/components/modal/index';
var CloseAccountComponent = /** @class */ (function () {
    function CloseAccountComponent(modalService) {
        this.modalService = modalService;
    }
    CloseAccountComponent.prototype.openModal = function () {
        this.modal = this.modalService.open(CloseAccountModalComponent, {
            centered: true,
        }).componentInstance;
    };
    CloseAccountComponent.ctorParameters = function () { return [
        { type: ModalService }
    ]; };
    CloseAccountComponent = __decorate([
        Component({
            selector: 'cx-close-account',
            template: "<div class=\"col-lg-8 col-md-9\">\n  <div class=\"row cx-btn-group\">\n    <div class=\"col-sm-3\">\n      <a\n        [routerLink]=\"{ cxRoute: 'home' } | cxUrl\"\n        class=\"btn btn-block btn-secondary\"\n        >{{ 'common.cancel' | cxTranslate }}</a\n      >\n    </div>\n    <div class=\"col-sm-6\">\n      <button class=\"btn btn-primary\" (click)=\"openModal()\">\n        {{ 'closeAccount.closeMyAccount' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CloseAccountComponent);
    return CloseAccountComponent;
}());
export { CloseAccountComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtYWNjb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvY2xvc2UtYWNjb3VudC9jb21wb25lbnRzL2Nsb3NlLWFjY291bnQvY2xvc2UtYWNjb3VudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDbEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBTzVFO0lBRUUsK0JBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUcsQ0FBQztJQUVsRCx5Q0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRTtZQUM5RCxRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztJQUN2QixDQUFDOztnQkFOaUMsWUFBWTs7SUFGbkMscUJBQXFCO1FBTGpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsZ2ZBQTZDO1lBQzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxxQkFBcUIsQ0FTakM7SUFBRCw0QkFBQztDQUFBLEFBVEQsSUFTQztTQVRZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xvc2VBY2NvdW50TW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9jbG9zZS1hY2NvdW50LW1vZGFsL2Nsb3NlLWFjY291bnQtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2xvc2UtYWNjb3VudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jbG9zZS1hY2NvdW50LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENsb3NlQWNjb3VudENvbXBvbmVudCB7XG4gIG1vZGFsOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UpIHt9XG5cbiAgb3Blbk1vZGFsKCk6IHZvaWQge1xuICAgIHRoaXMubW9kYWwgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKENsb3NlQWNjb3VudE1vZGFsQ29tcG9uZW50LCB7XG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICB9KS5jb21wb25lbnRJbnN0YW5jZTtcbiAgfVxufVxuIl19