import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AnonymousConsentDialogComponent } from '../../../shared/components/anonymous-consents/dialog/anonymous-consent-dialog.component';
import { ModalService } from '../../../shared/components/modal/modal.service';
var AnonymousConsentOpenDialogComponent = /** @class */ (function () {
    function AnonymousConsentOpenDialogComponent(modalService) {
        this.modalService = modalService;
    }
    AnonymousConsentOpenDialogComponent.prototype.openDialog = function () {
        this.modalService.open(AnonymousConsentDialogComponent, {
            centered: true,
            size: 'lg',
        });
    };
    AnonymousConsentOpenDialogComponent.ctorParameters = function () { return [
        { type: ModalService }
    ]; };
    AnonymousConsentOpenDialogComponent = __decorate([
        Component({
            selector: 'cx-anonymous-consent-open-dialog',
            template: "<div class=\"anonymous-consents\">\n  <button class=\"btn btn-link\" (click)=\"openDialog()\">\n    {{ 'anonymousConsents.preferences' | cxTranslate }}\n  </button>\n</div>\n"
        })
    ], AnonymousConsentOpenDialogComponent);
    return AnonymousConsentOpenDialogComponent;
}());
export { AnonymousConsentOpenDialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtb3Blbi1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC9vcGVuLWRpYWxvZy9hbm9ueW1vdXMtY29uc2VudC1vcGVuLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seUZBQXlGLENBQUM7QUFDMUksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBTTlFO0lBQ0UsNkNBQXNCLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUcsQ0FBQztJQUVwRCx3REFBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUU7WUFDdEQsUUFBUSxFQUFFLElBQUk7WUFDZCxJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQVBtQyxZQUFZOztJQURyQyxtQ0FBbUM7UUFKL0MsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtDQUFrQztZQUM1QywwTEFBNkQ7U0FDOUQsQ0FBQztPQUNXLG1DQUFtQyxDQVMvQztJQUFELDBDQUFDO0NBQUEsQUFURCxJQVNDO1NBVFksbUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnRzL2RpYWxvZy9hbm9ueW1vdXMtY29uc2VudC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hbm9ueW1vdXMtY29uc2VudC1vcGVuLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbm9ueW1vdXMtY29uc2VudC1vcGVuLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRPcGVuRGlhbG9nQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlKSB7fVxuXG4gIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gICAgdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihBbm9ueW1vdXNDb25zZW50RGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHNpemU6ICdsZycsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==