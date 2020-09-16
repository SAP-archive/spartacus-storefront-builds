import { Component, ViewChild, ViewContainerRef, } from '@angular/core';
import { take } from 'rxjs/operators';
import { AnonymousConsentLaunchDialogService } from '../anonymous-consent-launch-dialog.service';
export class AnonymousConsentOpenDialogComponent {
    constructor(vcr, anonymousConsentLaunchDialogService) {
        this.vcr = vcr;
        this.anonymousConsentLaunchDialogService = anonymousConsentLaunchDialogService;
    }
    openDialog() {
        const dialog = this.anonymousConsentLaunchDialogService.openDialog(this.openElement, this.vcr);
        if (dialog) {
            dialog.pipe(take(1)).subscribe();
        }
    }
}
AnonymousConsentOpenDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-anonymous-consent-open-dialog',
                template: "<button #open class=\"btn btn-link\" (click)=\"openDialog()\">\n  {{ 'anonymousConsents.preferences' | cxTranslate }}\n</button>\n"
            },] }
];
AnonymousConsentOpenDialogComponent.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: AnonymousConsentLaunchDialogService }
];
AnonymousConsentOpenDialogComponent.propDecorators = {
    openElement: [{ type: ViewChild, args: ['open',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtb3Blbi1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC9vcGVuLWRpYWxvZy9hbm9ueW1vdXMtY29uc2VudC1vcGVuLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxTQUFTLEVBQ1QsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQU1qRyxNQUFNLE9BQU8sbUNBQW1DO0lBRzlDLFlBQ1ksR0FBcUIsRUFDckIsbUNBQXdFO1FBRHhFLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBcUM7SUFDakYsQ0FBQztJQUVKLFVBQVU7UUFDUixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsbUNBQW1DLENBQUMsVUFBVSxDQUNoRSxJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsR0FBRyxDQUNULENBQUM7UUFDRixJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLDhJQUE2RDthQUM5RDs7O1lBUkMsZ0JBQWdCO1lBR1QsbUNBQW1DOzs7MEJBT3pDLFNBQVMsU0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRMYXVuY2hEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vYW5vbnltb3VzLWNvbnNlbnQtbGF1bmNoLWRpYWxvZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYW5vbnltb3VzLWNvbnNlbnQtb3Blbi1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vYW5vbnltb3VzLWNvbnNlbnQtb3Blbi1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ29wZW4nKSBvcGVuRWxlbWVudDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByb3RlY3RlZCBhbm9ueW1vdXNDb25zZW50TGF1bmNoRGlhbG9nU2VydmljZTogQW5vbnltb3VzQ29uc2VudExhdW5jaERpYWxvZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gICAgY29uc3QgZGlhbG9nID0gdGhpcy5hbm9ueW1vdXNDb25zZW50TGF1bmNoRGlhbG9nU2VydmljZS5vcGVuRGlhbG9nKFxuICAgICAgdGhpcy5vcGVuRWxlbWVudCxcbiAgICAgIHRoaXMudmNyXG4gICAgKTtcbiAgICBpZiAoZGlhbG9nKSB7XG4gICAgICBkaWFsb2cucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==