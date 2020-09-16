import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { LaunchDialogService, LAUNCH_CALLER, } from '../../layout/launch-dialog/index';
import * as i0 from "@angular/core";
import * as i1 from "../../layout/launch-dialog/services/launch-dialog.service";
export class AnonymousConsentLaunchDialogService {
    constructor(launchDialogService) {
        this.launchDialogService = launchDialogService;
    }
    openDialog(openElement, vcr) {
        const component = this.launchDialogService.launch(LAUNCH_CALLER.ANONYMOUS_CONSENT, vcr);
        if (component) {
            return combineLatest([
                component,
                this.launchDialogService.dialogClose,
            ]).pipe(filter(([, close]) => close && close !== undefined), tap(([comp]) => {
                openElement === null || openElement === void 0 ? void 0 : openElement.nativeElement.focus();
                this.launchDialogService.clear(LAUNCH_CALLER.ANONYMOUS_CONSENT);
                comp.destroy();
            }), map(([comp]) => comp));
        }
    }
}
AnonymousConsentLaunchDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AnonymousConsentLaunchDialogService_Factory() { return new AnonymousConsentLaunchDialogService(i0.ɵɵinject(i1.LaunchDialogService)); }, token: AnonymousConsentLaunchDialogService, providedIn: "root" });
AnonymousConsentLaunchDialogService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
AnonymousConsentLaunchDialogService.ctorParameters = () => [
    { type: LaunchDialogService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtbGF1bmNoLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC9hbm9ueW1vdXMtY29uc2VudC1sYXVuY2gtZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFVBQVUsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGFBQWEsR0FDZCxNQUFNLGtDQUFrQyxDQUFDOzs7QUFHMUMsTUFBTSxPQUFPLG1DQUFtQztJQUM5QyxZQUFzQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUFHLENBQUM7SUFFbEUsVUFBVSxDQUNSLFdBQXdCLEVBQ3hCLEdBQXNCO1FBRXRCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQy9DLGFBQWEsQ0FBQyxpQkFBaUIsRUFDL0IsR0FBRyxDQUNKLENBQUM7UUFFRixJQUFJLFNBQVMsRUFBRTtZQUNiLE9BQU8sYUFBYSxDQUFDO2dCQUNuQixTQUFTO2dCQUNULElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXO2FBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQ0wsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLFNBQVMsQ0FBQyxFQUNuRCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ2IsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLGFBQWEsQ0FBQyxLQUFLLEdBQUc7Z0JBQ25DLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDdEIsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7OztZQTNCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7WUFKaEMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIExhdW5jaERpYWxvZ1NlcnZpY2UsXG4gIExBVU5DSF9DQUxMRVIsXG59IGZyb20gJy4uLy4uL2xheW91dC9sYXVuY2gtZGlhbG9nL2luZGV4JztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50TGF1bmNoRGlhbG9nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBsYXVuY2hEaWFsb2dTZXJ2aWNlOiBMYXVuY2hEaWFsb2dTZXJ2aWNlKSB7fVxuXG4gIG9wZW5EaWFsb2coXG4gICAgb3BlbkVsZW1lbnQ/OiBFbGVtZW50UmVmLFxuICAgIHZjcj86IFZpZXdDb250YWluZXJSZWZcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmxhdW5jaERpYWxvZ1NlcnZpY2UubGF1bmNoKFxuICAgICAgTEFVTkNIX0NBTExFUi5BTk9OWU1PVVNfQ09OU0VOVCxcbiAgICAgIHZjclxuICAgICk7XG5cbiAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICAgIGNvbXBvbmVudCxcbiAgICAgICAgdGhpcy5sYXVuY2hEaWFsb2dTZXJ2aWNlLmRpYWxvZ0Nsb3NlLFxuICAgICAgXSkucGlwZShcbiAgICAgICAgZmlsdGVyKChbLCBjbG9zZV0pID0+IGNsb3NlICYmIGNsb3NlICE9PSB1bmRlZmluZWQpLFxuICAgICAgICB0YXAoKFtjb21wXSkgPT4ge1xuICAgICAgICAgIG9wZW5FbGVtZW50Py5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgdGhpcy5sYXVuY2hEaWFsb2dTZXJ2aWNlLmNsZWFyKExBVU5DSF9DQUxMRVIuQU5PTllNT1VTX0NPTlNFTlQpO1xuICAgICAgICAgIGNvbXAuZGVzdHJveSgpO1xuICAgICAgICB9KSxcbiAgICAgICAgbWFwKChbY29tcF0pID0+IGNvbXApXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19