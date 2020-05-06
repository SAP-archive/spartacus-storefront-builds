import { __decorate } from "tslib";
import { Component, ElementRef, ViewChild, ViewContainerRef, } from '@angular/core';
import { take } from 'rxjs/operators';
import { AnonymousConsentLaunchDialogService } from '../anonymous-consent-launch-dialog.service';
var AnonymousConsentOpenDialogComponent = /** @class */ (function () {
    function AnonymousConsentOpenDialogComponent(vcr, anonymousConsentLaunchDialogService) {
        this.vcr = vcr;
        this.anonymousConsentLaunchDialogService = anonymousConsentLaunchDialogService;
    }
    AnonymousConsentOpenDialogComponent.prototype.openDialog = function () {
        var dialog = this.anonymousConsentLaunchDialogService.openDialog(this.openElement, this.vcr);
        if (dialog) {
            dialog.pipe(take(1)).subscribe();
        }
    };
    AnonymousConsentOpenDialogComponent.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: AnonymousConsentLaunchDialogService }
    ]; };
    __decorate([
        ViewChild('open')
    ], AnonymousConsentOpenDialogComponent.prototype, "openElement", void 0);
    AnonymousConsentOpenDialogComponent = __decorate([
        Component({
            selector: 'cx-anonymous-consent-open-dialog',
            template: "<button #open class=\"btn btn-link\" (click)=\"openDialog()\">\n  {{ 'anonymousConsents.preferences' | cxTranslate }}\n</button>\n"
        })
    ], AnonymousConsentOpenDialogComponent);
    return AnonymousConsentOpenDialogComponent;
}());
export { AnonymousConsentOpenDialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtb3Blbi1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC9vcGVuLWRpYWxvZy9hbm9ueW1vdXMtY29uc2VudC1vcGVuLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBTWpHO0lBR0UsNkNBQ1ksR0FBcUIsRUFDckIsbUNBQXdFO1FBRHhFLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBcUM7SUFDakYsQ0FBQztJQUVKLHdEQUFVLEdBQVY7UUFDRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsbUNBQW1DLENBQUMsVUFBVSxDQUNoRSxJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsR0FBRyxDQUNULENBQUM7UUFDRixJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDOztnQkFaZ0IsZ0JBQWdCO2dCQUNnQixtQ0FBbUM7O0lBSmpFO1FBQWxCLFNBQVMsQ0FBQyxNQUFNLENBQUM7NEVBQXlCO0lBRGhDLG1DQUFtQztRQUovQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0NBQWtDO1lBQzVDLDhJQUE2RDtTQUM5RCxDQUFDO09BQ1csbUNBQW1DLENBaUIvQztJQUFELDBDQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FqQlksbUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRMYXVuY2hEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vYW5vbnltb3VzLWNvbnNlbnQtbGF1bmNoLWRpYWxvZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYW5vbnltb3VzLWNvbnNlbnQtb3Blbi1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vYW5vbnltb3VzLWNvbnNlbnQtb3Blbi1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ29wZW4nKSBvcGVuRWxlbWVudDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByb3RlY3RlZCBhbm9ueW1vdXNDb25zZW50TGF1bmNoRGlhbG9nU2VydmljZTogQW5vbnltb3VzQ29uc2VudExhdW5jaERpYWxvZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gICAgY29uc3QgZGlhbG9nID0gdGhpcy5hbm9ueW1vdXNDb25zZW50TGF1bmNoRGlhbG9nU2VydmljZS5vcGVuRGlhbG9nKFxuICAgICAgdGhpcy5vcGVuRWxlbWVudCxcbiAgICAgIHRoaXMudmNyXG4gICAgKTtcbiAgICBpZiAoZGlhbG9nKSB7XG4gICAgICBkaWFsb2cucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==